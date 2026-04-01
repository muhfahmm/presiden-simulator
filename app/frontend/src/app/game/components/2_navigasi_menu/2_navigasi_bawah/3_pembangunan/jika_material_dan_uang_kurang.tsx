"use client"

import React from "react";
import { X, AlertCircle, Landmark, Coins, ArrowRight, Layers, Hammer, TreePine, Package2 } from "lucide-react";

interface MissingMaterial {
  label: string;
  required: number;
  current: number;
  icon: any;
}

interface JikaMaterialDanUangKurangProps {
  isOpen: boolean;
  onClose: () => void;
  requiredAmount: number;
  currentBalance: number;
  missingMaterials: MissingMaterial[];
}

const JikaMaterialDanUangKurang: React.FC<JikaMaterialDanUangKurangProps> = ({
  isOpen,
  onClose,
  requiredAmount,
  currentBalance,
  missingMaterials,
}) => {
  if (!isOpen) return null;

  const moneyShortage = requiredAmount - currentBalance;

  return (
    <div className="absolute inset-0 z-[202] flex items-center justify-center bg-black/70 backdrop-blur-lg animate-in fade-in duration-300 px-4">
      <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-2xl w-full flex flex-col items-center text-center gap-8 animate-in zoom-in-95 duration-500 relative overflow-hidden">
        
        {/* Animated Background Gradients */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-rose-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/40 to-amber-500/40 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
            <div className="relative p-6 bg-zinc-900 border border-zinc-800 rounded-full shadow-inner">
              <AlertCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic leading-none">
              Krisis Sumber Daya!
            </h2>
            <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em] opacity-80">
              Anggaran & Material Tidak Mencukupi
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full z-10">
          {/* Financial Gap Section */}
          <div className="flex flex-col gap-4 p-6 bg-zinc-900/40 border border-zinc-800/60 rounded-3xl relative group hover:border-rose-500/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-rose-500/10 rounded-xl text-rose-500">
                <Landmark size={18} />
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-widest">Defisit Anggaran</h4>
            </div>
            
            <div className="space-y-3 mt-2">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Kekurangan</span>
                <span className="text-xl font-black text-rose-500">-{moneyShortage.toLocaleString('id-ID')}</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-rose-500 transition-all duration-1000"
                  style={{ width: `${Math.min(100, (currentBalance / requiredAmount) * 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-[8px] font-black text-zinc-600 uppercase tracking-tighter">
                <span>Kas: {currentBalance.toLocaleString('id-ID')}</span>
                <span>Butuh: {requiredAmount.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>

          {/* Material Gap Section */}
          <div className="flex flex-col gap-4 p-6 bg-zinc-900/40 border border-zinc-800/60 rounded-3xl relative group hover:border-amber-500/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 rounded-xl text-amber-500">
                <Package2 size={18} />
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-widest">Defisit Material</h4>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              {missingMaterials.slice(0, 3).map((m, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <m.icon size={12} className="text-zinc-500" />
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">{m.label}</span>
                  </div>
                  <span className="text-[10px] font-black text-amber-500">
                    -{(m.required - m.current).toLocaleString('id-ID')} T
                  </span>
                </div>
              ))}
              {missingMaterials.length === 0 && (
                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter italic">Material Mencukupi</p>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col w-full gap-4 z-10">
          <button 
            onClick={onClose}
            className="w-full py-5 rounded-[24px] bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-black text-sm uppercase tracking-[0.2em] transition-all cursor-pointer shadow-[0_10px_30px_rgba(225,29,72,0.3)] active:scale-95 flex items-center justify-center gap-3 group"
          >
            Tutup & Evaluasi Strategi
            <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
          <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.4em] animate-pulse">
            Pembangunan Diblokir Sementara
          </p>
        </div>

        {/* Close Button Overlay */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 rounded-2xl hover:bg-white/5 text-zinc-600 hover:text-white transition-all cursor-pointer border border-transparent hover:border-zinc-800"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
};

export default JikaMaterialDanUangKurang;
