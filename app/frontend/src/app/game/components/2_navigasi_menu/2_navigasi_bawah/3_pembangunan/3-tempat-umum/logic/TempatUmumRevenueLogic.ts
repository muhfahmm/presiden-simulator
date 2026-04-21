/**
 * Sektor Layanan Publik Finance Logic
 * 
 * This module handles both Revenue (Sectors 5-7) and Maintenance Costs (Sectors 1-4, 8).
 * Each unit of a building generates or consumes a specific amount of money daily.
 */

/**
 * DAILY REVENUE RATES (Sectors 5, 6, 7)
 * Range: [50, 500]
 */
export const REVENUE_RATES: Record<string, number> = {
  // 5. Sektor Olahraga & Rekreasi
  "16_kolam_renang": 100,
  "17_sirkuit_balap": 250,
  "18_stadium_int": 500,
  "19_gym_center": 150,
  "20_lapangan_golf": 300,
  "21_esports_arena": 200,
  "22_gokart_circuit": 150,

  // 6. Sektor Komersial & Retail
  "23_pusat_belanja": 350,
  "24_hotel": 400,
  "25_pusat_grosir_tekstil": 500,

  // 7. Sektor Hiburan & Seni
  "26_bioskop": 200,
  "27_gedung_teater": 150,
};

/**
 * DAILY MAINTENANCE COSTS (Sectors 1, 2, 3, 4, 8)
 * Range: [50, 500]
 */
export const MAINTENANCE_RATES: Record<string, number> = {
  // 1. Sektor Infrastruktur
  "1_jalur_sepeda": 50,
  "2_jalan_tol": 300,
  "3_terminal_bus": 150,
  "4_jalur_kereta": 400,
  "5_kereta_bawah_tanah": 500,
  "6_pelabuhan_laut": 500,
  "7_bandara": 500,
  "8_helipad": 100,

  // 2. Sektor Pendidikan
  "1_paud_playgroup": 50,
  "2_sekolah_dasar": 100,
  "3_sekolah_menengah_pertama": 150,
  "4_sekolah_menengah_atas": 200,
  "5_sekolah_menengah_kejuruan": 250,
  "6_universitas_nasional": 500,
  "7_politeknik_negeri": 400,
  "8_observatorium": 300,
  "9_pusat_penelitian": 450,
  "10_pusat_pengembangan": 500,

  // 3. Sektor Kesehatan
  "11_rumah_sakit_besar": 500,
  "12_rumah_sakit_kecil": 250,
  "13_pusat_diagnostik": 300,

  // 4. Sektor Hukum & Keamanan
  "14_kejaksaan_court": 300,
  "15_legal_aid": 150,

  // 8. Sektor Hunian & Pemukiman
  "rumah_subsidi": 50,
  "apartemen": 300,
  "mansion": 150,
};

/**
 * Base Mapping to lookup buildings in initial country data
 */
