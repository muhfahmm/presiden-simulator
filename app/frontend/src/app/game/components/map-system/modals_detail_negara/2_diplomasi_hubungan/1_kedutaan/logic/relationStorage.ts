"use client"

/**
 * Penyimpanan Skor Hubungan Diplomatik yang Dinamis
 * Menyimpan perubahan skor hubungan di localStorage untuk kegigihan sesi game.
 */

import { allRelations } from "@/app/database/data/database_hubungan_antar_negara";
import { countries as centersData } from "@/app/database/data/negara/benua/index";
import { embassyStorage } from "./embassyStorage";
import { nonAggressionStorage } from "../../2_pakta_non_agresi/logic/nonAggressionStorage";
import { aliansiStorage } from "../../3_aliansi_pertahanan/logic/aliansiStorage";
import { relationDeltaStorage } from "../../8_hubungan_internasional/logic/relationDeltaStorage";
import { religionStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/religionStorage";

const RELATION_STORAGE_KEY = "em2_relation_scores";

export const relationStorage = {
  getRelationData: (): Record<string, number> => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem(RELATION_STORAGE_KEY);
    if (!stored) return {};
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse relation storage", e);
      return {};
    }
  },

  getRelationScore: (targetCountry: string, baseScore: number): number => {
    const data = relationStorage.getRelationData();
    const key = targetCountry.toLowerCase().trim();
    // Return stored score if exists, else fallback to base score from database
    return data[key] !== undefined ? data[key] : baseScore;
  },

  updateRelationScore: (targetCountry: string, delta: number, currentBase: number) => {
    if (typeof window === "undefined") return;
    const data = relationStorage.getRelationData();
    const key = targetCountry.toLowerCase().trim();
    const currentScore = relationStorage.getRelationScore(key, currentBase);
    
    // Calculate new score, potentially clamped between 0 and 100
    const newScore = Math.max(0, Math.min(100, currentScore + delta));
    
    // Deterioration Check (entered Red zone)
    if (newScore <= 49 && currentScore > 49) {
      const meta = relationStorage.getRelationMetadata(newScore);
      window.dispatchEvent(new CustomEvent("relation_alert", {
        detail: {
          countryId: key,
          newScore: newScore,
          status: meta.label,
          color: meta.hex
        }
      }));
    }

    data[key] = newScore;
    localStorage.setItem(RELATION_STORAGE_KEY, JSON.stringify(data));
    
    // Dispatch event to notify UI components
    window.dispatchEvent(new CustomEvent("relation_status_updated", { 
      detail: { targetCountry: key, newScore } 
    }));
  },

  updateAllRelationScores: (delta: number, playerCountry: string) => {
    if (typeof window === "undefined") return;
    const data = relationStorage.getRelationData();
    const normalizedPlayer = playerCountry.toLowerCase().trim();
    
    // Get all countries except the player
    const targetCountries = centersData.filter(c => c.name_id.toLowerCase().trim() !== normalizedPlayer);
    
    // Build initial base scores map for fallback
    const userRelations = (allRelations as any)[normalizedPlayer];
    const baseRelationMap = new Map<string, number>();
    if (Array.isArray(userRelations)) {
      userRelations.forEach((rel: any) => {
        if (rel.name) baseRelationMap.set(rel.name.toLowerCase().trim(), rel.relation);
      });
    }

    targetCountries.forEach(country => {
      const countryId = country.name_id.toLowerCase().trim();
      const baseScore = baseRelationMap.get(countryId) ?? 50;
      const currentScore = relationStorage.getRelationScore(countryId, baseScore);
      const newScore = Math.max(0, Math.min(100, currentScore + delta));
      
      // We don't dispatch 206 alerts at once (too noisy), 
      // but we update the storage
      data[countryId] = newScore;
    });

    localStorage.setItem(RELATION_STORAGE_KEY, JSON.stringify(data));
    
    // Notify UI that a batch update occurred
    window.dispatchEvent(new Event("relation_storage_updated"));
    window.dispatchEvent(new CustomEvent("relation_status_updated", { 
      detail: { targetCountry: "all", newScore: 0 } // Generic "all" flag
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
    localStorage.removeItem(RELATION_STORAGE_KEY);
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
   * Menormalisasi nama negara menjadi ID yang konsisten untuk digunakan sebagai key di storage.
   */
  normalizeTargetId: (name: string, centersData: any[]): string => {
    if (!name) return "";
    
    const geoJsonToIndo: Record<string, string> = {
      "The Bahamas": "bahama",
      "Democratic Republic of the Congo": "republik demokratik kongo",
      "Northern Cyprus": "siprus",
      "Czech Republic": "ceko",
      "Guinea Bissau": "guinea-bissau",
      "Equatorial Guinea": "guinea",
      "Macedonia": "makedonia utara",
      "Republic of Serbia": "republik serbia",
      "Swaziland": "eswatini",
      "East Timor": "timor-leste",
      "Turkey": "turki",
      "United Republic of Tanzania": "republik tanzania",
      "United States of America": "amerika serikat",
      "United States": "amerika serikat",
      "West Bank": "palestina",
      "Falkland Islands": "argentina",
      "Western Sahara": "maroko",
      "Somaliland": "somalia",
      "New Caledonia": "fiji",
      "Solomon Islands": "marshall",
      "United Kingdom": "inggris"
    };

    let normalized = name.trim();
    if (geoJsonToIndo[normalized]) {
      normalized = geoJsonToIndo[normalized];
    }

    const entry = centersData.find(c => 
      c.name_en?.toLowerCase() === normalized.toLowerCase() || 
      c.name_id?.toLowerCase() === normalized.toLowerCase()
    );

    return entry ? entry.name_id.toLowerCase().trim() : normalized.toLowerCase().trim();
  }
};

