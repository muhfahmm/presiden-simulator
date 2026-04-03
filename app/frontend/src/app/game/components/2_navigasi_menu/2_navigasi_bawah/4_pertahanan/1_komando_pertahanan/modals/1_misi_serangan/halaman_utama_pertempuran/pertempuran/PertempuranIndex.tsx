"use client"

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { X, Sword, Target, Activity, Shield, ChevronRight, Zap, Play, RotateCcw } from "lucide-react";
import Gameplay from "./gameplay";
import DeploymentEngine from "./DeploymentEngine";
import { polyglotService, UnitState } from "./logic/ts/polyglot-router";

interface PertempuranIndexProps {
  onClose: () => void;
  missionData: {
    target: string;
    selection: Record<string, number>;
  };
}

export default function PertempuranIndex({ onClose, missionData }: PertempuranIndexProps) {
  const [phase, setPhase] = useState<"deployment" | "combat" | "result">("deployment");
  const [units, setUnits] = useState<UnitState[]>([]);
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const [selectedUnitType, setSelectedUnitType] = useState<string | null>(null);

  // Calculate deployment budget based on Total SPW (Simulated)
  const maxPoints = useMemo(() => {
    return Object.values(missionData.selection).reduce((a, b) => a + b, 0) * 10;
  }, [missionData.selection]);

  const currentPoints = useMemo(() => {
    return units.filter(u => u.side === 'user').reduce((acc, u) => acc + (u.type.includes('tank') ? 50 : 10), 0);
  }, [units]);

  // Initial Enemy Setup (National Defense Forces)
  useEffect(() => {
    const enemyInitial: UnitState[] = [
      { id: "e1", type: "tank_enemy", side: "enemy", pos: { x: 200, y: 150 }, health: 100, rotation: Math.PI, influence: 400 },
      { id: "e2", type: "infantry_enemy", side: "enemy", pos: { x: 400, y: 100 }, health: 100, rotation: Math.PI, influence: 150 },
      { id: "e3", type: "tank_enemy", side: "enemy", pos: { x: 600, y: 150 }, health: 100, rotation: Math.PI, influence: 400 },
    ];
    setUnits(enemyInitial);
  }, []);

  const handleManualDeployment = useCallback((unitType: string | null, x: number, y: number) => {
    if (phase !== "deployment" || !unitType) return;
    
    // Check if player has remaining stock for this unit
    const deployedCount = units.filter(u => u.type === unitType).length;
    const available = missionData.selection[unitType] || 0;
    
    // Check points
    const unitCost = unitType.includes('tank') ? 50 : unitType.includes('infanteri') ? 10 : 20; // Simplified for demo
    if (deployedCount >= available || currentPoints + unitCost > maxPoints) return;

    const newUnit: UnitState = {
       id: `u_${Date.now()}`,
       type: unitType,
       side: "user",
       pos: { x, y },
       health: 100,
       rotation: 0,
       influence: unitType.includes('tank') ? 300 : 100
    };
    setUnits(prev => [...prev, newUnit]);
  }, [phase, units, missionData.selection, currentPoints, maxPoints]);

  const handleRemoveUnit = useCallback((x: number, y: number) => {
    if (phase !== "deployment") return;

    // Find nearest user unit within click threshold (25px)
    const threshold = 25;
    const unitToRemove = units.find(u => {
       if (u.side !== 'user') return false;
       const dist = Math.sqrt((u.pos.x - x)**2 + (u.pos.y - y)**2);
       return dist < threshold;
    });

    if (unitToRemove) {
       setUnits(prev => prev.filter(u => u.id !== unitToRemove.id));
       return true; // Unit removed
    }
    return false; // No unit found
  }, [phase, units]);

  // Simulation Loop during Combat Phase
  useEffect(() => {
    if (phase !== "combat") return;

    const interval = setInterval(async () => {
       // Move user units forward
       setUnits(prev => prev.map(u => {
          if (u.side === 'user') {
             // Slowly push frontline forward
             return { ...u, pos: { ...u.pos, y: u.pos.y - 1 } };
          }
          return u;
       }));

       // Simulate AI reaction every 5 seconds
       if (Math.random() > 0.95) {
          const cmd = await polyglotService.getStrategyCommand([]);
          console.log("[Polyglot:AI] Reaction Command:", cmd);
       }
    }, 100);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <div className="absolute inset-0 bg-black z-[110] flex flex-col animate-in fade-in duration-500 overflow-hidden">
      
      {/* Header HUD */}
      <div className="px-8 py-5 border-b border-zinc-900 flex items-center justify-between shrink-0 bg-zinc-950/80 backdrop-blur-md relative z-20">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
             <div className="flex items-center gap-3">
               <Activity className="h-5 w-5 text-red-500" />
               <h2 className="text-xl font-black text-white tracking-widest italic uppercase">Tactical Engagement View</h2>
             </div>
             <span className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] mt-1 ml-8">Target: {missionData.target} // Zone-of-Control Alpha</span>
          </div>
          
          <div className="h-8 w-[1px] bg-zinc-800" />

          {/* Phase Badge */}
          <div className={`px-4 py-1.5 rounded-full border flex items-center gap-2 ${
            phase === "deployment" ? "border-amber-500/30 bg-amber-500/5 text-amber-500" : "border-red-500/30 bg-red-500/5 text-red-500"
          }`}>
             <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${phase === "deployment" ? "bg-amber-500" : "bg-red-500"}`} />
             <span className="text-[10px] font-black uppercase tracking-widest">Phase: {phase.toUpperCase()}</span>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-500 hover:text-white transition-all active:scale-95 group hover:bg-zinc-800"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform" />
        </button>
      </div>

      {/* Main Tactical Table */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Side: Deployment / Command Panel */}
        {phase === "deployment" ? (
          <DeploymentEngine 
             availableUnits={missionData.selection}
             deployedUnits={units}
             selectedType={selectedUnitType}
             onSelect={setSelectedUnitType}
             maxPoints={maxPoints}
             currentPoints={currentPoints}
          />
        ) : (
          <div className="w-80 bg-zinc-950 border-r border-zinc-900 p-8 flex flex-col gap-6 overflow-y-auto no-scrollbar">
             <div className="space-y-6">
                <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                   <Target size={14} className="text-red-500" />
                   Active Targets
                </h3>
                
                {units.filter(u => u.side === 'enemy').map(u => (
                  <div key={u.id} className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl flex items-center justify-between group hover:border-red-500/30 transition-all">
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-zinc-950 rounded-lg border border-zinc-800">
                           <Shield size={16} className="text-zinc-500" />
                        </div>
                        <div>
                           <span className="text-[10px] font-black text-white uppercase block leading-none">Armored Unit</span>
                           <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-tighter">Status: DEFENSIVE</span>
                        </div>
                     </div>
                     <span className="text-[11px] font-black text-red-500 tabular-nums">100%</span>
                  </div>
                ))}
             </div>

             <div className="flex-1" />

             <div className="p-5 bg-red-600/5 border border-red-500/20 rounded-[28px] relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Activity size={60} />
                </div>
                <span className="text-[9px] font-black text-red-500/60 uppercase tracking-widest block mb-1 italic">Tactical Insight</span>
                <p className="text-[10px] text-zinc-400 font-bold leading-relaxed tracking-wider uppercase">
                   Enemy forces are maintaining a low-profile stance. Satellite relay suggests <span className="text-white">Heavy Armor</span> presence in sector Delta.
                </p>
             </div>
          </div>
        )}

        {/* Tactical Map Area */}
        <div className="flex-1 p-6 bg-black flex flex-col items-center justify-center relative overflow-hidden">
           {/* Scanlines / Vfx Overlay */}
           <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10 bg-[radial-gradient(circle_at_center,_#ffffff_0%,_transparent_100%)]" />
           
           <div 
             className="relative"
              onContextMenu={(e) => {
                 e.preventDefault();
                 const rect = e.currentTarget.getBoundingClientRect();
                 const x = e.clientX - rect.left;
                 const y = e.clientY - rect.top;
                 
                 if (phase === "deployment") {
                    const removed = handleRemoveUnit(x, y);
                    if (!removed) {
                       handleManualDeployment(selectedUnitType, x, y);
                    }
                 }
              }}
              onClick={(e) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 const x = e.clientX - rect.left;
                 const y = e.clientY - rect.top;
                 
                 if (phase === "deployment") {
                    handleManualDeployment(selectedUnitType, x, y);
                 }
              }}
           >
              <Gameplay 
                 units={units}
                 onUnitSelect={setSelectedUnitId}
              />
           </div>

           {/* Mobile Frontline indicator */}
           {phase === "combat" && (
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.5)] z-20 flex items-center justify-center">
                <span className="bg-black px-4 py-1 text-[8px] font-black text-red-500 uppercase tracking-[0.4em] border border-red-500/20 rounded-full">
                   Dynamic Frontline Transition
                </span>
             </div>
           )}
        </div>
      </div>

      {/* Footer Controllers */}
      <div className="px-12 py-6 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between shrink-0 relative z-20">
         <div className="flex gap-4">
            <div className="flex flex-col gap-1">
               <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Active Units</span>
               <span className="text-xl font-black text-white tabular-nums tracking-tighter">
                  {units.filter(u => u.side === 'user').length} Mobilized
               </span>
            </div>
         </div>

         <div className="flex gap-4">
            {phase === "deployment" ? (
               <button 
                  onClick={() => setPhase("combat")}
                  disabled={units.filter(u => u.side === 'user').length === 0}
                  className="px-12 py-4 bg-red-600 rounded-2xl text-white font-black uppercase text-[11px] tracking-[0.4em] hover:bg-red-500 shadow-xl shadow-red-900/20 transition-all active:scale-95 flex items-center gap-3 group relative overflow-hidden"
               >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Play size={18} fill="currentColor" />
                  Execute Deployment
               </button>
            ) : (
               <button 
                  onClick={() => setPhase("deployment")}
                  className="px-10 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-zinc-800 hover:text-white transition-all active:scale-95 flex items-center gap-3"
               >
                  <RotateCcw size={16} />
                  Abort Mission
               </button>
            )}

            <button 
              onClick={onClose}
              className="px-10 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-zinc-800 hover:text-white transition-all active:scale-95"
            >
              Exit Theater
            </button>
         </div>
      </div>
    </div>
  );
}
