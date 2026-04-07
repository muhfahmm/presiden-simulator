"use client"

import { 
  eropaCountries, 
  naCountries, 
  asiaCountries, 
  afrikaCountries, 
  saCountries, 
  oceaniaCountries 
} from "@/app/database/data/negara/benua/index";
import { ISLAM_DIPLOMACY_WEST_PENALTY, ISLAM_PENALTY_REGIONS } from "./1_islam/2_minus/minus";

// Mapping kata kunci di minus.ts ke data negara yang sesungguhnya
const CONTINENT_MAP: Record<string, any[]> = {
  "eropa": eropaCountries,
  "na": naCountries,
  "asia": asiaCountries,
  "afrika": afrikaCountries,
  "sa": saCountries,
  "oceania": oceaniaCountries
};

/**
 * Mendapatkan pengali biaya diplomasi berdasarkan religi saat ini dan negara target.
 * Aturan: 
 * - Menggunakan konfigurasi wilayah dan angka penalti dari masing-masing folder religi (misal: islam/minus.ts).
 */
export function getDiplomacyCostModifier(targetCountryNameId: string, currentReligion: string): number {
  if (!targetCountryNameId || currentReligion !== "Islam") return 1.0;

  const targetId = targetCountryNameId.toLowerCase().trim();
  
  // Cek apakah negara target berada di salah satu benua yang dilarang di minus.ts
  const isTargeted = ISLAM_PENALTY_REGIONS.some((regionKey: string) => {
    const countriesInRegion = CONTINENT_MAP[regionKey];
    return countriesInRegion?.some(c => c.name_id.toLowerCase().trim() === targetId);
  });

  if (isTargeted) {
    return ISLAM_DIPLOMACY_WEST_PENALTY;
  }

  return 1.0;
}
