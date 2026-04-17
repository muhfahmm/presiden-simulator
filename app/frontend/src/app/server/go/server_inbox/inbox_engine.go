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

	// Weekly batch + Forced Day 1 & Day 8 for verification
	isBatchDay := day > 0 && (day%7 == 0 || day == 1 || day == 8)

	if isBatchDay {
		fmt.Printf("[INBOX] Day %d — Generating trade & diplomatic batch (Inbox size before: %d)\n", day, len(core.GlobalState.Inbox))

		finance.GenerateBatch(dateStr, 10)
		trade.GenerateAgreementBatch(dateStr, 3)
		trade.GenerateImportBatch(dateStr, 4)
		trade.GenerateExportBatch(dateStr, 4)
		trade.GenerateContractBatch(dateStr, 2)
		embassy.GenerateBatch(dateStr, 10)
		pact.GenerateBatch(dateStr, 10)
		alliance.GenerateBatch(dateStr, 10)

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
	}
}
