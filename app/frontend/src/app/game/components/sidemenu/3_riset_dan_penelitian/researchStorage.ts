import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { gameStorage } from "@/app/game/gamestorage";

const STORAGE_KEY = "em_research_progress_v1";

// Mapping of Building Key to its path in country data and its boost percentage
const BOOST_CONFIG: Record<string, { path: string; boost: number }> = {
  // 1. Pendidikan & Riset
  "1_prasekolah": { path: "pendidikan.prasekolah", boost: 0.0001 },        // 0.01%
  "2_dasar": { path: "pendidikan.dasar", boost: 0.0003 },                 // 0.03%
  "3_menengah": { path: "pendidikan.menengah", boost: 0.0005 },           // 0.05%
  "4_lanjutan": { path: "pendidikan.lanjutan", boost: 0.0007 },           // 0.07%
  "5_universitas": { path: "pendidikan.universitas", boost: 0.0009 },      // 0.09%
  "6_lembaga_pendidikan": { path: "pendidikan.lembaga_pendidikan", boost: 0.0012 }, // 0.12%
  "7_laboratorium": { path: "pendidikan.laboratorium", boost: 0.0015 },              // 0.15%
  "8_observatorium": { path: "pendidikan.observatorium", boost: 0.0017 },            // 0.17%
  "9_pusat_penelitian": { path: "pendidikan.pusat_penelitian", boost: 0.0019 },      // 0.19%
  "10_pusat_pengembangan": { path: "pendidikan.pusat_pengembangan", boost: 0.0021 }, // 0.21%


  // 2. Infrastruktur Darat & Logistik
  "1_jalur_sepeda": { path: "infrastruktur.jalur_sepeda", boost: 0.0001 },
  "2_jalan_tol": { path: "infrastruktur.jalan_raya", boost: 0.0002 },
  "3_terminal_bus": { path: "infrastruktur.terminal_bus", boost: 0.0005 },

  // 3. Sistem Perkeretaapian Nasional
  "4_jalur_kereta": { path: "infrastruktur.stasiun_kereta_api", boost: 0.001 },
  "5_kereta_bawah_tanah": { path: "infrastruktur.kereta_bawah_tanah", boost: 0.0015 },

  // 4. Hub Maritim & Dirgantara
  "6_pelabuhan_laut": { path: "infrastruktur.pelabuhan", boost: 0.002 },
  "7_bandara": { path: "infrastruktur.bandara", boost: 0.003 },
  "8_helipad": { path: "infrastruktur.helipad", boost: 0.001 },
};

export interface ResearchState {

  completedIds: string[];
  activeResearch: {
    id: string;
    durationDays: number;
    startGameDate: number; // Timestamp of game date
    accumulatedDays: number; // Effective days completed with boosts
    lastUpdateDate: number; // Timestamp of last processed game date
  } | null;
}

const DEFAULT_STATE: ResearchState = {
  completedIds: [],
  activeResearch: null,
};


