"use client"

import React, { useState, useMemo } from "react";
import { Truck, Anchor, Plane, Sword, Zap, Shield, Target, Plus, Info, ChevronDown, ChevronRight } from "lucide-react";
import { UnitState, Vector2 } from "./logic/polyglot/ts/polyglot-router";

interface DeploymentEngineProps {
  availableUnits: Record<string, number>;
  deployedUnits: UnitState[];
  selectedType: string | null;
  onSelect: (type: string | null) => void;
  currentPoints: number;
  maxPoints: number;
  troopAmount: string;
  setTroopAmount: (val: string) => void;
  deploymentMode: "manual" | "area";
  setDeploymentMode: (mode: "manual" | "area") => void;
  cumulativeDeployment: Record<string, number>;
  onOpenCountModal?: () => void;
}

export default function DeploymentEngine({ 
  availableUnits, 
  deployedUnits,
  selectedType, 
  onSelect, 
  currentPoints, 
  maxPoints,
  troopAmount,
  setTroopAmount,
  deploymentMode,
  setDeploymentMode,
  cumulativeDeployment,
  onOpenCountModal
}: DeploymentEngineProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    darat: true,
    laut: true,
    udara: true
  });

  // Unit costs and stats for deployment
  const unitCatalog = useMemo(() => [
    // DARAT
    { id: "tank_tempur_utama", label: "MBT Tank", icon: Truck, cost: 50, group: "darat" },
    { id: "apc_ifv", label: "APC / IFV", icon: Truck, cost: 20, group: "darat" },
    { id: "pasukan_infanteri", label: "Infanteri", icon: Sword, cost: 10, group: "darat" },
    { id: "artileri_berat", label: "Artileri Berat", icon: Target, cost: 40, group: "darat" },
    { id: "sistem_peluncur_roket", label: "MLRS Rocket", icon: Zap, cost: 60, group: "darat" },
    { id: "pertahanan_udara_mobile", label: "Mobile SAM", icon: Shield, cost: 55, group: "darat" },
    { id: "kendaraan_taktis", label: "Tactical Veh.", icon: Truck, cost: 15, group: "darat" },
    
    // UDARA
    { id: "jet_tempur_siluman", label: "Stealth Fighter", icon: Plane, cost: 120, group: "udara" },
    { id: "jet_tempur_interceptor", label: "Interceptor", icon: Plane, cost: 90, group: "udara" },
    { id: "pesawat_pengebom", label: "Strategic Bomber", icon: Plane, cost: 150, group: "udara" },
    { id: "helikopter_serang", label: "Attack Heli", icon: Target, cost: 45, group: "udara" },
    { id: "pesawat_pengintai", label: "Recon Plane", icon: Plane, cost: 30, group: "udara" },
    { id: "drone_intai_uav", label: "UAV Recon", icon: Zap, cost: 30, group: "udara" },
    { id: "drone_kamikaze", label: "Kamikaze", icon: Zap, cost: 20, group: "udara" },
    { id: "pesawat_angkut", label: "Transport", icon: Plane, cost: 40, group: "udara" },

    // LAUT
    { id: "kapal_induk", label: "Carrier", icon: Anchor, cost: 250, group: "laut" },
    { id: "kapal_destroyer", label: "Destroyer", icon: Anchor, cost: 150, group: "laut" },
    { id: "kapal_korvet", label: "Corvette", icon: Anchor, cost: 90, group: "laut" },
    { id: "kapal_selam_nuklir", label: "Nuclear Sub", icon: Anchor, cost: 200, group: "laut" },
    { id: "kapal_selam_regular", label: "Submarine", icon: Anchor, cost: 120, group: "laut" },
    { id: "kapal_ranjau", label: "Minelayer", icon: Anchor, cost: 70, group: "laut" },
    { id: "kapal_logistik", label: "Logistics Ship", icon: Anchor, cost: 80, group: "laut" },
  ], []);

  const handleMapClick = (e: React.MouseEvent) => {
    if (!selectedType) return;
    const unit = unitCatalog.find(u => u.id === selectedType);
    if (!unit || currentPoints + unit.cost > maxPoints) return;

    // Place unit logic
    // (Actual coordinate mapping happens in PertempuranIndex)
  };

  return (
    <div className="w-80 bg-zinc-950 border-r border-zinc-900 flex flex-col h-full">
      {/* Points HUD */}
      <div className="p-6 border-b border-zinc-900 bg-zinc-950">
         <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
               <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.15em] leading-none">Command Points</span>
            </div>
            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest leading-none">{currentPoints} / {maxPoints}</span>
         </div>
         <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden flex ring-1 ring-white/5 relative">
            <div 
               className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(239,68,68,0.3)]" 
               style={{ width: `${(currentPoints / maxPoints) * 100}%` }}
            />
         </div>
         <div className="mt-4 flex items-center justify-between">
            <p className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider leading-relaxed max-w-[180px]">
               Deployment budget limited by mobilized force strength.
            </p>
            <div className="px-2 py-1 bg-zinc-900 rounded-md border border-white/5">
               <span className="text-[9px] font-black text-white italic tracking-tighter">{Math.round((currentPoints/maxPoints)*100)}%</span>
            </div>
         </div>
      </div>

      {/* Unit Selector */}
      <div className="flex-1 overflow-y-auto p-4 no-scrollbar space-y-6">
         <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2 px-2">
            <Plus size={12} className="text-red-500" />
            Select Alutsista
         </h3>
         
         {[
            { id: "darat", label: "Matra Darat", icon: Truck },
            { id: "udara", label: "Matra Udara", icon: Plane },
            { id: "laut", label: "Matra Laut", icon: Anchor },
         ].map(group => {
            const isExpanded = expandedGroups[group.id];
            const unitsInGroup = unitCatalog.filter(u => u.group === group.id);

            return (
               <div key={group.id} className="space-y-3">
                  <button 
                     onClick={() => setExpandedGroups(prev => ({ ...prev, [group.id]: !isExpanded }))}
                     className="w-full flex items-center justify-between gap-2 px-2 py-1 hover:bg-white/5 rounded-md transition-colors group"
                  >
                     <div className="flex items-center gap-2">
                        <group.icon size={12} className="text-blue-500 opacity-70" />
                        <span className="text-[10px] font-black text-white uppercase tracking-wider">{group.label}</span>
                     </div>
                     {isExpanded ? <ChevronDown size={14} className="text-zinc-600" /> : <ChevronRight size={14} className="text-zinc-600" />}
                  </button>

                  {isExpanded && (
                     <div className="space-y-3 animate-in fade-in slide-in-from-top-1 duration-200">
                        {unitsInGroup.map((u) => {
                           // Tactical Scaling: sync with PertempuranIndex logic
                           const isInfantry = u.id === 'pasukan_infanteri';
                           const multiplier = isInfantry ? 10000 : 1;

                           const totalInMission = availableUnits[u.id] || 0;
                           const spentSoFar = cumulativeDeployment[u.id] || 0;
                           const remaining = Math.max(0, totalInMission - spentSoFar);
                           
                           const isClickable = remaining >= multiplier && currentPoints + (u.cost * multiplier) <= maxPoints;
                           const isSelected = selectedType === u.id;

                           return (
                               <div
                                  key={u.id}
                                  role="button"
                                  tabIndex={totalInMission === 0 ? -1 : 0}
                                  onClick={() => totalInMission > 0 && onSelect(isSelected ? null : u.id)}
                                  onKeyDown={(e) => {
                                     if (totalInMission > 0 && (e.key === 'Enter' || e.key === ' ')) {
                                        e.preventDefault();
                                        onSelect(isSelected ? null : u.id);
                                     }
                                  }}
                                  className={`w-full group relative p-4 rounded-2xl border transition-all flex flex-col gap-3 text-left ${
                                     totalInMission === 0 ? "opacity-30 grayscale cursor-not-allowed pointer-events-none" : "cursor-pointer"
                                  } ${
                                     isSelected 
                                        ? "bg-zinc-900 border-red-500/50 shadow-xl shadow-red-500/5" 
                                        : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 shadow-sm"
                                  }`}
                               >
                                 {isSelected && (
                                    <div className="absolute top-0 right-4 h-px w-24 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                                 )}
                                 <div className="flex items-center justify-between gap-3 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2.5 rounded-xl border transition-all ${
                                           isSelected ? "bg-red-500/10 border-red-500/20 text-red-500" : "bg-zinc-950 border-zinc-800 text-zinc-400"
                                        }`}>
                                           <u.icon size={18} />
                                        </div>
                                        <div>
                                           <h4 className={`text-[11px] font-black uppercase tracking-wider leading-none ${isSelected ? 'text-white' : 'text-zinc-400'}`}>{u.label}</h4>
                                           <span className={`text-[9px] font-bold mt-1 block ${isSelected ? 'text-red-500/70' : 'text-zinc-600'}`}>
                                              {u.cost} Command Points
                                           </span>
                                       </div>
                                    </div>
                                    <div className="text-right flex flex-col items-end">
                                       <span className={`text-xs font-black ${isSelected ? 'text-white' : remaining === 0 ? "text-red-500/50" : "text-zinc-400"}`}>
                                          {remaining}
                                       </span>
                                       <span className="text-[7px] font-black uppercase tracking-tighter opacity-50">Units left</span>
                                    </div>
                                 </div>

                                 {isSelected && (
                                    <div className="pt-4 border-t border-white/10 animate-in fade-in slide-in-from-top-1 space-y-4">
                                       {/* Troop Count Input Block */}
                                       <div className="space-y-2">
                                          <div className="flex items-center justify-between">
                                             <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest leading-none">Troop Amount</span>
                                             <button 
                                                onClick={(e) => { e.stopPropagation(); onOpenCountModal?.(); }}
                                                className="text-[8px] font-black text-blue-400 uppercase tracking-tighter hover:text-white transition-colors"
                                             >
                                                Open Modal
                                             </button>
                                          </div>
                                           <div className="relative group/input">
                                              <input 
                                                 type="number"
                                                 value={troopAmount}
                                                 onChange={(e) => setTroopAmount(e.target.value)}
                                                 onClick={(e) => e.stopPropagation()}
                                                 className="w-full bg-zinc-950 border border-white/5 rounded-xl px-3 py-2.5 text-xs font-black text-white outline-none focus:border-red-500/50 transition-all font-mono [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                 placeholder="1000"
                                              />
                                              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                                                 <span className="text-[8px] font-black text-zinc-700 uppercase tracking-tighter underline decoration-red-500/20">Personnel</span>
                                              </div>
                                           </div>
                                        </div>

                                       {/* Mode Selector Buttons */}
                                       <div className="grid grid-cols-2 gap-2">
                                          <button 
                                             onClick={(e) => { e.stopPropagation(); setDeploymentMode("area"); }}
                                             className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all ${
                                                deploymentMode === "area" 
                                                   ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400" 
                                                   : "bg-zinc-950/20 border-white/5 text-zinc-600 hover:border-white/10"
                                             }`}
                                          >
                                             <Zap size={12} />
                                             <span className="text-[8px] font-black uppercase tracking-tighter">Konfirmasi Area</span>
                                          </button>
                                          <button 
                                             onClick={(e) => { e.stopPropagation(); setDeploymentMode("manual"); }}
                                             className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all ${
                                                deploymentMode === "manual" 
                                                   ? "bg-blue-500/10 border-blue-500/50 text-blue-400" 
                                                   : "bg-zinc-950/20 border-white/5 text-zinc-600 hover:border-white/10"
                                             }`}
                                          >
                                             <Sword size={12} />
                                             <span className="text-[8px] font-black uppercase tracking-tighter">Isi Manual</span>
                                          </button>
                                       </div>

                                       <p className="text-[8px] text-zinc-600 font-bold uppercase tracking-wider leading-relaxed text-center italic">
                                          {deploymentMode === "area" ? "Right-Click Drag on map to mass deploy." : "Left-Click on map to place single unit."}
                                       </p>
                                    </div>
                                 )}
                               </div>
                           );
                        })}
                     </div>
                  )}
               </div>
            );
         })}
      </div>

      {/* Deployment Phase HUD */}
      <div className="p-6 bg-zinc-900/40 border-t border-zinc-900">
         <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl flex items-start gap-3">
            <Zap size={14} className="text-amber-500 mt-0.5 shrink-0" />
            <p className="text-[9px] text-zinc-400 font-semibold uppercase leading-relaxed tracking-wider">
               Tactical Note: High-ground offers <span className="text-white">+15% accuracy</span>. Position tanks facing forward for maximum armor.
            </p>
         </div>
      </div>
    </div>
  );
}
