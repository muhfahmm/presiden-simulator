"use client"

import { useState } from "react";
import { Radiation, Shield, Zap, AlertTriangle, Cpu, FlaskConical, Target, Binary, Plus } from "lucide-react";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";

interface Props {
  data: CountryData;
}

export default function TidakAdaProgramNuklir({ data }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-8 text-center animate-in fade-in zoom-in-95 duration-700">
      <div className="w-24 h-24 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/20 shadow-[0_0_50px_rgba(234,179,8,0.1)] mb-8">
        <Radiation size={48} className="text-yellow-500 opacity-30" />
      </div>
      
      <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">Program Nuklir Belum Aktif</h3>
      <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-sm mb-10">
        Negara Anda belum memiliki program pengembangan senjata nuklir strategis. Aktifkan program untuk memulai penelitian hulu ledak dan sistem pertahanan rudal global.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button className="py-5 bg-yellow-600 hover:bg-yellow-500 text-black font-black uppercase text-xs tracking-[0.2em] rounded-3xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
          <Plus size={16} />
          Inisiasi Program Nuklir
        </button>
        <button className="py-4 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 text-zinc-500 hover:text-white font-bold text-[10px] uppercase tracking-widest rounded-3xl transition-all">
          Pelajari Protokol Strategis
        </button>
      </div>

      <div className="mt-12 flex items-center gap-6 opacity-30">
        <div className="flex flex-col items-center gap-1">
          <Cpu size={16} className="text-zinc-500" />
          <span className="text-[8px] font-black uppercase">Teknologi</span>
        </div>
        <div className="h-[1px] w-8 bg-zinc-800"></div>
        <div className="flex flex-col items-center gap-1">
          <FlaskConical size={16} className="text-zinc-500" />
          <span className="text-[8px] font-black uppercase">Fisika</span>
        </div>
        <div className="h-[1px] w-8 bg-zinc-800"></div>
        <div className="flex flex-col items-center gap-1">
          <Shield size={16} className="text-zinc-500" />
          <span className="text-[8px] font-black uppercase">Keamanan</span>
        </div>
      </div>
    </div>
  );
}
