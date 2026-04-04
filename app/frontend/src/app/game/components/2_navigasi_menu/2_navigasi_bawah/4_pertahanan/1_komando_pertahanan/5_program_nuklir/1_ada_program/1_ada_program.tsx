"use client"

import { useState } from "react";
import { Radiation, Shield, Zap, AlertTriangle, Cpu, FlaskConical, Target, Binary } from "lucide-react";
import { CountryData } from "@/app/database/data/types/index";

interface Props {
  data: CountryData;
}

export default function AdaProgramNuklir({ data }: Props) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-zinc-900/50 border border-yellow-500/20 p-6 rounded-[32px] flex flex-col gap-2">
          <div className="flex items-center gap-2 text-yellow-500 mb-2">
            <Radiation size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Status Proyek</span>
          </div>
          <span className="text-4xl font-black text-white tracking-tighter italic">75%</span>
          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-yellow-500 w-[75%] shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex flex-col gap-2">
          <div className="flex items-center gap-2 text-zinc-500 mb-2">
            <Binary size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Hulu Ledak Aktif</span>
          </div>
          <span className="text-4xl font-black text-white tracking-tighter italic">2 <span className="text-xs text-zinc-500 tracking-widest uppercase ml-1 italic">Unit</span></span>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex flex-col gap-2">
          <div className="flex items-center gap-2 text-rose-500 mb-2">
            <Target size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Jangkauan Rudal</span>
          </div>
          <span className="text-4xl font-black text-white tracking-tighter italic">5,500 <span className="text-xs text-zinc-500 tracking-widest uppercase ml-1 italic">KM</span></span>
        </div>
      </div>

      <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-[40px] p-8">
        <h4 className="text-sm font-black text-zinc-400 uppercase tracking-[0.3em] mb-6">Manajemen Strategis</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="py-4 rounded-2xl bg-zinc-800 border border-zinc-700 text-white font-bold text-xs uppercase tracking-widest hover:bg-zinc-700 transition-all active:scale-95">
            Pengayaan Uranium
          </button>
          <button className="py-4 rounded-2xl bg-zinc-800 border border-zinc-700 text-white font-bold text-xs uppercase tracking-widest hover:bg-zinc-700 transition-all active:scale-95">
            Uji Coba Lapangan
          </button>
          <button className="py-4 rounded-2xl bg-zinc-800 border border-zinc-700 text-white font-bold text-xs uppercase tracking-widest hover:bg-zinc-700 transition-all active:scale-95">
            Sistem Peluncuran
          </button>
          <button className="py-4 rounded-2xl bg-rose-600 border border-rose-500 text-white font-black text-xs uppercase tracking-widest shadow-lg active:scale-95">
            OTORISASI SERANGAN
          </button>
        </div>
      </div>
    </div>
  );
}
