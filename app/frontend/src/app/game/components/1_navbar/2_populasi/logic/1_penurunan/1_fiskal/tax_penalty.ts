"use client"

/**
 * Menghitung dampak negatif pajak terhadap pertumbuhan populasi
 */
export const calculateTaxPenalty = (avgTaxRate: number) => {
    if (avgTaxRate <= 15) return 0.0001;      // Sangat Rendah (Bonus)
    if (avgTaxRate <= 35) return 0.00005;     // Rendah
    if (avgTaxRate <= 55) return 0.00002;     // Menengah
    if (avgTaxRate <= 75) return -0.00003;    // Tinggi (Mulai Penurunan)
    return -0.00008;                          // Sangat Tinggi (Tekanan Hidup)
};
