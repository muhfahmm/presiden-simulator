/**
 * Fungsi untuk menghitung efek dari Sanksi
 */

export interface SanksiEffect {
  name: string;
  description: string;
  effects: {
    revenueReduction: number;
    buildingCostIncrease: number;
    combatReadinessReduction?: number;
    militaryHubCostIncrease?: number;
  };
}

export const sanksiEffects: Record<string, SanksiEffect> = {
  'Sanksi Ekonomi (Economic Sanction)': {
    name: 'Sanksi Ekonomi (Economic Sanction)',
    description: 'Pembatasan akses keuangan dan pembekuan aset negara di bank internasional.',
    effects: {
      revenueReduction: 25,
      buildingCostIncrease: 15,
    },
  },
};

export function calculateSanksiEffect(sanctionName: string): SanksiEffect | null {
  return sanksiEffects[sanctionName] || null;
}

export function applySanksiEffect(
  sanctionName: string,
  duration: string,
  targetCountry: string,
  currentGameState: any
): any {
  const effect = calculateSanksiEffect(sanctionName);
  if (!effect) return currentGameState;

  const updatedState = { ...currentGameState };

  // Parse durasi menjadi hari
  const durationDays = parseDuration(duration);

  updatedState.sanctions = {
    ...updatedState.sanctions,
    active: true,
    type: sanctionName,
    targetCountry,
    durationDays,
    startDate: new Date(),
    effects: effect.effects,
  };

  // Apply efek ke ekonomi
  if (effect.effects.revenueReduction > 0) {
    updatedState.economy = {
      ...updatedState.economy,
      dailyRevenue: (updatedState.economy?.dailyRevenue || 0) * (1 - effect.effects.revenueReduction / 100),
    };
  }

  // Apply efek ke biaya pembangunan
  if (effect.effects.buildingCostIncrease > 0) {
    updatedState.construction = {
      ...updatedState.construction,
      buildingCostMultiplier: (updatedState.construction?.buildingCostMultiplier || 1) * (1 + effect.effects.buildingCostIncrease / 100),
    };
  }

  // Apply efek ke militer
  if (effect.effects.combatReadinessReduction) {
    updatedState.military = {
      ...updatedState.military,
      combatReadiness: (updatedState.military?.combatReadiness || 100) * (1 - effect.effects.combatReadinessReduction / 100),
    };
  }

  if (effect.effects.militaryHubCostIncrease) {
    updatedState.military = {
      ...updatedState.military,
      hubOperationalCostMultiplier: (updatedState.military?.hubOperationalCostMultiplier || 1) * (1 + effect.effects.militaryHubCostIncrease / 100),
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
