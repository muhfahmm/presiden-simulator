import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";

const STABILITY_STORAGE_KEY = "em_stability_data";

export interface StabilityData {
  stability: number;
  lastUpdated: number;
}

export const stabilityStorage = {
  getData: (): StabilityData => {
    const defaults: StabilityData = {
      stability: 50, // Base stability fallback
      lastUpdated: Date.now()
    };

    if (typeof window === 'undefined') return defaults;

    const stored = localStorage.getItem(STABILITY_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse stability storage", e);
      }
    }

    // Initialization fallback from session or country default
    const session = gameStorage.getSession() as any;
    if (session) {
      const countryName = session.country || "Indonesia";
      const countryData = countries.find(c => c.name_id === countryName || c.name_en === countryName);
      return {
        stability: 50, // Hardcoded baseline to match page.tsx initial state
        lastUpdated: Date.now()
      };
    }

    return defaults;
  },

  saveData: (data: StabilityData) => {
    if (typeof window === 'undefined') return;
    const value = JSON.stringify({ ...data, lastUpdated: Date.now() });
    
    try {
      localStorage.setItem(STABILITY_STORAGE_KEY, value);
    } catch (e) {
      console.warn("Stability storage full, attempting global cleanup", e);
      // Forced cleanup: trim large history keys to make room for critical status data
      try {
        // 1. Trim Inbox to 10
        let cleaned = false;
        const inbox = localStorage.getItem("em_inbox_data");
        if (inbox) {
          try {
            const parsed = JSON.parse(inbox);
            if (Array.isArray(parsed) && parsed.length > 10) {
              localStorage.setItem("em_inbox_data", JSON.stringify(parsed.slice(0, 10)));
              cleaned = true;
            }
          } catch {}
        }
        
        // 2. Trim News to 5
        const news = localStorage.getItem("em_global_news_v1");
        if (news) {
          try {
            const parsed = JSON.parse(news);
            if (Array.isArray(parsed) && parsed.length > 5) {
              localStorage.setItem("em_global_news_v1", JSON.stringify(parsed.slice(0, 5)));
              cleaned = true;
            }
          } catch {}
        }

        // Retry saving stability
        localStorage.setItem(STABILITY_STORAGE_KEY, value);
      } catch (e2) {
        console.warn("Global cleanup attempt failed, trying aggressive cleanup", e2);
        try {
          // More aggressive cleanup: clear news entirely
          localStorage.removeItem("em_global_news_v1");
          localStorage.setItem(STABILITY_STORAGE_KEY, value);
        } catch (e3) {
          console.error("Critical: Failed to save stability even after aggressive cleanup", e3);
        }
      }
    }
    
    setTimeout(() => window.dispatchEvent(new Event('stability_updated')), 0);
  },

  getStability: (): number => {
    return stabilityStorage.getData().stability;
  },

  updateStability: (delta: number) => {
    const data = stabilityStorage.getData();
    data.stability = Math.max(0, Math.min(100, data.stability + delta));
    stabilityStorage.saveData(data);
    return data.stability;
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STABILITY_STORAGE_KEY);
  },

  // Server-authoritative: set stability directly from Go Server
  setStabilityDirect: (value: number) => {
    stabilityStorage.saveData({
      stability: Math.max(0, Math.min(100, value)),
      lastUpdated: Date.now()
    });
  },

  /**
   * Mengintegrasikan seluruh faktor stabilitas harian.
   * Dipanggil secara periodik dari GameTimeControls.
   */
  applyDailyStabilityDecay: () => {
    if (typeof window === 'undefined') return;

    const { calculateStabilityDelta } = require("./StabilityDeltaLogic");
    const { gameStorage } = require("@/app/game/gamestorage");
    const { countries } = require("@/app/database/data/semua_fitur_negara/0_profiles/index");

    const data = stabilityStorage.getData();
    const session = gameStorage.getSession();
    const countryName = session?.country || "Indonesia";
    const country = countries.find((c: any) => c.name_id === countryName || c.name_en === countryName) || countries[0];

    // Gunakan orchestrator modular untuk menghitung delta harian
    const breakdown = calculateStabilityDelta(country, data.stability);
    
    if (breakdown.dailyDelta !== 0) {
      stabilityStorage.updateStability(breakdown.dailyDelta);
    }
  }
};


