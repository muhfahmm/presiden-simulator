import { gameStorage } from "@/app/game/gamestorage";

const EXPENSE_STORAGE_KEY = "em4_expense_data";

export interface ExpenseData {
  subsidi_energi: number; // 0-100% alokasi per sektor dari total dana subsidi
  subsidi_pangan: number;
  subsidi_kesehatan: number;
  subsidi_pendidikan: number;
  subsidi_umkm: number;
  subsidi_transportasi: number;
  subsidi_perumahan: number;
  gaji_asn: number; // 0.5 - 2.0x base
  gaji_guru: number; 
  gaji_medis: number;
  gaji_militer: number;
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
      subsidi_energi: countryData?.subsidi?.subsidi_energi ?? 10,
      subsidi_pangan: countryData?.subsidi?.subsidi_pangan ?? 10,
      subsidi_kesehatan: countryData?.subsidi?.subsidi_kesehatan ?? 10,
      subsidi_pendidikan: countryData?.subsidi?.subsidi_pendidikan ?? 10,
      subsidi_umkm: countryData?.subsidi?.subsidi_umkm ?? 10,
      subsidi_transportasi: countryData?.subsidi?.subsidi_transportasi ?? 10,
      subsidi_perumahan: countryData?.subsidi?.subsidi_perumahan ?? 10,
      gaji_asn: countryData?.gaji?.gaji_asn ?? 1.0, 
      gaji_guru: countryData?.gaji?.gaji_guru ?? 1.0, 
      gaji_medis: countryData?.gaji?.gaji_medis ?? 1.0, 
      gaji_militer: countryData?.gaji?.gaji_militer ?? 1.0, 
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
