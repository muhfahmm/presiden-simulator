"use client"

import { useState, useEffect } from "react";
import { Play, Pause, Calendar } from "lucide-react";
import { INITIAL_GAME_DATE, formatGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { unSecurityCouncilStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { nuclearStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/5_program_nuklir/nuclearStorage";
import { researchStorage } from "@/app/game/components/sidemenu/3_riset_dan_penelitian/researchStorage";
import { DebtAiService } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/3-hutang/sistem_hutang_AI/services/DebtAiService";

// ══════════════════════════════════════════════════════════════
// REMOVED IMPORTS (Migrated to Go Server):
// - aiBudgetStorage, aiHappinessStorage, aiPopulationStorage
// - aiBuildingStorage, aiProductionStorage, calculateAIProduction
// - AiHunianService, AiPembangunanService, SocialCareService
// - getNationalHealthImpact, publicServiceEventEngine
// - All 206-nation NPC processing is now server-side
// ══════════════════════════════════════════════════════════════

// timeStorage handles all Go Server synchronization internally.

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

  // Handle daily side effects — LIGHTWEIGHT ONLY
  // Budget, Population, Happiness, Stability → Now handled by Go Server via SSE
  useEffect(() => {
    if (state.isPaused) return;

    // Dedup: skip if already processed this game day
    const budgetData = budgetStorage.getData();
    const currentDateStr = state.gameDate.toISOString().split('T')[0];
    const lastProcessedStr = budgetData.lastProcessedDate ? new Date(budgetData.lastProcessedDate).toISOString().split('T')[0] : null;
    if (currentDateStr === lastProcessedStr) return;

    // Mark as processed (for dedup)
    budgetStorage.updateCumulativeProduction({}, state.gameDate);

    // ══════════════════════════════════════════════════════
    // MIGRATED TO GO SERVER:
    // - Budget (dailyIncome) → processPlayerDay() in Go
    // - Population growth    → processPlayerDay() in Go
    // - Happiness decay      → processPlayerDay() in Go
    // - Stability drift      → processPlayerDay() in Go
    // ══════════════════════════════════════════════════════

    // Nuclear & Research Progress (lightweight, stays client-side)
    nuclearStorage.updateProgress(state.gameDate);
    researchStorage.updateProgress(state.gameDate);
    DebtAiService.checkMonthlyUpdate();

    // UN Security Council (Calendar Events — lightweight date checks)
    if (state.gameDate.getMonth() === 0 && state.gameDate.getDate() === 1) {
      unSecurityCouncilStorage.performRotation(state.gameDate.getFullYear());
    }
    if (state.gameDate.getMonth() === 5 && state.gameDate.getDate() === 1) {
      unSecurityCouncilStorage.checkElectionOpening(state.gameDate.getFullYear());
    }
    if (state.gameDate.getMonth() === 5 && state.gameDate.getDate() === 15) {
      unSecurityCouncilStorage.conductElection(state.gameDate.getFullYear());
    }
    if (state.gameDate.getMonth() === 6 && state.gameDate.getDate() === 1) {
      unSecurityCouncilStorage.promoteElectedMembers(state.gameDate.getFullYear());
    }

  }, [state.gameDate, state.isPaused]);

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-amber-800/10 rounded-xl border border-amber-800/10 shadow-sm backdrop-blur-md">
      {/* Date Display */}
      <div className="flex items-center gap-3 group mr-1">
        <Calendar size={16} className="text-amber-700 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-black text-amber-950 tracking-widest tabular-nums italic">
          {isMounted ? formatGameDate(state.gameDate) : formatGameDate(INITIAL_GAME_DATE)}
        </span>
      </div>

      <div className="h-5 w-[1px] bg-amber-800/20"></div>

      {/* Controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => { 
            // Optimistic UI Update
            setState(prev => ({ ...prev, isPaused: true }));
            timeStorage.setPaused(true); 
          }}
          className={`p-2 rounded-lg transition-all cursor-pointer ${state.isPaused ? 'bg-amber-600/20 text-amber-700 border border-amber-600/30' : 'text-amber-900/40 hover:bg-amber-800/10 hover:text-amber-900'}`}
          title="Pause Game"
        >
          <Pause size={18} fill={state.isPaused ? "currentColor" : "none"} />
        </button>
        <button
          onClick={() => { 
            // Optimistic UI Update
            setState(prev => ({ ...prev, isPaused: false }));
            timeStorage.setPaused(false); 
          }}
          className={`p-2 rounded-lg transition-all cursor-pointer ${!state.isPaused ? 'bg-emerald-600/20 text-emerald-700 border border-emerald-600/30' : 'text-amber-900/40 hover:bg-amber-800/10 hover:text-amber-900'}`}
          title="Resume Game"
        >
          <Play size={18} fill={!state.isPaused ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Speed Selector */}
      <div className="flex items-center bg-amber-800/10 rounded-lg p-1 border border-amber-800/10 ml-2">
        {[1, 2, 3].map((s) => (
          <button
            key={s}
            onClick={() => { 
                // Optimistic UI Update
                setState(prev => ({ ...prev, speed: s }));
                timeStorage.setSpeed(s); 
            }}
            className={`px-2.5 py-0.5 text-xs font-black rounded transition-all cursor-pointer ${state.speed === s ? 'bg-amber-600 text-white shadow-sm' : 'text-amber-900/60 hover:text-amber-950'}`}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
}

