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
   * Initialize all country budgets from the database if not already stored.
   */
  initialize: (): AIBudgetData => {
    if (typeof window === 'undefined') return {};
    
    const stored = localStorage.getItem(AI_BUDGET_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse AI budgets", e);
      }
    }

    // Initial setup from database
    const initialData: AIBudgetData = {};
    countries.forEach(c => {
      initialData[c.name_en] = Number(c.anggaran) || 0;
    });

    localStorage.setItem(AI_BUDGET_KEY, JSON.stringify(initialData));
    return initialData;
  },

  /**
   * Get the current budget for a specific country.
   */
  getBudget: (countryNameEn: string): number => {
    const data = aiBudgetStorage.initialize();
    return data[countryNameEn] || 0;
  },

  /**
   * Update all AI budgets based on their daily income.
   * Should be called once per game day.
   */
  updateAll: (gameDate: Date, userCountryEn: string) => {
    if (typeof window === 'undefined') return;

    const dateStr = gameDate.toISOString().split('T')[0];
    const lastProcessed = localStorage.getItem(LAST_PROCESSED_KEY);
    
    if (lastProcessed === dateStr) return; // Already processed today

    const data = aiBudgetStorage.initialize();
    
    countries.forEach(c => {
      // Don't update the user's country here (handled by budgetStorage)
      if (c.name_en === userCountryEn) return;

      const dailyIncome = aiBudgetStorage.calculateDailyIncome(c);
      data[c.name_en] = (data[c.name_en] || 0) + dailyIncome;
    });

    localStorage.setItem(AI_BUDGET_KEY, JSON.stringify(data));
    localStorage.setItem(LAST_PROCESSED_KEY, dateStr);
    
    // Dispatch event for UI updates (like StrategyModal)
    window.dispatchEvent(new Event('ai_budget_updated'));
  },

  /**
   * Calculate daily tax income for a country (same logic as database page).
   */
  calculateDailyIncome: (country: any): number => {
    // We use empty building deltas for AI to represent their baseline state
    return calculateDailyBudgetDelta(country, {});
  },

  /**
   * Update budget for a specific country manually (e.g., for events/military).
   */
  updateBudgetManual: (countryNameEn: string, amount: number) => {
    if (typeof window === 'undefined') return;
    const data = aiBudgetStorage.initialize();
    data[countryNameEn] = (data[countryNameEn] || 0) + amount;
    localStorage.setItem(AI_BUDGET_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event('ai_budget_updated'));
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AI_BUDGET_KEY);
    localStorage.removeItem(LAST_PROCESSED_KEY);
  }
};
