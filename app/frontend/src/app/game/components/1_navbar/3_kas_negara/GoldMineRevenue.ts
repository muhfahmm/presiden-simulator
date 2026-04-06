/**
 * Gold Mine Revenue Logic
 * Each '1_tambang_emas' generates 500 in national budget per game day.
 */

export const REVENUE_PER_GOLD_MINE = 1500;

/**
 * Calculates the total revenue from all active gold mines.
 * @param buildingDeltas - Current player-built buildings from storage
 * @returns Total daily revenue from gold mines
 */
export function calculateGoldMineRevenue(buildingDeltas: Record<string, number>): number {
  const goldMineCount = buildingDeltas["1_tambang_emas"] || 0;
  return goldMineCount * REVENUE_PER_GOLD_MINE;
}
