"use client"

import { useEffect, useState } from "react";

import { 
  Globe, BarChart3, Handshake, Swords, Gift, X
} from "lucide-react";

import SDAInfoRow from "./1_info_strategis/1_SDA/SDAInfoRow";
import UNVotesRow from "./1_info_strategis/2_PBB/UNVotesRow";
import ReligionRow from "./1_info_strategis/3_Agama/ReligionRow";
import IdeologyRow from "./1_info_strategis/4_Ideologi/IdeologyRow";
import KasNegara from "./1_info_strategis/5_Keuangan/1_KasNegara";
import PenghasilanHarian from "./1_info_strategis/5_Keuangan/2_PenghasilanHarian";

import DiplomacyTab from "./2_diplomasi_hubungan/DiplomacyTab";
import MilitaryTab from "./3_aksi_militer_dan_intelijen/MilitaryTab";
import AidTab from "./4_bantuan_dan_kerjasama/AidTab";

import { allRelations } from "@/app/database/data/countries/relations";
import { gameStorage } from "@/app/game/gamestorage";
import { countries as centersData } from "@/app/database/data/countries/region/index";
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
}

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


export default function StrategyModal({ isOpen, onClose, targetCountry, userCountry }: StrategyModalProps) {
  const [menuTab, setMenuTab] = useState<'info' | 'diplomacy' | 'military' | 'aid'>('info');
  const [liveStats, setLiveStats] = useState({ anggaran: 0, dailyDelta: 0 });


  const userEntry = centersData.find(c => c.name_en === userCountry || c.name_id === userCountry);
  const userId = userEntry ? userEntry.name_id.toLowerCase().trim() : userCountry.toLowerCase().trim();
  
  const countryEntry = targetCountry ? centersData.find(c => c.name_en === targetCountry || c.name_id === targetCountry) : undefined;
  let targetId = countryEntry ? countryEntry.name_id.toLowerCase().trim() : (targetCountry?.toLowerCase().trim() || "");
  
  if (targetCountry && geoJsonToIndo[targetCountry]) {
    targetId = geoJsonToIndo[targetCountry].toLowerCase().trim();
  }

  const userRelations = allRelations[userId];
  const relationItem = userRelations ? userRelations.find((item: any) => item.name.toLowerCase().trim() === targetId) : null;
  const relationScore = relationItem ? relationItem.relation : 50;

  let relationLabel = "Netral";
  let relationColor = "text-yellow-400";

  if (relationScore <= 25) { relationLabel = "Sangat Buruk"; relationColor = "text-red-500"; }
  else if (relationScore <= 49) { relationLabel = "Buruk"; relationColor = "text-red-400"; }
  else if (relationScore <= 69) { relationLabel = "Netral"; relationColor = "text-yellow-400"; }
  else if (relationScore <= 79) { relationLabel = "Baik"; relationColor = "text-green-400"; }
  else { relationLabel = "Cukup Baik"; relationColor = "text-emerald-500"; }

  // 3. Subscription for Live Data (Real-time every game day)
  useEffect(() => {
    if (!isOpen || !targetId || !countryEntry) return;

    const updateStats = () => {
      const isUser = targetId === userId;
      let currentAnggaran = 0;
      
      // Calculate daily income like the database page: Sum of tax revenues
      const currentTaxes = taxStorage.getTaxes(countryEntry.name_en) || countryEntry.pajak || {};
      const totalTaxRevenue = Object.values(currentTaxes as any).reduce((sum: number, v: any) => sum + (Number(v?.pendapatan) || 0), 0);
      const currentDelta = totalTaxRevenue;

      if (isUser) {
        currentAnggaran = budgetStorage.getBudget();
      } else {
        // Pull AI budget from storage to show live progression
        currentAnggaran = aiBudgetStorage.getBudget(countryEntry.name_en);
      }

      setLiveStats({ anggaran: currentAnggaran, dailyDelta: currentDelta });
    };

    updateStats(); // Initial load

    // Subscribe to time ticks and budget updates
    const unsubscribeTime = timeStorage.subscribe(() => updateStats());
    window.addEventListener('budget_storage_updated', updateStats);
    window.addEventListener('ai_budget_updated', updateStats);
    
    return () => {
      unsubscribeTime();
      window.removeEventListener('budget_storage_updated', updateStats);
      window.removeEventListener('ai_budget_updated', updateStats);
    };
  }, [isOpen, targetId, userId, countryEntry]);

  if (!isOpen || !targetCountry || !countryEntry) return null;

  return (
    <div className="absolute inset-0 bg-black/70 z-30 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#181a1f] border border-zinc-800/80 rounded-2xl w-full max-w-lg flex flex-col gap-0 text-white shadow-2xl relative">
        
        {/* 1. Modal Header with Flag title structure */}
        <div className="flex justify-between items-center border-b border-zinc-800/80 p-5 bg-zinc-900/40">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-xl">
              <Globe className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h2 className="font-bold text-xl text-amber-500">
                {targetCountry}
              </h2>
              <p className="text-xs text-zinc-400">
                Hubungan: <span className={`font-semibold ${relationColor}`}>{relationScore} ({relationLabel})</span>
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="h-8 w-8 rounded-full hover:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white transition cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 2. Content Views depending on menuTab */}
        <div className="flex-1 p-5 overflow-y-auto">
          {menuTab === 'info' && (
            <div className="space-y-4">
              <div className="bg-zinc-900/70 p-4 rounded-xl border border-zinc-800/50 space-y-3">
                <InfoRow label="Sumber Daya Alam" value={
                  <SDAInfoRow sektor_ekstraksi={countryEntry?.sektor_ekstraksi} />
                } />
                <InfoRow label="Jumlah suara di PBB" value={
                  <UNVotesRow un_vote={countryEntry?.un_vote} />
                } />
                <InfoRow label="Agama Mayoritas" value={
                  <ReligionRow religion={countryEntry?.religion} />
                } />
                <InfoRow label="Ideologi Negara" value={
                  <IdeologyRow ideology={countryEntry?.ideology} />
                } />
                <div className="pt-2 border-t border-zinc-800/40 mt-1 space-y-2.5">
                  <InfoRow label="Kas Negara" value={
                    <KasNegara anggaran={liveStats.anggaran} />
                  } />
                  <InfoRow label="Penghasilan Harian" value={
                    <PenghasilanHarian dailyDelta={liveStats.dailyDelta} />
                  } />
                </div>
              </div>
              <div className="space-y-2.5">
                <p className="text-xs text-zinc-500 font-semibold">Keseimbangan Pasukan</p>
                <div className="h-3 w-full bg-zinc-800/80 rounded-full overflow-hidden flex border border-zinc-800">
                  <div className="bg-red-500/80 h-full" style={{ width: '60%' }} />
                  <div className="bg-green-500/80 h-full" style={{ width: '40%' }} />
                </div>
              </div>
            </div>
          )}

          {menuTab === 'diplomacy' && <DiplomacyTab />}
          {menuTab === 'military' && <MilitaryTab />}
          {menuTab === 'aid' && <AidTab />}
        </div>

        {/* 3. Constant Bottom Navigation Tab Bar */}
        <div className="border-t border-zinc-800/80 bg-zinc-900/60 p-3 flex justify-evenly items-center gap-2 rounded-b-2xl">
          <TabButton icon={<BarChart3 size={20} />} active={menuTab === 'info'} onClick={() => setMenuTab('info')} label="Info Strategis" />
          <TabButton icon={<Handshake size={20} />} active={menuTab === 'diplomacy'} onClick={() => setMenuTab('diplomacy')} label="Diplomasi & Hubungan" />
          <TabButton icon={<Swords size={20} />} active={menuTab === 'military'} onClick={() => setMenuTab('military')} label="Aksi Militer & Intelijen" />
          <TabButton icon={<Gift size={20} />} active={menuTab === 'aid'} onClick={() => setMenuTab('aid')} label="Bantuan & Kerjasama" />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string, value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800/40 pb-2.5">
      <span className="text-xs text-zinc-400 font-medium">{label}</span>
      <span className="text-xs font-bold text-zinc-200">{value}</span>
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

