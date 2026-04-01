"use client"

import React from "react";
import { X, AlertTriangle, ShieldAlert, TrendingDown, ArrowRight } from "lucide-react";

interface KonfirmasiPemutusanProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  targetCountry: string;
  type: 'pakta' | 'aliansi';
}

export default function KonfirmasiPemutusan({ isOpen, onClose, onConfirm, targetCountry, type }: KonfirmasiPemutusanProps) {
  if (!isOpen) return null;

  const penalty = type === 'pakta' ? 25 : 50;
  const title = type === 'pakta' ? "Pemutusan Pakta Non-Agresi" : "Pengakhiran Aliansi Militer";
  
  return (
    <div className="fixed inset-0 z-[4000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Danger Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      <div className="bg-zinc-900 border border-red-500/30 rounded-[2.5rem] w-full max-w-md overflow-hidden shadow-[0_0_80px_rgba(239,68,68,0.2)] relative animate-in zoom-in-95 duration-200">
        
        {/* Header/Banner */}
        <div className="h-2 bg-red-600 w-full" />
        
        <div className="p-8 flex flex-col items-center text-center">
          
          <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20 mb-6 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
            <ShieldAlert className="h-8 w-8 text-red-500 animate-bounce" />
          </div>

          <h3 className="text-xl font-black text-white italic uppercase tracking-tighter mb-2">
            APAKAH ANDA YAKIN?
          </h3>
          <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest mb-6">
            Tindakan ini tidak dapat dibatalkan
          </p>

          <div className="w-full bg-zinc-950/60 rounded-2xl border border-zinc-800/80 p-5 mb-8 space-y-4">
            <p className="text-zinc-400 text-xs leading-relaxed">
              Anda akan memutus <span className="text-red-400 font-bold">{title}</span> dengan <span className="text-white font-bold">{targetCountry}</span> secara sepihak.
            </p>
            
            {/* Penalty Highlight */}
            <div className="flex items-center justify-center gap-4 py-3 bg-red-500/5 rounded-xl border border-red-500/10">
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1">Penalti Hubungan</span>
                <div className="flex items-center gap-2 text-red-500">
                  <TrendingDown size={14} />
                  <span className="text-xl font-black italic">-{penalty} POIN</span>
                </div>
              </div>
            </div>
            
            <p className="text-[10px] text-zinc-600 italic">
              *Negara sekutu lainnya mungkin akan mempertanyakan kredibilitas diplomatik Anda.
            </p>
          </div>

          <div className="flex w-full gap-3">
            <button 
              onClick={onClose}
              className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-[10px] font-black rounded-xl transition-all uppercase tracking-widest"
            >
              Batalkan
            </button>
            <button 
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="flex-1 py-4 bg-red-600 hover:bg-red-500 text-white text-[10px] font-black rounded-xl transition-all shadow-lg shadow-red-500/20 uppercase tracking-widest flex items-center justify-center gap-2 group"
            >
              Ya, Putuskan
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
