package main

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"math"
	"math/rand"
	"net/http"
	"os/exec"
	"regexp"
	"sort"
	"sync"
	"time"
)

// ═══════════════════════════════════════════════════════════
// GLOBAL SIMULATION STATE (Server-Authoritative)
// ═══════════════════════════════════════════════════════════

// Player nation state — tracked server-side
type PlayerState struct {
	Country        string  `json:"country"`
	Happiness      float64 `json:"happiness"`
	Population     float64 `json:"population"`
	PopulationDelta float64 `json:"populationDelta"`
	Budget         float64 `json:"budget"`
	DailyIncome    float64 `json:"dailyIncome"`
	Stability      float64 `json:"stability"`
	Initialized    bool    `json:"initialized"`
}

type SimulationState struct {
	GameDate   string      `json:"gameDate"`
	IsPaused   bool        `json:"isPaused"`
	Speed      int         `json:"speed"`
	News       []NewsItem  `json:"news"`
	Inbox      []InboxItem `json:"inbox"`
	DayCounter int         `json:"dayCounter"`
	Player     PlayerState `json:"player"`
	mu         sync.Mutex
}

type NPCNationState struct {
	Name       string  `json:"name"`
	GDPGrowth  float64 `json:"gdpGrowth"` // Annualized quarterly growth
	Stability  float64 `json:"stability"`
	EconomicTier int   `json:"tier"` // 1: developing, 2: emerging, 3: developed
}

type NewsItem struct {
	ID        string `json:"id"`
	Source    string `json:"source"`
	Subject   string `json:"subject"`
	Content   string `json:"content"`
	Timestamp int64  `json:"timestamp"`
	Category  string `json:"category"`
	Priority  string `json:"priority"`
	Read      bool   `json:"read"`
	Time      string `json:"time"`
}

type InboxItem struct {
	ID        string `json:"id"`
	Sender    string `json:"sender"`
	Subject   string `json:"subject"`
	Content   string `json:"content"`
	Timestamp int64  `json:"timestamp"`
	Priority  string `json:"priority"`
}

// SSE client registry
type SSEClient struct {
	ch chan []byte
}

var (
	state = SimulationState{
		GameDate:   time.Date(2026, 1, 1, 0, 0, 0, 0, time.UTC).Format("2006-01-02"),
		IsPaused:   true,
		Speed:      1,
		News:       []NewsItem{},
		Inbox:      []InboxItem{},
		DayCounter: 0,
		Player:     PlayerState{},
	}
	sseClients   = make(map[*SSEClient]bool)
	sseClientsMu sync.Mutex
	rng          = rand.New(rand.NewSource(time.Now().UnixNano()))
	
	globalNPCStates = make(map[string]*NPCNationState)
	lastProcessedMonth time.Month = 0

	// Track NPC building levels globaly: Nation -> BuildingKey -> CurrentLevel
	npcBuildingLevels = make(map[string]map[string]int)
	muLevels          sync.Mutex
)

// ═══════════════════════════════════════════════════════════
// NPC NATION DATABASE (206 Nations)
// ═══════════════════════════════════════════════════════════

