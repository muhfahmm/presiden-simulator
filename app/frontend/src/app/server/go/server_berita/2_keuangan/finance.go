package keuangan

import (
	"fmt"
	"emserver/core"
)

func GenerateMonthlyReport(dateStr string) {
	subj := "Laporan Outlook Keuangan Global"
	content := "Lembaga moneter internasional merilis laporan outlook bulanan yang menunjukkan tren stabilitas suku bunga pada negara-negara berkembang. Otoritas moneter memperkirakan penguatan likuiditas di pasar modal global."
	
	core.AddNewsItemLocked("Global Finance Forum", subj, content, "economy", "medium", dateStr)
}

func GenerateFlashNews(dateStr string) {
	if len(core.NpcNations) == 0 {
		return
	}
	nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	
	subj := fmt.Sprintf("Inflasi Terkendali di %s", nation)
	content := fmt.Sprintf("Bank Sentral %s melaporkan bahwa tingkat inflasi tahunan turun di bawah target, memberikan ruang bagi kebijakan moneter yang lebih ekspansif untuk mendukung pertumbuhan.", nation)
	
	core.AddNewsItemLocked("Berita Keuangan Global", subj, content, "economy", "low", dateStr)
}
