export interface SektorInfrastruktur {
  jalur_sepeda: number;
  jalan_raya: number;
  terminal_bus: number;
  stasiun_kereta_api: number;
  kereta_bawah_tanah: number;
  pelabuhan: number;
  bandara: number;
  helipad: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Infrastruktur (Total: 8 Bangunan)
// ===================
export const infrastrukturRate: Record<string, any> = {
  "1_jalur_sepeda": {
    key: "1_jalur_sepeda",
    dataKey: "jalur_sepeda",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Jalur Sepeda",
    biaya_pemeliharaan: 800,
    waktu_pembangunan: 7,
    biaya_pembangunan: 5000,
    lowongan_kerja: 500,
    konsumsi_listrik: 10
  },
  "2_jalan_tol": {
    key: "2_jalan_tol",
    dataKey: "jalan_raya",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Jalan Raya / Tol",
    biaya_pemeliharaan: 4500,
    waktu_pembangunan: 30,
    biaya_pembangunan: 120000,
    lowongan_kerja: 5500,
    konsumsi_listrik: 85
  },
  "3_terminal_bus": {
    key: "3_terminal_bus",
    dataKey: "terminal_bus",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Terminal Bus",
    biaya_pemeliharaan: 3200,
    waktu_pembangunan: 22,
    biaya_pembangunan: 65000,
    lowongan_kerja: 3500,
    konsumsi_listrik: 120
  },
  "4_jalur_kereta": {
    key: "4_jalur_kereta",
    dataKey: "stasiun_kereta_api",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Jalur Kereta Api",
    biaya_pemeliharaan: 8500,
    waktu_pembangunan: 45,
    biaya_pembangunan: 280000,
    lowongan_kerja: 12000,
    konsumsi_listrik: 450
  },
  "5_kereta_bawah_tanah": {
    key: "5_kereta_bawah_tanah",
    dataKey: "kereta_bawah_tanah",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Kereta Bawah Tanah (Subway)",
    biaya_pemeliharaan: 12000,
    waktu_pembangunan: 60,
    biaya_pembangunan: 450000,
    lowongan_kerja: 18000,
    konsumsi_listrik: 850
  },
  "6_pelabuhan_laut": {
    key: "6_pelabuhan_laut",
    dataKey: "pelabuhan",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pelabuhan Laut",
    biaya_pemeliharaan: 25000,
    waktu_pembangunan: 90,
    biaya_pembangunan: 650000,
    lowongan_kerja: 45000,
    konsumsi_listrik: 1200
  },
  "7_bandara": {
    key: "7_bandara",
    dataKey: "bandara",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Bandara Internasional",
    biaya_pemeliharaan: 35000,
    waktu_pembangunan: 120,
    biaya_pembangunan: 850000,
    lowongan_kerja: 65000,
    konsumsi_listrik: 1800
  },
  "8_helipad": {
    key: "8_helipad",
    dataKey: "helipad",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Helipad",
    biaya_pemeliharaan: 1500,
    waktu_pembangunan: 15,
    biaya_pembangunan: 35000,
    lowongan_kerja: 800,
    konsumsi_listrik: 45
  },
};
