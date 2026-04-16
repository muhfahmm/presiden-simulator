package main

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"math"
	"net/http"
	"os/exec"
	"regexp"
	"sort"
	"sync"
	"time"

	"emserver/core"
	"emserver/server_hubungan"
	"emserver/server_inbox"
)

var (
	sseClients   = make(map[*SSEClient]bool)
	sseClientsMu sync.Mutex
)


func init() {
	core.NpcNations = []string{
		"Afganistan", "Afrika Selatan", "Albania", "Aljazair", "Amerika Serikat", 
		"Andorra", "Angola", "Antigua Dan Barbuda", "Arab Saudi", "Argentina", 
		"Armenia", "Australia", "Austria", "Azerbaijan", "Bahama", 
		"Bahrain", "Bangladesh", "Barbados", "Belanda", "Belarus", 
		"Belgia", "Belize", "Benin", "Bermuda", "Bhutan", 
		"Bolivia", "Bosnia Dan Hercegovina", "Botswana", "Brazil", "Brunei", 
		"Bulgaria", "Burkina Faso", "Burundi", "Ceko", "Chad", 
		"Chile", "China", "Costa Rica", "Curacao", "Denmark", 
		"Djibouti", "Dominika", "Ekuador", "El Salvador", "Eritrea", 
		"Estonia", "Eswatini", "Ethiopia", "Fiji", "Filipina", 
		"Finlandia", "Gabon", "Gambia", "Georgia", "Ghana", 
		"Gibraltar", "Greenland", "Grenada", "Guam", "Guatemala", 
		"Guiana Prancis", "Guinea", "Guinea Bissau", "Guyana", "Haiti", 
		"Honduras", "Hong Kong", "Hungaria", "India", "Indonesia", 
		"Inggris", "Irak", "Iran", "Irlandia", "Islandia", 
		"Israel", "Italia", "Jamaika", "Jepang", "Jerman", 
		"Kamboja", "Kamerun", "Kanada", "Kazakhstan", "Kenya", 
		"Kepulauan Faroe", "Kirgizstan", "Kiribati", "Kolombia", "Komoro", 
		"Kongo", "Korea Selatan", "Korea Utara", "Kosovo", "Kroasia", 
		"Kuba", "Kuwait", "Laos", "Latvia", "Lebanon", 
		"Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
		"Luksemburg", "Madagaskar", "Makau", "Makedonia Utara", "Malawi", 
		"Malaysia", "Maldives", "Mali", "Malta", "Maroko", 
		"Marshall", "Mauritania", "Mauritius", "Meksiko", "Mesir", 
		"Mikronesia", "Moldova", "Monako", "Mongolia", "Montenegro", 
		"Mozambik", "Myanmar", "Namibia", "Nauru", "Nepal", 
		"Niger", "Nigeria", "Nikaragua", "Norwegia", "Oman", 
		"Pakistan", "Palau", "Palestina", "Panama", "Pantai Gading", 
		"Papua Nugini", "Paraguay", "Peru", "Polandia", "Portugal", 
		"Prancis", "Puerto Rico", "Qatar", "Republik Afrika Tengah", "Republik Demokratik Kongo", 
		"Republik Dominika", "Republik Rumania", "Republik Serbia", "Republik Sudan", "Republik Tanzania", 
		"Republik Timor Leste", "Republik Uganda", "Republik Zambia", "Republik Zimbabwe", "Rusia", 
		"Rwanda", "Saint Kitts Dan Nevis", "Saint Lucia", "Saint Vincent Dan Grenadine", "Samoa", 
		"Samoa Amerika", "San Marino", "Sao Tome Dan Principe", "Selandia Baru", "Senegal", 
		"Seychelles", "Sierra Leone", "Singapura", "Siprus", "Slovenia", 
		"Slowakia", "Somalia", "Spanyol", "Sri Lanka", "Sudan Selatan", 
		"Suriah", "Suriname", "Swedia", "Swiss", "Tahiti", 
		"Taiwan", "Tajikistan", "Tanjung Verde", "Thailand", "Togo", 
		"Tonga", "Trinidad Dan Tobago", "Tunisia", "Turki", "Turkmenistan", 
		"Tuvalu", "Ukraina", "Uni Emirat Arab", "Uruguay", "Uzbekistan", 
		"Vanuatu", "Vatikan", "Venezuela", "Vietnam", "Yaman", 
		"Yordania", "Yunani", 
	}

	core.GlobalState = core.SimulationState{
		GameDate:          time.Date(2026, 1, 1, 0, 0, 0, 0, time.UTC).Format("2006-01-02"),
		IsPaused:          true,
		Speed:             1,
		News:              []core.NewsItem{},
		Inbox:             server_inbox.GetInitialInboxBatch("01 Jan 2026"),
		DayCounter:        0,
		Player:            core.PlayerState{},
		NPCStates:         make(map[string]*core.NPCNationState),
		NPCBuildingLevels: make(map[string]map[string]int),
		LastProcessedMonth: 0,
	}
}


// [SSEClient type removed – now redundant or simplified]
type SSEClient struct {
	ch chan []byte
}

// [Global buildingTypes removed – now handled in core.BuildingTypes]

