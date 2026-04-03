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
}

export default function DeploymentEngine({ 
  availableUnits, 
  deployedUnits,
  selectedType, 
  onSelect, 
  currentPoints, 
  maxPoints 
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
    { id: "roket_mlrs_mobile", label: "MLRS Rocket", icon: Zap, cost: 60, group: "darat" },
    { id: "mobile_sam_system", label: "Mobile SAM", icon: Shield, cost: 55, group: "darat" },
    { id: "kendaraan_taktis_ringan", label: "Tactical Veh.", icon: Truck, cost: 15, group: "darat" },
    
    // UDARA
    { id: "jet_tempur_siluman", label: "Stealth Fighter", icon: Plane, cost: 100, group: "udara" },
    { id: "pesawat_cegat_interceptor", label: "Interceptor", icon: Plane, cost: 80, group: "udara" },
    { id: "pembom_strategis", label: "Bomber", icon: Plane, cost: 150, group: "udara" },
    { id: "helikopter_serang", label: "Attack Heli", icon: Plane, cost: 60, group: "udara" },
    { id: "uav_pengintai", label: "UAV Recon", icon: Plane, cost: 30, group: "udara" },
    { id: "pesawat_kamikaze", label: "Kamikaze", icon: Zap, cost: 20, group: "udara" },
    { id: "pesawat_angkut_militer", label: "Transport", icon: Plane, cost: 40, group: "udara" },

    // LAUT
    { id: "kapal_induk", label: "Carrier", icon: Anchor, cost: 250, group: "laut" },
    { id: "kapal_destroyer", label: "Destroyer", icon: Anchor, cost: 150, group: "laut" },
    { id: "kapal_korvet", label: "Corvette", icon: Anchor, cost: 90, group: "laut" },
    { id: "kapal_selam_nuklir", label: "Nuclear Sub", icon: Anchor, cost: 200, group: "laut" },
    { id: "kapal_selam_reguler", label: "Submarine", icon: Anchor, cost: 120, group: "laut" },
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
      <div className="p-6 border-b border-zinc-900 bg-zinc-900/20">
         <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">Command Points</span>
            <span className="text-[10px] font-black text-zinc-700 uppercase tracking-widest leading-none">Limit: {maxPoints}</span>
         </div>
         <div className="h-4 bg-zinc-900 rounded-full overflow-hidden flex ring-1 ring-white/5 relative">
            <div 
               className="h-full bg-red-600 transition-all duration-500" 
               style={{ width: `${(currentPoints / maxPoints) * 100}%` }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-black text-white italic">
               {currentPoints} / {maxPoints} SP
            </span>
         </div>
         <p className="mt-3 text-[9px] text-zinc-600 font-bold uppercase tracking-wider leading-relaxed">
            Deployment budget scales with mobilized expeditionary force strength.
         </p>
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
                           const totalInMission = availableUnits[u.id] || 0;
                           const currentlyDeployed = deployedUnits.filter(unit => unit.type === u.id).length;
                           const remaining = Math.max(0, totalInMission - currentlyDeployed);
                           
                           const isClickable = remaining > 0 && currentPoints + u.cost <= maxPoints;
                           const isSelected = selectedType === u.id;

                           return (
                              <button
                                 key={u.id}
                                 onClick={() => onSelect(isSelected ? null : u.id)}
                                 disabled={totalInMission === 0}
                                 className={`w-full group relative p-4 rounded-2xl border transition-all flex flex-col gap-3 text-left ${
                                    isSelected 
                                       ? "bg-red-600 border-red-500 text-white shadow-lg shadow-red-900/20" 
                                       : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 disabled:opacity-30 disabled:grayscale"
                                 }`}
                              >
                                 <div className="flex items-center justify-between gap-3 relative z-10">
                                    <div className="flex items-center gap-3">
                                       <div className={`p-2.5 rounded-xl border transition-all ${
                                          isSelected ? "bg-white/10 border-white/20" : "bg-zinc-950 border-zinc-800"
                                       }`}>
                                          <u.icon size={18} />
                                       </div>
                                       <div>
                                          <h4 className="text-[11px] font-black uppercase tracking-wider leading-none">{u.label}</h4>
                                          <span className={`text-[9px] font-bold mt-1 block ${isSelected ? 'text-white/60' : 'text-zinc-600'}`}>
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
                                    <div className="pt-2 border-t border-white/10 animate-in fade-in slide-in-from-top-1">
                                       <span className="text-[9px] font-bold text-white/80 flex items-center gap-1">
                                          <Info size={10} />
                                          Click in Deployment Zone (Bottom)
                                       </span>
                                    </div>
                                 )}
                              </button>
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
