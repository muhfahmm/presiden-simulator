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
  value: 55,
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

    // Send Inbox Message (Official Report)
    inboxStorage.addMessage({
      source: "Sekretariat Negara",
      subject: "Laporan Bulanan: Indeks Kepuasan Rakyat",
      content: `Laporan bulanan menunjukkan indeks kepuasan berada di level ${newValue}%. ${newReasoning}`,
      time: formatGameDate(currentDate),
      priority: trend === "down" ? "high" : "medium"
    });

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
    
    // Notify via Inbox
    inboxStorage.addMessage({
      source: "Sekretariat Negara",
      subject: "Update Kepuasan Rakyat",
      content: reason,
      time: formatGameDate(new Date()), // Should ideally use current game date
      priority: amount > 5 ? "high" : "medium"
    });
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
    if (typeof window === 'undefined') return;

    const stats = happinessStorage.getStats();
    
    // 1. Ambil data negara & kebijakan
    const session = gameStorage.getSession();
    const countryName = session?.country || "Indonesia";
    const country = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];

    // 2. Hitung Dampak Pajak
    const taxData = taxStorage.getTaxes(country.name_en) || country.pajak;
    const domesticKeys = ["ppn", "korporasi", "pendapatan_nasional", "lingkungan", "lainnya"];
    const avgTaxRate = domesticKeys.reduce((sum, key) => sum + ((taxData as any)[key]?.tarif || 0), 0) / domesticKeys.length;

    let taxDelta: number;
    if (avgTaxRate <= 25) taxDelta = 0.1;
    else if (avgTaxRate <= 50) taxDelta = 0;
    else if (avgTaxRate <= 75) taxDelta = -0.2;
    else taxDelta = -0.5;

    // 3. Hitung Dampak Harga
    const priceData = priceStorage.getData(country);
    const priceKeys = Object.keys(BASE_PRICES) as Array<keyof typeof BASE_PRICES>;
    const avgPriceMult = priceKeys.reduce((acc, k) => acc + (priceData[k] / BASE_PRICES[k]), 0) / priceKeys.length;

    let priceDelta: number;
    if (avgPriceMult <= 0.8) priceDelta = 0.1;
    else if (avgPriceMult <= 1.2) priceDelta = 0;
    else if (avgPriceMult <= 1.5) priceDelta = -0.2;
    else priceDelta = -0.5;

    // 4. Gabungkan Dampak (Daily Delta Total)
    let totalDailyDelta = taxDelta + priceDelta;

    const currentReligion = religionStorage.getCurrentReligion(country.religion);
    // 5. Buddhist Satisfaction Bonus (+0.2% per day)
    if (currentReligion === "Buddha") {
      totalDailyDelta += BUDDHA_SATISFACTION_DAILY_BONUS;
    }

    // 6. Konghucu Press Freedom Penalty (-0.2% per day)
    if (currentReligion === "Konghucu") {
      totalDailyDelta += KONGHUCU_PRESS_FREEDOM_PENALTY;
    }

    // Jika sudah di zona merah (< 40), efeknya dilipatduakan
    const isRedZone = stats.value < 40;
    if (isRedZone && totalDailyDelta < 0) totalDailyDelta *= 2;
    if (isRedZone && totalDailyDelta > 0) totalDailyDelta *= 1.5; // Bonus zone merah lebih susah

    if (totalDailyDelta === 0) return;

    let newValue = Number((stats.value + totalDailyDelta).toFixed(2));
    newValue = Math.max(1, Math.min(100, newValue));

    const newTrend: "up" | "down" | "stable" = totalDailyDelta > 0 ? "up" : totalDailyDelta < 0 ? "down" : "stable";

    let reason: string;
    if (isRedZone && totalDailyDelta < 0) {
      reason = `Krisis Publik: Kepuasan merosot tajam ke ${newValue}% karena beban harga & pajak yang tak tertahankan.`;
    } else if (totalDailyDelta < 0) {
      reason = `Tekanan ekonomi (pajak/harga) menekan kepuasan rakyat ke ${newValue}%.`;
    } else {
      reason = `Kebijakan ekonomi yang ringan perlahan memperbaiki kepuasan rakyat menjadi ${newValue}%.`;
    }

    happinessStorage.saveStats({
      ...stats,
      value: newValue,
      trend: newTrend,
      reasoning: reason
    });

    // Trigger game events jika perlu
    if (newValue === 1) {
      window.dispatchEvent(new CustomEvent('happiness_gameover'));
    } else if (newValue <= 10) {
      window.dispatchEvent(new CustomEvent('happiness_critical'));
    }
  }
};


function min(a: number, b: number) { return a < b ? a : b; }

