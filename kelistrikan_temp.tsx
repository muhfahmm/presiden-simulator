"use client"

import { useState, useEffect } from "react";
import { X, Zap, Activity, TrendingUp, TrendingDown, Battery, Radio, Gauge, Info, Hammer, Shield, Users, Factory, Pickaxe, Lightbulb, ZapOff, CloudLightning } from "lucide-react";
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, DASHBOARD_LABELS, KAPASITAS_LISTRIK_METADATA } from "@/app/database/data/semua_fitur_negara";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import NavigasiWaktu from "../2_ekonomi/1-perdagangan/NavigasiWaktu";

interface KelistrikanModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu: (menu: string) => void;
}

export default function KelistrikanModal({ isOpen, onClose, setActiveMenu }: KelistrikanModalProps) {
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

  // Logic Sinkronisasi Listrik Nasional (dengan Deltas)
  const currentDataWithDeltas = JSON.parse(JSON.stringify(currentData));
  Object.entries(buildingDeltas).forEach(([key, deltaValue]) => {
    if (typeof deltaValue !== 'number') return;
    
    if (KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA]) {
      const dataKey = KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA].dataKey;
      (currentDataWithDeltas.sektor_listrik as any)[dataKey] = ((currentDataWithDeltas.sektor_listrik as any)[dataKey] || 0) + deltaValue;
    }
  });

  const totalPasokan = hitungTotalKapasitas(currentDataWithDeltas.sektor_listrik);
  const totalBeban = hitungTotalKonsumsiNasional(currentDataWithDeltas);
  const surplus = totalPasokan - totalBeban;

  // Icons Mapping for Metadata
  const iconMap: Record<string, any> = {
    "1_pembangkit_listrik_tenaga_nuklir": { icon: Battery, color: "text-indigo-400" },
    "2_pembangkit_listrik_tenaga_air": { icon: CloudLightning, color: "text-blue-400" },
    "3_pembangkit_listrik_tenaga_surya": { icon: Lightbulb, color: "text-yellow-400" },
    "4_pembangkit_listrik_tenaga_uap": { icon: Factory, color: "text-zinc-400" },
    "5_pembangkit_listrik_tenaga_gas": { icon: Factory, color: "text-orange-400" },
    "6_pembangkit_listrik_tenaga_angin": { icon: Gauge, color: "text-emerald-400" },
  };

  // Breakdown Generation from Database
  const generationSources = Object.entries(KAPASITAS_LISTRIK_METADATA).map(([key, meta]) => {
    const count = (currentDataWithDeltas.sektor_listrik as any)[meta.dataKey] || 0;
    const totalOutput = count * meta.produksi;
    const { icon, color } = iconMap[key] || { icon: Zap, color: "text-yellow-500" };
    
    return {
      name: meta.deskripsi,
      count: count,
      value: totalOutput,
      color: color,
      icon: icon
    };
  });

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative">
        
        {/* Header Section */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/10 rounded-xl">
              <Zap className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Pusat Kelistrikan Nasional</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Electricity Control Center</p>
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
        <div className="px-8 py-8 bg-zinc-900/20 border-b border-zinc-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all hover:border-cyan-500/30 shadow-indigo-500/10 shadow-lg">
              <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                <Zap className="h-8 w-8 text-cyan-500" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">{DASHBOARD_LABELS.supply.title}</p>
                <p className="text-3xl font-black text-white leading-tight mt-1">{totalPasokan.toLocaleString('id-ID')} <span className="text-xs text-zinc-600 font-normal ml-1">MW</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all hover:border-rose-500/30 shadow-rose-500/10 shadow-lg">
              <div className="p-4 bg-rose-500/10 rounded-2xl border border-rose-500/20">
                <Activity className="h-8 w-8 text-rose-500" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">{DASHBOARD_LABELS.usage.title}</p>
                <p className="text-3xl font-black text-white leading-tight mt-1">{totalBeban.toLocaleString('id-ID')} <span className="text-xs text-zinc-600 font-normal ml-1">MW</span></p>
              </div>
            </div>

            <div className={`bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all ${surplus >= 0 ? "hover:border-emerald-500/30 shadow-emerald-500/10" : "hover:border-rose-600/30 shadow-rose-600/10"} shadow-lg relative overflow-hidden`}>
              <div className={`p-4 rounded-2xl border ${surplus >= 0 ? "bg-emerald-500/10 border-emerald-500/20" : "bg-rose-500/10 border-rose-500/20"}`}>
                {surplus >= 0 ? <TrendingUp className="h-8 w-8 text-emerald-500" /> : <TrendingDown className="h-8 w-8 text-rose-500" />}
              </div>
              <div className="relative z-10">
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">{DASHBOARD_LABELS.balance.title}</p>
                <p className={`text-3xl font-black leading-tight mt-1 ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                  {surplus.toLocaleString('id-ID')} <span className="text-xs font-normal ml-1 opacity-50">MW</span>
                </p>
              </div>
              {surplus < 0 && (
                <div className="absolute top-0 right-0 p-2 bg-rose-500/10 border-l border-b border-rose-500/20 rounded-bl-xl animate-pulse">
                   <ZapOff size={14} className="text-rose-500" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Generation Breakdown */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 px-2">
                <div className="p-1.5 bg-yellow-500/10 rounded-lg"><Radio size={16} className="text-yellow-500" /></div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-widest">Pemasukan Listrik (Pasokan)</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {generationSources.map((source, idx) => (
                  <div key={idx} className="bg-zinc-900/40 border border-zinc-800/50 p-4 rounded-2xl flex items-center justify-between hover:bg-zinc-900 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-zinc-800 rounded-xl group-hover:scale-110 transition-transform ${source.color}`}>
                        <source.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest leading-none">{source.name}</p>
                        <div className="flex items-baseline gap-2 mt-1.5">
                          <p className="text-xl font-bold text-white leading-none">{source.value.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500 font-normal ml-0.5">MW</span></p>
                          <p className="text-[10px] text-yellow-500/80 font-bold uppercase tracking-tighter bg-yellow-500/10 px-1.5 py-0.5 rounded-md border border-yellow-500/10">{source.count} Unit</p>
                        </div>
                      </div>
                    </div>
                    {source.value > 0 ? (
                      <div className="h-2 w-24 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800 p-0.5">
                        <div className={`h-full bg-yellow-500/80 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.3)]`} style={{ width: '85%' }} />
                      </div>
                    ) : (
                      <span className="text-[9px] text-zinc-600 font-black uppercase italic tracking-tighter">Tidak Aktif</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Strategic Info & Navigation */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 px-2">
                <div className="p-1.5 bg-cyan-500/10 rounded-lg"><Info size={16} className="text-cyan-500" /></div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-widest">Penggunaan Listrik (Beban)</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-[32px] space-y-6">
                <div className="flex gap-4 p-4 bg-zinc-950/50 rounded-2xl border border-zinc-800/50">
                  <div className="p-3 bg-indigo-500/10 rounded-xl h-fit border border-indigo-500/20">
                    <Factory size={24} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-wider mb-1">Peringatan Kapasitas</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Sektor industri manufaktur dan ekstraksi mineral terus berkembang. Setiap gedung baru membutuhkan setidaknya <span className="text-yellow-500 font-bold">1 MW</span> pasokan listrik stabil.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => { onClose(); setActiveMenu("Menu:Produksi"); }}
                    className="p-5 bg-zinc-900 border border-zinc-800 rounded-[24px] hover:bg-zinc-800 transition-all group relative overflow-hidden"
                  >
                    <div className="relative z-10">
                      <Hammer size={24} className="text-yellow-500 mb-3 group-hover:scale-110 transition-transform" />
                      <p className="text-xs font-black text-white uppercase tracking-widest">Bangun PLTU/PLTN</p>
                      <p className="text-[10px] text-zinc-500 mt-1 uppercase opacity-70">Ekspansi Kapasitas</p>
                    </div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 blur-[40px] rounded-full translate-x-12 -translate-y-12"></div>
                  </button>

                  <button 
                    onClick={() => { onClose(); setActiveMenu("Menu:ManajemenPertahanan"); }}
                    className="p-5 bg-zinc-900 border border-zinc-800 rounded-[24px] hover:bg-zinc-800 transition-all group relative overflow-hidden"
                  >
                    <div className="relative z-10">
                      <Shield size={24} className="text-rose-500 mb-3 group-hover:scale-110 transition-transform" />
                      <p className="text-xs font-black text-white uppercase tracking-widest">Infrastruktur Grid</p>
                      <p className="text-[10px] text-zinc-500 mt-1 uppercase opacity-70">Keamanan Jaringan</p>
                    </div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 blur-[40px] rounded-full translate-x-12 -translate-y-12"></div>
                  </button>
                </div>
                
                <div className="p-6 bg-yellow-500/5 border border-yellow-500/10 rounded-[32px] flex items-start gap-4">
                   <div className="p-2 bg-yellow-500/20 rounded-full mt-1 animate-pulse"></div>
                   <p className="text-[11px] text-yellow-500/90 font-medium leading-relaxed italic">
                     "Stabilitas listrik adalah tulang punggung kedaulatan. Tanpa energi yang cukup, armada militer dan pusat intelijen kita tidak akan bisa beroperasi pada kapasitas maksimal."
                   </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
