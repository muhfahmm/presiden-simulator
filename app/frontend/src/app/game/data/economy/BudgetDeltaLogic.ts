import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { incomeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pemasukkan/IncomeStorage";
import { expenseStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pengeluaran/ExpenseStorage";
import { priceStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { calculateGoldMineRevenue } from "@/app/game/components/1_navbar/3_kas_negara/GoldMineRevenue";

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
  };
  details: {
    priceMultiplier: number;
    subsidiLevel: number;
    salaryMultiplier: number;
  }
}

/**
 * Calculates a complete breakdown of the national budget.
 */
export function calculateBudgetBreakdown(countryData: CountryData, buildingDeltas: Record<string, number>): BudgetBreakdown {
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
  const goldRevenue = calculateGoldMineRevenue(buildingDeltas);
  if (goldRevenue > 0) {
    revenues.resources["emas"] = goldRevenue * 365; // Annualized
  }

  const totalAnnualRevenue = 
    Object.values(revenues.domestic).reduce((a, b) => a + b, 0) +
    Object.values(revenues.trade).reduce((a, b) => a + b, 0) +
    Object.values(revenues.resources).reduce((a, b) => a + b, 0) +
    Object.values(revenues.other).reduce((a, b) => a + b, 0);

  // 2. Expenses
  const expData = expenseStorage.getData(countryData.name_en, countryData);
  
  // Maintenance (Semua pemeliharaan infrastruktur dan operasional militer kini nol)
  const maintenanceExpense = 0;
  
  // Military (Khusus operasional/pabrik jika diperlukan tambahan, saat ini sudah masuk maintenance)
  const militaryExpense = 0; 


  // Price Subsidies
  const priceData = priceStorage.getData();
  const avgPriceMultiplier = (
    (priceData.harga_beras / 15000) + (priceData.harga_daging_sapi / 120000) + (priceData.harga_ayam / 40000) +
    (priceData.harga_minyak_goreng / 18000) + (priceData.harga_gula / 16000) + (priceData.harga_telur / 30000) +
    (priceData.harga_bbm / 12500) + (priceData.harga_listrik / 1500) + (priceData.harga_air / 5000) +
    (priceData.harga_obat / 150000) + (priceData.harga_pendidikan / 500000)
  ) / 11;
  const priceSubsidyExpense = Math.max(0, (1.0 - avgPriceMultiplier) * 1500);

  const totalAnnualExpense = maintenanceExpense + militaryExpense + (expData.debtInterestPaid || 0) + priceSubsidyExpense;
  const netAnnualSurplus = totalAnnualRevenue - totalAnnualExpense;
  const dailyDelta = netAnnualSurplus / 365;

  return {
    totalAnnualRevenue,
    totalAnnualExpense,
    netAnnualSurplus,
    dailyDelta,
    dailyTaxRevenue: Object.values(revenues.domestic).reduce((a, b) => a + b, 0) + 
                     Object.values(revenues.trade).reduce((a, b) => a + b, 0) +
                     (Object.values(revenues.resources).reduce((a, b) => a + b, 0) / 365),
    revenues,
    expenses: {
      maintenance: maintenanceExpense,
      military: militaryExpense,
      debtInterest: expData.debtInterestPaid || 0,
      priceSubsidies: priceSubsidyExpense,
      subsidies: 0,
      salaries: 0
    },
    details: {
      priceMultiplier: avgPriceMultiplier,
      subsidiLevel: 0,
      salaryMultiplier: 0
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

