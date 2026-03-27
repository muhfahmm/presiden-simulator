import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

const STORAGE_KEY = "em4_un_interpol";

export interface UNInterpolState {
  isJoined: boolean;
  joinDate?: string;
}

export const unInterpolStorage = {
  getInitialState: (): UNInterpolState => ({
    isJoined: false,
  }),

  getData: (): UNInterpolState => {
    if (typeof window === 'undefined') return unInterpolStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unInterpolStorage.getInitialState();
  },

  saveData: (data: UNInterpolState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const cost = 5000000;
    if (currentCash < cost) return { success: false, message: "Kas negara tidak cukup untuk biaya tahunan Interpol (5M)." };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unInterpolStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "Interpol HQ",
      subject: "🛡️ Sinkronisasi Intelijen Global",
      content: "Indonesia resmi bergabung dengan jaringan Interpol. Biaya sinkronisasi 5.000.000 telah dibayarkan. Manfaat aktif: Penurunan kriminalitas 15% & deteksi spionase lebih akurat.",
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: "Pendaftaran Berhasil! Keanggotaan Interpol telah aktif." };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
