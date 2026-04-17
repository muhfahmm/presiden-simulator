package server_inbox

import (
	"fmt"
	"time"
	"emserver/core"
	finance "emserver/server_inbox/1_keuangan"
	"emserver/server_inbox/2_perdagangan"
	embassy "emserver/server_inbox/3_kedutaan"
	pact "emserver/server_inbox/4_pakta"
	alliance "emserver/server_inbox/5_aliansi"
)

// ProcessInboxDay coordinates weekly batch generation
func ProcessInboxDay(date time.Time) {
	dateStr := date.Format("02 Jan 2006")
	day := core.GlobalState.DayCounter

	// 1. Monthly Finance Report (Every 1st of the month)
	// We check if it's the 1st day of the month to generate comprehensive reports.
	isMonthlyFinanceDay := date.Day() == 1 && day > 0
	if isMonthlyFinanceDay {
		// New: Randomized range 5-15 per user request
		count := core.Rng.Intn(11) + 5
		fmt.Printf("[INBOX] Day %d — Generating Monthly Finance Report (%d items)\n", day, count)
		finance.GenerateBatch(dateStr, count)
	}

	// 2. Weekly Batch for Trading & Diplomacy (Every 7 days)
	isWeeklyBatchDay := day > 0 && (day%7 == 0 || day == 1 || day == 8)

	if isWeeklyBatchDay {
		fmt.Printf("[INBOX] Day %d — Generating trade & diplomatic batch (Inbox size before: %d)\n", day, len(core.GlobalState.Inbox))

		// finance.GenerateBatch is moved to the monthly trigger above
		
		// 2a. Randomized Trade Sub-batches (Summing to roughly 5-15)
		trade.GenerateAgreementBatch(dateStr, core.Rng.Intn(3)+1) // 1-3
		trade.GenerateImportBatch(dateStr, core.Rng.Intn(4)+2)    // 2-5
		trade.GenerateExportBatch(dateStr, core.Rng.Intn(4)+2)    // 2-5
		trade.GenerateContractBatch(dateStr, core.Rng.Intn(2)+1)  // 1-2

		// 2b. Randomized Diplomatic Batches (5-15 each)
		embassy.GenerateBatch(dateStr, core.Rng.Intn(11)+5)
		pact.GenerateBatch(dateStr, core.Rng.Intn(11)+5)
		alliance.GenerateBatch(dateStr, core.Rng.Intn(11)+5)

		fmt.Printf("[INBOX] Batch complete. New Inbox size: %d\n", len(core.GlobalState.Inbox))
	}
}

// GetInitialInboxBatch provides the "Day 0" system messages for all tabs
func GetInitialInboxBatch(dateStr string) []core.InboxItem {
	return []core.InboxItem{
		{
			ID:            "init-embassy",
			Sender:        "Dinas Luar Negeri",
			Subject:       "Selamat Datang di Hub Diplomasi",
			Content:       "Di sini Anda akan mengelola Kedutaan Besar. Nantikan proposal pembukaan kedutaan dari negara-negara sahabat dalam waktu dekat. Ingat: Kedutaan adalah syarat mutlak sebelum melakukan perdagangan.",
			Timestamp:     time.Now().UnixMilli(),
			Priority:      "high",
			Category:      "embassy",
			IsProposal:    false,
			ProposalLabel: "SISTEM",
			Read:          false,
			Time:          dateStr,
		},
		{
			ID:            "init-trade",
			Sender:        "Kementerian Perdagangan",
			Subject:       "Aktivasi Hub Perdagangan",
			Content:       "Pusat perdagangan kini aktif. Anda dapat mengelola tawaran ekspor-impor setelah memiliki Perjanjian Perdagangan dengan negara mitra.",
			Timestamp:     time.Now().UnixMilli(),
			Priority:      "high",
			Category:      "trade",
			IsProposal:    false,
			ProposalLabel: "SISTEM",
			Read:          false,
			Time:          dateStr,
		},
		{
			ID:            "init-pact",
			Sender:        "Kementerian Pertahanan",
			Subject:       "Manajemen Keamanan Strategis",
			Content:       "Tab ini mencatat perkembangan Pakta Non-Agresi dan Aliansi Pertahanan. Kerjasama keamanan strategis akan muncul di sini.",
			Timestamp:     time.Now().UnixMilli(),
			Priority:      "medium",
			Category:      "pact",
			IsProposal:    false,
			ProposalLabel: "SISTEM",
			Read:          false,
			Time:          dateStr,
		},
		{
			ID:            "init-alliance",
			Sender:        "Markas Besar Aliansi",
			Subject:       "Update Aliansi Global",
			Content:       "Selamat datang di pusat komando aliansi. Kerjasama pertahanan kolektif tingkat lanjut (Aliansi) akan muncul dalam tab ini.",
			Timestamp:     time.Now().UnixMilli(),
			Priority:      "high",
			Category:      "alliance",
			IsProposal:    false,
			ProposalLabel: "SISTEM",
			Read:          false,
			Time:          dateStr,
		},
		{
			ID:            "init-finance",
			Sender:        "Kementerian Keuangan",
			Subject:       "Sistem Pelaporan Keuangan Aktif",
			Content:       "Pusat monitoring keuangan negara telah diaktifkan. Laporan performa ekonomi makro, kebijakan moneter, dan proyeksi fiskal akan dikirimkan secara komprehensif setiap awal bulan (Bulanan). Laporan pertama akan diterbitkan pada 1 Februari 2026.",
			Timestamp:     time.Now().UnixMilli(),
			Priority:      "high",
			Category:      "finance",
			IsProposal:    false,
			ProposalLabel: "SISTEM",
			Read:          false,
			Time:          dateStr,
		},
	}
}
