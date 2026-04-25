package server_berita

import (
	"time"
	"emserver/core"
	aliansi "emserver/server_berita/6_aliansi"
	organisasi "emserver/server_berita/7_organisasi"
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

	// --- BATCH NEWS GENERATION (Synchronized Schedule: 1, 5, 10, 15, 20, 25, 30) ---
	d := date.Day()
	isBatchNewsDay := (d == 1 || d == 5 || d == 10 || d == 15 || d == 20 || d == 25 || d == 30) && day > 0
	
	if isBatchNewsDay {
		// 1. Finance (Keuangan)
		fCount := core.Rng.Intn(6) + 5 // 5 to 10 per batch
		keuangan.GenerateBatch(dateStr, fCount)

		// 2. Trade (Perdagangan)
		tCount := core.Rng.Intn(6) + 5
		perdagangan.GenerateBatch(dateStr, tCount)

		// 3. Diplomacy (Embassy, Pact, Alliance)
		eCount := core.Rng.Intn(3) + 2
		pCount := core.Rng.Intn(3) + 2
		aCount := core.Rng.Intn(3) + 2
		oCount := core.Rng.Intn(3) + 2
		kedutaan.GenerateBatch(dateStr, eCount)
		pakta.GenerateBatch(dateStr, pCount)
		aliansi.GenerateBatch(dateStr, aCount)
		organisasi.GenerateBatch(dateStr, oCount)
	}

	// 3. DAILY VARIETY (Subtle 5% chance)
	// Small daily updates to keep the world alive between batch days
	if core.Rng.Intn(100) < 5 {
		perdagangan.GenerateFlashNews(dateStr)
		keuangan.GenerateFlashNews(dateStr)
	}

	return changed
}
