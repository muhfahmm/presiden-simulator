import React from 'react';
import { ChevronRight, CheckCircle2, Trash2 } from 'lucide-react';
import { inboxStorage, InboxItem } from '../inboxStorage';
import { getCategoryTheme } from './CategoryTheme';
import { ImpactBars } from './ImpactBars';

interface InboxCardProps {
  msg: InboxItem;
  isExpanded: boolean;
  onToggle: (id: string | null) => void;
  handleAction: (msg: InboxItem, action: 'accept' | 'decline') => void;
  tradePartners: string[];
}

export const InboxCard: React.FC<InboxCardProps> = ({ 
  msg, 
  isExpanded, 
  onToggle, 
  handleAction,
  tradePartners 
}) => {
  // Only treat as "Premium Offer" if it's a trade proposal from an EXISTING active partner
  const countryMatch = msg.source.match(/\(([^)]+)\)/);
  const sourceCountry = countryMatch ? countryMatch[1].trim().toLowerCase() : "";
  
  const isPartnerOffer = msg.isProposal && msg.category === 'trade' && tradePartners.includes(sourceCountry);
  const isTransactionOffer = msg.isProposal && msg.category === 'trade' && msg.metadata;
  const isExport = msg.metadata?.type === 'purchase_request' || msg.subject.toLowerCase().includes('ekspor');
  const isImport = msg.metadata?.type === 'product_offer' || msg.subject.toLowerCase().includes('impor');
  const isContract = msg.metadata?.type === 'contract' || msg.metadata?.type === 'trade_contract' || msg.subject.toLowerCase().includes('kontrak');
  
  const theme = getCategoryTheme(
    msg.category, 
    msg.proposalLabel === 'SISTEM' || msg.proposalLabel === 'INFO', 
    (isTransactionOffer ? msg.metadata : isPartnerOffer) as any,
    msg.subject
  );

  const looksLikeProposal = msg.isProposal || (msg.category === 'trade' && (msg.subject.toLowerCase().includes('tawaran') || msg.subject.toLowerCase().includes('permintaan') || msg.subject.toLowerCase().includes('proposal')));

  return (
    <div 
      className={`group relative border rounded-[32px] overflow-hidden transition-all duration-300 ${
        isExpanded 
          ? `ring-1 ${isExport ? 'ring-emerald-500/50 bg-emerald-950/20' : isImport ? 'ring-rose-500/50 bg-rose-950/20' : isContract ? 'ring-indigo-500/50 bg-indigo-950/20' : isTransactionOffer ? 'ring-indigo-500/50 bg-indigo-950/20' : isPartnerOffer ? 'ring-amber-500/50 bg-amber-950/20' : 'ring-zinc-700 bg-zinc-900/50'}` 
          : `bg-zinc-900/30 ${isExport ? 'border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-900/20' : isImport ? 'border-rose-500/30 hover:border-rose-400 hover:bg-rose-900/20' : isContract ? 'border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-900/20' : isTransactionOffer ? 'border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-900/20' : isPartnerOffer ? 'border-amber-500/30 hover:border-amber-400 hover:bg-amber-900/20' : 'border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/40'}`
      }`}
    >
      <div 
        className="p-6 cursor-pointer flex items-center justify-between"
        onClick={() => onToggle(isExpanded ? null : msg.id)}
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
                  if (cat === 'trade') {
                    if (isContract) return 'KONTRAK DAGANG';
                    return isPartnerOffer ? 'TAWARAN MITRA' : 'perdagangan';
                  }
                  return cat;
                })()}
              </span>
              <span className="text-[10px] text-zinc-500 font-medium">{msg.time}</span>
              {!msg.read && <div className="h-1.5 w-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>}
              {(msg.isProposal || looksLikeProposal) && (
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-md border animate-pulse transition-colors duration-500 ${
                  msg.status === 'accepted' ? 'bg-emerald-500 text-black border-emerald-300 animate-none' :
                  msg.status === 'rejected' ? 'bg-rose-500 text-black border-rose-300 animate-none' :
                  isExport ? 'bg-emerald-500 text-black border-emerald-300' : 
                  isImport ? 'bg-rose-500 text-black border-rose-300' : 
                  isContract ? 'bg-indigo-500 text-black border-indigo-300' :
                  isTransactionOffer ? 'bg-indigo-500 text-black border-indigo-300' : 
                  isPartnerOffer ? 'bg-amber-500 text-black border-amber-300' : 
                  'bg-amber-500/10 text-amber-500 border-amber-500/20'
                }`}>
                  {(() => {
                    if (msg.status === 'accepted' || msg.status === 'rejected') {
                      const cat = (() => {
                        const c = msg.category || 'general';
                        const subj = (msg.subject || '').toLowerCase();
                        if (c === 'defense' || c === 'pact') return subj.includes('aliansi') ? 'aliansi' : 'pakta';
                        if (c === 'diplomacy' || c === 'embassy') return 'kedutaan';
                        if (c === 'finance') return 'keuangan';
                        if (c === 'trade') return 'perdagangan';
                        return c;
                      })();
                      return `PROPOSAL ${cat.toUpperCase()} DI ${msg.status === 'accepted' ? 'TERIMA' : 'TOLAK'}`;
                    }
                    return msg.proposalLabel || 'PROPOSAL';
                  })()}
                </span>
              )}
            </div>
            <h4 className={`text-xl font-black mt-1.5 transition-colors uppercase italic tracking-tighter leading-tight ${
              isExport ? 'text-emerald-400 group-hover:text-emerald-200' : 
              isImport ? 'text-rose-400 group-hover:text-rose-200' : 
              isContract ? 'text-indigo-400 group-hover:text-indigo-200' :
              isTransactionOffer ? 'text-indigo-400 group-hover:text-indigo-200' : 
              isPartnerOffer ? 'text-amber-400 group-hover:text-amber-200' : 
              'text-white group-hover:text-blue-400'
            }`}>
              {msg.subject}
            </h4>
            <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5">{msg.source}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              if (confirm('HAPUS PESAN INI?')) {
                inboxStorage.deleteMessage(msg.id);
              }
            }}
            className="p-2 rounded-full hover:bg-rose-500/20 text-zinc-700 hover:text-rose-500 transition-all opacity-0 group-hover:opacity-100"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <ChevronRight className={`h-5 w-5 text-zinc-700 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
        </div>
      </div>

      {isExpanded && (
        <div className="px-8 pb-8 pt-2 animate-in slide-in-from-top-4 duration-500">
          <div className="bg-zinc-950/50 rounded-[24px] p-6 border border-zinc-800/50">
            <p className="text-zinc-300 text-sm leading-relaxed font-medium whitespace-pre-line">
              {msg.content}
            </p>
            <ImpactBars source={msg.source} subject={msg.subject} content={msg.content} />
            {looksLikeProposal && (
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-zinc-900">
                {msg.status ? (
                  <div className={`flex-1 py-5 rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 border italic ${
                    msg.status === 'accepted' 
                      ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30 shadow-[inset_0_0_20px_rgba(16,185,129,0.05)]' 
                      : 'bg-rose-500/10 text-rose-500 border-rose-500/30 shadow-[inset_0_0_20px_rgba(244,63,94,0.05)]'
                  }`}>
                    <div className={`h-2 w-2 rounded-full animate-pulse ${msg.status === 'accepted' ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                    {msg.status === 'accepted' ? 'Proposal Diterima & Diratifikasi' : 'Proposal Telah Ditolak'}
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