// parseTypeScriptBuildings parses a TypeScript file to extract building data
func parseTypeScriptBuildings(content []byte, defaultSector string) []core.BuildingType {
	var buildings []core.BuildingType
	contentStr := string(content)
	
	// Better approach: find each building block ending with },
	// and extract name, biaya, and waktu within that block.
	
	// Find all potential building blocks: "key": { ... } or key: { ... }
	blockPattern := regexp.MustCompile(`(?s)(?:"?([\w_]+)"?):\s*\{([^}]*)\}`)
	matches := blockPattern.FindAllStringSubmatch(contentStr, -1)
	
	for _, match := range matches {
		if len(match) < 3 {
			continue
		}
		key := match[1]
		block := match[2]
		
		// Extract dataKey
		dataKey := key
		dataKeyMatch := regexp.MustCompile(`dataKey:\s*"([^"]+)"`).FindStringSubmatch(block)
		if len(dataKeyMatch) >= 2 {
			dataKey = dataKeyMatch[1]
		}

		// Extract Name (prioritize label, then deskripsi)
		name := ""
		labelMatch := regexp.MustCompile(`label:\s*"([^"]+)"`).FindStringSubmatch(block)
		descMatch := regexp.MustCompile(`deskripsi:\s*"([^"]+)"`).FindStringSubmatch(block)
		
		if len(labelMatch) >= 2 {
			name = labelMatch[1]
		} else if len(descMatch) >= 2 {
			name = descMatch[1]
		}
		
		if name == "" {
			continue // Skip if no name found
		}
		
		// Extract Biaya
		var biaya int64 = 0
		biayaMatch := regexp.MustCompile(`biaya_pembangunan:\s*(\d+)`).FindStringSubmatch(block)
		if len(biayaMatch) >= 2 {
			fmt.Sscanf(biayaMatch[1], "%d", &biaya)
		}
		
		// Extract Waktu
		waktu := 0
		waktuMatch := regexp.MustCompile(`waktu_pembangunan:\s*(\d+)`).FindStringSubmatch(block)
		if len(waktuMatch) >= 2 {
			fmt.Sscanf(waktuMatch[1], "%d", &waktu)
		}
		
		// Only add if we found at least one of cost or time (usually both should be there)
		if biaya > 0 || waktu > 0 {
			buildings = append(buildings, core.BuildingType{
				Key:     key,
				DataKey: dataKey,
				Name:    name,
				Sector:  defaultSector,
				Biaya:   biaya,
				Waktu:   waktu,
			})
		}
	}
	
	return buildings
}

// loadBuildingsFromTypeScript reads building data from TypeScript database files
func loadBuildingsFromTypeScript() error {
	core.BuildingTypes = []core.BuildingType{}
	
	// Use absolute path to ensure files are found regardless of where the binary is run
	basePath := "c:/fhm/em/app/frontend/src/app/database/data/semua_fitur_negara/"
	
	fmt.Printf("[GO] Loading buildings from absolute path: %s\n", basePath)
	
	// Define all the database files to load with their sectors
	dbFiles := []struct {
		path    string
		sector  string
		sectorID string
	}{
		// Produksi - Listrik Nasional
		{basePath + "1_pembangunan/1_produksi/1_sektor_listrik_nasional/1_db_listrik.ts", "Listrik Nasional", "produksi-1"},
		// Produksi - Mineral Kritis  
		{basePath + "1_pembangunan/1_produksi/2_sektor_mineral_kritis/2_db_ekstraksi.ts", "Mineral Kritis", "produksi-2"},
		// Produksi - Manufaktur
		{basePath + "1_pembangunan/1_produksi/3_manufaktur/3_db_manufaktur.ts", "Manufaktur", "produksi-3"},
		// Produksi - Peternakan, Agrikultur, Perikanan, Olahan Pangan, Farmasi
		{basePath + "1_pembangunan/1_produksi/4_sektor_peternakan/4_db_peternakan.ts", "Peternakan", "produksi-4"},
		{basePath + "1_pembangunan/1_produksi/5_sektor_agrikultur/5_db_agrikultur.ts", "Agrikultur", "produksi-5"},
		{basePath + "1_pembangunan/1_produksi/6_sektor_perikanan/6_db_perikanan.ts", "Perikanan", "produksi-6"},
		{basePath + "1_pembangunan/1_produksi/7_sektor_olahan_pangan/7_db_olahan_pangan.ts", "Olahan Pangan", "produksi-7"},
		{basePath + "1_pembangunan/1_produksi/8_sektor_farmasi/8_db_farmasi.ts", "Farmasi", "produksi-8"},
		
		// Tempat Umum - Infrastruktur, Pendidikan, Kesehatan, Hukum, Olahraga, Komersial, Hiburan
		{basePath + "1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/index.ts", "Infrastruktur", "umum-1"},
		{basePath + "1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/index.ts", "Pendidikan", "umum-2"},
		{basePath + "1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/index.ts", "Kesehatan", "umum-3"},
		{basePath + "1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/index.ts", "Hukum", "umum-4"},
		{basePath + "1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/index.ts", "Olahraga", "umum-5"},
		{basePath + "1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/index.ts", "Komersial", "umum-6"},
		{basePath + "1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/index.ts", "Hiburan", "umum-7"},
		
		// Hunian Permukiman
		{basePath + "1_pembangunan/3_tempat_umum/2_hunian_permukiman/index.ts", "Hunian", "umum-8"},
	}
	
	// Load each file
	loadedCount := 0
	for _, dbFile := range dbFiles {
		data, err := ioutil.ReadFile(dbFile.path)
		if err != nil {
			fmt.Printf("[GO] Warning: Could not load %s: %v\n", dbFile.path, err)
			continue
		}
		
		buildings := parseTypeScriptBuildings(data, dbFile.sector)
		for i := range buildings {
			buildings[i].SectorID = dbFile.sectorID
			core.BuildingTypes = append(core.BuildingTypes, buildings[i])
		}
		loadedCount += len(buildings)
		fmt.Printf("[GO] Loaded %d buildings from %s\n", len(buildings), dbFile.path)
	}
	
	// Load Pertahanan sectors
	pertahananFiles := []struct {
		path   string
		sector string
		id     string
	}{
		{basePath + "2_pertahanan/1_intelijen/index.ts", "Intelijen", "militer-1"},
		{basePath + "2_pertahanan/2_produksi_militer/index.ts", "Produksi Militer", "militer-2"},
		{basePath + "2_pertahanan/4_armada_polisi/index.ts", "Armada Polisi", "militer-3"},
		{basePath + "2_pertahanan/5_manajemen_pertahanan/index.ts", "Manajemen Pertahanan", "militer-4"},
		{basePath + "2_pertahanan/3_armada_militer/index.ts", "Armada Militer", "armada-1"},
	}
	
	for _, pf := range pertahananFiles {
		data, err := ioutil.ReadFile(pf.path)
		if err != nil {
			fmt.Printf("[GO] Warning: Could not load %s: %v\n", pf.path, err)
			continue
		}
		
		buildings := parseTypeScriptBuildings(data, pf.sector)
		for i := range buildings {
			buildings[i].SectorID = pf.id
			core.BuildingTypes = append(core.BuildingTypes, buildings[i])
		}
		loadedCount += len(buildings)
		fmt.Printf("[GO] Loaded %d buildings from %s\n", len(buildings), pf.path)
	}
	
	fmt.Printf("[GO] Total buildings loaded: %d\n", len(core.BuildingTypes))
	return nil
}

