package organisasi

import (
	"fmt"
	"strings"
	"emserver/core"
)

func GenerateBatch(dateStr string, count int) {
	playerCountry := strings.ToLower(strings.TrimSpace(core.GlobalState.Player.Country))
	available := make([]string, 0)
	for _, n := range core.NpcNations {
		if strings.ToLower(strings.TrimSpace(n)) != playerCountry {
			available = append(available, n)
		}
	}

	if len(available) == 0 {
		return
	}

	for i := 0; i < count; i++ {
		nation := available[core.Rng.Intn(len(available))]
		
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

