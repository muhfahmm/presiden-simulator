"use client"

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { X, Sword, Target, Activity, Shield, ChevronRight, ChevronDown, Zap, Play, RotateCcw, Truck, Anchor, Plane } from "lucide-react";
import Gameplay from "./gameplay";
import DeploymentEngine from "./DeploymentEngine";
import { polyglotService, UnitState } from "./logic/polyglot/ts/polyglot-router";
import { getUnitStats } from "./logic/polyglot/ts/unit_stats";
import { HP_Logic } from "./logic/polyglot/ts/HP_Logic";
import { Power_Logic } from "./logic/polyglot/ts/Power_Logic";
import { countries } from "@/app/database/data/negara/benua/index";
import { calculateUdaraFormation } from "./logic/formasi_armada/udara/grid_formation";
import { calculateLautFormation } from "./logic/formasi_armada/laut/grid_formation";
import { calculateDaratFormation } from "./logic/formasi_armada/darat/grid_formation";
import { drawWarMapBackground as drawMapWithSea } from "./map_negara_dengan_laut/CanvasMapWar";
import { drawWarMapBackground as drawMapNoSea } from "./map_negara_tanpa_laut/CanvasMapWar";
import { BarakUtils, BarrackState } from "./logic/mapTexture/gambar-tempat-armada/darat/barak/BarakUtils";
import { HangarUtils, HangarState } from "./logic/mapTexture/gambar-tempat-armada/darat/hangar_tank/HangarUtils";
import { InfantryDeploymentLogic } from "./logic/mapTexture/gambar-tempat-armada/darat/barak/logika_infanteri_keluar_barak/logic";
import { TankDeploymentLogic } from "./logic/mapTexture/gambar-tempat-armada/darat/hangar_tank/logika_tank_keluar_hangar/logic";
import { AirfieldUtils, AirfieldHangarState, HelipadState } from "./logic/mapTexture/gambar-tempat-armada/udara/AirfieldUtils";
import { AircraftDeploymentLogic } from "./logic/mapTexture/gambar-tempat-armada/udara/bandara/logika_pesawat_keluar_hangar/logic";
import { HelicopterDeploymentLogic } from "./logic/mapTexture/gambar-tempat-armada/udara/helipad/logika_helikopter_keluar_helipad/logic";
import { NavalDeploymentLogic, PortShipState } from "./logic/mapTexture/gambar-tempat-armada/laut/pelabuhan/logika_kapal_keluar_pelabuhan/logic";
import { ArmoryDeploymentLogic } from "./logic/mapTexture/gambar-tempat-armada/darat/gudang_senjata/logic";
import { ArmoryState } from "./logic/mapTexture/gambar-tempat-armada/darat/gudang_senjata/ArmoryUtils";
import { TheaterSetupLogic } from "./logic/TheaterSetupLogic";
import { PlayerTacticalLogic } from "./logic/PlayerTacticalLogic";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";

interface PertempuranIndexProps {
   onClose: () => void;
   missionData: {
      target: string;
      selection: Record<string, number>;
   };
}

