export interface OlahragaData {
  kolam_renang: number;
  sirkuit_balap: number;
  stadion: number;
  stadion_internasional: number;
  gym?: number;
  golf?: number;
  esports?: number;
  gokart?: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Olahraga & Rekreasi (Total: 7 Bangunan)
// ===================
export const olahragaRate: Record<string, any> = {
  "16_kolam_renang": {
    key: "16_kolam_renang",
    dataKey: "kolam_renang",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Akuatik Nasional",
    waktu_pembangunan: 15,
    biaya_pembangunan: 15000,
    lowongan_kerja: 600,
    konsumsi_listrik: 45
  },
  "17_sirkuit_balap": {
    key: "17_sirkuit_balap",
    dataKey: "sirkuit_balap",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Sirkuit Balap Internasional",
    waktu_pembangunan: 90,
    biaya_pembangunan: 220000,
    lowongan_kerja: 8000,
    konsumsi_listrik: 350
  },
  "18_stadium_int": {
    key: "18_stadium_int",
    dataKey: "stadium_int",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Stadion Utama Internasional",
    waktu_pembangunan: 120,
    biaya_pembangunan: 450000,
    lowongan_kerja: 25000,
    konsumsi_listrik: 950
  },
  "19_gym_center": {
    key: "19_gym_center",
    dataKey: "gym_center",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Kebugaran & Olahraga Terpadu",
    waktu_pembangunan: 22,
    biaya_pembangunan: 28000,
    lowongan_kerja: 1500,
    konsumsi_listrik: 85
  },
  "20_lapangan_golf": {
    key: "20_lapangan_golf",
    dataKey: "lapangan_golf",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Fasilitas Golf Nasional",
    waktu_pembangunan: 60,
    biaya_pembangunan: 150000,
    lowongan_kerja: 3500,
    konsumsi_listrik: 120
  },
  "21_esports_arena": {
    key: "21_esports_arena",
    dataKey: "esports_arena",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Arena E-Sports Global",
    waktu_pembangunan: 45,
    biaya_pembangunan: 180000,
    lowongan_kerja: 5000,
    konsumsi_listrik: 450
  },
  "22_gokart_circuit": {
    key: "22_gokart_circuit",
    dataKey: "gokart_circuit",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Sirkuit Gokart Profesional",
    waktu_pembangunan: 30,
    biaya_pembangunan: 55000,
    lowongan_kerja: 1200,
    konsumsi_listrik: 120
  },
};
