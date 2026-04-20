"use client"

import React from "react";
import { X, Handshake, CheckCircle2, Shield, Calendar, Info } from "lucide-react";

interface TandaTanganPaktaBerhasilProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
  duration: number;
}

export default function TandaTanganPaktaBerhasil({ isOpen, onClose, targetCountry, duration }: TandaTanganPaktaBerhasilProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-500">
      <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-[0_0_100px_rgba(34,197,94,0.15)] relative animate-in zoom-in-95 duration-300">
        
        {/* Success Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-green-500/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="p-10 flex flex-col items-center text-center">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-zinc-500 hover:text-zinc-200 transition-colors p-2 hover:bg-zinc-800/50 rounded-full cursor-pointer"
          >
            <X size={20} />
          </button>

          {/* Icon Animation Container */}
          <div className="relative mb-8 pt-4">
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)] border-4 border-zinc-900">
              <CheckCircle2 className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center border-2 border-zinc-900 shadow-lg">
              <Handshake size={20} className="text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase italic">
            Pakta Diaktifkan!
          </h2>
          
          <div className="flex items-center gap-2 mb-8">
            <div className="h-[1px] w-8 bg-zinc-800"></div>
            <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.3em]">RESMI & BERLAKU</span>
            <div className="h-[1px] w-8 bg-zinc-800"></div>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-xs">
            Kesepakatan perdamaian dengan <span className="text-indigo-400 font-bold underline decoration-indigo-400/30">{targetCountry}</span> telah resmi ditandatangani dan berlaku saat ini.
          </p>

          {/* Details Card */}
          <div className="w-full bg-zinc-950/50 border border-zinc-800/50 rounded-3xl p-6 mb-8 grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center border-r border-zinc-800/50">
              <Shield className="h-4 w-4 text-indigo-400 mb-2" />
              <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Jenis Pakta</span>
              <span className="text-sm font-bold text-zinc-200">Non-Agresi</span>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="h-4 w-4 text-emerald-400 mb-2" />
              <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Masa Berlaku</span>
              <span className="text-sm font-bold text-zinc-200">{duration} Tahun</span>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-5 bg-zinc-100 hover:bg-white text-zinc-950 font-black rounded-2xl transition-all shadow-xl active:scale-95 text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-2"
          >
            Selesai
          </button>
          
          <p className="mt-6 text-[9px] text-zinc-600 font-medium leading-normal max-w-[200px]">
            *Sistem akan memberikan notifikasi otomatis sebelum pakta berakhir.
          </p>
        </div>
      </div>
    </div>
  );
}
