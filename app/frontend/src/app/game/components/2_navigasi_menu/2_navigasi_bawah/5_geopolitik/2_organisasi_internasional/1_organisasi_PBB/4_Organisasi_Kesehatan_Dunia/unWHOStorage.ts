import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

const STORAGE_KEY = "em_un_who";

export interface UNWHOState {
  isJoined: boolean;
  joinDate?: string;
}

export const unWHOStorage = {
  getInitialState: (): UNWHOState => ({
    isJoined: false,
  }),

  getData: (): UNWHOState => {
    if (typeof window === 'undefined') return unWHOStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unWHOStorage.getInitialState();
  },

  saveData: (data: UNWHOState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const countryName = localStorage.getItem("selectedCountry") || "";
    const capitalizedCountry = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const cost = 100000;
    if (currentCash < cost) return { success: false, message: `Kas negara tidak cukup untuk kontribusi WHO (400K).` };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unWHOStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "WHO Sekretariat",
      subject: "🏥 Akses Kesehatan Global Aktif",
      content: `${capitalizedCountry} resmi menjadi anggota WHO. Kontribusi 100.000 telah dibayarkan. Manfaat aktif: Peningkatan Health Score otomatis & bonus riset medis saat pandemi.`,
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: `Pendaftaran Berhasil! ${capitalizedCountry} resmi menjadi anggota WHO.` };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
