package pakta

import (
	"fmt"
	"emserver/core"
)

func GeneratePactNews(dateStr string) {
	if len(core.NpcNations) < 2 {
		return
	}
	n1 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	n2 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	for n2 == n1 {
		n2 = core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
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
