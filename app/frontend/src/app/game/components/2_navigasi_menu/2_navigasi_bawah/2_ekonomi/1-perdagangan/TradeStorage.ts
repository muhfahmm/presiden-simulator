import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { historiImportStorage } from "./ekspor_impor/impor/HistoriImportStorage";
import { historiEksporStorage } from "./ekspor_impor/ekspor/HistoriEksporStorage";
import { importStockStorage } from "./ImportStockStorage";

const TRADE_STORAGE_KEY = "game_trades";
const TRANSACTIONS_KEY = "active_trade_transactions";

export const tradeStorage = {
  clear: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("game_trades");
      const countriesList = ["Indonesia", "Amerika Serikat", "Singapura", "Rusia", "Cina", "Arab Saudi"];
      countriesList.forEach(c => localStorage.removeItem(`em_trade_agreements_${c}`));
      
      // Reset trade histories
      historiImportStorage.clearHistory();
      historiEksporStorage.clearHistory();
      importStockStorage.clear();
      // Reset active transactions (clears the flying planes/ships)
      localStorage.removeItem(TRANSACTIONS_KEY);

      // Notify UI listeners for real-time synchronization
      window.dispatchEvent(new CustomEvent('trade_storage_updated'));
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

    // Notify UI listeners (like the map) for real-time synchronization
    window.dispatchEvent(new CustomEvent('trade_storage_updated'));
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
  },

  // --- Active Transactions (For Map Visuals) ---
  addTransaction: (tx: { 
    source: string, 
    dest: string, 
    type: 'buy' | 'sell',
    commodity?: string,
    amount?: number,
    unit?: string,
    totalDays?: number,
    startDate?: string | Date // Synchronized with game time
  }) => {
    if (typeof window === 'undefined') return;
    const txs = tradeStorage.getActiveTransactions();
    // Add unique transaction with timestamp and random factor to prevent collisions
    const normalize = (name: string) => name.toLowerCase().trim() === "philippines" ? "Filipina" : name.trim();
    const newTx = { 
        ...tx, 
        source: normalize(tx.source),
        dest: normalize(tx.dest),
        id: Date.now() + Math.floor(Math.random() * 1000000), 
        timestamp: Date.now(),
        startDate: tx.startDate || getStoredGameDate()
    };
    const updated = [...txs, newTx];
    localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('trade_storage_updated'));
  },

  getActiveTransactions: (): any[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(TRANSACTIONS_KEY);
    return data ? JSON.parse(data) : [];
  },

  removeTransaction: (id: number) => {
    if (typeof window === 'undefined') return;
    const txs = tradeStorage.getActiveTransactions();
    const updated = txs.filter(t => t.id !== id);
    localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('trade_storage_updated'));
  },

  clearTransactions: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(TRANSACTIONS_KEY);
    window.dispatchEvent(new CustomEvent('trade_storage_updated'));
  }
};

