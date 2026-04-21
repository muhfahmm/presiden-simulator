/**
 * Sektor Layanan Publik Revenue Logic
 * 
 * This module calculates daily revenue for Sports, Commercial, and Entertainment sectors.
 * Each unit of a certain building generates a specific amount of money (in national budget units).
 */

export const REVENUE_RATES: Record<string, number> = {
  // 5. Sektor Olahraga & Rekreasi (7 jenis)
  "16_kolam_renang": 175,
  "17_sirkuit_balap": 400,
  "18_stadium_int": 475,
  "19_gym_center": 225,
  "20_lapangan_golf": 450,
  "21_esports_arena": 425,
  "22_gokart_circuit": 300,

  // 6. Sektor Komersial & Retail (3 jenis)
  "23_pusat_belanja": 3500,
  "24_hotel": 2800,
  "25_pusat_grosir_tekstil": 2200,

  // 7. Sektor Hiburan & Seni (2 jenis)
  "26_bioskop": 1100,
  "27_gedung_teater": 900,
};

/**
 * Base Mapping to lookup buildings in initial country data
 */
function getBaseBuildingCount(key: string, countryData?: any): number {
  if (!countryData) return 0;
  
  switch(key) {
    // Sektor Olahraga
    case "16_kolam_renang": return countryData.sektor_olahraga?.kolam_renang || 0;
    case "17_sirkuit_balap": return countryData.sektor_olahraga?.sirkuit_balap || 0;
    case "18_stadium_int": return (countryData.sektor_olahraga?.stadion || 0) + (countryData.sektor_olahraga?.stadion_internasional || 0);
    case "19_gym_center": return countryData.sektor_olahraga?.gym || 0;
    case "20_lapangan_golf": return countryData.sektor_olahraga?.golf || 0;
    case "21_esports_arena": return countryData.sektor_olahraga?.esports || 0;
    case "22_gokart_circuit": return countryData.sektor_olahraga?.gokart || 0;
    
    // Sektor Komersial
    case "23_pusat_belanja": return countryData.sektor_komersial?.pusat_belanja || 0;
    case "24_hotel": return countryData.sektor_komersial?.hotel || 0;
    case "25_pusat_grosir_tekstil": return countryData.sektor_komersial?.pusat_grosir_tekstil || 0;
    
    // Sektor Hiburan
    case "26_bioskop": return countryData.sektor_hiburan?.bioskop || 0;
    case "27_gedung_teater": return countryData.sektor_hiburan?.teater || 0;
    
    default: return 0;
  }
}

