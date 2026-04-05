import { perikananRate } from "@/app/database/data/harga_bangunan_negara/1_pembangunan/1_produksi/6_db_perikanan";

export { perikananRate };

export interface SektorPerikanan {
  udang?: number;
  ikan?: number;
  mutiara?: number;
}

export interface FisheryData {
  udang: number;
  ikan: number;
  mutiara: number;
}
