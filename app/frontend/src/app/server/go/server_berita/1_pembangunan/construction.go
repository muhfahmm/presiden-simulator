package pembangunan

import (
	"encoding/json"
	"fmt"
	"os/exec"
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

	for k := 0; k < numBuilders && k < len(shuffled); k++ {
		nationName := shuffled[k]
		state, exists := core.GlobalState.NPCStates[nationName]
		if !exists {
			continue
		}

		// Prepare Payload for Python
		payload := map[string]interface{}{
			"negara":    nationName,
			"budget":    state.Budget,
			"income":    state.DailyIncome,
			"pop":       state.Population,
			"buildings": core.GlobalState.NPCBuildingLevels[nationName],
			"stocks":    make(map[string]int), // Placeholder for real supply chain
			"options":   options,
		}
		jsonPayload, _ := json.Marshal(payload)

		// Call Python AI (Modular)
		// Path absolute to ensure it works regardless of CWD
		pyScript := "C:/fhm/em/app/frontend/src/app/game/components/AI_logic/5_AI_Pembangunan/pusat_keputusan_pembangunan/brain/otak_pembangunan.py"
		cmd := exec.Command("python", pyScript)
		
		stdout, err := cmd.StdoutPipe()
		if err != nil { 
			fmt.Printf("[AI ERROR] Failed to create stdout pipe: %v\n", err)
			continue 
		}
		stdin, err := cmd.StdinPipe()
		if err != nil { 
			fmt.Printf("[AI ERROR] Failed to create stdin pipe: %v\n", err)
			continue 
		}

		if err := cmd.Start(); err != nil { 
			fmt.Printf("[AI ERROR] Failed to start Python AI: %v (Path: %s)\n", err, pyScript)
			continue 
		}

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
				// 1. Update Server State
				core.GlobalState.Mu.Lock()
				if core.GlobalState.NPCBuildingLevels[nationName] == nil {
					core.GlobalState.NPCBuildingLevels[nationName] = make(map[string]int)
				}
				core.GlobalState.NPCBuildingLevels[nationName][result.BuildingKey] += result.Quantity
				state.Budget -= result.Cost
				core.GlobalState.Mu.Unlock()

				// 2. Broadcast News (if permitted)
				if newsCount < newsLimit {
					core.AddNewsItemLocked(
						fmt.Sprintf("Kantor Berita %s", nationName),
						fmt.Sprintf("AI Pembangunan: %s", nationName),
						result.Reason, // Use the narrative from Python
						"construction",
						"medium",
						dateStr,
					)
					newsCount++
				}
			}
		} else {
			cmd.Process.Kill()
		}
	}
}
