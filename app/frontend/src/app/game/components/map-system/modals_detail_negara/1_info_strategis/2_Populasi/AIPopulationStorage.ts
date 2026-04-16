"use client"

import { countries } from "@/app/database/data/negara/benua/index";
import { calculateDailyPopulationDelta } from "@/app/game/components/1_navbar/2_populasi/PopulationDeltaLogic";
import { INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

const AI_POP_KEY = "em4_ai_populations";
const LAST_PROCESSED_KEY = "em4_ai_pop_last_processed";

export interface AIPopulationData {
  [countryNameEn: string]: number;
}

export const aiPopulationStorage = {
  /**
   * Get all populations, initializing from database if empty.
   */
  getAll: (): AIPopulationData => {
    if (typeof window === 'undefined') return {};
    
    const isFreshSession = typeof window !== 'undefined' && localStorage.getItem("em4_fresh_session") === "true";
    
    if (!isFreshSession) {
      const stored = localStorage.getItem(AI_POP_KEY);
      if (stored && stored !== 'undefined' && stored !== 'null') {
        try {
          const parsed = JSON.parse(stored);
          if (Object.keys(parsed).length > 0) return parsed;
        } catch (e) {
          console.error("Failed to parse AI populations", e);
        }
      }
    } else {
      console.log(`[AI POPULATION] Fresh session detected in getAll() - forcing defaults.`);
    }

    // Fallback to defaults
    return aiPopulationStorage.resetToDefault();
  },

  /**
   * Reset all AI populations to their database default values.
   */
  resetToDefault: (): AIPopulationData => {
    if (typeof window === 'undefined') return {};
    
    // DEBUG: Log reset action
    console.log(`[AI POPULATION] Resetting all AI populations to database defaults...`);
    
    // Aggressive: Explicitly remove key first to ensure clean slate
    localStorage.removeItem(AI_POP_KEY);
    localStorage.removeItem(LAST_PROCESSED_KEY);
    
    const initialData: AIPopulationData = {};
    countries.forEach(c => {
      // Ensure we pull from the correct property and handle string/number
      const rawPop = (c as any).jumlah_penduduk ?? (c as any).populasi;
      const rawValue = typeof rawPop === 'string' 
        ? Number(rawPop.replace(/\./g, '')) 
        : Number(rawPop);
      
      initialData[c.name_en] = (rawValue || 0);
      
      // DEBUG: Log Malaysia specifically
      if (c.name_en === 'Malaysia') {
        console.log(`[AI POPULATION] Malaysia default population: ${rawValue}`);
      }
    });

    localStorage.setItem(AI_POP_KEY, JSON.stringify(initialData));
    console.log(`[AI POPULATION] Reset complete. Total countries: ${countries.length}`);
    return initialData;
  },

  /**
   * Get population for a specific country.
   * If fresh session flag is set, returns database default.
   */
  getPopulation: (countryNameEn: string): number => {
    if (typeof window === 'undefined') return 0;
    
    // Check for fresh session flag - if set, STRICTLY return database default
    const isFreshSession = localStorage.getItem("em4_fresh_session") === "true";
    if (isFreshSession) {
      const c = countries.find(c => c.name_en === countryNameEn);
      if (c) {
        const rawPop = (c as any).jumlah_penduduk ?? (c as any).populasi;
        const defaultPop = typeof rawPop === 'string'
          ? Number(rawPop.replace(/\./g, ''))
          : Number(rawPop) || 0;
        console.log(`[AI POPULATION] Reset detected - providing default for ${countryNameEn}: ${defaultPop}`);
        return defaultPop;
      }
    }
    
    const data = aiPopulationStorage.getAll();
    if (data[countryNameEn] !== undefined) {
      return data[countryNameEn];
    }
    
    // Fallback
    const c = countries.find(c => c.name_en === countryNameEn);
    if (c) {
      const rawPop = (c as any).jumlah_penduduk ?? (c as any).populasi;
      const rawValue = typeof rawPop === 'string' 
        ? Number(rawPop.replace(/\./g, '')) 
        : Number(rawPop);
      return rawValue || 0;
    }
    return 0;
  },

  /**
   * Process daily population growth for ALL AI nations.
   * This is intentionally decoupled from user's calculateDailyPopulationDelta in logic flow,
   * but uses the same math to ensure fairness.
   */
  updateAll: (gameDate: Date, skipCountryCode: string = ""): void => {
    if (typeof window === 'undefined') return;

    const currentDateStr = gameDate.toISOString().split('T')[0];
    const lastProcessedStr = localStorage.getItem(LAST_PROCESSED_KEY);

    if (currentDateStr === lastProcessedStr) {
      return; // Already processed today
    }

    const currentPopulations = aiPopulationStorage.getAll();
    const diffTime = Math.abs(gameDate.getTime() - INITIAL_GAME_DATE.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let updated = false;

    for (const c of countries) {
      // Skip the human player's country since their population is managed by populationStorage
      if (c.name_id === skipCountryCode || c.name_en === skipCountryCode) continue;

      const currentPop = currentPopulations[c.name_en] || 0;
      if (currentPop <= 0) continue;

      // Use the generic logic
      const rawDelta = calculateDailyPopulationDelta(c as any, currentPop, diffDays);
      const populationDelta = Math.round(rawDelta);

      currentPopulations[c.name_en] = Math.max(0, currentPop + populationDelta);
      updated = true;
    }

    if (updated) {
      localStorage.setItem(AI_POP_KEY, JSON.stringify(currentPopulations));
      localStorage.setItem(LAST_PROCESSED_KEY, currentDateStr);

      // Dispatch event to update the UI (especially DetailNegaraModal)
      window.dispatchEvent(new Event("ai_population_updated"));
    }
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    aiPopulationStorage.resetToDefault();
    // Explicitly dispatch to notify any listeners
    window.dispatchEvent(new Event('ai_population_updated'));
  },

  /**
   * Sync all NPC populations from backend data.
   * This makes the Go server the single source of truth.
   */
  syncFromBackend: (npcStates: Record<string, any>) => {
    if (typeof window === 'undefined' || !npcStates) return;

    const currentData = aiPopulationStorage.getAll();
    let hasChanged = false;

    Object.keys(npcStates).forEach(nationName => {
      const state = npcStates[nationName];
      if (state && typeof state.population === 'number') {
        const serverPop = state.population;
        
        // Only update if value is different
        if (currentData[nationName] !== serverPop) {
          currentData[nationName] = serverPop;
          hasChanged = true;
        }
      }
    });

    if (hasChanged) {
      localStorage.setItem(AI_POP_KEY, JSON.stringify(currentData));
      window.dispatchEvent(new Event('ai_population_updated'));
    }
  }
};
