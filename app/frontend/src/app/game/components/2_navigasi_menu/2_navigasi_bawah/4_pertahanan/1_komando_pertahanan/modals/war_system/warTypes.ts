"use client"

// === War System Types ===

export type WarPhase = 'deploying' | 'traveling' | 'battle' | 'tactical' | 'finished';
export type WarOutcome = 'victory' | 'defeat' | 'draw';

// === Tactical Battle Types ===

export type TileStatus = 'empty' | 'user' | 'enemy' | 'contested';
export type TerrainType = 'plain' | 'forest' | 'mountain' | 'water';
export type TacticalSubPhase = 'planning' | 'deployment' | 'engagement' | 'resolved';
export type UnitSide = 'user' | 'enemy';

export interface TileData {
  gridX: number;
  gridY: number;
  pixelX: number;
  pixelY: number;
  status: TileStatus;
  terrainType: TerrainType;
  isInsideCountry: boolean;
}

export interface UnitStats {
  hp: number;
  maxHp: number;
  damage: number;
  range: number;       // tiles
  minRange?: number;   // tiles (untuk Artileri)
  moveSpeed: number;   // tiles per tick
  armor: number;
}

export interface DeployedUnit {
  id: string;
  unitType: string;
  label: string;
  side: UnitSide;
  gridX: number;
  gridY: number;
  stats: UnitStats;
  isAlive: boolean;
  targetId?: string;
  lastAttackTick?: number;
  sprite: 'tank' | 'infantry' | 'artillery' | 'rocket' | 'sam' | 'jet' | 'heli' | 'drone' | 'ship' | 'apc';
}

export interface BattlefieldState {
  warId: string;
  defenderCountry: string;
  gridCols: number;
  gridRows: number;
  tileSize: number;
  tiles: TileData[][];
  userUnits: DeployedUnit[];
  enemyUnits: DeployedUnit[];
  subPhase: TacticalSubPhase;
  occupationPercent: number;
  tick: number;
  /** Bounding box of defender country in pixel coords */
  bounds: { minX: number; minY: number; maxX: number; maxY: number };
  /** Center of defender country (lon/lat) */
  center: { lon: number; lat: number };
}

export interface TerritoryProgress {
  warId: string;
  defenderCountry: string;
  occupationPercent: number;
  totalTiles: number;
  occupiedTiles: number;
  isConquered: boolean;
}

export interface FleetUnit {
  type: 'darat' | 'laut' | 'udara';
  label: string;
  count: number;
  /** 0→1 progress along route */
  progress: number;
}

export interface WarForces {
  darat: {
    pasukan_infanteri: number;
    tank_tempur_utama: number;
    apc_ifv: number;
    artileri_berat: number;
    sistem_peluncur_roket: number;
    pertahanan_udara_mobile: number;
    kendaraan_taktis: number;
  };
  laut: {
    kapal_induk: number;
    kapal_destroyer: number;
    kapal_korvet: number;
    kapal_selam_nuklir: number;
    kapal_selam_regular: number;
    kapal_ranjau: number;
    kapal_logistik: number;
  };
  udara: {
    jet_tempur_siluman: number;
    jet_tempur_interceptor: number;
    pesawat_pengebom: number;
    helikopter_serang: number;
    pesawat_pengintai: number;
    drone_intai_uav: number;
    drone_kamikaze: number;
    pesawat_angkut: number;
  };
}

export interface WarCasualties {
  attacker: Partial<Record<string, number>>;
  defender: Partial<Record<string, number>>;
}

export interface WarDeclaration {
  id: string;
  attacker: string;       // country name_id
  defender: string;       // country name_id
  attackerForces: WarForces;
  defenderForces: WarForces;
  phase: WarPhase;
  outcome?: WarOutcome;
  casualties?: WarCasualties;
  startedAt: number;      // Date.now()
  resolvedAt?: number;
  /** attacker total power */
  attackerPower: number;
  /** defender total power */
  defenderPower: number;
}
