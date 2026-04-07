"use client"

import { eropaCountries, naCountries } from "@/app/database/data/negara/benua/index";

/**
 * Mendapatkan pengali biaya diplomasi berdasarkan religi saat ini dan negara target.
 * Aturan: 
 * - Islam -> Negara Barat (Eropa & Amerika Utara) mendapatkan penalti biaya +10% (1.1x).
 */
export function getDiplomacyCostModifier(targetCountryNameId: string, currentReligion: string): number {
  if (!targetCountryNameId || currentReligion !== "Islam") return 1.0;

  const targetId = targetCountryNameId.toLowerCase().trim();
  
  // Cek apakah negara target berada di Eropa atau Amerika Utara (Representasi Dunia Barat dalam game)
  const isEropa = eropaCountries.some(c => c.name_id.toLowerCase().trim() === targetId);
  const isNA = naCountries.some(c => c.name_id.toLowerCase().trim() === targetId);

  if (isEropa || isNA) {
    return 1.1; // Penalti +10%
  }

  return 1.0;
}
