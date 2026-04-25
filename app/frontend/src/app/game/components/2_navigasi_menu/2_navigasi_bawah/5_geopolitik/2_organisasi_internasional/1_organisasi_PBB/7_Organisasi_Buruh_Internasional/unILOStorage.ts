import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { getOrgFee } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/logic/GeopoliticalConfig";


const STORAGE_KEY = "em_un_ilo";

export interface UNILOState {
  isJoined: boolean;
  joinDate?: string;
}

export const unILOStorage = {
  getInitialState: (): UNILOState => ({
    isJoined: false,
  }),

  getData: (): UNILOState => {
    if (typeof window === 'undefined') return unILOStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unILOStorage.getInitialState();
  },

  saveData: (data: UNILOState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const countryName = localStorage.getItem("selectedCountry") || "";
    const capitalizedCountry = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const cost = getOrgFee("ilo");
    if (currentCash < cost) return { success: false, message: `Kas negara tidak cukup untuk operasional ILO (400K).` };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unILOStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "ILO Sekretariat",
      subject: "🤝 Hak Buruh & Loyalitas Pekerja",
      content: `${capitalizedCountry} resmi bergabung dengan ILO. Biaya operasional 100.000 telah dibayarkan. Manfaat aktif: Peningkatan loyalitas buruh & penurunan risiko mogok kerja massal.`,
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: `Pendaftaran Berhasil! ${capitalizedCountry} resmi menjadi anggota ILO.` };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
