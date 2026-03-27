import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

const STORAGE_KEY = "em4_un_icao";

export interface UNICAOState {
  isJoined: boolean;
  joinDate?: string;
}

export const unICAOStorage = {
  getInitialState: (): UNICAOState => ({
    isJoined: false,
  }),

  getData: (): UNICAOState => {
    if (typeof window === 'undefined') return unICAOStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unICAOStorage.getInitialState();
  },

  saveData: (data: UNICAOState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const cost = 7500000;
    if (currentCash < cost) return { success: false, message: "Kas negara tidak cukup untuk standarisasi ICAO (7.5M)." };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unICAOStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "ICAO Sekretariat",
      subject: "✈️ Navigasi Udara Internasional",
      content: "Indonesia resmi bergabung dengan ICAO. Biaya standarisasi 7.500.000 telah dibayarkan. Manfaat aktif: Efisiensi jalur udara & pendapatan pajak bandara +10%.",
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: "Pendaftaran Berhasil! Indonesia resmi menjadi anggota ICAO." };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
