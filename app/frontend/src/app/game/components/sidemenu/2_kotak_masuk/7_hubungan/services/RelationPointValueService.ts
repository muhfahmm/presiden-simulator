"use client";

/**
 * RelationPointValueService.ts
 * Sistem valuasi poin hubungan (User-to-AI contexts)
 */

export const EM_PER_POINT = {
  DECIMAL: 1000,
  FULL: 10000,
  WEEKLY_GAIN: 1000,
};

class RelationPointValueService {
  public pointsToEM(points: number): number { return points * EM_PER_POINT.FULL; }
  public emToPoints(em: number): number { return em / EM_PER_POINT.FULL; }
  
  public calculateWeeklyValue(currentScore: number, hasEmbassy: boolean): { improvement: number; valueInEM: number; newScore: number; } {
    const weeklyChange = hasEmbassy ? 0.1 : -0.1;
    const newScore = currentScore + weeklyChange;
    const improvement = hasEmbassy ? 0.1 : -0.1;
    const valueInEM = Math.abs(improvement) * EM_PER_POINT.DECIMAL;
    return { improvement, valueInEM, newScore };
  }

  public calculateImprovementCost(currentScore: number, targetScore: number = 50): { pointsNeeded: number; costInEM: number; weeksToTarget: number; } {
    const pointsNeeded = Math.max(0, targetScore - currentScore);
    const costInEM = pointsNeeded * EM_PER_POINT.FULL;
    const weeksToTarget = Math.ceil(pointsNeeded / 0.1);
    return { pointsNeeded, costInEM, weeksToTarget };
  }

  public formatEM(em: number): string {
    if (em >= 1000000000) return (em / 1000000000).toFixed(1) + ' M EM';
    if (em >= 1000000) return (em / 1000000).toFixed(1) + ' Jt EM';
    if (em >= 1000) return (em / 1000).toFixed(0) + ' Rb EM';
    return em.toLocaleString('id-ID') + ' EM';
  }
}

export const relationPointValueService = new RelationPointValueService();
