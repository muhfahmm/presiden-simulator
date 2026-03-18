export interface ProduksiItem {
  id: string;
  name: string;
  category: "Ekstraksi & Energi" | "Pengolahan & Manufaktur" | "Peternakan" | "Pertanian";
}

export const produksi: ProduksiItem[] = [
  // Sektor Ekstraksi & Energi
  { id: "gold_mine", name: "Tambang Emas", category: "Ekstraksi & Energi" },
  { id: "uranium_mine", name: "Tambang Uranium", category: "Ekstraksi & Energi" },
  { id: "coal_mine", name: "Tambang Batubara", category: "Ekstraksi & Energi" },
  { id: "oil_well", name: "Minyak", category: "Ekstraksi & Energi" },
  { id: "gas_well", name: "Gas", category: "Ekstraksi & Energi" },
  { id: "salt_mine", name: "Tambang Garam", category: "Ekstraksi & Energi" },
  { id: "nickel_mine", name: "Tambang Nikel", category: "Ekstraksi & Energi" },
  { id: "copper_mine", name: "Tambang Tembaga", category: "Ekstraksi & Energi" },
  { id: "rare_earth_mine", name: "Tambang Tanah Jarang", category: "Ekstraksi & Energi" },
  { id: "iron_ore_mine", name: "Tambang Biji Besi", category: "Ekstraksi & Energi" },
  { id: "nuclear_power_plant", name: "Pembangkit Listrik Tenaga Nuklir (PLTN)", category: "Ekstraksi & Energi" },
  { id: "hydro_power_plant", name: "Pembangkit Listrik Tenaga Air (PLTA)", category: "Ekstraksi & Energi" },
  { id: "solar_power_plant", name: "Pembangkit Listrik Tenaga Surya (PLTS)", category: "Ekstraksi & Energi" },
  { id: "thermal_power_plant", name: "Pembangkit Listrik Tenaga Uap (PLTU)", category: "Ekstraksi & Energi" },
  { id: "gas_power_plant", name: "Pembangkit Listrik Tenaga Gas (PLTG)", category: "Ekstraksi & Energi" },
  { id: "wind_power_plant", name: "Pembangkit Listrik Tenaga Bayu (PLTB)", category: "Ekstraksi & Energi" },
  { id: "power_grid", name: "Infrastruktur Kelistrikan & Jaringan Transmisi", category: "Ekstraksi & Energi" },

  // Sektor Pengolahan & Manufaktur
  { id: "electronics_factory", name: "Pabrik Elektronik & Semikonduktor", category: "Pengolahan & Manufaktur" },
  { id: "car_factory", name: "Pabrik Mobil", category: "Pengolahan & Manufaktur" },
  { id: "motorcycle_factory", name: "Pabrik Motor", category: "Pengolahan & Manufaktur" },
  { id: "smelter", name: "Pabrik Logam (Smelter)", category: "Pengolahan & Manufaktur" },
  { id: "cement_factory", name: "Pabrik Beton & Semen", category: "Pengolahan & Manufaktur" },
  { id: "sawmill", name: "Penggergajian Kayu", category: "Pengolahan & Manufaktur" },
  { id: "bottled_water_factory", name: "Pabrik Air Mineral", category: "Pengolahan & Manufaktur" },
  { id: "sugar_factory", name: "Pabrik Gula", category: "Pengolahan & Manufaktur" },
  { id: "bakery_factory", name: "Pabrik Roti", category: "Pengolahan & Manufaktur" },
  { id: "pharma_factory", name: "Pabrik Farmasi", category: "Pengolahan & Manufaktur" },
  { id: "fertilizer_factory", name: "Pabrik Pupuk", category: "Pengolahan & Manufaktur" },
  { id: "meat_processing_factory", name: "Pabrik Pengolahan Daging", category: "Pengolahan & Manufaktur" },
  { id: "noodle_factory", name: "Pabrik Mie Instan", category: "Pengolahan & Manufaktur" },

  // Sektor Peternakan
  { id: "egg_farm", name: "Peternakan Ayam Petelur", category: "Peternakan" },
  { id: "poultry_farm", name: "Peternakan Unggas (Ayam/Bebek)", category: "Peternakan" },
  { id: "dairy_farm", name: "Peternakan Sapi Perah", category: "Peternakan" },
  { id: "cattle_farm", name: "Peternakan Sapi Potong", category: "Peternakan" },
  { id: "sheep_farm", name: "Peternakan Domba & Kambing", category: "Peternakan" },
  { id: "shrimp_farm", name: "Tambak Udang Intensif", category: "Peternakan" },
  { id: "freshwater_fish_farm", name: "Budidaya Ikan Air Tawar", category: "Peternakan" },
  { id: "pearl_farm", name: "Budidaya Kerang & Mutiara", category: "Peternakan" },

  // Sektor Pertanian
  { id: "paddy_field", name: "Pertanian Padi", category: "Pertanian" },
  { id: "wheat_field", name: "Pertanian Gandum", category: "Pertanian" },
  { id: "corn_field", name: "Pertanian Jagung", category: "Pertanian" },
  { id: "tuber_field", name: "Pertanian Umbi-umbian", category: "Pertanian" },
  { id: "soybean_field", name: "Pertanian Kedelai", category: "Pertanian" },
  { id: "palm_oil_plantation", name: "Perkebunan Kelapa Sawit", category: "Pertanian" },
  { id: "tea_plantation", name: "Perkebunan Teh", category: "Pertanian" },
  { id: "coffee_plantation", name: "Perkebunan Kopi", category: "Pertanian" },
  { id: "cocoa_plantation", name: "Perkebunan Kakao", category: "Pertanian" },
  { id: "sugarcane_plantation", name: "Perkebunan Tebu", category: "Pertanian" },
  { id: "vegetable_farm", name: "Pertanian Sayur Mayur", category: "Pertanian" }
];
