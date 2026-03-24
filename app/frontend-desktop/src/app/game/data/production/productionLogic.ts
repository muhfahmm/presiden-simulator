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
    const baseCount = (countryData.sector_extraction[val.dataKey as keyof typeof countryData.sector_extraction] || 0);
    const totalCount = Number(baseCount) + (Number(buildingDeltas[key]) || 0);
    deltas[key] = totalCount * Math.floor(val.production || 0);
  });

  // 2. Industri & Manufaktur
  Object.entries(produkIndustriRate).forEach(([key, val]: [string, any]) => {
    // Robust mapping similar to ProduksiModal
    const baseKeyMapping: Record<string, string> = {
      "electronics_factory": "semiconductor",
      "car_factory": "car",
      "motorcycle_factory": "motorcycle",
      "cement_factory": "concrete_cement",
      "smelter": "smelter",
      "bottled_water_factory": "mineral_water",
      "sugar_factory": "sugar",
      "pharma_factory": "pharmacy",
      "noodle_factory": "instant_noodle",
      "meat_processing_factory": "meat_processing",
      "sawmill": "wood",
      "fertilizer_factory": "fertilizer",
      "bakery_factory": "bread"
    };
    const baseKey = baseKeyMapping[key] || key.replace('_factory', '');
    const baseCount = (countryData.sector_manufacturing && typeof (countryData.sector_manufacturing as any)[baseKey] === 'number')
      ? (countryData.sector_manufacturing as any)[baseKey]
      : 0;
    const totalCount = baseCount + (Number(buildingDeltas[key]) || 0);
    deltas[key] = totalCount * Math.floor(val.production || 0);
  });

  // 3. Pangan & Komoditas
  Object.entries(komoditasPanganRate).forEach(([key, val]: [string, any]) => {
    const agriValue = countryData.sector_agriculture?.[key as keyof typeof countryData.sector_agriculture];
    const liveValue = countryData.sector_livestock?.[key as keyof typeof countryData.sector_livestock];
    
    const agriCount = typeof agriValue === 'number' ? agriValue : 0;
    const liveCount = typeof liveValue === 'number' ? liveValue : 0;
    
    const baseCount = agriCount || liveCount || 0;
    const totalCount = baseCount + (Number(buildingDeltas[key]) || 0);
    deltas[key] = totalCount * Math.floor(val.production || 0);
  });

  return deltas;
}
