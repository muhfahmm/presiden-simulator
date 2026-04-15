"use client"

import React, { useState, useEffect } from "react";
import { 
  X, Activity, Zap, Pickaxe, Factory, Beef, Wheat, Pill, Utensils, 
  Shield, Swords, Eye, Search, Home, GraduationCap, HeartPulse, 
  Scale, Siren, Landmark, Info, Briefcase, Users2, Users, Cloud, Target,
  Mountain, Gem, Waves, Battery, Box, Cpu, TreePine, Droplets, Flame, Radio, Hammer,
  Clapperboard, Building2, Archive, TrendingUp, ShieldAlert, TrendingDown
} from "lucide-react";
import { countries } from "@/app/database/data/negara/benua/index";
import { 
  KAPASITAS_LISTRIK_METADATA,
  pabrikMiliterRate
} from "@/app/database/data/semua_fitur_negara";
import { 
  mineralKritisRate, 
  manufakturRate, 
  peternakanRate, 
  agrikulturRate, 
  perikananRate, 
  olahanPanganRate, 
  farmasiRate 
} from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi";
import { 
  infrastrukturRate, 
  sosialRate, 
  hunianRate 
} from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { aiPopulationStorage } from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/2_Populasi/AIPopulationStorage";
import { aiBuildingStorage } from "@/app/game/components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIBuildingStorage";
import { aiProductionStorage } from "@/app/game/components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIProductionStorage";
import { aiBudgetStorage } from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { calculateDailyBudgetDelta, calculateBudgetBreakdown } from "@/app/game/data/economy/BudgetDeltaLogic";
import { GameSession, gameStorage } from "@/app/game/gamestorage";
import { aiThinkingStorage } from "@/app/game/components/AI_logic/global_event/aiThinkingStorage";
import { Brain } from "lucide-react";
import BuildingInfoModal from "./BuildingInfoModal";
import { getBuildingInfo, BuildingInfo } from "./BuildingInfoData";

interface DetailNegaraModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
  isUser: boolean;
  activeSector?: string;
  activeCard?: string;
  setActiveMenu: (menu: string) => void;
}

