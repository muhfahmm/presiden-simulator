"use client"

import React from "react";
import { Handshake, X, HeartCrack, Landmark } from "lucide-react";

interface ModalJikaHubunganKurangProps {
  isOpen: boolean;
  onClose: () => void;
  currentRelation: number;
  requiredRelation: number;
}

export default function ModalJikaHubunganKurang({
  isOpen,
  onClose,
  currentRelation,
  requiredRelation
}: ModalJikaHubunganKurangProps) {
  if (!isOpen) return null;

  const deficit = requiredRelation - currentRelation;

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/20 animate-in fade-in duration-300">
      <div className="bg-zinc-900/80 backdrop-blur-xl border border-orange-500/30 rounded-3xl w-full max-w-md overflow-hidden shadow-[0_0_100px_rgba(249,115,22,0.15)] relative animate-in zoom-in-95 duration-300">
        {/* Warning Accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600"></div>
        
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
          <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20 mb-6 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <HeartCrack className="h-10 w-10 text-orange-500 animate-pulse" />
          </div>
          
          <h2 className="text-2xl font-black text-white uppercase tracking-tight italic mb-2">
            Hubungan Buruk
          </h2>
          <p className="text-zinc-400 text-sm font-medium mb-8 max-w-[280px]">
            Negara tujuan menolak proposal Anda. Hubungan diplomatik saat ini terlalu rendah untuk mendirikan Kedutaan Besar.
          </p>

          {/* Relation Comparison Card */}
          <div className="w-full bg-zinc-950/50 border border-zinc-800/50 rounded-2xl overflow-hidden mb-8">
            <div className="p-4 border-b border-zinc-900 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Handshake size={14} className="text-zinc-500" />
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Skor Saat Ini</span>
              </div>
              <span className="text-sm font-black text-zinc-300">{currentRelation}</span>
            </div>
            <div className="p-4 border-b border-zinc-900 flex justify-between items-center bg-orange-500/5">
              <div className="flex items-center gap-2">
                <Landmark size={14} className="text-orange-400" />
                <span className="text-[10px] font-bold text-orange-400/80 uppercase tracking-widest">Syarat Minimal</span>
              </div>
              <span className="text-sm font-black text-orange-400">{requiredRelation}</span>
            </div>
            <div className="p-4 bg-zinc-900/30 flex justify-between items-center">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Kekurangan</span>
              <span className="text-lg font-black text-orange-500 italic">-{deficit} Poin</span>
            </div>
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-black rounded-2xl transition-all border border-zinc-700/50 active:scale-[0.98] shadow-lg text-xs uppercase tracking-[0.2em] cursor-pointer"
          >
            Saya Mengerti
          </button>
        </div>
      </div>
    </div>
  );
}
