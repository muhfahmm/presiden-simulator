import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

const STORAGE_KEY = "em_un_fao";

export interface UNFAOState {
  isJoined: boolean;
  joinDate?: string;
}

export const unFAOStorage = {
  getInitialState: (): UNFAOState => ({
    isJoined: false,
  }),

  getData: (): UNFAOState => {
    if (typeof window === 'undefined') return unFAOStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unFAOStorage.getInitialState();
  },

  saveData: (data: UNFAOState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const countryName = localStorage.getItem("selectedCountry") || "";
    const capitalizedCountry = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const cost = 1000000;
    if (currentCash < cost) return { success: false, message: `Kas negara tidak cukup untuk integrasi FAO (1M).` };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unFAOStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "FAO HQ",
      subject: "🌾 Ketahanan Pangan Global",
      content: `${capitalizedCountry} resmi bergabung dengan FAO. Biaya integrasi teknologi 1.000.000 telah dibayarkan. Manfaat aktif: Produksi pangan +20% & bantuan darurat saat bencana.`,
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: `Pendaftaran Berhasil! ${capitalizedCountry} resmi menjadi anggota FAO.` };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
