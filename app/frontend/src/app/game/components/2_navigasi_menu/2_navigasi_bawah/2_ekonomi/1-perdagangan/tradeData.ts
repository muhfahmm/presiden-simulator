// SEPARATE PRICE MAPS (1-1,000,000 scale - Integers only)
export const buyPriceMap: Record<string, number> = {
  // Minerals
  "emas": 2580, "uranium": 110, "batu_bara": 150, "minyak_bumi": 95,
  "gas_alam": 300, "garam": 200, "nikel": 20600, "litium": 16200,
  "tembaga": 10600, "aluminium": 2940, "logam_tanah_jarang": 768, "bijih_besi": 132,
  // Industry & Others
  "semikonduktor": 1020, "mobil": 54000, "sepeda_motor": 4200, "smelter": 144000,
  "semen_beton": 150, "kayu": 102, "air_mineral": 80, "gula": 250,
  "roti": 180, "farmasi": 65, "pengolahan_daging": 18,
  mie_instan: 50, ayam_unggas: 750, sapi_perah: 2100, sapi_potong: 3200,
  domba_kambing: 450, udang_kerang: 150, ikan: 65,
  padi: 210, gandum_jagung: 150, sayur_umbi: 120, kedelai: 210,
  kelapa_sawit: 350, kopi_teh_kakao: 950,
  // Military Production
  pabrik_drone_kamikaze: 12000, pabrik_amunisi: 500
};

export const sellPriceMap: Record<string, number> = {
  // Minerals
  "emas": 2150, "uranium": 92, "batu_bara": 125, "minyak_bumi": 78,
  "gas_alam": 245, "garam": 150, "nikel": 17200, "litium": 13500,
  "tembaga": 8900, "aluminium": 2450, "logam_tanah_jarang": 640, "bijih_besi": 110,
  // Industry & Others
  "semikonduktor": 850, "mobil": 45000, "sepeda_motor": 3500, "smelter": 120000,
  "semen_beton": 125, "kayu": 85, "air_mineral": 50, "gula": 180,
  "roti": 120, "farmasi": 45, "pengolahan_daging": 12,
  "mie_instan": 35, ayam_unggas: 500, sapi_perah: 1800, sapi_potong: 2500,
  domba_kambing: 350, udang_kerang: 100, ikan: 45,
  padi: 140, gandum_jagung: 100, sayur_umbi: 80, kedelai: 150,
  kelapa_sawit: 250, kopi_teh_kakao: 650,
  // Military Production
  pabrik_drone_kamikaze: 9500, pabrik_amunisi: 350
};

export const labelsMap: Record<string, string> = {
  emas: "Emas", uranium: "Uranium", batu_bara: "Batu Bara", minyak_bumi: "Minyak Bumi", gas_alam: "Gas Alam", 
  garam: "Garam", nikel: "Nikel", litium: "Litium", tembaga: "Tembaga", aluminium: "Aluminium", 
  logam_tanah_jarang: "Rare Earth", bijih_besi: "Bijih Besi",
  semikonduktor: "Semikonduktor", mobil: "Mobil", sepeda_motor: "Sepeda Motor", smelter: "Pengolahan Smelter",
  semen_beton: "Beton & Semen", kayu: "Kayu", air_mineral: "Air Mineral", gula: "Gula",
  roti: "Roti", farmasi: "Farmasi", pengolahan_daging: "Pengolahan Daging",
  mie_instan: "Mie Instan",
  ayam_unggas: "Ayam/Unggas", sapi_perah: "Sapi Perah", sapi_potong: "Sapi Potong",
  domba_kambing: "Domba/Kambing", udang_kerang: "Udang/Kerang", ikan: "Ikan",
  padi: "Padi", gandum_jagung: "Gandum/Jagung", sayur_umbi: "Sayur/Umbi", kedelai: "Kedelai",
  kelapa_sawit: "Kelapa Sawit", kopi_teh_kakao: "Kopi/Teh/Kakao",
  pabrik_drone_kamikaze: "Drone Kamikaze", pabrik_amunisi: "Amunisi Militer"
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
