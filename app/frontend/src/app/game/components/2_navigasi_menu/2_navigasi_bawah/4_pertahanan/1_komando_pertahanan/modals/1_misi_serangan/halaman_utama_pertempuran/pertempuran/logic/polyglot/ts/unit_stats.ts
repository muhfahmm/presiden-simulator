// unit_stats.ts - Spesifikasi Teknis Semua Alutsista
// Menghubungkan data kekuatan militer abstrak ke stat Tempur Real-Time (WARNO/Auto-Battler)

// Referensi modifier kekuatan kasar
export interface UnitCombatStats {
  maxHealth: number;
  damage: number;
  range: number;      // Jarak Bidik Taktis (meter)
  speed: number;      // Kecepatan gerak (km/h diubah ke satuan gerak di kanvas)
  reloadSpeed: number; // Cooldown tembakan dalam milidetik (ms)
  armor: number;      // Persentase pengurangan damage (0.0 - 0.9)
  cost: number;       // Command Points cost
}

// Simulasi database statistik dasar menurut Doktrin Peperangan
export const UnitStatsDatabase: Record<string, UnitCombatStats> = {
  // === DARAT ===
  "infanteri": { maxHealth: 120, damage: 15, range: 450, speed: 450, reloadSpeed: 800, armor: 0.05, cost: 10 },
  "infantry_enemy": { maxHealth: 120, damage: 15, range: 450, speed: 450, reloadSpeed: 800, armor: 0.05, cost: 10 },
  "tank": { maxHealth: 1500, damage: 180, range: 1300, speed: 1000, reloadSpeed: 3500, armor: 0.70, cost: 50 },
  "tank_enemy": { maxHealth: 1500, damage: 180, range: 1300, speed: 1000, reloadSpeed: 3500, armor: 0.70, cost: 50 },
  "apc": { maxHealth: 650, damage: 45, range: 900, speed: 1625, reloadSpeed: 1200, armor: 0.35, cost: 20 },
  "artillery": { maxHealth: 400, damage: 450, range: 4500, speed: 625, reloadSpeed: 8000, armor: 0.15, cost: 40 },
  "rocket": { maxHealth: 500, damage: 700, range: 5500, speed: 750, reloadSpeed: 12000, armor: 0.20, cost: 60 },
  "sam": { maxHealth: 600, damage: 350, range: 3500, speed: 875, reloadSpeed: 5000, armor: 0.20, cost: 55 },
  
  // === LAUT ===
  "kapal_induk": { maxHealth: 10000, damage: 0, range: 0, speed: 500, reloadSpeed: 99999, armor: 0.90, cost: 250 },
  "kapal_destroyer": { maxHealth: 4500, damage: 350, range: 3500, speed: 800, reloadSpeed: 4500, armor: 0.75, cost: 150 },
  "kapal_corvette": { maxHealth: 2500, damage: 200, range: 2500, speed: 1000, reloadSpeed: 2800, armor: 0.65, cost: 90 },
  "kapal_selam_nuklir": { maxHealth: 1800, damage: 1500, range: 5000, speed: 700, reloadSpeed: 18000, armor: 0.55, cost: 200 },
  "kapal_selam": { maxHealth: 1400, damage: 800, range: 3500, speed: 550, reloadSpeed: 10000, armor: 0.45, cost: 120 },
  
  // === UDARA ===
  "pesawat_stealth": { maxHealth: 600, damage: 550, range: 2500, speed: 500, reloadSpeed: 6000, armor: 0.25, cost: 100 },
  "pesawat_tempur": { maxHealth: 750, damage: 350, range: 2000, speed: 500, reloadSpeed: 3000, armor: 0.30, cost: 80 },
  "pesawat_bomber": { maxHealth: 1200, damage: 2000, range: 1200, speed: 500, reloadSpeed: 15000, armor: 0.45, cost: 150 },
  "pesawat_heli_serang": { maxHealth: 900, damage: 200, range: 1500, speed: 750, reloadSpeed: 1500, armor: 0.35, cost: 60 },
  "pesawat_heli_uav": { maxHealth: 250, damage: 60, range: 1800, speed: 500, reloadSpeed: 2000, armor: 0.10, cost: 30 },
  "pesawat_kamikaze": { maxHealth: 80, damage: 1000, range: 600, speed: 500, reloadSpeed: 99999, armor: 0.00, cost: 20 },
};

// Mapping Kunci Database Armada (bahasa_id) ke Kunci Statistik Tempur
export const DatabaseToTacticalMapping: Record<string, string> = {
  // DARAT
  "tank_tempur_utama": "tank",
  "apc_ifv": "apc",
  "artileri_berat": "artillery",
  "sistem_peluncur_roket": "rocket",
  "pertahanan_udara_mobile": "sam",
  "kendaraan_taktis": "apc",
  "pasukan_infanteri": "infanteri",
  "barak": "infanteri",
  
  // LAUT
  "kapal_induk": "kapal_induk",
  "kapal_destroyer": "kapal_destroyer",
  "kapal_korvet": "kapal_corvette",
  "kapal_selam_nuklir": "kapal_selam_nuklir",
  "kapal_selam_regular": "kapal_selam",
  "kapal_ranjau": "kapal_corvette",
  "kapal_logistik": "apc",

  // UDARA
  "jet_tempur_siluman": "pesawat_stealth",
  "jet_tempur_interceptor": "pesawat_tempur",
  "pesawat_pengebom": "pesawat_bomber",
  "helikopter_serang": "pesawat_heli_serang",
  "pesawat_pengintai": "pesawat_heli_uav",
  "drone_intai_uav": "pesawat_heli_uav",
  "drone_kamikaze": "pesawat_kamikaze",
  "pesawat_angkut": "pesawat_tempur"
};


// --- DOMAIN CATEGORIZATION ---
export const LAND_UNITS = [
  "tank_tempur_utama", "apc_ifv", "artileri_berat", "sistem_peluncur_roket", 
  "pertahanan_udara_mobile", "kendaraan_taktis", "pasukan_infanteri", "barak",
  "tank", "apc", "artillery", "rocket", "sam", "infanteri", "infantry_enemy", "tank_enemy"
];

export const NAVAL_UNITS = [
  "kapal_induk", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", 
  "kapal_selam_regular", "kapal_ranjau", "kapal_logistik", "kapal_corvette", "kapal_selam"
];

export const AIR_UNITS = [
  "jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", 
  "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", 
  "pesawat_angkut", "pesawat_stealth", "pesawat_tempur", "pesawat_bomber", 
  "pesawat_heli_serang", "pesawat_heli_uav", "pesawat_kamikaze"
];

export function getUnitDomain(type: string): 'land' | 'sea' | 'air' {
  const t = type.toLowerCase();
  if (AIR_UNITS.some(k => t.includes(k))) return 'air';
  if (NAVAL_UNITS.some(k => t.includes(k))) return 'sea';
  return 'land';
}

/**
 * Mencari spesifikasi lengkap dari id/tipe unit.
 * Jika tipe tidak dikenal, akan me-return stat rata-rata (Fallback).
 */
export function getUnitStats(type: string): UnitCombatStats {
   const normalizedType = DatabaseToTacticalMapping[type] || type;
   const key = Object.keys(UnitStatsDatabase).find(k => normalizedType.toLowerCase().includes(k)) || "apc";
   return UnitStatsDatabase[key] || UnitStatsDatabase["apc"];
}
