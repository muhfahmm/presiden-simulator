// Sektor Imports & Exports
export * from "./1_sektor_listrik_nasional/1_sektor_listrik_nasional";
export * from "./2_sektor_mineral_kritis";
export * from "./3_manufaktur";
export * from "./4_sektor_peternakan";
export * from "./5_sektor_agrikultur";
export * from "./6_sektor_perikanan";
export * from "./7_sektor_olahan_pangan";
export * from "./8_sektor_farmasi";
export * from "./9_infrastruktur";

import { manufakturRate } from "./3_manufaktur";
import { peternakanRate } from "./4_sektor_peternakan";
import { agrikulturRate } from "./5_sektor_agrikultur";
import { perikananRate } from "./6_sektor_perikanan";
import { olahanPanganRate } from "./7_sektor_olahan_pangan";
import { farmasiRate } from "./8_sektor_farmasi";

// Aggregators for legacy support or combined rates
export const produkIndustriRate = { 
  ...manufakturRate, 
  ...olahanPanganRate, 
  ...farmasiRate 
};

export const komoditasPanganRate = { 
  ...peternakanRate, 
  ...agrikulturRate, 
  ...perikananRate 
};
