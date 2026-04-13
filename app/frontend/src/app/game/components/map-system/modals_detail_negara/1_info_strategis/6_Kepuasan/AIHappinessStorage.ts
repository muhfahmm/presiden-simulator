"use client"

import { countries } from "@/app/database/data/negara/benua/index";

const AI_HAPPINESS_KEY = "em4_ai_happiness";
const LAST_PROCESSED_HAPPINESS_KEY = "em4_ai_last_happiness_update";

export interface AIHappinessData {
  [countryNameEn: string]: number;
}

export const aiHappinessStorage = {
  /**
   * Get all happiness data, initializing if empty.
   */
  getAll: (): AIHappinessData => {
    if (typeof window === 'undefined') return {};
    
    const stored = localStorage.getItem(AI_HAPPINESS_KEY);
    if (stored && stored !== 'undefined' && stored !== 'null') {
      try {
        const parsed = JSON.parse(stored);
        if (Object.keys(parsed).length > 0) return parsed;
      } catch (e) {
        console.error("Failed to parse AI happiness", e);
      }
    }

    // Default to 55%
    return aiHappinessStorage.resetToDefault();
  },

  /**
   * Reset all AI happiness levels to default (55%).
   */
  resetToDefault: (): AIHappinessData => {
    if (typeof window === 'undefined') return {};
    
    const initialData: AIHappinessData = {};
    countries.forEach(c => {
      initialData[c.name_en] = 55.0;
    });

    localStorage.setItem(AI_HAPPINESS_KEY, JSON.stringify(initialData));
    localStorage.removeItem(LAST_PROCESSED_HAPPINESS_KEY);
    return initialData;
  },

  /**
   * Initialize (legacy wrapper).
   */
  initialize: (): AIHappinessData => {
    return aiHappinessStorage.getAll();
  },

  /**
   * Get current happiness for a specific country.
   */
  getSatisfaction: (countryNameEn: string): number => {
    const data = aiHappinessStorage.getAll();
    return data[countryNameEn] !== undefined ? data[countryNameEn] : 55.0;
  },

  /**
   * Update all AI happiness scores.
   */
  updateAll: async (gameDate: Date, userCountryEn: string) => {
    if (typeof window === 'undefined') return;

    const dateStr = gameDate.toISOString().split('T')[0];
    const lastProcessed = localStorage.getItem(LAST_PROCESSED_HAPPINESS_KEY);
    if (lastProcessed === dateStr) return;

    const { KolektorDataNasional } = require("@/app/game/components/AI_logic/1_AI_Kepuasan/1_statistik_kepuasan/perangkat_observasi/KolektorDataNasional");
    const data = aiHappinessStorage.getAll();

    const batchPackets: any[] = [];
    countries.forEach(c => {
      if (c.name_en === userCountryEn || c.name_id === userCountryEn) return;

      const currentVal = data[c.name_en] || 55.0;
      const context = KolektorDataNasional.kumpulkanData(c.name_en, currentVal);
      if (context) {
        batchPackets.push(context);
      }
    });

    console.log(`[AI Happiness] Processing update for ${batchPackets.length} AI nations. Game Date: ${dateStr}`);

    if (batchPackets.length === 0) return;

    try {
      const response = await fetch("/game/components/AI_logic/1_AI_Kepuasan/routes/1_statistik_kepuasan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(batchPackets)
      });

      const results = await response.json();

      if (results && !results.error) {
        Object.entries(results).forEach(([name, result]: [string, any]) => {
          if (result && result.new_value !== undefined) {
            data[name] = result.new_value;
          }
        });

        localStorage.setItem(AI_HAPPINESS_KEY, JSON.stringify(data));
        localStorage.setItem(LAST_PROCESSED_HAPPINESS_KEY, dateStr);
        window.dispatchEvent(new Event('ai_happiness_updated'));
      }
    } catch (err) {
      console.error("[AI Happiness] Global Batch update failed:", err);
    }
  },

  /**
   * Update happiness for a specific country manually.
   */
  updateSatisfaction: (countryNameEn: string, newValue: number) => {
    if (typeof window === 'undefined') return;
    const data = aiHappinessStorage.getAll();
    data[countryNameEn] = Math.max(0, Math.min(100, newValue));
    localStorage.setItem(AI_HAPPINESS_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event('ai_happiness_updated'));
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    aiHappinessStorage.resetToDefault();
    window.dispatchEvent(new Event('ai_happiness_updated'));
  }
};
