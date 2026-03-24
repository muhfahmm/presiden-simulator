import { gameStorage } from "../../../gamestorage";
import { countries } from "../../../../select-country/data/countries";
import { CountryData } from "../../../../select-country/data/types";

const TRADE_STORAGE_KEY = "game_trades";

export const tradeStorage = {
  getSession: () => {
    if (typeof window === 'undefined') return null;
    return gameStorage.getSession();
  },

  getCurrentCountry: (session: any): CountryData => {
    return countries.find((c: CountryData) => c.name_en === session?.country) || countries[0];
  },

  saveTrade: (countryName: string, tradeData: any) => {
    if (typeof window === 'undefined') return;
    const allTrades = tradeStorage.getAllTrades();
    allTrades[countryName] = tradeData;
    localStorage.setItem(TRADE_STORAGE_KEY, JSON.stringify(allTrades));
  },

  getTrade: (countryName: string): any | null => {
    if (typeof window === 'undefined') return null;
    const allTrades = tradeStorage.getAllTrades();
    return allTrades[countryName] || null;
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
