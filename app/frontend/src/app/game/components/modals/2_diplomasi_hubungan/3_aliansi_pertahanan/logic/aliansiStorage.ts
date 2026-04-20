import { getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

export type AliansiStatus = 'none' | 'proposed' | 'active';

export interface AliansiData {
  status: AliansiStatus;
  startDate?: string; // ISO String
  endDate?: string;   // ISO String
  durationYears?: number;
  perks?: {
    militaryAid: boolean;
    jointExercise: boolean;
    intelSharing: boolean;
  };
}

const ALIANSI_STORAGE_KEY = "em2_aliansi_status_v1";

export const aliansiStorage = {
  getData: (): Record<string, AliansiData> => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem(ALIANSI_STORAGE_KEY);
    if (!stored) return {};
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse aliansi storage", e);
      return {};
    }
  },

  getDetails: (targetCountry: string): AliansiData => {
    const key = targetCountry.toLowerCase().trim();
    const data = aliansiStorage.getData();
    let details = data[key] || { status: 'none' };

    // Auto-expiry check
    if (details.status === 'active' && details.endDate) {
      const currentGameDate = getStoredGameDate();
      const endDate = new Date(details.endDate);
      
      if (currentGameDate >= endDate) {
        // Expired!
        details = { status: 'none' };
        data[key] = details;
        if (typeof window !== "undefined") {
          localStorage.setItem(ALIANSI_STORAGE_KEY, JSON.stringify(data));
          window.dispatchEvent(new CustomEvent("aliansi_updated", { detail: { targetCountry: key, details } }));
        }
      }
    }

    return details;
  },

  getStatus: (targetCountry: string): AliansiStatus => {
    return aliansiStorage.getDetails(targetCountry).status;
  },

  getRemainingDays: (targetCountry: string): number | null => {
    const details = aliansiStorage.getDetails(targetCountry);
    if (details.status !== 'active' || !details.endDate) return null;

    const currentGameDate = getStoredGameDate();
    const endDate = new Date(details.endDate);
    
    const diffTime = endDate.getTime() - currentGameDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return Math.max(0, diffDays);
  },

  updateStatus: (targetCountry: string, details: AliansiData) => {
    if (typeof window === "undefined") return;
    const data = aliansiStorage.getData();
    const key = targetCountry.toLowerCase().trim();
    data[key] = details;
    localStorage.setItem(ALIANSI_STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent("aliansi_updated", { detail: { targetCountry: key, details } }));
  },

  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(ALIANSI_STORAGE_KEY);
    window.dispatchEvent(new Event("aliansi_updated"));
  }
};
