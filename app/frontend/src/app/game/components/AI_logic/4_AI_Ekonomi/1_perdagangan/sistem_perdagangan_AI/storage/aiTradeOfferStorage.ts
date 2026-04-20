/**
 * AI Trade Offer Storage
 * Menyimpan tawaran produk & permintaan pembelian dari AI ke user.
 */

export interface AiTradeOffer {
  id: string;
  type: 'product_offer' | 'purchase_request';
  country: string;
  countryLabel: string;
  commodity: string;
  commodityLabel: string;
  amount: number;
  pricePerUnit: number;
  marketPrice: number;
  discountPct?: number;  // Untuk product_offer
  premiumPct?: number;   // Untuk purchase_request
  urgency?: string;      // Untuk purchase_request
  expiryDays: number;
  status: 'pending' | 'accepted' | 'rejected' | 'expired';
  dayCreated: number;
}

const STORAGE_KEY = 'em_ai_trade_offers';

export const aiTradeOfferStorage = {
  clear: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new Event('ai_trade_updated'));
    }
  },

  getOffers: (): AiTradeOffer[] => {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveOffers: (offers: AiTradeOffer[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(offers));
    window.dispatchEvent(new Event('ai_trade_updated'));
  },

  addOffer: (offer: AiTradeOffer) => {
    const offers = aiTradeOfferStorage.getOffers();
    // Cegah duplikat ID
    if (offers.some(o => o.id === offer.id)) return;
    offers.unshift(offer);
    aiTradeOfferStorage.saveOffers(offers);
  },

  addOffers: (newOffers: AiTradeOffer[]) => {
    const offers = aiTradeOfferStorage.getOffers();
    const existingIds = new Set(offers.map(o => o.id));
    const uniqueNew = newOffers.filter(o => !existingIds.has(o.id));
    if (uniqueNew.length > 0) {
      aiTradeOfferStorage.saveOffers([...uniqueNew, ...offers]);
    }
  },

  updateStatus: (offerId: string, status: AiTradeOffer['status']) => {
    const offers = aiTradeOfferStorage.getOffers();
    const updated = offers.map(o =>
      o.id === offerId ? { ...o, status } : o
    );
    aiTradeOfferStorage.saveOffers(updated);
  },

  expireOffers: (offerIds: string[]) => {
    if (offerIds.length === 0) return;
    const offers = aiTradeOfferStorage.getOffers();
    const idSet = new Set(offerIds);
    const updated = offers.map(o =>
      idSet.has(o.id) && o.status === 'pending' ? { ...o, status: 'expired' as const } : o
    );
    aiTradeOfferStorage.saveOffers(updated);
  },

  getPendingOffers: (): AiTradeOffer[] => {
    return aiTradeOfferStorage.getOffers().filter(o => o.status === 'pending');
  },

  getPendingProductOffers: (): AiTradeOffer[] => {
    return aiTradeOfferStorage.getOffers().filter(
      o => o.status === 'pending' && o.type === 'product_offer'
    );
  },

  getPendingPurchaseRequests: (): AiTradeOffer[] => {
    return aiTradeOfferStorage.getOffers().filter(
      o => o.status === 'pending' && o.type === 'purchase_request'
    );
  },

  getPendingCount: (): number => {
    return aiTradeOfferStorage.getPendingOffers().length;
  }
};
