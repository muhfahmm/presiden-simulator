// ===================
// DETAIL TOTAL BANGUNAN: Pabrik Militer (Total: 4 Bangunan)
// ===================
export const pabrikMiliterRate = {
  "1_pabrik_drone_kamikaze": {
    key: "1_pabrik_drone_kamikaze",
    dataKey: "pabrik_drone_kamikaze",
    groupId: "pabrik_militer",
    label: "Pabrik Drone Kamikaze",
    deskripsi: "Produksi Drone Serang Bunuh Diri",
    biaya_pembangunan: 5000,
    waktu_pembangunan: 90,
    biaya_pemeliharaan: 500,
    lowongan_kerja: 1200,
    konsumsi_listrik: 55,
    produksi: 5,
    satuan: "Unit"
  },
  "2_pabrik_amunisi": {
    key: "2_pabrik_amunisi",
    dataKey: "pabrik_amunisi",
    groupId: "pabrik_militer",
    label: "Pabrik Amunisi",
    deskripsi: "Produksi Amunisi Militer",
    biaya_pembangunan: 3000,
    waktu_pembangunan: 45,
    biaya_pemeliharaan: 100,
    lowongan_kerja: 800,
    konsumsi_listrik: 10,
    produksi: 50,
    satuan: "Unit"
  },
  "3_pabrik_kendaraan_tempur": {
    key: "3_pabrik_kendaraan_tempur",
    dataKey: "pabrik_kendaraan_tempur",
    groupId: "pabrik_militer",
    label: "Pabrik Kendaraan Tempur",
    deskripsi: "Produksi Tank & APC",
    biaya_pembangunan: 12000,
    waktu_pembangunan: 180,
    biaya_pemeliharaan: 1500,
    lowongan_kerja: 3500,
    konsumsi_listrik: 120,
    produksi: 2,
    satuan: "Unit"
  },
  "4_pabrik_senjata_berat": {
    key: "4_pabrik_senjata_berat",
    dataKey: "pabrik_senjata_berat",
    groupId: "pabrik_militer",
    label: "Pabrik Senjata Berat",
    deskripsi: "Produksi Artileri & Rudal",
    biaya_pembangunan: 15000,
    waktu_pembangunan: 210,
    biaya_pemeliharaan: 2000,
    lowongan_kerja: 4000,
    konsumsi_listrik: 150,
    produksi: 1,
    satuan: "Unit"
  }
};

export interface SektorPabrikMiliter {
  pabrik_drone_kamikaze: number;
  pabrik_amunisi: number;
  pabrik_kendaraan_tempur: number;
  pabrik_senjata_berat: number;
}

export const militerRate = {
  "1_pabrik_drone_kamikaze": {
    dataKey: "pabrik_drone_kamikaze",
    production: 5,
    unit: "Unit"
  },
  "2_pabrik_amunisi": {
    dataKey: "pabrik_amunisi",
    production: 5,
    unit: "Unit"
  }
};

export const produksiMiliterPabrik = [
  { key: "pabrik_drone_kamikaze", category: "Pabrik", label: "Pabrik Drone Kamikaze", desc: "Produksi Drone", cost: 50, buildTime: 90, maintenanceCost: 500 },
  { key: "pabrik_amunisi", category: "Pabrik", label: "Pabrik Amunisi Militer", desc: "Produksi Amunisi", cost: 30, buildTime: 45, maintenanceCost: 100 }
];
