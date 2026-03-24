export interface ProduksiMiliterItem {
  id: string;
  key: string;
  label: string;
  name: string;
  desc: string;
  category: "Pertahanan" | "Militer";
  maintenanceCost: number;
  cost: number;
  buildTime: number;
}

export const produksiMiliter: ProduksiMiliterItem[] = [
  // Sektor Pertahanan
  { id: "prison", key: "prison", label: "Penjara", name: "Penjara", desc: "Lembaga Pemasyarakatan", category: "Pertahanan", maintenanceCost: 20, cost: 25, buildTime: 60 },
  { id: "barracks", key: "barracks", label: "Barak Militer", name: "Barak", desc: "Hunian Tentara", category: "Pertahanan", maintenanceCost: 15, cost: 40, buildTime: 45 },
  { id: "armory", key: "armory", label: "Gudang Senjata", name: "Gudang Senjata", desc: "Penyimpanan Amunisi", category: "Pertahanan", maintenanceCost: 10, cost: 30, buildTime: 30 },
  { id: "tank_hangar", key: "tank_hangar", label: "Hangar Tank", name: "Hangar Tank", desc: "Garasi Tempur", category: "Pertahanan", maintenanceCost: 35, cost: 50, buildTime: 60 },
  { id: "military_academy", key: "military_academy", label: "Akademi Militer", name: "Akademi Militer", desc: "Pendidikan Perwira", category: "Pertahanan", maintenanceCost: 40, cost: 150, buildTime: 180 },

  // Sektor Militer
  { id: "strategic_command", key: "command_center", label: "Pusat Komando", name: "Pusat Komando Strategis", desc: "Komando Tertinggi", category: "Militer", maintenanceCost: 150, cost: 450, buildTime: 240 },
  { id: "air_base", key: "military_air_base", label: "Pangkalan Udara", name: "Pangkalan Udara", desc: "Fasilitas Dirgantara", category: "Militer", maintenanceCost: 80, cost: 280, buildTime: 180 },
  { id: "naval_base", key: "military_naval_base", label: "Pangkalan Laut", name: "Pangkalan Laut", desc: "Fasilitas Maritim", category: "Militer", maintenanceCost: 100, cost: 320, buildTime: 210 },
  { id: "military_base", key: "military_base", label: "Pangkalan Militer", name: "Pangkalan Militer", desc: "Fasilitas Pertahanan", category: "Militer", maintenanceCost: 60, cost: 200, buildTime: 150 },
  { id: "defense_factory", key: "arms_factory", label: "Pabrik Alutsista", name: "Pabrik Alutsista", desc: "Manufaktur Senjata", category: "Militer", maintenanceCost: 120, cost: 350, buildTime: 240 }
];
