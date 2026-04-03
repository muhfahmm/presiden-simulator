/**
 * HP_Logic.tsx - Sistem Pengelolaan Vitalitas & Survival
 */

import { UnitState } from "./polyglot-router";
import { UnitCombatStats } from "./unit_stats";

export class HP_Logic {
   /**
    * Menghitung rasio darah untuk render visual bar HP (0.0 - 1.0)
    */
   static getHealthRatio(currentHealth: number, maxHealth: number): number {
      if (maxHealth <= 0) return 0;
      return Math.max(0, currentHealth / maxHealth);
   }

   /**
    * Mengurangi HP unit berdasarkan serangan yang diterima.
    * Dipanggil oleh Power_Logic saat konfirmasi hit terjadi.
    */
   static applyDamage(currentHealth: number, damage: number): number {
      return Math.max(0, currentHealth - damage);
   }

   /**
    * Mengecek apakah unit masih memiliki vitalitas untuk bertarung
    */
   static isAlive(unit: UnitState): boolean {
      return unit.health > 0;
   }

   /**
    * Menghapus unit-unit yang sudah hancur dari medan tempur
    */
   static filterDestroyedUnits(units: UnitState[]): UnitState[] {
      return units.filter(u => u.health > 0);
   }
}
