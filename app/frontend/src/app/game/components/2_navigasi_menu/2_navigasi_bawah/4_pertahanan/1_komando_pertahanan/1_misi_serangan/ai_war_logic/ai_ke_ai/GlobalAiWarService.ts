"use client";

import { countries as centersData } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { getGlobalRelationMatrix, normalizeId } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";
import { aiDefenseStorage } from "@/app/game/components/AI_logic/6_AI_pertahanan/antarmuka_data_pertahanan/AIDefenseStorage";
import { calculateTotalMilitaryPower } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/3_armada_militer/kekuatanmiliter";
import { luncurkanInvasi } from "../../modals_pilih_negara/logic/InvasiLogic";
import { warStorage, ActiveInvasion } from "../WarStorage";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";

class GlobalAiWarService {
  /**
   * Simulasi harian serangan NPC vs NPC.
   */
  public processDailyInvasions(currentDate: Date) {
    const matrix = getGlobalRelationMatrix();
    const allCountryIds = centersData.map(c => c.name_id.toLowerCase().trim());
    
    let attackCount = 0;
    const MAX_ATTACKS_PER_DAY = 1;

    for (const sourceId of allCountryIds) {
      if (attackCount >= MAX_ATTACKS_PER_DAY) break;

      const sourceRelations = matrix[sourceId];
      if (!sourceRelations) continue;

      for (const targetId of allCountryIds) {
        if (sourceId === targetId) continue;
        const entry = sourceRelations[targetId];
        if (!entry || entry.s > 15) continue; 

        const existing = warStorage.getInvasions().find(inv => 
          (inv.source === sourceId && inv.target === targetId) ||
          (inv.source === targetId && inv.target === sourceId)
        );
        if (existing) continue;

        if (Math.random() > 0.05) continue;

        this.initiateAiAttack(sourceId, targetId, currentDate);
        attackCount++;
        break;
      }
    }
  }

  private initiateAiAttack(sourceId: string, targetId: string, currentDate: Date) {
    const sourceCountry = centersData.find(c => normalizeId(c.name_id) === sourceId);
    const targetCountry = centersData.find(c => normalizeId(c.name_id) === targetId);

    if (!sourceCountry || !targetCountry) return;

    const aiDefense = aiDefenseStorage.getData(sourceCountry.name_en);
    const deployments: Record<string, number> = {};
    
    if (sourceCountry.armada_militer?.darat) {
      Object.keys(sourceCountry.armada_militer.darat).forEach(key => {
        const count = (sourceCountry.armada_militer.darat as any)[key] || 0;
        const aiCount = aiDefense.defenseDeltas[key] || 0;
        deployments[key] = Math.floor((count + aiCount) * 0.3);
      });
    }
    const totalInfantry = (sourceCountry.armada_militer.barak || 0) * 10000;
    deployments['infanteri'] = Math.floor(totalInfantry * 0.3);

    const { units, path } = luncurkanInvasi(sourceCountry as any, targetCountry as any, deployments);
    if (!path) return;

    warStorage.addInvasion({
      id: `ai-${sourceId}-${targetId}-${Date.now()}`,
      source: sourceId,
      target: targetId,
      units,
      path,
      progress: 0,
      arrived: false,
      startDate: currentDate.toISOString(),
    });

    newsStorage.addNews({
      source: sourceCountry.name_id,
      subject: "KETEGANGAN MILITER MENINGKAT",
      content: `${sourceCountry.name_id} telah meluncurkan operasi militer skala besar menuju perbatasan ${targetCountry.name_id}. Jalur invasi telah terdeteksi oleh radar internasional.`,
      category: "conflict",
      time: currentDate.toISOString().split('T')[0],
      priority: "high"
    });
  }
}

export const globalAiWarService = new GlobalAiWarService();
