"use client"

import React from 'react';
import { NewsBaseList } from '../NewsBaseList';
import { NewsItem } from '../newsStorage';

interface TabProps {
  news: NewsItem[];
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
  searchTerm: string;
  onClose: () => void;
  setActiveMenu: (menu: string) => void;
  subFilter?: string | null;
}

export const OrganisasiList = (props: TabProps) => {
  // Use subFilter from props, default to 'pbb' if not present
  const currentSubTab = props.subFilter || 'pbb';

  // Calculate counts for each sub-tab
  const counts = props.news.reduce((acc, item) => {
    if (item.category !== 'organizations') return acc;
    const source = item.source.toLowerCase();
    
    if (source.includes("global diplomacy")) acc.pbb++;
    else if (source.includes("regional watch")) acc.regional++;
    else if (source.includes("perserikatan bangsa") || source.includes("bangsa-bangsa")) acc.voting++;
    
    return acc;
  }, { pbb: 0, regional: 0, voting: 0 });

  return (
    <div className="space-y-6">
      {/* Sub-Tabs Navigation */}
      <div className="flex gap-4 mb-8 bg-zinc-900/40 p-1.5 rounded-full border border-zinc-800/50 w-fit mx-auto shadow-2xl">
        <button 
          onClick={() => props.setActiveMenu('Menu:Berita:organisasi:pbb')}
          className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center gap-2 ${
            currentSubTab === 'pbb' 
            ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] translate-y-[-1px]' 
            : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Keanggotaan PBB <span className={`px-2 py-0.5 rounded-full text-[9px] ${currentSubTab === 'pbb' ? 'bg-white/20' : 'bg-zinc-800'}`}>({counts.pbb})</span>
        </button>
        <button 
          onClick={() => props.setActiveMenu('Menu:Berita:organisasi:regional')}
          className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center gap-2 ${
            currentSubTab === 'regional' 
            ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] translate-y-[-1px]' 
            : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Keanggotaan Regional <span className={`px-2 py-0.5 rounded-full text-[9px] ${currentSubTab === 'regional' ? 'bg-white/20' : 'bg-zinc-800'}`}>({counts.regional})</span>
        </button>
        <button 
          onClick={() => props.setActiveMenu('Menu:Berita:organisasi:voting')}
          className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center gap-2 ${
            currentSubTab === 'voting' 
            ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] translate-y-[-1px]' 
            : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Hasil Sidang & Voting <span className={`px-2 py-0.5 rounded-full text-[9px] ${currentSubTab === 'voting' ? 'bg-white/20' : 'bg-zinc-800'}`}>({counts.voting})</span>
        </button>
      </div>

      <NewsBaseList 
        {...props} 
        categoryFilter={(item) => {
          const source = item.source.toLowerCase();
          
          // Only organization category
          if (item.category !== 'organizations') return false;

          // ═══ SOURCE-BASED ROUTING (matches Go backend exactly) ═══
          // Backend uses:
          //   "Global Diplomacy News"         → PBB membership
          //   "Regional Watch Intelligence"   → Regional membership  
          //   "Perserikatan Bangsa-Bangsa"     → Voting/Sidang

          if (currentSubTab === 'pbb') {
            return source.includes("global diplomacy");
          }
          
          if (currentSubTab === 'regional') {
            return source.includes("regional watch");
          }
          
          if (currentSubTab === 'voting') {
            return source.includes("perserikatan bangsa") || source.includes("bangsa-bangsa");
          }
          
          return false;
        }} 
      />
    </div>
  );
};
