package server_inbox

import (
	"fmt"
	"time"
	"emserver/core"
	"emserver/server_inbox/1_keuangan"
	"emserver/server_inbox/2_perdagangan"
	"emserver/server_inbox/3_kedutaan"
	"emserver/server_inbox/4_pakta"
	"emserver/server_inbox/5_aliansi"
)

// ProcessInboxDay coordinates weekly batch generation
func ProcessInboxDay(date time.Time) {
	dateStr := date.Format("02 Jan 2006")

	// Weekly batch: Every 7 game days, generate notifications per category
	if core.GlobalState.DayCounter > 0 && core.GlobalState.DayCounter%7 == 0 {
		weekNum := core.GlobalState.DayCounter / 7
		fmt.Printf("[INBOX] Week %d — Generating full diplomatic & economic batches\n", weekNum)
		
		finance.GenerateBatch(dateStr, 10)
		trade.GenerateAgreementBatch(dateStr, 5)
		trade.GenerateImportBatch(dateStr, 8)
		trade.GenerateExportBatch(dateStr, 10)
		trade.GenerateContractBatch(dateStr, 10)
		trade.GenerateRouteBatch(dateStr, 10)
		embassy.GenerateBatch(dateStr, 10)
		pact.GenerateBatch(dateStr, 10)
		alliance.GenerateBatch(dateStr, 10)
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
