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
          this.isPaused = data.isPaused;
          this.speed = data.speed;
          saveGameDate(newDate); // Sync to localStorage for other legacy components
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

  public setPaused(paused: boolean) {
    this.isPaused = paused;
    this.notify();
  }

  public setSpeed(speed: number) {
    this.speed = speed;
    this.notify();
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
