// SEPARATE PRICE MAPS (1-1,000,000 scale - Integers only)
export const buyPriceMap: Record<string, number> = {
  // Minerals
  "gold": 2580, "uranium": 110, "coal": 150, "oil": 95,
  "gas": 300, "salt": 200, "nickel": 20600, "lithium": 16200,
  "copper": 10600, "aluminum": 2940, "rare_earth": 768, "iron_ore": 132,
  // Industry & Others
  "semiconductor": 1020, "car": 54000, "motorcycle": 4200, "smelter": 144000,
  "concrete_cement": 150, "wood": 102, "mineral_water": 80, "sugar": 250,
  "bread": 180, "pharmacy": 65, "fertilizer": 35, "meat_processing": 18,
  "instant_noodle": 50, "chicken": 650, "poultry": 850, "dairy_cow": 2100,
  "beef_cow": 3200, "sheep_goat": 450, "shrimp": 180, "fish": 65,
  "shellfish": 125, "rice": 210, "wheat": 180, "corn": 120, "tubers": 90,
  "soy": 210, "palm_oil": 350, "tea": 650, "coffee": 1250, "cocoa": 950,
  "sugarcane": 180, "vegetables": 150
};

export const sellPriceMap: Record<string, number> = {
  // Minerals
  "gold": 2150, "uranium": 92, "coal": 125, "oil": 78,
  "gas": 245, "salt": 150, "nickel": 17200, "lithium": 13500,
  "copper": 8900, "aluminum": 2450, "rare_earth": 640, "iron_ore": 110,
  // Industry & Others
  "semiconductor": 850, "car": 45000, "motorcycle": 3500, "smelter": 120000,
  "concrete_cement": 125, "wood": 85, "mineral_water": 50, "sugar": 180,
  "bread": 120, "pharmacy": 45, "fertilizer": 25, "meat_processing": 12,
  "instant_noodle": 35, "chicken": 450, "poultry": 550, "dairy_cow": 1800,
  "beef_cow": 2500, "sheep_goat": 350, "shrimp": 120, "fish": 45,
  "shellfish": 85, "rice": 140, "wheat": 120, "corn": 80, "tubers": 60,
  "soy": 150, "palm_oil": 250, "tea": 450, "coffee": 850, "cocoa": 650,
  "sugarcane": 120, "vegetables": 100
};

export const labelsMap: Record<string, string> = {
  gold: "Emas", uranium: "Uranium", coal: "Batu Bara", oil: "Minyak Bumi", gas: "Gas Alam", 
  salt: "Garam", nickel: "Nikel", lithium: "Litium", copper: "Tembaga", aluminum: "Aluminium", 
  rare_earth: "Rare Earth", iron_ore: "Bijih Besi",
  semiconductor: "Semikonduktor", car: "Mobil", motorcycle: "Sepeda Motor", smelter: "Pengolahan Smelter",
  concrete_cement: "Beton & Semen", wood: "Kayu", mineral_water: "Air Mineral", sugar: "Gula",
  bread: "Roti", pharmacy: "Farmasi", fertilizer: "Pupuk", meat_processing: "Pengolahan Daging",
  instant_noodle: "Mie Instan",
  chicken: "Ayam", poultry: "Unggas", dairy_cow: "Sapi Perah", beef_cow: "Sapi Potong",
  sheep_goat: "Domba/Kambing", shrimp: "Udang", fish: "Ikan", shellfish: "Kerang",
  rice: "Padi", wheat: "Gandum", corn: "Jagung", tubers: "Umbi-umbian", soy: "Kedelai",
  palm_oil: "Kelapa Sawit", tea: "Teh", coffee: "Kopi", cocoa: "Kakao", sugarcane: "Tebu",
  vegetables: "Sayur-mayur"
};

export const baseKeyMapping: Record<string, string> = {
  "electronics_factory": "semiconductor",
  "car_factory": "car",
  "motorcycle_factory": "motorcycle",
  "cement_factory": "concrete_cement",
  "smelter": "smelter",
  "bottled_water_factory": "mineral_water",
  "sugar_factory": "sugar",
  "pharma_factory": "pharmacy",
  "noodle_factory": "instant_noodle",
  "meat_processing_factory": "meat_processing",
  "sawmill": "wood",
  "fertilizer_factory": "fertilizer",
  "bakery_factory": "bread"
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
