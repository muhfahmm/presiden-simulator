/**
 * Fungsi untuk menghitung efek dari Sanksi Ekonomi
 * Dapat dilakukan kapan saja tanpa perlu voting 30 hari
 */

export interface SanksiEkonomiEffect {
  name: string;
  description: string;
  effects: {
    revenueReduction: number;
    buildingCostIncrease: number;
    tradeImpact: number;
    approvalRatingImpact: number;
  };
}

export const sanksiEkonomiEffect: SanksiEkonomiEffect = {
  name: 'Sanksi Ekonomi (Economic Sanction)',
  description: 'Pembatasan akses keuangan dan pembekuan aset negara di bank internasional.',
  effects: {
    revenueReduction: 25,
    buildingCostIncrease: 15,
    tradeImpact: 20,
    approvalRatingImpact: -1,
  },
};

export function calculateSanksiEkonomiEffect(): SanksiEkonomiEffect {
  return sanksiEkonomiEffect;
}

export function applySanksiEkonomiEffect(
  duration: string,
  targetCountry: string,
  currentGameState: any,
  tradePartners?: string[]
): any {
  const effect = calculateSanksiEkonomiEffect();
  const durationDays = parseDuration(duration);

  const updatedState = { ...currentGameState };

  // Kurangi revenue
  if (effect.effects.revenueReduction > 0) {
    updatedState.economy = {
      ...updatedState.economy,
      dailyRevenue: (updatedState.economy?.dailyRevenue || 0) * (1 - effect.effects.revenueReduction / 100),
      revenueReductionReason: 'Sanksi Ekonomi aktif',
    };
  }

  // Naikkan biaya pembangunan
  if (effect.effects.buildingCostIncrease > 0) {
    updatedState.construction = {
      ...updatedState.construction,
      buildingCostMultiplier: (updatedState.construction?.buildingCostMultiplier || 1) * (1 + effect.effects.buildingCostIncrease / 100),
    };
  }

  // Dampak perdagangan - ubah warna mitra dagang menjadi kuning
  if (effect.effects.tradeImpact > 0) {
    updatedState.trade = {
      ...updatedState.trade,
      tradeEfficiency: (updatedState.trade?.tradeEfficiency || 100) * (1 - effect.effects.tradeImpact / 100),
      tradeRestricted: true,
      sanctionedCountry: targetCountry,
      tradePartnerStatus: (tradePartners || []).map(partner => ({
        countryName: partner,
        status: 'sanctioned' as const,
        reason: `Sanksi Ekonomi dari ${targetCountry}`,
      })),
    };
  }

  // Dampak approval rating
  if (effect.effects.approvalRatingImpact < 0) {
    updatedState.society = {
      ...updatedState.society,
      approvalRating: (updatedState.society?.approvalRating || 100) + effect.effects.approvalRatingImpact,
      approvalRatingReason: 'Dampak Sanksi Ekonomi',
    };
  }

  // Catat sanksi yang aktif
  updatedState.sanctions = {
    ...updatedState.sanctions,
    ekonomi: {
      isActive: true,
      startDate: new Date(),
      durationDays,
      targetCountry,
      tradePartners: tradePartners || [],
      effects: effect.effects,
      appliedImmediately: true, // Dapat dilakukan kapan saja
    },
  };

  return updatedState;
}

export function checkSanksiEkonomiActive(currentGameState: any): boolean {
  return currentGameState.sanctions?.ekonomi?.isActive || false;
}

export function removeSanksiEkonomiEffect(currentGameState: any): any {
  const updatedState = { ...currentGameState };

  // Restore revenue
  if (updatedState.economy?.revenueReductionReason === 'Sanksi Ekonomi aktif') {
    updatedState.economy = {
      ...updatedState.economy,
      dailyRevenue: (updatedState.economy?.dailyRevenue || 0) / (1 - sanksiEkonomiEffect.effects.revenueReduction / 100),
      revenueReductionReason: null,
    };
  }

  // Restore building cost
  if (updatedState.construction?.buildingCostMultiplier) {
    updatedState.construction = {
      ...updatedState.construction,
      buildingCostMultiplier: (updatedState.construction?.buildingCostMultiplier || 1) / (1 + sanksiEkonomiEffect.effects.buildingCostIncrease / 100),
    };
  }

  // Restore trade and trade partner colors
  if (updatedState.trade?.tradeRestricted) {
    updatedState.trade = {
      ...updatedState.trade,
      tradeEfficiency: (updatedState.trade?.tradeEfficiency || 100) / (1 - sanksiEkonomiEffect.effects.tradeImpact / 100),
      tradeRestricted: false,
      sanctionedCountry: null,
      tradePartnerStatus: updatedState.trade?.tradePartnerStatus?.map((p: any) => ({
        ...p,
        status: 'normal' as const,
        reason: undefined,
      })) || [],
    };
  }

  // Restore approval rating
  if (updatedState.society?.approvalRatingReason === 'Dampak Sanksi Ekonomi') {
    updatedState.society = {
      ...updatedState.society,
      approvalRating: (updatedState.society?.approvalRating || 100) - sanksiEkonomiEffect.effects.approvalRatingImpact,
      approvalRatingReason: null,
    };
  }

  // Hapus sanksi
  updatedState.sanctions = {
    ...updatedState.sanctions,
    ekonomi: {
      isActive: false,
    },
  };

  return updatedState;
}

export function getSanksiEkonomiDuration(currentGameState: any): number {
  return currentGameState.sanctions?.ekonomi?.durationDays || 0;
}

export function getSanksiEkonomiRemainingDays(
  currentGameState: any,
  currentGameDay: number
): number {
  const sanction = currentGameState.sanctions?.ekonomi;
  if (!sanction?.isActive) return 0;

  const startDay = sanction.startDay || 0;
  const daysElapsed = currentGameDay - startDay;
  const daysRemaining = Math.max(0, sanction.durationDays - daysElapsed);

  return daysRemaining;
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
