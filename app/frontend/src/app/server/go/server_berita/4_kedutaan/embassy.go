package kedutaan

import (
	"fmt"
	"emserver/core"
)

func GenerateBilateralNews(dateStr string) {
	if len(core.NpcNations) < 2 {
		return
	}
	n1 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	n2 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	for n2 == n1 {
		n2 = core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	}
	
	subj := fmt.Sprintf("Pertemuan Bilateral Rutin %s dan %s", n1, n2)
	content := fmt.Sprintf("Delegasi tingkat menteri dari %s dan %s bertemu di gedung kedutaan besar untuk melakukan tinjauan berkala terhadap hubungan diplomatik. Diskusi dilaporkan berjalan secara konstruktif demi kepentingan kedua negara.", n1, n2)
	
	core.AddNewsItemLocked("Kantor Berita Kedutaan", subj, content, "diplomacy", "low", dateStr)
}
