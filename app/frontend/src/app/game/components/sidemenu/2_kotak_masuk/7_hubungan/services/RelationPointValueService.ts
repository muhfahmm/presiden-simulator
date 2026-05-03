"use client";

/**
 * RelationPointValueService.ts
 * Sistem valuasi poin hubungan dalam satuan EM (Economic Metric)
 * 
 * Konversi:
 * - 0.1 poin hubungan = 1.000 EM
 * - 1.0 poin hubungan = 10.000 EM
 * - 5.0 poin hubungan = 50.000 EM
 * 
 * Digunakan untuk:
 * 1. Menghitung nilai bantuan keuangan dari AI
 * 2. Menentukan biaya diplomasi
 * 3. Valuasi investasi hubungan bilateral
 */

export const EM_PER_POINT = {
  DECIMAL: 1000,        // 0.1 poin = 1.000 EM
  FULL: 10000,          // 1.0 poin = 10.000 EM
  WEEKLY_GAIN: 1000,    // +0.1 per minggu = 1.000 EM value
};

class RelationPointValueService {
  
  /**
   * Konversi poin hubungan ke nilai EM
   * @param points - Jumlah poin (contoh: 0.1, 1.5, 5.0)
   * @returns Nilai dalam EM
   */
  public pointsToEM(points: number): number {
    return points * EM_PER_POINT.FULL;
  }

  /**
   * Konversi nilai EM ke poin hubungan
   * @param em - Jumlah EM
   * @returns Jumlah poin
   */
  public emToPoints(em: number): number {
    return em / EM_PER_POINT.FULL;
  }

  /**
   * Hitung nilai weekly improvement dalam EM
   * Setiap +0.1 per minggu = 1.000 EM
   */
  public calculateWeeklyValue(currentScore: number, hasEmbassy: boolean): { 
    improvement: number; 
    valueInEM: number;
    newScore: number;
  } {
    const weeklyChange = hasEmbassy ? 0.1 : -0.1;
    const newScore = currentScore + weeklyChange;
    const improvement = hasEmbassy ? 0.1 : -0.1;
    const valueInEM = Math.abs(improvement) * EM_PER_POINT.DECIMAL;

    return {
      improvement,
      valueInEM,
      newScore
    };
  }

  /**
   * Hitung total nilai perbaikan hubungan yang dibutuhkan
   * dari skor saat ini ke target skor
   */
  public calculateImprovementCost(currentScore: number, targetScore: number = 50): {
    pointsNeeded: number;
    costInEM: number;
    weeksToTarget: number; // dengan kedutaan (+0.1/minggu)
  } {
    const pointsNeeded = Math.max(0, targetScore - currentScore);
    const costInEM = pointsNeeded * EM_PER_POINT.FULL;
    const weeksToTarget = Math.ceil(pointsNeeded / 0.1);

    return {
      pointsNeeded,
      costInEM,
      weeksToTarget
    };
  }

  /**
   * Format EM ke string yang readable
   */
  public formatEM(em: number): string {
    if (em >= 1000000000) {
      return (em / 1000000000).toFixed(1) + ' M EM';
    } else if (em >= 1000000) {
      return (em / 1000000).toFixed(1) + ' Jt EM';
    } else if (em >= 1000) {
      return (em / 1000).toFixed(0) + ' Rb EM';
    } else {
      return em.toLocaleString('id-ID') + ' EM';
    }
  }

  /**
   * Hitung bantuan optimal dari AI berdasarkan skor hubungan
   * Menggunakan formula: aid = (50 - score) × 10.000 EM
   */
  public calculateOptimalAid(score: number, aiBudget: number): {
    pointsBelow: number;
    baseValue: number;
    maxFromBudget: number;
    finalAid: number;
    formatted: string;
  } {
    const pointsBelow = Math.max(0, 50 - score);
    const baseValue = pointsBelow * EM_PER_POINT.FULL; // Tiap poin = 10.000 EM
    
    // AI tidak boleh memberi lebih dari 15% budget mereka
    const maxFromBudget = aiBudget * 0.15;
    
    const finalAid = Math.min(baseValue, maxFromBudget);
    
    return {
      pointsBelow,
      baseValue,
      maxFromBudget,
      finalAid,
      formatted: this.formatEM(finalAid)
    };
  }

  /**
   * Get info tentang valuasi untuk debugging/display
   */
  public getValuationInfo(): {
    rate: string;
    examples: { score: number; improvement: string; value: string }[];
  } {
    return {
      rate: '1.0 poin = 10.000 EM',
      examples: [
        { score: 45, improvement: '+0.1 → 50 (50 minggu)', value: '500.000 EM' },
        { score: 40, improvement: '+0.1 → 50 (100 minggu)', value: '1.000.000 EM' },
        { score: 30, improvement: '+0.1 → 50 (200 minggu)', value: '2.000.000 EM' },
        { score: 25, improvement: '+0.1 → 50 (250 minggu)', value: '2.500.000 EM' },
        { score: 0, improvement: '+0.1 → 50 (500 minggu)', value: '5.000.000 EM' },
      ]
    };
  }
}

export const relationPointValueService = new RelationPointValueService();
