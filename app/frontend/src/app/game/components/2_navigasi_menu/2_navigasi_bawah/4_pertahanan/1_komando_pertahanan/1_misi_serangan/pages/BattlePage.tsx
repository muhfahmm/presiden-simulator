"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { Sword, Shield, Target, ArrowLeft, Bomb, Zap, Loader2, Trophy, Skull, Plane, Ship, Truck, Users, Rocket, ShieldAlert, Car, Anchor, RadioTower, Activity, Satellite } from 'lucide-react';
import { countries } from "@/app/database/data/negara/benua/index";
import { militaryAidStorage } from "@/app/game/components/modals/4_bantuan_dan_kerjasama/1_beri_tentara/logic/militaryAidStorage";
import { hitungAtrisiUnit, analisisStrategi, getUnitMatchupMultiplier, getDynamicNarratives } from "./logic/EngineJembatan";
import * as MilPower from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/3_armada_militer/kekuatanmiliter";
import { SHINTO_ALUTSISTA_QUALITY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/11_shinto/1_plus/plus";
import { NASIONALISME_MILITARY_DAMAGE_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/7_nasionalisme/1_plus/plus";

interface BattlePageProps {
  invasion: any;
  onBack: () => void;
}

export const BattlePage: React.FC<BattlePageProps> = ({ invasion, onBack }) => {
  const [phase, setPhase] = useState<'deploying' | 'fighting' | 'result'>('deploying');
  const [battleLog, setBattleLog] = useState<string[]>([]);
  const [playerStrength, setPlayerStrength] = useState(100);
  const [enemyStrength, setEnemyStrength] = useState(100);

  // Get target country data
  const targetCountry = useMemo(() => {
    return countries.find(c => c.name_id === invasion.target);
  }, [invasion.target]);

  // Local state for units to track losses
  const [playerUnits, setPlayerUnits] = useState<any[]>(invasion?.units ? invasion.units.map((u: any) => ({ ...u })) : []);
  const [enemyUnits, setEnemyUnits] = useState<any[]>([]);

  // Initialize enemy units from target country data
  useEffect(() => {
    if (targetCountry && targetCountry.armada_militer) {
      const am = targetCountry.armada_militer;
      const aidData = militaryAidStorage.getAid();
      const targetAid = targetCountry ? (aidData[targetCountry.name_en?.toLowerCase()] || aidData[targetCountry.name_id?.toLowerCase()] || {}) : {};

      const units = [
        // DARAT
        { type: 'Pasukan Infanteri', count: ((am.barak || 0) + (targetAid.barak || 0)) * 10000, icon: Users, cat: 'darat' },
        { type: 'Main Battle Tank', count: (am.darat?.tank_tempur_utama || 0) + (targetAid.tank_tempur_utama || 0), icon: Truck, cat: 'darat' },
        { type: 'APC / IFV', count: (am.darat?.apc_ifv || 0) + (targetAid.apc_ifv || 0), icon: Truck, cat: 'darat' },
        { type: 'Artileri Berat', count: (am.darat?.artileri_berat || 0) + (targetAid.artileri_berat || 0), icon: Target, cat: 'darat' },
        { type: 'MLRS Rocket', count: (am.darat?.sistem_peluncur_roket || 0) + (targetAid.sistem_peluncur_roket || 0), icon: Rocket, cat: 'darat' },
        { type: 'Mobile SAM', count: (am.darat?.pertahanan_udara_mobile || 0) + (targetAid.pertahanan_udara_mobile || 0), icon: ShieldAlert, cat: 'darat' },
        { type: 'Kendaraan Taktis', count: (am.darat?.kendaraan_taktis || 0) + (targetAid.kendaraan_taktis || 0), icon: Car, cat: 'darat' },
        
        // LAUT
        { type: 'Kapal Induk Konvensional', count: (am.laut?.kapal_induk || 0) + (targetAid.kapal_induk || 0), icon: Anchor, cat: 'laut' },
        { type: 'Kapal Induk Nuklir', count: (am.laut?.kapal_induk_nuklir || 0) + (targetAid.kapal_induk_nuklir || 0), icon: Anchor, cat: 'laut' },
        { type: 'Kapal Destroyer', count: (am.laut?.kapal_destroyer || 0) + (targetAid.kapal_destroyer || 0), icon: Ship, cat: 'laut' },
        { type: 'Kapal Korvet', count: (am.laut?.kapal_korvet || 0) + (targetAid.kapal_korvet || 0), icon: Ship, cat: 'laut' },
        { type: 'Kapal Selam Nuklir', count: (am.laut?.kapal_selam_nuklir || 0) + (targetAid.kapal_selam_nuklir || 0), icon: RadioTower, cat: 'laut' },
        { type: 'Kapal Selam Regular', count: (am.laut?.kapal_selam_regular || 0) + (targetAid.kapal_selam_regular || 0), icon: RadioTower, cat: 'laut' },
        { type: 'Kapal Ranjau', count: (am.laut?.kapal_ranjau || 0) + (targetAid.kapal_ranjau || 0), icon: Anchor, cat: 'laut' },
        { type: 'Kapal Logistik', count: (am.laut?.kapal_logistik || 0) + (targetAid.kapal_logistik || 0), icon: Ship, cat: 'laut' },
        
        // UDARA
        { type: 'Jet Stealth', count: (am.udara?.jet_tempur_siluman || 0) + (targetAid.jet_tempur_siluman || 0), icon: Plane, cat: 'udara' },
        { type: 'Jet Interceptor', count: (am.udara?.jet_tempur_interceptor || 0) + (targetAid.jet_tempur_interceptor || 0), icon: Plane, cat: 'udara' },
        { type: 'Pesawat Pengebom', count: (am.udara?.pesawat_pengebom || 0) + (targetAid.pesawat_pengebom || 0), icon: Bomb, cat: 'udara' },
        { type: 'Heli Serang', count: (am.udara?.helikopter_serang || 0) + (targetAid.helikopter_serang || 0), icon: Activity, cat: 'udara' },
        { type: 'Pesawat Intai', count: (am.udara?.pesawat_pengintai || 0) + (targetAid.pesawat_pengintai || 0), icon: Satellite, cat: 'udara' },
        { type: 'Drone UAV', count: (am.udara?.drone_intai_uav || 0) + (targetAid.drone_intai_uav || 0), icon: Satellite, cat: 'udara' },
        { type: 'Drone Kamikaze', count: (am.udara?.drone_kamikaze || 0) + (targetAid.drone_kamikaze || 0), icon: Satellite, cat: 'udara' },
        { type: 'Pesawat Angkut', count: (am.udara?.pesawat_angkut || 0) + (targetAid.pesawat_angkut || 0), icon: Plane, cat: 'udara' },
      ];
      setEnemyUnits(units);
    }
  }, [targetCountry]);

  useEffect(() => {
    if (phase === 'fighting') {
      const interval = setInterval(() => {
        // Decrease unit counts using polyglot logic (C++ Bridge + Matchup Matrix)
        setPlayerUnits((prevUnits: any[]) => prevUnits.map((u: any) => {
            // Pilih satu unit musuh secara acak untuk disimulasikan sebagai penyerang unit ini
            const randomEnemy = enemyUnits[Math.floor(Math.random() * enemyUnits.length)];
            const matchup = getUnitMatchupMultiplier(randomEnemy?.type || "", u.type);
            
            // Hitung atrisi dengan pengali efektivitas (Matchup)
            const loss = hitungAtrisiUnit(u.count, (enemyPowerScore / (enemyUnits.length || 1)) * matchup, 0.3);
            return {
                ...u,
                count: Math.max(0, u.count - loss)
            };
        }));

        setEnemyUnits((prevEnemy: any[]) => prevEnemy.map((u: any) => {
            // Pilih satu unit pemain secara acak sebagai penyerang
            const randomPlayer = playerUnits[Math.floor(Math.random() * playerUnits.length)];
            const matchup = getUnitMatchupMultiplier(randomPlayer?.type || "", u.type);

            const loss = hitungAtrisiUnit(u.count, (playerPowerScore / (playerUnits.length || 1)) * matchup, 0.5);
            return {
                ...u,
                count: Math.max(0, u.count - loss)
            };
        }));

        // Generate dynamic narratives based on actual units (Python Bridge)
        const availableLogs = getDynamicNarratives(playerUnits, enemyUnits);
        const randomLog = availableLogs[Math.floor(Math.random() * availableLogs.length)];
        
        setBattleLog(prev => [randomLog, ...prev].slice(0, 50));

        // Update overall strength percentages based on remaining Power Score
        setPlayerStrength(prev => Math.max(0, prev - (Math.random() * 3)));
        setEnemyStrength(prev => Math.max(0, prev - (Math.random() * 4)));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [phase]);

  useEffect(() => {
    if (playerStrength <= 0 || enemyStrength <= 0) {
      setPhase('result');
    }
  }, [playerStrength, enemyStrength]);

  // Helper to get power for individual unit card (SINKRON DENGAN kekuatanmiliter.ts)
  const getUnitPowerValue = (type: string, count: number, country?: any) => {
    let p = 1;
    const t = type.toLowerCase();
    
    // Mapping ke konstanta pusat
    if (t.includes('tank')) p = MilPower.TANK_POWER_PER_UNIT;
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
    // player units fallback from invasion data (generic names)
    else if (t === 'tank') p = MilPower.TANK_POWER_PER_UNIT;
    else if (t === 'pesawat') p = MilPower.INTERCEPTOR_POWER_PER_UNIT; // Default to interceptor for generic
    else if (t === 'kapal') p = MilPower.DESTROYER_POWER_PER_UNIT; // Default to destroyer for generic
    
    // Apply Multipliers (Religion/Ideology)
    let multiplier = 1.0;
    if (country) {
        if (country.religion === "Shinto") multiplier *= SHINTO_ALUTSISTA_QUALITY;
        if (country.ideology === "Nasionalisme") multiplier *= (1.0 + NASIONALISME_MILITARY_DAMAGE_BONUS);
    }

    return Math.ceil(count * p * multiplier);
  };

  // Calculate real-time power score
  const playerPowerScore = useMemo(() => {
    return playerUnits.reduce((acc, u) => acc + getUnitPowerValue(u.type, u.count), 0);
  }, [playerUnits]);

  const enemyPowerScore = useMemo(() => {
    return enemyUnits.reduce((acc, u) => acc + getUnitPowerValue(u.type, u.count, targetCountry), 0);
  }, [enemyUnits, targetCountry]);

  return (
    <div className="fixed inset-0 z-[200] bg-zinc-950 flex flex-col overflow-hidden text-white font-sans">
      {/* Cinematic Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533234458773-9f98355f1bb1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950" />

      {/* Header / Nav */}
      <div className="relative z-10 p-8 flex items-center justify-between border-b border-zinc-800/50 backdrop-blur-xl bg-zinc-900/30">
        <div className="flex items-center gap-6">
          <button 
            onClick={onBack}
            className="p-3 hover:bg-zinc-800 rounded-2xl transition-all border border-zinc-700/50 group cursor-pointer"
          >
            <ArrowLeft className="h-6 w-6 text-zinc-400 group-hover:text-white" />
          </button>
          <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter flex items-center gap-3">
              <Sword className="h-8 w-8 text-red-500" />
              Operasi: {invasion.target}
            </h1>
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-1">Sektor Tempur Aktif • Koordinat Terkunci</p>
          </div>
        </div>

        <div className="flex gap-4">
           <div className="bg-red-500/10 border border-red-500/20 px-6 py-3 rounded-2xl flex flex-col items-center">
              <span className="text-[10px] font-black text-red-500/50 uppercase tracking-widest">Status Tempur</span>
              <span className="text-xl font-black text-red-500 uppercase tracking-tighter">{phase === 'fighting' ? 'KONTAK SENJATA' : phase === 'deploying' ? 'DEPOYMENT' : 'SELESAI'}</span>
           </div>
        </div>
      </div>

      {/* Main Battlefield Area */}
      <div className="relative z-10 flex-1 flex flex-col p-12 gap-12 overflow-hidden">
        
        {/* Force Comparison Bar */}
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
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                      style={{ width: `${playerStrength}%` }}
                    />
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-zinc-900 border-2 border-zinc-800 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-zinc-600">VS</span>
                </div>
            </div>

            <div className="flex-1 space-y-3 text-right">
                <div className="flex justify-between items-end flex-row-reverse">
                    <span className="text-red-500 font-black text-xl italic uppercase tracking-tighter">Pasukan {invasion.target}</span>
                    <div className="flex items-baseline gap-3 flex-row-reverse">
                        <span className="text-[10px] font-black text-red-500/50 uppercase tracking-widest">Power: {Math.ceil(enemyPowerScore).toLocaleString()}</span>
                        <span className="text-4xl font-black tabular-nums">{Math.ceil(enemyStrength)}%</span>
                    </div>
                </div>
                <div className="h-4 bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden p-0.5 flex justify-end">
                    <div 
                      className="h-full bg-gradient-to-l from-red-600 to-red-400 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                      style={{ width: `${enemyStrength}%` }}
                    />
                </div>
            </div>
        </div>

        {/* Tactical Feed & Visualization */}
        <div className="flex-1 grid grid-cols-12 gap-8 overflow-hidden">
            {/* Units list */}
            <div className="col-span-3 space-y-4 overflow-y-auto pr-4">
                <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-6">Armada Dikerahkan</h3>
                {playerUnits.map((unit: any, i: number) => (
                    <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center gap-4 group hover:border-emerald-500/30 transition-all">
                        <div className="w-10 h-10 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-center">
                            <Zap className="h-4 w-4 text-emerald-500" />
                        </div>
                        <div>
                            <p className="text-xs font-black text-white uppercase tracking-tight">{unit.type}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                                <p className="text-[10px] font-bold text-zinc-500">{Math.ceil(unit.count).toLocaleString()} UNIT</p>
                                <span className="text-[10px] text-zinc-700">•</span>
                                <p className="text-[10px] font-black text-emerald-500/70">{getUnitPowerValue(unit.type, unit.count).toLocaleString()} POWER</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Combat Logs / Animation Area */}
            <div className="col-span-6 bg-zinc-900/20 border border-zinc-800/50 rounded-[40px] relative overflow-hidden flex flex-col p-8">
                {phase === 'deploying' ? (
                    <div className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
                        <div className="w-32 h-32 bg-red-500/10 rounded-full border-2 border-red-500/20 flex items-center justify-center animate-pulse">
                            <Target className="h-16 w-16 text-red-500" />
                        </div>
                        <div className="max-w-xs space-y-4">
                            <h2 className="text-2xl font-black uppercase tracking-tighter italic">Kesiapan Tempur 100%</h2>
                            <p className="text-zinc-500 text-sm font-medium">Seluruh unit telah mencapai garis depan. Menunggu instruksi untuk melakukan serangan penuh.</p>
                            <button 
                                onClick={() => setPhase('fighting')}
                                className="w-full py-5 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all active:scale-95 cursor-pointer"
                            >
                                KONTAK SENJATA!
                            </button>
                        </div>
                    </div>
                ) : phase === 'fighting' ? (
                    <div className="flex-1 flex flex-col">
                        <div className="flex-1 relative flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-96 h-96 bg-red-600/5 rounded-full animate-ping" />
                                <div className="w-64 h-64 bg-red-600/10 rounded-full absolute animate-pulse" />
                            </div>
                            <Bomb className="h-24 w-24 text-red-500 animate-bounce relative z-10" />
                        </div>
                        
                        <div className="space-y-3 bg-zinc-950/50 p-6 rounded-3xl border border-zinc-800">
                            {battleLog.map((log, i) => (
                                <div key={i} className={`text-xs font-bold uppercase tracking-wide flex items-center gap-3 ${i === 0 ? 'text-red-400' : 'text-zinc-500'}`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-red-500 animate-pulse' : 'bg-zinc-800'}`} />
                                    {log}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
                        <div className={`w-32 h-32 rounded-full border-2 flex items-center justify-center ${playerStrength > 0 ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                            {playerStrength > 0 ? <Trophy className="h-16 w-16 text-emerald-500" /> : <Skull className="h-16 w-16 text-red-500" />}
                        </div>
                        <div className="max-w-xs space-y-4">
                            <h2 className="text-4xl font-black uppercase tracking-tighter italic">
                                {playerStrength > 0 ? 'Kemenangan!' : 'Kekalahan!'}
                            </h2>
                            <p className="text-zinc-500 text-sm font-medium">
                                {playerStrength > 0 
                                  ? `Operasi di ${invasion.target} berhasil diselesaikan. Wilayah musuh dalam kendali penuh.`
                                  : `Pasukan kita terpaksa mundur dari ${invasion.target} setelah mengalami kerugian besar.`}
                            </p>
                            <button 
                                onClick={onBack}
                                className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all cursor-pointer"
                            >
                                KEMBALI KE MARKAS
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Enemy Units sidebar */}
            <div className="col-span-3 space-y-4 overflow-y-auto pl-4 border-l border-zinc-800/30">
                <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-6 text-right">Armada Musuh</h3>
                {enemyUnits.map((unit: any, i: number) => (
                    <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center justify-end gap-4 group hover:border-red-500/30 transition-all">
                        <div className="text-right">
                            <p className="text-xs font-black text-white uppercase tracking-tight">{unit.type}</p>
                            <div className="flex items-center justify-end gap-2 mt-0.5">
                                <p className="text-[10px] font-black text-rose-500/70">{getUnitPowerValue(unit.type, unit.count).toLocaleString()} POWER</p>
                                <span className="text-[10px] text-zinc-700">•</span>
                                <p className="text-[10px] font-bold text-zinc-500">{Math.ceil(unit.count).toLocaleString()} UNIT</p>
                            </div>
                        </div>
                        <div className="w-10 h-10 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-center">
                            <unit.icon className="h-4 w-4 text-red-500" />
                        </div>
                    </div>
                ))}
                
                <div className="mt-8 p-6 bg-red-500/5 border border-red-500/10 rounded-3xl">
                    <h4 className="text-red-500 font-black text-xs uppercase tracking-widest mb-3">Analisis Strategis (Python)</h4>
                    <p className="text-white text-[11px] font-black uppercase mb-2">
                        {analisisStrategi(playerPowerScore, enemyPowerScore).rekomendasi}
                    </p>
                    <p className="text-zinc-400 text-[10px] leading-relaxed font-bold italic">
                        Probabilitas Kemenangan: {analisisStrategi(playerPowerScore, enemyPowerScore).probabilitas}%
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
