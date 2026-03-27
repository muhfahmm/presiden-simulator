import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

const STORAGE_KEY = "em4_un_itu";

export interface UNITUState {
  isJoined: boolean;
  joinDate?: string;
}

export const unITUStorage = {
  getInitialState: (): UNITUState => ({
    isJoined: false,
  }),

  getData: (): UNITUState => {
    if (typeof window === 'undefined') return unITUStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unITUStorage.getInitialState();
  },

  saveData: (data: UNITUState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const cost = 6000000;
    if (currentCash < cost) return { success: false, message: "Kas negara tidak cukup untuk alokasi ITU (6M)." };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unITUStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "ITU Sekretariat",
      subject: "📡 Alokasi Spektrum & Cyber Defense",
      content: "Indonesia resmi bergabung dengan ITU. Biaya alokasi frekuensi 6.000.000 telah dibayarkan. Manfaat aktif: Cyber Defense +15% & percepatan riset komunikasi.",
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: "Pendaftaran Berhasil! Indonesia resmi menjadi anggota ITU." };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
