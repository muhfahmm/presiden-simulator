package diplomacy

import (
	"fmt"
	"emserver/core"
)

func GenerateBatch(dateStr string) {
	if len(core.NpcNations) < 2 {
		return
	}

	// Pick two random nations
	n1 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	n2 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	for n2 == n1 {
		n2 = core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	}

	// Try to find actual relation score from server_hubungan
	score := 50.0
	if core.GlobalState.Relationships[n1] != nil && core.GlobalState.Relationships[n1][n2] != nil {
		score = core.GlobalState.Relationships[n1][n2].S
	}

	var subj, content string
	
	if score >= 75 {
		subj = fmt.Sprintf("%s dan %s Perkuat Hubungan Strategis", n1, n2)
		content = fmt.Sprintf("Hubungan diplomatik antara %s dan %s dilaporkan mencapai level tertinggi baru. Kedua negara berkomitmen untuk saling mendukung di berbagai forum internasional dan memperluas zona perdagangan bebas.", n1, n2)
	} else if score <= 35 {
		subj = fmt.Sprintf("Ketegangan Meningkat di Perbatasan %s - %s", n1, n2)
		content = fmt.Sprintf("Diplomat senior melaporkan adanya ketegangan baru di wilayah perbatasan antara %s dan %s. Kedua negara saling memberikan peringatan keras terkait kedaulatan wilayah masing-masing.", n1, n2)
	} else {
		subj = fmt.Sprintf("Pertemuan Bilateral Rutin %s dan %s", n1, n2)
		content = fmt.Sprintf("Delegasi tingkat menteri dari %s dan %s bertemu untuk melakukan tinjauan berkala terhadap pakta kerja sama yang sedang berjalan. Diskusi dilaporkan berjalan secara konstruktif.", n1, n2)
	}

	core.AddNewsItemLocked("Kantor Berita Internasional", subj, content, "diplomacy", "low", dateStr)
}
