package pembangunan

import (
	"encoding/json"
	"fmt"
	"math"
	"os/exec"
	"sync"
	"emserver/core"
)

// ═══════════════════════════════════════════════════════════
// REALISTIC CONSTRUCTION ENGINE
// - Weekly: Random subset of 20-50 NPC nations build + news
// - Daily: 5-15 random nations build silently (no news)
// - Player's country is ALWAYS excluded
// ═══════════════════════════════════════════════════════════

var constructionTemplates = []string{
	"Pemerintah %s mengumumkan pembangunan %d unit %s baru. Proyek ini diharapkan memperkuat infrastruktur nasional.",
	"Otoritas pembangunan %s merilis rencana pembangunan %d unit %s guna meningkatkan kapasitas layanan publik.",
	"Dalam langkah strategis, %s memulai konstruksi %d unit %s untuk mendukung pertumbuhan ekonomi domestik.",
	"Kementerian PU %s mengonfirmasi proyek pembangunan %d unit %s sebagai bagian dari agenda pembangunan tahunan.",
	"Pemimpin %s meresmikan proyek infrastruktur baru: pembangunan %d unit %s dimulai hari ini.",
	"%s mengalokasikan anggaran untuk membangun %d unit %s demi kesejahteraan rakyat.",
	"Sektor konstruksi %s mencatat aktivitas baru dengan dimulainya pembangunan %d unit %s.",
	"Program pembangunan nasional %s berlanjut dengan proyek %d unit %s yang diumumkan hari ini.",
}

const MIN_BUDGET_TO_BUILD = 50.0

func ProcessDaily(dateStr string) bool {
	if len(core.BuildingTypes) == 0 || len(core.NpcNations) == 0 {
		return false
	}

	day := core.GlobalState.DayCounter
	isWeeklyBatch := day%7 == 0 || day <= 1

	changed := false
	if isWeeklyBatch {
		changed = processWeeklyConstruction(dateStr)
	} else {
		changed = processDailyConstruction(dateStr)
	}

	// Background Python smart builds (20% weekly chance)
	if isWeeklyBatch && core.Rng.Intn(100) < 20 {
		go processSmartConstruction(dateStr)
	}

	return changed
}

// getShuffledNPCs returns a shuffled copy of NPC nations, excluding the player's country.
func getShuffledNPCs() []string {
	playerCountry := core.GlobalState.Player.Country
	filtered := make([]string, 0, len(core.NpcNations))
	for _, nation := range core.NpcNations {
		if nation != playerCountry {
			filtered = append(filtered, nation)
		}
	}
	core.Rng.Shuffle(len(filtered), func(i, j int) {
		filtered[i], filtered[j] = filtered[j], filtered[i]
	})
	return filtered
}

// processWeeklyConstruction picks 20-50 random NPC nations to build + generate news.
// Caller must already hold core.GlobalState.Mu lock.
func processWeeklyConstruction(dateStr string) bool {
	shuffled := getShuffledNPCs()

	// Pick 20-50 random nations (not all 207)
	numBuilders := 20 + core.Rng.Intn(31)
	if numBuilders > len(shuffled) {
		numBuilders = len(shuffled)
	}

	newsGenerated := 0
	nationsBuilt := 0

	for k := 0; k < numBuilders; k++ {
		nation := shuffled[k]
		state, exists := core.GlobalState.NPCStates[nation]
		if !exists || state.Budget < 1.0 { 
			continue
		}

		spendRatio := getSpendRatio(state)
		maxSpend := state.Budget * spendRatio

		idx := core.Rng.Intn(len(core.BuildingTypes))
		building := core.BuildingTypes[idx]

		keyToUse := building.DataKey
		if keyToUse == "" {
			keyToUse = building.Key
		}

		unitCost := float64(building.Biaya)
		if unitCost <= 0 {
			unitCost = 1
		}
		quantity := int(maxSpend / unitCost)
		if quantity <= 0 {
			quantity = 1
		}
		if quantity > 10 {
			quantity = 1 + core.Rng.Intn(10)
		}

		cost := unitCost * float64(quantity)

		if core.GlobalState.NPCBuildingLevels[nation] == nil {
			core.GlobalState.NPCBuildingLevels[nation] = make(map[string]int)
		}
		core.GlobalState.NPCBuildingLevels[nation][keyToUse] += quantity
		state.Budget = math.Max(0, state.Budget-cost)
		nationsBuilt++

		// Generate news
		template := constructionTemplates[core.Rng.Intn(len(constructionTemplates))]
		content := fmt.Sprintf(template, nation, quantity, building.Name)

		core.AddNewsItemLocked(
			fmt.Sprintf("Kantor Berita %s", nation),
			fmt.Sprintf("Pembangunan Infrastruktur: %s", nation),
			content,
			"construction",
			"medium",
			dateStr,
		)
		newsGenerated++
	}

	fmt.Printf("[GO] AI Construction (WEEKLY): %d/%d nations built, %d news\n",
		nationsBuilt, numBuilders, newsGenerated)
	return nationsBuilt > 0
}

