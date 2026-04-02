"use client"

/**
 * Battle Engine
 * =============
 * Logika pertempuran real-time untuk sistem perang taktis.
 * Mengelola pergerakan unit, kalkulasi damage, dan update state.
 */

import { BattlefieldState, DeployedUnit, UnitStats, WarForces } from "../warTypes";
import { updateOccupiedTiles, isCountryConquered } from "./territoryGrid";

// === Unit Stats Database ===
const UNIT_STATS: Record<string, UnitStats> = {
  pasukan_infanteri: { hp: 100, maxHp: 100, damage: 10, range: 2, moveSpeed: 1.0, armor: 5 },
  tank_tempur_utama: { hp: 500, maxHp: 500, damage: 50, range: 3, moveSpeed: 0.8, armor: 40 },
  apc_ifv:           { hp: 300, maxHp: 300, damage: 30, range: 2, moveSpeed: 1.2, armor: 20 },
  artileri_berat:    { hp: 200, maxHp: 200, damage: 80, range: 7, minRange: 3, moveSpeed: 0.3, armor: 10 },
  sistem_peluncur_roket: { hp: 150, maxHp: 150, damage: 100, range: 9, minRange: 4, moveSpeed: 0.2, armor: 8 },
  pertahanan_udara_mobile: { hp: 250, maxHp: 250, damage: 60, range: 5, moveSpeed: 0.4, armor: 15 },
  kendaraan_taktis:  { hp: 150, maxHp: 150, damage: 20, range: 2, moveSpeed: 1.5, armor: 10 },
  kapal_induk:       { hp: 800, maxHp: 800, damage: 40, range: 5, moveSpeed: 0.5, armor: 50 },
  kapal_destroyer:   { hp: 600, maxHp: 600, damage: 70, range: 5, moveSpeed: 0.6, armor: 35 },
  kapal_korvet:      { hp: 400, maxHp: 400, damage: 45, range: 4, moveSpeed: 0.8, armor: 25 },
  kapal_selam_nuklir: { hp: 500, maxHp: 500, damage: 90, range: 6, moveSpeed: 0.4, armor: 30 },
  kapal_selam_regular: { hp: 350, maxHp: 350, damage: 60, range: 5, moveSpeed: 0.5, armor: 20 },
  kapal_ranjau:      { hp: 200, maxHp: 200, damage: 30, range: 3, moveSpeed: 0.6, armor: 15 },
  kapal_logistik:    { hp: 300, maxHp: 300, damage: 10, range: 1, moveSpeed: 0.5, armor: 20 },
  jet_tempur_siluman: { hp: 400, maxHp: 400, damage: 70, range: 7, moveSpeed: 2.0, armor: 15 },
  jet_tempur_interceptor: { hp: 350, maxHp: 350, damage: 55, range: 6, moveSpeed: 2.2, armor: 12 },
  pesawat_pengebom:  { hp: 500, maxHp: 500, damage: 120, range: 8, moveSpeed: 1.2, armor: 20 },
  helikopter_serang: { hp: 350, maxHp: 350, damage: 55, range: 4, moveSpeed: 1.5, armor: 15 },
  pesawat_pengintai: { hp: 150, maxHp: 150, damage: 10, range: 10, moveSpeed: 2.5, armor: 5 },
  drone_intai_uav:   { hp: 80, maxHp: 80, damage: 15, range: 6, moveSpeed: 2.0, armor: 3 },
  drone_kamikaze:    { hp: 50, maxHp: 50, damage: 150, range: 5, moveSpeed: 2.5, armor: 0 },
  pesawat_angkut:    { hp: 400, maxHp: 400, damage: 5, range: 1, moveSpeed: 1.0, armor: 25 },
};

