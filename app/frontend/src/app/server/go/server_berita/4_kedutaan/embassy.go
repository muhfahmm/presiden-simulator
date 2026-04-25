package kedutaan

import (
	"fmt"
	"strings"
	"emserver/core"
)

// ensureRelation initializes a relationship object if it doesn't exist
func ensureRelation(n1, n2 string) *core.Relationship {
	k1 := strings.ToLower(strings.TrimSpace(n1))
	k2 := strings.ToLower(strings.TrimSpace(n2))

	if core.GlobalState.Relationships[k1] == nil {
		core.GlobalState.Relationships[k1] = make(map[string]*core.Relationship)
	}
	if core.GlobalState.Relationships[k1][k2] == nil {
		core.GlobalState.Relationships[k1][k2] = &core.Relationship{S: 50}
	}
	return core.GlobalState.Relationships[k1][k2]
}

func GenerateBilateralNews(dateStr string) {
	if len(core.NpcNations) < 2 {
		return
	}
	n1 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	n2 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	for n2 == n1 {
		n2 = core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	}
	
	// PERSISTENCE: Update the actual relationship state so other systems (like Trade) know it exists
	rel1 := ensureRelation(n1, n2)
	rel1.E = 1 // Active Embassy
	
	rel2 := ensureRelation(n2, n1)
	rel2.E = 1
	
	subj := fmt.Sprintf("Pembangunan kedutaan besar antara negara %s dengan negara %s disepakati", n1, n2)
	content := fmt.Sprintf("Delegasi tingkat menteri dari %s dan %s bertemu di gedung kedutaan besar untuk melakukan tinjauan berkala terhadap hubungan diplomatik. Diskusi dilaporkan berjalan secara konstruktif demi kepentingan kedua negara.", n1, n2)
	
	core.AddNewsItemLocked("Kantor Berita Kedutaan", subj, content, "diplomacy", "low", dateStr)
}

func GenerateBatch(dateStr string, count int) {
	for i := 0; i < count; i++ {
		GenerateBilateralNews(dateStr)
	}
}