// ═══════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════

func main() {
	// Load relationship database
	if err := server_hubungan.InitializeRelationships(); err != nil {
		fmt.Printf("[GO] Warning: Could not initialize international relationships: %v\n", err)
	}

	// 1. Start the Global Ticker (Simulation Engine)
	go simulationEngine()

	// 2. SSE Endpoint (The Single Stream)
	http.HandleFunc("/api/game/sync", handleSSE)

	// 3. Control Endpoints (Pause/Resume/Speed from UI)
	http.HandleFunc("/api/game/control", handleControl)

	// 4. Player Init Endpoint (Receives initial stats from UI)
	http.HandleFunc("/api/game/init-player", handleInitPlayer)

	// 5. Data Endpoints (Fallback REST)
	http.HandleFunc("/api/berita", handleBerita)
	http.HandleFunc("/api/inbox", handleInbox)
	http.HandleFunc("/api/health", handleHealth)
	http.HandleFunc("/api/game/reset", handleReset)

	// Initialize NPC States
	for _, name := range core.NpcNations {
		tier := 1 + core.Rng.Intn(3)
		core.GlobalState.NPCStates[name] = &core.NPCNationState{
			Name:       name,
			GDPGrowth:  1.0 + core.Rng.Float64()*3.0,
			Stability:  60.0 + core.Rng.Float64()*30.0,
			EconomicTier: tier,
		}
	}

	fmt.Println("═══════════════════════════════════════════════")
	fmt.Println("[GO] Server-Authoritative Simulation Engine v2")
	fmt.Println("[GO] AI Construction Simulation: ACTIVE")
	fmt.Println("[GO] Listening on :8081")
	fmt.Println("═══════════════════════════════════════════════")
	http.ListenAndServe(":8081", nil)
}

// ═══════════════════════════════════════════════════════════
// SIMULATION ENGINE (The Brain)
// ═══════════════════════════════════════════════════════════

