package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os/exec"
	"sync"
	"time"
)

// ═══════════════════════════════════════════════════════════
// GLOBAL SIMULATION STATE (Server-Authoritative)
// ═══════════════════════════════════════════════════════════

type SimulationState struct {
	GameDate   string     `json:"gameDate"`
	IsPaused   bool       `json:"isPaused"`
	Speed      int        `json:"speed"`
	News       []NewsItem  `json:"news"`
	Inbox      []InboxItem `json:"inbox"`
	DayCounter int        `json:"dayCounter"`
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
	}
	sseClients   = make(map[*SSEClient]bool)
	sseClientsMu sync.Mutex
)

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

	// 4. Data Endpoints (Fallback REST)
	http.HandleFunc("/api/berita", handleBerita)
	http.HandleFunc("/api/inbox", handleInbox)
	http.HandleFunc("/api/health", handleHealth)

	fmt.Println("═══════════════════════════════════════════════")
	fmt.Println("[GO] Server-Authoritative Simulation Engine")
	fmt.Println("[GO] SSE Stream: http://localhost:8080/api/game/sync")
	fmt.Println("[GO] Control:    http://localhost:8080/api/game/control")
	fmt.Println("[GO] Listening on :8080")
	fmt.Println("═══════════════════════════════════════════════")
	http.ListenAndServe(":8080", nil)
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

		// --- Process 206 NPC Nations (Server-Side) ---
		// This runs in Go's goroutine, NOT in the browser's main thread
		processNPCDay(nextDate)

		// --- Generate periodic news ---
		if state.DayCounter%7 == 0 {
			generateWeeklyNews(nextDate)
		}

		// Broadcast state to all SSE clients
		snapshot := createSnapshot()
		state.mu.Unlock()

		broadcastSSE(snapshot)
	}
}

func processNPCDay(date time.Time) {
	// Heavy NPC processing happens HERE, not in the browser
	// Budget, population, production for all 206 nations
	// This is a placeholder that will be expanded with actual game logic

	// Every 30 days, invoke language workers for deeper analysis
	if state.DayCounter%30 == 0 {
		go func() {
			// C++ Worker (Construction Math)
			cppOut, err := exec.Command("src/app/server/cpp/worker.exe").Output()
			if err == nil && len(cppOut) > 0 {
				addNewsItem("C++ Engine", "Kalkulasi Infrastruktur", string(cppOut), "construction", "low")
			}

			// Python Worker (Strategy)
			pyOut, err := exec.Command("python", "src/app/server/python/strategy.py").Output()
			if err == nil && len(pyOut) > 0 {
				addNewsItem("Python AI", "Analisis Strategi", string(pyOut), "economy", "low")
			}

			// Rust Worker (Compute)
			rustOut, err := exec.Command("src/app/server/rust/worker.exe").Output()
			if err == nil && len(rustOut) > 0 {
				addNewsItem("Rust Engine", "Pemrosesan Data", string(rustOut), "global", "low")
			}

			// Java Worker (Logic)
			javaOut, err := exec.Command("java", "-cp", "src/app/server/java", "Main").Output()
			if err == nil && len(javaOut) > 0 {
				addNewsItem("Java Logic", "Manajemen Diplomasi", string(javaOut), "diplomacy", "low")
			}
		}()
	}
}

func generateWeeklyNews(date time.Time) {
	addNewsItem(
		"Lensa Global (Server)",
		fmt.Sprintf("Laporan Mingguan - %s", date.Format("02 Jan 2006")),
		fmt.Sprintf("[SERVER] Simulasi 206 negara berjalan lancar. Hari ke-%d. Semua kalkulasi diproses di backend tanpa beban browser.", state.DayCounter),
		"global",
		"low",
	)
}

func addNewsItem(source, subject, content, category, priority string) {
	item := NewsItem{
		ID:        fmt.Sprintf("sv-%d-%d", time.Now().UnixNano(), len(state.News)),
		Source:    source,
		Subject:   subject,
		Content:   content,
		Timestamp: time.Now().UnixMilli(),
		Category:  category,
		Priority:  priority,
		Read:      false,
	}
	state.News = append([]NewsItem{item}, state.News...)
	if len(state.News) > 10 {
		state.News = state.News[:10]
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
	News       []NewsItem  `json:"news"`
	Inbox      []InboxItem `json:"inbox"`
}

func createSnapshot() []byte {
	payload := SyncPayload{
		GameDate:   state.GameDate,
		IsPaused:   state.IsPaused,
		Speed:      state.Speed,
		DayCounter: state.DayCounter,
		News:       state.News,
		Inbox:      state.Inbox,
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
	state.mu.Unlock()
	fmt.Fprintf(w, `{"status":"online","engine":"Go Server-Authoritative","paused":%t,"day":%d,"sseClients":%d}`, paused, day, clients)
}
