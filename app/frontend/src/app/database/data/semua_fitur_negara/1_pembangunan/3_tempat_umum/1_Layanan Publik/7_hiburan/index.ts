export interface SektorHiburan {
  bioskop?: number;
  teater?: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Hiburan (Total: 2 Bangunan)
// ===================
export const hiburanRate: Record<string, any> = {
  "26_bioskop": {
    key: "26_bioskop",
    dataKey: "bioskop",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Kompleks Bioskop Nasional",
    biaya_pemeliharaan: 4500,
    waktu_pembangunan: 45,
    biaya_pembangunan: 55000,
    lowongan_kerja: 2500,
    konsumsi_listrik: 120
  },
  "27_gedung_teater": {
    key: "27_gedung_teater",
    dataKey: "gedung_teater",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Gedung Teater & Seni Pertunjukan Nasional",
    biaya_pemeliharaan: 6500,
    waktu_pembangunan: 60,
    biaya_pembangunan: 85000,
    lowongan_kerja: 3500,
    konsumsi_listrik: 150
  },
};
