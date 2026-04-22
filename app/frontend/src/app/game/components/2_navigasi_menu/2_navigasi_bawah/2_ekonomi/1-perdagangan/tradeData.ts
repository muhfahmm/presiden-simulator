import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";

// SEPARATE PRICE MAPS (1-1,000,000 scale - Integers only)
export const buyPriceMap: Record<string, number> = {
  // Minerals
  "emas": 2580, "uranium": 110, "batu_bara": 150, "minyak_bumi": 95,
  "gas_alam": 300, "garam": 200, "nikel": 20600, "litium": 16200,
  "tembaga": 10600, "aluminium": 2940, "logam_tanah_jarang": 768, "bijih_besi": 132,
  // Industry & Manufaktur
  "semikonduktor": 1020, "mobil": 54000, "sepeda_motor": 4200, "smelter": 144000,
  "semen_beton": 150, "kayu": 102, "pupuk": 110,
  // Olahan Pangan
  "air_mineral": 80, "gula": 250, "roti": 180, "pengolahan_daging": 450,
  "mie_instan": 50, "minyak_goreng": 380, "susu": 280, "pakan_ternak": 120,
  "ikan_kaleng": 240, "kopi_teh": 260,
  // Farmasi
  "farmasi": 650,
  // Peternakan
  "ayam_unggas": 750, "sapi_perah": 2100, "sapi_potong": 3200, "domba_kambing": 450,
  // Perikanan
  "udang": 150, "ikan": 65, "mutiara": 4500,
  // Agrikultur
  "padi": 210, "gandum": 140, "jagung": 120, "umbi": 85, "kedelai": 210,
  "kelapa_sawit": 350, "teh": 160, "kopi": 220, "kakao": 240, "tebu": 80,
  "sayur": 95, "karet": 180, "kapas": 140, "tembakau": 190,
  // Military Production
  "pabrik_amunisi": 500
};

export const sellPriceMap: Record<string, number> = {
  // Minerals
  "emas": 2150, "uranium": 92, "batu_bara": 125, "minyak_bumi": 78,
  "gas_alam": 245, "garam": 150, "nikel": 17200, "litium": 13500,
  "tembaga": 8900, "aluminium": 2450, "logam_tanah_jarang": 640, "bijih_besi": 110,
  // Industry & Manufaktur
  "semikonduktor": 850, "mobil": 45000, "sepeda_motor": 3500, "smelter": 120000,
  "semen_beton": 125, "kayu": 85, "pupuk": 90,
  // Olahan Pangan
  "air_mineral": 50, "gula": 180, "roti": 120, "pengolahan_daging": 380,
  "mie_instan": 35, "minyak_goreng": 320, "susu": 240, "pakan_ternak": 95,
  "ikan_kaleng": 200, "kopi_teh": 220,
  // Farmasi
  "farmasi": 520,
  // Peternakan
  "ayam_unggas": 500, "sapi_perah": 1800, "sapi_potong": 2500, "domba_kambing": 350,
  // Perikanan
  "udang": 100, "ikan": 45, "mutiara": 3800,
  // Agrikultur
  "padi": 140, "gandum": 110, "jagung": 95, "umbi": 65, "kedelai": 150,
  "kelapa_sawit": 250, "teh": 125, "kopi": 180, "kakao": 200, "tebu": 60,
  "sayur": 75, "karet": 145, "kapas": 115, "tembakau": 155,
  // Military Production
  "pabrik_amunisi": 350
};

export const labelsMap: Record<string, string> = {
  emas: "Emas", uranium: "Uranium", batu_bara: "Batu Bara", minyak_bumi: "Minyak Bumi", gas_alam: "Gas Alam", 
  garam: "Garam", nikel: "Nikel", litium: "Litium", tembaga: "Tembaga", aluminium: "Aluminium", 
  logam_tanah_jarang: "Rare Earth", bijih_besi: "Bijih Besi",
  semikonduktor: "Semikonduktor", mobil: "Mobil", sepeda_motor: "Sepeda Motor", smelter: "Pengolahan Smelter",
  semen_beton: "Beton & Semen", kayu: "Kayu", pupuk: "Pupuk Pertanian",
  air_mineral: "Air Mineral", gula: "Gula", roti: "Roti", farmasi: "Farmasi",
  pengolahan_daging: "Pengolahan Daging", mie_instan: "Mie Instan",
  minyak_goreng: "Minyak Goreng", susu: "Susu Olahan", pakan_ternak: "Pakan Ternak",
  ikan_kaleng: "Ikan Kaleng", kopi_teh: "Kopi & Teh Kemasan",
  ayam_unggas: "Ayam/Unggas", sapi_perah: "Sapi Perah", sapi_potong: "Sapi Potong",
  domba_kambing: "Domba/Kambing", udang: "Udang", ikan: "Ikan Konsumsi", mutiara: "Mutiara & Kerang",
  padi: "Padi", gandum: "Gandum", jagung: "Jagung", umbi: "Umbi-umbian", sayur: "Sayur Mayur", kedelai: "Kedelai",
  kelapa_sawit: "Kelapa Sawit", teh: "Teh", kopi: "Kopi", kakao: "Kakao/Cokelat", tebu: "Tebu",
  karet: "Karet Alam", kapas: "Kapas", tembakau: "Tembakau",
  pabrik_amunisi: "Amunisi Militer"
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
  "bakery_factory": "roti",
  "fertilizer_factory": "pupuk",
  "oil_factory": "minyak_goreng",
  "milk_factory": "susu",
  "feed_factory": "pakan_ternak",
  "canned_fish_factory": "ikan_kaleng",
  "coffee_tea_factory": "kopi_teh"
};

