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
    <div className="flex items-center gap-4 px-4 py-2 bg-black/40 rounded-2xl border border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300">
      {/* Date Display */}
      <div className="flex items-center gap-3 px-3 py-1.5 bg-zinc-950/40 rounded-xl border border-white/5 group hover:border-cyan-500/30 transition-all duration-300 cursor-default">
        <Calendar size={16} className="text-cyan-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all" />
        <span className="text-sm font-black text-white/90 tracking-[0.15em] tabular-nums italic drop-shadow-sm">
          {formatGameDate(state.gameDate)}
        </span>
      </div>

      <div className="h-6 w-[1px] bg-white/10 shrink-0"></div>

      {/* Controls */}
      <div className="flex items-center gap-1.5 p-1 bg-zinc-950/40 rounded-xl border border-white/5">
        <button
          onClick={() => timeStorage.setPaused(true)}
          className={`group p-2 rounded-lg transition-all duration-300 cursor-pointer active:scale-90 ${state.isPaused 
            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]' 
            : 'text-zinc-500 hover:bg-white/5 hover:text-zinc-300 border border-transparent'}`}
          title="Pause Game"
        >
          <Pause 
            size={18} 
            className="transition-transform duration-300 group-hover:scale-110" 
            fill={state.isPaused ? "currentColor" : "none"} 
          />
        </button>
        <button
          onClick={() => timeStorage.setPaused(false)}
          className={`group p-2 rounded-lg transition-all duration-300 cursor-pointer active:scale-90 ${!state.isPaused 
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
            : 'text-zinc-500 hover:bg-white/5 hover:text-zinc-300 border border-transparent'}`}
          title="Resume Game"
        >
          <Play 
            size={18} 
            className="transition-transform duration-300 group-hover:scale-110" 
            fill={!state.isPaused ? "currentColor" : "none"} 
          />
        </button>
      </div>

      {/* Speed Selector (Segmented Control Style) */}
      <div className="flex items-center gap-1 p-1 bg-zinc-950/60 rounded-xl border border-white/5 shadow-inner">
        {[1, 2, 3].map((s) => (
          <button
            key={s}
            onClick={() => timeStorage.setSpeed(s)}
            className={`
              relative px-3.5 py-1 text-xs font-black rounded-lg transition-all duration-300 cursor-pointer overflow-hidden active:scale-90
              ${state.speed === s 
                ? 'text-zinc-950 shadow-[0_0_20px_rgba(34,211,238,0.3)]' 
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'}
            `}
          >
            {/* Active Highlight Layer */}
            {state.speed === s && (
              <div className="absolute inset-0 bg-cyan-400 z-0 animate-in fade-in zoom-in duration-300" />
            )}
            <span className="relative z-10">{s}x</span>
          </button>
        ))}
      </div>
    </div>
  );
}
