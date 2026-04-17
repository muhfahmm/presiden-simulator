package server_berita

import (
	"time"
	"emserver/core"
	aliansi "emserver/server_berita/6_aliansi"
	kedutaan "emserver/server_berita/4_kedutaan"
	keuangan "emserver/server_berita/2_keuangan"
	pakta "emserver/server_berita/5_pakta"
	pembangunan "emserver/server_berita/1_pembangunan"
	perdagangan "emserver/server_berita/3_perdagangan"
)

// ProcessNewsDay coordinates daily international news generation
func ProcessNewsDay(date time.Time) {
	dateStr := date.Format("02 Jan 2006")
	day := core.GlobalState.DayCounter

	// 1. Pembangunan (Daily progress)
	pembangunan.ProcessDaily(dateStr)

	// 2. Keuangan & Perdagangan
	if day%30 == 0 {
		keuangan.GenerateMonthlyReport(dateStr)
	}
	
	// Random economic flash news
	if core.Rng.Intn(100) < 5 { // 5% daily chance
		keuangan.GenerateFlashNews(dateStr)
		perdagangan.GenerateFlashNews(dateStr)
	}

	// 3. Kedutaan, Pakta, Aliansi (Diplomacy)
	if day%5 == 0 {
		roll := core.Rng.Intn(3)
		switch roll {
		case 0:
			kedutaan.GenerateBilateralNews(dateStr)
		case 1:
			pakta.GeneratePactNews(dateStr)
		case 2:
			aliansi.GenerateAllianceNews(dateStr)
		}
	}
}
