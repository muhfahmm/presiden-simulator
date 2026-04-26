package server_ekonomi

import (
	"fmt"
	"io/ioutil"
	"regexp"
	"strings"
	"emserver/core"
)

// ═══════════════════════════════════════════════════════════
// TRADE LOADER
// Parses TypeScript trade partner database files at startup
// to build core.TradePartnerGraph and core.CommodityPrices
// ═══════════════════════════════════════════════════════════

// Initialize loads all trade data at server startup
func Initialize() error {
	if err := loadTradePartnerGraph(); err != nil {
		fmt.Printf("[EKONOMI] Warning: Failed to load trade partners: %v\n", err)
	}
	loadCommodityPrices()
	fmt.Printf("[EKONOMI] Initialized. %d countries in trade graph, %d commodity prices loaded.\n",
		len(core.TradePartnerGraph), len(core.CommodityPrices))
	return nil
}

// loadTradePartnerGraph scans all TS files in database_mitra_perdagangan/
func loadTradePartnerGraph() error {
	core.TradePartnerGraph = make(map[string][]string)

	basePath := "c:/fhm/em/app/frontend/src/app/pilih_negara/data/database_mitra_perdagangan/"
	continents := []string{"asia", "afrika", "eropa", "na", "sa", "oceania"}

	// Regex to extract country name from filename (e.g., "67_indonesia.ts" -> "indonesia")
	filenameRe := regexp.MustCompile(`^\d+_(.+)\.ts$`)

	// Regex to extract "mitra" values from TS content
	mitraRe := regexp.MustCompile(`"mitra":\s*"([^"]+)"`)

	totalLoaded := 0

	for _, continent := range continents {
		dir := basePath + continent
		files, err := ioutil.ReadDir(dir)
		if err != nil {
			fmt.Printf("[EKONOMI] Warning: Could not read %s: %v\n", dir, err)
			continue
		}

		for _, file := range files {
			if file.IsDir() || file.Name() == "index.ts" {
				continue
			}

			// Extract country name from filename
			matches := filenameRe.FindStringSubmatch(file.Name())
			if len(matches) < 2 {
				continue
			}
			rawName := matches[1] // e.g., "indonesia", "arab_saudi"

			// Read TS file content
			data, err := ioutil.ReadFile(dir + "/" + file.Name())
			if err != nil {
				continue
			}
			content := string(data)

			// Extract all "mitra" values
			mitraMatches := mitraRe.FindAllStringSubmatch(content, -1)
			var partners []string
			for _, m := range mitraMatches {
				if len(m) >= 2 {
					partners = append(partners, m[1])
				}
			}

			// Map underscore filename to actual NPC nation name
			npcName := resolveNPCName(rawName)
			if npcName != "" && len(partners) > 0 {
				core.TradePartnerGraph[npcName] = partners
				totalLoaded++
			}
		}
	}

	fmt.Printf("[EKONOMI] Loaded trade partners for %d countries from TypeScript database.\n", totalLoaded)
	return nil
}

// resolveNPCName converts a snake_case filename into the matching core.NpcNations entry
func resolveNPCName(rawName string) string {
	// Special case mappings
	special := map[string]string{
		"arab_saudi":             "Arab Saudi",
		"afrika_selatan":         "Afrika Selatan",
		"amerika_serikat":        "Amerika Serikat",
		"uni_emirat_arab":        "Uni Emirat Arab",
		"korea_selatan":          "Korea Selatan",
		"korea_utara":            "Korea Utara",
		"hong_kong":              "Hong Kong",
		"sri_lanka":              "Sri Lanka",
		"republik_timor_leste":   "Republik Timor Leste",
	}

	if resolved, ok := special[rawName]; ok {
		return resolved
	}

	// General case: capitalize first letter of each segment
	parts := strings.Split(rawName, "_")
	for i, p := range parts {
		if len(p) > 0 {
			parts[i] = strings.ToUpper(p[:1]) + p[1:]
		}
	}
	candidate := strings.Join(parts, " ")

	// Verify against NPC nations list
	for _, npc := range core.NpcNations {
		if strings.EqualFold(npc, candidate) {
			return npc
		}
	}

	// Try single-word match
	lower := strings.ToLower(rawName)
	for _, npc := range core.NpcNations {
		if strings.ToLower(npc) == lower {
			return npc
		}
	}

	return ""
}

