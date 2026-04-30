import { INITIAL_GAME_DATE, saveGameDate, getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

// ══════════════════════════════════════════════════════════════
// MIGRATED TO GO SERVER:
// - All timers and NPC processing have been removed.
// - The Go Server is now the SINGLE SOURCE OF TRUTH for time.
// - timeStorage now acts as a passive proxy/listener.
// ══════════════════════════════════════════════════════════════

type TimeListener = (date: Date, isPaused: boolean, speed: number) => void;

class TimeStorage {
  private gameDate: Date = INITIAL_GAME_DATE;
  private isPaused: boolean = true;
  private speed: number = 1;
  private lastManualActionTime: number = 0;
  private readonly LOCK_DURATION = 5000; // 5 seconds to ensure server consistency
  private listeners: Set<TimeListener> = new Set();

  constructor() {
    if (typeof window !== "undefined") {
      this.gameDate = getStoredGameDate();
      
      // Sync with Go Server SSE (Date/Pause/Speed updates)
      window.addEventListener('game_state_sync', (e: any) => {
        const data = e.detail;
        if (data.gameDate) {
          const newDate = new Date(data.gameDate);
          this.gameDate = newDate;
          
          // LOCKING MECHANISM: Don't let SSE override our manual choice during LOCK_DURATION
          const now = Date.now();
          const isLocked = (now - this.lastManualActionTime) < this.LOCK_DURATION;
          
          if (!isLocked) {
            this.isPaused = data.isPaused;
            this.speed = data.speed;
          } else {
            // Even if locked, we still want to log what's happening
            // console.log(`[TimeStorage] SSE Ignored (Locked): Server Speed ${data.speed}, Local Speed ${this.speed}`);
          }
          
          saveGameDate(newDate); 
          this.notify();
        }
      });
    }
  }

  public subscribe(listener: TimeListener) {
    this.listeners.add(listener);
    listener(this.gameDate, this.isPaused, this.speed);
    return () => { this.listeners.delete(listener); };
  }

  private notify() {
    this.listeners.forEach(l => l(this.gameDate, this.isPaused, this.speed));
  }

  public async setPaused(paused: boolean) {
    // Debounce: prevent multiple rapid clicks
    const now = Date.now();
    if (now - this.lastManualActionTime < 100) return;

    this.isPaused = paused;
    this.lastManualActionTime = now;
    this.notify();

    // Call Go Backend
    try {
      await fetch("http://localhost:8081/api/game/control", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: paused ? "pause" : "resume" })
      });
    } catch (e) {
      console.error("Failed to sync pause state to server", e);
    }
  }

  public async setSpeed(speed: number) {
    this.speed = speed;
    this.lastManualActionTime = Date.now();
    this.notify();

    // Call Go Backend
    try {
      await fetch("http://localhost:8081/api/game/control", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "setSpeed", speed: speed })
      });
    } catch (e) {
      console.error("Failed to sync speed to server", e);
    }
  }

  public setDate(date: Date) {
    this.gameDate = date;
    saveGameDate(date);
    this.notify();
  }

  public getState() {
    return {
      gameDate: this.gameDate,
      isPaused: this.isPaused,
      speed: this.speed
    };
  }

  public clear() {
    this.isPaused = true;
    this.gameDate = INITIAL_GAME_DATE;
    saveGameDate(INITIAL_GAME_DATE);
    this.notify();
  }
}

export const timeStorage = new TimeStorage();
