"use client"

import { useState, useEffect } from "react";
import { Play, Pause, Calendar } from "lucide-react";
import { INITIAL_GAME_DATE, formatGameDate, addDays, saveGameDate, getStoredGameDate } from "@/app/game/data/time/gameTime";
import { gameStorage } from "@/app/game/gamestorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/select-country/data/countries/_index";
import { calculateDailyProductionTotals } from "@/app/game/data/production/productionLogic";
import { calculateDailyBudgetDelta } from "@/app/game/data/economy/BudgetDeltaLogic";
import { happinessStorage } from "@/app/game/components/2_navigasi_menu/navigasi_bawah/1_kepuasan/happinessStorage";

export default function GameTimeControls() {
  const [gameDate, setGameDate] = useState<Date>(INITIAL_GAME_DATE);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(1); // Speed multiplier
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setGameDate(getStoredGameDate());
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setGameDate(prevDate => {
        const nextDate = addDays(prevDate, 1);
        saveGameDate(nextDate);
        return nextDate;
      });
    }, 2000 / speed); // 1 day every 2 seconds at 1x speed

    return () => clearInterval(interval);
  }, [isPaused, speed]);

  // Handle daily side effects (Production & Budget)
  useEffect(() => {
    // Skip initial mount calculation to start at 0 on Jan 1st
    if (gameDate.getTime() === INITIAL_GAME_DATE.getTime()) return;

    const session = gameStorage.getSession();
    if (session) {
      const currentCountryCode = session.country || "Indonesia";
      const currentData = countries.find((c: any) => 
        c.name_id === currentCountryCode || 
        c.name_en === currentCountryCode || 
        (c.id && c.id === currentCountryCode)
      ) || countries[79] || countries[0];
      
      const buildingData = buildingStorage.getData();
      const dailyDeltas = calculateDailyProductionTotals(currentData, buildingData.buildingDeltas);
      budgetStorage.updateCumulativeProduction(dailyDeltas);

      const budgetDelta = calculateDailyBudgetDelta(currentData, buildingData.buildingDeltas);
      budgetStorage.updateBudget(budgetDelta);
      
      // Real-time & Monthly Happiness Sync
      happinessStorage.recalculateMonthlyHappiness(gameDate);
    }
  }, [gameDate]);

  return (
    <div className="flex items-center gap-3 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 p-1.5 rounded-2xl shadow-2xl">
      {/* Date Display */}
      <div className="flex items-center gap-2.5 px-4 py-2 bg-zinc-950/50 rounded-xl border border-zinc-800/50 group">
        <Calendar size={14} className="text-cyan-500 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-black text-white tracking-widest tabular-nums italic">
          {isMounted ? formatGameDate(gameDate) : formatGameDate(INITIAL_GAME_DATE)}
        </span>
      </div>

      <div className="h-6 w-[1px] bg-zinc-800/50"></div>

      {/* Controls */}
      <div className="flex items-center gap-1 p-0.5">
        <button 
          onClick={() => setIsPaused(true)}
          className={`p-2 rounded-lg transition-all cursor-pointer ${isPaused ? 'bg-amber-500/20 text-amber-500 border border-amber-500/30' : 'text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300'}`}
          title="Pause Game"
        >
          <Pause size={16} fill={isPaused ? "currentColor" : "none"} />
        </button>
        <button 
          onClick={() => setIsPaused(false)}
          className={`p-2 rounded-lg transition-all cursor-pointer ${!isPaused ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30' : 'text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300'}`}
          title="Resume Game"
        >
          <Play size={16} fill={!isPaused ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Speed Selector (Optional/Future) */}
      <div className="flex items-center bg-zinc-950/30 rounded-lg p-1 border border-zinc-800/50">
        {[1, 2, 3].map((s) => (
          <button
            key={s}
            onClick={() => setSpeed(s)}
            className={`px-2 py-0.5 text-[10px] font-black rounded transition-all cursor-pointer ${speed === s ? 'bg-cyan-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
}
