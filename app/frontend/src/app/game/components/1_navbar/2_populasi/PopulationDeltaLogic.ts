import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { eventStorage } from "@/app/game/logic/events/eventStorage";

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
  lifeExpectancy: number;
  avgTaxRate: number;
  avgPriceMult: number;
  taxGrowthRate: number;
  priceGrowthRate: number;
  dailyBirths: number;
  dailyDeaths: number;
  securityLevel: number;
  demographics: AgeBracket[];
}

// --- STANDAR RASIO CAKUPAN IDEAL (Per 1.000.000 Penduduk) ---
const IDEAL_RATIO = {
  RS_BESAR: 2,          // 1 RS Besar per 500rb jiwa
  RS_KECIL: 12,         // 1 RS Kecil per ~80rb jiwa
  RS_DIAGNOSTIK: 6,     // 1 Pusat Diagnostik per ~160rb jiwa
  KEJAKSAAN: 1,         // 1 Kejaksaan per 1jt jiwa
  BANTUAN_HUKUM: 2,     // 1 Legal Aid per 500rb jiwa
  KANTOR_POLISI: 20,    // 1 Kantor Polisi per 50rb jiwa
};

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

  // 4. Simulasi Harapan Hidup (Monthly Dynamic) - BERBASIS CAKUPAN
  const rsBesarCount = (countryData.kesehatan?.rumah_sakit_besar || 0) + (buildingDeltas["11_rumah_sakit_besar"] || 0);
  const rsKecilCount = (countryData.kesehatan?.rumah_sakit_kecil || 0) + (buildingDeltas["12_rumah_sakit_kecil"] || 0);
  const diagnostikCount = (countryData.kesehatan?.pusat_diagnostik || 0) + (buildingDeltas["13_pusat_diagnostik"] || 0);
  
  const baseFactories = Object.values(countryData.sektor_manufaktur || {}).reduce((a: number, b: any) => a + (typeof b === 'number' ? b : 0), 0);
  const deltaFactories = Object.entries(buildingDeltas)
    .filter(([key]) => key.includes("pabrik") || key.includes("manufaktur"))
    .reduce((a, [_, count]) => a + count, 0);
  const factoryCount = baseFactories + deltaFactories;

  // Variasi Bulanan & Harian
  const monthIndex = Math.floor(diffDays / 30);
  const monthlyPulse = Math.sin(monthIndex * 0.5) * 1.5;
  const dailyJitter = Math.cos(diffDays * 0.1) * 0.2;

  // Dampak infrastruktur & ekonomi langsung ke Harapan Hidup (BERBASIS CAKUPAN)
  const popInMillions = Math.max(1, currentPopulation / 1000000);
  
  // Hitung persentase cakupan (0.0 - 1.2)
  const rsBesarCoverage = Math.min(1.2, rsBesarCount / (popInMillions * IDEAL_RATIO.RS_BESAR));
  const rsKecilCoverage = Math.min(1.2, rsKecilCount / (popInMillions * IDEAL_RATIO.RS_KECIL));
  const diagnostikCoverage = Math.min(1.2, diagnostikCount / (popInMillions * IDEAL_RATIO.RS_DIAGNOSTIK));
  
  // Harapan Hidup Bonus (Max +15 tahun dari infrastruktur sempurna)
  // Factory penalty scaled by population density (factories per million people)
  const factoryPenalty = (factoryCount / popInMillions) * 0.08;
  const infraImpact = (rsBesarCoverage * 7) + (rsKecilCoverage * 5) + (diagnostikCoverage * 3) - factoryPenalty;
  const econImpact = (1.1 - avgPriceMult) * 1.5;

  // 5. Active Event Penalties Integration
  const eventPenalties = eventStorage.getActivePenalties();
  const activeEvents = eventStorage.getActiveEvents();
  const healthEvents = activeEvents.filter(e => e.type === 'health');

  // Growth reduction factor (Epidemi/Pandemi logic)
  let growthReductionFactor = 1.0;
  if (healthEvents.length > 0) {
    const hasCatastrophic = healthEvents.some(e => e.severity === 'Catastrophic');
    const hasHigh = healthEvents.some(e => e.severity === 'High');

    if (hasCatastrophic) {
      growthReductionFactor = 0.2; // 80% reduction in natural growth rate
    } else if (hasHigh) {
      growthReductionFactor = 0.5; // 50% reduction (Epidemi Berat)
    } else {
      growthReductionFactor = 0.75; // 25% reduction (Epidemi Ringan/Sedang)
    }
  }

  const baseLifeExp = countryData.kesehatan?.harapan_hidup || 72;
  const lifeExpectancy = parseFloat(Math.min(100, Math.max(0,
    baseLifeExp + infraImpact + econImpact + monthlyPulse + dailyJitter - eventPenalties.lifeExpectancy
  )).toFixed(1));

  // 5. Mesin Kelahiran & Kematian (Natural Dynamics)
  const baseBirthRate = 1.72; // Tahunan 1.72%
  const baseDeathRate = 0.68; // Tahunan 0.68%
  
  // Normalisasi lifeExpectancy terhadap standar global (Base ~75)
  const lifeExpRatio = (lifeExpectancy - 75) / 100;
  
  // Laju kelahiran diatur secara dinamis oleh kualitas hidup DAN kapasitas demografi produktif
  const finalBirthRate = (baseBirthRate + (lifeExpRatio * 0.15)) * reproIndex / 100;
  // Laju kematian diatur oleh kualitas hidup DAN proporsi lansia
  const finalDeathRate = (baseDeathRate - (lifeExpRatio * 0.6)) * mortalityIndex / 100;

  const dailyBirths = Math.round((currentPopulation * finalBirthRate) / 365);
  const dailyDeaths = Math.round((currentPopulation * finalDeathRate) / 365);
  
  // Apply the growth reduction factor (Epidemi/Pandemi impact)
  const naturalDailyDelta = Math.round((dailyBirths - dailyDeaths) * growthReductionFactor);

  // 6. Security Level Simulation (0-100) - BERBASIS CAKUPAN
  const kejaksaanCount = (countryData.hukum?.kejaksaan || 0) + (buildingDeltas["14_kejaksaan_court"] || 0);
  const legalAidCount = (countryData.hukum?.pusat_bantuan_hukum || 0) + (buildingDeltas["15_legal_aid"] || 0);
  const policeCount = (countryData.armada_kepolisian?.armada_polisi?.kantor_polisi || 0) + (buildingDeltas["4_kantor_polisi"] || 0);
  const baseSecurity = countryData.hukum?.indeks_keamanan || 70;
  
  // Hitung persentase cakupan keamanan
  const policeCoverage = Math.min(1.2, policeCount / (popInMillions * IDEAL_RATIO.KANTOR_POLISI));
  const lawCoverage = Math.min(1.2, (kejaksaanCount + legalAidCount) / (popInMillions * (IDEAL_RATIO.KEJAKSAAN + IDEAL_RATIO.BANTUAN_HUKUM)));

  // Dynamic Unemployment Penalty
  const jobsProportion = (factoryCount * 500) / (currentPopulation || 1); 
  const unemploymentPenalty = Math.max(0, (0.15 - jobsProportion) * 100); 

  // Security Bonus (Max +30 poin dari cakupan ideal)
  const securityBonus = (policeCoverage * 20) + (lawCoverage * 10);

  const securityLevel = Math.min(100, Math.max(0, 
    baseSecurity + securityBonus + (monthlyPulse * 0.5) - unemploymentPenalty - eventPenalties.securityLevel
  ));

  // 6. Total Akumulasi (Including direct event mortality)
  const totalDailyDelta = naturalDailyDelta + dailyTaxDelta + dailyPriceDelta + eventPenalties.populationDelta;

  return {
    totalDailyDelta,
    naturalDailyDelta,
    dailyTaxDelta,
    dailyPriceDelta,
    lifeExpectancy,
    avgTaxRate,
    avgPriceMult,
    taxGrowthRate,
    priceGrowthRate,
    dailyBirths,
    dailyDeaths,
    securityLevel,
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
