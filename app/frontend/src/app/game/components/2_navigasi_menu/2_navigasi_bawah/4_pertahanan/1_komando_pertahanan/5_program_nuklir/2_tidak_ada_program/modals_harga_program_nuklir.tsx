"use client"

import { useState, useEffect } from "react";
import { X, Radiation, Coins, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, Zap, Clock, Calendar } from "lucide-react";
import { CountryData } from "@/app/database/data/types/index";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { nuclearStorage } from "../nuclearStorage";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: CountryData;
  onConfirm: () => void;
}

export default function ModalsHargaProgramNuklir({ isOpen, onClose, data, onConfirm }: Props) {
  const [currentBudget, setCurrentBudget] = useState(budgetStorage.getBudget());
  
  useEffect(() => {
    const handleUpdate = () => {
      setCurrentBudget(budgetStorage.getBudget());
    };
    window.addEventListener('budget_storage_updated', handleUpdate);
    return () => window.removeEventListener('budget_storage_updated', handleUpdate);
  }, []);

  if (!isOpen || !data) return null;

  const PRICE = 50000000;
  const canAfford = currentBudget >= PRICE;

  return (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-[110] flex items-center justify-center p-4 animate-in fade-in duration-300 text-left">
      <div className="bg-zinc-950 border border-yellow-500/40 rounded-[40px] w-full max-w-[95vw] h-[82vh] shadow-[0_0_80px_rgba(234,179,8,0.2)] flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Decorative Background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10 w-full mb-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/10 rounded-xl">
              <Radiation className="h-6 w-6 text-yellow-500 animate-pulse" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase leading-none">Inisiasi Program</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Otoritas Strategis Level Omega</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Batal</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content wrapper for height management */}
        <div className="flex-1 overflow-y-auto p-12 no-scrollbar">
           <div className="max-w-xl mx-auto space-y-10">

        {/* Content */}
        <div className="space-y-8 relative z-10">
          {/* Price Card */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-[32px] p-8 flex flex-col items-center gap-3 group hover:bg-zinc-800/50 transition-all">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">Total Biaya Inisiasi</span>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3">
                <Coins className={`h-6 w-6 ${canAfford ? 'text-emerald-500' : 'text-yellow-500'}`} />
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-black tracking-tighter ${canAfford ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {PRICE.toLocaleString('id-ID')}
                  </span>
                  <span className="text-xl font-black text-zinc-700">/</span>
                  <span className="text-xl font-black text-white tracking-tight">
                    {Math.round(currentBudget).toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                 <div className={`h-1 w-24 rounded-full ${canAfford ? 'bg-emerald-500/20' : 'bg-rose-500/10'}`}>
                    <div 
                      className={`h-full rounded-full ${canAfford ? 'bg-emerald-500' : 'bg-rose-500'}`} 
                      style={{ width: `${Math.min(100, (currentBudget / PRICE) * 100)}%` }}
                    ></div>
                 </div>
                 <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest italic">Kas Negara Saat Ini</span>
              </div>
            </div>
            
            <span className="text-xs font-black text-zinc-600 uppercase tracking-widest italic mt-1">Currency: GOLD</span>
          </div>

          {/* Warning/Info */}
          <div className={`p-5 rounded-3xl border flex items-start gap-4 ${canAfford ? 'bg-zinc-900/30 border-zinc-800/80' : 'bg-rose-500/5 border-rose-500/20'}`}>
            {canAfford ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
            ) : (
              <ShieldAlert className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
            )}
            <p className="text-[11px] font-medium leading-relaxed text-zinc-400">
              {canAfford 
                ? "Anggaran negara mencukupi untuk memulai riset. Program ini akan membuka akses ke pengayaan uranium dan pengembangan hulu ledak."
                : "Anggaran negara saat ini tidak mencukupi. Tingkatkan pendapatan nasional melalui pajak atau perdagangan produk hilirisasi mineral kritis."}
            </p>
          </div>

          {/* Requirements Grid */}
          <div className="grid grid-cols-3 gap-3">
             <div className="bg-zinc-900/30 border border-zinc-800 p-4 rounded-[28px] flex items-center justify-center gap-3 group hover:bg-zinc-800/50 transition-all border-b-yellow-500/10">
                <Zap size={16} className="text-yellow-500" />
                <span className="text-[10px] font-black text-zinc-400 group-hover:text-zinc-200 uppercase tracking-widest leading-none">Energi Tinggi</span>
             </div>
             <div className="bg-zinc-900/30 border border-zinc-800 p-4 rounded-[28px] flex items-center justify-center gap-3 group hover:bg-zinc-800/50 transition-all border-b-cyan-500/10">
                <Clock size={16} className="text-cyan-500" />
                <span className="text-[10px] font-black text-zinc-400 group-hover:text-zinc-200 uppercase tracking-widest leading-none">Waktu Intensif</span>
             </div>
             <div className="bg-zinc-900/30 border border-zinc-800 p-4 rounded-[28px] flex items-center justify-center gap-3 group hover:bg-zinc-800/50 transition-all border-b-rose-500/10">
                <Calendar size={16} className="text-rose-500" />
                <span className="text-[10px] font-black text-zinc-400 group-hover:text-zinc-200 uppercase tracking-widest leading-none">360 Hari</span>
             </div>
          </div>
        </div>

           </div>
        </div>

        {/* Footer info (Moving confirm button here or leaving it in content) */}
        <div className="px-10 py-6 bg-zinc-900/30 border-t border-zinc-900 flex justify-end items-center relative z-10">
           <button 
            disabled={!canAfford}
            onClick={() => {
              const gameDate = timeStorage.getState().gameDate;
              budgetStorage.updateBudget(-PRICE);
              nuclearStorage.initiate(gameDate);
              onConfirm();
            }}
            className={`px-12 py-5 rounded-[24px] font-black uppercase text-xs tracking-[0.2em] shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
              canAfford 
                ? 'bg-yellow-600 text-black hover:bg-yellow-500 shadow-yellow-600/20' 
                : 'bg-zinc-800 text-zinc-600 cursor-not-allowed opacity-50'
            }`}
          >
            Konfirmasi Inisiasi <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
