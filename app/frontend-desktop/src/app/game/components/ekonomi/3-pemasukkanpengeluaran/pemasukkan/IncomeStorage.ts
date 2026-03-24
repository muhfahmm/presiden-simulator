import { gameStorage } from "../../../../gamestorage";

const INCOME_STORAGE_KEY = "em4_income_data";

export interface IncomeData {
  grants: number; // For future foreign aid
  investments: number; // For future FDI
  lastUpdated: number;
}

export const incomeStorage = {
  getData: (): IncomeData => {
    if (typeof window === 'undefined') return { grants: 0, investments: 0, lastUpdated: Date.now() };
    const stored = localStorage.getItem(INCOME_STORAGE_KEY);
    return stored ? JSON.parse(stored) : { grants: 0, investments: 0, lastUpdated: Date.now() };
  },

  saveData: (data: IncomeData) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(INCOME_STORAGE_KEY, JSON.stringify({ ...data, lastUpdated: Date.now() }));
    window.dispatchEvent(new Event('income_storage_updated'));
  }
};
