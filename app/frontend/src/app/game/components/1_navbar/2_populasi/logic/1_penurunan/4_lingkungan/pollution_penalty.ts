"use client"

/**
 * Menghitung penalti Harapan Hidup akibat polusi industri (Pabrik)
 */
export const calculatePollutionPenalty = (factoryCount: number, popInMillions: number) => {
    return (factoryCount / popInMillions) * 0.08;
};