func simulationEngine() {
	// Base tick rate: 100ms (allows responsive speed changes)
	ticker := time.NewTicker(100 * time.Millisecond)
	tickAccumulator := 0

	for range ticker.C {
		core.GlobalState.Mu.Lock()
		isPaused := core.GlobalState.IsPaused
		speed := core.GlobalState.Speed
		core.GlobalState.Mu.Unlock()

		if isPaused {
			continue
		}

		// Accumulate ticks based on speed
		tickAccumulator += speed
		if tickAccumulator < 10 {
			continue
		}
		tickAccumulator = 0

		// === ADVANCE ONE GAME DAY ===
		core.GlobalState.Mu.Lock()

		// Parse and advance date
		currentDate, err := time.Parse("2006-01-02", core.GlobalState.GameDate)
		if err != nil {
			fmt.Printf("[GO] ERROR Parsing Date: %v (Value: %s)\n", err, core.GlobalState.GameDate)
		}
		nextDate := currentDate.AddDate(0, 0, 1)
		core.GlobalState.GameDate = nextDate.Format("2006-01-02")
		core.GlobalState.DayCounter++

		fmt.Printf("[GO] Tick: %s (Day %d) | Speed: %d\n", core.GlobalState.GameDate, core.GlobalState.DayCounter, speed)

		// --- Process Player Nation (Server-Side) ---
		processPlayerDay(nextDate)

		// --- Process 206 NPC Nations (Server-Side) ---
		processNPCDay(nextDate)

		// --- Process Inbox & Events (Server-Side) ---
		server_inbox.ProcessInboxDay(nextDate)

		// --- Generate periodic news ---
		if core.GlobalState.DayCounter%7 == 0 {
			generateWeeklyNews(nextDate)
		}

		// --- Update Relationships DAILY ---
		server_hubungan.UpdateDailyRelationsLocked()

		// Broadcast state to all SSE clients
		var snapshot []byte
		if len(core.GlobalState.News) != lastBroadcastNewsLen || len(core.GlobalState.Inbox) != lastBroadcastInboxLen {
			// Pre-calculated length check for optimization
			lastBroadcastNewsLen = len(core.GlobalState.News)
			lastBroadcastInboxLen = len(core.GlobalState.Inbox)
			snapshot, _ = json.Marshal(core.GlobalState) // Full payload
		} else {
			// Lightweight: player stats only inside the lock
			subState := struct {
				GameDate   string                               `json:"gameDate"`
				IsPaused   bool                                 `json:"isPaused"`
				Speed      int                                  `json:"speed"`
				DayCounter int                                  `json:"dayCounter"`
				Player     core.PlayerState                     `json:"player"`
				Relationships map[string]map[string]*core.Relationship `json:"relationships"`
			}{
				GameDate:   core.GlobalState.GameDate,
				IsPaused:   core.GlobalState.IsPaused,
				Speed:      core.GlobalState.Speed,
				DayCounter: core.GlobalState.DayCounter,
				Player:     core.GlobalState.Player,
				Relationships: core.GlobalState.Relationships,
			}
			snapshot, _ = json.Marshal(subState)
			if core.GlobalState.DayCounter % 5 == 0 {
				fmt.Printf("[SSE] Broadding Daily Sync (Day %d) with Relationships...\n", core.GlobalState.DayCounter)
			}
		}
		core.GlobalState.Mu.Unlock()

		// Check for Month Change (Quarterly Detection)
		if nextDate.Month() != core.GlobalState.LastProcessedMonth {
			oldMonth := core.GlobalState.LastProcessedMonth
			core.GlobalState.LastProcessedMonth = nextDate.Month()
			
			if oldMonth == 3 || oldMonth == 6 || oldMonth == 9 || oldMonth == 12 {
				quarter := 0
				switch oldMonth {
				case 3: quarter = 1
				case 6: quarter = 2
				case 9: quarter = 3
				case 12: quarter = 4
				}
				go invokeQuarterlyEconomicAI(nextDate, quarter)
			}
		}

		broadcastSSE(snapshot)
	}
}


// ═══════════════════════════════════════════════════════════
// PLAYER NATION PROCESSING (Server-Side)
// ═══════════════════════════════════════════════════════════

func processPlayerDay(date time.Time) {
	if !core.GlobalState.Player.Initialized {
		return // Wait until frontend sends initial state
	}

	// 1. Budget: Add daily income (rounded to integer)
	core.GlobalState.Player.Budget = math.Round(core.GlobalState.Player.Budget + core.GlobalState.Player.DailyIncome)

	// 2. Population: Grow based on population size (realistic growth rate)
	growthRate := 0.00003
	popGrowth := core.GlobalState.Player.Population * growthRate
	popGrowth += float64(core.Rng.Intn(500)) - 250
	if popGrowth < 0 {
		popGrowth = 0
	}
	core.GlobalState.Player.PopulationDelta = math.Round(popGrowth)
	core.GlobalState.Player.Population = math.Round(core.GlobalState.Player.Population + popGrowth)

	// 3. Happiness: Weekly decay (every 7 days)
	if core.GlobalState.DayCounter%7 == 0 {
		decay := 0.1 + core.Rng.Float64()*0.3 // 0.1% - 0.4% weekly decay
		core.GlobalState.Player.Happiness -= decay
		if core.GlobalState.Player.Happiness > 100 {
			core.GlobalState.Player.Happiness = 100
		}
		// Round to 1 decimal
		core.GlobalState.Player.Happiness = math.Round(core.GlobalState.Player.Happiness*10) / 10
	}

	// 4. Stability: Small weekly fluctuation
	if core.GlobalState.DayCounter%7 == 0 {
		fluctuation := (core.Rng.Float64() - 0.5) * 0.5 // ±0.25%
		core.GlobalState.Player.Stability += fluctuation
		if core.GlobalState.Player.Stability < 20 {
			core.GlobalState.Player.Stability = 20
		}
		if core.GlobalState.Player.Stability > 100 {
			core.GlobalState.Player.Stability = 100
		}
		// Round to 1 decimal
		core.GlobalState.Player.Stability = math.Round(core.GlobalState.Player.Stability*10) / 10
	}
}

