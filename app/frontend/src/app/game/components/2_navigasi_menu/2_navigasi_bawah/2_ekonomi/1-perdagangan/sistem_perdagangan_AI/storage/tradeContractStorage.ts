/**
 * Trade Contract Storage
 * Menyimpan kontrak dagang jangka panjang antara AI dan user.
 */

export interface TradeContract {
  id: string;
  type: 'trade_contract';
  country: string;
  countryLabel: string;
  commodity: string;
  commodityLabel: string;
  direction: 'ai_sells' | 'ai_buys';
  amountPerMonth: number;
  pricePerUnit: number;
  durationMonths: number;
  remainingMonths: number;
  status: 'pending' | 'active' | 'rejected' | 'completed' | 'cancelled';
  dayCreated: number;
  dayActivated?: number;
  lastProcessedMonth?: number;
}

const STORAGE_KEY = 'em4_trade_contracts';

export const tradeContractStorage = {
  clear: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new Event('ai_trade_updated'));
    }
  },

  getContracts: (): TradeContract[] => {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveContracts: (contracts: TradeContract[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contracts));
    window.dispatchEvent(new Event('ai_trade_updated'));
  },

  addContract: (contract: TradeContract) => {
    const contracts = tradeContractStorage.getContracts();
    if (contracts.some(c => c.id === contract.id)) return;
    contracts.unshift(contract);
    tradeContractStorage.saveContracts(contracts);
  },

  addContracts: (newContracts: TradeContract[]) => {
    const contracts = tradeContractStorage.getContracts();
    const existingIds = new Set(contracts.map(c => c.id));
    const uniqueNew = newContracts.filter(c => !existingIds.has(c.id));
    if (uniqueNew.length > 0) {
      tradeContractStorage.saveContracts([...uniqueNew, ...contracts]);
    }
  },

  updateStatus: (contractId: string, status: TradeContract['status']) => {
    const contracts = tradeContractStorage.getContracts();
    const updated = contracts.map(c => {
      if (c.id === contractId) {
        const patch: Partial<TradeContract> = { status };
        if (status === 'active') patch.dayActivated = Date.now();
        return { ...c, ...patch };
      }
      return c;
    });
    tradeContractStorage.saveContracts(updated);
  },

  processMonthlyDelivery: (contractId: string) => {
    const contracts = tradeContractStorage.getContracts();
    const updated = contracts.map(c => {
      if (c.id === contractId && c.status === 'active' && c.remainingMonths > 0) {
        const remaining = c.remainingMonths - 1;
        return {
          ...c,
          remainingMonths: remaining,
          status: remaining <= 0 ? 'completed' as const : c.status,
          lastProcessedMonth: Date.now()
        };
      }
      return c;
    });
    tradeContractStorage.saveContracts(updated);
  },

  getPendingContracts: (): TradeContract[] => {
    return tradeContractStorage.getContracts().filter(c => c.status === 'pending');
  },

  getActiveContracts: (): TradeContract[] => {
    return tradeContractStorage.getContracts().filter(c => c.status === 'active');
  },

  getPendingCount: (): number => {
    return tradeContractStorage.getPendingContracts().length;
  }
};
