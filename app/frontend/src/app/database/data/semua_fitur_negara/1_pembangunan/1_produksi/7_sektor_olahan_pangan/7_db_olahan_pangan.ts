// ===================
// DETAIL TOTAL BANGUNAN: Olahan Pangan (Total: 10 Bangunan)
// ===================
export const olahanPanganRate = {
  "1_pabrik_air_mineral": {
    key: "1_pabrik_air_mineral",
    dataKey: "air_mineral",
    deskripsi: "Pabrik Air Mineral",
    produksi: 250000,
    satuan: "LITER",
    biaya_pemeliharaan: 1800,
    waktu_pembangunan: 15,
    biaya_pembangunan: 32000,
    lowongan_kerja: 4500,
    konsumsi_listrik: 35
  },
  "2_pabrik_gula": {
    key: "2_pabrik_gula",
    dataKey: "gula",
    deskripsi: "Pabrik Gula",
    produksi: 45000,
    satuan: "TON",
    biaya_pemeliharaan: 2400,
    waktu_pembangunan: 30,
    biaya_pembangunan: 65000,
    lowongan_kerja: 8000,
    konsumsi_listrik: 95
  },
  "3_pabrik_roti": {
    key: "3_pabrik_roti",
    dataKey: "roti",
    deskripsi: "Pabrik Roti",
    produksi: 150000,
    satuan: "UNIT",
    biaya_pemeliharaan: 1200,
    waktu_pembangunan: 15,
    biaya_pembangunan: 28000,
    lowongan_kerja: 3500,
    konsumsi_listrik: 42
  },
  "4_pabrik_pengolahan_daging": {
    key: "4_pabrik_pengolahan_daging",
    dataKey: "pengolahan_daging",
    deskripsi: "Pabrik Pengolahan Daging",
    produksi: 12000,
    satuan: "TON",
    biaya_pemeliharaan: 3500,
    waktu_pembangunan: 30,
    biaya_pembangunan: 85000,
    lowongan_kerja: 6500,
    konsumsi_listrik: 120
  },
  "5_pabrik_mie_instan": {
    key: "5_pabrik_mie_instan",
    dataKey: "mie_instan",
    deskripsi: "Pabrik Mie Instan",
    produksi: 550000,
    satuan: "UNIT",
    biaya_pemeliharaan: 2800,
    waktu_pembangunan: 15,
    biaya_pembangunan: 45000,
    lowongan_kerja: 7500,
    konsumsi_listrik: 85
  },
  "6_pabrik_minyak_goreng": {
    key: "6_pabrik_minyak_goreng",
    dataKey: "minyak_goreng",
    deskripsi: "Pabrik Minyak Goreng",
    produksi: 95000,
    satuan: "TON",
    biaya_pemeliharaan: 3200,
    waktu_pembangunan: 22,
    biaya_pembangunan: 55000,
    lowongan_kerja: 6000,
    konsumsi_listrik: 75
  },
  "7_pabrik_pengolahan_susu": {
    key: "7_pabrik_pengolahan_susu",
    dataKey: "susu",
    deskripsi: "Pabrik Pengolahan Susu",
    produksi: 180000,
    satuan: "LITER",
    biaya_pemeliharaan: 2100,
    waktu_pembangunan: 20,
    biaya_pembangunan: 42000,
    lowongan_kerja: 5000,
    konsumsi_listrik: 60
  },
  "8_pabrik_pakan_ternak": {
    key: "8_pabrik_pakan_ternak",
    dataKey: "pakan_ternak",
    deskripsi: "Pabrik Pakan Ternak",
    produksi: 85000,
    satuan: "TON",
    biaya_pemeliharaan: 1600,
    waktu_pembangunan: 20,
    biaya_pembangunan: 35000,
    lowongan_kerja: 4500,
    konsumsi_listrik: 55
  },
  "9_pabrik_pengalengan_ikan": {
    key: "9_pabrik_pengalengan_ikan",
    dataKey: "ikan_kaleng",
    deskripsi: "Pabrik Pengalengan Ikan",
    produksi: 25000,
    satuan: "TON",
    biaya_pemeliharaan: 2800,
    waktu_pembangunan: 22,
    biaya_pembangunan: 48000,
    lowongan_kerja: 5500,
    konsumsi_listrik: 65
  },
  "10_pabrik_pengolahan_kopi_teh": {
    key: "10_pabrik_pengolahan_kopi_teh",
    dataKey: "kopi_teh",
    deskripsi: "Pabrik Pengolahan Kopi & Teh",
    produksi: 35000,
    satuan: "KG",
    biaya_pemeliharaan: 1400,
    waktu_pembangunan: 15,
    biaya_pembangunan: 30000,
    lowongan_kerja: 4000,
    konsumsi_listrik: 45
  }
};

export interface SektorOlahanPangan {
  air_mineral?: number;
  gula?: number;
  roti?: number;
  pengolahan_daging?: number;
  mie_instan?: number;
  minyak_goreng?: number;
  susu?: number;
  pakan_ternak?: number;
  ikan_kaleng?: number;
  kopi_teh?: number;
}

export interface FoodProcessingData {
  air_mineral: number;
  gula: number;
  roti: number;
  pengolahan_daging: number;
  mie_instan: number;
  minyak_goreng: number;
  susu: number;
  pakan_ternak: number;
  ikan_kaleng: number;
  kopi_teh: number;
}
