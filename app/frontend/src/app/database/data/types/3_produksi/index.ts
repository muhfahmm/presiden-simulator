import { 
  produkIndustriRate as manufakturRate, 
  peternakanRate, 
  agrikulturRate, 
  perikananRate, 
  olahanPanganRate, 
  farmasiRate 
} from "@/app/database/data/harga_bangunan_negara/1_pembangunan";

export interface SektorManufaktur {
  semikonduktor: number;
  mobil: number;
  sepeda_motor: number;
  smelter: number;
  semen_beton: number;
  kayu: number;
}

export interface SektorPeternakan {
  ayam_unggas: number;
  sapi_perah: number;
  sapi_potong: number;
  domba_kambing: number;
}

export interface SektorAgrikultur {
  padi: number;
  gandum: number;
  jagung: number;
  sayur: number;
  umbi: number;
  kedelai: number;
  kelapa_sawit: number;
  kopi: number;
  teh: number;
  kakao: number;
  tebu: number;
  karet: number;
  kapas: number;
  tembakau: number;
}

export interface SektorPerikanan {
  udang: number;
  mutiara: number;
  ikan: number;
}

export interface SektorOlahanPangan {
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

export interface SektorFarmasi {
  farmasi: number;
}

// Aggregators
export const produkIndustriRate = { ...manufakturRate, ...olahanPanganRate, ...farmasiRate };
export const komoditasPanganRate = { ...peternakanRate, ...agrikulturRate, ...perikananRate };
