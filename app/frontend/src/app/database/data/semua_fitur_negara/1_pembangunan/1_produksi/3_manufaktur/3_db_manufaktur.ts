// ===================
// DETAIL TOTAL BANGUNAN: Manufaktur (Total: 7 Bangunan)
// ===================
export const manufakturRate = {
  "1_pabrik_elektronik": {
    key: "1_pabrik_elektronik",
    dataKey: "semikonduktor",
    deskripsi: "Pabrik Semikonduktor",
    produksi: 150,
    satuan: "UNIT",
    biaya_pemeliharaan: 8500,
    waktu_pembangunan: 45,
    biaya_pembangunan: 350000,
    lowongan_kerja: 15000,
    konsumsi_listrik: 650
  },
  "2_pabrik_mobil": {
    key: "2_pabrik_mobil",
    dataKey: "mobil",
    deskripsi: "Pabrik Mobil",
    produksi: 5500,
    satuan: "UNIT",
    biaya_pemeliharaan: 5500,
    waktu_pembangunan: 60,
    biaya_pembangunan: 180000,
    lowongan_kerja: 35000,
    konsumsi_listrik: 420
  },
  "3_pabrik_motor": {
    key: "3_pabrik_motor",
    dataKey: "sepeda_motor",
    deskripsi: "Pabrik Motor",
    produksi: 18000,
    satuan: "UNIT",
    biaya_pemeliharaan: 3200,
    waktu_pembangunan: 30,
    biaya_pembangunan: 95000,
    lowongan_kerja: 22000,
    konsumsi_listrik: 280
  },
  "4_smelter": {
    key: "4_smelter",
    dataKey: "smelter",
    deskripsi: "Pabrik Logam (Smelter)",
    produksi: 35000,
    satuan: "TON",
    biaya_pemeliharaan: 7200,
    waktu_pembangunan: 45,
    biaya_pembangunan: 145000,
    lowongan_kerja: 12000,
    konsumsi_listrik: 950
  },
  "5_pabrik_semen": {
    key: "5_pabrik_semen",
    dataKey: "semen_beton",
    deskripsi: "Pabrik Beton & Semen",
    produksi: 95000,
    satuan: "TON",
    biaya_pemeliharaan: 4500,
    waktu_pembangunan: 30,
    biaya_pembangunan: 75000,
    lowongan_kerja: 8000,
    konsumsi_listrik: 580
  },
  "6_penggergajian_kayu": {
    key: "6_penggergajian_kayu",
    dataKey: "kayu",
    deskripsi: "Penggergajian Kayu",
    produksi: 32000,
    satuan: "M3",
    biaya_pemeliharaan: 2100,
    waktu_pembangunan: 15,
    biaya_pembangunan: 45000,
    lowongan_kerja: 5000,
    konsumsi_listrik: 150
  },
  "7_pabrik_pupuk": {
    key: "7_pabrik_pupuk",
    dataKey: "pupuk",
    deskripsi: "Pabrik Pupuk",
    produksi: 42000,
    satuan: "TON",
    biaya_pemeliharaan: 3800,
    waktu_pembangunan: 30,
    biaya_pembangunan: 68000,
    lowongan_kerja: 7000,
    konsumsi_listrik: 320
  }
};

export interface SektorManufaktur {
  semikonduktor?: number;
  mobil?: number;
  sepeda_motor?: number;
  smelter?: number;
  semen_beton?: number;
  kayu?: number;
  pupuk?: number;
}

export interface ManufacturingData {
  semikonduktor: number;
  mobil: number;
  sepeda_motor: number;
  smelter: number;
  semen_beton: number;
  kayu: number;
  pupuk: number;
}
