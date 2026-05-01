"use client"

import React, { useMemo } from "react";
import { 
  X, Landmark, Globe, Zap, Coins, TrendingUp, Search, 
  ChevronRight, ArrowUpRight, Info 
} from "lucide-react";
import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { embassyStorage } from "@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage";
import { relationStorage } from "@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";

interface KedutaanBesarModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu: (menu: string) => void;
}

export default function KedutaanBesarModal({ 
  isOpen, 
  onClose, 
  setActiveMenu 
}: KedutaanBesarModalProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [refreshKey, setRefreshKey] = React.useState(0);

  // Listen for embassy storage changes to refresh the list in real-time
  React.useEffect(() => {
    const handleEmbassyUpdate = () => setRefreshKey(k => k + 1);
    window.addEventListener('embassy_status_updated', handleEmbassyUpdate);
    return () => window.removeEventListener('embassy_status_updated', handleEmbassyUpdate);
  }, []);

  // Filter countries with completed embassies
  const activeEmbassies = useMemo(() => {
    return countries
      .filter(country => embassyStorage.getEmbassyStatus(country.name_id) === 'completed')
      .filter(country => 
        country.name_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.name_en.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(country => {
        // For now level is hardcoded to 1 as per current system
        const maintenance = 120;
        const relationsBonus = 5;
        const currentScore = relationStorage.getRelationScore(country.name_id, 50);
        
        return {
          ...country,
          maintenance,
          relationsBonus,
          currentScore
        };
      });
  }, [searchQuery, refreshKey]);


  const stats = useMemo(() => {
    const totalMaintenance = activeEmbassies.reduce((sum, e) => sum + e.maintenance, 0);
    const totalBonus = activeEmbassies.reduce((sum, e) => sum + e.relationsBonus, 0);
    return { totalMaintenance, totalBonus };
  }, [activeEmbassies]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-8 overflow-hidden">
      <div className="bg-zinc-950/90 border border-zinc-800 rounded-[40px] w-full max-w-5xl h-[85vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Glow & Branding */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

        {/* Header */}
        <div className="px-10 py-8 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/20 backdrop-blur-xl shrink-0">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
               <Landmark className="h-7 w-7 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight italic uppercase leading-none">Registri Kedutaan Besar</h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em] mt-2 opacity-70">Strategic Diplomatic Asset Monitoring System</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800 hover:text-white text-zinc-400 transition-all cursor-pointer active:scale-95 group"
          >
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Stats Overview */}
        <div className="px-10 py-6 bg-zinc-900/10 border-b border-zinc-900 flex items-center justify-between shrink-0">
            <div className="flex gap-16">
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 opacity-60">Total Kedutaan</span>
                    <span className="text-4xl font-black text-white italic tracking-tighter tabular-nums">{activeEmbassies.length.toString().padStart(2, '0')}</span>
                </div>
                <div className="flex flex-col border-l border-zinc-800/80 pl-16 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500/60" />
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 opacity-60">Biaya Perawatan Total</span>
                    <div className="flex items-end gap-2">
                        <span className="text-4xl font-black text-red-500 italic tracking-tighter tabular-nums">-{stats.totalMaintenance}</span>
                        <span className="pb-1.5 text-zinc-600 font-bold text-[10px] uppercase tracking-tighter">/ Bulan</span>
                    </div>
                </div>
                <div className="flex flex-col border-l border-zinc-800/80 pl-16 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/60" />
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 opacity-60">Akumulasi Relasi Global</span>
                    <div className="flex items-end gap-2">
                        <span className="text-4xl font-black text-emerald-400 italic tracking-tighter tabular-nums">+{stats.totalBonus}</span>
                        <span className="pb-1.5 text-zinc-600 font-bold text-[10px] uppercase tracking-tighter">Poin / Bulan</span>
                    </div>
                </div>
            </div>
            
            <div className="relative group w-72">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" />
                <input 
                    type="text" 
                    placeholder="Cari kedutaan..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-zinc-900/40 border border-zinc-800 rounded-2xl py-3 pl-11 pr-5 text-sm font-bold text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/30 transition-all shadow-inner"
                />
            </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-10 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
           {activeEmbassies.length > 0 ? (
             <div className="grid grid-cols-2 gap-4">
               {activeEmbassies.map((embassy, idx) => (
                 <div 
                   key={idx}
                   className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-6 hover:bg-zinc-900/60 transition-all group relative overflow-hidden"
                 >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full group-hover:bg-emerald-500/10 transition-colors"></div>
                    
                    <div className="flex items-start justify-between relative z-10">
                        <div className="flex gap-4">
                            <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl">
                                <Globe className="h-5 w-5 text-emerald-500" />
                            </div>
                            <div>
                                <h4 className="text-[17px] font-black text-white uppercase tracking-tight italic leading-tight mb-1">{embassy.name_id}</h4>
                                <div className="flex items-center gap-2">
                                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800/50">LEVEL 1</span>
                                    <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
                                    <span className="text-[9px] font-bold text-emerald-500/80 uppercase tracking-widest">{embassy.capital}</span>
                                </div>
                            </div>
                        </div>
                        <button 
                            onClick={() => setActiveMenu(`CountryModal:${embassy.name_id}:diplomasi_hubungan`)}
                            className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:text-emerald-400 text-zinc-500 transition-all cursor-pointer shadow-lg group-hover:scale-105"
                        >
                            <ArrowUpRight size={18} />
                        </button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-zinc-800/40 grid grid-cols-2 gap-6 relative z-10">
                        <div className="space-y-1">
                            <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] block leading-none">Biaya Bulanan</span>
                            <div className="flex items-center gap-1.5">
                                <Coins size={12} className="text-zinc-600" />
                                <span className="text-sm font-black text-zinc-300 tabular-nums">-{embassy.maintenance}</span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] block leading-none">Bonus Relasi</span>
                            <div className="flex items-center gap-1.5">
                                <TrendingUp size={12} className="text-emerald-600" />
                                <span className="text-sm font-black text-emerald-400 tabular-nums">+{embassy.relationsBonus}</span>
                            </div>
                        </div>
                    </div>
                 </div>
               ))}
             </div>
           ) : (
             <div className="flex flex-col items-center justify-center min-h-[40vh] text-center gap-6 animate-in fade-in duration-700">
                <div className="w-24 h-24 bg-zinc-900/50 border border-zinc-800 rounded-[32px] flex items-center justify-center text-zinc-800 shadow-2xl">
                    <Landmark size={48} strokeWidth={1} />
                </div>
                <div className="space-y-2">
                    <h5 className="text-xl font-black text-zinc-400 uppercase italic tracking-widest">Belum Ada Kedutaan Aktif</h5>
                    <p className="text-xs text-zinc-600 font-bold uppercase tracking-widest max-w-sm mx-auto leading-relaxed">Bangun kedutaan di negara lain melalui menu Diplomasi untuk menjejaki pengaruh kedaulatan Anda di sini.</p>
                </div>
                <button 
                    onClick={() => setActiveMenu("Menu:Diplomasi")}
                    className="px-8 py-3.5 bg-emerald-600/10 hover:bg-emerald-600 text-emerald-500 hover:text-white border border-emerald-500/20 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all cursor-pointer active:scale-95 shadow-lg shadow-emerald-900/10"
                >
                    Mulai Diplomasi
                </button>
             </div>
           )}
        </div>

        {/* Footer */}
        <div className="px-10 py-5 bg-zinc-900/40 border-t border-zinc-800/30 flex justify-center sticky bottom-0 backdrop-blur-md">
           <p className="text-[9px] text-zinc-700 font-black uppercase tracking-[0.5em] opacity-40 italic">Geopolitical Asset Verification Registry • sovereignty:active</p>
        </div>
      </div>
    </div>
  );
}


