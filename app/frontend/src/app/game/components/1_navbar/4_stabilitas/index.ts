import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/countries/region/_index";

const STABILITY_STORAGE_KEY = "em4_stability_data";

export interface StabilityData {
  stability: number;
  lastUpdated: number;
}

export const stabilityStorage = {
  getData: (): StabilityData => {
    const defaults: StabilityData = {
      stability: 82, // Base stability fallback
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
        stability: 80, // Hardcoded baseline to match page.tsx initial state
        lastUpdated: Date.now()
      };
    }

    return defaults;
  },

  saveData: (data: StabilityData) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STABILITY_STORAGE_KEY, JSON.stringify({ ...data, lastUpdated: Date.now() }));
    window.dispatchEvent(new Event('stability_updated'));
  },

  getStability: (): number => {
    return stabilityStorage.getData().stability;
  },

  updateStability: (delta: number) => {
    const data = stabilityStorage.getData();
    data.stability = Math.max(0, Math.min(100, data.stability + delta));
    stabilityStorage.saveData(data);
    return data.stability;
  }
};