export default function PertempuranIndex({ onClose, missionData }: PertempuranIndexProps) {
   const [phase, setPhase] = useState<"deployment" | "combat" | "result">("deployment");
   const [isPaused, setIsPaused] = useState(timeStorage.getState().isPaused);
   const [units, setUnits] = useState<UnitState[]>([]);
   const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
   const [selectedUnitType, setSelectedUnitType] = useState<string | null>(null);
   const [expandedAISections, setExpandedAISections] = useState<Record<string, boolean>>({
      darat: true,
      laut: true,
      udara: true
   });
   const [targetArmada, setTargetArmada] = useState<any>(null);
   const [barracks, setBarracks] = useState<BarrackState[]>([]);
   const [tankHangars, setTankHangars] = useState<HangarState[]>([]);
   const [airfieldHangars, setAirfieldHangars] = useState<AirfieldHangarState[]>([]);
   const [helipads, setHelipads] = useState<HelipadState[]>([]);
   const [portShips, setPortShips] = useState<PortShipState[]>([]);
   const [armory, setArmory] = useState<ArmoryState[]>([]);
   const [cumulativeDeployment, setCumulativeDeployment] = useState<Record<string, number>>({});

   // Unit Selection & Waypoints (Mekanik RTS)
   const [selectedUnitIds, setSelectedUnitIds] = useState<string[]>([]);
   const [activeWaypoints, setActiveWaypoints] = useState<{id: number, x: number, y: number}[]>([]);

   // Building Interaction
   const [selectedBuildingId, setSelectedBuildingId] = useState<string | null>(null);

   // User-side buildings
   const [userBarracks, setUserBarracks] = useState<BarrackState[]>([]);
   const [userTankHangars, setUserTankHangars] = useState<HangarState[]>([]);
   const [userAirfieldHangars, setUserAirfieldHangars] = useState<AirfieldHangarState[]>([]);
   const [userHelipads, setUserHelipads] = useState<HelipadState[]>([]);
   const [userPortShips, setUserPortShips] = useState<PortShipState[]>([]);
   const [userArmory, setUserArmory] = useState<ArmoryState[]>([]);

   // SIMULATION REFS: Ensuring the tactical loop remains stable and counters are reliable.
   // By using refs, we avoid restarting the setInterval every time a state changes.
   const unitsRef = useRef<UnitState[]>([]);
   const barracksRef = useRef<BarrackState[]>([]);
   const tankHangarsRef = useRef<HangarState[]>([]);
   const airfieldHangarsRef = useRef<AirfieldHangarState[]>([]);
   const helipadsRef = useRef<HelipadState[]>([]);
   const portShipsRef = useRef<PortShipState[]>([]);
   const armoryRef = useRef<ArmoryState[]>([]);

   const userBarracksRef = useRef<BarrackState[]>([]);
   const userTankHangarsRef = useRef<HangarState[]>([]);
   const userAirfieldHangarsRef = useRef<AirfieldHangarState[]>([]);
   const userHelipadsRef = useRef<HelipadState[]>([]);
   const userPortShipsRef = useRef<PortShipState[]>([]);
   const userArmoryRef = useRef<ArmoryState[]>([]);
   const isPausedRef = useRef(isPaused);

   // Sync refs with React state for simulation access
   useEffect(() => { unitsRef.current = units; }, [units]);
   useEffect(() => { barracksRef.current = barracks; }, [barracks]);
   useEffect(() => { tankHangarsRef.current = tankHangars; }, [tankHangars]);
   useEffect(() => { airfieldHangarsRef.current = airfieldHangars; }, [airfieldHangars]);
   useEffect(() => { helipadsRef.current = helipads; }, [helipads]);
   useEffect(() => { portShipsRef.current = portShips; }, [portShips]);
   useEffect(() => { armoryRef.current = armory; }, [armory]);

   // Sync User refs
   useEffect(() => { userBarracksRef.current = userBarracks; }, [userBarracks]);
   useEffect(() => { userTankHangarsRef.current = userTankHangars; }, [userTankHangars]);
   useEffect(() => { userAirfieldHangarsRef.current = userAirfieldHangars; }, [userAirfieldHangars]);
   useEffect(() => { userHelipadsRef.current = userHelipads; }, [userHelipads]);
   useEffect(() => { userPortShipsRef.current = userPortShips; }, [userPortShips]);
   useEffect(() => { userArmoryRef.current = userArmory; }, [userArmory]);

   useEffect(() => { isPausedRef.current = isPaused; }, [isPaused]);

   // Sync with global game time pause/resume
   useEffect(() => {
      const unsubscribe = timeStorage.subscribe((date, paused) => {
         setIsPaused(paused);
      });
      return () => unsubscribe();
   }, []);

   // Calculate deployment budget based on proper unit costs
   const maxPoints = useMemo(() => {
      return Object.entries(missionData.selection).reduce((acc, [id, count]) => {
         const stats = getUnitStats(id);
         return acc + (stats.cost * count);
      }, 0);
   }, [missionData.selection]);

   const currentPoints = useMemo(() => {
      return units.filter(u => u.side === 'user').reduce((acc, u) => {
         const stats = getUnitStats(u.type);
         const multiplier = 1;
         return acc + (stats.cost * multiplier);
      }, 0);
   }, [units]);

   // Determine mapping based on target country geography
   const hasSea = useMemo(() => {
      if (!targetArmada?.laut) return false;
      return Object.values(targetArmada.laut).some(count => (count as number) > 0);
   }, [targetArmada]);

   const activeMapRenderer = hasSea ? drawMapWithSea : drawMapNoSea;

   // Initial Factions Setup (User & AI Bases)
   useEffect(() => {
      try {
         // Initialize AI Theater
         const aiResult = TheaterSetupLogic.initializeTheater(missionData.target);
         setTargetArmada(aiResult.targetCountry.armada_militer);
         setUnits(prev => [...prev.filter(u => u.side !== 'enemy'), ...aiResult.initialUnits]);
         setBarracks(aiResult.barracks);
         setTankHangars(aiResult.tankHangars);
         setAirfieldHangars(aiResult.airfieldHangars);
         setHelipads(aiResult.helipads);
         setPortShips(aiResult.portShips);
         setArmory(aiResult.armory);

         // Initialize User Theater (Functional Base on left)
         const userResult = TheaterSetupLogic.initializeUserTheater(missionData.selection);
         setUserBarracks(userResult.barracks);
         setUserTankHangars(userResult.tankHangars);
         setUserAirfieldHangars(userResult.airfieldHangars);
         setUserHelipads(userResult.helipads);
         setUserPortShips(userResult.portShips);
         setUserArmory(userResult.armory);
      } catch (error) {
         console.error(error);
      }
   }, [missionData.target, missionData.selection]);

   // Auto-Select user units when a building is clicked in the deployment sidebar
   useEffect(() => {
      if (selectedUnitType) {
         const matchingUnits = units.filter(u => u.side === 'user' && u.type === selectedUnitType).map(u => u.id);
         setSelectedUnitIds(matchingUnits);
      } else {
         setSelectedUnitIds([]);
      }
   }, [selectedUnitType, units.length]);

   // Terrain Restriction Definitions
   const NAVAL_UNITS = TheaterSetupLogic.NAVAL_UNITS;
   const AIR_UNITS = TheaterSetupLogic.AIR_UNITS;

   const isValidTerrain = useCallback((unitType: string, y: number) => {
      return PlayerTacticalLogic.isValidTerrain(unitType, y, hasSea);
   }, [hasSea]);

   const handleManualDeployment = useCallback((unitType: string | null, x: number, y: number) => {
      if ((phase !== "deployment" && phase !== "combat") || !unitType) return;

      const newUnit = PlayerTacticalLogic.deployManual(
         unitType, x, y, units, missionData.selection, currentPoints, maxPoints, hasSea
      );

      if (newUnit) {
         setUnits(prev => [...prev, newUnit]);
         const isInfantry = unitType === 'pasukan_infanteri';
         const amount = isInfantry ? 10000 : 1;
         setCumulativeDeployment(prev => ({
            ...prev,
            [unitType]: (prev[unitType] || 0) + amount
         }));
      }
   }, [phase, units, missionData.selection, currentPoints, maxPoints, hasSea]);

   const handleRemoveUnit = useCallback((x: number, y: number) => {
      if (phase !== "deployment" && phase !== "combat") return;

      // Find nearest user unit within click threshold (25px)
      const threshold = 25;
      const unitToRemove = units.find(u => {
         if (u.side !== 'user') return false;
         const dist = Math.sqrt((u.pos.x - x) ** 2 + (u.pos.y - y) ** 2);
         return dist < threshold;
      });

      if (unitToRemove) {
         setUnits(prev => prev.filter(u => u.id !== unitToRemove.id));
         
         // UNDO LOGIC: Return units to sidebar
         const unitType = unitToRemove.type;
         const isInfantry = unitType === 'pasukan_infanteri';
         const amount = isInfantry ? 10000 : 1;

         setCumulativeDeployment(prev => ({
            ...prev,
            [unitType]: Math.max(0, (prev[unitType] || 0) - amount)
         }));

         return true; // Unit removed
      }
      return false; // No unit found
   }, [phase, units]);

   const handleTacticalMoveOrder = useCallback((x: number, y: number) => {
      if ((phase !== "deployment" && phase !== "combat") || selectedUnitIds.length === 0) return;

      const newTarget = { id: Date.now(), x, y };
      setActiveWaypoints(prev => {
         const updated = [...prev, newTarget];
         if (updated.length > 5) return updated.slice(updated.length - 5);
         return updated;
      });

      setUnits(prev => prev.map(u => {
         if (selectedUnitIds.includes(u.id)) {
            return {
               ...u,
               path: [{ x, y }]
            };
         }
         return u;
      }));
   }, [phase, selectedUnitIds]);

   const handleAddItemToQueue = useCallback((unitType: string) => {
      if (!selectedBuildingId) return;

      const updateQueue = (prev: any[]) => prev.map(b => {
         if (b.id !== selectedBuildingId) return b;
         
         const stats = getUnitStats(unitType);
         const trainingTime = stats.reloadSpeed * 5; 
         const newQueue = [...(b.trainingQueue || []), { type: unitType, progress: 0, totalTime: trainingTime }];
         
         return { ...b, trainingQueue: newQueue };
      });

      setUserBarracks(updateQueue);
      setUserTankHangars(updateQueue);
      setUserAirfieldHangars(updateQueue);
      setUserHelipads(updateQueue);
      setUserArmory(updateQueue);
   }, [selectedBuildingId]);


   // Visual Tracers & Combat VFX
   const [combatVfx, setCombatVfx] = useState<any[]>([]);

   // Simulation Loop during Combat Phase
   useEffect(() => {
      if (phase !== "combat") return;

      let lastTick = Date.now();
      const interval = setInterval(async () => {
         const now = Date.now();
         if (isPausedRef.current) {
            lastTick = now;
            return;
         }
         const dt = Math.min((now - lastTick) / 1000, 0.1);
         lastTick = now;

         // 1. Core Physics (Polyglot) - Use ref to avoid closure staleness
         const result = await polyglotService.processTick(unitsRef.current, dt);

         // 2. Tactical Deployment (Spawn Logic - AI)
         const infRes = InfantryDeploymentLogic.processBarracksTick(barracksRef.current, unitsRef.current, now, 'enemy');
         const tankRes = TankDeploymentLogic.processTankHangarTick(tankHangarsRef.current, unitsRef.current, now, 'enemy');

         // Activation Trigger: User crossed X = 5000 / Final Sector
         const isAirfieldActivated = unitsRef.current.some(u => u.side === 'user' && u.pos.x > 5000);
         const airfieldResult = AircraftDeploymentLogic.processAirfieldTick(airfieldHangarsRef.current, unitsRef.current, now, isAirfieldActivated, 'enemy');
         const heliRes = HelicopterDeploymentLogic.processHelipadTick(helipadsRef.current, unitsRef.current, now, isAirfieldActivated, 'enemy');
         const navalRes = NavalDeploymentLogic.processNavalPortTick(portShipsRef.current, unitsRef.current, now, 'enemy');
         const armoryRes = ArmoryDeploymentLogic.processArmoryTick(armoryRef.current, unitsRef.current, now, 'enemy');

         // 2.1 Tactical Deployment (Spawn Logic - USER)
         // Authorization: Only spawn if the building's product category is selected in the sidebar
         const isBarracksSelected = selectedUnitType === 'pasukan_infanteri';
         const isTankSelected = ['tank_tempur_utama', 'apc_ifv', 'kendaraan_taktis'].includes(selectedUnitType || '');
         const isAirfieldSelected = TheaterSetupLogic.AIR_UNITS.includes(selectedUnitType || '');
         const isHeliSelected = selectedUnitType === 'helikopter_serang';
         const isNavalSelected = TheaterSetupLogic.NAVAL_UNITS.includes(selectedUnitType || '');
         const isArmorySelected = ['artileri_berat', 'sistem_peluncur_roket', 'pertahanan_udara_mobile'].includes(selectedUnitType || '');

         const userInfRes = InfantryDeploymentLogic.processBarracksTick(userBarracksRef.current, unitsRef.current, now, 'user');
         const userTankRes = TankDeploymentLogic.processTankHangarTick(userTankHangarsRef.current, unitsRef.current, now, 'user');
         const userAirfieldRes = AircraftDeploymentLogic.processAirfieldTick(userAirfieldHangarsRef.current, unitsRef.current, now, true, 'user');
         const userHeliRes = HelicopterDeploymentLogic.processHelipadTick(userHelipadsRef.current, unitsRef.current, now, true, 'user');
         const userNavalRes = NavalDeploymentLogic.processNavalPortTick(userPortShipsRef.current, unitsRef.current, now, 'user');
         const userArmoryRes = ArmoryDeploymentLogic.processArmoryTick(userArmoryRef.current, unitsRef.current, now, 'user');

         const processUserQueues = (buildings: any[]) => {
            let spawned: UnitState[] = [];
            const nextBuildings = buildings.map(b => {
               if (!b.trainingQueue || b.trainingQueue.length === 0) return b;
               const q = [...b.trainingQueue];
               const currentTask = { ...q[0] };
               currentTask.progress += (dt * 1000); 

               if (currentTask.progress >= currentTask.totalTime) {
                  const stats = getUnitStats(currentTask.type);
                  const isInfantry = currentTask.type === 'pasukan_infanteri';
                  const amount = isInfantry ? 10000 : 1;
                  const spawnPos = { x: b.pos.x + 100, y: b.pos.y };
                  const newUnit: UnitState = {
                     id: `manual_${currentTask.type}_${now}_${Math.random()}`,
                     type: currentTask.type,
                     side: 'user',
                     pos: spawnPos,
                     health: stats.maxHealth,
                     rotation: 0,
                     influence: 100,
                     path: b.rallyPoint ? [b.rallyPoint] : []
                  };
                  spawned.push(newUnit);
                  setCumulativeDeployment(prev => ({
                     ...prev,
                     [currentTask.type]: (prev[currentTask.type] || 0) + amount
                  }));
                  q.shift();
               } else {
                  q[0] = currentTask;
               }
               return { ...b, trainingQueue: q };
            });
            return { nextBuildings, spawned };
         };

         const barakQ = processUserQueues(userBarracksRef.current);
         const tankQ = processUserQueues(userTankHangarsRef.current);
         const airQ = processUserQueues(userAirfieldHangarsRef.current);
         const heliQ = processUserQueues(userHelipadsRef.current);
         const armoryQ = processUserQueues(userArmoryRef.current);

         const userManualSpawned = [
            ...barakQ.spawned, ...tankQ.spawned, ...airQ.spawned, 
            ...heliQ.spawned, ...armoryQ.spawned
         ];

         // 3. Post-Combat (Landing/Recovery)
         const postCombatRes = AircraftDeploymentLogic.processPostCombatTick(unitsRef.current, airfieldResult.nextHangars, now, 'enemy');
         const userPostCombatRes = AircraftDeploymentLogic.processPostCombatTick(unitsRef.current, userAirfieldRes.nextHangars, now, 'user');

         // 4. Consolidation & State Updates
         const newSpawned = [
            ...infRes.newSpawned,
            ...tankRes.newSpawned,
            ...airfieldResult.newSpawned,
            ...heliRes.newSpawned,
            ...navalRes.newSpawned,
            ...armoryRes.newSpawned,
            // User-side spawned (ONLY IF AUTHORIZED)
            ...(isBarracksSelected ? userInfRes.newSpawned : []),
            ...(isTankSelected ? userTankRes.newSpawned : []),
            ...(isAirfieldSelected ? userAirfieldRes.newSpawned : []),
            ...(isHeliSelected ? userHeliRes.newSpawned : []),
            ...(isNavalSelected ? userNavalRes.newSpawned : []),
            ...(isArmorySelected ? userArmoryRes.newSpawned : []),
            ...userManualSpawned
         ];

         let finalUnits = result.units;
         if (newSpawned.length > 0 || postCombatRes.nextUnits.length !== unitsRef.current.length || userPostCombatRes.nextUnits.length !== unitsRef.current.length) {
            // Merge all units, prioritizing updated individual units from physics/spawn
            const mergedUnits = [
               ...postCombatRes.nextUnits.filter(u => u.side === 'enemy' && !newSpawned.some(ns => ns.id === u.id)),
               ...userPostCombatRes.nextUnits.filter(u => u.side === 'user' && !newSpawned.some(ns => ns.id === u.id)),
               ...newSpawned,
               // Keep non-aircraft units that weren't in postCombatRes
               ...result.units.filter(u => !u.isAirType && !newSpawned.some(ns => ns.id === u.id))
            ];
            finalUnits = mergedUnits;
         }

         // Enforce continuous movement / geofencing
         const enforcedUnits = AircraftDeploymentLogic.enforceAirborneMovement(finalUnits);

         // Batch State Updates - These are now reliable because the interval doesn't reset
         setUnits(enforcedUnits);
         setBarracks(infRes.nextBarracks);
         setTankHangars(tankRes.nextHangars);
         setAirfieldHangars(postCombatRes.nextHangars);
         setHelipads(heliRes.nextHelipads);
         setPortShips(navalRes.nextPortShips);
         setArmory(armoryRes.nextArmories);

         // 5. User-side state updates (Combine Queue + Auto Logic)
         setUserBarracks(barakQ.nextBuildings);
         setUserTankHangars(tankQ.nextBuildings);
         setUserAirfieldHangars(userPostCombatRes.nextHangars.map(h => {
            const queueMatch = airQ.nextBuildings.find(q => q.id === h.id);
            return queueMatch ? { ...h, trainingQueue: queueMatch.trainingQueue } : h;
         }));
         setUserHelipads(heliQ.nextBuildings);
         setUserPortShips(userNavalRes.nextPortShips);
         setUserArmory(armoryQ.nextBuildings);

         if (result.vfx.length > 0) {
            setCombatVfx(v => [...v.filter(fx => Date.now() - fx.timestamp < 1000), ...result.vfx]);
         }
      }, 100); // 10 ticks per second is enough for strategic UI updates

      return () => clearInterval(interval);
   }, [phase]);

   return (
      <div
         className="absolute inset-0 bg-black z-[110] flex flex-col animate-in fade-in duration-500 overflow-hidden select-none"
         onContextMenu={(e) => e.preventDefault()}
      >

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
               <div className={`px-4 py-1.5 rounded-full border flex items-center gap-2 ${phase === "deployment" ? "border-amber-500/30 bg-amber-500/5 text-amber-500" : "border-red-500/30 bg-red-500/5 text-red-500"
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
               <DeploymentEngine
                  availableUnits={missionData.selection}
                  deployedUnits={units}
                  selectedType={selectedUnitType}
                  onSelect={setSelectedUnitType}
                  currentPoints={currentPoints}
                  maxPoints={maxPoints}
                  cumulativeDeployment={cumulativeDeployment}
                  selectedBuildingId={selectedBuildingId}
                  onAddUnitToQueue={handleAddItemToQueue}
               />

               <div className="flex-1 p-4 bg-black flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="w-full h-full relative">
                     <Gameplay
                        units={units}
                        combatVfx={combatVfx}
                        onUnitSelect={setSelectedUnitId}
                        drawMapBackground={activeMapRenderer}
                        hasSea={hasSea}
                        targetArmada={targetArmada}
                        barracksState={barracks}
                        tankHangarsState={tankHangars}
                        airfieldHangarsState={airfieldHangars}
                        helipadsState={helipads}
                        portShipsState={portShips}
                        armoryState={armory}
                        userBarracksState={userBarracks}
                        userTankHangarsState={userTankHangars}
                        userAirfieldHangarsState={userAirfieldHangars}
                        userHelipadsState={userHelipads}
                        userPortShipsState={userPortShips}
                        userArmoryState={userArmory}
                        barakCount={targetArmada?.barak || 0}
                        phase={phase}
                        selectedUnitIds={selectedUnitIds}
                        activeWaypoints={activeWaypoints}
                        onMapClick={(x, y, isRightClick) => {
                           if (phase === "deployment" || phase === "combat") {
                              const worldX = x;
                              const worldY = y;
                              const clickRadius = 500; // detect radius

                              if (isRightClick) {
                                 // RALLY POINT LOGIC
                                 if (selectedBuildingId) {
                                    const updateRally = (prev: any[]) => prev.map(b => 
                                       b.id === selectedBuildingId ? { ...b, rallyPoint: { x, y } } : b
                                    );
                                    setUserBarracks(updateRally);
                                    setUserTankHangars(updateRally);
                                    setUserAirfieldHangars(updateRally);
                                    setUserHelipads(updateRally);
                                    setUserArmory(updateRally);
                                 } else {
                                    handleRemoveUnit(x, y);
                                 }
                              } else {
                                 // SELECTION & DEPLOYMENT LOGIC (Radius increased for better hitbox matching)
                                 const allUserBuildings = [
                                    ...userBarracks, ...userTankHangars, ...userAirfieldHangars, 
                                    ...userHelipads, ...userArmory
                                 ];
                                 
                                 let clickedBuildingId: string | null = null;
                                 
                                 // Check positional buildings
                                 // Check positional buildings with high-precision hitboxes
                                 const foundPosBuilding = allUserBuildings.find(b => {
                                    const dx = b.pos.x - worldX;
                                    const dy = b.pos.y - worldY;

                                    if (b.id.includes('air_hangar')) {
                                       // Specialized AABB for Runway (5000x250) + Hangar (500x400)
                                       const runwayLen = 5000; const hangarW = 500; const hangarH = 400; const runwayH = 250;
                                       const hangarLeft = b.pos.x - hangarW / 2;
                                       const runwayCenterX = hangarLeft - runwayLen / 2;
                                       const inHangar = Math.abs(dx) <= hangarW / 2 && Math.abs(dy) <= hangarH / 2;
                                       const inRunway = Math.abs(worldX - runwayCenterX) <= runwayLen / 2 && Math.abs(dy) <= runwayH / 2;
                                       return inHangar || inRunway;
                                    }

                                    if (b.id.includes('barack')) {
                                       // Barracks: 400 x 200
                                       return Math.abs(dx) <= 200 && Math.abs(dy) <= 100;
                                    }

                                    if (b.id.includes('hangar_')) {
                                       // Hangar Tank/APC/Tactical: 700 x 450
                                       return Math.abs(dx) <= 350 && Math.abs(dy) <= 225;
                                    }

                                    if (b.id.includes('armory')) {
                                       // Armory: 800 x 500
                                       return Math.abs(dx) <= 400 && Math.abs(dy) <= 250;
                                    }

                                    if (b.id.includes('helipad')) {
                                       // Helipad: Radius 150 (Circular)
                                       return Math.sqrt(dx * dx + dy * dy) <= 150;
                                    }
                                    
                                    // Default fallback
                                    return Math.sqrt(dx*dx + dy*dy) < 500;
                                 });
                                 
                                 if (foundPosBuilding) {
                                    clickedBuildingId = foundPosBuilding.id;
                                 } else {
                                    // Check special harbor zone (matches CanvasMapWar mirrored harbor)
                                    if (worldX > -10000 && worldX < -6000 && worldY > -6500 && worldY < -5500) {
                                       clickedBuildingId = "user_harbor";
                                    }
                                 }

                                 if (clickedBuildingId) {
                                    if (selectedBuildingId === clickedBuildingId) {
                                       // TOGGLE OFF: If already selected, deselect it
                                       setSelectedBuildingId(null);
                                       setSelectedUnitType(null);
                                    } else {
                                       // SELECT: Highlighting red and auto-selecting unit type
                                       setSelectedBuildingId(clickedBuildingId);
                                       
                                       // Auto-select primary unit type for the building to make it feel "active"
                                       if (clickedBuildingId.includes("barack")) {
                                          setSelectedUnitType("pasukan_infanteri");
                                       } else if (clickedBuildingId.includes("tank_hangar")) {
                                          setSelectedUnitType("tank_tempur_utama");
                                       } else if (clickedBuildingId.includes("armory")) {
                                          setSelectedUnitType("artileri_berat");
                                       } else if (clickedBuildingId.includes("air_hangar")) {
                                          // Find the specific type for this hangar
                                          const h = userAirfieldHangars.find(h => h.id === clickedBuildingId);
                                          if (h) setSelectedUnitType(h.type);
                                       } else if (clickedBuildingId.includes("helipad")) {
                                          setSelectedUnitType("helikopter_serang");
                                       } else if (clickedBuildingId === "user_harbor") {
                                          setSelectedUnitType("kapal_induk");
                                       }
                                    }
                                    
                                    setSelectedUnitIds([]); 
                                    return;
                                 }

                                 setSelectedBuildingId(null);

                                 if (selectedUnitIds.length > 0) {
                                    handleTacticalMoveOrder(x, y);
                                 } else {
                                    handleManualDeployment(selectedUnitType, x, y);
                                 }
                              }
                           }
                        }}
                        selectedBuildingId={selectedBuildingId}
                     />
                  </div>
               </div>

               {(phase === "deployment" || phase === "combat") && (
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
                        {[{ label: "Matra Darat", icon: Truck, color: "text-amber-500", key: "darat" }, { label: "Matra Laut", icon: Anchor, color: "text-blue-400", key: "laut" }, { label: "Matra Udara", icon: Plane, color: "text-cyan-400", key: "udara" }].map(matra => {
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

         {/* Block Deployment Modal */}
      </div>
   );
}
