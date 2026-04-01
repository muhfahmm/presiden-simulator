"use client"

import React from "react";
import { X, AlertOctagon, Landmark, ArrowRight, Coins } from "lucide-react";

interface JikaUangKurangProps {
  isOpen: boolean;
  onClose: () => void;
  requiredAmount: number;
  currentBalance: number;
}

const JikaUangKurang: React.FC<JikaUangKurangProps> = ({
  isOpen,
  onClose,
  requiredAmount,
  currentBalance,
}) => {
  if (!isOpen) return null;

  const shortage = requiredAmount - currentBalance;

  return (
    <div className="absolute inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[32px] shadow-2xl max-w-md w-full mx-4 flex flex-col items-center text-center gap-6 animate-in zoom-in-95 duration-300 relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl" />
        
        {/* Header Icon */}
        <div className="relative group">
          <div className="absolute inset-0 bg-rose-500/20 rounded-full blur-xl group-hover:bg-rose-500/30 transition-all duration-500 scale-150" />
          <div className="relative p-5 bg-rose-500/10 rounded-full border border-rose-500/20 shadow-lg shadow-rose-900/20">
            <AlertOctagon className="h-10 w-10 text-rose-500 animate-pulse" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3 z-10">
          <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">
            Anggaran Tidak Cukup!
          </h3>
          <p className="text-zinc-400 text-sm font-medium leading-relaxed">
            Kas negara tidak memiliki dana yang memadai untuk melanjutkan pembangunan ini. 
            Silahkan tingkatkan pendapatan atau cairkan obligasi negara.
          </p>
        </div>

        {/* Pricing Breakdown */}
        <div className="w-full space-y-3 z-10">
          <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-zinc-500">
                <Landmark size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Kas Saat Ini</span>
              </div>
              <span className="text-sm font-black text-white tracking-widest">{currentBalance.toLocaleString('id-ID')}</span>
            </div>
            
            <div className="h-[1px] w-full bg-zinc-800/50" />
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-rose-500">
                <Coins size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest italic">Biaya Dibutuhkan</span>
              </div>
              <span className="text-sm font-black text-rose-500 tracking-widest">{requiredAmount.toLocaleString('id-ID')}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 py-2 px-4 bg-rose-500/5 rounded-xl border border-rose-500/10">
            <span className="text-[10px] font-black text-rose-400 uppercase tracking-[0.2em]">Kekurangan Dana:</span>
            <span className="text-lg font-black text-rose-500 tracking-tighter">-{shortage.toLocaleString('id-ID')}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col w-full gap-3 z-10 pt-2">
          <button 
            onClick={onClose}
            className="w-full py-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-rose-900/40 active:scale-95 flex items-center justify-center gap-2 group"
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
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-zinc-500 hover:text-white transition-all transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default JikaUangKurang;
