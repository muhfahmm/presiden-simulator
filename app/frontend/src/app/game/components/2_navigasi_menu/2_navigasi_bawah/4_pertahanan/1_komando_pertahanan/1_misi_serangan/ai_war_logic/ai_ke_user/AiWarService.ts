"use client";

import { countries as centersData } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { getGlobalRelationMatrix, normalizeId } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";
import { aiDefenseStorage } from "@/app/game/components/AI_logic/6_AI_pertahanan/antarmuka_data_pertahanan/AIDefenseStorage";
import { calculateTotalMilitaryPower } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/3_armada_militer/kekuatanmiliter";
import { luncurkanInvasi } from "../../modals_pilih_negara/logic/InvasiLogic";
import { warStorage } from "../WarStorage";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { nuclearStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/5_program_nuklir/nuclearStorage";

class AiWarService {
  /**
   * Simulasi harian serangan NPC vs User.
   */
  public processUserInvasions(currentDate: Date, userCountryId: string) {
    // 9. TOTAL GLOBAL PROBABILITY (20% Chance Per Day for User to be targeted)
    if (Math.random() > 0.20) return;

    const matrix = getGlobalRelationMatrix();
    const normalizedUser = normalizeId(userCountryId);
    
    for (const sourceId of Object.keys(matrix)) {
      if (sourceId === normalizedUser) continue;
      const entry = matrix[sourceId][normalizedUser];
      
      // KRITERIA: Hubungan sangat buruk (< 10)
      if (!entry || entry.s > 10) continue; 

      // 1. FILTER PAKTA NON-AGRESI
      if (entry.p === 1) continue;

      const existing = warStorage.getInvasions().find(inv => 
        inv.source === sourceId && inv.target === normalizedUser
      );
      if (existing) continue;

      // 3. WAR FATIGUE
      const isSourceInWar = warStorage.getInvasions().some(inv => inv.source === sourceId);
      if (isSourceInWar) continue;

      // Peluang dasar serangan terhadap user
      if (Math.random() > 0.10) continue;

      this.initiateAttackOnUser(sourceId, userCountryId, currentDate, entry);
    }
  }

  private initiateAttackOnUser(sourceId: string, userCountryId: string, currentDate: Date, entry: any) {
    const sourceCountry = centersData.find(c => normalizeId(c.name_id) === sourceId);
    const userCountry = centersData.find(c => normalizeId(c.name_id) === normalizeId(userCountryId));

    if (!sourceCountry || !userCountry) return;

    // 4. KESIAPAN ANGGARAN
    const budget = aiBudgetStorage.getBudget(sourceCountry.name_en);
    if (budget < 80000) return; // Menyerang pemain butuh budget lebih besar (siap logistik)

    // 8. DETERENSI NUKLIR (User Power)
    const userNuclearStatus = nuclearStorage.getStatus();
    if (userNuclearStatus === 'active') {
       if (Math.random() < 0.9) return; // AI sangat takut menyerang pemain yang punya nuklir (90% batal)
    }

    const aiDefense = aiDefenseStorage.getData(sourceCountry.name_en);

    // 2. FILTER PERBANDINGAN KEKUATAN
    const sourcePower = calculateTotalMilitaryPower(sourceCountry as any, aiDefense.defenseDeltas).total;
    // Kita asumsikan pemain punya defense default jika tidak ada storage khusus
    const userPower = calculateTotalMilitaryPower(userCountry as any, {}).total; 

    if (sourcePower < userPower * 1.1) return; // AI hanya berani menyerang user jika merasa lebih kuat 10%

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

    // Kurangi budget AI
    aiBudgetStorage.updateBudgetManual(sourceCountry.name_en, -80000);

    warStorage.addInvasion({
      id: `ai-to-user-${sourceId}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
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
