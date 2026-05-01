"use client"

import { 
  eropaCountries, 
  naCountries, 
  asiaCountries, 
  afrikaCountries, 
  saCountries, 
  oceaniaCountries 
} from "@/app/database/data/negara/index";
import { ISLAM_DIPLOMACY_WEST_PENALTY, ISLAM_PENALTY_REGIONS } from "./1_islam/2_minus/minus";
import { ORTODOKS_DIPLOMACY_GLOBAL_PENALTY } from "./4_ortodoks/2_minus/minus";
import { HINDU_MUSLIM_DIPLOMACY_PENALTY } from "./5_hindu/2_minus/minus";
import { BUDDHA_DIPLOMACY_PEACE_BONUS } from "./6_buddha/1_plus/plus";
import { ATEISME_THEOCRACY_DIPLOMACY_PENALTY } from "./7_ateisme/2_minus/minus";
import { YAHUDI_WESTERN_RELATION_BONUS } from "./8_yahudi/1_plus/plus";
import { YAHUDI_REGIONAL_EMBARGO_PENALTY } from "./8_yahudi/2_minus/minus";

// Mapping kata kunci di minus.ts ke data negara yang sesungguhnya
const CONTINENT_MAP: Record<string, any[]> = {
  "eropa": eropaCountries,
  "na": naCountries,
  "asia": asiaCountries,
  "afrika": afrikaCountries,
  "sa": saCountries,
  "oceania": oceaniaCountries
};

const ALL_COUNTRIES_LIST = [
  ...eropaCountries, ...naCountries, ...asiaCountries, ...afrikaCountries, ...saCountries, ...oceaniaCountries
];

/**
 * Daftar negara yang dianggap sebagai Teokrasi untuk mekanik game.
 */
const THEOCRACY_COUNTRIES = [
  "afganistan", 
  "arab saudi", 
  "iran", 
  "vatikan", 
  "pakistan", 
  "brunei darussalam", 
  "oman", 
  "qatar", 
  "uni emirat arab", 
  "yaman"
];

/**
 * Daftar negara yang dianggap sebagai Blok Amerika & Sekutu (Barat).
 */
const WESTERN_ALLIES = [
  "amerika serikat",
  "kanada",
  "inggris",
  "prancis",
  "jerman",
  "italia",
  "australia",
  "jepang",
  "korea selatan",
  "israel"
];

/**
 * Daftar negara yang melakukan Embargo Regional terhadap Yahudi (Timur Tengah).
 */
const REGIONAL_EMBARGO_COUNTRIES = [
  "afganistan",
  "arab saudi",
  "iran",
  "irak",
  "kuwait",
  "lebanon",
  "libya",
  "oman",
  "pakistan",
  "palestina",
  "qatar",
  "uni emirat arab",
  "yaman",
  "suriah",
  "aljazair",
  "mesir"
];

/**
 * Mendapatkan pengali biaya diplomasi berdasarkan religi saat ini dan negara target.
 * Aturan: 
 * - Menggunakan konfigurasi wilayah dan angka penalti dari masing-masing folder religi (misal: islam/minus.ts).
 */
export function getDiplomacyCostModifier(targetCountryNameId: string, currentReligion: string): number {
  if (!targetCountryNameId) return 1.0;

  // Global Penalty for Orthodox
  if (currentReligion === "Kristen Ortodoks") {
    return ORTODOKS_DIPLOMACY_GLOBAL_PENALTY;
  }

  // Global Bonus for Buddha
  if (currentReligion === "Buddha") {
    return BUDDHA_DIPLOMACY_PEACE_BONUS;
  }

  const targetId = targetCountryNameId.toLowerCase().trim();

  // Penalty for Hindu against Muslim countries
  if (currentReligion === "Hindu") {
    const targetCountry = ALL_COUNTRIES_LIST.find(c => c.name_id.toLowerCase().trim() === targetId);
    if (targetCountry && targetCountry.religion === "Islam") {
      return HINDU_MUSLIM_DIPLOMACY_PENALTY;
    }
  }

  // Penalty for Atheisme against Theocratic countries
  if (currentReligion === "Atheisme") {
    const isTheocracy = THEOCRACY_COUNTRIES.includes(targetId);
    if (isTheocracy) {
      return ATEISME_THEOCRACY_DIPLOMACY_PENALTY;
    }
  }

  // Western Ally Bonus & Regional Embargo for Yahudi
  if (currentReligion === "Yahudi") {
    // 1. Regional Embargo (Penalty)
    if (REGIONAL_EMBARGO_COUNTRIES.includes(targetId)) {
      return YAHUDI_REGIONAL_EMBARGO_PENALTY;
    }
    // 2. Western Allies (Bonus)
    if (WESTERN_ALLIES.includes(targetId)) {
      return YAHUDI_WESTERN_RELATION_BONUS;
    }
  }

  if (currentReligion !== "Islam") return 1.0;
  
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

