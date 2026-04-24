"use client"

/**
 * Menghitung dampak inflasi harga barang terhadap populasi
 */
export const calculatePricePenalty = (avgPriceMult: number) => {
    if (avgPriceMult <= 0.8) return 0.0001;   // Harga Murah (Bonus)
    if (avgPriceMult <= 1.2) return 0.00005;  // Stabil
    if (avgPriceMult <= 1.5) return 0.00002;  // Mulai Mahal
    if (avgPriceMult <= 2.0) return -0.00003; // Mahal (Penurunan)
    return -0.00008;                          // Krisis Ekonomi
};
