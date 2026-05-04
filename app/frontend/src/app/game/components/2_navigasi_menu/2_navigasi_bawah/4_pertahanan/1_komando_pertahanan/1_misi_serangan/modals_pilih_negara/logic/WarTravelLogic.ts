/**
 * WarTravelLogic.ts
 * Logika perhitungan waktu tempuh militer antar benua.
 */

export type Continent = 'EROPA' | 'ASIA' | 'AFRIKA' | 'AMERIKA_UTARA' | 'AMERIKA_SELATAN' | 'OSEANIA';

// Matriks waktu tempuh dalam HARI
// 1 Hari di game = 1 siklus update progress
const TRAVEL_DAYS_MATRIX: Record<Continent, Record<Continent, number>> = {
  EROPA: {
    EROPA: 3,           // Dekat
    ASIA: 10,           // Jauh
    AFRIKA: 7,          // Sedang
    AMERIKA_UTARA: 14,  // Menyeberang Atlantik
    AMERIKA_SELATAN: 18,
    OSEANIA: 25,        // Sangat Jauh
  },
  ASIA: {
    EROPA: 10,
    ASIA: 5,
    AFRIKA: 12,
    AMERIKA_UTARA: 15,
    AMERIKA_SELATAN: 22,
    OSEANIA: 12,
  },
  AFRIKA: {
    EROPA: 7,
    ASIA: 12,
    AFRIKA: 5,
    AMERIKA_UTARA: 18,
    AMERIKA_SELATAN: 12,
    OSEANIA: 20,
  },
  AMERIKA_UTARA: {
    EROPA: 14,
    ASIA: 15,
    AFRIKA: 18,
    AMERIKA_UTARA: 6,
    AMERIKA_SELATAN: 10,
    OSEANIA: 18,
  },
  AMERIKA_SELATAN: {
    EROPA: 18,
    ASIA: 22,
    AFRIKA: 12,
    AMERIKA_UTARA: 10,
    AMERIKA_SELATAN: 6,
    OSEANIA: 20,
  },
  OSEANIA: {
    EROPA: 25,
    ASIA: 12,
    AFRIKA: 20,
    AMERIKA_UTARA: 18,
    AMERIKA_SELATAN: 20,
    OSEANIA: 4,
  }
};

/**
 * Mendapatkan estimasi hari perjalanan antar benua
 */
export const getTravelDays = (sourceContinent: string, targetContinent: string): number => {
  const s = sourceContinent.toUpperCase().replace(/ /g, '_') as Continent;
  const t = targetContinent.toUpperCase().replace(/ /g, '_') as Continent;
  
  if (TRAVEL_DAYS_MATRIX[s] && TRAVEL_DAYS_MATRIX[s][t]) {
    return TRAVEL_DAYS_MATRIX[s][t];
  }
  return 15; // Fallback jika tidak terdeteksi
};

/**
 * Mengonversi durasi hari menjadi Speed Engine Map
 * Engine membutuhkan nilai progress per update (0.0 - 1.0)
 */
export const calculateTravelSpeed = (days: number): number => {
  if (days <= 0) return 0.01;
  // Jika 1 hari = 1 update, maka speed = 1/days
  // Namun karena update engine map berjalan setiap frame/tick, 
  // kita bagi lagi dengan faktor skala waktu game.
  return (1 / days) * 0.005; 
};
