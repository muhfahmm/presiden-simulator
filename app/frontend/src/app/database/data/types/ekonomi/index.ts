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
