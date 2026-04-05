// ===================
// DETAIL TOTAL BANGUNAN: Olahan Pangan (Total: 10 Bangunan)
// ===================
export const olahanPanganRate = {
  "1_pabrik_air_mineral": {
    key: "1_pabrik_air_mineral",
    dataKey: "air_mineral",
    deskripsi: "Pabrik Air Mineral",
    produksi: 5000,
    satuan: "LITER",
    biaya_pemeliharaan: 30,
    waktu_pembangunan: 30,
    biaya_pembangunan: 1500,
    lowongan_kerja: 300,
    konsumsi_listrik: 2
  },
  "2_pabrik_gula": {
    key: "2_pabrik_gula",
    dataKey: "gula",
    deskripsi: "Pabrik Gula",
    produksi: 200,
    satuan: "TON",
    biaya_pemeliharaan: 50,
    waktu_pembangunan: 60,
    biaya_pembangunan: 3500,
    lowongan_kerja: 800,
    konsumsi_listrik: 10
  },
  "3_pabrik_roti": {
    key: "3_pabrik_roti",
    dataKey: "roti",
    deskripsi: "Pabrik Roti",
    produksi: 10000,
    satuan: "UNIT",
    biaya_pemeliharaan: 40,
    waktu_pembangunan: 30,
    biaya_pembangunan: 2500,
    lowongan_kerja: 200,
    konsumsi_listrik: 2
  },
  "4_pabrik_pengolahan_daging": {
    key: "4_pabrik_pengolahan_daging",
    dataKey: "pengolahan_daging",
    deskripsi: "Pabrik Pengolahan Daging",
    produksi: 50,
    satuan: "TON",
    biaya_pemeliharaan: 100,
    waktu_pembangunan: 60,
    biaya_pembangunan: 4000,
    lowongan_kerja: 400,
    konsumsi_listrik: 5
  },
  "5_pabrik_mie_instan": {
    key: "5_pabrik_mie_instan",
    dataKey: "mie_instan",
    deskripsi: "Pabrik Mie Instan",
    produksi: 50000,
    satuan: "UNIT",
    biaya_pemeliharaan: 40,
    waktu_pembangunan: 30,
    biaya_pembangunan: 2800,
    lowongan_kerja: 500,
    konsumsi_listrik: 10
  },
  "6_pabrik_minyak_goreng": {
    key: "6_pabrik_minyak_goreng",
    dataKey: "minyak_goreng",
    deskripsi: "Pabrik Minyak Goreng",
    produksi: 1500,
    satuan: "TON",
    biaya_pemeliharaan: 60,
    waktu_pembangunan: 45,
    biaya_pembangunan: 3200,
    lowongan_kerja: 600,
    konsumsi_listrik: 10
  },
  "7_pabrik_pengolahan_susu": {
    key: "7_pabrik_pengolahan_susu",
    dataKey: "susu",
    deskripsi: "Pabrik Pengolahan Susu",
    produksi: 8000,
    satuan: "LITER",
    biaya_pemeliharaan: 45,
    waktu_pembangunan: 35,
    biaya_pembangunan: 2800,
    lowongan_kerja: 450,
    konsumsi_listrik: 5
  },
  "8_pabrik_pakan_ternak": {
    key: "8_pabrik_pakan_ternak",
    dataKey: "pakan_ternak",
    deskripsi: "Pabrik Pakan Ternak",
    produksi: 1200,
    satuan: "TON",
    biaya_pemeliharaan: 40,
    waktu_pembangunan: 40,
    biaya_pembangunan: 2200,
    lowongan_kerja: 350,
    konsumsi_listrik: 8
  },
  "9_pabrik_pengalengan_ikan": {
    key: "9_pabrik_pengalengan_ikan",
    dataKey: "ikan_kaleng",
    deskripsi: "Pabrik Pengalengan Ikan",
    produksi: 120,
    satuan: "TON",
    biaya_pemeliharaan: 80,
    waktu_pembangunan: 45,
    biaya_pembangunan: 3800,
    lowongan_kerja: 550,
    konsumsi_listrik: 12
  },
  "10_pabrik_pengolahan_kopi_teh": {
    key: "10_pabrik_pengolahan_kopi_teh",
    dataKey: "kopi_teh",
    deskripsi: "Pabrik Pengolahan Kopi & Teh",
    produksi: 2500,
    satuan: "KG",
    biaya_pemeliharaan: 40,
    waktu_pembangunan: 30,
    biaya_pembangunan: 2400,
    lowongan_kerja: 300,
    konsumsi_listrik: 6
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
