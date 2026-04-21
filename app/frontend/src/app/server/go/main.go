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
	"emserver/map_engine"
	"emserver/server_hubungan"
	"emserver/server_inbox"
	"emserver/server_berita"
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

	now := time.Now()
	core.GlobalState = core.SimulationState{
		GameDate:          now.Format("2006-01-02"),
		IsPaused:          true,
		Speed:             1,
		News:              []core.NewsItem{},
		Inbox:             server_inbox.GetInitialInboxBatch(now.Format("02 Jan 2006")),
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
	// Find all potential building blocks: "key": { ... } or key: { ... }
	// Modified to be non-greedy to handle nested structures correctly
	blockPattern := regexp.MustCompile(`(?s)(?:"?([\w_]+)"?):\s*\{(.+?)\}\s*,\s*[\r\n]`)
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
	basePath := "c:/fhm/em/app/frontend/src/app/pilih_negara/data/semua_fitur_negara/"
	
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
		{basePath + "2_pertahanan/2_intelijen/index.ts", "Intelijen", "militer-1"},
		{basePath + "2_pertahanan/1_komando_pertahanan/index.ts", "Komando Pertahanan", "militer-2"},
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

func loadDefaultsFromPython() map[string]core.NPCNationState {
	defaults := make(map[string]core.NPCNationState)
	
	pyScript := "C:/fhm/em/app/frontend/src/app/server/python/localstorage.py"
	cmd := exec.Command("python", pyScript, "--reset")
	out, err := cmd.Output()
	if err != nil {
		fmt.Printf("[GO] Warning: Failed to load defaults from Python: %v\n", err)
		return defaults
	}

	if err := json.Unmarshal(out, &defaults); err != nil {
		fmt.Printf("[GO] Warning: Failed to parse Python defaults: %v\n", err)
	}
	
	fmt.Printf("[GO] Successfully loaded %d nation defaults from Python.\n", len(defaults))
	return defaults
}

// InitializeNPCStatesLocked populates the global state with starting values for AI countries.
// IMPORTANT: The caller must already hold core.GlobalState.Mu.Lock()
func InitializeNPCStatesLocked() {
	if core.GlobalState.NPCStates == nil {
		core.GlobalState.NPCStates = make(map[string]*core.NPCNationState)
	}
	
	pyDefaults := loadDefaultsFromPython()
	
	for _, name := range core.NpcNations {
		tier := 1 + core.Rng.Intn(3)
		
		// Baseline Populations & Budgets matching the TypeScript database exactly
		pop := 50000000.0 
		budget := float64(tier) * 1000.0 // Default small budget
		stability := 75.0 + core.Rng.Float64()*20.0
		happiness := 50.0
		
		// Use Python defaults if available
		if def, ok := pyDefaults[name]; ok {
			pop = def.Population
			budget = def.Budget
			happiness = def.Happiness
			stability = def.Stability
			tier = def.EconomicTier
			if tier == 0 { tier = 1 + core.Rng.Intn(3) }
		} else if name == "China" {
			pop = 1392730000.0
			budget = 180167.0
		} else if name == "India" {
			pop = 1352640000.0
			budget = 165000.0
		} else if name == "Amerika Serikat" {
			pop = 331002651.0
			budget = 150000.0
		} else if name == "Indonesia" {
			pop = 273523615.0
			budget = 13807.0
		} else if name == "Thailand" {
			pop = 69800000.0
			budget = 12000.0
		}
		
		core.GlobalState.NPCStates[name] = &core.NPCNationState{
			Name:         name,
			GDPGrowth:    1.0 + core.Rng.Float64()*3.0,
			Stability:    stability,
			EconomicTier: tier,
			Population:   pop,
			Budget:       budget,
			Happiness:    happiness, 
			DailyIncome:  float64(tier) * 50.0,
			Taxes:        map[string]float64{"ppn": 10, "korporasi": 20, "pendapatan_nasional": 15, "lingkungan": 5, "lainnya": 5},
			PriceIndex:   1.0,
		}
	}
	fmt.Printf("[GO] Initialized %d NPC nations with database-aligned baselines.\n", len(core.NpcNations))
}

// ═══════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════

func main() {
	// 1. Load Relationship Database
	if err := server_hubungan.InitializeRelationships(); err != nil {
		fmt.Printf("[GO] Warning: Could not initialize international relationships: %v\n", err)
	}

	// 2. Load Building Database from TypeScript
	if err := loadBuildingsFromTypeScript(); err != nil {
		fmt.Printf("[GO] Warning: Could not load building database: %v\n", err)
	}

	// 3. Initialize NPC States (Crucial BEFORE Engine starts)
	core.GlobalState.Mu.Lock()
	InitializeNPCStatesLocked()
	core.GlobalState.Mu.Unlock()

	// 4. Start the Global Ticker (Simulation Engine)
	go simulationEngine()

	// 5. Setup HTTP Handlers
	http.HandleFunc("/api/game/sync", handleSSE)
	http.HandleFunc("/api/game/control", handleControl)
	http.HandleFunc("/api/game/init-player", handleInitPlayer)
	http.HandleFunc("/api/berita", handleBerita)
	http.HandleFunc("/api/inbox", handleInbox)
	http.HandleFunc("/api/game/health", handleHealth)
	http.HandleFunc("/api/game/reset", handleReset)
	http.HandleFunc("/api/game/update-policy", handleUpdatePolicy)
	http.HandleFunc("/api/ai/run", handleAIRun)

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
	// Base tick rate: 10ms (Ultra high resolution for precise scaling)
	ticker := time.NewTicker(10 * time.Millisecond)
	acc := 0 

	for range ticker.C {
		core.GlobalState.Mu.Lock()
		isPaused := core.GlobalState.IsPaused
		speed := core.GlobalState.Speed
		core.GlobalState.Mu.Unlock()

		if isPaused {
			acc = 0
			continue
		}

		// Accumulate based on speed
		// 1x -> adds 1 (100 ticks = 1000ms)
		// 2x -> adds 2 (50 ticks = 500ms)
		// 3x -> adds 3 (33.3 ticks = ~333ms)
		increment := 1
		if speed == 2 {
			increment = 2
		} else if speed == 3 {
			increment = 3
		}

		acc += increment
		if acc < 100 {
			continue
		}
		acc = 0

		// === ADVANCE ONE GAME DAY ===
		core.GlobalState.Mu.Lock()

		// 1. Parse and advance date
		currentDate, err := time.Parse("2006-01-02", core.GlobalState.GameDate)
		if err != nil {
			fmt.Printf("[GO] ERROR Parsing Date: %v (Value: %s)\n", err, core.GlobalState.GameDate)
		}
		nextDate := currentDate.AddDate(0, 0, 1)
		core.GlobalState.GameDate = nextDate.Format("2006-01-02")
		core.GlobalState.DayCounter++

		fmt.Printf("[GO] Tick: %s (Day %d) | Speed: %d\n", core.GlobalState.GameDate, core.GlobalState.DayCounter, speed)

		// 2. Process Player Nation (Calculates Happiness, Stability, Budget)
		processPlayerDay(nextDate)
		
		// Capture snapshot for SSE while locked
		isMajorUpdate := len(core.GlobalState.News) != lastBroadcastNewsLen || len(core.GlobalState.Inbox) != lastBroadcastInboxLen
		isWeeklySync := core.GlobalState.DayCounter%7 == 0 || core.GlobalState.DayCounter < 2
		
		var snapshot []byte
		if isWeeklySync {
			snapshot = createSnapshot()
		} else if isMajorUpdate {
			snapshot = createMajorUpdateSnapshot()
		} else {
			snapshot = createPlayerSnapshot()
		}
		// 3. Process NPC & Global Simulation (CRITICAL: Called INSIDE Lock for thread-safety)
		processNPCDay(nextDate)
		server_berita.ProcessNewsDay(nextDate)
		
		// Quarterly Polyglot Workers (Spawns background goroutine, doesn't need lock)
		if core.GlobalState.DayCounter%30 == 0 {
			go invokePolyglotWorkers(nextDate.Format("02 Jan 2006"))
		}

		// Process Inbox & Events
		server_inbox.ProcessInboxDay(nextDate)

		// Update Relationships
		server_hubungan.UpdateDailyRelationsLocked()

		core.GlobalState.Mu.Unlock()

		// Broadcast state to all SSE clients (Fire and forget outside lock)
		go func(data []byte) {
			broadcastSSE(data)
		}(snapshot)

		// Check for Month Change (Quarterly Detection)
		if nextDate.Month() != core.GlobalState.LastProcessedMonth {
			// Update this atomicaly if needed, or rely on loop context
			core.GlobalState.Mu.Lock()
			core.GlobalState.LastProcessedMonth = nextDate.Month()
			core.GlobalState.Mu.Unlock()
			
			oldMonth := nextDate.Month() - 1
			if oldMonth == 0 { oldMonth = 12 }
			
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
	}
}


// ═══════════════════════════════════════════════════════════
// PLAYER NATION PROCESSING (Server-Side)
// ═══════════════════════════════════════════════════════════

func processPlayerDay(date time.Time) {
	if !core.GlobalState.Player.Initialized {
		return // Wait until frontend sends initial state
	}

	// 1. Budget: Add daily income
	core.GlobalState.Player.Budget = math.Round(core.GlobalState.Player.Budget + core.GlobalState.Player.DailyIncome)

	// 2. Population: Grow based on population size
	growthRate := 0.00003
	popGrowth := core.GlobalState.Player.Population * growthRate
	popGrowth += float64(core.Rng.Intn(500)) - 250
	if popGrowth < 0 {
		popGrowth = 0
	}
	core.GlobalState.Player.PopulationDelta = math.Round(popGrowth)
	core.GlobalState.Player.Population = math.Round(core.GlobalState.Player.Population + popGrowth)

	// 3. Happiness Calculation (Authoritative)
	calculatePlayerHappiness()

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
		core.GlobalState.Player.Stability = math.Round(core.GlobalState.Player.Stability*10) / 10
	}
}

func calculatePlayerHappiness() {
	p := &core.GlobalState.Player
	
	// A. Tax Impact
	var avgTax float64 = 0
	taxCount := 0
	domesticKeys := []string{"ppn", "korporasi", "pendapatan_nasional", "lingkungan", "lainnya"}
	for _, key := range domesticKeys {
		if val, ok := p.Taxes[key]; ok {
			avgTax += val
			taxCount++
		}
	}
	if taxCount > 0 { avgTax /= float64(taxCount) } else { avgTax = 50 } 

	taxDelta := 0.0
	if avgTax <= 25 { taxDelta = 0.1 } else if avgTax <= 50 { taxDelta = 0 } else if avgTax <= 75 { taxDelta = -0.2 } else { taxDelta = -0.5 }

	// B. Price Impact
	priceDelta := 0.0
	if p.PriceIndex <= 0.8 { priceDelta = 0.1 } else if p.PriceIndex <= 1.2 { priceDelta = 0 } else if p.PriceIndex <= 1.5 { priceDelta = -0.2 } else { priceDelta = -0.5 }

	// C. Infra Bonus
	infraFactors := map[string]float64{
		"1_jalur_sepeda": 0.0005, "2_jalan_tol": 0.0008, "3_terminal_bus": 0.001,
		"4_jalur_kereta": 0.0012, "5_kereta_bawah_tanah": 0.0015,
		"6_pelabuhan_laut": 0.0018, "7_bandara": 0.002, "8_helipad": 0.0005,
	}
	infraBonus := 0.0
	for key, factor := range infraFactors {
		if count, ok := p.Buildings[key]; ok {
			infraBonus += float64(count) * factor
		}
	}
	if infraBonus > 2.5 { infraBonus = 2.5 }

	// D. Housing Penalty
	housingPenalty := 0.0
	if p.HousingCapacity > 0 && p.Population > p.HousingCapacity {
		homelessRatio := (p.Population / p.HousingCapacity) - 1.0
		housingPenalty = - (homelessRatio * 0.5)
		if housingPenalty < -2.0 { housingPenalty = -2.0 }
	}

	// E. Ideology/Religion
	socialDelta := 0.0
	// Religion
	if p.Religion == "Buddha" { socialDelta += 0.2 }
	if p.Religion == "Konghucu" { socialDelta -= 0.2 }
	// Ideology
	switch p.Ideology {
	case "Demokrasi": socialDelta += 0.1
	case "Kapitalisme": socialDelta -= 0.2
	case "Konservatisme": socialDelta += 0.1
	case "Sosialisme": socialDelta += 0.05
	}

	totalDelta := taxDelta + priceDelta + infraBonus + housingPenalty + socialDelta

	if p.Happiness < 40 {
		if totalDelta < 0 { totalDelta *= 2 }
		if totalDelta > 0 { totalDelta *= 1.5 }
	}

	p.Happiness += totalDelta
	if p.Happiness > 100 { p.Happiness = 100 }
	if p.Happiness < 1 { p.Happiness = 1 }
	p.Happiness = math.Round(p.Happiness*100) / 100
}

// ═══════════════════════════════════════════════════════════
// NPC NATIONS PROCESSING (Server-Side)
// ═══════════════════════════════════════════════════════════

func processNPCDay(date time.Time) {
	for nation, state := range core.GlobalState.NPCStates {
		if state == nil { continue }

		// Population Growth
		state.Population = math.Round(state.Population * 1.00002)
		
		// Budget Growth
		state.Budget += state.DailyIncome * (0.8 + core.Rng.Float64()*0.4)
		state.Budget = math.Round(state.Budget)

		// AI Tax Manager
		if state.Budget < 1000 && state.Happiness > 45 {
			for k := range state.Taxes {
				state.Taxes[k] += 1.0 + core.Rng.Float64()*2.0
				if state.Taxes[k] > 90 { state.Taxes[k] = 90 }
				break 
			}
		} else if state.Happiness < 40 {
			for k := range state.Taxes {
				state.Taxes[k] -= 1.0 + core.Rng.Float64()*2.0
				if state.Taxes[k] < 10 { state.Taxes[k] = 10 }
				break
			}
		}

		calculateNPCHappiness(nation, state)
	}

	// AI Batch Processing every 5 days
	if core.GlobalState.DayCounter % 5 == 0 {
		go runAIBatch()
	}
}

func runAIBatch() {
	fmt.Println("[GO] [AI BATCH] Starting decision cycle for 207 nations...")
	
	// Prepare batch data
	var batchData struct {
		Countries []map[string]interface{} `json:"countries"`
	}
	core.GlobalState.Mu.Lock()
	for name, s := range core.GlobalState.NPCStates {
		batchData.Countries = append(batchData.Countries, map[string]interface{}{
			"name": name,
			"budget": s.Budget,
			"stability": s.Stability,
		})
	}
	core.GlobalState.Mu.Unlock()

	cmd := exec.Command("python", "src/app/server/python/map_engine/ai_batch_optimizer.py")
	stdin, _ := cmd.StdinPipe()
	go func() {
		defer stdin.Close()
		json.NewEncoder(stdin).Encode(batchData)
	}()

	out, err := cmd.Output()
	if err != nil {
		fmt.Printf("[GO] [AI BATCH] Error: %v\n", err)
		return
	}

	var results []map[string]interface{}
	if err := json.Unmarshal(out, &results); err != nil {
		fmt.Printf("[GO] [AI BATCH] Parse Error: %v\n", err)
		return
	}

	// Process decisions
	core.GlobalState.Mu.Lock()
	defer core.GlobalState.Mu.Unlock()
	for _, res := range results {
		if res["decision"] == "EXECUTE" {
			nation := res["nation"].(string)
			// Apply building logic to NPC (simplified for now)
			if buildings, ok := core.GlobalState.NPCBuildingLevels[nation]; ok {
				key := res["building_key"].(string)
				buildings[key]++
				fmt.Printf("[GO] [AI BATCH] %s executed: %s\n", nation, key)
			}
		}
	}
	fmt.Printf("[GO] [AI BATCH] Cycle complete. Processed %d decisions.\n", len(results))
}

func calculateNPCHappiness(nation string, s *core.NPCNationState) {
	// 1. Tax Impact
	var avgTax float64 = 0
	for _, v := range s.Taxes { avgTax += v }
	if len(s.Taxes) > 0 { avgTax /= float64(len(s.Taxes)) } else { avgTax = 20 }
	taxDelta := 0.0
	if avgTax <= 25 { taxDelta = 0.05 } else if avgTax <= 50 { taxDelta = 0 } else { taxDelta = -0.1 }

	// 2. Infra Bonus (NPC)
	infraBonus := 0.0
	if buildings, ok := core.GlobalState.NPCBuildingLevels[nation]; ok {
		infraFactors := map[string]float64{
			"1_jalur_sepeda": 0.0005, "2_jalan_tol": 0.0008, "3_terminal_bus": 0.001,
			"4_jalur_kereta": 0.0012, "5_kereta_bawah_tanah": 0.0015,
			"6_pelabuhan_laut": 0.0018, "7_bandara": 0.002, "8_helipad": 0.0005,
		}
		for key, factor := range infraFactors {
			if count, ok := buildings[key]; ok {
				infraBonus += float64(count) * factor
			}
		}
	}
	if infraBonus > 2.0 { infraBonus = 2.0 }

	totalDelta := taxDelta + infraBonus
	s.Happiness += totalDelta
	if s.Happiness > 100 { s.Happiness = 100 }
	if s.Happiness < 20 { s.Happiness = 20 } 
	s.Happiness = math.Round(s.Happiness*100) / 100
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

	// 2. Execute Python Worker (Economic Strategy + Heatmap)
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
	var pyResponse struct {
		Growth  map[string]float64 `json:"growth"`
		Heatmap map[string]float64 `json:"heatmap"`
	}
	if err := json.Unmarshal(out, &pyResponse); err != nil {
		fmt.Printf("[GO] Error: Failed to parse Python response: %v\n", err)
		return
	}
	results := pyResponse.Growth
	// Update high-performance Map Engine visual state
	map_engine.GlobalVisualState.UpdateHeatmap(pyResponse.Heatmap)

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
	// C++ Worker (Specialized Geometric Logic)
	cppOut, err := exec.Command("src/app/server/cpp/map_engine/map_engine.exe").Output()
	if err == nil && len(cppOut) > 0 {
		core.AddNewsItem("C++ Engine", "Kalkulasi Infrastruktur Global", string(cppOut), "construction", "low", dateStr)
	}

	// Python Worker (Strategic Heatmaps)
	pyOut, err := exec.Command("python", "src/app/server/python/map_engine/map_engine.py").Output()
	if err == nil && len(pyOut) > 0 {
		core.AddNewsItem("Python AI", "Analisis Strategi Ekonomi", string(pyOut), "economy", "low", dateStr)
	}

	// Rust Worker (Massive Matrix Drift)
	rustOut, err := exec.Command("src/app/server/rust/map_engine/map_engine.exe").Output()
	if err == nil && len(rustOut) > 0 {
		core.AddNewsItem("Rust Engine", "Pemrosesan Data Militer", string(rustOut), "global", "low", dateStr)
	}

	// Java Worker (Naming Normalization)
	javaOut, err := exec.Command("java", "-cp", "src/app/server/java/map_engine", "map_engine").Output()
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

// ═══════════════════════════════════════════════════════════
// SSE (Server-Sent Events) - Zero-Polling Architecture
// ═══════════════════════════════════════════════════════════

type SyncPayload struct {
	GameDate       string                          `json:"gameDate"`
	IsPaused       bool                            `json:"isPaused"`
	Speed          int                             `json:"speed"`
	DayCounter     int                             `json:"dayCounter"`
	News           []core.NewsItem                 `json:"news,omitempty"`
	Inbox          []core.InboxItem                `json:"inbox,omitempty"`
	Player         core.PlayerState                `json:"player"`
	NPCStates      map[string]*core.NPCNationState `json:"npcStates,omitempty"`
	Relationships  map[string]map[string]*core.Relationship `json:"relationships,omitempty"`
	VisualDelta    map[string]float64              `json:"visualDelta,omitempty"` // ID -> Heatmap from MapEngine
	ResetTriggered bool                            `json:"resetTriggered,omitempty"`
}

var lastBroadcastNewsLen int = 0
var lastBroadcastInboxLen int = 0

// ═══════════════════════════════════════════════════════════
// SNAPSHOT UTILITIES (JSON PAYLOAD GENERATORS)
// ═══════════════════════════════════════════════════════════

func createSnapshot() []byte {
	payload := SyncPayload{
		GameDate:   core.GlobalState.GameDate,
		IsPaused:   core.GlobalState.IsPaused,
		Speed:      core.GlobalState.Speed,
		DayCounter: core.GlobalState.DayCounter,
		News:       core.GlobalState.News,
		Inbox:      core.GlobalState.Inbox,
		Player:     core.GlobalState.Player,
		NPCStates:  core.GlobalState.NPCStates,
		Relationships: core.GlobalState.Relationships,
		VisualDelta:   map_engine.GlobalVisualState.GetHeatmap(),
	}
	lastBroadcastNewsLen = len(core.GlobalState.News)
	lastBroadcastInboxLen = len(core.GlobalState.Inbox)
	data, _ := json.Marshal(payload)
	return data
}

// Lightweight snapshot for periodic ticks (bandwidth optimization)
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

// Snapshot for when new news or inbox items arrive
func createMajorUpdateSnapshot() []byte {
	lastBroadcastNewsLen = len(core.GlobalState.News)
	lastBroadcastInboxLen = len(core.GlobalState.Inbox)

	getRecentNews := func(arr []core.NewsItem, n int) []core.NewsItem {
		if len(arr) <= n { return arr }
		return arr[len(arr)-n:]
	}
	getRecentInbox := func(arr []core.InboxItem, n int) []core.InboxItem {
		if len(arr) <= n { return arr }
		return arr[len(arr)-n:]
	}

	payload := SyncPayload{
		GameDate:   core.GlobalState.GameDate,
		IsPaused:   core.GlobalState.IsPaused,
		Speed:      core.GlobalState.Speed,
		DayCounter: core.GlobalState.DayCounter,
		News:       getRecentNews(core.GlobalState.News, 20),
		Inbox:      getRecentInbox(core.GlobalState.Inbox, 10),
		Player:     core.GlobalState.Player,
	}
	data, _ := json.Marshal(payload)
	return data
}

// Snapshot for control actions (pause/resume/speed)
func createControlSnapshot() []byte {
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

// ═══════════════════════════════════════════════════════════
// SSE & API HANDLERS
// ═══════════════════════════════════════════════════════════

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
	fmt.Printf("[DEBUG] Incoming %s %s from %s\n", r.Method, r.URL.Path, r.RemoteAddr)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	w.Header().Set("Access-Control-Max-Age", "86400")

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
		
		// Polyglot Optimization: Trigger Situation Report
		{
			// Take a local copy of state to avoid holding lock while calling Python
			snapshotState := core.GlobalState
			go func(state core.SimulationState) {
				report, err := map_engine.TriggerResumePausedSystem(true, state)
				if err == nil && report != nil {
					core.GlobalState.Mu.Lock()
					core.AddInboxItemLocked(
						"Sistem Intelijen Nasional",
						report["subject"].(string),
						report["content"].(string),
						"government",
						report["priority"].(string),
						false,
						"",
						state.GameDate,
					)
					core.GlobalState.Mu.Unlock()
				}
			}(snapshotState)
		}
	case "resume":
		core.GlobalState.IsPaused = false
		fmt.Println("[GO] Game RESUMED by UI.")
	case "setSpeed":
		if req.Speed >= 1 && req.Speed <= 3 {
			core.GlobalState.Speed = req.Speed
			fmt.Printf("[GO] Speed set to %dx.\n", req.Speed)
		}
	}
	snapshot := createControlSnapshot()
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
	core.GlobalState.IsPaused = true // Force pause immediately
	core.GlobalState.GameDate = time.Now().Format("2006-01-02")
	core.GlobalState.DayCounter = 0
	
	// Nuclear wipe of complex objects
	core.GlobalState.News = []core.NewsItem{}
	core.GlobalState.Inbox = server_inbox.GetInitialInboxBatch(time.Now().Format("02 Jan 2006"))
	
	// CRITICAL: Re-initialize AI states to defaults properly via Python
	core.GlobalState.NPCStates = nil 
	InitializeNPCStatesLocked()
	
	core.GlobalState.NPCBuildingLevels = make(map[string]map[string]int)
	core.GlobalState.Relationships = nil // Explicitly set to nil to flush GC
	
	core.GlobalState.Player = core.PlayerState{Initialized: false}
	core.GlobalState.LastProcessedMonth = 0
	lastBroadcastNewsLen = 0
	
	fmt.Println("[RESET] DEEP WIPE: Core server maps (NPCs & Relationships) have been restored to defaults.")
	
	// Reset International Relationships to Default from DISK
	server_hubungan.InitializeRelationshipsLocked()
	
	// Immediate broadcast reset snapshot with reset signal
	snapshotData := SyncPayload{
		GameDate:       core.GlobalState.GameDate,
		IsPaused:       core.GlobalState.IsPaused,
		Speed:           core.GlobalState.Speed,
		DayCounter:      core.GlobalState.DayCounter,
		Player:          core.GlobalState.Player,
		NPCStates:       core.GlobalState.NPCStates,
		Relationships:   core.GlobalState.Relationships,
		VisualDelta:     map_engine.GlobalVisualState.GetHeatmap(),
		ResetTriggered: true, // NUCLEAR SIGNAL
	}
	snapshot, _ := json.Marshal(snapshotData)
	core.GlobalState.Mu.Unlock()
	broadcastSSE(snapshot)

	fmt.Println("[GO] NUCLEAR RESET COMPLETE. Engine paused on 01-01-2026.")
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
	core.GlobalState.Player = core.PlayerState{
		Country:         init.Country,
		Happiness:       init.Happiness,
		Population:      init.Population,
		PopulationDelta: init.PopulationDelta,
		Budget:          init.Budget,
		DailyIncome:     init.DailyIncome,
		Stability:       init.Stability,
		Initialized:     true,
		Taxes:           init.Taxes,
		Buildings:       init.Buildings,
		PriceIndex:      init.PriceIndex,
	}
	if core.GlobalState.Player.PriceIndex == 0 { core.GlobalState.Player.PriceIndex = 1.0 }

	// Sync Clock & Budget Authority
	// CRITICAL FIX: Only catch up if the server itself isn't at Day 0 (Reset state).
	if init.DayCounter > 0 && core.GlobalState.DayCounter > 0 {
		core.GlobalState.GameDate = init.GameDate
		core.GlobalState.DayCounter = init.DayCounter
		fmt.Printf("[GO] Synced Clock to Client: %s (Day %d)\n", init.GameDate, init.DayCounter)
		
		// Immediately fast-forward any missed weekly drifts
		server_hubungan.CatchUpDriftLocked(init.DayCounter)
	} else if core.GlobalState.DayCounter == 0 {
		fmt.Printf("[GO] Detected Day 0. Discarding poisoned budget (%.2f). FORCING Sovereignty.\n", init.Budget)
		// Ensure we start exactly at current date
		core.GlobalState.GameDate = time.Now().Format("2006-01-02")
		core.GlobalState.DayCounter = 0
		core.GlobalState.IsPaused = true
		
		// HARD-FORCE INDONESIA BASELINE
		if init.Country == "Indonesia" {
			core.GlobalState.Player.Budget = 13807
			fmt.Println("[GO] Indonesia Sovereignty Enforced: Budget set to 13807.")
		}
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

func handleUpdatePolicy(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	var req struct {
		Taxes       map[string]float64 `json:"taxes"`
		PriceIndex  float64            `json:"priceIndex"`
		Buildings   map[string]int     `json:"buildings"`
		DailyIncome float64            `json:"dailyIncome"`
	}

	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid data", http.StatusBadRequest)
		return
	}

	core.GlobalState.Mu.Lock()
	if req.Taxes != nil {
		core.GlobalState.Player.Taxes = req.Taxes
	}
	if req.PriceIndex > 0 {
		core.GlobalState.Player.PriceIndex = req.PriceIndex
	}
	if req.Buildings != nil {
		core.GlobalState.Player.Buildings = req.Buildings
	}
	if req.DailyIncome != 0 {
		core.GlobalState.Player.DailyIncome = req.DailyIncome
		fmt.Printf("[POLICY] DailyIncome updated to: %.2f\n", req.DailyIncome)
	}
	core.GlobalState.Mu.Unlock()

	fmt.Fprintf(w, `{"ok": true}`)
}

func handleAIRun(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	var req struct {
		ScriptPath string          `json:"scriptPath"`
		Payload    json.RawMessage `json:"payload"`
	}

	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		fmt.Printf("[GO AI] Error decoding request: %v\n", err)
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	fmt.Printf("[GO AI] Running script: %s\n", req.ScriptPath)

	cmd := exec.Command("python", req.ScriptPath)
	stdin, err := cmd.StdinPipe()
	if err != nil {
		http.Error(w, "Failed to capture stdin", http.StatusInternalServerError)
		return
	}

	go func() {
		defer stdin.Close()
		stdin.Write(req.Payload)
	}()

	out, err := cmd.CombinedOutput()
	if err != nil {
		fmt.Printf("[GO AI] Error executing %s: %v\n", req.ScriptPath, err)
		// Return JSON with error field to match frontend expectation
		w.Write([]byte(fmt.Sprintf(`{"decision": "SKIP", "error": %q, "raw": %q}`, err.Error(), string(out))))
		return
	}

	w.Write(out)
}
