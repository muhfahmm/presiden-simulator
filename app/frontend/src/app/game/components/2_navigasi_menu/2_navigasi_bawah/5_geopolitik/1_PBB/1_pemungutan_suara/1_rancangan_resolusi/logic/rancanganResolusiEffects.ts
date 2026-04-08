/**
 * Fungsi untuk menghitung efek dari Rancangan Resolusi
 */

export interface RancanganResolusiEffect {
  name: string;
  description: string;
  effects: {
    militaryBlocked: boolean;
    diplomaticStandingPenalty: number;
    triggerEconomicSanction: boolean;
  };
}

export const rancanganResolusiEffects: Record<string, RancanganResolusiEffect> = {
  'Larangan Perang (Anti-War)': {
    name: 'Larangan Perang (Anti-War)',
    description: 'Kesepakatan kolektif antar negara anggota PBB untuk menghentikan seluruh agresi militer aktif.',
    effects: {
      militaryBlocked: true,
      diplomaticStandingPenalty: -50,
      triggerEconomicSanction: true,
    },
  },
};

export function calculateRancanganResolusiEffect(resolutionName: string): RancanganResolusiEffect | null {
  return rancanganResolusiEffects[resolutionName] || null;
}

export function applyRancanganResolusiEffect(
  resolutionName: string,
  currentGameState: any
): any {
  const effect = calculateRancanganResolusiEffect(resolutionName);
  if (!effect) return currentGameState;

  const updatedState = { ...currentGameState };

  if (effect.effects.militaryBlocked) {
    updatedState.military = {
      ...updatedState.military,
      canAttack: false,
      attackMenuBlocked: true,
    };
  }

  if (effect.effects.diplomaticStandingPenalty) {
    updatedState.diplomacy = {
      ...updatedState.diplomacy,
      standing: (updatedState.diplomacy?.standing || 0) + effect.effects.diplomaticStandingPenalty,
    };
  }

  if (effect.effects.triggerEconomicSanction) {
    updatedState.sanctions = {
      ...updatedState.sanctions,
      economicSanctionActive: true,
    };
  }

  return updatedState;
}
