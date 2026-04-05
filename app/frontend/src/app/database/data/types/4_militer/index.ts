export { pertahananRate, armadaMiliterRate } from "@/app/database/data/harga_bangunan_negara/2_pertahanan";
export { pabrikMiliterRate } from "@/app/database/data/harga_bangunan_negara/1_pembangunan";

export interface SektorPertahanan {
  penjara: number;
  gudang_senjata: number;
  hangar_tank: number;
  akademi_militer: number;
  pusat_komando: number;
  pangkalan_udara: number;
  pangkalan_laut: number;
  program_luar_angkasa: number;
  lisensi_siber?: boolean;
  pertahanan_siber: number;
}

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

export interface SektorPabrikMiliter {
  pabrik_drone_kamikaze: number;
  pabrik_amunisi: number;
  pabrik_kendaraan_tempur: number;
  pabrik_senjata_berat: number;
}

export const produksiMiliter = [
  // 1. Manajemen Pertahanan (Pertahanan)
  { key: "penjara", category: "Pertahanan", label: "Penjara", desc: "Lembaga Pemasyarakatan", cost: 25, buildTime: 60, maintenanceCost: 20 },
  { key: "gudang_senjata", category: "Pertahanan", label: "Gudang Senjata", desc: "Penyimpanan Amunisi", cost: 30, buildTime: 30, maintenanceCost: 10 },
  { key: "hangar_tank", category: "Pertahanan", label: "Hangar Tank", desc: "Garasi Tempur", cost: 50, buildTime: 60, maintenanceCost: 35 },
  { key: "akademi_militer", category: "Pertahanan", label: "Akademi Militer", desc: "Pendidikan Perwira", cost: 150, buildTime: 180, maintenanceCost: 40 },
  { key: "pusat_komando", category: "Pertahanan", label: "Pusat Komando", desc: "Komando Tertinggi", cost: 450, buildTime: 240, maintenanceCost: 150 },
  { key: "pangkalan_udara", category: "Pertahanan", label: "Pangkalan Udara", desc: "Fasilitas Dirgantara", cost: 280, buildTime: 180, maintenanceCost: 80 },
  { key: "pangkalan_laut", category: "Pertahanan", label: "Pangkalan Laut", desc: "Fasilitas Maritim", cost: 320, buildTime: 210, maintenanceCost: 100 },
  { key: "program_luar_angkasa", category: "Pertahanan", label: "Program luar angkasa", desc: "Program Satelit", cost: 600, buildTime: 365, maintenanceCost: 250 },
  { key: "cyber_shield", category: "Pertahanan", label: "Cyber Defense", desc: "Keamanan Digital", cost: 180, buildTime: 120, maintenanceCost: 50 },

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
  { key: "transport", category: "Armada", label: "Pesawat Angkut", desc: "Logistik Udara", cost: 45, buildTime: 90, maintenanceCost: 15 },

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
  { key: "forensik", category: "Polisi", label: "Pusat Forensik", desc: "Identifikasi", cost: 30, buildTime: 90, maintenanceCost: 12 },

  // 5. Pabrik Militer (Factories)
  { key: "pabrik_drone_kamikaze", category: "Pabrik", label: "Pabrik Drone Kamikaze", desc: "Produksi Drone", cost: 50, buildTime: 90, maintenanceCost: 500 },
  { key: "pabrik_amunisi", category: "Pabrik", label: "Pabrik Amunisi Militer", desc: "Produksi Amunisi", cost: 30, buildTime: 45, maintenanceCost: 100 },
  { key: "pabrik_kendaraan_tempur", category: "Pabrik", label: "Pabrik Kendaraan Tempur", desc: "Produksi Kendaraan", cost: 100, buildTime: 180, maintenanceCost: 1500 },
  { key: "pabrik_senjata_berat", category: "Pabrik", label: "Pabrik Senjata Berat", desc: "Produksi Senjata", cost: 80, buildTime: 120, maintenanceCost: 1000 }
];

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
