import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

const BUDGET_STORAGE_KEY = "em4_budget_data";

export interface BudgetData {
  anggaran: number;
  cumulativeProduction: Record<string, number>;
  lastProcessedDate?: string; // ISO string of the last game date processed
}

export const budgetStorage = {
  clear: () => {
    if (typeof window !== "undefined") localStorage.removeItem("em4_budget_data");
  },
  // Get all budget data, with migration fallback
  getData: (): BudgetData => {
    if (typeof window === 'undefined') return { anggaran: 0, cumulativeProduction: {} };
    
    const stored = localStorage.getItem(BUDGET_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return {
          anggaran: typeof parsed.anggaran === 'number' ? parsed.anggaran : 0,
          cumulativeProduction: parsed.cumulativeProduction || {},
          lastProcessedDate: parsed.lastProcessedDate
        };
      } catch (e) {
        console.error("Failed to parse budget storage", e);
      }
    }

    // MIGRATION / INITIALIZATION FALLBACK: Try to get from gameStorage
    const session = gameStorage.getSession() as any;
    if (session) {
      const countryData = countries.find(c => c.name_en === session.country || c.name_id === session.country) || countries[0];
      const defaultBudget = typeof countryData.anggaran === 'number' ? countryData.anggaran : 1240;

      const migratedData: BudgetData = {
        anggaran: defaultBudget, // Force reset to database value if storage is missing
        cumulativeProduction: {}, // Always reset production to 0 on full init
        lastProcessedDate: INITIAL_GAME_DATE.toISOString() // Mark first day as processed to show initial budget
      };
      
      // Save it to the new key immediately
      budgetStorage.saveData(migratedData);
      return migratedData;
    }

    return { anggaran: 0, cumulativeProduction: {}, lastProcessedDate: undefined };
  },

  saveData: (data: BudgetData) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(BUDGET_STORAGE_KEY, JSON.stringify(data));
    
    // Dispatch event for UI updates
    window.dispatchEvent(new Event('budget_storage_updated'));
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

  getCumulativeProduction: (): Record<string, number> => {
    return budgetStorage.getData().cumulativeProduction;
  },

  updateCumulativeProduction: (deltas: Record<string, number>, gameDate?: Date) => {
    const data = budgetStorage.getData();
    if (!data.cumulativeProduction) data.cumulativeProduction = {};
    
    Object.entries(deltas).forEach(([key, amount]) => {
      const current = data.cumulativeProduction[key] || 0;
      data.cumulativeProduction[key] = current + amount;
    });

    if (gameDate) {
      data.lastProcessedDate = gameDate.toISOString();
    }
    
    budgetStorage.saveData(data);
  }
};

