import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";

export interface AgeBracket {
  label: string;
  range: string;
  percent: number;
}

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
  demographics: AgeBracket[];
}

/**
 * Menghitung struktur demografi usia global dengan drift sinusoidal berdasarkan waktu game.
 */
export function calculateAgeStructure(diffDays: number): AgeBracket[] {
  const baseBrackets = [
    { label: "Anak-Anak", range: "0-14", percent: 25.2 },
    { label: "Pemuda", range: "15-24", percent: 16.8 },
    { label: "Produktif", range: "25-54", percent: 42.4 },
    { label: "Pra-Lansia", range: "55-64", percent: 8.6 },
    { label: "Lansia", range: "65+", percent: 7.0 }
  ];

  const driftAdjustments = baseBrackets.map((b, i) => {
    // Memberikan variasi natural pada tiap kelompok usia
    const drift = Math.sin(diffDays * 0.08 + i) * 0.35;
    return { ...b, percent: Math.max(0.1, b.percent + drift) };
  });

  const totalRaw = driftAdjustments.reduce((sum, b) => sum + b.percent, 0);
  return driftAdjustments.map(b => ({
    ...b,
    percent: parseFloat(((b.percent / totalRaw) * 100).toFixed(1))
  }));
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
  buildingDeltas: Record<string, number>,
  diffDays: number = 0
): PopulationMetrics {
  // 1. Struktur Demografi & Dampak Usia
  const demographics = calculateAgeStructure(diffDays);
  const pemudaPercent = demographics.find(d => d.label === "Pemuda")?.percent || 16.8;
  const produktifPercent = demographics.find(d => d.label === "Produktif")?.percent || 42.4;
  const lansiaPercent = demographics.find(d => d.label === "Lansia")?.percent || 7.0;
  const praLansiaPercent = demographics.find(d => d.label === "Pra-Lansia")?.percent || 8.6;

  // Repro-Index: Kekuatan laju kelahiran berdasarkan populasi usia produktif (Baseline ~59%)
  const reproIndex = (pemudaPercent + produktifPercent) / 59.2;
  // Mortality-Index: Tekanan kematian berdasarkan populasi tua (Baseline ~15.6%)
  const mortalityIndex = (lansiaPercent + praLansiaPercent) / 15.6;

  // 2. Dampak Pajak
  const avgTaxRate = getAverageDomesticTaxRate(countryData);
  let taxGrowthRate: number;
  if (avgTaxRate <= 15) taxGrowthRate = 0.0001;
  else if (avgTaxRate <= 35) taxGrowthRate = 0.00005;
  else if (avgTaxRate <= 55) taxGrowthRate = 0.00002;
  else if (avgTaxRate <= 75) taxGrowthRate = -0.00003;
  else taxGrowthRate = -0.00008;

  const dailyTaxDelta = Math.round(currentPopulation * taxGrowthRate);

  // 3. Dampak Harga
  const avgPriceMult = getAveragePriceMultiplier(countryData);
  let priceGrowthRate: number;
  if (avgPriceMult <= 0.8) priceGrowthRate = 0.0001;
  else if (avgPriceMult <= 1.2) priceGrowthRate = 0.00005;
  else if (avgPriceMult <= 1.5) priceGrowthRate = 0.00002;
  else if (avgPriceMult <= 2.0) priceGrowthRate = -0.00003;
  else priceGrowthRate = -0.00008;

  const dailyPriceDelta = Math.round(currentPopulation * priceGrowthRate);

  // 4. Simulasi Kesehatan & Harapan Hidup (Dynamic Drift)
  const rsBesarCount = (countryData.kesehatan?.rumah_sakit_besar || 0) + (buildingDeltas["rumah_sakit_besar"] || 0);
  const rsKecilCount = (countryData.kesehatan?.rumah_sakit_kecil || 0) + (buildingDeltas["rumah_sakit_kecil"] || 0);
  
  const baseFactories = Object.values(countryData.sektor_manufaktur || {}).reduce((a: number, b: any) => a + (typeof b === 'number' ? b : 0), 0);
  const deltaFactories = Object.entries(buildingDeltas)
    .filter(([key]) => key.includes("pabrik"))
    .reduce((a, [_, count]) => a + count, 0);
  const factoryCount = baseFactories + deltaFactories;

  // Variasi temporal (National Health Pulse)
  const temporalHealthDrift = Math.sin(diffDays * 0.05) * 2.0;
  // Dampak ekonomi (Inflasi tinggi = stres akses nutrisi & sanitasi)
  const economicHealthModifier = (1.1 - avgPriceMult) * 4;

  const healthScore = parseFloat(Math.min(100, Math.max(0,
    (countryData.kesehatan?.indeks_kesehatan || 85) + 
    (rsBesarCount * 2) + 
    (rsKecilCount * 0.5) - 
    (factoryCount * 0.1) + 
    temporalHealthDrift + 
    economicHealthModifier
  )).toFixed(1));

  // Life Expectancy reactive: dipengaruhi secara linear oleh kualitas kesehatan nasional
  const baseLifeExp = countryData.kesehatan?.harapan_hidup || 72;
  const healthBonus = (healthScore - 75) / 5.0; // Tiap 5 poin di atas/bawah 75 merubah 1 tahun harapan hidup
  const lifeExpectancy = parseFloat((baseLifeExp + healthBonus).toFixed(1));

  // 5. Mesin Kelahiran & Kematian (Natural Dynamics)
  const baseBirthRate = 1.72; // Tahunan 1.72%
  const baseDeathRate = 0.68; // Tahunan 0.68%
  const healthModifier = (healthScore - 72) / 100;
  
  // Laju kelahiran diatur secara dinamis oleh kesehatan DAN kapasitas demografi produktif
  const finalBirthRate = (baseBirthRate + (healthModifier * 0.1)) * reproIndex / 100;
  // Laju kematian diatur oleh kesehatan DAN proporsi lansia
  const finalDeathRate = (baseDeathRate - (healthModifier * 0.4)) * mortalityIndex / 100;

  const dailyBirths = Math.round((currentPopulation * finalBirthRate) / 365);
  const dailyDeaths = Math.round((currentPopulation * finalDeathRate) / 365);
  const naturalDailyDelta = dailyBirths - dailyDeaths;

  // 6. Total Akumulasi
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
    dailyDeaths,
    demographics
  };
}

/**
 * Kept for backward compatibility but modified to use the detailed logic.
 */
export function calculateDailyPopulationDelta(
  countryData: CountryData,
  currentPopulation: number,
  diffDays: number = 0
): number {
  // We use empty building deltas for the legacy caller if needed, 
  // but updated callers should use calculateDetailedPopulationMetrics.
  const metrics = calculateDetailedPopulationMetrics(countryData, currentPopulation, {}, diffDays);
  return metrics.totalDailyDelta;
}
