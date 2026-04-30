/**
 * MapSimulationWorker (TypeScript Worker)
 * Offloads tactical calculations (invasions, movement, data processing) from the main thread.
 * Handles high-speed simulation (1x, 2x, 3x) without blocking UI.
 */

let activeInvasions: any[] = [];
let gameSpeed = 1;
let isPaused = false;
let lastTick = 0;

self.onmessage = (e) => {
  const { type, payload } = e.data;

  switch (type) {
    case 'INIT_INVASIONS':
      activeInvasions = payload;
      break;
    case 'ADD_INVASION':
      activeInvasions.push(payload);
      break;
    case 'REMOVE_INVASION':
      activeInvasions = activeInvasions.filter(inv => inv.target !== payload.target);
      break;
    case 'UPDATE_STATE':
      const previouslyPaused = isPaused;
      gameSpeed = payload.speed || 1;
      isPaused = payload.isPaused || false;
      
      // Instant response: if paused, stop ticking immediately
      if (isPaused) {
        self.postMessage({ type: 'STATE_SYNC', payload: activeInvasions });
      } else if (previouslyPaused && !isPaused) {
        // Smooth resume: reset lastTick to now so we don't 'jump' forward
        lastTick = performance.now();
        tick();
      }
      break;
    case 'FORCE_SYNC':
      self.postMessage({ type: 'STATE_SYNC', payload: activeInvasions });
      break;
  }
};

function tick() {
  if (isPaused) return; // Stop the loop immediately

  const now = performance.now();
  if (lastTick === 0) lastTick = now;
  const deltaTime = (now - lastTick) / 1000;
  lastTick = now;

  if (activeInvasions.length > 0) {
    let changed = false;
    for (const inv of activeInvasions) {
      if (!inv.arrived) {
        // Multiplier applied here for high speed
        inv.progress += (inv.speed * gameSpeed) * (deltaTime * 60); 
        if (inv.progress >= 1) {
          inv.progress = 1;
          inv.arrived = true;
          self.postMessage({ type: 'INVASION_ARRIVED', payload: { target: inv.target } });
        }
        changed = true;
      }
    }
    
    if (changed) {
        self.postMessage({ type: 'TICK', payload: activeInvasions });
    }
  }

  // Only schedule next tick if not paused
  if (!isPaused) {
    setTimeout(tick, 16);
  }
}

// Start the loop if not initially paused
if (!isPaused) {
  lastTick = performance.now();
  tick();
}
