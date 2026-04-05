"use client"

import { useState, useEffect, Fragment } from "react";
import { X, Wrench, Zap, Shield, Truck, MapPin, Radiation, Eye, Gavel, UserCheck, Landmark, Swords as MilitaryIcon, HardHat, Building2, TowerControl, Ship, Plane, Rocket, Crosshair, Activity, Wifi, Radio, Cctv, Search, Siren, Car, Bike, Dog, ShieldAlert, Anchor, Waves, Satellite, RadioTower, Cpu, Target, Radar, TrendingUp, TrendingDown, Clock, Loader2, RefreshCw, EyeOff, Building, Archive, Info, Briefcase, Users, Flame, Factory } from "lucide-react"
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, DASHBOARD_LABELS, KAPASITAS_LISTRIK_METADATA, KONSUMSI_PERTAHANAN, KONSUMSI_STRATEGIC, KONSUMSI_SOSIAL } from "@/app/database/data/semua_fitur_negara";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { formatGameDate, addDays, getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { calculateConstructionProgress, getStatusText } from "@/app/game/data/construction/constructionLogic";
import { countries } from "@/app/database/data/negara/benua/index";
import NavigasiWaktu from "../../2_ekonomi/1-perdagangan/NavigasiWaktu";
import MaterialRequirement from "../1-produksi/MaterialRequirement";
import { pertahananRate, produksiMiliter } from "@/app/database/data/semua_fitur_negara/4_pertahanan";
import { pabrikMiliterRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import JikaUangKurang from "../jika_uang_kurang";
import JikaMaterialKurang from "../jika_material_kurang";
import JikaMaterialDanUangKurang from "../jika_material_dan_uang_kurang";
import { getBuildingRequirement } from "../1-produksi/MaterialRequirement";
import { Layers, Hammer, TreePine } from "lucide-react";
import { 
  calculateTotalInfantry, 
  calculateInfantryPower,
  calculatePrisonCapacity,
  calculateArmoryCapacity,
  calculateTankHangarCapacity,
  calculateAcademyCapacity,
  calculateAirBaseCapacity,
  calculateNavalBaseCapacity,
  calculateTankPower,
  calculateApcPower,
  calculateArtilleryPower,
  calculateRocketPower,
  calculateSamPower,
  calculateTacticalPower,
  calculateCarrierPower,
  calculateDestroyerPower,
  calculateCorvettePower,
  calculateSubmarinePower,
  calculateRegularSubPower,
  calculateMineShipPower,
  calculateLogisticsPower,
  calculateStealthPower,
  calculateInterceptorPower,
  calculateBomberPower,
  calculateAttackHeliPower,
  calculateReconPower,
  calculateUavPower,
  calculateKamikazePower,
  calculateTransportPower,
  INFANTRY_POWER_PER_UNIT,
  TANK_POWER_PER_UNIT,
  APC_POWER_PER_UNIT,
  ARTILLERY_POWER_PER_UNIT,
  ROCKET_POWER_PER_UNIT,
  SAM_POWER_PER_UNIT,
  TACTICAL_POWER_PER_UNIT,
  CARRIER_POWER_PER_UNIT,
  DESTROYER_POWER_PER_UNIT,
  CORVETTE_POWER_PER_UNIT,
  SUBMARINE_POWER_PER_UNIT,
  REGULAR_SUB_POWER_PER_UNIT,
  MINE_SHIP_POWER_PER_UNIT,
  LOGISTICS_POWER_PER_UNIT,
  STEALTH_POWER_PER_UNIT,
  INTERCEPTOR_POWER_PER_UNIT,
  BOMBER_POWER_PER_UNIT,
  ATTACK_HELI_POWER_PER_UNIT,
  RECON_POWER_PER_UNIT,
  UAV_POWER_PER_UNIT,
  KAMIKAZE_POWER_PER_UNIT,
  TRANSPORT_POWER_PER_UNIT
} from "../../4_pertahanan/3_armada_militer/kekuatanmiliter";



interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProduksiMiliterModal({ isOpen, onClose }: ModalProps) {
  const [activeConstructions, setActiveConstructions] = useState<any[]>([]);
  const [showQueue, setShowQueue] = useState(false);
  const [collapsedSectors, setCollapsedSectors] = useState<Set<string>>(new Set());
  const [confirmBuild, setConfirmBuild] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [tick, setTick] = useState(0);
  const [isInsufficientFundsModalOpen, setIsInsufficientFundsModalOpen] = useState(false);
  const [isInsufficientMaterialsModalOpen, setIsInsufficientMaterialsModalOpen] = useState(false);
  const [isInsufficientBothModalOpen, setIsInsufficientBothModalOpen] = useState(false);
  const [missingMaterialsData, setMissingMaterialsData] = useState<any[]>([]);
  const [requiredAmount, setRequiredAmount] = useState(0);

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
          // Dispatch event to sync lainnya components
          window.dispatchEvent(new Event('building_storage_updated'));
        }
        setTick(t => t + 1);
      } catch (err) {
        console.error("DEBUG: Military Hub poll error", err);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen || !currentData) return null;

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas;

  const totalPasokan = hitungTotalKapasitas(currentData.sektor_listrik);
  const totalBeban = hitungTotalKonsumsiNasional(currentData);

  let adjustedTotalPasokan = totalPasokan;
  let adjustedTotalBeban = totalBeban;

  const deltaEntries = Object.entries(buildingDeltas);
  deltaEntries.forEach(([key, deltaValue]) => {
    const meta = KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA];
    if (meta && typeof deltaValue === 'number') {
      const prodValue = (meta as any).produksi || (meta as any).production || 0;
      adjustedTotalPasokan += (deltaValue * prodValue);
    }
  });

  const surplus = adjustedTotalPasokan - adjustedTotalBeban;

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
        // 1. Calculate total cost
        const totalCost = confirmBuild.cost * quantity;
        
        // 2. Check if budget is sufficient
        const currentBalance = budgetStorage.getBudget();
        
        if (currentBalance < totalCost) {
          setRequiredAmount(totalCost);
          setConfirmBuild(null); // Close the initial confirm modal
          setIsInsufficientFundsModalOpen(true);
          return;
        }

        // 3. Check for Material Sufficiency
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

        const isMoneyShort = currentBalance < totalCost;
        const areMaterialsShort = missing.length > 0;

        if (isMoneyShort && areMaterialsShort) {
          setRequiredAmount(totalCost);
          setMissingMaterialsData(missing);
          setConfirmBuild(null);
          setIsInsufficientBothModalOpen(true);
          return;
        }

        if (isMoneyShort) {
          setRequiredAmount(totalCost);
          setConfirmBuild(null); // Close the initial confirm modal
          setIsInsufficientFundsModalOpen(true);
          return;
        }

        if (areMaterialsShort) {
          setMissingMaterialsData(missing);
          setConfirmBuild(null);
          setIsInsufficientMaterialsModalOpen(true);
          return;
        }

        // 4. Deduct construction cost from budget
        budgetStorage.updateBudget(-totalCost);

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
        console.error("DEBUG: Military Hub build error", err);
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
      case "pabrik_drone_kamikaze": return Target;
      case "pabrik_amunisi": return Archive;
      default: return Shield;
    }
  };

  const militaryGroups = [
    {
      id: "pabrik_militer_grup",
      title: "1. Pabrik Militer Nasional",
      icon: Factory,
      color: "text-purple-500",
      items: Object.entries(pabrikMiliterRate).map(([key, val]: [string, any]) => ({
          key: val.dataKey,
          groupId: val.groupId,
          label: val.label,
          icon: getMilitaryIcon(val.dataKey),
          desc: val.deskripsi,
          cost: val.biaya_pembangunan,
          buildTime: val.waktu_pembangunan,
          maintenanceCost: val.biaya_pemeliharaan,
          lowongan_kerja: val.lowongan_kerja,
          count: Number(currentData.pabrik_militer?.[val.dataKey as keyof typeof currentData.pabrik_militer] || 0) + ((buildingDeltas[val.dataKey] as number) || 0),
          consumption: val.konsumsi_listrik || 0,
          tarif: val.produksi || 0,
          unit: val.satuan || "Unit"
      }))
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Insufficient Funds Modal */}
        <JikaUangKurang 
          isOpen={isInsufficientFundsModalOpen}
          onClose={() => setIsInsufficientFundsModalOpen(false)}
          requiredAmount={requiredAmount}
          currentBalance={budgetStorage.getBudget()}
        />

        {/* Insufficient Material Modal */}
        <JikaMaterialKurang 
          isOpen={isInsufficientMaterialsModalOpen}
          onClose={() => setIsInsufficientMaterialsModalOpen(false)}
          missingMaterials={missingMaterialsData}
        />

        {/* Insufficient Both Modal */}
        <JikaMaterialDanUangKurang 
          isOpen={isInsufficientBothModalOpen}
          onClose={() => setIsInsufficientBothModalOpen(false)}
          requiredAmount={requiredAmount}
          currentBalance={budgetStorage.getBudget()}
          missingMaterials={missingMaterialsData}
        />
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-xl">
              <Wrench className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Hub Produksi Militer</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Military Production & Factories</p>
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

        {/* Electricity Summary */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl"><Zap className="h-6 w-6 text-cyan-500" /></div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.supply.title}</p>
                <p className="text-xl font-black text-white leading-tight">{(adjustedTotalPasokan * 10).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-rose-500/10 rounded-xl"><Activity className="h-6 w-6 text-rose-500" /></div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.usage.title}</p>
                <p className="text-xl font-black text-white leading-tight">{(adjustedTotalBeban * 10).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>
            <div className={`bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden group`}>
              <div className={`p-3 rounded-xl ${surplus >= 0 ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>{surplus >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-500" />}</div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.balance.title}</p>
                <p className={`text-xl font-black leading-tight ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>{(surplus * 10).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
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
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title} <span className="text-cyan-400 ml-3 font-black lowercase italic text-xs tracking-normal bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">({group.items.length} Jenis)</span></h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
                  <button onClick={() => toggleSector(group.id)} className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95">
                    {collapsedSectors.has(group.id) ? <EyeOff size={16} /> : <Eye size={16} className="text-cyan-400" />}
                  </button>
                </div>
                <div className={`grid transition-all duration-700 ease-in-out ${!collapsedSectors.has(group.id) ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 pb-4">
                      {group.items.map((item: any, idx: number) => {
                        const currentConstruction = activeConstructions?.find(c => c && c.buildingKey === item.key);
                        const prevGroupId = idx > 0 ? group.items[idx - 1].groupId : null;
                        
                        const subGroupLabels: Record<string, string> = {
                          darat: "Armada Darat Nasional",
                          laut: "Armada Maritim & Laut",
                          udara: "Keunggulan Udara",
                          intel: "Intelijen & Perang Informasi"
                        };

                        const showSubHeader = item.groupId && item.groupId !== prevGroupId;

                        return (
                          <Fragment key={item.key || idx}>
                            {showSubHeader && subGroupLabels[item.groupId] && (
                              <div className="col-span-full mt-6 mb-2 flex items-center gap-4">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800"></div>
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] whitespace-nowrap bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full shadow-xl">
                                  {subGroupLabels[item.groupId]}
                                </span>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-800 to-zinc-800"></div>
                              </div>
                            )}
                            <BuildingCard
                              item={item}
                              onBuild={handles.handleBuildRequest}
                              construction={currentConstruction}
                              cumulative={0}
                            />
                          </Fragment>
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
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-md p-8 shadow-2xl scale-in-center animate-in zoom-in duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20"><confirmBuild.icon className="h-8 w-8 text-cyan-500" /></div>
                <div>
                  <h3 className="text-xl font-black text-white">{confirmBuild.label}</h3>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{confirmBuild.desc}</p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className={`w-full grid ${confirmBuild.consumption ? 'grid-cols-3' : 'grid-cols-2'} gap-3`}>
                  <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Biaya Total</span>
                    <span className="text-xl font-black text-amber-500 group-hover:scale-110 transition-transform duration-300 tracking-tight">{confirmBuild.cost * quantity}</span>
                  </div>
                  <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Waktu Total</span>
                    <div className="flex items-center gap-2">
                       <Clock size={14} className="text-cyan-500" />
                       <span className="text-xl font-black text-white group-hover:scale-110 transition-transform duration-300 tracking-tight">{confirmBuild.buildTime * quantity} Hari</span>
                    </div>
                  </div>
                  {confirmBuild.consumption > 0 && (
                    <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Energi Dikonsumsi</span>
                      <div className="flex items-center gap-2">
                        <Zap size={14} className="text-rose-500" />
                        <span className="text-xl font-black text-rose-500 group-hover:scale-110 transition-transform duration-300 tracking-tight">{(confirmBuild.consumption * quantity).toLocaleString('id-ID')} MW</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Material Requirements */}
                <MaterialRequirement buildingKey={confirmBuild.key} quantity={quantity} />

                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-zinc-500 font-bold uppercase">Jumlah Unit</span>
                  <div className="flex items-center bg-zinc-950 rounded-xl border border-zinc-800 p-1">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-zinc-400 hover:text-white">-</button>
                    <input type="number" value={quantity} onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-12 text-center bg-transparent text-white font-black text-sm outline-none" />
                    <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-zinc-400 hover:text-white">+</button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setConfirmBuild(null)} className="py-3 rounded-xl border border-zinc-800 text-zinc-400 font-black uppercase text-xs hover:bg-zinc-800 transition-all">Batal</button>
                <button onClick={handles.handleConfirmBuild} className="py-3 rounded-xl bg-cyan-600 text-white font-black uppercase text-xs shadow-lg shadow-cyan-900/40 hover:bg-cyan-500 transition-all">Konfirmasi</button>
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

function BuildingCard({ item, onBuild, construction, cumulative }: any) {
  const [showDetail, setShowDetail] = useState(false);
  const currentDate = getStoredGameDate().getTime();
  const progress = construction ? calculateConstructionProgress(construction.startDate, construction.endDate, currentDate) : null;

  // 6-month workforce occupancy (deterministic, same as ProduksiModal)
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

  return (
    <div className={`bg-zinc-900/40 border ${progress ? 'border-cyan-500/30 bg-cyan-900/5' : 'border-zinc-800/60'} p-4 rounded-2xl transition-all group flex flex-col gap-3 relative overflow-hidden h-full min-h-[380px]`}>
      {progress && (
        <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000" style={{ width: `${progress.percentage}%` }} />
      )}

      {/* Info overlay â€” absolute, same as ProduksiModal */}
      {showDetail && (
        <div className="absolute inset-0 z-50 bg-zinc-950/98 backdrop-blur-md p-6 flex flex-col animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Info size={18} />
              </div>
              <div>
                <h5 className="text-[14px] font-black text-white uppercase tracking-wider italic">Detail Fasilitas</h5>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none mt-0.5">Spesifikasi &amp; Biaya</p>
              </div>
            </div>
            <button onClick={() => setShowDetail(false)} className="p-2.5 hover:bg-zinc-800/80 rounded-xl text-zinc-500 hover:text-white transition-all cursor-pointer border border-transparent hover:border-zinc-700">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto no-scrollbar pr-1">
            <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/30">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] opacity-60">Nama Bangunan</span>
              <h4 className="text-xl font-black text-amber-400 uppercase italic leading-tight tracking-tight">{item.label}</h4>
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-rose-500/10 rounded-lg text-rose-400"><Flame size={12} /></div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Pemeliharaan</span>
                </div>
                <span className="text-[14px] font-black text-rose-400">-{item.maintenanceCost || 5} <span className="text-[9px] text-rose-500/50 italic opacity-80">/ HARI</span></span>
              </div>

              {item.tarif > 0 && (
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-amber-500/10 rounded-lg text-amber-500"><TrendingUp size={12} /></div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Produksi</span>
                  </div>
                  <span className="text-[14px] font-black text-amber-500">+{Math.floor(item.tarif)} <span className="text-[9px] text-amber-500/50 italic opacity-80">{item.unit}/HARI</span></span>
                </div>
              )}

              {item.consumption > 0 && (
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-amber-500/10 rounded-lg text-amber-500"><Zap size={12} /></div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Beban Energi</span>
                  </div>
                  <span className="text-[14px] font-black text-amber-500">{item.consumption} MW</span>
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
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Okupansi Tenaga Kerja</span>
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
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="mt-6 w-full py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-zinc-800 hover:text-white transition-all cursor-pointer active:scale-[0.98] shadow-lg"
          >
            Kembali
          </button>
        </div>
      )}

      {/* Card header */}
      <div className="flex items-start justify-between relative z-10">
        <div className="flex gap-2">
          <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform">
            <item.icon className={`h-5 w-5 ${progress ? 'text-white' : 'text-cyan-500'} shadow-[0_0_10px_rgba(6,182,212,0.3)]`} />
          </div>
          <button
            onClick={() => setShowDetail(!showDetail)}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${showDetail ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30'}`}
          >
            <Info size={16} />
          </button>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
            {item.desc}
          </div>
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            Aktif: {item.count} Unit
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex-1 flex flex-col relative z-10 mt-1">
        <h4 className="text-[17px] font-black text-zinc-100 tracking-tight group-hover:text-amber-400 transition-colors uppercase italic leading-tight mb-3">
          {item.label}
        </h4>

        <div className="flex flex-col gap-2.5 flex-1">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-rose-500/10 rounded-lg">
              <Flame size={12} className="text-rose-400" />
            </div>
            <span className="text-[12px] font-bold text-rose-400/90">
              Pemeliharaan: -{item.maintenanceCost || 5}/hari
            </span>
          </div>

          {item.tarif > 0 && (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-amber-500/10 rounded-lg">
                <TrendingUp size={12} className="text-amber-500" />
              </div>
              <span className="text-[12px] font-bold text-amber-500/90">
                Produksi: +{Math.floor(item.tarif)} {item.unit}/bangunan
              </span>
            </div>
          )}

          {item.consumption > 0 && (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-amber-500/10 rounded-lg">
                <Zap size={12} className="text-amber-500/90" />
              </div>
              <span className="text-[12px] font-bold text-amber-500/80">
                Konsumsi: {item.consumption} MW/unit
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

        {/* Total Produksi section */}
        <div className="mt-4 pt-4 border-t border-zinc-800/30 flex flex-col gap-1.5 bg-zinc-950/30 rounded-2xl p-4 border border-zinc-800/20 shadow-inner">
          <div className="flex justify-between items-baseline gap-2">
            <span className="text-[11px] font-black text-cyan-500/80 uppercase tracking-[0.15em] italic">
              TOTAL PRODUKSI:
            </span>
            <span className="text-[16px] font-black text-cyan-400 tracking-tight">
              {(budgetStorage.getCumulativeProduction()[item.key] || 0).toLocaleString('id-ID')} <span className="text-[10px] text-cyan-500/50 font-normal uppercase italic ml-1">{item.unit || "Unit"}</span>
            </span>
          </div>
        </div>
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
              <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none">Biaya Bangun</span>
              <span className="text-sm font-black text-zinc-400 tracking-tight mt-1">{item.cost}</span>
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