export default function DetailNegaraModal({ isOpen, onClose, targetCountry, isUser, activeSector, activeCard, setActiveMenu }: DetailNegaraModalProps) {
  const currentSector = activeSector || "produksi";
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedBuildingInfo, setSelectedBuildingInfo] = useState<BuildingInfo | null>(null);

  const handleIconClick = (key: string, customLabel?: string) => {
    const info = getBuildingInfo(key);
    if (info) {
      setSelectedBuildingInfo(info);
    } else {
      // Fallback for types not in registry yet
      setSelectedBuildingInfo({
        id: key,
        label: customLabel || key.replace(/_/g, ' '),
        capacity: "Data tidak tersedia",
        description: "Informasi detail untuk bangunan ini sedang dalam tahap pembaharuan sistem strategi.",
        icon: null,
        color: "text-zinc-500"
      });
    }
  };
  
  // Real-time population tracking
  const countryEntryRaw = countries.find(c => c.name_id.toLowerCase() === targetCountry.toLowerCase() || c.name_en.toLowerCase() === targetCountry.toLowerCase());
  const rawPop = (countryEntryRaw as any)?.jumlah_penduduk ?? 0;
  const basePop = typeof rawPop === 'string' 
    ? parseInt(rawPop.replace(/\./g, '')) 
    : (typeof rawPop === 'number' ? rawPop : 0);
    
  const initPop = isUser ? populationStorage.getPopulation() : (countryEntryRaw ? aiPopulationStorage.getPopulation(countryEntryRaw.name_en) : basePop);
  const [population, setPopulation] = useState(initPop);
  const [highlitCard, setHighlitCard] = useState<string | null>(null);

  // Reactivity: Refresh when construction state changes
  useEffect(() => {
    const handleUpdate = () => {
      setRefreshKey(prev => prev + 1);
    };

    window.addEventListener('building_storage_updated', handleUpdate);
    window.addEventListener('ai_building_updated', handleUpdate);
    
    // Add population listener
    const handlePopUpdate = (e: any) => {
      if (isUser) {
        setPopulation(e.detail.population);
      }
    };
    
    const handleAiPopUpdate = () => {
      if (!isUser && countryEntryRaw) {
         setPopulation(aiPopulationStorage.getPopulation(countryEntryRaw.name_en) || basePop);
      }
    };
    
    window.addEventListener('population_updated', handlePopUpdate);
    window.addEventListener('ai_population_updated', handleAiPopUpdate);
    
    return () => {
      window.removeEventListener('building_storage_updated', handleUpdate);
      window.removeEventListener('ai_building_updated', handleUpdate);
      window.removeEventListener('population_updated', handlePopUpdate);
      window.removeEventListener('ai_population_updated', handleAiPopUpdate);
    };
  }, [isUser, targetCountry, countryEntryRaw?.name_en, basePop]);

  // Handle Deep-link Scroll and Highlight
  useEffect(() => {
    if (isOpen && activeCard) {
      const cleanActiveCard = activeCard.replace(/^\d+_/, '');
      setHighlitCard(cleanActiveCard);

      const timer = setTimeout(() => {
        const element = document.getElementById(activeCard) || document.getElementById(cleanActiveCard);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500); 

      // Remove highlight after 8 seconds
      const clearTimer = setTimeout(() => {
        setHighlitCard(null);
      }, 8000);

      return () => {
        clearTimeout(timer);
        clearTimeout(clearTimer);
      };
    }
  }, [isOpen, activeCard, currentSector]);

  if (!isOpen) return null;

  const countryEntry = countries.find(c => 
    c.name_id.toLowerCase() === targetCountry.toLowerCase() || 
    c.name_en.toLowerCase() === targetCountry.toLowerCase()
  );

  if (!countryEntry) return null;

  // Aggregate Building Deltas
  const buildingDeltas = isUser 
    ? buildingStorage.getBuildingDeltas()
    : aiBuildingStorage.getAllBuildingDeltas(countryEntry.name_en);

  // Get Stocks (Production)
  const stocks = isUser
    ? budgetStorage.getCumulativeProduction()
    : aiProductionStorage.getStocks(countryEntry.name_en);

  // Get Construction Queue
  const constructionQueue = isUser
    ? buildingStorage.getQueue()
    : aiBuildingStorage.getQueue(countryEntry.name_en);

  // DEBUG: Track construction data for Malaysia
  if (countryEntry.name_en === "Malaysia") {
    console.log(`[AI UI DEBUG] Malaysia Data:`, { buildingDeltas, queueLength: constructionQueue.length });
  }

  const sectors = [
    { id: "produksi", label: "Produksi", icon: Factory },
    { id: "militer", label: "Militer", icon: Shield },
    { id: "layanan_publik", label: "Layanan Publik", icon: Landmark },
    { id: "hunian_sosial", label: "Hunian & Sosial", icon: Home },
  ];

  return (
    <div className="absolute inset-0 bg-black/95 backdrop-blur-sm z-[2000] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] flex flex-col shadow-[0_0_100px_rgba(245,158,11,0.1)] overflow-hidden relative animate-in zoom-in-95 duration-500">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                <Activity className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">
                  Detail Lengkap: {targetCountry}
                </h2>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">
                    Real-time Strategic Hub
                  </p>
                </div>
              </div>
            </div>

            {/* Financial Quick Stats (NPC or User) */}
            <div className="hidden xl:flex items-center gap-8 pl-8 border-l border-zinc-800/50">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Kas Negara</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-amber-500 italic">
                    {(() => {
                      const budget = isUser 
                        ? budgetStorage.getBudget() 
                        : aiBudgetStorage.getBudget(countryEntry.name_en);
                      return Math.floor(budget).toLocaleString('id-ID');
                    })()}
                  </span>
                  <div className="p-1 px-1.5 rounded-md bg-amber-500/10 border border-amber-500/20">
                    <span className="text-[9px] font-black text-amber-500 italic">EM</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Penghasilan Harian</span>
                {(() => {
                  const delta = calculateDailyBudgetDelta(countryEntry as any, buildingDeltas);
                  const isPositive = delta >= 0;
                  const absDelta = Math.abs(Math.round(delta));
                  const colorClass = isPositive ? "text-emerald-500" : "text-rose-500";
                  const bgClass = isPositive ? "bg-emerald-500/10" : "bg-rose-500/10";
                  const borderClass = isPositive ? "border-emerald-500/20" : "border-rose-500/20";
                  
                  return (
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-black ${colorClass} italic`}>
                        {isPositive ? '+' : '-'}{absDelta.toLocaleString('id-ID')}
                      </span>
                      <div className={`p-1 px-1.5 rounded-md ${bgClass} border ${borderClass}`}>
                        {isPositive ? (
                          <TrendingUp size={10} className={colorClass} />
                        ) : (
                          <TrendingDown size={10} className={colorClass} />
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 px-8 py-4 bg-zinc-900/10 border-b border-zinc-800/30">
          {sectors.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveMenu(`CountryModal:${countryEntry.name_id.toLowerCase()}:info_strategis:detail_lengkap:${s.id}`)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold uppercase text-[10px] tracking-widest transition-all cursor-pointer ${
                currentSector === s.id 
                  ? "bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.2)]" 
                  : "bg-zinc-900/50 text-zinc-500 hover:text-zinc-200 border border-zinc-800/50"
              }`}
            >
              <s.icon size={16} />
              {s.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/30">
          {currentSector === "produksi" && (
            <div className="space-y-10">
              <ProductionSection 
                title="1. Sektor Energi" 
                items={countryEntry.sektor_listrik} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                stocks={stocks}
                type="listrik"
                handleIconClick={handleIconClick}
                highlitCard={highlitCard}
              />
              <ProductionSection 
                title="2. Sektor Mineral Kritis" 
                items={countryEntry.sektor_ekstraksi} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                stocks={stocks}
                type="ekstraksi"
                handleIconClick={handleIconClick}
                highlitCard={highlitCard}
              />
              <ProductionSection 
                title="3. Sektor Manufaktur" 
                items={countryEntry.sektor_manufaktur} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                stocks={stocks}
                type="manufaktur"
                handleIconClick={handleIconClick}
                highlitCard={highlitCard}
              />
              <ProductionSection 
                title="4. Sektor Peternakan" 
                items={countryEntry.sektor_peternakan} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                stocks={stocks}
                type="peternakan"
                handleIconClick={handleIconClick}
                highlitCard={highlitCard}
              />
              <ProductionSection 
                title="5. Sektor Agrikultur" 
                items={countryEntry.sektor_agrikultur} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                stocks={stocks}
                type="agrikultur"
                handleIconClick={handleIconClick}
                highlitCard={highlitCard}
              />
              <ProductionSection 
                title="6. Sektor Perikanan" 
                items={countryEntry.sektor_perikanan} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                stocks={stocks}
                type="perikanan"
                handleIconClick={handleIconClick}
                highlitCard={highlitCard}
              />
              <ProductionSection 
                title="7. Sektor Olahan Pangan" 
                items={countryEntry.sektor_olahan_pangan} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                stocks={stocks}
                type="pangan"
                handleIconClick={handleIconClick}
                highlitCard={highlitCard}
              />
              <ProductionSection 
                title="8. Sektor Farmasi" 
                items={countryEntry.sektor_farmasi} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                stocks={stocks}
                type="farmasi"
                handleIconClick={handleIconClick}
                highlitCard={highlitCard}
              />
            </div>
          )}

          {currentSector === "militer" && (
            <div className="space-y-10">
              <ProductionSection 
                title="1. Pabrik Militer Nasional" 
                items={countryEntry.pabrik_militer} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                stocks={stocks}
                type="militer"
                handleIconClick={handleIconClick}
                highlitCard={highlitCard}
              />
            </div>
          )}

          {currentSector === "layanan_publik" && (
            <div className="space-y-10">
              <SimpleGridSection 
                title="1. Sektor Infrastruktur & Logistik" 
                data={countryEntry.infrastruktur} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                icon={Activity}
                color="text-emerald-500"
                handleIconClick={handleIconClick}
                type="infrastruktur"
                highlitCard={highlitCard}
              />
              <SimpleGridSection 
                title="2. Sektor Pendidikan & Riset" 
                data={countryEntry.pendidikan} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                icon={GraduationCap}
                color="text-indigo-500"
                handleIconClick={handleIconClick}
                type="sosial"
                highlitCard={highlitCard}
              />
              <SimpleGridSection 
                title="3. Sektor Layanan Kesehatan" 
                data={countryEntry.kesehatan} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                icon={HeartPulse}
                color="text-rose-500"
                handleIconClick={handleIconClick}
                type="sosial"
                highlitCard={highlitCard}
              />
              <SimpleGridSection 
                title="4. Sektor Hukum & Keamanan" 
                data={countryEntry.hukum} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                icon={Scale}
                color="text-cyan-500"
                handleIconClick={handleIconClick}
                type="sosial"
                highlitCard={highlitCard}
              />
              <SimpleGridSection 
                title="5. Sektor Olahraga & Rekreasi" 
                data={countryEntry.sektor_olahraga} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                icon={Target}
                color="text-lime-500"
                handleIconClick={handleIconClick}
                type="sosial"
                highlitCard={highlitCard}
              />
              <SimpleGridSection 
                title="6. Sektor Komersial & Retail" 
                data={countryEntry.sektor_komersial} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                icon={Briefcase}
                color="text-amber-500"
                handleIconClick={handleIconClick}
                type="sosial"
                highlitCard={highlitCard}
              />
              <SimpleGridSection 
                title="7. Sektor Hiburan & Seni" 
                data={countryEntry.sektor_hiburan} 
                buildingDeltas={buildingDeltas}
                constructionQueue={constructionQueue}
                icon={Clapperboard}
                color="text-purple-500"
                handleIconClick={handleIconClick}
                type="sosial"
                highlitCard={highlitCard}
              />
            </div>
          )}

          {currentSector === "hunian_sosial" && (
            <div className="space-y-12">
              {(() => {
                // Centralized Budget & Housing Logic
                const breakdown = calculateBudgetBreakdown(countryEntry as any, buildingDeltas);
                if (!breakdown || !breakdown.details) return null;
                
                const { housingCapacity: totalNationalHousingCapacity, societalPenalty } = breakdown.details;
                
                const derivedPopulation = isUser ? populationStorage.getPopulation() : (aiPopulationStorage.getPopulation(countryEntry.name_en) || basePop);
                const surplus = totalNationalHousingCapacity - derivedPopulation;

                return (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 px-1">
                      <div className="bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-2xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-1">Total Kebutuhan Rumah</p>
                          <p className="text-xl font-black text-rose-400">{derivedPopulation.toLocaleString('id-ID')} <span className="text-xs text-rose-500/50">Jiwa</span></p>
                        </div>
                        <div className="p-3 bg-rose-500/10 rounded-xl"><Users size={20} className="text-rose-500" /></div>
                      </div>
                      
                      <div className="bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-2xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-1">Total Kapasitas Tersedia</p>
                          <p className="text-xl font-black text-emerald-400">{totalNationalHousingCapacity.toLocaleString('id-ID')} <span className="text-xs text-emerald-500/50">Jiwa</span></p>
                        </div>
                        <div className="p-3 bg-emerald-500/10 rounded-xl"><Home size={20} className="text-emerald-500" /></div>
                      </div>

                      <div className="bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-2xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-1">Rasio Keterisian (Occupancy)</p>
                          <p className={`text-xl font-black ${surplus < 0 ? 'text-red-400 animate-pulse' : (derivedPopulation / (totalNationalHousingCapacity || 1) > 0.8 ? 'text-amber-400' : 'text-emerald-400')}`}>
                            {totalNationalHousingCapacity > 0 ? ((derivedPopulation / totalNationalHousingCapacity) * 100).toFixed(1) : (derivedPopulation > 0 ? '∞' : '0')}% <span className="text-xs opacity-50">{surplus < 0 ? 'OVERLOAD' : 'TERISI'}</span>
                          </p>
                        </div>
                        <div className={`p-3 rounded-xl ${surplus < 0 ? 'bg-red-500/10' : 'bg-emerald-500/10'}`}>
                          <Activity size={20} className={surplus < 0 ? 'text-red-500' : 'text-emerald-500'} />
                        </div>
                      </div>
                    </div>

                    {[
                      {  
                        title: "1. " + (hunianRate.rumah_subsidi.label), 
                        id: "rumah_subsidi",
                        icon: Home, 
                        color: "text-emerald-500",
                        description: hunianRate.rumah_subsidi.deskripsi,
                        capacity: hunianRate.rumah_subsidi.kapasitas
                      },
                      { 
                        title: "2. " + (hunianRate.apartemen.label), 
                        id: "apartemen",
                        icon: Building2, 
                        color: "text-sky-500",
                        description: hunianRate.apartemen.deskripsi,
                        capacity: hunianRate.apartemen.kapasitas
                      },
                      { 
                        title: "3. " + (hunianRate.mansion.label), 
                        id: "mansion",
                        icon: Landmark, 
                        color: "text-amber-500",
                        description: hunianRate.mansion.deskripsi,
                        capacity: hunianRate.mansion.kapasitas
                      }
                    ].map((house) => {
                      const unitsBaseline = (countryEntry.hunian as any)?.[house.id] || 0;
                      const unitsDelta = buildingDeltas[house.id] || Object.entries(buildingDeltas).find(([k]) => k.replace(/^\d+_/, '') === house.id)?.[1] || 0;
                      const totalUnits = Number(unitsBaseline) + Number(unitsDelta);
                      const inProgress = constructionQueue?.filter((q: any) => {
                        const normalizedQKey = q.buildingKey.replace(/^\d+_/, '');
                        return q.buildingKey === house.id || normalizedQKey === house.id;
                      }).reduce((acc: number, curr: any) => acc + (curr.quantity || 1), 0) || 0;

                      const totalDayaTampung = totalUnits * house.capacity;
                      const isNationalShortage = totalNationalHousingCapacity < population;

                      return (
                        <div id={house.id} key={house.id} className="bg-zinc-900/30 border border-zinc-800/50 rounded-[2.5rem] p-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center hover:border-zinc-700/50 transition-all duration-500 group relative overflow-hidden mb-12 last:mb-0">
                          {/* Unit Count */}
                          <div className="lg:col-span-3 flex flex-col items-center justify-center border-r border-zinc-800/50 pr-8">
                            <div 
                              className="p-5 bg-zinc-950 rounded-[2rem] border border-zinc-800 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl cursor-pointer hover:border-amber-500/50"
                              onClick={() => handleIconClick(house.id, house.title)}
                              title="Klik untuk info detail"
                            >
                              <house.icon size={48} className={house.color} />
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Kuantitas Unit</span>
                              <div className="flex items-center gap-3">
                                <span className="text-5xl font-black text-white tracking-tighter tabular-nums drop-shadow-2xl">
                                  {totalUnits.toLocaleString('id-ID')}
                                </span>
                                {inProgress > 0 && (
                                  <span className={`text-2xl font-black ${house.color} animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]`}>
                                    +{inProgress.toLocaleString('id-ID')}
                                  </span>
                                )}
                              </div>
                            </div>
                            <p className="text-[10px] text-zinc-500 font-bold uppercase mt-2 tracking-widest">Level / Jumlah Aktif</p>
                          </div>

                          {/* Capacity Analysis */}
                          <div className="lg:col-span-5 space-y-6">
                            <div className="flex flex-col gap-1">
                                <span className={`text-[10px] font-black uppercase tracking-widest ${house.color}`}>Total Daya Tampung Jiwa</span>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-4xl font-black text-white tracking-tight">
                                        {totalDayaTampung.toLocaleString('id-ID')}
                                    </span>
                                    {inProgress > 0 && (
                                        <span className={`text-xl font-black ${house.color} animate-pulse`}>
                                            +{(inProgress * house.capacity).toLocaleString('id-ID')}
                                        </span>
                                    )}
                                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Kapasitas Maksimal</span>
                                </div>
                            </div>
                            
                            <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                                <div 
                                    className={`h-full ${((population / (totalDayaTampung || 1)) > 1) ? 'bg-red-500 animate-pulse' : (((population / (totalDayaTampung || 1)) > 0.8) ? 'bg-amber-500' : house.color.replace('text-', 'bg-'))} transition-all duration-1000 shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                                    style={{ width: `${Math.min(100, (population / (totalDayaTampung || 1)) * 100)}%` }}
                                />
                            </div>
                            
                            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                <span className="text-zinc-500">Tingkat Keterisian</span>
                                <span className={((population / (totalDayaTampung || 1)) > 1) ? 'text-red-500 animate-pulse' : (((population / (totalDayaTampung || 1)) > 0.8) ? 'text-amber-500' : house.color)}>
                                    {totalDayaTampung > 0 ? ((population / (totalDayaTampung)) * 100).toFixed(1) : (population > 0 ? '100+' : '0')}% {((population / (totalDayaTampung || 1)) > 1) ? 'VULNERABLE / OVERLOAD' : 'Terpakai'}
                                </span>
                            </div>
                          </div>

                          {/* Description & Action */}
                          <div className="lg:col-span-4 bg-zinc-950/50 p-6 rounded-3xl border border-zinc-800/50 flex flex-col justify-between h-full min-h-[200px]">
                            <p className="text-xs text-zinc-400 italic leading-relaxed mb-4">
                              "{house.description}"
                            </p>
                            
                            <div className="flex flex-col gap-3 mt-auto">
                               <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full ${isNationalShortage ? 'bg-rose-500 animate-pulse' : 'bg-emerald-500'}`} />
                                  <span className={`text-[10px] font-black uppercase tracking-widest ${isNationalShortage ? 'text-rose-500' : 'text-emerald-500'}`}>
                                    {isNationalShortage ? '❗ KAPASITAS NASIONAL KURANG' : 'Kapasitas Stabil'}
                                  </span>
                               </div>
                               {isNationalShortage && (
                                  <div className="pl-4 space-y-3">
                                     <p className="text-[9px] font-black text-rose-500/80 uppercase tracking-tighter">
                                         ESTIMASI KEKURANGAN: <span className="text-white">{(Math.ceil(Math.max(0, population - totalNationalHousingCapacity) / house.capacity)).toLocaleString('id-ID')}</span> UNIT
                                     </p>
                                     <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 flex flex-col gap-1">
                                        <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest">Kerugian Ekonomi Harian</span>
                                        <span className="text-base font-black text-rose-500 italic">
                                           -{Math.round(societalPenalty).toLocaleString('id-ID')} EM
                                        </span>
                                     </div>
                                  </div>
                               )}
                            </div>
                          </div>

                          {/* Building Label Header */}
                          <div className="absolute top-4 left-10">
                            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">
                              {house.title}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* AI Critical Thinking Section */}
                    {(() => {
                      const thinking = aiThinkingStorage.getLatest(countryEntry.name_en);
                      if (!thinking) return null;
                      
                      return (
                        <div className="mt-8 p-8 bg-amber-500/5 border border-amber-500/20 rounded-[2.5rem] relative overflow-hidden group animate-in slide-in-from-bottom-4 duration-700">
                          {/* Decorative Background Elements */}
                          <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                            <Brain size={250} className="text-amber-500" />
                          </div>
                          <div className="absolute top-0 left-0 w-2 h-full bg-amber-500/30" />
                          
                          <div className="relative z-10 flex items-start gap-6">
                            <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                              <Brain size={32} className="text-amber-500 animate-pulse" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-sm font-black text-amber-500 uppercase tracking-[0.2em] italic">AI Strategic Brain</h4>
                                <div className="h-px flex-1 bg-amber-500/20" />
                                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest bg-zinc-950 p-1 px-2 rounded-md border border-zinc-800">
                                  Last Decision: {new Date(thinking.lastUpdated).toLocaleTimeString()}
                                </span>
                              </div>
                              <p className="text-xl font-bold text-zinc-300 leading-relaxed tracking-tight italic">
                                "{thinking.reason}"
                              </p>
                              <div className="mt-4 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Autonomous Thinking Process Active</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </>
                );
              })()}
            </div>
          )}
        </div>
      </div>

      {/* Building Info Modal Overlay */}
      {selectedBuildingInfo && (
        <BuildingInfoModal 
          isOpen={!!selectedBuildingInfo}
          onClose={() => setSelectedBuildingInfo(null)}
          info={selectedBuildingInfo}
        />
      )}
    </div>
  );
}

function ProductionSection({ title, items, buildingDeltas, constructionQueue, stocks, type, handleIconClick, highlitCard }: any) {
  if (!items) return null;

  const getLabel = (key: string, type: string) => {
    let metadata: any = null;
    switch (type) {
      case 'listrik': metadata = KAPASITAS_LISTRIK_METADATA; break;
      case 'ekstraksi': metadata = mineralKritisRate; break;
      case 'manufaktur': metadata = manufakturRate; break;
      case 'peternakan': metadata = peternakanRate; break;
      case 'agrikultur': metadata = agrikulturRate; break;
      case 'perikanan': metadata = perikananRate; break;
      case 'pangan': metadata = olahanPanganRate; break;
      case 'farmasi': metadata = farmasiRate; break;
      case 'militer': metadata = pabrikMiliterRate; break;
      case 'infrastruktur': metadata = infrastrukturRate; break;
      case 'sosial': metadata = sosialRate; break;
      case 'hunian': metadata = hunianRate; break;
    }

    if (metadata) {
      // Find entry by dataKey or direct key (matching logic from building hubs)
      const entry = Object.values(metadata).find((v: any) => 
        v.dataKey === key || 
        v.key === key || 
        (v.key && v.key.replace(/^\d+_/, '') === key)
      );
      if (entry && (entry as any).deskripsi) return (entry as any).deskripsi;
      if (entry && (entry as any).label) return (entry as any).label;
    }

    return key.replace(/_/g, " ");
  };

  const getSortedEntries = (items: any, type: string) => {
    let metadata: any = null;
    let order: string[] = [];
    
    switch (type) {
      case 'listrik': metadata = KAPASITAS_LISTRIK_METADATA; break;
      case 'ekstraksi': 
        metadata = mineralKritisRate; 
        order = ["emas", "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "nikel", "litium", "tembaga", "aluminium", "logam_tanah_jarang", "bijih_besi"];
        break;
      case 'manufaktur': metadata = manufakturRate; break;
      case 'peternakan': metadata = peternakanRate; break;
      case 'agrikultur': metadata = agrikulturRate; break;
      case 'perikanan': metadata = perikananRate; break;
      case 'pangan': metadata = olahanPanganRate; break;
      case 'farmasi': metadata = farmasiRate; break;
      case 'militer': metadata = pabrikMiliterRate; break;
      case 'infrastruktur': metadata = infrastrukturRate; break;
      case 'sosial': metadata = sosialRate; break;
    }

    if (!metadata) return Object.entries(items);

    // If explicit order is provided (e.g. for ekstraksi)
    if (order.length > 0) {
      return order
        .filter(dataKey => Object.keys(items).includes(dataKey))
        .map(dataKey => [dataKey, items[dataKey]]);
    }

    // Otherwise, use the order found in metadata objects
    const sortedEntries: [string, any][] = [];
    Object.values(metadata).forEach((val: any) => {
      const dataKey = val.dataKey || val.key;
      // Normalisasi dataKey (misal pltn vs 1_pltn)
      const matches = (k: string) => k === dataKey || k === dataKey?.replace(/^\d+_/, '') || dataKey === k.replace(/^\d+_/, '');
      
      const foundKey = Object.keys(items).find(matches);
      if (foundKey && items[foundKey] !== undefined) {
        sortedEntries.push([foundKey, items[foundKey]]);
      }
    });

    // Fallback: Add any items not found in metadata at the end
    const foundKeys = new Set(sortedEntries.map(([k]) => k));
    Object.entries(items).forEach(([k, v]) => {
      if (!foundKeys.has(k)) sortedEntries.push([k, v]);
    });

    return sortedEntries;
  };

  const sortedItems = getSortedEntries(items, type);

  return (
    <div id={title.toLowerCase().replace(/[^a-z0-s]/g, '_').replace(/_+/g, '_')} className="animate-in fade-in slide-in-from-bottom-2 duration-500 transition-all rounded-3xl">
      <h3 className="text-lg font-black text-white uppercase tracking-widest italic mb-4 flex items-center gap-3">
        <div className="w-1.5 h-6 bg-amber-500 rounded-full" />
        {title}
        <span className="text-amber-500 ml-2 font-black lowercase italic text-[10px] tracking-normal bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
          ({sortedItems.length} Jenis)
        </span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sortedItems.map((entry: any) => {
          const [key, baseline] = entry;
          const delta = buildingDeltas[key] || Object.entries(buildingDeltas).find(([k]) => k.replace(/^\d+_/, '') === key)?.[1] || 0;
          const total = Number(baseline || 0) + Number(delta);
          const isHighlit = key.replace(/^\d+_/, '') === highlitCard;
          
          if (total <= 0 && baseline === undefined) return null;

          const stock = stocks[key] || 0;

          return (
            <div 
              id={key.replace(/^\d+_/, '')} 
              key={key} 
              className={`bg-zinc-900/40 border p-4 rounded-2xl flex flex-col gap-3 group transition-all duration-500 relative ${
                isHighlit 
                  ? 'border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.5)] ring-2 ring-amber-500/50 scale-[1.03] z-50 bg-amber-500/10' 
                  : 'border-zinc-800/60 hover:border-amber-500/30'
              }`}
            >
              {isHighlit && (
                <div className="absolute inset-0 rounded-2xl border-2 border-amber-500 animate-pulse pointer-events-none" />
              )}
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-tighter leading-tight pr-4">
                  {getLabel(key, type)}
                </span>
                <div 
                  className="p-1.5 bg-zinc-950 rounded-lg border border-zinc-800 cursor-pointer hover:border-amber-500/50 transition-colors"
                  onClick={() => handleIconClick(key)}
                  title="Klik untuk info detail"
                >
                  {getProductionIcon(key)}
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-white tracking-tighter">
                    {(() => {
                      const inProgress = constructionQueue?.filter((q: any) => {
                        const normalizedQKey = q.buildingKey.replace(/^\d+_/, '');
                        return q.buildingKey === key || normalizedQKey === key;
                      }).reduce((acc: number, curr: any) => acc + (Number(curr.quantity) || 1), 0) || 0;
                      return (total + inProgress).toLocaleString('id-ID');
                    })()}
                  </span>
                  {(() => {
                    const inProgress = constructionQueue?.filter((q: any) => {
                      const normalizedQKey = q.buildingKey.replace(/^\d+_/, '');
                      return q.buildingKey === key || normalizedQKey === key;
                    }).length || 0;
                    return inProgress > 0 ? (
                      <span className="text-[10px] font-black text-amber-500 animate-pulse whitespace-nowrap">
                        +{inProgress.toLocaleString('id-ID')} PEMBANGUNAN
                      </span>
                    ) : null;
                  })()}
                </div>
                <span className="text-[9px] font-bold text-zinc-500 uppercase">Kapasitas Produksi</span>
              </div>
              {stocks[key] !== undefined && (
                <div className="pt-2 border-t border-zinc-800/50 flex flex-col gap-0.5">
                  <span className="text-sm font-black text-amber-500">
                    {Number(stock).toLocaleString('id-ID')}
                  </span>
                  <span className="text-[9px] font-bold text-zinc-400 uppercase">Stok Gudang</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SimpleGridSection({ title, data, buildingDeltas, constructionQueue, icon: Icon, color, handleIconClick, type, highlitCard }: any) {
  if (!data) return null;

  const getLabel = (key: string, type: string) => {
    let metadata: any = null;
    switch (type) {
      case 'infrastruktur': metadata = infrastrukturRate; break;
      case 'sosial': metadata = sosialRate; break;
    }

    if (metadata) {
      const entry = Object.values(metadata).find((v: any) => 
        v.dataKey === key || 
        v.key === key || 
        (v.key && v.key.replace(/^\d+_/, '') === key)
      );
      if (entry && (entry as any).deskripsi) return (entry as any).deskripsi;
      if (entry && (entry as any).label) return (entry as any).label;
    }
    return key.replace(/_/g, " ");
  };

  const getSortedEntries = (items: any, type: string) => {
    let metadata: any = null;
    switch (type) {
      case 'infrastruktur': metadata = infrastrukturRate; break;
      case 'sosial': metadata = sosialRate; break;
    }
    if (!metadata) return Object.entries(items);

    const sortedEntries: [string, any][] = [];
    Object.values(metadata).forEach((val: any) => {
      const dataKey = val.dataKey || val.key;
      const matches = (k: string) => k === dataKey || k === dataKey?.replace(/^\d+_/, '') || dataKey === k.replace(/^\d+_/, '');
      const foundKey = Object.keys(items).find(matches);
      if (foundKey && items[foundKey] !== undefined) {
        sortedEntries.push([foundKey, items[foundKey]]);
      }
    });

    const foundKeys = new Set(sortedEntries.map(([k]) => k));
    Object.entries(items).forEach(([k, v]) => {
      if (!foundKeys.has(k)) sortedEntries.push([k, v]);
    });
    return sortedEntries;
  };

  const sortedItems = getSortedEntries(data, type);

  return (
    <div id={title.toLowerCase().replace(/[^a-z0-s]/g, '_').replace(/_+/g, '_')} className="animate-in fade-in slide-in-from-bottom-2 duration-500 transition-all rounded-3xl">
      <h3 className="text-lg font-black text-white uppercase tracking-widest italic mb-4 flex items-center gap-3">
        <div className={`w-1.5 h-6 ${color.replace('text-', 'bg-')} rounded-full`} />
        {title}
        <span className={`${color} ml-2 font-black lowercase italic text-[10px] tracking-normal ${color.replace('text-', 'bg-')}/10 px-2 py-0.5 rounded-full border ${color.replace('text-', 'border-')}/20`}>
          ({sortedItems.length} Jenis)
        </span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sortedItems.map((entry: any) => {
          const [key, val] = entry;
          const delta = buildingDeltas[key] || Object.entries(buildingDeltas).find(([k]) => k.replace(/^\d+_/, '') === key)?.[1] || 0;
          const total = (typeof val === 'number' ? val : Number(val?.toString().replace(/\./g, '') || 0)) + Number(delta);
          const isHighlit = key.replace(/^\d+_/, '') === highlitCard;
          
          if (total <= 0 && val === undefined) return null;
          
          return (
            <div 
              id={key.replace(/^\d+_/, '')} 
              key={key} 
              className={`bg-zinc-900/40 border p-4 rounded-2xl flex flex-col gap-3 group transition-all duration-500 relative ${
                isHighlit 
                  ? 'border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.5)] ring-2 ring-amber-500/50 scale-[1.03] z-50 bg-amber-500/10' 
                  : 'border-zinc-800/60 hover:border-zinc-500/30'
              }`}
            >
              {isHighlit && (
                <div className="absolute inset-0 rounded-2xl border-2 border-amber-500 animate-pulse pointer-events-none" />
              )}
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-tighter leading-tight pr-4">
                  {getLabel(key, type)}
                </span>
                <div 
                  className="p-1.5 bg-zinc-950 rounded-lg border border-zinc-800 cursor-pointer hover:border-amber-500/50 transition-colors"
                  onClick={() => handleIconClick(key)}
                  title="Klik untuk info detail"
                >
                  <Icon size={14} className={color} />
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className={`text-xl font-black text-white tracking-tighter`}>
                    {(() => {
                      const inProgress = constructionQueue?.filter((q: any) => {
                        const normalizedQKey = q.buildingKey.replace(/^\d+_/, '');
                        return q.buildingKey === key || normalizedQKey === key;
                      }).reduce((acc: number, curr: any) => acc + (Number(curr.quantity) || 1), 0) || 0;
                      return (total + inProgress).toLocaleString('id-ID');
                    })()}
                  </span>
                  {(() => {
                      const inProgress = constructionQueue?.filter((q: any) => {
                        const normalizedQKey = q.buildingKey.replace(/^\d+_/, '');
                        return q.buildingKey === key || normalizedQKey === key;
                      }).reduce((acc: number, curr: any) => acc + (Number(curr.quantity) || 1), 0) || 0;
                      return inProgress > 0 ? (
                        <span className={`text-[10px] font-black ${color} animate-pulse whitespace-nowrap`}>
                          +{inProgress.toLocaleString('id-ID')} PEMBANGUNAN
                        </span>
                      ) : null;
                  })()}
                </div>
                <span className="text-[9px] font-bold text-zinc-500 uppercase">Level / Jumlah</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getProductionIcon(key: string) {
  const iconSize = 14;
  
  if (key.includes("uranium")) return <Radio size={iconSize} className="text-lime-500" />;
  if (key.includes("listrik") || key.includes("tenaga")) return <Zap size={iconSize} className="text-amber-400" />;
  if (key.includes("minyak") || key.includes("oil")) return <Droplets size={iconSize} className="text-cyan-500" />;
  if (key.includes("emas") || key.includes("gold")) return <Gem size={iconSize} className="text-yellow-500" />;
  if (key.includes("batu_bara")) return <Mountain size={iconSize} className="text-zinc-500" />;
  if (key.includes("kayu")) return <TreePine size={iconSize} className="text-emerald-600" />;
  if (key.includes("semen") || key.includes("beton")) return <Factory size={iconSize} className="text-amber-500" />;
  if (key.includes("besi") || key.includes("baja")) return <Hammer size={iconSize} className="text-zinc-400" />;
  if (key.includes("pangan") || key.includes("roti") || key.includes("mie")) return <Utensils size={iconSize} className="text-orange-400" />;
  if (key.includes("obat") || key.includes("farmasi")) return <Pill size={iconSize} className="text-rose-400" />;
  if (key.includes("amunisi")) return <Archive size={iconSize} className="text-cyan-500" />;
  
  return <Pickaxe size={iconSize} className="text-amber-500" />;
}
