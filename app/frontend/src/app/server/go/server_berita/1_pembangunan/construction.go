package construction

import (
	"fmt"
	"emserver/core"
)

func ProcessDaily(dateStr string) {
	numBuilders := 2 + core.Rng.Intn(4) // 2 to 5 nations per day
	if numBuilders > len(core.NpcNations) {
		numBuilders = 1
	}

	// Shuffle and pick random nations
	shuffled := make([]int, len(core.NpcNations))
	for i := range shuffled {
		shuffled[i] = i
	}
	core.Rng.Shuffle(len(shuffled), func(i, j int) {
		shuffled[i], shuffled[j] = shuffled[j], shuffled[i]
	})

	if len(core.BuildingTypes) == 0 {
		return
	}

	newsLimit := 3
	newsCount := 0

	for k := 0; k < numBuilders; k++ {
		nationIdx := shuffled[k]
		nation := core.NpcNations[nationIdx]
		building := core.BuildingTypes[core.Rng.Intn(len(core.BuildingTypes))]

		if core.GlobalState.NPCBuildingLevels[nation] == nil {
			core.GlobalState.NPCBuildingLevels[nation] = make(map[string]int)
		}

		levelKey := building.Key
		currentLevel, exists := core.GlobalState.NPCBuildingLevels[nation][levelKey]
		if !exists {
			currentLevel = core.Rng.Intn(10)
		}
		
		nextLevel := currentLevel + 1
		core.GlobalState.NPCBuildingLevels[nation][levelKey] = nextLevel

		// Only generate news for a few of them to avoid flooding
		if newsCount < newsLimit && core.Rng.Intn(100) < 40 {
			transitionText := fmt.Sprintf("(%d ke %d)", currentLevel, nextLevel)
			subj := fmt.Sprintf("%s Inisiasi Proyek Konstruksi %s", nation, building.Name)
			content := fmt.Sprintf(
				"Pemerintah %s mengumumkan proyek konstruksi %s %s di sektor %s. Proyek ini bertujuan memperkuat kapasitas layanan publik nasional.", 
				nation, building.Name, transitionText, building.Sector,
			)

			core.AddNewsItemLocked(fmt.Sprintf("Kementerian PU %s", nation), subj, content, "construction", "low", dateStr)
			newsCount++
		}
	}
}
