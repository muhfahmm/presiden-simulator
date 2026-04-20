"use client"

import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { formatGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { religionStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/religionStorage";
import { BUDDHA_SATISFACTION_DAILY_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/6_buddha/1_plus/plus";
import { KONGHUCU_PRESS_FREEDOM_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/9_konghucu/2_minus/minus";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { AiHunianService } from "../../../AI_logic/2_AI_Populasi/2_kebutuhan_hunian/AiHunianService";

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

const STORAGE_KEY = "em4_happiness_stats_v2";

const DEFAULT_STATS: HappinessStats = {
  value: 50,
  reasoning: "Tingkat kepuasan awal rakyat pada transisi pemerintahan.",
  trend: "stable",
  lastMonthlyUpdate: "2026-1"
};

export const happinessStorage = {
  clear: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("em4_happiness_stats_v2");
      localStorage.removeItem("em4_happiness_stats");
      localStorage.removeItem("em4_last_month_budget");
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
    window.dispatchEvent(new Event("happiness_updated"));
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
      window.dispatchEvent(new CustomEvent('happiness_gameover'));
    } else if (newValue <= 10) {
      window.dispatchEvent(new CustomEvent('happiness_critical'));
    }
  },

  getLiveImpacts: () => {
    if (typeof window === 'undefined') return { priceImpact: 0, taxImpact: 0 };
    
    const session = gameStorage.getSession();
    const countryName = session?.country || "Indonesia";
    const country = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];
    
    // Price Impact
    const priceData = priceStorage.getData(country);
    const keys = Object.keys(BASE_PRICES) as Array<keyof typeof BASE_PRICES>;
    const avgPriceMultiplier = keys.reduce((acc, key) => {
      const base = (BASE_PRICES as any)[key] || 1;
      const current = (priceData as any)[key] || base;
      return acc + (current / base);
    }, 0) / keys.length;
    
    const priceImpact = Number(((1.0 - avgPriceMultiplier) * 15).toFixed(1));

    // Tax Impact
    const taxData = taxStorage.getTaxes(country.name_en) || country.pajak;
    const domesticTaxes = ["ppn", "korporasi", "pendapatan_nasional", "lingkungan", "lainnya"];
    let totalTaxSat = 0;
    domesticTaxes.forEach(key => {
       const currentTax = (taxData as any)[key];
       const baseTax = (country.pajak as any)[key];
       totalTaxSat += currentTax?.kepuasan ?? baseTax?.kepuasan ?? 50;
    });
    const avgTaxSat = totalTaxSat / domesticTaxes.length;
    const taxImpact = Number((avgTaxSat >= 50 
      ? ((avgTaxSat - 50) / 50) * 5 
      : ((avgTaxSat - 50) / 50) * 10).toFixed(1));

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
    const sessionS = gameStorage.getSession() as any;
    const countryNameS = sessionS?.country || "Indonesia";
    const countryS = countries.find(c => 
      c.name_id === countryNameS || 
      c.name_en === countryNameS || 
      (c as any).id === countryNameS ||
      (c as any).id === Number(countryNameS)
    ) || countries[0];

    const deltas = buildingStorage.getData().buildingDeltas || {};
    
    const breakdown = {
      darat: { label: "Infrastruktur Darat & Logistik", value: 0, items: ["1_jalur_sepeda", "2_jalan_tol", "3_terminal_bus"] },
      kereta: { label: "Sistem Perkeretaapian Nasional", value: 0, items: ["4_jalur_kereta", "5_kereta_bawah_tanah"] },
      maritim_udara: { label: "Hub Maritim & Dirgantara", value: 0, items: ["6_pelabuhan_laut", "7_bandara", "8_helipad"] }
    };

    const factors: Record<string, { factor: number, baseKey: string }> = {
      "1_jalur_sepeda": { factor: 0.0005, baseKey: "jalur_sepeda" },
      "2_jalan_tol": { factor: 0.0008, baseKey: "jalan_raya" },
      "3_terminal_bus": { factor: 0.001, baseKey: "terminal_bus" },
      "4_jalur_kereta": { factor: 0.0012, baseKey: "stasiun_kereta_api" },
      "5_kereta_bawah_tanah": { factor: 0.0015, baseKey: "kereta_bawah_tanah" },
      "6_pelabuhan_laut": { factor: 0.0018, baseKey: "pelabuhan" },
      "7_bandara": { factor: 0.002, baseKey: "bandara" },
      "8_helipad": { factor: 0.0005, baseKey: "helipad" }
    };

    Object.entries(breakdown).forEach(([sector, config]) => {
      config.items.forEach(key => {
        const factorConfig = factors[key];
        const baseCount = (countryS.infrastruktur as any)?.[factorConfig.baseKey] || 0;
        const deltaCount = (deltas[key] || 0) as number;
        breakdown[sector as keyof typeof breakdown].value += (baseCount + deltaCount) * factorConfig.factor;
      });
    });

    return breakdown;
  }
};


function min(a: number, b: number) { return a < b ? a : b; }

