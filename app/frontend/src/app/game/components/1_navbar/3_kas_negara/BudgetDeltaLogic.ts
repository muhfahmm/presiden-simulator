import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { pbbImpactLogic } from "@/app/game/utils/pbbImpactLogic";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";

// Modular Logic Imports
import { calculateTaxRevenue } from "./logic/1_pendapatan/tax_revenue";
import { calculateOtherRevenues } from "./logic/1_pendapatan/resource_service_revenue";
import { calculateSocioCulturalImpacts } from "./logic/1_pendapatan/bonus_impact_logic";
import { calculatePriceSubsidies } from "./logic/2_pengeluaran/subsidy_logic";
import { calculateSocietalPenalties } from "./logic/2_pengeluaran/penalty_logic";
import { calculateFixedExpenses } from "./logic/2_pengeluaran/maintenance_military_logic";

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

  // 1. Core Revenue (Tax & Trade)
  const taxBreakdown = calculateTaxRevenue(countryData);
  const otherRevenues = calculateOtherRevenues(countryData, buildingDeltas);
  
  const revenues: BudgetBreakdown['revenues'] = { 
    domestic: taxBreakdown.domestic, 
    trade: taxBreakdown.trade, 
    resources: otherRevenues.resources, 
    other: otherRevenues.other 
  };

  // 2. Socio-Cultural Impacts (Religion & Ideology Bonuses)
  const socioCulturalImpacts = calculateSocioCulturalImpacts(countryData, revenues);
  Object.entries(socioCulturalImpacts).forEach(([key, val]) => {
    revenues.other[key] = val;
  });

  // 3. Base Annual Totals
  const adjustedDomestic = Object.values(revenues.domestic).reduce((a, b) => a + b, 0) * pbbMultipliers.tax;
  const adjustedTrade = Object.values(revenues.trade).reduce((a, b) => a + b, 0) * pbbMultipliers.tax * pbbMultipliers.trade;
  const adjustedResources = Object.values(revenues.resources).reduce((a, b) => a + b, 0) * pbbMultipliers.tax * pbbMultipliers.resource;
  const adjustedOther = Object.values(revenues.other).reduce((a, b) => a + b, 0) * pbbMultipliers.tax;

  const baseAnnualRevenue = adjustedDomestic + adjustedTrade + adjustedResources + adjustedOther;

  // 4. Expenses (Subsidies & Fixed Costs)
  const { dailySubsidyExpense, avgPriceMultiplier } = calculatePriceSubsidies();
  const { annualDebtInterest, annualMaintenance, annualMilitary } = calculateFixedExpenses(countryData);

  // 5. Societal Penalties & Happiness Multipliers
  const societal = calculateSocietalPenalties(countryData, buildingDeltas, baseAnnualRevenue);
  
  // Apply Happiness Multiplier to final revenue
  const finalAnnualRevenue = baseAnnualRevenue * societal.happinessMultiplier;

  // 6. Final Calculation
  const annualPriceSubsidy = dailySubsidyExpense * 365;
  const totalAnnualExpense = annualMaintenance + annualMilitary + annualDebtInterest + annualPriceSubsidy + societal.annualSocietalPenalty;
  
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
      maintenance: annualMaintenance / 365,
      military: annualMilitary / 365,
      debtInterest: annualDebtInterest,
      priceSubsidies: dailySubsidyExpense,
      subsidies: 0,
      salaries: 0,
      services: 0
    },
    details: {
      priceMultiplier: avgPriceMultiplier,
      subsidiLevel: 0,
      salaryMultiplier: 0,
      housingCapacity: societal.housingCapacity,
      homelessRate: societal.homelessRate,
      societalPenalty: societal.annualSocietalPenalty / 365,
      happinessImpact: societal.happinessMultiplier,
      satisfaction: societal.satisfaction
    }
  };
}

/**
 * Calculates the net change in national budget for one game day.
 */
export function calculateDailyBudgetDelta(countryData: CountryData, buildingDeltas: Record<string, number>): number {
  const breakdown = calculateBudgetBreakdown(countryData, buildingDeltas);
  return breakdown.dailyDelta;
}
