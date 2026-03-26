import { Religion } from "../religions";
import { Ideology } from "../ideologies";
import { SektorListrik } from "./1_kelistrikan";
import { SektorInfrastruktur } from "./2_infrastruktur";
import { SektorManufaktur, SektorPeternakan, SektorAgrikultur, SektorPerikanan, SektorOlahanPangan, SektorFarmasi } from "./3_produksi";
import { SektorPertahanan, SektorArmadaMiliter, SektorMiliterStrategis, SektorArmadaKepolisian, SektorPabrikMiliter } from "./4_militer";
import { SektorSosial } from "./5_layanan_sosial";
import { SektorGeopolitik } from "./6_geopolitik_dan_luar_negeri";
import { SektorEkstraksi } from "./7_ekstraksi_mineral_kritis";
import { OlahragaData } from "./8_olahraga";
import { EkonomiData, PajakData } from "./ekonomi";

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
  sektor_sosial: SektorSosial;
  sektor_olahraga: OlahragaData;
  geopolitik: SektorGeopolitik;

  // Global & Politik
  un_vote: "Pro" | "Netral" | "Kontra";
  pendapatan_nasional: string;
  kementerian: {
    kesehatan: number;
    pendidikan: number;
    keamanan: number;
    keuangan: number;
    lingkungan: number;
  };
}

// Re-export nested types for convenience
export * from "./1_kelistrikan";
export * from "./2_infrastruktur";
export * from "./3_produksi";
export * from "./4_militer";
export * from "./5_layanan_sosial";
export * from "./6_geopolitik_dan_luar_negeri";
export * from "./7_ekstraksi_mineral_kritis";
export * from "./8_olahraga";
export * from "./ekonomi";
