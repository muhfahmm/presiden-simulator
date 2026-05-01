package db_connect

import (
	"fmt"
	"io/ioutil"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
)

// SeedCountries migrates data from TS files to PostgreSQL
func SeedCountries() error {
	// Base path relative to where go run main.go is executed (src/app/server/go)
	// We need to go up to find src/app/pilih_negara
	basePath := "../../pilih_negara/data/semua_fitur_negara/0_profiles"
	continents := []string{"afrika", "asia", "eropa", "na", "oceania", "sa"}

	fmt.Println("[SEEDER] Starting migration from TypeScript profiles...")

	count := 0
	for _, continent := range continents {
		dirPath := filepath.Join(basePath, continent)
		files, err := ioutil.ReadDir(dirPath)
		if err != nil {
			fmt.Printf("[SEEDER] Warning: Could not read directory %s: %v\n", dirPath, err)
			continue
		}

		for _, file := range files {
			if !strings.HasSuffix(file.Name(), ".ts") || file.Name() == "index.ts" {
				continue
			}

			path := filepath.Join(dirPath, file.Name())
			content, err := ioutil.ReadFile(path)
			if err != nil {
				continue
			}
			contentStr := string(content)

			// Simple Regex extraction for core profile data
			nameID := extractRegex(contentStr, `"name_id":\s*"([^"]+)"`)
			nameEN := extractRegex(contentStr, `"name_en":\s*"([^"]+)"`)
			popStr := extractRegex(contentStr, `"jumlah_penduduk":\s*(\d+)`)
			budgetStr := extractRegex(contentStr, `"anggaran":\s*(\d+)`)

			pop, _ := strconv.ParseInt(popStr, 10, 64)
			budget, _ := strconv.ParseFloat(budgetStr, 64)

			if nameID != "" {
				query := `
					INSERT INTO countries (name_id, name_en, continent, initial_population, initial_budget)
					VALUES ($1, $2, $3, $4, $5)
					ON CONFLICT (name_id) DO UPDATE SET
					name_en = EXCLUDED.name_en,
					continent = EXCLUDED.continent,
					initial_population = EXCLUDED.initial_population,
					initial_budget = EXCLUDED.initial_budget;
				`
				_, err := DB.Exec(query, nameID, nameEN, continent, pop, budget)
				if err != nil {
					fmt.Printf("[SEEDER] Error inserting %s: %v\n", nameID, err)
				} else {
					count++
				}
			}
		}
	}
	fmt.Printf("[SEEDER] Migration completed. %d countries synced to database.\n", count)
	return nil
}

func extractRegex(content, pattern string) string {
	re := regexp.MustCompile(pattern)
	matches := re.FindStringSubmatch(content)
	if len(matches) > 1 {
		return matches[1]
	}
	return ""
}
