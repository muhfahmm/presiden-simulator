"use client"

import { aiBudgetStorage } from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiHappinessStorage } from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/6_Kepuasan/AIHappinessStorage";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";
import { aiPublicEventStorage } from "../antarmuka_data_acara/AIPublicEventStorage";
import { DATA_ACARA, Acara } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan/acara/acaraStorage";
import { formatGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

export class EksekutorAcaraNasional {
  /**
   * Execute the chosen event for an NPC nation.
   */
  static async laksanakan(countryNameEn: string, eventId: string, gameDate: Date) {
    const acara = DATA_ACARA.find(a => a.id === eventId);
    if (!acara) return false;

    // 1. Deduct AI Budget
    const currentBudget = aiBudgetStorage.getBudget(countryNameEn);
    if (currentBudget < acara.cost) {
      console.warn(`[AI Event] ${countryNameEn} failed to execute ${acara.name}: Insufficient Budget`);
      return false;
    }
    
    // Update budget storage
    // NOTE: aiBudgetStorage needs an updateManual method or we use updateAll logic.
    // For now, let's assume we can modify the raw data or add a helper.
    // I will add a helper to aiBudgetStorage in the next step.
    (aiBudgetStorage as any).updateBudgetManual(countryNameEn, -acara.cost);

    // 2. Add Happiness Boost
    const currentHappiness = aiHappinessStorage.getSatisfaction(countryNameEn);
    const newHappiness = Math.min(100, currentHappiness + acara.happinessBoost);
    aiHappinessStorage.updateSatisfaction(countryNameEn, newHappiness);

    // 3. Save History for Cooldown
    aiPublicEventStorage.saveExecution(countryNameEn, eventId, formatGameDate(gameDate));

    // 4. Publish to Global News (Berita)
    newsStorage.addNews({
      source: countryNameEn,
      subject: `Penyelenggaraan ${acara.name}`,
      content: `Pemerintah ${countryNameEn} resmi membuka ${acara.name} hari ini. Acara ini diharapkan dapat meningkatkan kesejahteraan dan kebahagiaan warga negara tersebut secara signifikan.`,
      category: "global",
      time: formatGameDate(gameDate),
      priority: acara.happinessBoost > 15 ? 'high' : 'medium'
    });

    console.log(`[AI Event] ${countryNameEn} successfully executed ${acara.name}. Happiness boost: +${acara.happinessBoost}%`);
    return true;
  }
}
