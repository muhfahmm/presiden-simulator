import { ExpenseData } from "@/app/game/components/ekonomi/4-pemasukkanpengeluaran/pengeluaran/ExpenseStorage";
import { happinessStorage } from "./happinessStorage";

export interface HappinessBreakdown {
  global: number;
  salary: number;
  subsidy: number;
  infrastructure: number;
}

/**
 * Calculates unified Population Happiness index based on active fiscal policies
 * Weights: 40% Salaries, 40% Subsidies, 20% Infrastructure
 */
export const calculatePopulationHappiness = (expData: ExpenseData): HappinessBreakdown => {
  // 1. Gaji Pegawai (10-100% Scale compatible)
  const getSat = (m: number) => m <= 2.0 ? (m <= 0.5 ? 25 : m <= 1.0 ? 50 : m <= 1.5 ? 75 : 100) : m;
  const satAsn = getSat(expData.salaryAsn || 100);
  const satGuru = getSat(expData.salaryGuru || 100);
  const satMedis = getSat(expData.salaryMedis || 100);
  const satMiliter = getSat(expData.salaryMiliter || 100);
  const salarySat = Math.round((satAsn + satGuru + satMedis + satMiliter) / 4);

  // 2. Subsidi Publik (0 - 100% direct score from 7 categories)
  const avgSubsidy = ((expData.subsidyEnergi || 0) + (expData.subsidyPangan || 0) + (expData.subsidyKesehatan || 0) + (expData.subsidyPendidikan || 0) + (expData.subsidyUmkm || 0) + (expData.subsidyTransport || 0) + (expData.subsidyRumah || 0)) / 7;
  const subsidySat = Math.round(avgSubsidy);

  // 3. Pemeliharaan Infrastruktur (Static until linked to deficit ratio)
  const infraSat = 85; // Default healthy baseline

  // Dynamic Global Value from Storage (Monthly updated engine)
  const storedValue = happinessStorage.getStats().value;

  return {
    global: storedValue,
    salary: salarySat,
    subsidy: subsidySat,
    infrastructure: infraSat
  };
};
