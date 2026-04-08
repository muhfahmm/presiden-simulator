/**
 * Fungsi untuk menghitung efek dari Embargo
 */

export interface EmbargoEffect {
  name: string;
  description: string;
  effects: {
    tradeRevenueReduction: number;
    approvalRatingDailyLoss?: number;
    productionSlowdown?: number;
    researchCostIncrease?: number;
    miningRevenueReduction?: number;
    militaryProductionSlowdown?: number;
    ammunitionDailyLoss?: number;
  };
}

export const embargoEffects: Record<string, EmbargoEffect> = {
  'Embargo Ekonomi (Total Trade)': {
    name: 'Embargo Ekonomi (Total Trade)',
    description: 'Pemutusan total seluruh jalur perdagangan ekspor dan impor dengan dunia luar.',
    effects: {
      tradeRevenueReduction: 80,
      approvalRatingDailyLoss: 2,
    },
  },
  'Embargo Penjualan Teknologi (Tech)': {
    name: 'Embargo Penjualan Teknologi (Tech)',
    description: 'Larangan pengiriman komponen mikrochip, perangkat lunak, dan data riset dari luar negeri.',
    effects: {
      productionSlowdown: 50,
      researchCostIncrease: 100,
      tradeRevenueReduction: 0,
    },
  },
  'Embargo Penjualan Sumber Daya (Resource)': {
    name: 'Embargo Penjualan Sumber Daya (Resource)',
    description: 'Pemblokiran akses pasar internasional untuk menjual komoditas mentah dalam negeri.',
    effects: {
      miningRevenueReduction: 60,
      tradeRevenueReduction: 0,
    },
  },
  'Embargo Senjata (Arms Embargo)': {
    name: 'Embargo Senjata (Arms Embargo)',
    description: 'Larangan total impor senjata, suku cadang alutsista, dan amunisi dari manufaktur global.',
    effects: {
      militaryProductionSlowdown: 40,
      ammunitionDailyLoss: 10,
      tradeRevenueReduction: 0,
    },
  },
};

export function calculateEmbargoEffect(embargoName: string): EmbargoEffect | null {
  return embargoEffects[embargoName] || null;
}

export function applyEmbargoEffect(
  embargoName: string,
  duration: string,
  targetCountry: string,
  subItem: string | null,
  currentGameState: any
): any {
  const effect = calculateEmbargoEffect(embargoName);
  if (!effect) return currentGameState;

  const updatedState = { ...currentGameState };

  // Parse durasi menjadi hari
  const durationDays = parseDuration(duration);

  updatedState.embargos = {
    ...updatedState.embargos,
    active: true,
    type: embargoName,
    targetCountry,
    subItem,
    durationDays,
    startDate: new Date(),
    effects: effect.effects,
  };

  // Apply efek ke perdagangan
  if (effect.effects.tradeRevenueReduction > 0) {
    updatedState.economy = {
      ...updatedState.economy,
      tradeRevenue: (updatedState.economy?.tradeRevenue || 0) * (1 - effect.effects.tradeRevenueReduction / 100),
    };
  }

  // Apply efek ke approval rating
  if (effect.effects.approvalRatingDailyLoss) {
    updatedState.society = {
      ...updatedState.society,
      approvalRatingDailyLoss: effect.effects.approvalRatingDailyLoss,
    };
  }

  // Apply efek ke produksi teknologi
  if (effect.effects.productionSlowdown) {
    updatedState.technology = {
      ...updatedState.technology,
      productionSpeedMultiplier: (updatedState.technology?.productionSpeedMultiplier || 1) * (1 - effect.effects.productionSlowdown / 100),
    };
  }

  // Apply efek ke biaya riset
  if (effect.effects.researchCostIncrease) {
    updatedState.technology = {
      ...updatedState.technology,
      researchCostMultiplier: (updatedState.technology?.researchCostMultiplier || 1) * (1 + effect.effects.researchCostIncrease / 100),
    };
  }

  // Apply efek ke mining
  if (effect.effects.miningRevenueReduction) {
    updatedState.resources = {
      ...updatedState.resources,
      miningRevenue: (updatedState.resources?.miningRevenue || 0) * (1 - effect.effects.miningRevenueReduction / 100),
    };
  }

  // Apply efek ke produksi militer
  if (effect.effects.militaryProductionSlowdown) {
    updatedState.military = {
      ...updatedState.military,
      productionSpeedMultiplier: (updatedState.military?.productionSpeedMultiplier || 1) * (1 - effect.effects.militaryProductionSlowdown / 100),
    };
  }

  // Apply efek ke amunisi
  if (effect.effects.ammunitionDailyLoss) {
    updatedState.military = {
      ...updatedState.military,
      ammunitionDailyLoss: effect.effects.ammunitionDailyLoss,
    };
  }

  return updatedState;
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