// DETERMINISTIC SEEDED RANDOM (Consistent across days)
// Returns a value between -1 and 1
export const getSeededNoise = (seed: string | number) => {
  let h = 0;
  const s = String(seed);
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  
  // Deterministic PRNG logic (LCG variant)
  const x = Math.sin(h) * 10000;
  return x - Math.floor(x);
};

// DYNAMIC PRICE GENERATOR
export const getDynamicPrice = (key: string, type: "buy" | "sell", date: Date) => {
  const baseMap = type === "buy" ? buyPriceMap : sellPriceMap;
  const basePrice = baseMap[key] || 100;
  
  // Use day-based seed to ensure same base price for the whole game day
  const dayTimestamp = Math.floor(date.getTime() / (1000 * 60 * 60 * 24));
  const seed = `${key}-${dayTimestamp}`;
  
  // Pseudo-random fluctuation (+/- 15%)
  // We use the seeded noise to get a value between -1 and 1
  const noise = (getSeededNoise(seed) * 2) - 1;
  const multiplier = 1 + (noise * 0.15);
  
  return Math.round(basePrice * multiplier);
};

// DYNAMIC VOLUMES AND DISCOUNTS BASED ON INFRASTRUCTURE
export const getNationalLogisticsMultiplier = () => {
  const sessionS = gameStorage.getSession() as any;
  const countryNameS = sessionS?.country || "Indonesia";
  const countryS = countries.find(c => 
    c.name_id === countryNameS || 
    c.name_en === countryNameS || 
    (c as any).id === countryNameS ||
    (c as any).id === Number(countryNameS)
  ) || countries[0];

  const buildingData = buildingStorage.getData();
  const deltas = buildingData.buildingDeltas || {};
  
  // 1. Shipping Speedup (%) Factors (Per Unit)
  const speedupFactors: Record<string, { factor: number, baseKey: string }> = {
    "6_pelabuhan_laut": { factor: 1.5, baseKey: "pelabuhan" },   
    "7_bandara": { factor: 1.0, baseKey: "bandara" },          
    "8_helipad": { factor: 0.5, baseKey: "helipad" }           
  };

  // 2. Import Cost Discount (%) Factors (Per Unit)
  const discountFactors: Record<string, { factor: number, baseKey: string }> = {
    "2_jalan_tol": { factor: 0.005, baseKey: "jalan_raya" },       
    "4_jalur_kereta": { factor: 0.008, baseKey: "stasiun_kereta_api" }, 
    "6_pelabuhan_laut": { factor: 0.015, baseKey: "pelabuhan" }    
  };

  let totalSpeedup = 0;
  Object.entries(speedupFactors).forEach(([key, config]) => {
    const baseCount = (countryS.infrastruktur as any)?.[config.baseKey] || 0;
    const deltaCount = (deltas[key] || 0) as number;
    totalSpeedup += (baseCount + deltaCount) * config.factor;
  });

  let totalDiscount = 0;
  Object.entries(discountFactors).forEach(([key, config]) => {
    const baseCount = (countryS.infrastruktur as any)?.[config.baseKey] || 0;
    const deltaCount = (deltas[key] || 0) as number;
    totalDiscount += (baseCount + deltaCount) * config.factor;
  });

  return {
    shippingSpeedup: Math.min(90, totalSpeedup), // Capped at 90%
    importDiscount: Math.min(0.5, totalDiscount) // Capped at 50% discount
  };
};

/**
 * Calculates the shipping duration based on realistic global distance matrix.
 */
export const calculateShippingDays = (partner: string | null): number => {
    const { getBaseShippingRange } = require("./GeoDistanceDatabase");
    const logistics = getNationalLogisticsMultiplier();
    const speedupMultiplier = 1 - (logistics.shippingSpeedup / 100);

    const session = gameStorage.getSession();
    const userCountry = session?.country || 'Indonesia';
    
    if (!partner) return Math.max(1, Math.floor(5 * speedupMultiplier));
    
    // Get base range from the new realistic matrix
    const baseRange = getBaseShippingRange(userCountry, partner);
    
    // Use the middle of the range as the base for the animation duration
    const baseDays = (baseRange[0] + baseRange[1]) / 2;
    return Math.max(1, Math.floor(baseDays * speedupMultiplier));
};