function getBaseBuildingCount(key: string, countryData?: any): number {
  if (!countryData) return 0;
  
  switch(key) {
    // Sektor Infrastruktur
    case "1_jalur_sepeda": return countryData.infrastruktur?.jalur_sepeda || 0;
    case "2_jalan_tol": return countryData.infrastruktur?.jalan_raya || 0;
    case "3_terminal_bus": return countryData.infrastruktur?.terminal_bus || 0;
    case "4_jalur_kereta": return countryData.infrastruktur?.stasiun_kereta_api || 0;
    case "5_kereta_bawah_tanah": return countryData.infrastruktur?.kereta_bawah_tanah || 0;
    case "6_pelabuhan_laut": return countryData.infrastruktur?.pelabuhan || 0;
    case "7_bandara": return countryData.infrastruktur?.bandara || 0;
    case "8_helipad": return countryData.infrastruktur?.helipad || 0;

    // Sektor Pendidikan
    case "1_paud_playgroup": return countryData.pendidikan?.paud || 0;
    case "2_sekolah_dasar": return countryData.pendidikan?.sd || 0;
    case "3_sekolah_menengah_pertama": return countryData.pendidikan?.smp || 0;
    case "4_sekolah_menengah_atas": return countryData.pendidikan?.sma || 0;
    case "5_sekolah_menengah_kejuruan": return countryData.pendidikan?.smk || 0;
    case "6_universitas_nasional": return countryData.pendidikan?.universitas || 0;
    case "7_politeknik_negeri": return countryData.pendidikan?.politeknik || 0;
    case "8_observatorium": return countryData.pendidikan?.observatorium || 0;
    case "9_pusat_penelitian": return countryData.pendidikan?.pusat_penelitian || 0;
    case "10_pusat_pengembangan": return countryData.pendidikan?.pusat_pengembangan || 0;

    // Sektor Kesehatan
    case "11_rumah_sakit_besar": return countryData.kesehatan?.rumah_sakit_besar || 0;
    case "12_rumah_sakit_kecil": return countryData.kesehatan?.rumah_sakit_kecil || 0;
    case "13_pusat_diagnostik": return countryData.kesehatan?.pusat_diagnostik || 0;

    // Sektor Hukum
    case "14_kejaksaan_court": return (countryData.hukum?.kejaksaan || 0) + (countryData.hukum?.pengadilan || 0);
    case "15_legal_aid": return countryData.hukum?.pusat_bantuan_hukum || 0;

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

    // Sektor Hunian
    case "rumah_subsidi": return countryData.hunian?.rumah_subsidi || 0;
    case "apartemen": return countryData.hunian?.apartemen || 0;
    case "mansion": return countryData.hunian?.mansion || 0;
    
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
 * Calculates the total revenue from Sektor 5, 6, 7.
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
    
    // Apply Religion Modifiers
    if (["23_pusat_belanja", "24_hotel", "25_pusat_grosir_tekstil"].includes(key)) {
      if (isIslam) buildingRevenue *= ISLAM_COMMERCIAL_BONUS;
      if (isOrtodoks) buildingRevenue *= (1 + ORTODOKS_COMMERCIAL_PENALTY);
      if (isAteisme) buildingRevenue *= (1 + ATEISME_COMMERCIAL_BONUS);
      if (isYahudi) buildingRevenue *= (1 + YAHUDI_COMMERCIAL_BONUS);
    }

    if (isProtestan && ["26_bioskop", "27_gedung_teater"].includes(key)) {
      buildingRevenue *= PROTESTAN_ENTERTAINMENT_PENALTY;
    }

    totalRevenue += buildingRevenue;
  });

  return totalRevenue;
}

/**
 * Calculates the total maintenance cost from Sektor 1, 2, 3, 4, 8.
 */
export function calculateTempatUmumMaintenance(buildingDeltas: Record<string, number>, countryData?: any): number {
  let totalMaintenance = 0;

  Object.entries(MAINTENANCE_RATES).forEach(([key, rate]) => {
    const deltaCount = buildingDeltas[key] || 0;
    const baseCount = getBaseBuildingCount(key, countryData);
    const totalCount = deltaCount + baseCount;

    totalMaintenance += totalCount * rate;
  });

  return totalMaintenance;
}

/**
 * Get revenue breakdown by sector (Olahraga, Komersial, Hiburan)
 */
