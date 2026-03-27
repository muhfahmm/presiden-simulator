import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

const STORAGE_KEY = "em4_un_ilo";

export interface UNILOState {
  isJoined: boolean;
  joinDate?: string;
}

export const unILOStorage = {
  getInitialState: (): UNILOState => ({
    isJoined: false,
  }),

  getData: (): UNILOState => {
    if (typeof window === 'undefined') return unILOStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unILOStorage.getInitialState();
  },

  saveData: (data: UNILOState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const cost = 1500000;
    if (currentCash < cost) return { success: false, message: "Kas negara tidak cukup untuk operasional ILO (1.5M)." };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unILOStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "ILO Sekretariat",
      subject: "🤝 Hak Buruh & Loyalitas Pekerja",
      content: "Indonesia resmi bergabung dengan ILO. Biaya operasional 1.500.000 telah dibayarkan. Manfaat aktif: Peningkatan loyalitas buruh & penurunan risiko mogok kerja massal.",
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: "Pendaftaran Berhasil! Indonesia resmi menjadi anggota ILO." };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
