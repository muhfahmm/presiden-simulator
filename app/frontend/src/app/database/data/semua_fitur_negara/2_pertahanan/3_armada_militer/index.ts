// ===================
// DETAIL TOTAL BANGUNAN: Armada Militer (Total: 22 Unit)
// ===================
export const armadaMiliterRate = {
  // ARMADA DARAT
  "1_barak": {
    key: "1_barak",
    dataKey: "barak",
    groupId: "darat",
    label: "Barak Militer",
    desc: "Hunian & Pelatihan Tentara",
    deskripsi: "Kompleks Hunian & Pelatihan Tentara",
    biaya_pembangunan: 65000,
    cost: 65000,
    waktu_pembangunan: 30,
    buildTime: 30,
    biaya_pemeliharaan: 4500,
    maintenanceCost: 4500,
    lowongan_kerja: 8000,
    konsumsi_listrik: 650,
    consumption: 650
  },
  "2_tank": {
    key: "2_tank",
    dataKey: "tank_tempur_utama",
    groupId: "darat",
    label: "Main Battle Tank (MBT)",
    desc: "Divisi Kavaleri Berat",
    deskripsi: "Divisi Kavaleri Berat",
    biaya_pembangunan: 180000,
    cost: 180000,
    waktu_pembangunan: 30,
    buildTime: 30,
    biaya_pemeliharaan: 12000,
    maintenanceCost: 12000,
    lowongan_kerja: 15000,
    konsumsi_bahan_bakar: 19000
  },
  "3_apc": {
    key: "3_apc",
    dataKey: "apc_ifv",
    groupId: "darat",
    label: "APC / IFV",
    desc: "Transportasi Taktis & Mekanis",
    deskripsi: "Transportasi Taktis & Mekanis",
    biaya_pembangunan: 85000,
    cost: 85000,
    waktu_pembangunan: 15,
    buildTime: 15,
    biaya_pemeliharaan: 5500,
    maintenanceCost: 5500,
    lowongan_kerja: 10000,
    konsumsi_bahan_bakar: 8000
  },
  "4_artileri": {
    key: "4_artileri",
    dataKey: "artileri_berat",
    groupId: "darat",
    label: "Artileri Berat",
    desc: "Sistem Pukulan Jarak Jauh",
    deskripsi: "Sistem Pukulan Jarak Jauh",
    biaya_pembangunan: 150000,
    cost: 150000,
    waktu_pembangunan: 45,
    buildTime: 45,
    biaya_pemeliharaan: 8500,
    maintenanceCost: 8500,
    lowongan_kerja: 8500,
    konsumsi_bahan_bakar: 6000
  },
  "5_roket_peluncur": {
    key: "5_roket_peluncur",
    dataKey: "sistem_peluncur_roket",
    groupId: "darat",
    label: "MLRS Rocket System",
    desc: "Sistem Roket Multi-Laras",
    deskripsi: "Sistem Roket Multi-Laras",
    biaya_pembangunan: 220000,
    cost: 220000,
    waktu_pembangunan: 50,
    buildTime: 50,
    biaya_pemeliharaan: 15000,
    maintenanceCost: 15000,
    lowongan_kerja: 5000,
    konsumsi_bahan_bakar: 10000
  },
  "6_misil_sam": {
    key: "6_misil_sam",
    dataKey: "pertahanan_udara_mobile",
    groupId: "darat",
    label: "Mobile SAM System",
    desc: "Pertahanan Udara Jarak Menengah",
    deskripsi: "Pertahanan Udara Jarak Menengah",
    biaya_pembangunan: 280000,
    cost: 280000,
    waktu_pembangunan: 60,
    buildTime: 60,
    biaya_pemeliharaan: 18000,
    maintenanceCost: 18000,
    lowongan_kerja: 6000,
    konsumsi_bahan_bakar: 15000
  },
  "7_kendaraan_taktis": {
    key: "7_kendaraan_taktis",
    dataKey: "kendaraan_taktis",
    groupId: "darat",
    label: "Kendaraan Taktis",
    desc: "Unit Patroli & Serbu Cepat",
    deskripsi: "Unit Patroli & Serbu Cepat",
    biaya_pembangunan: 45000,
    cost: 45000,
    waktu_pembangunan: 10,
    buildTime: 10,
    biaya_pemeliharaan: 2400,
    maintenanceCost: 2400,
    lowongan_kerja: 2500,
    konsumsi_bahan_bakar: 12000
  },
  
  // ARMADA LAUT
  "8_kapal_induk": {
    key: "8_kapal_induk",
    dataKey: "kapal_induk",
    groupId: "laut",
    label: "Kapal Induk Konvensional",
    desc: "Pangkalan Udara Maritim Terapung",
    deskripsi: "Pangkalan Udara Maritim Terapung",
    biaya_pembangunan: 2500000,
    cost: 2500000,
    waktu_pembangunan: 240,
    buildTime: 240,
    biaya_pemeliharaan: 150000,
    maintenanceCost: 150000,
    lowongan_kerja: 35000,
    konsumsi_bahan_bakar: 12000000
  },
  "8b_kapal_induk_nuklir": {
    key: "8b_kapal_induk_nuklir",
    dataKey: "kapal_induk_nuklir",
    groupId: "laut",
    label: "Kapal Induk Nuklir",
    desc: "Supremasi Maritim Global",
    deskripsi: "Supremasi Maritim Global",
    biaya_pembangunan: 4500000,
    cost: 4500000,
    waktu_pembangunan: 360,
    buildTime: 360,
    biaya_pemeliharaan: 250000,
    maintenanceCost: 250000,
    lowongan_kerja: 45000,
    konsumsi_uranium: 5
  },
  "9_kapal_perusak": {
    key: "9_kapal_perusak",
    dataKey: "kapal_destroyer",
    groupId: "laut",
    label: "Kapal Destroyer",
    desc: "Perusak Pertahanan Maritim",
    deskripsi: "Perusak Pertahanan Maritim",
    biaya_pembangunan: 1200000,
    cost: 1200000,
    waktu_pembangunan: 180,
    buildTime: 180,
    biaya_pemeliharaan: 85000,
    maintenanceCost: 85000,
    lowongan_kerja: 18000,
    konsumsi_bahan_bakar: 15000000
  },
  "10_kapal_korvet": {
    key: "10_kapal_korvet",
    dataKey: "kapal_korvet",
    groupId: "laut",
    label: "Kapal Korvet",
    desc: "Kapal Kawal Terintegrasi",
    deskripsi: "Kapal Kawal Terintegrasi",
    biaya_pembangunan: 450000,
    cost: 450000,
    waktu_pembangunan: 90,
    buildTime: 90,
    biaya_pemeliharaan: 25000,
    maintenanceCost: 25000,
    lowongan_kerja: 8500,
    konsumsi_bahan_bakar: 8000000
  },
  "11_kapal_selam_nuklir": {
    key: "11_kapal_selam_nuklir",
    dataKey: "kapal_selam_nuklir",
    groupId: "laut",
    label: "Kapal Selam Nuklir",
    desc: "Siluman Bawah Laut Nasional",
    deskripsi: "Siluman Bawah Laut Nasional",
    biaya_pembangunan: 1800000,
    cost: 1800000,
    waktu_pembangunan: 210,
    buildTime: 210,
    biaya_pemeliharaan: 120000,
    maintenanceCost: 120000,
    lowongan_kerja: 6500,
    konsumsi_uranium: 2
  },
  "12_kapal_selam_reguler": {
    key: "12_kapal_selam_reguler",
    dataKey: "kapal_selam_regular",
    groupId: "laut",
    label: "Kapal Selam Reguler",
    desc: "Patroli Bawah Laut",
    deskripsi: "Patroli Bawah Laut",
    biaya_pembangunan: 650000,
    cost: 650000,
    waktu_pembangunan: 120,
    buildTime: 120,
    biaya_pemeliharaan: 45000,
    maintenanceCost: 45000,
    lowongan_kerja: 4500,
    konsumsi_bahan_bakar: 4000000
  },
  "13_penyapu_ranjau": {
    key: "13_penyapu_ranjau",
    dataKey: "kapal_ranjau",
    groupId: "laut",
    label: "Kapal Ranjau",
    desc: "Penyapu & Penanam Ranjau",
    deskripsi: "Penyapu & Penanam Ranjau",
    biaya_pembangunan: 150000,
    cost: 150000,
    waktu_pembangunan: 45,
    buildTime: 45,
    biaya_pemeliharaan: 12000,
    maintenanceCost: 12000,
    lowongan_kerja: 2500,
    konsumsi_bahan_bakar: 3000000
  },
  "14_kapal_logistik": {
    key: "14_kapal_logistik",
    dataKey: "kapal_logistik",
    groupId: "laut",
    label: "Kapal Logistik Maritim",
    desc: "Suplai & Perbekalan Armada",
    deskripsi: "Suplai & Perbekalan Armada",
    biaya_pembangunan: 220000,
    cost: 220000,
    waktu_pembangunan: 60,
    buildTime: 60,
    biaya_pemeliharaan: 15000,
    maintenanceCost: 15000,
    lowongan_kerja: 4500,
    konsumsi_bahan_bakar: 6000000
  },
  
  // ARMADA UDARA
  "15_jet_tempur_siluman": {
    key: "15_jet_tempur_siluman",
    dataKey: "jet_tempur_siluman",
    groupId: "udara",
    label: "Jet Tempur Stealth",
    desc: "Supremasi Udara Generasi-5",
    deskripsi: "Supremasi Udara Generasi-5",
    biaya_pembangunan: 650000,
    cost: 650000,
    waktu_pembangunan: 150,
    buildTime: 150,
    biaya_pemeliharaan: 45000,
    maintenanceCost: 45000,
    lowongan_kerja: 12000,
    konsumsi_bahan_bakar: 12000000
  },
  "16_jet_pencegat": {
    key: "16_jet_pencegat",
    dataKey: "jet_tempur_interceptor",
    groupId: "udara",
    label: "Jet Interceptor",
    desc: "Pertahanan Udara Cepat",
    deskripsi: "Pertahanan Udara Cepat",
    biaya_pembangunan: 350000,
    cost: 350000,
    waktu_pembangunan: 90,
    buildTime: 90,
    biaya_pemeliharaan: 22000,
    maintenanceCost: 22000,
    lowongan_kerja: 8500,
    konsumsi_bahan_bakar: 10000000
  },
  "17_pesawat_pembom": {
    key: "17_pesawat_pembom",
    dataKey: "pesawat_pengebom",
    groupId: "udara",
    label: "Pesawat Pengebom Strategis",
    desc: "Pukulan Udara Jarak Jauh",
    deskripsi: "Pukulan Udara Jarak Jauh",
    biaya_pembangunan: 850000,
    cost: 850000,
    waktu_pembangunan: 180,
    buildTime: 180,
    biaya_pemeliharaan: 65000,
    maintenanceCost: 65000,
    lowongan_kerja: 15000,
    konsumsi_bahan_bakar: 20000000
  },
  "18_helikopter_serbu": {
    key: "18_helikopter_serbu",
    dataKey: "helikopter_serang",
    groupId: "udara",
    label: "Helikopter Serang",
    desc: "Bantuan Tembakan Udara Dekat",
    deskripsi: "Bantuan Tembakan Udara Dekat",
    biaya_pembangunan: 120000,
    cost: 120000,
    waktu_pembangunan: 45,
    buildTime: 45,
    biaya_pemeliharaan: 8500,
    maintenanceCost: 8500,
    lowongan_kerja: 5500,
    konsumsi_bahan_bakar: 5000000
  },
  "19_pesawat_intai": {
    key: "19_pesawat_intai",
    dataKey: "pesawat_pengintai",
    groupId: "udara",
    label: "Pesawat Intai Strategis (AWACS)",
    desc: "Komando & Pengamatan Udara",
    deskripsi: "Komando & Pengamatan Udara",
    biaya_pembangunan: 250000,
    cost: 250000,
    waktu_pembangunan: 60,
    buildTime: 60,
    biaya_pemeliharaan: 18000,
    maintenanceCost: 18000,
    lowongan_kerja: 4500,
    konsumsi_bahan_bakar: 4000000
  },
  "20_drone_intai": {
    key: "20_drone_intai",
    dataKey: "drone_intai_uav",
    groupId: "udara",
    label: "Drone Intai UAV",
    desc: "Pengamatan Tanpa Awak",
    deskripsi: "Pengamatan Tanpa Awak",
    biaya_pembangunan: 45000,
    cost: 45000,
    waktu_pembangunan: 15,
    buildTime: 15,
    biaya_pemeliharaan: 3500,
    maintenanceCost: 3500,
    lowongan_kerja: 1200,
    konsumsi_bahan_bakar: 500000
  },
  "21_drone_kamikaze": {
    key: "21_drone_kamikaze",
    dataKey: "drone_kamikaze",
    groupId: "udara",
    label: "Drone Kamikaze",
    desc: "Amunisi Cerdas Presisi",
    deskripsi: "Amunisi Cerdas Presisi",
    biaya_pembangunan: 15000,
    cost: 15000,
    waktu_pembangunan: 7,
    buildTime: 7,
    biaya_pemeliharaan: 800,
    maintenanceCost: 800,
    lowongan_kerja: 500,
    konsumsi_bahan_bakar: 200000
  },
  "22_transport_udara": {
    key: "22_transport_udara",
    dataKey: "pesawat_angkut",
    groupId: "udara",
    label: "Pesawat Angkut Berat",
    desc: "Logistik & Transportasi Pasukan",
    deskripsi: "Logistik & Transportasi Pasukan",
    biaya_pembangunan: 180000,
    cost: 180000,
    waktu_pembangunan: 45,
    buildTime: 45,
    biaya_pemeliharaan: 12000,
    maintenanceCost: 12000,
    lowongan_kerja: 6500,
    konsumsi_bahan_bakar: 8000000
  }
};

