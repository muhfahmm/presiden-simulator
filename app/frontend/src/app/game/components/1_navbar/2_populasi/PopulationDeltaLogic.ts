import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { eventStorage } from "@/app/game/logic/events/eventStorage";

// --- 1. PENURUNAN LOGIC IMPORTS ---
import { calculateTaxPenalty } from "./logic/1_penurunan/1_fiskal/tax_penalty";
import { calculatePricePenalty } from "./logic/1_penurunan/2_pasar/price_penalty";
import { calculateDailyDeaths } from "./logic/1_penurunan/3_mortalitas/death_rate";
import { calculatePollutionPenalty } from "./logic/1_penurunan/4_lingkungan/pollution_penalty";
import { calculatePandemicReduction } from "./logic/1_penurunan/5_kesehatan/pandemic_reduction";
import { calculateUnemploymentPenalty } from "./logic/1_penurunan/6_sosial/unemployment_penalty";

// --- 2. PENINGKATAN LOGIC IMPORTS ---
import { calculateDailyBirths } from "./logic/2_peningkatan/1_kelahiran/birth_rate";
import { calculateAgeStructure } from "./logic/2_peningkatan/2_demografi/age_structure";
import { calculateHealthCoverageBonus } from "./logic/2_peningkatan/3_kesehatan/health_coverage";
import { calculateSecurityBonus } from "./logic/2_peningkatan/4_keamanan/security_bonus";

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

const IDEAL_RATIO = {
  RS_BESAR: 2, RS_KECIL: 12, RS_DIAGNOSTIK: 6,
  KEJAKSAAN: 1, BANTUAN_HUKUM: 2, KANTOR_POLISI: 20,
};

function getAverageDomesticTaxRate(countryData: CountryData): number {
  const domesticKeys = ["ppn", "korporasi", "pendapatan_nasional", "lingkungan", "lainnya"];
  const currentTaxes = taxStorage.getTaxes(countryData.name_en) || countryData.pajak;
  const totalRate = domesticKeys.reduce((acc, key) => acc + ((currentTaxes as any)[key]?.tarif || 0), 0);
  return totalRate / domesticKeys.length;
}

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

export function calculateDetailedPopulationMetrics(
  countryData: CountryData,
  currentPopulation: number,
  buildingDeltas: Record<string, number>,
  diffDays: number = 0
): PopulationMetrics {
  // 1. Demografi
  const demographics = calculateAgeStructure(diffDays);
  const pemudaPct = demographics.find(d => d.label === "Pemuda")?.percent || 16.8;
  const produktifPct = demographics.find(d => d.label === "Produktif")?.percent || 42.4;
  const lansiaPct = demographics.find(d => d.label === "Lansia")?.percent || 7.0;
  const praLansiaPct = demographics.find(d => d.label === "Pra-Lansia")?.percent || 8.6;

  const reproIndex = (pemudaPct + produktifPct) / 59.2;
  const mortalityIndex = (lansiaPct + praLansiaPct) / 15.6;

  // 2. Ekonomi & Fiskal (Penurunan)
  const avgTaxRate = getAverageDomesticTaxRate(countryData);
  const taxGrowthRate = calculateTaxPenalty(avgTaxRate);
  const dailyTaxDelta = Math.round(currentPopulation * taxGrowthRate);

  const avgPriceMult = getAveragePriceMultiplier(countryData);
  const priceGrowthRate = calculatePricePenalty(avgPriceMult);
  const dailyPriceDelta = Math.round(currentPopulation * priceGrowthRate);

  // 3. Kualitas Hidup & Harapan Hidup
  const rsBesar = (countryData.kesehatan?.rumah_sakit_besar || 0) + (buildingDeltas["11_rumah_sakit_besar"] || 0);
  const rsKecil = (countryData.kesehatan?.rumah_sakit_kecil || 0) + (buildingDeltas["12_rumah_sakit_kecil"] || 0);
  const diag = (countryData.kesehatan?.pusat_diagnostik || 0) + (buildingDeltas["13_pusat_diagnostik"] || 0);
  
  const baseFactories = Object.values(countryData.sektor_manufaktur || {}).reduce((a: number, b: any) => a + (typeof b === 'number' ? b : 0), 0);
  const factoryCount = baseFactories + (Object.entries(buildingDeltas).filter(([k]) => k.includes("pabrik")).reduce((a, [_, c]) => a + c, 0));

  const popInMillions = Math.max(1, currentPopulation / 1000000);
  const healthBonus = calculateHealthCoverageBonus(rsBesar, rsKecil, diag, popInMillions, IDEAL_RATIO);
  const pollutionPenalty = calculatePollutionPenalty(factoryCount, popInMillions);
  
  const monthlyPulse = Math.sin(Math.floor(diffDays / 30) * 0.5) * 1.5;
  const eventPenalties = eventStorage.getActivePenalties();

  const baseLifeExp = countryData.kesehatan?.harapan_hidup || 72;
  const lifeExpectancy = parseFloat(Math.min(100, Math.max(0,
    baseLifeExp + (healthBonus - pollutionPenalty) + (1.1 - avgPriceMult) * 1.5 + monthlyPulse - eventPenalties.lifeExpectancy
  )).toFixed(1));

  // 4. Dinamika Alami
  const dailyBirths = calculateDailyBirths(currentPopulation, lifeExpectancy, reproIndex);
  const dailyDeaths = calculateDailyDeaths(currentPopulation, lifeExpectancy, mortalityIndex);
  const growthReduction = calculatePandemicReduction();
  
  const naturalDailyDelta = Math.round((dailyBirths - dailyDeaths) * growthReduction);

  // 5. Keamanan & Sosial
  const police = (countryData.armada_kepolisian?.armada_polisi?.kantor_polisi || 0) + (buildingDeltas["4_kantor_polisi"] || 0);
  const legal = (countryData.hukum?.kejaksaan || 0) + (countryData.hukum?.pusat_bantuan_hukum || 0) + (buildingDeltas["14_kejaksaan_court"] || 0) + (buildingDeltas["15_legal_aid"] || 0);
  
  const securityBonus = calculateSecurityBonus(police, legal, popInMillions, IDEAL_RATIO);
  const unemploymentPenalty = calculateUnemploymentPenalty(factoryCount, currentPopulation);
  const baseSecurity = countryData.hukum?.indeks_keamanan || 70;
  
  const securityLevel = Math.min(100, Math.max(0, 
    baseSecurity + securityBonus + (monthlyPulse * 0.5) - unemploymentPenalty - eventPenalties.securityLevel
  ));

  const totalDailyDelta = naturalDailyDelta + dailyTaxDelta + dailyPriceDelta + eventPenalties.populationDelta;

  return {
    totalDailyDelta, naturalDailyDelta, dailyTaxDelta, dailyPriceDelta, lifeExpectancy,
    avgTaxRate, avgPriceMult, taxGrowthRate, priceGrowthRate, dailyBirths, dailyDeaths,
    securityLevel, demographics
  };
}

export function calculateDailyPopulationDelta(
  countryData: CountryData, currentPopulation: number, diffDays: number = 0
): number {
  const metrics = calculateDetailedPopulationMetrics(countryData, currentPopulation, {}, diffDays);
  return metrics.totalDailyDelta;
}
