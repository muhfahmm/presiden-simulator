package ai_web_worker_performance

import (
	"sync"
	"time"
)

/**
 * WorkerOrchestrator (GO)
 * Manages the lifecycle and message passing for background AI Workers.
 * Ensures that heavy calculations (like budget updates) don't block the UI thread.
 */

type Task struct {
	ID        string      `json:"id"`
	Module    string      `json:"module"` // "budget", "pop", "defense"
	Payload   interface{} `json:"payload"`
	CreatedAt time.Time   `json:"created_at"`
}

type WorkerStatus struct {
	WorkerID    int       `json:"worker_id"`
	IsBusy      bool      `json:"is_busy"`
	CurrentTask string    `json:"current_task"`
	HealthScore float64   `json:"health_score"`
}

type Orchestrator struct {
	TaskQueue   chan Task
	Workers     []*WorkerStatus
	Mu          sync.Mutex
}

func (o *Orchestrator) Dispatch(module string, data interface{}) {
	o.Mu.Lock()
	defer o.Mu.Unlock()
	
	task := Task{
		ID:        time.Now().Format("20060102150405"),
		Module:    module,
		Payload:   data,
		CreatedAt: time.Now(),
	}
	
	// Send to queue
	select {
	case o.TaskQueue <- task:
		// Task accepted
	default:
		// Queue full
	}
}

func (o *Orchestrator) GetHealthReport() []WorkerStatus {
	o.Mu.Lock()
	defer o.Mu.Unlock()
	
	report := make([]WorkerStatus, len(o.Workers))
	for i, w := range o.Workers {
		report[i] = *w
	}
	return report
}
