package organisasi

import (
	"fmt"
	"emserver/core"
)

func GenerateBatch(dateStr string, count int) {
	for i := 0; i < count; i++ {
		if len(core.NpcNations) == 0 {
			return
		}
		nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		
		topics := []string{
			"Resolusi Kemanusiaan",
			"Program Lingkungan Hidup",
			"Bantuan Pangan Dunia",
			"Resolusi Keamanan Global",
			"Laporan Hak Asasi Manusia",
			"Kerjasama Maritim Internasional",
			"Protokol Keamanan Siber UN",
		}
		topic := topics[core.Rng.Intn(len(topics))]
		
		subj := fmt.Sprintf("Sidang Umum PBB: %s (%s)", topic, nation)
		content := fmt.Sprintf("Delegasi dari %s memberikan suara terkait %s di Markas Besar PBB. Keputusan ini diharapkan akan memberikan dampak signifikan bagi stabilitas kawasan dan kerjasama internasional.", nation, topic)
		
		core.AddNewsItemLocked("Perserikatan Bangsa-Bangsa", subj, content, "organizations", "medium", dateStr)
	}
}
