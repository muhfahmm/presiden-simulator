"use client"

const STORAGE_KEY = "em_budget_delta";

export const budgetDeltaStorage = {
  getDelta: (): number => {
    if (typeof window === 'undefined') return 0;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? parseFloat(stored) : 0;
  },

  setDelta: (delta: number) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, delta.toString());
    window.dispatchEvent(new Event('budget_delta_updated'));
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('budget_delta_updated'));
  }
};
