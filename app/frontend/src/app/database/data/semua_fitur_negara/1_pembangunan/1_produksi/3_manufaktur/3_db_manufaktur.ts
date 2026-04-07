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
    waktu_pembangunan: 360,
    biaya_pembangunan: 150000000,
    lowongan_kerja: 15000,
    konsumsi_listrik: 650
  },
  "2_pabrik_mobil": {
    key: "2_pabrik_mobil",
    dataKey: "mobil",
    deskripsi: "Pabrik Mobil",
    produksi: 5500,
    satuan: "UNIT",
    waktu_pembangunan: 240,
    biaya_pembangunan: 85000000,
    lowongan_kerja: 35000,
    konsumsi_listrik: 420
  },
  "3_pabrik_motor": {
    key: "3_pabrik_motor",
    dataKey: "sepeda_motor",
    deskripsi: "Pabrik Motor",
    produksi: 18000,
    satuan: "UNIT",
    waktu_pembangunan: 120,
    biaya_pembangunan: 45000000,
    lowongan_kerja: 22000,
    konsumsi_listrik: 280
  },
  "4_smelter": {
    key: "4_smelter",
    dataKey: "smelter",
    deskripsi: "Pabrik Logam (Smelter)",
    produksi: 35000,
    satuan: "TON",
    waktu_pembangunan: 180,
    biaya_pembangunan: 95000000,
    lowongan_kerja: 12000,
    konsumsi_listrik: 950
  },
  "5_pabrik_semen": {
    key: "5_pabrik_semen",
    dataKey: "semen_beton",
    deskripsi: "Pabrik Beton & Semen",
    produksi: 95000,
    satuan: "TON",
    waktu_pembangunan: 90,
    biaya_pembangunan: 35000000,
    lowongan_kerja: 8000,
    konsumsi_listrik: 580
  },
  "6_penggergajian_kayu": {
    key: "6_penggergajian_kayu",
    dataKey: "kayu",
    deskripsi: "Penggergajian Kayu",
    produksi: 32000,
    satuan: "M3",
    waktu_pembangunan: 60,
    biaya_pembangunan: 18000000,
    lowongan_kerja: 5000,
    konsumsi_listrik: 150
  },
  "7_pabrik_pupuk": {
    key: "7_pabrik_pupuk",
    dataKey: "pupuk",
    deskripsi: "Pabrik Pupuk",
    produksi: 42000,
    satuan: "TON",
    waktu_pembangunan: 90,
    biaya_pembangunan: 25000000,
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
