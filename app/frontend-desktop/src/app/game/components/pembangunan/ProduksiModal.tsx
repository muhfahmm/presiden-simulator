import { useState, useEffect } from "react";
import { X, Wrench, Zap, Pickaxe, Factory, Construction, Store, Beef, Wheat, Radiation, Coins, Flame, Droplets, FlaskConical, Shovel, Container, Car, Bike, Hammer, Trees, Coffee, Cookie, Milk, Fish, Waves, Shell, Sprout, Activity, TrendingUp, TrendingDown, Clock, Loader2, RefreshCw, Eye, EyeOff } from "lucide-react"
import { mineralKritisRate, produkIndustriRate, komoditasPanganRate } from "../../../select-country/data/pembangunan/laju-produksi";
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, DASHBOARD_LABELS, KAPASITAS_LISTRIK_METADATA } from "../../../select-country/data/electricity";
import { gameStorage } from "../../gamestorage";
import { formatGameDate, addDays, getStoredGameDate } from "../../data/time/gameTime";
import { calculateConstructionProgress, getStatusText } from "../../data/construction/constructionLogic";
import { countries } from "../../../select-country/data/countries";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProduksiHubV3({ isOpen, onClose }: ModalProps) {
  const [confirmBuild, setConfirmBuild] = useState<any | null>(null);
  const [tick, setTick] = useState(0);
  const [activeConstructions, setActiveConstructions] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [collapsedSectors, setCollapsedSectors] = useState<Set<string>>(new Set());

  const toggleSector = (id: string) => {
    setCollapsedSectors(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Sync queue data whenever tick or confirmBuild changes or modal opens
  useEffect(() => {
    if (!isOpen) return;
    const session = gameStorage.getSession();
    if (session && Array.isArray(session.constructionQueue)) {
      setActiveConstructions(session.constructionQueue);
    } else {
      setActiveConstructions([]);
    }
  }, [tick, confirmBuild, isOpen]);

  // Debug log for checking key matching
  useEffect(() => {
    if (isOpen && activeConstructions.length > 0) {
      console.log("DEBUG: Active constructions in modal:", activeConstructions);
    }
  }, [activeConstructions, isOpen]);

  // Polling for progress updates and completion
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      try {
        const session = gameStorage.getSession();
        if (!session) return;
        
        const queueToProcess = session.constructionQueue;
        if (!queueToProcess || !Array.isArray(queueToProcess)) {
          return;
        }

        const nowTime = getStoredGameDate().getTime();
        const itemsToFinish = queueToProcess.filter(item => item && typeof item.endDate === 'number' && nowTime >= item.endDate);
        
        if (itemsToFinish.length > 0) {
          itemsToFinish.forEach(finishItem => {
            if (finishItem.buildingKey) {
              gameStorage.incrementBuildingCount(finishItem.buildingKey);
              gameStorage.removeFromQueue(finishItem.id);
            }
          });
        }
        
        setTick(t => t + 1);
      } catch (err) {
        console.error("DEBUG: Interval error", err);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  // Data retrieval for UI rendering
  const session = gameStorage.getSession();
  const currentCountryCode = session?.country || "Indonesia";
  const currentData = countries.find((c: any) => 
    c.name_id === currentCountryCode || 
    c.name_en === currentCountryCode || 
    (c.id && c.id === currentCountryCode)
  ) || countries[79] || countries[0]; // countries[79] is Indonesia

  const buildingDeltas = (session && typeof session.buildingDeltas === 'object') ? session.buildingDeltas : {};

  const totalPasokan = hitungTotalKapasitas(currentData.infrastructure);
  const totalBeban = hitungTotalKonsumsiNasional(currentData);

  let adjustedTotalPasokan = totalPasokan;
  let adjustedTotalBeban = totalBeban;

  const deltaEntries = Object.entries(buildingDeltas);
  deltaEntries.forEach(([key, deltaValue]) => {
    const meta = KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA];
    if (meta && typeof deltaValue === 'number') {
      adjustedTotalPasokan += (deltaValue * meta.production);
    }
  });

  const surplus = adjustedTotalPasokan - adjustedTotalBeban;

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
        
        const newItem = gameStorage.addToQueue({
          buildingKey: confirmBuild.key,
          label: confirmBuild.label,
          sector: confirmBuild.groupId,
          startDate: currentStart,
          endDate: currentEnd,
          buildTime: confirmBuild.buildTime
        });

        if (newItem) {
          itemsToAdd.push(newItem);
        }
        
        // Next building starts when this one ends
        currentStart = currentEnd;
      }
      
      if (itemsToAdd.length > 0) {
        setActiveConstructions(prev => [...prev, ...itemsToAdd]);
      }
      
      setConfirmBuild(null);
      setQuantity(1);
    } catch (err) {
      console.error("DEBUG: Add to queue error", err);
    }
  };

  const productionGroups = [
    {
      id: "kelistrikan",
      title: "Infrastruktur Kelistrikan",
      icon: Zap,
      color: "text-amber-400",
      items: Object.entries(KAPASITAS_LISTRIK_METADATA).map(([key, val]: [string, any]) => ({
        key,
        groupId: "kelistrikan",
        label: val.desc,
        icon: key === "hydro_plant" ? Droplets : (key === "nuclear_plant" ? Radiation : (key === "thermal_plant" ? Flame : Zap)),
        desc: "Energi Listrik",
        rate: val.production,
        unit: val.unit,
        count: (currentData.infrastructure[key as keyof typeof currentData.infrastructure] || 0) + ((buildingDeltas[key] as number) || 0),
        income: 0,
        cost: 25,
        buildTime: val.buildTime || 90
      }))
    },
    // ... group lain tetap sama
    {
      id: "ekstraksi",
      title: "Sektor Ekstraksi & Energi",
      icon: Pickaxe,
      color: "text-orange-500",
      items: Object.entries(mineralKritisRate).map(([key, val]: [string, any]) => {
        let count = 0;
        if (val.isInfrastructure) {
          count = currentData.infrastructure[val.dataKey as keyof typeof currentData.infrastructure] || 0;
        } else {
          count = currentData.sector_extraction[val.dataKey as keyof typeof currentData.sector_extraction] || 0;
        }
        return {
          key,
          groupId: "ekstraksi",
          label: val.desc,
          icon: key.includes("uranium") ? Radiation : (key.includes("oil") ? Droplets : (key.includes("gas") ? Flame : (key.includes("gold") ? Coins : Pickaxe))),
          desc: "Sumber Daya Alam",
          rate: val.production,
          unit: val.unit,
          count: count + ((buildingDeltas[key] as number) || 0),
          income: val.income,
          cost: 25,
          buildTime: val.buildTime || 30
        };
      })
    },
    {
      id: "manufaktur",
      title: "Sektor Pengolahan & Manufaktur",
      icon: Factory,
      color: "text-cyan-400",
      items: Object.entries(produkIndustriRate).map(([key, val]: [string, any]) => ({
        key,
        groupId: "manufaktur",
        label: val.desc,
        icon: key.includes("semiconductor") ? Zap : (key.includes("car") ? Car : (key.includes("motorcycle") ? Bike : Factory)),
        desc: "Produk Industri",
        rate: val.production,
        unit: val.unit,
        count: (currentData.sector_manufacturing[key as keyof typeof currentData.sector_manufacturing] || 0) + ((buildingDeltas[key] as number) || 0),
        income: 0,
        cost: 35,
        buildTime: val.buildTime || 45
      }))
    },
    {
      id: "pangan",
      title: "Sektor Pangan & Komoditas",
      icon: Wheat,
      color: "text-emerald-400",
      items: Object.entries(komoditasPanganRate).map(([key, val]: [string, any]) => {
        const agriCount = currentData.sector_agriculture[key as keyof typeof currentData.sector_agriculture] || 0;
        const liveCount = currentData.sector_livestock[key as keyof typeof currentData.sector_livestock] || 0;
        return {
          key,
          groupId: "pangan",
          label: val.desc,
          icon: key.includes("ayam") || key.includes("chicken") || key.includes("sapi") || key.includes("beef") ? Beef : Wheat,
          desc: "Komoditas Pangan",
          rate: val.production,
          unit: val.unit,
          count: (agriCount || liveCount) + ((buildingDeltas[key] as number) || 0),
          income: 0,
          cost: 15,
          buildTime: val.buildTime || 20
        };
      })
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-xl">
              <Wrench className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Produksi Hub</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Production Hub</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose} 
              className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2"
            >
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dashboard Summary Listrik */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50">
            {/* Dashboard: Electricity Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Box 1: Pasokan Listrik */}
              <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Zap className="h-6 w-6 text-cyan-500" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.supply.title}</p>
                  <p className="text-xl font-black text-white leading-tight">{(adjustedTotalPasokan * 10).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
                </div>
              </div>

              {/* Box 2: Beban Listrik */}
              <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-rose-500/10 rounded-xl">
                  <Activity className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.usage.title}</p>
                  <p className="text-xl font-black text-white leading-tight">{(adjustedTotalBeban * 10).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
                </div>
              </div>

              {/* Box 3: Neraca Listrik */}
              <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden group">
                <div className={`p-3 rounded-xl ${surplus >= 0 ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>
                  {surplus >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-500" />}
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.balance.title}</p>
                  <p className={`text-xl font-black leading-tight ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                    {(surplus * 10).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span>
                  </p>
                </div>
              </div>
            </div>

        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="space-y-12">
            {productionGroups.map((group) => (
              <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3 mb-5 px-1">
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}>
                    <group.icon className={`h-4 w-4 ${group.color}`} />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title} <span className="text-zinc-500 ml-3 font-bold lowercase italic text-xs tracking-normal opacity-60">({group.items.length} Jenis)</span></h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
                  
                  {/* Hide/Show Toggle */}
                  <button 
                    onClick={() => toggleSector(group.id)}
                    className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all duration-700 cursor-pointer group/eye ml-4 shadow-lg active:scale-95"
                    title={collapsedSectors.has(group.id) ? "Tampilkan Sektor" : "Sembunyikan Sektor"}
                  >
                    {collapsedSectors.has(group.id) ? (
                      <EyeOff size={16} className="group-hover/eye:scale-110 transition-transform duration-700 rotate-12" />
                    ) : (
                      <Eye size={16} className="group-hover/eye:scale-110 transition-transform duration-700 text-cyan-400" />
                    )}
                  </button>
                </div>
                
                {/* Collapsible Content Grid with Smooth Transition */}
                <div className={`grid transition-all duration-700 ease-in-out ${!collapsedSectors.has(group.id) ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 pb-4">
                      {group.items.map((item, idx) => {
                        const currentConstruction = activeConstructions?.find(c => c && c.buildingKey === item.key);

                        return (
                          <BuildingCard 
                            key={item.key || idx} 
                            item={item} 
                            onBuild={handleBuildRequest} 
                            construction={currentConstruction}
                            cumulative={session?.cumulativeProduction?.[item.key] || 0}
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

        {/* Confirmation Modal Overlay */}
        {confirmBuild && (
          <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[32px] shadow-2xl max-w-md w-full mx-4 flex flex-col items-center text-center gap-6 animate-in zoom-in-95">
              <div className="p-5 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                <confirmBuild.icon className="h-10 w-10 text-cyan-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Konfirmasi Bangun?</h3>
                <p className="text-zinc-400 text-sm font-medium">Anda akan membangun <span className="text-white font-black underline">{confirmBuild.label}</span> untuk meningkatkan kapasitas produksi nasional.</p>
              </div>
              
              <div className="w-full grid grid-cols-2 gap-3">
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Biaya Total</span>
                  <span className="text-xl font-black text-amber-500 group-hover:scale-110 transition-transform duration-300 tracking-tight">Rp {confirmBuild.cost * quantity} T</span>
                </div>
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Waktu Total</span>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-cyan-500" />
                    <span className="text-xl font-black text-white group-hover:scale-110 transition-transform duration-300 tracking-tight">{confirmBuild.buildTime * quantity} Hari</span>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="w-full flex flex-col gap-2">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Jumlah Unit Pembangunan</span>
                <div className="flex items-center justify-center gap-6 bg-zinc-950/80 border border-zinc-800 p-2 rounded-2xl">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 text-xl font-black text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-inner active:scale-95"
                  >
                    -
                  </button>
                  <div className="flex flex-col items-center min-w-[80px]">
                    <span className="text-3xl font-black text-white tracking-tighter">{quantity}</span>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter italic">Unit</span>
                  </div>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 text-xl font-black text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-inner active:scale-95"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="w-full py-2 px-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 text-[10px] font-medium text-cyan-500/80 italic">
                Selesai Bertahap S/D: {formatGameDate(addDays(getStoredGameDate(), confirmBuild.buildTime * quantity))}
              </div>

              <div className="flex gap-4 w-full mt-2">
                <button 
                  onClick={() => setConfirmBuild(null)}
                  className="flex-1 px-6 py-4 rounded-2xl bg-zinc-800/50 text-zinc-400 font-black text-xs uppercase tracking-widest border border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer"
                >
                  Batal
                </button>
                <button 
                  onClick={handleConfirmBuild}
                  className="flex-2 px-6 py-4 rounded-2xl bg-cyan-600 text-white font-black text-xs uppercase tracking-widest shadow-[0_10px_20px_rgba(8,145,178,0.3)] hover:bg-cyan-500 hover:shadow-[0_20px_40px_rgba(8,145,178,0.4)] transition-all cursor-pointer active:scale-95"
                >
                  Bangun Sekarang
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function BuildingCard({ item, onBuild, construction, cumulative }: { item: any, onBuild: (item: any) => void, construction?: any, cumulative: number }) {
  const currentDate = getStoredGameDate().getTime();
  const progress = construction 
    ? calculateConstructionProgress(construction.startDate, construction.endDate, currentDate)
    : null;

  return (
    <div className={`bg-zinc-900/40 border ${progress ? 'border-cyan-500/30 bg-cyan-900/5' : 'border-zinc-800/60'} p-4 rounded-2xl transition-all group flex flex-col gap-3 relative overflow-hidden h-full`}>
      {/* Background Progress Highlight */}
      {progress && (
        <div 
          className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000" 
          style={{ width: `${progress.percentage}%` }}
        />
      )}

      <div className="flex items-start justify-between relative z-10">
        <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform">
          <item.icon className={`h-5 w-5 ${progress ? 'text-white' : 'text-cyan-500'} shadow-[0_0_10px_rgba(6,182,212,0.3)]`} />
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
            {item.desc || "Infrastruktur"}
          </div>
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-black text-emerald-400 uppercase tracking-tighter">
            Terbangun: {item.count} Unit
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col gap-1 relative z-10 mt-1">
        <h4 className="text-[15px] font-black text-zinc-100 tracking-tight group-hover:text-white transition-colors leading-tight">{item.label}</h4>
        
        <div className="flex flex-col gap-1 mt-1">
          <div className="flex items-center gap-2">
            <Zap size={12} className="text-amber-500" />
            <span className="text-[13px] font-bold text-amber-500/90">+{item.rate} {item.unit}/unit</span>
          </div>
          
          {item.income > 0 && (
            <div className="flex items-center gap-2">
              <Coins size={12} className="text-emerald-400" />
              <span className="text-[13px] font-bold text-emerald-400">Rate: Rp {item.income} M/unit</span>
            </div>
          )}

          {!progress && (
            <div className="flex items-center gap-2">
              <Clock size={12} className="text-zinc-500" />
              <span className="text-[12px] font-bold text-zinc-500 italic">Konstruksi: {item.buildTime} Hari</span>
            </div>
          )}

          {/* New Total Output Section */}
          <div className="mt-3 pt-3 border-t border-zinc-800/30 flex flex-col gap-1.5 bg-zinc-950/30 rounded-xl p-3">
            <div className="flex justify-between items-baseline gap-2">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-tighter">Hasil Produksi:</span>
              <span className="text-[14px] font-black text-white tracking-tight">{(item.count * item.rate).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-400 font-normal uppercase italic">{item.unit}/hr</span></span>
            </div>
            {item.income > 0 && (
              <div className="flex justify-between items-baseline gap-2 border-t border-zinc-800/10 pt-1.5 mt-1">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-tighter">Pendapatan:</span>
                <span className="text-[14px] font-black text-emerald-400 tracking-tight">Rp {(item.count * item.income).toLocaleString('id-ID')} M <span className="text-[10px] text-emerald-400/60 font-normal uppercase italic">/hr</span></span>
              </div>
            )}
            {/* Cumulative Display - Only for "Harvestable" sectors (Extraction & Food) */}
            {(item.groupId !== "kelistrikan" && item.groupId !== "manufaktur") && (
              <div className="flex justify-between items-baseline gap-2 border-t border-zinc-800/10 pt-1.5 mt-1">
                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-tighter italic">Total Akumulasi:</span>
                <span className="text-[14px] font-black text-cyan-400 tracking-tight">{cumulative.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-400 font-normal uppercase italic">{item.unit}</span></span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto pt-3 relative z-10">
          {progress ? (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Loader2 size={10} className={`animate-spin ${progress.isWaiting ? 'text-zinc-600' : 'text-cyan-400'}`} />
                  {getStatusText(progress.percentage, progress.isWaiting)}
                </span>
                <span className={progress.colorClass.replace('bg-', 'text-')}>{progress.percentage}%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                <div 
                  className={`h-full transition-all duration-1000 ${progress.colorClass} shadow-[0_0_10px_rgba(6,182,212,0.2)]`}
                  style={{ width: `${progress.percentage}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[8px] font-bold text-zinc-500 uppercase tracking-tighter italic">
                <span>Estimasi Selesai:</span>
                <span className="text-zinc-400">{formatGameDate(new Date(construction.endDate))}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-zinc-400 font-bold tracking-tight">Biaya: Rp {item.cost} T</span>
              <button 
                onClick={(e) => { e.stopPropagation(); onBuild(item); }}
                className="px-5 py-2 rounded-xl bg-cyan-600/10 text-cyan-500 text-xs font-black uppercase tracking-widest border border-cyan-500/30 hover:bg-cyan-600 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
              >
                Bangun
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