export const researchStorage = {
  /**
   * Reset all research progress
   */
  clear: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new Event("research_updated"));
    }
  },

  /**
   * Get current research progress from localStorage
   */
  getState: (): ResearchState => {
    if (typeof window === "undefined") return DEFAULT_STATE;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      researchStorage.saveState(DEFAULT_STATE);
      return DEFAULT_STATE;
    }
    return JSON.parse(stored);
  },

  /**
   * Save research progress to localStorage
   */
  saveState: (state: ResearchState) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event("research_updated"));
  },

  /**
   * Calculate current research speed multiplier based on buildings (Initial + New)
   */
  getResearchSpeedMultiplier: () => {
    if (typeof window === "undefined") return 1.0;
    
    // 1. Get Current Country Initial Data
    const session = gameStorage.getSession();
    const currentCountryName = session?.country || "Indonesia";
    const countryData = countries.find((c: any) => 
      c.name_id === currentCountryName || 
      c.name_en === currentCountryName || 
      c.id === currentCountryName
    ) || countries[79];

    // 2. Get Building Deltas (User built during game)
    const deltas = buildingStorage.getBuildingDeltas();
    
    let totalBoost = 0;

    // Helper to get nested value from country object (e.g. "pendidikan.prasekolah")
    const getNestedValue = (obj: any, path: string) => {
      return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    Object.entries(BOOST_CONFIG).forEach(([key, config]) => {
      const initialCount = Number(getNestedValue(countryData, config.path) || 0);
      const deltaCount = Number(deltas[key] || 0);
      const totalCount = initialCount + deltaCount;
      
      totalBoost += totalCount * config.boost;
    });

    // Minimum multiplier is 1.0. 
    // Max boost is theoretically uncapped but limited by country space/budget.
    return 1 + totalBoost;
  },


  /**
   * Start a new research process based on GAME DATE
   */

  startResearch: (nodeId: string, durationStr: string, currentGameDate: Date) => {
    const state = researchStorage.getState();
    if (state.activeResearch) return false;

    const durationDays = parseInt(durationStr) || 1;

    const newState: ResearchState = {
      ...state,
      activeResearch: {
        id: nodeId,
        durationDays: durationDays,
        startGameDate: currentGameDate.getTime(),
        accumulatedDays: 0,
        lastUpdateDate: currentGameDate.getTime(),
      }
    };

    researchStorage.saveState(newState);
    return true;
  },


  /**
   * Called daily by the game clock.
   */
  updateProgress: (currentDate: Date) => {
    const state = researchStorage.getState();
    if (!state.activeResearch) return;

    const active = state.activeResearch;
    const currentTs = currentDate.getTime();
    
    // Fallback for existing saves
    if (active.accumulatedDays === undefined) active.accumulatedDays = 0;
    if (active.lastUpdateDate === undefined) active.lastUpdateDate = active.startGameDate;

    // Calculate days passed since last update
    const diffMs = currentTs - active.lastUpdateDate;
    const deltaDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (deltaDays > 0) {
      const multiplier = researchStorage.getResearchSpeedMultiplier();
      // Progress increment is boosted
      active.accumulatedDays += deltaDays * multiplier;
      active.lastUpdateDate = currentTs;

      if (active.accumulatedDays >= active.durationDays) {
        researchStorage.completeResearch(active.id);
      } else {
        researchStorage.saveState(state);
      }
    } else {
      window.dispatchEvent(new Event("research_updated"));
    }
  },


  /**
   * Helper to get progress details
   */
  getProgress: (nodeId: string, currentDate: Date) => {
    const state = researchStorage.getState();
    if (!state.activeResearch || state.activeResearch.id !== nodeId) return null;

    const active = state.activeResearch;
    const currentTs = currentDate.getTime();

    // Fallback for existing saves
    const accumulated = active.accumulatedDays ?? 0;
    const lastUpdate = active.lastUpdateDate ?? active.startGameDate;

    // Estimate current progress including any fraction of the current day
    const multiplier = researchStorage.getResearchSpeedMultiplier();
    const diffMs = Math.max(0, currentTs - lastUpdate);
    const currentDayFraction = diffMs / (1000 * 60 * 60 * 24);
    
    const totalEffectiveDays = accumulated + (currentDayFraction * multiplier);
    
    const percentage = Math.min(100, (totalEffectiveDays / active.durationDays) * 100);
    const remainingDays = Math.max(0, (active.durationDays - totalEffectiveDays) / multiplier);

    return { 
      percentage, 
      remainingDays: Math.ceil(remainingDays),
      multiplier 
    };
  },


  /**
   * Manually complete a research
   */
  completeResearch: (nodeId: string) => {
    const state = researchStorage.getState();
    if (!state.completedIds.includes(nodeId)) {
      const newState: ResearchState = {
        completedIds: [...state.completedIds, nodeId],
        activeResearch: state.activeResearch?.id === nodeId ? null : state.activeResearch
      };
      researchStorage.saveState(newState);
      return true;
    }
    return false;
  },

  /**
   * Determine the status of a node
   */
  getNodeStatus: (nodeId: string, category: string, tier: number, allNodes: any[]): 'completed' | 'available' | 'locked' | 'researching' => {
    const state = researchStorage.getState();
    
    if (state.completedIds.includes(nodeId)) return 'completed';
    if (state.activeResearch?.id === nodeId) return 'researching';

    if (tier === 1) return 'available';

    const prevTierNode = allNodes.find(n => n.category === category && n.tier === tier - 1);
    if (prevTierNode && state.completedIds.includes(prevTierNode.id)) {
      return 'available';
    }

    return 'locked';
  }
};


