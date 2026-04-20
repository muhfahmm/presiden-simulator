"use client"

import React from "react";
import { CheckCircle, X, Landmark, Globe } from "lucide-react";

interface ModalJikaTerbangunProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
}

export default function ModalJikaTerbangun({
  isOpen,
  onClose,
  targetCountry
}: ModalJikaTerbangunProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[4000] flex items-center justify-center p-4 bg-black/20 animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-emerald-500/30 rounded-3xl w-full max-w-md overflow-hidden shadow-[0_0_100px_rgba(16,185,129,0.15)] relative animate-in zoom-in-95 duration-300">
        {/* Success Accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-600 via-teal-400 to-emerald-600"></div>
        
        {/* Header */}
        <div className="p-6 pb-2 flex justify-end">
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-200 transition-colors p-2 hover:bg-zinc-800/60 rounded-xl cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <CheckCircle className="h-10 w-10 text-emerald-500 animate-bounce" />
          </div>
          
          <h2 className="text-2xl font-black text-white uppercase tracking-tight italic mb-2">
            Pembangunan Selesai
          </h2>
          <p className="text-zinc-400 text-sm font-medium mb-8 max-w-[280px]">
            Selamat! Kedutaan Besar Republik untuk <span className="text-emerald-400 font-bold">{targetCountry}</span> resmi didirikan.
          </p>

          {/* Details Card */}
          <div className="w-full bg-zinc-950/50 border border-zinc-800/50 rounded-2xl overflow-hidden mb-8 p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-emerald-400" />
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Status Diplomatik</span>
              </div>
              <span className="text-xs font-black text-emerald-500 uppercase tracking-tighter bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">
                Aktif & Terjalin
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Landmark size={16} className="text-zinc-500" />
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Fasilitas</span>
              </div>
              <span className="text-xs font-black text-zinc-300">
                Kedutaan Besar (Lvl 1)
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all border border-emerald-400/20 active:scale-[0.98] shadow-lg text-xs uppercase tracking-[0.2em] shadow-emerald-900/20 cursor-pointer"
          >
            Lanjutkan Diplomasi
          </button>
        </div>
      </div>
    </div>
  );
}