import { ISLAM_COMMERCIAL_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/1_islam/1_plus/plus";
import { PROTESTAN_ENTERTAINMENT_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/2_protestan/2_minus/minus";
import { ORTODOKS_COMMERCIAL_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/4_ortodoks/2_minus/minus";
import { religionStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/religionStorage";
import { ATEISME_COMMERCIAL_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/7_ateisme/1_plus/plus";
import { YAHUDI_COMMERCIAL_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/8_yahudi/1_plus/plus";

/**
 * Calculates the total revenue from all service and commercial buildings (Base + Built).
 */
export function calculateTempatUmumRevenue(buildingDeltas: Record<string, number>, countryData?: any): number {
  let totalRevenue = 0;
  const currentReligion = religionStorage.getCurrentReligion(countryData?.religion || "Islam");
  const isIslam = currentReligion === "Islam";
  const isProtestan = currentReligion === "Protestan";
  const isOrtodoks = currentReligion === "Kristen Ortodoks";
  const isAteisme = currentReligion === "Atheisme";
  const isYahudi = currentReligion === "Yahudi";

  Object.entries(REVENUE_RATES).forEach(([key, rate]) => {
    const deltaCount = buildingDeltas[key] || 0;
    const baseCount = getBaseBuildingCount(key, countryData);
    const totalCount = deltaCount + baseCount;

    let buildingRevenue = totalCount * rate;
    
    // Apply 10% Bonus for Islam (Komersial Sector: 23, 24, 25)
    if (isIslam && ["23_pusat_belanja", "24_hotel", "25_pusat_grosir_tekstil"].includes(key)) {
      buildingRevenue *= ISLAM_COMMERCIAL_BONUS;
    }

    // Apply 10% Penalty for Ortodoks (Komersial Sector: 23, 24, 25)
    if (isOrtodoks && ["23_pusat_belanja", "24_hotel", "25_pusat_grosir_tekstil"]. includes(key)) {
      buildingRevenue *= (1 + ORTODOKS_COMMERCIAL_PENALTY);
    }

    // Apply 50% Bonus for Atheisme (Komersial Sector: 23, 24, 25)
    if (isAteisme && ["23_pusat_belanja", "24_hotel", "25_pusat_grosir_tekstil"].includes(key)) {
      buildingRevenue *= (1 + ATEISME_COMMERCIAL_BONUS);
    }

    // Apply 20% Bonus for Yahudi (Komersial Sector: 23, 24, 25)
    if (isYahudi && ["23_pusat_belanja", "24_hotel", "25_pusat_grosir_tekstil"].includes(key)) {
      buildingRevenue *= (1 + YAHUDI_COMMERCIAL_BONUS);
    }

    // Apply 15% Penalty for Protestan (Hiburan Sector: 26, 27)
    if (isProtestan && ["26_bioskop", "27_gedung_teater"].includes(key)) {
      buildingRevenue *= PROTESTAN_ENTERTAINMENT_PENALTY;
    }

    totalRevenue += buildingRevenue;
  });

  return totalRevenue;
}

/**
 * Get revenue breakdown by sector (Olahraga, Komersial, Hiburan) (Base + Built)
 */
export function getTempatUmumRevenueBreakdown(buildingDeltas: Record<string, number>, countryData?: any) {
  const breakdown = {
    olahraga: 0,
    komersial: 0,
    hiburan: 0
  };

  const currentReligion = religionStorage.getCurrentReligion(countryData?.religion || "Islam");
  const isIslam = currentReligion === "Islam";
  const isProtestan = currentReligion === "Protestan";
  const isOrtodoks = currentReligion === "Kristen Ortodoks";
  const isAteisme = currentReligion === "Atheisme";
  const isYahudi = currentReligion === "Yahudi";

  Object.entries(REVENUE_RATES).forEach(([key, rate]) => {
    const deltaCount = buildingDeltas[key] || 0;
    const baseCount = getBaseBuildingCount(key, countryData);
    const totalCount = deltaCount + baseCount;
    let revenue = totalCount * rate;

    if (["16_kolam_renang", "17_sirkuit_balap", "18_stadium_int", "19_gym_center", "20_lapangan_golf", "21_esports_arena", "22_gokart_circuit"].includes(key)) {
      breakdown.olahraga += revenue;
    } else if (["23_pusat_belanja", "24_hotel", "25_pusat_grosir_tekstil"].includes(key)) {
      if (isIslam) revenue *= ISLAM_COMMERCIAL_BONUS;
      if (isOrtodoks) revenue *= (1 + ORTODOKS_COMMERCIAL_PENALTY);
      if (isAteisme) revenue *= (1 + ATEISME_COMMERCIAL_BONUS);
      if (isYahudi) revenue *= (1 + YAHUDI_COMMERCIAL_BONUS);
      breakdown.komersial += revenue;
    } else if (["26_bioskop", "27_gedung_teater"].includes(key)) {
      if (isProtestan) revenue *= PROTESTAN_ENTERTAINMENT_PENALTY;
      breakdown.hiburan += revenue;
    }
  });

  return breakdown;
}

/**
 * Get total unit count by category (Base + Built)
 */
export function getTempatUmumUnitCount(buildingDeltas: Record<string, number>, countryData?: any) {
  const counts = {
    olahraga: 0,
    komersial: 0,
    hiburan: 0
  };

  Object.keys(REVENUE_RATES).forEach(key => {
    const deltaCount = buildingDeltas[key] || 0;
    const baseCount = getBaseBuildingCount(key, countryData);
    const totalCount = deltaCount + baseCount;

    if (["16_kolam_renang", "17_sirkuit_balap", "18_stadium_int", "19_gym_center", "20_lapangan_golf", "21_esports_arena", "22_gokart_circuit"].includes(key)) {
      counts.olahraga += totalCount;
    } else if (["23_pusat_belanja", "24_hotel", "25_pusat_grosir_tekstil"].includes(key)) {
      counts.komersial += totalCount;
    } else if (["26_bioskop", "27_gedung_teater"].includes(key)) {
      counts.hiburan += totalCount;
    }
  });

  return counts;
}

/**
 * Get detailed breakdown per building (Base + Built)
 */
export function getDetailedTempatUmumBreakdown(buildingDeltas: Record<string, number>, countryData?: any) {
  const result: { key: string, label: string, count: number, rate: number, total: number, sector: 'olahraga' | 'komersial' | 'hiburan' }[] = [];

  const labels: Record<string, string> = {
    "16_kolam_renang": "Kolam Renang",
    "17_sirkuit_balap": "Sirkuit Balap",
    "18_stadium_int": "Stadium Internasional",
    "19_gym_center": "Gym Center",
    "20_lapangan_golf": "Lapangan Golf",
    "21_esports_arena": "E-Sports Arena",
    "22_gokart_circuit": "Sirkuit Gokart",
    "23_pusat_belanja": "Pusat Perbelanjaan",
    "24_hotel": "Hotel & Resort",
    "25_pusat_grosir_tekstil": "Pusat Grosir Tekstil",
    "26_bioskop": "Bioskop",
    "27_gedung_teater": "Gedung Teater"
  };

  const currentReligion = religionStorage.getCurrentReligion(countryData?.religion || "Islam");
  const isIslam = currentReligion === "Islam";
  const isProtestan = currentReligion === "Protestan";
  const isOrtodoks = currentReligion === "Kristen Ortodoks";
  const isAteisme = currentReligion === "Atheisme";
  const isYahudi = currentReligion === "Yahudi";

  Object.entries(REVENUE_RATES).forEach(([key, rate]) => {
    const deltaCount = buildingDeltas[key] || 0;
    const baseCount = getBaseBuildingCount(key, countryData);
    const totalCount = deltaCount + baseCount;

    if (totalCount > 0) {
      let sector: 'olahraga' | 'komersial' | 'hiburan' = 'olahraga';
      let total = totalCount * rate;

      if (["23_pusat_belanja", "24_hotel", "25_pusat_grosir_tekstil"].includes(key)) {
        sector = 'komersial';
        if (isIslam) total *= ISLAM_COMMERCIAL_BONUS;
        if (isOrtodoks) total *= (1 + ORTODOKS_COMMERCIAL_PENALTY);
        if (isAteisme) total *= (1 + ATEISME_COMMERCIAL_BONUS);
        if (isYahudi) total *= (1 + YAHUDI_COMMERCIAL_BONUS);
      }
      else if (["26_bioskop", "27_gedung_teater"].includes(key)) {
        sector = 'hiburan';
        if (isProtestan) total *= PROTESTAN_ENTERTAINMENT_PENALTY;
      }

      result.push({
        key,
        label: labels[key] || key,
        count: totalCount,
        rate,
        total,
        sector
      });
    }
  });

  return result;
}
