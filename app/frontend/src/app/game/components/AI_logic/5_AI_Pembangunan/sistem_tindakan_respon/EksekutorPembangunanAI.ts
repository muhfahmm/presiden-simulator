"use client"

import { aiBudgetStorage } from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiBuildingStorage } from "../antarmuka_data_pembangunan/AIBuildingStorage";
import { aiProductionStorage } from "../antarmuka_data_pembangunan/AIProductionStorage";
import { getBuildingRequirement } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/1-produksi/MaterialRequirement";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";
import { addDays, formatGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

export class EksekutorPembangunanAI {
  /**
   * Start a construction project for an NPC.
   */
  static async laksanakan(countryNameEn: string, buildingKey: string, buildingData: any, gameDate: Date) {
    
    // 1. Calculate Requirements
    const reqs = getBuildingRequirement(buildingKey);
    const materialReqs = {
      "5_pabrik_semen": reqs.beton || 0,
      "4_smelter": reqs.baja || 0,
      "6_penggergajian_kayu": reqs.kayu || 0
    };

    // 2. Check Budget
    const cost = Number(buildingData.biaya_pembangunan || 0);
    const currentBudget = aiBudgetStorage.getBudget(countryNameEn);
    if (currentBudget < cost) {
      console.warn(`[AI Pembangunan] ${countryNameEn} failed: Insufficient Budget for ${buildingKey}`);
      return false;
    }

    // 3. Check & Deduct Materials
    const successDeduct = aiProductionStorage.deductStocks(countryNameEn, materialReqs);
    if (!successDeduct) {
      console.warn(`[AI Pembangunan] ${countryNameEn} failed: Insufficient Materials for ${buildingKey}`);
      return false;
    }

    // 4. Deduct Budget
    (aiBudgetStorage as any).updateBudgetManual(countryNameEn, -cost);

    // 5. Add to Construction Queue
    const buildTime = buildingData.waktu_pembangunan || 30;
    const endDate = addDays(gameDate, buildTime).getTime();

    aiBuildingStorage.addToQueue(countryNameEn, {
      buildingKey: buildingKey,
      label: buildingData.label,
      sector: buildingData.groupId,
      startDate: gameDate.getTime(),
      endDate: endDate,
      waktu_pembangunan: buildTime
    });

    // 6. News Announcement (only for significant projects)
    if (cost > 1000000 || buildingData.groupId === 'kelistrikan') {
      newsStorage.addNews({
        source: countryNameEn,
        subject: `Proyek Strategis: ${buildingData.label}`,
        content: `Pemerintah ${countryNameEn} hari ini resmi memulai pembangunan ${buildingData.label}. Proyek infrastruktur ini merupakan bagian dari rencana pembangunan nasional jangka menengah untuk meningkatkan kapasitas ekonomi.`,
        category: "construction",
        time: formatGameDate(gameDate),
        priority: 'medium'
      });
    }

    console.log(`[AI Pembangunan] ${countryNameEn} started building ${buildingData.label}. Finishes on: ${formatGameDate(new Date(endDate))}`);
    return true;
  }
}
