"use client"

import { useState, useEffect, Fragment } from "react";
import { X, Wrench, Zap, Home, Users, Activity, TrendingUp, TrendingDown, Clock, Loader2, Coins, Landmark, Building2, Info, Hammer, TreePine, Layers, AlertTriangle } from "lucide-react"
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { formatGameDate, addDays, getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { calculateConstructionProgress, getStatusText } from "@/app/game/data/construction/constructionLogic";
import { countries } from "@/app/database/data/negara/benua/index";
import { hunianRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import JikaUangKurang from "../jika_uang_kurang";
import { getBuildingRequirement, MaterialRequirement } from "../1-produksi/MaterialRequirement";
import { aiThinkingStorage } from "@/app/game/components/AI_logic/global_event/aiThinkingStorage";
import { Brain } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HunianPermukimanModal({ isOpen, onClose }: ModalProps) {
  const [confirmBuild, setConfirmBuild] = useState<any | null>(null);
  const [tick, setTick] = useState(0);
  const [activeConstructions, setActiveConstructions] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [showQueue, setShowQueue] = useState(false);
  const [isInsufficientFundsModalOpen, setIsInsufficientFundsModalOpen] = useState(false);
  const [missingMaterialsData, setMissingMaterialsData] = useState<any[]>([]);
  const [requiredAmount, setRequiredAmount] = useState(0);
  const [population, setPopulation] = useState(() => populationStorage.getPopulation());

  useEffect(() => {
    const handleUpdate = () => {
      setPopulation(populationStorage.getPopulation());
    };
    window.addEventListener("population_updated", handleUpdate);
    return () => window.removeEventListener("population_updated", handleUpdate);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const queue = buildingStorage.getQueue();
    setActiveConstructions(queue);
  }, [tick, confirmBuild, isOpen]);

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
        console.error("DEBUG: Interval error", err);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const session = gameStorage.getSession();
  const currentCountryCode = session?.country || "Indonesia";
  const currentData = countries.find((c: any) =>
    c.name_id === currentCountryCode ||
    c.name_en === currentCountryCode ||
    (c.id && c.id === currentCountryCode)
  ) || countries[79];

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas;

  // Calculate current housing stats
  const totalSubsidi = (currentData.hunian?.rumah_subsidi || 0) + (buildingDeltas['rumah_subsidi'] || 0);
  const totalApartemen = (currentData.hunian?.apartemen || 0) + (buildingDeltas['apartemen'] || 0);
  const totalMansion = (currentData.hunian?.mansion || 0) + (buildingDeltas['mansion'] || 0);

  const totalHousingCapacity = (totalSubsidi * (hunianRate.rumah_subsidi.kapasitas)) +
                                (totalApartemen * (hunianRate.apartemen.kapasitas)) +
                                (totalMansion * (hunianRate.mansion.kapasitas));
                                
  const isHousingShortage = totalHousingCapacity < population;
  
  const demandSubsidi = population > 0 ? Math.min(100, Math.max(0, (1 - (totalSubsidi * hunianRate.rumah_subsidi.kapasitas) / (population * 0.7))) * 100) : 0;
  const demandApartemen = population > 0 ? Math.min(100, Math.max(0, (1 - (totalApartemen * hunianRate.apartemen.kapasitas) / (population * 0.25))) * 100) : 0;
  const demandMansion = population > 0 ? Math.min(100, Math.max(0, (1 - (totalMansion * hunianRate.mansion.kapasitas) / (population * 0.05))) * 100) : 0;

  const hunianGroups = [
    {
      id: "hunian_nasional",
      title: "1. Sektor Hunian & Pemukiman Nasional (3 jenis)",
      icon: Home,
      color: "text-amber-400",
      items: [
        { ...hunianRate.rumah_subsidi, key: "rumah_subsidi", groupId: "hunian", label: hunianRate.rumah_subsidi.label, icon: Home, deskripsi: "Residensial", tarif: 1, unit: "Unit", cost: hunianRate.rumah_subsidi.biaya_pembangunan, biaya_pembangunan: hunianRate.rumah_subsidi.biaya_pembangunan, waktu_pembangunan: hunianRate.rumah_subsidi.waktu_pembangunan, count: totalSubsidi, consumption: hunianRate.rumah_subsidi.konsumsi_listrik, konsumsi_listrik: hunianRate.rumah_subsidi.konsumsi_listrik, kapasitas: hunianRate.rumah_subsidi.kapasitas },
        { ...hunianRate.apartemen, key: "apartemen", groupId: "hunian", label: hunianRate.apartemen.label, icon: Building2, deskripsi: "Residensial", tarif: 1, unit: "Unit", cost: hunianRate.apartemen.biaya_pembangunan, biaya_pembangunan: hunianRate.apartemen.biaya_pembangunan, waktu_pembangunan: hunianRate.apartemen.waktu_pembangunan, count: totalApartemen, consumption: hunianRate.apartemen.konsumsi_listrik, konsumsi_listrik: hunianRate.apartemen.konsumsi_listrik, kapasitas: hunianRate.apartemen.kapasitas },
        { ...hunianRate.mansion, key: "mansion", groupId: "hunian", label: hunianRate.mansion.label, icon: Landmark, deskripsi: "Residensial", tarif: 1, unit: "Unit", cost: hunianRate.mansion.biaya_pembangunan, biaya_pembangunan: hunianRate.mansion.biaya_pembangunan, waktu_pembangunan: hunianRate.mansion.waktu_pembangunan, count: totalMansion, consumption: hunianRate.mansion.konsumsi_listrik, konsumsi_listrik: hunianRate.mansion.konsumsi_listrik, kapasitas: hunianRate.mansion.kapasitas },
      ]
    }
  ];

  const handleBuildRequest = (item: any) => {
    setConfirmBuild(item);
    setQuantity(1);
  };

  const handleConfirmBuild = () => {
    if (!confirmBuild) return;
    try {
      const unitCost = Number(confirmBuild.biaya_pembangunan || 0);
      const buildQuantity = Number(quantity || 1);
      const totalCost = unitCost * buildQuantity;
      const currentBalance = Number(budgetStorage.getBudget() || 0);
      const isMoneyShort = currentBalance < totalCost;

      const requirements = getBuildingRequirement(confirmBuild.key);
      const cumulativeStock = budgetStorage.getCumulativeProduction();
      const missing: any[] = [];

      const checkMaterial = (label: string, req: number, stock: number, icon: any) => {
        const totalReq = req * quantity;
        if (stock < totalReq) {
          missing.push({ label, required: totalReq, current: stock, icon });
        }
      };

      checkMaterial("Beton", requirements.beton, cumulativeStock["5_pabrik_semen"] || 0, Layers);
      checkMaterial("Baja", requirements.baja, cumulativeStock["12_tambang_bijih_besi"] || 0, Hammer);
      checkMaterial("Kayu", requirements.kayu, cumulativeStock["6_penggergajian_kayu"] || 0, TreePine);

      if (isMoneyShort || missing.length > 0) {
        setRequiredAmount(totalCost);
        setMissingMaterialsData(missing);
        setConfirmBuild(null);
        setIsInsufficientFundsModalOpen(true);
        return;
      }

      budgetStorage.updateBudget(-totalCost);
      let currentStart = getStoredGameDate().getTime();
      const itemsToAdd: any[] = [];
      for (let i = 0; i < quantity; i++) {
        const currentEnd = addDays(new Date(currentStart), confirmBuild.waktu_pembangunan).getTime();
        const newItem = buildingStorage.addToQueue({
          buildingKey: confirmBuild.key,
          label: confirmBuild.label,
          sector: confirmBuild.groupId,
          startDate: currentStart,
          endDate: currentEnd,
          waktu_pembangunan: confirmBuild.waktu_pembangunan
        });
        if (newItem) itemsToAdd.push(newItem);
        currentStart = currentEnd;
      }
      if (itemsToAdd.length > 0) setActiveConstructions(prev => [...prev, ...itemsToAdd]);
      setConfirmBuild(null);
      setQuantity(1);
    } catch (err) {
      console.error("DEBUG: Add to queue error", err);
    }
  };

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
        <JikaUangKurang 
          isOpen={isInsufficientFundsModalOpen}
          onClose={() => setIsInsufficientFundsModalOpen(false)}
          requiredAmount={requiredAmount}
          currentBalance={budgetStorage.getBudget()}
          missingMaterials={missingMaterialsData}
        />

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-xl">
              <Home className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Hunian Permukiman</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Housing & Residential Hub</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowQueue(true)} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group flex items-center gap-2 relative shadow-[0_0_15px_rgba(8,145,178,0.1)] active:scale-95">
              <Clock className="h-6 w-6 text-cyan-500 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              {activeConstructions.length > 0 && <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-zinc-950 shadow-lg animate-in zoom-in">{activeConstructions.length}</span>}
            </button>
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Housing Demand Indicators */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50 flex items-center gap-8">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Subsidi Bar */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider italic">
                  <span className="text-zinc-500">Subsidi</span>
                  <span className={`${demandSubsidi > 80 ? 'text-rose-500 animate-pulse' : 'text-zinc-400'}`}>{demandSubsidi.toFixed(0)}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-950 rounded-full border border-white/5 overflow-hidden shadow-inner">
                  <div className={`h-full rounded-full transition-all duration-500 ${demandSubsidi > 80 ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]' : 'bg-emerald-500'}`} style={{ width: `${demandSubsidi}%` }} />
                </div>
              </div>
              
              {/* Apartemen Bar */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider italic">
                  <span className="text-zinc-500">Apartemen</span>
                  <span className={`${demandApartemen > 80 ? 'text-amber-500 animate-pulse' : 'text-zinc-400'}`}>{demandApartemen.toFixed(0)}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-950 rounded-full border border-white/5 overflow-hidden shadow-inner">
                  <div className={`h-full rounded-full transition-all duration-500 ${demandApartemen > 80 ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]' : 'bg-emerald-500'}`} style={{ width: `${demandApartemen}%` }} />
                </div>
              </div>
              
              {/* Mansion Bar */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider italic">
                  <span className="text-zinc-500">Mansion</span>
                  <span className={`${demandMansion > 80 ? 'text-purple-500 animate-pulse' : 'text-zinc-400'}`}>{demandMansion.toFixed(0)}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-950 rounded-full border border-white/5 overflow-hidden shadow-inner">
                  <div className={`h-full rounded-full transition-all duration-500 ${demandMansion > 80 ? 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]' : 'bg-emerald-500'}`} style={{ width: `${demandMansion}%` }} />
                </div>
              </div>
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-1 mb-8">
                <div className="bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-2xl flex items-center justify-between shadow-lg">
                  <div>
                    <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-1">Total Kebutuhan Rumah</p>
                    <p className="text-xl font-black text-rose-400">{population.toLocaleString('id-ID')} <span className="text-xs text-rose-500/50">Jiwa</span></p>
                  </div>
                  <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20"><Users size={20} className="text-rose-500" /></div>
                </div>
                
                <div className="bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-2xl flex items-center justify-between shadow-lg">
                  <div>
                    <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-1">Total Kapasitas Tersedia</p>
                    <p className="text-xl font-black text-emerald-400">{totalHousingCapacity.toLocaleString('id-ID')} <span className="text-xs text-emerald-500/50">Jiwa</span></p>
                  </div>
                  <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20"><Home size={20} className="text-emerald-500" /></div>
                </div>

                <div className="bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-2xl flex items-center justify-between shadow-lg">
                  <div>
                    <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-1">Neraca Hunian (Surplus)</p>
                    <p className={`text-xl font-black ${totalHousingCapacity - population >= 0 ? 'text-cyan-400' : 'text-red-400'}`}>{(totalHousingCapacity - population) > 0 ? '+' : ''}{(totalHousingCapacity - population).toLocaleString('id-ID')} <span className="text-xs opacity-50">Jiwa</span></p>
                  </div>
                  <div className={`p-3 rounded-xl border ${totalHousingCapacity - population >= 0 ? 'bg-cyan-500/10 border-cyan-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                    <Activity size={20} className={totalHousingCapacity - population >= 0 ? 'text-cyan-500' : 'text-red-500'} />
                  </div>
                </div>
              </div>

              {hunianGroups.map((group) => (
                <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="flex items-center gap-3 mb-5 px-1">
                    <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}><group.icon className={`h-4 w-4 ${group.color}`} /></div>
                    <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title}</h3>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 pb-4">
                    {group.items.map((item: any, idx: number) => {
                      const currentConstruction = activeConstructions?.find(c => c && c.buildingKey === item.key);
                      return (
                        <BuildingCard
                          key={item.key || idx}
                          item={item}
                          onBuild={handleBuildRequest}
                          construction={currentConstruction}
                          cumulative={Math.max(0, population - totalHousingCapacity)}
                          isShortage={isHousingShortage}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* AI Strategic Advice */}
              {(() => {
                const thinking = aiThinkingStorage.getLatest(currentCountryCode);
                if (!thinking) return null;
                return (
                  <div className="mt-8 p-8 bg-amber-500/5 border border-amber-500/20 rounded-[2.5rem] relative overflow-hidden group shadow-xl">
                    <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                      <Brain size={250} className="text-amber-500" />
                    </div>
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 shadow-lg">
                        <Brain size={28} className="text-amber-500 animate-pulse" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] italic mb-2">AI Strategic Brain</h4>
                        <p className="text-lg font-bold text-zinc-300 leading-relaxed tracking-tight italic">"{thinking.reason}"</p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
        </div>

        {/* Confirmation Modal Overlay */}
        {confirmBuild && (
          <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[40px] shadow-2xl max-w-4xl w-full mx-4 flex flex-col gap-6 animate-in zoom-in-95">
              <div className="flex items-center gap-6 border-b border-zinc-800/50 pb-6">
                <div className="p-4 bg-cyan-500/10 rounded-3xl border border-cyan-500/20 shadow-lg font-black italic">
                   <confirmBuild.icon size={40} className="text-cyan-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">Konfirmasi?</h3>
                  <p className="text-zinc-400 text-sm mt-1">Membangun <span className="text-white font-black underline">{confirmBuild.label}</span>.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group relative">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Biaya Total</span>
                      <span className="text-xl font-black text-amber-500 tracking-tight">{(Number(confirmBuild.biaya_pembangunan || 0) * quantity).toLocaleString('id-ID')}</span>
                    </div>
                    <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Waktu Satuan</span>
                      <span className="text-xl font-black text-white tracking-tight">{(confirmBuild.waktu_pembangunan).toLocaleString('id-ID')} Hari</span>
                    </div>
                    {confirmBuild.consumption > 0 && (
                      <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group col-span-2">
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none text-rose-500/70 italic opacity-80 font-black">Estimasi Beban Energi Nasional</span>
                        <div className="flex items-center gap-1.5"><Zap size={14} className="text-rose-500" /><span className="text-xl font-black text-rose-500 tracking-tight">{(confirmBuild.consumption).toLocaleString('id-ID')} MW / unit</span></div>
                      </div>
                    )}
                  </div>
                  <div className="bg-zinc-950/40 border border-zinc-800 rounded-2xl p-5 text-center shadow-inner">
                    <span className="text-[10px] font-bold text-cyan-500/60 uppercase tracking-widest italic">Estimasi Penyelesaian</span>
                    <p className="text-lg font-black text-white mt-1 uppercase italic tracking-wider">
                       {formatGameDate(addDays(getStoredGameDate(), confirmBuild.waktu_pembangunan * quantity))}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <MaterialRequirement buildingKey={confirmBuild.key} quantity={quantity} />
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-6 bg-zinc-950/80 border border-zinc-800 p-4 rounded-2xl shadow-inner">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 text-xl font-black text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-lg active:scale-95">-</button>
                      <div className="flex flex-col items-center min-w-[90px]"><span className="text-3xl font-black text-white tracking-tighter">{quantity.toLocaleString('id-ID')}</span><span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter italic leading-none">Unit Strategis</span></div>
                      <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 text-xl font-black text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-lg active:scale-95">+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 shrink-0 mt-2 border-t border-zinc-800/50 pt-6">
                <button onClick={() => setConfirmBuild(null)} className="flex-1 px-8 py-5 rounded-3xl bg-zinc-800/50 text-zinc-400 font-black text-xs border border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer uppercase tracking-widest">Batal</button>
                <button onClick={handleConfirmBuild} className="flex-[2] px-8 py-5 rounded-3xl bg-cyan-600 text-white font-black text-sm uppercase tracking-widest shadow-lg hover:bg-cyan-500 hover:shadow-cyan-500/20 transition-all cursor-pointer active:scale-95">Konfirmasi &amp; Bangun</button>
              </div>
            </div>
          </div>
        )}

        {/* Queue Sidebar */}
        <div className={`absolute inset-0 z-[90] flex items-center justify-end transition-colors duration-300 ${showQueue ? 'bg-black/20 pointer-events-auto' : 'bg-transparent pointer-events-none'}`} onClick={() => setShowQueue(false)}>
          <div className={`bg-zinc-950/95 border-l border-zinc-800 w-full max-w-sm h-full shadow-2xl flex flex-col transition-transform duration-500 ${showQueue ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center"><h3 className="text-lg font-bold text-white tracking-tight italic uppercase font-black tracking-widest">Antrean Pembangunan</h3><button onClick={() => setShowQueue(false)} className="cursor-pointer hover:bg-zinc-800 p-2 rounded-xl transition-all"><X className="h-5 w-5 text-zinc-400" /></button></div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
              {activeConstructions.length === 0 ? <p className="text-zinc-500 text-center font-bold uppercase tracking-widest mt-10 italic">Antrean Kosong</p> : 
                activeConstructions.map((item, idx) => {
                  const progress = calculateConstructionProgress(item.startDate, item.endDate, getStoredGameDate().getTime());
                  if (!progress) return null;
                  return (
                    <div key={item.id || idx} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden shadow-md">
                      <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5" style={{ width: `${progress.percentage}%` }} />
                      <div className="flex justify-between items-center relative z-10"><h4 className="text-sm font-black text-white">{item.label}</h4><span className="text-[10px] font-bold text-cyan-400">{progress.percentage}%</span></div>
                      <div className="h-2 w-full bg-zinc-950 rounded-full mt-2 overflow-hidden border border-zinc-800/50 p-0.5"><div className={`h-full ${progress.colorClass} rounded-full`} style={{ width: `${progress.percentage}%` }} /></div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildingCard({ item, onBuild, construction, cumulative, isShortage }: any) {
  const [showDetail, setShowDetail] = useState(false);
  const currentDate = getStoredGameDate().getTime();
  const progress = construction ? calculateConstructionProgress(construction.startDate, construction.endDate, currentDate) : null;

  return (
    <div className={`bg-zinc-900/40 border ${progress ? 'border-cyan-500/30 bg-cyan-900/5' : 'border-zinc-800/60'} p-4 rounded-2xl transition-all group flex flex-col gap-3 relative overflow-hidden h-full min-h-[380px] shadow-lg`}>
      {progress && (
        <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000" style={{ width: `${progress.percentage}%` }} />
      )}

      {/* Info overlay */}
      {showDetail && (
        <div className="absolute inset-0 z-50 bg-zinc-950/98 backdrop-blur-md p-6 flex flex-col animate-in fade-in zoom-in-95 duration-200 border border-zinc-800 rounded-2xl shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-500 shadow-lg">
                <Info size={18} />
              </div>
              <div>
                <h5 className="text-[14px] font-black text-white uppercase tracking-wider italic">Detail Fasilitas</h5>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">Spesifikasi &amp; Dampak</p>
              </div>
            </div>
            <button onClick={() => setShowDetail(false)} className="p-2.5 hover:bg-zinc-800 rounded-xl text-zinc-500 transition-all cursor-pointer"><X size={20} /></button>
          </div>

          <div className="space-y-4 flex-1">
            <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/30 shadow-inner">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Katalog Nasional</span>
              <h4 className="text-xl font-black text-amber-400 uppercase italic tracking-tighter leading-tight">{item.label}</h4>
            </div>

            <div className="flex flex-col gap-3 p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 shadow-lg">
               <p className="text-sm font-black text-white italic leading-relaxed">{item.deskripsi}</p>
            </div>

            <div className="grid gap-2">
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 group/row hover:border-pink-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-pink-500/10 rounded-xl text-pink-500 border border-pink-500/20"><Zap size={14} /></div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Beban Energi</span>
                  </div>
                  <span className="text-[15px] font-black text-pink-500 tabular-nums">{item.konsumsi_listrik?.toLocaleString('id-ID')} MW</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 group/row hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-xl text-cyan-500 border border-cyan-500/20"><Users size={14} /></div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Kapasitas Hunian</span>
                  </div>
                  <span className="text-[15px] font-black text-cyan-400 tabular-nums">{item.kapasitas?.toLocaleString('id-ID')} Jiwa</span>
                </div>
            </div>
          </div>

          <button onClick={() => setShowDetail(false)} className="mt-6 w-full py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-zinc-800 transition-all cursor-pointer shadow-lg active:scale-95">Kembali</button>
        </div>
      )}

      {/* Card UI elements (same as original building card style) */}
      <div className="flex items-start justify-between relative z-10">
        <div className="flex gap-2">
          <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform">
            <item.icon className="h-5 w-5 text-cyan-500" />
          </div>
          <button onClick={() => setShowDetail(!showDetail)} className="p-2.5 rounded-xl border bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-cyan-400 cursor-pointer transition-all"><Info size={16} /></button>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-500 uppercase tracking-tight italic">{item.category || "RESIDENSIAL"}</div>
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-tighter">Terbangun: {item.count.toLocaleString('id-ID')} Unit</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col relative z-10 mt-1">
        <h4 className="text-[17px] font-black text-zinc-100 group-hover:text-amber-400 transition-colors uppercase italic mb-3">{item.label}</h4>
        <div className="flex flex-col gap-2.5 flex-1 justify-center">
            <div className="flex items-center gap-2.5">
              <Zap size={12} className="text-amber-500" /><span className="text-[12px] font-bold text-amber-500/80">Konsumsi: {item.konsumsi_listrik.toLocaleString('id-ID')} MW/unit</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Users size={12} className="text-blue-400" /><span className="text-[12px] font-bold text-blue-400/80">Kapasitas: {item.kapasitas.toLocaleString('id-ID')} Jiwa/unit</span>
            </div>
            <div className="flex items-center gap-2.5 italic opacity-60">
              <Clock size={12} className="text-zinc-500" /><span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Waktu: {item.time || item.waktu_pembangunan} Hari</span>
            </div>
        </div>

        <div className="mt-4 pt-4 border-t border-zinc-800/30 flex flex-col gap-1.5 bg-zinc-950/30 rounded-2xl p-4 border border-zinc-800/20 shadow-inner">
          <div className="flex justify-between items-baseline gap-2">
            <span className={`text-[11px] font-black ${isShortage ? 'text-rose-500' : 'text-cyan-500/80'} uppercase tracking-[0.15em] italic`}>TOTAL FASILITAS:</span>
            <span className={`text-[16px] font-black ${isShortage ? 'text-rose-400 animate-pulse' : 'text-cyan-400'}`}>{(item.count || 0).toLocaleString('id-ID')} <span className="text-[10px] font-normal uppercase italic ml-1">Unit</span></span>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4 relative z-10">
        {progress ? (
          <div className="space-y-2 bg-zinc-950/50 p-3 rounded-2xl border border-zinc-800/50">
             <div className="flex justify-between text-[10px] font-black text-cyan-400 uppercase tracking-tighter italic"><span>PROSES BANGUN:</span><span>{progress.percentage}%</span></div>
             <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50 shadow-inner"><div className={`h-full ${progress.colorClass} rounded-full`} style={{ width: `${progress.percentage}%` }} /></div>
             <div className="text-[9px] font-bold text-zinc-600 uppercase italic tracking-tighter text-right">E.T.A: {formatGameDate(new Date(construction.endDate))}</div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4">
             <div className="flex flex-col"><span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none">Biaya Bangun</span><span className="text-sm font-black text-zinc-400 tracking-tight mt-1">{item.biaya_pembangunan?.toLocaleString('id-ID')}</span></div>
             <button onClick={(e) => { e.stopPropagation(); onBuild(item); }} className="flex-1 py-3.5 rounded-2xl bg-cyan-600 text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-lg hover:bg-cyan-500 hover:shadow-cyan-500/20 cursor-pointer active:scale-95 border border-cyan-400/20 transition-all">Bangun</button>
          </div>
        )}
      </div>
    </div>
  );
}
