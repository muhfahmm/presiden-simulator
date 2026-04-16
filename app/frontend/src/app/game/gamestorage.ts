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
import { populationStorage } from "./components/1_navbar/2_populasi";
import { populationDeltaStorage } from "./components/1_navbar/2_populasi/PopulationDeltaStorage";
import { embassyStorage } from "./components/map-system/modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage";
import { relationStorage } from "./components/map-system/modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";
import { militaryAidStorage } from "./components/map-system/modals_detail_negara/4_bantuan_dan_kerjasama/1_beri_tentara/logic/militaryAidStorage";
import { playerMilitaryStorage } from "./components/map-system/modals_detail_negara/4_bantuan_dan_kerjasama/1_beri_tentara/logic/playerMilitaryStorage";
import { stabilityStorage } from "./components/1_navbar/4_stabilitas";
import { nuclearStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/5_program_nuklir/nuclearStorage";
import { aiBudgetStorage } from "./components/map-system/modals_detail_negara/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiPopulationStorage } from "./components/map-system/modals_detail_negara/1_info_strategis/2_Populasi/AIPopulationStorage";
import { importStockStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/ImportStockStorage";
import { historiImportStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/ekspor_impor/impor/HistoriImportStorage";
import { historiEksporStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/ekspor_impor/ekspor/HistoriEksporStorage";
import { aliansiStorage } from "./components/map-system/modals_detail_negara/2_diplomasi_hubungan/3_aliansi_pertahanan/logic/aliansiStorage";
import { nonAggressionStorage } from "./components/map-system/modals_detail_negara/2_diplomasi_hubungan/2_pakta_non_agresi/logic/nonAggressionStorage";
import { newsStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/berita/newsStorage";
import { newsStorage as globalNewsStorage } from "./components/sidemenu/1_berita/newsStorage";
import { relationDeltaStorage } from "./components/map-system/modals_detail_negara/2_diplomasi_hubungan/8_hubungan_internasional/logic/relationDeltaStorage";
import { religionStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/religionStorage";
import { ideologyStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/ideologyStorage";
import { lawStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/7_kementrian/2_database_undang_undang/lawStorage";
import { researchStorage } from "./components/sidemenu/3_riset_dan_penelitian/researchStorage";
import { eventStorage } from "./logic/events/eventStorage";
import { tradeStorage as diplomaticTradeStorage } from "./components/map-system/modals_detail_negara/2_diplomasi_hubungan/4_perjanjian_dagang/logic/tradeStorage";
import { RELATION_MATRIX_KEY } from "./components/map-system/ai_diplomacy_engine/services/MatrixHandler";
import { timeStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { aiTradeOfferStorage } from "./components/AI_logic/4_AI_Ekonomi/1_perdagangan/sistem_perdagangan_AI/storage/aiTradeOfferStorage";
import { tradeContractStorage } from "./components/AI_logic/4_AI_Ekonomi/1_perdagangan/sistem_perdagangan_AI/storage/tradeContractStorage";
import { tradeAgreementStorage } from "./components/AI_logic/4_AI_Ekonomi/1_perdagangan/sistem_perdagangan_AI/storage/tradeAgreementStorage";
import { aiHappinessStorage } from "./components/map-system/modals_detail_negara/1_info_strategis/6_Kepuasan/AIHappinessStorage";
import { aiBuildingStorage } from "./components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIBuildingStorage";
import { aiProductionStorage } from "./components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIProductionStorage";


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
  waktu_pembangunan: number;
}

export const gameStorage = {
  /**
   * Debug function - logs all localStorage contents
   */
  debugLogStorage: (label: string = "") => {
    console.log(`[DEBUG] ${label ? label + " - " : ""}Current localStorage contents:`);
    const relevantKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith('em') || key === 'game_session' || key === 'game_taxes' || key === 'selectedCountry')) {
        const value = localStorage.getItem(key);
        const shortValue = typeof value === 'string' && value.length > 100 ? value.substring(0, 100) + "..." : value;
        relevantKeys.push(`  ${key}: ${shortValue}`);
      }
    }
    if (relevantKeys.length === 0) {
      console.log("  (no em* keys found)");
    } else {
      console.log(relevantKeys.join("\n"));
    }
  },

  saveSession: async (country: string) => {
    if (typeof window === 'undefined') return;
    
    console.log(`[SAVE SESSION] Starting new game for country: ${country}`);
    
    // Phase 0: Ensure backend is wiped before starting new session
    try {
      await fetch('http://localhost:8081/api/game/reset', { method: 'POST' });
    } catch (e) {
      console.warn("[SAVE SESSION] Backend reset failed:", e);
    }

    // Hard stop timer first to prevent race condition ghost writes
    timeStorage.clear();

    const session: GameSession = {
      country,
      startTime: Date.now(),
      isWelcomeSeen: false,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    localStorage.setItem("selectedCountry", country);
    localStorage.removeItem("em4_game_date"); // Reset date for new game
    localStorage.setItem("em4_fresh_session", "true"); // Flag to force default values
    
    // Modular cleanup
    console.log(`[SAVE SESSION] Clearing all storages...`);
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
    populationStorage.clear();
    populationDeltaStorage.clear();
    embassyStorage.clear();
    relationStorage.clear();
    militaryAidStorage.clear();
    playerMilitaryStorage.clear();
    stabilityStorage.clear();
    nuclearStorage.clear();
    aiBudgetStorage.clear();
    aiPopulationStorage.clear();
    aiHappinessStorage.clear();
    aiBuildingStorage.clear();
    aiProductionStorage.clear();
    importStockStorage.clear();
    historiImportStorage.clearHistory();
    historiEksporStorage.clearHistory();
    aliansiStorage.clear();
    nonAggressionStorage.clear();
    newsStorage.clear();
    globalNewsStorage.clear();
    relationDeltaStorage.clear();
    religionStorage.clear();
    ideologyStorage.clear();
    lawStorage.clear();
    researchStorage.clear();
    eventStorage.clear();
    diplomaticTradeStorage.clear();
    aiTradeOfferStorage.clear();
    tradeContractStorage.clear();
    tradeAgreementStorage.clear();
    if (typeof window !== 'undefined') {
      localStorage.removeItem(RELATION_MATRIX_KEY);
    }
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

  clearSession: async () => {
    if (typeof window === 'undefined') return;

    // Phase 0: Wipe backend on logout to prevent session leakage
    try {
      await fetch('http://localhost:8081/api/game/reset', { method: 'POST', keepalive: true });
    } catch (e) {
      console.warn("[CLEAR SESSION] Backend reset failed:", e);
    }

    // Hard stop timer first to prevent race condition ghost writes
    timeStorage.clear();
    
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
    unIMOStorage.clear();
    unITUStorage.clear();
    unWMOStorage.clear();
    populationStorage.clear();
    populationDeltaStorage.clear();
    embassyStorage.clear();
    relationStorage.clear();
    militaryAidStorage.clear();
    playerMilitaryStorage.clear();
    stabilityStorage.clear();
    nuclearStorage.clear();
    aiBudgetStorage.clear();
    aiPopulationStorage.clear();
    aiHappinessStorage.clear();
    aiBuildingStorage.clear();
    aiProductionStorage.clear();
    importStockStorage.clear();
    historiImportStorage.clearHistory();
    historiEksporStorage.clearHistory();
    aliansiStorage.clear();
    nonAggressionStorage.clear();
    newsStorage.clear();
    globalNewsStorage.clear();
    relationDeltaStorage.clear();
    religionStorage.clear();
    ideologyStorage.clear();
    lawStorage.clear();
    researchStorage.clear();
    eventStorage.clear();
    diplomaticTradeStorage.clear();
    aiTradeOfferStorage.clear();
    tradeContractStorage.clear();
    tradeAgreementStorage.clear();
    localStorage.removeItem(RELATION_MATRIX_KEY);
    
    window.location.href = '/database';
  },

  resetCurrentSessionToDefaults: async () => {
    /**
     * NUCLEAR RESET: Completely wipes ALL localStorage and reinitializes to country defaults.
     * Aligned with saveSession to ensure 100% parity with fresh-start logic.
     */
    if (typeof window === 'undefined') return;

    const session = gameStorage.getSession();
    if (!session) {
      console.error("[RESET] ERROR: No session found!");
      return;
    }

    const countryName = session.country || "Indonesia";
    console.log(`[RESET] ========== NUCLEAR RESTART STARTING ==========`);
    
    // PHASE 0: DISCONNECT SSE TO PREVENT GHOST WRITES
    try {
      const { newsStorage } = require("./components/sidemenu/1_berita/newsStorage");
      newsStorage.disconnectSSE();
    } catch(e) {}

    // Hard stop timer first
    timeStorage.clear();

    // SECTION 0: RESET BACKEND
    console.log(`[RESET] Sending reset signal to Go backend...`);
    try {
      await fetch('http://localhost:8081/api/game/reset', { method: 'POST' });
    } catch (e) {
      console.warn("[RESET] Backend reset failed:", e);
    }

    // SECTION 1: PHASE 1 - TOTAL NUCLEAR WIPE
    console.log(`[RESET] Wiping all storages...`);
    
    // Identity check matches saveSession/clearSession
    localStorage.removeItem("em4_game_date");
    localStorage.setItem("em4_fresh_session", "true"); // CRITICAL FLAG

    // 1-to-1 parity with logout/saveSession cleanup list
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
    populationStorage.clear();
    populationDeltaStorage.clear();
    embassyStorage.clear();
    relationStorage.clear();
    militaryAidStorage.clear();
    playerMilitaryStorage.clear();
    stabilityStorage.clear();
    nuclearStorage.clear();
    aiBudgetStorage.clear();
    aiPopulationStorage.clear();
    aiHappinessStorage.clear();
    aiBuildingStorage.clear();
    aiProductionStorage.clear();
    importStockStorage.clear();
    historiImportStorage.clearHistory();
    historiEksporStorage.clearHistory();
    aliansiStorage.clear();
    nonAggressionStorage.clear();
    newsStorage.clear();
    globalNewsStorage.clear();
    relationDeltaStorage.clear();
    religionStorage.clear();
    ideologyStorage.clear();
    lawStorage.clear();
    researchStorage.clear();
    eventStorage.clear();
    diplomaticTradeStorage.clear();
    aiTradeOfferStorage.clear();
    tradeContractStorage.clear();
    tradeAgreementStorage.clear();

    // Catch-all sweeper for any custom keys
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
            const lowerKey = key.toLowerCase();
            if (lowerKey.startsWith('em') || lowerKey.startsWith('game_') || lowerKey.startsWith('ai_') || lowerKey.includes('storage')) {
                // Don't remove our fresh session flag or our current selectedCountry
                if (key !== 'em4_fresh_session' && key !== 'selectedCountry' && key !== STORAGE_KEY) {
                    keysToRemove.push(key);
                }
            }
        }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));

    sessionStorage.clear();

    // Wait for IO
    await new Promise(resolve => setTimeout(resolve, 300));

    // SECTION 2: PHASE 2 - RE-INITIALIZE ATOMIC DEFAULTS
    localStorage.setItem("selectedCountry", countryName);
    
    const freshSession: GameSession = {
      country: countryName,
      startTime: Date.now(),
      isWelcomeSeen: true,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(freshSession));
    
    console.log(`[RESET] ========== NUCLEAR RESTART COMPLETE ==========`);
  },

  resetCurrentSession: () => {
    if (typeof window === 'undefined') return;

    // Hard stop timer first to prevent race condition ghost writes
    timeStorage.clear();
    
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
    populationStorage.clear();
    populationDeltaStorage.clear();
    embassyStorage.clear();
    relationStorage.clear();
    militaryAidStorage.clear();
    playerMilitaryStorage.clear();
    stabilityStorage.clear();
    nuclearStorage.clear();
    aiBudgetStorage.clear();
    aiPopulationStorage.clear();
    aiHappinessStorage.clear();
    aiBuildingStorage.clear();
    aiProductionStorage.clear();
    importStockStorage.clear();
    historiImportStorage.clearHistory();
    historiEksporStorage.clearHistory();
    aliansiStorage.clear();
    nonAggressionStorage.clear();
    newsStorage.clear();
    globalNewsStorage.clear();
    relationDeltaStorage.clear();
    religionStorage.clear();
    ideologyStorage.clear();
    lawStorage.clear();
    researchStorage.clear();
    eventStorage.clear();
    diplomaticTradeStorage.clear();
    aiTradeOfferStorage.clear();
    tradeContractStorage.clear();
    tradeAgreementStorage.clear();
    localStorage.removeItem(RELATION_MATRIX_KEY);
  },
};
