import { countries } from "../database/data/negara/benua/index";
import { happinessStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan/happinessStorage";
import { priceStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { expenseStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pengeluaran/ExpenseStorage";
import { incomeStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pemasukkan/IncomeStorage";
import { taxStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { tradeStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/TradeStorage";
import { buildingStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { inboxStorage } from "./components/sidemenu/2_kotak_masuk/inboxStorage";
import { budgetStorage } from "./components/1_navbar/3_kas_negara";
import { budgetDeltaStorage } from "./components/1_navbar/3_kas_negara/BudgetDeltaStorage";
import { acaraStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan/acara/acaraStorage";
import { unSecurityCouncilStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";
import { unIMFStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/1_Dana_Moneter_Internasional/unIMFStorage";
import { unWorldBankStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/2_Bank_Dunia/unWorldBankStorage";
import { unInterpolStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/3_Interpol/unInterpolStorage";
import { unWHOStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/4_Organisasi_Kesehatan_Dunia/unWHOStorage";
import { unUNESCOStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/5_Organisasi_Pendidikan_Ilmu_Pengetahuan_dan_Kebudayaan_PBB/unUNESCOStorage";
import { unWTOStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/6_Organisasi_Perdagangan_Dunia/unWTOStorage";
import { unILOStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/7_Organisasi_Buruh_Internasional/unILOStorage";
import { unFAOStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/8_Organisasi_Pangan_dan_Pertanian/unFAOStorage";
import { unICAOStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/9_Organisasi_Penerbangan_Sipil_Internasional/unICAOStorage";
import { unIMOStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/10_Organisasi_Maritim_Internasional/unIMOStorage";
import { unITUStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/11_Organisasi_Telekomunikasi_Internasional/unITUStorage";
import { unWMOStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/12_Organisasi_Meteorologi_Dunia/unWMOStorage";

const STORAGE_KEY = "game_session";

export interface GameSession {
  country: string;
  startTime: number;
  isWelcomeSeen: boolean;
  cumulativeProduction?: Record<string, number>;
}

export interface ConstructionItem {
  id: string;
  buildingKey: string;
  label: string;
  sector: string;
  startDate: number;
  endDate: number;
  buildTime: number;
}

export const gameStorage = {
  saveSession: (country: string) => {
    if (typeof window === 'undefined') return;

    const session: GameSession = {
      country,
      startTime: Date.now(),
      isWelcomeSeen: false,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    localStorage.setItem("selectedCountry", country);
    localStorage.removeItem("em4_game_date"); // Reset date for new game
    
    // Modular cleanup
    happinessStorage.clear();
    priceStorage.clear();
    expenseStorage.clear();
    incomeStorage.clear();
    taxStorage.clear();
    tradeStorage.clear();
    buildingStorage.clear();
    inboxStorage.clear();
    budgetStorage.clear();
    budgetDeltaStorage.clear();
    acaraStorage.clear();
    unSecurityCouncilStorage.clear();
    unIMFStorage.clear();
    unWorldBankStorage.clear();
    unInterpolStorage.clear();
    unWHOStorage.clear();
    unUNESCOStorage.clear();
    unWTOStorage.clear();
    unILOStorage.clear();
    unFAOStorage.clear();
    unICAOStorage.clear();
    unIMOStorage.clear();
    unITUStorage.clear();
    unWMOStorage.clear();
  },

  getSession: (): GameSession | null => {
    if (typeof window === 'undefined') return null;
    const data = window.localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    try {
      const session = JSON.parse(data);
      if (!session || typeof session !== 'object') {
        return null;
      }
      
      return session as GameSession;
    } catch (e) {
      console.error("Failed to parse game session", e);
      return null;
    }
  },

  hasActiveSession: (): boolean => {
    return gameStorage.getSession() !== null;
  },

  setWelcomeSeen: (seen: boolean) => {
    if (typeof window === 'undefined') return;
    const session = gameStorage.getSession();
    if (session) {
      session.isWelcomeSeen = seen;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    }
  },

  markWelcomeSeen: () => {
    gameStorage.setWelcomeSeen(true);
  },

  clearSession: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("selectedCountry");
    localStorage.removeItem("em4_game_date");

    // Modular cleanup
    happinessStorage.clear();
    priceStorage.clear();
    expenseStorage.clear();
    incomeStorage.clear();
    taxStorage.clear();
    tradeStorage.clear();
    buildingStorage.clear();
    inboxStorage.clear();
    budgetStorage.clear();
    budgetDeltaStorage.clear();
    acaraStorage.clear();
    unSecurityCouncilStorage.clear();
    unIMFStorage.clear();
    unWorldBankStorage.clear();
    unInterpolStorage.clear();
    unWHOStorage.clear();
    unUNESCOStorage.clear();
    unWTOStorage.clear();
    unILOStorage.clear();
    unFAOStorage.clear();
    unICAOStorage.clear();
    unWMOStorage.clear();
    
    window.location.href = '/database';
  },

  resetCurrentSession: () => {
    if (typeof window === 'undefined') return;
    const session = gameStorage.getSession();
    if (!session) return;

    // Reset session fields but keep the country
    session.startTime = Date.now();
    session.isWelcomeSeen = true;
    delete session.cumulativeProduction;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    localStorage.removeItem("em4_game_date");

    // Modular cleanup for all systems
    happinessStorage.clear();
    priceStorage.clear();
    expenseStorage.clear();
    incomeStorage.clear();
    taxStorage.clear();
    tradeStorage.clear();
    buildingStorage.clear();
    inboxStorage.clear();
    budgetStorage.clear();
    budgetDeltaStorage.clear();
    acaraStorage.clear();
    unSecurityCouncilStorage.clear();
    unIMFStorage.clear();
    unWorldBankStorage.clear();
    unInterpolStorage.clear();
    unWHOStorage.clear();
    unUNESCOStorage.clear();
    unWTOStorage.clear();
    unILOStorage.clear();
    unFAOStorage.clear();
    unICAOStorage.clear();
    unIMOStorage.clear();
    unITUStorage.clear();
    unWMOStorage.clear();
  },
};
