"use client"

import React from 'react';
import { 
  X, 
  Mail, 
  Bell, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  Handshake, 
  Info,
  Globe,
  DollarSign,
  Briefcase,
  Shield,
  Filter,
  Search,
  Building2,
  Heart,
  ArrowUpRight,
  ArrowDownLeft
} from 'lucide-react';
import { inboxStorage, InboxItem } from './inboxStorage';
import { getNationalHealthImpact } from '@/app/game/data/layanan_publik/kesehatan/healthLogic';
import { getNationalSecurityImpact } from '@/app/game/data/layanan_publik/keamanan/securityLogic';
import EmbassyRequiredModal from '../../map-system/ai_diplomacy_engine/components/EmbassyRequiredModal';
import { getGlobalRelationMatrix } from '../../map-system/ai_diplomacy_engine/services/MatrixHandler';
import { AiDiplomacyService } from '../../map-system/ai_diplomacy_engine/services/AiDiplomacyService';
import { embassyStorage } from '../../map-system/modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage';
import { nonAggressionStorage } from '../../map-system/modals_detail_negara/2_diplomasi_hubungan/2_pakta_non_agresi/logic/nonAggressionStorage';
import { aliansiStorage } from '../../map-system/modals_detail_negara/2_diplomasi_hubungan/3_aliansi_pertahanan/logic/aliansiStorage';
import { relationStorage } from '../../map-system/modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage';
import { unSecurityCouncilStorage } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage';
import { countries as centersData } from '@/app/database/data/negara/benua/index';
import { getInitialAgreements } from '@/app/database/data/database_mitra_perdagangan/agreementsRegistry';
import { AiTradeService } from '@/app/game/components/AI_logic/4_AI_Ekonomi/1_perdagangan/sistem_perdagangan_AI/services/AiTradeService';

interface InboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function InboxModal({ isOpen, onClose, activeMenu, setActiveMenu }: InboxModalProps) {
  const [messages, setMessages] = React.useState<InboxItem[]>([]);
  const [expandedId, setExpandedId] = React.useState<string | null>(null);
  
  // Derivasi filter dari URL/activeMenu state
  const filter = activeMenu.startsWith("Menu:Inbox:") ? activeMenu.split(":")[2] : "all";
  
  const [searchTerm, setSearchTerm] = React.useState('');
  
  // State untuk Modal Peringatan
  const [showEmbassyWarning, setShowEmbassyWarning] = React.useState(false);
  const [pendingCountry, setPendingCountry] = React.useState("");

  React.useEffect(() => {
    if (isOpen) {
      setMessages(inboxStorage.getMessages());
    }
    
    const handleUpdate = () => setMessages(inboxStorage.getMessages());
    window.addEventListener('inbox_updated', handleUpdate);
    return () => window.removeEventListener('inbox_updated', handleUpdate);
  }, [isOpen]);

