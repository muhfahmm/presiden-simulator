"use client"

import { Heart, Coins, Shield } from "lucide-react";
import { gameStorage } from "@/app/game/gamestorage";

interface WelcomeOverlayProps {
  showWelcome: boolean;
  countryData: any;
  approval: number;
  budget: number;
  onClose: () => void;
}


export default function WelcomeOverlay({ 
  showWelcome, 
  countryData, 
  approval, 
  budget, 
  onClose 
}: WelcomeOverlayProps) {

  if (!showWelcome) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-zinc-950/90 backdrop-blur-2xl animate-in fade-in duration-700">
      <div className="relative max-w-2xl w-full mx-4 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 shadow-[0_0_100px_rgba(34,211,238,0.15)] flex flex-col p-1 animate-in zoom-in-95 slide-in-from-bottom-10 duration-1000">
        
        {/* Background Branding */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

        <div className="relative border border-white/5 rounded-[22px] bg-zinc-900/80 p-10 flex flex-col items-center text-center gap-8 backdrop-blur-md">
          
          {/* Country Emblem Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative h-24 w-24 rounded-full bg-zinc-800 border-2 border-cyan-500/50 flex items-center justify-center text-5xl shadow-2xl shadow-cyan-500/20">
                {countryData.flag}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-black text-cyan-400 uppercase tracking-[0.4em] drop-shadow-sm">Selamat Datang</h2>
              <h1 className="text-4xl font-black text-white tracking-tight uppercase italic underline decoration-cyan-500/50 underline-offset-8">
                PRESIDEN {countryData.name_id}
              </h1>
            </div>
          </div>

          {/* Status Briefing Bar */}
          <div className="flex gap-4 w-full">
            <div className="flex-1 bg-zinc-950/50 border border-white/5 p-4 rounded-2xl flex flex-col items-center gap-1">
              <Heart size={16} className="text-red-500 mb-1" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Public Trust</span>
              <span className="text-lg font-black text-white">{approval}%</span>
            </div>
            <div className="flex-1 bg-zinc-950/50 border border-white/5 p-4 rounded-2xl flex flex-col items-center gap-1">
              <Coins size={16} className="text-yellow-500 mb-1" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Treasury</span>
              <span className="text-lg font-black text-white">{budget.toLocaleString('id-ID')}</span>
            </div>
          </div>


          {/* Briefing Text */}
          <p className="text-zinc-400 text-sm leading-relaxed max-w-md font-medium italic">
            "Nasib jutaan rakyat {countryData.name_id} kini berada di tangan Anda. Kelola ekonomi, jaga pertahanan, dan jadilah pemimpin yang dikenang sepanjang masa."
          </p>

          {/* Action Button */}
          <button 
            onClick={() => {
              onClose();
              gameStorage.markWelcomeSeen();
            }}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black py-5 rounded-2xl shadow-[0_15px_30px_rgba(6,182,212,0.3)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.4)] transition-all cursor-pointer active:scale-95 text-sm uppercase tracking-[0.3em] overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">Mulai Tugas Negara</span>
          </button>
        </div>
      </div>
    </div>
  );
}