export function getTempatUmumRevenueBreakdown(buildingDeltas: Record<string, number>, countryData?: any) {
  const breakdown = { olahraga: 0, komersial: 0, hiburan: 0 };
  const currentReligion = religionStorage.getCurrentReligion(countryData?.religion || "Islam");
  const isIslam = currentReligion === "Islam";
  const isProtestan = currentReligion === "Protestan";
  const isOrtodoks = currentReligion === "Kristen Ortodoks";
  const isAteisme = currentReligion === "Atheisme";
  const isYahudi = currentReligion === "Yahudi";

  Object.entries(REVENUE_RATES).forEach(([key, rate]) => {
    const totalCount = (buildingDeltas[key] || 0) + getBaseBuildingCount(key, countryData);
    let revenue = totalCount * rate;

    if (key.startsWith("16") || key.startsWith("17") || key.startsWith("18") || key.startsWith("19") || key.startsWith("20") || key.startsWith("21") || key.startsWith("22")) {
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
 * Get maintenance breakdown by sector
 */
export function getTempatUmumMaintenanceBreakdown(buildingDeltas: Record<string, number>, countryData?: any) {
  const breakdown = { infrastruktur: 0, pendidikan: 0, kesehatan: 0, hukum: 0, hunian: 0 };

  Object.entries(MAINTENANCE_RATES).forEach(([key, rate]) => {
    const totalCount = (buildingDeltas[key] || 0) + getBaseBuildingCount(key, countryData);
    const expense = totalCount * rate;

    if (key.startsWith("1_") || key.startsWith("2_") || key.startsWith("3_") || key.startsWith("4_") || key.startsWith("5_") || key.startsWith("6_") || key.startsWith("7_") || key.startsWith("8_")) {
        if (["1_paud_playgroup", "2_sekolah_dasar", "3_sekolah_menengah_pertama", "4_sekolah_menengah_atas", "5_sekolah_menengah_kejuruan", "6_universitas_nasional", "7_politeknik_negeri", "8_observatorium", "9_pusat_penelitian", "10_pusat_pengembangan"].includes(key)) {
            breakdown.pendidikan += expense;
        } else {
            breakdown.infrastruktur += expense;
        }
    } else if (["11_rumah_sakit_besar", "12_rumah_sakit_kecil", "13_pusat_diagnostik"].includes(key)) {
      breakdown.kesehatan += expense;
    } else if (["14_kejaksaan_court", "15_legal_aid"].includes(key)) {
      breakdown.hukum += expense;
    } else if (["rumah_subsidi", "apartemen", "mansion"].includes(key)) {
      breakdown.hunian += expense;
    }
  });

  return breakdown;
}

/**
 * Get detailed breakdown per building (Base + Built)
 */
export function getDetailedTempatUmumBreakdown(buildingDeltas: Record<string, number>, countryData?: any) {
  const result: any[] = [];
  const labels: Record<string, string> = {
    "1_jalur_sepeda": "Jalur Sepeda", "2_jalan_tol": "Jalan Tol", "3_terminal_bus": "Terminal Bus", "4_jalur_kereta": "Jalur Kereta", "5_kereta_bawah_tanah": "Subway", "6_pelabuhan_laut": "Pelabuhan Laut", "7_bandara": "Bandara", "8_helipad": "Helipad",
    "1_paud_playgroup": "PAUD", "2_sekolah_dasar": "SD", "3_sekolah_menengah_pertama": "SMP", "4_sekolah_menengah_atas": "SMA", "5_sekolah_menengah_kejuruan": "SMK", "6_universitas_nasional": "Universitas", "7_politeknik_negeri": "Politeknik", "8_observatorium": "Observatorium", "9_pusat_penelitian": "Pusat Penelitian", "10_pusat_pengembangan": "Pusat Pengembangan",
    "11_rumah_sakit_besar": "RS Besar", "12_rumah_sakit_kecil": "RS Kecil", "13_pusat_diagnostik": "Pusat Diagnostik",
    "14_kejaksaan_court": "Kejaksaan", "15_legal_aid": "Bantuan Hukum",
    "16_kolam_renang": "Kolam Renang", "17_sirkuit_balap": "Sirkuit Balap", "18_stadium_int": "Stadion", "19_gym_center": "Gym Center", "20_lapangan_golf": "Lapangan Golf", "21_esports_arena": "E-Sports", "22_gokart_circuit": "Gokart",
    "23_pusat_belanja": "Pusat Belanja", "24_hotel": "Hotel", "25_pusat_grosir_tekstil": "Pusat Grosir",
    "26_bioskop": "Bioskop", "27_gedung_teater": "Gedung Teater",
    "rumah_subsidi": "Rumah Subsidi", "apartemen": "Apartemen", "mansion": "Mansion"
  };

  const currentReligion = religionStorage.getCurrentReligion(countryData?.religion || "Islam");
  const isIslam = currentReligion === "Islam";
  const isProtestan = currentReligion === "Protestan";
  const isOrtodoks = currentReligion === "Kristen Ortodoks";
  const isAteisme = currentReligion === "Atheisme";
  const isYahudi = currentReligion === "Yahudi";

  // Process Revenues
  Object.entries(REVENUE_RATES).forEach(([key, rate]) => {
    const totalCount = (buildingDeltas[key] || 0) + getBaseBuildingCount(key, countryData);
    if (totalCount <= 0) return;
    let total = totalCount * rate;
    if (["23_pusat_belanja", "24_hotel", "25_pusat_grosir_tekstil"].includes(key)) {
      if (isIslam) total *= ISLAM_COMMERCIAL_BONUS;
      if (isOrtodoks) total *= (1 + ORTODOKS_COMMERCIAL_PENALTY);
      if (isAteisme) total *= (1 + ATEISME_COMMERCIAL_BONUS);
      if (isYahudi) total *= (1 + YAHUDI_COMMERCIAL_BONUS);
    }
    if (isProtestan && ["26_bioskop", "27_gedung_teater"].includes(key)) total *= PROTESTAN_ENTERTAINMENT_PENALTY;
    
    result.push({ key, label: labels[key] || key, count: totalCount, rate, total, isRevenue: true });
  });

  // Process Maintenance
  Object.entries(MAINTENANCE_RATES).forEach(([key, rate]) => {
    const totalCount = (buildingDeltas[key] || 0) + getBaseBuildingCount(key, countryData);
    if (totalCount <= 0) return;
    result.push({ key, label: labels[key] || key, count: totalCount, rate, total: totalCount * rate, isRevenue: false });
  });

  return result;
}

/**
 * Get count of units per sector
 */
export function getTempatUmumUnitCount(buildingDeltas: Record<string, number>, countryData?: any) {
  const counts = {
    infrastruktur: 0,
    pendidikan: 0,
    kesehatan: 0,
    hukum: 0,
    olahraga: 0,
    komersial: 0,
    hiburan: 0,
    hunian: 0
  };

  Object.keys(REVENUE_RATES).forEach(key => {
    const totalCount = (buildingDeltas[key] || 0) + getBaseBuildingCount(key, countryData);
    if (key.startsWith("16") || key.startsWith("17") || key.startsWith("18") || key.startsWith("19") || key.startsWith("20") || key.startsWith("21") || key.startsWith("22")) {
      counts.olahraga += totalCount;
    } else if (["23_pusat_belanja", "24_hotel", "25_pusat_grosir_tekstil"].includes(key)) {
      counts.komersial += totalCount;
    } else if (["26_bioskop", "27_gedung_teater"].includes(key)) {
      counts.hiburan += totalCount;
    }
  });

  Object.keys(MAINTENANCE_RATES).forEach(key => {
    const totalCount = (buildingDeltas[key] || 0) + getBaseBuildingCount(key, countryData);
    if (key.startsWith("1_") || key.startsWith("2_") || key.startsWith("3_") || key.startsWith("4_") || key.startsWith("5_") || key.startsWith("6_") || key.startsWith("7_") || key.startsWith("8_")) {
        if (["1_paud_playgroup", "2_sekolah_dasar", "3_sekolah_menengah_pertama", "4_sekolah_menengah_atas", "5_sekolah_menengah_kejuruan", "6_universitas_nasional", "7_politeknik_negeri", "8_observatorium", "9_pusat_penelitian", "10_pusat_pengembangan"].includes(key)) {
            counts.pendidikan += totalCount;
        } else {
            counts.infrastruktur += totalCount;
        }
    } else if (["11_rumah_sakit_besar", "12_rumah_sakit_kecil", "13_pusat_diagnostik"].includes(key)) {
      counts.kesehatan += totalCount;
    } else if (["14_kejaksaan_court", "15_legal_aid"].includes(key)) {
      counts.hukum += totalCount;
    } else if (["rumah_subsidi", "apartemen", "mansion"].includes(key)) {
      counts.hunian += totalCount;
    }
  });

  return counts;
}
