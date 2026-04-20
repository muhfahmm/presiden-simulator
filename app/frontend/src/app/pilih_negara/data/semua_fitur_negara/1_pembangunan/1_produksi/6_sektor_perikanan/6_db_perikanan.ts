// ===================
// DETAIL TOTAL BANGUNAN: Perikanan (Total: 3 Bangunan)
// ===================
export const perikananRate = {
  "1_tambak_udang": {
    key: "1_tambak_udang",
    dataKey: "udang",
    deskripsi: "Tambang Udang Intensif",
    produksi: 75000,
    satuan: "KG",
    waktu_pembangunan: 15,
    biaya_pembangunan: 24000000, // Reduced from 32M
    lowongan_kerja: 3500,
    konsumsi_listrik: 25
  },
  "2_budidaya_ikan_tawar": {
    key: "2_budidaya_ikan_tawar",
    dataKey: "ikan",
    deskripsi: "Budidaya Ikan Air Tawar",
    produksi: 120000,
    satuan: "KG",
    waktu_pembangunan: 10,
    biaya_pembangunan: 15000000, // Reduced from 20M
    lowongan_kerja: 4500,
    konsumsi_listrik: 18
  },
  "3_budidaya_mutiara": {
    key: "3_budidaya_mutiara",
    dataKey: "mutiara",
    deskripsi: "Budidaya Kerang & Mutiara",
    produksi: 15000,
    satuan: "GRAM",
    waktu_pembangunan: 30,
    biaya_pembangunan: 41250000, // Reduced from 55M
    lowongan_kerja: 2500,
    konsumsi_listrik: 45
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
