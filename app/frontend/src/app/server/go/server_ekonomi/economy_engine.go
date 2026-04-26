package server_ekonomi

import (
	"encoding/json"
	"fmt"
	"math"
	"os/exec"
	"strings"
	"emserver/core"
)

// ═══════════════════════════════════════════════════════════
// ECONOMY ENGINE
// Handles daily commodity production and batch trade execution
// ═══════════════════════════════════════════════════════════

const (
	CPP_TRADE_ENGINE = "C:/fhm/em/app/frontend/src/app/game/components/AI_logic/7_AI_Perdagangan_Internasional/cpp/trade_engine.exe"
	PY_SMART_BUILD   = "C:/fhm/em/app/frontend/src/app/game/components/AI_logic/7_AI_Perdagangan_Internasional/python/smart_construction.py"
)

// ProcessDailyProduction adds commodities to NPC inventories based on building levels.
// Called every game day inside processNPCDay (with lock held).
func ProcessDailyProduction() {
	playerCountry := strings.ToLower(strings.TrimSpace(core.GlobalState.Player.Country))

	for nation, state := range core.GlobalState.NPCStates {
		if state == nil {
			continue
		}
		// Skip player's country
		if strings.ToLower(strings.TrimSpace(nation)) == playerCountry {
			continue
		}

		if state.Commodities == nil {
			state.Commodities = make(map[string]int)
		}

		buildings := core.GlobalState.NPCBuildingLevels[nation]
		if buildings == nil {
			continue
		}

		// For each building the NPC has, produce commodities from its sector
		for _, bt := range core.BuildingTypes {
			keyToUse := bt.DataKey
			if keyToUse == "" {
				keyToUse = bt.Key
			}

			count, ok := buildings[keyToUse]
			if !ok || count <= 0 {
				continue
			}

			// Find which commodities this sector produces
			commodities, ok := core.SectorCommodityMap[bt.Sector]
			if !ok || len(commodities) == 0 {
				continue
			}

			// Produce a random commodity from this sector
			commKey := commodities[core.Rng.Intn(len(commodities))]

			// Production = building_count × base_rate × variance
			baseRate := 1 + core.Rng.Intn(3) // 1-3 per building
			production := count * baseRate

			state.Commodities[commKey] += production
		}
	}
}

