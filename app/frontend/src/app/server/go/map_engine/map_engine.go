package map_engine

import (
	"sync"
)

/**
 * map_engine.go
 * Go-side orchestration for map rendering and data sync.
 * Decoupled from the main simulation engine.
 */

// VisualState stores the transient visual properties for the map
type VisualState struct {
	Heatmap map[string]float64
	Mu      sync.RWMutex
}

var GlobalVisualState = &VisualState{
	Heatmap: make(map[string]float64),
}

// UpdateHeatmap updates the visual indices for countries
func (vs *VisualState) UpdateHeatmap(data map[string]float64) {
	vs.Mu.Lock()
	defer vs.Mu.Unlock()
	vs.Heatmap = data
}

// GetHeatmap returns a copy of the current heatmap for JSON serialization
func (vs *VisualState) GetHeatmap() map[string]float64 {
	vs.Mu.RLock()
	defer vs.Mu.RUnlock()
	
	copy := make(map[string]float64)
	for k, v := range vs.Heatmap {
		copy[k] = v
	}
	return copy
}
