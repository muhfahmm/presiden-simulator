import { Religion } from "../religions";
import { Ideology } from "../ideologies";
import { SektorListrik } from "./1_kelistrikan/_index";
import { SektorInfrastruktur } from "./2_infrastruktur/_index";
import { SektorManufaktur, SektorAgriPeternakan } from "./3_produksi/_index";
import { SektorPertahanan, SektorArmadaMiliter, SektorMiliterStrategis, SektorArmadaKepolisian } from "./4_militer/_index";
import { SektorSosial } from "./5_layanan_sosial/_index";
import { SektorGeopolitik } from "./6_geopolitik_dan_luar_negeri/_index";
import { SektorEkstraksi } from "./7_ekstraksi_mineral_kritis/_index";
import { OlahragaData } from "./8_olahraga/_index";
import { EkonomiData, PajakData } from "./ekonomi/_index";

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
  sektor_agri_peternakan: SektorAgriPeternakan;
  sektor_pertahanan: SektorPertahanan;
  armada_militer: SektorArmadaMiliter;
  militer_strategis: SektorMiliterStrategis;
  armada_kepolisian: SektorArmadaKepolisian;
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
export * from "./1_kelistrikan/_index";
export * from "./2_infrastruktur/_index";
export * from "./3_produksi/_index";
export * from "./4_militer/_index";
export * from "./5_layanan_sosial/_index";
export * from "./6_geopolitik_dan_luar_negeri/_index";
export * from "./7_ekstraksi_mineral_kritis/_index";
export * from "./8_olahraga/_index";
export * from "./ekonomi/_index";
