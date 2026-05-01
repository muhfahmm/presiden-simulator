"use client"

import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiBuildingStorage } from "../antarmuka_data_pembangunan/AIBuildingStorage";
import { aiProductionStorage } from "../antarmuka_data_pembangunan/AIProductionStorage";
import { getBuildingRequirement } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/1-produksi/MaterialRequirement";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";
import { addDays, formatGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { countries } from "@/app/database/data/negara/index";

export class EksekutorPembangunanAI {
  /**
   * Start a construction project for an NPC.
   */
  static async laksanakan(countryNameEn: string, buildingKey: string, buildingData: any, gameDate: Date, currentCount: number, quantity: number = 1) {
    const reqs = getBuildingRequirement(buildingKey);
    const materialReqs = {
      "5_pabrik_semen": (reqs.beton || 0) * quantity,
      "4_smelter": (reqs.baja || 0) * quantity,
      "6_penggergajian_kayu": (reqs.kayu || 0) * quantity
    };

    // 2. Prices for Virtual Purchase
    const MATERIAL_PRICES: Record<string, number> = {
      "5_pabrik_semen": 250,
      "4_smelter": 5000,
      "6_penggergajian_kayu": 150
    };

    // 3. Check physical stocks first
    const currentStocks = aiProductionStorage.getStocks(countryNameEn);
    let extraMaterialCost = 0;
    const missingMaterials: string[] = [];

    Object.entries(materialReqs).forEach(([key, needed]) => {
      const has = currentStocks[key] || 0;
      if (has < needed) {
        const defisit = needed - has;
        extraMaterialCost += defisit * (MATERIAL_PRICES[key] || 0);
        missingMaterials.push(`${key}: ${defisit.toLocaleString()}`);
      }
    });

    // 4. Calculate Total Financial Requirement
    const buildingCost = Number(buildingData.biaya_pembangunan || 0) * quantity;
    const totalRequiredBudget = buildingCost + extraMaterialCost;
    const currentBudget = aiBudgetStorage.getBudget(countryNameEn);

    if (currentBudget < totalRequiredBudget) {
      console.warn(`[AI Pembangunan] ${countryNameEn} failed: Insufficient Budget (${currentBudget.toLocaleString()} < ${totalRequiredBudget.toLocaleString()})`);
      return false;
    }

    // 5. Execution: Physical Deduction or Virtual Purchase
    if (extraMaterialCost === 0) {
      // We have enough physical stock
      aiProductionStorage.deductStocks(countryNameEn, materialReqs);
      (aiBudgetStorage as any).updateBudgetManual(countryNameEn, -buildingCost);
      console.log(`[AI Pembangunan] ${countryNameEn} used warehouse stocks to build ${buildingData.label}.`);
    } else {
      // Virtual Purchase: Use cash to buy missing materials
      const partialDeduction: Record<string, number> = {};
      Object.entries(materialReqs).forEach(([key, needed]) => {
        const has = currentStocks[key] || 0;
        partialDeduction[key] = Math.min(has, needed);
      });

      aiProductionStorage.deductStocks(countryNameEn, partialDeduction);
      (aiBudgetStorage as any).updateBudgetManual(countryNameEn, -totalRequiredBudget);
      console.log(`[AI Pembangunan] ${countryNameEn} BOUGHT materials for ${extraMaterialCost.toLocaleString()} to build ${buildingData.label}. Missing: ${missingMaterials.join(', ')}`);
    }

    // 6. Add to Construction Queue
    const buildTime = buildingData.waktu_pembangunan || 30;
    const endDate = addDays(gameDate, buildTime).getTime();

    aiBuildingStorage.addToQueue(countryNameEn, {
      buildingKey: buildingKey,
      label: buildingData.label,
      sector: buildingData.groupId,
      startDate: gameDate.getTime(),
      endDate: endDate,
      waktu_pembangunan: buildTime,
      quantity: quantity
    });

    // 7. News Announcement (Limited to 10 per game day to save CPU/UI)
    const dateKey = formatGameDate(gameDate);

    if (newsStorage.canAddNews('construction', dateKey)) {
      const displayLabel = buildingData.deskripsi || buildingData.label || buildingKey;
      const displaySector = (buildingData.groupId || 'umum').replace(/_/g, " ");

      // Ambil nama dalam Bahasa Indonesia
      const countryInfo = countries.find(c => c.name_en === countryNameEn);
      const countryNameId = countryInfo?.name_id || countryNameEn;
      
      const startCount = currentCount || 0;
      const endCount = startCount + quantity;
      const transitionText = `(${startCount} ke ${endCount})`;

      newsStorage.addNews({
        source: countryNameId,
        subject: `Pembangunan: ${displayLabel} ${transitionText}`,
        content: `Pemerintah ${countryNameId} memulai pembangunan ${quantity} unit ${displayLabel} ${transitionText}. Total estimasi biaya: ${totalRequiredBudget.toLocaleString()} EM. Sektor: ${displaySector}.`,
        category: "construction",
        time: dateKey,
        priority: buildingCost > 50000000 ? 'high' : 'medium'
      });
      console.log(`[AI NEWS] Pembangunan ${countryNameEn} ditayangkan di Berita. Sektor: ${displaySector}`);
    } else {
      console.log(`[AI NEWS] Pembangunan ${countryNameEn} diproses secara senyap (Limit harian tercapai).`);
    }

    console.log(`[AI Pembangunan] ${countryNameEn} started building ${buildingData.label}. Finishes on: ${formatGameDate(new Date(endDate))}`);
    return true;
  }

  /**
   * Background checker: Finalize completed AI construction projects.
   */
  static checkCompletion(gameDate: Date) {
    const now = gameDate.getTime();
    
    countries.forEach(country => {
      const countryName = country.name_en;
      const queue = aiBuildingStorage.getQueue(countryName);
      
      if (queue.length === 0) return;

      const completed = queue.filter(item => item.endDate <= now);
      
      if (completed.length > 0) {
        // Collect and finalize all completed projects atomically
        aiBuildingStorage.completeProjects(countryName, completed);
        
        console.log(`[AI CONSTRUCTION] ${countryName} finalized ${completed.length} project(s).`);
      }
    });
  }
}


