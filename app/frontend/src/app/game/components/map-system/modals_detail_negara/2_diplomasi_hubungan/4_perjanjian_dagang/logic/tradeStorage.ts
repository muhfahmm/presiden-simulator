import { getInitialAgreements } from "@/app/database/data/database_mitra_perdagangan/agreementsRegistry";

export type TradeStatus = 'active' | 'none';

const STORAGE_KEY = "em2_trade_agreements";

export const tradeStorage = {
  getTradeStatus: (userCountry: string, targetCountry: string): TradeStatus => {
    // 1. Check persistent storage first
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        if (data[targetCountry.toLowerCase()] === 'active') return 'active';
      }
    }

    // 2. Check initial database
    // Check target's agreements to see if user is a partner
    const targetAgreements = getInitialAgreements(targetCountry, targetCountry);
    const isPartnerAtTarget = targetAgreements.some(a => 
      a.mitra?.toLowerCase() === userCountry.toLowerCase() && 
      a.type === 'Perdagangan' && 
      a.status === 'Aktif'
    );

    if (isPartnerAtTarget) return 'active';

    // Also check user's agreements to see if target is a partner
    const userAgreements = getInitialAgreements(userCountry, userCountry);
    const isPartnerAtUser = userAgreements.some(a => 
      a.mitra?.toLowerCase() === targetCountry.toLowerCase() && 
      a.type === 'Perdagangan' && 
      a.status === 'Aktif'
    );

    if (isPartnerAtUser) return 'active';

    return 'none';
  },

  updateTradeStatus: (targetCountry: string, status: TradeStatus) => {
    if (typeof window === 'undefined') return;
    
    const stored = localStorage.getItem(STORAGE_KEY);
    const data = stored ? JSON.parse(stored) : {};
    
    data[targetCountry.toLowerCase()] = status;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    
    // Trigger event for UI reactivity
    window.dispatchEvent(new CustomEvent("trade_status_updated", { detail: { targetCountry, status } }));
  }
};
