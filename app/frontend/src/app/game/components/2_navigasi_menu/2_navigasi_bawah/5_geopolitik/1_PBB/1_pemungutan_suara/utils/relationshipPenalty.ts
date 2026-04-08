/**
 * Logika untuk mengurangi hubungan diplomatik ketika Sanksi atau Embargo diterapkan
 * Penurunan: 50 poin per Sanksi/Embargo
 */

export interface RelationshipPenaltyEffect {
  targetCountry: string;
  penaltyType: 'sanction' | 'embargo';
  penaltyAmount: number;
  newRelationshipScore: number;
  timestamp: number;
}

/**
 * Hitung penurunan hubungan berdasarkan tipe sanksi/embargo
 */
export function calculateRelationshipPenalty(
  penaltyType: 'sanction' | 'embargo'
): number {
  // Setiap Sanksi atau Embargo mengurangi hubungan sebesar 50 poin
  const PENALTY_AMOUNT = 50;
  return PENALTY_AMOUNT;
}

/**
 * Terapkan penurunan hubungan ke negara target
 */
export function applyRelationshipPenalty(
  currentGameState: any,
  targetCountryName: string,
  penaltyType: 'sanction' | 'embargo'
): RelationshipPenaltyEffect {
  const penaltyAmount = calculateRelationshipPenalty(penaltyType);
  
  // Akses data negara dari game state
  const countries = currentGameState.countries || {};
  const targetCountry = countries[targetCountryName];
  
  if (!targetCountry) {
    console.warn(`Target country ${targetCountryName} not found`);
    return {
      targetCountry: targetCountryName,
      penaltyType,
      penaltyAmount,
      newRelationshipScore: 0,
      timestamp: Date.now()
    };
  }

  // Kurangi relationship score
  const currentRelationship = targetCountry.relationshipScore || 0;
  const newRelationshipScore = Math.max(-100, currentRelationship - penaltyAmount);

  // Update game state
  if (!currentGameState.countries) {
    currentGameState.countries = {};
  }
  if (!currentGameState.countries[targetCountryName]) {
    currentGameState.countries[targetCountryName] = {};
  }

  currentGameState.countries[targetCountryName].relationshipScore = newRelationshipScore;

  // Log perubahan
  console.log(
    `[Relationship Penalty] ${targetCountryName}: ${currentRelationship} → ${newRelationshipScore} (${penaltyType})`
  );

  return {
    targetCountry: targetCountryName,
    penaltyType,
    penaltyAmount,
    newRelationshipScore,
    timestamp: Date.now()
  };
}

/**
 * Terapkan penurunan hubungan untuk multiple negara (untuk voting)
 */
export function applyRelationshipPenaltyToMultiple(
  currentGameState: any,
  targetCountries: string[],
  penaltyType: 'sanction' | 'embargo'
): RelationshipPenaltyEffect[] {
  return targetCountries.map(country =>
    applyRelationshipPenalty(currentGameState, country, penaltyType)
  );
}

/**
 * Hapus penurunan hubungan (jika Sanksi/Embargo dicabut)
 */
export function removeRelationshipPenalty(
  currentGameState: any,
  targetCountryName: string,
  penaltyType: 'sanction' | 'embargo'
): RelationshipPenaltyEffect {
  const penaltyAmount = calculateRelationshipPenalty(penaltyType);
  
  const countries = currentGameState.countries || {};
  const targetCountry = countries[targetCountryName];
  
  if (!targetCountry) {
    return {
      targetCountry: targetCountryName,
      penaltyType,
      penaltyAmount,
      newRelationshipScore: 0,
      timestamp: Date.now()
    };
  }

  // Kembalikan relationship score
  const currentRelationship = targetCountry.relationshipScore || 0;
  const newRelationshipScore = Math.min(100, currentRelationship + penaltyAmount);

  if (!currentGameState.countries) {
    currentGameState.countries = {};
  }
  if (!currentGameState.countries[targetCountryName]) {
    currentGameState.countries[targetCountryName] = {};
  }

  currentGameState.countries[targetCountryName].relationshipScore = newRelationshipScore;

  console.log(
    `[Relationship Restored] ${targetCountryName}: ${currentRelationship} → ${newRelationshipScore} (${penaltyType} removed)`
  );

  return {
    targetCountry: targetCountryName,
    penaltyType,
    penaltyAmount,
    newRelationshipScore,
    timestamp: Date.now()
  };
}

/**
 * Dapatkan status hubungan berdasarkan score
 */
export function getRelationshipStatus(score: number): string {
  if (score >= 80) return 'Sangat Baik';
  if (score >= 60) return 'Baik';
  if (score >= 40) return 'Netral';
  if (score >= 20) return 'Buruk';
  if (score >= 0) return 'Sangat Buruk';
  return 'Musuh';
}

/**
 * Dapatkan warna berdasarkan status hubungan
 */
export function getRelationshipColor(score: number): string {
  if (score >= 80) return 'text-green-400';
  if (score >= 60) return 'text-cyan-400';
  if (score >= 40) return 'text-yellow-400';
  if (score >= 20) return 'text-orange-400';
  if (score >= 0) return 'text-red-400';
  return 'text-rose-600';
}
