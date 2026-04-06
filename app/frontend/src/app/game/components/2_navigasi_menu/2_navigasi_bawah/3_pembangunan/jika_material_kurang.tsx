"use client"

import React from "react";
import { X, AlertTriangle, ArrowRight, Package2, Layers, Hammer, TreePine } from "lucide-react";

export interface MissingMaterial {
  label: string;
  required: number;
  current: number;
  icon: any;
}

interface JikaMaterialKurangProps {
  isOpen: boolean;
  onClose: () => void;
  missingMaterials: MissingMaterial[];
}

const JikaMaterialKurang: React.FC<JikaMaterialKurangProps> = ({
  isOpen,
  onClose,
  missingMaterials = [],
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[203] flex items-center justify-center bg-black/70 backdrop-blur-lg animate-in fade-in duration-300 px-4">
      <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-lg w-full flex flex-col items-center text-center gap-6 animate-in zoom-in-95 duration-500 relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        
        {/* Header Icon */}
        <div className="relative group">
          <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl group-hover:bg-amber-500/30 transition-all duration-500 scale-150" />
          <div className="relative p-5 bg-amber-500/10 rounded-full border border-amber-500/20 shadow-lg shadow-amber-900/20 text-amber-500">
            <AlertTriangle className="h-10 w-10 animate-pulse" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2 z-10">
          <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic leading-none">
            Material Tidak Cukup!
          </h3>
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] opacity-80">
            Logistik Konstruksi Tidak Memadai
          </p>
        </div>

        {/* Breakdown Container */}
        <div className="w-full space-y-4 z-10 py-2">
          <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-6 flex flex-col gap-5 relative group hover:border-amber-500/30 transition-colors shadow-inner">
            <div className="flex items-center gap-2.5 mb-1">
              <div className="p-1.5 bg-amber-500/10 rounded-lg text-amber-500 border border-amber-500/20">
                <Package2 size={14} />
              </div>
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest leading-none italic">Daftar Kekurangan Material</span>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {missingMaterials.map((m, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex justify-between items-end px-1">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-zinc-950/50 rounded-lg text-amber-500/50 border border-zinc-800">
                        <m.icon size={14} />
                      </div>
                      <span className="text-[11px] font-black text-zinc-300 uppercase tracking-widest">{m.label}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] font-black text-rose-500 uppercase tracking-tighter mb-0.5">Defisit: -{(m.required - m.current).toLocaleString('id-ID')} T</span>
                      <span className="text-[10px] font-black text-amber-500 tracking-tighter">
                        {m.current.toLocaleString('id-ID')} <span className="text-zinc-600">/ {m.required.toLocaleString('id-ID')} T</span>
                      </span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/30 p-[1px]">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                      style={{ width: `${Math.min(100, (m.current / m.required) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="px-6 py-3 bg-amber-500/5 rounded-2xl border border-amber-500/10 text-[10px] font-medium text-amber-500/70 italic leading-relaxed">
            Penuhi kebutuhan material melalui produksi nasional atau lakukan impor di pasar komoditas global.
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col w-full gap-3 z-10">
          <button 
            onClick={onClose}
            className="w-full py-4 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-black text-xs uppercase tracking-[0.2em] transition-all cursor-pointer shadow-[0_10px_20px_rgba(245,158,11,0.3)] active:scale-95 flex items-center justify-center gap-2 group"
          >
            Kembali ke Hub
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
          <button 
            onClick={onClose}
            className="w-full py-3 rounded-xl hover:bg-zinc-900 border border-transparent hover:border-zinc-800 text-zinc-500 hover:text-zinc-300 font-bold text-[9px] uppercase tracking-[0.4em] transition-all"
          >
            Abaikan & Batalkan
          </button>
        </div>
        
        {/* Close Icon (Top Right) */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 rounded-2xl hover:bg-white/5 text-zinc-600 hover:text-white transition-all cursor-pointer border border-transparent hover:border-zinc-800"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default JikaMaterialKurang;

