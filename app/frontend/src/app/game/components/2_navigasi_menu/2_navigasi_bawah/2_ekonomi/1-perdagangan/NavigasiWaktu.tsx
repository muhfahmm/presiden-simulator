"use client"

import { useState, useEffect } from "react";
import { Play, Pause, Calendar } from "lucide-react";
import { formatGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { timeStorage } from "./timeStorage";

export default function NavigasiWaktu() {
  const [state, setState] = useState(timeStorage.getState());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const unsubscribe = timeStorage.subscribe((date, paused, speed) => {
      setState({ gameDate: date, isPaused: paused, speed: speed });
    });
    return () => unsubscribe();
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900/40 rounded-xl border border-zinc-800/50 shadow-sm backdrop-blur-md">
      {/* Date Display */}
      <div className="flex items-center gap-3 group mr-1">
        <Calendar size={16} className="text-cyan-500 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-black text-white tracking-widest tabular-nums italic">
          {formatGameDate(state.gameDate)}
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
