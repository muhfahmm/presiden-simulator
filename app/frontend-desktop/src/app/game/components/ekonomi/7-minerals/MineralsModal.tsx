"use client"

import { X, Box, Battery, Layers, Pickaxe, TrendingUp, Activity, Info, Search, Eye, ChevronLeft, Radiation, Droplets, Flame, Coins, Loader2, Database, Clock } from "lucide-react";
import { CountryData } from "@/app/select-country/data/types";
import { countries } from "@/app/select-country/data/countries";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/pembangunan/buildingStorage";
import { budgetStorage } from "@/app/game/components/navbar/stats/budget";
import { mineralKritisRate } from "@/app/select-country/data/pembangunan/laju-produksi";
import { useState, useEffect } from "react";

interface MineralsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MineralsModal({ isOpen, onClose }: MineralsModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [tick, setTick] = useState(0);

  // Poll for building updates
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const session = gameStorage.getSession();
  const currentCountryCode = session?.country || "Indonesia";
  const currentData = (countries.find(c => c.name_id === currentCountryCode || c.name_en === currentCountryCode) || countries[0]) as CountryData;

  const cumulativeProduction = budgetStorage.getCumulativeProduction();
  const buildingDeltas = buildingStorage.getBuildingDeltas();

  const minerals = Object.entries(mineralKritisRate).map(([key, val]) => {
    const initialCount = (currentData.sector_extraction[val.dataKey as keyof typeof currentData.sector_extraction] || 0) as number;
    const extraCount = (buildingDeltas[key] || 0) as number;
    const totalCount = initialCount + extraCount;
    const totalProduction = totalCount * val.production;

    // Icon mapping
    const Icon = key.includes("uranium") ? Radiation : (key.includes("oil") ? Droplets : (key.includes("gas") ? Flame : (key.includes("gold") ? Coins : Pickaxe)));
    
    // Color mapping based on label
    let color = "text-teal-400";
    let bg = "bg-teal-500";
    if (val.desc.includes("Nikel")) { color = "text-orange-400"; bg = "bg-orange-500"; }
    else if (val.desc.includes("Lithium")) { color = "text-cyan-400"; bg = "bg-cyan-500"; }
    else if (val.desc.includes("Batubara")) { color = "text-zinc-400"; bg = "bg-zinc-500"; }
    else if (val.desc.includes("Tembaga")) { color = "text-orange-300"; bg = "bg-orange-300"; }
    else if (val.desc.includes("Bauksit")) { color = "text-blue-300"; bg = "bg-blue-300"; }

    const cumulative = (cumulativeProduction[key] || 0) as number;

    return {
      key,
      label: val.desc,
      value: totalCount,
      production: val.production,
      totalProduction,
      cumulative,
      unit: val.unit,
      color,
      bg,
      icon: <Icon size={18} className={color} />,
      desc: `Kapasitas ekstraksi strategis untuk sektor ${val.desc}.`
    };
  });

  const filteredMinerals = minerals.filter(m => m.label.toLowerCase().includes(searchQuery.toLowerCase()));

  // Calculate high-level stats
  const totalMines = minerals.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

        {/* Header (Synchronized with EnergiModal) */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
           <div className="flex items-center gap-3">
              <div className="p-2 bg-teal-500/10 rounded-xl">
                 <Pickaxe className="h-6 w-6 text-teal-500" />
              </div>
              <div>
                 <h2 className="text-2xl font-bold text-white tracking-tight">Mineral Kritis & Strategis</h2>
                 <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Resource Intelligence & Extraction</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <button
                 className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group relative shadow-[0_0_15px_rgba(20,184,166,0.1)] active:scale-95 flex items-center gap-2"
                 title="Database Tambang"
              >
                 <Database className="h-6 w-6 text-teal-500 group-hover:scale-110 transition-transform" />
              </button>
              <button
                 onClick={onClose}
                 className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2"
              >
                 <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
                 <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
              </button>
           </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-10 no-scrollbar space-y-8 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.03),transparent_40%)]">
          
          {/* Top Dashboard Metrics */}
          <div className="grid grid-cols-1 gap-6">
             <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-3xl flex flex-col gap-4 relative group overflow-hidden transition-all hover:bg-zinc-900/60 shadow-lg max-w-md w-full">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Pickaxe className="h-10 w-10 text-blue-400" /></div>
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block">Jumlah Tambang Nasional</span>
                <span className="text-3xl font-black text-blue-400 tracking-tighter">{totalMines} <span className="text-xs text-zinc-600 italic ml-1">Unit</span></span>
             </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
             {/* DETAILED BREAKDOWN (Full Width) */}
             <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2.5rem] p-10 space-y-8 backdrop-blur-sm shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-zinc-800/50 pb-6">
                   <h3 className="text-xl font-black text-white uppercase tracking-tighter italic flex items-center gap-4">
                      <div className="p-2.5 bg-teal-500/10 rounded-xl border border-teal-500/20"><TrendingUp size={20} className="text-teal-400" /></div>
                      Database Operasi Pertambangan
                   </h3>
                   <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 px-5 py-3 rounded-2xl w-full max-w-[240px] focus-within:border-teal-500/50 transition-all">
                      <Search className="h-4 w-4 text-zinc-500" />
                      <input 
                        type="text" 
                        placeholder="Cari asset tambang..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent text-xs text-white outline-none w-full font-bold uppercase tracking-widest placeholder:text-zinc-700"
                      />
                   </div>
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMinerals.map((mineral, i) => (
                       <div key={i} className="bg-zinc-950/40 border border-zinc-900/60 p-6 rounded-3xl group hover:border-teal-500/30 transition-all relative overflow-hidden flex flex-col gap-5 shadow-xl hover:shadow-teal-500/5">
                          {/* Top Row: Icon and Identity */}
                          <div className="flex items-center justify-between">
                             <div className="p-3 bg-zinc-900 rounded-2xl border border-zinc-800 group-hover:scale-110 transition-transform">
                                {mineral.icon}
                             </div>
                             <div className="flex flex-col items-end text-right">
                                <span className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] italic mb-0.5">{mineral.label.includes("Minyak") || mineral.label.includes("Batubara") || mineral.label.includes("Gas") || mineral.label.includes("Uranium") ? "Sumber Energi" : "Mineral Kritis"}</span>
                                <span className="text-sm font-black text-white uppercase tracking-tight italic leading-none">{mineral.label}</span>
                             </div>
                          </div>

                          {/* Middle Section: Warehouse Score */}
                          <div className="flex flex-col gap-2.5">
                             <div className="flex items-baseline justify-between">
                                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic">Hasil di Gudang:</span>
                                <div className="flex items-baseline gap-1">
                                   <span className="text-xl font-black text-cyan-400 tracking-tighter">{Math.floor(mineral.cumulative).toLocaleString('id-ID')}</span>
                                   <span className="text-[9px] text-zinc-500 font-bold uppercase italic">{mineral.unit}</span>
                                </div>
                             </div>
                             <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden border border-zinc-800/50 shadow-inner">
                                <div className={`h-full transition-all duration-[1.5s] ease-out ${mineral.bg} shadow-[0_0_15px_rgba(20,184,166,0.2)]`} style={{ width: `${Math.min(100, (mineral.cumulative / 1000000) * 100)}%` }} />
                             </div>
                          </div>

                          {/* Bottom Section: Production Rate */}
                          <div className="pt-4 border-t border-dashed border-zinc-800/50 flex flex-col gap-1.5 mt-1">
                             <span className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] italic">Laju Produksi Nasional:</span>
                             <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                   <div className={`p-1 rounded-md ${mineral.color.replace('text-', 'bg-')}/10 border border-${mineral.color.replace('text-', '')}/20`}>
                                      <TrendingUp size={12} className={mineral.color} />
                                   </div>
                                   <span className={`text-base font-black tracking-tighter ${mineral.color}`}>+{mineral.totalProduction.toLocaleString('id-ID')}</span>
                                </div>
                                <span className="text-[9px] text-zinc-500 font-bold uppercase italic opacity-70">/{mineral.unit} per Hari</span>
                             </div>
                          </div>

                          {/* Background Decoration */}
                          <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity">
                             {mineral.icon}
                          </div>
                       </div>
                    ))}
                 </div>
             </div>

          </div>
        </div>

        {/* Footer */}
        <div className="px-10 py-6 bg-zinc-900/30 border-t border-zinc-900 flex items-center justify-between backdrop-blur-3xl relative z-10">
           <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                 <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Data Real-Time</span>
              </div>
              <p className="text-xs text-zinc-500 font-medium italic tracking-tight">Menampilkan statistik operasi dari {totalMines} situs pertambangan aktif.</p>
           </div>
           <div className="flex items-center gap-8">
              <div className="flex flex-col items-end">
                 <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Global Supply Contribution</span>
                 <span className="text-base font-black text-teal-400 tracking-tighter italic">24.5% World Share</span>
              </div>
              <div className="h-10 w-px bg-zinc-800" />
              <div className="flex flex-col items-end">
                 <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">National Rank</span>
                 <span className="text-base font-black text-blue-400 tracking-tighter italic">TOP 3 GLOBAL</span>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
