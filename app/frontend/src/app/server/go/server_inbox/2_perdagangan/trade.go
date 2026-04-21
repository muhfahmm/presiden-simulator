package trade

import (
	"fmt"
	"strings"
	"time"
	"emserver/core"
)

// Commodities pool for trade offers
var tradeCommodities = []struct {
	name, unit string
	basePrice  int
}{
	{"Nikel", "Ton", 18500}, {"Tembaga", "Ton", 9200}, {"Bauksit", "Ton", 5400},
	{"Batu Bara", "Ton", 3100}, {"Minyak Sawit", "Ton", 7800}, {"Karet Alam", "Ton", 6200},
	{"Beras", "Ton", 4500}, {"Gandum", "Ton", 3800}, {"Kopi", "Ton", 12000},
	{"Kakao", "Ton", 8900}, {"Gula Tebu", "Ton", 5100}, {"Teh", "Ton", 7400},
	{"Mie Instan", "Karton", 2800}, {"Semen", "Ton", 1900}, {"Baja", "Ton", 8500},
	{"Tekstil", "Bal", 4200}, {"Elektronik", "Unit", 15000}, {"Pupuk", "Ton", 3500},
	{"Ikan Tuna", "Ton", 11000}, {"Udang", "Ton", 14500}, {"Rumput Laut", "Ton", 3200},
	{"Obat-obatan", "Palet", 22000}, {"Kayu Olahan", "m³", 6800}, {"Kelapa Sawit", "Ton", 7200},
	{"Lithium", "Ton", 42000}, {"Kobalt", "Ton", 35000}, {"Timah", "Ton", 25000},
	{"Aluminium", "Ton", 12500}, {"Serat Optik", "Km", 8000}, {"Komponen Chip", "Lot", 38000},
}

// Whitelist of allowed trade partners for specific countries
var tradePartnersWhitelist = map[string][]string{
	"indonesia": {
		"Thailand", "Malaysia", "Filipina", "Jerman", "Prancis", "Vietnam",
		"Amerika Serikat", "Inggris", "Korea Selatan", "Uni Emirat Arab",
		"China", "India", "Singapura", "Jepang",
	},
}

// isWhitelistedPartner checks if the given nation is an allowed trade partner for the current player country
func isWhitelistedPartner(nation string) bool {
	playerCountry := strings.ToLower(strings.TrimSpace(core.GlobalState.Player.Country))
	if playerCountry == "" {
		return true // Allow all if player country not set yet
	}

	allowed, exists := tradePartnersWhitelist[playerCountry]
	if !exists {
		return true // Allow all if no whitelist defined for this player country
	}

	target := strings.ToLower(strings.TrimSpace(nation))
	for _, a := range allowed {
		if strings.ToLower(strings.TrimSpace(a)) == target {
			return true
		}
	}
	return false
}


// hasEmbassy checks if a given NPC nation has an active embassy with the player
func hasEmbassy(npcNation string) bool {
	playerCountry := strings.ToLower(strings.TrimSpace(core.GlobalState.Player.Country))
	npcKey := strings.ToLower(strings.TrimSpace(npcNation))

	if playerCountry == "" {
		return false
	}

	// Check NPC -> Player direction
	if rels, ok := core.GlobalState.Relationships[npcKey]; ok {
		for k, rel := range rels {
			if strings.ToLower(k) == playerCountry && rel != nil && rel.E == 1 {
				return true
			}
		}
	}

	// Check Player -> NPC direction
	if rels, ok := core.GlobalState.Relationships[playerCountry]; ok {
		for k, rel := range rels {
			if strings.ToLower(k) == npcKey && rel != nil && rel.E == 1 {
				return true
			}
		}
	}

	return false
}

// ═══════════════════════════════════════════════════════════
// 1. KEMITRAAN DAGANG — "{Negara} Menawarkan Kemitraan Perdagangan"
// ═══════════════════════════════════════════════════════════
func GenerateAgreementBatch(dateStr string, count int) {
	playerCountry := core.GlobalState.Player.Country
	if playerCountry == "" {
		playerCountry = "Negara Anda"
	}

	for i := 0; i < count; i++ {
		var nation string
		for attempts := 0; attempts < 10; attempts++ {
			nation = core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
			if isWhitelistedPartner(nation) {
				break
			}
		}

		if !isWhitelistedPartner(nation) {
			continue
		}

		subj := fmt.Sprintf("tawaran kemitraan: dari %s", nation)
		content := fmt.Sprintf("Negara %s menawarkan kemitraan perdagangan dengan negara kita.", nation)

		core.AddInboxItemLocked(
			fmt.Sprintf("Kemen. Perdagangan (%s)", nation),
			subj, content, "trade", "high", true, "Proposal Kemitraan", dateStr,
		)
		time.Sleep(time.Microsecond)
	}
}

