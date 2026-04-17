package server_berita

import (
	"time"
	"emserver/core"
	construction "emserver/server_berita/1_pembangunan"
	economy "emserver/server_berita/2_ekonomi"
	diplomacy "emserver/server_berita/3_diplomasi"
)

// ProcessNewsDay coordinates daily international news generation
func ProcessNewsDay(date time.Time) {
	dateStr := date.Format("02 Jan 2006")
	day := core.GlobalState.DayCounter

	// 1. Diplomatic News (Triggered every 5 days or on major relation changes)
	if day%5 == 0 {
		diplomacy.GenerateBatch(dateStr)
	}

	// 2. Construction News (Randomly based on NPC progress)
	// We'll let the individual sub-package handle the probability logic
	construction.ProcessDaily(dateStr)

	// 3. Economy News (Monthly reports and major fluctuations)
	if day%30 == 0 {
		economy.GenerateMonthlyReport(dateStr)
	}
	
	// Random economic flash news
	if core.Rng.Intn(100) < 5 { // 5% daily chance
		economy.GenerateFlashNews(dateStr)
	}
}
