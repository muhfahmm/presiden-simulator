/**
 * Fungsi untuk menghitung efek dari Embargo Teknologi
 * Melarang transfer teknologi dan akses ke inovasi
 * Warna mitra dagang berubah menjadi MERAH
 */

export interface EmbargoTeknologiEffect {
  name: string;
  description: string;
  effects: {
    techProgressReduction: number;
    researchSpeedReduction: number;
    innovationPenalty: number;
    approvalRatingDailyLoss: number;
    tradePartnerColorChange: 'red';
  };
}

export const embargoTeknologiEffect: EmbargoTeknologiEffect = {
  name: 'Embargo Teknologi (Technology Transfer)',
  description: 'Pelarangan transfer teknologi dan akses ke inovasi global. Negara target tertinggal dalam pengembangan teknologi.',
  effects: {
    techProgressReduction: 60,
    researchSpeedReduction: 50,
    innovationPenalty: 40,
    approvalRatingDailyLoss: 1.5,
    tradePartnerColorChange: 'red',
  },
};

export function calculateEmbargoTeknologiEffect(): EmbargoTeknologiEffect {
  return embargoTeknologiEffect;
}

export function applyEmbargoTeknologiEffect(
  duration: string,
  targetCountry: string,
  tradePartners: string[],
  currentGameState: any
): any {
  const effect = calculateEmbargoTeknologiEffect();
  const durationDays = parseDuration(duration);

  const updatedState = { ...currentGameState };

  // Kurangi progress teknologi drastis
  if (effect.effects.techProgressReduction > 0) {
    updatedState.technology = {
      ...updatedState.technology,
      techProgress: (updatedState.technology?.techProgress || 0) * (1 - effect.effects.techProgressReduction / 100),
      techProgressReductionReason: 'Embargo Teknologi aktif',
    };
  }

  // Kurangi kecepatan penelitian
  if (effect.effects.researchSpeedReduction > 0) {
    updatedState.research = {
      ...updatedState.research,
      researchSpeed: (updatedState.research?.researchSpeed || 1) * (1 - effect.effects.researchSpeedReduction / 100),
      researchSpeedReductionReason: 'Embargo Teknologi - Akses terbatas',
    };
  }

  // Penalty inovasi
  if (effect.effects.innovationPenalty > 0) {
    updatedState.innovation = {
      ...updatedState.innovation,
      innovationRate: (updatedState.innovation?.innovationRate || 0) * (1 - effect.effects.innovationPenalty / 100),
      innovationPenaltyReason: 'Embargo Teknologi - Isolasi inovasi',
    };
  }

  // Dampak approval rating harian
  if (effect.effects.approvalRatingDailyLoss > 0) {
    updatedState.society = {
      ...updatedState.society,
      approvalRatingDailyLoss: effect.effects.approvalRatingDailyLoss,
      approvalRatingReason: 'Embargo Teknologi - Ketinggalan teknologi',
    };
  }

  // Isolasi mitra dagang - ubah warna menjadi merah
  if (effect.effects.tradePartnerColorChange === 'red') {
    updatedState.trade = {
      ...updatedState.trade,
      techEmbargoed: true,
      isolatedCountries: tradePartners,
      tradePartnerStatus: tradePartners.map(partner => ({
        countryName: partner,
        status: 'embargoed' as const,
        reason: `Embargo Teknologi dari ${targetCountry}`,
      })),
    };
  }

  // Catat embargo teknologi yang aktif
  updatedState.embargoes = {
    ...updatedState.embargoes,
    teknologi: {
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

export function checkEmbargoTeknologiActive(currentGameState: any): boolean {
  return currentGameState.embargoes?.teknologi?.isActive || false;
}

export function removeEmbargoTeknologiEffect(currentGameState: any): any {
  const updatedState = { ...currentGameState };

  // Restore tech progress
  if (updatedState.technology?.techProgressReductionReason === 'Embargo Teknologi aktif') {
    updatedState.technology = {
      ...updatedState.technology,
      techProgress: (updatedState.technology?.techProgress || 0) / (1 - embargoTeknologiEffect.effects.techProgressReduction / 100),
      techProgressReductionReason: null,
    };
  }

  // Restore research speed
  if (updatedState.research?.researchSpeedReductionReason === 'Embargo Teknologi - Akses terbatas') {
    updatedState.research = {
      ...updatedState.research,
      researchSpeed: (updatedState.research?.researchSpeed || 1) / (1 - embargoTeknologiEffect.effects.researchSpeedReduction / 100),
      researchSpeedReductionReason: null,
    };
  }

  // Restore innovation rate
  if (updatedState.innovation?.innovationPenaltyReason === 'Embargo Teknologi - Isolasi inovasi') {
    updatedState.innovation = {
      ...updatedState.innovation,
      innovationRate: (updatedState.innovation?.innovationRate || 0) / (1 - embargoTeknologiEffect.effects.innovationPenalty / 100),
      innovationPenaltyReason: null,
    };
  }

  // Restore trade partners
  if (updatedState.trade?.techEmbargoed) {
    updatedState.trade = {
      ...updatedState.trade,
      techEmbargoed: false,
      isolatedCountries: [],
      tradePartnerStatus: updatedState.trade?.tradePartnerStatus?.map((p: any) => ({
        ...p,
        status: 'normal' as const,
        reason: undefined,
      })) || [],
    };
  }

  // Restore approval rating
  if (updatedState.society?.approvalRatingReason === 'Embargo Teknologi - Ketinggalan teknologi') {
    updatedState.society = {
      ...updatedState.society,
      approvalRatingDailyLoss: 0,
      approvalRatingReason: null,
    };
  }

  // Hapus embargo teknologi
  updatedState.embargoes = {
    ...updatedState.embargoes,
    teknologi: {
      isActive: false,
    },
  };

  return updatedState;
}

export function getEmbargoTeknologiDuration(currentGameState: any): number {
  return currentGameState.embargoes?.teknologi?.durationDays || 0;
}

export function getEmbargoTeknologiRemainingDays(
  currentGameState: any,
  currentGameDay: number
): number {
  const embargo = currentGameState.embargoes?.teknologi;
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
