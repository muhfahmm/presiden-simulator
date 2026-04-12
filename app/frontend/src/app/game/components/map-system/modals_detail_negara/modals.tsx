"use client"

import { useEffect, useState, useRef } from "react";

import { 
  Globe, BarChart3, Handshake, Swords, Gift, X, TrendingUp
} from "lucide-react";

import SDAInfoRow from "./1_info_strategis/1_SDA/SDAInfoRow";
import UNVotesRow from "./1_info_strategis/2_PBB/UNVotesRow";
import ReligionRow from "./1_info_strategis/3_Agama/ReligionRow";
import IdeologyRow from "./1_info_strategis/4_Ideologi/IdeologyRow";
import KasNegara from "./1_info_strategis/5_Keuangan/1_KasNegara";
import PenghasilanHarian from "./1_info_strategis/5_Keuangan/2_PenghasilanHarian";
import SatisfactionRow from "./1_info_strategis/6_Kepuasan/SatisfactionRow";
import { aiHappinessStorage } from "./1_info_strategis/6_Kepuasan/AIHappinessStorage";
import { happinessStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan/happinessStorage";

import DiplomacyTab from "./2_diplomasi_hubungan/DiplomacyTab";
import MilitaryTab from "./3_aksi_militer_dan_intelijen/MilitaryTab";
import AidTab from "./4_bantuan_dan_kerjasama/AidTab";
import KedutaanModal from "./2_diplomasi_hubungan/1_kedutaan/KedutaanModal";
import ModalDetailKedubes from "./2_diplomasi_hubungan/1_kedutaan/modals_detail_kedubes";
import MitraPerdaganganModal from "./2_diplomasi_hubungan/7_mitra_perdagangan/MitraPerdaganganModal";
import HubunganInternasional from "./2_diplomasi_hubungan/8_hubungan_internasional/HubunganInternasional";
import TandaTanganPakta from "./2_diplomasi_hubungan/2_pakta_non_agresi/TandaTanganPakta";
import TandaTanganAliansi from "./2_diplomasi_hubungan/3_aliansi_pertahanan/TandaTanganAliansi";
import StatusPerjanjianDagang from "./2_diplomasi_hubungan/4_perjanjian_dagang/StatusPerjanjianDagang";
import TandaTanganDagang from "./2_diplomasi_hubungan/4_perjanjian_dagang/TandaTanganDagang";
import ModalsTingkatkanHubungan from "./4_bantuan_dan_kerjasama/3_tingkatkan_hubungan/modalsTingkatkanHubungan";
import BeriTentaraModal from "./4_bantuan_dan_kerjasama/1_beri_tentara/BeriTentaraModal";
import DukungKedaulatanModal from "./4_bantuan_dan_kerjasama/4_dukung_kedaulatan/DukungKedaulatanModal";
import MintaBantuanModal from "./4_bantuan_dan_kerjasama/5_minta_bantuan/MintaBantuanModal";
import TanamkanIdeologiModal from "./4_bantuan_dan_kerjasama/6_tanamkan_ideologi/TanamkanIdeologiModal";
import { tradeStorage } from "./2_diplomasi_hubungan/4_perjanjian_dagang/logic/tradeStorage";

import { COUNTRY_REGIONS, getRegion } from "./2_diplomasi_hubungan/1_kedutaan/logic/regions";
import { allRelations } from "@/app/database/data/database_hubungan_antar_negara";
import { relationStorage } from "./2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";
import { gameStorage } from "@/app/game/gamestorage";
import { unSecurityCouncilStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";
import { countries as centersData, asiaCountries, afrikaCountries, eropaCountries, naCountries, saCountries, oceaniaCountries } from "@/app/database/data/negara/benua/index";

function getContinent(countryNameId: string): string {
  const lower = countryNameId.toLowerCase();
  if (asiaCountries.some(c => c.name_id.toLowerCase() === lower)) return "Asia";
  if (afrikaCountries.some(c => c.name_id.toLowerCase() === lower)) return "Afrika";
  if (eropaCountries.some(c => c.name_id.toLowerCase() === lower)) return "Eropa";
  if (naCountries.some(c => c.name_id.toLowerCase() === lower)) return "Amerika Utara";
  if (saCountries.some(c => c.name_id.toLowerCase() === lower)) return "Amerika Selatan";
  if (oceaniaCountries.some(c => c.name_id.toLowerCase() === lower)) return "Oceania";
  return "Global";
}
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { calculateDailyBudgetDelta } from "@/app/game/data/economy/BudgetDeltaLogic";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { aiBudgetStorage } from "./1_info_strategis/5_Keuangan/AIBudgetStorage";

interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string | null;
  userCountry: string;
  activeTab?: string;
  activeSubTab?: string;
  setActiveMenu: (menu: string) => void;
  onTabChange?: (tab: 'info' | 'diplomacy' | 'military' | 'aid') => void;
}

export const tabSlugToMenu: Record<string, 'info' | 'diplomacy' | 'military' | 'aid'> = {
  "info_strategis": "info",
  "diplomasi_hubungan": "diplomacy",
  "aksi_militer_intelijen": "military",
  "bantuan_kerjasama": "aid"
};

export const menuToTabSlug: Record<string, string> = {
  "info": "info_strategis",
  "diplomacy": "diplomasi_hubungan",
  "military": "aksi_militer_intelijen",
  "aid": "bantuan_kerjasama"
};

const geoJsonToIndo: { [key: string]: string } = {
  "The Bahamas": "bahama",
  "Democratic Republic of the Congo": "republik demokratik kongo",
  "Northern Cyprus": "siprus",
  "Czech Republic": "ceko",
  "Guinea Bissau": "guinea-bissau",
  "Equatorial Guinea": "guinea",
  "Macedonia": "makedonia utara",
  "Republic of Serbia": "republik serbia",
  "Swaziland": "eswatini",
  "East Timor": "timor-leste",
  "Turkey": "turki",
  "United Republic of Tanzania": "republik tanzania",
  "United States of America": "amerika serikat",
  "West Bank": "palestina",
  "Falkland Islands": "argentina",
  "Western Sahara": "maroko",
  "Somaliland": "somalia",
  "New Caledonia": "fiji",
  "Solomon Islands": "marshall"
};


export default function StrategyModal({ 
  isOpen, onClose, targetCountry, userCountry, activeTab, activeSubTab, setActiveMenu, onTabChange 
}: StrategyModalProps) {
  const [menuTab, setMenuTab] = useState<'info' | 'diplomacy' | 'military' | 'aid'>('info');
  const [liveStats, setLiveStats] = useState({ anggaran: 0, dailyDelta: 0, satisfaction: 55 });
  const [isTemporarilyHidden, setIsTemporarilyHidden] = useState(false);
  const [relationScore, setRelationScore] = useState(50);
  const [baseScore, setBaseScore] = useState(50);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Listen for temporary hide/show events from sub-modals
  useEffect(() => {
    const handleHide = () => setIsTemporarilyHidden(true);
    const handleShow = () => setIsTemporarilyHidden(false);
    
    window.addEventListener('hide_strategy_modal', handleHide);
    window.addEventListener('show_strategy_modal', handleShow);
    
    return () => {
      window.removeEventListener('hide_strategy_modal', handleHide);
      window.removeEventListener('show_strategy_modal', handleShow);
    };
  }, []);

  // Sync internal state with prop from URL
  useEffect(() => {
    if (activeTab && tabSlugToMenu[activeTab]) {
      setMenuTab(tabSlugToMenu[activeTab]);
    }
  }, [activeTab]);

  const handleTabClick = (tab: 'info' | 'diplomacy' | 'military' | 'aid') => {
    setMenuTab(tab);
    if (onTabChange) onTabChange(tab);
    
    // Clear sub-tab in URL when switching main tabs
    if (targetCountry) {
      const country = centersData.find(c => c.name_id === targetCountry || c.name_en === targetCountry);
      if (country) {
        setActiveMenu(`CountryModal:${country.name_id.toLowerCase()}:${menuToTabSlug[tab]}`);
      }
    }
  };


  const userEntry = centersData.find(c => c.name_id === userCountry || c.name_en === userCountry);
  const userId = userEntry ? userEntry.name_id.toLowerCase().trim() : userCountry.toLowerCase().trim();
  const targetId = relationStorage.normalizeTargetId(targetCountry || "", centersData);
  const countryEntry = centersData.find(c => c.name_id.toLowerCase().trim() === targetId);

  // States
  const [tick, setTick] = useState(0);

  // 1. Tick for Global Real-time Updates
  useEffect(() => {
    const handleUpdate = () => setTick(t => t + 1);
    window.addEventListener("relation_storage_updated", handleUpdate);
    window.addEventListener("relation_status_updated", handleUpdate);
    return () => {
      window.removeEventListener("relation_storage_updated", handleUpdate);
      window.removeEventListener("relation_status_updated", handleUpdate);
    };
  }, []);

  // 2. Score & Stats Logic
  useEffect(() => {
    if (!isOpen || !targetId || !countryEntry) return;

    const targetK = targetId;
    const userRelations = (allRelations as any)[userId];
    const relationData = Array.isArray(userRelations) 
      ? userRelations.find((r: any) => r.name?.toLowerCase().trim() === targetK)
      : null;
    const initialBase = relationData?.relation !== undefined ? relationData.relation : 50;
    setBaseScore(initialBase);

    const updateStats = () => {
      const isUser = targetId === userId;
      let currentAnggaran = 0;
      let currentDailyDelta = 0;

      if (isUser) {
        currentAnggaran = budgetStorage.getBudget();
        currentDailyDelta = calculateDailyBudgetDelta(countryEntry as any, buildingStorage.getBuildingDeltas());
      } else {
        currentAnggaran = aiBudgetStorage.getBudget(countryEntry.name_en);
        // For AI, we use empty building deltas as a baseline for comparison
        currentDailyDelta = calculateDailyBudgetDelta(countryEntry as any, {});
      }

      setLiveStats({ anggaran: currentAnggaran, dailyDelta: currentDailyDelta, satisfaction: isUser ? happinessStorage.getStats().value : aiHappinessStorage.getSatisfaction(countryEntry.name_en) });
      setRelationScore(relationStorage.getRelationScore(targetK, initialBase, userId));
    };

    updateStats();

    const unsubscribeTime = timeStorage.subscribe(() => updateStats());
    window.addEventListener('budget_storage_updated', updateStats);
    window.addEventListener('ai_budget_updated', updateStats);
    window.addEventListener('ai_happiness_updated', updateStats);
    window.addEventListener('happiness_updated', updateStats);
    
    return () => {
      unsubscribeTime();
      window.removeEventListener('budget_storage_updated', updateStats);
      window.removeEventListener('ai_budget_updated', updateStats);
      window.removeEventListener('ai_happiness_updated', updateStats);
      window.removeEventListener('happiness_updated', updateStats);
    };
  }, [isOpen, targetId, userId, countryEntry, tick]);

  const isUNSCMember = unSecurityCouncilStorage.getData()?.members?.some(m => m.name === userCountry);
  const finalScore = relationStorage.calculateFinalScore(relationScore, !!isUNSCMember);
  const metadata = relationStorage.getRelationMetadata(finalScore);
  const relationLabel = metadata.labelFull;
  const relationColor = metadata.color;

  if (!isOpen || !targetCountry || !countryEntry) return null;

  return (
    <>
      <div className={`absolute inset-0 z-[1000] flex items-center justify-center p-4 animate-in fade-in duration-200 pointer-events-none ${
        (isTemporarilyHidden || activeSubTab) ? '' : 'bg-black/20 backdrop-blur-sm'
      }`}>
        <div className={`bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl w-full max-w-2xl h-[600px] flex flex-col gap-0 text-white shadow-2xl relative transition-all duration-300 pointer-events-auto ${
          (isTemporarilyHidden || activeSubTab) ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100'
        }`}>
        
        {/* 1. Modal Header with Flag title structure */}
        <div className="flex justify-between items-center border-b border-zinc-800/80 p-6 bg-zinc-900/40">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Globe className="h-7 w-7 text-blue-400" />
            </div>
            <div>
              <h2 className="font-bold text-2xl text-amber-500 tracking-tight">
                {targetCountry}
              </h2>
              <p className="text-sm text-zinc-400">
                Hubungan: <span className={`font-semibold ${relationColor}`}>{finalScore} ({relationLabel})</span>
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="h-8 w-8 rounded-full hover:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white transition cursor-pointer pointer-events-auto"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 2. Content Views depending on menuTab */}
        <div className="flex-1 p-8 overflow-y-auto">
          {menuTab === 'info' && (
            <div className="space-y-6">
              <div className="bg-zinc-900/70 p-6 rounded-2xl border border-zinc-800/50 space-y-4">
                <InfoRow label="Sumber Daya Alam" value={
                  <SDAInfoRow sektor_ekstraksi={countryEntry?.sektor_ekstraksi} />
                } />
                <InfoRow label="Jumlah suara di PBB" value={
                  <UNVotesRow un_vote={countryEntry?.geopolitik?.un_vote} />
                } />
                <InfoRow label="Agama Mayoritas" value={
                  <ReligionRow religion={countryEntry?.religion} />
                } />
                <InfoRow label="Ideologi Negara" value={
                  <IdeologyRow ideology={countryEntry?.ideology} />
                } />
                <InfoRow label="Kepuasan Rakyat" value={
                  <SatisfactionRow value={liveStats.satisfaction} />
                } />
                <div className="pt-2 border-t border-zinc-800/40 mt-1 space-y-2.5">
                  <InfoRow label="Kas Negara" value={
                    <KasNegara anggaran={liveStats.anggaran} />
                  } />
                  <InfoRow label="Penghasilan Harian" value={
                    <PenghasilanHarian dailyDelta={liveStats.dailyDelta} countryName={targetCountry} />
                  } />
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-end">
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Keseimbangan Pasukan</p>
                  <div className="flex gap-4 text-[10px] font-bold uppercase">
                    <span className="text-red-400">Musuh: 60%</span>
                    <span className="text-green-400">Kita: 40%</span>
                  </div>
                </div>
                <div className="h-4 w-full bg-zinc-800/80 rounded-full overflow-hidden flex border border-zinc-800 shadow-inner">
                  <div className="bg-gradient-to-r from-red-600 to-red-500 h-full shadow-[0_0_10px_rgba(239,68,68,0.3)]" style={{ width: '60%' }} />
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-full shadow-[0_0_10px_rgba(16,185,129,0.3)]" style={{ width: '40%' }} />
                </div>
              </div>
            </div>
          )}

          {menuTab === 'diplomacy' && (
            <DiplomacyTab 
              userCountry={userCountry} 
              targetCountry={targetCountry} 
              targetId={targetId}
              activeSubTab={activeSubTab}
              setActiveMenu={setActiveMenu}
              relationScore={relationScore}
              relationLabel={relationLabel}
              relationColor={relationColor}
            />
          )}
          {menuTab === 'military' && (
            <MilitaryTab 
              setActiveMenu={setActiveMenu} 
              targetId={targetId}
            />
          )}
          {menuTab === 'aid' && (
            <AidTab 
              targetId={targetId}
              setActiveMenu={setActiveMenu}
            />
          )}
        </div>

        {/* 3. Constant Bottom Navigation Tab Bar */}
        <div className={`border-t border-zinc-800/80 bg-zinc-900/60 p-3 flex justify-evenly items-center gap-2 rounded-b-2xl pointer-events-auto ${
          activeSubTab ? 'pointer-events-none opacity-50' : ''
        }`}>
          <TabButton icon={<BarChart3 size={20} />} active={menuTab === 'info'} onClick={() => handleTabClick('info')} label="Info Strategis" />
          <TabButton icon={<Handshake size={20} />} active={menuTab === 'diplomacy'} onClick={() => handleTabClick('diplomacy')} label="Diplomasi & Hubungan" />
          <TabButton icon={<Swords size={20} />} active={menuTab === 'military'} onClick={() => handleTabClick('military')} label="Aksi Militer & Intelijen" />
          <TabButton icon={<Gift size={20} />} active={menuTab === 'aid'} onClick={() => handleTabClick('aid')} label="Bantuan & Kerjasama" />
        </div>
      </div>
    </div>

      {/* Sub-Modals Overlay Area - MOVED OUTSIDE to ensure clickability */}
      {activeSubTab === 'kedutaan' && (() => {
        const userEntry2 = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
        const targetEntry2 = countryEntry;
        if (!targetId) return null;
        
        return (
          <KedutaanModal 
            isOpen={true} 
            onClose={() => {
              setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan`);
            }}
            userCountry={userCountry}
            targetCountry={targetCountry}
            relationScore={relationScore}
            relationLabel={relationLabel}
            relationColor={relationColor}
            userReligion={userEntry2?.religion || "Sekuler"}
            targetReligion={targetEntry2?.religion || "Sekuler"}
            userIdeology={userEntry2?.ideology || "Netral"}
            targetIdeology={targetEntry2?.ideology || "Netral"}
            userContinent={userEntry2 ? getContinent(userEntry2.name_id) : "Global"}
            targetContinent={targetEntry2 ? getContinent(targetEntry2.name_id) : "Global"}
            userRegion={userEntry2 ? getRegion(userEntry2.name_id, getContinent(userEntry2.name_id)) : "Global"}
            targetRegion={targetEntry2 ? getRegion(targetEntry2.name_id, getContinent(targetEntry2.name_id)) : "Global"}
          />
        );
      })()}

      {activeSubTab === 'kedutaan_detail' && (
        <ModalDetailKedubes 
          isOpen={true}
          onClose={() => {
            setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan`);
          }}
          targetCountry={targetCountry || ""}
        />
      )}

      {activeSubTab === 'mitra_dagang' && (
        <MitraPerdaganganModal 
          isOpen={true}
          onClose={() => {
            setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan`);
          }}
          targetCountry={targetCountry || ""}
        />
      )}

      {activeSubTab === 'pakta_non_agresi' && (
        <TandaTanganPakta 
          isOpen={true}
          onClose={() => {
            setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan`);
          }}
          targetCountry={targetCountry || ""}
        />
      )}

      {activeSubTab === 'aliansi_pertahanan' && (
        <TandaTanganAliansi 
          isOpen={true}
          onClose={() => {
            setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan`);
          }}
          targetCountry={targetCountry || ""}
        />
      )}

      {activeSubTab === 'perjanjian_dagang' && (() => {
        const status = tradeStorage.getTradeStatus(userCountry, targetCountry || "");
        return status === 'active' ? (
          <StatusPerjanjianDagang 
            isOpen={true}
            onClose={() => {
              setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan`);
            }}
            setActiveMenu={setActiveMenu}
            targetCountry={targetCountry || ""}
          />
        ) : (
          <TandaTanganDagang 
            isOpen={true}
            onClose={() => {
              setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan`);
            }}
            targetCountry={targetCountry || ""}
          />
        );
      })()}

      {activeSubTab === 'hubungan_internasional' && (
        <HubunganInternasional 
          isOpen={true}
          onClose={() => {
            setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan`);
          }}
          targetCountry={targetCountry || ""}
        />
      )}

      {activeSubTab === 'tingkatkan_hubungan' && (
        <ModalsTingkatkanHubungan 
          isOpen={true}
          onClose={() => {
            setActiveMenu(`CountryModal:${targetId}:bantuan_kerjasama`);
          }}
          targetCountry={targetCountry || ""}
          relationScore={finalScore}
          baseScore={baseScore}
          relationLabel={relationLabel}
          relationColor={relationColor}
        />
      )}

      {activeSubTab === 'beri_tentara' && (
        <BeriTentaraModal 
          isOpen={true}
          onClose={() => {
            setActiveMenu(`CountryModal:${targetId}:bantuan_kerjasama`);
          }}
          targetCountry={targetId}
        />
      )}

      {activeSubTab === 'dukung_kedaulatan' && (
        <DukungKedaulatanModal 
          isOpen={true}
          onClose={() => {
            setActiveMenu(`CountryModal:${targetId}:bantuan_kerjasama`);
          }}
        />
      )}

      {activeSubTab === 'minta_bantuan' && (
        <MintaBantuanModal 
          isOpen={true}
          onClose={() => {
            setActiveMenu(`CountryModal:${targetId}:bantuan_kerjasama`);
          }}
        />
      )}

      {activeSubTab === 'tanamkan_ideologi' && (
        <TanamkanIdeologiModal 
          isOpen={true}
          onClose={() => {
            setActiveMenu(`CountryModal:${targetId}:bantuan_kerjasama`);
          }}
        />
      )}
    </>
  );
}

function InfoRow({ label, value }: { label: string, value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800/40 pb-3.5">
      <span className="text-sm text-zinc-400 font-medium">{label}</span>
      <span className="text-sm font-bold text-zinc-200">{value}</span>
    </div>
  );
}

function TabButton({ icon, active, onClick, label }: { icon: React.ReactNode, active: boolean, onClick: () => void, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`group relative p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center flex-1 ${
        active 
          ? 'bg-amber-500/80 text-white shadow-md' 
          : 'hover:bg-zinc-800/80 text-zinc-500 hover:text-zinc-200'
      }`}
    >
      {icon}
      
      {/* Dynamic Hover Tooltip - Positioned Below */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-[10px] font-black text-amber-500 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all z-[200] pointer-events-none shadow-2xl uppercase tracking-widest scale-75 group-hover:scale-100 origin-top border-t-2 border-t-amber-500/50">
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-950 border-l border-t border-zinc-800 rotate-45"></div>
        {label}
      </div>
    </button>
  );
}
