"use client"

import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { calculateDailyPopulationDelta } from "@/app/game/components/1_navbar/2_populasi/PopulationDeltaLogic";
import { INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

const AI_POP_KEY = "em_ai_populations";
const LAST_PROCESSED_KEY = "em_ai_pop_last_processed";

export interface AIPopulationData {
  [countryNameEn: string]: number;
}

// High-performance in-memory cache
let memoryCache: AIPopulationData | null = null;
let deltaCache: Record<string, number> = {}; // [NEW] Store daily deltas
let saveTimeout: NodeJS.Timeout | null = null;

export const aiPopulationStorage = {
  /**
   * Get all populations, initializing from memory cache or database.
   */
  getAll: (): AIPopulationData => {
    if (typeof window === 'undefined') return {};
    if (memoryCache) return memoryCache;
    
    const isFreshSession = typeof window !== 'undefined' && localStorage.getItem("em_fresh_session") === "true";
    
    if (!isFreshSession) {
      const stored = localStorage.getItem(AI_POP_KEY);
      if (stored && stored !== 'undefined' && stored !== 'null') {
        try {
          memoryCache = JSON.parse(stored);
          if (memoryCache && Object.keys(memoryCache).length > 0) return memoryCache;
        } catch (e) {
          console.error("Failed to parse AI populations", e);
        }
      }
    }

    // Fallback to defaults
    memoryCache = aiPopulationStorage.resetToDefault();
    return memoryCache;
  },

  /**
   * Internal helper to save to localStorage with debouncing (every 5 seconds)
   */
  _saveToDisk: (force: boolean = false) => {
    if (!memoryCache || typeof window === 'undefined') return;
    
    if (saveTimeout && !force) return; // Wait for existing timeout
    
    const performSave = () => {
        localStorage.setItem(AI_POP_KEY, JSON.stringify(memoryCache));
        saveTimeout = null;
    };

    if (force) {
        if (saveTimeout) clearTimeout(saveTimeout);
        performSave();
    } else {
        saveTimeout = setTimeout(performSave, 5000); // 5 second debounce
    }
  },

  /**
   * Reset all AI populations to their database default values.
   */
  resetToDefault: (): AIPopulationData => {
    if (typeof window === 'undefined') return {};
    
    console.log(`[AI POPULATION] Resetting all AI populations to database defaults...`);
    localStorage.removeItem(AI_POP_KEY);
    localStorage.removeItem(LAST_PROCESSED_KEY);
    
    const initialData: AIPopulationData = {};
    countries.forEach(c => {
      const rawPop = (c as any).jumlah_penduduk ?? (c as any).populasi;
      const rawValue = typeof rawPop === 'string' 
        ? parseInt(rawPop.replace(/\./g, ''), 10) 
        : (typeof rawPop === 'number' ? rawPop : 0);
      
      initialData[c.name_en] = (rawValue || 0);
    });

    memoryCache = initialData;
    aiPopulationStorage._saveToDisk(true); // Force save on reset
    return initialData;
  },

  getPopulation: (countryNameEn: string): number => {
    const data = aiPopulationStorage.getAll();
    return data[countryNameEn] || 0;
  },

  /**
   * Get the daily population delta for a specific country.
   */
  getDelta: (countryNameEn: string): number => {
    return deltaCache[countryNameEn] || 0;
  },

  /**
   * Process daily population growth (Fallback for local simulation)
   */
  updateAll: (gameDate: Date, skipCountryCode: string = ""): void => {
    if (typeof window === 'undefined') return;

    const currentDateStr = gameDate.toISOString().split('T')[0];
    const lastProcessedStr = localStorage.getItem(LAST_PROCESSED_KEY);
    if (currentDateStr === lastProcessedStr) return;

    const currentPopulations = aiPopulationStorage.getAll();
    const diffTime = Math.abs(gameDate.getTime() - INITIAL_GAME_DATE.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let updated = false;
    for (const c of countries) {
      if (c.name_id === skipCountryCode || c.name_en === skipCountryCode) continue;

      const currentPop = currentPopulations[c.name_en] || 0;
      if (currentPop <= 0) continue;

      const rawDelta = calculateDailyPopulationDelta(c as any, currentPop, diffDays);
      currentPopulations[c.name_en] = Math.max(0, currentPop + Math.round(rawDelta));
      updated = true;
    }

    if (updated) {
      localStorage.setItem(LAST_PROCESSED_KEY, currentDateStr);
      aiPopulationStorage._saveToDisk(); // Debounced save
      window.dispatchEvent(new Event("ai_population_updated"));
    }
  },

  clear: () => {
    aiPopulationStorage.resetToDefault();
    window.dispatchEvent(new Event('ai_population_updated'));
  },

  /**
   * Sync all NPC populations from backend data (Source of Truth)
   */
  syncFromBackend: (npcStates: Record<string, any>) => {
    if (typeof window === 'undefined' || !npcStates) return;

    const currentData = aiPopulationStorage.getAll();
    let hasChanged = false;

    Object.keys(npcStates).forEach(nationName => {
      const state = npcStates[nationName];
      if (state) {
        if (typeof state.population === 'number') {
          const serverPop = state.population;
          if (currentData[nationName] !== serverPop) {
            currentData[nationName] = serverPop;
            hasChanged = true;
          }
        }
        // [NEW] Track the delta sent by server
        if (typeof state.populationDelta === 'number') {
           deltaCache[nationName] = state.populationDelta;
           hasChanged = true; 
        }
      }
    });

    if (hasChanged) {
      aiPopulationStorage._saveToDisk(); // Debounced save
      window.dispatchEvent(new Event('ai_population_updated'));
    }
  }
};

