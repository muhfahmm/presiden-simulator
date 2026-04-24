import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { incomeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pemasukkan/IncomeStorage";
import { expenseStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pengeluaran/ExpenseStorage";
import { priceStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { calculateGoldMineRevenue } from "@/app/game/components/1_navbar/3_kas_negara/GoldMineRevenue";
import { calculateTempatUmumRevenue, calculateTempatUmumMaintenance } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/3-tempat-umum/logic/TempatUmumRevenueLogic";
import { religionStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/religionStorage";
import { PROTESTAN_GROWTH_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/2_protestan/1_plus/plus";
import { ideologyStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/ideologyStorage";
import { KAPITALISME_TREASURY_GROWTH_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/3_kapitalisme/1_plus/plus";
import { SOSIALISME_TREASURY_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/4_sosialisme/2_minus/minus";
import { LIBERALISME_COMMERCIAL_GROWTH_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/5_liberalisme/1_plus/plus";
import { NASIONALISME_IMPORT_COST_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/7_nasionalisme/2_minus/minus";
import { ORTODOKS_RAW_PRODUCTION_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/4_ortodoks/1_plus/plus";
import { HINDU_AGRICULTURE_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/5_hindu/1_plus/plus";
import { HINDU_LIVESTOCK_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/5_hindu/2_minus/minus";
import { ATEISME_MANUFACTURING_BONUS, ATEISME_AGRICULTURE_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/7_ateisme/1_plus/plus";
import { KONGHUCU_TAX_EFFICIENCY_BONUS, KONGHUCU_MANUFACTURING_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/9_konghucu/1_plus/plus";
import { TAOISME_HEAVY_INDUSTRY_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/10_taoisme/2_minus/minus"
import { pbbImpactLogic } from "@/app/game/utils/pbbImpactLogic"
import { hunianRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/index";
import { happinessStorage } from "@/app/game/components/1_navbar/1_kepuasan/happinessStorage";
import { aiHappinessStorage } from "@/app/game/components/modals/1_info_strategis/6_Kepuasan/AIHappinessStorage";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";

import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { stabilityStorage } from "@/app/game/components/1_navbar/4_stabilitas";

/**
 * Calculates the total daily maintenance cost.
 */
export function calculateTotalMaintenance(countryData: CountryData, buildingDeltas: Record<string, number>): number {
  return 0;
}

/**
 * Legacy wrapper: Calculates the total daily maintenance cost for all national base infrastructure.
 */
export function calculateBaseMaintenance(countryData: CountryData): number {
  return 0;
}

/**
 * Legacy wrapper: Calculates maintenance for user-built infrastructure (deltas).
 */
export function calculateDeltaMaintenance(buildingDeltas: Record<string, number>): number {
  return 0;
}

export interface BudgetBreakdown {
  totalAnnualRevenue: number;
  totalAnnualExpense: number;
  netAnnualSurplus: number;
  dailyDelta: number;
  dailyTaxRevenue: number;
  revenues: {
    domestic: Record<string, number>;
    trade: Record<string, number>;
    resources: Record<string, number>;
    other: Record<string, number>;
  };
  expenses: {
    maintenance: number;
    military: number;
    debtInterest: number;
    priceSubsidies: number;
    subsidies: number;
    salaries: number;
    services: number;
  };
  details: {
    priceMultiplier: number;
    subsidiLevel: number;
    salaryMultiplier: number;
    housingCapacity: number;
    homelessRate: number;
    societalPenalty: number;
    happinessImpact: number;
    satisfaction: number;
  }
}

/**
 * Calculates a complete breakdown of the national budget.
 */
export function calculateBudgetBreakdown(countryData: CountryData, buildingDeltas: Record<string, number>): BudgetBreakdown {
  const pbbMultipliers = pbbImpactLogic.getCountryMultipliers(countryData.name_en);

  // 1. Income (Revenue) â€” iterate ALL tax keys dynamically (same as PajakModal)
  const currentTaxes = taxStorage.getTaxes(countryData.name_en) || countryData.pajak;
  const TRADE_KEYS = new Set(["bea_cukai", "transit_sekutu", "transit_non_sekutu", "tarif_ekspor", "tarif_impor"]);
  const allTaxKeys = Object.keys(currentTaxes as any);

  const revenues: BudgetBreakdown['revenues'] = { domestic: {}, trade: {}, resources: {}, other: {} };

  allTaxKeys.forEach(key => {
    const pendapatan = (currentTaxes as any)[key]?.pendapatan || 0;
    if (TRADE_KEYS.has(key)) {
      revenues.trade[key] = pendapatan;
    } else {
      revenues.domestic[key] = pendapatan;
    }
  });

  const incomeData = incomeStorage.getData();
  revenues.other["grants"] = incomeData.grants || 0;
  revenues.other["investments"] = incomeData.investments || 0;

  // 1.1 Resource Income (Gold Mines)
  const goldRevenue = calculateGoldMineRevenue(buildingDeltas, countryData);
  if (goldRevenue > 0) {
    revenues.resources["emas"] = goldRevenue * 365; // Annualized
  }

  // 1.2 Services Income (Tempat Umum: Olahraga, Komersial, Hiburan)
  const serviceRevenue = calculateTempatUmumRevenue(buildingDeltas, countryData);
  if (serviceRevenue > 0) {
    revenues.other["sektor_jasa"] = serviceRevenue * 365; // Annualized
  }

  // 1.3 Protestant Growth Bonus (+5% of tax revenue)
  const currentReligion = religionStorage.getCurrentReligion(countryData.religion);
  if (currentReligion === "Protestan") {
    const taxRevenueAnnual = Object.values(revenues.domestic).reduce((a, b) => a + b, 0) +
      Object.values(revenues.trade).reduce((a, b) => a + b, 0);
    const growthBonusAnnual = taxRevenueAnnual * PROTESTAN_GROWTH_BONUS;
    revenues.other["pertumbuhan_ekonomi"] = growthBonusAnnual;
  }

  // 1.4 Orthodox Raw Resource Bonus (+10%)
  if (currentReligion === "Kristen Ortodoks") {
    let totalRawRevenueAnnual = 0;
    totalRawRevenueAnnual += Object.values(revenues.resources).reduce((a, b) => a + b, 0);
    const rawBonusAnnual = totalRawRevenueAnnual * ORTODOKS_RAW_PRODUCTION_BONUS;
    if (rawBonusAnnual > 0) {
      revenues.other["bonus_produksi_ortodoks"] = rawBonusAnnual;
    }
  }

  // 1.5 Hindu Bonuses & Penalties
  if (currentReligion === "Hindu") {
    const agrikulturTaxAnnual = revenues.domestic["pajak_agrikultur"] || revenues.domestic["agrikultur"] || 0;
    const peternakanTaxAnnual = revenues.domestic["pajak_peternakan"] || revenues.domestic["peternakan"] || 0;

    if (agrikulturTaxAnnual > 0) {
      revenues.other["bonus_pertanian_hindu"] = agrikulturTaxAnnual * HINDU_AGRICULTURE_BONUS;
    }

    if (peternakanTaxAnnual > 0) {
      revenues.other["penalti_peternakan_hindu"] = peternakanTaxAnnual * HINDU_LIVESTOCK_PENALTY;
    }
  }

  // 1.6 Atheism Growth Bonuses
  if (currentReligion === "Atheisme") {
    let manufacturingTaxAnnual = revenues.domestic["pajak_manufaktur"] || revenues.domestic["manufaktur"] || 0;
    if (manufacturingTaxAnnual > 0) {
      revenues.other["bonus_manufaktur_ateisme"] = manufacturingTaxAnnual * ATEISME_MANUFACTURING_BONUS;
    }

    let agrikulturTaxAnnual = revenues.domestic["pajak_agrikultur"] || revenues.domestic["agrikultur"] || 0;
    if (agrikulturTaxAnnual > 0) {
      revenues.other["bonus_pertanian_ateisme"] = agrikulturTaxAnnual * ATEISME_AGRICULTURE_BONUS;
    }
  }

  // 1.7 Konghucu Bonuses
  if (currentReligion === "Konghucu") {
    const baseTaxRevenueAnnual = Object.values(revenues.domestic).reduce((a, b) => a + b, 0) +
      Object.values(revenues.trade).reduce((a, b) => a + b, 0);
    revenues.other["efisiensi_pajak_konghucu"] = baseTaxRevenueAnnual * KONGHUCU_TAX_EFFICIENCY_BONUS;

    let manufacturingTaxAnnual = revenues.domestic["pajak_manufaktur"] || revenues.domestic["manufaktur"] || 0;
    if (manufacturingTaxAnnual > 0) {
      revenues.other["bonus_manufaktur_konghucu"] = manufacturingTaxAnnual * KONGHUCU_MANUFACTURING_BONUS;
    }
  }

  // 1.8 Taoisme Penalties
  if (currentReligion === "Taoisme") {
    const baseHeavyIndustryAnnual = (revenues.domestic["pajak_manufaktur"] || revenues.domestic["manufaktur"] || 0) +
      (revenues.domestic["pajak_ekstraksi"] || revenues.domestic["ekstraksi"] || 0);
    revenues.other["penalti_industri_taoisme"] = baseHeavyIndustryAnnual * TAOISME_HEAVY_INDUSTRY_PENALTY;
  }

  // 1.9 Capitalism Growth Bonus (+30% of tax revenue)
  const currentIdeology = ideologyStorage.getCurrentIdeology(countryData.ideology);
  if (currentIdeology === "Kapitalisme") {
    const baseTaxRevenueAnnual = Object.values(revenues.domestic).reduce((a, b) => a + b, 0) +
      Object.values(revenues.trade).reduce((a, b) => a + b, 0);
    revenues.other["efisiensi_pasar_kapitalisme"] = baseTaxRevenueAnnual * KAPITALISME_TREASURY_GROWTH_BONUS;
  }

  // 1.10 Sosialisme Treasury Accumulation Penalty (-15% of tax revenue)
  if (currentIdeology === "Sosialisme") {
    const baseTaxRevenueAnnual = Object.values(revenues.domestic).reduce((a, b) => a + b, 0) +
      Object.values(revenues.trade).reduce((a, b) => a + b, 0);
    revenues.other["penalti_kas_sosialisme"] = baseTaxRevenueAnnual * SOSIALISME_TREASURY_PENALTY;
  }

  // 1.11 Liberalisme Commercial Growth Bonus (+25% of commercial revenue)
  if (currentIdeology === "Liberalisme") {
    const serviceRevenueAnnual = revenues.other["sektor_jasa"] || 0;
    revenues.other["pertumbuhan_komersial_liberalisme"] = serviceRevenueAnnual * LIBERALISME_COMMERCIAL_GROWTH_BONUS;
  }

  // 1.12 Nasionalisme Import Cost Penalty (+25% of Import Tariff cost - applied as negative adjustment to revenue)
  if (currentIdeology === "Nasionalisme") {
    const importTariffAnnual = revenues.trade["tarif_impor"] || 0;
    revenues.other["penalti_impor_nasionalisme"] = -(importTariffAnnual * NASIONALISME_IMPORT_COST_PENALTY);
  }

  // Apply PBB Multipliers
  const adjustedDomestic = Object.values(revenues.domestic).reduce((a, b) => a + b, 0) * pbbMultipliers.tax;
  const adjustedTrade = Object.values(revenues.trade).reduce((a, b) => a + b, 0) * pbbMultipliers.tax * pbbMultipliers.trade;
  const adjustedResources = Object.values(revenues.resources).reduce((a, b) => a + b, 0) * pbbMultipliers.tax * pbbMultipliers.resource;
  const adjustedOther = Object.values(revenues.other).reduce((a, b) => a + b, 0) * pbbMultipliers.tax;

  const totalAnnualRevenue = adjustedDomestic + adjustedTrade + adjustedResources + adjustedOther;

  // 2. Expenses & Penalties
  const expData = expenseStorage.getData(countryData.name_en, countryData);
  const maintenanceExpense = 0;
  const militaryExpense = 0;
  const serviceExpense = 0; // Explicitly set to 0 to remove hidden maintenance

  // Price Subsidies Logic
  const priceData = priceStorage.getData();
  const avgPriceMultiplier = (
    (priceData.harga_beras / 15000) + (priceData.harga_daging_sapi / 120000) + (priceData.harga_ayam / 40000) +
    (priceData.harga_minyak_goreng / 18000) + (priceData.harga_gula / 16000) + (priceData.harga_telur / 30000) +
    (priceData.harga_bbm / 12500) + (priceData.harga_listrik / 1500) + (priceData.harga_air / 5000) +
    (priceData.harga_obat / 150000) + (priceData.harga_pendidikan / 500000)
  ) / 11;
  const priceSubsidyExpense = Math.max(0, (1.0 - avgPriceMultiplier) * 1500);

  // 3. Housing Capacity Impact
  const getUnits = (id: string) => {
    const baseline = (countryData.hunian as any)?.[id] || 0;
    const delta = buildingDeltas[id] || Object.entries(buildingDeltas).find(([k]) => k.replace(/^\d+_/, '') === id)?.[1] || 0;
    return Number(baseline) + Number(delta);
  };

  const housingCapacity =
    (getUnits("rumah_subsidi") * hunianRate.rumah_subsidi.kapasitas) +
    (getUnits("apartemen") * hunianRate.apartemen.kapasitas) +
    (getUnits("mansion") * hunianRate.mansion.kapasitas);

  // 4. Satisfaction (Happiness) Impact
  let currentSatisfaction = 50;
  if (typeof window !== 'undefined') {
    const session = gameStorage.getSession();
    const isIndonesia = countryData.name_en === "Indonesia" || (countryData as any).name_id === "Indonesia";
    const isPlayer = session?.country === countryData.name_en || session?.country === (countryData as any).name_id || (session && isIndonesia) || (!session && isIndonesia);

    if (isPlayer) {
      // Prioritize LIVE happiness storage for player country
      currentSatisfaction = happinessStorage.getStats().value;
    } else {
      // For AI countries
      currentSatisfaction = aiHappinessStorage.getSatisfaction(countryData.name_en) || 50;
    }
  }

  // Consistent population check (Essential for societal penalty sync)
  let population = 0;
  if (typeof window !== 'undefined') {
    const isIndonesia = countryData.name_en === "Indonesia" || (countryData as any).name_id === "Indonesia";
    const session = gameStorage.getSession();
    if (isIndonesia || session?.country === countryData.name_en) {
      // Use LIVE population storage to avoid drift between static data and simulation
      population = populationStorage.getPopulation();
    }
  }

  if (population <= 0) {
    const rawPop = (countryData as any).jumlah_penduduk ?? (countryData as any).populasi ?? 0;
    population = typeof rawPop === 'string'
      ? (parseInt(rawPop.replace(/\./g, '')) || 0)
      : (typeof rawPop === 'number' ? rawPop : 0);
  }

  const homelessRate = Math.max(0, Math.min(1.0, (population - housingCapacity) / (population || 1)));
  const societalPenaltyAnnual = totalAnnualRevenue * (homelessRate * 0.25);

  const happinessMultiplier = 0.4 + (0.6 * (currentSatisfaction / 100));
  const finalAnnualRevenue = totalAnnualRevenue * happinessMultiplier;

  const annualMaintenance = 0;
  const annualMilitary = militaryExpense * 365;
  const annualDebtInterest = expData.debtInterestPaid || 0;
  const annualPriceSubsidy = priceSubsidyExpense * 365;
  const annualSocietalPenalty = societalPenaltyAnnual;
  const annualServices = serviceExpense * 365;

  const totalAnnualExpense = annualMaintenance + annualMilitary + annualDebtInterest + annualPriceSubsidy + annualSocietalPenalty + annualServices;
  const netAnnualSurplus = finalAnnualRevenue - totalAnnualExpense;
  const dailyDelta = netAnnualSurplus / 365;

  return {
    totalAnnualRevenue: finalAnnualRevenue,
    totalAnnualExpense,
    netAnnualSurplus,
    dailyDelta,
    dailyTaxRevenue: finalAnnualRevenue / 365,
    revenues,
    expenses: {
      maintenance: maintenanceExpense,
      military: militaryExpense,
      debtInterest: annualDebtInterest,
      priceSubsidies: priceSubsidyExpense,
      subsidies: 0,
      salaries: 0,
      services: serviceExpense
    },
    details: {
      priceMultiplier: avgPriceMultiplier,
      subsidiLevel: 0,
      salaryMultiplier: 0,
      housingCapacity,
      homelessRate,
      societalPenalty: annualSocietalPenalty / 365,
      happinessImpact: happinessMultiplier,
      satisfaction: currentSatisfaction
    }
  };
}

/**
 * Calculates the net change in national budget for one game day.
 */
export function calculateDailyBudgetDelta(countryData: CountryData, buildingDeltas: Record<string, number>): number {
  const currentBuildings = buildingStorage.getData().buildingDeltas || {};
  const breakdown = calculateBudgetBreakdown(countryData, currentBuildings);
  return breakdown.dailyDelta;
}
