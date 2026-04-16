/**
 * Trade Agreement Storage
 * Menyimpan proposal perjanjian dagang dari negara AI ke user.
 * Negara yang belum bermitra (t=0) akan mengirim proposal ini.
 * Jika user terima → set t=1 di matrix (menjadi mitra dagang).
 */

export interface TradeAgreementProposal {
  id: string;
  type: 'trade_agreement_proposal';
  country: string;
  countryLabel: string;
  proposalType: 'comprehensive' | 'standard' | 'exploratory';
  score: number;
  topCommodities: string[];
  status: 'pending' | 'accepted' | 'rejected' | 'expired';
  dayCreated: number;
  expiryDays: number;
}

const STORAGE_KEY = 'em4_trade_agreement_proposals';

export const tradeAgreementStorage = {
  clear: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new Event('ai_trade_updated'));
    }
  },

  getProposals: (): TradeAgreementProposal[] => {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveProposals: (proposals: TradeAgreementProposal[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(proposals));
    window.dispatchEvent(new Event('ai_trade_updated'));
  },

  addProposal: (proposal: TradeAgreementProposal) => {
    const proposals = tradeAgreementStorage.getProposals();
    // Cegah duplikat ID
    if (proposals.some(p => p.id === proposal.id)) return;
    // Cegah duplikat negara yang masih pending
    if (proposals.some(p => p.country.toLowerCase() === proposal.country.toLowerCase() && p.status === 'pending')) return;
    proposals.unshift(proposal);
    tradeAgreementStorage.saveProposals(proposals);
  },

  addProposals: (newProposals: TradeAgreementProposal[]) => {
    const proposals = tradeAgreementStorage.getProposals();
    const existingIds = new Set(proposals.map(p => p.id));
    const existingPendingCountries = new Set(
      proposals.filter(p => p.status === 'pending').map(p => p.country.toLowerCase())
    );
    
    const uniqueNew = newProposals.filter(p => 
      !existingIds.has(p.id) && 
      !existingPendingCountries.has(p.country.toLowerCase())
    );
    
    if (uniqueNew.length > 0) {
      tradeAgreementStorage.saveProposals([...uniqueNew, ...proposals]);
    }
  },

  updateStatus: (proposalId: string, status: TradeAgreementProposal['status']) => {
    const proposals = tradeAgreementStorage.getProposals();
    const updated = proposals.map(p =>
      p.id === proposalId ? { ...p, status } : p
    );
    tradeAgreementStorage.saveProposals(updated);
  },

  expireProposals: (proposalIds: string[]) => {
    if (proposalIds.length === 0) return;
    const proposals = tradeAgreementStorage.getProposals();
    const idSet = new Set(proposalIds);
    const updated = proposals.map(p =>
      idSet.has(p.id) && p.status === 'pending' ? { ...p, status: 'expired' as const } : p
    );
    tradeAgreementStorage.saveProposals(updated);
  },

  getPendingProposals: (): TradeAgreementProposal[] => {
    return tradeAgreementStorage.getProposals().filter(p => p.status === 'pending');
  },

  getPendingCount: (): number => {
    return tradeAgreementStorage.getPendingProposals().length;
  }
};
