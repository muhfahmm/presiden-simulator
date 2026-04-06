export interface KesehatanData {
  rumah_sakit_besar?: number;
  rumah_sakit_kecil?: number;
  pusat_diagnostik?: number;
  harapan_hidup?: number;
  indeks_kesehatan?: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Kesehatan (Total: 3 Bangunan)
// ===================
export const kesehatanRate: Record<string, any> = {
  "11_rumah_sakit_besar": {
    key: "11_rumah_sakit_besar",
    dataKey: "rumah_sakit_besar",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Rumah Sakit Umum Pusat (RSUP)",
    biaya_pemeliharaan: 18000,
    waktu_pembangunan: 90,
    biaya_pembangunan: 250000,
    lowongan_kerja: 18000,
    konsumsi_listrik: 850
  },
  "12_rumah_sakit_kecil": {
    key: "12_rumah_sakit_kecil",
    dataKey: "rumah_sakit_kecil",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Rumah Sakit Daerah (RSUD)",
    biaya_pemeliharaan: 4500,
    waktu_pembangunan: 22,
    biaya_pembangunan: 55000,
    lowongan_kerja: 4500,
    konsumsi_listrik: 120
  },
  "13_pusat_diagnostik": {
    key: "13_pusat_diagnostik",
    dataKey: "pusat_diagnostik",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Laboratorium Medik & Diagnostik Nasional",
    biaya_pemeliharaan: 2800,
    waktu_pembangunan: 15,
    biaya_pembangunan: 32000,
    lowongan_kerja: 2500,
    konsumsi_listrik: 75
  },
};