// processDailyConstruction: 5-15 random NPC nations build silently (no news).
// Caller must already hold core.GlobalState.Mu lock.
func processDailyConstruction(dateStr string) bool {
	shuffled := getShuffledNPCs()

	numBuilders := 5 + core.Rng.Intn(11)
	if numBuilders > len(shuffled) {
		numBuilders = len(shuffled)
	}

	nationsBuilt := 0
	for k := 0; k < numBuilders; k++ {
		nation := shuffled[k]
		state, exists := core.GlobalState.NPCStates[nation]
		if !exists || state.Budget < MIN_BUDGET_TO_BUILD {
			continue
		}

		spendRatio := 0.01 + core.Rng.Float64()*0.02
		maxSpend := state.Budget * spendRatio

		idx := core.Rng.Intn(len(core.BuildingTypes))
		building := core.BuildingTypes[idx]

		keyToUse := building.DataKey
		if keyToUse == "" {
			keyToUse = building.Key
		}

		unitCost := float64(building.Biaya)
		if unitCost <= 0 {
			unitCost = 1
		}
		quantity := int(maxSpend / unitCost)
		if quantity <= 0 {
			continue
		}
		if quantity > 5 {
			quantity = 1 + core.Rng.Intn(5)
		}

		cost := unitCost * float64(quantity)

		if core.GlobalState.NPCBuildingLevels[nation] == nil {
			core.GlobalState.NPCBuildingLevels[nation] = make(map[string]int)
		}
		core.GlobalState.NPCBuildingLevels[nation][keyToUse] += quantity
		state.Budget = math.Max(0, state.Budget-cost)
		nationsBuilt++
	}

	fmt.Printf("[GO] AI Construction (daily): %d nations built silently\n", nationsBuilt)
	return nationsBuilt > 0
}

func getSpendRatio(state *core.NPCNationState) float64 {
	switch {
	case state.Budget > 100000:
		return 0.05 + core.Rng.Float64()*0.03
	case state.Budget > 10000:
		return 0.03 + core.Rng.Float64()*0.02
	case state.Budget > 1000:
		return 0.02 + core.Rng.Float64()*0.01
	default:
		return 0.02
	}
}

// processSmartConstruction: Python AI brain for smarter builds (background goroutine).
func processSmartConstruction(dateStr string) {
	playerCountry := core.GlobalState.Player.Country

	type PyOption struct {
		Key              string         `json:"key"`
		Label            string         `json:"label"`
		BiayaPembangunan int64          `json:"biaya_pembangunan"`
		Requirements     map[string]int `json:"requirements"`
	}
	options := make([]PyOption, len(core.BuildingTypes))
	for i, b := range core.BuildingTypes {
		keyToUse := b.DataKey
		if keyToUse == "" {
			keyToUse = b.Key
		}
		options[i] = PyOption{
			Key:              keyToUse,
			Label:            b.Name,
			BiayaPembangunan: b.Biaya,
			Requirements:     make(map[string]int),
		}
	}

	shuffled := getShuffledNPCs()
	numBuilders := 10 + core.Rng.Intn(11)
	if numBuilders > len(shuffled) {
		numBuilders = len(shuffled)
	}

	newsLimit := 10
	newsCount := 0
	var newsMu sync.Mutex
	semaphore := make(chan struct{}, 5)
	var wg sync.WaitGroup

	for k := 0; k < numBuilders; k++ {
		nationName := shuffled[k]
		if nationName == playerCountry {
			continue
		}
		state, exists := core.GlobalState.NPCStates[nationName]
		if !exists || state.Budget < MIN_BUDGET_TO_BUILD {
			continue
		}

		wg.Add(1)
		semaphore <- struct{}{}

		go func(nation string, nState *core.NPCNationState) {
			defer wg.Done()
			defer func() { <-semaphore }()

			payload := map[string]interface{}{
				"negara":    nation,
				"budget":    nState.Budget,
				"income":    nState.DailyIncome,
				"pop":       nState.Population,
				"buildings": core.GlobalState.NPCBuildingLevels[nation],
				"stocks":    make(map[string]int),
				"options":   options,
			}
			jsonPayload, _ := json.Marshal(payload)

			pyScript := "C:/fhm/em/app/frontend/src/app/game/components/AI_logic/5_AI_Pembangunan/pusat_keputusan_pembangunan/brain/otak_pembangunan.py"
			cmd := exec.Command("python", pyScript)

			stdout, err := cmd.StdoutPipe()
			if err != nil { return }
			stdin, err := cmd.StdinPipe()
			if err != nil { return }
			if err := cmd.Start(); err != nil { return }

			stdin.Write(jsonPayload)
			stdin.Close()

			var result struct {
				Decision    string  `json:"decision"`
				BuildingKey string  `json:"building_key"`
				Quantity    int     `json:"quantity"`
				Reason      string  `json:"reason"`
				Cost        float64 `json:"cost"`
				Error       string  `json:"error"`
			}

			if err := json.NewDecoder(stdout).Decode(&result); err == nil {
				cmd.Wait()
				if result.Decision == "EXECUTE" {
					core.GlobalState.Mu.Lock()
					if core.GlobalState.NPCBuildingLevels[nation] == nil {
						core.GlobalState.NPCBuildingLevels[nation] = make(map[string]int)
					}
					core.GlobalState.NPCBuildingLevels[nation][result.BuildingKey] += result.Quantity
					nState.Budget -= result.Cost
					core.GlobalState.Mu.Unlock()

					newsMu.Lock()
					if newsCount < newsLimit {
						core.AddNewsItem(
							fmt.Sprintf("Kantor Berita %s", nation),
							fmt.Sprintf("Proyek Strategis: %s", nation),
							result.Reason,
							"construction",
							"high",
							dateStr,
						)
						newsCount++
					}
					newsMu.Unlock()
				}
			} else {
				cmd.Process.Kill()
			}
		}(nationName, state)
	}

	wg.Wait()
}
