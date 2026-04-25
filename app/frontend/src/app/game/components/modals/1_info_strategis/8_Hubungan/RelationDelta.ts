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
    if (typeof window === "undefined") return 0;
    const data = relationDeltaStorage.getDeltaData();
    const key = targetCountry.toLowerCase().trim();
    return data[key] || 0;
  },

  updateDeltas: (deltas: Record<string, number>) => {
    if (typeof window === "undefined") return;
    const data = relationDeltaStorage.getDeltaData();
    const updatedData = { ...data, ...deltas };
    localStorage.setItem(RELATION_DELTA_STORAGE_KEY, JSON.stringify(updatedData));
    window.dispatchEvent(new Event("relation_delta_updated"));
  },

  /**
   * Menghitung delta dengan membandingkan matriks lama dan baru
   */
  updateFromMatrix: (oldMatrix: any, newMatrix: any, userCountryId: string) => {
    if (typeof window === "undefined" || !oldMatrix || !newMatrix) return;
    
    const deltas: Record<string, number> = {};
    const uId = userCountryId.toLowerCase().trim();

    if (newMatrix[uId]) {
      Object.keys(newMatrix[uId]).forEach(targetId => {
        const oldScore = oldMatrix[uId]?.[targetId]?.s ?? 50;
        const newScore = newMatrix[uId][targetId].s;
        if (oldScore !== newScore) {
          deltas[targetId.toLowerCase().trim()] = Number((newScore - oldScore).toFixed(2));
        }
      });
    }

    if (Object.keys(deltas).length > 0) {
      relationDeltaStorage.updateDeltas(deltas);
    }
  },

  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(RELATION_DELTA_STORAGE_KEY);
    window.dispatchEvent(new Event("relation_delta_updated"));
  }
};
