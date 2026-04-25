package keuangan

import (
	"fmt"
	"strings"
	"emserver/core"
)

func GenerateMonthlyReport(dateStr string) {
	subj := "Laporan Outlook Keuangan Global"
	content := "Lembaga moneter internasional merilis laporan outlook bulanan yang menunjukkan tren stabilitas suku bunga pada negara-negara berkembang. Otoritas moneter memperkirakan penguatan likuiditas di pasar modal global."
	
	core.AddNewsItemLocked("Global Finance Forum", subj, content, "finance", "medium", dateStr)
}

func GenerateFlashNews(dateStr string) {
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
	nation := available[core.Rng.Intn(len(available))]
	
	subj := fmt.Sprintf("Inflasi Terkendali di %s", nation)
	content := fmt.Sprintf("Bank Sentral %s melaporkan bahwa tingkat inflasi tahunan turun di bawah target, memberikan ruang bagi kebijakan moneter yang lebih ekspansif untuk mendukung pertumbuhan.", nation)
	
	core.AddNewsItemLocked("Berita Keuangan Global", subj, content, "finance", "low", dateStr)
}

func GenerateBatch(dateStr string, count int) {
	playerCountry := strings.ToLower(strings.TrimSpace(core.GlobalState.Player.Country))
	available := make([]string, 0)
	for _, n := range core.NpcNations {
		if strings.ToLower(strings.TrimSpace(n)) != playerCountry {
			available = append(available, n)
		}
	}

	for i := 0; i < count; i++ {
		roll := core.Rng.Intn(3)
		switch roll {
		case 0:
			GenerateMonthlyReport(dateStr)
		case 1:
			GenerateFlashNews(dateStr)
		case 2:
			if len(available) > 0 {
				nation := available[core.Rng.Intn(len(available))]
				subj := fmt.Sprintf("Proyeksi Ekonomi Terkini: %s", nation)
				content := fmt.Sprintf("Analis pasar memprediksi bahwa %s akan mengalami penguatan fundamental ekonomi seiring dengan peningkatan cadangan devisa dan stabilitas mata uang lokal.", nation)
				core.AddNewsItemLocked("Data Ekonomi Dunia", subj, content, "finance", "medium", dateStr)
			}
		}
	}
}
