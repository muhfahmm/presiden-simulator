"use client"

import React, { useMemo } from "react";
import { X, Sword, Shield, Truck, Anchor, Plane, Target, Zap, ChevronRight, Activity, BarChart3, AlertTriangle } from "lucide-react";
import { countries } from "@/app/database/data/negara/benua/index";
import { 
  TANK_POWER_PER_UNIT, APC_POWER_PER_UNIT, ARTILLERY_POWER_PER_UNIT, ROCKET_POWER_PER_UNIT, SAM_POWER_PER_UNIT, TACTICAL_POWER_PER_UNIT,
  CARRIER_POWER_PER_UNIT, DESTROYER_POWER_PER_UNIT, CORVETTE_POWER_PER_UNIT, SUBMARINE_POWER_PER_UNIT, REGULAR_SUB_POWER_PER_UNIT, MINE_SHIP_POWER_PER_UNIT, LOGISTICS_POWER_PER_UNIT,
  STEALTH_POWER_PER_UNIT, INTERCEPTOR_POWER_PER_UNIT, BOMBER_POWER_PER_UNIT, ATTACK_HELI_POWER_PER_UNIT, RECON_POWER_PER_UNIT, UAV_POWER_PER_UNIT, KAMIKAZE_POWER_PER_UNIT, TRANSPORT_POWER_PER_UNIT,
  INFANTRY_POWER_PER_UNIT, calculateForcesPower 
} from "../../../../../3_armada_militer/kekuatanmiliter";

// ======================================================
// Unit label maps for displaying all alutsista detail
// ======================================================
const DARAT_UNITS = [
  { key: "pasukan_infanteri", label: "Pasukan Infanteri", icon: Sword },
  { key: "tank_tempur_utama", label: "Tank Tempur Utama", icon: Truck },
  { key: "apc_ifv", label: "APC / IFV", icon: Truck },
  { key: "artileri_berat", label: "Artileri Berat", icon: Target },
  { key: "sistem_peluncur_roket", label: "Sistem Roket MLRS", icon: Zap },
  { key: "pertahanan_udara_mobile", label: "Mobile SAM", icon: Shield },
  { key: "kendaraan_taktis", label: "Kendaraan Taktis", icon: Truck },
];

const LAUT_UNITS = [
  { key: "kapal_induk", label: "Kapal Induk", icon: Anchor },
  { key: "kapal_destroyer", label: "Kapal Destroyer", icon: Anchor },
  { key: "kapal_korvet", label: "Kapal Korvet", icon: Anchor },
  { key: "kapal_selam_nuklir", label: "Kapal Selam Nuklir", icon: Zap },
  { key: "kapal_selam_regular", label: "Kapal Selam Reguler", icon: Anchor },
  { key: "kapal_ranjau", label: "Penyapu Ranjau", icon: Anchor },
  { key: "kapal_logistik", label: "Kapal Logistik", icon: Truck },
];

const UDARA_UNITS = [
  { key: "jet_tempur_siluman", label: "Jet Tempur Siluman", icon: Plane },
  { key: "jet_tempur_interceptor", label: "Jet Pencegat", icon: Plane },
  { key: "pesawat_pengebom", label: "Pesawat Pembom", icon: Plane },
  { key: "helikopter_serang", label: "Helikopter Serang", icon: Plane },
  { key: "pesawat_pengintai", label: "Pesawat Intai", icon: Plane },
  { key: "drone_intai_uav", label: "Drone UAV", icon: Plane },
  { key: "drone_kamikaze", label: "Drone Kamikaze", icon: Plane },
  { key: "pesawat_angkut", label: "Pesawat Angkut", icon: Plane },
];

interface ModalsPerbandinganProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  userSelection: Record<string, number>;
  targetCountryName: string;
}

