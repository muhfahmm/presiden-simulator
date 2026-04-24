"use client"

/**
 * Menghitung angka kematian harian (Natural Deaths)
 */
export const calculateDailyDeaths = (currentPopulation: number, lifeExpectancy: number, mortalityIndex: number) => {
    const baseDeathRate = 0.68; // Baseline tahunan
    const lifeExpRatio = (lifeExpectancy - 75) / 100;
    const finalDeathRate = (baseDeathRate - (lifeExpRatio * 0.6)) * mortalityIndex / 100;
    
    return Math.round((currentPopulation * finalDeathRate) / 365);
};
