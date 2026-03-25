import { gameStorage, GameSession } from "@/app/game/gamestorage";
import { countries } from "@/app/select-country/data/countries";

const BUDGET_STORAGE_KEY = "em4_budget_data";

export interface BudgetData {
  budget: number;
  cumulativeProduction: Record<string, number>;
}

export const budgetStorage = {
  clear: () => {
    if (typeof window !== "undefined") localStorage.removeItem("em4_budget_data");
  },
  // Get all budget data, with migration fallback
  getData: (): BudgetData => {
    if (typeof window === 'undefined') return { budget: 0, cumulativeProduction: {} };
    
    const stored = localStorage.getItem(BUDGET_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return {
          budget: typeof parsed.budget === 'number' ? parsed.budget : 0,
          cumulativeProduction: parsed.cumulativeProduction || {}
        };
      } catch (e) {
        console.error("Failed to parse budget storage", e);
      }
    }

    // MIGRATION / INITIALIZATION FALLBACK: Try to get from gameStorage
    const session = gameStorage.getSession() as any;
    if (session) {
      const countryData = countries.find(c => c.name_en === session.country || c.name_id === session.country) || countries[0];
      const defaultBudget = typeof countryData.budget === 'number' ? countryData.budget : 1240;

      const migratedData: BudgetData = {
        budget: typeof session.budget === 'number' ? session.budget : defaultBudget,
        cumulativeProduction: session.cumulativeProduction || {}
      };
      
      // Save it to the new key immediately
      budgetStorage.saveData(migratedData);
      return migratedData;
    }

    return { budget: 0, cumulativeProduction: {} };
  },

  saveData: (data: BudgetData) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(BUDGET_STORAGE_KEY, JSON.stringify(data));
    
    // Dispatch event for UI updates
    window.dispatchEvent(new Event('budget_storage_updated'));
  },

  getBudget: (): number => {
    return budgetStorage.getData().budget;
  },

  updateBudget: (delta: number) => {
    const data = budgetStorage.getData();
    data.budget = (data.budget || 0) + delta;
    budgetStorage.saveData(data);
    return data.budget;
  },

  getCumulativeProduction: (): Record<string, number> => {
    return budgetStorage.getData().cumulativeProduction;
  },

  updateCumulativeProduction: (deltas: Record<string, number>) => {
    const data = budgetStorage.getData();
    if (!data.cumulativeProduction) data.cumulativeProduction = {};
    
    Object.entries(deltas).forEach(([key, amount]) => {
      const current = data.cumulativeProduction[key] || 0;
      data.cumulativeProduction[key] = current + amount;
    });
    
    budgetStorage.saveData(data);
  }
};
