import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";

export interface PopulationMetrics {
  totalDailyDelta: number;
  naturalDailyDelta: number;
  dailyTaxDelta: number;
  dailyPriceDelta: number;
  healthScore: number;
  lifeExpectancy: number;
  avgTaxRate: number;
  avgPriceMult: number;
  taxGrowthRate: number;
  priceGrowthRate: number;
  dailyBirths: number;
  dailyDeaths: number;
}

/**
 * Menghitung rata-rata tarif pajak domestik dari kebijakan yang sedang aktif.
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
 * Menghitung metrik kependudukan mendalam termasuk pertumbuhan alami dan dampak eksternal.
 * Menjadi satu-satunya sumber kebenaran (Source of Truth) untuk Navbar dan Dashboard.
 */
export function calculateDetailedPopulationMetrics(
  countryData: CountryData,
  currentPopulation: number,
  buildingDeltas: Record<string, number>
): PopulationMetrics {
  // 1. Dampak Pajak
  const avgTaxRate = getAverageDomesticTaxRate(countryData);
  let taxGrowthRate: number;
  if (avgTaxRate <= 15) taxGrowthRate = 0.0001;
  else if (avgTaxRate <= 35) taxGrowthRate = 0.00005;
  else if (avgTaxRate <= 55) taxGrowthRate = 0.00002;
  else if (avgTaxRate <= 75) taxGrowthRate = -0.00003;
  else taxGrowthRate = -0.00008;

  const dailyTaxDelta = Math.round(currentPopulation * taxGrowthRate);

  // 2. Dampak Harga
  const avgPriceMult = getAveragePriceMultiplier(countryData);
  let priceGrowthRate: number;
  if (avgPriceMult <= 0.8) priceGrowthRate = 0.0001;
  else if (avgPriceMult <= 1.2) priceGrowthRate = 0.00005;
  else if (avgPriceMult <= 1.5) priceGrowthRate = 0.00002;
  else if (avgPriceMult <= 2.0) priceGrowthRate = -0.00003;
  else priceGrowthRate = -0.00008;

  const dailyPriceDelta = Math.round(currentPopulation * priceGrowthRate);

  // 3. Simulasi Kesehatan & Harapan Hidup
  const rsBesarCount = (countryData.kesehatan?.rumah_sakit_besar || 0) + (buildingDeltas["rumah_sakit_besar"] || 0);
  const rsKecilCount = (countryData.kesehatan?.rumah_sakit_kecil || 0) + (buildingDeltas["rumah_sakit_kecil"] || 0);
  
  const baseFactories = Object.values(countryData.sektor_manufaktur || {}).reduce((a: number, b: any) => a + (typeof b === 'number' ? b : 0), 0);
  const deltaFactories = Object.entries(buildingDeltas)
    .filter(([key]) => key.includes("pabrik"))
    .reduce((a, [_, count]) => a + count, 0);
  const factoryCount = baseFactories + deltaFactories;

  const healthScore = Math.min(100, Math.max(0,
    (countryData.kesehatan?.indeks_kesehatan || 85) + (rsBesarCount * 2) + (rsKecilCount * 0.5) - (factoryCount * 0.1)
  ));
  const lifeExpectancy = (countryData.kesehatan?.harapan_hidup || 72) + (healthScore > 90 ? 5 : healthScore > 70 ? 2 : healthScore < 50 ? -5 : 0);

  // 4. Mesin Kelahiran & Kematian (Natural Dynamics)
  const baseBirthRate = 1.72; // Tahunan 1.72%
  const baseDeathRate = 0.68; // Tahunan 0.68%
  const healthModifier = (healthScore - 72) / 100;
  const finalBirthRate = (baseBirthRate + (healthModifier * 0.1)) / 100;
  const finalDeathRate = (baseDeathRate - (healthModifier * 0.4)) / 100;

  const dailyBirths = Math.round((currentPopulation * finalBirthRate) / 365);
  const dailyDeaths = Math.round((currentPopulation * finalDeathRate) / 365);
  const naturalDailyDelta = dailyBirths - dailyDeaths;

  // 5. Total Akumulasi
  const totalDailyDelta = naturalDailyDelta + dailyTaxDelta + dailyPriceDelta;

  return {
    totalDailyDelta,
    naturalDailyDelta,
    dailyTaxDelta,
    dailyPriceDelta,
    healthScore,
    lifeExpectancy,
    avgTaxRate,
    avgPriceMult,
    taxGrowthRate,
    priceGrowthRate,
    dailyBirths,
    dailyDeaths
  };
}

/**
 * Kept for backward compatibility but modified to use the detailed logic.
 */
export function calculateDailyPopulationDelta(
  countryData: CountryData,
  currentPopulation: number
): number {
  // We use empty building deltas for the legacy caller if needed, 
  // but updated callers should use calculateDetailedPopulationMetrics.
  const metrics = calculateDetailedPopulationMetrics(countryData, currentPopulation, {});
  return metrics.totalDailyDelta;
}
