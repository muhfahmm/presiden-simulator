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
    deskripsi: "Fasilitas Hiburan Film",
    biaya_pemeliharaan: 20,
    waktu_pembangunan: 90,
    biaya_pembangunan: 8000,
    lowongan_kerja: 150,
    konsumsi_listrik: 15
  },
  "27_gedung_teater": {
    key: "27_gedung_teater",
    dataKey: "gedung_teater",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Fasilitas Seni & Pertunjukan",
    biaya_pemeliharaan: 25,
    waktu_pembangunan: 120,
    biaya_pembangunan: 10000,
    lowongan_kerja: 200,
    konsumsi_listrik: 12
  },
};