// ProcessBatchTrade executes the C++ trade engine on batch days.
// Called inside the simulation loop with lock held.
func ProcessBatchTrade(dateStr string) {
	playerCountry := strings.ToLower(strings.TrimSpace(core.GlobalState.Player.Country))

	// Determine transaction count: 20-50 random
	maxTx := 20 + core.Rng.Intn(31)
	// 5% chance of bonus 50
	if core.Rng.Intn(100) < 5 {
		maxTx += 50
	}

	// Build payload for C++ engine
	type NationPayload struct {
		Budget      float64        `json:"budget"`
		Commodities map[string]int `json:"commodities"`
		Partners    []string       `json:"partners"`
	}

	type PricePayload struct {
		Buy  int `json:"buy"`
		Sell int `json:"sell"`
	}

	nations := make(map[string]NationPayload)
	for name, state := range core.GlobalState.NPCStates {
		if state == nil {
			continue
		}
		// Exclude player's country
		if strings.ToLower(strings.TrimSpace(name)) == playerCountry {
			continue
		}

		comms := state.Commodities
		if comms == nil {
			comms = make(map[string]int)
		}

		partners := state.TradePartners
		if partners == nil {
			// Fallback: use trade partner graph
			if tp, ok := core.TradePartnerGraph[name]; ok {
				partners = tp
			}
		}

		// Filter out player's country from partners
		var filteredPartners []string
		for _, p := range partners {
			if strings.ToLower(strings.TrimSpace(p)) != playerCountry {
				filteredPartners = append(filteredPartners, p)
			}
		}

		nations[name] = NationPayload{
			Budget:      state.Budget,
			Commodities: comms,
			Partners:    filteredPartners,
		}
	}

	prices := make(map[string]PricePayload)
	for key, cp := range core.CommodityPrices {
		prices[key] = PricePayload{Buy: cp.BuyPrice, Sell: cp.SellPrice}
	}

	payload := struct {
		Nations         map[string]NationPayload `json:"nations"`
		Prices          map[string]PricePayload  `json:"prices"`
		MaxTransactions int                      `json:"maxTransactions"`
		Seed            int                      `json:"seed"`
	}{
		Nations:         nations,
		Prices:          prices,
		MaxTransactions: maxTx,
		Seed:            core.GlobalState.DayCounter,
	}

	jsonPayload, err := json.Marshal(payload)
	if err != nil {
		fmt.Printf("[EKONOMI] Error marshaling trade payload: %v\n", err)
		return
	}

	// Spawn C++ engine
	cmd := exec.Command(CPP_TRADE_ENGINE)
	stdin, err := cmd.StdinPipe()
	if err != nil {
		fmt.Printf("[EKONOMI] Error opening stdin for C++ engine: %v\n", err)
		return
	}

	go func() {
		defer stdin.Close()
		stdin.Write(jsonPayload)
	}()

	out, err := cmd.Output()
	if err != nil {
		fmt.Printf("[EKONOMI] C++ trade engine error: %v\n", err)
		// Fallback: run Go-native trade matching
		processFallbackTrade(dateStr, maxTx)
		return
	}

	// Parse results
	var result struct {
		Trades []struct {
			Seller    string `json:"seller"`
			Buyer     string `json:"buyer"`
			Commodity string `json:"commodity"`
			Qty       int    `json:"qty"`
			Price     int    `json:"price"`
			Total     int    `json:"total"`
		} `json:"trades"`
		UpdatedBudgets     map[string]int            `json:"updatedBudgets"`
		UpdatedCommodities map[string]map[string]int `json:"updatedCommodities"`
	}

	if err := json.Unmarshal(out, &result); err != nil {
		fmt.Printf("[EKONOMI] Error parsing C++ output: %v\n", err)
		return
	}

	// Apply budget updates
	for name, budget := range result.UpdatedBudgets {
		if state, ok := core.GlobalState.NPCStates[name]; ok {
			state.Budget = float64(budget)
		}
	}

	// Apply commodity updates
	for name, comms := range result.UpdatedCommodities {
		if state, ok := core.GlobalState.NPCStates[name]; ok {
			if state.Commodities == nil {
				state.Commodities = make(map[string]int)
			}
			for k, v := range comms {
				state.Commodities[k] = v
			}
		}
	}

	// Generate trade news (embassy-gated)
	newsCount := 0
	maxNews := 5 // Limit news per batch to prevent spam
	for _, trade := range result.Trades {
		if newsCount >= maxNews {
			break
		}

		// Only generate news if player has embassy in either country
		if !playerHasEmbassyIn(trade.Seller) && !playerHasEmbassyIn(trade.Buyer) {
			continue
		}

		label := trade.Commodity
		unit := "Unit"
		if cp, ok := core.CommodityPrices[trade.Commodity]; ok {
			label = cp.Label
			if cp.Unit != "" {
				unit = cp.Unit
			}
		}

		subj := fmt.Sprintf("%s Mengekspor %d %s %s ke %s", trade.Seller, trade.Qty, unit, label, trade.Buyer)
		content := fmt.Sprintf("Dalam transaksi perdagangan bilateral, %s berhasil mengekspor %d %s %s ke %s dengan nilai total Rp %s. Perdagangan ini memperkuat hubungan ekonomi kedua negara.",
			trade.Seller, trade.Qty, unit, label, trade.Buyer, formatTradeValue(trade.Total))

		core.AddNewsItemLocked("Berita Perdagangan Internasional", subj, content, "trade", "low", dateStr)
		newsCount++
	}

	fmt.Printf("[EKONOMI] Batch trade complete: %d/%d trades executed, %d news generated\n",
		len(result.Trades), maxTx, newsCount)
}

