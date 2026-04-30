"use client"

import { countries } from "@/app/database/data/negara/benua/index";
import { calculateDailyBudgetDelta } from "@/app/game/components/1_navbar/3_kas_negara/BudgetDeltaLogic";
import { aiBuildingStorage } from "@/app/game/components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIBuildingStorage";


const AI_BUDGET_KEY = "em_ai_budgets";
const LAST_PROCESSED_KEY = "em_ai_last_processed";

export interface AIBudgetData {
  [countryNameEn: string]: number;
}

// High-performance in-memory cache
let memoryCache: AIBudgetData | null = null;
let saveTimeout: NodeJS.Timeout | null = null;

export const aiBudgetStorage = {
  /**
   * Get all budgets, initializing from memory cache or database.
   */
  getAll: (): AIBudgetData => {
    if (typeof window === 'undefined') return {};
    if (memoryCache) return memoryCache;
    
    const isFreshSession = typeof window !== 'undefined' && localStorage.getItem("em_fresh_session") === "true";
    
    if (!isFreshSession) {
      const stored = localStorage.getItem(AI_BUDGET_KEY);
      if (stored && stored !== 'undefined' && stored !== 'null') {
        try {
          memoryCache = JSON.parse(stored);
          if (memoryCache && Object.keys(memoryCache).length > 0) return memoryCache;
        } catch (e) {
          console.error("Failed to parse AI budgets", e);
        }
      }
    }

    // Fallback to defaults
    memoryCache = aiBudgetStorage.resetToDefault();
    return memoryCache;
  },

  /**
   * Internal helper to save to localStorage with debouncing (every 5 seconds)
   */
  _saveToDisk: (force: boolean = false) => {
    if (!memoryCache || typeof window === 'undefined') return;
    
    if (saveTimeout && !force) return; // Wait for existing timeout
    
    const performSave = () => {
        localStorage.setItem(AI_BUDGET_KEY, JSON.stringify(memoryCache));
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
   * Reset all AI budgets to their database default values.
   */
  resetToDefault: (): AIBudgetData => {
    if (typeof window === 'undefined') return {};
    
    console.log(`[AI BUDGET] Resetting all AI budgets to database defaults...`);
    localStorage.removeItem(AI_BUDGET_KEY);
    localStorage.removeItem(LAST_PROCESSED_KEY);
    
    const initialData: AIBudgetData = {};
    countries.forEach(c => {
      const rawValue = typeof c.anggaran === 'string' 
        ? Number(c.anggaran.replace(/\./g, '')) 
        : Number(c.anggaran);
      initialData[c.name_en] = (rawValue || 0);
    });

    memoryCache = initialData;
    aiBudgetStorage._saveToDisk(true); // Force save on reset
    return initialData;
  },

  /**
   * Get the current budget for a specific country.
   */
  getBudget: (countryNameEn: string): number => {
    const data = aiBudgetStorage.getAll();
    return data[countryNameEn] || 0;
  },

  /**
   * Update all AI budgets (Fallback for local simulation)
   */
  updateAll: (gameDate: Date, userCountryEn: string) => {
    if (typeof window === 'undefined') return;

    const dateStr = gameDate.toISOString().split('T')[0];
    const lastProcessed = localStorage.getItem(LAST_PROCESSED_KEY);
    if (lastProcessed === dateStr) return; 

    const data = aiBudgetStorage.getAll();
    let hasChanged = false;

    countries.forEach(c => {
      if (c.name_en === userCountryEn || c.name_id === userCountryEn) return;
      const dailyIncome = aiBudgetStorage.calculateDailyIncome(c);
      if (dailyIncome !== 0) {
        data[c.name_en] = (data[c.name_en] || 0) + dailyIncome;
        hasChanged = true;
      }
    });

    if (hasChanged) {
      localStorage.setItem(LAST_PROCESSED_KEY, dateStr);
      aiBudgetStorage._saveToDisk(); // Debounced save
      window.dispatchEvent(new Event('ai_budget_updated'));
    }
  },

  /**
   * Calculate daily tax income for a country.
   */
  calculateDailyIncome: (country: any): number => {
    const deltas = aiBuildingStorage.getAllBuildingDeltas(country.name_en);
    return calculateDailyBudgetDelta(country, deltas);
  },

  /**
   * Update budget for a specific country manually.
   */
  updateBudgetManual: (countryNameEn: string, amount: number) => {
    const data = aiBudgetStorage.getAll();
    data[countryNameEn] = (data[countryNameEn] || 0) + amount;
    aiBudgetStorage._saveToDisk();
    window.dispatchEvent(new Event('ai_budget_updated'));
  },

  clear: () => {
    aiBudgetStorage.resetToDefault();
    window.dispatchEvent(new Event('ai_budget_updated'));
  },

  /**
   * Sync all NPC budgets from backend data (Source of Truth)
   */
  syncFromBackend: (npcStates: Record<string, any>) => {
    if (typeof window === 'undefined' || !npcStates) return;

    const currentData = aiBudgetStorage.getAll();
    let hasChanged = false;

    Object.keys(npcStates).forEach(nationName => {
      const state = npcStates[nationName];
      if (state && typeof state.budget === 'number') {
        const serverBudget = state.budget;
        if (currentData[nationName] !== serverBudget) {
          currentData[nationName] = serverBudget;
          hasChanged = true;
        }
      }
    });

    if (hasChanged) {
      aiBudgetStorage._saveToDisk(); // Debounced save
      // Note: we still dispatch event to keep UI updated, but UI components should also throttle
      window.dispatchEvent(new Event('ai_budget_updated'));
    }
  }
};
