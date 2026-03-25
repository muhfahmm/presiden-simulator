import { gameStorage } from "../../../gamestorage";
import { countries } from "../../../../select-country/data/countries";
import { CountryData } from "../../../../select-country/data/types";

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
    return gameStorage.getSession();
  },

  getCurrentCountry: (session: any): CountryData => {
    return countries.find((c: CountryData) => c.name_id === session?.country || c.name_en === session?.country) || countries[0];
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
