package core

import (
	"fmt"
	"math"
	"math/rand"
	"sync"
	"time"
)

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

type PlayerState struct {
	Country         string             `json:"country"`
	Happiness       float64            `json:"happiness"`
	Population      float64            `json:"population"`
	PopulationDelta float64            `json:"populationDelta"`
	Budget          float64            `json:"budget"`
	DailyIncome     float64            `json:"dailyIncome"`
	Stability       float64            `json:"stability"`
	Initialized     bool               `json:"initialized"`
	GameDate        string             `json:"gameDate"`
	DayCounter      int                `json:"dayCounter"`
	Taxes           map[string]float64 `json:"taxes"`     // Key: "ppn", Value: rate (0-100)
	Buildings       map[string]int     `json:"buildings"` // Key: buildingKey, Value: count
	PriceIndex      float64            `json:"priceIndex"`      // 1.0 = baseline
	HousingCapacity float64            `json:"housingCapacity"` // Total units available
	Religion        string             `json:"religion"`        // Current religion name
	Ideology        string             `json:"ideology"`        // Current ideology name
}

type BuildingType struct {
	Key      string
	DataKey  string
	Name     string
	Sector   string
	SectorID string
	Biaya    int64
	Waktu    int
}

type SimulationState struct {
	GameDate           string                       `json:"gameDate"`
	IsPaused           bool                         `json:"isPaused"`
	Speed              int                          `json:"speed"`
	News               []NewsItem                   `json:"news"`
	Inbox              []InboxItem                  `json:"inbox"`
	DayCounter         int                          `json:"dayCounter"`
	Player             PlayerState                  `json:"player"`
	NPCStates          map[string]*NPCNationState    `json:"npcStates"`
	NPCBuildingLevels  map[string]map[string]int    `json:"npcBuildingLevels"`
	Relationships      map[string]map[string]*Relationship `json:"relationships"` // source -> target -> relationship
	LastProcessedMonth time.Month                   `json:"lastProcessedMonth"`
	Mu                 sync.Mutex                   `json:"-"`
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
	ID            string `json:"id"`
	Sender        string `json:"sender"`
	Subject       string `json:"subject"`
	Content       string `json:"content"`
	Timestamp     int64  `json:"timestamp"`
	Priority      string `json:"priority"`
	Category      string `json:"category"`
	IsProposal    bool   `json:"isProposal"`
	ProposalLabel string `json:"proposalLabel"`
	Read          bool   `json:"read"`
	Time          string `json:"time"`
}

type NPCNationState struct {
	Name         string             `json:"name"`
	GDPGrowth    float64            `json:"gdpGrowth"`
	Stability    float64            `json:"stability"`
	EconomicTier int                `json:"economicTier"`
	Population   float64            `json:"population"`
	Budget       float64            `json:"budget"`
	Happiness    float64            `json:"happiness"`
	DailyIncome  float64            `json:"dailyIncome"`
	Taxes        map[string]float64 `json:"taxes"`
	PriceIndex   float64            `json:"priceIndex"`
}

type Relationship struct {
	S float64 `json:"s"` // Score (0-100)
	E int     `json:"e"` // Embassy (0 or 1)
	P int     `json:"p"` // Pact (0 or 1)
	A int     `json:"a"` // Alliance (0 or 1)
	T int     `json:"t"` // Trade (0 or 1)
}

func (r *Relationship) Prune() bool {
	// A relation is "Neutral/Default" if score is near 50 and no statuses are active
	return math.Abs(r.S-50) < 1.0 && r.E == 0 && r.P == 0 && r.A == 0 && r.T == 0
}

// ═══════════════════════════════════════════════════════════
// GLOBAL STATE
// ═══════════════════════════════════════════════════════════

var (
	GlobalState   SimulationState
	Rng           = rand.New(rand.NewSource(time.Now().UnixNano()))
	NpcNations    []string
	BuildingTypes []BuildingType
)

// ═══════════════════════════════════════════════════════════
// CORE UTILITIES
// ═══════════════════════════════════════════════════════════

// AddNewsItem adds a news item with automatic locking. Use this for API handlers or infrequent updates.
func AddNewsItem(source, subject, content, category, priority, timeStr string) {
	GlobalState.Mu.Lock()
	defer GlobalState.Mu.Unlock()
	AddNewsItemLocked(source, subject, content, category, priority, timeStr)
}

// AddNewsItemLocked adds a news item assuming the caller already holds the GlobalState.Mu lock.
// Use this inside the simulation loop or other areas where GlobalState.Mu is already locked.
func AddNewsItemLocked(source, subject, content, category, priority, timeStr string) {
	// Use UnixNano + Random Int + Current Length to ensure absolute uniqueness in fast loops
	uniqueID := fmt.Sprintf("INTEL-SV-%d-%x-%d", time.Now().UnixNano(), Rng.Int63n(1000000), len(GlobalState.News))
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
	GlobalState.News = append([]NewsItem{item}, GlobalState.News...)
	if len(GlobalState.News) > 50 {
		GlobalState.News = GlobalState.News[:50]
	}
}

// AddInboxItem adds an inbox item with automatic locking. Use this for API handlers.
func AddInboxItem(sender, subject, content, category, priority string, isProposal bool, proposalLabel string, dateStr string) {
	GlobalState.Mu.Lock()
	defer GlobalState.Mu.Unlock()
	AddInboxItemLocked(sender, subject, content, category, priority, isProposal, proposalLabel, dateStr)
}

// AddInboxItemLocked adds an inbox item assuming the caller already holds the GlobalState.Mu lock.
// Use this inside the simulation loop or other areas where GlobalState.Mu is already locked.
func AddInboxItemLocked(sender, subject, content, category, priority string, isProposal bool, proposalLabel string, dateStr string) {
	newItem := InboxItem{
		ID:            fmt.Sprintf("isv-%d-%d", time.Now().UnixNano(), Rng.Intn(99999)),
		Sender:        sender,
		Subject:       subject,
		Content:       content,
		Timestamp:     time.Now().UnixMilli(),
		Priority:      priority,
		Category:      category,
		IsProposal:    isProposal,
		ProposalLabel: proposalLabel,
		Read:          false,
		Time:          dateStr,
	}

	GlobalState.Inbox = append([]InboxItem{newItem}, GlobalState.Inbox...)

	if len(GlobalState.Inbox) > 200 {
		GlobalState.Inbox = GlobalState.Inbox[:200]
	}
}
