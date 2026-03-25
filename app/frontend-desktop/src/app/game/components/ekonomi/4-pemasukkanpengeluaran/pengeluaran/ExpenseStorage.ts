import { gameStorage } from "@/app/game/gamestorage";

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
  getStorageKey: (countryName: string) => `${EXPENSE_STORAGE_KEY}_${countryName.replace(/\s+/g, '_').toLowerCase()}`,

  getData: (countryName: string, countryData?: any): ExpenseData => {
    const defaults: ExpenseData = { 
      subsidyEnergi: countryData?.subsidies?.subsidyEnergi ?? 10,
      subsidyPangan: countryData?.subsidies?.subsidyPangan ?? 10,
      subsidyKesehatan: countryData?.subsidies?.subsidyKesehatan ?? 10,
      subsidyPendidikan: countryData?.subsidies?.subsidyPendidikan ?? 10,
      subsidyUmkm: countryData?.subsidies?.subsidyUmkm ?? 10,
      subsidyTransport: countryData?.subsidies?.subsidyTransport ?? 10,
      subsidyRumah: countryData?.subsidies?.subsidyRumah ?? 10,
      salaryAsn: countryData?.salaries?.salaryAsn ?? 1.0, 
      salaryGuru: countryData?.salaries?.salaryGuru ?? 1.0, 
      salaryMedis: countryData?.salaries?.salaryMedis ?? 1.0, 
      salaryMiliter: countryData?.salaries?.salaryMiliter ?? 1.0, 
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
