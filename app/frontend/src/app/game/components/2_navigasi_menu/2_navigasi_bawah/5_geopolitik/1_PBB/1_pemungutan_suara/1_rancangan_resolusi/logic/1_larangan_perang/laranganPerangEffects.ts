/**
 * Fungsi untuk menghitung efek dari Larangan Perang (Anti-War)
 */

export interface LaranganPerangEffect {
  name: string;
  description: string;
  effects: {
    militaryBlocked: boolean;
    diplomaticStandingPenalty: number;
    triggerEconomicSanction: boolean;
    blockAttackMenu: boolean;
    violationPenalty: number;
  };
}

export const laranganPerangEffect: LaranganPerangEffect = {
  name: 'Larangan Perang (Anti-War)',
  description: 'Kesepakatan kolektif antar negara anggota PBB untuk menghentikan seluruh agresi militer aktif.',
  effects: {
    militaryBlocked: true,
    diplomaticStandingPenalty: -50,
    triggerEconomicSanction: true,
    blockAttackMenu: true,
    violationPenalty: -50,
  },
};

export function calculateLaranganPerangEffect(): LaranganPerangEffect {
  return laranganPerangEffect;
}

export function applyLaranganPerangEffect(
  duration: string,
  targetCountry: string,
  currentGameState: any
): any {
  const effect = calculateLaranganPerangEffect();
  const durationDays = parseDuration(duration);

  const updatedState = { ...currentGameState };

  // Blokir menu serangan
  if (effect.effects.blockAttackMenu) {
    updatedState.military = {
      ...updatedState.military,
      canAttack: false,
      attackMenuBlocked: true,
      blockReason: 'Larangan Perang (Anti-War) Resolution aktif',
    };
  }

  // Kurangi diplomatic standing
  if (effect.effects.diplomaticStandingPenalty) {
    updatedState.diplomacy = {
      ...updatedState.diplomacy,
      standing: (updatedState.diplomacy?.standing || 0) + effect.effects.diplomaticStandingPenalty,
      lastPenaltyReason: 'Larangan Perang Resolution',
    };
  }

  // Aktifkan sanksi ekonomi otomatis
  if (effect.effects.triggerEconomicSanction) {
    updatedState.sanctions = {
      ...updatedState.sanctions,
      economicSanctionActive: true,
      autoTriggeredBy: 'Larangan Perang Resolution',
      economicSanctionDuration: durationDays,
    };
  }

  // Catat resolusi yang aktif
  updatedState.resolutions = {
    ...updatedState.resolutions,
    laranganPerang: {
      isActive: true,
      startDate: new Date(),
      durationDays,
      targetCountry,
      effects: effect.effects,
    },
  };

  return updatedState;
}

export function checkLaranganPerangViolation(
  currentGameState: any,
  attemptedAction: string
): { isViolation: boolean; message: string } {
  const resolution = currentGameState.resolutions?.laranganPerang;

  if (!resolution?.isActive) {
    return { isViolation: false, message: '' };
  }

  // Cek apakah ada upaya serangan
  if (attemptedAction === 'attack' || attemptedAction === 'military_operation') {
    return {
      isViolation: true,
      message: 'Tidak dapat melakukan serangan! Larangan Perang (Anti-War) Resolution sedang aktif.',
    };
  }

  return { isViolation: false, message: '' };
}

export function removeLaranganPerangEffect(currentGameState: any): any {
  const updatedState = { ...currentGameState };

  // Buka kembali menu serangan
  updatedState.military = {
    ...updatedState.military,
    canAttack: true,
    attackMenuBlocked: false,
    blockReason: null,
  };

  // Hapus resolusi
  updatedState.resolutions = {
    ...updatedState.resolutions,
    laranganPerang: {
      isActive: false,
    },
  };

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
