"use client"

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { 
  X, 
  Newspaper, 
  Globe, 
  ChevronRight, 
  Search, 
  TrendingUp, 
  Shield, 
  Activity,
  Zap,
  Info,
  Calendar
} from 'lucide-react';
import { newsStorage, NewsItem } from './newsStorage';
import { 
  BUILDING_NAME_LOOKUP, 
  resolveNestedValue, 
  detectConstructionDetails 
} from './buildingLookupUtility';
import { countries } from '@/app/database/data/negara/benua/index';

// Modular Tab Components
import { AllList } from './0_semua/AllList';
import { ConstructionList } from './1_pembangunan/ConstructionList';
import { FinanceList } from './2_keuangan/FinanceList';
import { TradeList } from './3_perdagangan/TradeList';
import { EmbassyList } from './4_kedutaan/EmbassyList';
import { PactList } from './5_pakta/PactList';
import { AllianceList } from './6_aliansi/AllianceList';

interface BeritaModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function BeritaModal({ isOpen, onClose, activeMenu, setActiveMenu }: BeritaModalProps) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Derive filter from URL/activeMenu state
  const filter = activeMenu.startsWith("Menu:Berita:") ? activeMenu.split(":")[2] : "all";

  useEffect(() => {
    if (isOpen) {
      setNews(newsStorage.getNews());
    }
    
    const handleUpdate = () => setNews(newsStorage.getNews());
    window.addEventListener('news_updated', handleUpdate);
    return () => window.removeEventListener('news_updated', handleUpdate);
  }, [isOpen]);

  // Calculate unread counts per category
  const unreadCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: 0, pembangunan: 0, keuangan: 0, perdagangan: 0, kedutaan: 0, pakta: 0, aliansi: 0
    };

    news.forEach(item => {
      if (item.read) return;
      counts.all++;

      const subj = item.subject.toLowerCase();
      if (item.category === 'construction') counts.pembangunan++;
      else if (item.category === 'finance') counts.keuangan++;
      else if (item.category === 'trade') counts.perdagangan++;
      else if (item.category === 'economy') {
        if (/(dana|hibah|anggaran|pajak|ekonomi|utang|hutang|keuangan|moneter)/.test(subj)) counts.keuangan++;
        else if (/(dagang|ekspor|impor|tarif|logistik|pasar|perdagangan|komoditas|harga)/.test(subj)) counts.perdagangan++;
        else counts.keuangan++; // Default to keuangan if it's general economy
      }
      else if (item.category === 'diplomacy') {
        if (/(pakta|perjanjian|mou|kesepakatan|traktat)/.test(subj)) counts.pakta++;
        else if (/(aliansi|sekutu|koalisi|blok|pertahanan)/.test(subj)) counts.aliansi++;
        else if (/(kedutaan|bilateral|diplomatik|pertemuan)/.test(subj)) counts.kedutaan++;
        else counts.kedutaan++;
      }
      else if (item.category === 'global') {
        if (/(dana|hibah|anggaran|pajak|ekonomi|utang|hutang|keuangan)/.test(subj)) counts.keuangan++;
        else if (/(dagang|ekspor|impor|perdagangan)/.test(subj)) counts.perdagangan++;
      }
    });

    return counts;
  }, [news]);

  const renderActiveTab = () => {
    const commonProps = {
        news,
        expandedId,
        setExpandedId,
        searchTerm,
        onClose,
        setActiveMenu
    };

    switch (filter) {
        case 'pembangunan': return <ConstructionList {...commonProps} />;
        case 'keuangan': return <FinanceList {...commonProps} />;
        case 'perdagangan': return <TradeList {...commonProps} />;
        case 'kedutaan': return <EmbassyList {...commonProps} />;
        case 'pakta': return <PactList {...commonProps} />;
        case 'aliansi': return <AllianceList {...commonProps} />;
        default: return <AllList {...commonProps} />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/85 z-[110] flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8 no-scrollbar">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative">
        
        {/* Header Section */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 rounded-xl">
              <Newspaper className="h-6 w-6 text-indigo-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Pusat Informasi Global</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Global Intelligence & World Report</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Dashboard & Filter Section */}
        <div className="px-8 py-6 bg-zinc-900/20 border-b border-zinc-800/50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-6">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg"><Activity size={16} className="text-indigo-400" /></div>
                <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none text-nowrap">Total Berita Dunia</p>
                    <p className="text-xl font-black text-white mt-1">{news.length} <span className="text-[10px] opacity-40 font-normal">LAPORAN</span></p>
                </div>
             </div>
             <div className="h-10 w-[1px] bg-zinc-800 self-center"></div>
             <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg"><Zap size={16} className="text-amber-400" /></div>
                <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none text-nowrap">Status Global</p>
                    <p className="text-xl font-black text-emerald-500 mt-1">STABIL</p>
                </div>
             </div>
          </div>
          
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            <input 
              type="text" 
              placeholder="CARI BERITA DUNIA..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-zinc-950/50 border border-zinc-800 rounded-2xl pl-12 pr-6 py-2.5 text-[11px] font-bold text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-700 w-80 transition-all"
            />
          </div>
        </div>

        {/* Main Content Area with Sidebar Layout */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Sidebar Tabs (Left) */}
          <div className="w-72 border-r border-zinc-800/30 bg-black/20 flex flex-col p-6 gap-3 overflow-y-auto no-scrollbar">
            <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.25em] mb-3 px-3">Kategori Laporan</p>
            {[
              { id: 'all', label: 'semua' },
              { id: 'pembangunan', label: 'pembangunan' },
              { id: 'keuangan', label: 'keuangan' },
              { id: 'perdagangan', label: 'perdagangan' },
              { id: 'kedutaan', label: 'kedutaan' },
              { id: 'pakta', label: 'pakta' },
              { id: 'aliansi', label: 'aliansi' }
            ].map((tab) => {
              const isActive = filter === tab.id;
              const unread = unreadCounts[tab.id];

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveMenu(`Menu:Berita:${tab.id}`)}
                  className={`group relative flex items-center justify-between px-6 py-4 rounded-full transition-all cursor-pointer border ${
                    isActive 
                      ? 'bg-zinc-800 text-white border-zinc-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] translate-x-1' 
                      : 'text-zinc-500 border-transparent hover:bg-zinc-900/40 hover:text-zinc-300'
                  }`}
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.15em] italic relative z-10">{tab.label}</span>
                  
                  {/* Emerald Badge Style */}
                  <div className={`flex items-center justify-center min-w-[32px] px-2 py-1 rounded-full transition-all duration-300 ${
                    isActive 
                    ? 'bg-emerald-500 text-zinc-900 shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                    : unread > 0 ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'opacity-0'
                  }`}>
                      <span className="text-[10px] font-black italic tabular-nums leading-none">
                        {unread}
                      </span>
                  </div>

                  {/* Active Background Glow */}
                  {isActive && (
                    <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-md -z-0"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* List Content (Right) */}
          <div className="flex-1 flex flex-col overflow-hidden bg-zinc-950/40">
            <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
              <div className="max-w-4xl mx-auto">
                {renderActiveTab()}
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-8 py-4 bg-zinc-900/30 border-t border-zinc-800/50 flex items-center justify-center text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] gap-8">
            <span className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Global Stream Active</span>
            <div className="h-3 w-[1px] bg-zinc-800"></div>
            <span>World Report Surveillance System © 2026 v2.7</span>
        </div>

      </div>
    </div>
  );
}
