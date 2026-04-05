import { Religion } from "../religions";
import { Ideology } from "../ideologies";
import { Ministry } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/7_kementrian/1_database_menteri/types";

// Import Sektor
import { SektorListrik } from "./1_produksi/1_sektor_listrik_nasional/1_sektor_listrik_nasional";
import { SektorInfrastruktur } from "./1_produksi/9_infrastruktur";
import { SektorManufaktur, SektorPeternakan, SektorAgrikultur, SektorPerikanan, SektorOlahanPangan, SektorFarmasi } from "./1_produksi";
import { SektorPertahanan, SektorArmadaMiliter, SektorMiliterStrategis, SektorArmadaKepolisian, SektorPabrikMiliter } from "./2_militer";
import { PendidikanData, KesehatanData, HukumData, SektorKomersial, SektorHiburan } from "./3_sosial";
import { SektorGeopolitik } from "./4_geopolitik";
import { SektorEkstraksi } from "./1_produksi/2_sektor_mineral_kritis";
import { OlahragaData } from "./3_sosial/4_olahraga";

export interface PajakData {
  ppn: { tarif: number; kepuasan: number; pendapatan: number };
  korporasi: { tarif: number; kepuasan: number; pendapatan: number };
  penghasilan: { tarif: number; kepuasan: number; pendapatan: number };
  bea_cukai: { tarif: number; kepuasan: number; pendapatan: number };
  lingkungan: { tarif: number; kepuasan: number; pendapatan: number };
  transit_sekutu: { tarif: number; kepuasan: number; pendapatan: number };
  transit_non_sekutu: { tarif: number; kepuasan: number; pendapatan: number };
  lainnya: { tarif: number; kepuasan: number; pendapatan: number };
}

export interface GajiData {
  gaji_asn: number;
  gaji_guru: number;
  gaji_medis: number;
  gaji_militer: number;
}

export interface SubsidiData {
  subsidi_energi: number;
  subsidi_pangan: number;
  subsidi_kesehatan: number;
  subsidi_pendidikan: number;
  subsidi_umkm: number;
  subsidi_transportasi: number;
  subsidi_perumahan: number;
  subsidi_penumpan?: number; // Optional fallback
}

export interface HargaData {
  harga_beras: number;
  harga_daging_sapi: number;
  harga_ayam: number;
  harga_minyak_goreng: number;
  harga_gula: number;
  harga_telur: number;
  harga_bbm: number;
  harga_listrik: number;
  harga_air: number;
  harga_obat: number;
  harga_pendidikan: number;
}

export interface EkonomiData {
  pajak: PajakData;
  gaji: GajiData;
  subsidi: SubsidiData;
  harga: HargaData;
}

export interface CountryData extends EkonomiData {
  name_en: string;
  name_id: string;
  capital: string;
  lon: number;
  lat: number;
  flag: string;
  jumlah_penduduk: string | number;
  anggaran: string | number;
  religion: Religion;
  ideology: Ideology;
  
  // Sektor
  sektor_listrik: SektorListrik;
  infrastruktur: SektorInfrastruktur;
  sektor_ekstraksi: SektorEkstraksi;
  sektor_manufaktur: SektorManufaktur;
  sektor_peternakan: SektorPeternakan;
  sektor_agrikultur: SektorAgrikultur;
  sektor_perikanan: SektorPerikanan;
  sektor_olahan_pangan: SektorOlahanPangan;
  sektor_farmasi: SektorFarmasi;
  sektor_pertahanan: SektorPertahanan;
  armada_militer: SektorArmadaMiliter;
  militer_strategis: SektorMiliterStrategis;
  armada_kepolisian: SektorArmadaKepolisian;
  pabrik_militer: SektorPabrikMiliter;
  
  // Sektor Sosial (Flattened)
  pendidikan: PendidikanData;
  kesehatan: KesehatanData;
  hukum: HukumData;

  sektor_olahraga: OlahragaData;
  sektor_komersial?: SektorKomersial;
  sektor_hiburan?: SektorHiburan;
  geopolitik: SektorGeopolitik;
  
  // Global & Politik
  pendapatan_nasional: string;
  kementerian: {
    kesehatan?: number;
    pendidikan?: number;
    keamanan?: number;
    keuangan?: number;
    lingkungan?: number;
    kabinet?: Record<number, Ministry>;
    candidates?: Record<number, any[]>;
  };
}

// Re-export nested types for convenience
export * from "./1_produksi/1_sektor_listrik_nasional/1_sektor_listrik_nasional";
export * from "./1_produksi/1_sektor_listrik_nasional/listrik_logic";
export * from "./1_produksi/9_infrastruktur";
export * from "./1_produksi";
export * from "./2_militer";
export * from "./3_sosial";
export * from "./4_geopolitik";
export * from "./1_produksi/2_sektor_mineral_kritis";
export * from "./3_sosial/4_olahraga";

// Modular Rates for Infrastructure & Social
export { 
  infrastrukturRate, 
  sosialRate 
} from "../harga_bangunan_negara/1_pembangunan/3_tempat_umum/2_db_infrastruktur";
