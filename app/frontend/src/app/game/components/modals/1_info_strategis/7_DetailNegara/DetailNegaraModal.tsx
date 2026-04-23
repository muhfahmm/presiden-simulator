"use client"

import React, { useState, useEffect } from "react";
import { 
  Scale, Activity, Shield, Car, Settings, Users, Home, Building2, Landmark, 
  GraduationCap, HeartPulse, Target, Briefcase, Clapperboard, Ship, Radar, 
  Eye, Pickaxe, Radio, Zap, Droplets, Gem, Mountain, TreePine, Factory, 
  Hammer, Utensils, Pill, Archive, X, Beef, Wheat, ShieldAlert, TrendingUp, 
  TrendingDown, Crosshair
} from "lucide-react";
import { formatGameDate, getStoredGameDate, isWithin7Days } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
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
import { komandoPertahananRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan";
import { intelijenRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen";
import { armadaMiliterRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer";
import { armadaPolisiRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi";
import { pertahananRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan";
import { aiDefenseStorage } from "@/app/game/components/AI_logic/6_AI_pertahanan/antarmuka_data_pertahanan/AIDefenseStorage";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { aiPopulationStorage } from "@/app/game/components/modals/1_info_strategis/2_Populasi/AIPopulationStorage";
import { aiBuildingStorage } from "@/app/game/components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIBuildingStorage";
import { aiProductionStorage } from "@/app/game/components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIProductionStorage";
import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
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

      // Scroll with multiple attempts to ensure DOM is ready
      const scroll = () => {
        const prefixes = [
          '', 'pertanian_', 'pabrik_', 'tambang_', 'energi_', 'perikanan_', 'farmasi_',
          'infra_', 'sosial_', 'intel_', 'ops_', 'darat_', 'laut_', 'udara_', 'polisi_', 'tahan_', 'hunian_'
        ];
        
        // Map aesthetic slugs back to true DOM keys for scrolling
        const scrollTargetKey = 
            cleanActiveCard === 'pusat_latihan_olahraga' ? 'pusat_latihan' :
            cleanActiveCard === 'pusat_belanja' ? 'mall' :
            cleanActiveCard === 'gedung_teater' || cleanActiveCard === 'gedung_konser' ? 'teater' :
            cleanActiveCard === 'fasilitas_koreksi' || cleanActiveCard === 'pengadilan_tinggi' ? 'kejaksaan_court' :
            cleanActiveCard === 'pusat_bantuan_hukum' ? 'legal_aid' :
            cleanActiveCard === 'laboratorium_medik' ? 'pusat_diagnostik' :
            cleanActiveCard === 'rumah_sakit_daerah' ? 'rumah_sakit_kecil' :
            cleanActiveCard === 'rumah_sakit_pusat' ? 'rumah_sakit_besar' :
            cleanActiveCard === 'stadion_nasional' ? 'stadion' :
            cleanActiveCard;

        let element = null;
        
        // Try all possible ID combinations
        for (const p of prefixes) {
          element = document.getElementById(`${p}${activeCard}`) || 
                    document.getElementById(`${p}${cleanActiveCard}`) || 
                    document.getElementById(`${p}${scrollTargetKey}`);
          if (element) break;
        }

        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return true;
        }
        return false;
      };

      // Multiple attempts to handle rendering/tab switching delays
      let attempts = 0;
      const scrollInterval = setInterval(() => {
        attempts++;
        if (scroll() || attempts > 5) {
          clearInterval(scrollInterval);
        }
      }, 250);

      // Remove highlight after some time
      const clearTimer = setTimeout(() => {
        setHighlitCard(null);
      }, 10000);

      return () => {
        clearInterval(scrollInterval);
        clearTimeout(clearTimer);
      };
    }
  }, [isOpen, activeCard, currentSector, refreshKey]);

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

  const buildingCompletionDates = isUser
    ? buildingStorage.getCompletionDates()
    : aiBuildingStorage.getCompletionDates(countryEntry.name_en);

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

  // Defense construction data (AI-driven)
  const defenseDeltas = aiDefenseStorage.getAllDefenseDeltas(countryEntry.name_en);
  const defenseQueue = aiDefenseStorage.getQueue(countryEntry.name_en);
  const defenseCompletionDates = aiDefenseStorage.getCompletionDates(countryEntry.name_en);

  const currentGameDate = typeof window !== 'undefined' ? getStoredGameDate() : new Date();

  const sectors = [
    { id: "produksi", label: "Produksi", icon: Factory },
    { id: "militer", label: "Militer", icon: Shield },
    { id: "layanan_publik", label: "Layanan Publik", icon: Landmark },
    { id: "hunian_sosial", label: "Hunian & Sosial", icon: Home },
    { id: "intelijen", label: "Intelijen", icon: Eye },
    { id: "armada_militer", label: "Armada Militer", icon: Crosshair },
    { id: "armada_polisi", label: "Armada Polisi", icon: Car },
    { id: "manajemen_pertahanan", label: "Manajemen Pertahanan", icon: Settings },
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
                completionDates={buildingCompletionDates}
                constructionQueue={constructionQueue}
                stocks={stocks}
                type="listrik"
                handleIconClick={handleIconClick}
                highlitCard={highlitCard}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
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
                completionDates={buildingCompletionDates}
                currentGameDate={currentGameDate}
              />
            </div>
          )}

          {/* === INTELIJEN TAB === */}
          {currentSector === "intelijen" && (
            <div className="space-y-10">
              <SimpleGridSection
                title="1. Sistem Intelijen Strategis"
                data={countryEntry.intelijen}
                buildingDeltas={{...buildingDeltas, ...defenseDeltas}}
                completionDates={{...buildingCompletionDates, ...defenseCompletionDates}}
                constructionQueue={[...(constructionQueue || []), ...defenseQueue]}
                icon={Eye}
                color="text-violet-500"
                handleIconClick={handleIconClick}
                type="intelijen"
                highlitCard={highlitCard}
                currentGameDate={currentGameDate}
              />
              {/* Militer Strategis / Komando */}
              {(countryEntry as any).militer_strategis && (
                <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 space-y-6">
                  <h3 className="text-lg font-black text-white uppercase tracking-widest italic flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-violet-500 rounded-full" />
                    2. Komando Strategis & Operasi
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(() => {
                      const strategis = (countryEntry as any).militer_strategis;
                      const items = [
                        { key: "waktu_respon", label: "Waktu Respon Nasional", value: strategis?.waktu_respon, unit: "Menit", color: "text-emerald-500" },
                        { key: "intelijen", label: "Kapasitas Intelijen", value: strategis?.intelijen, unit: "Level", color: "text-violet-500" },
                        { key: "status_nuklir", label: "Status Program Nuklir", value: strategis?.status_nuklir ? "AKTIF" : "NONAKTIF", unit: "", color: strategis?.status_nuklir ? "text-red-500" : "text-zinc-500" },
                      ];
                      return items.map(item => (
                        <div key={item.key} className="bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-2xl">
                          <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-1">{item.label}</p>
                          <p className={`text-xl font-black ${item.color}`}>
                            {typeof item.value === 'number' ? item.value.toLocaleString('id-ID') : item.value}
                            {item.unit && <span className="text-xs opacity-50 ml-1">{item.unit}</span>}
                          </p>
                        </div>
                      ));
                    })()}
                  </div>
                  {/* Operasi Strategis */}
                  {(countryEntry as any).militer_strategis?.operasi_strategis && (
                    <>
                      <h4 className="text-sm font-black text-zinc-400 uppercase tracking-widest mt-4">Operasi Strategis</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                        {Object.entries((countryEntry as any).militer_strategis.operasi_strategis).map(([key, val]: any) => {
                          const elementId = `ops_${key}`;
                          const isHighlit = elementId === highlitCard || key === highlitCard;
                          const deltaVal = defenseDeltas[key] || 0;
                          const displayVal = (typeof val === 'number' ? val : Number(val)) + deltaVal;
                          return (
                            <div 
                              id={elementId}
                              key={key} 
                              className={`bg-zinc-950/60 border p-4 rounded-xl transition-all duration-500 relative ${
                                isHighlit 
                                  ? 'border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.4)] ring-2 ring-amber-500/30' 
                                  : 'border-zinc-800/60'
                              }`}
                            >
                              {isHighlit && (
                                <div className="absolute inset-0 rounded-xl border-2 border-amber-500 animate-pulse pointer-events-none" />
                              )}
                              <p className="text-[9px] font-black tracking-widest text-zinc-500 uppercase mb-1">{key.replace(/_/g, ' ')}</p>
                                <div className="flex items-center gap-1.5 lowercase italic">
                                  {(() => {
                                    const inProgress = defenseQueue?.filter((q: any) => q.buildingKey === key).reduce((acc: number, curr: any) => acc + (Number(curr.quantity) || 1), 0) || 0;
                                    const hasRecentDelta = deltaVal > 0 && isWithin7Days(defenseCompletionDates[key], currentGameDate);
                                    const isBuilding = inProgress > 0;
                                    
                                    if (hasRecentDelta || isBuilding) {
                                      return (
                                        <>
                                          <span className="text-sm font-bold text-zinc-500/70">{Number(val || 0).toLocaleString('id-ID')}</span>
                                          <span className="text-[8px] font-black text-zinc-600">ke</span>
                                          <p className="text-lg font-black text-white">{displayVal + inProgress}</p>
                                        </>
                                      );
                                    }
                                    return <p className="text-lg font-black text-white">{displayVal}</p>;
                                  })()}
                                  {deltaVal > 0 && isWithin7Days(defenseCompletionDates[key], currentGameDate) && (
                                    <span className="text-[10px] font-black text-emerald-500">+{deltaVal}</span>
                                  )}
                                </div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {/* === ARMADA MILITER TAB === */}
          {currentSector === "armada_militer" && (
            <div className="space-y-10">
              {(() => {
                const armada = (countryEntry as any).armada_militer;
                if (!armada) return <p className="text-zinc-500 italic">Data armada tidak tersedia.</p>;

                const branches = [
                  { key: "darat", label: "Armada Darat", color: "text-amber-500", icon: Shield, data: armada.darat },
                  { key: "laut", label: "Armada Laut", color: "text-cyan-500", icon: Ship, data: armada.laut },
                  { key: "udara", label: "Armada Udara", color: "text-sky-500", icon: Radar, data: armada.udara },
                ];

                return (
                  <>
                    {/* Barak — Top Level */}
                    {(() => {
                      const isBarakHighlit = highlitCard === 'barak';
                      return (
                        <div 
                          id="barak" 
                          className={`bg-zinc-900/30 border p-8 rounded-3xl transition-all duration-500 relative ${
                            isBarakHighlit 
                              ? 'border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.5)] ring-2 ring-amber-500/50 scale-[1.02] z-50 bg-amber-500/10' 
                              : 'border-zinc-800/50'
                          }`}
                        >
                          {isBarakHighlit && (
                            <div className="absolute inset-0 rounded-3xl border-2 border-amber-500 animate-pulse pointer-events-none" />
                          )}
                          <h3 className="text-lg font-black text-white uppercase tracking-widest italic flex items-center gap-3 mb-4">
                            <div className="w-1.5 h-6 bg-red-500 rounded-full" />
                            Barak Militer
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-2xl">
                              <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-1">Jumlah Barak</p>
                              <div className="flex items-baseline gap-2 lowercase italic">
                                {(() => {
                                  const barakKey = "1_barak";
                                  const inProgress = defenseQueue?.filter((q: any) => q.buildingKey === barakKey).reduce((acc: number, curr: any) => acc + (Number(curr.quantity) || 1), 0) || 0;
                                  const hasRecentDelta = defenseDeltas[barakKey] > 0 && isWithin7Days(defenseCompletionDates[barakKey], currentGameDate);
                                  const isBuilding = inProgress > 0;
                                  const currentTotal = (armada.barak || 0) + (defenseDeltas[barakKey] || 0);
                                  
                                  if (hasRecentDelta || isBuilding) {
                                    return (
                                      <>
                                        <span className="text-xl font-bold text-zinc-500/70">{Number(armada.barak || 0).toLocaleString('id-ID')}</span>
                                        <span className="text-xs font-black text-zinc-600">ke</span>
                                        <p className="text-3xl font-black text-white">{currentTotal + inProgress}</p>
                                      </>
                                    );
                                  }
                                  return <p className="text-3xl font-black text-white">{currentTotal}</p>;
                                })()}
                                {defenseDeltas["1_barak"] > 0 && isWithin7Days(defenseCompletionDates["1_barak"], currentGameDate) && (
                                  <p className="text-sm font-black text-emerald-500">+{defenseDeltas["1_barak"]}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* 3 Branches */}
                    {branches.map(branch => (
                      <SimpleGridSection
                        key={branch.key}
                        title={branch.label}
                        data={branch.data}
                        buildingDeltas={{...buildingDeltas, ...defenseDeltas}}
                        completionDates={{...buildingCompletionDates, ...defenseCompletionDates}}
                        constructionQueue={[...(constructionQueue || []), ...defenseQueue]}
                        icon={branch.icon}
                        color={branch.color}
                        handleIconClick={handleIconClick}
                        type={`armada_${branch.key}`}
                        highlitCard={highlitCard}
                        currentGameDate={currentGameDate}
                      />
                    ))}
                  </>
                );
              })()}
            </div>
          )}

          {/* === ARMADA POLISI TAB === */}
          {currentSector === "armada_polisi" && (
            <div className="space-y-10">
              <SimpleGridSection
                title="1. Armada Kepolisian Nasional"
                data={(countryEntry as any).armada_kepolisian?.armada_polisi || (countryEntry as any).armada_kepolisian}
                buildingDeltas={{...buildingDeltas, ...defenseDeltas}}
                completionDates={{...buildingCompletionDates, ...defenseCompletionDates}}
                constructionQueue={[...(constructionQueue || []), ...defenseQueue]}
                icon={Car}
                color="text-blue-500"
                handleIconClick={handleIconClick}
                type="polisi"
                highlitCard={highlitCard}
                currentGameDate={currentGameDate}
              />
            </div>
          )}

          {/* === MANAJEMEN PERTAHANAN TAB === */}
          {currentSector === "manajemen_pertahanan" && (
            <div className="space-y-10">
              <SimpleGridSection
                title="1. Infrastruktur Pertahanan Nasional"
                data={(countryEntry as any).sektor_pertahanan}
                buildingDeltas={{...buildingDeltas, ...defenseDeltas}}
                completionDates={{...buildingCompletionDates, ...defenseCompletionDates}}
                constructionQueue={[...(constructionQueue || []), ...defenseQueue]}
                icon={Settings}
                color="text-teal-500"
                handleIconClick={handleIconClick}
                type="pertahanan"
                highlitCard={highlitCard}
                currentGameDate={currentGameDate}
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

                      const elementId = `hunian_${house.id}`;
                      const isHighlit = elementId === highlitCard || house.id === highlitCard;

                      return (
                        <div 
                          id={elementId}
                          key={house.id} 
                          className={`bg-zinc-900/30 border p-8 rounded-[32px] transition-all duration-500 relative ${
                            isHighlit 
                              ? 'border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.4)] ring-2 ring-amber-500/50 scale-[1.01] z-10 bg-amber-500/5' 
                              : 'border-zinc-800/50 hover:bg-zinc-900/40'
                          }`}
                        >
                          {isHighlit && (
                            <div className="absolute inset-0 rounded-[2.5rem] border-2 border-amber-500 animate-pulse pointer-events-none" />
                          )}
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
                                  {(() => {
                                    const compDate = buildingCompletionDates[house.id] || Object.entries(buildingCompletionDates).find(([k]) => k.replace(/^\d+_/, '') === house.id)?.[1];
                                    const hasRecentDelta = unitsDelta > 0 && isWithin7Days(compDate, currentGameDate);
                                    const isBuilding = !!constructionQueue?.find((q: any) => q.buildingKey === house.id || q.buildingKey.replace(/^\d+_/, '') === house.id);
                                    
                                    if (hasRecentDelta || isBuilding) {
                                      return (
                                        <div className="flex items-center gap-2">
                                          <span className="text-2xl text-zinc-500/70 font-bold">{Number(unitsBaseline).toLocaleString('id-ID')}</span>
                                          <span className="text-xs text-zinc-600 font-black uppercase italic">ke</span>
                                          <span>{totalUnits.toLocaleString('id-ID')}</span>
                                        </div>
                                      );
                                    }
                                    return totalUnits.toLocaleString('id-ID');
                                  })()}
                                </span>
                                {(() => {
                                  const compDate = buildingCompletionDates[house.id] || Object.entries(buildingCompletionDates).find(([k]) => k.replace(/^\d+_/, '') === house.id)?.[1];
                                  if (unitsDelta > 0 && isWithin7Days(compDate, currentGameDate)) {
                                    return (
                                      <span className="text-2xl font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-xl border border-emerald-500/20">
                                        +{unitsDelta.toLocaleString('id-ID')}
                                      </span>
                                    );
                                  }
                                  return null;
                                })()}
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

function ProductionSection({ title, items, buildingDeltas, completionDates = {}, constructionQueue, stocks, type, handleIconClick, highlitCard, currentGameDate }: any) {
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
          
          // Smart ID Generation for deep-linking
          const cleanKey = key.replace(/^\d+_/, '');
          const elementId = 
            type === 'agrikultur' ? `pertanian_${cleanKey}` : 
            type === 'peternakan' ? `peternakan_${cleanKey}` :
            type === 'pangan' ? `pabrik_${cleanKey}` : 
            type === 'manufaktur' ? `pabrik_${cleanKey}` : 
            type === 'militer' ? `pabrik_militer_${cleanKey}` : 
            type === 'listrik' ? `energi_${cleanKey}` : 
            type === 'ekstraksi' ? `tambang_${cleanKey}` : 
            type === 'perikanan' ? `perikanan_${cleanKey}` : 
            type === 'farmasi' ? `farmasi_${cleanKey}` : 
            cleanKey;
          const isHighlit = elementId === highlitCard || cleanKey === highlitCard || key === highlitCard;
          
          if (total <= 0 && baseline === undefined) return null;

          const stock = stocks[key] || 0;

          return (
            <div 
              id={elementId} 
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
                      
                      const compDate = completionDates[key] || Object.entries(completionDates).find(([k]) => k.replace(/^\d+_/, '') === key)?.[1];
                      const hasRecentDelta = delta > 0 && isWithin7Days(compDate, currentGameDate);
                      const isBuilding = inProgress > 0;
                      
                      if (hasRecentDelta || isBuilding) {
                        return (
                          <div className="flex items-center gap-1.5 lowercase italic">
                            <span className="text-sm font-bold text-zinc-500/70">{Number(baseline || 0).toLocaleString('id-ID')}</span>
                            <span className="text-[8px] font-black text-zinc-600">ke</span>
                            <span className="text-xl font-black text-white">{(total + inProgress).toLocaleString('id-ID')}</span>
                          </div>
                        );
                      }
                      
                      return (total + inProgress).toLocaleString('id-ID');
                    })()}
                  </span>
                  {(() => {
                    const compDate = completionDates[key] || Object.entries(completionDates).find(([k]) => k.replace(/^\d+_/, '') === key)?.[1];
                    if (delta > 0 && isWithin7Days(compDate, currentGameDate)) {
                      return (
                        <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-md border border-emerald-500/20">
                          +{delta.toLocaleString('id-ID')}
                        </span>
                      );
                    }
                    return null;
                  })()}
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

function SimpleGridSection({ title, data, buildingDeltas, completionDates = {}, constructionQueue, icon: Icon, color, handleIconClick, type, highlitCard, currentGameDate }: any) {
  if (!data) return null;

  const getLabel = (key: string, type: string) => {
    let metadata: any = null;
    switch (type) {
      case 'infrastruktur': metadata = infrastrukturRate; break;
      case 'sosial': metadata = sosialRate; break;
      case 'intelijen': metadata = intelijenRate; break;
      case 'armada_darat': case 'armada_laut': case 'armada_udara': metadata = armadaMiliterRate; break;
      case 'polisi': metadata = armadaPolisiRate; break;
      case 'pertahanan': metadata = pertahananRate; break;
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
      case 'intelijen': metadata = intelijenRate; break;
      case 'armada_darat': case 'armada_laut': case 'armada_udara': metadata = armadaMiliterRate; break;
      case 'polisi': metadata = armadaPolisiRate; break;
      case 'pertahanan': metadata = pertahananRate; break;
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
          const cleanKey = key.replace(/^\d+_/, '');
          const delta = buildingDeltas[key] || buildingDeltas[cleanKey] || Object.entries(buildingDeltas).find(([k]) => k.replace(/^\d+_/, '') === cleanKey)?.[1] || 0;
          const total = (typeof val === 'number' ? val : Number(val?.toString().replace(/\./g, '') || 0)) + Number(delta);
          
          const elementId = 
            type === 'infrastruktur' ? `infra_${cleanKey}` : 
            type === 'sosial' ? `sosial_${cleanKey}` : 
            type === 'intelijen' ? `intel_${cleanKey}` : 
            type === 'armada_darat' ? `darat_${cleanKey}` : 
            type === 'armada_laut' ? `laut_${cleanKey}` : 
            type === 'armada_udara' ? `udara_${cleanKey}` : 
            type === 'polisi' ? `polisi_${cleanKey}` : 
            type === 'pertahanan' ? `tahan_${cleanKey}` : 
            cleanKey;

          // Extend highlit card match check to accommodate pure aesthetic slugs mapped back to original IDs
          const isHighlit = 
            elementId === highlitCard || 
            cleanKey === highlitCard || 
            key === highlitCard || 
            (cleanKey === 'menengah' && highlitCard === 'pendidikan_menengah') ||
            (cleanKey === 'dasar' && highlitCard === 'pendidikan_dasar') ||
            (cleanKey === 'prasekolah' && highlitCard === 'pendidikan_anak_usia_dini') ||
            (cleanKey === 'lanjutan' && highlitCard === 'pendidikan_lanjutan') ||
            (cleanKey === 'tinggi' && highlitCard === 'pendidikan_tinggi') ||
            (cleanKey === 'universitas' && highlitCard === 'universitas') ||
            (cleanKey === 'rumah_sakit_kecil' && highlitCard === 'rumah_sakit_daerah') ||
            (cleanKey === 'rumah_sakit_besar' && highlitCard === 'rumah_sakit_pusat') ||
            (cleanKey === 'pusat_diagnostik' && highlitCard === 'laboratorium_medik') ||
            (cleanKey === 'stadion' && highlitCard === 'stadion_nasional') ||
            (cleanKey === 'pusat_latihan' && highlitCard === 'pusat_latihan_olahraga') ||
            (cleanKey === 'mall' && highlitCard === 'pusat_belanja') ||
            (cleanKey === 'teater' && (highlitCard === 'gedung_teater' || highlitCard === 'gedung_konser')) ||
            (cleanKey === 'kejaksaan_court' && (highlitCard === 'pengadilan_tinggi' || highlitCard === 'fasilitas_koreksi')) ||
            (cleanKey === 'legal_aid' && highlitCard === 'pusat_bantuan_hukum');
          
          if (total <= 0 && val === undefined) return null;
          
          return (
            <div 
              id={elementId} 
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
                      
                      const compDate = completionDates[key] || completionDates[cleanKey] || Object.entries(completionDates).find(([k]) => k.replace(/^\d+_/, '') === cleanKey)?.[1];
                      const hasRecentDelta = delta > 0 && isWithin7Days(compDate, currentGameDate);
                      const isBuilding = inProgress > 0;
                      
                      if (hasRecentDelta || isBuilding) {
                        return (
                          <div className="flex items-center gap-1.5 lowercase italic">
                            <span className="text-sm font-bold text-zinc-500/70">{Number(val || 0).toLocaleString('id-ID')}</span>
                            <span className="text-[8px] font-black text-zinc-600">ke</span>
                            <span className="text-xl font-black text-white">{(total + inProgress).toLocaleString('id-ID')}</span>
                          </div>
                        );
                      }
                      
                      return (total + inProgress).toLocaleString('id-ID');
                    })()}
                  </span>
                  {(() => {
                    const compDate = completionDates[key] || completionDates[cleanKey] || Object.entries(completionDates).find(([k]) => k.replace(/^\d+_/, '') === cleanKey)?.[1];
                    if (delta > 0 && isWithin7Days(compDate, currentGameDate)) {
                      return (
                        <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-md border border-emerald-500/20">
                          +{delta.toLocaleString('id-ID')}
                        </span>
                      );
                    }
                    return null;
                  })()}
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

