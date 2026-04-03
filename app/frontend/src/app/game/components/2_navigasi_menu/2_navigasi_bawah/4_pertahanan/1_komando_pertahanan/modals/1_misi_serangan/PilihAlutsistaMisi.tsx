"use client"

import { useState, useMemo, useEffect } from "react";
import { X, Sword, Shield, Truck, Anchor, Plane, Target, Zap, Info, ChevronRight, Minus, Plus, Crosshair, MapPin, Gauge } from "lucide-react";
import { buildingStorage } from "../../../../3_pembangunan/buildingStorage";
import { playerMilitaryStorage } from "../../../../../../map-system/modals_detail_negara/4_bantuan_dan_kerjasama/1_beri_tentara/logic/playerMilitaryStorage";
import { MILITARY_KEY_MAP } from "../../../../../../map-system/modals_detail_negara/4_bantuan_dan_kerjasama/1_beri_tentara/logic/militaryAidStorage";
import { 
  TANK_POWER_PER_UNIT, APC_POWER_PER_UNIT, ARTILLERY_POWER_PER_UNIT, ROCKET_POWER_PER_UNIT, SAM_POWER_PER_UNIT, TACTICAL_POWER_PER_UNIT,
  CARRIER_POWER_PER_UNIT, DESTROYER_POWER_PER_UNIT, CORVETTE_POWER_PER_UNIT, SUBMARINE_POWER_PER_UNIT, REGULAR_SUB_POWER_PER_UNIT, MINE_SHIP_POWER_PER_UNIT, LOGISTICS_POWER_PER_UNIT,
  STEALTH_POWER_PER_UNIT, INTERCEPTOR_POWER_PER_UNIT, BOMBER_POWER_PER_UNIT, ATTACK_HELI_POWER_PER_UNIT, RECON_POWER_PER_UNIT, UAV_POWER_PER_UNIT, KAMIKAZE_POWER_PER_UNIT, TRANSPORT_POWER_PER_UNIT,
  INFANTRY_POWER_PER_UNIT, calculateForcesPower 
} from "../../../3_armada_militer/kekuatanmiliter";
import { initializeWarMission } from "./route";
import { countries as centersData } from "@/app/database/data/negara/benua/index";

interface PilihAlutsistaMisiProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  targetCountry?: string;
}