// processFallbackTrade is a Go-native fallback if C++ engine fails
func processFallbackTrade(dateStr string, maxTx int) {
	playerCountry := strings.ToLower(strings.TrimSpace(core.GlobalState.Player.Country))
	tradesExecuted := 0

	// Simple matching: iterate NPC nations, find trade partners, swap commodities
	for name, state := range core.GlobalState.NPCStates {
		if tradesExecuted >= maxTx {
			break
		}
		if state == nil || strings.ToLower(strings.TrimSpace(name)) == playerCountry {
			continue
		}
		if state.Commodities == nil || len(state.Commodities) == 0 {
			continue
		}

		partners := state.TradePartners
		if partners == nil {
			if tp, ok := core.TradePartnerGraph[name]; ok {
				partners = tp
			}
		}
		if len(partners) == 0 {
			continue
		}

		// Pick a random commodity to sell
		var commKeys []string
		for k, v := range state.Commodities {
			if v > 0 {
				commKeys = append(commKeys, k)
			}
		}
		if len(commKeys) == 0 {
			continue
		}

		commKey := commKeys[core.Rng.Intn(len(commKeys))]
		stock := state.Commodities[commKey]
		if stock <= 0 {
			continue
		}

		// Pick a random partner
		partner := partners[core.Rng.Intn(len(partners))]
		if strings.ToLower(strings.TrimSpace(partner)) == playerCountry {
			continue
		}

		buyerState, ok := core.GlobalState.NPCStates[partner]
		if !ok || buyerState == nil {
			continue
		}

		// Get price
		cp, ok := core.CommodityPrices[commKey]
		if !ok {
			continue
		}

		qty := 1 + core.Rng.Intn(min(stock, 10))
		unitPrice := float64(cp.SellPrice) * (0.85 + core.Rng.Float64()*0.30)
		totalCost := unitPrice * float64(qty)

		// BUDGET VALIDATION: buyer must afford it
		if buyerState.Budget < totalCost {
			if unitPrice > 0 {
				qty = int(buyerState.Budget / unitPrice)
			}
			if qty <= 0 {
				continue
			}
			totalCost = unitPrice * float64(qty)
		}

		// Execute
		state.Commodities[commKey] -= qty
		state.Budget += totalCost

		buyerState.Budget -= totalCost
		if buyerState.Commodities == nil {
			buyerState.Commodities = make(map[string]int)
		}
		buyerState.Commodities[commKey] += qty

		tradesExecuted++
	}

	fmt.Printf("[EKONOMI] Fallback trade: %d trades executed\n", tradesExecuted)
}

