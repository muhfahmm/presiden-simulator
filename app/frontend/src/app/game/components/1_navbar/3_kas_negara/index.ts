import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/index";
import { INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { storageSafety } from "@/app/game/utils/storageSafety";

const BUDGET_STORAGE_KEY = "em_budget_data";

export interface BudgetData {
  anggaran: number;
  cumulativeProduction: Record<string, number>;
  lastProcessedDate?: string; // ISO string of the last game date processed
}

export const budgetStorage = {
  clear: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(BUDGET_STORAGE_KEY);
      budgetStorage.inMemoryData = null; // Clear cache
      // Force re-initialization from database defaults
      budgetStorage.getData();
      window.dispatchEvent(new Event('budget_storage_updated'));
    }
  },
  
  // In-memory cache for high-speed simulation
  inMemoryData: null as BudgetData | null,

  // Get all budget data, with migration fallback
  getData: (): BudgetData => {
    if (typeof window === 'undefined') return { anggaran: 0, cumulativeProduction: {} };

    // Use memory cache if available
    if (budgetStorage.inMemoryData) return budgetStorage.inMemoryData;

    const stored = localStorage.getItem(BUDGET_STORAGE_KEY);
    const session = gameStorage.getSession() as any;
    const countryName = session?.country || localStorage.getItem("selectedCountry");

    // 1. If we have a session but data is missing or corrupted, initialize from DB
    if (countryName) {
      const countryData = countries.find(c =>
        c.name_en === countryName ||
        c.name_id === countryName ||
        c.name_id.toLowerCase() === countryName.toLowerCase() ||
        c.name_en.toLowerCase() === countryName.toLowerCase()
      ) || countries[0];

      const dbBudget = typeof countryData.anggaran === 'number' ? countryData.anggaran : 1240;

      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          // NEW: If stored budget is 0 but DB budget is > 0, sync from DB
          // This fixes the issue where treasury is stuck at 0
          if ((!parsed.anggaran || parsed.anggaran === 0) && dbBudget > 0) {
            const syncedData = {
              ...parsed,
              anggaran: dbBudget,
              lastProcessedDate: parsed.lastProcessedDate || INITIAL_GAME_DATE.toISOString()
            };
            budgetStorage.saveData(syncedData);
            return syncedData;
          }

          return {
            anggaran: typeof parsed.anggaran === 'number' ? parsed.anggaran : dbBudget,
            cumulativeProduction: parsed.cumulativeProduction || {},
            lastProcessedDate: parsed.lastProcessedDate
          };
        } catch (e) {
          console.error("Failed to parse budget storage", e);
        }
      }

      // Initial initialization if no storage exists
      const initialData: BudgetData = {
        anggaran: dbBudget,
        cumulativeProduction: {},
        lastProcessedDate: INITIAL_GAME_DATE.toISOString()
      };
      budgetStorage.saveData(initialData);
      return initialData;
    }

    return { anggaran: 0, cumulativeProduction: {}, lastProcessedDate: undefined };
  },

  saveData: (data: BudgetData) => {
    if (typeof window === 'undefined') return;
    
    // Update in-memory cache ONLY for high performance
    budgetStorage.inMemoryData = data;

    // Dispatch event for UI updates (asynchronous)
    setTimeout(() => window.dispatchEvent(new Event('budget_storage_updated')), 0);
  },

  // Persist to actual LocalStorage (Call this only on pause or month end)
  persist: () => {
    if (typeof window === 'undefined' || !budgetStorage.inMemoryData) return;
    try {
        const success = storageSafety.setItem(BUDGET_STORAGE_KEY, JSON.stringify(budgetStorage.inMemoryData));
        if (success) console.log("[STORAGE] Budget persisted to LocalStorage");
    } catch (e) {
        console.error("[STORAGE] Quota exceeded or save error", e);
    }
  },

  getBudget: (): number => {
    return budgetStorage.getData().anggaran;
  },

  updateBudget: (delta: number) => {
    const data = budgetStorage.getData();
    data.anggaran = (data.anggaran || 0) + delta;
    budgetStorage.saveData(data);
    return data.anggaran;
  },

  // Server-authoritative: set budget directly from Go Server
  setBudgetDirect: (value: number) => {
    const data = budgetStorage.getData();
    data.anggaran = value;
    budgetStorage.saveData(data);
  },

  getCumulativeProduction: (): Record<string, number> => {
    return budgetStorage.getData().cumulativeProduction;
  },

  updateCumulativeProduction: (deltas: Record<string, number>, gameDate?: Date) => {
    const data = budgetStorage.getData();
    if (!data.cumulativeProduction) data.cumulativeProduction = {};

    // 1. Manual Deltas (e.g. from Exports or Imports)
    Object.entries(deltas).forEach(([key, amount]) => {
      const current = data.cumulativeProduction[key] || 0;
      data.cumulativeProduction[key] = current + amount;
    });

    // 2. Automatic Daily Production (on Tick)
    if (gameDate && data.lastProcessedDate) {
      const lastDate = new Date(data.lastProcessedDate);
      
      // Calculate how many FULL days have passed
      const diffTime = gameDate.getTime() - lastDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays >= 1) {
        const session = gameStorage.getSession();
        const countryName = session?.country || "Indonesia";
        const countryData = countries.find(c => c.name_id === countryName || c.name_en === countryName);
        
        if (countryData) {
          const { calculateDailyProduction } = require("@/app/game/data/economy/ProductionLogic");
          const buildingDeltas = buildingStorage.getBuildingDeltas() || {};
          const dailyProduction = calculateDailyProduction(countryData, buildingDeltas);

          // Add production for each elapsed day
          for (let i = 0; i < diffDays; i++) {
            Object.entries(dailyProduction).forEach(([key, amount]) => {
              const current = data.cumulativeProduction[key] || 0;
              data.cumulativeProduction[key] = current + (amount as number);
            });
          }
          
          // Advance last processed date by the number of days processed
          const newProcessedDate = new Date(lastDate);
          newProcessedDate.setDate(newProcessedDate.getDate() + diffDays);
          data.lastProcessedDate = newProcessedDate.toISOString();
        }
      }
    } else if (gameDate) {
      data.lastProcessedDate = gameDate.toISOString();
    }

    budgetStorage.saveData(data);
  }
};


