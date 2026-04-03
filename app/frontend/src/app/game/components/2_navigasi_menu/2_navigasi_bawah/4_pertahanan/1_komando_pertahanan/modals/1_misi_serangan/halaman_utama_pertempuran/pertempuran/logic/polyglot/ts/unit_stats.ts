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
  "infanteri": { maxHealth: 100, damage: 15, range: 400, speed: 15, reloadSpeed: 800, armor: 0.05, cost: 10 },
  "infantry_enemy": { maxHealth: 100, damage: 15, range: 400, speed: 15, reloadSpeed: 800, armor: 0.05, cost: 10 },
  "tank": { maxHealth: 800, damage: 120, range: 1200, speed: 45, reloadSpeed: 3000, armor: 0.65, cost: 50 },
  "tank_enemy": { maxHealth: 800, damage: 120, range: 1200, speed: 45, reloadSpeed: 3000, armor: 0.65, cost: 50 },
  "apc": { maxHealth: 450, damage: 40, range: 800, speed: 65, reloadSpeed: 1500, armor: 0.35, cost: 20 },
  "artillery": { maxHealth: 200, damage: 350, range: 4000, speed: 25, reloadSpeed: 6000, armor: 0.15, cost: 40 },
  "rocket": { maxHealth: 250, damage: 500, range: 5000, speed: 30, reloadSpeed: 10000, armor: 0.20, cost: 60 },
  "sam": { maxHealth: 300, damage: 250, range: 2500, speed: 35, reloadSpeed: 4000, armor: 0.20, cost: 55 },
  
  // === LAUT ===
  "kapal_induk": { maxHealth: 5000, damage: 0, range: 0, speed: 25, reloadSpeed: 99999, armor: 0.85, cost: 250 },
  "kapal_destroyer": { maxHealth: 2500, damage: 300, range: 3000, speed: 35, reloadSpeed: 4000, armor: 0.70, cost: 150 },
  "kapal_corvette": { maxHealth: 1500, damage: 180, range: 2000, speed: 45, reloadSpeed: 2500, armor: 0.60, cost: 90 },
  "kapal_selam_nuklir": { maxHealth: 1000, damage: 1200, range: 4500, speed: 30, reloadSpeed: 15000, armor: 0.50, cost: 200 },
  "kapal_selam": { maxHealth: 800, damage: 600, range: 3000, speed: 25, reloadSpeed: 8000, armor: 0.40, cost: 120 },
  
  // === UDARA ===
  "pesawat_stealth": { maxHealth: 400, damage: 450, range: 2000, speed: 350, reloadSpeed: 5000, armor: 0.20, cost: 100 },
  "pesawat_tempur": { maxHealth: 500, damage: 250, range: 1800, speed: 280, reloadSpeed: 2500, armor: 0.25, cost: 80 },
  "pesawat_bomber": { maxHealth: 800, damage: 1500, range: 1000, speed: 180, reloadSpeed: 12000, armor: 0.40, cost: 150 },
  "pesawat_heli_serang": { maxHealth: 600, damage: 150, range: 1200, speed: 150, reloadSpeed: 1200, armor: 0.35, cost: 60 },
  "pesawat_heli_uav": { maxHealth: 150, damage: 50, range: 1500, speed: 90, reloadSpeed: 2000, armor: 0.05, cost: 30 },
  "pesawat_kamikaze": { maxHealth: 50, damage: 800, range: 500, speed: 200, reloadSpeed: 99999, armor: 0.00, cost: 20 },
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

/**
 * Mencari spesifikasi lengkap dari id/tipe unit.
 * Jika tipe tidak dikenal, akan me-return stat rata-rata (Fallback).
 */
export function getUnitStats(type: string): UnitCombatStats {
   const normalizedType = DatabaseToTacticalMapping[type] || type;
   const key = Object.keys(UnitStatsDatabase).find(k => normalizedType.toLowerCase().includes(k)) || "apc";
   return UnitStatsDatabase[key] || UnitStatsDatabase["apc"];
}
