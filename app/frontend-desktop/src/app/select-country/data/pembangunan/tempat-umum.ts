export interface TempatUmumItem {
  id: string;
  name: string;
  category: "Transportasi" | "Pendidikan" | "Kesehatan" | "Olahraga" | "Hukum" | "Keamanan" | "Residensial" | "Komersial" | "Pariwisata";
  maintenanceCost: number;
  cost: number;
  buildTime: number;
}

export const tempatUmum: TempatUmumItem[] = [
  // Transportasi
  { id: "bike_lane", name: "Jalur Sepeda", category: "Transportasi", maintenanceCost: 1, cost: 5, buildTime: 15 },
  { id: "subway", name: "Kereta Bawah Tanah", category: "Transportasi", maintenanceCost: 25, cost: 150, buildTime: 120 },
  { id: "railway", name: "Jalur Kereta Api", category: "Transportasi", maintenanceCost: 20, cost: 120, buildTime: 90 },
  { id: "highway", name: "Jalan Raya", category: "Transportasi", maintenanceCost: 5, cost: 80, buildTime: 60 },
  { id: "airport", name: "Bandara", category: "Transportasi", maintenanceCost: 100, cost: 450, buildTime: 240 },
  { id: "seaport", name: "Pelabuhan", category: "Transportasi", maintenanceCost: 80, cost: 350, buildTime: 180 },

  // Pendidikan
  { id: "kindergarten", name: "TK", category: "Pendidikan", maintenanceCost: 5, cost: 13, buildTime: 40 },
  { id: "elem_school", name: "Sekolah Dasar", category: "Pendidikan", maintenanceCost: 7, cost: 13, buildTime: 40 },
  { id: "mid_school", name: "Sekolah Menengah", category: "Pendidikan", maintenanceCost: 10, cost: 32, buildTime: 60 },
  { id: "high_school", name: "Sekolah Atas", category: "Pendidikan", maintenanceCost: 12, cost: 32, buildTime: 60 },
  { id: "university", name: "Perguruan Tinggi", category: "Pendidikan", maintenanceCost: 40, cost: 230, buildTime: 150 },
  { id: "edu_inst", name: "Lembaga Pendidikan", category: "Pendidikan", maintenanceCost: 20, cost: 230, buildTime: 150 },
  { id: "lab", name: "Laboraturium", category: "Pendidikan", maintenanceCost: 30, cost: 290, buildTime: 120 },
  { id: "observatory", name: "Observatorium", category: "Pendidikan", maintenanceCost: 25, cost: 120, buildTime: 180 },
  { id: "research_center", name: "Pusat Riset", category: "Pendidikan", maintenanceCost: 50, cost: 290, buildTime: 120 },
  { id: "research_hub", name: "Pusat Penelitian", category: "Pendidikan", maintenanceCost: 45, cost: 290, buildTime: 120 },

  // Kesehatan
  { id: "large_hospital", name: "Rumah Sakit Besar", category: "Kesehatan", maintenanceCost: 80, cost: 350, buildTime: 180 },
  { id: "small_hospital", name: "Rumah Sakit Kecil", category: "Kesehatan", maintenanceCost: 30, cost: 80, buildTime: 45 },
  { id: "diagnostic_center", name: "Pusat Diagnostik", category: "Kesehatan", maintenanceCost: 15, cost: 30, buildTime: 30 },

  // Olahraga
  { id: "pool", name: "Kolam Renang", category: "Olahraga", maintenanceCost: 5, cost: 15, buildTime: 30 },
  { id: "race_track", name: "Sirkuit Balap", category: "Olahraga", maintenanceCost: 40, cost: 250, buildTime: 180 },
  { id: "stadium", name: "Stadion", category: "Olahraga", maintenanceCost: 60, cost: 670, buildTime: 240 },

  // Sektor Hukum
  { id: "legal_aid", name: "Pusat Bantuan Hukum", category: "Hukum", maintenanceCost: 5, cost: 30, buildTime: 30 },
  { id: "court", name: "Pengadilan", category: "Hukum", maintenanceCost: 15, cost: 120, buildTime: 90 },
  { id: "prosecutor", name: "Kejaksaan", category: "Hukum", maintenanceCost: 12, cost: 120, buildTime: 90 },

  // Sektor Keamanan
  { id: "police_station", name: "Kepolisian", category: "Keamanan", maintenanceCost: 15, cost: 25, buildTime: 60 },
  { id: "police_fleet", name: "Armada Mobil", category: "Keamanan", maintenanceCost: 3, cost: 5, buildTime: 15 },
  { id: "police_academy", name: "Akademi Polisi", category: "Keamanan", maintenanceCost: 10, cost: 40, buildTime: 60 },

  // Residensial
  { id: "res_low", name: "Rumah Low Density", category: "Residensial", maintenanceCost: 1, cost: 5, buildTime: 20 },
  { id: "res_med", name: "Apartemen Medium Density", category: "Residensial", maintenanceCost: 5, cost: 25, buildTime: 40 },
  { id: "res_high", name: "Perumahan High Density", category: "Residensial", maintenanceCost: 10, cost: 50, buildTime: 60 },

  // Komersial
  { id: "market", name: "Pasar", category: "Komersial", maintenanceCost: 5, cost: 20, buildTime: 30 },
  { id: "shophouse", name: "Ruko", category: "Komersial", maintenanceCost: 8, cost: 35, buildTime: 45 },
  { id: "mall", name: "Mall", category: "Komersial", maintenanceCost: 50, cost: 450, buildTime: 120 },
  { id: "offices", name: "Perkantoran", category: "Komersial", maintenanceCost: 30, cost: 200, buildTime: 90 },
  { id: "entertainment", name: "Pusat Hiburan", category: "Komersial", maintenanceCost: 40, cost: 300, buildTime: 120 },

  // Pariwisata
  { id: "hotel_5star", name: "Perhotelan Bintang 5", category: "Pariwisata", maintenanceCost: 60, cost: 500, buildTime: 180 },
  { id: "intl_stadium", name: "Stadion Internasional", category: "Pariwisata", maintenanceCost: 100, cost: 800, buildTime: 300 }
];