// Sprite mapping
const UNIT_SPRITE_MAP: Record<string, DeployedUnit['sprite']> = {
  pasukan_infanteri: 'infantry',
  tank_tempur_utama: 'tank',
  apc_ifv: 'apc',
  artileri_berat: 'artillery',
  sistem_peluncur_roket: 'rocket',
  pertahanan_udara_mobile: 'sam',
  kendaraan_taktis: 'apc',
  kapal_induk: 'ship',
  kapal_destroyer: 'ship',
  kapal_korvet: 'ship',
  kapal_selam_nuklir: 'ship',
  kapal_selam_regular: 'ship',
  kapal_ranjau: 'ship',
  kapal_logistik: 'ship',
  jet_tempur_siluman: 'jet',
  jet_tempur_interceptor: 'jet',
  pesawat_pengebom: 'jet',
  helikopter_serang: 'heli',
  pesawat_pengintai: 'drone',
  drone_intai_uav: 'drone',
  drone_kamikaze: 'drone',
  pesawat_angkut: 'jet',
};

// Label mapping
const UNIT_LABELS: Record<string, string> = {
  pasukan_infanteri: "Infanteri",
  tank_tempur_utama: "MBT",
  apc_ifv: "APC/IFV",
  artileri_berat: "Artileri",
  sistem_peluncur_roket: "MLRS",
  pertahanan_udara_mobile: "SAM",
  kendaraan_taktis: "Rantis",
  kapal_induk: "Carrier",
  kapal_destroyer: "Destroyer",
  kapal_korvet: "Korvet",
  kapal_selam_nuklir: "Sub Nuklir",
  kapal_selam_regular: "Sub",
  kapal_ranjau: "Ranjau",
  kapal_logistik: "Logistik",
  jet_tempur_siluman: "Stealth",
  jet_tempur_interceptor: "Interceptor",
  pesawat_pengebom: "Bomber",
  helikopter_serang: "Heli",
  pesawat_pengintai: "Intai",
  drone_intai_uav: "UAV",
  drone_kamikaze: "Kamikaze",
  pesawat_angkut: "Angkut",
};

// === Matchup Bonus ===
function getMatchupBonus(attacker: string, defender: string): number {
  // Udara vs Darat = 1.3x
  if (['jet_tempur_siluman', 'jet_tempur_interceptor', 'pesawat_pengebom', 'helikopter_serang'].includes(attacker) &&
      ['tank_tempur_utama', 'apc_ifv', 'artileri_berat', 'pasukan_infanteri'].includes(defender)) {
    return 1.3;
  }
  // SAM vs Udara = 1.5x
  if (attacker === 'pertahanan_udara_mobile' &&
      ['jet_tempur_siluman', 'jet_tempur_interceptor', 'helikopter_serang', 'drone_intai_uav', 'drone_kamikaze'].includes(defender)) {
    return 1.5;
  }
  // Selam vs surface ships = 1.4x
  if (['kapal_selam_nuklir', 'kapal_selam_regular'].includes(attacker) &&
      ['kapal_destroyer', 'kapal_korvet', 'kapal_induk'].includes(defender)) {
    return 1.4;
  }
  // Tank vs Infanteri = 1.4x
  if (attacker === 'tank_tempur_utama' && defender === 'pasukan_infanteri') {
    return 1.4;
  }
  return 1.0;
}

/**
 * Menghitung jarak grid antara 2 unit.
 */
function gridDistance(a: DeployedUnit, b: DeployedUnit): number {
  return Math.sqrt((a.gridX - b.gridX) ** 2 + (a.gridY - b.gridY) ** 2);
}

/**
 * Mencari musuh terdekat dalam range unit.
 */
function findNearestEnemy(
  unit: DeployedUnit,
  enemies: DeployedUnit[]
): DeployedUnit | null {
  let closest: DeployedUnit | null = null;
  let minDist = Infinity;

  for (const enemy of enemies) {
    if (!enemy.isAlive) continue;
    const dist = gridDistance(unit, enemy);
    if (dist < minDist) {
      minDist = dist;
      closest = enemy;
    }
  }

  return closest;
}

/**
 * Update satu tick pertempuran.
 * Return: apakah perang sudah selesai.
 */
