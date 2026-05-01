"use client"
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Sword, Shield, Target, ArrowLeft, Bomb, Zap, Loader2, Trophy, Skull, Plane, Ship, Truck, Users, Rocket, ShieldAlert, Car, Anchor, RadioTower, Activity, Satellite, Play, Pause, Clock, Calendar, Heart, Users as UsersIcon, Coins, RotateCcw, LogOut } from 'lucide-react';
import { countries } from "@/app/database/data/negara/index";
import { militaryAidStorage } from "@/app/game/components/modals/4_bantuan_dan_kerjasama/1_beri_tentara/logic/militaryAidStorage";
import { hitungAtrisiUnit, analisisStrategi, getUnitMatchupMultiplier, getDynamicNarratives, getTerrainData } from "./logic/EngineJembatan";
import * as MilPower from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/3_armada_militer/kekuatanmiliter";
import { SHINTO_ALUTSISTA_QUALITY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/11_shinto/1_plus/plus";
import { NASIONALISME_MILITARY_DAMAGE_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/7_nasionalisme/1_plus/plus";
import { useGameState } from "@/app/game/hooks/useGameState";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { formatGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

import { activeWarStorage } from "./logic/activeWarStorage";

// --- Sub-component: StatusBadge (Replika dari GameNavbar) ---
interface StatusBadgeProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  delta?: number;
  deltaColor?: string;
  suffix?: string;
}

function StatusBadge({ icon, label, value, delta, deltaColor, suffix }: StatusBadgeProps) {
  return (
    <div className="flex items-center gap-2 bg-[#d4c19c]/40 px-3 py-1.5 rounded-lg border border-amber-800/10 relative group overflow-hidden transition-all min-w-[140px] shrink-0 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      {icon}
      <div className="text-left leading-tight relative z-10">
        <p className="text-[10px] text-amber-900/60 font-bold uppercase">{label}</p>
        <div className="flex items-center gap-1.5">
          <p className="text-xs font-black text-amber-950 italic tracking-wide">
            {value}
            {suffix && <span className="ml-1 text-[10px] opacity-70 not-italic uppercase font-bold">{suffix}</span>}
          </p>
          {delta !== undefined && delta !== 0 && (
            <span className={`text-[9px] font-black px-1 rounded-sm ${deltaColor ? deltaColor : (delta > 0 ? 'text-emerald-800 bg-emerald-500/10' : 'text-rose-800 bg-rose-500/10')}`}>
              {delta > 0 ? '+' : ''}{Math.round(delta).toLocaleString('id-ID')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

interface BattlePageProps {
  invasion: any;
  onBack: () => void;
}

export const BattlePage: React.FC<BattlePageProps> = ({ invasion, onBack }) => {
  const { happiness, budget, budgetDelta, stability, population, populationDelta, userCountry } = useGameState(() => {});
  
  // INITIALIZE FROM STORAGE IF EXISTS
  const savedWar = activeWarStorage.getState();
  const isCorrectTarget = savedWar?.target === invasion.target;

  const [phase, setPhase] = useState<'intro' | 'fighting' | 'result'>(isCorrectTarget ? (savedWar?.phase ?? 'intro') : 'intro');
  const [playerLogs, setPlayerLogs] = useState<string[]>(isCorrectTarget ? (savedWar?.playerLogs ?? []) : []);
  const [enemyLogs, setEnemyLogs] = useState<string[]>(isCorrectTarget ? (savedWar?.enemyLogs ?? []) : []);
  const [initialPlayerPower, setInitialPlayerPower] = useState<number>(isCorrectTarget ? (savedWar?.initialPlayerPower ?? 0) : 0);
  const [initialEnemyPower, setInitialEnemyPower] = useState<number>(isCorrectTarget ? (savedWar?.initialEnemyPower ?? 0) : 0);
  const [playerStrength, setPlayerStrength] = useState(100);
  const [enemyStrength, setEnemyStrength] = useState(100);
  const [isCeasefire, setIsCeasefire] = useState(isCorrectTarget ? (savedWar?.isCeasefire ?? false) : false);

  // Synchronized Game Time State
  const [timeState, setTimeState] = useState(timeStorage.getState());

  useEffect(() => {
    const unsubscribe = timeStorage.subscribe((date, paused, speed) => {
      setTimeState({ gameDate: date, isPaused: paused, speed: speed });
    });
    return () => unsubscribe();
  }, []);

  // Get target country data
  const targetCountry = useMemo(() => {
    return countries.find(c => c.name_id === invasion.target);
  }, [invasion.target]);

  // Local state for units to track losses
  const [playerUnits, setPlayerUnits] = useState<any[]>(
    isCorrectTarget ? (savedWar?.playerUnits ?? []) : (invasion?.units ? invasion.units.map((u: any) => ({ ...u })) : [])
  );
  const [enemyUnits, setEnemyUnits] = useState<any[]>(isCorrectTarget ? (savedWar?.enemyUnits ?? []) : []);
  const [ceasefireOffer, setCeasefireOffer] = useState<{ active: boolean; threshold: number } | null>(null);
  const [hasOfferedAt, setHasOfferedAt] = useState<number[]>(isCorrectTarget ? (savedWar?.hasOfferedAt ?? []) : []);

  // PERSISTENCE EFFECT: Save state on every change
  useEffect(() => {
    activeWarStorage.saveState({
        target: invasion.target,
        phase,
        playerUnits,
        enemyUnits,
        initialPlayerPower,
        initialEnemyPower,
        isCeasefire,
        playerLogs,
        enemyLogs,
        hasOfferedAt
    });
  }, [phase, playerUnits, enemyUnits, initialPlayerPower, initialEnemyPower, isCeasefire, playerLogs, enemyLogs, hasOfferedAt, invasion.target]);

  // Refs to avoid stale closures in the combat interval
  const playerUnitsRef = useRef(playerUnits);
  const enemyUnitsRef = useRef(enemyUnits);

  // Keep refs in sync with state
  useEffect(() => { playerUnitsRef.current = playerUnits; }, [playerUnits]);
  useEffect(() => { enemyUnitsRef.current = enemyUnits; }, [enemyUnits]);

  // Initialize enemy units from target country data (ONLY IF NOT LOADED FROM STORAGE)
  useEffect(() => {
    if (targetCountry && !isCorrectTarget) {
      const am = targetCountry.armada_militer || {};
      const units = [
        { type: 'Pasukan Infanteri', count: (am.barak || 0) * 10000, icon: Users, cat: 'darat' },
        { type: 'Main Battle Tank', count: am.darat?.tank_tempur_utama || 0, icon: Truck, cat: 'darat' },
        { type: 'APC / IFV', count: am.darat?.apc_ifv || 0, icon: Truck, cat: 'darat' },
        { type: 'Artileri Berat', count: am.darat?.artileri_berat || 0, icon: Target, cat: 'darat' },
        { type: 'MLRS Rocket', count: am.darat?.sistem_peluncur_roket || 0, icon: Rocket, cat: 'darat' },
        { type: 'Mobile SAM', count: am.darat?.pertahanan_udara_mobile || 0, icon: ShieldAlert, cat: 'darat' },
        { type: 'Kendaraan Taktis', count: am.darat?.kendaraan_taktis || 0, icon: Car, cat: 'darat' },
        { type: 'Kapal Induk Konvensional', count: am.laut?.kapal_induk || 0, icon: Anchor, cat: 'laut' },
        { type: 'Kapal Induk Nuklir', count: am.laut?.kapal_induk_nuklir || 0, icon: Anchor, cat: 'laut' },
        { type: 'Kapal Destroyer', count: am.laut?.kapal_destroyer || 0, icon: Ship, cat: 'laut' },
        { type: 'Kapal Korvet', count: am.laut?.kapal_korvet || 0, icon: Ship, cat: 'laut' },
        { type: 'Kapal Selam Nuklir', count: am.laut?.kapal_selam_nuklir || 0, icon: RadioTower, cat: 'laut' },
        { type: 'Kapal Selam Regular', count: am.laut?.kapal_selam_regular || 0, icon: RadioTower, cat: 'laut' },
        { type: 'Kapal Ranjau', count: am.laut?.kapal_ranjau || 0, icon: Anchor, cat: 'laut' },
        { type: 'Kapal Logistik', count: am.laut?.kapal_logistik || 0, icon: Ship, cat: 'laut' },
        { type: 'Jet Stealth', count: am.udara?.jet_tempur_siluman || 0, icon: Plane, cat: 'udara' },
        { type: 'Jet Interceptor', count: am.udara?.jet_tempur_interceptor || 0, icon: Plane, cat: 'udara' },
        { type: 'Pesawat Pengebom', count: am.udara?.pesawat_pengebom || 0, icon: Bomb, cat: 'udara' },
        { type: 'Heli Serang', count: am.udara?.helikopter_serang || 0, icon: Activity, cat: 'udara' },
        { type: 'Pesawat Intai', count: am.udara?.pesawat_pengintai || 0, icon: Satellite, cat: 'udara' },
        { type: 'Drone UAV', count: am.udara?.drone_intai_uav || 0, icon: Satellite, cat: 'udara' },
        { type: 'Drone Kamikaze', count: am.udara?.drone_kamikaze || 0, icon: Satellite, cat: 'udara' },
        { type: 'Pesawat Angkut', count: am.udara?.pesawat_angkut || 0, icon: Plane, cat: 'udara' }
      ];
      setEnemyUnits(units);

      // Capture Initial Powers for percentage calculation
      const pPower = invasion.units.reduce((acc: number, u: any) => acc + getUnitPowerValue(u.type, u.count), 0);
      const ePower = units.reduce((acc: number, u: any) => acc + getUnitPowerValue(u.type, u.count, targetCountry), 0);
      setInitialPlayerPower(pPower);
      setInitialEnemyPower(ePower);
    }
  }, [targetCountry, isCorrectTarget]);

  // COMBAT LOOP (FIXED: NO STALE CLOSURES + CEASEFIRE LOGIC)
  useEffect(() => {
    if (phase === 'fighting' && !timeState.isPaused && !ceasefireOffer?.active) {
      const interval = setInterval(() => {
        const currentPlayers = playerUnitsRef.current;
        const currentEnemies = enemyUnitsRef.current;

        // 0. Calculate Current Power Percentages for Ceasefire
        const ePower = currentEnemies.reduce((acc: number, u: any) => acc + getUnitPowerValue(u.type, u.count, targetCountry), 0);
        const ePercent = initialEnemyPower > 0 ? (ePower / initialEnemyPower) * 100 : 100;
        
        let offerProb = 0;
        let threshold = 0;
        if (ePercent <= 5) { threshold = 5; offerProb = 0.95; }
        else if (ePercent <= 10) { threshold = 10; offerProb = 0.85; }
        else if (ePercent <= 20) { threshold = 20; offerProb = 0.70; }

        if (threshold > 0 && !hasOfferedAt.includes(threshold)) {
          setHasOfferedAt(prev => [...prev, threshold]);
          if (Math.random() < offerProb) {
            setCeasefireOffer({ active: true, threshold });
            timeStorage.setPaused(true);
            return;
          }
        }

        // 1. Calculate Player Losses
        const nextPlayers = currentPlayers.map((pUnit: any) => {
          if (pUnit.count <= 0) return pUnit;
          const incomingFirepower = currentEnemies.reduce((acc: number, eUnit: any) => {
            const matchup = getUnitMatchupMultiplier(eUnit.type, pUnit.type);
            const basePower = getUnitPowerValue(eUnit.type, eUnit.count, targetCountry);
            return acc + (basePower * matchup);
          }, 0);
          const loss = hitungAtrisiUnit(pUnit.count, incomingFirepower, 0.4);
          return { ...pUnit, count: Math.max(0, pUnit.count - loss) };
        });

        // 2. Calculate Enemy Losses
        const nextEnemies = currentEnemies.map((eUnit: any) => {
          if (eUnit.count <= 0) return eUnit;
          const incomingFirepower = currentPlayers.reduce((acc: number, pUnit: any) => {
            const matchup = getUnitMatchupMultiplier(pUnit.type, eUnit.type);
            const basePower = getUnitPowerValue(pUnit.type, pUnit.count);
            return acc + (basePower * matchup);
          }, 0);
          const loss = hitungAtrisiUnit(eUnit.count, incomingFirepower, 0.6);
          return { ...eUnit, count: Math.max(0, eUnit.count - loss) };
        });

        // 3. Batch Update State
        setPlayerUnits(nextPlayers);
        setEnemyUnits(nextEnemies);

        // 4. Update Narratives
        const narratives = getDynamicNarratives(nextPlayers, nextEnemies, userCountry, invasion.target);
        const randomPlayerLog = narratives.player[Math.floor(Math.random() * narratives.player.length)];
        const randomEnemyLog = narratives.enemy[Math.floor(Math.random() * narratives.enemy.length)];
        
        setPlayerLogs(prev => [randomPlayerLog, ...prev].slice(0, 50));
        setEnemyLogs(prev => [randomEnemyLog, ...prev].slice(0, 50));

      }, 1000 / timeState.speed);

      return () => clearInterval(interval);
    }
  }, [phase, timeState.isPaused, timeState.speed, targetCountry, ceasefireOffer, initialEnemyPower, hasOfferedAt]);


  const getUnitPowerValue = (type: string, count: number, country?: any) => {
    let p = 1;
    const t = type.toLowerCase();
    if (t.includes('tank')) p = MilPower.TANK_POWER_PER_UNIT;
    else if (t.includes('infanteri')) p = 1;
    else if (t.includes('apc')) p = MilPower.APC_POWER_PER_UNIT;
    else if (t.includes('artileri')) p = MilPower.ARTILLERY_POWER_PER_UNIT;
    else if (t.includes('rocket')) p = MilPower.ROCKET_POWER_PER_UNIT;
    else if (t.includes('sam')) p = MilPower.SAM_POWER_PER_UNIT;
    else if (t.includes('taktis')) p = MilPower.TACTICAL_POWER_PER_UNIT;
    else if (t.includes('induk konvensional')) p = MilPower.CARRIER_POWER_PER_UNIT;
    else if (t.includes('induk nuklir')) p = MilPower.NUCLEAR_CARRIER_POWER_PER_UNIT;
    else if (t.includes('destroyer')) p = MilPower.DESTROYER_POWER_PER_UNIT;
    else if (t.includes('korvet')) p = MilPower.CORVETTE_POWER_PER_UNIT;
    else if (t.includes('selam nuklir')) p = MilPower.SUBMARINE_POWER_PER_UNIT;
    else if (t.includes('selam regular')) p = MilPower.REGULAR_SUB_POWER_PER_UNIT;
    else if (t.includes('ranjau')) p = MilPower.MINE_SHIP_POWER_PER_UNIT;
    else if (t.includes('logistik')) p = MilPower.LOGISTICS_POWER_PER_UNIT;
    else if (t.includes('stealth')) p = MilPower.STEALTH_POWER_PER_UNIT;
    else if (t.includes('interceptor')) p = MilPower.INTERCEPTOR_POWER_PER_UNIT;
    else if (t.includes('pengebom')) p = MilPower.BOMBER_POWER_PER_UNIT;
    else if (t.includes('heli')) p = MilPower.ATTACK_HELI_POWER_PER_UNIT;
    else if (t.includes('intai')) p = MilPower.RECON_POWER_PER_UNIT;
    else if (t.includes('uav')) p = MilPower.UAV_POWER_PER_UNIT;
    else if (t.includes('kamikaze')) p = MilPower.KAMIKAZE_POWER_PER_UNIT;
    else if (t.includes('angkut')) p = MilPower.TRANSPORT_POWER_PER_UNIT;
    else if (t === 'tank') p = MilPower.TANK_POWER_PER_UNIT;
    else if (t === 'pesawat') p = MilPower.INTERCEPTOR_POWER_PER_UNIT;
    else if (t === 'kapal') p = MilPower.DESTROYER_POWER_PER_UNIT;

    let multiplier = 1.0;
    if (country) {
      if (country.religion === "Shinto") multiplier *= SHINTO_ALUTSISTA_QUALITY;
      if (country.ideology === "Nasionalisme") multiplier *= (1.0 + NASIONALISME_MILITARY_DAMAGE_BONUS);
    }
    return Math.ceil(count * p * multiplier);
  };

  const playerPowerScore = useMemo(() => playerUnits.reduce((acc, u) => acc + getUnitPowerValue(u.type, u.count), 0), [playerUnits]);
  const enemyPowerScore = useMemo(() => enemyUnits.reduce((acc, u) => acc + getUnitPowerValue(u.type, u.count, targetCountry), 0), [enemyUnits, targetCountry]);
  const terrain = useMemo(() => getTerrainData(invasion.target), [invasion.target]);
  const analysis = useMemo(() => analisisStrategi(playerUnits, enemyUnits, playerPowerScore, enemyPowerScore), [playerUnits, enemyUnits, playerPowerScore, enemyPowerScore]);

  useEffect(() => {
    const pStr = initialPlayerPower > 0 ? (playerPowerScore / initialPlayerPower) * 100 : 0;
    const eStr = initialEnemyPower > 0 ? (enemyPowerScore / initialEnemyPower) * 100 : 0;
    setPlayerStrength(pStr);
    setEnemyStrength(eStr);
    if (phase === 'fighting' && (pStr <= 0.1 || eStr <= 0.1)) setPhase('result');
  }, [playerPowerScore, enemyPowerScore, initialPlayerPower, initialEnemyPower, phase]);

  return (
    <div className="fixed inset-0 z-[200] bg-zinc-950 flex flex-col overflow-hidden text-white font-sans">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533234458773-9f98355f1bb1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950" />


      <div className="relative z-10 flex-1 flex flex-col p-10 gap-10 overflow-hidden pt-8">
        <div className="flex items-center justify-between px-12">
            <div className="flex items-center gap-8">
                {/* Explicit Tactical Back Button */}
                <button
                  onClick={onBack}
                  className="p-4 bg-zinc-900/50 hover:bg-zinc-800 rounded-[20px] transition-all border border-zinc-800 hover:border-zinc-500/50 group cursor-pointer shadow-lg backdrop-blur-md"
                >
                  <ArrowLeft className="h-6 w-6 text-zinc-400 group-hover:text-white transition-colors" />
                </button>

                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-red-600/10 rounded-[24px] border-2 border-red-500/20 flex items-center justify-center shadow-lg">
                        <Sword className="h-10 w-10 text-red-500" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white">OPERASI: {invasion.target}</h1>
                        <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                              <span className="text-red-500 text-xs font-black uppercase tracking-[0.4em]">Siaga Satu</span>
                            </div>
                            <span className="text-zinc-500 text-xs font-black uppercase tracking-[0.4em]">Mandala Utama</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/50 px-8 py-4 rounded-[28px] flex flex-col items-center min-w-[140px] shadow-xl">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1 flex items-center gap-2"><Clock className="h-3 w-3" /> Waktu Lokal</span>
                    <span className="text-xl font-black text-white uppercase tracking-tight italic tabular-nums">{formatGameDate(timeState.gameDate)}</span>
                </div>
                
                {/* PLAYER-INITIATED CEASEFIRE BUTTON */}
                <button 
                  disabled={phase !== 'fighting' || isCeasefire}
                  onClick={() => {
                    if (phase !== 'fighting') return;
                    // Logic: Peluang musuh menerima gencatan senjata berdasarkan power mereka
                    // Semakin lemah musuh, semakin tinggi peluang mereka menerima
                    const ePercent = enemyStrength;
                    let acceptProb = 0.1; // 10% base
                    if (ePercent <= 5) acceptProb = 0.95;
                    else if (ePercent <= 10) acceptProb = 0.80;
                    else if (ePercent <= 20) acceptProb = 0.60;
                    else if (ePercent <= 50) acceptProb = 0.30;

                    if (Math.random() < acceptProb) {
                      setPhase('result');
                      setIsCeasefire(true);
                    } else {
                      // Notification rejection logic
                      alert("MUSUH MENOLAK GENCATAN SENJATA! Mereka terus berjuang sampai titik darah penghabisan.");
                    }
                  }}
                  className={`px-8 py-4 rounded-[28px] flex flex-col items-center min-w-[120px] shadow-xl transition-all active:scale-95 border-2 bg-blue-500/10 border-blue-500/30 text-blue-500 hover:bg-blue-500/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <span className="text-[10px] font-black uppercase tracking-widest mb-1">DIPLOMASI</span>
                  <RadioTower className="h-6 w-6" />
                </button>

                <button 
                  onClick={() => timeStorage.setPaused(!timeState.isPaused)}
                  className={`px-8 py-4 rounded-[28px] flex flex-col items-center min-w-[100px] shadow-xl transition-all active:scale-95 border-2 ${timeState.isPaused ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500' : 'bg-amber-500/10 border-amber-500/30 text-amber-500'}`}
                >
                  <span className="text-[10px] font-black uppercase tracking-widest mb-1">{timeState.isPaused ? 'RESUME' : 'PAUSED'}</span>
                  {timeState.isPaused ? <Play className="h-6 w-6 fill-current" /> : <Pause className="h-6 w-6 fill-current" />}
                </button>
                <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/50 px-8 py-4 rounded-[28px] flex flex-col items-center min-w-[140px] shadow-xl">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Medan Tempur</span>
                    <span className="text-xl font-black text-white uppercase tracking-tight italic">{terrain.type}</span>
                </div>
                <div className="bg-red-500/10 backdrop-blur-md border border-red-500/20 px-8 py-4 rounded-[28px] flex flex-col items-center min-w-[140px] shadow-xl">
                    <span className="text-[10px] font-black text-red-500/50 uppercase tracking-widest mb-1">Status Tempur</span>
                    <span className="text-xl font-black text-red-500 uppercase tracking-tight">{phase === 'fighting' ? 'KONTAK SENJATA' : phase === 'intro' ? 'DEPLOYMENT' : 'SELESAI'}</span>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-8 px-12">
          <div className="flex-1 space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-emerald-500 font-black text-xl italic uppercase tracking-tighter">Pasukan Indonesia</span>
              <div className="flex items-baseline gap-3">
                <span className="text-[10px] font-black text-emerald-500/50 uppercase tracking-widest">Power: {Math.ceil(playerPowerScore).toLocaleString()}</span>
                <span className="text-4xl font-black tabular-nums">{Math.ceil(playerStrength)}%</span>
              </div>
            </div>
            <div className="h-4 bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden p-0.5">
              <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]" style={{ width: `${playerStrength}%` }} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2"><div className="w-16 h-16 bg-zinc-900 border-2 border-zinc-800 rounded-full flex items-center justify-center"><span className="text-2xl font-black text-zinc-600">VS</span></div></div>
          <div className="flex-1 space-y-3 text-right">
            <div className="flex justify-between items-end flex-row-reverse">
              <span className="text-red-500 font-black text-xl italic uppercase tracking-tighter">Pasukan {invasion.target}</span>
              <div className="flex items-baseline gap-3 flex-row-reverse">
                <span className="text-[10px] font-black text-red-500/50 uppercase tracking-widest">Power: {Math.ceil(enemyPowerScore).toLocaleString()}</span>
                <span className="text-4xl font-black tabular-nums">{Math.ceil(enemyStrength)}%</span>
              </div>
            </div>
            <div className="h-4 bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden p-0.5 flex justify-end">
              <div className="h-full bg-gradient-to-l from-red-600 to-red-400 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]" style={{ width: `${enemyStrength}%` }} />
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-12 gap-8 overflow-hidden">
          <div className="col-span-3 space-y-4 overflow-y-auto pr-4">
            <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-6">Armada Dikerahkan</h3>
            {playerUnits.map((unit: any, i: number) => (
              <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center gap-4 group hover:border-emerald-500/30 transition-all">
                <div className="w-10 h-10 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-center"><Zap className="h-4 w-4 text-emerald-500" /></div>
                <div>
                  <p className="text-xs font-black text-white uppercase tracking-tight">{unit.name || unit.type}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-[10px] font-bold text-zinc-500">{Math.ceil(unit.count).toLocaleString()} UNIT</p>
                    <span className="text-[10px] text-zinc-700">•</span>
                    <p className="text-[10px] font-black text-emerald-500/70">{getUnitPowerValue(unit.type, unit.count).toLocaleString()} POWER</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-6 bg-zinc-900/20 border border-zinc-800/50 rounded-[40px] relative overflow-hidden flex flex-col p-8">
            {phase === 'intro' ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
                <div className="w-32 h-32 bg-red-500/10 rounded-full border-2 border-red-500/20 flex items-center justify-center animate-pulse"><Target className="h-16 w-16 text-red-500" /></div>
                <div className="max-w-xs space-y-4">
                  <h2 className="text-2xl font-black uppercase tracking-tighter italic">Kesiapan Tempur 100%</h2>
                  <p className="text-zinc-500 text-sm font-medium">Seluruh unit telah mencapai garis depan. Menunggu instruksi untuk melakukan serangan penuh.</p>
                  <button onClick={() => setPhase('fighting')} className="w-full py-5 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all active:scale-95 cursor-pointer">KONTAK SENJATA!</button>
                </div>
              </div>
            ) : phase === 'fighting' ? (
              <div className="flex-1 flex flex-col">
                <div className="flex-1 relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center"><div className="w-96 h-96 bg-red-600/5 rounded-full animate-ping" /><div className="w-64 h-64 bg-red-600/10 rounded-full absolute animate-pulse" /></div>
                  <Bomb className="h-24 w-24 text-red-500 animate-bounce relative z-10" />
                </div>
                <div className="grid grid-cols-2 gap-6 h-[220px]">
                  {/* Player Logs */}
                  <div className="bg-zinc-950/60 p-5 rounded-3xl border border-zinc-800/50 flex flex-col overflow-hidden">
                    <p className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-4 px-1 border-b border-emerald-500/10 pb-2">Laporan Operasi Kita</p>
                    <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                      {playerLogs.map((log, i) => (
                        <div key={i} className={`text-xs font-bold uppercase tracking-wide flex items-start gap-3 leading-relaxed transition-colors ${i === 0 ? 'text-emerald-300' : 'text-zinc-300/70'}`}>
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${i === 0 ? 'bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-zinc-700'}`} />
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enemy Logs */}
                  <div className="bg-zinc-950/60 p-5 rounded-3xl border border-zinc-800/50 flex flex-col overflow-hidden">
                    <p className="text-[11px] font-black text-red-400 uppercase tracking-[0.2em] mb-4 px-1 text-right border-b border-red-500/10 pb-2">Pergerakan Musuh</p>
                    <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar text-right">
                      {enemyLogs.map((log, i) => (
                        <div key={i} className={`text-xs font-bold uppercase tracking-wide flex items-start flex-row-reverse gap-3 leading-relaxed transition-colors ${i === 0 ? 'text-red-300' : 'text-zinc-300/70'}`}>
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${i === 0 ? 'bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-zinc-700'}`} />
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
                <div className={`w-32 h-32 rounded-full border-2 flex items-center justify-center ${isCeasefire ? 'bg-amber-500/10 border-amber-500/20' : (playerStrength > 0 ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20')}`}>
                  {isCeasefire ? <RadioTower className="h-16 w-16 text-amber-500" /> : (playerStrength > 0 ? <Trophy className="h-16 w-16 text-emerald-500" /> : <Skull className="h-16 w-16 text-red-500" />)}
                </div>
                <div className="max-w-md space-y-4">
                  <h2 className="text-4xl font-black uppercase tracking-tighter italic">
                    {isCeasefire ? 'Gencatan Senjata!' : (playerStrength > 0 ? 'Kemenangan!' : 'Kekalahan!')}
                  </h2>
                  <p className="text-zinc-500 text-sm font-medium">
                    {isCeasefire 
                      ? `Pertempuran dihentikan sementara melalui jalur diplomatik. Musuh telah menarik mundur sebagian pasukan dari garis depan ${invasion.target}.`
                      : (playerStrength > 0 
                          ? `Operasi di ${invasion.target} berhasil diselesaikan. Wilayah musuh dalam kendali penuh.` 
                          : `Pasukan kita terpaksa mundur dari ${invasion.target} setelah mengalami kerugian besar.`
                        )
                    }
                  </p>
                  
                  {isCeasefire ? (
                    <div className="space-y-3 pt-4">
                      <button 
                        onClick={() => {
                          setIsCeasefire(false);
                          setPhase('fighting');
                          timeStorage.setPaused(false);
                        }} 
                        className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all cursor-pointer active:scale-95"
                      >
                        LANJUTKAN SERANGAN
                      </button>
                      <button onClick={onBack} className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 font-black uppercase tracking-[0.2em] rounded-2xl transition-all cursor-pointer">KEMBALI KE MARKAS</button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 mt-4">
                        <p className="text-[10px] font-black text-zinc-500 uppercase mb-1">Hasil Akhir Medan</p>
                        <p className="text-white text-xs font-bold uppercase">{terrain.info.description}</p>
                      </div>
                      <button 
                        onClick={() => {
                          if (!isCeasefire && phase === 'result') {
                            if (typeof window !== 'undefined') {
                              localStorage.removeItem('active_invasions');
                              window.dispatchEvent(new CustomEvent('CLEAR_INVASIONS'));
                              window.dispatchEvent(new CustomEvent('REMOVE_INVASION', { 
                                  detail: { target: invasion.target } 
                              }));
                            }
                          }
                          onBack();
                        }} 
                        className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all cursor-pointer"
                      >
                        KEMBALI KE MARKAS
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="col-span-3 space-y-4 overflow-y-auto pl-4 border-l border-zinc-800/30">
            <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-6 text-right">Armada Musuh</h3>
            {enemyUnits.map((unit, i) => (
              <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center justify-end gap-4 group hover:border-red-500/30 transition-all">
                <div className="text-right">
                  <p className="text-xs font-black text-white uppercase tracking-tight">{unit.name || unit.type}</p>
                  <div className="flex items-center justify-end gap-2 mt-0.5">
                    <p className="text-[10px] font-black text-rose-500/70">{getUnitPowerValue(unit.type, unit.count).toLocaleString()} POWER</p>
                    <span className="text-[10px] text-zinc-700">•</span>
                    <p className="text-[10px] font-bold text-zinc-500">{Math.ceil(unit.count).toLocaleString()} UNIT</p>
                  </div>
                </div>
                <div className="w-10 h-10 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-center"><unit.icon className="h-4 w-4 text-red-500" /></div>
              </div>
            ))}
            <div className="mt-8 p-6 bg-red-500/5 border border-red-500/10 rounded-3xl">
              <h4 className="text-red-500 font-black text-xs uppercase tracking-widest mb-3">Analisis Strategis (Python)</h4>
              <p className="text-white text-[11px] font-black uppercase mb-2">{analysis.rekomendasi}</p>
              <p className="text-zinc-400 text-[10px] leading-relaxed font-bold italic">Probabilitas Kemenangan: {analysis.probabilitas}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* CEASEFIRE OFFER NOTIFICATION OVERLAY */}
      {ceasefireOffer?.active && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md" />
          <div className="relative w-full max-w-lg bg-zinc-900 border-2 border-amber-500/50 rounded-[40px] p-10 text-center shadow-[0_0_100px_rgba(245,158,11,0.2)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse" />
            
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-amber-500/10 rounded-full border border-amber-500/30 flex items-center justify-center">
                <RadioTower className="h-10 w-10 text-amber-500 animate-pulse" />
              </div>
            </div>

            <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic mb-4">Permintaan Gencatan Senjata</h2>
            <p className="text-zinc-400 text-sm font-bold uppercase leading-relaxed mb-8">
              Pemerintah <span className="text-white">{invasion.target}</span> mengirimkan utusan diplomatik. Mereka terdesak (Sisa Kekuatan: {ceasefireOffer?.threshold}%) dan memohon penghentian tembak-menembak segera.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => {
                  setPhase('result');
                  setIsCeasefire(true);
                  setCeasefireOffer(null);
                }}
                className="py-5 bg-amber-600 hover:bg-amber-500 text-white font-black uppercase tracking-widest rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all active:scale-95 cursor-pointer"
              >
                TERIMA (DAMAI)
              </button>
              <button 
                onClick={() => {
                  setCeasefireOffer(null);
                  timeStorage.setPaused(false);
                }}
                className="py-5 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white font-black uppercase tracking-widest rounded-2xl transition-all active:scale-95 cursor-pointer"
              >
                TOLAK (LANJUTKAN)
              </button>
            </div>
            
            <p className="mt-6 text-[10px] font-black text-zinc-600 uppercase italic tracking-widest">Keputusan ini akan menentukan nasib ribuan prajurit di medan laga.</p>
          </div>
        </div>
      )}
    </div>
  );
};

