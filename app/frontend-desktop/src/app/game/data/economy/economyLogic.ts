import { CountryData } from "../../../select-country/data/types";
import { GameSession } from "../../gamestorage";

/**
 * Calculates the net change in national budget for one game day.
 */
export function calculateDailyBudgetDelta(countryData: CountryData, session: GameSession): number {
  // 1. INCOME CALCULATION
  // Parse base income (e.g., "969 T" or "969.000.000.000.000")
  const baseAnnualIncome = parseIncomeString(countryData.income);
  const baseDailyIncome = baseAnnualIncome / 365;

  // Revenue from taxes (simplified: sum of tax rates / 100 * base income)
  const taxRates = Object.values(countryData.taxes).reduce((sum, tax) => sum + (tax.rate || 0), 0);
  const dailyTaxRevenue = baseDailyIncome * (taxRates / 100);

  // 2. EXPENSE CALCULATION
  // Military daily costs
  const dailyMilitaryExpense = (countryData.sector_defense.budget || 0) / 365;

  // Maintenance costs for established infrastructure (approximate)
  // Let's assume 0.01% of building value per day
  const buildingDeltaCount = Object.values(session.buildingDeltas).reduce((sum, count) => sum + count, 0);
  const dailyMaintenanceExpense = buildingDeltaCount * 0.05; // 0.05M (~50jt Rp) per new building day

  // 3. NET DELTA
  const netDelta = dailyTaxRevenue - dailyMilitaryExpense - dailyMaintenanceExpense;

  return netDelta;
}

function parseIncomeString(income: string): number {
  if (!income) return 1000; // Fallback
  
  // Extract number before 'T' or 'M'
  const match = income.match(/(\d+[\d.,]*)\s*([TM])/);
  if (match) {
    const num = parseFloat(match[1].replace(/[.,]/g, ''));
    // If it's T, we could convert it, but we assume it's all rescaled to M
    return num;
  }
  
  // Try to parse large number string
  const parts = income.split('/');
  const rawNum = parts[0].replace(/[.,\s]/g, '');
  const val = parseFloat(rawNum);
  
  // Convert to M if it's very large
  if (val > 1000000) return val / 1000000000;
  
  return val;
}
