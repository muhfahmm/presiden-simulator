"use client"

import React from "react";
import { X, AlertTriangle, Construction, ArrowRight, PackageOpen, Layers, Hammer, TreePine } from "lucide-react";

interface MissingMaterial {
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
  missingMaterials,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[201] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[32px] shadow-2xl max-w-md w-full mx-4 flex flex-col items-center text-center gap-6 animate-in zoom-in-95 duration-300 relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
        
        {/* Header Icon */}
        <div className="relative group">
          <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl group-hover:bg-amber-500/30 transition-all duration-500 scale-150" />
          <div className="relative p-5 bg-amber-500/10 rounded-full border border-amber-500/20 shadow-lg shadow-amber-900/20">
            <AlertTriangle className="h-10 w-10 text-amber-500 animate-pulse" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3 z-10">
          <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">
            Material Tidak Cukup!
          </h3>
          <p className="text-zinc-400 text-sm font-medium leading-relaxed">
            Stok material konstruksi di gudang tidak mencukupi untuk memulai pembangunan. 
            Silahkan tingkatkan produksi material atau beli dari pasar global.
          </p>
        </div>

        {/* Materials Breakdown */}
        <div className="w-full space-y-3 z-10">
          {missingMaterials.map((m, idx) => (
            <div key={idx} className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 text-amber-500">
                    <m.icon size={16} />
                  </div>
                  <span className="text-xs font-black text-white uppercase tracking-widest">{m.label}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block">Kurang</span>
                  <span className="text-sm font-black text-rose-500 tracking-widest">
                    -{(m.required - m.current).toLocaleString('id-ID')} T
                  </span>
                </div>
              </div>
              
              {/* Progress Bar for each missing material */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[9px] font-bold text-zinc-500 uppercase tracking-tighter">
                  <span>Stok: {m.current.toLocaleString('id-ID')} T</span>
                  <span>Butuh: {m.required.toLocaleString('id-ID')} T</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/30">
                  <div 
                    className="h-full bg-amber-500 transition-all duration-1000"
                    style={{ width: `${Math.min(100, (m.current / m.required) * 100)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col w-full gap-3 z-10 pt-2">
          <button 
            onClick={onClose}
            className="w-full py-4 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-amber-900/40 active:scale-95 flex items-center justify-center gap-2 group"
          >
            Kembali ke Hub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={onClose}
            className="w-full py-3 rounded-xl hover:bg-zinc-800/50 text-zinc-500 hover:text-zinc-300 font-bold text-[10px] uppercase tracking-[0.3em] transition-all"
          >
            Batalkan Pembangunan
          </button>
        </div>
        
        {/* Close Icon (Top Right) */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-zinc-500 hover:text-white transition-all cursor-pointer"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default JikaMaterialKurang;
