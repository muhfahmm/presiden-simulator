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
    deskripsi: "Hunian Tentara",
    biaya: 40,
    waktu_pembangunan: 45,
    biaya_pemeliharaan: 15,
    lowongan_kerja: 500,
    konsumsi_listrik: 5
  },
  "2_tank": {
    key: "2_tank",
    dataKey: "tank",
    groupId: "darat",
    label: "Main Battle Tank",
    deskripsi: "Kavaleri Darat",
    biaya: 20,
    waktu_pembangunan: 30,
    biaya_pemeliharaan: 10,
    lowongan_kerja: 4,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 12
  },
  "3_apc": {
    key: "3_apc",
    dataKey: "apc",
    groupId: "darat",
    label: "APC / IFV",
    deskripsi: "Transportasi Taktis",
    biaya: 8,
    waktu_pembangunan: 15,
    biaya_pemeliharaan: 4,
    lowongan_kerja: 3,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 8
  },
  "4_artileri": {
    key: "4_artileri",
    dataKey: "artileri",
    groupId: "darat",
    label: "Artileri Berat",
    deskripsi: "Pukulan Jarak Jauh",
    biaya: 15,
    waktu_pembangunan: 45,
    biaya_pemeliharaan: 8,
    lowongan_kerja: 6,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 6
  },
  "5_roket_peluncur": {
    key: "5_roket_peluncur",
    dataKey: "rocket",
    groupId: "darat",
    label: "MLRS Rocket",
    deskripsi: "Sistem Roket",
    biaya: 18,
    waktu_pembangunan: 50,
    biaya_pemeliharaan: 12,
    lowongan_kerja: 5,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 10
  },
  "6_misil_sam": {
    key: "6_misil_sam",
    dataKey: "sam",
    groupId: "darat",
    label: "Mobile SAM",
    deskripsi: "Hulu Ledak",
    biaya: 25,
    waktu_pembangunan: 60,
    biaya_pemeliharaan: 15,
    lowongan_kerja: 6,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 5
  },
  "7_kendaraan_taktis": {
    key: "7_kendaraan_taktis",
    dataKey: "tactical",
    groupId: "darat",
    label: "Kendaraan Taktis",
    deskripsi: "Patroli Tempur",
    biaya: 5,
    waktu_pembangunan: 10,
    biaya_pemeliharaan: 2,
    lowongan_kerja: 2,
    power: 0,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 4
  },
  
  // ARMADA LAUT
  "8_kapal_induk": {
    key: "8_kapal_induk",
    dataKey: "carrier",
    groupId: "laut",
    label: "Kapal Induk",
    deskripsi: "Pangkalan Apung",
    biaya: 750,
    waktu_pembangunan: 480,
    biaya_pemeliharaan: 200,
    lowongan_kerja: 5000,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 500
  },
  "9_kapal_perusak": {
    key: "9_kapal_perusak",
    dataKey: "destroyer",
    groupId: "laut",
    label: "Kapal Destroyer",
    deskripsi: "Perusak Maritim",
    biaya: 280,
    waktu_pembangunan: 360,
    biaya_pemeliharaan: 100,
    lowongan_kerja: 300,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 150
  },
  "10_kapal_korvet": {
    key: "10_kapal_korvet",
    dataKey: "corvette",
    groupId: "laut",
    label: "Kapal Korvet",
    deskripsi: "Kapal Kawal",
    biaya: 120,
    waktu_pembangunan: 180,
    biaya_pemeliharaan: 45,
    lowongan_kerja: 100,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 80
  },
  "11_kapal_selam_nuklir": {
    key: "11_kapal_selam_nuklir",
    dataKey: "submarine",
    groupId: "laut",
    label: "Kapal Selam N",
    deskripsi: "Siluman Bawah Air",
    biaya: 420,
    waktu_pembangunan: 420,
    biaya_pemeliharaan: 150,
    lowongan_kerja: 80,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 42
  },
  "12_kapal_selam_reguler": {
    key: "12_kapal_selam_reguler",
    dataKey: "reg_sub",
    groupId: "laut",
    label: "Kapal Selam R",
    deskripsi: "Selam Reguler",
    biaya: 150,
    waktu_pembangunan: 240,
    biaya_pemeliharaan: 60,
    lowongan_kerja: 60,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 40
  },
  "13_penyapu_ranjau": {
    key: "13_penyapu_ranjau",
    dataKey: "mine_ship",
    groupId: "laut",
    label: "Kapal Ranjau",
    deskripsi: "Penyapu Ranjau",
    biaya: 45,
    waktu_pembangunan: 90,
    biaya_pemeliharaan: 15,
    lowongan_kerja: 40,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 30
  },
  "14_kapal_logistik": {
    key: "14_kapal_logistik",
    dataKey: "logistics",
    groupId: "laut",
    label: "Kapal Logistik",
    deskripsi: "Suplai Maritim",
    biaya: 60,
    waktu_pembangunan: 120,
    biaya_pemeliharaan: 25,
    lowongan_kerja: 50,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 60
  },
  
  // ARMADA UDARA
  "15_jet_tempur_siluman": {
    key: "15_jet_tempur_siluman",
    dataKey: "stealth_jet",
    groupId: "udara",
    label: "Jet Stealth",
    deskripsi: "Supremasi Udara",
    biaya: 250,
    waktu_pembangunan: 300,
    biaya_pemeliharaan: 120,
    lowongan_kerja: 2,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 120
  },
  "16_jet_pencegat": {
    key: "16_jet_pencegat",
    dataKey: "interceptor",
    groupId: "udara",
    label: "Jet Interceptor",
    deskripsi: "Satu Pencegat",
    biaya: 120,
    waktu_pembangunan: 180,
    biaya_pemeliharaan: 55,
    lowongan_kerja: 2,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 100
  },
  "17_pesawat_pembom": {
    key: "17_pesawat_pembom",
    dataKey: "bomber",
    groupId: "udara",
    label: "Pesawat Pengebom",
    deskripsi: "Serangan Udara",
    biaya: 350,
    waktu_pembangunan: 360,
    biaya_pemeliharaan: 180,
    lowongan_kerja: 3,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 200
  },
  "18_helikopter_serbu": {
    key: "18_helikopter_serbu",
    dataKey: "heli_attack",
    groupId: "udara",
    label: "Heli Serang",
    deskripsi: "Bantuan Udara",
    biaya: 40,
    waktu_pembangunan: 90,
    biaya_pemeliharaan: 25,
    lowongan_kerja: 3,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 50
  },
  "19_pesawat_intai": {
    key: "19_pesawat_intai",
    dataKey: "recon_plane",
    groupId: "udara",
    label: "Pesawat Intai",
    deskripsi: "Intelijen Udara",
    biaya: 80,
    waktu_pembangunan: 120,
    biaya_pemeliharaan: 20,
    lowongan_kerja: 2,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 40
  },
  "20_drone_intai": {
    key: "20_drone_intai",
    dataKey: "uav",
    groupId: "udara",
    label: "Drone UAV",
    deskripsi: "Intai Tanpa Awak",
    biaya: 15,
    waktu_pembangunan: 30,
    biaya_pemeliharaan: 5,
    lowongan_kerja: 1,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 5
  },
  "21_drone_kamikaze": {
    key: "21_drone_kamikaze",
    dataKey: "kamikaze",
    groupId: "udara",
    label: "Drone Kamikaze",
    deskripsi: "Serangan Bunuh Diri",
    biaya: 5,
    waktu_pembangunan: 7,
    biaya_pemeliharaan: 1,
    lowongan_kerja: 1,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 2
  },
  "22_transport_udara": {
    key: "22_transport_udara",
    dataKey: "transport",
    groupId: "udara",
    label: "Pesawat Angkut",
    deskripsi: "Logistik Udara",
    biaya: 45,
    waktu_pembangunan: 90,
    biaya_pemeliharaan: 15,
    lowongan_kerja: 3,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 80
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
  { key: "carrier", category: "Armada", label: "Kapal Induk", desc: "Pangkalan Apung", cost: 750, buildTime: 480, maintenanceCost: 200 },
  { key: "destroyer", category: "Armada", label: "Kapal Destroyer", desc: "Perusak Maritim", cost: 280, buildTime: 360, maintenanceCost: 100 },
  { key: "corvette", category: "Armada", label: "Kapal Korvet", desc: "Kapal Kawal", cost: 120, buildTime: 180, maintenanceCost: 45 },
  { key: "submarine", category: "Armada", label: "Kapal Selam N", desc: "Siluman Bawah Air", cost: 420, buildTime: 420, maintenanceCost: 150 },
  { key: "reg_sub", category: "Armada", label: "Kapal Selam R", desc: "Selam Reguler", cost: 150, buildTime: 240, maintenanceCost: 60 },
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
