"use client"

import { useState, useEffect } from "react";
import { Play, Settings, Trophy, LogOut, Database } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";
import GameEmblem from "./GameEmblem";
import { gameStorage } from "@/app/game/gamestorage";

interface MainMenuLayerProps {
  onStart: () => void;
  onLoad: () => void;
}

export default function MainMenuLayer({ onStart, onLoad }: MainMenuLayerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 bg-black" />;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black font-sans text-white overflow-hidden">
      <ParticleCanvas />
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent pointer-events-none" />

      <main className="relative z-10 flex flex-col items-center gap-10 w-full max-w-md px-8 animate-fade-in">
        
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center group cursor-default">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full group-hover:bg-orange-500/30 transition-all duration-700" />
            <GameEmblem className="w-28 h-28 drop-shadow-[0_0_40px_rgba(245,158,11,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out" />
          </div>
          
          <h1 className="flex flex-col items-center leading-tight">
            <span className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-red-600 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] uppercase">
              Presiden
            </span>
            <span className="text-4xl md:text-5xl font-black tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-t from-orange-400 to-amber-200 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)] uppercase -mt-2">
              Simulator
            </span>
          </h1>
        </div>

        {/* Menu Actions */}
        <div className="flex flex-col w-full gap-4">
          <button 
            onClick={() => {
              gameStorage.clearSession();
              onStart();
            }}
            className="group relative flex items-center justify-center gap-3 w-full py-4.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 font-bold text-lg hover:from-red-500 hover:to-orange-500 transition-all shadow-[0_8px_30px_rgb(220,38,38,0.3)] hover:shadow-red-500/40 active:scale-[0.98] overflow-hidden"
          >
            <div className="absolute inset-x-0 -top-full h-full bg-white/20 skew-y-12 transition-all duration-500 group-hover:top-full" />
            <Play className="h-5 w-5 fill-white group-hover:animate-pulse" />
            <span>Mulai Permainan</span>
          </button>

          <button 
            onClick={onLoad}
            className="group relative flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-zinc-900/80 border-2 border-emerald-500/30 font-bold text-lg text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all shadow-[0_4px_20px_rgba(16,185,129,0.1)] hover:shadow-emerald-500/20 active:scale-[0.98]"
          >
            <Database className="h-5 w-5" />
            <span>Muat Permainan (SQL)</span>
          </button>

          <div className="grid gap-3">
            <button className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-zinc-900/80 border border-zinc-800 font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all active:scale-[0.98] backdrop-blur-sm">
              <Settings className="h-5 w-5 opacity-60" />
              <span>Pengaturan</span>
            </button>

            <button className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-zinc-900/80 border border-zinc-800 font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all active:scale-[0.98] backdrop-blur-sm">
              <Trophy className="h-5 w-5 opacity-60" />
              <span>Pencapaian</span>
            </button>
          </div>

          <button className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl border border-red-900/30 bg-red-950/10 text-red-500/70 font-semibold hover:bg-red-950/20 hover:text-red-400 hover:border-red-900/50 transition-all mt-4 active:scale-[0.98]">
            <LogOut className="h-4 w-4" />
            <span>Keluar Permainan</span>
          </button>
        </div>

        <footer className="text-[10px] text-zinc-700 font-mono tracking-widest uppercase mt-4">
          v0.1.0 Alpha - Developer Build
        </footer>
      </main>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
