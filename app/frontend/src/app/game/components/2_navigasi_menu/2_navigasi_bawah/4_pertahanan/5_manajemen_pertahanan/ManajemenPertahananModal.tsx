"use client"

import { useState, useEffect, Fragment } from "react";
import { X, Wrench, Zap, Shield, Truck, MapPin, Gavel, TowerControl, Ship, Rocket, Activity, TrendingUp, TrendingDown, Clock, Loader2, Eye, EyeOff, Building, Archive, Info, Briefcase, Users, Flame, Landmark, ShieldAlert } from "lucide-react"
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, DASHBOARD_LABELS, KAPASITAS_LISTRIK_METADATA, KONSUMSI_PERTAHANAN, KONSUMSI_STRATEGIC } from "@/app/database/data/semua_fitur_negara";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { formatGameDate, addDays, getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { calculateConstructionProgress, getStatusText } from "@/app/game/data/construction/constructionLogic";
import { countries } from "@/app/database/data/negara/benua/index";
import NavigasiWaktu from "../../2_ekonomi/1-perdagangan/NavigasiWaktu";
import MaterialRequirement from "../../3_pembangunan/1-produksi/MaterialRequirement";
import { pertahananRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan";
import { militaryAidStorage, MILITARY_KEY_MAP } from "../../../../map-system/modals_detail_negara/4_bantuan_dan_kerjasama/1_beri_tentara/logic/militaryAidStorage";
import { playerMilitaryStorage } from "../../../../map-system/modals_detail_negara/4_bantuan_dan_kerjasama/1_beri_tentara/logic/playerMilitaryStorage";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ManajemenPertahananModal({ isOpen, onClose }: ModalProps) {
  const [activeConstructions, setActiveConstructions] = useState<any[]>([]);
  const [showQueue, setShowQueue] = useState(false);
  const [collapsedSectors, setCollapsedSectors] = useState<Set<string>>(new Set());
  const [confirmBuild, setConfirmBuild] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [tick, setTick] = useState(0);

  const session = gameStorage.getSession();
  const currentCountryCode = session?.country || "Indonesia";
  const currentData = countries.find((c: any) =>
    c.name_id === currentCountryCode ||
    c.name_en === currentCountryCode ||
    (c.id && c.id === currentCountryCode)
  ) || countries[0];

  // Sync queue data whenever tick or modal opens
  useEffect(() => {
    if (!isOpen) return;
    const queue = buildingStorage.getQueue();
    setActiveConstructions(queue);
  }, [tick, isOpen]);

  // Polling for progress updates and completion
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      try {
        const queueToProcess = buildingStorage.getQueue();
        if (!queueToProcess || !Array.isArray(queueToProcess)) return;

        const nowTime = getStoredGameDate().getTime();
        const itemsToFinish = queueToProcess.filter(item => item && typeof item.endDate === 'number' && nowTime >= item.endDate);

        if (itemsToFinish.length > 0) {
          itemsToFinish.forEach(finishItem => {
            if (finishItem.buildingKey) {
              buildingStorage.incrementBuildingCount(finishItem.buildingKey);
              buildingStorage.removeFromQueue(finishItem.id);
            }
          });
          window.dispatchEvent(new Event('building_storage_updated'));
        }
        setTick(t => t + 1);
      } catch (err) {
        console.error("DEBUG: Defense Mgmt poll error", err);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen || !currentData) return null;

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas;

  // 2. Logic Sinkronisasi Listrik Nasional (dengan Deltas)
  const currentDataWithDeltas = JSON.parse(JSON.stringify(currentData));
  Object.entries(buildingDeltas).forEach(([key, deltaValue]) => {
    if (typeof deltaValue !== 'number') return;
    
    // Sektor Listrik
    if (KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA]) {
      const dataKey = KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA].dataKey;
      (currentDataWithDeltas.sektor_listrik as any)[dataKey] = ((currentDataWithDeltas.sektor_listrik as any)[dataKey] || 0) + deltaValue;
    }
  });

  const totalPasokan = hitungTotalKapasitas(currentDataWithDeltas.sektor_listrik);
  const totalBeban = hitungTotalKonsumsiNasional(currentDataWithDeltas);
  const surplus = totalPasokan - totalBeban;

  const toggleSector = (id: string) => {
    setCollapsedSectors(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handles = {
    handleBuildRequest: (item: any) => {
      setConfirmBuild(item);
      setQuantity(1);
    },
    handleConfirmBuild: () => {
      if (!confirmBuild) return;
      try {
        let currentStart = getStoredGameDate().getTime();
        const itemsToAdd: any[] = [];
        for (let i = 0; i < quantity; i++) {
          const currentEnd = addDays(new Date(currentStart), confirmBuild.buildTime).getTime();
          const newItem = buildingStorage.addToQueue({
            buildingKey: confirmBuild.key,
            label: confirmBuild.label,
            sector: confirmBuild.groupId,
            startDate: currentStart,
            endDate: currentEnd,
            buildTime: confirmBuild.buildTime
          });
          if (newItem) itemsToAdd.push(newItem);
          currentStart = currentEnd;
        }
        if (itemsToAdd.length > 0) setActiveConstructions(prev => [...prev, ...itemsToAdd]);
        setConfirmBuild(null);
        setQuantity(1);
      } catch (err) {
        console.error("DEBUG: Defense Mgmt build error", err);
      }
    }
  };

  const getMilitaryIcon = (key: string) => {
    switch (key) {
      case "penjara": return Gavel;
      case "gudang_senjata": return Archive;
      case "hangar_tank": return Truck;
      case "akademi_militer": return Landmark;
      case "pusat_komando": return TowerControl;
      case "pangkalan_udara": return MapPin;
      case "pangkalan_laut": return Ship;
      case "program_luar_angkasa": return Rocket;
      case "cyber_shield": return ShieldAlert;
      default: return Shield;
    }
  };

  const militaryGroups = [
    {
      id: "pertahanan_alutsista",
      title: "Manajemen Infrastruktur Pertahanan",
      icon: Shield,
      color: "text-red-500",
      items: Object.entries(pertahananRate).map(([key, val]: [string, any]) => ({
        key,
        groupId: "pertahanan",
        label: val.label,
        icon: getMilitaryIcon(val.key),
        desc: val.deskripsi,
        cost: val.biaya_pembangunan,
        buildTime: val.waktu_pembangunan,
        maintenanceCost: val.maintenanceCost,
        lowongan_kerja: val.lowongan_kerja,
        dataKey: val.dataKey,
        count: Number(currentData.sektor_pertahanan?.[val.dataKey as keyof typeof currentData.sektor_pertahanan] || 0) + ((buildingDeltas[key] as number) || 0),
        consumption: val.konsumsi_listrik || 0
      }))
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-xl">
              <Shield className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Manajemen Pertahanan</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Defense Infrastructure</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowQueue(true)} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group flex items-center gap-2 relative shadow-[0_0_15px_rgba(8,145,178,0.1)] active:scale-95">
              <Clock className="h-6 w-6 text-cyan-500 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              {activeConstructions.length > 0 && <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-zinc-950 shadow-lg animate-in zoom-in">{activeConstructions.length}</span>}
            </button>
            <NavigasiWaktu />
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dashboard Summary Listrik (Nasional) */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 group hover:bg-zinc-900 transition-colors">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Zap className="h-6 w-6 text-cyan-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.supply.title}</p>
                <p className="text-xl font-black text-white leading-tight">{totalPasokan.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 group hover:bg-zinc-900 transition-colors">
              <div className="p-3 bg-rose-500/10 rounded-xl">
                <Activity className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.usage.title}</p>
                <p className="text-xl font-black text-white leading-tight">{totalBeban.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden group hover:bg-zinc-900 transition-colors">
              <div className={`p-3 rounded-xl ${surplus >= 0 ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>
                {surplus >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-500" />}
              </div>
              <div className="relative z-10">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.balance.title}</p>
                <p className={`text-xl font-black leading-tight ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                  {surplus.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="space-y-12">
            {militaryGroups.map((group) => (
              <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3 mb-5 px-1">
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}><group.icon className={`h-4 w-4 ${group.color}`} /></div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title} <span className="text-cyan-400 ml-3 font-black lowercase italic text-xs tracking-normal bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">({group.items.length} Bangunan)</span></h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
                  <button onClick={() => toggleSector(group.id)} className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95">
                    {collapsedSectors.has(group.id) ? <EyeOff size={16} /> : <Eye size={16} className="text-cyan-400" />}
                  </button>
                </div>
                <div className={`grid transition-all duration-700 ease-in-out ${!collapsedSectors.has(group.id) ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-visible">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 pb-4 pt-10">
                      {group.items.map((item: any, idx: number) => {
                        const currentConstruction = activeConstructions?.find(c => c && c.buildingKey === item.key);
                        return (
                          <BuildingCard
                            key={item.key || idx}
                            item={item}
                            onBuild={handles.handleBuildRequest}
                            construction={currentConstruction}
                            currentData={currentData}
                            buildingDeltas={buildingDeltas}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confirmation Modal */}
        {confirmBuild && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] w-full max-w-lg p-8 shadow-2xl scale-in-center animate-in zoom-in duration-300 flex flex-col relative overflow-hidden">
              
              {/* Decorative Header Icon */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
              
              <div className="flex flex-col items-center text-center mb-8 relative z-10">
                <div className="p-5 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4 shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:scale-110 transition-transform">
                  <confirmBuild.icon className="h-10 w-10 text-cyan-500" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tight">Konfirmasi Bangun?</h3>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] mt-1 italic">
                  Anda akan membangun <span className="text-cyan-400 border-b border-cyan-500/30">{confirmBuild.label}</span> untuk infrastruktur pertahanan.
                </p>
              </div>

              <div className="space-y-6 relative z-10 flex-1 overflow-y-auto no-scrollbar pr-1">
                {/* Stats Grid - 3 Columns */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-3xl p-5 flex flex-col items-center gap-1.5 group hover:bg-zinc-900/50 transition-colors">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">Biaya Total</span>
                    <span className="text-2xl font-black text-amber-500 tracking-tight leading-none overflow-hidden text-ellipsis w-full text-center">
                      {(confirmBuild.cost * quantity).toLocaleString('id-ID')}
                    </span>
                  </div>
                  
                  <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-3xl p-5 flex flex-col items-center gap-1.5 group hover:bg-zinc-900/50 transition-colors">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">Waktu Total</span>
                    <div className="flex items-center gap-2">
                       <Clock size={16} className="text-cyan-500" />
                       <span className="text-2xl font-black text-white tracking-tight leading-none">
                        {confirmBuild.buildTime * quantity}<span className="text-xs text-zinc-500 font-bold uppercase ml-1">Hari</span>
                       </span>
                    </div>
                  </div>

                  <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-3xl p-5 flex flex-col items-center gap-1.5 group hover:bg-zinc-900/50 transition-colors">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">Konsumsi Energi</span>
                    <div className="flex items-center gap-2">
                      <Zap size={14} className="text-rose-500 fill-rose-500/20" />
                      <span className="text-2xl font-black text-rose-500 tracking-tight leading-none overflow-hidden text-ellipsis w-full text-center">
                        {(confirmBuild.consumption * quantity).toLocaleString('id-ID')} <span className="text-[10px] font-bold">MW</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Material Requirements Grid Component */}
                <MaterialRequirement buildingKey={confirmBuild.key} quantity={quantity} />

                {/* Quantity Input Section - Full Width Bar */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between px-1">
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic">Jumlah Unit Pembangunan</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 p-2.5 bg-zinc-950/80 rounded-[28px] border border-zinc-800/80 shadow-inner">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                            className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 active:scale-90 transition-all flex items-center justify-center font-black text-2xl shadow-xl cursor-pointer"
                        >
                            -
                        </button>
                        
                        <div className="flex flex-col items-center flex-1">
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-black text-white tracking-tighter">{quantity}</span>
                                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Unit</span>
                            </div>
                        </div>

                        <button 
                            onClick={() => setQuantity(quantity + 1)} 
                            className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:bg-cyan-500/10 active:scale-90 transition-all flex items-center justify-center font-black text-2xl shadow-xl cursor-pointer"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Estimation Date Badge */}
                <div className="text-center">
                    <p className="text-[11px] font-black text-cyan-500 italic">
                        Selesai Bertahap S/D: {formatGameDate(addDays(getStoredGameDate(), confirmBuild.buildTime * quantity))}
                    </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-2 bg-zinc-900">
                <button 
                    onClick={() => setConfirmBuild(null)} 
                    className="py-5 rounded-3xl border border-zinc-800 text-zinc-500 font-black uppercase text-xs tracking-[0.2em] hover:bg-zinc-800 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
                >
                    Batal
                </button>
                <button 
                    onClick={handles.handleConfirmBuild} 
                    className="py-5 rounded-3xl bg-cyan-600 text-white font-black uppercase text-xs tracking-[0.2em] shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:bg-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all cursor-pointer active:scale-95 border border-cyan-400/20"
                >
                    Bangun Sekarang
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Queue Drawer */}
        <div className={`absolute top-0 right-0 bottom-0 w-80 bg-zinc-950 border-l border-zinc-800 z-[110] transform transition-transform duration-500 ease-in-out shadow-2xl ${showQueue ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-2"><Clock size={16} className="text-cyan-500" /><h3 className="text-sm font-black text-white uppercase tracking-widest">Antrean Pembangunan</h3></div>
               <button onClick={() => setShowQueue(false)} className="p-2 hover:bg-zinc-900 rounded-lg text-zinc-500"><X size={16} /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar">
               {activeConstructions.length === 0 ? (
                 <div className="flex flex-col items-center justify-center h-40 opacity-20 text-center"><Building size={40} className="mb-4" /><p className="text-[10px] font-black uppercase tracking-widest">Tidak ada antrean</p></div>
               ) : (
                 activeConstructions.map((item, idx) => {
                   const progress = calculateConstructionProgress(item.startDate, item.endDate, getStoredGameDate().getTime());
                   return (
                     <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 space-y-3">
                        <div className="flex justify-between items-center relative z-10"><h4 className="text-xs font-black text-white">{item.label}</h4><span className="text-[10px] font-bold text-cyan-400">{progress.percentage}%</span></div>
                        <div className="h-1.5 w-full bg-zinc-950 rounded-full mt-2 overflow-hidden border border-zinc-800/50"><div className={`h-full ${progress.colorClass}`} style={{ width: `${progress.percentage}%` }} /></div>
                     </div>
                   );
                 })
               )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BuildingCard({ item, onBuild, construction, currentData, buildingDeltas }: any) {
  const [activeDetail, setActiveDetail] = useState<"operasional" | "kapasitas" | null>(null);
  const currentDate = getStoredGameDate().getTime();
  const progress = construction ? calculateConstructionProgress(construction.startDate, construction.endDate, currentDate) : null;

  // LOGIKA SINKRONISASI MBT UNTUK DETAIL HANGAR
  const playerDeductions = playerMilitaryStorage.getDeductions();

  const diffTime = Math.abs(currentDate - INITIAL_GAME_DATE.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const sixMonthIndex = Math.floor(diffDays / 180);
  const nextUpdateMs = INITIAL_GAME_DATE.getTime() + (sixMonthIndex + 1) * 180 * 24 * 60 * 60 * 1000;
  const nextUpdateDate = new Date(nextUpdateMs);
  const nextDateStr = `${nextUpdateDate.getDate().toString().padStart(2, '0')}-${(nextUpdateDate.getMonth() + 1).toString().padStart(2, '0')}-${nextUpdateDate.getFullYear()}`;
  const seed = (sixMonthIndex + (item.label?.length || 0)) % 100;
  const occupancyPercentage = 0.65 + (seed % 30) / 100;
  const totalVacancies = (item.lowongan_kerja || 0) * (item.count || 0);
  const filledVacancies = Math.floor(totalVacancies * occupancyPercentage);

  // LOGIKA PELAPORAN UNIT GLOBAL
  const UNIT_LABELS: Record<string, string> = {
    tank: "Main Battle Tank",
    apc: "APC / IFV",
    tactical: "Kendaraan Taktis",
    artileri: "Artileri Berat",
    rocket: "MLRS Rocket",
    sam: "Mobile SAM",
    stealth_jet: "Jet Stealth",
    interceptor: "Jet Interceptor",
    bomber: "Pesawat Pengebom",
    heli_attack: "Heli Serang",
    recon_plane: "Pesawat Intai",
    uav: "Drone UAV",
    kamikaze: "Drone Kamikaze",
    transport: "Pesawat Angkut",
    carrier: "Kapal Induk Konvensional",
    destroyer: "Kapal Destroyer",
    corvette: "Kapal Korvet",
    submarine: "Kapal Selam Nuklir",
    reg_sub: "Kapal Selam Reguler",
    mine_ship: "Kapal Ranjau",
    logistics: "Kapal Logistik"
  };

  const STORAGE_MAP: Record<string, { units: string[], label: string, ratio: Record<string, number> }> = {
    hangar_tank: { 
      units: ["tank", "apc", "tactical"], 
      label: "Armada Lapis Baja",
      ratio: { tank: 50, apc: 100, tactical: 200 }
    },
    gudang_senjata: { 
      units: ["artileri", "rocket", "sam"], 
      label: "Sistem Senjata Berat",
      ratio: { artileri: 50, rocket: 30, sam: 20 }
    },
    pangkalan_udara: { 
      units: ["stealth_jet", "interceptor", "bomber", "heli_attack", "recon_plane", "uav", "kamikaze", "transport"], 
      label: "Armada Udara",
      ratio: { stealth_jet: 50, interceptor: 50, bomber: 50, heli_attack: 50, recon_plane: 50, uav: 50, kamikaze: 50, transport: 50 }
    },
    pangkalan_laut: { 
      units: ["carrier", "destroyer", "corvette", "submarine", "reg_sub", "mine_ship", "logistics"], 
      label: "Armada Laut",
      ratio: { carrier: 20, destroyer: 20, corvette: 20, submarine: 20, reg_sub: 20, mine_ship: 20, logistics: 20 }
    },
  };

  const storageInfo = STORAGE_MAP[item.dataKey];

  const getEffectiveUnitCount = (uKey: string, groupId: string, dbKey: string) => {
     const base = (currentData.armada_militer as any)[groupId]?.[dbKey] || (currentData.armada_militer as any)[dbKey] || 0;
     const delta = (buildingStorage.getData().buildingDeltas[uKey] as number) || 0;
     const deduction = playerDeductions[uKey] || 0;
     return (typeof base === 'number' ? base : 0) + delta - deduction;
  };

  return (
    <div className={`bg-zinc-900/40 border ${progress ? 'border-cyan-500/30 bg-cyan-900/5' : 'border-zinc-800/60'} p-4 rounded-2xl transition-all group flex flex-col gap-3 relative h-full min-h-[380px]`}>
      {progress && (
        <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000 rounded-2xl" style={{ width: `${progress.percentage}%` }} />
      )}

      {activeDetail && (
        <div className="absolute inset-0 z-50 bg-zinc-950/98 backdrop-blur-md p-6 flex flex-col animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl border ${activeDetail === 'operasional' ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]' : 'bg-amber-500/10 border-amber-500/20 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]'}`}>
                {activeDetail === 'operasional' ? <Activity size={18} /> : <Archive size={18} />}
              </div>
              <div>
                 <h5 className="text-[14px] font-black text-white uppercase tracking-wider italic">
                    {activeDetail === 'operasional' ? 'Detail Operasional' : 'Detail Kapasitas'}
                 </h5>
                 <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none mt-0.5">
                    {activeDetail === 'operasional' ? 'Spesifikasi & Biaya' : 'Logistik Armada'}
                 </p>
              </div>
            </div>
            <button onClick={() => setActiveDetail(null)} className="p-2.5 hover:bg-zinc-800/80 rounded-xl text-zinc-500 hover:text-white transition-all cursor-pointer border border-transparent hover:border-zinc-700">
               <X size={20} />
            </button>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto no-scrollbar pr-1">
             <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/30">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] opacity-60">Nama Bangunan</span>
                <h4 className="text-xl font-black text-amber-400 uppercase italic leading-tight tracking-tight">{item.label}</h4>
             </div>

             {activeDetail === 'operasional' ? (
                <div className="grid gap-2">
                   <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                      <div className="flex items-center gap-2.5">
                         <div className="p-1.5 bg-rose-500/10 rounded-lg text-rose-400"><Flame size={12} /></div>
                         <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Pemeliharaan</span>
                      </div>
                      <span className="text-[14px] font-black text-rose-400">-{item.maintenanceCost?.toLocaleString('id-ID') || 5} <span className="text-[9px] text-rose-500/50 italic opacity-80">/ HARI</span></span>
                   </div>

                   {item.consumption > 0 && (
                      <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                         <div className="flex items-center gap-2.5">
                            <div className="p-1.5 bg-amber-500/10 rounded-lg text-amber-500"><Zap size={12} /></div>
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Beban Energi</span>
                         </div>
                         <span className="text-[14px] font-black text-amber-500">{item.consumption?.toLocaleString('id-ID')} MW</span>
                      </div>
                   )}

                   {item.lowongan_kerja > 0 && (
                      <>
                         <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                            <div className="flex items-center gap-2.5">
                               <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400">
                                  <Users size={12} />
                               </div>
                               <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Lowongan</span>
                            </div>
                            <span className="text-[14px] font-black text-blue-400">+{(item.lowongan_kerja || 0).toLocaleString('id-ID')} <span className="text-[9px] text-blue-500/50 italic opacity-80">/ UNIT</span></span>
                         </div>

                         <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                            <div className="flex items-center gap-2.5">
                               <div className="p-1.5 bg-cyan-500/10 rounded-lg text-cyan-500">
                                  <Briefcase size={12} />
                               </div>
                               <div className="flex items-center gap-1.5">
                                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Okupansi</span>
                               </div>
                            </div>
                            <div className="flex flex-col items-end">
                               <span className="text-[14px] font-black text-cyan-400">{filledVacancies.toLocaleString('id-ID')} <span className="text-[9px] text-zinc-400">/ {totalVacancies.toLocaleString('id-ID')}</span></span>
                               <span className="text-[8px] font-black text-cyan-500 uppercase tracking-widest leading-none italic opacity-90">UPDATE: {nextDateStr}</span>
                            </div>
                         </div>
                      </>
                   )}
                </div>
             ) : (
                <div className="grid gap-2">
                   {storageInfo && (
                      <div className="flex flex-col gap-3 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                         <div className="flex items-center justify-between border-b border-amber-500/10 pb-2 mb-1">
                            <div className="flex items-center gap-2.5">
                               <div className="p-1.5 bg-amber-500/10 rounded-lg text-amber-500">
                                  <Archive size={12} />
                               </div>
                               <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">{storageInfo.label}</span>
                            </div>
                            <span className="text-[10px] font-bold text-zinc-500 uppercase italic">Kapasitas Unit</span>
                         </div>
                         
                         <div className="space-y-3">
                            {storageInfo.units.map(uKey => {
                               const dbKey = Object.entries(MILITARY_KEY_MAP).find(([_, short]) => short === uKey)?.[0] || uKey;
                               const groupId = ["tank", "apc", "tactical", "artileri", "rocket", "sam"].includes(uKey) ? "darat" : 
                                              ["carrier", "destroyer", "corvette", "submarine", "reg_sub", "mine_ship", "logistics"].includes(uKey) ? "laut" : "udara";
                               
                               const totalUnitCount = getEffectiveUnitCount(uKey, groupId, dbKey);
                               const maxCapacity = (item.count || 0) * (storageInfo.ratio[uKey] || 1);
                               const usagePrc = maxCapacity > 0 ? Math.min(100, Math.round((totalUnitCount / maxCapacity) * 100)) : 0;

                               return (
                                  <div key={uKey} className="space-y-1.5">
                                     <div className="flex justify-between items-center text-[10px]">
                                        <span className="font-bold text-zinc-300">{UNIT_LABELS[uKey] || uKey}</span>
                                        <span className={`font-black ${totalUnitCount >= maxCapacity ? 'text-rose-500' : 'text-amber-400'}`}>
                                           {totalUnitCount.toLocaleString('id-ID')} / {maxCapacity.toLocaleString('id-ID')}
                                        </span>
                                     </div>
                                     <div className="h-1 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/30">
                                        <div 
                                           className={`h-full transition-all duration-700 ${totalUnitCount >= maxCapacity ? 'bg-rose-500' : 'bg-amber-500/60'}`}
                                           style={{ width: `${usagePrc}%` }}
                                        />
                                     </div>
                                  </div>
                               );
                            })}
                         </div>
                      </div>
                   )}
                </div>
             )}
          </div>

          <button onClick={() => setActiveDetail(null)} className="mt-6 w-full py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-zinc-800 hover:text-white transition-all cursor-pointer active:scale-[0.98] shadow-lg">
             Kembali
          </button>
        </div>
      )}

      {/* Card header */}
      <div className="flex items-start justify-between relative z-10">
          <div className="flex gap-2">
            <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform relative">
               <item.icon className={`h-5 w-5 ${progress ? 'text-white' : 'text-cyan-500'} shadow-[0_0_10px_rgba(6,182,212,0.3)]`} />
            </div>

            {/* Tombol Operasional */}
            <div className="relative group/tooltip">
               <button
                  onClick={() => setActiveDetail(activeDetail === "operasional" ? null : "operasional")}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${activeDetail === "operasional" ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30'}`}
               >
                  <Activity size={16} />
               </button>
               <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-zinc-900 border border-zinc-700 rounded-lg whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-all z-50 shadow-2xl scale-95 group-hover/tooltip:scale-100">
                  <span className="text-[9px] font-black text-cyan-400 uppercase tracking-[0.2em]">Detail Operasional</span>
               </div>
            </div>

            {/* Tombol Kapasitas */}
            {storageInfo && (
               <div className="relative group/tooltip">
                  <button
                     onClick={() => setActiveDetail(activeDetail === "kapasitas" ? null : "kapasitas")}
                     className={`p-2.5 rounded-xl border transition-all cursor-pointer ${activeDetail === "kapasitas" ? 'bg-amber-500/20 border-amber-500/50 text-amber-400' : 'bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-amber-400 hover:border-amber-500/30'}`}
                  >
                     <Archive size={16} />
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-zinc-900 border border-zinc-700 rounded-lg whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-all z-50 shadow-2xl scale-95 group-hover/tooltip:scale-100">
                     <span className="text-[9px] font-black text-amber-500 uppercase tracking-[0.2em]">Detail Kapasitas</span>
                  </div>
               </div>
            )}
         </div>
         <div className="flex flex-col items-end gap-1">
            <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
               Infra Pertahanan
            </div>
            <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.2)]">
               Terbangun: {item.count.toLocaleString('id-ID')} Unit {item.consumption > 0 && `(${(item.count * item.consumption).toLocaleString('id-ID')} MW)`}
            </div>
         </div>
      </div>

      {/* Card body */}
      <div className="flex-1 flex flex-col relative z-10 mt-1">
         <h4 className="text-[17px] font-black text-zinc-100 tracking-tight group-hover:text-amber-400 transition-colors uppercase italic leading-tight mb-3">
            {item.label}
         </h4>

            <div className="flex flex-col gap-2">
               <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-rose-500/10 rounded-lg">
                     <Zap size={12} className="text-rose-500/90" />
                  </div>
                  <span className="text-[12px] font-bold text-rose-500/80">
                     Konsumsi: {item.consumption?.toLocaleString('id-ID')} MW/bangunan
                  </span>
               </div>
               <div className="flex items-center gap-2.5 ml-1 border-l-2 border-rose-500/10 pl-3">
                  <div className="p-1.5 bg-rose-500/5 rounded-lg">
                     <Activity size={12} className="text-rose-400/70" />
                  </div>
                  <span className="text-[11px] font-bold text-rose-400/70 uppercase">
                     Total Konsumsi Listrik: {(item.count * item.consumption).toLocaleString('id-ID')} MW
                  </span>
               </div>
            </div>

            {item.dataKey === "hangar_tank" && (
               <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-cyan-500/10 rounded-lg">
                     <Truck size={12} className="text-cyan-400" />
                  </div>
                  <span className="text-[12px] font-bold text-cyan-400/90 italic">
                     Kapasitas: 50 Main Battle Tank/unit
                  </span>
               </div>
            )}

            {item.lowongan_kerja > 0 && (
               <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg">
                     <Users size={12} className="text-blue-400" />
                  </div>
                  <span className="text-[12px] font-bold text-blue-400/80">
                     Lowongan: {(item.lowongan_kerja || 0).toLocaleString('id-ID')} Jiwa/unit
                  </span>
               </div>
            )}

            {!progress && (
               <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-zinc-800/50 rounded-lg">
                     <Clock size={12} className="text-zinc-500" />
                  </div>
                  <span className="text-[11px] font-bold text-zinc-500 italic">Waktu: {item.buildTime} Hari</span>
               </div>
            )}
         </div>

      {/* Build button / progress */}
      <div className="mt-auto pt-4 relative z-10">
         {progress ? (
            <div className="space-y-3 bg-zinc-950/50 p-3 rounded-2xl border border-zinc-800/50">
               <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  <span className="flex items-center gap-1.5">
                     <Loader2 size={12} className={`animate-spin ${progress.isWaiting ? 'text-zinc-600' : 'text-cyan-400'}`} />
                     {getStatusText(progress.percentage, progress.isWaiting)}
                  </span>
                  <span className={progress.colorClass.replace('bg-', 'text-')}>{progress.percentage}%</span>
               </div>
               <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/30 p-0.5">
                  <div
                     className={`h-full transition-all duration-1000 ${progress.colorClass} rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)]`}
                     style={{ width: `${progress.percentage}%` }}
                  />
               </div>
               <div className="flex justify-between items-center text-[9px] font-bold text-zinc-500 uppercase tracking-tighter italic opacity-70">
                  <span className="flex items-center gap-1"><Clock size={10} /> ESTIMASI:</span>
                  <span className="text-zinc-400">{formatGameDate(new Date(construction.endDate))}</span>
               </div>
            </div>
         ) : (
            <div className="flex items-center justify-between gap-4">
               <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none">Biaya Akuisisi</span>
                  <span className="text-sm font-black text-zinc-400 tracking-tight mt-1">{item.cost?.toLocaleString('id-ID')}</span>
               </div>
               <button
                  onClick={(e) => { e.stopPropagation(); onBuild(item); }}
                  className="flex-1 py-3.5 rounded-2xl bg-cyan-600 text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(8,145,178,0.4)] transition-all cursor-pointer active:scale-95 border border-cyan-400/20"
               >
                  Bangun
               </button>
            </div>
         )}
      </div>
    </div>
  )
}
