import { mineralKritisRate, produkIndustriRate, komoditasPanganRate } from "../../../select-country/data/pembangunan/laju-produksi";
import { CountryData } from "../../../select-country/data/types";

/**
 * Calculates the total daily output for each building type based on base country 
 * units and newly constructed buildings.
 */
export function calculateDailyProductionTotals(countryData: CountryData, buildingDeltas: Record<string, number>): Record<string, number> {
  const deltas: Record<string, number> = {};

  // 1. Ekstraksi & Energi
  Object.entries(mineralKritisRate).forEach(([key, val]: [string, any]) => {
    const baseCount = val.isInfrastructure 
      ? (countryData.infrastructure[val.dataKey as keyof typeof countryData.infrastructure] || 0)
      : (countryData.sector_extraction[val.dataKey as keyof typeof countryData.sector_extraction] || 0);
    const totalCount = Number(baseCount) + (Number(buildingDeltas[key]) || 0);
    deltas[key] = totalCount * (val.production || 0);
  });

  // 2. Pangan & Komoditas
  Object.entries(komoditasPanganRate).forEach(([key, val]: [string, any]) => {
    // Some are in agriculture, some in livestock
    const agriValue = countryData.sector_agriculture?.[key as keyof typeof countryData.sector_agriculture];
    const liveValue = countryData.sector_livestock?.[key as keyof typeof countryData.sector_livestock];
    
    const agriCount = typeof agriValue === 'number' ? agriValue : 0;
    const liveCount = typeof liveValue === 'number' ? liveValue : 0;
    
    // Fallback logic for keys that might be in one or the other
    const baseCount = agriCount || liveCount || 0;
    
    const totalCount = baseCount + (Number(buildingDeltas[key]) || 0);
    deltas[key] = totalCount * (val.production || 0);
  });

  return deltas;
}
