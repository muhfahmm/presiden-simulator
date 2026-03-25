"use client"

import { gameStorage } from "../../../../gamestorage";
import { countries } from "../../../../../select-country/data/countries/_index";
import { inboxStorage } from "../../../inbox/inboxStorage";
import { formatGameDate } from "../../../../data/time/gameTime";
import { priceStorage, BASE_PRICES } from "../../../ekonomi/8-pasar-domestik/priceStorage";
import { taxStorage } from "../../../ekonomi/2-pajak/TaxStorage";

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
    
    const priceData = priceStorage.getData();
    const avgPriceMultiplier = (
      (priceData.harga_beras / BASE_PRICES.harga_beras) + 
      (priceData.harga_daging_sapi / BASE_PRICES.harga_daging_sapi) + 
      (priceData.harga_ayam / BASE_PRICES.harga_ayam) +
      (priceData.harga_minyak_goreng / BASE_PRICES.harga_minyak_goreng) + 
      (priceData.harga_gula / BASE_PRICES.harga_gula) + 
      (priceData.harga_telur / BASE_PRICES.harga_telur) +
      (priceData.harga_bbm / BASE_PRICES.harga_bbm) + 
      (priceData.harga_listrik / BASE_PRICES.harga_listrik) + 
      (priceData.harga_air / BASE_PRICES.harga_air) +
      (priceData.harga_obat / BASE_PRICES.harga_obat) + 
      (priceData.harga_pendidikan / BASE_PRICES.harga_pendidikan)
    ) / 11;
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
  }
};

function min(a: number, b: number) { return a < b ? a : b; }
