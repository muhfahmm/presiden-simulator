"use client"
import { updateMatrixScore, updateMatrixScoresBatch, getRelationScore } from "@/app/game/logic/ai/ai_diplomacy_engine/services/MatrixHandler";

/**
 * Penyimpanan Skor Hubungan Diplomatik yang Dinamis
 * Menyimpan perubahan skor hubungan di localStorage untuk kegigihan sesi game.
 */

import { countries as centersData } from "@/app/database/data/negara/benua/index";
import { embassyStorage } from "./embassyStorage";
import { nonAggressionStorage } from "../../2_pakta_non_agresi/logic/nonAggressionStorage";
import { aliansiStorage } from "../../3_aliansi_pertahanan/logic/aliansiStorage";
import { relationDeltaStorage } from "../../8_hubungan_internasional/logic/relationDeltaStorage";
import { religionStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/religionStorage";
import { getGlobalRelationMatrix, saveGlobalRelationMatrix } from "@/app/game/logic/ai/ai_diplomacy_engine/services/MatrixHandler";

const RELATION_STORAGE_KEY = "em_relation_scores";

export const relationStorage = {
  getRelationData: (): Record<string, number> => {
    if (typeof window === "undefined") return {};
    const matrix = getGlobalRelationMatrix();
    const flat: Record<string, number> = {};
    
    Object.keys(matrix).forEach(sourceId => {
      const targets = matrix[sourceId];
      Object.keys(targets).forEach(targetId => {
        flat[`${sourceId}:${targetId}`] = targets[targetId].s;
      });
    });
    
    return flat;
  },

  // Note: getRelationScore is now imported from MatrixHandler to break circular dependency
  getRelationScore: getRelationScore,

  updateRelationScore: (targetCountry: string, delta: number, currentBase: number, sourceCountry?: string) => {
    if (typeof window === "undefined") return;
    
    // Determining the source key (defaulting to current player session if possible)
    let sourceKey = sourceCountry;
    if (!sourceKey) {
      const sessionRaw = localStorage.getItem("game_session");
      if (sessionRaw) {
        try {
          sourceKey = JSON.parse(sessionRaw).country;
        } catch(e) {}
      }
    }
    
    const finalSourceKey = sourceKey || "player";
    const currentScore = relationStorage.getRelationScore(targetCountry, currentBase, finalSourceKey);
    
    // Calculate new score, clamped between 0 and 100
    const newScore = Math.max(0, Math.min(100, currentScore + delta));
    
    // Save in Matrix structure (Normalization is handled by updateMatrixScore)
    updateMatrixScore(finalSourceKey, targetCountry, newScore);
    
    // Dispatch local alerts if needed (Red zone check)
    if (newScore <= 49 && currentScore > 49) {
      const meta = relationStorage.getRelationMetadata(newScore);
      window.dispatchEvent(new CustomEvent("relation_alert", {
        detail: {
          countryId: targetCountry,
          newScore: newScore,
          status: meta.label,
          color: meta.hex,
          sourceId: finalSourceKey
        }
      }));
    }
  },

  updateAllRelationScores: (delta: number, playerCountry: string) => {
    const normalizedPlayer = playerCountry.toLowerCase().trim();
    
    // Get all countries except the player
    const targetCountries = centersData.filter(c => c.name_id.toLowerCase().trim() !== normalizedPlayer);
    
    const updates: Record<string, number> = {};

    targetCountries.forEach(country => {
      const countryId = country.name_id.toLowerCase().trim();
      const currentScore = relationStorage.getRelationScore(countryId, 50, normalizedPlayer);
      const newScore = Math.max(0, Math.min(100, currentScore + delta));
      updates[countryId] = newScore;
    });

    // Save in Matrix structure (Consolidated Batch)
    updateMatrixScoresBatch(normalizedPlayer, updates);
    
    // Notify UI that a batch update occurred
    window.dispatchEvent(new Event("relation_storage_updated"));
    window.dispatchEvent(new CustomEvent("relation_status_updated", { 
      detail: { targetCountry: "all", sourceCountry: normalizedPlayer, newScore: 0 } 
    }));
  },

  /**
   * Proses drift hubungan harian untuk SEMUA negara.
   * Dipanggil setiap pergantian hari game.
   * - Punya kedubes: hubungan naik 0.1%
   * - Tidak punya kedubes: hubungan turun 0.1%
   */
  processDailyDrift: async () => {
    // Legacy drift disabled to prevent conflicts with AI Global Engine.
    // ALL diplomatic processing is now handled by AiGlobalDiplomacy.ts
    console.log("[STORAGE] Legacy drift call ignored.");
  },

  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(RELATION_STORAGE_KEY); // Clean up legacy key
    localStorage.removeItem("em_global_relation_matrix");
    // Dispatch event to clear any cached UI states
    window.dispatchEvent(new Event("relation_storage_cleared"));
  },

  /**
   * Mendapatkan label dan warna UI berdasarkan skor hubungan (5-tier sistem).
   */
  getRelationMetadata: (score: number) => {
    if (score <= 25) return { 
      label: "Sangat Buruk", 
      color: "text-red-600", 
      labelFull: "Sangat Buruk / Konflik",
      bg: "bg-red-600/10",
      border: "border-red-600/30",
      hex: "#dc2626"
    };
    if (score <= 49) return { 
      label: "Buruk", 
      color: "text-red-400", 
      labelFull: "Buruk",
      bg: "bg-red-400/10",
      border: "border-red-400/30",
      hex: "#f87171"
    };
    if (score <= 69) return { 
      label: "Netral", 
      color: "text-yellow-500", 
      labelFull: "Netral",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      hex: "#eab308"
    };
    if (score <= 79) return { 
      label: "Baik", 
      color: "text-green-400", 
      labelFull: "Baik",
      bg: "bg-green-400/10",
      border: "border-green-400/30",
      hex: "#4ade80"
    };
    return { 
      label: "Cukup Baik", 
      color: "text-emerald-500", 
      labelFull: "Cukup Baik / Aliansi",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      hex: "#10b981"
    };
  },

  /**
   * Menghitung skor akhir termasuk bonus keanggotaan Dewan Keamanan PBB (20%).
   */
  calculateFinalScore: (rawScore: number, isUNSCMember: boolean): number => {
    const finalScore = isUNSCMember ? Math.min(100, rawScore * 1.2) : rawScore;
    return Number(finalScore.toFixed(2));
  },

  /**
   * Menormalisasi nama negara menjadi ID yang konsisten.
   * DEPRECATED: Gunakan MatrixHandler.normalizeId sebagai gantinya.
   */
  normalizeTargetId: (name: string, centersData: any[]): string => {
    const { normalizeId } = require("@/app/game/logic/ai/ai_diplomacy_engine/services/MatrixHandler");
    return normalizeId(name);
  }
};