export function updateBattleTick(battlefield: BattlefieldState): boolean {
  if (battlefield.subPhase !== 'engagement') return false;

  battlefield.tick++;

  const allUnits = [
    ...battlefield.userUnits.filter(u => u.isAlive),
    ...battlefield.enemyUnits.filter(u => u.isAlive),
  ];

  // Process each alive unit
  for (const unit of allUnits) {
    if (!unit.isAlive) continue;

    const enemies = unit.side === 'user'
      ? battlefield.enemyUnits.filter(u => u.isAlive)
      : battlefield.userUnits.filter(u => u.isAlive);

    const nearest = unit.targetId 
      ? (allUnits.find(u => u.id === unit.targetId) || findNearestEnemy(unit, enemies))
      : findNearestEnemy(unit, enemies);

    if (!nearest) continue;

    const dist = gridDistance(unit, nearest);
    
    // Get terrain data for unit and target
    const gx = Math.floor(unit.gridX);
    const gy = Math.floor(unit.gridY);
    const tgx = Math.floor(nearest.gridX);
    const tgy = Math.floor(nearest.gridY);
    const terrain = battlefield.tiles[gy]?.[gx]?.terrainType || 'plain';
    const targetTerrain = battlefield.tiles[tgy]?.[tgx]?.terrainType || 'plain';

    // Terrain modifier: speed
    let speedMod = 1.0;
    if (terrain === 'forest') speedMod = 0.7;
    if (terrain === 'mountain') speedMod = 0.4;
    if (terrain === 'water') {
      const isNavalOrAir = ['jet', 'heli', 'drone', 'ship'].some(s => unit.sprite.includes(s));
      if (!isNavalOrAir) speedMod = 0.1;
    }

    // Terrain modifier: defense (damage reduction)
    let defMod = 1.0;
    if (targetTerrain === 'forest') defMod = 0.8;
    if (targetTerrain === 'mountain') defMod = 0.5;

    const inRange = dist <= unit.stats.range && (!unit.stats.minRange || dist >= unit.stats.minRange);

    if (inRange) {
      // === ATTACK ===
      if (!unit.lastAttackTick || battlefield.tick - unit.lastAttackTick >= 3) {
        const matchup = getMatchupBonus(unit.unitType, nearest.unitType);
        const randomFactor = 0.8 + Math.random() * 0.4;
        const rawDamage = unit.stats.damage * matchup * randomFactor;
        const effectiveDamage = Math.max(1, (rawDamage * defMod) - nearest.stats.armor * 0.3);

        nearest.stats.hp -= effectiveDamage;
        unit.lastAttackTick = battlefield.tick;
        unit.targetId = nearest.id;

        if (nearest.stats.hp <= 0) {
          nearest.stats.hp = 0;
          nearest.isAlive = false;
        }
      }
    } else {
      // === MOVE toward nearest enemy ===
      const dx = nearest.gridX - unit.gridX;
      const dy = nearest.gridY - unit.gridY;
      const magnitude = Math.sqrt(dx * dx + dy * dy);
      if (magnitude > 0) {
        unit.gridX += (dx / magnitude) * unit.stats.moveSpeed * 0.5 * speedMod;
        unit.gridY += (dy / magnitude) * unit.stats.moveSpeed * 0.5 * speedMod;
      }
      // targetId is kept if set by AI server, otherwise cleared
      if (!unit.targetId) unit.targetId = undefined;
    }
  }

  // Update tile occupation
  updateOccupiedTiles(battlefield);

  // Check victory
  const allEnemiesDead = battlefield.enemyUnits.every(u => !u.isAlive);
  const allUserDead = battlefield.userUnits.every(u => !u.isAlive);
  const conquered = isCountryConquered(battlefield);

  if (conquered || allEnemiesDead) {
    battlefield.subPhase = 'resolved';
    return true; // victory
  }

  if (allUserDead) {
    battlefield.subPhase = 'resolved';
    return true; // defeat
  }

  return false;
}

/**
 * Mengonversi WarForces menjadi DeployedUnit[] untuk deployment.
 * Hanya membuat representasi, belum ditempatkan di grid.
 */
