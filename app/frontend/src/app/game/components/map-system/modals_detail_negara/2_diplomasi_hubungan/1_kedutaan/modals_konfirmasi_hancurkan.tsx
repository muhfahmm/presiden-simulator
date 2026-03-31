"use client"

import React from "react";
import { AlertTriangle, X, Trash2, ShieldAlert } from "lucide-react";

interface ModalKonfirmasiHancurkanProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  targetCountry: string;
}

export default function ModalKonfirmasiHancurkan({
  isOpen,
  onClose,
  onConfirm,
  targetCountry
}: ModalKonfirmasiHancurkanProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 bg-black/20 animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-md overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.6)] relative animate-in zoom-in-95 duration-300">
        {/* Warning Accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-red-600"></div>
        
        {/* Header */}
        <div className="p-6 pb-2 flex justify-end">
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-red-400 transition-colors p-2 hover:bg-red-500/10 rounded-xl cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20 mb-6 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
            <AlertTriangle className="h-10 w-10 text-red-500 animate-pulse" />
          </div>
          
          <h2 className="text-2xl font-black text-white uppercase tracking-tight italic mb-2">
            Konfirmasi Penghancuran
          </h2>
          <p className="text-zinc-400 text-sm font-medium mb-8">
            Apakah Anda yakin ingin menghancurkan Kedutaan Besar di <span className="text-red-400 font-bold underline decoration-red-500/30 underline-offset-4">{targetCountry}</span>?
          </p>

          {/* Warning Card */}
          <div className="w-full bg-red-500/5 border border-red-500/10 rounded-2xl overflow-hidden mb-8 p-5 flex flex-col gap-3">
            <div className="flex items-start gap-3 text-left">
              <ShieldAlert size={16} className="text-red-500 mt-0.5 shrink-0" />
              <p className="text-[10px] leading-relaxed font-bold text-red-400/80 uppercase tracking-wider">
                Tindakan ini akan merusak hubungan diplomatik secara permanen dan memicu ketegangan regional.
              </p>
            </div>
          </div>

          {/* Buttons Group */}
          <div className="w-full flex flex-col gap-3">
            <button 
              onClick={onConfirm}
              className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black rounded-2xl transition-all border border-red-400/20 active:scale-[0.98] shadow-lg text-xs uppercase tracking-[0.2em] shadow-red-900/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Trash2 size={16} />
              Ya, Hancurkan Sekarang
            </button>
            <button 
              onClick={onClose}
              className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white font-black rounded-2xl transition-all border border-zinc-700/50 active:scale-[0.98] text-xs uppercase tracking-[0.2em] cursor-pointer"
            >
              Batalkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
