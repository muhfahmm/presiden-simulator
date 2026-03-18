export interface TempatUmumItem {
  id: string;
  name: string;
  category: "Transportasi" | "Pendidikan" | "Kesehatan" | "Olahraga" | "Hukum" | "Keamanan" | "Residensial" | "Komersial" | "Pariwisata";
}

export const tempatUmum: TempatUmumItem[] = [
  // Transportasi
  { id: "bike_lane", name: "Jalur Sepeda", category: "Transportasi" },
  { id: "subway", name: "Kereta Bawah Tanah", category: "Transportasi" },
  { id: "railway", name: "Jalur Kereta Api", category: "Transportasi" },
  { id: "highway", name: "Jalan Raya", category: "Transportasi" },
  { id: "airport", name: "Bandara", category: "Transportasi" },
  { id: "seaport", name: "Pelabuhan", category: "Transportasi" },

  // Pendidikan
  { id: "kindergarten", name: "TK", category: "Pendidikan" },
  { id: "elem_school", name: "Sekolah Dasar", category: "Pendidikan" },
  { id: "mid_school", name: "Sekolah Menengah", category: "Pendidikan" },
  { id: "high_school", name: "Sekolah Atas", category: "Pendidikan" },
  { id: "university", name: "Perguruan Tinggi", category: "Pendidikan" },
  { id: "edu_inst", name: "Lembaga Pendidikan", category: "Pendidikan" },
  { id: "lab", name: "Laboraturium", category: "Pendidikan" },
  { id: "observatory", name: "Observatorium", category: "Pendidikan" },
  { id: "research_center", name: "Pusat Riset", category: "Pendidikan" },
  { id: "research_hub", name: "Pusat Penelitian", category: "Pendidikan" },

  // Kesehatan
  { id: "large_hospital", name: "Rumah Sakit Besar", category: "Kesehatan" },
  { id: "small_hospital", name: "Rumah Sakit Kecil", category: "Kesehatan" },
  { id: "diagnostic_center", name: "Pusat Diagnostik", category: "Kesehatan" },

  // Olahraga
  { id: "pool", name: "Kolam Renang", category: "Olahraga" },
  { id: "race_track", name: "Sirkuit Balap", category: "Olahraga" },
  { id: "stadium", name: "Stadion", category: "Olahraga" },

  // Sektor Hukum
  { id: "legal_aid", name: "Pusat Bantuan Hukum", category: "Hukum" },
  { id: "court", name: "Pengadilan", category: "Hukum" },
  { id: "prosecutor", name: "Kejaksaan", category: "Hukum" },

  // Sektor Keamanan
  { id: "police_station", name: "Kepolisian", category: "Keamanan" },
  { id: "police_fleet", name: "Armada Mobil", category: "Keamanan" },
  { id: "police_academy", name: "Akademi Polisi", category: "Keamanan" },

  // Residensial
  { id: "res_low", name: "Rumah Low Density", category: "Residensial" },
  { id: "res_med", name: "Apartemen Medium Density", category: "Residensial" },
  { id: "res_high", name: "Perumahan High Density", category: "Residensial" },

  // Komersial
  { id: "market", name: "Pasar", category: "Komersial" },
  { id: "shophouse", name: "Ruko", category: "Komersial" },
  { id: "mall", name: "Mall", category: "Komersial" },
  { id: "offices", name: "Perkantoran", category: "Komersial" },
  { id: "entertainment", name: "Pusat Hiburan", category: "Komersial" },

  // Pariwisata
  { id: "hotel_5star", name: "Perhotelan Bintang 5", category: "Pariwisata" },
  { id: "intl_stadium", name: "Stadion Internasional", category: "Pariwisata" }
];
