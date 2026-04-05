"use client"

import React, { useState, useEffect, useMemo } from "react";
import { X, Shield, Sword, Anchor, Plane, ArrowRight, Zap, Target, BarChart3, Info, Swords, TrendingUp, ShieldAlert } from "lucide-react";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { getMilitaryDataKey } from "./militaryRegistry";
import { 
  calculateTotalMilitaryPower,
  INFANTRY_POWER_PER_UNIT, TANK_POWER_PER_UNIT, APC_POWER_PER_UNIT, ARTILLERY_POWER_PER_UNIT, ROCKET_POWER_PER_UNIT, SAM_POWER_PER_UNIT, TACTICAL_POWER_PER_UNIT,
  CARRIER_POWER_PER_UNIT, DESTROYER_POWER_PER_UNIT, CORVETTE_POWER_PER_UNIT, SUBMARINE_POWER_PER_UNIT, REGULAR_SUB_POWER_PER_UNIT, MINE_SHIP_POWER_PER_UNIT, LOGISTICS_POWER_PER_UNIT,
  STEALTH_POWER_PER_UNIT, INTERCEPTOR_POWER_PER_UNIT, BOMBER_POWER_PER_UNIT, ATTACK_HELI_POWER_PER_UNIT, RECON_POWER_PER_UNIT, UAV_POWER_PER_UNIT, KAMIKAZE_POWER_PER_UNIT, TRANSPORT_POWER_PER_UNIT
} from "../../../../../2_navigasi_menu/2_navigasi_bawah/4_pertahanan/3_armada_militer/kekuatanmiliter";
import { buildingStorage } from "../../../../../2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { militaryAidStorage } from "./militaryAidStorage";
import { playerMilitaryStorage } from "./playerMilitaryStorage";

const UNIT_POWER_MAP: Record<string, number> = {
  // DARAT
  barak: INFANTRY_POWER_PER_UNIT,
  tank_tempur_utama: TANK_POWER_PER_UNIT,
  apc_ifv: APC_POWER_PER_UNIT,
  artileri_berat: ARTILLERY_POWER_PER_UNIT,
  sistem_peluncur_roket: ROCKET_POWER_PER_UNIT,
  pertahanan_udara_mobile: SAM_POWER_PER_UNIT,
  kendaraan_taktis: TACTICAL_POWER_PER_UNIT,
  // LAUT
  kapal_induk: CARRIER_POWER_PER_UNIT,
  kapal_destroyer: DESTROYER_POWER_PER_UNIT,
  kapal_korvet: CORVETTE_POWER_PER_UNIT,
  kapal_selam_nuklir: SUBMARINE_POWER_PER_UNIT,
  kapal_selam_regular: REGULAR_SUB_POWER_PER_UNIT,
  kapal_ranjau: MINE_SHIP_POWER_PER_UNIT,
  kapal_logistik: LOGISTICS_POWER_PER_UNIT,
  // UDARA
  jet_tempur_siluman: STEALTH_POWER_PER_UNIT,
  jet_tempur_interceptor: INTERCEPTOR_POWER_PER_UNIT,
  pesawat_pengebom: BOMBER_POWER_PER_UNIT,
  helikopter_serang: ATTACK_HELI_POWER_PER_UNIT,
  pesawat_pengintai: RECON_POWER_PER_UNIT,
  drone_intai_uav: UAV_POWER_PER_UNIT,
  drone_kamikaze: KAMIKAZE_POWER_PER_UNIT,
  pesawat_angkut: TRANSPORT_POWER_PER_UNIT,
};

interface ModalsBeriTentaraProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
  playerCountry: string;
}

type MilitaryCategory = 'darat' | 'laut' | 'udara';

