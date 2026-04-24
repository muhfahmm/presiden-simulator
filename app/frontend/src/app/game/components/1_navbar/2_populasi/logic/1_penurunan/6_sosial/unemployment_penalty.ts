"use client"

/**
 * Menghitung penalti keamanan akibat tingkat pengangguran
 */
export const calculateUnemploymentPenalty = (factoryCount: number, currentPopulation: number) => {
    const jobsProportion = (factoryCount * 500) / (currentPopulation || 1); 
    return Math.max(0, (0.15 - jobsProportion) * 100); 
};
