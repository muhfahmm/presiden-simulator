import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { getOrgFee } from "@/app/game/logic/geopolitik/GeopoliticalConfig";


const STORAGE_KEY = "em_un_imo";

export interface UNIMOState {
  isJoined: boolean;
  joinDate?: string;
}

export const unIMOStorage = {
  getInitialState: (): UNIMOState => ({
    isJoined: false,
  }),

  getData: (): UNIMOState => {
    if (typeof window === 'undefined') return unIMOStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unIMOStorage.getInitialState();
  },

  saveData: (data: UNIMOState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const countryName = localStorage.getItem("selectedCountry") || "";
    const capitalizedCountry = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const cost = getOrgFee("imo");
    if (currentCash < cost) return { success: false, message: `Kas negara tidak cukup untuk koordinasi IMO (2M).` };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unIMOStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "IMO HQ",
      subject: "⚓ Keamanan Maritim & Navigasi",
      content: `${capitalizedCountry} resmi bergabung dengan IMO. Biaya koordinasi 500.000 telah dibayarkan. Manfaat aktif: Kecepatan armada laut +10% & penurunan risiko pembajakan.`,
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: `Pendaftaran Berhasil! ${capitalizedCountry} resmi menjadi anggota IMO.` };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
