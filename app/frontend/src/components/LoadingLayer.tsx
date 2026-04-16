"use client"

import { useState, useEffect } from "react";
import ParticleCanvas from "./ParticleCanvas";
import GameEmblem from "./GameEmblem";

export default function LoadingLayer({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Give users a moment to see 100%
          return 100;
        }
        // Random increment for a more "natural" loading feel
        const inc = Math.floor(Math.random() * 5) + 2;
        return Math.min(prev + inc, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black font-sans text-white z-[9999]">
      <ParticleCanvas />
      
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated Emblem */}
        <div className="relative">
          <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full animate-pulse" />
          <GameEmblem className="w-24 h-24 drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] animate-float" />
        </div>
        
        <div className="flex flex-col items-center space-y-1">
          <h1 className="text-4xl md:text-5xl font-black tracking-[0.2em] text-center select-none">
            <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">PRESIDEN</span>
            <span className="text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] ml-3">SIMULATOR</span>
          </h1>
          <p className="text-zinc-500 text-xs tracking-widest uppercase animate-pulse">
            Memuat sumber daya...
          </p>
        </div>

        {/* Loading Bar Container */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <div className="w-72 h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 p-[1px]">
            <div 
              className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-emerald-500 rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(239,68,68,0.4)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center gap-2">
             <span className="text-[10px] font-mono text-zinc-600 tracking-tighter uppercase">Status: </span>
             <span className="text-xs font-bold text-zinc-400">{progress}%</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
