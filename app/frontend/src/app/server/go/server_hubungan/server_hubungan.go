package server_hubungan

import (
	"fmt"
	"io/ioutil"
	"math"
	"path/filepath"
	"regexp"
	"strings"

	"emserver/core"
)

// InitializeRelationships loads relationship data from all country TS files
func InitializeRelationships() error {
	core.GlobalState.Mu.Lock()
	defer core.GlobalState.Mu.Unlock()

	if core.GlobalState.Relationships == nil {
		core.GlobalState.Relationships = make(map[string]map[string]*core.Relationship)
	}

	basePath := "c:/fhm/em/app/frontend/src/app/database/data/database_hubungan_antar_negara"
	
	// Regions to scan
	regions := []string{"afrika", "asia", "eropa", "na", "oceania", "sa"}
	
	
	// Robust regex: matches the entire JSON-like object to ensure name and relation are paired
	// Matches: { id: 1, name: "malaysia", relation: 90 }
	pairRegex := regexp.MustCompile(`\{\s*id:\s*\d+,\s*name:\s*"([^"]+)",\s*relation:\s*(\d+)\s*\}`)

	totalFiles := 0
	totalPairs := 0

	for _, region := range regions {
		regionDir := filepath.Join(basePath, region)
		files, err := ioutil.ReadDir(regionDir)
		if err != nil {
			fmt.Printf("[HUBUNGAN] Warning: Could not read region %s: %v\n", region, err)
			continue
		}

		for _, file := range files {
			if !strings.HasSuffix(file.Name(), ".ts") {
				continue
			}

			// Extract source country name from filename (e.g., "67_indonesia.ts" -> "indonesia")
			sourceName := simplifyFilename(file.Name())
			if sourceName == "" {
				continue
			}

			data, err := ioutil.ReadFile(filepath.Join(regionDir, file.Name()))
			if err != nil {
				continue
			}

			if core.GlobalState.Relationships[sourceName] == nil {
				core.GlobalState.Relationships[sourceName] = make(map[string]*core.Relationship)
			}

			// Find all matching objects
			matches := pairRegex.FindAllStringSubmatch(string(data), -1)
			
			// Map to track if we've already added this target for this source
			seenTargets := make(map[string]bool)

			for _, match := range matches {
				targetName := strings.ToLower(strings.TrimSpace(match[1]))
				
				// Prevent duplicates (e.g., if Singapura exists twice in Malaysia's file)
				if seenTargets[targetName] {
					continue
				}
				seenTargets[targetName] = true

				var score float64
				fmt.Sscanf(match[2], "%f", &score)

				core.GlobalState.Relationships[sourceName][targetName] = &core.Relationship{
					S: score,
					E: boolToInt(score >= 60),
					P: boolToInt(score >= 70),
					A: boolToInt(score >= 85),
					T: boolToInt(score >= 65),
				}
				totalPairs++
			}
			totalFiles++
		}
	}

	fmt.Printf("[HUBUNGAN] Initialized %d countries with %d total relationship pairs\n", totalFiles, totalPairs)
	if totalFiles > 0 {
		fmt.Printf("[HUBUNGAN] Sample loaded nations: %v...\n", regions)
	} else {
		fmt.Printf("[HUBUNGAN] WARNING: No relationship files were loaded. Check path: %s\n", basePath)
	}
	return nil
}

// UpdateDailyRelationsLocked advances the simulation for all international relations by one day.
// IMPORTANT: The caller must already hold core.GlobalState.Mu.Lock()
func UpdateDailyRelationsLocked() {

	if core.GlobalState.DayCounter % 5 == 0 {
		fmt.Printf("[HUBUNGAN] Daily drift pulse at Day %d (processing %d nations)...\n", core.GlobalState.DayCounter, len(core.GlobalState.Relationships))
	}

	for source, targets := range core.GlobalState.Relationships {
		for target, rel := range targets {
			// Skip self-relationship if it exists (though shouldn't usually evolve)
			if source == target {
				continue
			}

			// 1. Geopolitical Drift (Daily Scale)
			drift := 0.015 
			
			// 2. Random Volatility (Extreme Boost for Verification)
			volatility := (core.Rng.Float64() - 0.5) * 10.0 // +/- 5.0 jump daily
			
			// 3. Stability Alignment
			// If both countries are very stable, relations tend to improve slightly
			bonus := 0.0
			sourceState := core.GlobalState.NPCStates[source]
			targetState := core.GlobalState.NPCStates[target]
			
			// If it's the player, we check player stability
			var sStab, tStab float64
			if source == strings.ToLower(core.GlobalState.Player.Country) {
				sStab = core.GlobalState.Player.Stability
			} else if sourceState != nil {
				sStab = sourceState.Stability
			}
			
			if target == strings.ToLower(core.GlobalState.Player.Country) {
				tStab = core.GlobalState.Player.Stability
			} else if targetState != nil {
				tStab = targetState.Stability
			}
			
			if sStab > 80 && tStab > 80 {
				bonus = 0.01 // Tiny daily improvement for stable neighbors
			} else if sStab < 40 || tStab < 40 {
				bonus = -0.01 // Tiny daily deterioration if one is unstable
			}

			rel.S = math.Max(0, math.Min(100, rel.S + drift + volatility + bonus))
			
			// Update status based on score thresholds
			rel.E = boolToInt(rel.S >= 60)
			rel.P = boolToInt(rel.S >= 70)
			rel.A = boolToInt(rel.S >= 85)
			rel.T = boolToInt(rel.S >= 65)

			// Targeted debug for Malaysia & India vs Indonesia
			if (source == "indonesia" && (target == "india" || target == "malaysia")) {
				fmt.Printf("[FORCE DEBUG] %s:%s -> %.2f\n", source, target, rel.S)
			}
		}
	}
}

// CatchUpDriftLocked applies missed daily pulses if the server starts mid-game.
// IMPORTANT: The caller must already hold core.GlobalState.Mu.Lock()
func CatchUpDriftLocked(currentDay int) {
	if currentDay > 0 {
		fmt.Printf("[HUBUNGAN] Detected Day %d. Fast-forwarding %d daily drift pulses...\n", currentDay, currentDay)
		
		// Snapshot some values for logging
		malBefore := 0.0
		if core.GlobalState.Relationships["indonesia"] != nil && core.GlobalState.Relationships["indonesia"]["malaysia"] != nil {
			malBefore = core.GlobalState.Relationships["indonesia"]["malaysia"].S
		}

		for i := 0; i < currentDay; i++ {
			UpdateDailyRelationsLocked()
		}

		if malBefore > 0 {
			malAfter := core.GlobalState.Relationships["indonesia"]["malaysia"].S
			fmt.Printf("[HUBUNGAN] Catch-up Complete. Indonesia -> Malaysia: %.2f -> %.2f\n", malBefore, malAfter)
		}
	}
}

// simplifyFilename converts "67_indonesia.ts" to "indonesia"
func simplifyFilename(name string) string {
	parts := strings.Split(name, "_")
	if len(parts) < 2 {
		return ""
	}
	base := strings.Join(parts[1:], "_")
	return strings.ToLower(strings.TrimSuffix(base, ".ts"))
}

func boolToInt(b bool) int {
	if b {
		return 1
	}
	return 0
}