var npcNations = []string{
	"Afghanistan", "Afrika Selatan", "Albania", "Aljazair", "Amerika Serikat",
	"Andorra", "Angola", "Antigua dan Barbuda", "Arab Saudi", "Argentina",
	"Armenia", "Australia", "Austria", "Azerbaijan", "Bahama", "Bahrain",
	"Bangladesh", "Barbados", "Belanda", "Belarus", "Belgia", "Belize",
	"Benin", "Bhutan", "Bolivia", "Bosnia dan Herzegovina", "Botswana",
	"Brasil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Chad",
	"Chili", "China", "Denmark", "Djibouti", "Dominika", "Ekuador",
	"El Salvador", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
	"Filipina", "Finlandia", "Gabon", "Gambia", "Georgia", "Ghana",
	"Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
	"Honduras", "Hungaria", "India", "Irak", "Iran", "Irlandia",
	"Islandia", "Israel", "Italia", "Jamaika", "Jepang", "Jerman",
	"Yordania", "Kamboja", "Kamerun", "Kanada", "Kazakhstan", "Kenya",
	"Kirgizstan", "Kiribati", "Kolombia", "Komoro", "Kongo",
	"Korea Selatan", "Korea Utara", "Kosta Rika", "Kroasia", "Kuba",
	"Kuwait", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
	"Libya", "Liechtenstein", "Lithuania", "Luksemburg", "Madagaskar",
	"Makedonia Utara", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
	"Maroko", "Marshall", "Mauritania", "Mauritius", "Meksiko",
	"Mesir", "Mikronesia", "Moldova", "Monako", "Mongolia", "Montenegro",
	"Mozambik", "Myanmar", "Namibia", "Nauru", "Nepal", "Niger",
	"Nigeria", "Nikaragua", "Norwegia", "Oman", "Pakistan", "Palau",
	"Palestina", "Panama", "Papua Nugini", "Paraguay", "Peru", "Polandia",
	"Portugal", "Prancis", "Qatar", "Ceko", "Republik Dominika",
	"Rumania", "Rusia", "Rwanda", "Saint Kitts dan Nevis", "Saint Lucia",
	"Saint Vincent", "Samoa", "San Marino", "Sao Tome dan Principe",
	"Selandia Baru", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
	"Singapura", "Siprus", "Slowakia", "Slovenia", "Solomon", "Somalia",
	"Spanyol", "Sri Lanka", "Sudan", "Sudan Selatan", "Suriname",
	"Swedia", "Swiss", "Suriah", "Tajikistan", "Tanjung Verde",
	"Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
	"Trinidad dan Tobago", "Tunisia", "Turki", "Turkmenistan", "Tuvalu",
	"Uganda", "Ukraina", "Uni Emirat Arab", "Uruguay", "Uzbekistan",
	"Vanuatu", "Vatikan", "Venezuela", "Vietnam", "Yaman", "Yunani",
	"Zambia", "Zimbabwe", "Inggris", "Taiwan",
}

// Building types loaded from TypeScript database
type BuildingType struct {
	Key      string
	DataKey  string
	Name     string
	Sector   string
	SectorID string
	Biaya    int64
	Waktu    int
}

var (
	buildingTypes []BuildingType
)

// parseTypeScriptBuildings parses a TypeScript file to extract building data
func parseTypeScriptBuildings(content []byte, defaultSector string) []BuildingType {
	var buildings []BuildingType
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
			buildings = append(buildings, BuildingType{
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
	buildingTypes = []BuildingType{}
	
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
			buildingTypes = append(buildingTypes, buildings[i])
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
			buildingTypes = append(buildingTypes, buildings[i])
		}
		loadedCount += len(buildings)
		fmt.Printf("[GO] Loaded %d buildings from %s\n", len(buildings), pf.path)
	}
	
	fmt.Printf("[GO] Total buildings loaded: %d\n", len(buildingTypes))
	return nil
}

// ═══════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════

