"use client"

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { X, Sword, Target, Activity, Shield, ChevronRight, ChevronDown, Zap, Play, RotateCcw, Truck, Anchor, Plane } from "lucide-react";
import Gameplay from "./gameplay";
import DeploymentEngine from "./DeploymentEngine";
import { polyglotService, UnitState } from "./logic/polyglot/ts/polyglot-router";
import { getUnitStats, DatabaseToTacticalMapping } from "./logic/polyglot/ts/unit_stats";
import { HP_Logic } from "./logic/polyglot/ts/HP_Logic";
import { Power_Logic } from "./logic/polyglot/ts/Power_Logic";
import { countries } from "@/app/database/data/negara/benua/index";
import { calculateUdaraFormation } from "./logic/formasi_armada/udara/grid_formation";
import { calculateLautFormation } from "./logic/formasi_armada/laut/grid_formation";
import { calculateDaratFormation } from "./logic/formasi_armada/darat/grid_formation";
import { drawWarMapBackground as drawMapWithSea } from "./map_negara_dengan_laut/CanvasMapWar";
import { drawWarMapBackground as drawMapNoSea } from "./map_negara_tanpa_laut/CanvasMapWar";

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
  const [expandedAISections, setExpandedAISections] = useState<Record<string, boolean>>({
    darat: true,
    laut: true,
    udara: true
  });
  const [targetArmada, setTargetArmada] = useState<any>(null);

  // Calculate deployment budget based on Total SPW (Simulated)
  const maxPoints = useMemo(() => {
    return Object.values(missionData.selection).reduce((a, b) => a + b, 0) * 10;
  }, [missionData.selection]);

  const currentPoints = useMemo(() => {
    return units.filter(u => u.side === 'user').reduce((acc, u) => acc + (u.type.includes('tank') ? 50 : 10), 0);
  }, [units]);

  // Determine mapping based on target country geography
  const hasSea = useMemo(() => {
    if (!targetArmada?.laut) return false;
    return Object.values(targetArmada.laut).some(count => (count as number) > 0);
  }, [targetArmada]);

  const activeMapRenderer = hasSea ? drawMapWithSea : drawMapNoSea;

    // Initial Enemy Setup (National Defense Forces)
    useEffect(() => {
        const targetCountry = countries.find(c => 
            c.name_id.toLowerCase() === missionData.target.toLowerCase() || 
            c.name_en.toLowerCase() === missionData.target.toLowerCase()
        );

        if (!targetCountry) return;

        const armada = targetCountry.armada_militer;
        let cumulativeUnits: UnitState[] = [];
        let currentY = -12000; // Start deep in the sea zone (Top)
        const groupGapY = 800;

        // 1. LAUT (Sea Zone: -15000 to -6000)
        const lautRes = calculateLautFormation(armada.laut, currentY);
        cumulativeUnits = [...cumulativeUnits, ...lautRes.units];
        // Ensure UDARA starts after sea zones or after LAUT formation
        currentY = Math.max(lautRes.nextY, -5000) + groupGapY;
        
        // 2. UDARA (High Ground / Air Corridor)
        const udaraRes = calculateUdaraFormation(armada.udara, currentY);
        cumulativeUnits = [...cumulativeUnits, ...udaraRes.units];
        currentY = udaraRes.nextY + groupGapY;
        
        // 3. DARAT (Main Theater / Bottom)
        const daratRes = calculateDaratFormation(armada.darat, armada.barak, currentY);
        cumulativeUnits = [...cumulativeUnits, ...daratRes.units];

        setTargetArmada(armada);
        setUnits(prev => [...prev.filter(u => u.side !== 'enemy'), ...cumulativeUnits]);
    }, [missionData.target]);

  const handleManualDeployment = useCallback((unitType: string | null, x: number, y: number) => {
    if (phase !== "deployment" || !unitType) return;
    
    // Check if player has remaining stock for this unit
    const deployedCount = units.filter(u => u.type === unitType).length;
    const available = missionData.selection[unitType] || 0;
    
    // Check points
    const unitCost = unitType.includes('tank') ? 50 : unitType.includes('infanteri') ? 10 : 20; // Simplified for demo
    if (deployedCount >= available || currentPoints + unitCost > maxPoints) return;

    const stats = getUnitStats(unitType);

    const newUnit: UnitState = {
       id: `u_${Date.now()}`,
       type: unitType,
       side: "user",
       pos: { x, y },
       health: stats.maxHealth,
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


  // Visual Tracers
  const [combatVfx, setCombatVfx] = useState<{ id: string, startX: number, startY: number, endX: number, endY: number, timestamp: number }[]>([]);

  // Simulation Loop during Combat Phase
  useEffect(() => {
    if (phase !== "combat") return;

    let lastTick = Date.now();
    const interval = setInterval(() => {
       const now = Date.now();
       const dt = (now - lastTick) / 1000;
       lastTick = now;

        setUnits(prev => {
           // MIGRATED: Logic moved to polyglotRouter.processTick for performance (Rust/C++/Python)
           const tickUpdate = async () => {
              const result = await polyglotService.processTick(prev, dt);
              if (phase === "combat") {
                 setUnits(result.units);
                 setCombatVfx(prevVfx => {
                    const active = prevVfx.filter(v => now - v.timestamp < 300);
                    return result.vfx.length > 0 ? [...active, ...result.vfx] : active;
                 });
              }
           };
           tickUpdate();
           return prev; // State will be updated asynchronously by the tickUpdate
        });
       
    }, 1000 / 30); // 30Hz simulation loop

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <div className="absolute inset-0 bg-black z-[110] flex flex-col animate-in fade-in duration-500 overflow-hidden select-none">
      
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
             <span className="text-[10px] font-black uppercase tracking-widest">Phase: {(phase || "DEPLOYMENT").toUpperCase()}</span>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-500 hover:text-white transition-all active:scale-95 group hover:bg-zinc-800"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform" />
        </button>
      </div>
      

      {(phase === "deployment" || phase === "combat") && (
         <div className="flex-1 flex overflow-hidden">
            {phase === "deployment" ? (
               <DeploymentEngine availableUnits={missionData.selection} deployedUnits={units} selectedType={selectedUnitType} onSelect={setSelectedUnitType} maxPoints={maxPoints} currentPoints={currentPoints} />
            ) : (
               <div className="w-80 bg-zinc-950 border-r border-zinc-900 p-8 flex flex-col gap-6 overflow-y-auto no-scrollbar">
                  <div className="space-y-6">
                     <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2"><Target size={14} className="text-red-500" />Active Targets</h3>
                     {units.filter(u => u.side === 'enemy').map(u => (
                        <div key={u.id} className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl flex items-center justify-between group hover:border-red-500/30 transition-all">
                           <div className="flex items-center gap-3"><div className="p-2 bg-zinc-950 rounded-lg border border-zinc-800"><Shield size={16} className="text-zinc-500" /></div><div><span className="text-[10px] font-black text-white uppercase block leading-none">Armored Unit</span><span className="text-[8px] font-bold text-zinc-600 uppercase tracking-tighter">Status: DEFENSIVE</span></div></div>
                           <span className="text-[11px] font-black text-red-500 tabular-nums">100%</span>
                        </div>
                     ))}
                  </div>
                  <div className="flex-1" />
                  <div className="p-5 bg-red-600/5 border border-red-500/20 rounded-[28px] relative group overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-5"><Activity size={60} /></div>
                     <span className="text-[9px] font-black text-red-500/60 uppercase tracking-widest block mb-1 italic">Tactical Insight</span>
                     <p className="text-[10px] text-zinc-400 font-bold leading-relaxed tracking-wider uppercase">Enemy forces are maintaining a low-profile stance. Satellite relay suggests <span className="text-white">Heavy Armor</span> presence in sector Delta.</p>
                  </div>
               </div>
            )}

            <div className="flex-1 p-4 bg-black flex flex-col items-center justify-center relative overflow-hidden">
               <div className="w-full h-full relative">
                  <Gameplay units={units} combatVfx={combatVfx} onUnitSelect={setSelectedUnitId} drawMapBackground={activeMapRenderer} hasSea={hasSea} onMapClick={(x, y, isRightClick) => {
                     if (phase === "deployment") { if (isRightClick) handleRemoveUnit(x, y); else handleManualDeployment(selectedUnitType, x, y); }
                  }} />
               </div>
               {phase === "combat" && (
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.5)] z-20 flex items-center justify-center">
                     <span className="bg-black px-4 py-1 text-[8px] font-black text-red-500 uppercase tracking-[0.4em] border border-red-500/20 rounded-full">Dynamic Frontline Transition</span>
                  </div>
               )}
            </div>

            {phase === "deployment" && (
               <div className="w-80 bg-zinc-950 border-l border-zinc-900 flex flex-col h-full shrink-0">
                  <div className="p-6 border-b border-zinc-900 bg-red-950/10">
                     <span className="text-[10px] font-black text-red-500 uppercase tracking-widest leading-none">Intelligence Report</span>
                     <div className="h-4 mt-3 bg-red-950/30 border border-red-900/50 rounded-full overflow-hidden flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" /><span className="text-[9px] font-black text-red-500 italic relative z-10 animate-pulse tracking-widest">HOSTILE PRESENCE DETECTED</span>
                     </div>
                     <p className="mt-3 text-[9px] text-zinc-600 font-bold uppercase tracking-wider leading-relaxed">Satellite reconnaissance has identified enemy Alutsista mobilization in the sector.</p>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 no-scrollbar space-y-6">
                     <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2 px-2"><Target size={12} className="text-red-500" />Detected Hostiles</h3>
                     {[ { label: "Matra Darat", icon: Truck, color: "text-amber-500", key: "darat" }, { label: "Matra Laut", icon: Anchor, color: "text-blue-400", key: "laut" }, { label: "Matra Udara", icon: Plane, color: "text-cyan-400", key: "udara" } ].map(matra => {
                        const isExpanded = expandedAISections[matra.key];
                        const matraData = targetArmada?.[matra.key] || {};
                        return (
                           <div key={matra.key} className="space-y-3">
                              <button onClick={() => setExpandedAISections(prev => ({ ...prev, [matra.key]: !isExpanded }))} className="w-full flex items-center justify-between gap-2 px-2 py-1 hover:bg-white/5 rounded-md transition-colors group">
                                 <div className="flex items-center gap-2"><matra.icon size={12} className={`${matra.color} opacity-70`} /><span className="text-[10px] font-black text-white uppercase tracking-wider">{matra.label}</span></div>
                                 {isExpanded ? <ChevronDown size={12} className="text-zinc-600" /> : <ChevronRight size={12} className="text-zinc-600" />}
                              </button>
                              {isExpanded && (
                                 <div className="space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
                                    {matra.key === 'darat' && targetArmada?.barak !== undefined && (
                                       <div className={`w-full relative p-3 rounded-2xl bg-zinc-900/20 border border-zinc-800/80 flex flex-col gap-3 transition-opacity ${Number(targetArmada.barak) === 0 ? 'opacity-40 grayscale' : ''}`}>
                                          <div className="flex items-center justify-between gap-3"><div className="flex items-center gap-3"><div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-600"><Sword size={14} /></div><div><h4 className="text-[10px] font-black uppercase tracking-wider leading-none text-zinc-400">Pasukan Infanteri</h4><span className={`text-[8px] font-bold mt-1 block uppercase ${Number(targetArmada.barak) > 0 ? 'text-red-500/80' : 'text-zinc-700'}`}>{Number(targetArmada.barak) > 0 ? 'Threat Level: High' : 'No Threat Detected'}</span></div></div><div className="text-right flex flex-col items-end"><span className={`text-[11px] font-black ${Number(targetArmada.barak) > 0 ? 'text-red-500' : 'text-zinc-700'}`}>{(targetArmada.barak * 10000).toLocaleString('id-ID')} Personnel</span><span className="text-[7px] font-black uppercase tracking-tighter text-zinc-600">Total Troops</span></div></div>
                                       </div>
                                    )}
                                    {Object.entries(matraData).map(([type, count]) => {
                                       const label = type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                                       return (
                                          <div key={type} className={`w-full relative p-3 rounded-2xl bg-zinc-900/20 border border-zinc-800/80 flex flex-col gap-3 transition-opacity ${Number(count) === 0 ? 'opacity-40 grayscale' : ''}`}>
                                             <div className="flex items-center justify-between gap-3"><div className="flex items-center gap-3"><div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-600">{matra.key === 'darat' ? <Truck size={14} /> : matra.key === 'laut' ? <Anchor size={14} /> : <Plane size={14} />}</div><div><h4 className="text-[10px] font-black uppercase tracking-wider leading-none text-zinc-400">{label}</h4><span className={`text-[8px] font-bold mt-1 block uppercase ${Number(count) > 0 ? 'text-red-500/80' : 'text-zinc-700'}`}>{Number(count) > 0 ? 'Threat Level: High' : 'No Threat Detected'}</span></div></div><div className="text-right flex flex-col items-end"><span className={`text-[11px] font-black ${Number(count) > 0 ? 'text-red-500' : 'text-zinc-700'}`}>{Number(count).toLocaleString('id-ID')}</span><span className="text-[7px] font-black uppercase tracking-tighter text-zinc-600">Inventory</span></div></div>
                                          </div>
                                       );
                                    })}
                                    {Object.keys(matraData).length === 0 && <div className="px-4 py-2 border border-zinc-900 rounded-xl"><span className="text-[8px] font-bold text-zinc-600 uppercase italic">No tactical data available</span></div>}
                                 </div>
                              )}
                           </div>
                        );
                     })}
                  </div>
                  <div className="p-6 bg-zinc-900/40 border-t border-zinc-900"><div className="bg-red-500/5 border border-red-500/20 p-3 rounded-xl flex items-start gap-3"><Activity size={14} className="text-red-500 mt-0.5 shrink-0" /><p className="text-[9px] text-zinc-400 font-semibold uppercase leading-relaxed tracking-wider">Enemy AI is employing defensive formations. Expect heavy resistance near objective points.</p></div></div>
               </div>
            )}
         </div>
      )}

      <div className="px-12 py-6 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between shrink-0 relative z-20">
         <div className="flex gap-4"><div className="flex flex-col gap-1"><span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Active Units</span><span className="text-xl font-black text-white tabular-nums tracking-tighter">{units.filter(u => u.side === 'user').length} Mobilized</span></div></div>
         <div className="flex gap-4">
            {phase === "deployment" ? (
               <button onClick={() => setPhase("combat")} disabled={units.filter(u => u.side === 'user').length === 0} className="px-12 py-4 bg-red-600 rounded-2xl text-white font-black uppercase text-[11px] tracking-[0.4em] hover:bg-red-500 shadow-xl shadow-red-900/20 transition-all active:scale-95 flex items-center gap-3 group relative overflow-hidden"><div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" /><Play size={18} fill="currentColor" />Execute Deployment</button>
            ) : phase === "combat" ? (
               <button onClick={() => setPhase("deployment")} className="px-10 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-zinc-800 hover:text-white transition-all active:scale-95 flex items-center gap-3"><RotateCcw size={16} />Abort Mission</button>
            ) : null}
            <button onClick={onClose} className="px-10 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-zinc-800 hover:text-white transition-all active:scale-95">Exit Theater</button>
         </div>
      </div>
    </div>
  );
}
