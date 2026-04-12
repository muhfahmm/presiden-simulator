"use client"

import { countries } from "@/app/database/data/negara/benua/index";
import { aiBudgetStorage } from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiBuildingStorage } from "../antarmuka_data_pembangunan/AIBuildingStorage";
import { aiProductionStorage } from "../antarmuka_data_pembangunan/AIProductionStorage";
import { EksekutorPembangunanAI } from "../sistem_tindakan_respon/EksekutorPembangunanAI";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { calculateDailyBudgetDelta } from "@/app/game/data/economy/BudgetDeltaLogic";
import { 
    KAPASITAS_LISTRIK_METADATA, 
    mineralKritisRate, 
    manufakturRate, 
    peternakanRate, 
    agrikulturRate, 
    perikananRate, 
    olahanPanganRate, 
    farmasiRate
} from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi";
import { pabrikMiliterRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer";
import { infrastrukturRate, sosialRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum";
import { BUILDING_REQUIREMENTS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/1-produksi/MaterialRequirement";

// Consolidate ALL building options with full metadata (costs, requirements, production rate)
const ALL_OPTIONS: any[] = [
    ...Object.entries(KAPASITAS_LISTRIK_METADATA).map(([key, v]: any) => ({ key, ...v, groupId: 'kelistrikan', requirements: BUILDING_REQUIREMENTS[key] || { beton:0, kayu:0, baja:0 } })),
    ...Object.entries(mineralKritisRate).map(([key, v]: any) => ({ key, ...v, groupId: 'ekstraksi', requirements: BUILDING_REQUIREMENTS[key] || { beton:0, kayu:0, baja:0 } })),
    ...Object.entries(manufakturRate).map(([key, v]: any) => ({ key, ...v, groupId: 'manufaktur', requirements: BUILDING_REQUIREMENTS[key] || { beton:0, kayu:0, baja:0 } })),
    ...Object.entries(peternakanRate).map(([key, v]: any) => ({ key, ...v, groupId: 'peternakan', requirements: BUILDING_REQUIREMENTS[key] || { beton:0, kayu:0, baja:0 } })),
    ...Object.entries(agrikulturRate).map(([key, v]: any) => ({ key, ...v, groupId: 'agrikultur', requirements: BUILDING_REQUIREMENTS[key] || { beton:0, kayu:0, baja:0 } })),
    ...Object.entries(perikananRate).map(([key, v]: any) => ({ key, ...v, groupId: 'perikanan', requirements: BUILDING_REQUIREMENTS[key] || { beton:0, kayu:0, baja:0 } })),
    ...Object.entries(olahanPanganRate).map(([key, v]: any) => ({ key, ...v, groupId: 'olahan_pangan', requirements: BUILDING_REQUIREMENTS[key] || { beton:0, kayu:0, baja:0 } })),
    ...Object.entries(farmasiRate).map(([key, v]: any) => ({ key, ...v, groupId: 'farmasi', requirements: BUILDING_REQUIREMENTS[key] || { beton:0, kayu:0, baja:0 } })),
    ...Object.entries(pabrikMiliterRate).map(([key, v]: any) => ({ key, ...v, groupId: 'militer', requirements: BUILDING_REQUIREMENTS[key] || { beton:0, kayu:0, baja:0 } })),
    ...Object.entries(infrastrukturRate).map(([key, v]: any) => ({ key, ...v, groupId: 'infrastruktur', requirements: BUILDING_REQUIREMENTS[key] || { beton:0, kayu:0, baja:0 } })),
    ...Object.entries(sosialRate).map(([key, v]: any) => ({ key, ...v, groupId: v.groupId || 'sosial', requirements: BUILDING_REQUIREMENTS[key] || { beton:0, kayu:0, baja:0 } })),
];

/**
 * PusatKeputusanPembangunan (Construction Decision Center)
 * 
 * Unified AI construction engine that:
 * 1. Gathers ALL economic data for a country
 * 2. Sends it to otak_pembangunan.py in ONE call
 * 3. Executes the decision
 */
export class PusatKeputusanPembangunan {
  private static lastDecisionMap: Map<string, string> = new Map();

  /**
   * Gather all baseline + delta buildings for an NPC country.
   */
  static gatherBuildings(country: any): Record<string, number> {
    const buildings: Record<string, number> = {};

    // Sektor Listrik
    if (country.sektor_listrik) {
      const sl = country.sektor_listrik;
      if (sl.pembangkit_listrik_tenaga_nuklir) buildings["1_pembangkit_listrik_tenaga_nuklir"] = sl.pembangkit_listrik_tenaga_nuklir;
      if (sl.pembangkit_listrik_tenaga_air) buildings["2_pembangkit_listrik_tenaga_air"] = sl.pembangkit_listrik_tenaga_air;
      if (sl.pembangkit_listrik_tenaga_surya) buildings["3_pembangkit_listrik_tenaga_surya"] = sl.pembangkit_listrik_tenaga_surya;
      if (sl.pembangkit_listrik_tenaga_uap) buildings["4_pembangkit_listrik_tenaga_uap"] = sl.pembangkit_listrik_tenaga_uap;
      if (sl.pembangkit_listrik_tenaga_gas) buildings["5_pembangkit_listrik_tenaga_gas"] = sl.pembangkit_listrik_tenaga_gas;
      if (sl.pembangkit_listrik_tenaga_angin) buildings["6_pembangkit_listrik_tenaga_angin"] = sl.pembangkit_listrik_tenaga_angin;
    }

    // Sektor Manufaktur
    if (country.sektor_manufaktur) {
      const sm = country.sektor_manufaktur;
      if (sm.semen_beton) buildings["5_pabrik_semen"] = sm.semen_beton;
      if (sm.kayu) buildings["6_penggergajian_kayu"] = sm.kayu;
      if (sm.smelter) buildings["4_smelter"] = sm.smelter;
      if (sm.semikonduktor) buildings["1_pabrik_elektronik"] = sm.semikonduktor;
      if (sm.mobil) buildings["2_pabrik_mobil"] = sm.mobil;
      if (sm.sepeda_motor) buildings["3_pabrik_motor"] = sm.sepeda_motor;
      if (sm.pupuk) buildings["7_pabrik_pupuk"] = sm.pupuk;
    }

    // Sektor Ekstraksi
    if (country.sektor_ekstraksi) {
      const se = country.sektor_ekstraksi;
      if (se.emas) buildings["1_tambang_emas"] = se.emas;
      if (se.uranium) buildings["2_tambang_uranium"] = se.uranium;
      if (se.batu_bara) buildings["3_tambang_batu_bara"] = se.batu_bara;
      if (se.minyak_bumi) buildings["4_sumur_minyak"] = se.minyak_bumi;
      if (se.gas_alam) buildings["5_sumur_gas"] = se.gas_alam;
      if (se.garam) buildings["6_tambang_garam"] = se.garam;
      if (se.nikel) buildings["7_tambang_nikel"] = se.nikel;
      if (se.litium) buildings["8_tambang_litium"] = se.litium;
      if (se.tembaga) buildings["9_tambang_tembaga"] = se.tembaga;
      if (se.aluminium) buildings["10_tambang_aluminium"] = se.aluminium;
      if (se.logam_tanah_jarang) buildings["11_tambang_ltj"] = se.logam_tanah_jarang;
      if (se.bijih_besi) buildings["12_tambang_bijih_besi"] = se.bijih_besi;
    }

    // Generic spread for other sectors
    const moreSectors = ['sektor_peternakan', 'sektor_agrikultur', 'sektor_perikanan', 'sektor_olahan_pangan', 'sektor_farmasi', 'pabrik_militer'];
    moreSectors.forEach(s => {
      const data = (country as any)[s];
      if (data && typeof data === 'object') {
        Object.entries(data).forEach(([key, val]) => {
          buildings[key] = (buildings[key] || 0) + Number(val);
        });
      }
    });

    // Add dynamic deltas from AI building storage
    const deltas = aiBuildingStorage.getAllBuildingDeltas(country.name_en);
    Object.entries(deltas).forEach(([key, val]) => {
      buildings[key] = (buildings[key] || 0) + val;
    });

    return buildings;
  }

  /**
   * Main entry: Think and decide what to build for an NPC country.
   */
  static async pikirkan(countryNameEn: string) {
    const session = timeStorage.getState();
    const gameDate = session.gameDate;
    const dateStr = gameDate.toISOString().split('T')[0];

    // Throttle: One decision per country per game day
    if (this.lastDecisionMap.get(countryNameEn) === dateStr) return;
    this.lastDecisionMap.set(countryNameEn, dateStr);

    const country = countries.find(c => c.name_en === countryNameEn);
    if (!country) return;

    // 1. Gather economic snapshot
    const budget = aiBudgetStorage.getBudget(countryNameEn);
    const stocks = aiProductionStorage.getStocks(countryNameEn);
    const queue = aiBuildingStorage.getQueue(countryNameEn);
    const buildings = PusatKeputusanPembangunan.gatherBuildings(country);

    // 2. Calculate daily income (same formula as economy page)
    const dailyIncome = calculateDailyBudgetDelta(country as any, {});

    // 3. Send everything to Python brain in ONE call
    try {
      const response = await fetch('/game/components/AI_logic/5_AI_Pembangunan/routes/keputusan_cerdas', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          negara: countryNameEn,
          budget,
          daily_income: dailyIncome,
          stocks,
          buildings,
          options: ALL_OPTIONS,
          queue_count: queue.length,
          population: Number(country.jumlah_penduduk) || 0
        })
      });

      const result = await response.json();
      
      // Log for debugging
      if (result.decision === "EXECUTE") {
        console.log(`[AI CONSTRUCTION] ${countryNameEn}: ${result.reason} | Cost: ${result.budget_analysis?.building_cost?.toLocaleString()}`);
      }

      if (result.decision === "EXECUTE" && result.building_key) {
        const chosen = ALL_OPTIONS.find(o => o.key === result.building_key);
        if (chosen) {
          await EksekutorPembangunanAI.laksanakan(countryNameEn, result.building_key, chosen, gameDate);
        }
      }
    } catch (err) {
      // Silent fail — don't block other NPCs
      console.error(`[AI Construction] Error for ${countryNameEn}:`, err);
    }
  }
}
