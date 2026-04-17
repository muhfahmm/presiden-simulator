package aliansi

import (
	"fmt"
	"emserver/core"
)

func GenerateAllianceNews(dateStr string) {
	if len(core.NpcNations) < 2 {
		return
	}
	n1 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	n2 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	for n2 == n1 {
		n2 = core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	}

	subj := fmt.Sprintf("%s dan %s Perkuat Aliansi Strategis", n1, n2)
	content := fmt.Sprintf("Hubungan aliansi antara %s dan %s dilaporkan mencapai level tertinggi baru dalam blok keamanan regional. Kedua negara berkomitmen untuk saling mendukung secara pertahanan militer di berbagai forum internasional.", n1, n2)
	
	core.AddNewsItemLocked("International Alliance Network", subj, content, "diplomacy", "medium", dateStr)
}

func GenerateBatch(dateStr string, count int) {
	for i := 0; i < count; i++ {
		GenerateAllianceNews(dateStr)
	}
}
