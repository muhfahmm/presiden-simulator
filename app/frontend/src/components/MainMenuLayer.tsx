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
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#050505] font-sans text-white overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Presidential Office Image Layer */}
        <div 
          className="absolute inset-0 opacity-[0.8] bg-cover bg-center bg-no-repeat scale-105 animate-slow-pan" 
          style={{ backgroundImage: 'url("/backgrounds/office_bg.png")' }}
        />
        
        {/* Warm Ambient Glows (to simulate sunlight/office lighting) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-400/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/10 blur-[180px] rounded-full" />

        {/* Cinematic Film Grain / Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Particles as subtle "Dust Motes" in the air */}
      <div className="absolute inset-0 z-10 opacity-40">
        <ParticleCanvas />
      </div>
      
      {/* Heavy Cinematic Vignette and Dark Gradient to ensure UI readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none z-20" />

      <main className="relative z-30 flex flex-col items-center gap-8 w-full max-w-md px-8 animate-fade-in">
        
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center group cursor-default">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-orange-500/30 blur-3xl rounded-full group-hover:bg-orange-500/50 transition-all duration-700 animate-pulse" />
            <GameEmblem className="w-28 h-28 drop-shadow-[0_0_50px_rgba(245,158,11,0.6)] group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out" />
          </div>
          
          <h1 className="flex flex-col items-center leading-none text-center">
            <span className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-500 drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] uppercase">
              Presiden
            </span>
            <span className="text-4xl md:text-5xl font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-t from-orange-600 via-amber-500 to-white drop-shadow-[0_0_30px_rgba(245,158,11,0.5)] uppercase -mt-1">
              Simulator
            </span>
          </h1>
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-5 opacity-40 group-hover:w-40 transition-all duration-1000" />
        </div>

        {/* Menu Actions */}
        <div className="flex flex-col w-full gap-4 mt-2">
          <button 
            onClick={() => {
              gameStorage.clearSession();
              onStart();
            }}
            className="group relative flex items-center justify-center gap-3 w-full py-5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 font-black text-xl hover:from-amber-500 hover:via-orange-500 hover:to-red-600 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:shadow-orange-600/40 active:scale-[0.97] overflow-hidden border border-white/10"
          >
            <div className="absolute inset-x-0 -top-full h-full bg-white/20 skew-y-12 transition-all duration-1000 group-hover:top-full" />
            <Play className="h-6 w-6 fill-white group-hover:scale-110 transition-transform" />
            <span className="tracking-widest drop-shadow-lg">MULAI PERMAINAN</span>
          </button>

          <button 
            onClick={onLoad}
            className="group relative flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-zinc-950/60 border border-amber-500/30 backdrop-blur-xl font-bold text-lg text-amber-200 hover:bg-amber-500/20 hover:border-amber-500/60 transition-all shadow-xl active:scale-[0.97]"
          >
            <Database className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span>Muat Permainan (SQL)</span>
          </button>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-zinc-950/60 border border-white/10 backdrop-blur-xl font-semibold text-zinc-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all active:scale-[0.95]">
              <Settings className="h-5 w-5 opacity-70" />
              <span>Opsi</span>
            </button>

            <button className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-zinc-950/60 border border-white/10 backdrop-blur-xl font-semibold text-zinc-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all active:scale-[0.95]">
              <Trophy className="h-5 w-5 opacity-70" />
              <span>Trofi</span>
            </button>
          </div>

          <button className="flex items-center justify-center gap-3 w-full py-3 rounded-xl border border-white/5 bg-black/20 text-zinc-500 font-bold hover:bg-red-950/20 hover:text-red-400 hover:border-red-900/40 transition-all mt-4 active:scale-[0.95] tracking-[0.2em] text-[10px] uppercase">
            <LogOut className="h-3 w-3" />
            <span>Keluar Permainan</span>
          </button>
        </div>

        <footer className="flex flex-col items-center gap-2 mt-4 opacity-40">
          <div className="text-[9px] text-zinc-400 font-mono tracking-[0.5em] uppercase">
            EST. 2026 - Premium Edition
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); filter: blur(10px); }
          to { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        @keyframes slow-pan {
          from { transform: scale(1.05) translate(-1%, -1%); }
          to { transform: scale(1.1) translate(1%, 1%); }
        }
        .animate-fade-in {
          animation: fade-in 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slow-pan {
          animation: slow-pan 30s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}