/**
 * SSE INTEGRATION: Listen for server-authoritative matrix updates
 * This is placed here to ensure it's loaded as part of the core relation storage logic.
 */
if (typeof window !== 'undefined') {
  window.addEventListener('relation_matrix_sync', (e: any) => {
    const serverMatrix = e.detail;
    if (!serverMatrix) return;

    // 1. Sync AI Global Matrix
    const currentMatrix = getGlobalRelationMatrix();
    const storedDay = typeof window !== 'undefined' ? localStorage.getItem("em_last_sync_day") : "0";
    const dayCounter = storedDay ? Number(storedDay) : 0;
    
    // CRITICAL: Overwrite ONLY if it's an explicit reset or a fresh session.
    // Removed 'dayCounter <= 2' to prevent it from wiping out AI drift in early game.
    const isReset = e.detail.resetTriggered || (typeof window !== 'undefined' && localStorage.getItem("em_fresh_session") === "true");
    
    // Deep merge to ensure AI data is preserved while server updates are integrated
    const mergedMatrix = isReset ? { ...serverMatrix } : { ...currentMatrix };
    if (!isReset) {
      Object.keys(serverMatrix).forEach(source => {
        mergedMatrix[source] = { ...mergedMatrix[source], ...serverMatrix[source] };
      });
    }
    saveGlobalRelationMatrix(mergedMatrix);

    // 2. Sync scores to relationStorage for UI compatibility
    let relationData = relationStorage.getRelationData();
    if (isReset) {
      console.log("[RelationStorage] Fresh Reset detected - dropping all old memory scores.");
      relationData = {}; // Clear memory immediately
    }
    
    let changed = false;

    Object.keys(serverMatrix).forEach(sourceId => {
      const targets = serverMatrix[sourceId];
      Object.keys(targets).forEach(targetId => {
        const entry = targets[targetId];
        const compositeKey = `${sourceId}:${targetId}`;
        
        // Log specific ones for verification
        if (targetId === "malaysia" || targetId === "india" || targetId === "arab saudi" || targetId === "amerika serikat") {
           console.log(`[RelationSync] ${sourceId}:${targetId} -> ${entry.s.toFixed(2)}`);
        }

        if (relationData[compositeKey] !== entry.s) {
          relationData[compositeKey] = entry.s;
          changed = true;
        }
      });
    });

    // Redundant flat storage save removed to fix QuotaExceededError
    // RelationStorage now pulls directly from getGlobalRelationMatrix()
    
    if (changed) {
      // Notify other systems that relations have changed
      window.dispatchEvent(new Event("relation_storage_updated"));
      window.dispatchEvent(new Event("relation_status_updated"));
      console.log("[RelationStorage] Local scores synced from matrix.");
    }
  });
}

