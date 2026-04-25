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

func GenerateFlashNews(dateStr string) {
	if len(core.NpcNations) == 0 {
		return
	}
	nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	
	subj := fmt.Sprintf("Kenaikan Harga Komoditas di %s", nation)
	content := fmt.Sprintf("Pasar komoditas di %s mengalami lonjakan harga akibat peningkatan permintaan industri manufaktur global. Para pelaku dagang mengantisipasi penguatan ekspor pada kuartal mendatang.", nation)
	
	core.AddNewsItemLocked("Berita Perdagangan Dunia", subj, content, "trade", "low", dateStr)
}

func GenerateBatch(dateStr string, count int) {
	// Generate 1 bilateral agreement news per batch to keep it special
	GenerateBilateralNews(dateStr)
	
	for i := 0; i < count; i++ {
		roll := core.Rng.Intn(3)
		switch roll {
		case 0:
			GenerateFlashNews(dateStr)
		case 1:
			if len(core.NpcNations) > 0 {
				nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
				subj := fmt.Sprintf("Logistik Global: Jalur Dagang %s", nation)
				content := fmt.Sprintf("Otoritas pelabuhan %s melaporkan efisiensi bongkar muat yang lebih tinggi, meningkatkan frekuensi kapal dagang dan memperlancar arus barang internasional.", nation)
				core.AddNewsItemLocked("Logistik Dunia", subj, content, "trade", "low", dateStr)
			}
		case 2:
			if len(core.NpcNations) > 0 {
				nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
				subj := fmt.Sprintf("Update Tarif Ekspor %s", nation)
				content := fmt.Sprintf("Kementerian Perdagangan %s mengumumkan penyesuaian tarif untuk beberapa komoditas unggulan guna menyeimbangkan neraca perdagangan dan mendongkrak daya saing global.", nation)
				core.AddNewsItemLocked("Regulasi Dagang", subj, content, "trade", "medium", dateStr)
			}
		}
	}
}
