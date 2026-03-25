// SEPARATE PRICE MAPS (1-1,000,000 scale - Integers only)
export const buyPriceMap: Record<string, number> = {
  // Minerals
  "emas": 2580, "uranium": 110, "batu_bara": 150, "minyak_bumi": 95,
  "gas_alam": 300, "garam": 200, "nikel": 20600, "litium": 16200,
  "tembaga": 10600, "aluminium": 2940, "logam_tanah_jarang": 768, "bijih_besi": 132,
  // Industry & Others
  "semikonduktor": 1020, "mobil": 54000, "sepeda_motor": 4200, "smelter": 144000,
  "semen_beton": 150, "kayu": 102, "air_mineral": 80, "gula": 250,
  "roti": 180, "farmasi": 65, "pupuk": 35, "pengolahan_daging": 18,
  "mie_instan": 50, "ayam": 650, "unggas": 850, "sapi_perah": 2100,
  "sapi_potong": 3200, "domba_kambing": 450, "udang": 180, "ikan": 65,
  "kerang": 125, "beras": 210, "gandum": 180, "jagung": 120, "umbi_umbian": 90,
  "kedelai": 210, "kelapa_sawit": 350, "teh": 650, "kopi": 1250, "cokelat": 950,
  "tebu": 180, "sayur_sayuran": 150
};

export const sellPriceMap: Record<string, number> = {
  // Minerals
  "emas": 2150, "uranium": 92, "batu_bara": 125, "minyak_bumi": 78,
  "gas_alam": 245, "garam": 150, "nikel": 17200, "litium": 13500,
  "tembaga": 8900, "aluminium": 2450, "logam_tanah_jarang": 640, "bijih_besi": 110,
  // Industry & Others
  "semikonduktor": 850, "mobil": 45000, "sepeda_motor": 3500, "smelter": 120000,
  "semen_beton": 125, "kayu": 85, "air_mineral": 50, "gula": 180,
  "roti": 120, "farmasi": 45, "pupuk": 25, "pengolahan_daging": 12,
  "mie_instan": 35, "ayam": 450, "unggas": 550, "sapi_perah": 1800,
  "sapi_potong": 2500, "domba_kambing": 350, "udang": 120, "ikan": 45,
  "kerang": 85, "beras": 140, "gandum": 120, "jagung": 80, "umbi_umbian": 60,
  "kedelai": 150, "kelapa_sawit": 250, "teh": 450, "kopi": 850, "cokelat": 650,
  "tebu": 120, "sayur_sayuran": 100
};

export const labelsMap: Record<string, string> = {
  emas: "Emas", uranium: "Uranium", batu_bara: "Batu Bara", minyak_bumi: "Minyak Bumi", gas_alam: "Gas Alam", 
  garam: "Garam", nikel: "Nikel", litium: "Litium", tembaga: "Tembaga", aluminium: "Aluminium", 
  logam_tanah_jarang: "Rare Earth", bijih_besi: "Bijih Besi",
  semikonduktor: "Semikonduktor", mobil: "Mobil", sepeda_motor: "Sepeda Motor", smelter: "Pengolahan Smelter",
  semen_beton: "Beton & Semen", kayu: "Kayu", air_mineral: "Air Mineral", gula: "Gula",
  roti: "Roti", farmasi: "Farmasi", pupuk: "Pupuk", pengolahan_daging: "Pengolahan Daging",
  mie_instan: "Mie Instan",
  ayam: "Ayam", unggas: "Unggas", sapi_perah: "Sapi Perah", sapi_potong: "Sapi Potong",
  domba_kambing: "Domba/Kambing", udang: "Udang", ikan: "Ikan", kerang: "Kerang",
  beras: "Padi", gandum: "Gandum", jagung: "Jagung", umbi_umbian: "Umbi-umbian", kedelai: "Kedelai",
  kelapa_sawit: "Kelapa Sawit", teh: "Teh", kopi: "Kopi", cokelat: "Kakao", tebu: "Tebu",
  sayur_sayuran: "Sayur-mayur"
};

export const baseKeyMapping: Record<string, string> = {
  "electronics_factory": "semikonduktor",
  "car_factory": "mobil",
  "motorcycle_factory": "sepeda_motor",
  "cement_factory": "semen_beton",
  "smelter": "smelter",
  "bottled_water_factory": "air_mineral",
  "sugar_factory": "gula",
  "pharma_factory": "farmasi",
  "noodle_factory": "mie_instan",
  "meat_processing_factory": "pengolahan_daging",
  "sawmill": "kayu",
  "fertilizer_factory": "pupuk",
  "bakery_factory": "roti"
};

// DYNAMIC PRICE GENERATOR
export const getDynamicPrice = (key: string, type: "buy" | "sell", date: Date) => {
  const baseMap = type === "buy" ? buyPriceMap : sellPriceMap;
  const basePrice = baseMap[key] || 100;
  
  // Deterministic seed based on key and date
  let keySeed = 0;
  for (let i = 0; i < key.length; i++) {
    keySeed = (keySeed << 5) - keySeed + key.charCodeAt(i);
    keySeed |= 0;
  }
  
  // Use day-based timestamp to ensure same price for the whole game day
  const dayTimestamp = Math.floor(date.getTime() / (1000 * 60 * 60 * 24));
  const seed = keySeed + dayTimestamp;
  
  // Pseudo-random fluctuation (+/- 15%)
  const noise = (Math.sin(seed) * 10000) % 1;
  const multiplier = 1 + (noise * 0.15);
  
  return Math.round(basePrice * multiplier);
};
