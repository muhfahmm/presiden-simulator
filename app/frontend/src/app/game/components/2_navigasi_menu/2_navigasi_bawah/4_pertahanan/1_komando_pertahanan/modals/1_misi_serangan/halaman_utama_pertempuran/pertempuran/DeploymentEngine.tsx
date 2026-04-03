"use client"

import React, { useState, useMemo } from "react";
import { Truck, Anchor, Plane, Sword, Zap, Shield, Target, Plus, Info } from "lucide-react";
import { UnitState, Vector2 } from "./logic/ts/polyglot-router";

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

  // Unit costs and stats for deployment
  const unitCatalog = useMemo(() => [
    { id: "tank_tempur_utama", label: "MBT Tank", icon: Truck, cost: 50, influence: 300, group: "darat" },
    { id: "apc_ifv", label: "APC / IFV", icon: Truck, cost: 20, influence: 150, group: "darat" },
    { id: "pasukan_infanteri", label: "Infanteri", icon: Sword, cost: 10, influence: 100, group: "darat" },
    { id: "artileri_berat", label: "Artileri", icon: Target, cost: 40, influence: 250, group: "darat" },
    { id: "jet_tempur_siluman", label: "Jet Stealth", icon: Plane, cost: 100, influence: 500, group: "udara" },
    { id: "kapal_destroyer", label: "Destroyer", icon: Anchor, cost: 150, influence: 1000, group: "laut" },
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
      <div className="flex-1 overflow-y-auto p-4 no-scrollbar space-y-3">
         <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2 px-2">
            <Plus size={12} className="text-red-500" />
            Select Alutsista
         </h3>
         
         {unitCatalog.map((u) => {
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
