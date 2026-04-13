import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { populationDeltaStorage } from "@/app/game/components/1_navbar/2_populasi/PopulationDeltaStorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { happinessStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan/happinessStorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { DATA_ACARA, acaraStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan/acara/acaraStorage";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";
import { getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

const STORAGE_KEY_PENALTY = "em4_ai_housing_penalty_data";
const STORAGE_KEY_LAST_NEWS = "em4_ai_last_rebellion_news_date";

/**
 * Optimized Service to manage AI Logic for Housing and Rebellion Prevention
 */
export class AiHunianService {
  private static isAnalyzing = false;

  static async runDailyAnalysis() {
    if (this.isAnalyzing) return;
    this.isAnalyzing = true;

    try {
      const population = populationStorage.getPopulation();
      const budget = budgetStorage.getBudget();
      const happiness = happinessStorage.getStats().value;
      const gameDate = getStoredGameDate();
      const populationGrowth = populationDeltaStorage.getDelta();
      
      const session = gameStorage.getSession();
      const countryName = session?.country || "Indonesia";
      const countryData = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];
      
      const buildingDeltas = buildingStorage.getBuildingDeltas();
      const housing_data = {
        rumah_subsidi: (countryData.hunian?.rumah_subsidi || 0) + (buildingDeltas["9_rumah_subsidi"] || 0),
        apartemen: (countryData.hunian?.apartemen || 0) + (buildingDeltas["10_apartemen"] || 0),
        mansion: (countryData.hunian?.mansion || 0) + (buildingDeltas["11_mansion"] || 0),
      };

      // Check if ANY event is currently active or on cooldown
      let isAnyEventActive = false;
      const availableEvents = DATA_ACARA.filter(e => {
        const status = acaraStorage.getActiveStatus(e.id, gameDate);
        const cooldown = acaraStorage.getCooldownStatus(e.id, gameDate);
        if (status.isActive) isAnyEventActive = true;
        return !cooldown.onCooldown && !status.isActive;
      });

      const response = await fetch("/api/game/populasi/hunian-kepuasan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          population,
          budget,
          happiness,
          population_growth: populationGrowth,
          housing_data,
          events_list: availableEvents,
          is_any_event_active: isAnyEventActive
        }),
      });

      const result = await response.json();
      if (result.error) throw new Error(result.error);

      // 1. Handle AI Event Execution
      if (result.action && result.action.type === "EXECUTE_EVENT") {
        // Double check in TS before execution
        const success = acaraStorage.executeAcara(result.action.id, gameDate);
        if (success) {
           console.log(`[AI Logic] Perfected Execution: ${result.action.name}`);
        }
      }

      // 2. Handle Rebellion (with weekly throttling)
      if (result.rebellion && happiness <= 25) {
         this.triggerThrottledRebellionNews(gameDate);
      }

      // 3. Store Persistent Penalty Data
      const penaltyData = {
          penalty: result.housing?.daily_happiness_penalty || 0,
          deficit: result.housing?.deficit_units || 0,
          homeless_percent: result.housing?.homeless_percent || 0,
          lastUpdated: gameDate.getTime()
      };
      
      if (typeof window !== "undefined") {
          localStorage.setItem(STORAGE_KEY_PENALTY, JSON.stringify(penaltyData));
          // Provide a fallback for legacy window access if needed
          (window as any).ai_housing_penalty = penaltyData.penalty;
      }

    } catch (error) {
      console.error("[AiHunianService] Perfection Error:", error);
    } finally {
      this.isAnalyzing = false;
    }
  }

  /**
   * Triggers rebellion news at most once every 7 game days
   */
  private static triggerThrottledRebellionNews(currentGameDate: Date) {
    if (typeof window === "undefined") return;

    const lastNews = localStorage.getItem(STORAGE_KEY_LAST_NEWS);
    if (lastNews) {
        const lastDate = new Date(parseInt(lastNews));
        const diffDays = Math.floor((currentGameDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays < 7) return; // Wait 7 days before broadcasting again
    }

    newsStorage.addNews({
      source: "BIN / KEMENDAGRI",
      subject: "DARURAT NASIONAL: KRISIS DAN REVOLUSI SOSIAL!",
      content: "Ketidakpuasan rakyat memuncak. Pemberontakan besar terjadi di pusat-pusat kota menuntut perbaikan fasilitas hunian dan kesejahteraan hidup.",
      time: getStoredGameDate().toDateString(),
      priority: "high",
      category: "global"
    });
    
    localStorage.setItem(STORAGE_KEY_LAST_NEWS, currentGameDate.getTime().toString());
  }

  static getHousingPenalty(): number {
      if (typeof window === "undefined") return 0;
      const stored = localStorage.getItem(STORAGE_KEY_PENALTY);
      if (!stored) return 0;
      try {
          const data = JSON.parse(stored);
          return data.penalty || 0;
      } catch {
          return 0;
      }
  }
}
