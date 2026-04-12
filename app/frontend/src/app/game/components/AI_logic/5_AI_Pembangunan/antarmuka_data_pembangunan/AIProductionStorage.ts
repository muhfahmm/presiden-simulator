"use client"

const AI_PRODUCTION_KEY = "em4_ai_production_data";

export interface AIProductionData {
  [countryNameEn: string]: {
    stock: Record<string, number>; // { "5_pabrik_semen": 100, "12_tambang_bijih_besi": 50, "6_penggergajian_kayu": 80 }
    lastUpdate: string;
  };
}

export const aiProductionStorage = {
  initialize: (): AIProductionData => {
    if (typeof window === 'undefined') return {};
    const stored = localStorage.getItem(AI_PRODUCTION_KEY);
    return stored ? JSON.parse(stored) : {};
  },

  getStocks: (countryNameEn: string) => {
    const global = aiProductionStorage.initialize();
    return global[countryNameEn]?.stock || {
      "5_pabrik_semen": 1000000,
      "12_tambang_bijih_besi": 1000000,
      "6_penggergajian_kayu": 1000000
    };
  },

  updateStocks: (countryNameEn: string, deltas: Record<string, number>, date: Date) => {
    if (typeof window === 'undefined') return;
    const global = aiProductionStorage.initialize();
    const current = aiProductionStorage.getStocks(countryNameEn);
    
    const newStock = { ...current };
    Object.entries(deltas).forEach(([key, val]) => {
      newStock[key] = (newStock[key] || 0) + val;
    });

    global[countryNameEn] = {
      stock: newStock,
      lastUpdate: date.toISOString().split('T')[0]
    };

    localStorage.setItem(AI_PRODUCTION_KEY, JSON.stringify(global));
    window.dispatchEvent(new Event('ai_production_updated'));
  },

  deductStocks: (countryNameEn: string, requirements: Record<string, number>) => {
    if (typeof window === 'undefined') return false;
    const global = aiProductionStorage.initialize();
    const current = aiProductionStorage.getStocks(countryNameEn);
    
    const newStock = { ...current };
    for (const [key, val] of Object.entries(requirements)) {
      if ((newStock[key] || 0) < val) return false;
      newStock[key] -= val;
    }

    // Ensure entry exists and update it
    global[countryNameEn] = {
      stock: newStock,
      lastUpdate: new Date().toISOString().split('T')[0]
    };
    
    localStorage.setItem(AI_PRODUCTION_KEY, JSON.stringify(global));
    window.dispatchEvent(new Event('ai_production_updated'));
    return true;
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AI_PRODUCTION_KEY);
    window.dispatchEvent(new Event('ai_production_updated'));
  }
};
