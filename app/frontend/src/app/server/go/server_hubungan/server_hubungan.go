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

// EnforceSymmetryAndClampingLocked ensures all relationships are symmetric and within [0, 100]
// IMPORTANT: The caller must already hold core.GlobalState.Mu.Lock()
func EnforceSymmetryAndClampingLocked() {
	if core.GlobalState.Relationships == nil {
		return
	}

	for source, targets := range core.GlobalState.Relationships {
		for target, rel := range targets {
			if rel == nil {
				continue
			}
			// 1. Clamp score to [0, 100]
			rel.S = math.Max(0, math.Min(100, rel.S))
			
			// 2. Enforce Symmetry: If target exists as a source, make it match the source's values
			if core.GlobalState.Relationships[target] != nil && core.GlobalState.Relationships[target][source] != nil {
				reverseRel := core.GlobalState.Relationships[target][source]
				reverseRel.S = rel.S
				reverseRel.E = rel.E
				reverseRel.P = rel.P
				reverseRel.A = rel.A
				reverseRel.T = rel.T
			}
		}
	}
	fmt.Println("[HUBUNGAN] Matrix symmetry and clamping enforced.")
}

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
	regions := []string{"afrika", "asia", "eropa", "na", "oceania", "sa"}
	
	pairRegex := regexp.MustCompile(`\{\s*id:\s*\d+,\s*name:\s*"([^"]+)",\s*relation:\s*(\d+)\s*\}\s*,?`)

	totalFiles := 0
	totalPairs := 0

	for _, region := range regions {
		regionDir := filepath.Join(basePath, region)
		files, err := ioutil.ReadDir(regionDir)
		if err != nil {
			continue
		}

		for _, file := range files {
			if !strings.HasSuffix(file.Name(), ".ts") {
				continue
			}

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

			matches := pairRegex.FindAllStringSubmatch(string(data), -1)
			seenTargets := make(map[string]bool)

			for _, match := range matches {
				targetName := core.NormalizeNationName(match[1])
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

	fmt.Printf("[HUBUNGAN] SUCCESS: Initialized %d countries with %d relationship pairs\n", totalFiles, totalPairs)
	
	// Ensure everything is clean and symmetric from the start
	EnforceSymmetryAndClampingLocked()
	
	return nil
}

// UpdateDailyRelationsLocked advances the simulation for all international relations by one day.
func UpdateDailyRelationsLocked(date string) {
	if core.GlobalState.DayCounter < 30 {
		return 
	}

	for source, targets := range core.GlobalState.Relationships {
		for target, rel := range targets {
			if source == target || rel == nil {
				continue
			}

			// Fixed 0.1 increment/decrement based on embassy
			embassyDrift := -0.1
			if rel.E == 1 {
				embassyDrift = 0.1
			}

			newScore := math.Max(0, math.Min(100, rel.S + embassyDrift))
			// Precision Rounding: 60.1, 60.2, etc. (prevents floating point drift)
			newScore = math.Round(newScore*10) / 10
			rel.S = newScore
			
			// SYMMETRY ENFORCEMENT: Ensure the reverse relationship matches
			if core.GlobalState.Relationships[target] != nil && core.GlobalState.Relationships[target][source] != nil {
				core.GlobalState.Relationships[target][source].S = newScore
				core.GlobalState.Relationships[target][source].E = boolToInt(newScore >= 60)
			}

			// Update status based on score thresholds
			rel.E = boolToInt(rel.S >= 60)
			rel.P = boolToInt(rel.S >= 70)
			rel.A = boolToInt(rel.S >= 85)
			rel.T = boolToInt(rel.S >= 65)
		}
	}
}

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
