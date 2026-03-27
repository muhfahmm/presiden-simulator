import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

const STORAGE_KEY = "em4_un_wto";

export interface UNWTOState {
  isJoined: boolean;
  joinDate?: string;
}

export const unWTOStorage = {
  getInitialState: (): UNWTOState => ({
    isJoined: false,
  }),

  getData: (): UNWTOState => {
    if (typeof window === 'undefined') return unWTOStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unWTOStorage.getInitialState();
  },

  saveData: (data: UNWTOState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const cost = 10000000;
    if (currentCash < cost) return { success: false, message: "Kas negara tidak cukup untuk jaminan WTO (10M)." };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unWTOStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "WTO Sekretariat",
      subject: "🌐 Akses Perdagangan Bebas Aktif",
      content: "Indonesia resmi bergabung dengan WTO. Jaminan kepatuhan 10.000.000 telah disetorkan. Manfaat aktif: Pendapatan jalur dagang +15% & perlindungan sanksi ekonomi.",
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: "Pendaftaran Berhasil! Indonesia resmi menjadi anggota WTO." };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
