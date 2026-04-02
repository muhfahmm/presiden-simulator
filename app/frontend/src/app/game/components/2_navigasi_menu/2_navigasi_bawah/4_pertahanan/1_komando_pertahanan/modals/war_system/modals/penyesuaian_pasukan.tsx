"use client"

import React, { useState, useMemo, useEffect } from "react";
import { X, Swords, Truck, Ship, Plane, Info, Shield, Target, Plus, Minus, Zap } from "lucide-react";
import { WarForces } from "../warTypes";
import { calculateForcesPower } from "../../../../3_armada_militer/kekuatanmiliter";
import { buildingStorage } from "../../../../../3_pembangunan/buildingStorage";

interface PenyesuaianPasukanProps {
  isOpen: boolean;
  onClose: () => void;
  userCountryData: any;
  targetCountry: any;
  targetPower: number;
  onConfirm: (selectedForces: WarForces, totalPower: number) => void;
}

export default function PenyesuaianPasukanModal({ 
  isOpen, onClose, userCountryData, targetCountry, targetPower, onConfirm 
}: PenyesuaianPasukanProps) {
  
  const userDeltas = buildingStorage.getData().buildingDeltas || {};
  
  // Initialize with max available forces
  const [forces, setForces] = useState<WarForces>({
    darat: {
      pasukan_infanteri: 0,
      tank_tempur_utama: 0,
      apc_ifv: 0,
      artileri_berat: 0,
      sistem_peluncur_roket: 0,
      pertahanan_udara_mobile: 0,
      kendaraan_taktis: 0,
    },
    laut: {
      kapal_induk: 0,
      kapal_destroyer: 0,
      kapal_korvet: 0,
      kapal_selam_nuklir: 0,
      kapal_selam_regular: 0,
    },
    udara: {
      jet_tempur_siluman: 0,
      jet_tempur_interceptor: 0,
      pesawat_pengebom: 0,
      helikopter_serang: 0,
      pesawat_pengintai: 0,
      drone_intai_uav: 0,
    }
  });

  // Calculate max available once on open
  const maxAvailable = useMemo(() => {
    if (!userCountryData) return forces;
    const base = userCountryData.armada_militer || {};
    return {
      darat: {
        pasukan_infanteri: ((base.barak || 0) + (userDeltas.barak || 0)) * 10000,
        tank_tempur_utama: (base.darat?.tank_tempur_utama || 0) + (userDeltas.tank || 0),
        apc_ifv: (base.darat?.apc_ifv || 0) + (userDeltas.apc || 0),
        artileri_berat: (base.darat?.artileri_berat || 0) + (userDeltas.artileri || 0),
        sistem_peluncur_roket: (base.darat?.sistem_peluncur_roket || 0) + (userDeltas.rocket || 0),
        pertahanan_udara_mobile: (base.darat?.pertahanan_udara_mobile || 0) + (userDeltas.sam || 0),
        kendaraan_taktis: (base.darat?.kendaraan_taktis || 0) + (userDeltas.tactical || 0),
      },
      laut: {
        kapal_induk: (base.laut?.kapal_induk || 0) + (userDeltas.carrier || 0),
        kapal_destroyer: (base.laut?.kapal_destroyer || 0) + (userDeltas.destroyer || 0),
        kapal_korvet: (base.laut?.kapal_korvet || 0) + (userDeltas.corvette || 0),
        kapal_selam_nuklir: (base.laut?.kapal_selam_nuklir || 0) + (userDeltas.submarine || 0),
        kapal_selam_regular: (base.laut?.kapal_selam_regular || 0) + (userDeltas.reg_sub || 0),
      },
      udara: {
        jet_tempur_siluman: (base.udara?.jet_tempur_siluman || 0) + (userDeltas.stealth_jet || 0),
        jet_tempur_interceptor: (base.udara?.jet_tempur_interceptor || 0) + (userDeltas.interceptor || 0),
        pesawat_pengebom: (base.udara?.pesawat_pengebom || 0) + (userDeltas.bomber || 0),
        helikopter_serang: (base.udara?.helikopter_serang || 0) + (userDeltas.heli_attack || 0),
        pesawat_pengintai: (base.udara?.pesawat_pengintai || 0) + (userDeltas.recon_plane || 0),
        drone_intai_uav: (base.udara?.drone_intai_uav || 0) + (userDeltas.uav || 0),
      }
    };
  }, [userCountryData, isOpen]);

  // Set initial forces to max available when opened
  useEffect(() => {
    if (isOpen) {
      setForces(maxAvailable);
    }
  }, [isOpen, maxAvailable]);

  const currentPower = useMemo(() => calculateForcesPower(forces), [forces]);

  const handleUpdate = (cat: 'darat' | 'laut' | 'udara', key: string, value: number) => {
    const max = (maxAvailable[cat] as any)[key];
    const safeValue = Math.min(max, Math.max(0, value));
    setForces(prev => ({
      ...prev,
      [cat]: { ...prev[cat], [key]: safeValue }
    }));
  };

  if (!isOpen) return null;

  const sections = [
    { id: 'darat', label: 'Matra Darat', icon: Truck, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { id: 'laut', label: 'Matra Laut', icon: Ship, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { id: 'udara', label: 'Matra Udara', icon: Plane, color: 'text-violet-500', bg: 'bg-violet-500/10' },
  ];

  const unitLabels: Record<string, string> = {
    pasukan_infanteri: "Pasukan Infanteri",
    tank_tempur_utama: "Main Battle Tank",
    apc_ifv: "APC / IFV",
    artileri_berat: "Artileri Berat",
    sistem_peluncur_roket: "MLRS Rocket",
    pertahanan_udara_mobile: "Mobile SAM",
    kendaraan_taktis: "Rantis",
    kapal_induk: "Kapal Induk",
    kapal_destroyer: "Destroyer",
    kapal_korvet: "Korvet",
    kapal_selam_nuklir: "Sub Nuklir",
    kapal_selam_regular: "Sub Regular",
    jet_tempur_siluman: "Stealth Jet",
    jet_tempur_interceptor: "Interceptor",
    pesawat_pengebom: "Pengebom",
    helikopter_serang: "Heli Serang",
    pesawat_pengintai: "Intai",
    drone_intai_uav: "UAV",
  };

  return (
    <div className="absolute inset-0 bg-black/90 backdrop-blur-xl z-[300] flex items-center justify-center p-4 animate-in zoom-in duration-300">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[3rem] w-full max-w-4xl max-h-[90vh] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-rose-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none" />

        {/* Header */}
        <div className="px-10 py-8 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/20">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-amber-500">
              <Zap size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-widest uppercase italic">Mobilisasi Pasukan</h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em] mt-1">Troop Adjustment & Strategic Deployment</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-10 no-scrollbar space-y-10">
          {/* Target Info */}
          <div className="flex items-center justify-between p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-3xl">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500">
                <Target size={24} />
              </div>
              <div>
                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Target Operasi</span>
                <h3 className="text-xl font-black text-white uppercase italic">{targetCountry?.name_id || targetCountry?.name_en}</h3>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Kekuatan Musuh</span>
              <div className="text-2xl font-black text-rose-500 tracking-tighter italic tabular-nums">
                {targetPower.toLocaleString()} <span className="text-xs opacity-50">PWR</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map(section => (
              <div key={section.id} className="space-y-4">
                <div className="flex items-center gap-3 px-2">
                  <div className={`p-2 rounded-lg ${section.bg} ${section.color}`}>
                    <section.icon size={16} />
                  </div>
                  <h4 className="text-sm font-black text-white uppercase italic tracking-tight">{section.label}</h4>
                </div>

                <div className="space-y-2">
                   {Object.keys((forces as any)[section.id]).map(unitKey => {
                     const current = (forces as any)[section.id][unitKey];
                     const max = (maxAvailable as any)[section.id][unitKey];
                     if (max === 0) return null;

                     return (
                       <div key={unitKey} className="bg-zinc-900/30 border border-zinc-800/30 p-4 rounded-2xl group hover:border-zinc-700/50 transition-all">
                         <div className="flex justify-between items-center mb-3">
                           <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{unitLabels[unitKey]}</span>
                           <span className="text-xs font-black text-white tabular-nums">{current} <span className="text-zinc-600">/ {max}</span></span>
                         </div>
                         
                         <div className="flex items-center gap-3">
                            <button 
                              onClick={() => handleUpdate(section.id as any, unitKey, current - 1)}
                              className="p-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 hover:text-white cursor-pointer active:scale-95 transition-all"
                            >
                              <Minus size={12} />
                            </button>
                            
                            <input 
                              type="range"
                              min="0"
                              max={max}
                              value={current}
                              onChange={(e) => handleUpdate(section.id as any, unitKey, parseInt(e.target.value))}
                              className="flex-1 accent-cyan-500 h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer"
                            />

                            <button 
                              onClick={() => handleUpdate(section.id as any, unitKey, current + 1)}
                              className="p-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 hover:text-white cursor-pointer active:scale-95 transition-all"
                            >
                              <Plus size={12} />
                            </button>
                         </div>
                       </div>
                     );
                   })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-10 py-8 bg-zinc-900/40 border-t border-zinc-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8">
               <div className="space-y-1">
                 <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Kekuatan Serangan</span>
                 <div className="text-3xl font-black text-cyan-400 italic tabular-nums">
                   {currentPower.total.toLocaleString()} <span className="text-sm opacity-50">PWR</span>
                 </div>
               </div>
               
               <div className="h-10 w-px bg-zinc-800" />
               
               <div className="space-y-1">
                 <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Balance of Power</span>
                 <div className={`text-xl font-black italic tabular-nums ${currentPower.total > targetPower ? 'text-emerald-500' : 'text-rose-500'}`}>
                   {(currentPower.total / (targetPower || 1)).toFixed(2)}x
                 </div>
               </div>
            </div>

            <button 
              onClick={() => onConfirm(forces, currentPower.total)}
              className="w-full md:w-auto px-10 py-4 bg-rose-600 hover:bg-rose-500 text-white font-black uppercase tracking-[0.4em] rounded-2xl shadow-xl shadow-rose-900/20 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-3 italic"
            >
              <Swords size={20} />
              Luncurkan Serangan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
