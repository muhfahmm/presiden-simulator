import { INITIAL_GAME_DATE, addDays, saveGameDate, getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

// ══════════════════════════════════════════════════════════════
// MIGRATED TO GO SERVER:
// - processGlobalAiRelations → Go server handles NPC diplomacy
// - AiTradeService.processDaily → Go server handles NPC trade
// - DebtAiService.processDailyDebt → Go server handles NPC debt
// These were removed to eliminate QuotaExceededError from
// massive localStorage writes (relation matrices, trade offers)
// ══════════════════════════════════════════════════════════════

type TimeListener = (date: Date, isPaused: boolean, speed: number) => void;

class TimeStorage {
  private gameDate: Date = INITIAL_GAME_DATE;
  private isPaused: boolean = true;
  private speed: number = 1;
  private listeners: Set<TimeListener> = new Set();
  private timer: NodeJS.Timeout | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      this.gameDate = getStoredGameDate();
      this.startTimer();
    }
  }

  private startTimer() {
    if (this.timer) clearInterval(this.timer);
    if (this.isPaused) return;

    this.timer = setInterval(() => {
      this.gameDate = addDays(this.gameDate, 1);
      saveGameDate(this.gameDate);
      
      // ══════════════════════════════════════════════
      // All NPC AI processing has been removed.
      // The Go Server now handles:
      // - AI Diplomacy (relation matrix)
      // - AI Trade (offers/contracts)
      // - AI Debt (lending/borrowing)
      // - AI Construction (building projects)
      // ══════════════════════════════════════════════

      this.notify();
    }, 2000 / this.speed);
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
    this.startTimer();
    this.notify();
  }

  public setSpeed(speed: number) {
    this.speed = speed;
    this.startTimer();
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
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.isPaused = true;
    this.gameDate = INITIAL_GAME_DATE;
    this.notify();
  }
}

export const timeStorage = new TimeStorage();
