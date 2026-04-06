// ===================
// DETAIL TOTAL BANGUNAN: Ekstraksi (Total: 12 Bangunan)
// ===================
export const mineralKritisRate = {
  "1_tambang_emas": {
    key: "1_tambang_emas",
    dataKey: "emas",
    deskripsi: "Tambang Emas",
    produksi: 150,
    satuan: "KG",
    biaya_pemeliharaan: 2250,
    waktu_pembangunan: 15,
    biaya_pembangunan: 45000,
    lowongan_kerja: 1000,
    konsumsi_listrik: 80
  },
  "2_tambang_uranium": {
    key: "2_tambang_uranium",
    dataKey: "uranium",
    deskripsi: "Tambang Uranium",
    produksi: 100,
    satuan: "KG",
    biaya_pemeliharaan: 4250,
    waktu_pembangunan: 45,
    biaya_pembangunan: 85000,
    lowongan_kerja: 500,
    konsumsi_listrik: 150
  },
  "3_tambang_batu_bara": {
    key: "3_tambang_batu_bara",
    dataKey: "batu_bara",
    deskripsi: "Tambang Batu Bara",
    produksi: 15000,
    satuan: "TON",
    biaya_pemeliharaan: 600,
    waktu_pembangunan: 22,
    biaya_pembangunan: 15000,
    lowongan_kerja: 2000,
    konsumsi_listrik: 120
  },
  "4_sumur_minyak": {
    key: "4_sumur_minyak",
    dataKey: "minyak_bumi",
    deskripsi: "Sumur Minyak Bumi",
    produksi: 25000,
    satuan: "BARREL",
    biaya_pemeliharaan: 1900,
    waktu_pembangunan: 30,
    biaya_pembangunan: 40000,
    lowongan_kerja: 300,
    konsumsi_listrik: 150
  },
  "5_sumur_gas": {
    key: "5_sumur_gas",
    dataKey: "gas_alam",
    deskripsi: "Sumur Gas Alam",
    produksi: 5000,
    satuan: "MMSCFD",
    biaya_pemeliharaan: 1600,
    waktu_pembangunan: 30,
    biaya_pembangunan: 35000,
    lowongan_kerja: 200,
    konsumsi_listrik: 130
  },
  "6_tambang_garam": {
    key: "6_tambang_garam",
    dataKey: "garam",
    deskripsi: "Tambang Garam",
    produksi: 10000,
    satuan: "TON",
    biaya_pemeliharaan: 325,
    waktu_pembangunan: 10,
    biaya_pembangunan: 7000,
    lowongan_kerja: 400,
    konsumsi_listrik: 45
  },
  "7_tambang_nikel": {
    key: "7_tambang_nikel",
    dataKey: "nikel",
    deskripsi: "Tambang Nikel",
    produksi: 12000,
    satuan: "TON",
    biaya_pemeliharaan: 1400,
    waktu_pembangunan: 30,
    biaya_pembangunan: 30000,
    lowongan_kerja: 1500,
    konsumsi_listrik: 320
  },
  "8_tambang_litium": {
    key: "8_tambang_litium",
    dataKey: "litium",
    deskripsi: "Tambang Litium",
    produksi: 8000,
    satuan: "TON",
    biaya_pemeliharaan: 1750,
    waktu_pembangunan: 45,
    biaya_pembangunan: 35000,
    lowongan_kerja: 1200,
    konsumsi_listrik: 250
  },
  "9_tambang_tembaga": {
    key: "9_tambang_tembaga",
    dataKey: "tembaga",
    deskripsi: "Tambang Tembaga",
    produksi: 14000,
    satuan: "TON",
    biaya_pemeliharaan: 1100,
    waktu_pembangunan: 30,
    biaya_pembangunan: 25000,
    lowongan_kerja: 1500,
    konsumsi_listrik: 240
  },
  "10_tambang_aluminium": {
    key: "10_tambang_aluminium",
    dataKey: "aluminium",
    deskripsi: "Tambang Aluminium",
    produksi: 18000,
    satuan: "TON",
    biaya_pemeliharaan: 1500,
    waktu_pembangunan: 22,
    biaya_pembangunan: 30000,
    lowongan_kerja: 1400,
    konsumsi_listrik: 550
  },
  "11_tambang_ltj": {
    key: "11_tambang_ltj",
    dataKey: "logam_tanah_jarang",
    deskripsi: "Tambang Logam Tanah Jarang",
    produksi: 500,
    satuan: "KG",
    biaya_pemeliharaan: 4750,
    waktu_pembangunan: 60,
    biaya_pembangunan: 100000,
    lowongan_kerja: 800,
    konsumsi_listrik: 380
  },
  "12_tambang_bijih_besi": {
    key: "12_tambang_bijih_besi",
    dataKey: "bijih_besi",
    deskripsi: "Tambang Bijih Besi",
    produksi: 25000,
    satuan: "TON",
    biaya_pemeliharaan: 750,
    waktu_pembangunan: 22,
    biaya_pembangunan: 20000,
    lowongan_kerja: 1800,
    konsumsi_listrik: 180
  }
};

export interface SektorEkstraksi {
  emas?: number;
  uranium?: number;
  batu_bara?: number;
  minyak_bumi?: number;
  gas_alam?: number;
  garam?: number;
  nikel?: number;
  litium?: number;
  tembaga?: number;
  aluminium?: number;
  logam_tanah_jarang?: number;
  bijih_besi?: number;
}

export interface ExtractionData {
  emas: number;
  uranium: number;
  batu_bara: number;
  minyak_bumi: number;
  gas_alam: number;
  garam: number;
  nikel: number;
  litium: number;
  tembaga: number;
  aluminium: number;
  logam_tanah_jarang: number;
  bijih_besi: number;
}
