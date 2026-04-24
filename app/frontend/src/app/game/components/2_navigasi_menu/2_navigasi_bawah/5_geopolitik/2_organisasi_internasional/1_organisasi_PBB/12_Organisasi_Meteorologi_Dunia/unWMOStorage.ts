import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

const STORAGE_KEY = "em_un_wmo";

export interface UNWMOState {
  isJoined: boolean;
  joinDate?: string;
}

export const unWMOStorage = {
  getInitialState: (): UNWMOState => ({
    isJoined: false,
  }),

  getData: (): UNWMOState => {
    if (typeof window === 'undefined') return unWMOStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unWMOStorage.getInitialState();
  },

  saveData: (data: UNWMOState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const countryName = localStorage.getItem("selectedCountry") || "";
    const capitalizedCountry = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const cost = 150000;
    if (currentCash < cost) return { success: false, message: `Kas negara tidak cukup untuk akses satelit WMO (600K).` };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unWMOStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "WMO HQ",
      subject: "🌤️ Deteksi Dini & Mitigasi Iklim",
      content: `${capitalizedCountry} resmi bergabung dengan WMO. Biaya akses satelit 150.000 telah dibayarkan. Manfaat aktif: Peringatan dini bencana & mitigasi kerusakan hingga 50%.`,
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: `Pendaftaran Berhasil! ${capitalizedCountry} resmi menjadi anggota WMO.` };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
