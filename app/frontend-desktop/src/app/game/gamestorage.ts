import { countries } from "../select-country/data/countries";

const STORAGE_KEY = "game_session";

export interface GameSession {
  country: string;
  startTime: number;
  isWelcomeSeen: boolean;
  constructionQueue: ConstructionItem[];
  buildingDeltas: Record<string, number>; // key: buildingKey, value: number of additional buildings
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
    const session: GameSession = {
      country,
      startTime: Date.now(),
      isWelcomeSeen: false,
      constructionQueue: [],
      buildingDeltas: {},
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    localStorage.setItem("selectedCountry", country);
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
      
      return session as GameSession;
    } catch (e) {
      console.error("Failed to parse game session", e);
      return null;
    }
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
    window.location.reload();
  },

  addToQueue: (item: Omit<ConstructionItem, "id">) => {
    if (typeof window === 'undefined') return;
    let session = gameStorage.getSession();
    
    if (!session) {
      const country = localStorage.getItem("selectedCountry") || "Indonesia";
      session = {
        country,
        startTime: Date.now(),
        isWelcomeSeen: true, // If they are in the game, they've seen it
        constructionQueue: [],
        buildingDeltas: {},
      };
    }

    if (!Array.isArray(session.constructionQueue)) {
      session.constructionQueue = [];
    }
    
    const newItem: ConstructionItem = {
      ...item,
      id: Math.random().toString(36).substr(2, 9)
    };
    
    session.constructionQueue.push(newItem);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return newItem;
  },

  removeFromQueue: (id: string) => {
    if (typeof window === 'undefined') return;
    const session = gameStorage.getSession();
    if (session) {
      const q = session.constructionQueue;
      const nextQ: ConstructionItem[] = [];
      
      if (Array.isArray(q)) {
        for (let i = 0; i < q.length; i++) {
          const item = q[i];
          if (item && item.id !== id) {
            nextQ.push(item);
          }
        }
      }
      
      session.constructionQueue = nextQ;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    }
  },

  incrementBuildingCount: (buildingKey: string) => {
    if (typeof window === 'undefined') return;
    let session = gameStorage.getSession();
    
    if (!session) {
      const country = localStorage.getItem("selectedCountry") || "Indonesia";
      session = {
        country,
        startTime: Date.now(),
        isWelcomeSeen: true,
        constructionQueue: [],
        buildingDeltas: {},
      };
    }
    
    if (!session.buildingDeltas || typeof session.buildingDeltas !== 'object') {
      session.buildingDeltas = {};
    }
    
    const currentCount = session.buildingDeltas[buildingKey] || 0;
    session.buildingDeltas[buildingKey] = (typeof currentCount === 'number' ? currentCount : 0) + 1;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  }
};
