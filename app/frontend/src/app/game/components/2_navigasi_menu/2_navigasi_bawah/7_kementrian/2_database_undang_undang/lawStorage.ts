"use client"

/**
 * Penyimpanan Status Undang-Undang (UU)
 * Mengelola status aktif/rancangan UU di localStorage.
 */

const LAW_STORAGE_KEY = "em2_national_laws";

export const lawStorage = {
  /**
   * Mengambil ID hukum yang sudah aktif.
   */
  getActiveLawIds: (): number[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(LAW_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  /**
   * Mengaktifkan hukum baru.
   */
  activateLaw: (lawId: number) => {
    if (typeof window === "undefined") return;
    
    const activeIds = lawStorage.getActiveLawIds();
    if (!activeIds.includes(lawId)) {
      const newActiveIds = [...activeIds, lawId];
      localStorage.setItem(LAW_STORAGE_KEY, JSON.stringify(newActiveIds));
      
      // Dispatch event agar UI dapat merespon
      window.dispatchEvent(new CustomEvent("law_activated", { 
        detail: { lawId } 
      }));
      
      console.log(`[LawStorage] Law ${lawId} activated.`);
    }
  },

  /**
   * Memeriksa apakah hukum tertentu aktif.
   */
  isLawActive: (lawId: number): boolean => {
    return lawStorage.getActiveLawIds().includes(lawId);
  }
};
