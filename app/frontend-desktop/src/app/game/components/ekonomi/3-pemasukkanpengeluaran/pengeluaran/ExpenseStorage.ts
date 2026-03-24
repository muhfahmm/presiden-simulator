import { gameStorage } from "../../../../gamestorage";

const EXPENSE_STORAGE_KEY = "em4_expense_data";

export interface ExpenseData {
  subsidyLevel: number; // 0-100%
  salaryMultiplier: number; // 0.5 - 2.0x base
  socialWelfareLevel: number; // 0-100
  debtInterestPaid: number;
  lastUpdated: number;
}

export const expenseStorage = {
  getData: (): ExpenseData => {
    if (typeof window === 'undefined') return { 
      subsidyLevel: 10, 
      salaryMultiplier: 1.0, 
      socialWelfareLevel: 20,
      debtInterestPaid: 0,
      lastUpdated: Date.now() 
    };
    
    const stored = localStorage.getItem(EXPENSE_STORAGE_KEY);
    return stored ? JSON.parse(stored) : { 
      subsidyLevel: 10, 
      salaryMultiplier: 1.0, 
      socialWelfareLevel: 20,
      debtInterestPaid: 0,
      lastUpdated: Date.now() 
    };
  },

  saveData: (data: ExpenseData) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(EXPENSE_STORAGE_KEY, JSON.stringify({ ...data, lastUpdated: Date.now() }));
    window.dispatchEvent(new Event('expense_storage_updated'));
  },

  updateExpense: (key: keyof Omit<ExpenseData, 'lastUpdated'>, value: number) => {
    const data = expenseStorage.getData();
    (data as any)[key] = value;
    expenseStorage.saveData(data);
  }
};
