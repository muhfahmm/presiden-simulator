"use client"

import { countries } from "@/app/database/data/negara/benua/index";
import { calculateDailyBudgetDelta } from "@/app/game/data/economy/BudgetDeltaLogic";


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
    
    const stored = localStorage.getItem(AI_BUDGET_KEY);
    if (stored && stored !== 'undefined' && stored !== 'null') {
      try {
        const parsed = JSON.parse(stored);
        if (Object.keys(parsed).length > 0) return parsed;
      } catch (e) {
        console.error("Failed to parse AI budgets", e);
      }
    }

    // Fallback to defaults
    return aiBudgetStorage.resetToDefault();
  },

  /**
   * Reset all AI budgets to their database default values.
   */
  resetToDefault: (): AIBudgetData => {
    if (typeof window === 'undefined') return {};
    
    const initialData: AIBudgetData = {};
    countries.forEach(c => {
      // Ensure we pull from the correct property and handle string/number
      const rawValue = typeof c.anggaran === 'string' 
        ? Number(c.anggaran.replace(/\./g, '')) 
        : Number(c.anggaran);
      
      // ALIGNMENT FIX: Use raw value from database to match player budget scale
      initialData[c.name_en] = (rawValue || 0);
    });

    localStorage.setItem(AI_BUDGET_KEY, JSON.stringify(initialData));
    localStorage.removeItem(LAST_PROCESSED_KEY); // Also reset processing date
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
   */
  getBudget: (countryNameEn: string): number => {
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
    return calculateDailyBudgetDelta(country, {});
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
  }
};
