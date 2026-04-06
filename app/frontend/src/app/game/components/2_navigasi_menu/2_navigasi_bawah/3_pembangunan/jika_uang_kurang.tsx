"use client"

import React from "react";
import { X, AlertOctagon, Landmark, ArrowRight, Coins, Package2 } from "lucide-react";

export interface MissingMaterial {
  label: string;
  required: number;
  current: number;
  icon: any;
}

interface JikaUangKurangProps {
  isOpen: boolean;
  onClose: () => void;
  requiredAmount: number;
  currentBalance: number;
  missingMaterials?: MissingMaterial[];
}

const JikaUangKurang: React.FC<JikaUangKurangProps> = ({
  isOpen,
  onClose,
  requiredAmount,
  currentBalance,
  missingMaterials = [],
}) => {
  if (!isOpen) return null;

  const shortage = requiredAmount - currentBalance;
  const isMoneyShort = shortage > 0;
  const hasMissingMaterials = missingMaterials.length > 0;

  // Dynamic Title Logic based on shortage type
  let mainTitle = "Keuangan Tidak Cukup!";
  let subTitle = "Kas Negara Tidak Memadai";

  if (isMoneyShort && hasMissingMaterials) {
    mainTitle = "Sumber Daya dan Keuangan Tidak Cukup!";
    subTitle = "Anggaran & Material Tidak Memadai";
  } else if (hasMissingMaterials) {
    mainTitle = "Sumber Daya Tidak Cukup!";
    subTitle = "Logistik Konstruksi Tidak Memadai";
  } else if (isMoneyShort) {
    mainTitle = "Keuangan Tidak Cukup!";
    subTitle = "Kas Negara Tidak Memadai";
  }
 
  // Material section title logic - Standardized to "Juga Tidak Cukup"
  const materialSectionTitle = "Material Juga Tidak Cukup";

  return (
    <div className="absolute inset-0 z-[202] flex items-center justify-center bg-black/70 backdrop-blur-lg animate-in fade-in duration-300 px-4">
      <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-lg w-full flex flex-col items-center text-center gap-6 animate-in zoom-in-95 duration-500 relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        
        {/* Header Icon */}
        <div className="relative group">
          <div className="absolute inset-0 bg-rose-500/20 rounded-full blur-xl group-hover:bg-rose-500/30 transition-all duration-500 scale-150" />
          <div className="relative p-5 bg-rose-500/10 rounded-full border border-rose-500/20 shadow-lg shadow-rose-900/20 text-rose-500">
            <AlertOctagon className="h-10 w-10 animate-pulse" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2 z-10">
          <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic leading-none">
            {mainTitle}
          </h3>
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] opacity-80">
            {subTitle}
          </p>
        </div>

        {/* Breakdown Container */}
        <div className="w-full space-y-4 z-10 py-2 text-left">
          {/* Pricing Breakdown */}
          <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-5 flex flex-col gap-4 relative group hover:border-rose-500/30 transition-colors shadow-inner">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-zinc-950/50 rounded-lg text-zinc-500 border border-zinc-800">
                  <Landmark size={14} />
                </div>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Kas Saat Ini</span>
              </div>
              <span className="text-sm font-black text-white tracking-widest">{currentBalance.toLocaleString('id-ID')}</span>
            </div>
            
            <div className="h-[1px] w-full bg-zinc-800/50" />
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className={`p-1.5 rounded-lg border ${isMoneyShort ? "bg-rose-500/10 text-rose-500 border-rose-500/20" : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"}`}>
                  <Coins size={14} />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest italic leading-none ${isMoneyShort ? "text-rose-500" : "text-emerald-500"}`}>Biaya Dibutuhkan</span>
              </div>
              <span className={`text-sm font-black tracking-widest ${isMoneyShort ? "text-rose-500" : "text-emerald-500"}`}>{requiredAmount.toLocaleString('id-ID')}</span>
            </div>

          </div>

          {/* Material Breakdown Section (Conditional) */}
          {hasMissingMaterials && (
            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-5 flex flex-col gap-4 relative group hover:border-rose-500/30 transition-colors shadow-inner">
              <div className="flex items-center gap-2.5 mb-1 text-left">
                <div className="p-1.5 bg-rose-500/10 rounded-lg text-rose-500 border border-rose-500/20">
                  <Package2 size={14} />
                </div>
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest leading-none italic">{materialSectionTitle}</span>
              </div>
              
              <div className="grid grid-cols-1 gap-2.5">
                {missingMaterials.map((m, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-end px-1">
                      <div className="flex items-center gap-2">
                        <m.icon size={12} className="text-zinc-500 font-bold" />
                        <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">{m.label}</span>
                      </div>
                      <span className="text-[10px] font-black text-amber-500">
                        Stok: {m.current.toLocaleString('id-ID')} <span className="text-zinc-600">/ {m.required.toLocaleString('id-ID')} T</span>
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/30">
                      <div 
                        className="h-full bg-gradient-to-r from-rose-600 to-rose-400 opacity-80 transition-all duration-1000"
                        style={{ width: `${Math.min(100, (m.current / m.required) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col w-full gap-3 z-10 pt-2">
          <button 
            onClick={onClose}
            className="w-full py-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs uppercase tracking-[0.2em] transition-all cursor-pointer shadow-[0_10px_20px_rgba(225,29,72,0.3)] active:scale-95 flex items-center justify-center gap-2 group"
          >
            Tutup & Evaluasi Strategi
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
          <button 
            onClick={onClose}
            className="w-full py-3 rounded-xl hover:bg-zinc-900 border border-transparent hover:border-zinc-800 text-zinc-500 hover:text-zinc-300 font-bold text-[9px] uppercase tracking-[0.4em] transition-all"
          >
            Batalkan Pembangunan
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

export default JikaUangKurang;
