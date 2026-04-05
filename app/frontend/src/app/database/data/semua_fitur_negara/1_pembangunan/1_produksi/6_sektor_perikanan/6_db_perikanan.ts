// ===================
// DETAIL TOTAL BANGUNAN: Perikanan (Total: 3 Bangunan)
// ===================
export const perikananRate = {
  "1_tambak_udang": {
    key: "1_tambak_udang",
    dataKey: "udang",
    deskripsi: "Tambang Udang Intensif",
    produksi: 1000,
    satuan: "KG",
    biaya_pemeliharaan: 50,
    waktu_pembangunan: 45,
    biaya_pembangunan: 2800,
    lowongan_kerja: 250,
    konsumsi_listrik: 0.65
  },
  "2_budidaya_ikan_tawar": {
    key: "2_budidaya_ikan_tawar",
    dataKey: "ikan",
    deskripsi: "Budidaya Ikan Air Tawar",
    produksi: 2000,
    satuan: "KG",
    biaya_pemeliharaan: 30,
    waktu_pembangunan: 45,
    biaya_pembangunan: 1500,
    lowongan_kerja: 200,
    konsumsi_listrik: 0.5
  },
  "3_budidaya_mutiara": {
    key: "3_budidaya_mutiara",
    dataKey: "mutiara",
    deskripsi: "Budidaya Kerang & Mutiara",
    produksi: 100,
    satuan: "GRAM",
    biaya_pemeliharaan: 80,
    waktu_pembangunan: 120,
    biaya_pembangunan: 5500,
    lowongan_kerja: 150,
    konsumsi_listrik: 0.65
  }
};

export interface SektorPerikanan {
  udang?: number;
  ikan?: number;
  mutiara?: number;
}

export interface FisheryData {
  udang: number;
  ikan: number;
  mutiara: number;
}
