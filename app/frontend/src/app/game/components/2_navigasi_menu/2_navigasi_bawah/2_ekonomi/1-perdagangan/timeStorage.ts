import { INITIAL_GAME_DATE, addDays, saveGameDate, getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
// import { diplomacyStorage } from "@/app/game/components/map-system/modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/diplomacyStorage";
import { relationStorage } from "@/app/game/components/map-system/modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";
import { processGlobalAiRelations } from "@/app/game/components/map-system/ai_diplomacy_engine/AiGlobalDiplomacy";
import { AiTradeService } from "./sistem_perdagangan_AI/services/AiTradeService";

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
      // diplomacyStorage.updateProgress(this.gameDate);
      // relationStorage.processDailyDrift(); // Matikan sistem lama agar tidak bentrok dengan AI
      processGlobalAiRelations(); // Gunakan AI Global sebagai satu-satunya sistem diplomasi
      AiTradeService.processDaily(); // Sistem Perdagangan AI (tawaran, kontrak, NPC trade)
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
