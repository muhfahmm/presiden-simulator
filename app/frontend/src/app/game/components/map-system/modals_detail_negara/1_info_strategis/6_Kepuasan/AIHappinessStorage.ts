"use client"

import { countries } from "@/app/database/data/negara/benua/index";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";

const AI_HAPPINESS_KEY = "em4_ai_happiness";
const LAST_PROCESSED_HAPPINESS_KEY = "em4_ai_last_happiness_update";

export interface AIHappinessData {
  [countryNameEn: string]: number;
}

export const aiHappinessStorage = {
  /**
   * Initialize all country happiness levels with 55% if not already stored.
   */
  initialize: (): AIHappinessData => {
    if (typeof window === 'undefined') return {};
    
    const stored = localStorage.getItem(AI_HAPPINESS_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse AI happiness", e);
      }
    }

    // Initial setup with default 55%
    const initialData: AIHappinessData = {};
    countries.forEach(c => {
      initialData[c.name_en] = 55.0;
    });

    localStorage.setItem(AI_HAPPINESS_KEY, JSON.stringify(initialData));
    return initialData;
  },

  /**
   * Get current happiness for a specific country.
   */
  getSatisfaction: (countryNameEn: string): number => {
    const data = aiHappinessStorage.initialize();
    return data[countryNameEn] !== undefined ? data[countryNameEn] : 55.0;
  },

  /**
   * Update all AI happiness scores based on taxes, prices, and infrastructure.
   * PERFORMANCE OPTIMIZED: Uses Batch Processing (1 API call for all countries).
   */
  updateAll: async (gameDate: Date, userCountryEn: string) => {
    if (typeof window === 'undefined') return;

    const dateStr = gameDate.toISOString().split('T')[0];
    const lastProcessed = localStorage.getItem(LAST_PROCESSED_HAPPINESS_KEY);
    if (lastProcessed === dateStr) return;

    const { KolektorDataNasional } = require("@/app/game/components/AI_logic/1_AI_Kepuasan/1_statistik_kepuasan/perangkat_observasi/KolektorDataNasional");
    const data = aiHappinessStorage.initialize();

    // 1. Collect data for all AI countries in a single batch
    const batchPackets: any[] = [];
    countries.forEach(c => {
      if (c.name_en === userCountryEn) return;

      const context = KolektorDataNasional.kumpulkanData(c.name_en);
      if (context) {
        // Ensure we use the latest stored happiness value for the next calculation
        context.statistik.indeks_kepuasan = data[c.name_en] || 55.0;
        batchPackets.push(context);
      }
    });

    if (batchPackets.length === 0) return;

    try {
      // 2. Single API Call for the entire global AI state
      const response = await fetch("/game/components/AI_logic/1_AI_Kepuasan/routes/1_statistik_kepuasan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(batchPackets)
      });

      const results = await response.json();

      // 3. Process all results and update storage
      if (results && !results.error) {
        Object.entries(results).forEach(([name, result]: [string, any]) => {
          if (result && result.new_value !== undefined) {
            data[name] = result.new_value;
          }
        });

        localStorage.setItem(AI_HAPPINESS_KEY, JSON.stringify(data));
        localStorage.setItem(LAST_PROCESSED_HAPPINESS_KEY, dateStr);
        window.dispatchEvent(new Event('ai_happiness_updated'));
        console.log(`[AI Happiness] Global Batch update complete for ${batchPackets.length} countries.`);
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
    const data = aiHappinessStorage.initialize();
    data[countryNameEn] = Math.max(0, Math.min(100, newValue));
    localStorage.setItem(AI_HAPPINESS_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event('ai_happiness_updated'));
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AI_HAPPINESS_KEY);
    localStorage.removeItem(LAST_PROCESSED_HAPPINESS_KEY);
  }
};
