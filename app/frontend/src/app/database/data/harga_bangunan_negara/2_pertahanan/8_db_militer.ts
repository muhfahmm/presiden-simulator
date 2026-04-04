// ===================
// DETAIL TOTAL BANGUNAN: Armada Militer (Total: 22 Unit)
// ===================
export const armadaMiliterRate = {
  // ARMADA DARAT
  "1_barak": {
    key: "1_barak",
    dataKey: "barak",
    groupId: "darat",
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
    deskripsi: "Patroli Tempur",
    biaya: 5,
    waktu_pembangunan: 10,
    biaya_pemeliharaan: 2,
    lowongan_kerja: 2,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 4
  },
  
  // ARMADA LAUT
  "8_kapal_induk": {
    key: "8_kapal_induk",
    dataKey: "carrier",
    groupId: "laut",
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
    deskripsi: "Logistik Udara",
    biaya: 45,
    waktu_pembangunan: 90,
    biaya_pemeliharaan: 15,
    lowongan_kerja: 3,
    konsumsi_listrik: 0,
    konsumsi_bahan_bakar: 80
  }
};
