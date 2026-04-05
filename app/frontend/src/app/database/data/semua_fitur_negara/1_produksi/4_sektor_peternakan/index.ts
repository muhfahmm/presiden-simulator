import { peternakanRate } from "@/app/database/data/harga_bangunan_negara/1_pembangunan/1_produksi/4_db_peternakan";

export { peternakanRate };

export interface SektorPeternakan {
  ayam_unggas?: number;
  sapi_perah?: number;
  sapi_potong?: number;
  domba_kambing?: number;
}

export interface LivestockData {
  ayam_unggas: number;
  sapi_perah: number;
  sapi_potong: number;
  domba_kambing: number;
}
