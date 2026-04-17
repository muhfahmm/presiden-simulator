package economy

import (
	"fmt"
	"emserver/core"
)

func GenerateMonthlyReport(dateStr string) {
	subj := "Laporan Outlook Ekonomi Dunia"
	content := "Bank Dunia merilis laporan outlook bulanan yang menunjukkan tren positif pada negara-negara berkembang. Pertumbuhan PDB global diproyeksikan stabil meskipun ada sedikit volatilitas di sektor energi."
	
	core.AddNewsItemLocked("World Economic Forum", subj, content, "economy", "medium", dateStr)
}

func GenerateFlashNews(dateStr string) {
	if len(core.NpcNations) == 0 {
		return
	}
	nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	
	news := []struct{ subj, content string }{
		{
			fmt.Sprintf("Inflasi Terkendali di %s", nation),
			fmt.Sprintf("Bank Sentral %s melaporkan bahwa tingkat inflasi tahunan turun di bawah target, memberikan ruang bagi kebijakan moneter yang lebih ekspansif.", nation),
		},
		{
			fmt.Sprintf("Kenaikan Harga Komoditas di %s", nation),
			fmt.Sprintf("Pasar komoditas di %s mengalami lonjakan harga akibat peningkatan permintaan industri manufaktur global.", nation),
		},
	}
	
	ev := news[core.Rng.Intn(len(news))]
	core.AddNewsItemLocked("Berita Keuangan Global", ev.subj, ev.content, "economy", "low", dateStr)
}