func main() {
	// Load building database from TypeScript files (direct from frontend database)
	if err := loadBuildingsFromTypeScript(); err != nil {
		fmt.Printf("[GO] Warning: Could not load buildings from TypeScript DB: %v\n", err)
		fmt.Println("[GO] Server will start but building data may be empty")
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
	for _, name := range npcNations {
		tier := 1 + rng.Intn(3)
		globalNPCStates[name] = &NPCNationState{
			Name:       name,
			GDPGrowth:  1.0 + rng.Float64()*3.0,
			Stability:  60.0 + rng.Float64()*30.0,
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
		state.mu.Lock()
		isPaused := state.IsPaused
		speed := state.Speed
		state.mu.Unlock()

		if isPaused {
			continue
		}

		// Accumulate ticks based on speed
		// Speed 1 = 1 day per 1000ms, Speed 2 = 1 day per 500ms, Speed 3 = 1 day per 333ms
		tickAccumulator += speed
		if tickAccumulator < 10 {
			continue
		}
		tickAccumulator = 0

		// === ADVANCE ONE GAME DAY ===
		state.mu.Lock()

		// Parse and advance date
		currentDate, _ := time.Parse("2006-01-02", state.GameDate)
		nextDate := currentDate.AddDate(0, 0, 1)
		state.GameDate = nextDate.Format("2006-01-02")
		state.DayCounter++

		// --- Process Player Nation (Server-Side) ---
		processPlayerDay(nextDate)

		// --- Process 206 NPC Nations (Server-Side) ---
		processNPCDay(nextDate)

		// --- Generate periodic news ---
		if state.DayCounter%7 == 0 {
			generateWeeklyNews(nextDate)
		}

		// Broadcast state to all SSE clients
		// Use lightweight snapshot unless news changed
		var snapshot []byte
		if len(state.News) != lastBroadcastNewsLen {
			snapshot = createSnapshot() // Full payload with news
		} else {
			snapshot = createPlayerSnapshot() // Lightweight: player stats only
		}
		state.mu.Unlock()

		// Check for Month Change (Quarterly Detection)
		if nextDate.Month() != lastProcessedMonth {
			oldMonth := lastProcessedMonth
			lastProcessedMonth = nextDate.Month()
			
			// Detect Quarter End (End of Mar, Jun, Sep, Dec)
			// Trigger on the 1st of Apr, Jul, Oct, Jan
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
	if !state.Player.Initialized {
		return // Wait until frontend sends initial state
	}

	// 1. Budget: Add daily income (rounded to integer)
	state.Player.Budget = math.Round(state.Player.Budget + state.Player.DailyIncome)

	// 2. Population: Grow based on population size (realistic growth rate)
	// Base growth rate: ~0.003% per day ≈ ~1.1% per year
	growthRate := 0.00003
	popGrowth := state.Player.Population * growthRate
	// Add some variance
	popGrowth += float64(rng.Intn(500)) - 250
	if popGrowth < 0 {
		popGrowth = 0
	}
	state.Player.PopulationDelta = math.Round(popGrowth)
	state.Player.Population = math.Round(state.Player.Population + popGrowth)

	// 3. Happiness: Weekly decay (every 7 days)
	if state.DayCounter%7 == 0 {
		decay := 0.1 + rng.Float64()*0.3 // 0.1% - 0.4% weekly decay
		state.Player.Happiness -= decay
		if state.Player.Happiness < 10 {
			state.Player.Happiness = 10
		}
		if state.Player.Happiness > 100 {
			state.Player.Happiness = 100
		}
		// Round to 1 decimal
		state.Player.Happiness = math.Round(state.Player.Happiness*10) / 10
	}

	// 4. Stability: Small weekly fluctuation
	if state.DayCounter%7 == 0 {
		fluctuation := (rng.Float64() - 0.5) * 0.5 // ±0.25%
		state.Player.Stability += fluctuation
		if state.Player.Stability < 20 {
			state.Player.Stability = 20
		}
		if state.Player.Stability > 100 {
			state.Player.Stability = 100
		}
		// Round to 1 decimal
		state.Player.Stability = math.Round(state.Player.Stability*10) / 10
	}
}

// ═══════════════════════════════════════════════════════════
// AI CONSTRUCTION SIMULATION (The Heart of NPC Activity)
// ═══════════════════════════════════════════════════════════

func processNPCDay(date time.Time) {
	dateStr := date.Format("02 Jan 2006")

	// --- Daily AI Construction Decisions ---
	// Each day, 2-5 random nations decide to start a construction project
	numBuilders := 2 + rng.Intn(4) // 2 to 5 nations per day
	if numBuilders > len(npcNations) {
		numBuilders = 3
	}

	// Shuffle and pick random nations
	shuffled := make([]int, len(npcNations))
	for i := range shuffled {
		shuffled[i] = i
	}
	rng.Shuffle(len(shuffled), func(i, j int) {
		shuffled[i], shuffled[j] = shuffled[j], shuffled[i]
	})

	// Skip construction news if no building data available
	if len(buildingTypes) == 0 {
		return
	}

	constructionNewsToday := 0
	maxConstructionPerDay := 3 // Cap to prevent news flood

	for k := 0; k < numBuilders && constructionNewsToday < maxConstructionPerDay; k++ {
		nationIdx := shuffled[k]
		nation := npcNations[nationIdx]
		building := buildingTypes[rng.Intn(len(buildingTypes))]

		// Level Tracking & Transition Logic
		muLevels.Lock()
		if npcBuildingLevels[nation] == nil {
			npcBuildingLevels[nation] = make(map[string]int)
		}
		
		// If level is unknown (0), give it a reasonable random starting baseline (0-10)
		// unless it's Palau helipad which the user specifically noted as 4
		levelKey := building.DataKey
		currentLevel, exists := npcBuildingLevels[nation][levelKey]
		if !exists {
			if nation == "Palau" && (levelKey == "helipad" || levelKey == "helikopter_polisi") {
				currentLevel = 4
			} else {
				currentLevel = rng.Intn(10)
			}
		}
		
		nextLevel := currentLevel + 1
		npcBuildingLevels[nation][building.Key] = nextLevel
		muLevels.Unlock()

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

		addNewsItem(
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
	// Every 3 days, generate an economy news
	if state.DayCounter%3 == 0 {
		ecoNation := npcNations[rng.Intn(len(npcNations))]
		ecoEvents := []struct{ subj, content string }{
			{
				fmt.Sprintf("%s Umumkan Pertumbuhan GDP Kuartal Ini", ecoNation),
				fmt.Sprintf("Bank Sentral %s melaporkan pertumbuhan ekonomi sebesar %.1f%% pada kuartal ini, didorong oleh peningkatan ekspor dan investasi domestik.", ecoNation, 1.0+rng.Float64()*5.0),
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
		ev := ecoEvents[rng.Intn(len(ecoEvents))]
		addNewsItem("Reuters Global", ev.subj, ev.content, "economy", "low", dateStr)
	}

	// Every 5 days, generate a diplomacy news
	if state.DayCounter%5 == 0 {
		n1 := npcNations[rng.Intn(len(npcNations))]
		n2 := npcNations[rng.Intn(len(npcNations))]
		for n2 == n1 {
			n2 = npcNations[rng.Intn(len(npcNations))]
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
		ev := dipEvents[rng.Intn(len(dipEvents))]
		addNewsItem("Kantor Berita Internasional", ev.subj, ev.content, "diplomacy", "low", dateStr)
	}

	// Every 30 days, invoke language workers for deeper analysis
	if state.DayCounter%30 == 0 {
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
	state.mu.Lock()
	dateStr := date.Format("02 Jan 2006")
	playerCountry := state.Player.Country
	playerBudget := state.Player.Budget
	playerHappiness := state.Player.Happiness
	state.mu.Unlock()

	fmt.Printf("[GO] Triggering Quarterly Economic AI for Q%d...\n", quarter)

	// 1. Prepare Payload
	payload := struct {
		Quarter int                        `json:"quarter"`
		Nations map[string]*NPCNationState `json:"nations"`
	}{
		Quarter: quarter,
		Nations: globalNPCStates,
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

	state.mu.Lock()
	for name, growth := range results {
		if nation, ok := globalNPCStates[name]; ok {
			nation.GDPGrowth = growth
			allGrowth = append(allGrowth, pair{name, growth})
		}
	}
	state.mu.Unlock()

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
		state.mu.Lock()
		addNewsItem("Python AI Strategy", subject, content, "economy", "high", dateStr)
		state.mu.Unlock()
	}

	// 6. Generate Player Inbox Report
	playerGrowth := results[playerCountry]
	if playerGrowth == 0 {
		playerGrowth = 0.5 + rng.Float64()*1.5 // Fallback if player nation not in NPC list
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
	
	state.mu.Lock()
	addInboxItem("Lembaga Analisis Ekonomi", inboxSubject, inboxContent, "high")
	state.mu.Unlock()

	fmt.Printf("[GO] Quarterly Economic Update Q%d finalized.\n", quarter)
}

func invokePolyglotWorkers(dateStr string) {
	// C++ Worker (Construction Math)
	cppOut, err := exec.Command("src/app/server/cpp/worker.exe").Output()
	if err == nil && len(cppOut) > 0 {
		state.mu.Lock()
		addNewsItem("C++ Engine", "Kalkulasi Infrastruktur Global", string(cppOut), "construction", "low", dateStr)
		state.mu.Unlock()
	}

	// Python Worker (Strategy)
	pyOut, err := exec.Command("python", "src/app/server/python/strategy.py").Output()
	if err == nil && len(pyOut) > 0 {
		state.mu.Lock()
		addNewsItem("Python AI", "Analisis Strategi Ekonomi", string(pyOut), "economy", "low", dateStr)
		state.mu.Unlock()
	}

	// Rust Worker (Compute)
	rustOut, err := exec.Command("src/app/server/rust/worker.exe").Output()
	if err == nil && len(rustOut) > 0 {
		state.mu.Lock()
		addNewsItem("Rust Engine", "Pemrosesan Data Militer", string(rustOut), "global", "low", dateStr)
		state.mu.Unlock()
	}

	// Java Worker (Logic)
	javaOut, err := exec.Command("java", "-cp", "src/app/server/java", "Main").Output()
	if err == nil && len(javaOut) > 0 {
		state.mu.Lock()
		addNewsItem("Java Logic", "Manajemen Diplomasi Global", string(javaOut), "diplomacy", "low", dateStr)
		state.mu.Unlock()
	}
}

func generateWeeklyNews(date time.Time) {
	addNewsItem(
		"Lensa Global (Server)",
		fmt.Sprintf("Laporan Mingguan - %s", date.Format("02 Jan 2006")),
		fmt.Sprintf("Simulasi 206 negara berjalan lancar. Hari ke-%d. Semua kalkulasi pembangunan, ekonomi, dan diplomasi diproses di backend Go tanpa beban browser.", state.DayCounter),
		"global",
		"low",
		date.Format("02 Jan 2006"),
	)
}

func addNewsItem(source, subject, content, category, priority, timeStr string) {
	// Use UnixNano + Random Int + Current Length to ensure absolute uniqueness in fast loops
	uniqueID := fmt.Sprintf("INTEL-SV-%d-%x-%d", time.Now().UnixNano(), rng.Int63n(1000000), len(state.News))
	item := NewsItem{
		ID:        uniqueID,
		Source:    source,
		Subject:   subject,
		Content:   content,
		Timestamp: time.Now().UnixMilli(),
		Category:  category,
		Priority:  priority,
		Read:      false,
		Time:      timeStr,
	}
	state.News = append([]NewsItem{item}, state.News...)
	if len(state.News) > 50 {
		state.News = state.News[:50]
	}
}

func addInboxItem(sender, subject, content, priority string) {
	// Use UnixNano + Random Int + Current Length to ensure absolute uniqueness
	uniqueID := fmt.Sprintf("INTEL-SV-%d-%x-%d", time.Now().UnixNano(), rng.Int63n(1000000), len(state.Inbox))
	item := InboxItem{
		ID:        uniqueID,
		Sender:    sender,
		Subject:   subject,
		Content:   content,
		Timestamp: time.Now().UnixMilli(),
		Priority:  priority,
	}
	state.Inbox = append([]InboxItem{item}, state.Inbox...)
	if len(state.Inbox) > 30 {
		state.Inbox = state.Inbox[:30]
	}
}

// ═══════════════════════════════════════════════════════════
// SSE (Server-Sent Events) - Zero-Polling Architecture
// ═══════════════════════════════════════════════════════════

type SyncPayload struct {
	GameDate   string      `json:"gameDate"`
	IsPaused   bool        `json:"isPaused"`
	Speed      int         `json:"speed"`
	DayCounter int         `json:"dayCounter"`
	News       []NewsItem  `json:"news,omitempty"`
	Inbox      []InboxItem `json:"inbox,omitempty"`
	Player     PlayerState `json:"player"`
}

var lastBroadcastNewsLen int = 0

func createSnapshot() []byte {
	payload := SyncPayload{
		GameDate:   state.GameDate,
		IsPaused:   state.IsPaused,
		Speed:      state.Speed,
		DayCounter: state.DayCounter,
		News:       state.News,
		Inbox:      state.Inbox,
		Player:     state.Player,
	}
	lastBroadcastNewsLen = len(state.News)
	data, _ := json.Marshal(payload)
	return data
}

// Lightweight snapshot — player stats only, no news (saves bandwidth)
func createPlayerSnapshot() []byte {
	payload := SyncPayload{
		GameDate:   state.GameDate,
		IsPaused:   state.IsPaused,
		Speed:      state.Speed,
		DayCounter: state.DayCounter,
		Player:     state.Player,
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
	state.mu.Lock()
	initial := createSnapshot()
	state.mu.Unlock()
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

// ═══════════════════════════════════════════════════════════
// CONTROL ENDPOINT (Pause/Resume/Speed from UI)
// ═══════════════════════════════════════════════════════════

type ControlRequest struct {
	Action string `json:"action"` // "pause", "resume", "setSpeed"
	Speed  int    `json:"speed"`
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

	var req ControlRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}

	state.mu.Lock()
	switch req.Action {
	case "pause":
		state.IsPaused = true
		fmt.Println("[GO] Game PAUSED by UI.")
	case "resume":
		state.IsPaused = false
		fmt.Println("[GO] Game RESUMED by UI.")
	case "setSpeed":
		if req.Speed >= 1 && req.Speed <= 3 {
			state.Speed = req.Speed
			fmt.Printf("[GO] Speed set to %dx.\n", req.Speed)
		}
	}
	snapshot := createSnapshot()
	state.mu.Unlock()

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

	state.mu.Lock()
	state.IsPaused = true
	state.GameDate = time.Date(2026, 1, 1, 0, 0, 0, 0, time.UTC).Format("2006-01-02")
	state.DayCounter = 0
	state.News = []NewsItem{}
	state.Inbox = []InboxItem{}
	state.Player = PlayerState{Initialized: false}
	lastBroadcastNewsLen = 0
	// Immediate broadcast to all clients that we reset
	snapshot := createSnapshot()
	state.mu.Unlock()
	broadcastSSE(snapshot)

	fmt.Println("[GO] Global State RESET triggered by UI. Clock reset to 01-01-2026.")
	fmt.Fprintf(w, `{"ok": true, "message": "Backend reset successful"}`)
}

// ═══════════════════════════════════════════════════════════
// PLAYER INIT ENDPOINT (Receives initial stats from UI)
// ═══════════════════════════════════════════════════════════

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
		state.mu.Lock()
		data, _ := json.Marshal(state.Player)
		state.mu.Unlock()
		w.Write(data)
		return
	}

	// POST: Initialize player state
	var init PlayerState
	if err := json.NewDecoder(r.Body).Decode(&init); err != nil {
		http.Error(w, "Invalid player data", http.StatusBadRequest)
		return
	}

	state.mu.Lock()
	// Only initialize if not already initialized (prevent hot-reload reset)
	if state.Player.Initialized {
		// Player already running — return current state, don't overwrite
		fmt.Printf("[GO] Player re-init SKIPPED (already running). Current Budget: %.0f\n", state.Player.Budget)
		// But update dailyIncome in case buildings changed
		state.Player.DailyIncome = init.DailyIncome
		data, _ := json.Marshal(state.Player)
		state.mu.Unlock()
		w.Write(data)
		return
	}

	state.Player = PlayerState{
		Country:         init.Country,
		Happiness:       init.Happiness,
		Population:      init.Population,
		PopulationDelta: init.PopulationDelta,
		Budget:          init.Budget,
		DailyIncome:     init.DailyIncome,
		Stability:       init.Stability,
		Initialized:     true,
	}
	fmt.Printf("[GO] Player initialized: %s | Budget: %.0f | Pop: %.0f | Happy: %.1f%% | Income: +%.0f/day\n",
		init.Country, init.Budget, init.Population, init.Happiness, init.DailyIncome)
	data, _ := json.Marshal(state.Player)
	state.mu.Unlock()

	w.Write(data)
}

// ═══════════════════════════════════════════════════════════
// REST FALLBACK ENDPOINTS
// ═══════════════════════════════════════════════════════════

func handleBerita(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	state.mu.Lock()
	json.NewEncoder(w).Encode(state.News)
	state.mu.Unlock()
}

func handleInbox(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	state.mu.Lock()
	json.NewEncoder(w).Encode(state.Inbox)
	state.mu.Unlock()
}

func handleHealth(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	state.mu.Lock()
	paused := state.IsPaused
	day := state.DayCounter
	clients := len(sseClients)
	newsCount := len(state.News)
	state.mu.Unlock()
	fmt.Fprintf(w, `{"status":"online","engine":"Go Server-Authoritative v2","paused":%t,"day":%d,"sseClients":%d,"newsCount":%d}`, paused, day, clients, newsCount)
}
