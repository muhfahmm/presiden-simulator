import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { getOrgFee } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/logic/GeopoliticalConfig";


const STORAGE_KEY = "em_un_unesco";

export interface UNUNESCOState {
  isJoined: boolean;
  joinDate?: string;
}

export const unUNESCOStorage = {
  getInitialState: (): UNUNESCOState => ({
    isJoined: false,
  }),

  getData: (): UNUNESCOState => {
    if (typeof window === 'undefined') return unUNESCOStorage.getInitialState();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : unUNESCOStorage.getInitialState();
  },

  saveData: (data: UNUNESCOState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  join: (currentCash: number, currentDate: string) => {
    const countryName = localStorage.getItem("selectedCountry") || "";
    const capitalizedCountry = countryName.charAt(0).toUpperCase() + countryName.slice(1);

    const cost = getOrgFee("unesco");
    if (currentCash < cost) return { success: false, message: `Kas negara tidak cukup untuk biaya sertifikasi UNESCO (800K).` };

    budgetStorage.updateBudget(-cost);
    const newState = { isJoined: true, joinDate: currentDate };
    unUNESCOStorage.saveData(newState);

    inboxStorage.addMessage({
      source: "UNESCO HQ",
      subject: "🏺 Pelestarian Budaya & Pariwisata",
      content: `${capitalizedCountry} resmi bergabung dengan UNESCO. Biaya sertifikasi 200.000 telah dibayarkan. Manfaat aktif: Pariwisata naik 25% & peningkatan Happiness Index warga.`,
      time: currentDate,
      priority: "high"
    });

    return { success: true, cost, message: `Pendaftaran Berhasil! ${capitalizedCountry} resmi menjadi anggota UNESCO.` };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
