"use client"

import React from 'react';
import { 
  X, 
  Mail, 
  Building2, 
  Search
} from 'lucide-react';
import { inboxStorage, InboxItem } from './inboxStorage';
import { embassyStorage } from '../../map-system/modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage';
import { getInitialAgreements } from '@/app/database/data/database_mitra_perdagangan/agreementsRegistry';
import { countries as centersData } from '@/app/database/data/negara/benua/index';
import { getGlobalRelationMatrix } from '../../map-system/ai_diplomacy_engine/services/MatrixHandler';
import { relationStorage } from '../../map-system/modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage';
import { unSecurityCouncilStorage } from '../../2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage';

// Modular Tab Components
import { AllList } from './0_semua/AllList';
import { FinanceList } from './1_keuangan/FinanceList';
import { TradeList } from './2_perdagangan/TradeList';
import { EmbassyList } from './3_kedutaan/EmbassyList';
import { PactList } from './4_pakta/PactList';
import { AllianceList } from './5_aliansi/AllianceList';

interface InboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function InboxModal({ isOpen, onClose, activeMenu, setActiveMenu }: InboxModalProps) {
  const [messages, setMessages] = React.useState<InboxItem[]>([]);
  const [expandedId, setExpandedId] = React.useState<string | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  
  // Derivasi filter dari URL/activeMenu state
  const filter = activeMenu.startsWith("Menu:Inbox:") ? activeMenu.split(":")[2] : "all";

  React.useEffect(() => {
    if (isOpen) {
      setMessages(inboxStorage.getMessages());
    }
    
    const handleUpdate = () => setMessages(inboxStorage.getMessages());
    window.addEventListener('inbox_updated', handleUpdate);
    return () => window.removeEventListener('inbox_updated', handleUpdate);
  }, [isOpen]);

  // Logic to get active trade partners
  const tradePartners = React.useMemo(() => {
    if (!isOpen) return [];
    const userCountryRaw = localStorage.getItem('selected_country') || "Indonesia";
    const userCountryData = centersData.find((c: any) => 
      c.name_id === userCountryRaw || 
      c.name_en === userCountryRaw || 
      (c as any).id === userCountryRaw
    ) || centersData[0];
    
    const agreements = getInitialAgreements(userCountryData.name_en, userCountryData.name_id || userCountryData.name_en);
    return agreements
      .filter((a: any) => a.type === 'Perdagangan' && a.status === 'Aktif')
      .map((a: any) => a.mitra.toLowerCase());
  }, [isOpen]);

  // Hitung jumlah unread per kategori untuk ditampilkan di badge tab
  const unreadCounts = React.useMemo(() => {
    const counts: Record<string, number> = {
      all: 0, finance: 0, trade: 0, embassy: 0, pact: 0, alliance: 0
    };

    messages.forEach(msg => {
      if (msg.read) return;

      counts.all++;

      if (msg.category === 'finance') counts.finance++;
      else if (msg.category === 'trade') counts.trade++;
      else if (msg.category === 'embassy') counts.embassy++;
      else if (msg.category === 'pact') counts.pact++;
      else if (msg.category === 'alliance') counts.alliance++;
      else if (msg.category === 'defense') {
        const subj = msg.subject.toLowerCase();
        if (subj.includes('pakta')) counts.pact++;
        else if (subj.includes('aliansi')) counts.alliance++;
      }
      else if (msg.category === 'diplomacy') counts.embassy++;
    });

    return counts;
  }, [messages]);

  if (!isOpen) return null;

  const handleAction = (msg: InboxItem, action: 'accept' | 'decline') => {
    if (action === 'accept') {
        inboxStorage.markAsRead(msg.id);
        setMessages(inboxStorage.getMessages());
        console.log(`[INBOX] Accepted: ${msg.subject}`);
    } else {
        inboxStorage.markAsRead(msg.id);
        setMessages(inboxStorage.getMessages());
        console.log(`[INBOX] Declined: ${msg.subject}`);
    }
  };

  const renderActiveTab = () => {
    const commonProps = {
        messages,
        expandedId,
        setExpandedId,
        handleAction,
        tradePartners,
        searchTerm
    };

    switch (filter) {
        case 'finance': return <FinanceList {...commonProps} />;
        case 'trade': return <TradeList {...commonProps} />;
        case 'embassy': return <EmbassyList {...commonProps} />;
        case 'pact': return <PactList {...commonProps} />;
        case 'alliance': return <AllianceList {...commonProps} />;
        default: return <AllList {...commonProps} />;
    }
  };

  return (
    <div className="absolute inset-0 bg-black/85 z-[110] flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8 no-scrollbar">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative">
        
        {/* Header Section */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-xl">
              <Building2 className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Pusat Komunikasi & Inisatif</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Communication & Initiative Center</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Filter Section */}
        <div className="px-8 py-6 bg-zinc-900/20 border-b border-zinc-800/50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-zinc-950/50 p-1 rounded-2xl border border-zinc-800">
            {[
              { id: 'all', label: 'semua' },
              { id: 'finance', label: 'keuangan' },
              { id: 'trade', label: 'perdagangan' },
              { id: 'embassy', label: 'kedutaan' },
              { id: 'pact', label: 'pakta' },
              { id: 'alliance', label: 'aliansi' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMenu(`Menu:Inbox:${tab.id}`)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                  filter === tab.id 
                    ? 'bg-zinc-800 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-zinc-700/50' 
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'
                }`}
              >
                <span>{tab.label}</span>
                {unreadCounts[tab.id as keyof typeof unreadCounts] > 0 && (
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-black italic tabular-nums animate-in zoom-in duration-500 ${
                    filter === tab.id 
                      ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]' 
                      : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                  }`}>
                    {unreadCounts[tab.id as keyof typeof unreadCounts]}
                  </span>
                )}
              </button>
            ))}
          </div>
          
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            <input 
              type="text" 
              placeholder="CARI PESAN..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-zinc-950/50 border border-zinc-800 rounded-2xl pl-12 pr-6 py-2.5 text-[11px] font-bold text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-700 w-64 transition-all"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20 text-left">
          {renderActiveTab()}
        </div>

        {/* Footer info */}
        <div className="px-8 py-4 bg-zinc-900/30 border-t border-zinc-800/50 flex items-center justify-between text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div> Ekspor</span>
                <span className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div> Impor</span>
            </div>
            <span>© 2026 National Communication & Initiative Center</span>
        </div>
      </div>
    </div>
  );
}
