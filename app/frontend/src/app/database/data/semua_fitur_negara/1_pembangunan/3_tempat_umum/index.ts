export interface PendidikanData {
  prasekolah?: number;
  dasar?: number;
  menengah?: number;
  lanjutan?: number;
  universitas?: number;
  lembaga_pendidikan?: number;
  laboratorium?: number;
  observatorium?: number;
  pusat_penelitian?: number;
  pusat_pengembangan?: number;
  literasi?: number;
}

export interface KesehatanData {
  rumah_sakit_besar?: number;
  rumah_sakit_kecil?: number;
  pusat_diagnostik?: number;
  harapan_hidup?: number;
  indeks_kesehatan?: number;
}

export interface OlahragaSosialData {
  kolam_renang: number;
  sirkuit_balap: number;
  stadion: number;
  stadion_internasional: number;
}

export interface HukumData {
  pusat_bantuan_hukum?: number;
  pengadilan?: number;
  kejaksaan?: number;
  pos_polisi?: number;
  armada_mobil_polisi?: number;
  akademi_polisi?: number;
  indeks_korupsi?: number;
  indeks_keamanan?: number;
}

export interface SektorKomersial {
  mall?: number;
  hotel?: number;
  pusat_grosir_tekstil?: number;
}

export interface SektorHiburan {
  bioskop?: number;
  teater?: number;
}

export interface SektorSosial {
  pendidikan?: PendidikanData;
  kesehatan?: KesehatanData;
  olahraga?: OlahragaSosialData;
  hukum?: HukumData;
  komersial?: SektorKomersial;
  hiburan?: SektorHiburan;
}

export * from "./1_infrastruktur";