func processNPCDay(date time.Time) {
	dateStr := date.Format("02 Jan 2006")

	// --- Daily AI Construction Decisions ---
	numBuilders := 2 + core.Rng.Intn(4) // 2 to 5 nations per day
	if numBuilders > len(core.NpcNations) {
		numBuilders = 3
	}

	// Shuffle and pick random nations
	shuffled := make([]int, len(core.NpcNations))
	for i := range shuffled {
		shuffled[i] = i
	}
	core.Rng.Shuffle(len(shuffled), func(i, j int) {
		shuffled[i], shuffled[j] = shuffled[j], shuffled[i]
	})

	// Skip construction news if no building data available
	if len(core.BuildingTypes) == 0 {
		return
	}

	constructionNewsToday := 0
	maxConstructionPerDay := 3 // Cap to prevent news flood

	for k := 0; k < numBuilders && constructionNewsToday < maxConstructionPerDay; k++ {
		nationIdx := shuffled[k]
		nation := core.NpcNations[nationIdx]
		building := core.BuildingTypes[core.Rng.Intn(len(core.BuildingTypes))]

		// Level Tracking & Transition Logic (Authoritative in GlobalState)
		if core.GlobalState.NPCBuildingLevels[nation] == nil {
			core.GlobalState.NPCBuildingLevels[nation] = make(map[string]int)
		}
		
		levelKey := building.DataKey
		currentLevel, exists := core.GlobalState.NPCBuildingLevels[nation][levelKey]
		if !exists {
			if nation == "Palau" && (levelKey == "helipad" || levelKey == "helikopter_polisi") {
				currentLevel = 4
			} else {
				currentLevel = core.Rng.Intn(10)
			}
		}
		
		nextLevel := currentLevel + 1
		core.GlobalState.NPCBuildingLevels[nation][building.Key] = nextLevel

		transitionText := fmt.Sprintf("(%d ke %d)", currentLevel, nextLevel)

		// Generate construction news with actual price from JSON database
		subject := fmt.Sprintf("%s Inisiasi Proyek Konstruksi %s", nation, building.Name)
		content := fmt.Sprintf(
			"Pemerintah %s hari ini mengumumkan inisiasi proyek konstruksi %s %s di sektor %s. "+
				"Proyek tersebut membutuhkan biaya investasi sebesar %s dengan estimasi waktu pengerjaan %d hari. "+
				"Kebijakan ini diambil oleh otoritas %s sebagai langkah strategis untuk memperkuat "+
				"kapasitas %s nasional di masa mendatang.",
			nation, building.Name, transitionText, building.Sector,
			formatCurrency(building.Biaya), building.Waktu,
			nation, getSectorDesc(building.Sector),
		)

		core.AddNewsItemLocked(
			fmt.Sprintf("Kementerian PU %s", nation),
			subject,
			content,
			"construction",
			"medium",
			dateStr,
		)
		constructionNewsToday++
	}

	// --- Daily Economic/Diplomatic Events (lower frequency) ---
	if core.GlobalState.DayCounter%3 == 0 {
		ecoNation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		ecoEvents := []struct{ subj, content string }{
			{
				fmt.Sprintf("%s Umumkan Pertumbuhan GDP Kuartal Ini", ecoNation),
				fmt.Sprintf("Bank Sentral %s melaporkan pertumbuhan ekonomi sebesar %.1f%% pada kuartal ini, didorong oleh peningkatan ekspor dan investasi domestik.", ecoNation, 1.0+core.Rng.Float64()*5.0),
			},
			{
				fmt.Sprintf("Reformasi Pajak Baru di %s", ecoNation),
				fmt.Sprintf("Parlemen %s mengesahkan undang-undang reformasi pajak baru yang bertujuan meningkatkan pendapatan negara dan menarik investasi asing.", ecoNation),
			},
			{
				fmt.Sprintf("%s Tingkatkan Anggaran Infrastruktur", ecoNation),
				fmt.Sprintf("Pemerintah %s mengalokasikan tambahan anggaran untuk pembangunan infrastruktur di seluruh wilayah, menargetkan konektivitas yang lebih baik antar kota.", ecoNation),
			},
		}
		ev := ecoEvents[core.Rng.Intn(len(ecoEvents))]
		core.AddNewsItemLocked("Reuters Global", ev.subj, ev.content, "economy", "low", dateStr)
	}

	if core.GlobalState.DayCounter%5 == 0 {
		n1 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		n2 := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		for n2 == n1 {
			n2 = core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		}
		dipEvents := []struct{ subj, content string }{
			{
				fmt.Sprintf("%s dan %s Perkuat Hubungan Bilateral", n1, n2),
				fmt.Sprintf("Menteri Luar Negeri %s dan %s bertemu untuk membahas penguatan kerjasama di bidang perdagangan, pendidikan, dan pertahanan.", n1, n2),
			},
			{
				fmt.Sprintf("Perjanjian Dagang Baru Antara %s - %s", n1, n2),
				fmt.Sprintf("%s dan %s menandatangani perjanjian perdagangan bilateral senilai miliaran dolar yang diharapkan meningkatkan volume ekspor kedua negara.", n1, n2),
			},
		}
		ev := dipEvents[core.Rng.Intn(len(dipEvents))]
		core.AddNewsItemLocked("Kantor Berita Internasional", ev.subj, ev.content, "diplomacy", "low", dateStr)
	}

	if core.GlobalState.DayCounter%30 == 0 {
		go invokePolyglotWorkers(dateStr)
	}
}

func getSectorDesc(sector string) string {
	switch sector {
	// Produksi sectors
	case "Listrik Nasional":
		return "sektor energi nasional"
	case "Mineral Kritis":
		return "sektor pertambangan strategis"
	case "Manufaktur":
		return "industri manufaktur"
	case "Peternakan":
		return "sektor peternakan"
	case "Agrikultur":
		return "sektor pertanian"
	case "Perikanan":
		return "sektor perikanan"
	case "Olahan Pangan":
		return "industri pengolahan pangan"
	case "Farmasi":
		return "industri farmasi"
	
	// Tempat Umum sectors
	case "Infrastruktur":
		return "infrastruktur dan transportasi"
	case "Pendidikan":
		return "sektor pendidikan"
	case "Kesehatan":
		return "sektor kesehatan"
	case "Hukum":
		return "sistem peradilan dan hukum"
	case "Olahraga":
		return "fasilitas olahraga"
	case "Komersial":
		return "sektor komersial"
	case "Hiburan":
		return "fasilitas rekreasi"
	
	// Pertahanan sectors
	case "Intelijen":
		return "sistem intelijen nasional"
	case "Produksi Militer":
		return "industri pertahanan"
	case "Komando Polisi", "Pendidikan Polisi", "Polisi Wilayah", "Armada Polisi", "Surveillance":
		return "keamanan internal"
	case "Manajemen Pertahanan":
		return "sistem pertahanan nasional"
	
	// Armada Militer
	case "Armada Darat":
		return "kekuatan darat"
	case "Armada Laut":
		return "kekuatan maritim"
	case "Armada Udara":
		return "kekuatan udara"
	
	default:
		return "pembangunan nasional"
	}
}

