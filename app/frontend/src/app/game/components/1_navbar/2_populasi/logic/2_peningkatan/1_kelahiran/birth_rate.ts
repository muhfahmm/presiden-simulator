"use client"

/**
 * Menghitung angka kelahiran harian (Natural Births)
 */
export const calculateDailyBirths = (currentPopulation: number, lifeExpectancy: number, reproIndex: number) => {
    const baseBirthRate = 1.72; // Baseline tahunan
    const lifeExpRatio = (lifeExpectancy - 75) / 100;
    const finalBirthRate = (baseBirthRate + (lifeExpRatio * 0.15)) * reproIndex / 100;
    
    return Math.round((currentPopulation * finalBirthRate) / 365);
};
