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

  // 3. Pangan & Komoditas (Grouped for UI Alignment)
  const panganGroups = [
    { key: "livestock_poultry", base: ["chicken", "poultry"], deltas: ["poultry_farm", "egg_farm"], sector: "sector_livestock" },
    { key: "livestock_dairy", base: ["dairy_cow"], deltas: ["dairy_farm"], sector: "sector_livestock" },
    { key: "livestock_beef", base: ["beef_cow"], deltas: ["cattle_farm"], sector: "sector_livestock" },
    { key: "livestock_sheep", base: ["sheep_goat"], deltas: ["sheep_farm"], sector: "sector_livestock" },
    { key: "livestock_shrimp", base: ["shrimp", "shellfish"], deltas: ["shrimp_farm"], sector: "sector_livestock" },
    { key: "livestock_fish", base: ["fish"], deltas: ["freshwater_fish_farm"], sector: "sector_livestock" },
    { key: "agri_rice", base: ["rice"], deltas: ["paddy_field"], sector: "sector_agriculture" },
    { key: "agri_grains", base: ["wheat", "corn"], deltas: ["wheat_field", "corn_field"], sector: "sector_agriculture" },
    { key: "agri_veg", base: ["vegetables", "tubers"], deltas: ["vegetable_farm", "tuber_field"], sector: "sector_agriculture" },
    { key: "agri_soy", base: ["soy"], deltas: ["soybean_field"], sector: "sector_agriculture" },
    { key: "agri_palm", base: ["palm_oil"], deltas: ["palm_oil_plantation"], sector: "sector_agriculture" },
    { key: "agri_luxury", base: ["coffee", "tea", "cocoa"], deltas: ["coffee_plantation", "tea_plantation", "cocoa_plantation"], sector: "sector_agriculture" },
  ];

  panganGroups.forEach(group => {
    let baseCount = 0;
    const sectorData = countryData[group.sector as keyof CountryData] as any;
    if (sectorData) {
      group.base.forEach(b => baseCount += (sectorData[b] || 0));
    }
    let deltaCount = 0;
    group.deltas.forEach(d => deltaCount += (Number(buildingDeltas[d]) || 0));
    
    // For these grouped items, rate is effectively 1 per count in the UI
    deltas[group.key] = baseCount + deltaCount;
  });

  return deltas;
}
