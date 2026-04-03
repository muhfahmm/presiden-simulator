/**
 * Power_Logic.tsx - Sistem Kalkulasi Kekuatan & Kerusakan Senjata
 */

import { UnitCombatStats } from "./unit_stats";

export class Power_Logic {
   /**
    * Kalkulasi kerusakan aktual berdasarkan penetrasi baju besi.
    * Digunakan untuk menentukan seberapa dalam proyektil menembus baja lawan.
    */
   static calculateActualDamage(attacker: UnitCombatStats, defender: UnitCombatStats): number {
      const baseDamage = attacker.damage;
      // RNG Variance (80% - 120%)
      const rngFactor = 0.8 + (Math.random() * 0.4);
      
      // Armor Absorbs percentage of damage
      const absorbed = baseDamage * (defender.armor || 0);
      const finalDamage = (baseDamage - absorbed) * rngFactor;
      
      return Math.max(1, Math.floor(finalDamage)); // Min 1 damage
   }

   /**
    * Menghitung skor kekuatan tempur (Combat Power Score)
    * Digunakan untuk kalkulasi dominansi wilayah (Influence)
    */
   static calculatePowerScore(stats: UnitCombatStats): number {
      const defensiveValue = stats.maxHealth * (1 + stats.armor);
      const offensiveValue = stats.damage * (stats.range / 1000) * (2000 / stats.reloadSpeed);
      return Math.round((defensiveValue + offensiveValue) / 10);
   }
}
