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

  return (
    <div className="space-y-6">
      {/* Sub-Tabs Navigation */}
      <div className="flex gap-4 mb-8 bg-zinc-900/40 p-1.5 rounded-full border border-zinc-800/50 w-fit mx-auto shadow-2xl">
        <button 
          onClick={() => props.setActiveMenu('Menu:Berita:organisasi:pbb')}
          className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer ${
            currentSubTab === 'pbb' 
            ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] translate-y-[-1px]' 
            : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          PBB & Global
        </button>
        <button 
          onClick={() => props.setActiveMenu('Menu:Berita:organisasi:regional')}
          className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer ${
            currentSubTab === 'regional' 
            ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] translate-y-[-1px]' 
            : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Organisasi Regional
        </button>
      </div>

      <NewsBaseList 
        {...props} 
        categoryFilter={(item) => {
          const subj = item.subject.toLowerCase();
          const content = item.content.toLowerCase();
          
          if (currentSubTab === 'pbb') {
            // Include general organizations but exclude specific regional keywords
            return (item.category === 'organizations' || /(pbb|imf|bank dunia|interpol|who|unesco|wto|ilo|fao|icao|imo|itu|wmo)/.test(subj)) &&
                   !/(asean|nato|uni eropa|brics|g20|apec|sco|oas|gcc|mercosur|commonwealth|g7|quad|oecd)/.test(subj);
          } else {
            // Focus purely on regional organizations
            return /(asean|nato|eu|uni eropa|brics|g20|apec|sco|oas|gcc|mercosur|commonwealth|g7|quad|oecd)/.test(subj) ||
                   (/(bergabung dengan|keluar dari)/.test(content) && !/(pbb|imf|bank dunia)/.test(subj));
          }
        }} 
      />
    </div>
  );
};
