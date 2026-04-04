"use client"

import { useState, useEffect } from "react";
import { X, Radiation, Clock, Calendar, Shield, Zap, AlertTriangle, Loader2 } from "lucide-react";
import { CountryData } from "@/app/database/data/types/index";
import { nuclearStorage } from "../nuclearStorage";
import NavigasiWaktu from "../../../../2_ekonomi/1-perdagangan/NavigasiWaktu";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: CountryData;
}

export default function ModalsKonstruksiNuklir({ isOpen, onClose, data }: Props) {
  const [daysLeft, setDaysLeft] = useState(nuclearStorage.getDaysRemaining());

  useEffect(() => {
    const handleUpdate = () => {
      setDaysLeft(nuclearStorage.getDaysRemaining());
    };
    window.addEventListener('nuclear_storage_updated', handleUpdate);
    return () => window.removeEventListener('nuclear_storage_updated', handleUpdate);
  }, []);

  if (!isOpen || !data) return null;

  const progress = ((360 - daysLeft) / 360) * 100;

  return (
    <div className="absolute inset-0 bg-black/95 z-[80] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500 text-left">
      <div className="bg-zinc-950 border border-yellow-500/20 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-[0_0_100px_rgba(234,179,8,0.15)] flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/10 rounded-xl">
              <Radiation className="h-6 w-6 text-yellow-500 animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase leading-none">Konstruksi Strategis</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-[0.3em] mt-1 italic">Nuclear Facility Under Construction</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <NavigasiWaktu />
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-12 no-scrollbar relative z-10 flex flex-col items-center justify-center text-center">
          <div className="max-w-2xl w-full space-y-10">
            
            {/* Status Radar/Icon */}
            <div className="relative w-48 h-48 mx-auto">
               <div className="absolute inset-0 bg-yellow-500/5 rounded-full animate-ping"></div>
               <div className="absolute inset-4 border border-yellow-500/20 rounded-full border-dashed animate-spin-slow"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-[32px] shadow-2xl relative z-10">
                     <Loader2 className="h-16 w-16 text-yellow-500 animate-spin" />
                  </div>
               </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">Pembangunan Berjalan</h3>
               <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-md mx-auto">
                  Fasilitas pengayaan dan riset strategis sedang dibangun. Protokol keamanan level Omega aktif di seluruh radius area konstruksi.
               </p>
            </div>

            {/* Countdown Grid */}
            <div className="grid grid-cols-3 gap-6">
               <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex flex-col items-center gap-2 group transition-all hover:bg-zinc-800/50">
                  <Clock className="h-5 w-5 text-yellow-500 mb-1" />
                  <span className="text-3xl font-black text-white tracking-tighter tabular-nums">{daysLeft}</span>
                  <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest leading-none">Hari Tersisa</span>
               </div>
               <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex flex-col items-center gap-2 group transition-all hover:bg-zinc-800/50">
                  <Zap className="h-5 w-5 text-cyan-500 mb-1" />
                  <span className="text-3xl font-black text-white tracking-tighter tabular-nums">{progress.toFixed(1)}%</span>
                  <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest leading-none">Progres Fisik</span>
               </div>
               <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex flex-col items-center gap-2 group transition-all hover:bg-zinc-800/50">
                  <Shield className="h-5 w-5 text-emerald-500 mb-1" />
                  <span className="text-3xl font-black text-white tracking-tighter tabular-nums text-emerald-500 uppercase">Aman</span>
                  <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest leading-none">Status Area</span>
               </div>
            </div>

            {/* Main Progress Bar */}
            <div className="space-y-3">
               <div className="flex justify-between items-end px-2">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">Timeline Konstruksi Nasional</span>
                  <span className="text-xs font-black text-yellow-500 italic uppercase underline decoration-yellow-500/30 underline-offset-4">Fase Inisiasi v1.0</span>
               </div>
               <div className="h-4 bg-zinc-900 border border-zinc-800 rounded-full p-1 overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full transition-all duration-1000 relative shadow-[0_0_15px_rgba(234,179,8,0.4)]"
                    style={{ width: `${Math.max(2, progress)}%` }}
                  >
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-8 py-4 bg-yellow-500/5 border-t border-yellow-500/10 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] italic text-zinc-600">
           <span>Estimasi Selesai: {new Date(new Date().getTime() + daysLeft * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID')}</span>
           <span className="text-yellow-600/50 flex items-center gap-2">
              <AlertTriangle size={10} /> Otoritas Strategis Level Omega
           </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
