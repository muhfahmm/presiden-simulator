"use client"

const STORAGE_KEY = "em_population_delta";

export const populationDeltaStorage = {
  getDelta: (): number => {
    if (typeof window === 'undefined') return 0;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? parseInt(stored, 10) : 0;
  },

  setDelta: (delta: number) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, delta.toString());
    window.dispatchEvent(new Event('population_delta_updated'));
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('population_delta_updated'));
  }
};
