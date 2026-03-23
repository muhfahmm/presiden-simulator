"use client"

import { useState, useEffect } from "react";
import { Play, Pause, Calendar } from "lucide-react";
import { INITIAL_GAME_DATE, formatGameDate, addDays, saveGameDate, getStoredGameDate } from "../../data/time/gameTime";

export default function GameTimeControls() {
  const [gameDate, setGameDate] = useState<Date>(INITIAL_GAME_DATE);
  const [isPaused, setIsPaused] = useState<boolean>(false);
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