export default function PilihAlutsistaMisi({ isOpen, onClose, data, targetCountry }: PilihAlutsistaMisiProps) {
  const [activeTab, setActiveTab] = useState<"darat" | "laut" | "udara">("darat");
  const [selection, setSelection] = useState<Record<string, number>>({});
  const [tick, setTick] = useState(0);

  // Sea access intelligence
  const hasSea = useMemo(() => {
    if (!targetCountry) return true; 
    const target = centersData.find(c => 
      c.name_id.toLowerCase() === targetCountry.toLowerCase() || 
      c.name_en.toLowerCase() === targetCountry.toLowerCase()
    );
    if (!target || !target.armada_militer?.laut) return false;
    return Object.values(target.armada_militer.laut).some(count => (count as number) > 0);
  }, [targetCountry]);

  // Security Logic: Auto-switch away from "laut" if the target has no sea
  useEffect(() => {
    if (!hasSea && activeTab === "laut") {
      setActiveTab("darat");
    }
  }, [hasSea, activeTab]);

  // Sync with storage for real-time updates
  useEffect(() => {
    if (!isOpen) return;
    const handleUpdate = () => setTick(t => t + 1);
    window.addEventListener('building_storage_updated', handleUpdate);
    return () => window.removeEventListener('building_storage_updated', handleUpdate);
  }, [isOpen]);

  const militaryData = useMemo(() => {
    if (!data) return null;
    const buildingData = buildingStorage.getData();
    const buildingDeltas = buildingData?.buildingDeltas || {};
    const playerDeductions = playerMilitaryStorage.getDeductions();

    const getAvailable = (fullKey: string, shortKey: string, baseCount: number) => {
      const delta = (buildingDeltas[shortKey] as number) || 0;
      const deduction = playerDeductions[fullKey] || 0;
      return Math.max(0, baseCount + delta - deduction);
    };

    const darat = [
      { id: "pasukan_infanteri", short: "barak", label: "Infanteri", icon: Sword, available: getAvailable("pasukan_infanteri", "barak", (data.armada_militer?.barak || 0) * 10000), power: 1 / 10000 },
      { id: "tank_tempur_utama", short: "tank", label: "Main Battle Tank", icon: Truck, available: getAvailable("tank_tempur_utama", "tank", data.armada_militer?.darat?.tank_tempur_utama || 0), power: TANK_POWER_PER_UNIT },
      { id: "apc_ifv", short: "apc", label: "APC / IFV", icon: Truck, available: getAvailable("apc_ifv", "apc", data.armada_militer?.darat?.apc_ifv || 0), power: APC_POWER_PER_UNIT },
      { id: "artileri_berat", short: "artileri", label: "Artileri Berat", icon: Target, available: getAvailable("artileri_berat", "artileri", data.armada_militer?.darat?.artileri_berat || 0), power: ARTILLERY_POWER_PER_UNIT },
      { id: "sistem_peluncur_roket", short: "rocket", label: "Sistem Roket MLRS", icon: Zap, available: getAvailable("sistem_peluncur_roket", "rocket", data.armada_militer?.darat?.sistem_peluncur_roket || 0), power: ROCKET_POWER_PER_UNIT },
      { id: "pertahanan_udara_mobile", short: "sam", label: "Mobile SAM", icon: Shield, available: getAvailable("pertahanan_udara_mobile", "sam", data.armada_militer?.darat?.pertahanan_udara_mobile || 0), power: SAM_POWER_PER_UNIT },
      { id: "kendaraan_taktis", short: "tactical", label: "Kendaraan Taktis", icon: Truck, available: getAvailable("kendaraan_taktis", "tactical", data.armada_militer?.darat?.kendaraan_taktis || 0), power: TACTICAL_POWER_PER_UNIT },
    ];

    const laut = [
      { id: "kapal_induk", short: "carrier", label: "Kapal Induk", icon: Anchor, available: getAvailable("kapal_induk", "carrier", data.armada_militer?.laut?.kapal_induk || 0), power: CARRIER_POWER_PER_UNIT },
      { id: "kapal_destroyer", short: "destroyer", label: "Kapal Destroyer", icon: Anchor, available: getAvailable("kapal_destroyer", "destroyer", data.armada_militer?.laut?.kapal_destroyer || 0), power: DESTROYER_POWER_PER_UNIT },
      { id: "kapal_korvet", short: "corvette", label: "Kapal Korvet", icon: Anchor, available: getAvailable("kapal_korvet", "corvette", data.armada_militer?.laut?.kapal_korvet || 0), power: CORVETTE_POWER_PER_UNIT },
      { id: "kapal_selam_nuklir", short: "submarine", label: "Kapal Selam Nuklir", icon: Zap, available: getAvailable("kapal_selam_nuklir", "submarine", data.armada_militer?.laut?.kapal_selam_nuklir || 0), power: SUBMARINE_POWER_PER_UNIT },
      { id: "kapal_selam_regular", short: "reg_sub", label: "Kapal Selam Reguler", icon: Anchor, available: getAvailable("kapal_selam_regular", "reg_sub", data.armada_militer?.laut?.kapal_selam_regular || 0), power: REGULAR_SUB_POWER_PER_UNIT },
      { id: "kapal_ranjau", short: "mine_ship", label: "Kapal Ranjau", icon: Anchor, available: getAvailable("kapal_ranjau", "mine_ship", data.armada_militer?.laut?.kapal_ranjau || 0), power: MINE_SHIP_POWER_PER_UNIT },
      { id: "kapal_logistik", short: "logistics", label: "Kapal Logistik", icon: Truck, available: getAvailable("kapal_logistik", "logistics", data.armada_militer?.laut?.kapal_logistik || 0), power: LOGISTICS_POWER_PER_UNIT },
    ];

    const udara = [
      { id: "jet_tempur_siluman", short: "stealth_jet", label: "Jet Stealth", icon: Plane, available: getAvailable("jet_tempur_siluman", "stealth_jet", data.armada_militer?.udara?.jet_tempur_siluman || 0), power: STEALTH_POWER_PER_UNIT },
      { id: "jet_tempur_interceptor", short: "interceptor", label: "Jet Interceptor", icon: Plane, available: getAvailable("jet_tempur_interceptor", "interceptor", data.armada_militer?.udara?.jet_tempur_interceptor || 0), power: INTERCEPTOR_POWER_PER_UNIT },
      { id: "pesawat_pengebom", short: "bomber", label: "Pesawat Pengebom", icon: Plane, available: getAvailable("pesawat_pengebom", "bomber", data.armada_militer?.udara?.pesawat_pengebom || 0), power: BOMBER_POWER_PER_UNIT },
      { id: "helikopter_serang", short: "heli_attack", label: "Helikopter Serang", icon: Plane, available: getAvailable("helikopter_serang", "heli_attack", data.armada_militer?.udara?.helikopter_serang || 0), power: ATTACK_HELI_POWER_PER_UNIT },
      { id: "pesawat_pengintai", short: "recon_plane", label: "Pesawat Intai", icon: Plane, available: getAvailable("pesawat_pengintai", "recon_plane", data.armada_militer?.udara?.pesawat_pengintai || 0), power: RECON_POWER_PER_UNIT },
      { id: "drone_intai_uav", short: "uav", label: "Drone UAV", icon: Plane, available: getAvailable("drone_intai_uav", "uav", data.armada_militer?.udara?.drone_intai_uav || 0), power: UAV_POWER_PER_UNIT },
      { id: "drone_kamikaze", short: "kamikaze", label: "Drone Kamikaze", icon: Plane, available: getAvailable("drone_kamikaze", "kamikaze", data.armada_militer?.udara?.drone_kamikaze || 0), power: KAMIKAZE_POWER_PER_UNIT },
      { id: "pesawat_angkut", short: "transport", label: "Pesawat Angkut", icon: Plane, available: getAvailable("pesawat_angkut", "transport", data.armada_militer?.udara?.pesawat_angkut || 0), power: TRANSPORT_POWER_PER_UNIT },
    ];

    return { darat, laut, udara };
  }, [data, tick, isOpen]);

  const handleUpdateQuantity = (id: string, delta: number, max: number) => {
    setSelection(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, Math.min(max, current + delta));
      return { ...prev, [id]: next };
    });
  };

  const currentPower = useMemo(() => {
    // Transform selection to WarForces structure
    const forces = {
      darat: {
        pasukan_infanteri: selection["pasukan_infanteri"] || 0,
        tank_tempur_utama: selection["tank_tempur_utama"] || 0,
        apc_ifv: selection["apc_ifv"] || 0,
        artileri_berat: selection["artileri_berat"] || 0,
        sistem_peluncur_roket: selection["sistem_peluncur_roket"] || 0,
        pertahanan_udara_mobile: selection["pertahanan_udara_mobile"] || 0,
        kendaraan_taktis: selection["kendaraan_taktis"] || 0,
      },
      laut: {
        kapal_induk: selection["kapal_induk"] || 0,
        kapal_destroyer: selection["kapal_destroyer"] || 0,
        kapal_korvet: selection["kapal_korvet"] || 0,
        kapal_selam_nuklir: selection["kapal_selam_nuklir"] || 0,
        kapal_selam_regular: selection["kapal_selam_regular"] || 0,
        kapal_ranjau: selection["kapal_ranjau"] || 0,
        kapal_logistik: selection["kapal_logistik"] || 0,
      },
      udara: {
        jet_tempur_siluman: selection["jet_tempur_siluman"] || 0,
        jet_tempur_interceptor: selection["jet_tempur_interceptor"] || 0,
        pesawat_pengebom: selection["pesawat_pengebom"] || 0,
        helikopter_serang: selection["helikopter_serang"] || 0,
        pesawat_pengintai: selection["pesawat_pengintai"] || 0,
        drone_intai_uav: selection["drone_intai_uav"] || 0,
        drone_kamikaze: selection["drone_kamikaze"] || 0,
        pesawat_angkut: selection["pesawat_angkut"] || 0,
      }
    };
    return calculateForcesPower(forces);
  }, [selection]);

  const handleStartOperation = async () => {
    if (!targetCountry) {
      alert("Target belum dipilih! Silakan pilih negara target di peta.");
      onClose();
      return;
    }

    try {
      const mission = await initializeWarMission(
        data.name_en || data.name_id,
        targetCountry,
        selection
      );
      if (mission) {
        onClose();
        // Redirect to map and trigger layout update
        window.dispatchEvent(new Event("operation_started"));
      }
    } catch (err) {
      console.error("DEBUG Mission Start Error:", err);
    }
  };

  if (!isOpen || !militaryData) return null;

  const currentItems = militaryData[activeTab];

  return (
    <div className="absolute inset-0 bg-black/95 z-[60] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)] flex flex-col relative animate-in zoom-in-95 duration-500 border-red-500/10">
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none" />

        {/* Header */}
        <div className="px-10 py-8 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/20 backdrop-blur-md relative z-10">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-red-600/10 rounded-2xl border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
              <Sword className="h-8 w-8 text-red-500 animate-pulse" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tighter italic uppercase flex items-center gap-3">
                Mobilisasi Alutsista
                <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full not-italic font-bold tracking-normal align-middle">TOP SECRET</span>
              </h2>
              <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.3em] mt-1">Strategic Force Deployment Selection</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all active:scale-95 group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Main Body */}
        <div className="flex-1 flex overflow-hidden relative z-10">
          
          {/* Sidebar Tabs */}
          <div className="w-24 border-r border-zinc-800/50 flex flex-col gap-2 p-3 bg-zinc-950">
            {(["darat", "laut", "udara"] as const).map((tab) => {
              const Icon = tab === "darat" ? Truck : tab === "laut" ? Anchor : Plane;
              const isSeaDisabled = tab === "laut" && !hasSea;
              
              return (
                <button
                  key={tab}
                  disabled={isSeaDisabled}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl transition-all ${
                    isSeaDisabled
                      ? "opacity-20 grayscale border-zinc-900 cursor-not-allowed"
                      : activeTab === tab 
                        ? "bg-red-600 text-white shadow-lg shadow-red-900/40" 
                        : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 border border-transparent"
                  }`}
                >
                  <Icon size={24} />
                  <span className="text-[8px] font-black uppercase tracking-widest">{tab}</span>
                  {isSeaDisabled && (
                    <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
                       <X className="h-4 w-4 text-red-500/50" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Unit List */}
          <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-black/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {currentItems.map((unit) => (
                <div 
                  key={unit.id}
                  className={`group relative p-5 bg-zinc-900/40 border transition-all rounded-[28px] overflow-hidden ${
                    selection[unit.id] > 0 ? "border-red-500/40 bg-red-500/5" : "border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl border transition-all ${
                        selection[unit.id] > 0 ? "bg-red-600 text-white border-red-500" : "bg-zinc-950 text-zinc-500 border-zinc-800 group-hover:border-zinc-700"
                      }`}>
                        <unit.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white uppercase tracking-wider">{unit.label}</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-1">
                            <Gauge size={10} className="text-zinc-600" />
                            {unit.available.toLocaleString()} Tersedia
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center bg-zinc-950/80 rounded-2xl border border-zinc-800 overflow-hidden p-1 shadow-inner ring-1 ring-white/5">
                      <button 
                        onClick={() => handleUpdateQuantity(unit.id, -1, unit.available)}
                        disabled={!selection[unit.id]}
                        className="p-2.5 text-zinc-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <Minus size={18} />
                      </button>
                      
                      <div className="w-16 flex flex-col items-center">
                        <input 
                          type="number"
                          value={selection[unit.id] || 0}
                          onChange={(e) => handleUpdateQuantity(unit.id, parseInt(e.target.value) - (selection[unit.id] || 0), unit.available)}
                          className="w-full text-center bg-transparent text-white font-black text-lg outline-none selection:bg-red-500/30"
                        />
                      </div>

                      <button 
                        onClick={() => handleUpdateQuantity(unit.id, 1, unit.available)}
                        disabled={(selection[unit.id] || 0) >= unit.available}
                        className="p-2.5 text-zinc-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Range Slider for quick select */}
                  {unit.available > 0 && (
                    <div className="mt-4 px-1">
                      <input 
                        type="range"
                        min="0"
                        max={unit.available}
                        value={selection[unit.id] || 0}
                        onChange={(e) => setSelection(prev => ({ ...prev, [unit.id]: parseInt(e.target.value) }))}
                        className="w-full h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-red-600 hover:accent-red-500 transition-all opacity-50 hover:opacity-100"
                      />
                    </div>
                  )}

                  {/* Progress Bar background */}
                  {selection[unit.id] > 0 && (
                    <div className="absolute inset-0 bg-red-600/[0.03] transition-all pointer-events-none" style={{ 
                      width: `${((selection[unit.id] || 0) / (unit.available || 1)) * 100}%` 
                    }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Analysis */}
          <div className="w-96 border-l border-zinc-800/50 p-8 bg-zinc-950 flex flex-col gap-8">
            <div>
              <h3 className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                <Crosshair size={14} className="text-red-500" />
                Force Analysis
              </h3>
              
              <div className="space-y-4">
                 {[
                   { label: "Kekuatan Darat", value: currentPower.darat, icon: Truck, color: "text-orange-500", bg: "rgba(249,115,22,0.1)" },
                   { label: "Kekuatan Laut", value: currentPower.laut, icon: Anchor, color: "text-blue-500", bg: "rgba(59,130,246,0.1)" },
                   { label: "Kekuatan Udara", value: currentPower.udara, icon: Plane, color: "text-violet-500", bg: "rgba(139,92,246,0.1)" }
                 ].map((stat) => (
                   <div key={stat.label} className="p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col gap-1 overflow-hidden relative group">
                     <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <stat.icon size={40} />
                     </div>
                     <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                     <span className={`text-xl font-black ${stat.color} tracking-tighter`}>{stat.value.toLocaleString("id-ID")}</span>
                   </div>
                 ))}

                 <div className="pt-4 border-t border-zinc-800/50">
                    <div className="p-6 rounded-3xl bg-red-600/10 border border-red-500/20 flex flex-col gap-1 shadow-[0_0_30px_rgba(239,68,68,0.05)]">
                      <span className="text-[10px] font-black text-red-500/70 uppercase tracking-widest">Total Strike Power</span>
                      <span className="text-4xl font-black text-red-500 tracking-tighter italic">
                        {currentPower.total.toLocaleString("id-ID")}
                      </span>
                      <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest mt-1">Estimated Combat Effectiveness</span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-end gap-3">
              <button 
                onClick={onClose}
                className="w-full py-4 rounded-2xl border border-zinc-800 text-zinc-500 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-zinc-900 transition-all active:scale-95"
              >
                Batalkan & Kembali
              </button>
              <button 
                disabled={currentPower.total === 0}
                onClick={handleStartOperation}
                className="w-full py-5 rounded-2xl bg-red-600 hover:bg-red-500 disabled:bg-zinc-900 disabled:text-zinc-700 disabled:cursor-not-allowed text-white font-black uppercase text-xs tracking-[0.4em] shadow-[0_10px_25px_rgba(220,38,38,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                MULAI OPERASI
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