export default function ModalsPerbandingan({ isOpen, onClose, onConfirm, userSelection, targetCountryName }: ModalsPerbandinganProps) {
  const targetData = useMemo(() => {
    return countries.find(c => 
      c.name_en.toLowerCase() === targetCountryName.toLowerCase() || 
      c.name_id.toLowerCase() === targetCountryName.toLowerCase()
    );
  }, [targetCountryName]);

  const assessment = useMemo(() => {
    if (!targetData) return null;

    const m = targetData.armada_militer;
    
    const targetForces = {
      darat: {
        pasukan_infanteri: (targetData.armada_militer?.barak || 0) * 10000,
        tank_tempur_utama: m?.darat?.tank_tempur_utama || 0,
        apc_ifv: m?.darat?.apc_ifv || 0,
        artileri_berat: m?.darat?.artileri_berat || 0,
        sistem_peluncur_roket: m?.darat?.sistem_peluncur_roket || 0,
        pertahanan_udara_mobile: m?.darat?.pertahanan_udara_mobile || 0,
        kendaraan_taktis: m?.darat?.kendaraan_taktis || 0,
      },
      laut: {
        kapal_induk: m?.laut?.kapal_induk || 0,
        kapal_destroyer: m?.laut?.kapal_destroyer || 0,
        kapal_korvet: m?.laut?.kapal_korvet || 0,
        kapal_selam_nuklir: m?.laut?.kapal_selam_nuklir || 0,
        kapal_selam_regular: m?.laut?.kapal_selam_regular || 0,
        kapal_ranjau: m?.laut?.kapal_ranjau || 0,
        kapal_logistik: m?.laut?.kapal_logistik || 0,
      },
      udara: {
        jet_tempur_siluman: m?.udara?.jet_tempur_siluman || 0,
        jet_tempur_interceptor: m?.udara?.jet_tempur_interceptor || 0,
        pesawat_pengebom: m?.udara?.pesawat_pengebom || 0,
        helikopter_serang: m?.udara?.helikopter_serang || 0,
        pesawat_pengintai: m?.udara?.pesawat_pengintai || 0,
        drone_intai_uav: m?.udara?.drone_intai_uav || 0,
        drone_kamikaze: m?.udara?.drone_kamikaze || 0,
        pesawat_angkut: m?.udara?.pesawat_angkut || 0,
      }
    };

    const userForces = {
      darat: {
        pasukan_infanteri: userSelection["pasukan_infanteri"] || 0,
        tank_tempur_utama: userSelection["tank_tempur_utama"] || 0,
        apc_ifv: userSelection["apc_ifv"] || 0,
        artileri_berat: userSelection["artileri_berat"] || 0,
        sistem_peluncur_roket: userSelection["sistem_peluncur_roket"] || 0,
        pertahanan_udara_mobile: userSelection["pertahanan_udara_mobile"] || 0,
        kendaraan_taktis: userSelection["kendaraan_taktis"] || 0,
      },
      laut: {
        kapal_induk: userSelection["kapal_induk"] || 0,
        kapal_destroyer: userSelection["kapal_destroyer"] || 0,
        kapal_korvet: userSelection["kapal_korvet"] || 0,
        kapal_selam_nuklir: userSelection["kapal_selam_nuklir"] || 0,
        kapal_selam_regular: userSelection["kapal_selam_regular"] || 0,
        kapal_ranjau: userSelection["kapal_ranjau"] || 0,
        kapal_logistik: userSelection["kapal_logistik"] || 0,
      },
      udara: {
        jet_tempur_siluman: userSelection["jet_tempur_siluman"] || 0,
        jet_tempur_interceptor: userSelection["jet_tempur_interceptor"] || 0,
        pesawat_pengebom: userSelection["pesawat_pengebom"] || 0,
        helikopter_serang: userSelection["helikopter_serang"] || 0,
        pesawat_pengintai: userSelection["pesawat_pengintai"] || 0,
        drone_intai_uav: userSelection["drone_intai_uav"] || 0,
        drone_kamikaze: userSelection["drone_kamikaze"] || 0,
        pesawat_angkut: userSelection["pesawat_angkut"] || 0,
      }
    };

    const userPower = calculateForcesPower(userForces);
    const targetPower = calculateForcesPower(targetForces);

    return { userForces, targetForces, userPower, targetPower };
  }, [targetData, userSelection]);

  if (!isOpen || !assessment) return null;

  const getRatio = (val1: number, val2: number) => {
    const total = val1 + val2;
    if (total === 0) return 50;
    return (val1 / total) * 100;
  };

  // Helper: render a single alutsista comparison row
  const renderUnitRow = (unitDef: { key: string; label: string; icon: any }, userVal: number, targetVal: number) => {
    const Icon = unitDef.icon;
    const userWins = userVal > targetVal;
    const tied = userVal === targetVal;
    return (
      <div key={unitDef.key} className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-xl hover:bg-white/[0.02] transition-colors group/row">
        {/* User side */}
        <div className="flex-1 flex items-center justify-end gap-2">
          <span className={`text-sm font-black tabular-nums tracking-tight ${userWins ? 'text-emerald-400' : tied ? 'text-zinc-400' : 'text-red-400'}`}>
            {userVal.toLocaleString("id-ID")}
          </span>
          {userWins && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
        </div>
        {/* Center label */}
        <div className="w-[180px] flex items-center justify-center gap-2 shrink-0">
          <Icon size={12} className="text-zinc-600" />
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider text-center leading-tight">{unitDef.label}</span>
        </div>
        {/* Target side */}
        <div className="flex-1 flex items-center gap-2">
          {!userWins && !tied && <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />}
          <span className={`text-sm font-black tabular-nums tracking-tight ${!userWins && !tied ? 'text-amber-400' : tied ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {targetVal.toLocaleString("id-ID")}
          </span>
        </div>
      </div>
    );
  };

  // Helper: render a category section (darat / laut / udara) with full alutsista
  const renderCategorySection = (
    categoryLabel: string,
    categoryIcon: any,
    categoryColor: string,
    categoryBg: string,
    units: { key: string; label: string; icon: any }[],
    userForceGroup: Record<string, number>,
    targetForceGroup: Record<string, number>,
    userPowerVal: number,
    targetPowerVal: number,
  ) => {
    const Cat = categoryIcon;
    const ratio = getRatio(userPowerVal, targetPowerVal);
    const isUserSuperior = userPowerVal > targetPowerVal;

    return (
      <div className="bg-zinc-950/80 border border-zinc-800/60 rounded-[28px] overflow-hidden shadow-xl">
        {/* Category Header */}
        <div className="px-6 py-5 border-b border-zinc-800/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl ${categoryBg} shadow-lg`}>
              <Cat size={18} className="text-white" />
            </div>
            <div>
              <span className="text-xs font-black text-white uppercase tracking-[0.15em]">{categoryLabel}</span>
              <div className="flex items-center gap-2 mt-1">
                {isUserSuperior ? (
                  <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">Superiority</span>
                ) : userPowerVal < targetPowerVal ? (
                  <span className="text-[8px] font-black text-amber-500 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">Risk Zone</span>
                ) : (
                  <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest bg-zinc-800 px-2 py-0.5 rounded-md border border-zinc-700">Balanced</span>
                )}
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider block">Power Ratio</span>
            <span className={`text-lg font-black ${isUserSuperior ? 'text-emerald-400' : 'text-amber-400'}`}>{Math.round(ratio)}% <span className="text-zinc-600 text-[10px]">vs</span> {100 - Math.round(ratio)}%</span>
          </div>
        </div>

        {/* Ratio Bar */}
        <div className="px-6 pt-4 pb-2">
          <div className="h-2 bg-zinc-900 rounded-full overflow-hidden flex ring-1 ring-white/5">
            <div 
              className={`h-full ${isUserSuperior ? categoryBg : 'bg-red-500/50'} transition-all duration-1000 ease-out`} 
              style={{ width: `${ratio}%` }}
            />
            <div 
              className="h-full bg-zinc-800 transition-all duration-1000 ease-out" 
              style={{ width: `${100 - ratio}%` }}
            />
          </div>
        </div>

        {/* Column Headers */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1">
          <span className="flex-1 text-right text-[8px] font-black text-red-500/60 uppercase tracking-[0.3em] pr-3">Expeditionary</span>
          <div className="w-[180px] shrink-0" />
          <span className="flex-1 text-[8px] font-black text-zinc-600 uppercase tracking-[0.3em] pl-3">Defense</span>
        </div>

        {/* Unit Rows */}
        <div className="px-3 pb-4 space-y-0.5">
          {units.map((u) => renderUnitRow(u, userForceGroup[u.key] || 0, targetForceGroup[u.key] || 0))}
        </div>

        {/* Category Total */}
        <div className="px-6 py-4 bg-zinc-900/30 border-t border-zinc-800/40 flex items-center justify-between">
          <span className="text-sm font-black text-red-500 tabular-nums">{userPowerVal.toLocaleString("id-ID")} <span className="text-[8px] text-zinc-600 uppercase">SPW</span></span>
          <span className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em]">Total {categoryLabel}</span>
          <span className="text-sm font-black text-zinc-400 tabular-nums">{targetPowerVal.toLocaleString("id-ID")} <span className="text-[8px] text-zinc-600 uppercase">SPW</span></span>
        </div>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 bg-black z-[100] flex flex-col animate-in fade-in duration-500 overflow-hidden">
      
      {/* Header */}
      <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between shrink-0 bg-zinc-950/80 backdrop-blur-md relative z-10">
        <div className="flex items-center gap-5">
          <div className="p-3.5 bg-zinc-900 rounded-[20px] border border-zinc-800 shadow-xl ring-1 ring-white/5">
            <Activity className="h-8 w-8 text-red-500 animate-pulse" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-white tracking-tighter italic uppercase flex items-center gap-4">
              Strategic Assessment
              <div className="flex gap-1">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                 <div className="w-2 h-2 rounded-full bg-zinc-700" />
                 <div className="w-2 h-2 rounded-full bg-zinc-700" />
              </div>
            </h2>
            <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.4em] mt-1">Combat Power Comparison Interface (CPCI)</p>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="p-3.5 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-zinc-500 hover:text-white transition-all active:scale-95 group hover:bg-zinc-800"
        >
          <X size={24} className="group-hover:rotate-90 transition-transform" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="max-w-7xl mx-auto p-8 space-y-8">

          {/* ===== MAIN POWER COMPARISON: Space-between layout ===== */}
          <div className="flex items-stretch justify-between gap-6">
            
            {/* Left: User Power */}
            <div className="flex-1 bg-gradient-to-br from-red-600/10 to-zinc-950/40 p-8 rounded-[32px] border border-red-500/20 relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-5">
                  <Sword size={100} className="group-hover:scale-110 transition-transform duration-700" />
               </div>
               <span className="text-[9px] font-black text-red-500/70 uppercase tracking-[0.3em]">Mobilized Strike Force</span>
               <h3 className="text-xl font-black text-white italic uppercase mt-1 mb-4">Indonesia (Expeditionary)</h3>
               <div className="text-5xl font-black text-white tracking-widest italic flex items-baseline gap-2">
                 {assessment.userPower.total.toLocaleString("id-ID")}
                 <span className="text-red-500 text-xs not-italic font-bold tracking-normal uppercase">SPW</span>
               </div>
               <div className="mt-6 flex gap-3 flex-wrap">
                  {[
                    { label: "Land", val: assessment.userPower.darat, color: "bg-orange-500" },
                    { label: "Sea", val: assessment.userPower.laut, color: "bg-blue-500" },
                    { label: "Air", val: assessment.userPower.udara, color: "bg-violet-500" }
                  ].map(s => (
                    <div key={s.label} className="bg-zinc-900/50 border border-zinc-800 px-3 py-1.5 rounded-lg flex items-center gap-2">
                       <div className={`w-2 h-2 rounded-full ${s.color}`} />
                       <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{s.label}:</span>
                       <span className="text-[10px] font-black text-white">{s.val.toLocaleString("id-ID")}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* VS Badge */}
            <div className="flex items-center justify-center shrink-0">
              <div className="w-20 h-20 bg-zinc-950 border-2 border-zinc-800 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,1)] ring-1 ring-white/5">
                <span className="text-xl font-black italic text-zinc-600 uppercase tracking-tighter">VS</span>
              </div>
            </div>

            {/* Right: Enemy Power */}
            <div className="flex-1 bg-zinc-900/20 p-8 rounded-[32px] border border-zinc-800 relative group overflow-hidden shadow-inner">
               <div className="absolute top-0 left-0 p-6 opacity-5">
                  <Shield size={100} className="group-hover:scale-110 transition-transform duration-700" />
               </div>
               <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.3em]">National Defense Forces</span>
               <h3 className="text-xl font-black text-white italic uppercase mt-1 mb-4">{targetCountryName}</h3>
               <div className="text-5xl font-black text-white tracking-widest italic flex items-baseline gap-2">
                 {assessment.targetPower.total.toLocaleString("id-ID")}
                 <span className="text-zinc-600 text-xs not-italic font-bold tracking-normal uppercase">SPW</span>
               </div>
               <div className="mt-6 flex gap-3 flex-wrap">
                  {[
                    { label: "Land", val: assessment.targetPower.darat, color: "bg-zinc-500" },
                    { label: "Sea", val: assessment.targetPower.laut, color: "bg-zinc-500" },
                    { label: "Air", val: assessment.targetPower.udara, color: "bg-zinc-500" }
                  ].map(s => (
                    <div key={s.label} className="bg-zinc-900/50 border border-zinc-800 px-3 py-1.5 rounded-lg flex items-center gap-2">
                       <div className={`w-2 h-2 rounded-full ${s.color}`} />
                       <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">{s.label}:</span>
                       <span className="text-[10px] font-black text-white">{s.val.toLocaleString("id-ID")}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* ===== FULL ALUTSISTA COMPARISON: Column layout (darat → laut → udara) ===== */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.5em] text-center italic mb-6">
              Detailed Force Composition Breakdown
            </h4>

            {/* DARAT */}
            {renderCategorySection(
              "Land Power", Truck, "text-orange-500", "bg-orange-500",
              DARAT_UNITS,
              assessment.userForces.darat, assessment.targetForces.darat,
              assessment.userPower.darat, assessment.targetPower.darat
            )}

            {/* LAUT */}
            {renderCategorySection(
              "Sea Power", Anchor, "text-blue-500", "bg-blue-600",
              LAUT_UNITS,
              assessment.userForces.laut, assessment.targetForces.laut,
              assessment.userPower.laut, assessment.targetPower.laut
            )}

            {/* UDARA */}
            {renderCategorySection(
              "Air Power", Plane, "text-violet-500", "bg-violet-600",
              UDARA_UNITS,
              assessment.userForces.udara, assessment.targetForces.udara,
              assessment.userPower.udara, assessment.targetPower.udara
            )}
          </div>

          {/* Intelligence Note */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-[24px] p-6 flex items-start gap-5">
             <div className="p-2.5 bg-amber-500/10 rounded-xl shrink-0">
               <AlertTriangle className="text-amber-500 h-5 w-5" />
             </div>
             <div className="space-y-1">
               <h5 className="text-xs font-black text-amber-500 uppercase tracking-widest italic">Intelligence Advisory</h5>
               <p className="text-[10px] text-zinc-500 leading-relaxed font-semibold uppercase tracking-wider">
                 The assessment above is based on satellite relay and national database records. Actual combat results may be influenced by local geography, unit training, and electronic warfare capabilities during the invasion phase.
               </p>
             </div>
          </div>

        </div>
      </div>

      {/* Footer: Buttons centered */}
      <div className="px-8 py-6 bg-zinc-950 border-t border-zinc-800/50 flex flex-col items-center gap-4 relative z-10 shrink-0">
        <div className="flex items-center gap-3 mb-1">
           <BarChart3 className="text-zinc-600 h-4 w-4" />
           <span className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em]">Simulation ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
        </div>
        <div className="flex gap-4">
           <button 
             onClick={onClose}
             className="px-10 py-4 bg-zinc-900 border border-zinc-800 rounded-[20px] text-zinc-400 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-zinc-800 hover:text-white transition-all active:scale-95"
           >
             Dismiss Reports
           </button>
           <button 
             onClick={onConfirm}
             className="px-10 py-4 bg-red-600 rounded-[20px] text-white font-black uppercase text-[10px] tracking-[0.4em] hover:bg-red-500 shadow-xl shadow-red-900/20 transition-all active:scale-95 flex items-center justify-center gap-3 group"
           >
             Initiate Engagement
             <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
}