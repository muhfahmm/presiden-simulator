"use client"

import { budgetStorage } from "../budget";
import { expenseStorage } from "@/app/game/components/ekonomi/4-pemasukkanpengeluaran/pengeluaran/ExpenseStorage";
import { gameStorage } from "../../../../gamestorage";
import { countries } from "../../../../../select-country/data/countries";
import { inboxStorage } from "../../../inbox/inboxStorage";
import { formatGameDate } from "../../../../data/time/gameTime";
import { priceStorage, BASE_PRICES } from "../../../ekonomi/8-pasar-domestik/priceStorage";
import { taxStorage } from "../../../ekonomi/2-pajak/TaxStorage";

export interface HappinessStats {
  value: number;
  reasoning: string;
  trend: "up" | "down" | "stable";
  lastMonthlyUpdate: string; // ISO string of YYYY-MM
}

const STORAGE_KEY = "em4_happiness_stats_v2";

const DEFAULT_STATS: HappinessStats = {
  value: 55,
  reasoning: "Tingkat kepuasan awal rakyat pada transisi pemerintahan.",
  trend: "stable",
  lastMonthlyUpdate: "2026-1"
};

export const happinessStorage = {
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

    // 1. Gather Economic Data
    const budgetDelta = budgetStorage.getBudget() - (Number(localStorage.getItem("em4_last_month_budget")) || budgetStorage.getBudget());
    localStorage.setItem("em4_last_month_budget", budgetStorage.getBudget().toString());

    // 2. Gather Social Data (Expenses)
    const session = gameStorage.getSession();
    const countryName = session?.country || "Indonesia";
    const country = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];
    const expData = expenseStorage.getData(country.name_en, country);

    // Calculate Averages (Mirrors Python Policy Score)
    const avgSalary = ((expData.salaryAsn || 1) + (expData.salaryGuru || 1) + (expData.salaryMedis || 1) + (expData.salaryMiliter || 1)) / 4;
    const avgSubsidy = ((expData.subsidyEnergi || 0) + (expData.subsidyPangan || 0) + (expData.subsidyKesehatan || 0) + (expData.subsidyPendidikan || 0) + (expData.subsidyUmkm || 0) + (expData.subsidyTransport || 0) + (expData.subsidyRumah || 0)) / 7;
    
    // 3. PYTHON ENGINE INTEGRATION: Execute Market Setup
    const priceData = priceStorage.getData();
    // Default base prices (replicated structurally for the prompt)
    const { priceRice, priceBeef, priceChicken, priceOil, priceSugar, priceEgg, priceFuel, priceElectric, priceWater, priceMedicine, priceEducation } = priceData;
    
    let priceImpact = 0;
    
    try {
      // Call Python Backend via Next.js API in happiness folder
      const res = await fetch("/game/components/navbar/stats/happines", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          basePrices: BASE_PRICES ? BASE_PRICES : {
            priceRice: 16000, priceBeef: 104100, priceChicken: 41000, priceOil: 15400,
            priceSugar: 14400, priceEgg: 31100, priceFuel: 10700, priceElectric: 1600,
            priceWater: 5200, priceMedicine: 157900, priceEducation: 483900
          },
          currentPrices: { priceRice, priceBeef, priceChicken, priceOil, priceSugar, priceEgg, priceFuel, priceElectric, priceWater, priceMedicine, priceEducation }
        })
      });
      if (res.ok) {
        const pyData = await res.json();
        if (pyData && typeof pyData.impact === 'number') {
           priceImpact = pyData.impact;
        }
      }
    } catch (err) {
      console.warn("Failed to reach Python engine API:", err);
      // Fallback
      priceImpact = (1.0 - (
        (priceRice / 16000) + (priceBeef / 104100) + (priceChicken / 41000) +
        (priceOil / 15400) + (priceSugar / 14400) + (priceEgg / 31100) +
        (priceFuel / 10700) + (priceElectric / 1600) + (priceWater / 5200) +
        (priceMedicine / 157900) + (priceEducation / 483900)
      ) / 11) * 15;
    }
    // --- LOGIC START (REBALANCED) ---
    let econImpact = 0;
    let econReason = "";
    if (budgetDelta > 1000) {
        econImpact = 1.5; // Reduced from 2
        econReason = "Ekonomi yang sangat kuat.";
    } else if (budgetDelta > 0) {
        econImpact = 0.5;
        econReason = "Pertumbuhan ekonomi stabil.";
    } else if (budgetDelta < -1000) {
        econImpact = -4; // Less punishing than -5 but still significant
        econReason = "Defisit anggaran yang mengkhawatirkan rakyat.";
    } else {
        econImpact = -0.5;
        econReason = "Ekonomi sedang dalam fase konsolidasi.";
    }

    // New Policy Score with lower ceiling
    // avgSalary: 1.0 (Std) -> 40 points, 2.0 (High) -> 80 points
    // avgSubsidy: 0-100 scale -> 0-40 points
    // infraSat: 85 -> 17 points
    // Max theoretical: 80 + 40 + 17 = 137? No, weight them better.
    
    const salaryScore = (avgSalary * 40); // 1.0 -> 40, 2.0 -> 80
    const subsidyScore = (avgSubsidy * 0.35); // Max 100 -> 35
    const infraScore = 15; // Stable 15, Max was 17
    
    // Target base (tidak termasuk harga pasar)
    // 4. TAX ENGINE INTEGRATION
    const taxData = taxStorage.getTaxes(country.name_en) || country.taxes;
    const domesticTaxes = ["vat", "corporate", "income", "environment", "other"];
    let totalTaxSat = 0;
    domesticTaxes.forEach(key => {
       totalTaxSat += (taxData as any)[key]?.satisfaction ?? 50;
    });
    const avgTaxSat = totalTaxSat / 5;
    
    // Impact: 50 -> 0%, 100 -> +5%, 0 -> -10%
    const taxImpact = avgTaxSat >= 50 
      ? ((avgTaxSat - 50) / 50) * 5 
      : ((avgTaxSat - 50) / 50) * 10;

    let target = salaryScore + subsidyScore + infraScore + econImpact;
    
    // Cap target to 95% naturally (very hard to get 100% just from policy)
    target = Math.min(95, target);
    
    const diff = target - stats.value;
    // Slower convergence: 5% movement towards target instead of 10%
    let change = diff * 0.05 + (Math.random() * 2 - 1); 
    
    // --- DIRECT IMPACTS ---
    // Sesuai permintaan: Jika +, ya +; Jika -, ya - (dievakuasi mutlak per bulan)
    change += priceImpact;
    change += taxImpact;
    
    let newValue = Math.round((stats.value + change) * 10) / 10;
    newValue = Math.max(5, Math.min(100, newValue)); // Min 5% to avoid immediate game over on start

    let trend: "up" | "down" | "stable" = "stable";
    if (newValue > stats.value + 0.5) trend = "up";
    else if (newValue < stats.value - 0.5) trend = "down";

    const newReasoning = newValue > stats.value 
        ? `Meningkat karena ${econReason.toLowerCase()}` 
        : newValue < stats.value 
            ? `Menurun karena ${econReason.toLowerCase()}`
            : "Kepuasan rakyat tetap stabil.";

    // --- LOGIC END ---

    const updatedStats: HappinessStats = {
      value: newValue,
      reasoning: newReasoning,
      trend: trend,
      lastMonthlyUpdate: currentMonthKey
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

  updateHappinessDirectly: (impact: number, programTitle: string = "Program Kesejahteraan") => {
    const stats = happinessStorage.getStats();
    
    // Diminishing returns factor: harder to increase as it gets closer to 100%
    const factor = (100 - stats.value) / 100;
    // Random variation between 70% and 130% of the base impact
    const variation = 0.7 + Math.random() * 0.6;
    
    const actualImpact = Math.round((impact * factor * variation) * 10) / 10;
    
    let newValue = Math.round((stats.value + actualImpact) * 10) / 10;
    newValue = Math.max(0, Math.min(100, newValue));
    
    happinessStorage.saveStats({
      ...stats,
      value: newValue,
      reasoning: actualImpact > 0 ? `${programTitle} dirasakan manfaatnya.` : "Kebijakan baru memicu ketidakpuasan.",
      trend: actualImpact > 0 ? "up" : "down"
    });

    // Send Inbox Message (Direct Feedback)
    inboxStorage.addMessage({
      source: "Kementerian Sosial",
      subject: `Update: ${programTitle}`,
      content: `Program ${programTitle} telah berhasil dilaksanakan. Rakyat merasa lebih disejahterakan. Kepuasan naik ${actualImpact > 0 ? '+' : ''}${actualImpact}%.`,
      time: "Hari Ini", // Or get the current game date if passed
      priority: "medium"
    });

    // Check for Critical and Game Over states
    if (newValue === 0) {
      window.dispatchEvent(new CustomEvent('happiness_gameover'));
    } else if (newValue <= 10) {
      window.dispatchEvent(new CustomEvent('happiness_critical'));
    }
  }
};

function min(a: number, b: number) { return a < b ? a : b; }
