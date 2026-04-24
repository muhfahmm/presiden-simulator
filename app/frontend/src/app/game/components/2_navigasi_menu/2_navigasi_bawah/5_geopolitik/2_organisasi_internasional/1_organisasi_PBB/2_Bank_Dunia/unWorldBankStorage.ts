import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { getOrgFee } from "@/app/game/logic/geopolitik/GeopoliticalConfig";


const STORAGE_KEY = "em_un_worldbank";

export interface UNWorldBankState {
  isJoined: boolean;
  joinDate?: string;
}

export const unWorldBankStorage = {
  getInitialState: (): UNWorldBankState => ({
    isJoined: false,
  }),

  getData: (): UNWorldBankState => {
    if (typeof window === 'undefined') return unWorldBankStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unWorldBankStorage.getInitialState();
  },

  saveData: (data: UNWorldBankState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const countryName = localStorage.getItem("selectedCountry") || "";
    const capitalizedCountry = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const cost = getOrgFee("world_bank");
    if (currentCash < cost) return { success: false, message: `Kas negara tidak cukup untuk biaya masuk Bank Dunia (2.5M).` };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unWorldBankStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "World Bank",
      subject: "🏗️ Kerja Sama Pembangunan Aktif",
      content: `${capitalizedCountry} resmi bergabung dengan Bank Dunia. Biaya keanggotaan flat sebesar 2.500.000 telah dibayarkan. Manfaat aktif: Biaya infrastruktur 20% lebih murah & percepatan ekonomi wilayah.`,
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: `Pendaftaran Berhasil! ${capitalizedCountry} resmi menjadi anggota Bank Dunia.` };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
