import { countries } from "../select-country/data/countries";

const STORAGE_KEY = "game_session";

export interface GameSession {
  country: string;
  startTime: number;
  isWelcomeSeen: boolean;
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
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    localStorage.setItem("selectedCountry", country);
    localStorage.removeItem("em4_game_date"); // Reset date for new game
    localStorage.removeItem("em4_budget_data");
    localStorage.removeItem("em4_building_data");
    localStorage.removeItem("em4_inbox_data");
    
    // Clear trade agreements for all potential countries
    const countriesList = ["Indonesia", "Amerika Serikat", "Singapura", "Rusia", "Cina", "Arab Saudi"];
    countriesList.forEach(c => localStorage.removeItem(`em4_trade_agreements_${c}`));
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
    localStorage.removeItem("selectedCountry");
    localStorage.removeItem("em4_game_date");
    localStorage.removeItem("em4_budget_data");
    localStorage.removeItem("em4_building_data");
    localStorage.removeItem("em4_inbox_data");
    
    // Clear trade agreements (TradeStorage uses country name)
    const countries = ["Indonesia", "Amerika Serikat", "Singapura", "Rusia", "Cina", "Arab Saudi"];
    countries.forEach(c => localStorage.removeItem(`em4_trade_agreements_${c}`));
    
    window.location.href = '/select-country';
  },
};
