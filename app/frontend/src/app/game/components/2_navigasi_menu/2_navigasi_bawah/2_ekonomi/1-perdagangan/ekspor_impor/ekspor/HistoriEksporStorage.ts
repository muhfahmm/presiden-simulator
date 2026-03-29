import { getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

const EXPORT_HISTORY_KEY = "em4_trade_history_export";

export interface TradeTransaction {
  id: string;
  type: 'ekspor';
  commodityKey: string;
  commodityName: string;
  amount: number;
  unit: string;
  pricePerUnit: number;
  totalPrice: number;
  partner: string;
  shippingTime: string;
  timestamp: string; // ISO string for sorting
  gameDate: string;  // Formatted game date e.g. 01-01-2026
  gameStartDateMs: number; // For synchronization with game clock
}

export const historiEksporStorage = {
  saveExport: (transaction: Omit<TradeTransaction, 'id' | 'type' | 'timestamp' | 'gameDate' | 'gameStartDateMs'>) => {
    if (typeof window === 'undefined') return;

    const history = historiEksporStorage.getHistory();
    const gameDate = getStoredGameDate();
    
    const newTransaction: TradeTransaction = {
      ...transaction,
      id: Math.random().toString(36).substring(2, 11),
      type: 'ekspor',
      timestamp: new Date().toISOString(),
      gameDate: `${String(gameDate.getDate()).padStart(2, '0')}-${String(gameDate.getMonth() + 1).padStart(2, '0')}-${gameDate.getFullYear()}`,
      gameStartDateMs: gameDate.getTime()
    };

    const updatedHistory = [newTransaction, ...history].slice(0, 100);
    localStorage.setItem(EXPORT_HISTORY_KEY, JSON.stringify(updatedHistory));
    
    window.dispatchEvent(new Event('export_history_updated'));
  },

  getHistory: (): TradeTransaction[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(EXPORT_HISTORY_KEY);
    if (!data) return [];
    try {
      return JSON.parse(data) || [];
    } catch (e) {
      console.error("Failed to parse export history", e);
      return [];
    }
  },

  clearHistory: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(EXPORT_HISTORY_KEY);
      window.dispatchEvent(new Event('export_history_updated'));
    }
  }
};
