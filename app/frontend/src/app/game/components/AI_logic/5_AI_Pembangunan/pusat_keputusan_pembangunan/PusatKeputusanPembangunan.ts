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
import { BUILDING_REQUIREMENTS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/1-produksi/MaterialRequirement";

// Helper to consolidate all building options
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

export class PusatKeputusanPembangunan {
  /**
   * Main thinking loop for NPC Construction.
   */
  static async pikiurkan(countryNameEn: string) {
    const session = timeStorage.getState();
    const gameDate = session.gameDate;
    const country = countries.find(c => c.name_en === countryNameEn);
    if (!country) return;

    const budget = aiBudgetStorage.getBudget(countryNameEn);
    const stocks = aiProductionStorage.getStocks(countryNameEn);
    const queue = aiBuildingStorage.getQueue(countryNameEn);

    // Don't build if queue is already full (limit to 2 concurrent projects for AI)
    if (queue.length >= 2) return;

    // STEP 1: SCAN NATIONAL STATUS
    let scanResult: any = null;
    try {
        const scanRes = await fetch(`/game/components/AI_logic/5_AI_Pembangunan/routes/pemantauan`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country_data: country })
        });
        scanResult = await scanRes.json();
    } catch (e) {
        console.error("[AI Scanner] Error:", e);
        return;
    }

    if (!scanResult || scanResult.error) return;

    const metrics = scanResult.metrics;
    
    // STEP 2: DETERMINE CATEGORY & SUB-SECTOR BASED ON NEEDS
    let category = "1_produksi";
    let subSector = "1_sektor_listrik";

    // Priority Heuristic
    if (metrics.power_surplus < 500) {
        category = "1_produksi";
        subSector = "1_sektor_listrik";
    } else if (metrics.housing_index < 95) {
        category = "3_tempat_umum";
        subSector = "8_hunian";
    } else if (metrics.health_index < 80) {
        category = "3_tempat_umum";
        subSector = "3_kesehatan";
    } else {
        // Diversify growth if basic needs are met
        const rand = Math.random();
        if (rand < 0.3) {
            category = "1_produksi";
            const sectors = ["2_sektor_mineral", "3_manufaktur", "4_sektor_peternakan", "5_sektor_agrikultur", "6_sektor_perikanan", "7_sektor_olahan_pangan", "8_sektor_farmasi"];
            subSector = sectors[Math.floor(Math.random() * sectors.length)];
        } else if (rand < 0.6) {
            category = "3_tempat_umum";
            const sectors = ["1_infrastruktur", "2_pendidikan", "4_hukum", "5_olahraga", "6_komersial", "7_hiburan"];
            subSector = sectors[Math.floor(Math.random() * sectors.length)];
        } else {
            category = "2_produksi_militer";
            subSector = "1_pabrik_militer";
        }
    }

    const fetchUrl = `/game/components/AI_logic/5_AI_Pembangunan/routes/${category}`;
    
    // Filter options for the specific category
    const options = ALL_OPTIONS.filter(o => {
        if (category === "1_produksi") return !['militer', 'infrastruktur', 'pendidikan', 'kesehatan', 'hukum', 'olahraga', 'hiburan', 'komersial', 'hunian'].includes(o.groupId);
        if (category === "2_produksi_militer") return o.groupId === "militer";
        if (category === "3_tempat_umum") return ['infrastruktur', 'pendidikan', 'kesehatan', 'hukum', 'olahraga', 'hiburan', 'komersial', 'hunian'].includes(o.groupId);
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
                metrics,
                sub_sector: subSector
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
