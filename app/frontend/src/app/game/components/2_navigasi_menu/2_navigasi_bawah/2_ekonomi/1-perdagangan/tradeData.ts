import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";

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
  pabrik_amunisi: 500
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
  pabrik_amunisi: 350
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
  "bakery_factory": "roti"
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
