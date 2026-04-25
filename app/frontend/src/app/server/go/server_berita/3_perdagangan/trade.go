package perdagangan

import (
	"fmt"
	"strings"
	"emserver/core"
)

// hasEmbassyBetween checks if two NPC nations have an active embassy relationship (E=1)
func hasEmbassyBetween(n1, n2 string) bool {
	k1 := strings.ToLower(strings.TrimSpace(n1))
	k2 := strings.ToLower(strings.TrimSpace(n2))

	// Check n1 -> n2
	if rels, ok := core.GlobalState.Relationships[k1]; ok {
		for k, rel := range rels {
			if strings.ToLower(k) == k2 && rel != nil && rel.E == 1 {
				return true
			}
		}
	}
	// Check n2 -> n1
	if rels, ok := core.GlobalState.Relationships[k2]; ok {
		for k, rel := range rels {
			if strings.ToLower(k) == k1 && rel != nil && rel.E == 1 {
				return true
			}
		}
	}
	return false
}

func GenerateBilateralNews(dateStr string) {
	if len(core.NpcNations) < 2 {
		return
	}

	// Try up to 20 times to find a pair of nations that already have an embassy
	for attempt := 0; attempt < 20; attempt++ {
		n1 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		n2 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		for n2 == n1 {
			n2 = core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		}

		// Prerequisite: both nations must have an active embassy relationship
		if !hasEmbassyBetween(n1, n2) {
			continue
		}

		subj := fmt.Sprintf("Tawaran hubungan dagang negara %s diterima oleh negara %s", n1, n2)
		content := fmt.Sprintf("Setelah menjalin hubungan diplomatik melalui kedutaan besar, %s dan %s resmi menandatangani perjanjian kemitraan perdagangan. Kesepakatan ini mencakup pengurangan tarif dan fasilitasi arus barang antar kedua negara.", n1, n2)

		core.AddNewsItemLocked("Berita Ekonomi Global", subj, content, "trade", "low", dateStr)
		return
	}
	// If no embassy pair found after 20 attempts, skip — no trade without diplomacy
}

type EconomyCommodity struct {
	Name      string
	BasePrice int
	Unit      string
}

var economyCommodities = []EconomyCommodity{
	{"Beras Pokok", 16000, "kg"},
	{"Daging Sapi", 104100, "kg"},
	{"Daging Ayam", 41000, "kg"},
	{"Minyak Goreng", 15400, "liter"},
	{"Gula", 14400, "kg"},
	{"Telur Ayam", 31100, "kg"},
	{"Bahan Bakar (BBM)", 10700, "liter"},
	{"Listrik", 1600, "kWh"},
	{"Air Bersih", 5200, "m³"},
	{"Obat-obatan", 157900, "kunjungan"},
	{"Pendidikan", 483900, "bulan"},
}

func formatPrice(n int) string {
	s := fmt.Sprintf("%d", n)
	if len(s) <= 3 {
		return s
	}
	var res []string
	for len(s) > 3 {
		res = append([]string{s[len(s)-3:]}, res...)
		s = s[:len(s)-3]
	}
	if len(s) > 0 {
		res = append([]string{s}, res...)
	}
	return strings.Join(res, ".")
}

func GenerateFlashNews(dateStr string) {
	if len(core.NpcNations) == 0 {
		return
	}
	nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	
	c := economyCommodities[core.Rng.Intn(len(economyCommodities))]
	
	// Calculate price jump (10% to 40% increase)
	increasePercent := core.Rng.Intn(31) + 10
	oldPrice := c.BasePrice
	newPrice := oldPrice * (100 + increasePercent) / 100
	
	subj := fmt.Sprintf("Kenaikan Harga %s di %s", c.Name, nation)
	content := fmt.Sprintf("Pasar domestik di %s melaporkan lonjakan harga pada %s dari Rp %s menjadi Rp %s per %s. Kenaikan sebesar %d%% ini dipicu oleh gangguan rantai pasok global dan peningkatan biaya logistik. Pemerintah setempat sedang mempertimbangkan langkah intervensi pasar.", 
		nation, c.Name, formatPrice(oldPrice), formatPrice(newPrice), c.Unit, increasePercent)
	
	core.AddNewsItemLocked("Berita Perdagangan Dunia", subj, content, "trade", "low", dateStr)
}

func GenerateBatch(dateStr string, count int) {
	// Generate 1 bilateral agreement news per batch to keep it special
	GenerateBilateralNews(dateStr)
	
	for i := 0; i < count; i++ {
		roll := core.Rng.Intn(2)
		switch roll {
		case 0:
			GenerateFlashNews(dateStr)
		case 1:
			if len(core.NpcNations) > 0 {
				nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
				
				regTypes := []string{"Bea Cukai", "Transit Sekutu", "Transit Non-Sekutu"}
				regType := regTypes[core.Rng.Intn(len(regTypes))]
				percentage := core.Rng.Intn(101) // 0-100%
				
				action := "menaikkan"
				if core.Rng.Intn(2) == 0 {
					action = "menurunkan"
				}

				subj := fmt.Sprintf("Penyesuaian %s %s: %d%%", regType, nation, percentage)
				content := fmt.Sprintf("Otoritas fiskal di %s mengumumkan kebijakan baru untuk %s %s menjadi %d%%. Langkah ini diambil untuk mengoptimalkan pendapatan negara dan mengatur arus logistik internasional.", nation, action, regType, percentage)
				
				core.AddNewsItemLocked("Regulasi Dagang", subj, content, "trade", "medium", dateStr)
			}
		}
	}
}