  // Logic to get active trade partners for situational styling
  const tradePartners = React.useMemo(() => {
    if (!isOpen) return [];
    const userCountryRaw = localStorage.getItem('selected_country') || "Indonesia";
    const userCountryData = centersData.find(c => 
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
    const countryMatch = msg.source.match(/\(([^)]+)\)/);
    const targetCountryRaw = countryMatch ? countryMatch[1].trim() : "";
    const userCountryRaw = localStorage.getItem('selected_country') || "Indonesia";
    
    if (action === 'accept') {
        const matrix = getGlobalRelationMatrix();
        const countryKey = Object.keys(matrix).find(k => k.toLowerCase() === targetCountryRaw.toLowerCase()) || targetCountryRaw.toLowerCase();
        
        // CEK STATUS KEDUTAAN DARI STORAGE ASLI (UI TRUTH)
        const embassyStatus = embassyStorage.getEmbassyStatus(targetCountryRaw);
        
        // VALIDASI KETAT KEDUBES: Jika tawaran bukan tawaran Kedubes itu sendiri, wajib cek kedubes aktif
        const subj = msg.subject.toLowerCase();
        const isEmbassyOffer = subj.includes('kedutaan') || subj.includes('diplomatik');

        if (!isEmbassyOffer && embassyStatus !== 'completed') {
            setPendingCountry(targetCountryRaw);
            setShowEmbassyWarning(true);
            return;
        }

        // JIKA LOLOS VALIDASI
        // Tentukan tipe treaty berdasarkan subjek/isi
        let type: 'pact' | 'alliance' | 'trade' | 'embassy' = 'trade';
        if (subj.includes('pakta')) type = 'pact';
        else if (subj.includes('aliansi')) type = 'alliance';
        else if (isEmbassyOffer) type = 'embassy';

        // LOGIKA PERDAGANGAN STRATEGIS (AiTradeService)
        if (msg.metadata) {
          const m = msg.metadata;
          let success = false;
          let handled = true;

          if (m.type === 'product_offer') success = AiTradeService.acceptProductOffer(m.id);
          else if (m.type === 'purchase_request') success = AiTradeService.acceptPurchaseRequest(m.id);
          else if (m.type === 'trade_contract') {
             AiTradeService.acceptContract(m.id);
             success = true;
          } else if (m.type === 'trade_agreement') success = AiTradeService.acceptTradeAgreement(m.id);
          else if (m.type === 'embassy') success = AiTradeService.acceptEmbassyProposal(m.country || '');
          else handled = false;

          if (handled) {
            if (success) {
              inboxStorage.markAsRead(msg.id);
              setExpandedId(null);
            } else if (m.type === 'product_offer' || m.type === 'purchase_request') {
              alert("Gagal memproses: Periksa anggaran atau ketersediaan stok Anda.");
            }
            return;
          }
        }

        AiDiplomacyService.finalizeTreaty(targetCountryRaw, type);

        inboxStorage.markAsRead(msg.id);
        setExpandedId(null);
        alert(`Konfirmasi: Kesepakatan ${type.toUpperCase()} dengan ${targetCountryRaw.toUpperCase()} telah DIRATIFIKASI.`);
    } else {
        inboxStorage.deleteMessage(msg.id);
        setMessages(inboxStorage.getMessages());
    }
  };

  const getCategoryTheme = (category: string = 'general', isSystem: boolean = false, isProposal: boolean = false, subject: string = '') => {
    if (isSystem) return {
      bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', indicator: 'bg-blue-500', icon: <Info className="h-4 w-4" />,
      glow: 'shadow-[0_0_20px_rgba(59,130,246,0.1)]'
    };

    if (isProposal && category === 'trade') {
      const metadata = typeof isProposal === 'object' ? (isProposal as any) : null;
      const type = metadata?.type;
      const lowerSubj = subject.toLowerCase();

      // EKSPOR (Tawaran beli dari AI/Server -> User dapet duit) = HIJAU
      if (type === 'purchase_request' || lowerSubj.includes('ekspor')) return {
        bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', indicator: 'bg-emerald-500', icon: <ArrowUpRight className="h-4 w-4" />,
        glow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]'
      };

      // IMPOR (Tawaran produk dari AI/Server -> User keluar duit) = MERAH/ROSE
      if (type === 'product_offer' || lowerSubj.includes('impor')) return {
        bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400', indicator: 'bg-rose-500', icon: <ArrowDownLeft className="h-4 w-4" />,
        glow: 'shadow-[0_0_20px_rgba(244,63,94,0.2)]'
      };
      
      // KONTRAK DAGANG (Indigo)
      if (type === 'trade_contract' || lowerSubj.includes('kontrak dagang')) return {
        bg: 'bg-indigo-500/15', border: 'border-indigo-400/40', text: 'text-indigo-400', indicator: 'bg-indigo-500', icon: <Briefcase className="h-4 w-4" />,
        glow: 'shadow-[0_0_40px_rgba(129,140,248,0.25)]'
      };

      // KEMITRAAN (Default Amber/Emas)
      return {
        bg: 'bg-amber-600/15', border: 'border-amber-400/50', text: 'text-amber-400', indicator: 'bg-amber-500', icon: <Handshake className="h-4 w-4" />,
        glow: 'shadow-[0_0_40px_rgba(245,158,11,0.3)]'
      };
    }

    switch (category) {
      case 'finance': return { 
        bg: 'bg-emerald-500/5', border: 'border-emerald-500/20', text: 'text-emerald-400', indicator: 'bg-emerald-500', icon: <DollarSign className="h-4 w-4" />,
        glow: 'shadow-[0_0_30px_rgba(16,185,129,0.15)]'
      };
      case 'trade': return { 
        bg: 'bg-zinc-900/50', border: 'border-zinc-800', text: 'text-zinc-400', indicator: 'bg-amber-500', icon: <Briefcase className="h-4 w-4" />,
        glow: ''
      };
      case 'pact': return { 
        bg: 'bg-rose-500/5', border: 'border-rose-500/20', text: 'text-rose-400', indicator: 'bg-rose-500', icon: <Shield className="h-4 w-4" />,
        glow: 'shadow-[0_0_30px_rgba(244,63,94,0.15)]'
      };
      case 'alliance': return { 
        bg: 'bg-blue-600/5', border: 'border-blue-500/20', text: 'text-blue-400', indicator: 'bg-blue-600', icon: <Shield className="h-4 w-4" />,
        glow: 'shadow-[0_0_30px_rgba(37,99,235,0.15)]'
      };
      case 'embassy': return { 
        bg: 'bg-purple-500/5', border: 'border-purple-500/20', text: 'text-purple-400', indicator: 'bg-purple-500', icon: <Building2 className="h-4 w-4" />,
        glow: 'shadow-[0_0_30_rgba(168,85,247,0.15)]'
      };
      default: return { 
        bg: 'bg-zinc-900/50', border: 'border-zinc-800', text: 'text-zinc-400', indicator: 'bg-zinc-700', icon: <Mail className="h-4 w-4" />,
        glow: ''
      };
    }
  };

