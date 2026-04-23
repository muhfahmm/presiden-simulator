"use client"

import { useState, useEffect } from "react"
import { X, FileText, Scale, Coins, Smile, Meh, Frown, Angry, AlertCircle, TrendingUp, RefreshCw, Wallet, Globe, Shield, ShieldAlert, Info, Users, ArrowRightLeft, Landmark, BarChart3, Tag } from "lucide-react"
import { countries } from "@/app/database/data/negara/benua/index"
import { CountryData } from "@/app/database/data/semua_fitur_negara/index"
import { gameStorage } from "@/app/game/gamestorage"
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara"
import { taxStorage } from "./TaxStorage"
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi"
import { pbbImpactLogic } from "@/app/game/utils/pbbImpactLogic"
import { AlertTriangle } from "lucide-react"


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu?: string;
  setActiveMenu?: (menu: string) => void;
}

export default function PajakModal({ isOpen, onClose, activeMenu, setActiveMenu }: ModalProps) {
  const session = gameStorage.getSession();
  const initialCountry = countries.find((c: CountryData) => c.name_id === session?.country || c.name_en === session?.country) || countries[0];
  
  // Local state for managed pajak and country budget
  const [managedTaxes, setManagedTaxes] = useState<any>(null);
  const [currentBudget, setCurrentBudget] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentBudget(budgetStorage.getBudget());
    }
  }, [isOpen]);
  const [isSaving, setIsSaving] = useState(false);
  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);

  useEffect(() => {
    if (initialCountry) {
      const savedTaxes = taxStorage.getTaxes(initialCountry.name_en);
      if (savedTaxes) {
        setManagedTaxes(savedTaxes);
      } else {
        setManagedTaxes(JSON.parse(JSON.stringify(initialCountry.pajak)));
      }
    }
  }, [initialCountry, isOpen]);

  const pbbMultipliers = pbbImpactLogic.getCountryMultipliers(initialCountry.name_en);
  const pbbStatusColor = pbbImpactLogic.getStatusColor(pbbMultipliers.impactLevel, 'text-green-400');
  const isImpacted = pbbMultipliers.impactLevel !== 'clear';

  if (!isOpen || !managedTaxes) return null;

  // â”€â”€ Klasifikasi dinamis berdasarkan key data negara â”€â”€
  // Key perdagangan diketahui (global), sisanya = domestik
  const TRADE_KEYS = new Set(["bea_cukai", "transit_sekutu", "transit_non_sekutu", "tarif_ekspor", "tarif_impor"]);

  // Palet warna otomatis berdasarkan index
  const DOMESTIC_PALETTES = [
    { color: "text-purple-400", accent: "bg-purple-500" },
    { color: "text-cyan-400",   accent: "bg-cyan-500"   },
    { color: "text-green-400",  accent: "bg-green-500"  },
    { color: "text-emerald-400",accent: "bg-emerald-500"},
    { color: "text-sky-400",    accent: "bg-sky-500"    },
    { color: "text-violet-400", accent: "bg-violet-500" },
    { color: "text-teal-400",   accent: "bg-teal-500"   },
    { color: "text-zinc-400",   accent: "bg-zinc-500"   },
  ];
  const TRADE_PALETTES = [
    { color: "text-amber-400",  accent: "bg-amber-500"  },
    { color: "text-blue-400",   accent: "bg-blue-500"   },
    { color: "text-rose-400",   accent: "bg-rose-500"   },
    { color: "text-orange-400", accent: "bg-orange-500" },
  ];

  // Label & tooltip otomatis dari key
  const autoLabel = (key: string): string => key
    .replace(/_/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

  const autoInfo = (key: string, isTrade: boolean): string => isTrade
    ? `Pajak perdagangan: ${autoLabel(key)}. Mempengaruhi hubungan diplomatik dan pendapatan ekspor/impor.`
    : `Pajak domestik: ${autoLabel(key)}. Mempengaruhi kepuasan rakyat dan pendapatan negara.`;

  // Build dynamic arrays dari key yang ada di managedTaxes
  const allKeys = Object.keys(managedTaxes);
  const domesticTaxes = allKeys
    .filter(k => !TRADE_KEYS.has(k))
    .map((k, i) => ({
      key: k,
      label: autoLabel(k),
      info: autoInfo(k, false),
      ...DOMESTIC_PALETTES[i % DOMESTIC_PALETTES.length]
    }));
  const tradeTaxes = allKeys
    .filter(k => TRADE_KEYS.has(k))
    .map((k, i) => ({
      key: k,
      label: autoLabel(k),
      info: autoInfo(k, true),
      ...TRADE_PALETTES[i % TRADE_PALETTES.length]
    }));


  const handleRateChange = (key: string, newRate: number) => {
    const oldData = (initialCountry.pajak as any)[key];
    const baseRevenue = (oldData?.pendapatan || 0) / (oldData?.tarif || 1);
    const newRevenue = Math.floor(baseRevenue * newRate);
    
    // Satisfaction/Diplomacy impact
    const isTradeTax = TRADE_KEYS.has(key);
    const impactMultiplier = isTradeTax ? 2.0 : 1.5; 
    
    let specializedImpact = 0;
    if (key === 'transit_sekutu' && newRate > 10) specializedImpact = (newRate - 10) * 1.5;
    if (key === 'transit_non_sekutu' && newRate > 25) specializedImpact = (newRate - 25) * 1.0;

    const totalImpact = ((newRate - oldData.tarif) * impactMultiplier) + specializedImpact;
    const newSatisfaction = Math.max(0, Math.min(100, Math.floor(oldData.kepuasan - totalImpact)));

    setManagedTaxes((prev: any) => ({
      ...prev,
      [key]: {
        ...prev[key],
        tarif: newRate,
        pendapatan: newRevenue,
        kepuasan: newSatisfaction
      }
    }));
  };

  const getSatisfactionIcon = (score: number, isTrade?: boolean) => {
    if (isTrade) {
      if (score >= 80) return <Globe className="h-4 w-4 text-blue-400 animate-pulse" />;
      if (score >= 60) return <Shield className="h-4 w-4 text-cyan-400" />;
      if (score >= 40) return <Globe className="h-4 w-4 text-yellow-400" />;
      if (score >= 20) return <AlertCircle className="h-4 w-4 text-orange-400" />;
      return <ShieldAlert className="h-4 w-4 text-red-500 animate-bounce" />;
    }
    if (score >= 80) return <Smile className="h-4 w-4 text-green-400" />;
    if (score >= 60) return <Smile className="h-4 w-4 text-lime-400 opacity-80" />;
    if (score >= 40) return <Meh className="h-4 w-4 text-yellow-400" />;
    if (score >= 20) return <Frown className="h-4 w-4 text-orange-400" />;
    return <Angry className="h-4 w-4 text-red-500 animate-pulse" />;
  };

  const allTaxItems = [...domesticTaxes, ...tradeTaxes];
  const rawTotalRevenue = allTaxItems.reduce((acc, item) => acc + (managedTaxes[item.key]?.pendapatan || 0), 0);
  const totalRevenue = Math.floor(rawTotalRevenue * pbbMultipliers.tax);
  const initialTaxes = taxStorage.getTaxes(initialCountry.name_en) || initialCountry.pajak;
  const activeTotalRevenue = allKeys.reduce((acc, k) => acc + ((initialTaxes as any)[k]?.pendapatan || 0), 0);
  const activeAdjustedRevenue = Math.floor(activeTotalRevenue * pbbImpactLogic.getCountryMultipliers(initialCountry.name_en).tax);
  const revenueDelta = totalRevenue - activeAdjustedRevenue;
  const revenueDeltaDaily = revenueDelta / 365;
  const newDailyTax = totalRevenue / 365;
  const projectedBudget = currentBudget + revenueDelta;

  // H-Index Integration (Domestic Taxes Only)
  const avgDomesticSat = domesticTaxes.length > 0
    ? domesticTaxes.reduce((sum, item) => sum + (managedTaxes[item.key]?.kepuasan ?? 50), 0) / domesticTaxes.length
    : 50;
  const taxImpact = avgDomesticSat >= 50 
    ? ((avgDomesticSat - 50) / 50) * 5 
    : ((avgDomesticSat - 50) / 50) * 10;

  // Population Growth Rate (berdasarkan rata-rata tarif pajak domestik)
  const avgDomesticTaxRate = domesticTaxes.length > 0
    ? domesticTaxes.reduce((sum, item) => sum + (managedTaxes[item.key]?.tarif ?? 0), 0) / domesticTaxes.length
    : 0;
  const getPopulationGrowthRate = (rate: number): number => {
    if (rate <= 15) return 0.0001;
    if (rate <= 35) return 0.00005;
    if (rate <= 55) return 0.00002;
    if (rate <= 75) return -0.00003;
    return -0.00008;
  };
  const dailyGrowthRate = getPopulationGrowthRate(avgDomesticTaxRate);
  const monthlyGrowthPercent = dailyGrowthRate * 30 * 100; // % per bulan


  // Daily Happiness Delta (dari kebijakan pajak â€” sama dengan applyDailyHappinessDecay)
  const getDailyHappinessDelta = (rate: number): number => {
    if (rate <= 25) return 0.1;
    if (rate <= 50) return 0;
    if (rate <= 75) return -0.2;
    return -0.5;
  };
  const dailyHappinessDelta = getDailyHappinessDelta(avgDomesticTaxRate);

  // Populasi / Hari (jiwa absolut)
  const currentPopulation = populationStorage.getPopulation();
  const dailyPopulationDelta = Math.round(currentPopulation * dailyGrowthRate);

  const handleApplyReform = () => {
    setIsSaving(true);
    setTimeout(() => {
      budgetStorage.updateBudget(revenueDelta);
      setCurrentBudget(prev => prev + revenueDelta);
      taxStorage.saveTaxes(initialCountry.name_en, managedTaxes); 
      setIsSaving(false);
      alert("Reformasi Pajak Berhasil! Kas negara telah disesuaikan.");
    }, 1500);
  };

  const renderTaxCard = (item: any) => {
    const data = managedTaxes[item.key];
    if (!data) return null;
    const isTrade = tradeTaxes.some(t => t.key === item.key);
    
    return (
      <div key={item.key} className={`bg-zinc-900/40 border ${isTrade ? 'border-amber-500/10 hover:border-amber-500/30' : 'border-zinc-800/80 hover:border-green-500/30'} p-6 rounded-3xl group transition-all flex flex-col gap-6 relative overflow-hidden`}>
        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full ${isTrade ? 'group-hover:bg-amber-500/5' : 'group-hover:bg-green-500/5'} transition-colors`}></div>
        <div className="flex justify-between items-start relative z-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 group/info">
              <span className="text-[9px] font-black text-zinc-600 uppercase tracking-wider">{isTrade ? 'Trade_Logistics_Tax' : 'Domestic_Fiscal_Tax'}</span>
              <button onMouseEnter={() => setHoveredInfo(item.key)} onMouseLeave={() => setHoveredInfo(null)} className="p-1 rounded-full hover:bg-zinc-800 transition-colors" title="Informasi Pajak">
                <Info size={10} className="text-zinc-600 group-hover/info:text-zinc-400" />
              </button>
            </div>
            <h3 className="text-sm font-black text-white leading-tight uppercase tracking-tight">{item.label}</h3>
          </div>
          <div className={`${item.accent}/10 ${item.color} text-[10px] font-black px-2.5 py-1.5 rounded-xl border border-white/5 shadow-inner flex items-center gap-2 tracking-tighter`}>
            <span>{data.tarif}%</span>
            <span className="opacity-30">|</span>
            <span className="text-white">+{data.pendapatan?.toLocaleString('id-ID')}</span>
          </div>
        </div>

        {hoveredInfo === item.key && (
          <div className="absolute inset-0 z-20 bg-zinc-950/95 p-6 flex flex-col justify-center animate-in fade-in zoom-in-95 duration-200">
            <Info className={`h-6 w-6 ${item.color} mb-3`} />
            <p className="text-[11px] text-zinc-300 font-medium leading-relaxed italic">"{item.info}"</p>
          </div>
        )}

        <div className="space-y-4 relative z-10">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter">
              <span className="text-zinc-500">Penyesuaian Tarif</span>
              <span className="text-white font-black">{data.tarif}%</span>
            </div>
            <input type="range" min="0" max="100" value={data.tarif} onChange={(e) => handleRateChange(item.key, parseInt(e.target.value))}
              className={`w-full h-1.5 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-green-500 hover:accent-green-400 transition-all ${isTrade ? 'accent-amber-500 hover:accent-amber-400' : ''}`}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
             <div className="flex flex-col gap-1 bg-zinc-950/50 p-3 rounded-2xl border border-zinc-900">
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter">Penerimaan</span>
                <div className="flex items-center gap-2">
                  <Coins size={14} className="text-yellow-500" />
                  <span className="text-[13px] font-black text-white">+{Math.round(data.pendapatan * pbbMultipliers.tax).toLocaleString('id-ID')}</span>
                </div>
             </div>
             <div className="flex flex-col gap-1 bg-zinc-950/50 p-3 rounded-2xl border border-zinc-900 items-end">
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter text-right">{isTrade ? 'Hubungan Negara' : 'Sentimen Publik'}</span>
                <div className="flex items-center gap-2">
                  {getSatisfactionIcon(data.kepuasan, isTrade)}
                  <span className={`text-xs font-black ${isTrade ? 'text-amber-400/80' : 'text-zinc-300'}`}>{data.kepuasan}%</span>
                </div>
             </div>
          </div>
        </div>
        <div className="h-1 w-full bg-zinc-800/50 rounded-full overflow-hidden relative z-10">
          <div className="h-full transition-all duration-300 bg-green-500" style={{ width: `${data.kepuasan}%` }} />
        </div>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950/90 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        {/* Header (Synchronized with EnergiModal) */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
           <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-xl">
                 <FileText className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                 <h2 className="text-2xl font-bold text-white tracking-tight">Manajemen Pajak Nasional</h2>
                 <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Taxation & Revenue Center</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <button
                 className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group relative shadow-[0_0_15px_rgba(16,185,129,0.1)] active:scale-95 flex items-center gap-2"
                 title="Audit & Kepatuhan"
              >
                 <Scale className="h-6 w-6 text-emerald-500 group-hover:scale-110 transition-transform" />
              </button>
              <button
                 onClick={onClose}
                 className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2"
              >
                 <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
                 <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
              </button>
           </div>
        </div>

        {/* Unified Navigation Tabs */}
        <div className="px-6 py-2 bg-zinc-900/40 border-b border-zinc-800 flex gap-2 relative z-10">
          <button 
            onClick={() => setActiveMenu?.("Menu:Perdagangan")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${activeMenu?.startsWith("Menu:Perdagangan") ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <ArrowRightLeft size={16} /> Perdagangan
          </button>
          <button 
            onClick={() => setActiveMenu?.("Menu:Pajak")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${activeMenu === "Menu:Pajak" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <FileText size={16} /> Pajak
          </button>
          <button 
            onClick={() => setActiveMenu?.("Menu:Hutang")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${activeMenu === "Menu:Hutang" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <Landmark size={16} /> Hutang
          </button>
          <button 
            onClick={() => setActiveMenu?.("Menu:Budget")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${activeMenu === "Menu:Budget" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <BarChart3 size={16} /> Budget
          </button>
          <button 
            onClick={() => setActiveMenu?.("Menu:Harga")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${activeMenu === "Menu:Harga" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <Tag size={16} /> Harga
          </button>
        </div>
        
        <div className="px-10 py-6 bg-zinc-900/10 border-b border-zinc-900 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex flex-col relative group/pbb">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                Total Pendapatan Pajak
                {isImpacted && <AlertTriangle size={12} className={pbbMultipliers.impactLevel === 'embargoed' ? 'text-rose-500' : 'text-amber-500'} />}
              </span>
              <div className="flex items-baseline gap-3">
                <span className={`text-3xl font-black italic transition-colors duration-500 ${pbbStatusColor}`}>
                  {totalRevenue.toLocaleString('id-ID')}
                </span>
                {isImpacted && (
                  <span className="text-sm font-bold text-zinc-600 line-through opacity-50">
                    {rawTotalRevenue.toLocaleString('id-ID')}
                  </span>
                )}
              </div>
              
              {isImpacted && (
                <div className="absolute -top-12 left-0 opacity-0 group-hover/pbb:opacity-100 transition-all duration-300 pointer-events-none z-50">
                  <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-2xl shadow-2xl flex items-center gap-3 whitespace-nowrap">
                    <span className="text-[9px] font-black uppercase text-rose-500 animate-pulse">
                      Sanksi PBB: -25% Pendapatan
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Proyeksi Perubahan</span>
              <span className={`text-2xl font-black ${revenueDelta >= 0 ? 'text-white' : 'text-red-400'}`}>
                {revenueDelta >= 0 ? '+' : ''}{revenueDelta.toLocaleString('id-ID')}
              </span>
            </div>
            <div className="flex flex-col border-l border-zinc-800 pl-8 relative">
               <div className={`absolute top-0 left-0 w-1 h-full ${taxImpact >= 0 ? "bg-emerald-500" : "bg-rose-500"}`} />
               <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Dampak Kepuasan</span>
               <div className="flex items-end gap-2">
                 <span className={`text-3xl font-black italic ${taxImpact >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                   {taxImpact >= 0 ? "+" : ""}{taxImpact.toFixed(1)}%
                 </span>
                 <span className="pb-1 text-zinc-600 font-bold text-[10px] uppercase tracking-tighter">Per Bulan</span>
               </div>
            </div>
            <div className="flex flex-col border-l border-zinc-800 pl-8 relative">
               <div className={`absolute top-0 left-0 w-1 h-full ${monthlyGrowthPercent >= 0 ? "bg-blue-500" : "bg-rose-500"}`} />
               <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Pertumbuhan Populasi</span>
               <div className="flex items-end gap-2">
                 <Users className={`h-4 w-4 mb-1 ${monthlyGrowthPercent >= 0 ? 'text-blue-400' : 'text-rose-400'}`} />
                 <span className={`text-3xl font-black italic ${monthlyGrowthPercent >= 0 ? "text-blue-400" : "text-rose-400"}`}>
                   {monthlyGrowthPercent >= 0 ? "+" : ""}{monthlyGrowthPercent.toFixed(3)}%
                 </span>
                 <span className="pb-1 text-zinc-600 font-bold text-[10px] uppercase tracking-tighter">Per Bulan</span>
               </div>
            </div>
            <div className="flex flex-col border-l border-zinc-800 pl-8 relative">
               <div className={`absolute top-0 left-0 w-1 h-full ${dailyHappinessDelta >= 0 ? "bg-amber-400" : "bg-rose-600"}`} />
               <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Dampak Kepuasan / Hari</span>
               <div className="flex items-end gap-2">
                 <span className={`text-3xl font-black italic ${dailyHappinessDelta > 0 ? "text-amber-400" : dailyHappinessDelta < 0 ? "text-rose-400" : "text-zinc-400"}`}>
                   {dailyHappinessDelta > 0 ? "+" : ""}{dailyHappinessDelta.toFixed(1)}
                 </span>
                 <span className="pb-1 text-zinc-600 font-bold text-[10px] uppercase tracking-tighter">Per Hari</span>
               </div>
            </div>
            <div className="flex flex-col border-l border-zinc-800 pl-8 relative">
               <div className={`absolute top-0 left-0 w-1 h-full ${dailyPopulationDelta >= 0 ? "bg-blue-500" : "bg-rose-600"}`} />
               <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Populasi / Hari</span>
               <div className="flex items-end gap-2">
                 <Users className={`h-4 w-4 mb-1 ${dailyPopulationDelta >= 0 ? 'text-blue-400' : 'text-rose-400'}`} />
                 <span className={`text-3xl font-black italic ${dailyPopulationDelta > 0 ? "text-blue-400" : dailyPopulationDelta < 0 ? "text-rose-400" : "text-zinc-400"}`}>
                   {dailyPopulationDelta > 0 ? "+" : ""}{dailyPopulationDelta.toLocaleString('id-ID')}
                 </span>
                 <span className="pb-1 text-zinc-600 font-bold text-[10px] uppercase tracking-tighter">Jiwa / Hari</span>
               </div>
            </div>
          </div>
          <button onClick={handleApplyReform} disabled={isSaving} className="px-10 py-5 bg-green-600 hover:bg-green-500 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-lg active:scale-95 disabled:opacity-50">
            {isSaving ? 'Memproses...' : 'Terapkan Reformasi'}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-12 pb-24">
          <div className="space-y-6">
            <h3 className="text-xl font-black text-zinc-100 uppercase italic">Pajak Domestik</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{domesticTaxes.map(renderTaxCard)}</div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-black text-amber-500 uppercase italic">Pajak Perdagangan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{tradeTaxes.map(renderTaxCard)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

