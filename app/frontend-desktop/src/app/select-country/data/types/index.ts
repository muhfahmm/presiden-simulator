import { Religion } from "../religions";
import { Ideology } from "../ideologies";
import { SektorListrik, SektorInfrastruktur, SektorEkstraksi, SektorManufaktur, SektorPeternakan, SektorPertanian } from "./produksi";
import { SektorPertahanan, SektorArmada, SektorKeamanan } from "./militer";
import { SektorSosial } from "./sosial";
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
  sektor_pertanian: SektorPertanian;
  sektor_pertahanan: SektorPertahanan;
  sektor_armada: SektorArmada;
  sektor_keamanan: SektorKeamanan;
  sektor_sosial: SektorSosial;

  // Global & Politik
  un_vote: "Pro" | "Netral" | "Kontra";
  pendapatan_nasional: string;
  geopolitik: {
    sekutu: string[];
    musuh: string[];
    sikap: "Globalis" | "Isolasionis" | "Netral";
    pengaruh_internasional: {
      kekuatan_lunak: number;
      kekuatan_keras: number;
      prestise_diplomatik: number;
    };
    organisasi_internasional: {
      name: string;
      role: "Anggota" | "Pemimpin" | "Pengamat";
    }[];
    perjanjian?: {
      mitra: string;
      jenis: "Perdagangan" | "Militer" | "Penelitian" | "Politik";
      status: "Aktif" | "Tertunda" | "Pendinginan";
    }[];
  };
  kementerian: {
    kesehatan: number;
    pendidikan: number;
    keamanan: number;
    keuangan: number;
    lingkungan: number;
  };
}

// Re-export nested types for convenience
export * from "./produksi";
export * from "./militer";
export * from "./sosial";
export * from "./ekonomi";
