"use client"

/**
 * RelationDelta.ts
 * Penyimpanan Delta (Perubahan) Skor Hubungan Diplomatik
 * Menyimpan persentase perubahan harian untuk ditampilkan di UI.
 */

const RELATION_DELTA_STORAGE_KEY = "em_relation_deltas";

export const relationDeltaStorage = {
  getDeltaData: (): Record<string, number> => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem(RELATION_DELTA_STORAGE_KEY);
    if (!stored) return {};
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse relation delta storage", e);
      return {};
    }
  },

  getDelta: (targetCountry: string): number => {
    const data = relationDeltaStorage.getDeltaData();
    const key = targetCountry.toLowerCase().trim();
    return data[key] || 0;
  },

  updateDeltas: (deltas: Record<string, number>) => {
    if (typeof window === "undefined") return;
    const data = relationDeltaStorage.getDeltaData();
    
    // Merge or overwrite with new deltas
    const updatedData = { ...data, ...deltas };
    
    localStorage.setItem(RELATION_DELTA_STORAGE_KEY, JSON.stringify(updatedData));
    
    // Dispatch event to notify UI
    window.dispatchEvent(new CustomEvent("relation_deltas_updated"));
  },

  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(RELATION_DELTA_STORAGE_KEY);
  }
};
