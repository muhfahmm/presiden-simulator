"use client"

import { useState, useEffect } from "react";
import { Play, Pause, Calendar } from "lucide-react";
import { INITIAL_GAME_DATE, formatGameDate, addDays, saveGameDate, getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { gameStorage } from "@/app/game/gamestorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { populationDeltaStorage } from "@/app/game/components/1_navbar/2_populasi/PopulationDeltaStorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { calculateDailyProductionTotals } from "@/app/game/data/production/productionLogic";
import { calculateDailyBudgetDelta, calculateBudgetBreakdown } from "@/app/game/data/economy/BudgetDeltaLogic";
import { budgetDeltaStorage } from "@/app/game/components/1_navbar/3_kas_negara/BudgetDeltaStorage";
import { calculateDailyPopulationDelta } from "@/app/game/components/1_navbar/2_populasi/PopulationDeltaLogic";
import { happinessStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan/happinessStorage";
import { stabilityStorage } from "@/app/game/components/1_navbar/4_stabilitas";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { unSecurityCouncilStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { aiBudgetStorage } from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { nuclearStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/5_program_nuklir/nuclearStorage";
// import { diplomacyStorage } from "@/app/game/components/map-system/modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/diplomacyStorage";

export default function GameTimeControls() {
  const [state, setState] = useState(timeStorage.getState());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const unsubscribe = timeStorage.subscribe((date, paused, speed) => {
      setState({ gameDate: date, isPaused: paused, speed: speed });
    });
    return () => unsubscribe();
  }, []);

  // Handle daily side effects (Production & Budget)
  useEffect(() => {
    const session = gameStorage.getSession();
    if (!session) return;

    // Use current game date to check if we've already processed this day
    const budgetData = budgetStorage.getData();
    const currentDateStr = state.gameDate.toISOString().split('T')[0]; // compare YYYY-MM-DD
    const lastProcessedStr = budgetData.lastProcessedDate ? new Date(budgetData.lastProcessedDate).toISOString().split('T')[0] : null;

    if (currentDateStr === lastProcessedStr) {
      // Already processed this game day
      return;
    }

    if (session) {
      const currentCountryCode = session.country || "Indonesia";
      const currentData = countries.find((c: any) =>
        c.name_id === currentCountryCode ||
        c.name_en === currentCountryCode ||
        (c.id && c.id === currentCountryCode)
      ) || countries[79] || countries[0];

      const buildingData = buildingStorage.getData();
      const dailyDeltas = calculateDailyProductionTotals(currentData, buildingData.buildingDeltas);
      budgetStorage.updateCumulativeProduction(dailyDeltas, state.gameDate);

      const breakdown = calculateBudgetBreakdown(currentData, buildingData.buildingDeltas);
      const taxRevenue = Math.round(breakdown.dailyTaxRevenue);
      budgetStorage.updateBudget(taxRevenue);
      budgetDeltaStorage.setDelta(taxRevenue);

      // Daily AI Budget progression
      aiBudgetStorage.updateAll(state.gameDate, currentCountryCode);

      // Daily Population Change (driven by tax policy)
      const currentPopulation = populationStorage.getPopulation();
      const rawPopulationDelta = calculateDailyPopulationDelta(currentData, currentPopulation);
      const populationDelta = Math.round(rawPopulationDelta);
      populationStorage.updatePopulation(populationDelta);
      populationDeltaStorage.setDelta(populationDelta);

      // Weekly Happiness & Stability Decay/Bonus (applied every 7 game days)
      const isWeeklyTick = state.gameDate.getDate() % 7 === 0;
      if (isWeeklyTick) {
        happinessStorage.applyDailyHappinessDecay(state.gameDate);
        stabilityStorage.applyDailyStabilityDecay();
      }

      // ── Tax Warning: Inbox notification after 10 consecutive days of negative tax impact ──
      const { taxImpact } = happinessStorage.getLiveImpacts();
      const COUNTER_KEY = "em4_negative_tax_days";
      const currentCount = parseInt(localStorage.getItem(COUNTER_KEY) || "0", 10);

      if (taxImpact < 0) {
        const newCount = currentCount + 1;
        localStorage.setItem(COUNTER_KEY, newCount.toString());

        if (newCount >= 10) {
          // Reset counter lalu kirim notifikasi
          localStorage.setItem(COUNTER_KEY, "0");
          const happinessNow = happinessStorage.getStats().value;
          const severity = happinessNow < 40 ? "high" : "medium";
          inboxStorage.addMessage({
            source: "Direktorat Jenderal Pajak",
            subject: "⚠️ Peringatan: Beban Pajak Terlalu Tinggi",
            content: `Sudah 10 hari berturut-turut kebijakan pajak yang berlaku memberikan dampak negatif terhadap kepuasan rakyat. Indeks kepuasan saat ini berada di ${happinessNow.toFixed(1)}%. Jika tidak segera direvisi, risiko keresahan sosial dan penurunan populasi akan semakin meningkat. Pertimbangkan untuk menurunkan tarif pajak domestik atau memberikan subsidi kompensasi kepada masyarakat.`,
            time: formatGameDate(state.gameDate),
            priority: severity
          });
        }
      } else {
        // Pajak sudah tidak merugikan — reset counter
        if (currentCount > 0) localStorage.setItem(COUNTER_KEY, "0");
      }

      // Real-time & Monthly Happiness Sync
      happinessStorage.recalculateMonthlyHappiness(state.gameDate);
      
      // Update Nuclear Program Progress
      nuclearStorage.updateProgress(state.gameDate);


      // --- Diplomacy & Construction Progression ---
      // diplomacyStorage.updateProgress(state.gameDate);

      // --- UN Security Council Rotation (Jan 1st) ---
      if (state.gameDate.getMonth() === 0 && state.gameDate.getDate() === 1) {
        unSecurityCouncilStorage.performRotation(state.gameDate.getFullYear());
      }

      // --- UN Security Council Election (June 15th) ---
      if (state.gameDate.getMonth() === 5 && state.gameDate.getDate() === 1) {
        unSecurityCouncilStorage.checkElectionOpening(state.gameDate.getFullYear());
      }
      if (state.gameDate.getMonth() === 5 && state.gameDate.getDate() === 15) {
        unSecurityCouncilStorage.conductElection(state.gameDate.getFullYear());
      }
      // --- UN Security Council Early Induction (July 1st) ---
      if (state.gameDate.getMonth() === 6 && state.gameDate.getDate() === 1) { // 6 = July
        unSecurityCouncilStorage.promoteElectedMembers(state.gameDate.getFullYear());
      }
    }
  }, [state.gameDate]);

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900/40 rounded-xl border border-zinc-800/50 shadow-sm backdrop-blur-md">
      {/* Date Display */}
      <div className="flex items-center gap-3 group mr-1">
        <Calendar size={16} className="text-cyan-500 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-black text-white tracking-widest tabular-nums italic">
          {isMounted ? formatGameDate(state.gameDate) : formatGameDate(INITIAL_GAME_DATE)}
        </span>
      </div>

      <div className="h-5 w-[1px] bg-zinc-800/30"></div>

      {/* Controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => timeStorage.setPaused(true)}
          className={`p-2 rounded-lg transition-all cursor-pointer ${state.isPaused ? 'bg-amber-500/20 text-amber-500 border border-amber-500/30' : 'text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300'}`}
          title="Pause Game"
        >
          <Pause size={18} fill={state.isPaused ? "currentColor" : "none"} />
        </button>
        <button
          onClick={() => timeStorage.setPaused(false)}
          className={`p-2 rounded-lg transition-all cursor-pointer ${!state.isPaused ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30' : 'text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300'}`}
          title="Resume Game"
        >
          <Play size={18} fill={!state.isPaused ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Speed Selector */}
      <div className="flex items-center bg-zinc-950/20 rounded-lg p-1 border border-zinc-800/30 ml-2">
        {[1, 2, 3].map((s) => (
          <button
            key={s}
            onClick={() => timeStorage.setSpeed(s)}
            className={`px-2.5 py-0.5 text-xs font-black rounded transition-all cursor-pointer ${state.speed === s ? 'bg-cyan-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
}

