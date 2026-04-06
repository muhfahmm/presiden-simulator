export interface SektorPertahanan {
  penjara: number;
  gudang_senjata: number;
  hangar_tank: number;
  akademi_militer: number;
  pusat_komando: number;
  pangkalan_udara: number;
  pangkalan_laut: number;
  program_luar_angkasa: number;
  lisensi_siber?: boolean;
  pertahanan_siber: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Pertahanan (Total: 9 Bangunan)
// ===================
export const pertahananRate = {
  "1_penjara": {
    key: "1_penjara",
    dataKey: "penjara",
    groupId: "pertahanan",
    label: "Penjara",
    deskripsi: "Lembaga Pemasyarakatan",
    biaya_pembangunan: 85000,
    waktu_pembangunan: 60,
    biaya_pemeliharaan: 4500,
    lowongan_kerja: 200,
    kapasitas: 5000,
    satuan_kapasitas: "Tahanan",
    konsumsi_listrik: 2
  },
  "2_gudang_senjata": {
    key: "2_gudang_senjata",
    dataKey: "gudang_senjata",
    groupId: "pertahanan",
    label: "Gudang Senjata",
    deskripsi: "Penyimpanan Amunisi",
    biaya_pembangunan: 45000,
    waktu_pembangunan: 30,
    biaya_pemeliharaan: 2500,
    lowongan_kerja: 100,
    kapasitas: 10000,
    satuan_kapasitas: "Unit Amunisi",
    konsumsi_listrik: 2
  },
  "3_hangar_tank": {
    key: "3_hangar_tank",
    dataKey: "hangar_tank",
    groupId: "pertahanan",
    label: "Hangar Tank",
    deskripsi: "Garasi Tempur",
    biaya_pembangunan: 125000,
    waktu_pembangunan: 60,
    biaya_pemeliharaan: 8500,
    lowongan_kerja: 150,
    kapasitas: 50,
    satuan_kapasitas: "Main Battle Tank",
    konsumsi_listrik: 5
  },
  "4_akademi_militer": {
    key: "4_akademi_militer",
    dataKey: "akademi_militer",
    groupId: "pertahanan",
    label: "Akademi Militer",
    deskripsi: "Pendidikan Perwira",
    biaya_pembangunan: 350000,
    waktu_pembangunan: 180,
    biaya_pemeliharaan: 12000,
    lowongan_kerja: 300,
    kapasitas: 2500,
    satuan_kapasitas: "Taruna",
    konsumsi_listrik: 10
  },
  "5_pusat_komando": {
    key: "5_pusat_komando",
    dataKey: "pusat_komando",
    groupId: "pertahanan",
    label: "Pusat Komando",
    deskripsi: "Komando Tertinggi",
    biaya_pembangunan: 950000,
    waktu_pembangunan: 240,
    biaya_pemeliharaan: 45000,
    lowongan_kerja: 250,
    kapasitas: 1,
    satuan_kapasitas: "Komando Strategis",
    konsumsi_listrik: 15
  },
  "6_pangkalan_udara": {
    key: "6_pangkalan_udara",
    dataKey: "pangkalan_udara",
    groupId: "pertahanan",
    label: "Pangkalan Udara",
    deskripsi: "Fasilitas Dirgantara",
    biaya_pembangunan: 1800000,
    waktu_pembangunan: 180,
    biaya_pemeliharaan: 85000,
    lowongan_kerja: 500,
    kapasitas: 24,
    satuan_kapasitas: "Pesawat Tempur",
    konsumsi_listrik: 30
  },
  "7_pangkalan_laut": {
    key: "7_pangkalan_laut",
    dataKey: "pangkalan_laut",
    groupId: "pertahanan",
    label: "Pangkalan Laut",
    deskripsi: "Fasilitas Maritim",
    biaya_pembangunan: 2200000,
    waktu_pembangunan: 210,
    biaya_pemeliharaan: 110000,
    lowongan_kerja: 450,
    kapasitas: 12,
    satuan_kapasitas: "Kapal Perang",
    konsumsi_listrik: 35
  },
  "8_program_luar_angkasa": {
    key: "8_program_luar_angkasa",
    dataKey: "program_luar_angkasa",
    groupId: "pertahanan",
    label: "Program luar angkasa",
    deskripsi: "Program Satelit",
    biaya_pembangunan: 12500000,
    waktu_pembangunan: 365,
    biaya_pemeliharaan: 250000,
    lowongan_kerja: 800,
    kapasitas: 1,
    satuan_kapasitas: "Satelit Strategis",
    konsumsi_listrik: 80
  },
  "9_pertahanan_siber": {
    key: "9_pertahanan_siber",
    dataKey: "pertahanan_siber",
    groupId: "pertahanan",
    label: "Cyber Defense",
    deskripsi: "Keamanan Digital",
    biaya_pembangunan: 550000,
    waktu_pembangunan: 120,
    biaya_pemeliharaan: 32000,
    lowongan_kerja: 120,
    kapasitas: 100,
    satuan_kapasitas: "Node Server",
    konsumsi_listrik: 5
  }
};