// ═══════════════════════════════════════════════════════════
// 2. TAWARAN PRODUK (IMPOR) — "{Negara} Menawarkan {Produk} ke {Negara Kita}"
// ═══════════════════════════════════════════════════════════
func GenerateImportBatch(dateStr string, count int) {
	playerCountry := core.GlobalState.Player.Country
	if playerCountry == "" {
		playerCountry = "Negara Anda"
	}

	for i := 0; i < count; i++ {
		var nation string
		// Try to find a whitelisted partner (max 10 attempts to prevent infinite loop)
		for attempts := 0; attempts < 10; attempts++ {
			nation = core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
			if isWhitelistedPartner(nation) {
				break
			}
		}

		if !isWhitelistedPartner(nation) {
			continue // Skip this one if we couldn't find a partner in 10 tries
		}

		c := tradeCommodities[core.Rng.Intn(len(tradeCommodities))]

		vol := (core.Rng.Intn(80) + 10) * 100
		disc := core.Rng.Intn(25) + 5
		price := c.basePrice * (100 - disc) / 100
		total := price * vol
		expiry := core.Rng.Intn(10) + 5

		subj := fmt.Sprintf("tawaran impor: %s dari %s", c.name, nation)
		content := fmt.Sprintf("%s menawarkan impor %s berjumlah %d %s (Harga: %d/unit). Total biaya: %d EM. Penawaran berlaku %d hari.", nation, c.name, vol, c.unit, price, total, expiry)

		core.AddInboxItemLocked(fmt.Sprintf("Kemen. Perdagangan (%s)", nation), subj, content, "trade", "medium", true, "Proposal Tawaran Produk", dateStr)
		time.Sleep(time.Microsecond)
	}
}

// ═══════════════════════════════════════════════════════════
// 3. PERMINTAAN BELI (EKSPOR) — "{Negara} Ingin Membeli {Produk} {Negara Kita}"
// ═══════════════════════════════════════════════════════════
func GenerateExportBatch(dateStr string, count int) {
	playerCountry := core.GlobalState.Player.Country
	if playerCountry == "" {
		playerCountry = "Negara Anda"
	}

	for i := 0; i < count; i++ {
		var nation string
		for attempts := 0; attempts < 10; attempts++ {
			nation = core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
			if isWhitelistedPartner(nation) {
				break
			}
		}

		if !isWhitelistedPartner(nation) {
			continue
		}

		c := tradeCommodities[core.Rng.Intn(len(tradeCommodities))]

		vol := (core.Rng.Intn(60) + 5) * 100
		prem := core.Rng.Intn(20) + 5
		buyP := c.basePrice * (100 + prem) / 100
		rev := buyP * vol
		days := core.Rng.Intn(8) + 3

		subj := fmt.Sprintf("tawaran ekspor: %s dari %s", c.name, nation)
		content := fmt.Sprintf("%s ingin membeli produk %s kita berjumlah %d %s (Harga: %d/unit). Potensi pendapatan: %d EM. Berlaku %d hari.", nation, c.name, vol, c.unit, buyP, rev, days)

		core.AddInboxItemLocked(fmt.Sprintf("Kemen. Perdagangan (%s)", nation), subj, content, "trade", "medium", true, "Proposal Permintaan Beli", dateStr)
		time.Sleep(time.Microsecond)
	}
}

// ═══════════════════════════════════════════════════════════
// 4. KONTRAK DAGANG — "{Negara} Menawarkan Kontrak Dagang dengan {Negara Kita}"
//    HANYA muncul jika negara tersebut sudah memiliki Kedutaan (E=1)
// ═══════════════════════════════════════════════════════════
func GenerateContractBatch(dateStr string, count int) {
	playerCountry := core.GlobalState.Player.Country
	if playerCountry == "" {
		playerCountry = "Negara Anda"
	}

	generated := 0
	maxAttempts := count * 5 // Prevent infinite loop

	for attempts := 0; generated < count && attempts < maxAttempts; attempts++ {
		nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]

		// SMART CHECK: Only generate contract if NPC has embassy with player AND is whitelisted
		if !hasEmbassy(nation) || !isWhitelistedPartner(nation) {
			continue
		}

		c := tradeCommodities[core.Rng.Intn(len(tradeCommodities))]

		months := core.Rng.Intn(9) + 3
		mVol := (core.Rng.Intn(30) + 5) * 100
		cPrice := c.basePrice * (100 - core.Rng.Intn(10)) / 100

		subj := fmt.Sprintf("kontrak dagang: %s dari %s", c.name, nation)
		content := fmt.Sprintf("%s mengajak kontrak dagang %s selama %d bulan (%d unit/bulan) dengan harga tetap %d EM/unit.", nation, c.name, months, mVol, cPrice)

		core.AddInboxItemLocked(fmt.Sprintf("Kemen. Perdagangan (%s)", nation), subj, content, "trade", "high", true, "Proposal Kontrak Perdagangan", dateStr)
		generated++
		time.Sleep(time.Microsecond)
	}

	if generated < count {
		fmt.Printf("[TRADE] Contract batch: Only generated %d/%d — not enough nations with embassies\n", generated, count)
	}
}

// ═══════════════════════════════════════════════════════════
// (DISABLED) Route/Infrastructure Batch — No longer generated
// ═══════════════════════════════════════════════════════════
func GenerateRouteBatch(dateStr string, count int) {
	// Intentionally empty — disabled per user request
	// Infrastructure proposals are no longer sent to inbox
}
