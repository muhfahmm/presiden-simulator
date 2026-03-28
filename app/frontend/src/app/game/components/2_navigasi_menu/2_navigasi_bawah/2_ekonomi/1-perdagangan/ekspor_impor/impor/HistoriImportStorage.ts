import { getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

const IMPORT_HISTORY_KEY = "em4_trade_history_import";

export interface TradeTransaction {
  id: string;
  type: 'impor';
  commodityKey: string;
  commodityName: string;
  amount: number;
  unit: string;
  pricePerUnit: number;
  totalPrice: number;
  partner: string;
  timestamp: string; // ISO string for sorting
  gameDate: string;  // Formatted game date e.g. 01-01-2026
}

export const historiImportStorage = {
  saveImport: (transaction: Omit<TradeTransaction, 'id' | 'type' | 'timestamp' | 'gameDate'>) => {
    if (typeof window === 'undefined') return;

    const history = historiImportStorage.getHistory();
    const gameDate = getStoredGameDate();
    
    const newTransaction: TradeTransaction = {
      ...transaction,
      id: Math.random().toString(36).substring(2, 11),
      type: 'impor',
      timestamp: new Date().toISOString(),
      gameDate: `${String(gameDate.getDate()).padStart(2, '0')}-${String(gameDate.getMonth() + 1).padStart(2, '0')}-${gameDate.getFullYear()}`
    };

    const updatedHistory = [newTransaction, ...history].slice(0, 100);
    localStorage.setItem(IMPORT_HISTORY_KEY, JSON.stringify(updatedHistory));
    
    window.dispatchEvent(new Event('import_history_updated'));
  },

  getHistory: (): TradeTransaction[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(IMPORT_HISTORY_KEY);
    if (!data) return [];
    try {
      return JSON.parse(data) || [];
    } catch (e) {
      console.error("Failed to parse import history", e);
      return [];
    }
  },

  clearHistory: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(IMPORT_HISTORY_KEY);
      window.dispatchEvent(new Event('import_history_updated'));
    }
  }
};
