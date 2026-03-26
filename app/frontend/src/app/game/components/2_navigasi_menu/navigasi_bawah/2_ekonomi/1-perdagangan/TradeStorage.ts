import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/countries/region/_index";
import { CountryData } from "@/app/database/data/types/_index";

const TRADE_STORAGE_KEY = "game_trades";

export const tradeStorage = {
  clear: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("game_trades");
      const countriesList = ["Indonesia", "Amerika Serikat", "Singapura", "Rusia", "Cina", "Arab Saudi"];
      countriesList.forEach(c => localStorage.removeItem(`em4_trade_agreements_${c}`));
    }
  },
  getSession: () => {
    if (typeof window === 'undefined') return null;
    const data = window.localStorage.getItem("game_session");
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch (e) {
      return null;
    }
  },

  getCurrentCountry: (session: any): CountryData => {
    if (!session?.country) return countries[0];
    const searchName = session.country.toLowerCase().trim();
    return countries.find((c: CountryData) => 
      c.name_id.toLowerCase() === searchName || 
      c.name_en.toLowerCase() === searchName
    ) || countries[0];
  },

  saveTrade: (countryName: string, tradeData: any) => {
    if (typeof window === 'undefined') return;
    const key = countryName;
    const allTrades = tradeStorage.getAllTrades();
    allTrades[key] = tradeData;
    localStorage.setItem(TRADE_STORAGE_KEY, JSON.stringify(allTrades));
  },

  getTrade: (countryName: string): any | null => {
    if (typeof window === 'undefined') return null;
    const key = countryName;
    const allTrades = tradeStorage.getAllTrades();
    return allTrades[key] || null;
  },

  getAllTrades: (): Record<string, any> => {
    if (typeof window === 'undefined') return {};
    const data = localStorage.getItem(TRADE_STORAGE_KEY);
    if (!data) return {};
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Failed to parse trade storage", e);
      return {};
    }
  }
};

