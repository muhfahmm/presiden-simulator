import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

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
      // Force re-initialization from database defaults
      budgetStorage.getData();
      window.dispatchEvent(new Event('budget_storage_updated'));
    }
  },
  // Get all budget data, with migration fallback
  getData: (): BudgetData => {
    if (typeof window === 'undefined') return { anggaran: 0, cumulativeProduction: {} };

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

