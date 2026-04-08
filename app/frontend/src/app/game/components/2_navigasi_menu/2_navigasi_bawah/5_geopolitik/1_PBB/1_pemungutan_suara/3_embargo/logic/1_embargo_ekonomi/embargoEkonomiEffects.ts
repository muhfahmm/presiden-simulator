/**
 * Fungsi untuk menghitung efek dari Embargo Ekonomi (Total Trade)
 * Mengisolasi negara target agar tidak bisa berdagang dengan negara sekutu
 * Warna mitra dagang berubah menjadi MERAH
 */

export interface TradePartnerStatus {
  countryName: string;
  status: 'normal' | 'sanctioned' | 'embargoed'; // normal (biru), sanctioned (kuning), embargoed (merah)
  reason?: string;
}

export interface EmbargoEkonomiEffect {
  name: string;
  description: string;
  effects: {
    tradeRevenueReduction: number;
    approvalRatingDailyLoss: number;
    tradePartnerIsolation: boolean;
    tradePartnerColorChange: 'red'; // Merah untuk embargo
  };
}

export const embargoEkonomiEffect: EmbargoEkonomiEffect = {
  name: 'Embargo Ekonomi (Total Trade)',
  description: 'Pemutusan total seluruh jalur perdagangan ekspor dan impor dengan dunia luar. Negara target diisolasi dari mitra dagangnya.',
  effects: {
    tradeRevenueReduction: 80,
    approvalRatingDailyLoss: 2,
    tradePartnerIsolation: true,
    tradePartnerColorChange: 'red',
  },
};

export function calculateEmbargoEkonomiEffect(): EmbargoEkonomiEffect {
  return embargoEkonomiEffect;
}

export function applyEmbargoEkonomiEffect(
  duration: string,
  targetCountry: string,
  tradePartners: string[],
  currentGameState: any
): any {
  const effect = calculateEmbargoEkonomiEffect();
  const durationDays = parseDuration(duration);

  const updatedState = { ...currentGameState };

  // Kurangi trade revenue drastis
  if (effect.effects.tradeRevenueReduction > 0) {
    updatedState.economy = {
      ...updatedState.economy,
      tradeRevenue: (updatedState.economy?.tradeRevenue || 0) * (1 - effect.effects.tradeRevenueReduction / 100),
      tradeRevenueReductionReason: 'Embargo Ekonomi aktif',
    };
  }

  // Dampak approval rating harian
  if (effect.effects.approvalRatingDailyLoss > 0) {
    updatedState.society = {
      ...updatedState.society,
      approvalRatingDailyLoss: effect.effects.approvalRatingDailyLoss,
      approvalRatingReason: 'Embargo Ekonomi - Kelangkaan barang konsumsi',
    };
  }

  // Isolasi mitra dagang - ubah warna menjadi merah
  if (effect.effects.tradePartnerIsolation) {
    updatedState.trade = {
      ...updatedState.trade,
      tradeBlocked: true,
      isolatedCountries: tradePartners,
      tradePartnerStatus: tradePartners.map(partner => ({
        countryName: partner,
        status: 'embargoed' as const,
        reason: `Embargo Ekonomi dari ${targetCountry}`,
      })),
    };
  }

  // Catat embargo yang aktif
  updatedState.embargoes = {
    ...updatedState.embargoes,
    ekonomi: {
      isActive: true,
      startDate: new Date(),
      durationDays,
      targetCountry,
      tradePartners,
      effects: effect.effects,
      appliedImmediately: true,
    },
  };

  return updatedState;
}

export function checkEmbargoEkonomiActive(currentGameState: any): boolean {
  return currentGameState.embargoes?.ekonomi?.isActive || false;
}

export function getTradePartnerStatus(
  currentGameState: any,
  countryName: string
): TradePartnerStatus | null {
  const tradeStatus = currentGameState.trade?.tradePartnerStatus;
  if (!tradeStatus) return null;

  return tradeStatus.find((p: TradePartnerStatus) => p.countryName === countryName) || null;
}

export function getTradePartnerColor(
  currentGameState: any,
  countryName: string
): 'blue' | 'yellow' | 'red' | 'normal' {
  const status = getTradePartnerStatus(currentGameState, countryName);

  if (!status) return 'normal'; // Biru (normal)

  switch (status.status) {
    case 'normal':
      return 'blue'; // Biru
    case 'sanctioned':
      return 'yellow'; // Kuning (Sanksi Ekonomi)
    case 'embargoed':
      return 'red'; // Merah (Embargo Ekonomi)
    default:
      return 'normal';
  }
}

export function removeEmbargoEkonomiEffect(currentGameState: any): any {
  const updatedState = { ...currentGameState };

  // Restore trade revenue
  if (updatedState.economy?.tradeRevenueReductionReason === 'Embargo Ekonomi aktif') {
    updatedState.economy = {
      ...updatedState.economy,
      tradeRevenue: (updatedState.economy?.tradeRevenue || 0) / (1 - embargoEkonomiEffect.effects.tradeRevenueReduction / 100),
      tradeRevenueReductionReason: null,
    };
  }

  // Restore trade partners
  if (updatedState.trade?.tradeBlocked) {
    updatedState.trade = {
      ...updatedState.trade,
      tradeBlocked: false,
      isolatedCountries: [],
      tradePartnerStatus: updatedState.trade?.tradePartnerStatus?.map((p: TradePartnerStatus) => ({
        ...p,
        status: 'normal' as const,
        reason: undefined,
      })) || [],
    };
  }

  // Restore approval rating
  if (updatedState.society?.approvalRatingReason === 'Embargo Ekonomi - Kelangkaan barang konsumsi') {
    updatedState.society = {
      ...updatedState.society,
      approvalRatingDailyLoss: 0,
      approvalRatingReason: null,
    };
  }

  // Hapus embargo
  updatedState.embargoes = {
    ...updatedState.embargoes,
    ekonomi: {
      isActive: false,
    },
  };

  return updatedState;
}

export function getEmbargoEkonomiDuration(currentGameState: any): number {
  return currentGameState.embargoes?.ekonomi?.durationDays || 0;
}

export function getEmbargoEkonomiRemainingDays(
  currentGameState: any,
  currentGameDay: number
): number {
  const embargo = currentGameState.embargoes?.ekonomi;
  if (!embargo?.isActive) return 0;

  const startDay = embargo.startDay || 0;
  const daysElapsed = currentGameDay - startDay;
  const daysRemaining = Math.max(0, embargo.durationDays - daysElapsed);

  return daysRemaining;
}

export function isCountryIsolated(
  currentGameState: any,
  countryName: string
): boolean {
  return currentGameState.embargoes?.ekonomi?.tradePartners?.includes(countryName) || false;
}

function parseDuration(duration: string): number {
  const durationMap: Record<string, number> = {
    '1 Bulan': 30,
    '3 Bulan': 90,
    '6 Bulan': 180,
    '9 Bulan': 270,
    '1 Tahun': 365,
  };
  return durationMap[duration] || 30;
}