// formatCurrency returns the raw number with dots as thousand separators (e.g., 1.000.000)
func formatCurrency(amount int64) string {
	s := fmt.Sprintf("%d", amount)
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

// invokeQuarterlyEconomicAI runs the Python AI to update global 206 nation stats
func invokeQuarterlyEconomicAI(date time.Time, quarter int) {
	core.GlobalState.Mu.Lock()
	dateStr := date.Format("02 Jan 2006")
	playerCountry := core.GlobalState.Player.Country
	playerBudget := core.GlobalState.Player.Budget
	playerHappiness := core.GlobalState.Player.Happiness
	core.GlobalState.Mu.Unlock()

	fmt.Printf("[GO] Triggering Quarterly Economic AI for Q%d...\n", quarter)

	// 1. Prepare Payload
	payload := struct {
		Quarter int                        `json:"quarter"`
		Nations map[string]*core.NPCNationState `json:"nations"`
	}{
		Quarter: quarter,
		Nations: core.GlobalState.NPCStates,
	}

	jsonPayload, _ := json.Marshal(payload)

	// 2. Execute Python Worker
	cmd := exec.Command("python", "src/app/server/python/strategy.py")
	stdin, err := cmd.StdinPipe()
	if err != nil {
		fmt.Printf("[GO] Error: Failed to open stdin for Python worker: %v\n", err)
		return
	}

	go func() {
		defer stdin.Close()
		io.WriteString(stdin, string(jsonPayload))
	}()

	out, err := cmd.Output()
	if err != nil {
		fmt.Printf("[GO] Error: Python quarterly worker failed: %v\n", err)
		return
	}

	// 3. Parse Results
	var results map[string]float64
	if err := json.Unmarshal(out, &results); err != nil {
		fmt.Printf("[GO] Error: Failed to parse Python response: %v\n", err)
		return
	}

	// 4. Update States & Find Highlights
	type pair struct {
		name   string
		growth float64
	}
	var allGrowth []pair

	core.GlobalState.Mu.Lock()
	for name, growth := range results {
		if nation, ok := core.GlobalState.NPCStates[name]; ok {
			nation.GDPGrowth = growth
			allGrowth = append(allGrowth, pair{name, growth})
		}
	}
	core.GlobalState.Mu.Unlock()

	// Sort for highlights
	sort.Slice(allGrowth, func(i, j int) bool {
		return allGrowth[i].growth > allGrowth[j].growth
	})

	// 5. Generate News Highlight
	if len(allGrowth) > 5 {
		top := allGrowth[0]
		bottom := allGrowth[len(allGrowth)-1]

		subject := fmt.Sprintf("Laporan Ekonomi Global Kuartal %d", quarter)
		content := fmt.Sprintf(
			"Analisis ekonomi kuartal %d menunjukkan dinamika global yang beragam. "+
				"%s memimpin pertumbuhan dengan +%.1f%%, sementara %s mencatat performa terendah dengan %.1f%%. "+
				"Secara keseluruhan, ekonomi dunia sedang berada dalam fase adaptasi strategis.",
			quarter, top.name, top.growth, bottom.name, bottom.growth,
		)
		core.AddNewsItem("Python AI Strategy", subject, content, "economy", "high", dateStr)
	}

	// 6. Generate Player Inbox Report
	playerGrowth := results[playerCountry]
	if playerGrowth == 0 {
		playerGrowth = 0.5 + core.Rng.Float64()*1.5 // Fallback if player nation not in NPC list
	}

	inboxSubject := fmt.Sprintf("Laporan Ekonomi Kuartal %d - %s", quarter, playerCountry)
	inboxContent := fmt.Sprintf(
		"Sayyidi, berikut adalah ringkasan performa ekonomi %s untuk Kuartal %d.\n\n"+
			"- Pertumbuhan GDP: %.2f%%\n"+
			"- Saldo Anggaran saat ini: %s EM\n"+
			"- Tingkat Kebahagiaan: %.1f%%\n\n"+
			"Staf ahli ekonomi kami menyarankan pengawasan ketat terhadap stabilitas nasional guna mempertahankan momentum pertumbuhan ini.",
		playerCountry, quarter, playerGrowth, formatCurrency(int64(playerBudget)), playerHappiness,
	)
	
	core.AddInboxItem("Lembaga Analisis Ekonomi", inboxSubject, inboxContent, "finance", "high", false, "", dateStr)

	fmt.Printf("[GO] Quarterly Economic Update Q%d finalized.\n", quarter)
}


func invokePolyglotWorkers(dateStr string) {
	// C++ Worker (Construction Math)
	cppOut, err := exec.Command("src/app/server/cpp/worker.exe").Output()
	if err == nil && len(cppOut) > 0 {
		core.AddNewsItem("C++ Engine", "Kalkulasi Infrastruktur Global", string(cppOut), "construction", "low", dateStr)
	}

	// Python Worker (Strategy)
	pyOut, err := exec.Command("python", "src/app/server/python/strategy.py").Output()
	if err == nil && len(pyOut) > 0 {
		core.AddNewsItem("Python AI", "Analisis Strategi Ekonomi", string(pyOut), "economy", "low", dateStr)
	}

	// Rust Worker (Compute)
	rustOut, err := exec.Command("src/app/server/rust/worker.exe").Output()
	if err == nil && len(rustOut) > 0 {
		core.AddNewsItem("Rust Engine", "Pemrosesan Data Militer", string(rustOut), "global", "low", dateStr)
	}

	// Java Worker (Logic)
	javaOut, err := exec.Command("java", "-cp", "src/app/server/java", "Main").Output()
	if err == nil && len(javaOut) > 0 {
		core.AddNewsItem("Java Logic", "Manajemen Diplomasi Global", string(javaOut), "diplomacy", "low", dateStr)
	}
}

func generateWeeklyNews(date time.Time) {
	core.AddNewsItemLocked(
		"Lensa Global (Server)",
		fmt.Sprintf("Laporan Mingguan - %s", date.Format("02 Jan 2006")),
		fmt.Sprintf("Simulasi 207 negara berjalan lancar. Hari ke-%d. Semua kalkulasi pembangunan, ekonomi, dan diplomasi diproses di backend Go tanpa beban browser.", core.GlobalState.DayCounter),
		"global",
		"low",
		date.Format("02 Jan 2006"),
	)
}

// [Local addNewsItem removed – now handled in core.AddNewsItem]


// [Legacy addInboxItem removed. Now handled in inbox.go]

// ═══════════════════════════════════════════════════════════
// SSE (Server-Sent Events) - Zero-Polling Architecture
// ═══════════════════════════════════════════════════════════

type SyncPayload struct {
	GameDate   string           `json:"gameDate"`
	IsPaused   bool             `json:"isPaused"`
	Speed      int              `json:"speed"`
	DayCounter int              `json:"dayCounter"`
	News       []core.NewsItem  `json:"news,omitempty"`
	Inbox      []core.InboxItem `json:"inbox,omitempty"`
	Player     core.PlayerState                             `json:"player"`
	Relationships map[string]map[string]*core.Relationship `json:"relationships,omitempty"`
}

var lastBroadcastNewsLen int = 0
var lastBroadcastInboxLen int = 0

func createSnapshot() []byte {
	payload := SyncPayload{
		GameDate:   core.GlobalState.GameDate,
		IsPaused:   core.GlobalState.IsPaused,
		Speed:      core.GlobalState.Speed,
		DayCounter: core.GlobalState.DayCounter,
		News:       core.GlobalState.News,
		Inbox:      core.GlobalState.Inbox,
		Player:     core.GlobalState.Player,
		Relationships: core.GlobalState.Relationships,
	}
	lastBroadcastNewsLen = len(core.GlobalState.News)
	lastBroadcastInboxLen = len(core.GlobalState.Inbox)
	data, _ := json.Marshal(payload)
	return data
}

// Lightweight snapshot — player stats only, no news (saves bandwidth)
func createPlayerSnapshot() []byte {
	payload := SyncPayload{
		GameDate:   core.GlobalState.GameDate,
		IsPaused:   core.GlobalState.IsPaused,
		Speed:      core.GlobalState.Speed,
		DayCounter: core.GlobalState.DayCounter,
		Player:     core.GlobalState.Player,
	}
	data, _ := json.Marshal(payload)
	return data
}


func handleSSE(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/event-stream")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Connection", "keep-alive")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	flusher, ok := w.(http.Flusher)
	if !ok {
		http.Error(w, "SSE not supported", http.StatusInternalServerError)
		return
	}

	client := &SSEClient{ch: make(chan []byte, 64)}
	sseClientsMu.Lock()
	sseClients[client] = true
	sseClientsMu.Unlock()

	// Send initial state immediately
	core.GlobalState.Mu.Lock()
	initial := createSnapshot()
	core.GlobalState.Mu.Unlock()
	fmt.Fprintf(w, "data: %s\n\n", initial)
	flusher.Flush()

	fmt.Printf("[SSE] Client connected. Total: %d\n", len(sseClients))

	// Stream loop
	ctx := r.Context()
	for {
		select {
		case <-ctx.Done():
			sseClientsMu.Lock()
			delete(sseClients, client)
			sseClientsMu.Unlock()
			fmt.Printf("[SSE] Client disconnected. Total: %d\n", len(sseClients))
			return
		case msg := <-client.ch:
			fmt.Fprintf(w, "data: %s\n\n", msg)
			flusher.Flush()
		}
	}
}

