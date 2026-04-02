"use client"

// === War System Types ===

export type WarPhase = 'deploying' | 'traveling' | 'battle' | 'finished';
export type WarOutcome = 'victory' | 'defeat' | 'draw';

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
