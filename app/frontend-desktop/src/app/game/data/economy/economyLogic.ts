import { CountryData } from "../../../select-country/data/types";
import { taxStorage } from "../../components/ekonomi/2-pajak/TaxStorage";
import { incomeStorage } from "../../components/ekonomi/3-pemasukkanpengeluaran/pemasukkan/IncomeStorage";
import { expenseStorage } from "../../components/ekonomi/3-pemasukkanpengeluaran/pengeluaran/ExpenseStorage";
import { KAPASITAS_LISTRIK_METADATA } from "../../../select-country/data/electricity/1_pasokan_listrik";
import { mineralKritisRate } from "../../../select-country/data/pembangunan/laju-produksi/1_mineral_kritis";
import { produkIndustriRate } from "../../../select-country/data/pembangunan/laju-produksi/2_produk_industri";
import { komoditasPanganRate } from "../../../select-country/data/pembangunan/laju-produksi/3_komoditas_pangan";
import { produksiMiliter } from "../../../select-country/data/pembangunan/produksi-militer";
import { tempatUmum } from "../../../select-country/data/pembangunan/tempat-umum";

/**
 * Calculates the total daily maintenance cost for all national infrastructure.
 * Matches the logic used in PemasukkanPengeluaranModal.tsx
 */
export function calculateBaseMaintenance(countryData: CountryData): number {
  const allMetadata = [
    ...Object.values(KAPASITAS_LISTRIK_METADATA),
    ...Object.values(mineralKritisRate),
    ...Object.values(produkIndustriRate),
    ...Object.values(komoditasPanganRate),
    ...Object.values(tempatUmum)
  ];

  let total = 0;
  const sectors = [
    countryData.sector_electricity,
    countryData.infrastructure,
    countryData.sector_extraction,
    countryData.sector_manufacturing,
    countryData.sector_livestock,
    countryData.sector_agriculture,
    countryData.sector_social?.education,
    countryData.sector_social?.health,
    countryData.sector_social?.sports,
    countryData.sector_social?.law
  ];

  sectors.forEach(sector => {
    if (!sector) return;
    Object.entries(sector).forEach(([key, count]) => {
      if (typeof count !== 'number') return;
      const metadata = allMetadata.find((m: any) => m.key === key || m.dataKey === key) as any;
      if (metadata) total += (count * (metadata.maintenanceCost || metadata.maintenance || 0));
    });
  });

  return total / 10000;
}

/**
 * Calculates maintenance for user-built infrastructure.
 */
export function calculateDeltaMaintenance(buildingDeltas: Record<string, number>): number {
  const allMetadata = [
    ...Object.values(KAPASITAS_LISTRIK_METADATA),
    ...Object.values(mineralKritisRate),
    ...Object.values(produkIndustriRate),
    ...Object.values(komoditasPanganRate),
    ...Object.values(tempatUmum)
  ];

  let total = 0;
  Object.entries(buildingDeltas || {}).forEach(([key, count]) => {
    const metadata = allMetadata.find((m: any) => m.key === key || m.dataKey === key) as any;
    if (metadata && typeof count === 'number') {
      total += (count * (metadata.maintenanceCost || metadata.maintenance || 0));
    }
  });

  return total / 10000;
}

/**
 * Calculates the total daily maintenance cost.
 */
export function calculateTotalMaintenance(countryData: CountryData, buildingDeltas: Record<string, number>): number {
  return calculateBaseMaintenance(countryData) + calculateDeltaMaintenance(buildingDeltas);
}

/**
 * Calculates the net change in national budget for one game day.
 */
export function calculateDailyBudgetDelta(countryData: CountryData, buildingDeltas: Record<string, number>): number {
  // 1. Income
  const currentTaxes = taxStorage.getTaxes(countryData.name_en) || countryData.taxes;
  const domesticTaxes = ["vat", "corporate", "income", "environment", "other"];
  const tradeTaxes = ["customs", "transit_allied", "transit_non_allied"];

  const activeDomesticRevenue = domesticTaxes.reduce((acc, key) => acc + ((currentTaxes as any)[key]?.revenue || 0), 0);
  const activeTradeRevenue = tradeTaxes.reduce((acc, key) => acc + ((currentTaxes as any)[key]?.revenue || 0), 0);
  
  const incomeData = incomeStorage.getData();
  const dailyTaxRevenue = activeDomesticRevenue + activeTradeRevenue + (incomeData.grants || 0) + (incomeData.investments || 0);

  // 2. Expenses
  const expData = expenseStorage.getData(countryData.name_en, countryData);
  
  // Base Maintenance
  const maintenanceExpense = calculateTotalMaintenance(countryData, buildingDeltas);
  
  // Military
  const dailyMilitaryExpense = produksiMiliter.reduce((acc, item: any) => acc + (item.maintenance || 0), 0);

  // Subsidies (Percentage of tax revenue - simplified simulation)
  const totalSubsidiLevel = ((expData.subsidyEnergi || 0) + (expData.subsidyPangan || 0) + (expData.subsidyKesehatan || 0) + (expData.subsidyPendidikan || 0) + (expData.subsidyUmkm || 0) + (expData.subsidyTransport || 0) + (expData.subsidyRumah || 0)) / 7;
  const subsidyExpense = (dailyTaxRevenue * (totalSubsidiLevel / 100));

  // Salaries (Linked to maintenance base but scaled by multiplier)
  // Simplified: 10% of total maintenance represents the base salary cost, scaled by user multiplier categories
  const avgSalaryMultiplier = ((expData.salaryAsn || 1.0) + (expData.salaryGuru || 1.0) + (expData.salaryMedis || 1.0) + (expData.salaryMiliter || 1.0)) / 4;
  const salaryExpense = (maintenanceExpense * 0.1) * avgSalaryMultiplier;

  const totalDailyExpense = maintenanceExpense + dailyMilitaryExpense + subsidyExpense + salaryExpense + (expData.debtInterestPaid || 0);

  return dailyTaxRevenue - totalDailyExpense;
}

export function parseIncomeString(income: string): number {
  if (!income) return 100;
  const cleaned = income.replace(/[.,\s]/g, '');
  const plainNum = parseFloat(cleaned);
  if (!isNaN(plainNum) && plainNum > 0) return plainNum;
  const match = income.match(/(\d+[\d.,]*)\s*([TMK])/);
  if (match) return parseFloat(match[1].replace(/[.,]/g, ''));
  return 100;
}
