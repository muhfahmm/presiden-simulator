export * from "./1_manajemen_pertahanan";
export * from "./2_armada_militer";



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

export interface SektorArmadaKepolisian {
  armada_polisi: {
    patroli_lantas: {
      mobil_patroli_interceptor: number;
      unit_interceptor_r2: number;
      unit_k9: number;
    };
    taktis_khusus: {
      swat: number;
      helikopter_polisi: number;
      anti_huru_hara: number;
    };
    pusat_komando: {
      kantor_polisi: number;
      kamera_pengawas: number;
      pusat_forensik: number;
    };
  };
}

export const produksiMiliter = [
  // 3. Strategis & Intelijen (Intelijen)
  { key: "satellite", category: "Intelijen", label: "Sistem Satelit", desc: "Orbit Intelijen", cost: 350, buildTime: 180, maintenanceCost: 100 },
  { key: "radar", category: "Intelijen", label: "Jaringan Radar", desc: "Deteksi Dini", cost: 120, buildTime: 90, maintenanceCost: 30 },
  { key: "operasi_siber", category: "Intelijen", label: "Operasi Cyber", desc: "Perang Digital", cost: 180, buildTime: 120, maintenanceCost: 40 },

  // 4. Polisi & Keamanan (Polisi)
  { key: "pos_polisi", category: "Polisi", label: "Kantor Polisi", desc: "Komando Wilayah", cost: 25, buildTime: 60, maintenanceCost: 15 },
  { key: "mobil_patroli_interceptor", category: "Polisi", label: "Mobil Patroli Interceptor", desc: "Patroli Lantas", cost: 2, buildTime: 7, maintenanceCost: 2 },
  { key: "unit_interceptor_r2", category: "Polisi", label: "Unit Interceptor Roda Dua", desc: "Patroli Cepat", cost: 1, buildTime: 5, maintenanceCost: 1 },
  { key: "unit_k9", category: "Polisi", label: "Unit K-9", desc: "Pelacakan", cost: 1, buildTime: 5, maintenanceCost: 1 },
  { key: "swat", category: "Polisi", label: "Pasukan SWAT", desc: "Taktis Khusus", cost: 5, buildTime: 30, maintenanceCost: 5 },
  { key: "police_heli", category: "Polisi", label: "Heli Polisi", desc: "Udara Polisi", cost: 15, buildTime: 60, maintenanceCost: 10 },
  { key: "riot_control", category: "Polisi", label: "Anti-Huru Hara", desc: "Ketertiban", cost: 4, buildTime: 20, maintenanceCost: 2 },
  { key: "cctv_network", category: "Polisi", label: "Network CCTV", desc: "Surveillance", cost: 10, buildTime: 30, maintenanceCost: 8 },
  { key: "forensik", category: "Polisi", label: "Pusat Forensik", desc: "Identifikasi", cost: 30, buildTime: 90, maintenanceCost: 12 }
];