// loadCommodityPrices hardcodes prices synced from tradeData.ts buyPriceMap/sellPriceMap
// Units are synced from the production database (db_ekstraksi.ts, db_agrikultur.ts, etc.)
func loadCommodityPrices() {
	core.CommodityPrices = map[string]core.CommodityPrice{
		// Minerals (from 2_db_ekstraksi.ts)
		"emas":               {Key: "emas", Label: "Emas", BuyPrice: 2580, SellPrice: 2150, Sector: "mineral", Unit: "KG"},
		"uranium":            {Key: "uranium", Label: "Uranium", BuyPrice: 110, SellPrice: 92, Sector: "mineral", Unit: "KG"},
		"batu_bara":          {Key: "batu_bara", Label: "Batu Bara", BuyPrice: 150, SellPrice: 125, Sector: "mineral", Unit: "TON"},
		"minyak_bumi":        {Key: "minyak_bumi", Label: "Minyak Bumi", BuyPrice: 95, SellPrice: 78, Sector: "mineral", Unit: "BARREL"},
		"gas_alam":           {Key: "gas_alam", Label: "Gas Alam", BuyPrice: 300, SellPrice: 245, Sector: "mineral", Unit: "MMSCFD"},
		"garam":              {Key: "garam", Label: "Garam", BuyPrice: 200, SellPrice: 150, Sector: "mineral", Unit: "TON"},
		"nikel":              {Key: "nikel", Label: "Nikel", BuyPrice: 20600, SellPrice: 17200, Sector: "mineral", Unit: "TON"},
		"litium":             {Key: "litium", Label: "Litium", BuyPrice: 16200, SellPrice: 13500, Sector: "mineral", Unit: "TON"},
		"tembaga":            {Key: "tembaga", Label: "Tembaga", BuyPrice: 10600, SellPrice: 8900, Sector: "mineral", Unit: "TON"},
		"aluminium":          {Key: "aluminium", Label: "Aluminium", BuyPrice: 2940, SellPrice: 2450, Sector: "mineral", Unit: "TON"},
		"logam_tanah_jarang": {Key: "logam_tanah_jarang", Label: "Rare Earth", BuyPrice: 768, SellPrice: 640, Sector: "mineral", Unit: "TON"},
		"bijih_besi":         {Key: "bijih_besi", Label: "Bijih Besi", BuyPrice: 132, SellPrice: 110, Sector: "mineral", Unit: "KG"},

		// Manufaktur (from 3_db_manufaktur.ts)
		"semikonduktor": {Key: "semikonduktor", Label: "Semikonduktor", BuyPrice: 1020, SellPrice: 850, Sector: "manufaktur", Unit: "UNIT"},
		"mobil":         {Key: "mobil", Label: "Mobil", BuyPrice: 54000, SellPrice: 45000, Sector: "manufaktur", Unit: "UNIT"},
		"sepeda_motor":  {Key: "sepeda_motor", Label: "Sepeda Motor", BuyPrice: 4200, SellPrice: 3500, Sector: "manufaktur", Unit: "UNIT"},
		"smelter":       {Key: "smelter", Label: "Smelter", BuyPrice: 144000, SellPrice: 120000, Sector: "manufaktur", Unit: "TON"},
		"semen_beton":   {Key: "semen_beton", Label: "Beton & Semen", BuyPrice: 150, SellPrice: 125, Sector: "manufaktur", Unit: "TON"},
		"kayu":          {Key: "kayu", Label: "Kayu", BuyPrice: 102, SellPrice: 85, Sector: "manufaktur", Unit: "M3"},
		"pupuk":         {Key: "pupuk", Label: "Pupuk", BuyPrice: 110, SellPrice: 90, Sector: "manufaktur", Unit: "TON"},

		// Olahan Pangan (from 7_db_olahan_pangan.ts)
		"air_mineral":       {Key: "air_mineral", Label: "Air Mineral", BuyPrice: 80, SellPrice: 50, Sector: "olahan_pangan", Unit: "LITER"},
		"gula":              {Key: "gula", Label: "Gula", BuyPrice: 250, SellPrice: 180, Sector: "olahan_pangan", Unit: "TON"},
		"roti":              {Key: "roti", Label: "Roti", BuyPrice: 180, SellPrice: 120, Sector: "olahan_pangan", Unit: "UNIT"},
		"pengolahan_daging": {Key: "pengolahan_daging", Label: "Olahan Daging", BuyPrice: 450, SellPrice: 380, Sector: "olahan_pangan", Unit: "TON"},
		"mie_instan":        {Key: "mie_instan", Label: "Mie Instan", BuyPrice: 50, SellPrice: 35, Sector: "olahan_pangan", Unit: "UNIT"},
		"minyak_goreng":     {Key: "minyak_goreng", Label: "Minyak Goreng", BuyPrice: 380, SellPrice: 320, Sector: "olahan_pangan", Unit: "TON"},
		"susu":              {Key: "susu", Label: "Susu", BuyPrice: 280, SellPrice: 240, Sector: "olahan_pangan", Unit: "LITER"},
		"pakan_ternak":      {Key: "pakan_ternak", Label: "Pakan Ternak", BuyPrice: 120, SellPrice: 95, Sector: "olahan_pangan", Unit: "TON"},
		"ikan_kaleng":       {Key: "ikan_kaleng", Label: "Ikan Kaleng", BuyPrice: 240, SellPrice: 200, Sector: "olahan_pangan", Unit: "TON"},
		"kopi_teh":          {Key: "kopi_teh", Label: "Kopi & Teh", BuyPrice: 260, SellPrice: 220, Sector: "olahan_pangan", Unit: "KG"},

		// Farmasi (from 8_db_farmasi.ts)
		"farmasi": {Key: "farmasi", Label: "Farmasi", BuyPrice: 650, SellPrice: 520, Sector: "farmasi", Unit: "BOX"},

		// Peternakan (from 4_db_peternakan.ts)
		"ayam_unggas":   {Key: "ayam_unggas", Label: "Ayam/Unggas", BuyPrice: 750, SellPrice: 500, Sector: "peternakan", Unit: "EKOR"},
		"sapi_perah":    {Key: "sapi_perah", Label: "Sapi Perah", BuyPrice: 2100, SellPrice: 1800, Sector: "peternakan", Unit: "LITER"},
		"sapi_potong":   {Key: "sapi_potong", Label: "Sapi Potong", BuyPrice: 3200, SellPrice: 2500, Sector: "peternakan", Unit: "EKOR"},
		"domba_kambing": {Key: "domba_kambing", Label: "Domba/Kambing", BuyPrice: 450, SellPrice: 350, Sector: "peternakan", Unit: "EKOR"},

		// Perikanan (from 6_db_perikanan.ts)
		"udang":   {Key: "udang", Label: "Udang", BuyPrice: 150, SellPrice: 100, Sector: "perikanan", Unit: "KG"},
		"ikan":    {Key: "ikan", Label: "Ikan", BuyPrice: 65, SellPrice: 45, Sector: "perikanan", Unit: "KG"},
		"mutiara": {Key: "mutiara", Label: "Mutiara", BuyPrice: 4500, SellPrice: 3800, Sector: "perikanan", Unit: "GRAM"},

		// Agrikultur (from 5_db_agrikultur.ts)
		"padi":         {Key: "padi", Label: "Padi", BuyPrice: 210, SellPrice: 140, Sector: "agrikultur", Unit: "KG"},
		"gandum":       {Key: "gandum", Label: "Gandum", BuyPrice: 140, SellPrice: 110, Sector: "agrikultur", Unit: "KG"},
		"jagung":       {Key: "jagung", Label: "Jagung", BuyPrice: 120, SellPrice: 95, Sector: "agrikultur", Unit: "KG"},
		"umbi":         {Key: "umbi", Label: "Umbi-umbian", BuyPrice: 85, SellPrice: 65, Sector: "agrikultur", Unit: "KG"},
		"kedelai":      {Key: "kedelai", Label: "Kedelai", BuyPrice: 210, SellPrice: 150, Sector: "agrikultur", Unit: "KG"},
		"kelapa_sawit": {Key: "kelapa_sawit", Label: "Kelapa Sawit", BuyPrice: 350, SellPrice: 250, Sector: "agrikultur", Unit: "LITER"},
		"teh":          {Key: "teh", Label: "Teh", BuyPrice: 160, SellPrice: 125, Sector: "agrikultur", Unit: "KG"},
		"kopi":         {Key: "kopi", Label: "Kopi", BuyPrice: 220, SellPrice: 180, Sector: "agrikultur", Unit: "KG"},
		"kakao":        {Key: "kakao", Label: "Kakao", BuyPrice: 240, SellPrice: 200, Sector: "agrikultur", Unit: "KG"},
		"tebu":         {Key: "tebu", Label: "Tebu", BuyPrice: 80, SellPrice: 60, Sector: "agrikultur", Unit: "KG"},
		"sayur":        {Key: "sayur", Label: "Sayur", BuyPrice: 95, SellPrice: 75, Sector: "agrikultur", Unit: "KG"},
		"karet":        {Key: "karet", Label: "Karet", BuyPrice: 180, SellPrice: 145, Sector: "agrikultur", Unit: "KG"},
		"kapas":        {Key: "kapas", Label: "Kapas", BuyPrice: 140, SellPrice: 115, Sector: "agrikultur", Unit: "KG"},
		"tembakau":     {Key: "tembakau", Label: "Tembakau", BuyPrice: 190, SellPrice: 155, Sector: "agrikultur", Unit: "KG"},

		// Military
		"pabrik_amunisi": {Key: "pabrik_amunisi", Label: "Amunisi", BuyPrice: 500, SellPrice: 350, Sector: "militer", Unit: "UNIT"},
	}
}

