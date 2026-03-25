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
    const baseCount = (countryData.sektor_ekstraksi[val.dataKey as keyof typeof countryData.sektor_ekstraksi] || 0);
    const totalCount = Number(baseCount) + (Number(buildingDeltas[key]) || 0);
    deltas[key] = totalCount * Math.floor(val.production || 0);
  });

  // 2. Industri & Manufaktur
  Object.entries(produkIndustriRate).forEach(([key, val]: [string, any]) => {
    // Robust mapping similar to ProduksiModal
    const baseKeyMapping: Record<string, string> = {
      "electronics_factory": "semikonduktor",
      "car_factory": "mobil",
      "motorcycle_factory": "sepeda_motor",
      "cement_factory": "semen_beton",
      "smelter": "smelter",
      "bottled_water_factory": "air_mineral",
      "sugar_factory": "gula",
      "pharma_factory": "farmasi",
      "noodle_factory": "mie_instan",
      "meat_processing_factory": "pengolahan_daging",
      "sawmill": "kayu",
      "fertilizer_factory": "pupuk",
      "bakery_factory": "roti"
    };
    const baseKey = baseKeyMapping[key] || key.replace('_factory', '');
    const baseCount = (countryData.sektor_manufaktur && typeof (countryData.sektor_manufaktur as any)[baseKey] === 'number')
      ? (countryData.sektor_manufaktur as any)[baseKey]
      : 0;
    const totalCount = baseCount + (Number(buildingDeltas[key]) || 0);
    deltas[key] = totalCount * Math.floor(val.production || 0);
  });

  // 3. Pangan & Komoditas (Grouped for UI Alignment)
  const panganGroups = [
    { key: "livestock_poultry", base: ["ayam", "unggas"], deltas: ["poultry_farm", "egg_farm"], sector: "sektor_peternakan" },
    { key: "livestock_dairy", base: ["sapi_perah"], deltas: ["dairy_farm"], sector: "sektor_peternakan" },
    { key: "livestock_beef", base: ["sapi_potong"], deltas: ["cattle_farm"], sector: "sektor_peternakan" },
    { key: "livestock_sheep", base: ["domba_kambing"], deltas: ["sheep_farm"], sector: "sektor_peternakan" },
    { key: "livestock_shrimp", base: ["udang", "kerang"], deltas: ["shrimp_farm"], sector: "sektor_peternakan" },
    { key: "livestock_fish", base: ["ikan"], deltas: ["freshwater_fish_farm"], sector: "sektor_peternakan" },
    { key: "agri_rice", base: ["beras"], deltas: ["paddy_field"], sector: "sektor_pertanian" },
    { key: "agri_grains", base: ["gandum", "jagung"], deltas: ["wheat_field", "corn_field"], sector: "sektor_pertanian" },
    { key: "agri_veg", base: ["sayur_sayuran", "umbi_umbian"], deltas: ["vegetable_farm", "tuber_field"], sector: "sektor_pertanian" },
    { key: "agri_soy", base: ["kedelai"], deltas: ["soybean_field"], sector: "sektor_pertanian" },
    { key: "agri_palm", base: ["kelapa_sawit"], deltas: ["palm_oil_plantation"], sector: "sektor_pertanian" },
    { key: "agri_luxury", base: ["kopi", "teh", "cokelat"], deltas: ["coffee_plantation", "tea_plantation", "cocoa_plantation"], sector: "sektor_pertanian" },
  ];

  panganGroups.forEach(group => {
    let baseCount = 0;
    const sectorData = countryData[group.sector as keyof CountryData] as any;
    if (sectorData) {
      group.base.forEach(b => baseCount += (sectorData[b] || 0));
    }
    let deltaCount = 0;
    group.deltas.forEach(d => deltaCount += (Number(buildingDeltas[d]) || 0));
    
    // For these grouped items, tarif is effectively 1 per count in the UI
    deltas[group.key] = baseCount + deltaCount;
  });

  return deltas;
}
