import { CountryData } from "@/app/database/data/types/index";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";

/**
 * Menghitung rata-rata tarif pajak domestik dari kebijakan yang sedang aktif.
 * Kategori: ppn, korporasi, pendapatan_nasional, lingkungan, lainnya
 */
function getAverageDomesticTaxRate(countryData: CountryData): number {
  const domesticKeys = ["ppn", "korporasi", "pendapatan_nasional", "lingkungan", "lainnya"];
  const currentTaxes = taxStorage.getTaxes(countryData.name_en) || countryData.pajak;

  const totalRate = domesticKeys.reduce((acc, key) => {
    return acc + ((currentTaxes as any)[key]?.tarif || 0);
  }, 0);

  return totalRate / domesticKeys.length;
}

/**
 * Menghitung rata-rata pengali harga (current/base) dari pasar domestik.
 */
function getAveragePriceMultiplier(countryData: CountryData): number {
  const prices = priceStorage.getData(countryData);
  const keys = Object.keys(BASE_PRICES) as Array<keyof typeof BASE_PRICES>;
  
  const totalMultiplier = keys.reduce((acc, key) => {
    const base = (BASE_PRICES as any)[key] || 1;
    const current = (prices as any)[key] || base;
    return acc + (current / base);
  }, 0);

  return totalMultiplier / keys.length;
}

/**
 * Menghitung perubahan populasi harian berdasarkan tarif pajak dan harga domestik.
 *
 * Tabel dampak tarif pajak terhadap pertumbuhan populasi:
 * | Rentang Tarif Pajak | Dampak Pertumbuhan Populasi |
 * | 0% – 15%        | +0.01% populasi (sangat positif) |
 * | 16% – 35%       | +0.005%                          |
 * | 36% – 55%       | +0.002% (pertumbuhan alami)      |
 * | 56% – 75%       | -0.003%                          |
 * | 76% – 100%      | -0.008% (krisis eksodus)         |
 *
 * @param countryData - Data negara yang sedang dimainkan
 * @param currentPopulation - Populasi saat ini
 * @returns Delta populasi (bisa positif atau negatif)
 */
export function calculateDailyPopulationDelta(
  countryData: CountryData,
  currentPopulation: number
): number {
  const avgTaxRate = getAverageDomesticTaxRate(countryData);

  let growthRate: number;

  if (avgTaxRate <= 15) {
    growthRate = 0.0001; // +0.01% / hari
  } else if (avgTaxRate <= 35) {
    growthRate = 0.00005; // +0.005% / hari
  } else if (avgTaxRate <= 55) {
    growthRate = 0.00002; // +0.002% / hari (pertumbuhan alami)
  } else if (avgTaxRate <= 75) {
    growthRate = -0.00003; // -0.003% / hari
  } else {
    growthRate = -0.00008; // -0.008% / hari (eksodus besar)
  }

  // Pengaruh Harga (stacking)
  const avgPriceMult = getAveragePriceMultiplier(countryData);
  let priceImpact: number;
  if (avgPriceMult <= 0.8) priceImpact = 0.0001;
  else if (avgPriceMult <= 1.2) priceImpact = 0.00005;
  else if (avgPriceMult <= 1.5) priceImpact = 0.00002;
  else if (avgPriceMult <= 2.0) priceImpact = -0.00003;
  else priceImpact = -0.00008;

  const totalGrowthRate = growthRate + priceImpact; // Jumlah dampak (summing both impacts)
  
  return Math.round(currentPopulation * totalGrowthRate);
}
