"use client"

import { useState, useMemo } from "react";
import { X, Swords, Target, Shield, Zap, Clock, AlertTriangle, Globe, Info } from "lucide-react";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { countries } from "@/app/database/data/negara/benua/index";
import { ModalPilihNegara } from "./modals_pilih_negara/ModalPilihNegara";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: CountryData; // Player country data
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function MisiSeranganModal({ isOpen, onClose, data, activeMenu, setActiveMenu }: Props) {
  const [isSelecting, setIsSelecting] = useState(false);

  const targetName = activeMenu.startsWith("Komando Pertahanan:Misi Serangan:") 
    ? activeMenu.split(":")[2] 
    : null;

  const targetCountry = useMemo(() => {
    if (!targetName) return null;
    return countries.find(c => 
      c.name_id.toLowerCase() === targetName.toLowerCase() || 
      c.name_en.toLowerCase() === targetName.toLowerCase()
    );
  }, [targetName]);

  if (!isOpen || !data) return null;

  const getCountryCode = (emoji: string) => {
    const chars = [...emoji];
    if (chars.length < 2) return "";
    return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
  };

  return (
    <div className="absolute inset-0 bg-black/95 z-[80] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">
      <div className="bg-zinc-950 border border-red-500/20 rounded-[40px] w-full max-w-4xl h-[70vh] overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.15)] flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-xl">
              <Swords className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Misi Serangan</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Offensive Operational Command</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-amber-500 transition-all cursor-help active:scale-95 flex items-center gap-2">
                <Info className="h-6 w-6" />
              </button>
              
              {/* Tooltip-like Information */}
              <div className="absolute right-0 top-full mt-4 w-72 p-4 bg-zinc-900 border border-amber-500/30 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 translate-y-2 group-hover:translate-y-0">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4 text-amber-500" />
                  <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Informasi Strategis</span>
                </div>
                <p className="text-[9px] font-bold text-zinc-400 leading-relaxed uppercase tracking-wider">
                  Invasi tanpa resolusi resmi PBB dapat memicu sanksi ekonomi berat atau embargo militer internasional terhadap negara Anda.
                </p>
              </div>
            </div>

            <button onClick={onClose} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer active:scale-95 group flex items-center gap-2">
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-12 no-scrollbar relative z-10 flex flex-col items-center justify-center text-center">
          {targetCountry ? (
            <div className="max-w-xl w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-32 h-20 rounded-2xl overflow-hidden border-4 border-red-500/30 shadow-[0_0_40px_rgba(239,68,68,0.2)]">
                       <img 
                          src={`https://flagcdn.com/w160/${getCountryCode(targetCountry.flag)}.png`} 
                          alt={targetCountry.name_id}
                          className="w-full h-full object-cover"
                       />
                    </div>
                    <div className="absolute -bottom-4 -right-4 p-3 bg-zinc-950 border border-red-500/40 rounded-2xl shadow-xl">
                       <Target className="h-6 w-6 text-red-500 animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">{targetCountry.name_id}</h3>
                    <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.4em] mt-1">Target Teridentifikasi</p>
                  </div>
               </div>

               <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Jarak Operasi', value: '1,240 KM', icon: Globe, color: 'text-blue-400' },
                    { label: 'Kesiapan', value: 'OPTIMAL', icon: Zap, color: 'text-yellow-400' },
                    { label: 'Resiko', value: 'MEDIUM', icon: AlertTriangle, color: 'text-orange-500' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-3xl flex flex-col items-center gap-2">
                       <stat.icon className={`h-5 w-5 ${stat.color}`} />
                       <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                       <span className="text-sm font-black text-white italic">{stat.value}</span>
                    </div>
                  ))}
               </div>

               <div className="space-y-4">
                  <button className="w-full py-5 rounded-[24px] bg-red-600 text-white font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:bg-red-500 transition-all active:scale-95">
                    Luncurkan Invasi Skala Penuh
                  </button>
                  <button 
                    onClick={() => setIsSelecting(true)}
                    className="text-zinc-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Ganti Target Operasi
                  </button>
               </div>
            </div>
          ) : (
            <div className="max-w-md space-y-6">
              <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                <AlertTriangle className="h-10 w-10 text-red-500 animate-pulse" />
              </div>
              <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">Pusat Komando Serangan</h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                Modul operasi serangan strategis sedang dalam fase sinkronisasi dengan armada militer pusat. Silakan tentukan target serangan Anda.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                 <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-3xl">
                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest block mb-1">Status Kesiapan</span>
                    <span className="text-xl font-black text-emerald-500">SIAGA SATU</span>
                 </div>
                 <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-3xl">
                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest block mb-1">Target Terkunci</span>
                    <span className="text-xl font-black text-white">0 LOKASI</span>
                 </div>
              </div>

              <button 
                onClick={() => setIsSelecting(true)}
                className="w-full py-5 rounded-[24px] bg-red-600 text-white font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:bg-red-500 transition-all active:scale-95 mt-4"
              >
                Pilih Target
              </button>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-8 py-4 bg-red-500/5 border-t border-red-500/10 flex justify-center italic relative z-10">
          <span className="text-[9px] font-black text-red-500 uppercase tracking-[0.3em]">Otoritas Tertinggi Diperlukan Untuk Eksekusi</span>
        </div>
      </div>

      <ModalPilihNegara 
        isOpen={isSelecting}
        onClose={() => setIsSelecting(false)}
        onSelect={(c) => {
          setActiveMenu(`Komando Pertahanan:Misi Serangan:${c.name_id}`);
          setIsSelecting(false);
        }}
        playerCountryId={data.name_id}
      />
    </div>
  );
}
