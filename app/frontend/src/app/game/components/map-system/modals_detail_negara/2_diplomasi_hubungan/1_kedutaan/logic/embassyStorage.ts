export type EmbassyStatus = 'none' | 'building' | 'completed';

const EMBASSY_STORAGE_KEY = "em2_embassy_status";

export const embassyStorage = {
  getEmbassyData: (): Record<string, EmbassyStatus> => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem(EMBASSY_STORAGE_KEY);
    if (!stored) return {};
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse embassy storage", e);
      return {};
    }
  },

  getEmbassyStatus: (targetCountry: string): EmbassyStatus => {
    const key = targetCountry.toLowerCase().trim();
    return embassyStorage.getEmbassyData()[key] || 'none';
  },

  updateEmbassyStatus: (targetCountry: string, status: EmbassyStatus) => {
    if (typeof window === "undefined") return;
    const data = embassyStorage.getEmbassyData();
    const key = targetCountry.toLowerCase().trim();
    data[key] = status;
    localStorage.setItem(EMBASSY_STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent("embassy_status_updated", { detail: { targetCountry: key, status } }));
  },

  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(EMBASSY_STORAGE_KEY);
    window.dispatchEvent(new Event("embassy_status_updated"));
  }
};
