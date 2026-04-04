"use client"

import { useState, useEffect } from "react";
import { X, Radiation, CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { CountryData } from "@/app/database/data/types/index";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: CountryData;
}

export default function ModalsBerhasilMembuatProgramNuklir({ isOpen, onClose, data }: Props) {
  if (!isOpen || !data) return null;

  return (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-[120] flex items-center justify-center p-4 animate-in fade-in duration-500 text-left">
      <div className="bg-zinc-950 border border-emerald-500/30 rounded-[40px] w-full max-w-[95vw] h-[82vh] shadow-[0_0_80px_rgba(16,185,129,0.15)] flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-500">
        
        {/* Background Sparkle Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 animate-pulse"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-32 -mb-32 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10 w-full mb-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl">
              <ShieldCheck className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase leading-none">Inisiasi Berhasil</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Program Strategis Telah Dimulai</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Selesai</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content wrapper for height management */}
        <div className="flex-1 overflow-y-auto p-12 no-scrollbar">
           <div className="max-w-xl mx-auto space-y-10 text-center">
              
              {/* Success Icon */}
              <div className="relative z-10 mb-8 mt-4">
                 <div className="w-28 h-28 bg-emerald-500/10 rounded-full border border-emerald-500/20 flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(16,185,129,0.2)] group transition-all">
                    <ShieldCheck className="h-14 w-14 text-emerald-500 group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-1 -right-1">
                       <div className="p-2 bg-zinc-950 border border-emerald-500/30 rounded-full shadow-lg">
                          <CheckCircle2 size={16} className="text-emerald-500" />
                       </div>
                    </div>
                 </div>
                 <Sparkles className="absolute top-0 right-1/4 h-5 w-5 text-emerald-400/50 animate-bounce" />
                 <Sparkles className="absolute bottom-4 left-1/4 h-4 w-4 text-emerald-400/50 animate-pulse delay-500" />
              </div>

           <div className="h-[1px] w-12 bg-emerald-500/30 mx-auto my-6"></div>
           
           <p className="text-xs text-zinc-400 font-medium leading-relaxed max-w-[320px] mx-auto italic">
             "Keamanan nasional adalah prioritas tertinggi. Pembangunan fasilitas nuklir kini memasuki tahap konstruksi intensif."
           </p>

        {/* Countdown Info Card */}
        <div className="relative z-10 bg-zinc-900/40 border border-zinc-800 rounded-[32px] p-8 mb-10 group hover:border-emerald-500/20 transition-all">
           <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">Status Konstruksi</span>
              <div className="flex items-center gap-4 my-2">
                 <Clock size={20} className="text-emerald-500 animate-spin-slow" />
                 <span className="text-5xl font-black text-white tracking-tighter">360</span>
                 <span className="text-sm font-black text-emerald-500 uppercase tracking-widest mt-4">Hari</span>
              </div>
              <div className="flex items-center gap-2">
                 <Calendar size={12} className="text-zinc-600" />
                 <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Waktu Pembangunan Terhitung</span>
              </div>
           </div>
           
           {/* Progress Bar (Static initial state) */}
           <div className="mt-6 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full w-[1px] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
           </div>
        </div>

        {/* Notification Alert Info */}
        <div className="relative z-10 p-5 rounded-3xl bg-zinc-900/30 border border-zinc-800 flex items-center gap-4 mb-10">
           <div className="p-3 bg-zinc-950 rounded-2xl border border-zinc-800">
              <Zap size={16} className="text-yellow-500" />
           </div>
           <p className="text-left text-[11px] text-zinc-500 font-medium leading-relaxed">
              Kami telah mengirimkan detail inisiasi ke <span className="text-zinc-300 font-bold">Kotak Masuk (Inbox)</span> anda. Anda akan mendapatkan notifikasi kembali setelah proses pembangunan selesai.
           </p>
        </div>

           </div>
        </div>

        {/* Footer info (Moving confirm button here or leaving it in content) */}
        <div className="px-10 py-6 bg-zinc-900/30 border-t border-zinc-900 flex justify-end items-center relative z-10">
           <button 
             onClick={onClose}
             className="px-12 py-5 rounded-[24px] bg-emerald-600 text-black font-black uppercase text-xs tracking-[0.2em] shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:bg-emerald-500 transition-all active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
           >
             Akses Strategi Nuklir <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
