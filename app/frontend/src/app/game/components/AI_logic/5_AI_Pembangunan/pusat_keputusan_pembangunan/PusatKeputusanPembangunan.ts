"use client"

import { countries } from "@/app/database/data/negara/benua/index";
import { aiBudgetStorage } from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiBuildingStorage } from "../antarmuka_data_pembangunan/AIBuildingStorage";
import { aiProductionStorage } from "../antarmuka_data_pembangunan/AIProductionStorage";
import { EksekutorPembangunanAI } from "../sistem_tindakan_respon/EksekutorPembangunanAI";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
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

// Helper to consolidate all building options
const ALL_OPTIONS: any[] = [
    ...Object.entries(KAPASITAS_LISTRIK_METADATA).map(([key, v]: any) => ({ key, ...v, groupId: 'kelistrikan' })),
    ...Object.entries(mineralKritisRate).map(([key, v]: any) => ({ key, ...v, groupId: 'ekstraksi' })),
    ...Object.entries(manufakturRate).map(([key, v]: any) => ({ key, ...v, groupId: 'manufaktur' })),
    ...Object.entries(peternakanRate).map(([key, v]: any) => ({ key, ...v, groupId: 'peternakan' })),
    ...Object.entries(agrikulturRate).map(([key, v]: any) => ({ key, ...v, groupId: 'agrikultur' })),
    ...Object.entries(perikananRate).map(([key, v]: any) => ({ key, ...v, groupId: 'perikanan' })),
    ...Object.entries(olahanPanganRate).map(([key, v]: any) => ({ key, ...v, groupId: 'olahan_pangan' })),
    ...Object.entries(farmasiRate).map(([key, v]: any) => ({ key, ...v, groupId: 'farmasi' })),
    ...Object.entries(pabrikMiliterRate).map(([key, v]: any) => ({ key, ...v, groupId: 'militer' })),
    ...Object.entries(infrastrukturRate).map(([key, v]: any) => ({ key, ...v, groupId: 'infrastruktur' })),
    ...Object.entries(sosialRate).map(([key, v]: any) => ({ key, ...v, groupId: v.groupId || 'sosial' })),
];

export class PusatKeputusanPembangunan {
  /**
   * Main thinking loop for NPC Construction.
   */
  static async pikiurkan(countryNameEn: string) {
    const session = timeStorage.getState();
    const gameDate = session.gameDate;
    const budget = aiBudgetStorage.getBudget(countryNameEn);
    const stocks = aiProductionStorage.getStocks(countryNameEn);
    const deltas = aiBuildingStorage.getAllBuildingDeltas(countryNameEn);
    const queue = aiBuildingStorage.getQueue(countryNameEn);

    // Don't build if queue is already full (limit to 2 concurrent projects for AI)
    if (queue.length >= 2) return;

    // Pick a category to focus on this cycle (Rotation)
    const categoryChance = Math.random();
    let category = "1_produksi";
    if (categoryChance > 0.6) category = "2_produksi_militer";
    if (categoryChance > 0.8) category = "3_tempat_umum";

    const fetchUrl = `/game/components/AI_logic/5_AI_Pembangunan/routes/${category}`;
    
    // Simplistic options filtering for the brain
    const options = ALL_OPTIONS.filter(o => {
        if (category === "1_produksi") return !['militer', 'infrastruktur', 'pendidikan', 'kesehatan', 'hukum', 'olahraga', 'hiburan', 'komersial'].includes(o.groupId);
        if (category === "2_produksi_militer") return o.groupId === "militer";
        if (category === "3_tempat_umum") return ['infrastruktur', 'pendidikan', 'kesehatan', 'hukum', 'olahraga', 'hiburan', 'komersial'].includes(o.groupId);
        return false;
    });

    try {
        const response = await fetch(fetchUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                negara: countryNameEn,
                budget,
                stocks,
                options,
                metrics: { power_surplus: 1000, food_surplus: 500 } // Hardcoded for prototype, can be expanded
            })
        });

        const result = await response.json();

        if (result.decision === "EXECUTE") {
            const chosen = ALL_OPTIONS.find(o => o.key === result.building_key);
            if (chosen) {
                await EksekutorPembangunanAI.laksanakan(countryNameEn, result.building_key, chosen, gameDate);
            }
        }
    } catch (err) {
        console.error(`[AI Construction] Decision error for ${countryNameEn}:`, err);
    }
  }
}
