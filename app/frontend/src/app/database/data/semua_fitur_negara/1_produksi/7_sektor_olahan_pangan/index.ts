import { olahanPanganRate } from "@/app/database/data/harga_bangunan_negara/1_pembangunan/1_produksi/7_db_olahan_pangan";

export { olahanPanganRate };

export interface SektorOlahanPangan {
  air_mineral?: number;
  gula?: number;
  roti?: number;
  pengolahan_daging?: number;
  mie_instan?: number;
  minyak_goreng?: number;
  susu?: number;
  pakan_ternak?: number;
  ikan_kaleng?: number;
  kopi_teh?: number;
}

export interface FoodProcessingData {
  air_mineral: number;
  gula: number;
  roti: number;
  pengolahan_daging: number;
  mie_instan: number;
  minyak_goreng: number;
  susu: number;
  pakan_ternak: number;
  ikan_kaleng: number;
  kopi_teh: number;
}