export function forcesToDeployableUnits(forces: WarForces, side: 'user' | 'enemy'): DeployedUnit[] {
  const units: DeployedUnit[] = [];
  let idCounter = 0;

  const processCategory = (category: Record<string, number>) => {
    for (const [unitType, count] of Object.entries(category)) {
      if (count <= 0) continue;

      // Batasi jumlah unit visual agar performa terjaga
      // 1 visual unit = representasi cluster
      const clusterSize = getClusterSize(unitType, count);
      const visualCount = Math.min(Math.ceil(count / clusterSize), 20);

      for (let i = 0; i < visualCount; i++) {
        const baseStats = UNIT_STATS[unitType] || UNIT_STATS.pasukan_infanteri;
        const multiplier = Math.min(clusterSize, count - i * clusterSize);

        units.push({
          id: `${side}_${unitType}_${idCounter++}`,
          unitType,
          label: UNIT_LABELS[unitType] || unitType,
          side,
          gridX: 0,
          gridY: 0,
          stats: {
            ...baseStats,
            hp: baseStats.hp * Math.sqrt(multiplier),
            maxHp: baseStats.maxHp * Math.sqrt(multiplier),
            damage: baseStats.damage * Math.sqrt(multiplier),
          },
          isAlive: true,
          sprite: UNIT_SPRITE_MAP[unitType] || 'infantry',
        });
      }
    }
  };

  processCategory(forces.darat);
  processCategory(forces.laut);
  processCategory(forces.udara);

  return units;
}

/**
 * Cluster size: berapa unit nyata yang direpresentasikan 1 unit visual.
 */
function getClusterSize(unitType: string, count: number): number {
  if (unitType === 'pasukan_infanteri') return Math.max(1000, Math.ceil(count / 15));
  if (count > 100) return Math.ceil(count / 15);
  if (count > 20) return Math.ceil(count / 10);
  return Math.max(1, Math.ceil(count / 5));
}

/**
 * Spawn musuh secara otomatis di sisi berlawanan negara.
 */
export function spawnEnemyUnits(
  battlefield: BattlefieldState,
  enemyForces: WarForces
): void {
  const units = forcesToDeployableUnits(enemyForces, 'enemy');

  // Tempatkan musuh di sisi kanan dan tengah negara
  const countryTiles = battlefield.tiles.flat()
    .filter(t => t.isInsideCountry)
    .sort((a, b) => b.gridX - a.gridX); // dari kanan

  // Ambil 40% tile terjauh dari kiri sebagai spawn zone
  const spawnZone = countryTiles.slice(0, Math.ceil(countryTiles.length * 0.4));

  const usedTiles = new Set<string>();

  units.forEach((unit) => {
    // Cari tile yang belum dipakai jika memungkinkan
    let tile = spawnZone[Math.floor(Math.random() * spawnZone.length)];
    const tileKey = `${tile.gridX},${tile.gridY}`;
    
    if (usedTiles.has(tileKey) && usedTiles.size < spawnZone.length) {
      // Loop cari yang kosong
      for (const t of spawnZone) {
        if (!usedTiles.has(`${t.gridX},${t.gridY}`)) {
          tile = t;
          break;
        }
      }
    }

    unit.gridX = tile.gridX + (Math.random() - 0.5) * 0.4;
    unit.gridY = tile.gridY + (Math.random() - 0.5) * 0.4;
    usedTiles.add(`${tile.gridX},${tile.gridY}`);
  });

  battlefield.enemyUnits = units;
}

/**
 * Menentukan apakah hasil pertempuran adalah kemenangan user.
 */
export function determineBattleOutcome(battlefield: BattlefieldState): 'victory' | 'defeat' {
  const conquered = isCountryConquered(battlefield);
  const allEnemiesDead = battlefield.enemyUnits.every(u => !u.isAlive);

  if (conquered || allEnemiesDead) return 'victory';
  return 'defeat';
}

export { UNIT_STATS, UNIT_LABELS, UNIT_SPRITE_MAP };
