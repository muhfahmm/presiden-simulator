package main

import (
	"sync"
)

/**
 * LazyRegistry (GO)
 * Manages the loading state and priority of UI modals and heavy components.
 * Prevents "Hydration" lag by orchestrating when heavy JS bundles are requested.
 */

type ComponentState string

const (
	StateNotLoaded ComponentState = "NOT_LOADED"
	StateLoading   ComponentState = "LOADING"
	StateLoaded    ComponentState = "LOADED"
)

type UIComponent struct {
	Name     string         `json:"name"`
	State    ComponentState `json:"state"`
	Priority int            `json:"priority"` // 1: Immediate, 2: Post-mount, 3: On-demand
	SizeKB   int            `json:"size_kb"`
}

type Registry struct {
	Components map[string]*UIComponent
	Mu         sync.RWMutex
}

var GlobalRegistry = &Registry{
	Components: make(map[string]*UIComponent),
}

func (r *Registry) Register(name string, priority int, size int) {
	r.Mu.Lock()
	defer r.Mu.Unlock()
	r.Components[name] = &UIComponent{
		Name:     name,
		State:    StateNotLoaded,
		Priority: priority,
		SizeKB:   size,
	}
}

// GetLoadOrder returns component names sorted by priority
func (r *Registry) GetLoadOrder() []string {
	r.Mu.RLock()
	defer r.Mu.RUnlock()
	
	// Simulation: return names in priority order
	return []string{"navbar", "sidebar", "map_tactical", "modal_perang"}
}

func (r *Registry) MarkAsLoaded(name string) {
	r.Mu.Lock()
	defer r.Mu.Unlock()
	if c, ok := r.Components[name]; ok {
		c.State = StateLoaded
	}
}
