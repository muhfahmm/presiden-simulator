"use client"

import React from "react";
import { Hammer, X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KirimHadiahModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600"></div>
        
        <div className="p-6 flex flex-col items-center text-center">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-200 transition-colors p-1"
          >
            <X size={18} />
          </button>

          <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <Hammer className="h-8 w-8 text-amber-500 animate-pulse" />
          </div>

          <h3 className="text-xl font-bold text-zinc-100 mb-2">Kirim Hadiah</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Maaf, fitur ini sedang <span className="text-amber-500 font-semibold italic">dalam proses pengembangan</span>. Nantikan pembaruan selanjutnya!
          </p>

          <button 
            onClick={onClose}
            className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold rounded-xl transition-all border border-zinc-700/50 hover:border-zinc-600 shadow-lg active:scale-95"
          >
            Mengerti
          </button>
        </div>
      </div>
    </div>
  );
}
