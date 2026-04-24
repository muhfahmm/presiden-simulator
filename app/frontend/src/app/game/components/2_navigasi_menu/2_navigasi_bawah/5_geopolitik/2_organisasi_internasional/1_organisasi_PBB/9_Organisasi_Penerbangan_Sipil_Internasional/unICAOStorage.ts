import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { getOrgFee } from "@/app/game/logic/geopolitik/GeopoliticalConfig";


const STORAGE_KEY = "em_un_icao";

export interface UNICAOState {
  isJoined: boolean;
  joinDate?: string;
}

export const unICAOStorage = {
  getInitialState: (): UNICAOState => ({
    isJoined: false,
  }),

  getData: (): UNICAOState => {
    if (typeof window === 'undefined') return unICAOStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unICAOStorage.getInitialState();
  },

  saveData: (data: UNICAOState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const countryName = localStorage.getItem("selectedCountry") || "";
    const capitalizedCountry = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const cost = getOrgFee("icao");
    if (currentCash < cost) return { success: false, message: `Kas negara tidak cukup untuk standarisasi ICAO (2M).` };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unICAOStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "ICAO Sekretariat",
      subject: "✈️ Navigasi Udara Internasional",
      content: `${capitalizedCountry} resmi bergabung dengan ICAO. Biaya standarisasi 500.000 telah dibayarkan. Manfaat aktif: Efisiensi jalur udara & pendapatan pajak bandara +10%.`,
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: `Pendaftaran Berhasil! ${capitalizedCountry} resmi menjadi anggota ICAO.` };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
