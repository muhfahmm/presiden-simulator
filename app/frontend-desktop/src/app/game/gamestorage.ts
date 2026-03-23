import { countries } from "../select-country/data/countries";

const STORAGE_KEY = "game_session";

export interface GameSession {
  country: string;
  startTime: number;
  isWelcomeSeen: boolean;
  constructionQueue: ConstructionItem[];
  buildingDeltas: Record<string, number>; // key: buildingKey, value: number of additional buildings
  cumulativeProduction: Record<string, number>; // key: buildingKey, value: total production so far
  budget: number; // in Trillion (T)
}

export interface ConstructionItem {
  id: string;
  buildingKey: string;
  label: string;
  sector: string;
  startDate: number;
  endDate: number;
  buildTime: number;
}

export const gameStorage = {
  saveSession: (country: string) => {
    if (typeof window === 'undefined') return;
    const countryData = countries.find(c => c.name_id === country || c.name_en === country) || countries[0];
    const initialBudget = typeof countryData.budget === 'number' ? countryData.budget / 1000000000 : 1240.5;

    const session: GameSession = {
      country,
      startTime: Date.now(),
      isWelcomeSeen: false,
      constructionQueue: [],
      buildingDeltas: {},
      cumulativeProduction: {},
      budget: initialBudget,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    localStorage.setItem("selectedCountry", country);
    localStorage.removeItem("em4_game_date"); // Reset date for new game
  },

  getSession: (): GameSession | null => {
    if (typeof window === 'undefined') return null;
    const data = window.localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    try {
      const session = JSON.parse(data);
      if (!session || typeof session !== 'object') {
        return null;
      }
      
      // EXTREME DEFENSIVE INITIALIZATION
      if (!Array.isArray(session.constructionQueue)) {
        session.constructionQueue = [];
      }
      
      if (!session.buildingDeltas || typeof session.buildingDeltas !== 'object') {
        session.buildingDeltas = {};
      }

      if (!session.cumulativeProduction || typeof session.cumulativeProduction !== 'object') {
        session.cumulativeProduction = {};
      }

      if (typeof session.budget !== 'number') {
        const countryData = countries.find(c => c.name_id === session.country || c.name_en === session.country) || countries[0];
        session.budget = typeof countryData.budget === 'number' ? countryData.budget / 1000000000000 : 1240.5;
      }
      
      return session as GameSession;
    } catch (e) {
      console.error("Failed to parse game session", e);
      return null;
    }
  },

  hasActiveSession: (): boolean => {
    return gameStorage.getSession() !== null;
  },

  setWelcomeSeen: (seen: boolean) => {
    if (typeof window === 'undefined') return;
    const session = gameStorage.getSession();
    if (session) {
      session.isWelcomeSeen = seen;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    }
  },

  markWelcomeSeen: () => {
    gameStorage.setWelcomeSeen(true);
  },

  clearSession: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("em4_game_date");
    window.location.href = '/select-country';
  },

  addToQueue: (item: Omit<ConstructionItem, "id">) => {
    if (typeof window === 'undefined') return;
    let session = gameStorage.getSession();
    
    if (!session) {
      const country = typeof window !== 'undefined' ? (localStorage.getItem("selectedCountry") || "Indonesia") : "Indonesia";
      const countryData = countries.find(c => c.name_id === country || c.name_en === country) || countries[0];
      const initialBudget = typeof countryData.budget === 'number' ? countryData.budget / 1000000000 : 1240.5;

      session = {
        country,
        startTime: Date.now(),
        isWelcomeSeen: true,
        constructionQueue: [],
        buildingDeltas: {},
        cumulativeProduction: {},
        budget: initialBudget,
      };
    }

    const newItem: ConstructionItem = {
      ...item,
      id: Math.random().toString(36).substring(2, 11)
    };
    
    session.constructionQueue = [...(session.constructionQueue || []), newItem];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return newItem;
  },

  removeFromQueue: (id: string) => {
    if (typeof window === 'undefined') return;
    const session = gameStorage.getSession();
    if (session && session.constructionQueue) {
      session.constructionQueue = session.constructionQueue.filter(item => item && item.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    }
  },

  incrementBuildingCount: (buildingKey: string) => {
    if (typeof window === 'undefined') return;
    let session = gameStorage.getSession();
    
    if (!session) {
      const country = typeof window !== 'undefined' ? (localStorage.getItem("selectedCountry") || "Indonesia") : "Indonesia";
      const countryData = countries.find(c => c.name_id === country || c.name_en === country) || countries[0];
      const initialBudget = typeof countryData.budget === 'number' ? countryData.budget / 1000000000 : 1240.5;

      session = {
        country,
        startTime: Date.now(),
        isWelcomeSeen: true,
        constructionQueue: [],
        buildingDeltas: {},
        cumulativeProduction: {},
        budget: initialBudget,
      };
    }
    
    if (!session.buildingDeltas || typeof session.buildingDeltas !== 'object') {
      session.buildingDeltas = {};
    }
    
    const currentCount = session.buildingDeltas[buildingKey] || 0;
    session.buildingDeltas[buildingKey] = (typeof currentCount === 'number' ? currentCount : 0) + 1;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  },

  // NEW: Update cumulative production for all sectors
  updateCumulativeProduction: (deltas: Record<string, number>) => {
    if (typeof window === 'undefined') return;
    const session = gameStorage.getSession();
    if (session) {
      if (!session.cumulativeProduction) session.cumulativeProduction = {};
      
      Object.entries(deltas).forEach(([key, amount]) => {
        const current = session.cumulativeProduction[key] || 0;
        session.cumulativeProduction[key] = current + amount;
      });
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    }
  },

  // NEW: Budget Management
  updateBudget: (delta: number) => {
    if (typeof window === 'undefined') return;
    const session = gameStorage.getSession();
    if (session) {
      session.budget = (session.budget || 0) + delta;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    }
  },

  getBudget: () => {
    const session = gameStorage.getSession();
    return session?.budget || 0;
  }
};
