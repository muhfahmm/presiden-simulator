export interface ProduksiMiliterItem {
  id: string;
  name: string;
  category: "Pertahanan" | "Militer";
}

export const produksiMiliter: ProduksiMiliterItem[] = [
  // Sektor Pertahanan
  { id: "prison", name: "Penjara", category: "Pertahanan" },
  { id: "barracks", name: "Barak", category: "Pertahanan" },
  { id: "armory", name: "Gudang Senjata", category: "Pertahanan" },
  { id: "tank_hangar", name: "Hangar Tank", category: "Pertahanan" },
  { id: "military_academy", name: "Akademi Militer", category: "Pertahanan" },

  // Sektor Militer
  { id: "strategic_command", name: "Pusat Komando Strategis", category: "Militer" },
  { id: "air_base", name: "Pangkalan Udara", category: "Militer" },
  { id: "naval_base", name: "Pangkalan Laut", category: "Militer" },
  { id: "military_base", name: "Pangkalan Militer", category: "Militer" },
  { id: "defense_factory", name: "Pabrik Alutsista", category: "Militer" }
];
