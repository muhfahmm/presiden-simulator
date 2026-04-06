export interface IntelligenceData {
  sistem_satelit: number;
  jaringan_radar: number;
  operasi_siber: number;
}

export const intelijenRate = {
  "sistem_satelit": {
    key: "sistem_satelit",
    dataKey: "sistem_satelit",
    label: "Sistem Satelit Intelijen",
    desc: "Orbit Intelijen Strategis",
    deskripsi: "Sistem Satelit Intelijen Strategis Nasional",
    biaya_pembangunan: 850000,
    cost: 850000,
    waktu_pembangunan: 90,
    buildTime: 90,
    biaya_pemeliharaan: 12000,
    maintenanceCost: 12000,
    lowongan_kerja: 4500,
    konsumsi_listrik: 650,
    consumption: 650
  },
  "jaringan_radar": {
    key: "jaringan_radar",
    dataKey: "jaringan_radar",
    label: "Jaringan Radar Nasional",
    desc: "Sistem Deteksi Dini",
    deskripsi: "Jaringan Radar Pertahanan Nasional Terpadu",
    biaya_pembangunan: 450000,
    cost: 450000,
    waktu_pembangunan: 45,
    buildTime: 45,
    biaya_pemeliharaan: 5500,
    maintenanceCost: 5500,
    lowongan_kerja: 3500,
    konsumsi_listrik: 550,
    consumption: 550
  },
  "operasi_siber": {
    key: "operasi_siber",
    dataKey: "operasi_siber",
    label: "Pusat Operasi Siber",
    desc: "Pertahanan Digital Nasional",
    deskripsi: "Pusat Operasi Intelijen & Pertahanan Siber",
    biaya_pembangunan: 350000,
    cost: 350000,
    waktu_pembangunan: 60,
    buildTime: 60,
    biaya_pemeliharaan: 8500,
    maintenanceCost: 8500,
    lowongan_kerja: 12000,
    konsumsi_listrik: 450,
    consumption: 450
  },
};
