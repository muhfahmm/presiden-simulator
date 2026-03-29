"use client"

import { useState, useEffect, Fragment } from "react";
import { X, Zap, Shield, Eye, Target, Radar, Satellite, Cpu, Radio, Search, ShieldAlert, Clock, Loader2, Info, Flame, Users, TrendingUp, TrendingDown, Activity, Globe, Bomb, Radiation, Map as MapIcon, RadioTower, EyeOff, Briefcase } from "lucide-react"
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, DASHBOARD_LABELS } from "@/app/database/data/types/1_kelistrikan";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { formatGameDate, addDays, getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { calculateConstructionProgress, getStatusText } from "@/app/game/data/construction/constructionLogic";
import { countries } from "@/app/database/data/countries/region/index";
import NavigasiWaktu from "../../2_ekonomi/1-perdagangan/NavigasiWaktu";

export default function IntelijenModal({ isOpen, onClose, data }: { isOpen: boolean; onClose: () => void; data: any }) {
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
        console.error("DEBUG: Intel Hub poll error", err);
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

  const intelGroups = [
    {
      id: "infra_intel",
      title: "Infrastruktur Intelijen & Radar",
      icon: Search,
      color: "text-cyan-400",
      items: [
        { key: "satellite", groupId: "infra", label: "Sistem Satelit", icon: Satellite, desc: "Orbit Intelijen", cost: 350, buildTime: 180, maintenanceCost: 100, lowongan_kerja: 80, count: (currentData.militer_strategis?.intel_radar?.sistem_satelit || 0) + ((buildingDeltas["satellite"] as number) || 0), consumption: 0 },
        { key: "radar", groupId: "infra", label: "Jaringan Radar", icon: Radar, desc: "Deteksi Dini", cost: 120, buildTime: 90, maintenanceCost: 30, lowongan_kerja: 50, count: (currentData.militer_strategis?.intel_radar?.jaringan_radar || 0) + ((buildingDeltas["radar"] as number) || 0), consumption: 5 },
        { key: "operasi_siber", groupId: "infra", label: "Operasi Siber", icon: Cpu, desc: "Perang Digital", cost: 180, buildTime: 120, maintenanceCost: 40, lowongan_kerja: 120, count: (currentData.militer_strategis?.intel_radar?.operasi_siber || 0) + ((buildingDeltas["operasi_siber"] as number) || 0), consumption: 10 }
      ]
    },
    {
      id: "ops_strategis",
      title: "Operasi Strategis Nasional",
      icon: Target,
      color: "text-rose-500",
      isStatusOnly: true,
      items: [
        { key: "spionase", label: "Operasi Spionase", icon: Eye, desc: "Agen Lapangan", value: `${currentData.militer_strategis?.operasi_strategis?.misi_mata_mata || 0} Agen`, color: "text-indigo-400" },
        { key: "sabotase", label: "Misi Sabotase", icon: Bomb, desc: "Target Teridentifikasi", value: `${currentData.militer_strategis?.operasi_strategis?.misi_sabotase || 0} Target`, color: "text-orange-500" },
        { key: "nuklir", label: "Program Nuklir", icon: Radiation, desc: "Kesiapan Strategis", value: `${currentData.militer_strategis?.operasi_strategis?.program_nuklir || 0}% Ready`, color: "text-yellow-500" },
        { key: "wilayah", label: "Manajemen Wilayah", icon: MapIcon, desc: "Kontrol Administrasi", value: `${currentData.militer_strategis?.operasi_strategis?.manajemen_wilayah || 0}% Kontrol`, color: "text-emerald-500" }
      ]
    }
  ];

  const handleBuildRequest = (item: any) => {
    if (item.isStatusOnly) return;
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
      console.error("DEBUG: Intel Hub build error", err);
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
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-xl">
              <Eye className="h-6 w-6 text-cyan-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Hub Intelijen Nasional</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Strategic Intelligence Hub</p>
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="space-y-12">
            {intelGroups.map((group) => (
              <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3 mb-5 px-1">
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}><group.icon className={`h-4 w-4 ${group.color}`} /></div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title}</h3>
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
                        
                        return (
                          <BuildingCard
                            key={item.key || idx}
                            item={item}
                            onBuild={handleBuildRequest}
                            construction={currentConstruction}
                            isStatusOnly={group.isStatusOnly}
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
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-md p-8 shadow-2xl scale-in-center animate-in zoom-in duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20"><confirmBuild.icon className="h-8 w-8 text-cyan-500" /></div>
                <div>
                  <h3 className="text-xl font-black text-white">{confirmBuild.label}</h3>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{confirmBuild.desc}</p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50 space-y-3">
                  <div className="flex items-center justify-between"><span className="text-xs text-zinc-500 font-bold">Biaya Pembangunan</span><span className="text-sm font-black text-white">{confirmBuild.cost}</span></div>
                  <div className="flex items-center justify-between"><span className="text-xs text-zinc-500 font-bold">Waktu Pengerjaan</span><span className="text-sm font-black text-cyan-400">{confirmBuild.buildTime} Hari</span></div>
                  <div className="flex items-center justify-between"><span className="text-xs text-zinc-500 font-bold">Beban Listrik</span><span className="text-sm font-black text-rose-500">{confirmBuild.consumption} MW / unit</span></div>
                </div>
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
                <button onClick={handleConfirmBuild} className="py-3 rounded-xl bg-cyan-600 text-white font-black uppercase text-xs shadow-lg shadow-cyan-900/40 hover:bg-cyan-500 transition-all">Konfirmasi</button>
              </div>
            </div>
          </div>
        )}

        {/* Queue Drawer */}
        <div className={`absolute top-0 right-0 bottom-0 w-80 bg-zinc-950 border-l border-zinc-800 z-[110] transform transition-transform duration-500 ease-in-out shadow-2xl ${showQueue ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2"><Clock size={16} className="text-cyan-500" /><h3 className="text-sm font-black text-white uppercase tracking-widest">Antrean Intelijen</h3></div>
              <button onClick={() => setShowQueue(false)} className="p-2 hover:bg-zinc-900 rounded-lg text-zinc-500"><X size={16} /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar">
              {activeConstructions.filter(c => ["infra", "intel"].includes(c.sector)).length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 opacity-20 text-center"><Search size={40} className="mb-4" /><p className="text-[10px] font-black uppercase tracking-widest">Tidak ada antrean</p></div>
              ) : (
                activeConstructions.filter(c => ["infra", "intel"].includes(c.sector)).map((item, idx) => {
                  const progress = calculateConstructionProgress(item.startDate, item.endDate, getStoredGameDate().getTime());
                  return (
                    <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 space-y-3">
                      <div className="flex justify-between items-center relative z-10"><h4 className="text-xs font-black text-white">{item.label}</h4><span className="text-[10px] font-bold text-cyan-400">{progress.percentage}%</span></div>
                      <div className="h-1.5 w-full bg-zinc-950 rounded-full mt-2 overflow-hidden border border-zinc-800/50"><div className={`h-full bg-cyan-500`} style={{ width: `${progress.percentage}%` }} /></div>
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

function BuildingCard({ item, onBuild, construction, isStatusOnly = false }: any) {
  const [showDetail, setShowDetail] = useState(false);
  const currentDate = getStoredGameDate().getTime();
  const progress = construction ? calculateConstructionProgress(construction.startDate, construction.endDate, currentDate) : null;

  // Workforce occupancy logic
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
    <div className={`bg-zinc-900/40 border ${progress ? 'border-cyan-500/30 bg-cyan-900/5' : 'border-zinc-800/60'} p-4 rounded-2xl transition-all group flex flex-col gap-3 relative overflow-hidden h-full min-h-[440px]`}>
      {progress && (
        <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000" style={{ width: `${progress.percentage}%` }} />
      )}

      {showDetail && (
        <div className="absolute inset-0 z-50 bg-zinc-950/98 backdrop-blur-md p-6 flex flex-col animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Info size={18} />
              </div>
              <div>
                <h5 className="text-[14px] font-black text-white uppercase tracking-wider italic">Detail Intelijen</h5>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none mt-0.5">Spesifikasi &amp; Kapasitas</p>
              </div>
            </div>
            <button onClick={() => setShowDetail(false)} className="p-2.5 hover:bg-zinc-800/80 rounded-xl text-zinc-500 hover:text-white transition-all cursor-pointer border border-transparent hover:border-zinc-700">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto no-scrollbar pr-1">
            <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/30">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] opacity-60">Nama Operasi/Aset</span>
              <h4 className="text-xl font-black text-amber-400 uppercase italic leading-tight tracking-tight">{item.label}</h4>
            </div>

            <div className="grid gap-2">
              {!isStatusOnly ? (
                <>
                  <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-rose-500/10 rounded-lg text-rose-400"><Flame size={12} /></div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Pemeliharaan</span>
                    </div>
                    <span className="text-[14px] font-black text-rose-400">-{item.maintenanceCost || 5} <span className="text-[9px] text-rose-500/50 italic opacity-80">/ HARI</span></span>
                  </div>

                  {item.consumption > 0 && (
                    <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 bg-amber-500/10 rounded-lg text-amber-500"><Zap size={12} /></div>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Beban Energi</span>
                      </div>
                      <span className="text-[14px] font-black text-amber-500">{item.consumption} MW</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400"><Users size={12} /></div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Lowongan</span>
                    </div>
                    <span className="text-[14px] font-black text-blue-400">+{(item.lowongan_kerja || 0).toLocaleString('id-ID')} <span className="text-[9px] text-blue-500/50 italic opacity-80">/ UNIT</span></span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-cyan-500/10 rounded-lg text-cyan-500"><Briefcase size={12} /></div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Okupansi Tenaga Kerja</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[14px] font-black text-cyan-400">{filledVacancies.toLocaleString('id-ID')} <span className="text-[9px] text-zinc-400">/ {totalVacancies.toLocaleString('id-ID')}</span></span>
                      <span className="text-[8px] font-black text-cyan-500 uppercase tracking-widest leading-none italic opacity-90">UPDATE: {nextDateStr}</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-2 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/50">
                   <div className="flex items-center gap-2 mb-2">
                     <Info size={14} className="text-cyan-400" />
                     <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Status Strategis Nasional</span>
                   </div>
                   <p className="text-xs text-zinc-400 leading-relaxed font-medium">Berdasarkan direktif Komando Tertinggi, status ini mencerminkan kesiapan intelijen negara terhadap ancaman luar dan dalam negeri.</p>
                </div>
              )}
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
            <item.icon className={`h-5 w-5 ${progress ? 'text-white' : (item.color || 'text-cyan-500')} shadow-[0_0_10px_rgba(6,182,212,0.3)]`} />
          </div>
          <button onClick={() => setShowDetail(!showDetail)} className={`p-2.5 rounded-xl border transition-all cursor-pointer ${showDetail ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30'}`}>
            <Info size={16} />
          </button>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
            {item.desc}
          </div>
          {!isStatusOnly && (
            <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              Aktif: {item.count} Unit
            </div>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="flex-1 flex flex-col relative z-10 mt-1">
        <h4 className="text-[17px] font-black text-zinc-100 tracking-tight group-hover:text-amber-400 transition-colors uppercase italic leading-tight mb-3">
          {item.label}
        </h4>

        {isStatusOnly ? (
          <div className="flex flex-col gap-4 flex-1 justify-center items-center bg-zinc-950/20 rounded-3xl border border-zinc-800/30 p-4">
             <span className={`text-3xl font-black ${item.color || 'text-white'} tracking-tighter`}>{item.value}</span>
             <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] text-center">Status Terkini</span>
          </div>
        ) : (
          <div className="flex flex-col gap-2.5 flex-1">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-rose-500/10 rounded-lg">
                <Flame size={12} className="text-rose-400" />
              </div>
              <span className="text-[12px] font-bold text-rose-400/90">Pemeliharaan: -{item.maintenanceCost || 5}/hari</span>
            </div>

            {item.consumption > 0 && (
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-amber-500/10 rounded-lg"><Zap size={12} className="text-amber-500/90" /></div>
                <span className="text-[12px] font-bold text-amber-500/80">Konsumsi: {item.consumption} MW/unit</span>
              </div>
            )}

            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-blue-500/10 rounded-lg"><Users size={12} className="text-blue-400" /></div>
              <span className="text-[12px] font-bold text-blue-400/80">Lowongan: {(item.lowongan_kerja || 0).toLocaleString('id-ID')} Jiwa</span>
            </div>

            {!progress && (
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-zinc-800/50 rounded-lg"><Clock size={12} className="text-zinc-500" /></div>
                <span className="text-[11px] font-bold text-zinc-500 italic">Waktu: {item.buildTime} Hari</span>
              </div>
            )}
          </div>
        )}

        {!isStatusOnly && (
          <div className="mt-4 pt-4 border-t border-zinc-800/30 flex flex-col gap-1.5 bg-zinc-950/30 rounded-2xl p-4 border border-zinc-800/20 shadow-inner">
            <div className="flex justify-between items-baseline gap-2">
              <span className="text-[13px] font-black text-cyan-500 uppercase tracking-[0.15em] italic">TOTAL KAPASITAS:</span>
              <span className="text-[22px] font-black text-cyan-400 tracking-tight">{(item.count || 0).toLocaleString('id-ID')} <span className="text-[12px] text-cyan-500/50 font-normal uppercase italic ml-1">Asset</span></span>
            </div>
          </div>
        )}
      </div>

      {/* Build button / progress */}
      <div className="mt-auto pt-4 relative z-10">
        {!isStatusOnly ? (
          progress ? (
            <div className="space-y-3 bg-zinc-950/50 p-3 rounded-2xl border border-zinc-800/50">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Loader2 size={12} className={`animate-spin ${progress.isWaiting ? 'text-zinc-600' : 'text-indigo-400'}`} />
                  {getStatusText(progress.percentage, progress.isWaiting)}
                </span>
                <span className={progress.colorClass.replace('bg-cyan', 'text-indigo')}>{progress.percentage}%</span>
              </div>
              <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/30 p-0.5">
                <div className={`h-full transition-all duration-1000 ${progress.colorClass.replace('bg-cyan', 'bg-indigo')} rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)]`} style={{ width: `${progress.percentage}%` }} />
              </div>
              <div className="flex justify-between items-center text-[9px] font-bold text-zinc-500 uppercase tracking-tighter italic opacity-70">
                <span className="flex items-center gap-1"><Clock size={10} /> ESTIMASI:</span>
                <span className="text-zinc-400">{formatGameDate(new Date(construction.endDate))}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-zinc-600 uppercase tracking-widest leading-none">Biaya Akuisisi</span>
                <span className="text-xl font-black text-zinc-400 tracking-tight mt-1">{item.cost}</span>
              </div>
              <button onClick={(e) => { e.stopPropagation(); onBuild(item); }} className="flex-1 py-3.5 rounded-2xl bg-cyan-600 text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(8,145,178,0.4)] transition-all cursor-pointer active:scale-95 border border-cyan-400/20">
                Deploy
              </button>
            </div>
          )
        ) : (
          <div className="w-full py-3.5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 text-center">
             <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] animate-pulse">Monitoring Strategis Aktif</span>
          </div>
        )}
      </div>
    </div>
  )
}
