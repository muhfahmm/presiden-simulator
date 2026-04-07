"use client"

/**
 * Penyimpanan Status Ideologi Nasional
 * Mengelola perubahan ideologi di localStorage untuk sinkronisasi antar sesi.
 */

const IDEOLOGY_STORAGE_KEY = "em2_national_ideology";

export const ideologyStorage = {
  /**
   * Mengambil data ideologi dari localStorage.
   */
  getStoredIdeology: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(IDEOLOGY_STORAGE_KEY);
  },

  /**
   * Mengambil ideologi saat ini dengan fallback ke data profil negara.
   */
  getCurrentIdeology: (fallbackIdeology: string): string => {
    const stored = ideologyStorage.getStoredIdeology();
    return stored || fallbackIdeology;
  },

  /**
   * Memperbarui ideologi nasional dan mengirim event sinkronisasi.
   */
  setIdeology: (newIdeology: string) => {
    if (typeof window === "undefined") return;
    
    localStorage.setItem(IDEOLOGY_STORAGE_KEY, newIdeology);
    
    // Dispatch event agar komponen React dapat merespon perubahan
    window.dispatchEvent(new CustomEvent("ideology_updated", { 
      detail: { ideology: newIdeology } 
    }));
    
    // Log info untuk debugging
    console.log(`[IdeologyStorage] National ideology updated to: ${newIdeology}`);
  }
};
