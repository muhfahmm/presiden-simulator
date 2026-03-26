"use client"

import { useState, useEffect } from "react";
import { Play, Settings, LogOut, ShieldAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import ParticleCanvas from "@/components/ParticleCanvas";
import GameEmblem from "@/components/GameEmblem";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Small delay for smooth transition
          return 100;
        }
        return prev + 3; // Slightly faster increment
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-transparent font-sans text-white relative overflow-hidden">
        <ParticleCanvas />
        
        <div className="flex flex-col items-center gap-4 z-10 group cursor-pointer">
          {/* Custom SVG Logo */}
          <GameEmblem className="w-20 h-20 animate-bounce" />
          
          <h1 className="text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.4)] transition-all text-center">
            PRESIDEN SIMULATOR
          </h1>
          <p className="text-sm text-zinc-400 animate-pulse">Memuat sumber daya...</p>
          
          <div className="w-64 h-1.5 bg-zinc-800 rounded-full overflow-hidden mt-2">
            <div 
              className="h-full bg-gradient-to-r from-red-500 to-yellow-500 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-zinc-500">{progress}%</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-transparent font-sans text-white relative overflow-hidden">
      <ParticleCanvas />

      {/* Background Glow */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-red-500/10 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-yellow-500/10 to-transparent z-10" />

      <main className="flex flex-col items-center gap-8 z-20 w-full max-w-md px-6">
        <div className="flex flex-col items-center group cursor-pointer">
          {/* Custom SVG Logo */}
          <GameEmblem className="w-24 h-24 mb-4 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300" />
          
          <h1 className="text-5xl font-black tracking-tight bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all text-center">
            PRESIDEN SIMULATOR
          </h1>
        </div>

        <div className="flex flex-col w-full gap-4">
          <button 
            onClick={() => router.push("/database")}
            className="group flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 font-bold hover:from-red-500 hover:to-yellow-500 transition-all shadow-lg hover:shadow-red-500/20 active:scale-95 cursor-pointer"
          >
            <Play className="h-5 w-5 group-hover:animate-bounce" />
            Mulai Permainan
          </button>

          <button className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-zinc-900 border border-zinc-800 font-semibold hover:bg-zinc-800 hover:border-zinc-700 transition-all active:scale-95 cursor-pointer">
            <Settings className="h-5 w-5 text-zinc-400" />
            Pengaturan
          </button>

          <button className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-zinc-900 border border-zinc-800 font-semibold hover:bg-zinc-800 hover:border-zinc-700 transition-all active:scale-95 cursor-pointer">
            <ShieldAlert className="h-5 w-5 text-zinc-400" />
            Pencapaian
          </button>

          <button className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-red-900/40 bg-red-950/20 text-red-400 font-semibold hover:bg-red-950/40 transition-all mt-4 active:scale-95 cursor-pointer">
            <LogOut className="h-5 w-5" />
            Keluar
          </button>
        </div>

        <footer className="text-xs text-zinc-600 dark:text-zinc-500">
          v0.1.0 Alpha - Developer Build
        </footer>
      </main>
    </div>
  );
}