func broadcastSSE(data []byte) {
	sseClientsMu.Lock()
	defer sseClientsMu.Unlock()
	for client := range sseClients {
		select {
		case client.ch <- data:
		default:
			// Client buffer full, skip to prevent blocking
		}
	}
}

func handleControl(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	var req struct {
		Action string `json:"action"` // "pause", "resume", "setSpeed"
		Speed  int    `json:"speed"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}

	core.GlobalState.Mu.Lock()
	switch req.Action {
	case "pause":
		core.GlobalState.IsPaused = true
		fmt.Println("[GO] Game PAUSED by UI.")
	case "resume":
		core.GlobalState.IsPaused = false
		fmt.Println("[GO] Game RESUMED by UI.")
	case "setSpeed":
		if req.Speed >= 1 && req.Speed <= 3 {
			core.GlobalState.Speed = req.Speed
			fmt.Printf("[GO] Speed set to %dx.\n", req.Speed)
		}
	}
	snapshot := createSnapshot()
	core.GlobalState.Mu.Unlock()

	// Immediately broadcast the control state change
	broadcastSSE(snapshot)

	fmt.Fprintf(w, `{"ok": true}`)
}


// ═══════════════════════════════════════════════════════════
// RESET ENDPOINT (Clears server state for new game)
// ═══════════════════════════════════════════════════════════

func handleReset(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	core.GlobalState.Mu.Lock()
	core.GlobalState.IsPaused = true
	core.GlobalState.GameDate = time.Date(2026, 1, 1, 0, 0, 0, 0, time.UTC).Format("2006-01-02")
	core.GlobalState.DayCounter = 0
	core.GlobalState.News = []core.NewsItem{}
	core.GlobalState.Inbox = server_inbox.GetInitialInboxBatch("01 Jan 2026")
	core.GlobalState.Player = core.PlayerState{Initialized: false}
	core.GlobalState.NPCStates = make(map[string]*core.NPCNationState)
	core.GlobalState.NPCBuildingLevels = make(map[string]map[string]int)
	core.GlobalState.LastProcessedMonth = 0
	lastBroadcastNewsLen = 0
	// Immediate broadcast to all clients that we reset
	snapshot := createSnapshot()
	core.GlobalState.Mu.Unlock()
	broadcastSSE(snapshot)

	fmt.Println("[GO] Global State RESET triggered by UI. Clock reset to 01-01-2026.")
	fmt.Fprintf(w, `{"ok": true, "message": "Backend reset successful"}`)
}

func handleInitPlayer(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	// GET: Return current player state (for frontend to read server-authoritative values)
	if r.Method == "GET" {
		core.GlobalState.Mu.Lock()
		response := struct {
			Player        core.PlayerState                       `json:"player"`
			Relationships map[string]map[string]*core.Relationship `json:"relationships"`
		}{
			Player:        core.GlobalState.Player,
			Relationships: core.GlobalState.Relationships,
		}
		data, _ := json.Marshal(response)
		core.GlobalState.Mu.Unlock()
		w.Write(data)
		return
	}

	// POST: Initialize player state
	var init core.PlayerState
	if err := json.NewDecoder(r.Body).Decode(&init); err != nil {
		http.Error(w, "Invalid player data", http.StatusBadRequest)
		return
	}

	core.GlobalState.Mu.Lock()
	// Only initialize if not already initialized (prevent hot-reload reset)
	if core.GlobalState.Player.Initialized {
		// Player already running — return current state, don't overwrite
		fmt.Printf("[GO] Player re-init SKIPPED (already running). Current Budget: %.0f\n", core.GlobalState.Player.Budget)
		// But update dailyIncome in case buildings changed
		core.GlobalState.Player.DailyIncome = init.DailyIncome
		
		// Sync clock even on re-init
		if init.DayCounter > 0 {
			core.GlobalState.GameDate = init.GameDate
			core.GlobalState.DayCounter = init.DayCounter
			// Catch-up simulation state if needed
			server_hubungan.CatchUpDriftLocked(init.DayCounter)
		}
		
		response := struct {
			Player        core.PlayerState                       `json:"player"`
			Relationships map[string]map[string]*core.Relationship `json:"relationships"`
		}{
			Player:        core.GlobalState.Player,
			Relationships: core.GlobalState.Relationships,
		}
		data, _ := json.Marshal(response)
		core.GlobalState.Mu.Unlock()
		w.Write(data)
		return
	}

	core.GlobalState.Player = core.PlayerState{
		Country:         init.Country,
		Happiness:       init.Happiness,
		Population:      init.Population,
		PopulationDelta: init.PopulationDelta,
		Budget:          init.Budget,
		DailyIncome:     init.DailyIncome,
		Stability:       init.Stability,
		Initialized:     true,
	}

	// Sync Clock
	if init.DayCounter > 0 {
		core.GlobalState.GameDate = init.GameDate
		core.GlobalState.DayCounter = init.DayCounter
		fmt.Printf("[GO] Synced Clock to Client: %s (Day %d)\n", init.GameDate, init.DayCounter)
		
		// Immediately fast-forward any missed weekly drifts
		server_hubungan.CatchUpDriftLocked(init.DayCounter)
	}

	fmt.Printf("[GO] Player initialized: %s | Budget: %.0f | Pop: %.0f | Happy: %.1f%% | Income: +%.0f/day\n",
		init.Country, init.Budget, init.Population, init.Happiness, init.DailyIncome)
	
	response := struct {
		Player        core.PlayerState                       `json:"player"`
		Relationships map[string]map[string]*core.Relationship `json:"relationships"`
	}{
		Player:        core.GlobalState.Player,
		Relationships: core.GlobalState.Relationships,
	}
	data, _ := json.Marshal(response)
	core.GlobalState.Mu.Unlock()

	w.Write(data)
}

func handleBerita(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	core.GlobalState.Mu.Lock()
	json.NewEncoder(w).Encode(core.GlobalState.News)
	core.GlobalState.Mu.Unlock()
}

func handleInbox(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	core.GlobalState.Mu.Lock()
	json.NewEncoder(w).Encode(core.GlobalState.Inbox)
	core.GlobalState.Mu.Unlock()
}

func handleHealth(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	core.GlobalState.Mu.Lock()
	paused := core.GlobalState.IsPaused
	day := core.GlobalState.DayCounter
	clients := len(sseClients)
	newsCount := len(core.GlobalState.News)
	core.GlobalState.Mu.Unlock()
	fmt.Fprintf(w, `{"status":"online","engine":"Go Server-Authoritative v2","paused":%t,"day":%d,"sseClients":%d,"newsCount":%d}`, paused, day, clients, newsCount)
}

