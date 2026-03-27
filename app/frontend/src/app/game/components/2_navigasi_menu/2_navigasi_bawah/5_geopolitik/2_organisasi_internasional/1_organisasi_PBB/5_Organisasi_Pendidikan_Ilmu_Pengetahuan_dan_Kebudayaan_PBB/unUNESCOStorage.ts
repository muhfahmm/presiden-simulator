import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

const STORAGE_KEY = "em4_un_unesco";

export interface UNUNESCOState {
  isJoined: boolean;
  joinDate?: string;
}

export const unUNESCOStorage = {
  getInitialState: (): UNUNESCOState => ({
    isJoined: false,
  }),

  getData: (): UNUNESCOState => {
    if (typeof window === 'undefined') return unUNESCOStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unUNESCOStorage.getInitialState();
  },

  saveData: (data: UNUNESCOState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const cost = 3000000;
    if (currentCash < cost) return { success: false, message: "Kas negara tidak cukup untuk biaya sertifikasi UNESCO (3M)." };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unUNESCOStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "UNESCO HQ",
      subject: "🏺 Pelestarian Budaya & Pariwisata",
      content: "Indonesia resmi bergabung dengan UNESCO. Biaya sertifikasi 3.000.000 telah dibayarkan. Manfaat aktif: Pariwisata naik 25% & peningkatan Happiness Index warga.",
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: "Pendaftaran Berhasil! Indonesia resmi menjadi anggota UNESCO." };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
