"use client"

import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { formatGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { religionStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/religionStorage";
import { BUDDHA_SATISFACTION_DAILY_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/6_buddha/1_plus/plus";
import { KONGHUCU_PRESS_FREEDOM_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/9_konghucu/2_minus/minus";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { AiHunianService } from "@/app/game/components/AI_logic/2_AI_Populasi/2_kebutuhan_hunian/AiHunianService";
import { PenurunanLogic } from "./logic/1_penurunan/penurunan_fiskal";
import { PeningkatanLogic } from "./logic/2_peningkatan/peningkatan_sosial";

export interface HappinessStats {
  value: number; // 0-100
  reasoning: string; // narrative explaining the current stat
  trend: "up" | "down" | "stable"; // trend indicator
  lastMonthlyUpdate: string | null; // e.g., "2026-1"
  taxScore?: number;
  priceScore?: number;
  taxImpact?: number;
  priceImpact?: number;
}

const STORAGE_KEY = "em_happiness_stats_v2";

const DEFAULT_STATS: HappinessStats = {
  value: 50,
  reasoning: "Tingkat kepuasan awal rakyat pada transisi pemerintahan.",
  trend: "stable",
  lastMonthlyUpdate: "2026-1"
};

export const happinessStorage = {
  clear: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("em_happiness_stats_v2");
      localStorage.removeItem("em_happiness_stats");
      localStorage.removeItem("em_last_month_budget");
    }
  },
  getStats: (): HappinessStats => {
    if (typeof window === 'undefined') return DEFAULT_STATS;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      happinessStorage.saveStats(DEFAULT_STATS);
      return DEFAULT_STATS;
    }
    return JSON.parse(stored);
  },

  saveStats: (stats: HappinessStats) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    setTimeout(() => window.dispatchEvent(new Event("happiness_updated")), 0);
  },

  /**
   * core logic mirrored from happiness_engine.py
   */
  recalculateMonthlyHappiness: async (currentDate: Date) => {
    const stats = happinessStorage.getStats();
    const currentMonthKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`;
    
    // Only update once per month (on the 1st)
    if (stats.lastMonthlyUpdate === currentMonthKey) return;

    // Get Policy Impacts from real-time engine
    const { priceImpact, taxImpact } = happinessStorage.getLiveImpacts();
    const totalImpact = priceImpact + taxImpact;

    // DRIFT LOGIC: Happiness drifts based on policy impact sum
    let newValue = Number((stats.value + totalImpact).toFixed(1));
    newValue = Math.max(1, Math.min(100, newValue)); 

    let trend: "up" | "down" | "stable" = "stable";
    if (totalImpact > 0.1) trend = "up";
    else if (totalImpact < -0.1) trend = "down";

    let newReasoning = "Kepuasan rakyat stabil sesuai kebijakan harga pasar dan tarif pajak.";
    if (trend === "up") newReasoning = `Tingkat kepercayaan membaik menjadi ${newValue}% karena kebijakan harga dan pajak yang pro-rakyat.`;
    if (trend === "down") newReasoning = `Keprotesan publik meningkat; kepuasan turun ke ${newValue}% akibat beban harga dan pajak yang tinggi.`;

    const updatedStats: HappinessStats = {
      value: newValue,
      reasoning: newReasoning,
      trend: trend,
      lastMonthlyUpdate: currentMonthKey,
      taxImpact: Number(taxImpact.toFixed(1)),
      priceImpact: Number(priceImpact.toFixed(1))
    };

    happinessStorage.saveStats(updatedStats);

    happinessStorage.saveStats(updatedStats);
 
    // Send Inbox Message (Official Report) - ONLY IF BELOW 25% (User request)
    if (newValue <= 25) {
      inboxStorage.addMessage({
        source: "Sekretariat Negara",
        subject: "PERINGATAN KRITIS: Indeks Kepuasan Rakyat",
        content: `PERINGATAN! Laporan menunjukkan indeks kepuasan rakyat telah mencapai titik kritis di level ${newValue}%. ${newReasoning}`,
        time: formatGameDate(currentDate),
        priority: "high"
      });
    }

    // Check for Critical and Game Over states
    if (newValue === 0) {
      setTimeout(() => window.dispatchEvent(new CustomEvent('happiness_gameover')), 0);
    } else if (newValue <= 10) {
      setTimeout(() => window.dispatchEvent(new CustomEvent('happiness_critical')), 0);
    }
  },

  getLiveImpacts: () => {
    if (typeof window === 'undefined') return { priceImpact: 0, taxImpact: 0 };
    
    const session = gameStorage.getSession();
    const countryName = session?.country || "Indonesia";
    const country = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];

    // Get Policy Impacts from modular logic
    const { impact: priceImpact } = PenurunanLogic.calculatePriceImpact(country);
    const { impact: taxImpact } = PenurunanLogic.calculateTaxImpact(country);

    return { priceImpact, taxImpact };
  },

  addDirectHappiness: (amount: number, reason: string) => {
    const stats = happinessStorage.getStats();
    let newValue = Number((stats.value + amount).toFixed(1));
    newValue = Math.max(1, Math.min(100, newValue));
    
    const updatedStats: HappinessStats = {
      ...stats,
      value: newValue,
      reasoning: reason,
      trend: amount > 0 ? "up" : amount < 0 ? "down" : stats.trend
    };
    
    happinessStorage.saveStats(updatedStats);
    
    happinessStorage.saveStats(updatedStats);
    
    // Notify via Inbox - ONLY IF BELOW 25% (User request)
    if (newValue <= 25) {
      inboxStorage.addMessage({
        source: "Sekretariat Negara",
        subject: "Update Kepuasan Rakyat (KRITIS)",
        content: reason,
        time: formatGameDate(new Date()),
        priority: "high"
      });
    }
  },

  /**
   * Dipanggil setiap hari game.
   * - Jika kepuasan < 40 (zona merah), berlaku decay harian extra berdasarkan intensitas pajak.
   * - Jika kepuasan >= 40, berlaku bonus/penalty kecil saja agar pajak tetap berasa dampaknya.
   *
   * Decay rate:
   *  pajak rata-rata <= 25%  → +0.1/hari (bonus kecil, pajak rendah)  
   *  pajak rata-rata <= 50%  →  0  (netral)
   *  pajak rata-rata <= 75%  → -0.2/hari (penalty)
   *  pajak rata-rata > 75%   → -0.5/hari (krisis)
   *  Jika kepuasan < 40, semua nilai dilipatduakan (darurat).
   */
  applyDailyHappinessDecay: (currentDate: Date) => {
    // [DEPRECATED] Logic moved to Go Backend. 
    // This frontend calculation is disabled to prevent data conflicts.
    // The happiness value is now authoritative from the server via SSE.
    return;
  },

  getInfraDetailedBreakdown: () => {
    return PeningkatanLogic.getInfrastructureBonus();
  }
};


function min(a: number, b: number) { return a < b ? a : b; }


