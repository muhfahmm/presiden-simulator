import { produkIndustriRate as manufakturRate } from "@/app/database/data/harga_bangunan_negara/1_pembangunan/1_produksi/3_db_manufaktur";

export { manufakturRate };

export interface SektorManufaktur {
  semikonduktor?: number;
  mobil?: number;
  sepeda_motor?: number;
  smelter?: number;
  semen_beton?: number;
  kayu?: number;
  pupuk?: number;
}

export interface ManufacturingData {
  semikonduktor: number;
  mobil: number;
  sepeda_motor: number;
  smelter: number;
  semen_beton: number;
  kayu: number;
  pupuk: number;
}
