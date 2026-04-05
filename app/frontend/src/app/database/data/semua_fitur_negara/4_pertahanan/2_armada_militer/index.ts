import { armadaMiliterRate } from "@/app/database/data/harga_bangunan_negara/2_pertahanan/8_db_militer";

export { armadaMiliterRate };

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
