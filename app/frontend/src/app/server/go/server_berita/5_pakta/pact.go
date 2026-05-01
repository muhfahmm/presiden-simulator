package pakta

import (
	"fmt"
	"emserver/core"
)

func GeneratePactNews(dateStr string) {
	playerCountry := core.NormalizeNationName(core.GlobalState.Player.Country)
	
	// LAYER 1: Filter out player's country from the pool
	available := make([]string, 0)
	for _, n := range core.NpcNations {
		if core.NormalizeNationName(n) != playerCountry {
			available = append(available, n)
		}
	}

	if len(available) < 2 {
		return
	}

	// LAYER 2: Pick two distinct NPC nations
	n1 := available[core.Rng.Intn(len(available))]
	n2 := available[core.Rng.Intn(len(available))]
	for n2 == n1 {
		n2 = available[core.Rng.Intn(len(available))]
	}


	// Logic: News only appears if embassy (E) exists
	k1 := core.NormalizeNationName(n1)
	k2 := core.NormalizeNationName(n2)

	rels1, ok1 := core.GlobalState.Relationships[k1]
	if !ok1 || rels1[k2] == nil || rels1[k2].E == 0 {
		return // No embassy between NPCs, no pact news
	}

	// NEW: Player visibility check
	hasPlayerEmbassy := false
	if pRels, ok := core.GlobalState.Relationships[playerCountry]; ok {
		if (pRels[k1] != nil && pRels[k1].E == 1) || (pRels[k2] != nil && pRels[k2].E == 1) {
			hasPlayerEmbassy = true
		}
	}

	if !hasPlayerEmbassy {
		return // Player doesn't have embassy in either country, skip news
	}

	// Update state: Set Pact status to 1
	rels1[k2].P = 1
	if rels2, ok2 := core.GlobalState.Relationships[k2]; ok2 && rels2[k1] != nil {
		rels2[k1].P = 1
	}


	subj := fmt.Sprintf("%s dan %s Menandatangani Pakta Kerja Sama", n1, n2)
	content := fmt.Sprintf("Pemerintah %s dan %s secara resmi menandatangani pakta kerja sama lintas sektoral yang baru. MoU ini diharapkan mempererat koordinasi antar lembaga dan mensinkronisasi regulasi di antara kedua negara.", n1, n2)
	
	core.AddNewsItemLocked("Berita Hubungan Internasional", subj, content, "diplomacy", "low", dateStr)
}


func GenerateBatch(dateStr string, count int) {
	for i := 0; i < count; i++ {
		GeneratePactNews(dateStr)
	}
}
