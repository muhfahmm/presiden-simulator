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

// InitializeRelationships loads relationship data from all country TS files.
// It acquires a lock on core.GlobalState.Mu.
func InitializeRelationships() error {
	core.GlobalState.Mu.Lock()
	defer core.GlobalState.Mu.Unlock()
	return InitializeRelationshipsLocked()
}

// InitializeRelationshipsLocked performs the actual loading logic.
// IMPORTANT: The caller must already hold core.GlobalState.Mu.Lock()
func InitializeRelationshipsLocked() error {
	fmt.Println("[HUBUNGAN] Starting initialization...")
	// Always wipe and re-initialize for a fresh load (essential for Reset functionality)
	core.GlobalState.Relationships = make(map[string]map[string]*core.Relationship)

	basePath := "c:/fhm/em/app/frontend/src/app/pilih_negara/data/database_hubungan_antar_negara"
	
	// Regions to scan
	regions := []string{"afrika", "asia", "eropa", "na", "oceania", "sa"}
	
	
	// Robust regex: matches the entire JSON-like object to ensure name and relation are paired
	// Matches: { id: 1, name: "malaysia", relation: 90 },
	// We handle optional commas at the end and greedy whitespace.
	pairRegex := regexp.MustCompile(`\{\s*id:\s*\d+,\s*name:\s*"([^"]+)",\s*relation:\s*(\d+)\s*\}\s*,?`)

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
			sourceName := core.NormalizeNationName(simplifyFilename(file.Name()))
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
				targetName := core.NormalizeNationName(match[1])
				
				// Prevent duplicates (e.g., if Singapura exists twice in Malaysia's file)
				if seenTargets[targetName] {
					continue
				}
				seenTargets[targetName] = true

				var score float64
				fmt.Sscanf(match[2], "%f", &score)

				// TRACE LOGGING: Explicitly check for China/Indonesia during reset
				if (sourceName == "indonesia" && targetName == "china") || (sourceName == "china" && targetName == "indonesia") {
					fmt.Printf("[HUBUNGAN] TRACE: Found link %s <-> %s: %.2f\n", sourceName, targetName, score)
				}

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

	fmt.Printf("[HUBUNGAN] SUCCESS: Initialized %d countries with %d relationship pairs\n", totalFiles, totalPairs)
	if totalFiles > 0 {
		fmt.Printf("[HUBUNGAN] Sample loaded nations: %v...\n", regions)
	} else {
		fmt.Printf("[HUBUNGAN] WARNING: No relationship files were loaded. Check path: %s\n", basePath)
	}
	return nil
}

// UpdateDailyRelationsLocked advances the simulation for all international relations by one day.
// It applies a more significant "Monthly Shift" on the 1st of each month.
// IMPORTANT: The caller must already hold core.GlobalState.Mu.Lock()
func UpdateDailyRelationsLocked(date string) {
	// [FREEZE] DO NOT UPDATE RELATIONSHIPS IN THE FIRST MONTH (As requested)
	// This ensures users see default database values until Month 2 begins.
	if core.GlobalState.DayCounter < 30 {
		return 
	}

	isFirstOfMonth := strings.HasPrefix(date, "01-") || strings.HasSuffix(date, "-01")
	
	if isFirstOfMonth {
		fmt.Printf("[HUBUNGAN] 📅 First of the Month detected (%s). Applying major geopolitical shift...\n", date)
	}

	for source, targets := range core.GlobalState.Relationships {
		for target, rel := range targets {
			// Skip self-relationship if it exists (though shouldn't usually evolve)
			if source == target {
				continue
			}

			// 1. Geopolitical Drift (Polarized Daily Scale)
			// Small positive drift for friends, small negative for rivals to create dynamic polarization
			drift := 0.0
			if rel.S > 65 {
				drift = 0.05 // Increased from 0.035
			} else if rel.S > 50 {
				drift = 0.02 // Increased from 0.015
			} else if rel.S < 35 {
				drift = -0.05 // Increased from -0.035
			} else if rel.S < 50 {
				drift = -0.02 // Increased from -0.015
			}

			// 2. Random Volatility (Increased significantly for better visibility)
			volatility := (core.Rng.Float64() - 0.5) * 0.8 // Increased from 0.25
			
			// 2.5 Neutral Jitter (Ensures relations at 50.0 still move slightly every day)
			jitter := (core.Rng.Float64() - 0.5) * 0.05

			// 2.6 Monthly Major Shift (As requested: Make it visible on the 1st)
			monthlyShift := 0.0
			if isFirstOfMonth {
				// Significant random shift on the 1st of each month [-5.0, 5.0]
				monthlyShift = (core.Rng.Float64() - 0.5) * 10.0
				
				// Polarization: If already high/low, push it significantly on the 1st
				if rel.S > 75 {
					monthlyShift += 1.5
				} else if rel.S < 25 {
					monthlyShift -= 1.5
				}
			}

			// 3. Status Bonuses & Stability Alignment
			bonus := 0.0
			sourceState := core.GlobalState.NPCStates[source]
			targetState := core.GlobalState.NPCStates[target]
			
			// If both countries are very stable, relations tend to improve slightly
			sStab, tStab := 50.0, 50.0 // Default to neutral stability
			normalizedPlayer := core.NormalizeNationName(core.GlobalState.Player.Country)
			
			if source == normalizedPlayer {
				sStab = core.GlobalState.Player.Stability
			} else if sourceState != nil {
				sStab = sourceState.Stability
			}
			
			if target == normalizedPlayer {
				tStab = core.GlobalState.Player.Stability
			} else if targetState != nil {
				tStab = targetState.Stability
			}
			
			if sStab > 80 && tStab > 80 {
				bonus += 0.01 // Tiny daily improvement for stable neighbors
			} else if sStab < 40 || tStab < 40 {
				bonus -= 0.01 // Tiny daily deterioration if one is unstable
			}

			// Add specific source stability bonus
			if sStab > 85 {
				bonus += 0.005
			}

			// 4. Final Calculation & Clamping
			rel.S = math.Max(0, math.Min(100, rel.S + drift + volatility + bonus + jitter + monthlyShift))
			
			// Update status based on score thresholds
			rel.E = boolToInt(rel.S >= 60)
			rel.P = boolToInt(rel.S >= 70)
			rel.A = boolToInt(rel.S >= 85)
			rel.T = boolToInt(rel.S >= 65)
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
			// Fake date for catch-up (doesn't trigger monthly shift for simplicity)
			UpdateDailyRelationsLocked("02-01-2026") 
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

