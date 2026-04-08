/**
 * Fungsi untuk menghitung efek dari Embargo Sumber Daya
 * Melarang akses ke bahan baku dan sumber daya alam
 * Warna mitra dagang berubah menjadi MERAH
 */

export interface EmbargoSumberDayaEffect {
  name: string;
  description: string;
  effects: {
    resourceProductionReduction: number;
    rawMaterialAccessReduction: number;
    manufacturingPenalty: number;
    approvalRatingDailyLoss: number;
    tradePartnerColorChange: 'red';
  };
}

export const embargoSumberDayaEffect: EmbargoSumberDayaEffect = {
  name: 'Embargo Sumber Daya (Resource Embargo)',
  description: 'Pelarangan akses ke bahan baku dan sumber daya alam global. Negara target mengalami kelangkaan sumber daya untuk produksi.',
  effects: {
    resourceProductionReduction: 70,
    rawMaterialAccessReduction: 65,
    manufacturingPenalty: 50,
    approvalRatingDailyLoss: 2,
    tradePartnerColorChange: 'red',
  },
};

export function calculateEmbargoSumberDayaEffect(): EmbargoSumberDayaEffect {
  return embargoSumberDayaEffect;
}

export function applyEmbargoSumberDayaEffect(
  duration: string,
  targetCountry: string,
  tradePartners: string[],
  currentGameState: any
): any {
  const effect = calculateEmbargoSumberDayaEffect();
  const durationDays = parseDuration(duration);

  const updatedState = { ...currentGameState };

  // Kurangi produksi sumber daya drastis
  if (effect.effects.resourceProductionReduction > 0) {
    updatedState.resources = {
      ...updatedState.resources,
      production: (updatedState.resources?.production || 0) * (1 - effect.effects.resourceProductionReduction / 100),
      productionReductionReason: 'Embargo Sumber Daya aktif',
    };
  }

  // Kurangi akses bahan baku
  if (effect.effects.rawMaterialAccessReduction > 0) {
    updatedState.resources = {
      ...updatedState.resources,
      rawMaterialAccess: (updatedState.resources?.rawMaterialAccess || 100) * (1 - effect.effects.rawMaterialAccessReduction / 100),
      rawMaterialAccessReason: 'Embargo Sumber Daya - Akses terbatas',
    };
  }

  // Penalty manufaktur
  if (effect.effects.manufacturingPenalty > 0) {
    updatedState.industry = {
      ...updatedState.industry,
      manufacturingEfficiency: (updatedState.industry?.manufacturingEfficiency || 100) * (1 - effect.effects.manufacturingPenalty / 100),
      manufacturingPenaltyReason: 'Embargo Sumber Daya - Kekurangan bahan baku',
    };
  }

  // Dampak approval rating harian
  if (effect.effects.approvalRatingDailyLoss > 0) {
    updatedState.society = {
      ...updatedState.society,
      approvalRatingDailyLoss: effect.effects.approvalRatingDailyLoss,
      approvalRatingReason: 'Embargo Sumber Daya - Kelangkaan sumber daya',
    };
  }

  // Isolasi mitra dagang - ubah warna menjadi merah
  if (effect.effects.tradePartnerColorChange === 'red') {
    updatedState.trade = {
      ...updatedState.trade,
      resourceEmbargoed: true,
      isolatedCountries: tradePartners,
      tradePartnerStatus: tradePartners.map(partner => ({
        countryName: partner,
        status: 'embargoed' as const,
        reason: `Embargo Sumber Daya dari ${targetCountry}`,
      })),
    };
  }

  // Catat embargo sumber daya yang aktif
  updatedState.embargoes = {
    ...updatedState.embargoes,
    sumberDaya: {
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

export function checkEmbargoSumberDayaActive(currentGameState: any): boolean {
  return currentGameState.embargoes?.sumberDaya?.isActive || false;
}

export function removeEmbargoSumberDayaEffect(currentGameState: any): any {
  const updatedState = { ...currentGameState };

  // Restore resource production
  if (updatedState.resources?.productionReductionReason === 'Embargo Sumber Daya aktif') {
    updatedState.resources = {
      ...updatedState.resources,
      production: (updatedState.resources?.production || 0) / (1 - embargoSumberDayaEffect.effects.resourceProductionReduction / 100),
      productionReductionReason: null,
    };
  }

  // Restore raw material access
  if (updatedState.resources?.rawMaterialAccessReason === 'Embargo Sumber Daya - Akses terbatas') {
    updatedState.resources = {
      ...updatedState.resources,
      rawMaterialAccess: (updatedState.resources?.rawMaterialAccess || 100) / (1 - embargoSumberDayaEffect.effects.rawMaterialAccessReduction / 100),
      rawMaterialAccessReason: null,
    };
  }

  // Restore manufacturing efficiency
  if (updatedState.industry?.manufacturingPenaltyReason === 'Embargo Sumber Daya - Kekurangan bahan baku') {
    updatedState.industry = {
      ...updatedState.industry,
      manufacturingEfficiency: (updatedState.industry?.manufacturingEfficiency || 100) / (1 - embargoSumberDayaEffect.effects.manufacturingPenalty / 100),
      manufacturingPenaltyReason: null,
    };
  }

  // Restore trade partners
  if (updatedState.trade?.resourceEmbargoed) {
    updatedState.trade = {
      ...updatedState.trade,
      resourceEmbargoed: false,
      isolatedCountries: [],
      tradePartnerStatus: updatedState.trade?.tradePartnerStatus?.map((p: any) => ({
        ...p,
        status: 'normal' as const,
        reason: undefined,
      })) || [],
    };
  }

  // Restore approval rating
  if (updatedState.society?.approvalRatingReason === 'Embargo Sumber Daya - Kelangkaan sumber daya') {
    updatedState.society = {
      ...updatedState.society,
      approvalRatingDailyLoss: 0,
      approvalRatingReason: null,
    };
  }

  // Hapus embargo sumber daya
  updatedState.embargoes = {
    ...updatedState.embargoes,
    sumberDaya: {
      isActive: false,
    },
  };

  return updatedState;
}

export function getEmbargoSumberDayaDuration(currentGameState: any): number {
  return currentGameState.embargoes?.sumberDaya?.durationDays || 0;
}

export function getEmbargoSumberDayaRemainingDays(
  currentGameState: any,
  currentGameDay: number
): number {
  const embargo = currentGameState.embargoes?.sumberDaya;
  if (!embargo?.isActive) return 0;

  const startDay = embargo.startDay || 0;
  const daysElapsed = currentGameDay - startDay;
  const daysRemaining = Math.max(0, embargo.durationDays - daysElapsed);

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
