import { mineralKritisRate } from "@/app/database/data/harga_bangunan_negara/1_pembangunan";

export { mineralKritisRate };

export interface SektorEkstraksi {
  emas?: number;
  uranium?: number;
  batu_bara?: number;
  minyak_bumi?: number;
  gas_alam?: number;
  garam?: number;
  nikel?: number;
  litium?: number;
  tembaga?: number;
  aluminium?: number;
  logam_tanah_jarang?: number;
  bijih_besi?: number;
}

export interface ExtractionData {
  emas: number;
  uranium: number;
  batu_bara: number;
  minyak_bumi: number;
  gas_alam: number;
  garam: number;
  nikel: number;
  litium: number;
  tembaga: number;
  aluminium: number;
  logam_tanah_jarang: number;
  bijih_besi: number;
}
