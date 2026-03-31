"use client"

/**
 * Penyimpanan Skor Hubungan Diplomatik yang Dinamis
 * Menyimpan perubahan skor hubungan di localStorage untuk kegigihan sesi game.
 */

const RELATION_STORAGE_KEY = "em2_relation_scores";

export const relationStorage = {
  getRelationData: (): Record<string, number> => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem(RELATION_STORAGE_KEY);
    if (!stored) return {};
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse relation storage", e);
      return {};
    }
  },

  getRelationScore: (targetCountry: string, baseScore: number): number => {
    const data = relationStorage.getRelationData();
    // Return stored score if exists, else fallback to base score from database
    return data[targetCountry] !== undefined ? data[targetCountry] : baseScore;
  },

  updateRelationScore: (targetCountry: string, delta: number, currentBase: number) => {
    if (typeof window === "undefined") return;
    const data = relationStorage.getRelationData();
    const currentScore = relationStorage.getRelationScore(targetCountry, currentBase);
    
    // Calculate new score, potentially clamped between 0 and 100
    const newScore = Math.max(0, Math.min(100, currentScore + delta));
    
    data[targetCountry] = newScore;
    localStorage.setItem(RELATION_STORAGE_KEY, JSON.stringify(data));
    
    // Dispatch event to notify UI components
    window.dispatchEvent(new CustomEvent("relation_status_updated", { 
      detail: { targetCountry, newScore } 
    }));
  },

  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(RELATION_STORAGE_KEY);
  }
};
