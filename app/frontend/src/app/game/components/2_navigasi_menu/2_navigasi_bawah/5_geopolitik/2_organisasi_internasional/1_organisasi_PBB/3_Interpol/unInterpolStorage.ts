import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

const STORAGE_KEY = "em_un_interpol";

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
    const countryName = localStorage.getItem("selectedCountry") || "";
    const capitalizedCountry = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const cost = 250000;
    if (currentCash < cost) return { success: false, message: `Kas negara tidak cukup untuk biaya tahunan Interpol (1M).` };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unInterpolStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "Interpol HQ",
      subject: "🛡️ Sinkronisasi Intelijen Global",
      content: `${capitalizedCountry} resmi bergabung dengan jaringan Interpol. Biaya sinkronisasi 250.000 telah dibayarkan. Manfaat aktif: Penurunan kriminalitas 15% & deteksi spionase lebih akurat.`,
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: `Pendaftaran Berhasil! Keanggotaan ${capitalizedCountry} di Interpol telah aktif.` };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
