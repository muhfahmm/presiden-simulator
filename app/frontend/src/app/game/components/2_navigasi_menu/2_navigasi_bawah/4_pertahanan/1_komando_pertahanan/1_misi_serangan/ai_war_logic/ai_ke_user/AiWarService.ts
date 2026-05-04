"use client";

import { countries as centersData } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { getGlobalRelationMatrix, normalizeId } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";
import { aiDefenseStorage } from "@/app/game/components/AI_logic/6_AI_pertahanan/antarmuka_data_pertahanan/AIDefenseStorage";
import { luncurkanInvasi } from "../../modals_pilih_negara/logic/InvasiLogic";
import { warStorage } from "../WarStorage";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

class AiWarService {
  /**
   * Simulasi harian serangan NPC vs User.
   */
  public processUserInvasions(currentDate: Date, userCountryId: string) {
    const matrix = getGlobalRelationMatrix();
    const normalizedUser = normalizeId(userCountryId);
    
    for (const sourceId of Object.keys(matrix)) {
      if (sourceId === normalizedUser) continue;
      const entry = matrix[sourceId][normalizedUser];
      if (!entry || entry.s > 10) continue; 

      const existing = warStorage.getInvasions().find(inv => 
        inv.source === sourceId && inv.target === normalizedUser
      );
      if (existing) continue;

      if (Math.random() > 0.03) continue;

      this.initiateAttackOnUser(sourceId, userCountryId, currentDate);
    }
  }

  private initiateAttackOnUser(sourceId: string, userCountryId: string, currentDate: Date) {
    const sourceCountry = centersData.find(c => normalizeId(c.name_id) === sourceId);
    const userCountry = centersData.find(c => normalizeId(c.name_id) === normalizeId(userCountryId));

    if (!sourceCountry || !userCountry) return;

    const aiDefense = aiDefenseStorage.getData(sourceCountry.name_en);
    const deployments: Record<string, number> = {};
    
    if (sourceCountry.armada_militer?.darat) {
      Object.keys(sourceCountry.armada_militer.darat).forEach(key => {
        const count = (sourceCountry.armada_militer.darat as any)[key] || 0;
        const aiCount = aiDefense.defenseDeltas[key] || 0;
        deployments[key] = Math.floor((count + aiCount) * 0.4);
      });
    }
    const totalInfantry = (sourceCountry.armada_militer.barak || 0) * 10000;
    deployments['infanteri'] = Math.floor(totalInfantry * 0.4);

    const { units, path } = luncurkanInvasi(sourceCountry as any, userCountry as any, deployments);
    if (!path) return;

    warStorage.addInvasion({
      id: `ai-to-user-${sourceId}-${Date.now()}`,
      source: sourceId,
      target: normalizeId(userCountryId),
      units,
      path,
      progress: 0,
      arrived: false,
      startDate: currentDate.toISOString(),
      isAiVsUser: true
    });

    inboxStorage.addMessage({
      source: 'Intelijen Pertahanan',
      subject: `🚨 DARURAT: Invasi Terdeteksi dari ${sourceCountry.name_id}!`,
      content: `Satelit militer mendeteksi mobilisasi besar-besaran armada ${sourceCountry.name_id} menuju wilayah kita.\n\n⚠️ Status: INVASI AKTIF\n📍 Target: Ibu Kota\n⏱️ Estimasi Tiba: ${path.estimatedTime}`,
      time: currentDate.toISOString().split('T')[0],
      priority: 'high',
      category: 'defense',
    });
  }
}

export const aiWarService = new AiWarService();
