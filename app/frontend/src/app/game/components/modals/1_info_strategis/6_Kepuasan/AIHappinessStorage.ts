"use client"

import { countries } from "@/app/database/data/negara/benua/index";

const AI_HAPPINESS_KEY = "em_ai_happiness";
const LAST_PROCESSED_HAPPINESS_KEY = "em_ai_last_happiness_update";

import { aiRootCauseStorage } from "./socialDiagnosisStorage";

export interface AIHappinessData {
  [countryNameEn: string]: number;
}

// High-performance in-memory cache
let memoryCache: AIHappinessData | null = null;
let saveTimeout: NodeJS.Timeout | null = null;

export const aiHappinessStorage = {
  /**
   * Get all happiness data, initializing from memory cache or database.
   */
  getAll: (): AIHappinessData => {
    if (typeof window === 'undefined') return {};
    if (memoryCache) return memoryCache;
    
    const isFreshSession = typeof window !== 'undefined' && localStorage.getItem("em_fresh_session") === "true";
    
    if (!isFreshSession) {
      const stored = localStorage.getItem(AI_HAPPINESS_KEY);
      if (stored && stored !== 'undefined' && stored !== 'null') {
        try {
          memoryCache = JSON.parse(stored);
          if (memoryCache && Object.keys(memoryCache).length > 0) return memoryCache;
        } catch (e) {
          console.error("Failed to parse AI happiness", e);
        }
      }
    }

    // Default to 55%
    memoryCache = aiHappinessStorage.resetToDefault();
    return memoryCache;
  },

  /**
   * Internal helper to save to localStorage with debouncing (every 5 seconds)
   */
  _saveToDisk: (force: boolean = false) => {
    if (!memoryCache || typeof window === 'undefined') return;
    
    if (saveTimeout && !force) return; // Wait for existing timeout
    
    const performSave = () => {
        localStorage.setItem(AI_HAPPINESS_KEY, JSON.stringify(memoryCache));
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
   * Reset all AI happiness levels to default (55%).
   */
  resetToDefault: (): AIHappinessData => {
    if (typeof window === 'undefined') return {};
    
    const initialData: AIHappinessData = {};
    countries.forEach(c => {
      initialData[c.name_en] = 55.0;
    });

    memoryCache = initialData;
    aiHappinessStorage._saveToDisk(true); // Force save
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
      /* 
      // LEGACY: Broken relative path fetch
      const response = await fetch("/game/components/AI_logic/1_AI_Kepuasan/routes/1_statistik_kepuasan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(batchPackets)
      });

      const results = await response.json();
      */
      const results: any = null; // Backend handles this via syncFromBackend now

      if (results && !results.error) {
        Object.entries(results).forEach(([name, result]: [string, any]) => {
          if (result && result.new_value !== undefined) {
            data[name] = result.new_value;
            
            // Save Root Cause Diagnosis
            if (result.root_cause) {
                aiRootCauseStorage.saveDiagnosis(name, result.root_cause, result.suggested_action || "none");
            }
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
    const data = aiHappinessStorage.getAll();
    data[countryNameEn] = Math.max(0, Math.min(100, newValue));
    aiHappinessStorage._saveToDisk();
    window.dispatchEvent(new Event('ai_happiness_updated'));
  },

  /**
   * Lightweight daily happiness decay for all AI nations.
   * Called by useAIGameSync on every game day.
   * Uses small random fluctuation to simulate realistic happiness drift.
   */
  dailyDecay: (dateStr: string, userCountryEn: string) => {
    if (typeof window === 'undefined') return;

    const lastProcessed = localStorage.getItem(LAST_PROCESSED_HAPPINESS_KEY);
    if (lastProcessed === dateStr) return;

    const data = aiHappinessStorage.getAll();
    let hasChanged = false;

    // Simple seeded random from dateStr for deterministic results per day
    const seed = dateStr.split('-').reduce((a, b) => a + parseInt(b), 0);

    Object.keys(data).forEach((name, idx) => {
      // Skip user country
      if (name === userCountryEn) return;

      const current = data[name] || 55.0;

      // Small daily fluctuation: -0.15% to +0.05% (slight decay bias)
      // This creates ~1-3% decay per month, matching the Go server's player decay rate
      const noise = Math.sin(seed * 0.1 + idx * 0.7) * 0.1;
      const decay = -0.05 + noise; // ranges from -0.15 to +0.05

      let newVal = current + decay;
      newVal = Math.max(15, Math.min(95, newVal)); // clamp
      newVal = Math.round(newVal * 10) / 10; // 1 decimal

      data[name] = newVal;
      hasChanged = true;
    });

    if (hasChanged) {
      localStorage.setItem(LAST_PROCESSED_HAPPINESS_KEY, dateStr);
      aiHappinessStorage._saveToDisk();
      window.dispatchEvent(new Event('ai_happiness_updated'));
    }
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    aiHappinessStorage.resetToDefault();
    window.dispatchEvent(new Event('ai_happiness_updated'));
  },

  /**
   * Sync all NPC happiness scores from backend data.
   * This makes the Go server the single source of truth.
   */
  syncFromBackend: (npcStates: Record<string, any>) => {
    if (typeof window === 'undefined' || !npcStates) return;

    const currentData = aiHappinessStorage.getAll();
    let hasChanged = false;

    Object.keys(npcStates).forEach(nationName => {
      const state = npcStates[nationName];
      if (state && typeof state.happiness === 'number') {
        const serverHappy = state.happiness;
        
        // Only update if value is different
        if (currentData[nationName] !== serverHappy) {
          currentData[nationName] = serverHappy;
          hasChanged = true;
        }
      }
    });

    if (hasChanged) {
      aiHappinessStorage._saveToDisk();
      window.dispatchEvent(new Event('ai_happiness_updated'));
    }
  }
};
