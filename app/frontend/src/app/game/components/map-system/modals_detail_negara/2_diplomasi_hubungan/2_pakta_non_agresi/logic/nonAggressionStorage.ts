import { getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

export type NonAggressionStatus = 'none' | 'proposed' | 'active';

export interface NonAggressionData {
  status: NonAggressionStatus;
  startDate?: string; // ISO String
  endDate?: string;   // ISO String
  durationYears?: number;
  rules?: {
    ceasefire: boolean;
    dmz: boolean;
  };
}

const NON_AGGRESSION_STORAGE_KEY = "em2_non_aggression_status_v2";

export const nonAggressionStorage = {
  getData: (): Record<string, NonAggressionData> => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem(NON_AGGRESSION_STORAGE_KEY);
    if (!stored) return {};
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse non-aggression storage", e);
      return {};
    }
  },

  getDetails: (targetCountry: string): NonAggressionData => {
    const key = targetCountry.toLowerCase().trim();
    const data = nonAggressionStorage.getData();
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
          localStorage.setItem(NON_AGG_STORAGE_KEY_V2, JSON.stringify(data));
          window.dispatchEvent(new CustomEvent("non_aggression_updated", { detail: { targetCountry: key, details } }));
        }
      }
    }

    return details;
  },

  getRemainingDays: (targetCountry: string): number | null => {
    const details = nonAggressionStorage.getDetails(targetCountry);
    if (details.status !== 'active' || !details.endDate) return null;

    const currentGameDate = getStoredGameDate();
    const endDate = new Date(details.endDate);
    
    const diffTime = endDate.getTime() - currentGameDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return Math.max(0, diffDays);
  },

  getStatus: (targetCountry: string): NonAggressionStatus => {
    return nonAggressionStorage.getDetails(targetCountry).status;
  },

  updateStatus: (targetCountry: string, details: NonAggressionData) => {
    if (typeof window === "undefined") return;
    const data = nonAggressionStorage.getData();
    const key = targetCountry.toLowerCase().trim();
    data[key] = details;
    localStorage.setItem(NON_AGG_STORAGE_KEY_V2, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent("non_aggression_updated", { detail: { targetCountry: key, details } }));
  },

  // Perbarui status sederhana (mengatur data default)
  updateSimpleStatus: (targetCountry: string, status: NonAggressionStatus) => {
    nonAggressionStorage.updateStatus(targetCountry, { status });
  },

  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(NON_AGGRESSION_STORAGE_KEY);
    window.dispatchEvent(new Event("non_aggression_updated"));
  }
};

const NON_AGG_STORAGE_KEY_V2 = "em2_non_aggression_status_v2";
