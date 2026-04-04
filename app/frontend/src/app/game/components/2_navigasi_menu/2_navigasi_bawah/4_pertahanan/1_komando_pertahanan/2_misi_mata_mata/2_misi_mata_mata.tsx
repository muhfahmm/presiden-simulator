"use client"

import { useState } from "react";
import { X, Eye, Shield, Zap, Clock, Search, MapPin } from "lucide-react";
import { CountryData } from "@/app/database/data/types/index";
import NavigasiWaktu from "../../../2_ekonomi/1-perdagangan/NavigasiWaktu";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: CountryData;
}

export default function MisiMataMataModal({ isOpen, onClose, data }: Props) {
  if (!isOpen || !data) return null;

  return (
    <div className="absolute inset-0 bg-black/95 z-[80] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">
      <div className="bg-zinc-950 border border-indigo-500/20 rounded-[40px] w-full max-w-4xl h-[70vh] overflow-hidden shadow-[0_0_100px_rgba(99,102,241,0.15)] flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 rounded-xl">
              <Eye className="h-6 w-6 text-indigo-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Misi Mata-mata</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Intelligence & Espionage Agency</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <NavigasiWaktu />
            <button onClick={onClose} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer active:scale-95 group flex items-center gap-2">
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-12 no-scrollbar relative z-10 flex flex-col items-center justify-center text-center">
          <div className="max-w-md space-y-6">
            <div className="w-24 h-24 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
              <Search className="h-10 w-10 text-indigo-400 animate-pulse" />
            </div>
            <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">Biro Intelijen Strategis</h3>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">
              Pantau aktivitas musuh, saring informasi rahasia, dan jalankan misi penyusupan gelap. Informasi adalah senjata paling mematikan dalam perang dingin maupun terbuka.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
               <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-3xl">
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest block mb-1">Agen Aktif</span>
                  <span className="text-xl font-black text-indigo-400">0 PERSONEL</span>
               </div>
               <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-3xl">
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest block mb-1">Negara Target</span>
                  <span className="text-xl font-black text-white">0 LOKASI</span>
               </div>
            </div>

            <button className="w-full py-5 rounded-[24px] bg-indigo-600 text-white font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:bg-indigo-500 transition-all active:scale-95 mt-4">
              Rekrut Agen Lapangan
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-8 py-4 bg-indigo-500/5 border-t border-indigo-500/10 flex justify-center italic">
          <span className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.3em]">Hanya Untuk Mata-Mata Tertinggi</span>
        </div>
      </div>
    </div>
  );
}
