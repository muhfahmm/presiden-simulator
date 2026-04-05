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
    label: "Pabrik Amunisi Militer",
    deskripsi: "Produksi Berbagai Jenis Amunisi",
    biaya_pembangunan: 1800,
    waktu_pembangunan: 45,
    biaya_pemeliharaan: 500,
    lowongan_kerja: 1200,
    konsumsi_listrik: 40,
    produksi: 5,
    satuan: "Unit"
  }
};

export interface SektorPabrikMiliter {
  pabrik_drone_kamikaze: number;
  pabrik_amunisi: number;
}

export const militerRate = {
  pabrik_drone_kamikaze: {
    key: "pabrik_drone_kamikaze",
    production: 5,
    unit: "Unit"
  },
  pabrik_amunisi: {
    key: "pabrik_amunisi",
    production: 5,
    unit: "Unit"
  }
};

export const produksiMiliterPabrik = [
  { key: "pabrik_drone_kamikaze", category: "Pabrik", label: "Pabrik Drone Kamikaze", desc: "Produksi Drone", cost: 50, buildTime: 90, maintenanceCost: 500 },
  { key: "pabrik_amunisi", category: "Pabrik", label: "Pabrik Amunisi Militer", desc: "Produksi Amunisi", cost: 30, buildTime: 45, maintenanceCost: 100 }
];
