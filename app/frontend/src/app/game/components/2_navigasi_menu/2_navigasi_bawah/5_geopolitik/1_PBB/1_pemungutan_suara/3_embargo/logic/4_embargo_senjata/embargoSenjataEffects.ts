/**
 * Fungsi untuk menghitung efek dari Embargo Senjata
 * Melarang penjualan dan transfer senjata
 * Warna mitra dagang berubah menjadi MERAH
 */

export interface EmbargoSenjataEffect {
  name: string;
  description: string;
  effects: {
    militaryProductionReduction: number;
    weaponAccessReduction: number;
    militaryStrengthPenalty: number;
    approvalRatingDailyLoss: number;
    tradePartnerColorChange: 'red';
  };
}

export const embargoSenjataEffect: EmbargoSenjataEffect = {
  name: 'Embargo Senjata (Arms Embargo)',
  description: 'Pelarangan penjualan dan transfer senjata ke negara target. Negara target tidak dapat memperkuat militer dengan senjata modern.',
  effects: {
    militaryProductionReduction: 75,
    weaponAccessReduction: 80,
    militaryStrengthPenalty: 60,
    approvalRatingDailyLoss: 1.5,
    tradePartnerColorChange: 'red',
  },
};

export function calculateEmbargoSenjataEffect(): EmbargoSenjataEffect {
  return embargoSenjataEffect;
}

export function applyEmbargoSenjataEffect(
  duration: string,
  targetCountry: string,
  tradePartners: string[],
  currentGameState: any
): any {
  const effect = calculateEmbargoSenjataEffect();
  const durationDays = parseDuration(duration);

  const updatedState = { ...currentGameState };

  // Kurangi produksi militer drastis
  if (effect.effects.militaryProductionReduction > 0) {
    updatedState.military = {
      ...updatedState.military,
      production: (updatedState.military?.production || 0) * (1 - effect.effects.militaryProductionReduction / 100),
      productionReductionReason: 'Embargo Senjata aktif',
    };
  }

  // Kurangi akses senjata
  if (effect.effects.weaponAccessReduction > 0) {
    updatedState.military = {
      ...updatedState.military,
      weaponAccess: (updatedState.military?.weaponAccess || 100) * (1 - effect.effects.weaponAccessReduction / 100),
      weaponAccessReason: 'Embargo Senjata - Akses terbatas',
    };
  }

  // Penalty kekuatan militer
  if (effect.effects.militaryStrengthPenalty > 0) {
    updatedState.military = {
      ...updatedState.military,
      strength: (updatedState.military?.strength || 100) * (1 - effect.effects.militaryStrengthPenalty / 100),
      strengthPenaltyReason: 'Embargo Senjata - Senjata ketinggalan zaman',
    };
  }

  // Dampak approval rating harian
  if (effect.effects.approvalRatingDailyLoss > 0) {
    updatedState.society = {
      ...updatedState.society,
      approvalRatingDailyLoss: effect.effects.approvalRatingDailyLoss,
      approvalRatingReason: 'Embargo Senjata - Kekhawatiran keamanan',
    };
  }

  // Isolasi mitra dagang - ubah warna menjadi merah
  if (effect.effects.tradePartnerColorChange === 'red') {
    updatedState.trade = {
      ...updatedState.trade,
      armsEmbargoed: true,
      isolatedCountries: tradePartners,
      tradePartnerStatus: tradePartners.map(partner => ({
        countryName: partner,
        status: 'embargoed' as const,
        reason: `Embargo Senjata dari ${targetCountry}`,
      })),
    };
  }

  // Catat embargo senjata yang aktif
  updatedState.embargoes = {
    ...updatedState.embargoes,
    senjata: {
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

export function checkEmbargoSenjataActive(currentGameState: any): boolean {
  return currentGameState.embargoes?.senjata?.isActive || false;
}

export function removeEmbargoSenjataEffect(currentGameState: any): any {
  const updatedState = { ...currentGameState };

  // Restore military production
  if (updatedState.military?.productionReductionReason === 'Embargo Senjata aktif') {
    updatedState.military = {
      ...updatedState.military,
      production: (updatedState.military?.production || 0) / (1 - embargoSenjataEffect.effects.militaryProductionReduction / 100),
      productionReductionReason: null,
    };
  }

  // Restore weapon access
  if (updatedState.military?.weaponAccessReason === 'Embargo Senjata - Akses terbatas') {
    updatedState.military = {
      ...updatedState.military,
      weaponAccess: (updatedState.military?.weaponAccess || 100) / (1 - embargoSenjataEffect.effects.weaponAccessReduction / 100),
      weaponAccessReason: null,
    };
  }

  // Restore military strength
  if (updatedState.military?.strengthPenaltyReason === 'Embargo Senjata - Senjata ketinggalan zaman') {
    updatedState.military = {
      ...updatedState.military,
      strength: (updatedState.military?.strength || 100) / (1 - embargoSenjataEffect.effects.militaryStrengthPenalty / 100),
      strengthPenaltyReason: null,
    };
  }

  // Restore trade partners
  if (updatedState.trade?.armsEmbargoed) {
    updatedState.trade = {
      ...updatedState.trade,
      armsEmbargoed: false,
      isolatedCountries: [],
      tradePartnerStatus: updatedState.trade?.tradePartnerStatus?.map((p: any) => ({
        ...p,
        status: 'normal' as const,
        reason: undefined,
      })) || [],
    };
  }

  // Restore approval rating
  if (updatedState.society?.approvalRatingReason === 'Embargo Senjata - Kekhawatiran keamanan') {
    updatedState.society = {
      ...updatedState.society,
      approvalRatingDailyLoss: 0,
      approvalRatingReason: null,
    };
  }

  // Hapus embargo senjata
  updatedState.embargoes = {
    ...updatedState.embargoes,
    senjata: {
      isActive: false,
    },
  };

  return updatedState;
}

export function getEmbargoSenjataDuration(currentGameState: any): number {
  return currentGameState.embargoes?.senjata?.durationDays || 0;
}

export function getEmbargoSenjataRemainingDays(
  currentGameState: any,
  currentGameDay: number
): number {
  const embargo = currentGameState.embargoes?.senjata;
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
