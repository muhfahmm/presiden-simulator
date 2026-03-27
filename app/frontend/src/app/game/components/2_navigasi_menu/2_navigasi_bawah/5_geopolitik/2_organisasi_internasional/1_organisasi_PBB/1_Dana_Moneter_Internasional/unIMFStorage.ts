import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

const STORAGE_KEY = "em4_un_imf";

export interface UNIMFState {
  isJoined: boolean;
  joinDate?: string;
}

export const unIMFStorage = {
  getInitialState: (): UNIMFState => ({
    isJoined: false,
  }),

  getData: (): UNIMFState => {
    if (typeof window === 'undefined') return unIMFStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unIMFStorage.getInitialState();
  },

  saveData: (data: UNIMFState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const cost = Math.floor(currentCash * 0.05);
    // Even if cash is 0, we can join but it might be 0 cost (unlikely case)
    
    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unIMFStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "IMF Sekretariat",
      subject: "🏛️ Aktivasi Keanggotaan IMF",
      content: "Selamat! Indonesia resmi menjadi anggota Dana Moneter Internasional. Kuota simpanan sebesar 5% kas telah disetorkan. Manfaat aktif: Akses pinjaman darurat saat kas kritis & reduksi inflasi 10%.",
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: "Pendaftaran Berhasil! Indonesia resmi menjadi anggota IMF." };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
