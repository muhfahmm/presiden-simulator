import { gameStorage } from "../../../../gamestorage";

const EXPENSE_STORAGE_KEY = "em4_expense_data";

export interface ExpenseData {
  subsidyEnergi: number; // 0-100% alokasi per sektor dari total dana subsidi
  subsidyPangan: number;
  subsidyKesehatan: number;
  subsidyPendidikan: number;
  subsidyUmkm: number;
  subsidyTransport: number;
  subsidyRumah: number;
  salaryAsn: number; // 0.5 - 2.0x base
  salaryGuru: number; 
  salaryMedis: number;
  salaryMiliter: number;
  socialWelfareLevel: number; // 0-100
  debtInterestPaid: number;
  lastUpdated: number;
}

export const expenseStorage = {
  getData: (): ExpenseData => {
    if (typeof window === 'undefined') return { 
      subsidyEnergi: 10,
      subsidyPangan: 10,
      subsidyKesehatan: 10,
      subsidyPendidikan: 10,
      subsidyUmkm: 10,
      subsidyTransport: 10,
      subsidyRumah: 10,
      salaryAsn: 1.0, 
      salaryGuru: 1.0, 
      salaryMedis: 1.0, 
      salaryMiliter: 1.0, 
      socialWelfareLevel: 20,
      debtInterestPaid: 0,
      lastUpdated: Date.now() 
    };
    
    const stored = localStorage.getItem(EXPENSE_STORAGE_KEY);
    return stored ? JSON.parse(stored) : { 
      subsidyEnergi: 10,
      subsidyPangan: 10,
      subsidyKesehatan: 10,
      subsidyPendidikan: 10,
      subsidyUmkm: 10,
      subsidyTransport: 10,
      subsidyRumah: 10,
      salaryAsn: 1.0, 
      salaryGuru: 1.0, 
      salaryMedis: 1.0, 
      salaryMiliter: 1.0, 
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