  const filteredMessages = messages
    .filter(msg => {
      if (filter === 'all') return true;
      
      // Sinkronisasi kategori lama (defense) ke tab baru (pact/alliance)
      if (msg.category === 'defense') {
        const subj = msg.subject.toLowerCase();
        if (filter === 'pact' && subj.includes('pakta')) return true;
        if (filter === 'alliance' && subj.includes('aliansi')) return true;
      }
      
      // Sinkronisasi kategori lama (diplomacy) ke tab baru (embassy)
      if (msg.category === 'diplomacy' && filter === 'embassy') return true;

      return msg.category === filter;
    })
    // FILTER TRADE: Hanya tampilkan pesan trade dari mitra dagang aktif atau pesan sistem
    .filter(msg => {
      if (msg.category !== 'trade') return true; // Non-trade messages pass through
      
      // System messages always pass (e.g. "Aktivasi Hub Perdagangan")
      if (msg.proposalLabel === 'SISTEM' || msg.proposalLabel === 'INFO') return true;
      if (!msg.isProposal && !msg.source.includes('(')) return true;
      
      // ALWAYS allow agreement/partnership proposals from non-partners (critical for bootstrapping trade)
      const subj = msg.subject.toLowerCase();
      const isPartnership = subj.includes('kemitraan') || subj.includes('perjanjian') || (msg.proposalLabel && msg.proposalLabel.toLowerCase().includes('kemitraan'));
      
      // Also allow all trade proposals for now to ensure baseline offers are visible
      if (msg.isProposal && (isPartnership || msg.category === 'trade')) return true;

      // Transaction offers with metadata always pass (from AI Python)
      if (msg.metadata) return true;
      
      // Check if the source country is an active trade partner
      const countryMatch = msg.source.match(/\(([^)]+)\)/);
      if (!countryMatch) return true;
      const sourceCountry = countryMatch[1].trim().toLowerCase();
      return tradePartners.includes(sourceCountry);
    })
    .filter(msg => msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) || msg.source.toLowerCase().includes(searchTerm.toLowerCase()));

  const renderNationalLiveStats = (msg: InboxItem) => {
    const src = msg.source.toLowerCase();
    const sub = msg.subject.toLowerCase();
    const con = (msg.content || '').toLowerCase();

    // Check for Health-related keywords
    const isHealth = src.includes('kesehatan') || sub.includes('kesehatan') || con.includes('medis') || con.includes('pandemi');
    // Check for Security-related keywords
    const isSecurity = src.includes('keamanan') || src.includes('pertahanan') || src.includes('hukum') || sub.includes('keamanan') || sub.includes('militer');

    if (isHealth) {
        const impact = getNationalHealthImpact();
        return (
            <div className="mt-6 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/20 animate-in fade-in duration-700">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                        <Heart className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Kontribusi Harapan Hidup Nasional</p>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="h-1.5 flex-1 bg-zinc-800/50 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 animate-pulse" style={{ width: `${impact.coveragePercent}%` }} />
                            </div>
                            <span className="text-[11px] font-black text-emerald-400 italic tabular-nums">+{impact.formattedYears}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (isSecurity) {
        const impact = getNationalSecurityImpact();
        return (
            <div className="mt-6 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/20 animate-in fade-in duration-700">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Shield className="h-4 w-4 text-blue-400" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Tingkat Keamanan Nasional</p>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="h-1.5 flex-1 bg-zinc-800/50 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 animate-pulse" style={{ width: `${impact.coveragePercent}%` }} />
                            </div>
                            <span className="text-[11px] font-black text-blue-400 italic tabular-nums">{impact.formattedLevel}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
  };

  return (
    <div className="absolute inset-0 bg-black/85 z-[110] flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8 no-scrollbar">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative">
        
        {/* Header Section - 100% Same Style as Kelistrikan */}
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

        {/* Dashboard/Filter Section */}
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
          <div className="w-full space-y-4">
            {filteredMessages.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-zinc-600">
                <Mail className="h-12 w-12 mb-4 opacity-20" />
                <p className="text-xs font-black uppercase tracking-[0.3em]">Tidak Ada Pesan Masuk</p>
              </div>
            ) : (
              filteredMessages.map((msg) => {
                const isExpanded = expandedId === msg.id;
                
                // Only treat as "Premium Offer" if it's a trade proposal from an EXISTING active partner
                const countryMatch = msg.source.match(/\(([^)]+)\)/);
                const sourceCountry = countryMatch ? countryMatch[1].trim().toLowerCase() : "";
                
                // isOffer can now be a boolean (for partner gold) or the metadata object (for indigo transactions)
                const isPartnerOffer = msg.isProposal && msg.category === 'trade' && tradePartners.includes(sourceCountry);
                const isTransactionOffer = msg.isProposal && msg.category === 'trade' && msg.metadata;
                const isExport = msg.metadata?.type === 'purchase_request' || msg.subject.toLowerCase().includes('ekspor');
                const isImport = msg.metadata?.type === 'product_offer' || msg.subject.toLowerCase().includes('impor');
                
                const theme = getCategoryTheme(
                  msg.category, 
                  msg.proposalLabel === 'SISTEM' || msg.proposalLabel === 'INFO', 
                  (isTransactionOffer ? msg.metadata : isPartnerOffer) as any,
                  msg.subject
                );
                
                return (
                  <div 
                    key={msg.id}
                    className={`group relative border rounded-[32px] overflow-hidden transition-all duration-300 ${
                      isExpanded 
                        ? `ring-1 ${isExport ? 'ring-emerald-500/50 bg-emerald-950/20' : isImport ? 'ring-rose-500/50 bg-rose-950/20' : isTransactionOffer ? 'ring-indigo-500/50 bg-indigo-950/20' : isPartnerOffer ? 'ring-amber-500/50 bg-amber-950/20' : 'ring-zinc-700 bg-zinc-900/50'}` 
                        : `bg-zinc-900/30 ${isExport ? 'border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-900/20' : isImport ? 'border-rose-500/30 hover:border-rose-400 hover:bg-rose-900/20' : isTransactionOffer ? 'border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-900/20' : isPartnerOffer ? 'border-amber-500/30 hover:border-amber-400 hover:bg-amber-900/20' : 'border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/40'}`
                    }`}
                  >
                    {/* Message Header */}
                    <div 
                      className="p-6 cursor-pointer flex items-center justify-between"
                      onClick={() => setExpandedId(isExpanded ? null : msg.id)}
                    >
                      <div className="flex items-center gap-6">
                        <div className={`p-4 rounded-2xl bg-zinc-950 border ${theme.border} ${theme.text} ${theme.glow}`}>
                          {theme.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-md ${theme.bg} ${theme.text} border ${theme.border}`}>
                              {(() => {
                                if (msg.proposalLabel === 'SISTEM' || msg.proposalLabel === 'INFO') return 'Informasi';
                                const cat = msg.category || 'general';
                                const subj = msg.subject.toLowerCase();
                                if (cat === 'defense' || cat === 'pact') return subj.includes('aliansi') ? 'aliansi' : 'pakta';
                                if (cat === 'diplomacy' || cat === 'embassy') return 'kedutaan';
                                if (cat === 'finance') return 'keuangan';
                                if (cat === 'trade') return isPartnerOffer ? 'TAWARAN MITRA' : 'perdagangan';
                                return cat;
                              })()}
                            </span>
                            <span className="text-[10px] text-zinc-500 font-medium">{msg.time}</span>
                            {!msg.read && <div className="h-1.5 w-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>}
                            {msg.isProposal && (
                              <span className={`text-[9px] font-black px-2 py-0.5 rounded-md border animate-pulse ${
                                isExport ? 'bg-emerald-500 text-black border-emerald-300' : 
                                isImport ? 'bg-rose-500 text-black border-rose-300' : 
                                isTransactionOffer ? 'bg-indigo-500 text-black border-indigo-300' : 
                                isPartnerOffer ? 'bg-amber-500 text-black border-amber-300' : 
                                'bg-amber-500/10 text-amber-500 border-amber-500/20'
                              }`}>
                                {msg.proposalLabel || 'PROPOSAL'}
                              </span>
                            )}
                          </div>
                          <h4 className={`text-xl font-black mt-1.5 transition-colors uppercase italic tracking-tighter leading-tight ${
                            isExport ? 'text-emerald-400 group-hover:text-emerald-200' : 
                            isImport ? 'text-rose-400 group-hover:text-rose-200' : 
                            isTransactionOffer ? 'text-indigo-400 group-hover:text-indigo-200' : 
                            isPartnerOffer ? 'text-amber-400 group-hover:text-amber-200' : 
                            'text-white group-hover:text-blue-400'
                          }`}>
                            {msg.subject}
                          </h4>
                          <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5">{msg.source}</p>
                        </div>
                      </div>
                      <ChevronRight className={`h-5 w-5 text-zinc-700 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-8 pb-8 pt-2 animate-in slide-in-from-top-4 duration-500">
                        <div className="bg-zinc-950/50 rounded-[24px] p-6 border border-zinc-800/50">
                          <p className="text-zinc-300 text-sm leading-relaxed font-medium whitespace-pre-line">
                            {msg.content}
                          </p>

                          {/* National Stats Bar Correlation */}
                          {renderNationalLiveStats(msg)}

                          {/* Action Section for Proposals */}
                          {msg.isProposal && (
                            <div className="mt-8 flex items-center gap-4 pt-6 border-t border-zinc-900">
                              <button 
                                onClick={() => handleAction(msg, 'accept')}
                                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-[0.98]"
                              >
                                <CheckCircle2 className="h-5 w-5" />
                                Terima & Ratifikasi
                              </button>
                              <button 
                                onClick={() => handleAction(msg, 'decline')}
                                className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 py-4 px-8 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all cursor-pointer active:scale-[0.98]"
                              >
                                Tolak Proposal
                              </button>
                            </div>
                          )}

                          {/* Relationship Hint - ONLY show for international/diplomatic categories */}
                          {(() => {
                                const countryMatch = msg.source.match(/\(([^)]+)\)/);
                                const targetCountryRaw = countryMatch ? countryMatch[1].trim() : "";
                                const userCountryRaw = localStorage.getItem('selected_country') || "Indonesia";
                                
                                // Only show for international categories or proposals
                                const internationalCategories = ['trade', 'pact', 'alliance', 'embassy', 'intelligence'];
                                if (!internationalCategories.includes(msg.category || '') && !msg.isProposal) return null;
                                if (!targetCountryRaw) return null;

                                // TRUTH SYNC: Use relationStorage to match Info Strategis
                                const targetId = relationStorage.normalizeTargetId(targetCountryRaw, centersData);
                                const userCountryID = localStorage.getItem('selected_country')?.toLowerCase() || "indonesia";
                                
                                // Get base and raw score from storage
                                const rawScore = relationStorage.getRelationScore(targetId, 50, userCountryID);
                                
                                // Check UNSC membership for final score boost
                                const isUNSCMember = unSecurityCouncilStorage.getData()?.members?.some(m => m.name === userCountryRaw);
                                const finalScore = relationStorage.calculateFinalScore(rawScore, !!isUNSCMember);
                                
                                // Get visual metadata (labels and colors)
                                const metadata = relationStorage.getRelationMetadata(finalScore);
                                
                                return (
                                    <div className={`mt-6 flex items-center justify-between gap-4 p-4 ${metadata.bg} rounded-2xl border ${metadata.border}`}>
                                        <div className="flex items-center gap-3 w-full">
                                            <div className={`p-2 bg-zinc-950/50 rounded-lg border border-zinc-800/50`}>
                                                <Globe className={`h-4 w-4 ${metadata.color}`} />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Informasi Hubungan Bilateral</p>
                                                <div className="flex items-center gap-2 mt-0.5">
                                                    <div className="h-1.5 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                                                        <div className={`h-full animate-pulse`} style={{ width: `${finalScore}%`, backgroundColor: metadata.hex }} />
                                                    </div>
                                                    <span className={`text-[11px] font-black ${metadata.color}`}>{finalScore.toFixed(2)} Pts</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter">Status Saat Ini</p>
                                                <p className={`text-[11px] font-black ${metadata.color} uppercase italic`}>
                                                    {metadata.labelFull}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-8 py-4 bg-zinc-900/30 border-t border-zinc-800/50 flex items-center justify-between text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div> Ekspor</span>
                <span className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div> Impor</span>
            </div>
            <span>© 2026 National Initiative Center v1.0</span>
        </div>

      </div>

      {/* Embassy Modal Protection */}
      {showEmbassyWarning && (
        <EmbassyRequiredModal 
          isOpen={showEmbassyWarning} 
          onClose={() => setShowEmbassyWarning(false)} 
          countryName={pendingCountry}
          onProposedEmbassy={(country) => {
            AiDiplomacyService.proposeEmbassy(country);
          }}
        />
      )}
    </div>
  );
}
