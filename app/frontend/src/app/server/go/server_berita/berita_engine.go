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
func ProcessNewsDay(date time.Time) bool {
	dateStr := date.Format("02 Jan 2006")
	day := core.GlobalState.DayCounter

	// 1. Pembangunan (Daily progress) - Already active via ProcessDaily
	changed := pembangunan.ProcessDaily(dateStr)

	// --- BATCH NEWS GENERATION (5-15 items per tab) ---
	// Trigger strictly on the 1st of the month (Day 1 for Finance)
	isMonthlyFinanceDay := date.Day() == 1 && day > 0
	if isMonthlyFinanceDay {
		count := core.Rng.Intn(11) + 5 // 5 to 15
		keuangan.GenerateBatch(dateStr, count)
	}

	// Trigger batches for Trade & Diplomacy twice a month (1st and 15th)
	isBiWeeklyBatchDay := (date.Day() == 1 || date.Day() == 15) && day > 0
	if isBiWeeklyBatchDay {
		// Trade
		tCount := core.Rng.Intn(11) + 5
		perdagangan.GenerateBatch(dateStr, tCount)

		// Diplomacy (split between Embassy, Pact, Alliance)
		eCount := core.Rng.Intn(4) + 2
		pCount := core.Rng.Intn(4) + 2
		aCount := core.Rng.Intn(4) + 2
		kedutaan.GenerateBatch(dateStr, eCount)
		pakta.GenerateBatch(dateStr, pCount)
		aliansi.GenerateBatch(dateStr, aCount)
	}

	// Maintain subtle daily variety (5% chance)
	if core.Rng.Intn(100) < 5 { // 5% daily chance
		keuangan.GenerateFlashNews(dateStr)
		perdagangan.GenerateFlashNews(dateStr)
	}

	return changed
}
