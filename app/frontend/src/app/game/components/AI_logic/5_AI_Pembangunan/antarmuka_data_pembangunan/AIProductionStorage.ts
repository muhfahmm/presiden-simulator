"use client"

const AI_PRODUCTION_KEY = "em_ai_production_data";

export interface AIProductionData {
  [countryNameEn: string]: {
    stock: Record<string, number>; // { "5_pabrik_semen": 100, "12_tambang_bijih_besi": 50, "6_penggergajian_kayu": 80 }
    lastUpdate: string;
  };
}

export const aiProductionStorage = {
  initialize: (): AIProductionData => {
    if (typeof window === 'undefined') return {};
    
    const isFreshSession = typeof window !== 'undefined' && localStorage.getItem("em_fresh_session") === "true";
    if (isFreshSession) {
      console.log(`[AI PRODUCTION] Fresh session detected in initialize() - returning empty.`);
      return {};
    }

    const stored = localStorage.getItem(AI_PRODUCTION_KEY);
    return stored ? JSON.parse(stored) : {};
  },

  getStocks: (countryNameEn: string) => {
    const global = aiProductionStorage.initialize();
    return global[countryNameEn]?.stock || {
      "5_pabrik_semen": 0,
      "12_tambang_bijih_besi": 0,
      "6_penggergajian_kayu": 0,
      "4_smelter": 0
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

  /**
   * Bootstrap NPC stocks based on their initial infrastructure.
   * Prevents deadlock for rich nations at game start.
   */
  bootstrapNPCs: (allCountries: any[]) => {
    if (typeof window === 'undefined') return;
    const global = aiProductionStorage.initialize();
    let changed = false;

    allCountries.forEach(country => {
      const name = country.name_en;
      const current = global[name]?.stock || {};
      
      // If no stock record yet or essential materials are 0
      const needsBootstrap = !global[name] || 
        ((current["5_pabrik_semen"] || 0) === 0 && 
         (current["4_smelter"] || 0) === 0 && 
         (current["6_penggergajian_kayu"] || 0) === 0);

      if (needsBootstrap) {
        // Only bootstrap if they have factories in their data profile
        const hasFactories = country.sektor_manufaktur && (
          country.sektor_manufaktur.semen_beton > 0 || 
          country.sektor_manufaktur.smelter > 0 || 
          country.sektor_manufaktur.kayu > 0
        );

        if (hasFactories) {
          global[name] = {
            stock: {
              ...current,
              "5_pabrik_semen": 500000,
              "4_smelter": 100000,
              "6_penggergajian_kayu": 250000,
              "12_tambang_bijih_besi": 1000000
            },
            lastUpdate: new Date().toISOString().split('T')[0]
          };
          changed = true;
        }
      }
    });

    if (changed) {
      localStorage.setItem(AI_PRODUCTION_KEY, JSON.stringify(global));
      window.dispatchEvent(new Event('ai_production_updated'));
      console.log(`[AI BOOTSTRAP] Seeded materials for established nations.`);
    }
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AI_PRODUCTION_KEY);
    window.dispatchEvent(new Event('ai_production_updated'));
  }
};