export default function ModalsBeriTentara({
  isOpen, onClose, targetCountry, playerCountry
}: ModalsBeriTentaraProps) {
  const [activeTab, setActiveTab] = useState<MilitaryCategory>('darat');
  const [playerArmada, setPlayerArmada] = useState<any>(null);
  const [targetArmada, setTargetArmada] = useState<any>(null);
  const [selection, setSelection] = useState<Record<string, number>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [userBudget, setUserBudget] = useState(budgetStorage.getBudget());

  // Load Military Data for Both Countries
  useEffect(() => {
    if (!isOpen) return;

    async function loadData() {
      // Load Player Data
      const pRegistry = getMilitaryDataKey(playerCountry || "indonesia");
      // Load Target Data
      const tRegistry = getMilitaryDataKey(targetCountry);
      
      const pDeltas = buildingStorage.getBuildingDeltas();
      const pDeductions = playerMilitaryStorage.getDeductions();

      if (pRegistry) {
        try {
          const mod = await import(`@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/${pRegistry.continent}/${pRegistry.id}_${(playerCountry || "indonesia").toLowerCase().replace(/ /g, '_')}`);
          const baseArmada = JSON.parse(JSON.stringify(mod[pRegistry.exportName]));
          
          // Apply Player Deltas
          if (baseArmada.darat) baseArmada.darat.tank_tempur_utama += (pDeltas['tank'] || 0) - (pDeductions['tank_tempur_utama'] || 0);
          if (baseArmada.darat) baseArmada.darat.apc_ifv += (pDeltas['apc'] || 0) - (pDeductions['apc_ifv'] || 0);
          if (baseArmada.darat) baseArmada.darat.artileri_berat += (pDeltas['artileri'] || 0) - (pDeductions['artileri_berat'] || 0);
          if (baseArmada.darat) baseArmada.darat.sistem_peluncur_roket += (pDeltas['rocket'] || 0) - (pDeductions['sistem_peluncur_roket'] || 0);
          if (baseArmada.darat) baseArmada.darat.pertahanan_udara_mobile += (pDeltas['sam'] || 0) - (pDeductions['pertahanan_udara_mobile'] || 0);
          if (baseArmada.darat) baseArmada.darat.kendaraan_taktis += (pDeltas['tactical'] || 0) - (pDeductions['kendaraan_taktis'] || 0);
          
          if (baseArmada.laut) baseArmada.laut.kapal_induk += (pDeltas['carrier'] || 0) - (pDeductions['kapal_induk'] || 0);
          if (baseArmada.laut) baseArmada.laut.kapal_destroyer += (pDeltas['destroyer'] || 0) - (pDeductions['kapal_destroyer'] || 0);
          if (baseArmada.laut) baseArmada.laut.kapal_korvet += (pDeltas['corvette'] || 0) - (pDeductions['kapal_korvet'] || 0);
          if (baseArmada.laut) baseArmada.laut.kapal_selam_nuklir += (pDeltas['submarine'] || 0) - (pDeductions['kapal_selam_nuklir'] || 0);
          if (baseArmada.laut) baseArmada.laut.kapal_selam_regular += (pDeltas['reg_sub'] || 0) - (pDeductions['kapal_selam_regular'] || 0);
          if (baseArmada.laut) baseArmada.laut.kapal_ranjau += (pDeltas['mine_ship'] || 0) - (pDeductions['kapal_ranjau'] || 0);
          if (baseArmada.laut) baseArmada.laut.kapal_logistik += (pDeltas['logistics'] || 0) - (pDeductions['kapal_logistik'] || 0);
          
          if (baseArmada.udara) baseArmada.udara.jet_tempur_siluman += (pDeltas['stealth_jet'] || 0) - (pDeductions['jet_tempur_siluman'] || 0);
          if (baseArmada.udara) baseArmada.udara.jet_tempur_interceptor += (pDeltas['interceptor'] || 0) - (pDeductions['jet_tempur_interceptor'] || 0);
          if (baseArmada.udara) baseArmada.udara.pesawat_pengebom += (pDeltas['bomber'] || 0) - (pDeductions['pesawat_pengebom'] || 0);
          if (baseArmada.udara) baseArmada.udara.helikopter_serang += (pDeltas['heli_attack'] || 0) - (pDeductions['helikopter_serang'] || 0);
          if (baseArmada.udara) baseArmada.udara.pesawat_pengintai += (pDeltas['recon_plane'] || 0) - (pDeductions['pesawat_pengintai'] || 0);
          if (baseArmada.udara) baseArmada.udara.drone_intai_uav += (pDeltas['uav'] || 0) - (pDeductions['drone_intai_uav'] || 0);
          if (baseArmada.udara) baseArmada.udara.drone_kamikaze += (pDeltas['kamikaze'] || 0) - (pDeductions['drone_kamikaze'] || 0);
          if (baseArmada.udara) baseArmada.udara.pesawat_angkut += (pDeltas['transport'] || 0) - (pDeductions['pesawat_angkut'] || 0);
          
          setPlayerArmada(baseArmada);
        } catch (err) { console.error("Player data fail:", err); }
      }

      if (tRegistry) {
        try {
          const mod = await import(`@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/${tRegistry.continent}/${tRegistry.id}_${targetCountry.toLowerCase().replace(/ /g, '_')}`);
          const targetBase = JSON.parse(JSON.stringify(mod[tRegistry.exportName]));
          
          // Apply Target Aid Deltas
          const aidDeltas = militaryAidStorage.getAidForCountry(targetCountry);
          Object.entries(aidDeltas).forEach(([unit, count]) => {
            if (targetBase.darat?.[unit] !== undefined) targetBase.darat[unit] += count;
            else if (targetBase.laut?.[unit] !== undefined) targetBase.laut[unit] += count;
            else if (targetBase.udara?.[unit] !== undefined) targetBase.udara[unit] += count;
          });
          
          setTargetArmada(targetBase);
        } catch (err) { console.error("Target data fail:", err); }
      }
    }

    loadData();
    setUserBudget(budgetStorage.getBudget());

    window.addEventListener("player_military_updated", loadData);
    return () => window.removeEventListener("player_military_updated", loadData);
  }, [isOpen, playerCountry, targetCountry, showSuccess]);

  // Real-time Power Calculation
  const playerPower = useMemo(() => playerArmada ? calculateTotalMilitaryPower(playerArmada) : { total: 0 }, [playerArmada]);
  const targetCurrentPower = useMemo(() => targetArmada ? calculateTotalMilitaryPower(targetArmada) : { total: 0 }, [targetArmada]);

  // Projected Target Power
  const targetProjectedPower = useMemo(() => {
    if (!targetArmada) return { total: 0 };
    const projectedTargetArmada = JSON.parse(JSON.stringify(targetArmada));
    Object.entries(selection).forEach(([unit, count]) => {
      if (count <= 0) return;
      if (projectedTargetArmada.darat?.[unit] !== undefined) projectedTargetArmada.darat[unit] += count;
      else if (projectedTargetArmada.laut?.[unit] !== undefined) projectedTargetArmada.laut[unit] += count;
      else if (projectedTargetArmada.udara?.[unit] !== undefined) projectedTargetArmada.udara[unit] += count;
    });
    return calculateTotalMilitaryPower(projectedTargetArmada);
  }, [targetArmada, selection]);

  if (!isOpen) return null;

  const handleSelection = (id: string, val: number) => {
    setSelection(prev => ({ ...prev, [id]: val }));
  };

  const currentCategoryData = (playerArmada?.[activeTab] || {}) as Record<string, number>;
  const totalUnitsSelected = Object.values(selection).reduce((a, b) => a + b, 0);
  const estimatedCost = totalUnitsSelected * 5000;
  const isAffordable = userBudget >= estimatedCost;

  const handleSend = () => {
    if (!isAffordable || totalUnitsSelected <= 0 || isProcessing) return;
    setIsProcessing(true);
    
    // Deduct Budget
    budgetStorage.updateBudget(-estimatedCost);
    
    // Transfer Troops
    militaryAidStorage.sendAid(targetCountry, selection);

    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      setSelection({}); // Clear selection
    }, 1500);
  };

  const formatUnitName = (str: string) => str.replace(/_/g, ' ').toUpperCase();

  const categories = [
    { id: 'darat', label: 'Darat', icon: Sword, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { id: 'laut', label: 'Laut', icon: Anchor, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { id: 'udara', label: 'Udara', icon: Plane, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
  ];

  return (
    <div className="fixed inset-0 z-[2500] flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl animate-in fade-in duration-300 pointer-events-none text-sans">
      <div className="bg-zinc-950 border border-zinc-800/50 rounded-[3rem] w-full max-w-2xl overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.8)] relative animate-in zoom-in-95 duration-500 pointer-events-auto flex flex-col max-h-[95vh]">

        {/* Premium Background Accents */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.3)]"></div>

        {/* Header Section */}
        <div className="p-10 pb-6 flex items-center justify-between relative z-10 shrink-0">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-emerald-500/15 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)] group hover:scale-105 transition-transform duration-500">
              <Shield className="h-7 w-7 text-emerald-500" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-[0.4em] mb-1 italic">Military Deployment</p>
              <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Beri Bantuan Tentara</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white transition-all p-3 hover:bg-zinc-900 rounded-2xl border border-transparent hover:border-zinc-800 cursor-pointer active:scale-90"
          >
            <X size={24} />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="px-10 pb-4 flex gap-3 relative z-10 shrink-0 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as MilitaryCategory)}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 relative group active:scale-95 cursor-pointer ${activeTab === cat.id
                  ? "bg-emerald-600 text-white shadow-[0_0_25px_rgba(16,185,129,0.3)]"
                  : "bg-zinc-900/50 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 border border-zinc-800/50"
              }`}
            >
              <cat.icon className={`h-4 w-4 ${activeTab === cat.id ? 'text-white' : 'text-zinc-600'} group-hover:scale-110 transition-transform`} />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Content Section - VS Comparison and Units List */}
        <div className="flex-1 overflow-y-auto p-10 pt-2 space-y-8 relative z-10 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">

          {/* VS COMPARISON OVERLAY (INLINE) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative items-center">
            {/* National Capacity (Player) */}
            <div className="flex flex-col items-center gap-3 p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-[2.5rem] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={80} className="text-cyan-500" />
               </div>
               <span className="text-[9px] font-black text-cyan-500 uppercase tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full">Kapasitas Nasional</span>
               <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-none">{playerCountry}</h3>
               <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-black text-white tabular-nums">{playerPower.total.toLocaleString()}</span>
                  <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest">Power</span>
               </div>
            </div>

            {/* VSbadge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
              <div className="w-12 h-12 bg-zinc-950 border-4 border-zinc-900 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-sm font-black text-rose-500 italic">VS</span>
              </div>
            </div>

            {/* Target Analysis */}
            <div className="flex flex-col items-center gap-3 p-6 bg-rose-500/5 border border-rose-500/20 rounded-[2.5rem] relative overflow-hidden group">
               <div className="absolute top-0 left-0 p-4 opacity-10 group-hover:scale-110 transition-transform -scale-x-100 text-rose-500">
                  <Target size={80} />
               </div>
               <span className="text-[9px] font-black text-rose-500 uppercase tracking-widest border border-rose-500/30 px-3 py-1 rounded-full leading-none">Analisis Target</span>
               <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-none">{targetCountry}</h3>
               <div className="flex items-baseline gap-2 mt-1">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-black text-white tabular-nums leading-none">{targetProjectedPower.total.toLocaleString()}</span>
                    {targetProjectedPower.total > targetCurrentPower.total && (
                      <span className="text-emerald-400 text-[8px] font-black animate-pulse mt-1 uppercase tracking-tighter">+{(targetProjectedPower.total - targetCurrentPower.total).toLocaleString()} Projection</span>
                    )}
                  </div>
                  <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest leading-none">Power</span>
               </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

          {/* Unit Selection Grid */}
          <div className="grid grid-cols-1 gap-4">
            {playerArmada ? (
              Object.entries(currentCategoryData).map(([unit, count]) => {
                const unitPower = UNIT_POWER_MAP[unit] || 0;
                
                return (
                  <div key={unit} className="bg-zinc-900/20 border border-zinc-800/40 p-6 rounded-[2rem] hover:bg-zinc-900/40 transition-colors group">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:border-emerald-500/30 transition-colors">
                          <Target size={18} className="text-emerald-500/70" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none mb-1">{formatUnitName(unit)}</p>
                          <div className="flex items-center gap-2">
                             <p className="text-xs font-bold text-zinc-500 uppercase italic">Tersedia: {count} Unit</p>
                             <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                             <p className="text-[9px] font-black text-emerald-500/80 uppercase tracking-tighter">Daya Tempur: +{unitPower.toLocaleString('id-ID')} / Unit</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-black text-white italic tabular-nums">{selection[unit] || 0}</span>
                        <span className="text-[10px] font-black text-zinc-700 ml-2 uppercase">Dikirim</span>
                      </div>
                    </div>
                  <div className="relative h-10 flex items-center px-2">
                    <input
                      type="range"
                      min={0}
                      max={count}
                      step={1}
                      value={selection[unit] || 0}
                      onChange={(e) => handleSelection(unit, Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all"
                    />
                  </div>
                </div>
              );
            })
          ) : (
              <div className="p-12 text-center border-2 border-dashed border-zinc-800 rounded-[3rem] opacity-40">
                <BarChart3 className="h-12 w-12 text-zinc-600 mx-auto mb-4" />
                <p className="text-sm font-black uppercase tracking-widest text-zinc-500 italic">Data militer sedang sinkronisasi...</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Action Section */}
        <div className="p-10 pt-6 border-t border-zinc-900/50 bg-zinc-950/50 backdrop-blur-2xl relative z-10 shrink-0">
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Total Unit</span>
              <div className="flex items-center gap-3">
                <BarChart3 size={16} className="text-emerald-500" />
                <p className="text-2xl font-black text-emerald-400 italic tabular-nums">{totalUnitsSelected.toString().padStart(2, '0')}</p>
              </div>
            </div>
            <div className="text-right flex flex-col">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Logistik Pengiriman</span>
              <p className={`text-2xl font-black italic tabular-nums ${isAffordable ? 'text-amber-400' : 'text-rose-500'}`}>
                ${(estimatedCost).toLocaleString('id-ID')}
              </p>
            </div>
          </div>
          <button
            onClick={handleSend}
            disabled={!isAffordable || totalUnitsSelected <= 0 || isProcessing}
            className={`w-full py-6 font-black rounded-3xl transition-all shadow-3xl active:scale-[0.98] cursor-pointer flex items-center justify-center gap-5 text-sm uppercase tracking-[0.4em] border-t border-white/10 group overflow-hidden relative ${isAffordable && totalUnitsSelected > 0
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white'
                : 'bg-zinc-900 text-zinc-700 cursor-not-allowed border-zinc-800'
            }`}
          >
            {isProcessing ? (
              <div className="flex items-center gap-4">
                <div className="h-6 w-6 border-3 border-white/10 border-t-white rounded-full animate-spin" />
                <span className="italic">Mobilisasi Pasukan...</span>
              </div>
            ) : (
              <>
                <span className="relative z-10">{!isAffordable ? "Anggaran Logistik Kurang" : "Gencarkan Pengiriman Pasukan"}</span>
                <ArrowRight size={22} className="relative z-10 transition-transform duration-500 group-hover:translate-x-2" />
              </>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
          </button>
        </div>

        {/* SUCCESS MODAL OVERLAY */}
        {showSuccess && (
          <div className="absolute inset-0 z-[100] flex items-center justify-center p-8 bg-black/40 backdrop-blur-md animate-in fade-in duration-500">
            <div className="bg-zinc-900 border border-emerald-500/30 rounded-[3rem] p-10 max-w-sm w-full text-center shadow-[0_0_50px_rgba(16,185,129,0.2)] scale-in-center animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/40">
                <Shield className="h-10 w-10 text-emerald-500 animate-pulse" />
              </div>
              <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-3">Mobilisasi Berhasil</h4>
              <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest leading-relaxed mb-8">
                Operasi pengiriman bantuan militer ke <span className="text-emerald-400">{targetCountry}</span> telah diselesaikan. Unit telah memasuki zona target.
              </p>
              <button 
                onClick={() => {
                  setShowSuccess(false);
                  onClose();
                }}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all shadow-xl active:scale-95 cursor-pointer uppercase tracking-widest text-xs"
              >
                Kembali ke Diplomasi
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
