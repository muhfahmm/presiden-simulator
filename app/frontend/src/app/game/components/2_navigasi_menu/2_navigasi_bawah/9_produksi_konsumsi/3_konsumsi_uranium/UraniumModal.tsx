"use client"

import { useState } from "react";
import { X, Activity, TrendingUp, TrendingDown, Info, Pickaxe, Radiation, Package, Shield, Anchor, Zap, Bolt, Droplet } from "lucide-react";
import { 
  mineralKritisRate,
  armadaMiliterRate,
  KAPASITAS_LISTRIK_METADATA
} from "@/app/database/data/semua_fitur_negara";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";

import { calculateUraniumMetrics } from "./logic/uraniumLogic";

interface UraniumModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu: (menu: string) => void;
}

export default function UraniumModal({ isOpen, onClose, setActiveMenu }: UraniumModalProps) {
  if (!isOpen) return null;

  const session = gameStorage.getSession();
  const currentCountryName = session?.country || "Indonesia";
  const searchName = currentCountryName.toLowerCase().trim();
  const selectedData = countries.find((c: any) =>
    c.name_id.toLowerCase() === searchName ||
    c.name_en.toLowerCase() === searchName
  );
  const currentData = selectedData || countries[0];

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas;

  // Use Shared Uranium Logic
  const { 
    totalProduction, 
    totalConsumption, 
    surplus, 
    countMines,
    counts,
    consumptionBreakdown 
  } = calculateUraniumMetrics(currentData, buildingDeltas);

  return (
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-6 backdrop-blur-sm">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

        {/* Subtle Accents */}
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-600/5 rounded-full blur-[80px]"></div>

        {/* Header (Synchronized with ProduksiHub) */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <Radiation className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-none uppercase">Pusat Uranium Nasional</h2>
              <div className="flex items-center gap-3 mt-1">
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">National Uranium Control Center</p>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded-md">
                   <Info size={10} className="text-emerald-500" />
                   <span className="text-[8px] text-zinc-400 font-black tracking-wider uppercase italic">Nuclear Grade Material</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Unified Navigation Tabs */}
        <div className="px-6 py-2 bg-zinc-900/40 border-b border-zinc-800 flex gap-2 relative z-10">
          <button 
            onClick={() => setActiveMenu("Menu:Kelistrikan")}
            className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"
          >
            <Bolt size={14} /> Kelistrikan
          </button>
          <button 
            onClick={() => setActiveMenu("Menu:Perminyakan")}
            className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"
          >
            <Droplet size={14} /> Perminyakan
          </button>
          <button 
            onClick={() => setActiveMenu("Menu:Uranium")}
            className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all bg-zinc-100 text-zinc-950 shadow-lg cursor-default"
          >
            <Radiation size={14} /> Uranium
          </button>
        </div>

        {/* Dashboard Summary (Synchronized with ProduksiHub) */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-zinc-900/80">
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <Package className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Total Produksi</p>
                <p className="text-xl font-black text-white leading-tight">{totalProduction.toFixed(2)} <span className="text-[10px] text-zinc-500">KG</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-zinc-900/80">
              <div className="p-3 bg-rose-500/10 rounded-xl">
                <Activity className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Total Konsumsi</p>
                <p className="text-xl font-black text-white leading-tight">{totalConsumption.toFixed(2)} <span className="text-[10px] text-zinc-500">KG</span></p>
              </div>
            </div>

            <div className={`bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden group transition-all hover:bg-zinc-900/80 ${surplus >= 0 ? "hover:border-emerald-500/30" : "hover:border-rose-500/30"}`}>
              <div className={`p-3 rounded-xl ${surplus >= 0 ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>
                {surplus >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-400" />}
              </div>
              <div className="relative z-10">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Neraca Uranium</p>
                <p className={`text-xl font-black leading-tight ${surplus >= 0 ? "text-emerald-400" : "text-rose-500"}`}>
                  {surplus.toFixed(2)} <span className="text-[10px] text-zinc-500">KG</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Content Area */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20 relative z-10">
          <div className="space-y-12">
            
            {/* Section: Sektor Ekstraksi Uranium */}
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex items-center gap-3 mb-5 px-1">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <Pickaxe className="h-4 w-4 text-emerald-500" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest italic">1. Sektor Ekstraksi Uranium <span className="text-emerald-500 ml-3 font-black lowercase italic text-xs tracking-normal bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">(Strategic Resource)</span></h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-1 pb-4">
                <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-[2.5rem] flex flex-col gap-6 relative group overflow-hidden transition-all hover:bg-zinc-900/60 shadow-lg min-h-[220px]">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                    <Radiation className="h-24 w-24" />
                  </div>
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 group-hover:scale-110 transition-transform duration-500 shadow-xl text-emerald-500">
                        <Pickaxe size={22} />
                      </div>
                      <div className="p-2 bg-zinc-950/50 border border-zinc-800 rounded-xl">
                        <Info className="h-4 w-4 text-zinc-600" />
                      </div>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest whitespace-nowrap">Aktif: {countMines} Unit</span>
                    </div>
                  </div>

                  <div className="space-y-1 relative z-10">
                    <h4 className="text-sm font-black text-white uppercase tracking-tighter italic leading-tight group-hover:text-emerald-400 transition-colors">Tambang Uranium</h4>
                    <div className="flex flex-col gap-2 pt-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={12} className="text-zinc-500" />
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Output Harian Nasional</span>
                      </div>
                      <p className="text-2xl font-black text-white tracking-tight tabular-nums">
                        {totalProduction.toFixed(2)} <span className="text-[10px] text-zinc-600 uppercase font-bold ml-1">KG</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto relative z-10">
                    <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                      <div className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all duration-1000" style={{ width: countMines > 0 ? '100%' : '0%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Alokasi Bahan Bakar Nuklir */}
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pt-8 border-t border-zinc-900/50">
              <div className="flex items-center gap-3 mb-8 px-1">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <Activity className="h-4 w-4 text-rose-400" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest italic">2. Alokasi Bahan Bakar Nuklir</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "PLTN (Fisi Nuklir)", val: consumptionBreakdown.energy, icon: Zap, color: "text-emerald-400", desc: "Active Atomic Reactor" },
                  { label: "Kapal Induk N", val: (counts.carrierN * (armadaMiliterRate["8b_kapal_induk_nuklir"]?.konsumsi_uranium || 0)), icon: Anchor, color: "text-rose-400", desc: "Carrier Strike Group" },
                  { label: "Kapal Selam N", val: (counts.subN * (armadaMiliterRate["11_kapal_selam_nuklir"]?.konsumsi_uranium || 0)), icon: Radiation, color: "text-rose-400", desc: "Nuclear Submarine Fleet" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-zinc-900/30 border border-zinc-800/50 p-5 rounded-2xl flex items-center justify-between hover:bg-zinc-800/50 hover:border-rose-500/20 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform ${item.color}`}>
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] text-zinc-100 font-black uppercase tracking-widest leading-none">{item.label}</p>
                        <p className="text-[9px] text-zinc-600 mt-1.5 font-bold tracking-tighter uppercase">{item.desc}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black text-white tabular-nums leading-none">{item.val.toFixed(2)}</p>
                      <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mt-1">KG</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
