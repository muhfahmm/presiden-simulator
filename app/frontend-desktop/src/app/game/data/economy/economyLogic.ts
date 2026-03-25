import { CountryData } from "@/app/select-country/data/types/_index";
import { taxStorage } from "@/app/game/components/ekonomi/2-pajak/TaxStorage";
import { incomeStorage } from "@/app/game/components/ekonomi/4-pemasukkanpengeluaran/pemasukkan/IncomeStorage";
import { expenseStorage } from "@/app/game/components/ekonomi/4-pemasukkanpengeluaran/pengeluaran/ExpenseStorage";
import { KAPASITAS_LISTRIK_METADATA } from "@/app/select-country/data/electricity/1_pasokan_listrik";
import { mineralKritisRate } from "@/app/select-country/data/pembangunan/laju-produksi/1_mineral_kritis";
import { produkIndustriRate } from "@/app/select-country/data/pembangunan/laju-produksi/2_produk_industri";
import { komoditasPanganRate } from "@/app/select-country/data/pembangunan/laju-produksi/3_komoditas_pangan";
import { produksiMiliter } from "@/app/select-country/data/pembangunan/produksi-militer";
import { tempatUmum } from "@/app/select-country/data/pembangunan/tempat-umum";
import { priceStorage } from "@/app/game/components/ekonomi/8-pasar-domestik/priceStorage";

/**
 * Calculates the total daily maintenance cost for all national infrastruktur.
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
    countryData.sektor_listrik,
    countryData.infrastruktur,
    countryData.sektor_ekstraksi,
    countryData.sektor_manufaktur,
    countryData.sektor_agri_peternakan,
    countryData.sektor_sosial?.pendidikan,
    countryData.sektor_sosial?.kesehatan,
    countryData.sektor_sosial?.olahraga,
    countryData.sektor_sosial?.hukum,
    countryData.sektor_pertahanan,
    countryData.sektor_armada,
    countryData.sektor_keamanan
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
 * Calculates maintenance for user-built infrastruktur.
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
  const currentTaxes = taxStorage.getTaxes(countryData.name_en) || countryData.pajak;
  const domesticTaxes = ["ppn", "korporasi", "pendapatan_nasional", "lingkungan", "lainnya"];
  const tradeTaxes = ["bea_cukai", "transit_sekutu", "transit_non_sekutu"];

  const activeDomesticRevenue = domesticTaxes.reduce((acc, key) => acc + ((currentTaxes as any)[key]?.pendapatan || 0), 0);
  const activeTradeRevenue = tradeTaxes.reduce((acc, key) => acc + ((currentTaxes as any)[key]?.pendapatan || 0), 0);
  
  const incomeData = incomeStorage.getData();
  const dailyTaxRevenue = activeDomesticRevenue + activeTradeRevenue + (incomeData.grants || 0) + (incomeData.investments || 0);

  // 2. Expenses
  const expData = expenseStorage.getData(countryData.name_en, countryData);
  
  // Base Maintenance
  const maintenanceExpense = calculateTotalMaintenance(countryData, buildingDeltas);
  
  // Military
  const dailyMilitaryExpense = produksiMiliter.reduce((acc, item: any) => acc + (item.maintenance || 0), 0);

  // Subsidies (Percentage of tax pendapatan - simplified simulation)
  const totalSubsidiLevel = ((expData.subsidi_energi || 0) + (expData.subsidi_pangan || 0) + (expData.subsidi_kesehatan || 0) + (expData.subsidi_pendidikan || 0) + (expData.subsidi_umkm || 0) + (expData.subsidi_transportasi || 0) + (expData.subsidi_perumahan || 0)) / 7;
  const subsidyExpense = (dailyTaxRevenue * (totalSubsidiLevel / 100));

  // Salaries (Linked to maintenance base but scaled by multiplier)
  // Simplified: 10% of total maintenance represents the base salary cost, scaled by user multiplier categories
  const avgSalaryMultiplier = ((expData.gaji_asn || 1.0) + (expData.gaji_guru || 1.0) + (expData.gaji_medis || 1.0) + (expData.gaji_militer || 1.0)) / 4;
  const salaryExpense = (maintenanceExpense * 0.1) * avgSalaryMultiplier;

  // Prices Subsidy Impact
  const priceData = priceStorage.getData();
  const avgPriceMultiplier = (
    (priceData.harga_beras / 15000) + (priceData.harga_daging_sapi / 120000) + (priceData.harga_ayam / 40000) +
    (priceData.harga_minyak_goreng / 18000) + (priceData.harga_gula / 16000) + (priceData.harga_telur / 30000) +
    (priceData.harga_bbm / 12500) + (priceData.harga_listrik / 1500) + (priceData.harga_air / 5000) +
    (priceData.harga_obat / 150000) + (priceData.harga_pendidikan / 500000)
  ) / 11;
  const priceSubsidyExpense = Math.max(0, (1.0 - avgPriceMultiplier) * 1500); // Max ~750 cost at 0.5x harga

  const totalDailyExpense = maintenanceExpense + dailyMilitaryExpense + subsidyExpense + salaryExpense + (expData.debtInterestPaid || 0) + priceSubsidyExpense;

  return dailyTaxRevenue - totalDailyExpense;
}

export function parseIncomeString(pendapatan_nasional: string): number {
  if (!pendapatan_nasional) return 100;
  const cleaned = pendapatan_nasional.replace(/[.,\s]/g, '');
  const plainNum = parseFloat(cleaned);
  if (!isNaN(plainNum) && plainNum > 0) return plainNum;
  const match = pendapatan_nasional.match(/(\d+[\d.,]*)\s*([TMK])/);
  if (match) return parseFloat(match[1].replace(/[.,]/g, ''));
  return 100;
}
