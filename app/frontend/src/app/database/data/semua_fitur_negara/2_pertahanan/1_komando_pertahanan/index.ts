export interface DefenseCommandData {
  pusat_komando_strategis: number;
  bunker_komando: number;
  pusat_komando_wilayah: number;
}

export interface SektorMiliterStrategis {
  waktu_respon?: number;
  intelijen?: number;
  status_nuklir?: boolean;
  operasi_strategis?: {
    misi_serangan: number;
    misi_mata_mata: number;
    misi_sabotase: number;
    manajemen_wilayah: number;
    program_nuklir: number;
  };
  intel_radar?: {
    sistem_satelit: number;
    jaringan_radar: number;
    operasi_siber: number;
  };
}

// ===================
// DETAIL TOTAL BANGUNAN: Komando Pertahanan (Total: 3 Bangunan)
// ===================
export const komandoPertahananRate = {
  "pusat_komando_strategis": {
    key: "pusat_komando_strategis",
    dataKey: "pusat_komando_strategis",
    label: "Pusat Komando Strategis",
    deskripsi: "Pusat Komando Strategis Nasional",

    waktu_pembangunan: 90,
    biaya_pembangunan: 1200000,
    lowongan_kerja: 15000,
    konsumsi_listrik: 850
  },
  "bunker_komando": {
    key: "bunker_komando",
    dataKey: "bunker_komando",
    label: "Bunker Pertahanan",
    deskripsi: "Bunker Komando Pertahanan Nasional",

    waktu_pembangunan: 120,
    biaya_pembangunan: 850000,
    lowongan_kerja: 8000,
    konsumsi_listrik: 450
  },
  "pusat_komando_wilayah": {
    key: "pusat_komando_wilayah",
    dataKey: "pusat_komando_wilayah",
    label: "Komando Wilayah",
    deskripsi: "Pusat Komando Operasi Wilayah",

    waktu_pembangunan: 60,
    biaya_pembangunan: 450000,
    lowongan_kerja: 12000,
    konsumsi_listrik: 350
  }
};
