/**
 * Gold Mine Revenue Logic
 * Each '1_tambang_emas' generates 150 in national budget per game day.
 */

export const REVENUE_PER_GOLD_MINE = 10;

/**
 * Calculates the total revenue from all active gold mines (Base + Built).
 * @param buildingDeltas - Current player-built buildings from storage
 * @param countryData - Original country infrastructure from database
 * @returns Total daily revenue from gold mines
 */
export function calculateGoldMineRevenue(buildingDeltas: Record<string, number>, countryData?: any): number {
  const deltaCount = buildingDeltas["1_tambang_emas"] || 0;
  const baseCount = countryData?.sektor_ekstraksi?.emas || 0;
  const totalCount = deltaCount + baseCount;
  return totalCount * REVENUE_PER_GOLD_MINE;
}
