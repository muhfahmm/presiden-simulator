export interface SektorKomersial {
  pusat_belanja?: number;
  hotel?: number;
  pusat_grosir_tekstil?: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Komersial (Total: 3 Bangunan)
// ===================
export const komersialRate: Record<string, any> = {
  "23_pusat_belanja": {
    key: "23_pusat_belanja",
    dataKey: "pusat_belanja",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Perbelanjaan & Mall Nasional",
    waktu_pembangunan: 180,
    biaya_pembangunan: 450000,
    lowongan_kerja: 25000,
    konsumsi_listrik: 650
  },
  "24_hotel": {
    key: "24_hotel",
    dataKey: "hotel",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Kompleks Hotel & Resort Internasional",
    waktu_pembangunan: 120,
    biaya_pembangunan: 180000,
    lowongan_kerja: 8500,
    konsumsi_listrik: 350
  },
  "25_pusat_grosir_tekstil": {
    key: "25_pusat_grosir_tekstil",
    dataKey: "pusat_grosir_tekstil",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Perdagangan & Logistik Tekstil",
    waktu_pembangunan: 60,
    biaya_pembangunan: 85000,
    lowongan_kerja: 12000,
    konsumsi_listrik: 150
  },
};
