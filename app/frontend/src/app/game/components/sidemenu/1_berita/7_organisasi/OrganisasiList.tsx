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
          Keanggotaan PBB
        </button>
        <button 
          onClick={() => props.setActiveMenu('Menu:Berita:organisasi:regional')}
          className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer ${
            currentSubTab === 'regional' 
            ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] translate-y-[-1px]' 
            : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Keanggotaan Regional
        </button>
        <button 
          onClick={() => props.setActiveMenu('Menu:Berita:organisasi:voting')}
          className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer ${
            currentSubTab === 'voting' 
            ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] translate-y-[-1px]' 
            : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Hasil Sidang & Voting
        </button>
      </div>

      <NewsBaseList 
        {...props} 
        categoryFilter={(item) => {
          const subj = item.subject.toLowerCase();
          const content = item.content.toLowerCase();
          const combined = (subj + " " + content).toLowerCase();
          
          // 1. ABSOLUTE EXCLUSION: Buang sampah kategori teknis
          if (['construction', 'finance', 'trade', 'conflict'].includes(item.category)) {
            return false;
          }

          // 2. DETECT ORGANIZATION
          const globalOrgs = /(pbb|imf|bank dunia|world bank|who|unesco|wto|interpol|unicef|fao)/i;
          const regionalOrgs = /(asean|nato|eu|uni eropa|brics|g20|g7|apec|sco|oas|gcc|mercosur|commonwealth|oic|oki|uni afrika|african union)/i;

          const isGlobal = globalOrgs.test(combined);
          const isRegional = regionalOrgs.test(combined);

          // 3. SEPARATION LOGIC
          if (currentSubTab === 'voting') {
             // Tab khusus hasil sidang, voting, dan resolusi
             return /(hasil sidang|voting|resolusi|pemungutan suara|sidang umum|dewan keamanan|kesepakatan sidang)/i.test(combined);
          }

          // Filter Keanggotaan (Hanya muncul jika ada aksi keanggotaan)
          const membershipMove = /(bergabung|keluar|anggota|keanggotaan|membership|masuk|exit|join|leave|diterima|ditolak|permohonan|aplikasi|mengundurkan diri)/i;
          const hasMembershipKeyword = membershipMove.test(combined);

          // Pastikan berita sidang tidak masuk ke tab keanggotaan
          const isVotingNews = /(hasil sidang|voting|resolusi|pemungutan suara)/i.test(combined);

          if (currentSubTab === 'pbb') {
            return isGlobal && hasMembershipKeyword && !isRegional && !isVotingNews;
          } else if (currentSubTab === 'regional') {
            return isRegional && hasMembershipKeyword && !isVotingNews;
          }
          
          return false;
        }} 
      />
    </div>
  );
};
