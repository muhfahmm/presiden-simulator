import { gameStorage } from "@/app/game/gamestorage";

const EXPENSE_STORAGE_KEY = "em4_expense_data";

export interface ExpenseData {
  socialWelfareLevel: number; // 0-100
  debtInterestPaid: number;
  lastUpdated: number;
}

export const expenseStorage = {
  clear: () => {
    if (typeof window !== "undefined") localStorage.removeItem("em4_expense_data");
  },
  getStorageKey: (countryName: string) => `${EXPENSE_STORAGE_KEY}_${countryName.replace(/\s+/g, '_').toLowerCase()}`,

  getData: (countryName: string, countryData?: any): ExpenseData => {
    const defaults: ExpenseData = { 
      socialWelfareLevel: 20,
      debtInterestPaid: 0,
      lastUpdated: Date.now() 
    };

    if (typeof window === 'undefined') return defaults;
    
    const key = expenseStorage.getStorageKey(countryName);
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaults;
  },

  saveData: (countryName: string, data: ExpenseData) => {
    if (typeof window === 'undefined') return;
    const key = expenseStorage.getStorageKey(countryName);
    localStorage.setItem(key, JSON.stringify({ ...data, lastUpdated: Date.now() }));
    window.dispatchEvent(new Event('expense_storage_updated'));
  },

  updateExpense: (countryName: string, key: keyof Omit<ExpenseData, 'lastUpdated'>, value: number, countryData?: any) => {
    const data = expenseStorage.getData(countryName, countryData);
    (data as any)[key] = value;
    expenseStorage.saveData(countryName, data);
  }
};
