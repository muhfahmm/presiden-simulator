"use client"

import { useState } from "react";
import { X, Activity, TrendingUp, TrendingDown, Info, Pickaxe, Radiation, Package, Shield, Anchor, Zap } from "lucide-react";
import { 
  mineralKritisRate,
  armadaMiliterRate,
  KAPASITAS_LISTRIK_METADATA
} from "@/app/database/data/semua_fitur_negara";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import NavigasiWaktu from "../../2_ekonomi/1-perdagangan/NavigasiWaktu";
import { calculateUraniumMetrics } from "./logic/uraniumLogic";

interface UraniumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UraniumModal({ isOpen, onClose }: UraniumModalProps) {
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
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative">
        
        {/* Header Section */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl">
              <Radiation className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Pusat Uranium Nasional</h2>
              <div className="flex items-center gap-3 mt-0.5">
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">National Uranium Control Center</p>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                   <Info size={10} className="text-emerald-500" />
                   <span className="text-[9px] text-emerald-500/90 font-black tracking-wider uppercase">Nuclear Grade Material</span>
                </div>
              </div>
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

        {/* Live Dashboard Grid */}
        <div className="px-8 py-8 bg-zinc-900/10 border-b border-zinc-800/50 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all hover:border-emerald-500/30 shadow-emerald-500/10 shadow-lg">
              <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <Package className="h-8 w-8 text-emerald-500" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Total Produksi</p>
                <p className="text-3xl font-black text-white leading-tight mt-1">
                  {totalProduction.toFixed(2)} <span className="text-xs text-zinc-600 font-normal ml-1">KG /hari</span>
                </p>
                <p className="text-[10px] font-bold text-emerald-500/80 mt-1 uppercase tracking-wider">
                  Raw Uranium Extraction
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all hover:border-rose-500/30 shadow-rose-500/10 shadow-lg">
              <div className="p-4 bg-rose-500/10 rounded-2xl border border-rose-500/20">
                <Activity className="h-8 w-8 text-rose-500" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Total Konsumsi</p>
                <p className="text-3xl font-black text-white leading-tight mt-1">
                  {totalConsumption.toFixed(2)} <span className="text-xs text-zinc-600 font-normal ml-1">KG /hari</span>
                </p>
                <p className="text-[10px] font-bold text-rose-500/80 mt-1 uppercase tracking-wider">
                  Nuclear Fleet Demand
                </p>
              </div>
            </div>

            <div className={`bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all ${surplus >= 0 ? "hover:border-emerald-500/30 shadow-emerald-500/10" : "hover:border-rose-600/30 shadow-rose-600/10"} shadow-lg relative overflow-hidden`}>
              <div className={`p-4 rounded-2xl border ${surplus >= 0 ? "bg-emerald-500/10 border-emerald-500/20" : "bg-rose-500/10 border-rose-500/20"}`}>
                {surplus >= 0 ? <TrendingUp className="h-8 w-8 text-emerald-500" /> : <TrendingDown className="h-8 w-8 text-rose-500" />}
              </div>
              <div className="relative z-10">
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Neraca Uranium</p>
                <p className={`text-3xl font-black leading-tight mt-1 ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                  {surplus.toFixed(2)} <span className="text-xs font-normal ml-1 opacity-50">KG /hari</span>
                </p>
                <p className={`text-[10px] font-bold mt-1 uppercase tracking-wider ${surplus >= 0 ? "text-emerald-500/80" : "text-rose-500/80"}`}>
                  {surplus >= 0 ? "SURPLUS" : "DEFICIT"} STATUS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Produksi Breakdown */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 px-2">
                <div className="p-1.5 bg-emerald-500/10 rounded-lg"><Pickaxe size={16} className="text-emerald-500" /></div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-widest">Sektor Produksi</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-3xl group hover:bg-zinc-900 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-tight">Tambang Uranium</h4>
                      <p className="text-xs text-zinc-500 font-medium uppercase">Ekstraksi Mineral Kritis</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-white">{totalProduction.toFixed(2)} <span className="text-xs text-zinc-500 font-normal">KG /hari</span></p>
                    <p className="text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md mt-1 italic uppercase tracking-widest inline-block">{countMines} Units Active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Konsumsi Breakdown Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 px-2">
                <div className="p-1.5 bg-rose-500/10 rounded-lg"><Activity size={16} className="text-rose-500" /></div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-widest">Sektor Konsumsi</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800/50 p-4 rounded-3xl">
                <div className="flex items-center gap-3 mb-4 px-2">
                    <Radiation size={18} className="text-rose-500" />
                    <span className="text-sm font-bold text-white uppercase tracking-tight">Konsumsi Terintegrasi</span>
                </div>

                <div className="space-y-4">
                  {/* Sektor Energi (PLTN) */}
                  <div className="bg-zinc-950/40 p-5 rounded-3xl border border-emerald-500/30 group hover:border-emerald-500/50 transition-all shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Zap size={20} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                        <span className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.2em]">Sektor Energi</span>
                      </div>
                      <div className="text-right">
                         <span className="text-[10px] font-bold text-zinc-500 uppercase">Status: </span>
                         <span className="text-[10px] font-black text-emerald-400 uppercase tracking-tighter">Pasokan Nasional</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-950 border border-zinc-900 p-3 rounded-2xl mb-4">
                        <div className="flex flex-col">
                           <span className="text-[10px] font-bold text-zinc-500 uppercase">PLTN (Fisi Nuklir)</span>
                           <span className="text-[8px] text-emerald-500/60 font-black italic">Active Atomic Reactor</span>
                        </div>
                        <span className="text-sm font-black text-white">{(counts.pltn || 0).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-600 font-normal ml-1">UNIT</span></span>
                    </div>
                    <div className="pt-2 border-t border-zinc-800/50 flex justify-between items-baseline">
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Beban Bahan Bakar</p>
                      <p className="text-lg font-black text-white leading-tight">{consumptionBreakdown.energy.toFixed(2)} <span className="text-[10px] text-zinc-600 font-normal ml-1">KG /hari</span></p>
                    </div>
                  </div>

                  {/* Armada Laut */}
                  <div className="bg-zinc-950/40 p-5 rounded-3xl border border-rose-500/30 group hover:border-rose-500/50 transition-all shadow-[0_0_15px_rgba(225,29,72,0.05)]">
                    <div className="flex items-center gap-3 mb-4">
                      <Anchor size={20} className="text-rose-400 group-hover:rotate-12 transition-transform" />
                      <span className="text-[11px] font-black text-rose-500 uppercase tracking-[0.2em]">Pertahanan Maritim</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex justify-between items-center p-2.5 rounded-xl bg-zinc-950 border border-zinc-900/50">
                        <span className="text-[9px] font-bold text-zinc-400 uppercase">Kapal Induk N</span>
                        <span className="text-[11px] font-black text-emerald-400">{(counts.carrierN || 0).toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex justify-between items-center p-2.5 rounded-xl bg-zinc-950 border border-zinc-900/50">
                        <span className="text-[9px] font-bold text-zinc-400 uppercase">Kapal Selam N</span>
                        <span className="text-[11px] font-black text-emerald-400">{(counts.subN || 0).toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-zinc-800/50 flex justify-between items-baseline">
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Beban Operasional</p>
                      <p className="text-lg font-black text-white leading-tight">{consumptionBreakdown.military.toFixed(2)} <span className="text-[10px] text-zinc-600 font-normal ml-1">KG /hari</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