// ProcessSmartConstruction spawns Python brain for construction decisions.
// Called on batch days with lock NOT held (runs in background goroutine).
func ProcessSmartConstruction(dateStr string) {
	// Build payload
	type NationData struct {
		Budget      float64        `json:"budget"`
		Happiness   float64        `json:"happiness"`
		Stability   float64        `json:"stability"`
		Buildings   map[string]int `json:"buildings"`
		DailyIncome float64        `json:"dailyIncome"`
	}

	type BuildingData struct {
		Key     string `json:"key"`
		DataKey string `json:"dataKey"`
		Name    string `json:"name"`
		Sector  string `json:"sector"`
		Biaya   int64  `json:"biaya"`
	}

	core.GlobalState.Mu.Lock()
	playerCountry := strings.ToLower(strings.TrimSpace(core.GlobalState.Player.Country))

	nations := make(map[string]NationData)
	for name, state := range core.GlobalState.NPCStates {
		if state == nil || strings.ToLower(strings.TrimSpace(name)) == playerCountry {
			continue
		}
		buildings := core.GlobalState.NPCBuildingLevels[name]
		if buildings == nil {
			buildings = make(map[string]int)
		}
		nations[name] = NationData{
			Budget:      state.Budget,
			Happiness:   state.Happiness,
			Stability:   state.Stability,
			Buildings:   buildings,
			DailyIncome: state.DailyIncome,
		}
	}

	var btList []BuildingData
	for _, bt := range core.BuildingTypes {
		dk := bt.DataKey
		if dk == "" {
			dk = bt.Key
		}
		btList = append(btList, BuildingData{
			Key:     bt.Key,
			DataKey: dk,
			Name:    bt.Name,
			Sector:  bt.Sector,
			Biaya:   bt.Biaya,
		})
	}
	core.GlobalState.Mu.Unlock()

	payload := struct {
		Nations       map[string]NationData `json:"nations"`
		BuildingTypes []BuildingData        `json:"buildingTypes"`
	}{Nations: nations, BuildingTypes: btList}

	jsonPayload, _ := json.Marshal(payload)

	cmd := exec.Command("python", PY_SMART_BUILD)
	stdin, err := cmd.StdinPipe()
	if err != nil {
		fmt.Printf("[EKONOMI] Error opening stdin for Python brain: %v\n", err)
		return
	}

	go func() {
		defer stdin.Close()
		stdin.Write(jsonPayload)
	}()

	out, err := cmd.Output()
	if err != nil {
		fmt.Printf("[EKONOMI] Python smart construction error: %v\n", err)
		return
	}

	// Parse results
	var decisions []struct {
		Nation       string `json:"nation"`
		BuildingKey  string `json:"building_key"`
		BuildingName string `json:"building_name"`
		Sector       string `json:"sector"`
		Quantity     int    `json:"quantity"`
		Cost         int    `json:"cost"`
		Reason       string `json:"reason"`
	}

	if err := json.Unmarshal(out, &decisions); err != nil {
		fmt.Printf("[EKONOMI] Error parsing Python output: %v\n", err)
		return
	}

	// Apply decisions
	core.GlobalState.Mu.Lock()
	defer core.GlobalState.Mu.Unlock()

	applied := 0
	for _, d := range decisions {
		state, ok := core.GlobalState.NPCStates[d.Nation]
		if !ok || state == nil {
			continue
		}

		// Final budget check
		if state.Budget < float64(d.Cost) {
			continue
		}

		// Apply building
		if core.GlobalState.NPCBuildingLevels[d.Nation] == nil {
			core.GlobalState.NPCBuildingLevels[d.Nation] = make(map[string]int)
		}
		core.GlobalState.NPCBuildingLevels[d.Nation][d.BuildingKey] += d.Quantity
		state.Budget = math.Max(0, state.Budget-float64(d.Cost))
		applied++

		// Generate construction news (embassy-gated)
		if playerHasEmbassyIn(d.Nation) {
			subj := fmt.Sprintf("Pembangunan Infrastruktur %s: %s", d.BuildingName, d.Nation)
			content := fmt.Sprintf("Pemerintah %s memulai proyek pembangunan %d unit %s. %s",
				d.Nation, d.Quantity, d.BuildingName, d.Reason)

			core.AddNewsItemLocked(
				fmt.Sprintf("Kantor Berita %s", d.Nation),
				subj, content, "construction", "medium", dateStr,
			)
		}
	}

	fmt.Printf("[EKONOMI] Smart construction: %d/%d decisions applied\n", applied, len(decisions))
}

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════

func playerHasEmbassyIn(nationName string) bool {
	playerCountry := strings.ToLower(strings.TrimSpace(core.GlobalState.Player.Country))
	target := strings.ToLower(strings.TrimSpace(nationName))

	if pRels, ok := core.GlobalState.Relationships[playerCountry]; ok {
		if rel, ok := pRels[target]; ok && rel != nil && rel.E == 1 {
			return true
		}
	}
	return false
}

func formatTradeValue(v int) string {
	s := fmt.Sprintf("%d", v)
	n := len(s)
	if n <= 3 {
		return s
	}
	var result []byte
	for i, c := range s {
		if i > 0 && (n-i)%3 == 0 {
			result = append(result, '.')
		}
		result = append(result, byte(c))
	}
	return string(result)
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
