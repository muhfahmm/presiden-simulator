"use client"

import { countries } from "@/app/database/data/negara/benua/index";
import { calculateDailyBudgetDelta } from "@/app/game/data/economy/BudgetDeltaLogic";
import { aiBuildingStorage } from "@/app/game/components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIBuildingStorage";


const AI_BUDGET_KEY = "em4_ai_budgets";
const LAST_PROCESSED_KEY = "em4_ai_last_processed";

export interface AIBudgetData {
  [countryNameEn: string]: number;
}

export const aiBudgetStorage = {
  /**
   * Get all budgets, initializing from database if empty.
   */
  getAll: (): AIBudgetData => {
    if (typeof window === 'undefined') return {};
    
    const isFreshSession = typeof window !== 'undefined' && localStorage.getItem("em4_fresh_session") === "true";
    
    if (!isFreshSession) {
      const stored = localStorage.getItem(AI_BUDGET_KEY);
      if (stored && stored !== 'undefined' && stored !== 'null') {
        try {
          const parsed = JSON.parse(stored);
          if (Object.keys(parsed).length > 0) return parsed;
        } catch (e) {
          console.error("Failed to parse AI budgets", e);
        }
      }
    } else {
      console.log(`[AI BUDGET] Fresh session detected in getAll() - forcing defaults.`);
    }

    // Fallback to defaults
    return aiBudgetStorage.resetToDefault();
  },

  /**
   * Reset all AI budgets to their database default values.
   */
  resetToDefault: (): AIBudgetData => {
    if (typeof window === 'undefined') return {};
    
    // DEBUG: Log reset action
    console.log(`[AI BUDGET] Resetting all AI budgets to database defaults...`);
    
    // Aggressive: Explicitly remove key first to ensure clean slate
    localStorage.removeItem(AI_BUDGET_KEY);
    localStorage.removeItem(LAST_PROCESSED_KEY);
    
    const initialData: AIBudgetData = {};
    countries.forEach(c => {
      // Ensure we pull from the correct property and handle string/number
      const rawValue = typeof c.anggaran === 'string' 
        ? Number(c.anggaran.replace(/\./g, '')) 
        : Number(c.anggaran);
      
      // ALIGNMENT FIX: Use raw value from database to match player budget scale
      initialData[c.name_en] = (rawValue || 0);
      
      // DEBUG: Log Malaysia specifically
      if (c.name_en === 'Malaysia') {
        console.log(`[AI BUDGET] Malaysia default anggaran: ${rawValue}`);
      }
    });

    localStorage.setItem(AI_BUDGET_KEY, JSON.stringify(initialData));
    console.log(`[AI BUDGET] Reset complete. Total countries: ${countries.length}`);
    return initialData;
  },

  /**
   * Initialize (legacy wrapper for getAll).
   */
  initialize: (): AIBudgetData => {
    return aiBudgetStorage.getAll();
  },

  /**
   * Get the current budget for a specific country.
   * If fresh session flag is set, returns database default and clears the flag.
   */
  getBudget: (countryNameEn: string): number => {
    if (typeof window === 'undefined') return 0;
    
    // Check for fresh session flag - if set, STRICTLY return database default
    const isFreshSession = localStorage.getItem("em4_fresh_session") === "true";
    if (isFreshSession) {
      const country = countries.find(c => c.name_en === countryNameEn);
      if (country) {
        const defaultBudget = typeof country.anggaran === 'string'
          ? Number(country.anggaran.replace(/\./g, ''))
          : Number(country.anggaran) || 0;
        console.log(`[AI BUDGET] Reset detected - providing default for ${countryNameEn}: ${defaultBudget}`);
        return defaultBudget;
      }
    }
    
    const data = aiBudgetStorage.getAll();
    return data[countryNameEn] || 0;
  },

  /**
   * Update all AI budgets based on their daily income.
   * Prevents overwriting with stale data during game reset.
   */
  updateAll: (gameDate: Date, userCountryEn: string) => {
    if (typeof window === 'undefined') return;

    const dateStr = gameDate.toISOString().split('T')[0];
    const lastProcessed = localStorage.getItem(LAST_PROCESSED_KEY);
    
    if (lastProcessed === dateStr) return; 

    // Use getAll() which ensures we have valid data
    const data = aiBudgetStorage.getAll();
    let hasChanged = false;

    countries.forEach(c => {
      // Robust user check: check both ID and English Name
      if (c.name_en === userCountryEn || c.name_id === userCountryEn) return;

      const dailyIncome = aiBudgetStorage.calculateDailyIncome(c);
      if (dailyIncome !== 0) {
        data[c.name_en] = (data[c.name_en] || 0) + dailyIncome;
        hasChanged = true;
      }
    });

    if (hasChanged) {
      localStorage.setItem(AI_BUDGET_KEY, JSON.stringify(data));
      localStorage.setItem(LAST_PROCESSED_KEY, dateStr);
      window.dispatchEvent(new Event('ai_budget_updated'));
    }
  },

  /**
   * Calculate daily tax income for a country.
   */
  calculateDailyIncome: (country: any): number => {
    // scale delta to match the budget units (already in millions/raw units in DB)
    const deltas = aiBuildingStorage.getAllBuildingDeltas(country.name_en);
    return calculateDailyBudgetDelta(country, deltas);
  },

  /**
   * Update budget for a specific country manually.
   */
  updateBudgetManual: (countryNameEn: string, amount: number) => {
    if (typeof window === 'undefined') return;
    const data = aiBudgetStorage.getAll();
    data[countryNameEn] = (data[countryNameEn] || 0) + amount;
    localStorage.setItem(AI_BUDGET_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event('ai_budget_updated'));
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    aiBudgetStorage.resetToDefault();
    // Explicitly dispatch to notify any listeners
    window.dispatchEvent(new Event('ai_budget_updated'));
  },

  /**
   * Sync all NPC budgets from backend data.
   * This makes the Go server the single source of truth.
   */
  syncFromBackend: (npcStates: Record<string, any>) => {
    if (typeof window === 'undefined' || !npcStates) return;

    const currentData = aiBudgetStorage.getAll();
    let hasChanged = false;

    Object.keys(npcStates).forEach(nationName => {
      const state = npcStates[nationName];
      if (state && typeof state.budget === 'number') {
        const serverBudget = state.budget;
        
        // Only update if value is different
        if (currentData[nationName] !== serverBudget) {
          currentData[nationName] = serverBudget;
          hasChanged = true;
        }
      }
    });

    if (hasChanged) {
      localStorage.setItem(AI_BUDGET_KEY, JSON.stringify(currentData));
      window.dispatchEvent(new Event('ai_budget_updated'));
    }
  }
};
