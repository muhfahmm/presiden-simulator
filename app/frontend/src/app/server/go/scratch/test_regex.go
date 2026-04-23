
package main

import (
	"fmt"
	"regexp"
)

func main() {
	contentStr := `
export const mineralKritisRate = {
  "1_tambang_emas": {
    key: "1_tambang_emas",
    dataKey: "emas",
    deskripsi: "Tambang Emas",
    produksi: 150,
    satuan: "KG",
    waktu_pembangunan: 120,
    biaya_pembangunan: 6000000, // Reduced to 6M
    lowongan_kerja: 1000,
    konsumsi_listrik: 80
  },
  "2_tambang_uranium": {
    key: "2_tambang_uranium",
    dataKey: "uranium",
    deskripsi: "Tambang Uranium",
    produksi: 100,
    satuan: "KG",
    waktu_pembangunan: 240,
    biaya_pembangunan: 7500000, // Reduced to 7.5M
    lowongan_kerja: 500,
    konsumsi_listrik: 150
  },
};
`
	blockPattern := regexp.MustCompile(`(?s)(?:"?([\w_]+)"?):\s*\{(.+?)\}\s*,\s*[\r\n]`)
	matches := blockPattern.FindAllStringSubmatch(contentStr, -1)

	fmt.Printf("Matches found: %d\n", len(matches))
	for _, match := range matches {
		key := match[1]
		block := match[2]
		fmt.Printf("Key: %s\n", key)
		
		dataKey := key
		dataKeyMatch := regexp.MustCompile(`dataKey:\s*"([^"]+)"`).FindStringSubmatch(block)
		if len(dataKeyMatch) >= 2 {
			dataKey = dataKeyMatch[1]
		}
		fmt.Printf("  DataKey: %s\n", dataKey)
	}
}
