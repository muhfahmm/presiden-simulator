package pembangunan

import (
	"encoding/json"
	"fmt"
	"os/exec"
	"sync"
	"emserver/core"
)

func ProcessDaily(dateStr string) {
	// 1. Snapshot available building types for the AI
	// We convert core.BuildingTypes to a format Python understands
	type PyOption struct {
		Key              string         `json:"key"`
		Label            string         `json:"label"`
		BiayaPembangunan int64          `json:"biaya_pembangunan"`
		Requirements     map[string]int `json:"requirements"`
	}
	options := make([]PyOption, len(core.BuildingTypes))
	for i, b := range core.BuildingTypes {
		options[i] = PyOption{
			Key:              b.Key,
			Label:            b.Name,
			BiayaPembangunan: b.Biaya,
			Requirements:     make(map[string]int), // We can expand this later
		}
	}

	// 2. Select a subset of nations to act today to save CPU
	// USER REQUEST: Increase probability to 80% daily
	isConstructionBoom := core.Rng.Intn(100) < 80
	numBuilders := 5 + core.Rng.Intn(10) // default 5-15
	if isConstructionBoom {
		numBuilders = 30 + core.Rng.Intn(20) // 30-50 nations during boom
	}

	shuffled := make([]string, 0, len(core.NpcNations))
	for _, nation := range core.NpcNations {
		shuffled = append(shuffled, nation)
	}
	core.Rng.Shuffle(len(shuffled), func(i, j int) {
		shuffled[i], shuffled[j] = shuffled[j], shuffled[i]
	})

	newsLimit := 15
	newsCount := 0
	var newsMu sync.Mutex

	// Concurrency control: Limit number of parallel Python processes to prevent CPU spike
	semaphore := make(chan struct{}, 5)
	var wg sync.WaitGroup

	for k := 0; k < numBuilders && k < len(shuffled); k++ {
		nationName := shuffled[k]
		state, exists := core.GlobalState.NPCStates[nationName]
		if !exists {
			continue
		}

		wg.Add(1)
		semaphore <- struct{}{} // Acquire slot

		go func(nation string, nState *core.NPCNationState) {
			defer wg.Done()
			defer func() { <-semaphore }() // Release slot

			// Prepare Payload for Python (local copy of options is safe)
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
				Decision    string `json:"decision"`
				BuildingKey string `json:"building_key"`
				Quantity    int    `json:"quantity"`
				Reason      string `json:"reason"`
				Cost        float64 `json:"cost"`
				Error       string  `json:"error"`
			}

			if err := json.NewDecoder(stdout).Decode(&result); err == nil {
				cmd.Wait()
				if result.Decision == "EXECUTE" {
					// 1. Update Server State (Locked)
					core.GlobalState.Mu.Lock()
					if core.GlobalState.NPCBuildingLevels[nation] == nil {
						core.GlobalState.NPCBuildingLevels[nation] = make(map[string]int)
					}
					core.GlobalState.NPCBuildingLevels[nation][result.BuildingKey] += result.Quantity
					nState.Budget -= result.Cost
					core.GlobalState.Mu.Unlock()

					// 2. Broadcast News (Locked)
					newsMu.Lock()
					if newsCount < newsLimit {
						core.AddNewsItemLocked(
							fmt.Sprintf("Kantor Berita %s", nation),
							fmt.Sprintf("AI Pembangunan: %s", nation),
							result.Reason,
							"construction",
							"medium",
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
