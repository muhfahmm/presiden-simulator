import { CountryData } from "@/app/database/data/types/index";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { incomeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pemasukkan/IncomeStorage";
import { expenseStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pengeluaran/ExpenseStorage";
import { calculateDailyMaintenance } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/pemeliharaan_militer_polisi";
import { priceStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";

/**
 * Calculates the total daily maintenance cost.
 */
export function calculateTotalMaintenance(countryData: CountryData, buildingDeltas: Record<string, number>): number {
  return calculateDailyMaintenance(countryData, buildingDeltas);
}

/**
 * Legacy wrapper: Calculates the total daily maintenance cost for all national base infrastructure.
 */
export function calculateBaseMaintenance(countryData: CountryData): number {
  return calculateDailyMaintenance(countryData, {});
}

/**
 * Legacy wrapper: Calculates maintenance for user-built infrastructure (deltas).
 */
export function calculateDeltaMaintenance(buildingDeltas: Record<string, number>): number {
  // Pass an empty country object that satisfy the required sectors to avoid crashes
  return calculateDailyMaintenance({} as any, buildingDeltas);
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
    other: Record<string, number>;
  };
  expenses: {
    maintenance: number;
    military: number;
    subsidies: number;
    salaries: number;
    debtInterest: number;
    priceSubsidies: number;
  };
  details: {
    subsidiLevel: number;
    salaryMultiplier: number;
    priceMultiplier: number;
  }
}

/**
 * Calculates a complete breakdown of the national budget.
 */
export function calculateBudgetBreakdown(countryData: CountryData, buildingDeltas: Record<string, number>): BudgetBreakdown {
  // 1. Income (Revenue) — iterate ALL tax keys dynamically (same as PajakModal)
  const currentTaxes = taxStorage.getTaxes(countryData.name_en) || countryData.pajak;
  const TRADE_KEYS = new Set(["bea_cukai", "transit_sekutu", "transit_non_sekutu", "tarif_ekspor", "tarif_impor"]);
  const allTaxKeys = Object.keys(currentTaxes as any);

  const revenues: BudgetBreakdown['revenues'] = { domestic: {}, trade: {}, other: {} };
  
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

  const totalAnnualRevenue = 
    Object.values(revenues.domestic).reduce((a, b) => a + b, 0) +
    Object.values(revenues.trade).reduce((a, b) => a + b, 0) +
    Object.values(revenues.other).reduce((a, b) => a + b, 0);

  // 2. Expenses
  const expData = expenseStorage.getData(countryData.name_en, countryData);
  
  // Maintenance (Termasuk Militer & Polisi)
  const maintenanceExpense = calculateTotalMaintenance(countryData, buildingDeltas);
  
  // Military (Khusus operasional/pabrik jika diperlukan tambahan, saat ini sudah masuk maintenance)
  const militaryExpense = 0; 

  // Subsidies
  const totalSubsidiLevel = ((expData.subsidi_energi || 0) + (expData.subsidi_pangan || 0) + (expData.subsidi_kesehatan || 0) + (expData.subsidi_pendidikan || 0) + (expData.subsidi_umkm || 0) + (expData.subsidi_transportasi || 0) + (expData.subsidi_perumahan || 0)) / 7;
  const subsidyExpense = (totalAnnualRevenue * (totalSubsidiLevel / 100));

  // Salaries
  const avgSalaryMultiplier = ((expData.gaji_asn || 1.0) + (expData.gaji_guru || 1.0) + (expData.gaji_medis || 1.0) + (expData.gaji_militer || 1.0)) / 4;
  const salaryExpense = (maintenanceExpense * 0.1) * avgSalaryMultiplier;

  // Price Subsidies
  const priceData = priceStorage.getData();
  const avgPriceMultiplier = (
    (priceData.harga_beras / 15000) + (priceData.harga_daging_sapi / 120000) + (priceData.harga_ayam / 40000) +
    (priceData.harga_minyak_goreng / 18000) + (priceData.harga_gula / 16000) + (priceData.harga_telur / 30000) +
    (priceData.harga_bbm / 12500) + (priceData.harga_listrik / 1500) + (priceData.harga_air / 5000) +
    (priceData.harga_obat / 150000) + (priceData.harga_pendidikan / 500000)
  ) / 11;
  const priceSubsidyExpense = Math.max(0, (1.0 - avgPriceMultiplier) * 1500);

  const totalAnnualExpense = maintenanceExpense + militaryExpense + subsidyExpense + salaryExpense + (expData.debtInterestPaid || 0) + priceSubsidyExpense;
  const netAnnualSurplus = totalAnnualRevenue - totalAnnualExpense;
  const dailyDelta = netAnnualSurplus / 365;

  return {
    totalAnnualRevenue,
    totalAnnualExpense,
    netAnnualSurplus,
    dailyDelta,
    dailyTaxRevenue: Object.values(revenues.domestic).reduce((a, b) => a + b, 0) + Object.values(revenues.trade).reduce((a, b) => a + b, 0),
    revenues,
    expenses: {
      maintenance: maintenanceExpense,
      military: militaryExpense,
      subsidies: subsidyExpense,
      salaries: salaryExpense,
      debtInterest: expData.debtInterestPaid || 0,
      priceSubsidies: priceSubsidyExpense
    },
    details: {
      subsidiLevel: totalSubsidiLevel,
      salaryMultiplier: avgSalaryMultiplier,
      priceMultiplier: avgPriceMultiplier
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

