"use client"

import React from 'react';
import { 
  X, 
  Mail, 
  Building2, 
  Search,
  Trash2
} from 'lucide-react';
import { inboxStorage, InboxItem } from './inboxStorage';
import { embassyStorage } from '../../modals/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage';
import { getInitialAgreements } from '@/app/pilih_negara/data/database_mitra_perdagangan/agreementsRegistry';
import { countries as centersData } from '@/app/pilih_negara/data/negara/benua/index';
import { getGlobalRelationMatrix, getNormalizedUser, normalizeId } from '@/app/game/logic/ai/ai_diplomacy_engine/services/MatrixHandler';
import { relationStorage } from '../../modals/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage';
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
      else if (msg.category === 'trade') {
        counts.trade++;
      }
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
    const { AiTradeService } = require("../../AI_logic/4_AI_Ekonomi/1_perdagangan/sistem_perdagangan_AI/services/AiTradeService");
    const { tradeStorage } = require("../../2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/TradeStorage");
    const { budgetStorage } = require("../../1_navbar/3_kas_negara");

    if (action === 'accept') {
        if (msg.metadata) {
            const { type, id } = msg.metadata;
            console.log(`[INBOX] Processing Acceptance: ${type} - ${id}`);
            
            const { AiDiplomacyService } = require("@/app/game/logic/ai/ai_diplomacy_engine/services/AiDiplomacyService");
            
            let success = false;
            switch (type) {
                case 'product_offer':
                    success = AiTradeService.acceptProductOffer(id);
                    break;
                case 'purchase_request':
                    success = AiTradeService.acceptPurchaseRequest(id);
                    break;
                case 'trade_contract':
                    AiTradeService.acceptContract(id);
                    success = true;
                    break;
                case 'trade_agreement':
                case 'trade': // Fallback for AiDiplomacyService category
                    success = AiTradeService.acceptTradeAgreement(id);
                    break;
                case 'embassy':
                    success = AiTradeService.acceptEmbassyProposal(id);
                    break;
                case 'pact':
                case 'alliance':
                    // Check if embassy exists first
                    const matrix = getGlobalRelationMatrix();
                    const npcKey = normalizeId(id);
                    const userKey = getNormalizedUser();
                    const hasEmbassy = matrix[npcKey]?.[userKey]?.e === 1 || matrix[userKey]?.[npcKey]?.e === 1;

                    if (!hasEmbassy) {
                        alert(`DIBUTUHKAN KEDUTAAN! Anda harus membangun kedutaan besar terlebih dahulu dengan ${id} sebelum dapat menandatangani ${type === 'pact' ? 'Pakta Non-Agresi' : 'Aliansi Pertahanan'}.`);
                        return; // Stop processing
                    }
                    
                    const durationYears = msg.metadata?.durationYears || 5;
                    AiDiplomacyService.finalizeTreaty(id, type, durationYears);
                    success = true;
                    break;
                default:
                    console.warn(`[INBOX] Unknown action type: ${type}`);
            }
            
            if (success || type === 'trade_contract') {
                inboxStorage.updateMessageStatus(msg.id, 'accepted');
                setMessages(inboxStorage.getMessages());
            } else {
                alert("Gagal memproses transaksi. Pastikan saldo atau stok mencukupi.");
            }
        } else if (msg.category === 'trade') {
            // HEURISTIC PARSING for legacy/server messages
            const content = msg.content || "";
            const subj = msg.subject.toLowerCase();
            
            // Extract Country (e.g., Malaysia, China)
            const countryMatch = msg.subject.match(/DARI\s+([A-Z\s]+)/i) || msg.subject.match(/KE\s+([A-Z\s]+)/i);
            const country = countryMatch ? countryMatch[1].trim() : "Mitra";
            
            // Extract Commodity
            const commodityMatch = msg.subject.match(/:\s+([A-Z\s]+)\s+DARI/i) || content.match(/produk\s+([A-Z\s]+)\s+kita/i);
            const commodity = commodityMatch ? commodityMatch[1].trim() : "Komoditas";
            
            // Extract Amount
            const amountMatch = content.match(/berjumlah\s+([\d.]+)/i);
            const amount = amountMatch ? parseInt(amountMatch[1].replace(/\./g, '')) : 0;
            
            // Extract Total Value
            const valueMatch = content.match(/pendapatan:\s+([\d.]+)/i) || content.match(/biaya:\s+([\d.]+)/i);
            const totalValue = valueMatch ? parseInt(valueMatch[1].replace(/\./g, '')) : 0;

            const isExport = subj.includes('ekspor') || content.includes('membeli');
            const type = isExport ? 'sell' : 'buy';
            
            const session = localStorage.getItem('game_session');
            const userCountry = session ? JSON.parse(session).country : "Indonesia";

            const { timeStorage } = require("../../2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage");
            const gameDate = timeStorage.getState().gameDate;

            // Helper to normalize country name
            const normalizeCountry = (name: string) => {
                return name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            };

            const { calculateShippingDays } = require("../../2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/tradeData");
            const duration = calculateShippingDays(normalizeCountry(country));

            // Trigger Map Animation & Delayed Settlement
            tradeStorage.addTransaction({
                source: isExport ? normalizeCountry(userCountry) : normalizeCountry(country),
                dest: isExport ? normalizeCountry(country) : normalizeCountry(userCountry),
                type: type,
                commodity: commodity,
                amount: amount,
                totalValue: totalValue,
                totalDays: duration,
                startDate: gameDate
            });

            inboxStorage.updateMessageStatus(msg.id, 'accepted');
            setMessages(inboxStorage.getMessages());
            alert(`Ratifikasi Berhasil! Pengiriman ${commodity} sedang diproses. Estimasi tiba: ${duration} Hari.`);
        } else {
            // Fallback for simple messages
            inboxStorage.updateMessageStatus(msg.id, 'accepted');
            setMessages(inboxStorage.getMessages());
        }
    } else {
        // Decline Logic
        if (msg.metadata) {
            const { type, id } = msg.metadata;
            switch (type) {
                case 'product_offer':
                case 'purchase_request':
                    AiTradeService.rejectOffer(id);
                    break;
                case 'trade_contract':
                    AiTradeService.rejectContract(id);
                    break;
                case 'trade_agreement':
                    AiTradeService.rejectTradeAgreement(id);
                    break;
            }
        }
        inboxStorage.updateMessageStatus(msg.id, 'rejected');
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

        {/* Dashboard & Filter Section */}
        <div className="px-8 py-6 bg-zinc-900/20 border-b border-zinc-800/50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-6">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg"><Mail size={16} className="text-purple-400" /></div>
                <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none text-nowrap">Total Pesan Masuk</p>
                    <p className="text-xl font-black text-white mt-1">{messages.length} <span className="text-[10px] opacity-40 font-normal">UNIT</span></p>
                </div>
             </div>
             <div className="h-10 w-[1px] bg-zinc-800 self-center"></div>
             <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg"><Search size={16} className="text-emerald-400" /></div>
                <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none text-nowrap">Filter Aktif</p>
                    <p className="text-xl font-black text-emerald-500 mt-1 uppercase italic">{filter}</p>
                </div>
             </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (confirm('APAKAH ANDA YAKIN INGIN MENGHAPUS SELURUH PESAN?')) {
                  inboxStorage.clear();
                  setMessages([]); // Local state update
                }
              }}
              className="flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 hover:bg-rose-600 hover:text-white text-rose-500 px-5 py-2.5 rounded-full transition-all duration-300 group/del"
            >
              <Trash2 className="h-4 w-4 group-hover/del:animate-bounce" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] italic">Hapus Semua</span>
            </button>
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
        </div>

        {/* Main Content Area with Sidebar Layout */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Sidebar Tabs (Left) */}
          <div className="w-72 border-r border-zinc-800/30 bg-black/20 flex flex-col p-6 gap-3 overflow-y-auto no-scrollbar">
            <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.25em] mb-3 px-3">Kategori Pesan</p>
            {[
              { id: 'all', label: 'semua' },
              { id: 'finance', label: 'keuangan' },
              { id: 'trade', label: 'perdagangan' },
              { id: 'embassy', label: 'kedutaan' },
              { id: 'pact', label: 'pakta' },
              { id: 'alliance', label: 'aliansi' }
            ].map((tab) => {
              const isActive = filter === tab.id;
              const unread = unreadCounts[tab.id as keyof typeof unreadCounts];

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveMenu(`Menu:Inbox:${tab.id}`)}
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
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div> Ekspor</span>
                <span className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div> Impor</span>
            </div>
            <div className="h-3 w-[1px] bg-zinc-800"></div>
            <span>National Communication Surveillance System © 2026</span>
        </div>
      </div>
    </div>
  );
}
