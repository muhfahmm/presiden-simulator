import { CountryData } from "../../types";

export const KONSUMSI_PRODUKSI = {
  semiconductor: 50,    // MW per unit
  car: 20,              // MW per unit
  motorcycle: 15,       // MW per unit
  smelter: 100,         // MW per unit
  concrete_cement: 30, // MW per unit
  wood: 5,              // MW per unit
  mineral_water: 2,     // MW per unit
  sugar: 10,            // MW per unit
  bread: 2,             // MW per unit
  pharmacy: 10,         // MW per unit
  fertilizer: 20,       // MW per unit
  meat_processing: 5,   // MW per unit
  instant_noodle: 10    // MW per unit
};

export const KONSUMSI_AGRI = {
  rice: 0.2,            // MW per unit
  wheat: 0.1,           // MW per unit
  corn: 0.1,            // MW per unit
  tubers: 0.1,          // MW per unit
  soy: 0.1,             // MW per unit
  palm_oil: 1,          // MW per unit
  tea: 0.1,             // MW per unit
  coffee: 0.3,          // MW per unit
  cocoa: 0.2,           // MW per unit
  sugarcane: 1,         // MW per unit
  vegetables: 0.2       // MW per unit
};

export const KONSUMSI_PETERNAKAN = {
  chicken: 0.05,        // MW per unit
  poultry: 0.05,        // MW per unit
  dairy_cow: 0.5,       // MW per unit
  beef_cow: 0.2,        // MW per unit
  sheep_goat: 0.1,       // MW per unit
  shrimp: 1,            // MW per unit
  fish: 0.5,            // MW per unit
  shellfish: 0.3        // MW per unit
};

export function hitungKonsumsiProduksi(manufacturing: CountryData["sector_manufacturing"]) {
  return (
    manufacturing.semiconductor * KONSUMSI_PRODUKSI.semiconductor +
    manufacturing.car * KONSUMSI_PRODUKSI.car +
    manufacturing.motorcycle * KONSUMSI_PRODUKSI.motorcycle +
    manufacturing.smelter * KONSUMSI_PRODUKSI.smelter +
    manufacturing.concrete_cement * KONSUMSI_PRODUKSI.concrete_cement +
    manufacturing.wood * KONSUMSI_PRODUKSI.wood +
    manufacturing.mineral_water * KONSUMSI_PRODUKSI.mineral_water +
    manufacturing.sugar * KONSUMSI_PRODUKSI.sugar +
    manufacturing.bread * KONSUMSI_PRODUKSI.bread +
    manufacturing.pharmacy * KONSUMSI_PRODUKSI.pharmacy +
    manufacturing.fertilizer * KONSUMSI_PRODUKSI.fertilizer +
    manufacturing.meat_processing * KONSUMSI_PRODUKSI.meat_processing +
    manufacturing.instant_noodle * KONSUMSI_PRODUKSI.instant_noodle
  );
}
