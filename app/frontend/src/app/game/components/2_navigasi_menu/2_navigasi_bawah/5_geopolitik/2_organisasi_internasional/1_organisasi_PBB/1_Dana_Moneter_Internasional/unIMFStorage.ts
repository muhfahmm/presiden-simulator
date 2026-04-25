import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { getOrgFee } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/logic/GeopoliticalConfig";


const STORAGE_KEY = "em_un_imf";

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
    const countryName = localStorage.getItem("selectedCountry") || "";
    const capitalizedCountry = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const cost = getOrgFee("imf", currentCash);
    // Even if cash is 0, we can join but it might be 0 cost (unlikely case)
    
    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unIMFStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "IMF Sekretariat",
      subject: "🏛️ Aktivasi Keanggotaan IMF",
      content: `Selamat! ${capitalizedCountry} resmi menjadi anggota Dana Moneter Internasional. Kuota simpanan sebesar 0.25% kas telah disetorkan. Manfaat aktif: Akses pinjaman darurat saat kas kritis & reduksi inflasi 10%.`,
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: `Pendaftaran Berhasil! ${capitalizedCountry} resmi menjadi anggota IMF.` };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
