"use client";

import { countries as centersData } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { getGlobalRelationMatrix, normalizeId } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";
import { aiDefenseStorage } from "@/app/game/components/AI_logic/6_AI_pertahanan/antarmuka_data_pertahanan/AIDefenseStorage";
import { calculateTotalMilitaryPower } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/3_armada_militer/kekuatanmiliter";
import { luncurkanInvasi } from "../../modals_pilih_negara/logic/InvasiLogic";
import { warStorage, ActiveInvasion } from "../WarStorage";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";

import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { nuclearStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/5_program_nuklir/nuclearStorage";

class GlobalAiWarService {
  /**
   * Simulasi harian serangan NPC vs NPC.
   */
  public processDailyInvasions(currentDate: Date) {
    // 1. Gerakkan semua pasukan yang sedang berjalan (Progress)
    this.updateInvasionProgress();

    // 2. Cek peluang konflik baru (Filter Global 25%)
    if (Math.random() > 0.25) return;

    const matrix = getGlobalRelationMatrix();
    const allCountryIds = centersData.map(c => c.name_id.toLowerCase().trim());
    const activeInvasions = warStorage.getInvasions();
    
    // 5. GLOBAL TENSION MODIFIER
    let maxAttacks = 1;
    if (activeInvasions.length > 5) maxAttacks = 0; // Terlalu banyak perang, dunia butuh jeda
    if (activeInvasions.length > 3) maxAttacks = Math.random() < 0.1 ? 1 : 0;

    let attackCount = 0;

    for (const sourceId of allCountryIds) {
      if (attackCount >= maxAttacks) break;

      const sourceRelations = matrix[sourceId];
      if (!sourceRelations) continue;

      for (const targetId of allCountryIds) {
        if (sourceId === targetId) continue;
        const entry = sourceRelations[targetId];
        
        // KRITERIA DASAR: Hubungan sangat buruk
        if (!entry || entry.s > 15) continue; 

        // 1. FILTER PAKTA NON-AGRESI (Diplomatic Shield)
        if (entry.p === 1) continue; 

        // CEK APAKAH SUDAH ADA PERANG AKTIF ANTARA KEDUA NEGARA
        const existing = activeInvasions.find(inv => 
          (inv.source === sourceId && inv.target === targetId) ||
          (inv.source === targetId && inv.target === sourceId)
        );
        if (existing) continue;

        // 3. LOGIKA WAR FATIGUE (Kelelahan Perang)
        const isSourceInWar = activeInvasions.some(inv => inv.source === sourceId);
        if (isSourceInWar) continue; // Satu negara hanya bisa fokus pada satu front serangan

        // 7. FAKTOR JARAK GEOGRAFIS (Neighbor Priority)
        const sourceCountry = centersData.find(c => normalizeId(c.name_id) === sourceId);
        const targetCountry = centersData.find(c => normalizeId(c.name_id) === targetId);
        if (!sourceCountry || !targetCountry) continue;

        const distance = this.calculateDistance(
          { x: sourceCountry.lon, y: sourceCountry.lat },
          { x: targetCountry.lon, y: targetCountry.lat }
        );
        let baseChance = 0.05;
        if (distance < 1000) baseChance = 0.15; // Tetangga lebih rawan konflik
        if (distance > 5000) baseChance = 0.01; // Negara jauh jarang diserang

        if (Math.random() > baseChance) continue;

        this.initiateAiAttack(sourceId, targetId, currentDate, sourceCountry, targetCountry, entry);
        attackCount++;
        break;
      }
    }
  }

  private calculateDistance(c1: { x: number; y: number }, c2: { x: number; y: number }) {
    return Math.sqrt(Math.pow(c2.x - c1.x, 2) + Math.pow(c2.y - c1.y, 2));
  }

  private initiateAiAttack(sourceId: string, targetId: string, currentDate: Date, sourceCountry: any, targetCountry: any, entry: any) {
    // 4. KESIAPAN ANGGARAN (Economic Readiness)
    const budget = aiBudgetStorage.getBudget(sourceCountry.name_en);
    if (budget < 50000) return;

    // 8. DETERENSI NUKLIR (Nuclear Deterrence)
    const hasNuclear = targetCountry.militer_strategis?.status_nuklir || 
                      (targetCountry.militer_strategis?.operasi_strategis?.program_nuklir > 0);
    
    if (hasNuclear) { // Target punya senjata nuklir/reaktor besar
       if (Math.random() < 0.8) return; // 80% Peluang membatalkan serangan karena takut nuklir
    }

    const aiDefense = aiDefenseStorage.getData(sourceCountry.name_en);
    
    // 2. FILTER PERBANDINGAN KEKUATAN MILITER (Strategic Analysis)
    const sourcePower = calculateTotalMilitaryPower(sourceCountry as any, aiDefense.defenseDeltas).total;
    const targetDefense = aiDefenseStorage.getData(targetCountry.name_en);
    const targetPower = calculateTotalMilitaryPower(targetCountry as any, targetDefense.defenseDeltas).total;

    if (sourcePower * 1.3 < targetPower) return; // Penyerang tidak akan bunuh diri menyerang yang jauh lebih kuat

    const deployments: Record<string, number> = {};
    const deploymentRatio = 0.3 + (Math.random() * 0.3); // 30% - 60%

    if (sourceCountry.armada_militer?.darat) {
      Object.keys(sourceCountry.armada_militer.darat).forEach(key => {
        const count = (sourceCountry.armada_militer.darat as any)[key] || 0;
        const aiCount = aiDefense.defenseDeltas[key] || 0;
        deployments[key] = Math.floor((count + aiCount) * deploymentRatio);
      });
    }

    if (sourceCountry.armada_militer?.udara) {
      Object.keys(sourceCountry.armada_militer.udara).forEach(key => {
        const count = (sourceCountry.armada_militer.udara as any)[key] || 0;
        const aiCount = aiDefense.defenseDeltas[key] || 0;
        deployments[key] = Math.floor((count + aiCount) * deploymentRatio);
      });
    }

    const totalInfantry = (sourceCountry.armada_militer.barak || 0) * 10000;
    deployments['barak'] = Math.floor(totalInfantry * deploymentRatio); // luncurkanInvasi usually expects 'barak' for infantry

    const invasionId = `ai-${sourceId}-${targetId}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
    
    const { units, path } = luncurkanInvasi(
      sourceCountry as any, 
      targetCountry as any, 
      deployments,
      invasionId
    );
    
    if (!path || !units || units.length === 0) return;

    // Kurangi budget AI untuk biaya perang
    aiBudgetStorage.updateBudgetManual(sourceCountry.name_en, -50000);

    warStorage.addInvasion({
      id: invasionId,
      source: sourceId,
      target: targetId,
      units: units,
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

  /**
   * Menggerakkan semua unit yang sedang dalam perjalanan secara otomatis.
   */
  private updateInvasionProgress() {
    const invasions = warStorage.getInvasions();
    invasions.forEach(inv => {
      if (inv.progress < 1) {
        // Tambah progres harian antara 10% - 20%
        const dailyProgress = 0.1 + (Math.random() * 0.1);
        const newProgress = Math.min(1, inv.progress + dailyProgress);
        const isArrived = newProgress >= 1;
        
        warStorage.updateProgress(inv.id, newProgress, isArrived);
        
        if (isArrived) {
          console.log(`[WAR] Pasukan ${inv.source} telah tiba di ${inv.target}. Memulai fase pertempuran.`);
        }
      }
    });
  }
}

export const globalAiWarService = new GlobalAiWarService();
