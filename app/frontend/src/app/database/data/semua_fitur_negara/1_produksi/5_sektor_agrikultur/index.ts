import { agrikulturRate } from "@/app/database/data/harga_bangunan_negara/1_pembangunan/1_produksi/5_db_agrikultur";

export { agrikulturRate };

export interface SektorAgrikultur {
  padi?: number;
  gandum?: number;
  jagung?: number;
  sayur?: number;
  umbi?: number;
  kedelai?: number;
  kelapa_sawit?: number;
  teh?: number;
  kopi?: number;
  kakao?: number;
  tebu?: number;
  karet?: number;
  kapas?: number;
  tembakau?: number;
}

export interface AgricultureData {
  padi: number;
  gandum: number;
  jagung: number;
  sayur: number;
  umbi: number;
  kedelai: number;
  kelapa_sawit: number;
  teh: number;
  kopi: number;
  kakao: number;
  tebu: number;
  karet: number;
  kapas: number;
  tembakau: number;
}
