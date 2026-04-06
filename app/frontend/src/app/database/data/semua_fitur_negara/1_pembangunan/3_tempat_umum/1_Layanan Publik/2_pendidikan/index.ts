export interface PendidikanData {
  prasekolah?: number;
  dasar?: number;
  menengah?: number;
  lanjutan?: number;
  universitas?: number;
  lembaga_pendidikan?: number;
  laboratorium?: number;
  observatorium?: number;
  pusat_penelitian?: number;
  pusat_pengembangan?: number;
  literasi?: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Pendidikan (Total: 10 Bangunan)
// ===================
export const pendidikanRate: Record<string, any> = {
  "1_prasekolah": {
    key: "1_prasekolah",
    dataKey: "prasekolah",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pendidikan Anak Usia Dini (PAUD)",
    biaya_pemeliharaan: 800,
    waktu_pembangunan: 10,
    biaya_pembangunan: 12000,
    lowongan_kerja: 800,
    konsumsi_listrik: 15
  },
  "2_dasar": {
    key: "2_dasar",
    dataKey: "dasar",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pendidikan Dasar (SD)",
    biaya_pemeliharaan: 1200,
    waktu_pembangunan: 15,
    biaya_pembangunan: 25000,
    lowongan_kerja: 1500,
    konsumsi_listrik: 25
  },
  "3_menengah": {
    key: "3_menengah",
    dataKey: "menengah",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pendidikan Menengah (SMP)",
    biaya_pemeliharaan: 2500,
    waktu_pembangunan: 22,
    biaya_pembangunan: 45000,
    lowongan_kerja: 3500,
    konsumsi_listrik: 45
  },
  "4_lanjutan": {
    key: "4_lanjutan",
    dataKey: "lanjutan",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pendidikan Lanjutan (SMA/SMK)",
    biaya_pemeliharaan: 4200,
    waktu_pembangunan: 30,
    biaya_pembangunan: 65000,
    lowongan_kerja: 5500,
    konsumsi_listrik: 80
  },
  "5_universitas": {
    key: "5_universitas",
    dataKey: "universitas",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Perguruan Tinggi / Universitas",
    biaya_pemeliharaan: 15000,
    waktu_pembangunan: 90,
    biaya_pembangunan: 280000,
    lowongan_kerja: 15000,
    konsumsi_listrik: 350
  },
  "6_lembaga_pendidikan": {
    key: "6_lembaga_pendidikan",
    dataKey: "lembaga_pendidikan",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Lembaga Pelatihan & Vokasi",
    biaya_pemeliharaan: 8500,
    waktu_pembangunan: 60,
    biaya_pembangunan: 120000,
    lowongan_kerja: 4500,
    konsumsi_listrik: 150
  },
  "7_laboratorium": {
    key: "7_laboratorium",
    dataKey: "laboratorium",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Laboratorium Penelitian & Sains",
    biaya_pemeliharaan: 12000,
    waktu_pembangunan: 75,
    biaya_pembangunan: 180000,
    lowongan_kerja: 5500,
    konsumsi_listrik: 450
  },
  "8_observatorium": {
    key: "8_observatorium",
    dataKey: "observatorium",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Observatorium Astronomi Nasional",
    biaya_pemeliharaan: 9500,
    waktu_pembangunan: 90,
    biaya_pembangunan: 145000,
    lowongan_kerja: 1200,
    konsumsi_listrik: 220
  },
  "9_pusat_penelitian": {
    key: "9_pusat_penelitian",
    dataKey: "pusat_penelitian",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Penelitian Strategis",
    biaya_pemeliharaan: 25000,
    waktu_pembangunan: 120,
    biaya_pembangunan: 350000,
    lowongan_kerja: 8500,
    konsumsi_listrik: 650
  },
  "10_pusat_pengembangan": {
    key: "10_pusat_pengembangan",
    dataKey: "pusat_pengembangan",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Inovasi & Teknologi",
    biaya_pemeliharaan: 15000,
    waktu_pembangunan: 45,
    biaya_pembangunan: 220000,
    lowongan_kerja: 6000,
    konsumsi_listrik: 380
  },
};
