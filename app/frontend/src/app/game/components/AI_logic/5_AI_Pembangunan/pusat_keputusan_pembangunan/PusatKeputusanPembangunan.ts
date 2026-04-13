"use client"

import { countries } from "@/app/database/data/negara/benua/index";
import { aiBudgetStorage } from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiBuildingStorage } from "../antarmuka_data_pembangunan/AIBuildingStorage";
import { aiProductionStorage } from "../antarmuka_data_pembangunan/AIProductionStorage";
import { aiRootCauseStorage } from "../../../map-system/modals_detail_negara/1_info_strategis/6_Kepuasan/socialDiagnosisStorage";
import { EksekutorPembangunanAI } from "../sistem_tindakan_respon/EksekutorPembangunanAI";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { calculateDailyBudgetDelta, calculateBudgetBreakdown } from "@/app/game/data/economy/BudgetDeltaLogic";
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

    // 1. Kumpulkan semua nilai dari semua sektor ke dalam satu flat map untuk pencarian cepat
    const allSectors = [
      'sektor_listrik', 'sektor_manufaktur', 'sektor_ekstraksi', 
      'sektor_peternakan', 'sektor_agrikultur', 'sektor_perikanan', 
      'sektor_olahan_pangan', 'sektor_farmasi', 'pabrik_militer',
      'infrastruktur', 'pendidikan', 'kesehatan', 'hukum', 
      'sektor_olahraga', 'hunian', 'sektor_komersial'
    ];

    const baselineData: Record<string, number> = {};
    allSectors.forEach(sectorKey => {
      const sectorObj = (country as any)[sectorKey];
      if (sectorObj && typeof sectorObj === 'object') {
        Object.entries(sectorObj).forEach(([dataKey, val]) => {
          baselineData[dataKey] = Number(val || 0);
        });
      }
    });

    // 2. Petakan Baseline ke Metadata Key (misal: 'plts' -> '3_pembangkit_listrik_tenaga_surya')
    ALL_OPTIONS.forEach(opt => {
      const baseline = baselineData[opt.dataKey] || baselineData[opt.key] || 0;
      if (baseline > 0) {
        buildings[opt.key] = baseline;
      }
    });

    // 3. Tambahkan Delta (pembangunan yang sudah selesai oleh AI sebelumnya)
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
    const deltasForBreakdown = aiBuildingStorage.getAllBuildingDeltas(countryNameEn);

    // 2. Calculate daily income BREAKDOWN (precisely as requested)
    const breakdown = calculateBudgetBreakdown(country as any, deltasForBreakdown);
    const dailyIncome = breakdown.dailyDelta;
    
    // 2.5 Get Social Stressors
    const socialDiagnosis = aiRootCauseStorage.getLatest(countryNameEn);

    // Categorize for Python brain
    const economic_intelligence = {
      domestic_fiscal: Object.values(breakdown.revenues.domestic).reduce((a, b) => a + b, 0) / 365,
      trade_logistics: Object.values(breakdown.revenues.trade).reduce((a, b) => a + b, 0) / 365,
      service_commercial: (breakdown.revenues.other["sektor_jasa"] || 0) / 365,
      resource_income: Object.values(breakdown.revenues.resources).reduce((a, b) => a + b, 0) / 365,
      total_expenses: breakdown.totalAnnualExpense / 365
    };

    // 3. Send everything to Python brain in ONE call
    try {
      const response = await fetch('/game/components/AI_logic/5_AI_Pembangunan/routes/keputusan_cerdas', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          negara: countryNameEn,
          budget,
          daily_income: dailyIncome,
          income_breakdown: economic_intelligence, // New field for precision
          stocks,
          buildings,
          options: ALL_OPTIONS,
          queue_count: queue.length,
          population: Number(country.jumlah_penduduk) || 0,
          root_cause: socialDiagnosis.root_cause
        })
      });

      const result = await response.json();
      
      if (!result || !result.decision) return;

      // Log for debugging
      if (result.decision === "EXECUTE") {
        console.log(`[AI CONSTRUCTION] ${countryNameEn}: ${result.reason} | Cost: ${result.budget_analysis?.building_cost?.toLocaleString()}`);
      }

      if (result.decision === "EXECUTE" && result.building_key) {
        const chosen = ALL_OPTIONS.find(o => o.key === result.building_key);
        if (chosen) {
          const currentCount = buildings[result.building_key] || 0;
          await EksekutorPembangunanAI.laksanakan(countryNameEn, result.building_key, chosen, gameDate, currentCount);
        }
      }
    } catch (err) {
      // Silent fail — don't block other NPCs
      console.error(`[AI Construction] Error for ${countryNameEn}:`, err);
    }
  }
}
