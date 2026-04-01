const PLAYER_MILITARY_STORAGE_KEY = "em4_player_military_deductions";

export interface PlayerMilitaryDeductions {
  [unitKey: string]: number;
}

export const playerMilitaryStorage = {
  // Get all deductions
  getDeductions: (): PlayerMilitaryDeductions => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem(PLAYER_MILITARY_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  },

  // Add a deduction (negative means sending more aid)
  addDeduction: (unitKey: string, count: number) => {
    if (typeof window === "undefined") return;
    
    const deductions = playerMilitaryStorage.getDeductions();
    deductions[unitKey] = (deductions[unitKey] || 0) + count;
    
    localStorage.setItem(PLAYER_MILITARY_STORAGE_KEY, JSON.stringify(deductions));
    
    // Dispatch event for UI updates
    window.dispatchEvent(new Event("player_military_updated"));
  },

  // Clear deductions
  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(PLAYER_MILITARY_STORAGE_KEY);
    window.dispatchEvent(new Event("player_military_updated"));
  }
};
