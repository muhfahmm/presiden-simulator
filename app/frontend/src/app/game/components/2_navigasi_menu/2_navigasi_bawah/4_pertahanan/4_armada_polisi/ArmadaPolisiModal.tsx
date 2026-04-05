"use client"

import { useState, useEffect, Fragment } from "react";
import { X, ShieldAlert, Car, Bike, Dog, Crosshair, Radio, Shield, Cctv, Search, Siren, Clock, Loader2, Info, Users, GraduationCap, Flame, Zap, Eye, EyeOff, TrendingUp, TrendingDown, Activity, Building, Briefcase } from "lucide-react"
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, DASHBOARD_LABELS, KAPASITAS_LISTRIK_METADATA } from "@/app/database/data/semua_fitur_negara";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { formatGameDate, addDays, getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { calculateConstructionProgress, getStatusText } from "@/app/game/data/construction/constructionLogic";
import { countries } from "@/app/database/data/negara/benua/index";
import { policeRate } from "@/app/database/data/harga_bangunan_negara/2_pertahanan";
import NavigasiWaktu from "../../2_ekonomi/1-perdagangan/NavigasiWaktu";
import MaterialRequirement from "../../3_pembangunan/1-produksi/MaterialRequirement";

export default function ArmadaPolisiModal({ isOpen, onClose, data }: { isOpen: boolean; onClose: () => void; data: any }) {
  const [activeConstructions, setActiveConstructions] = useState<any[]>([]);
  const [showQueue, setShowQueue] = useState(false);
  const [collapsedSectors, setCollapsedSectors] = useState<Set<string>>(new Set());
  const [confirmBuild, setConfirmBuild] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [tick, setTick] = useState(0);
  const currentData = data;

  useEffect(() => {
    if (!isOpen) return;
    const queue = buildingStorage.getQueue();
    setActiveConstructions(queue);
  }, [tick, isOpen]);

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
        console.error("DEBUG: Police Hub poll error", err);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen || !currentData) return null;

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas;

  const totalPasokan = hitungTotalKapasitas(currentData);
  const totalBeban = hitungTotalKonsumsiNasional(currentData);
  const surplus = totalPasokan - totalBeban;

  const policeGroups = [
    {
      id: "pusat_komando",
      title: "1. Pusat Komando & Pendidikan",
      icon: Shield,
      color: "text-blue-500",
      items: [
        { ...policeRate["1_pusat_komando"], groupId: "komando", icon: Shield, cost: policeRate["1_pusat_komando"].biaya_pembangunan, buildTime: policeRate["1_pusat_komando"].waktu_pembangunan, maintenanceCost: policeRate["1_pusat_komando"].biaya_pemeliharaan, count: (currentData.armada_kepolisian?.armada_polisi?.pusat_komando?.stasiun_komando || 0) + ((buildingDeltas["stasiun_komando"] as number) || 0) },
        { ...policeRate["2_akademi_polisi"], groupId: "komando", icon: GraduationCap, cost: policeRate["2_akademi_polisi"].biaya_pembangunan, buildTime: policeRate["2_akademi_polisi"].waktu_pembangunan, maintenanceCost: policeRate["2_akademi_polisi"].biaya_pemeliharaan, count: (currentData.armada_kepolisian?.armada_polisi?.pusat_komando?.akademi_polisi || 0) + ((buildingDeltas["akademi_polisi"] as number) || 0) },
        { ...policeRate["3_pusat_forensik"], groupId: "komando", icon: Search, cost: policeRate["3_pusat_forensik"].biaya_pembangunan, buildTime: policeRate["3_pusat_forensik"].waktu_pembangunan, maintenanceCost: policeRate["3_pusat_forensik"].biaya_pemeliharaan, count: (currentData.armada_kepolisian?.armada_polisi?.pusat_komando?.pusat_forensik || 0) + ((buildingDeltas["forensik"] as number) || 0) },
      ]
    },
    {
      id: "unit_pelayanan",
      title: "2. Unit Pelayanan & Kewilayahan",
      icon: Building,
      color: "text-emerald-500",
      items: [
        { ...policeRate["4_kantor_polisi"], groupId: "wilayah", icon: Siren, cost: policeRate["4_kantor_polisi"].biaya_pembangunan, buildTime: policeRate["4_kantor_polisi"].waktu_pembangunan, maintenanceCost: policeRate["4_kantor_polisi"].biaya_pemeliharaan, count: (currentData.armada_kepolisian?.armada_polisi?.pusat_komando?.kantor_polisi || 0) + ((buildingDeltas["pos_polisi"] as number) || 0) },
        { ...policeRate["5_pos_polisi"], groupId: "wilayah", icon: ShieldAlert, cost: policeRate["5_pos_polisi"].biaya_pembangunan, buildTime: policeRate["5_pos_polisi"].waktu_pembangunan, maintenanceCost: policeRate["5_pos_polisi"].biaya_pemeliharaan, count: (currentData.armada_kepolisian?.armada_polisi?.pusat_komando?.pos_polisi_kecil || 0) + ((buildingDeltas["pos_polisi_kecil"] as number) || 0) },
        { ...policeRate["6_network_cctv"], groupId: "wilayah", icon: Cctv, cost: policeRate["6_network_cctv"].biaya_pembangunan, buildTime: policeRate["6_network_cctv"].waktu_pembangunan, maintenanceCost: policeRate["6_network_cctv"].biaya_pemeliharaan, count: (currentData.armada_kepolisian?.armada_polisi?.pusat_komando?.kamera_pengawas || 0) + ((buildingDeltas["cctv_network"] as number) || 0) },
      ]
    },
    {
      id: "armada_operasional",
      title: "3. Armada & Respon Cepat",
      icon: Car,
      color: "text-amber-500",
      items: [
        { ...policeRate["7_armada_mobil"], groupId: "armada", icon: Car, cost: policeRate["7_armada_mobil"].biaya_pembangunan, buildTime: policeRate["7_armada_mobil"].waktu_pembangunan, maintenanceCost: policeRate["7_armada_mobil"].biaya_pemeliharaan, count: (currentData.armada_kepolisian?.armada_polisi?.patroli_lantas?.armada_mobil || 0) + ((buildingDeltas["armada_polisi"] as number) || 0) },
        { ...policeRate["8_mobil_interceptor"], groupId: "armada", icon: Car, cost: policeRate["8_mobil_interceptor"].biaya_pembangunan, buildTime: policeRate["8_mobil_interceptor"].waktu_pembangunan, maintenanceCost: policeRate["8_mobil_interceptor"].biaya_pemeliharaan, count: (currentData.armada_kepolisian?.armada_polisi?.patroli_lantas?.mobil_patroli_interceptor || 0) + ((buildingDeltas["mobil_patroli_interceptor"] as number) || 0) },
        { ...policeRate["9_unit_r2"], groupId: "armada", icon: Bike, cost: policeRate["9_unit_r2"].biaya_pembangunan, buildTime: policeRate["9_unit_r2"].waktu_pembangunan, maintenanceCost: policeRate["9_unit_r2"].biaya_pemeliharaan, count: (currentData.armada_kepolisian?.armada_polisi?.patroli_lantas?.unit_interceptor_r2 || 0) + ((buildingDeltas["unit_interceptor_r2"] as number) || 0) },
        { ...policeRate["10_heli_polisi"], groupId: "armada", icon: Radio, cost: policeRate["10_heli_polisi"].biaya_pembangunan, buildTime: policeRate["10_heli_polisi"].waktu_pembangunan, maintenanceCost: policeRate["10_heli_polisi"].biaya_pemeliharaan, count: (currentData.armada_kepolisian?.armada_polisi?.taktis_khusus?.helikopter_polisi || 0) + ((buildingDeltas["police_heli"] as number) || 0) },
      ]
    },
    {
      id: "pasukan_khusus",
      title: "4. Pasukan Khusus",
      icon: Crosshair,
      color: "text-rose-500",
      items: [
        { ...policeRate["11_unit_k9"], groupId: "khusus", icon: Dog, cost: policeRate["11_unit_k9"].biaya_pembangunan, buildTime: policeRate["11_unit_k9"].waktu_pembangunan, maintenanceCost: policeRate["11_unit_k9"].biaya_pemeliharaan, count: (currentData.armada_kepolisian?.armada_polisi?.patroli_lantas?.unit_k9 || 0) + ((buildingDeltas["unit_k9"] as number) || 0) },
        { ...policeRate["12_swat"], groupId: "khusus", icon: Crosshair, cost: policeRate["12_swat"].biaya_pembangunan, buildTime: policeRate["12_swat"].waktu_pembangunan, maintenanceCost: policeRate["12_swat"].biaya_pemeliharaan, count: (currentData.armada_kepolisian?.armada_polisi?.taktis_khusus?.swat || 0) + ((buildingDeltas["swat"] as number) || 0) },
        { ...policeRate["13_anti_huru_hara"], groupId: "khusus", icon: ShieldAlert, cost: policeRate["13_anti_huru_hara"].biaya_pembangunan, buildTime: policeRate["13_anti_huru_hara"].waktu_pembangunan, maintenanceCost: policeRate["13_anti_huru_hara"].biaya_pemeliharaan, count: (currentData.armada_kepolisian?.armada_polisi?.taktis_khusus?.anti_huru_hara || 0) + ((buildingDeltas["riot_control"] as number) || 0) },
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
      console.error("DEBUG: Police Hub build error", err);
    }
  };

  const toggleSector = (id: string) => {
    setCollapsedSectors(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl">
              <ShieldAlert className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Markas Besar Polri</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Police Command Center</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowQueue(true)} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group flex items-center gap-2 relative shadow-[0_0_15px_rgba(16,185,129,0.1)] active:scale-95">
              <Clock className="h-6 w-6 text-emerald-500 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              {activeConstructions.length > 0 && <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-zinc-950 shadow-lg animate-in zoom-in">{activeConstructions.length}</span>}
            </button>
            <NavigasiWaktu />
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="space-y-12">
            {policeGroups.map((group) => (
              <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3 mb-5 px-1">
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}><group.icon className={`h-4 w-4 ${group.color}`} /></div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title}</h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
                  <button onClick={() => toggleSector(group.id)} className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95">
                    {collapsedSectors.has(group.id) ? <EyeOff size={16} /> : <Eye size={16} className="text-emerald-400" />}
                  </button>
                </div>
                <div className={`grid transition-all duration-700 ease-in-out ${!collapsedSectors.has(group.id) ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 pb-4">
                      {group.items.map((item: any, idx: number) => {
                        const currentConstruction = activeConstructions?.find(c => c && c.buildingKey === item.key);
                        const prevGroupId = idx > 0 ? group.items[idx - 1].groupId : null;
                        
                        const subGroupLabels: Record<string, string> = {
                          komando: "Komando Strategis & Pendidikan",
                          wilayah: "Unit Pelayanan Wilayah",
                          armada: "Respon Cepat & Patroli",
                          khusus: "Penanganan Taktis & Khusus"
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
                              onBuild={handleBuildRequest}
                              construction={currentConstruction}
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
            <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] w-full max-w-lg p-8 shadow-2xl scale-in-center animate-in zoom-in duration-300 flex flex-col relative overflow-hidden">
              
              {/* Decorative Header Icon */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
              
              <div className="flex flex-col items-center text-center mb-8 relative z-10">
                <div className="p-5 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-4 shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:scale-110 transition-transform">
                  <confirmBuild.icon className="h-10 w-10 text-emerald-500" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tight">Konfirmasi Bangun?</h3>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] mt-1 italic">
                  Anda akan membangun <span className="text-emerald-400 border-b border-emerald-500/30">{confirmBuild.label}</span> untuk kepolisian negara.
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
                       <Clock size={16} className="text-emerald-500" />
                       <span className="text-2xl font-black text-white tracking-tight leading-none">
                        {confirmBuild.buildTime * quantity}<span className="text-xs text-zinc-500 font-bold uppercase ml-1">Hari</span>
                       </span>
                    </div>
                  </div>

                  <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-3xl p-5 flex flex-col items-center gap-1.5 group hover:bg-zinc-900/50 transition-colors">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">Pemeliharaan</span>
                    <div className="flex items-center gap-2">
                      <Flame size={14} className="text-rose-500 fill-rose-500/20" />
                      <span className="text-2xl font-black text-rose-500 tracking-tight leading-none overflow-hidden text-ellipsis w-full text-center">
                        {(confirmBuild.maintenanceCost * quantity).toLocaleString('id-ID')} <span className="text-[10px] font-bold">/ HARI</span>
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
                            className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/10 active:scale-90 transition-all flex items-center justify-center font-black text-2xl shadow-xl cursor-pointer"
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
                    onClick={handleConfirmBuild} 
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
              <div className="flex items-center gap-2"><Clock size={16} className="text-emerald-500" /><h3 className="text-sm font-black text-white uppercase tracking-widest">Antrean Operasional</h3></div>
              <button onClick={() => setShowQueue(false)} className="p-2 hover:bg-zinc-900 rounded-lg text-zinc-500"><X size={16} /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar">
              {activeConstructions.filter(c => ["komando", "wilayah", "armada", "khusus"].includes(c.sector)).length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 opacity-20 text-center"><ShieldAlert size={40} className="mb-4" /><p className="text-[10px] font-black uppercase tracking-widest">Tidak ada antrean</p></div>
              ) : (
                activeConstructions.filter(c => ["komando", "wilayah", "armada", "khusus"].includes(c.sector)).map((item, idx) => {
                  const progress = calculateConstructionProgress(item.startDate, item.endDate, getStoredGameDate().getTime());
                  return (
                    <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 space-y-3">
                      <div className="flex justify-between items-center relative z-10"><h4 className="text-xs font-black text-white">{item.label}</h4><span className="text-[10px] font-bold text-emerald-400">{progress.percentage}%</span></div>
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

function BuildingCard({ item, onBuild, construction }: any) {
  const [showDetail, setShowDetail] = useState(false);
  const currentDate = getStoredGameDate().getTime();
  const progress = construction ? calculateConstructionProgress(construction.startDate, construction.endDate, currentDate) : null;

  // 6-month workforce occupancy
  const diffTime = Math.abs(currentDate - INITIAL_GAME_DATE.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const sixMonthIndex = Math.floor(diffDays / 180);
  const nextUpdateMs = INITIAL_GAME_DATE.getTime() + (sixMonthIndex + 1) * 180 * 24 * 60 * 60 * 1000;
  const nextUpdateDate = new Date(nextUpdateMs);
  const nextDateStr = `${nextUpdateDate.getDate().toString().padStart(2, '0')}-${(nextUpdateDate.getMonth() + 1).toString().padStart(2, '0')}-${nextUpdateDate.getFullYear()}`;
  const seed = (sixMonthIndex + (item.label?.length || 0)) % 100;
  const occupancyPercentage = 0.75 + (seed % 20) / 100;
  const totalPositions = (item.lowongan_kerja || 0) * (item.count || 0);
  const filledPositions = Math.floor(totalPositions * occupancyPercentage);

  return (
    <div className={`bg-zinc-900/40 border ${progress ? 'border-emerald-500/30 bg-emerald-900/5' : 'border-zinc-800/60'} p-4 rounded-2xl transition-all group flex flex-col gap-3 relative overflow-hidden h-full min-h-[440px]`}>
      {progress && (
        <div className="absolute top-0 left-0 bottom-0 bg-emerald-500/5 transition-all duration-1000" style={{ width: `${progress.percentage}%` }} />
      )}

      {showDetail && (
        <div className="absolute inset-0 z-50 bg-zinc-950/98 backdrop-blur-md p-6 flex flex-col animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <Info size={18} />
              </div>
              <div>
                <h5 className="text-[14px] font-black text-white uppercase tracking-wider italic">Detail Operasional</h5>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none mt-0.5">Spesifikasi &amp; Biaya</p>
              </div>
            </div>
            <button onClick={() => setShowDetail(false)} className="p-2.5 hover:bg-zinc-800/80 rounded-xl text-zinc-500 hover:text-white transition-all cursor-pointer border border-transparent hover:border-zinc-700">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto no-scrollbar pr-1">
            <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/30">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] opacity-60">Nama Unit</span>
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

              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400"><Users size={12} /></div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Personel</span>
                </div>
                <span className="text-[14px] font-black text-blue-400">+{(item.lowongan_kerja || 0).toLocaleString('id-ID')} <span className="text-[9px] text-blue-500/50 italic opacity-80">/ UNIT</span></span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-emerald-500/10 rounded-lg text-emerald-500"><Briefcase size={12} /></div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Okupansi</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[14px] font-black text-emerald-400">{filledPositions.toLocaleString('id-ID')} <span className="text-[9px] text-zinc-400">/ {totalPositions.toLocaleString('id-ID')}</span></span>
                  <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest leading-none italic opacity-90">UPDATE: {nextDateStr}</span>
                </div>
              </div>
            </div>
          </div>

          <button onClick={() => setShowDetail(false)} className="mt-6 w-full py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-zinc-800 hover:text-white transition-all cursor-pointer active:scale-[0.98] shadow-lg">
            Kembali
          </button>
        </div>
      )}

      {/* Card header */}
      <div className="flex items-start justify-between relative z-10">
        <div className="flex gap-2">
          <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform">
            <item.icon className={`h-5 w-5 ${progress ? 'text-white' : 'text-emerald-500'} shadow-[0_0_10px_rgba(16,185,129,0.3)]`} />
          </div>
          <button onClick={() => setShowDetail(!showDetail)} className={`p-2.5 rounded-xl border transition-all cursor-pointer ${showDetail ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/30'}`}>
            <Info size={16} />
          </button>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-500 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
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
            <div className="p-1.5 bg-blue-500/10 rounded-lg">
              <Users size={12} className="text-blue-400" />
            </div>
            <span className="text-[12px] font-bold text-blue-400/90">
              Personel: +{(item.lowongan_kerja || 0).toLocaleString('id-ID')} / unit
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-rose-500/10 rounded-lg">
              <Flame size={12} className="text-rose-400" />
            </div>
            <span className="text-[12px] font-bold text-rose-400/90">Pemeliharaan: -{item.maintenanceCost || 5}/hari</span>
          </div>

          {!progress && (
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-zinc-800/50 rounded-lg"><Clock size={12} className="text-zinc-500" /></div>
              <span className="text-[11px] font-bold text-zinc-500 italic">Waktu: {item.buildTime} Hari</span>
            </div>
          )}
        </div>

        {/* Total stats section */}
        <div className="mt-4 pt-4 border-t border-zinc-800/30 flex flex-col gap-2 bg-zinc-950/30 rounded-2xl p-4 border border-zinc-800/20 shadow-inner">
          {/* Row 1: Total Unit */}
          <div className="flex justify-between items-baseline gap-2">
            <span className="text-[13px] font-black text-zinc-500 uppercase tracking-[0.15em] italic">Total Unit</span>
            <span className="text-[22px] font-black text-emerald-400 tracking-tight">
              {(item.count || 0).toLocaleString('id-ID')}
              <span className="text-[12px] text-emerald-500/50 font-normal uppercase italic ml-1">Unit</span>
            </span>
          </div>
          {/* Row 2: Kalkulasi Total Kekuatan */}
          <div className="flex items-center justify-between gap-1 pt-1 border-t border-zinc-800/30">
            <span className="text-[12px] font-black text-zinc-600 uppercase tracking-[0.15em] italic whitespace-nowrap">
              {(item.count || 0).toLocaleString('id-ID')} × {(item.power || 0).toLocaleString('id-ID')}
            </span>
            <span className="text-[12px] text-zinc-700 font-bold">=</span>
            <span className="text-[19px] font-black text-amber-400 tracking-tight leading-none">
              {((item.count || 0) * (item.power || 0)).toLocaleString('id-ID')}
              <span className="text-[11px] text-amber-500/50 font-bold uppercase ml-1 italic">Kekuatan</span>
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
                <Loader2 size={12} className={`animate-spin ${progress.isWaiting ? 'text-zinc-600' : 'text-emerald-400'}`} />
                {getStatusText(progress.percentage, progress.isWaiting)}
              </span>
              <span className={progress.colorClass.replace('bg-', 'text-')}>{progress.percentage}%</span>
            </div>
            <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/30 p-0.5">
              <div className={`h-full transition-all duration-1000 ${progress.colorClass} rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]`} style={{ width: `${progress.percentage}%` }} />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-zinc-600 uppercase tracking-widest leading-none">Biaya Pengadaan</span>
              <span className="text-xl font-black text-zinc-400 tracking-tight mt-1">{item.cost}</span>
            </div>
            <button onClick={(e) => { e.stopPropagation(); onBuild(item); }} className="flex-1 py-3.5 rounded-2xl bg-cyan-600 text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(8,145,178,0.4)] transition-all cursor-pointer active:scale-95 border border-cyan-400/20">
              Bangun
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
