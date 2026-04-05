export * from "./1_komando_pertahanan";
export * from "./2_intelijen";
export * from "./3_armada_militer";
export * from "./4_armada_polisi";
export * from "./5_manajemen_pertahanan";

export type { SektorMiliterStrategis } from "./1_komando_pertahanan";
export type { SektorArmadaMiliter } from "./3_armada_militer";
export type { SektorArmadaKepolisian } from "./4_armada_polisi";
export type { SektorPertahanan } from "./5_manajemen_pertahanan";

export const produksiMiliter = [
  // 1. Strategis & Intelijen (Intelijen)
  { key: "satellite", category: "Intelijen", label: "Sistem Satelit", desc: "Orbit Intelijen", cost: 350, buildTime: 180, maintenanceCost: 100 },
  { key: "radar", category: "Intelijen", label: "Jaringan Radar", desc: "Deteksi Dini", cost: 120, buildTime: 90, maintenanceCost: 30 },
  { key: "operasi_siber", category: "Intelijen", label: "Operasi Cyber", desc: "Perang Digital", cost: 180, buildTime: 120, maintenanceCost: 40 },

  // 2. Polisi & Keamanan (Polisi)
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
