export interface ProduksiMiliterItem {
  id: string;
  key: string;
  label: string;
  name: string;
  desc: string;
  category: "Pertahanan" | "Militer" | "Armada" | "Intelijen" | "Polisi";
  maintenanceCost: number;
  cost: number;
  buildTime: number;
}

export const produksiMiliter: ProduksiMiliterItem[] = [
  // Sektor Pertahanan
  { id: "penjara", key: "penjara", label: "Penjara", name: "Penjara", desc: "Lembaga Pemasyarakatan", category: "Pertahanan", maintenanceCost: 20, cost: 25, buildTime: 60 },
  { id: "barak", key: "barak", label: "Barak Militer", name: "Barak", desc: "Hunian Tentara", category: "Pertahanan", maintenanceCost: 15, cost: 40, buildTime: 45 },
  { id: "gudang_senjata", key: "gudang_senjata", label: "Gudang Senjata", name: "Gudang Senjata", desc: "Penyimpanan Amunisi", category: "Pertahanan", maintenanceCost: 10, cost: 30, buildTime: 30 },
  { id: "hangar_tank", key: "hangar_tank", label: "Hangar Tank", name: "Hangar Tank", desc: "Garasi Tempur", category: "Pertahanan", maintenanceCost: 35, cost: 50, buildTime: 60 },
  { id: "akademi_militer", key: "akademi_militer", label: "Akademi Militer", name: "Akademi Militer", desc: "Pendidikan Perwira", category: "Pertahanan", maintenanceCost: 40, cost: 150, buildTime: 180 },
  { id: "program_luar_angkasa", key: "program_luar_angkasa", label: "Lintas Antariksa", name: "Lintas Antariksa", desc: "Program Satelit", category: "Pertahanan", maintenanceCost: 250, cost: 600, buildTime: 365 },
  { id: "cyber_shield", key: "cyber_shield", label: "Cyber Defense", name: "Cyber Defense", desc: "Keamanan Digital", category: "Pertahanan", maintenanceCost: 50, cost: 180, buildTime: 120 },

  // Sektor Militer
  { id: "strategic_command", key: "pusat_komando", label: "Pusat Komando", name: "Pusat Komando Strategis", desc: "Komando Tertinggi", category: "Militer", maintenanceCost: 150, cost: 450, buildTime: 240 },
  { id: "air_base", key: "pangkalan_udara", label: "Pangkalan Udara", name: "Pangkalan Udara", desc: "Fasilitas Dirgantara", category: "Militer", maintenanceCost: 80, cost: 280, buildTime: 180 },
  { id: "naval_base", key: "pangkalan_laut", label: "Pangkalan Laut", name: "Pangkalan Laut", desc: "Fasilitas Maritim", category: "Militer", maintenanceCost: 100, cost: 320, buildTime: 210 },
  { id: "arms_factory", key: "arms_factory", label: "Pabrik Alutsista", name: "Pabrik Alutsista", desc: "Manufaktur Senjata", category: "Militer", maintenanceCost: 120, cost: 350, buildTime: 240 },

  // Sektor Armada
  { id: "tank", key: "tank", label: "Main Battle Tank", name: "Main Battle Tank", desc: "Kavaleri Darat", category: "Armada", maintenanceCost: 10, cost: 20, buildTime: 30 },
  { id: "apc", key: "apc", label: "APC / Rantis", name: "APC / Rantis", desc: "Transportasi Taktis", category: "Armada", maintenanceCost: 4, cost: 8, buildTime: 15 },
  { id: "artileri", key: "artileri", label: "Artileri Berat", name: "Artileri Berat", desc: "Pukulan Jarak Jauh", category: "Armada", maintenanceCost: 8, cost: 15, buildTime: 45 },
  { id: "carrier", key: "carrier", label: "Kapal Induk", name: "Kapal Induk", desc: "Pangkalan Apung", category: "Armada", maintenanceCost: 200, cost: 750, buildTime: 480 },
  { id: "destroyer", key: "destroyer", label: "Kapal Destroyer", name: "Kapal Destroyer", desc: "Perusak Maritim", category: "Armada", maintenanceCost: 100, cost: 280, buildTime: 360 },
  { id: "submarine", key: "submarine", label: "Kapal Selam N", name: "Kapal Selam N", desc: "Siluman Bawah Air", category: "Armada", maintenanceCost: 150, cost: 420, buildTime: 420 },
  { id: "stealth_jet", key: "stealth_jet", label: "Jet Stealth", name: "Jet Stealth", desc: "Supremasi Udara", category: "Armada", maintenanceCost: 120, cost: 250, buildTime: 300 },
  { id: "heli_attack", key: "heli_attack", label: "Heli Serang", name: "Heli Serang", desc: "Bantuan Udara", category: "Armada", maintenanceCost: 25, cost: 40, buildTime: 90 },
  { id: "recon_plane", key: "recon_plane", label: "Pesawat Intai", name: "Pesawat Intai", desc: "Intelijen Udara", category: "Armada", maintenanceCost: 20, cost: 80, buildTime: 120 },

  // Sektor Intelijen
  { id: "satellite", key: "satellite", label: "Sistem Satelit", name: "Sistem Satelit", desc: "Orbit Intelijen", category: "Intelijen", maintenanceCost: 100, cost: 350, buildTime: 180 },
  { id: "radar", key: "radar", label: "Jaringan Radar", name: "Jaringan Radar", desc: "Deteksi Dini", category: "Intelijen", maintenanceCost: 30, cost: 120, buildTime: 90 },
  { id: "operasi_siber", key: "operasi_siber", label: "Operasi Cyber", name: "Operasi Cyber", desc: "Perang Digital", category: "Intelijen", maintenanceCost: 40, cost: 180, buildTime: 120 },

  // Sektor Polisi
  { id: "pos_polisi", key: "pos_polisi", label: "Stasiun Polisi", name: "Stasiun Polisi", desc: "Komando Wilayah", category: "Polisi", maintenanceCost: 15, cost: 25, buildTime: 60 },
  { id: "police_car", key: "police_car", label: "Mobil Patroli", name: "Mobil Patroli", desc: "Patroli Lantas", category: "Polisi", maintenanceCost: 2, cost: 2, buildTime: 7 },
  { id: "police_bike", key: "police_bike", label: "Sepeda Motor", name: "Sepeda Motor", desc: "Patroli Cepat", category: "Polisi", maintenanceCost: 1, cost: 1, buildTime: 5 },
  { id: "unit_k9", key: "unit_k9", label: "Unit K-9", name: "Unit K-9", desc: "Pelacakan", category: "Polisi", maintenanceCost: 1, cost: 1, buildTime: 5 },
  { id: "swat", key: "swat", label: "Pasukan SWAT", name: "Pasukan SWAT", desc: "Taktis Khusus", category: "Polisi", maintenanceCost: 5, cost: 5, buildTime: 30 },
  { id: "police_heli", key: "police_heli", label: "Heli Polisi", name: "Heli Polisi", desc: "Udara Polisi", category: "Polisi", maintenanceCost: 10, cost: 15, buildTime: 60 },
  { id: "riot_control", key: "riot_control", label: "Anti-Huru Hara", name: "Anti-Huru Hara", desc: "Ketertiban", category: "Polisi", maintenanceCost: 2, cost: 4, buildTime: 20 },
  { id: "cctv_network", key: "cctv_network", label: "Network CCTV", name: "Network CCTV", desc: "Surveillance", category: "Polisi", maintenanceCost: 8, cost: 10, buildTime: 30 },
  { id: "forensik", key: "forensik", label: "Pusat Forensik", name: "Pusat Forensik", desc: "Identifikasi", category: "Polisi", maintenanceCost: 12, cost: 30, buildTime: 90 }
];
