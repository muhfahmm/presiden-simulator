import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { mineralKritisRate } from "@/app/pilih_negara/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/2_db_ekstraksi";
import { manufakturRate } from "@/app/pilih_negara/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/3_db_manufaktur";
import { peternakanRate } from "@/app/pilih_negara/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/4_db_peternakan";
import { agrikulturRate } from "@/app/pilih_negara/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/5_db_agrikultur";
import { perikananRate } from "@/app/pilih_negara/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/6_db_perikanan";
import { olahanPanganRate } from "@/app/pilih_negara/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/7_db_olahan_pangan";
import { farmasiRate } from "@/app/pilih_negara/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/8_db_farmasi";

/**
 * ProductionLogic.ts
 * Calculates daily commodity production deltas based on owned buildings.
 */

// All production rates combined
const ALL_RATES: Record<string, any> = {
  ...mineralKritisRate,
  ...manufakturRate,
  ...peternakanRate,
  ...agrikulturRate,
  ...perikananRate,
  ...olahanPanganRate,
  ...farmasiRate
};

/**
 * Calculates the daily production deltas for the given country and building deltas.
 */
export function calculateDailyProduction(countryData: CountryData, buildingDeltas: Record<string, number>): Record<string, number> {
  const productionDeltas: Record<string, number> = {};

  // 1. Map country's initial buildings from its sectors
  const initialBuildings: Record<string, number> = {};
  
  // Extract from sectors (mapping internal keys to building keys)
  if (countryData.sektor_ekstraksi) {
    const mapping: Record<string, string> = {
      emas: "1_tambang_emas", uranium: "2_tambang_uranium", batu_bara: "3_tambang_batu_bara",
      minyak_bumi: "4_sumur_minyak", gas_alam: "5_sumur_gas", garam: "6_tambang_garam",
      nikel: "7_tambang_nikel", litium: "8_tambang_litium", tembaga: "9_tambang_tembaga",
      aluminium: "10_tambang_aluminium", logam_tanah_jarang: "11_tambang_ltj", bijih_besi: "12_tambang_bijih_besi"
    };
    Object.entries(countryData.sektor_ekstraksi).forEach(([key, val]) => {
      if (mapping[key]) initialBuildings[mapping[key]] = (initialBuildings[mapping[key]] || 0) + (val || 0);
    });
  }

  if (countryData.sektor_manufaktur) {
    const mapping: Record<string, string> = {
      semikonduktor: "1_pabrik_elektronik", mobil: "2_pabrik_mobil", sepeda_motor: "3_pabrik_motor",
      smelter: "4_smelter", semen_beton: "5_pabrik_semen", kayu: "6_penggergajian_kayu"
    };
    Object.entries(countryData.sektor_manufaktur).forEach(([key, val]) => {
      if (mapping[key]) initialBuildings[mapping[key]] = (initialBuildings[mapping[key]] || 0) + (val || 0);
    });
  }

  // Agrikultur, Peternakan, etc. (They usually use building keys directly or similar)
  const addSektorBuildings = (sektor: any, mapping?: Record<string, string>) => {
    if (!sektor) return;
    Object.entries(sektor).forEach(([key, val]) => {
        const buildingKey = mapping ? mapping[key] : key;
        if (buildingKey) initialBuildings[buildingKey] = (initialBuildings[buildingKey] || 0) + (val as number || 0);
    });
  };

  addSektorBuildings(countryData.sektor_peternakan, {
      ayam_unggas: "1_peternakan_unggas",
      sapi_perah: "2_peternakan_sapi_perah",
      sapi_potong: "3_peternakan_sapi_potong",
      domba_kambing: "4_peternakan_domba_kambing"
  });

  addSektorBuildings(countryData.sektor_agrikultur, {
      padi: "1_sawah_padi",
      gandum_jagung: "2_ladang_gandum",
      sayur_umbi: "4_ladang_umbi",
      kedelai: "5_ladang_kedelai",
      kelapa_sawit: "6_perkebunan_sawit",
      kopi_teh_kakao: "8_perkebunan_kopi",
      tebu: "10_perkebunan_tebu"
  });

  addSektorBuildings(countryData.sektor_perikanan, {
      udang_kerang: "1_tambak_udang",
      ikan: "2_budidaya_ikan_tawar"
  });
  
  addSektorBuildings(countryData.sektor_olahan_pangan, {
      air_mineral: "1_pabrik_air_mineral",
      gula: "2_pabrik_gula",
      roti: "3_pabrik_roti",
      pengolahan_daging: "4_pabrik_pengolahan_daging",
      mie_instan: "5_pabrik_mie_instan",
      minyak_goreng: "6_pabrik_minyak_goreng"
  });

  addSektorBuildings(countryData.sektor_farmasi, {
      farmasi: "1_pabrik_farmasi"
  });

  // 2. Combine with user-built buildings (deltas)
  const totalBuildings = { ...initialBuildings };
  Object.entries(buildingDeltas).forEach(([key, val]) => {
    totalBuildings[key] = (totalBuildings[key] || 0) + val;
  });

  // 3. Calculate production deltas
  Object.entries(totalBuildings).forEach(([buildingKey, count]) => {
    const rate = ALL_RATES[buildingKey];
    if (rate && rate.produksi) {
      // Production is stored by its 'key' (building key) or 'dataKey'
      // To match EksporEksekusi, we should use the BUILDING KEY as the key in cumulativeProduction
      // because that's what EksporEksekusi expects for now.
      const stockKey = buildingKey; 
      productionDeltas[stockKey] = (productionDeltas[stockKey] || 0) + (rate.produksi * count);
    }
  });

  return productionDeltas;
}