export interface SektorArmadaMiliter {
  barak: number;
  darat: {
    tank_tempur_utama: number;
    apc_ifv: number;
    artileri_berat: number;
    sistem_peluncur_roket: number;
    pertahanan_udara_mobile: number;
    kendaraan_taktis: number;
  };
  laut: {
    kapal_induk: number;
    kapal_induk_nuklir: number;
    kapal_destroyer: number;
    kapal_korvet: number;
    kapal_selam_nuklir: number;
    kapal_selam_regular: number;
    kapal_ranjau: number;
    kapal_logistik: number;
  };
  udara: {
    jet_tempur_siluman: number;
    jet_tempur_interceptor: number;
    pesawat_pengebom: number;
    helikopter_serang: number;
    pesawat_pengintai: number;
    drone_intai_uav: number;
    drone_kamikaze: number;
    pesawat_angkut: number;
  };
}

export const armadaMiliterList = [
  // 2. Armada Tempur (Armada)
  { key: "barak", category: "Armada", label: "Barak Militer", desc: "Hunian Tentara", cost: 40, buildTime: 45, maintenanceCost: 15 },
  { key: "tank", category: "Armada", label: "Main Battle Tank", desc: "Kavaleri Darat", cost: 20, buildTime: 30, maintenanceCost: 10 },
  { key: "apc", category: "Armada", label: "APC / IFV", desc: "Transportasi Taktis", cost: 8, buildTime: 15, maintenanceCost: 4 },
  { key: "artileri", category: "Armada", label: "Artileri Berat", desc: "Pukulan Jarak Jauh", cost: 15, buildTime: 45, maintenanceCost: 8 },
  { key: "rocket", category: "Armada", label: "MLRS Rocket", desc: "Sistem Roket", cost: 18, buildTime: 50, maintenanceCost: 12 },
  { key: "sam", category: "Armada", label: "Mobile SAM", desc: "Hulu Ledak", cost: 25, buildTime: 60, maintenanceCost: 15 },
  { key: "tactical", category: "Armada", label: "Kendaraan Taktis", desc: "Patroli Tempur", cost: 5, buildTime: 10, maintenanceCost: 2 },
  { key: "carrier", category: "Armada", label: "Kapal Induk Konvensional", desc: "Pangkalan Apung", cost: 750, buildTime: 480, maintenanceCost: 200 },
  { key: "nuclear_carrier", category: "Armada", label: "Kapal Induk Nuklir", desc: "Pangkalan Udara Terapung", cost: 1500, buildTime: 720, maintenanceCost: 400 },
  { key: "destroyer", category: "Armada", label: "Kapal Destroyer", desc: "Perusak Maritim", cost: 280, buildTime: 360, maintenanceCost: 100 },
  { key: "corvette", category: "Armada", label: "Kapal Korvet", desc: "Kapal Kawal", cost: 120, buildTime: 180, maintenanceCost: 45 },
  { key: "submarine", category: "Armada", label: "Kapal Selam Nuklir", desc: "Siluman Bawah Air", cost: 420, buildTime: 420, maintenanceCost: 150 },
  { key: "reg_sub", category: "Armada", label: "Kapal Selam Reguler", desc: "Selam Reguler", cost: 150, buildTime: 240, maintenanceCost: 60 },
  { key: "mine_ship", category: "Armada", label: "Kapal Ranjau", desc: "Penyapu Ranjau", cost: 45, buildTime: 90, maintenanceCost: 15 },
  { key: "logistics", category: "Armada", label: "Kapal Logistik", desc: "Suplai Maritim", cost: 60, buildTime: 120, maintenanceCost: 25 },
  { key: "stealth_jet", category: "Armada", label: "Jet Stealth", desc: "Supremasi Udara", cost: 250, buildTime: 300, maintenanceCost: 120 },
  { key: "interceptor", category: "Armada", label: "Jet Interceptor", desc: "Satu Pencegat", cost: 120, buildTime: 180, maintenanceCost: 55 },
  { key: "bomber", category: "Armada", label: "Pesawat Pengebom", desc: "Serangan Udara", cost: 350, buildTime: 360, maintenanceCost: 180 },
  { key: "heli_attack", category: "Armada", label: "Heli Serang", desc: "Bantuan Udara", cost: 40, buildTime: 90, maintenanceCost: 25 },
  { key: "recon_plane", category: "Armada", label: "Pesawat Intai", desc: "Intelijen Udara", cost: 80, buildTime: 120, maintenanceCost: 20 },
  { key: "uav", category: "Armada", label: "Drone UAV", desc: "Intai Tanpa Awak", cost: 15, buildTime: 30, maintenanceCost: 5 },
  { key: "kamikaze", category: "Armada", label: "Drone Kamikaze", desc: "Serangan Bunuh Diri", cost: 5, buildTime: 7, maintenanceCost: 1 },
  { key: "transport", category: "Armada", label: "Pesawat Angkut", desc: "Logistik Udara", cost: 45, buildTime: 90, maintenanceCost: 15 }
];
