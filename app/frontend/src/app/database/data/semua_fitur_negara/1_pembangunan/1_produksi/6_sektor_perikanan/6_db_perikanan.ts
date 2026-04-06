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
    biaya_pemeliharaan: 1500,
    waktu_pembangunan: 22,
    biaya_pembangunan: 32000,
    lowongan_kerja: 3500,
    konsumsi_listrik: 25
  },
  "2_budidaya_ikan_tawar": {
    key: "2_budidaya_ikan_tawar",
    dataKey: "ikan",
    deskripsi: "Budidaya Ikan Air Tawar",
    produksi: 120000,
    satuan: "KG",
    biaya_pemeliharaan: 1100,
    waktu_pembangunan: 22,
    biaya_pembangunan: 28000,
    lowongan_kerja: 4500,
    konsumsi_listrik: 18
  },
  "3_budidaya_mutiara": {
    key: "3_budidaya_mutiara",
    dataKey: "mutiara",
    deskripsi: "Budidaya Kerang & Mutiara",
    produksi: 15000,
    satuan: "GRAM",
    biaya_pemeliharaan: 2800,
    waktu_pembangunan: 60,
    biaya_pembangunan: 65000,
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
