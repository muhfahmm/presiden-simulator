import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { getOrgFee } from "@/app/game/logic/geopolitik/GeopoliticalConfig";


const STORAGE_KEY = "em_un_itu";

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
    const countryName = localStorage.getItem("selectedCountry") || "";
    const capitalizedCountry = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const cost = getOrgFee("itu");
    if (currentCash < cost) return { success: false, message: `Kas negara tidak cukup for alokasi ITU (1M).` };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unITUStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "ITU Sekretariat",
      subject: "📡 Alokasi Spektrum & Cyber Defense",
      content: `${capitalizedCountry} resmi bergabung dengan ITU. Biaya alokasi frekuensi 250.000 telah dibayarkan. Manfaat aktif: Cyber Defense +15% & percepatan riset komunikasi.`,
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: `Pendaftaran Berhasil! ${capitalizedCountry} resmi menjadi anggota ITU.` };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
