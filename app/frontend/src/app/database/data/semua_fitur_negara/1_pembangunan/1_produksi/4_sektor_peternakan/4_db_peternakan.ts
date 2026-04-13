// ===================
// DETAIL TOTAL BANGUNAN: Peternakan (Total: 4 Bangunan)
// ===================
export const peternakanRate = {
  "1_peternakan_unggas": {
    key: "1_peternakan_unggas",
    dataKey: "ayam_unggas",
    deskripsi: "Peternakan Unggas",
    produksi: 150000,
    satuan: "EKOR",
    waktu_pembangunan: 7,
    biaya_pembangunan: 9000000, // Reduced from 12M
    lowongan_kerja: 1500,
    konsumsi_listrik: 15
  },
  "2_peternakan_sapi_perah": {
    key: "2_peternakan_sapi_perah",
    dataKey: "sapi_perah",
    deskripsi: "Peternakan Sapi Perah",
    produksi: 75000,
    satuan: "LITER",
    waktu_pembangunan: 15,
    biaya_pembangunan: 21000000, // Reduced from 28M
    lowongan_kerja: 2500,
    konsumsi_listrik: 25
  },
  "3_peternakan_sapi_potong": {
    key: "3_peternakan_sapi_potong",
    dataKey: "sapi_potong",
    deskripsi: "Peternakan Sapi Potong",
    produksi: 12000,
    satuan: "EKOR",
    waktu_pembangunan: 20,
    biaya_pembangunan: 26250000, // Reduced from 35M
    lowongan_kerja: 2800,
    konsumsi_listrik: 20
  },
  "4_peternakan_domba_kambing": {
    key: "4_peternakan_domba_kambing",
    dataKey: "domba_kambing",
    deskripsi: "Peternakan Domba & Kambing",
    produksi: 18000,
    satuan: "EKOR",
    waktu_pembangunan: 10,
    biaya_pembangunan: 13500000, // Reduced from 18M
    lowongan_kerja: 1800,
    konsumsi_listrik: 18
  }
};

export interface SektorPeternakan {
  ayam_unggas?: number;
  sapi_perah?: number;
  sapi_potong?: number;
  domba_kambing?: number;
}

export interface LivestockData {
  ayam_unggas: number;
  sapi_perah: number;
  sapi_potong: number;
  domba_kambing: number;
}
