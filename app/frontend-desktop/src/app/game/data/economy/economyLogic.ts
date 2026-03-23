import { CountryData } from "../../../select-country/data/types";
import { GameSession } from "../../gamestorage";

/**
 * Calculates the net change in national budget for one game day.
 * All values are in game currency units (max ~800K for richest country).
 */
export function calculateDailyBudgetDelta(countryData: CountryData, session: GameSession): number {
  // 1. INCOME CALCULATION
  const baseAnnualIncome = parseIncomeString(countryData.income);
  const baseDailyIncome = baseAnnualIncome / 365;

  // Revenue from taxes (simplified: sum of tax rates / 100 * base income)
  const taxRates = Object.values(countryData.taxes).reduce((sum, tax) => sum + (tax.rate || 0), 0);
  const dailyTaxRevenue = baseDailyIncome * (taxRates / 100);

  // 2. EXPENSE CALCULATION
  // Military daily costs
  const dailyMilitaryExpense = (countryData.sector_defense.budget || 0) / 365;

  // Maintenance costs for new buildings
  const buildingDeltaCount = Object.values(session.buildingDeltas).reduce((sum, count) => sum + count, 0);
  const dailyMaintenanceExpense = buildingDeltaCount * 0.5; // 0.5 game units per new building per day

  // 3. NET DELTA
  const netDelta = dailyTaxRevenue - dailyMilitaryExpense - dailyMaintenanceExpense;

  return netDelta;
}

function parseIncomeString(income: string): number {
  if (!income) return 100; // Fallback

  // Try plain number first (new format: "800064")
  const cleaned = income.replace(/[.,\s]/g, '');
  const plainNum = parseFloat(cleaned);
  if (!isNaN(plainNum) && plainNum > 0) return plainNum;

  // Legacy format with T or M suffix
  const match = income.match(/(\d+[\d.,]*)\s*([TMK])/);
  if (match) {
    return parseFloat(match[1].replace(/[.,]/g, ''));
  }

  return 100;
}
