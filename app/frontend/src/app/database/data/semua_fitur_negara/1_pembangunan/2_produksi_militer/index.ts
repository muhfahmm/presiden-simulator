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
    biaya_pembangunan: 120000,
    waktu_pembangunan: 45,
    biaya_pemeliharaan: 8500,
    lowongan_kerja: 8000,
    konsumsi_listrik: 180,
    produksi: 250,
    satuan: "Unit"
  },
  "2_pabrik_amunisi": {
    key: "2_pabrik_amunisi",
    dataKey: "pabrik_amunisi",
    groupId: "pabrik_militer",
    label: "Pabrik Amunisi",
    deskripsi: "Produksi Amunisi Militer",
    biaya_pembangunan: 80000,
    waktu_pembangunan: 22,
    biaya_pemeliharaan: 4200,
    lowongan_kerja: 12000,
    konsumsi_listrik: 120,
    produksi: 25000,
    satuan: "Unit"
  },
  "3_pabrik_kendaraan_tempur": {
    key: "3_pabrik_kendaraan_tempur",
    dataKey: "pabrik_kendaraan_tempur",
    groupId: "pabrik_militer",
    label: "Pabrik Kendaraan Tempur",
    deskripsi: "Produksi Tank & APC",
    biaya_pembangunan: 250000,
    waktu_pembangunan: 90,
    biaya_pemeliharaan: 15000,
    lowongan_kerja: 25000,
    konsumsi_listrik: 450,
    produksi: 50,
    satuan: "Unit"
  },
  "4_pabrik_senjata_berat": {
    key: "4_pabrik_senjata_berat",
    dataKey: "pabrik_senjata_berat",
    groupId: "pabrik_militer",
    label: "Pabrik Senjata Berat",
    deskripsi: "Produksi Artileri & Rudal",
    biaya_pembangunan: 350000,
    waktu_pembangunan: 105,
    biaya_pemeliharaan: 22000,
    lowongan_kerja: 30000,
    konsumsi_listrik: 550,
    produksi: 25,
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
    production: 250,
    unit: "Unit"
  },
  "2_pabrik_amunisi": {
    dataKey: "pabrik_amunisi",
    production: 25000,
    unit: "Unit"
  }
};

export const produksiMiliterPabrik = [
  { key: "pabrik_drone_kamikaze", category: "Pabrik", label: "Pabrik Drone Kamikaze", desc: "Produksi Drone", cost: 120000, buildTime: 45, maintenanceCost: 8500 },
  { key: "pabrik_amunisi", category: "Pabrik", label: "Pabrik Amunisi Militer", desc: "Produksi Amunisi", cost: 80000, buildTime: 22, maintenanceCost: 4200 }
];
