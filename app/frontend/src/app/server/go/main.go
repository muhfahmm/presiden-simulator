package main

import (
	"encoding/json"
	"fmt"
	"math"
	"math/rand"
	"net/http"
	"os/exec"
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

// Building types that NPC nations can construct
type BuildingType struct {
	Name     string
	Sector   string
	Cost     string
	Duration string
}

var buildingTypes = []BuildingType{
	// Produksi & Industri
	{Name: "Kawasan Industri", Sector: "Produksi", Cost: "2.5T", Duration: "180 hari"},
	{Name: "Pabrik Elektronik", Sector: "Produksi", Cost: "1.8T", Duration: "120 hari"},
	{Name: "Pabrik Otomotif", Sector: "Produksi", Cost: "3.2T", Duration: "240 hari"},
	{Name: "Pabrik Semikonduktor", Sector: "Produksi", Cost: "5.0T", Duration: "360 hari"},
	{Name: "Pabrik Tekstil", Sector: "Produksi", Cost: "0.8T", Duration: "90 hari"},
	{Name: "Kilang Minyak", Sector: "Produksi", Cost: "4.5T", Duration: "300 hari"},
	{Name: "Pabrik Baja", Sector: "Produksi", Cost: "2.0T", Duration: "150 hari"},
	{Name: "Pabrik Farmasi", Sector: "Produksi", Cost: "1.5T", Duration: "120 hari"},

	// Militer
	{Name: "Pangkalan Udara", Sector: "Militer", Cost: "6.0T", Duration: "365 hari"},
	{Name: "Pangkalan Angkatan Laut", Sector: "Militer", Cost: "8.0T", Duration: "480 hari"},
	{Name: "Pusat Pelatihan Militer", Sector: "Militer", Cost: "1.2T", Duration: "90 hari"},
	{Name: "Pabrik Senjata", Sector: "Militer", Cost: "3.5T", Duration: "200 hari"},
	{Name: "Sistem Pertahanan Rudal", Sector: "Militer", Cost: "10.0T", Duration: "540 hari"},
	{Name: "Barak Militer", Sector: "Militer", Cost: "0.5T", Duration: "60 hari"},

	// Layanan Publik
	{Name: "Rumah Sakit Modern", Sector: "Layanan Publik", Cost: "1.0T", Duration: "120 hari"},
	{Name: "Universitas Riset", Sector: "Layanan Publik", Cost: "2.0T", Duration: "180 hari"},
	{Name: "Pusat Riset Nasional", Sector: "Layanan Publik", Cost: "3.0T", Duration: "240 hari"},
	{Name: "Bandara Internasional", Sector: "Layanan Publik", Cost: "7.0T", Duration: "480 hari"},
	{Name: "Pelabuhan Kontainer", Sector: "Layanan Publik", Cost: "4.0T", Duration: "300 hari"},
	{Name: "Pembangkit Listrik Tenaga Surya", Sector: "Layanan Publik", Cost: "1.5T", Duration: "150 hari"},
	{Name: "Pembangkit Listrik Tenaga Nuklir", Sector: "Layanan Publik", Cost: "12.0T", Duration: "720 hari"},
	{Name: "Jaringan Kereta Cepat", Sector: "Layanan Publik", Cost: "15.0T", Duration: "900 hari"},
	{Name: "Kompleks Perumahan Rakyat", Sector: "Layanan Publik", Cost: "0.8T", Duration: "90 hari"},
	{Name: "Stadion Olahraga Nasional", Sector: "Layanan Publik", Cost: "1.2T", Duration: "120 hari"},
	{Name: "Pusat Data Nasional", Sector: "Layanan Publik", Cost: "2.5T", Duration: "180 hari"},
	{Name: "Bendungan Hidroelektrik", Sector: "Layanan Publik", Cost: "5.0T", Duration: "360 hari"},
}

// ═══════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════

func main() {
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

	fmt.Println("═══════════════════════════════════════════════")
	fmt.Println("[GO] Server-Authoritative Simulation Engine v2")
	fmt.Println("[GO] AI Construction Simulation: ACTIVE")
	fmt.Println("[GO] SSE Stream: http://localhost:8081/api/game/sync")
	fmt.Println("[GO] Control:    http://localhost:8081/api/game/control")
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

	constructionNewsToday := 0
	maxConstructionPerDay := 3 // Cap to prevent news flood

	for k := 0; k < numBuilders && constructionNewsToday < maxConstructionPerDay; k++ {
		nationIdx := shuffled[k]
		nation := npcNations[nationIdx]
		building := buildingTypes[rng.Intn(len(buildingTypes))]

		// Generate construction news
		subject := fmt.Sprintf("%s Memulai Pembangunan %s", nation, building.Name)
		content := fmt.Sprintf(
			"Pemerintah %s resmi mengumumkan dimulainya proyek pembangunan %s di sektor %s. "+
				"Proyek ini diperkirakan memakan biaya %s dengan estimasi waktu pengerjaan %s. "+
				"Langkah ini merupakan bagian dari strategi pembangunan nasional %s untuk memperkuat "+
				"kapasitas %s negara di tahun %d.",
			nation, building.Name, building.Sector,
			building.Cost, building.Duration,
			nation, getSectorDesc(building.Sector), date.Year(),
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
	case "Produksi":
		return "industri dan produksi"
	case "Militer":
		return "pertahanan dan keamanan"
	case "Layanan Publik":
		return "infrastruktur publik"
	default:
		return "pembangunan"
	}
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
	item := NewsItem{
		ID:        fmt.Sprintf("sv-%d-%d", time.Now().UnixNano(), len(state.News)),
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
