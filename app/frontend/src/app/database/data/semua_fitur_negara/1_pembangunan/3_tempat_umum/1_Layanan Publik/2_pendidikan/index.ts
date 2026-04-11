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
    waktu_pembangunan: 5,
    biaya_pembangunan: 8000000,
    lowongan_kerja: 800,
    konsumsi_listrik: 15,
    efek: "Mempercepat waktu penelitian sebesar 0.1%"
  },
  "2_dasar": {
    key: "2_dasar",
    dataKey: "dasar",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pendidikan Dasar (SD)",
    waktu_pembangunan: 7,
    biaya_pembangunan: 12000000,
    lowongan_kerja: 1500,
    konsumsi_listrik: 25,
    efek: "Mempercepat waktu penelitian sebesar 0.3%"
  },
  "3_menengah": {
    key: "3_menengah",
    dataKey: "menengah",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pendidikan Menengah (SMP)",
    waktu_pembangunan: 10,
    biaya_pembangunan: 18000000,
    lowongan_kerja: 3500,
    konsumsi_listrik: 45,
    efek: "Mempercepat waktu penelitian sebesar 0.5%"
  },
  "4_lanjutan": {
    key: "4_lanjutan",
    dataKey: "lanjutan",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pendidikan Lanjutan (SMA/SMK)",
    waktu_pembangunan: 12,
    biaya_pembangunan: 25000000,
    lowongan_kerja: 5500,
    konsumsi_listrik: 80,
    efek: "Mempercepat waktu penelitian sebesar 0.7%"
  },
  "5_universitas": {
    key: "5_universitas",
    dataKey: "universitas",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Perguruan Tinggi / Universitas",
    waktu_pembangunan: 40,
    biaya_pembangunan: 95000000,
    lowongan_kerja: 15000,
    konsumsi_listrik: 350,
    efek: "Mempercepat waktu penelitian sebesar 0.9%"
  },
  "6_lembaga_pendidikan": {
    key: "6_lembaga_pendidikan",
    dataKey: "lembaga_pendidikan",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Lembaga Pelatihan & Vokasi",
    waktu_pembangunan: 15,
    biaya_pembangunan: 40000000,
    lowongan_kerja: 4500,
    konsumsi_listrik: 150,
    efek: "Mempercepat waktu penelitian sebesar 0.12%"
  },
  "7_laboratorium": {
    key: "7_laboratorium",
    dataKey: "laboratorium",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Laboratorium Penelitian & Sains",
    waktu_pembangunan: 30,
    biaya_pembangunan: 75000000,
    lowongan_kerja: 5500,
    konsumsi_listrik: 450,
    efek: "Mempercepat waktu penelitian sebesar 0.15%"
  },
  "8_observatorium": {
    key: "8_observatorium",
    dataKey: "observatorium",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Observatorium Astronomi Nasional",
    waktu_pembangunan: 25,
    biaya_pembangunan: 60000000,
    lowongan_kerja: 1200,
    konsumsi_listrik: 220,
    efek: "Mempercepat waktu penelitian sebesar 0.17%"
  },
  "9_pusat_penelitian": {
    key: "9_pusat_penelitian",
    dataKey: "pusat_penelitian",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Penelitian Strategis",
    waktu_pembangunan: 50,
    biaya_pembangunan: 125000000,
    lowongan_kerja: 8500,
    konsumsi_listrik: 650,
    efek: "Mempercepat waktu penelitian sebesar 0.19%"
  },
  "10_pusat_pengembangan": {
    key: "10_pusat_pengembangan",
    dataKey: "pusat_pengembangan",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Inovasi & Teknologi",
    waktu_pembangunan: 20,
    biaya_pembangunan: 55000000,
    lowongan_kerja: 6000,
    konsumsi_listrik: 380,
    efek: "Mempercepat waktu penelitian sebesar 0.21%"
  },
};
