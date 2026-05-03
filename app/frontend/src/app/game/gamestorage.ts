import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { happinessStorage } from "@/app/game/components/1_navbar/1_kepuasan/happinessStorage";
import { priceStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { expenseStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pengeluaran/ExpenseStorage";
import { incomeStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pemasukkan/IncomeStorage";
import { taxStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { tradeStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/TradeStorage";
import { buildingStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { inboxStorage } from "./components/sidemenu/2_kotak_masuk/inboxStorage";
import { budgetStorage } from "./components/1_navbar/3_kas_negara";
import { budgetDeltaStorage } from "./components/1_navbar/3_kas_negara/BudgetDeltaStorage";
import { acaraStorage } from "@/app/game/components/1_navbar/1_kepuasan/acara/acaraStorage";
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
import { embassyStorage } from "./components/modals/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage";
import { relationStorage } from "./components/modals/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";
import { militaryAidStorage } from "./components/modals/4_bantuan_dan_kerjasama/1_beri_tentara/logic/militaryAidStorage";
import { playerMilitaryStorage } from "./components/modals/4_bantuan_dan_kerjasama/1_beri_tentara/logic/playerMilitaryStorage";
import { stabilityStorage } from "./components/1_navbar/4_stabilitas";
import { nuclearStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/5_program_nuklir/nuclearStorage";
import { aiBudgetStorage } from "./components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { importStockStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/ImportStockStorage";
import { historiImportStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/ekspor_impor/impor/HistoriImportStorage";
import { historiEksporStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/ekspor_impor/ekspor/HistoriEksporStorage";
import { aliansiStorage } from "./components/modals/2_diplomasi_hubungan/3_aliansi_pertahanan/logic/aliansiStorage";
import { nonAggressionStorage } from "./components/modals/2_diplomasi_hubungan/2_pakta_non_agresi/logic/nonAggressionStorage";
import { newsStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/berita/newsStorage";
import { newsStorage as globalNewsStorage } from "./components/sidemenu/1_berita/newsStorage";
import { relationDeltaStorage } from "./components/modals/2_diplomasi_hubungan/8_hubungan_internasional/logic/relationDeltaStorage";
import { religionStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/religionStorage";
import { ideologyStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/ideologyStorage";
import { lawStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/7_kementrian/2_database_undang_undang/lawStorage";
import { researchStorage } from "./components/sidemenu/3_riset_dan_penelitian/researchStorage";
import { eventStorage } from "./logic/events/eventStorage";
import { tradeStorage as diplomaticTradeStorage } from "./components/modals/2_diplomasi_hubungan/4_perjanjian_dagang/logic/tradeStorage";
import { getGlobalRelationMatrix, RELATION_MATRIX_KEY } from "@/app/game/logic/ai/ai_diplomacy_engine/services/MatrixHandler";
import { timeStorage } from "./components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { aiTradeOfferStorage } from "./components/AI_logic/4_AI_Ekonomi/1_perdagangan/sistem_perdagangan_AI/storage/aiTradeOfferStorage";
import { tradeContractStorage } from "./components/AI_logic/4_AI_Ekonomi/1_perdagangan/sistem_perdagangan_AI/storage/tradeContractStorage";
import { aiHappinessStorage } from "./components/modals/1_info_strategis/6_Kepuasan/AIHappinessStorage";
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

  saveSession: (country: string) => {
    if (typeof window === 'undefined') return;

    // Hard stop timer first to prevent race condition ghost writes
    timeStorage.clear();

    const session: GameSession = {
      country,
      startTime: Date.now(),
      isWelcomeSeen: false,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    localStorage.setItem("selectedCountry", country);
    localStorage.removeItem("em_game_date"); // Reset date for new game
    localStorage.setItem("em_fresh_session", "true");

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
    if (typeof window !== 'undefined') {
      localStorage.removeItem(RELATION_MATRIX_KEY);
    }
  },

  getSession: (): GameSession | null => {
    if (typeof window === 'undefined') return null;
    const data = window.sessionStorage.getItem(STORAGE_KEY);
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
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    }
  },

  markWelcomeSeen: () => {
    gameStorage.setWelcomeSeen(true);
  },

  clearSession: () => {
    if (typeof window === 'undefined') return;

    // Hard stop timer first to prevent race condition ghost writes
    timeStorage.clear();

    sessionStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("selectedCountry");
    localStorage.removeItem("em_game_date");
    localStorage.setItem("em_fresh_session", "true");

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
    localStorage.removeItem(RELATION_MATRIX_KEY);

    window.location.href = '/pilih_negara';
  },

  resetCurrentSessionToDefaults: () => {
    /**
     * NUCLEAR RESET: Completely wipes ALL localStorage and reinitializes to country defaults.
     * This is the most aggressive reset to ensure no stale data persists.
     */
    if (typeof window === 'undefined') return;

    const session = gameStorage.getSession();
    if (!session) {
      console.error("[RESET] ERROR: No session found!");
      return;
    }

    const countryName = session.country || "Indonesia";
    console.log(`[RESET] ========== NUCLEAR RESET STARTING ==========`);
    console.log(`[RESET] Target country: ${countryName}`);
    gameStorage.debugLogStorage("[BEFORE RESET]");

    const currentCountry = countries.find(c => c.name_id === countryName || c.name_en === countryName);

    if (!currentCountry) {
      console.error(`[RESET] ERROR: Country not found: ${countryName}`);
      return;
    }

    // Get profile defaults
    // Parse population (handle string with dots like "288.315.089")
    const defaultPopulation = typeof currentCountry.jumlah_penduduk === 'string'
      ? parseInt(currentCountry.jumlah_penduduk.replace(/\./g, ''))
      : (currentCountry.jumlah_penduduk || 0);
    
    // Parse budget (handle both string and number formats like "3.938" or 3938)
    const defaultBudget = typeof currentCountry.anggaran === 'string'
      ? parseInt(currentCountry.anggaran.replace(/\./g, ''))
      : (currentCountry.anggaran || 0);
    
    const defaultStability = 50;

    console.log(`[RESET] Defaults to restore: Pop=${defaultPopulation}, Budget=${defaultBudget}, Stability=${defaultStability}`);

    // SECTION 1: PHASE 1 - AGGRESSIVE WIPE
    console.log(`[RESET] PHASE 1: Removing all em_* and game_taxes keys...`);

    // Clear sessionStorage too
    console.log(`[RESET] Clearing sessionStorage...`);
    const sessionKeysToRemove = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && (key.startsWith('em_') || key === 'game_taxes')) {
        sessionKeysToRemove.push(key);
      }
    }
    sessionKeysToRemove.forEach(key => sessionStorage.removeItem(key));
    if (sessionKeysToRemove.length > 0) {
      console.log(`[RESET] Cleared ${sessionKeysToRemove.length} sessionStorage keys`);
    }

    // Clear localStorage
    const keysToRemove = new Set<string>();
    const allKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        allKeys.push(key);
        if (key.startsWith('em_') || key === 'game_taxes' || key === 'active_trade_transactions' || key === 'game_trades') {
          keysToRemove.add(key);
        }
      }
    }

    console.log(`[RESET] Total keys in localStorage: ${allKeys.length}`);
    console.log(`[RESET] Marked for removal: ${keysToRemove.size}`);

    let removedCount = 0;
    keysToRemove.forEach(key => {
      try {
        localStorage.removeItem(key);
        removedCount++;
      } catch (e) {
        console.error(`[RESET]   ✗ Failed to remove ${key}:`, e);
      }
    });
    console.log(`[RESET] Removed ${removedCount}/${keysToRemove.size} localStorage keys`);
    gameStorage.debugLogStorage("[AFTER WIPE]");

    // SECTION 2: PHASE 2 - VERIFY WIPE
    console.log(`[RESET] PHASE 2: Verifying complete wipe...`);
    let staleKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('em_')) {
        staleKeys.push(key);
        console.warn(`[RESET]   WARNING: Stale key remains: ${key}`);
      }
    }

    if (staleKeys.length > 0) {
      console.warn(`[RESET] WARNING: ${staleKeys.length} stale keys remain, attempting force removal...`);
      staleKeys.forEach(key => {
        try {
          localStorage.removeItem(key);
          console.log(`[RESET]   Force removed: ${key}`);
        } catch (e) {
          console.error(`[RESET]   Could not force remove ${key}:`, e);
        }
      });
    } else {
      console.log(`[RESET] ✓ Wipe verified - no stale keys remain`);
    }

    // SECTION 3: PHASE 3 - PREPARE RESET DATA (BEFORE writing)
    console.log(`[RESET] PHASE 3: Preparing reset data...`);
    const resetData = {
      "em_population_data": JSON.stringify({
        population: defaultPopulation,
        lastUpdated: Date.now()
      }),
      "em_population_version": "2",
      "em_budget_data": JSON.stringify({
        anggaran: defaultBudget,
        lastUpdated: Date.now(),
        cumulativeProduction: {},
        lastProcessedDate: "2026-01-01T00:00:00.000Z"
      }),
      "em_stability_data": JSON.stringify({
        stability: defaultStability,
        lastUpdated: Date.now()
      })
    };

    console.log(`[RESET] PHASE 3B: Atomic write of ${Object.keys(resetData).length} keys...`);
    const writeErrors: string[] = [];

    // Write all in quick succession
    Object.entries(resetData).forEach(([key, value]) => {
      try {
        localStorage.setItem(key, value);
        const displayValue = typeof value === 'string' && value.length > 50 ? value.substring(0, 50) + "..." : value;
        console.log(`[RESET]   ✓ ${key} = ${displayValue}`);
      } catch (e) {
        writeErrors.push(`${key}: ${e}`);
        console.error(`[RESET]   ✗ ${key} failed: ${e}`);
      }
    });

    if (writeErrors.length > 0) {
      console.error(`[RESET] ERROR: ${writeErrors.length} write failures - CANNOT CONTINUE:`, writeErrors);
      throw new Error(`Failed to write reset data: ${writeErrors.join(", ")}`);
    }

    // SECTION 4: PHASE 4 - VERIFY DEFAULTS
    console.log(`[RESET] PHASE 4: Verifying defaults were written...`);
    gameStorage.debugLogStorage("[AFTER REINIT]");

    try {
      const verifyPop = JSON.parse(localStorage.getItem("em_population_data") || '{}');
      const verifyBudget = JSON.parse(localStorage.getItem("em_budget_data") || '{}');
      const verifyStability = JSON.parse(localStorage.getItem("em_stability_data") || '{}');

      const popMatch = verifyPop.population === defaultPopulation;
      const budgetMatch = verifyBudget.anggaran === defaultBudget;
      const stabMatch = verifyStability.stability === defaultStability;

      console.log(`[RESET]   Population: ${verifyPop.population} (expected: ${defaultPopulation}) ${popMatch ? '✓' : '✗'}`);
      console.log(`[RESET]   Budget: ${verifyBudget.anggaran} (expected: ${defaultBudget}) ${budgetMatch ? '✓' : '✗'}`);
      console.log(`[RESET]   Stability: ${verifyStability.stability} (expected: ${defaultStability}) ${stabMatch ? '✓' : '✗'}`);

      if (popMatch && budgetMatch && stabMatch) {
        console.log(`[RESET] ✓ VERIFICATION PASSED - All defaults correct!`);
      } else {
        console.error(`[RESET] ✗ VERIFICATION FAILED - Values don't match!`);
      }
    } catch (e) {
      console.error("[RESET] ERROR during verification:", e);
    }

    localStorage.setItem("em_fresh_session", "true");
    console.log(`[RESET] ========== NUCLEAR RESET COMPLETE ==========`);
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

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    localStorage.removeItem("em_game_date");

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
    localStorage.removeItem(RELATION_MATRIX_KEY);
  },
};


