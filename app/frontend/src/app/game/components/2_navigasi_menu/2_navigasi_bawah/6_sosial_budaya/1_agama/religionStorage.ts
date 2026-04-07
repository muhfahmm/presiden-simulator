"use client"

/**
 * Penyimpanan Status Religi Nasional
 * Mengelola perubahan religi di localStorage untuk sinkronisasi antar sesi.
 */

const RELIGION_STORAGE_KEY = "em2_national_religion";

export const religionStorage = {
  /**
   * Mengambil data religi dari localStorage.
   */
  getStoredReligion: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(RELIGION_STORAGE_KEY);
  },

  /**
   * Mengambil religi saat ini dengan fallback ke data profil negara.
   */
  getCurrentReligion: (fallbackReligion: string): string => {
    const stored = religionStorage.getStoredReligion();
    return stored || fallbackReligion;
  },

  /**
   * Memperbarui religi nasional dan mengirim event sinkronisasi.
   */
  setReligion: (newReligion: string) => {
    if (typeof window === "undefined") return;
    
    localStorage.setItem(RELIGION_STORAGE_KEY, newReligion);
    
    // Dispatch event agar komponen React dapat merespon perubahan
    window.dispatchEvent(new CustomEvent("religion_updated", { 
      detail: { religion: newReligion } 
    }));
    
    // Log info untuk debugging
    console.log(`[ReligionStorage] National religion updated to: ${newReligion}`);
  },

  /**
   * Menghapus status religi nasional (digunakan saat restart game).
   */
  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(RELIGION_STORAGE_KEY);
    console.log(`[ReligionStorage] National religion storage cleared.`);
  }
};
