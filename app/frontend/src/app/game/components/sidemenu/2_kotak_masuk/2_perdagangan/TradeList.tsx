import React, { useMemo } from 'react';
import { Mail } from 'lucide-react';
import { InboxItem } from '../inboxStorage';
import { InboxCard } from '../shared/InboxCard';
import { getGlobalRelationMatrix, getNormalizedUser, normalizeId } from '@/app/game/logic/ai/ai_diplomacy_engine/services/MatrixHandler';
import { getInitialAgreements } from '@/app/pilih_negara/data/database_mitra_perdagangan/agreementsRegistry';
import { countries as centersData } from '@/app/pilih_negara/data/negara/index';

interface TradeListProps {
  messages: InboxItem[];
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
  handleAction: (msg: InboxItem, action: 'accept' | 'decline') => void;
  tradePartners: string[];
  searchTerm: string;
}

export const TradeList = ({
  messages,
  expandedId,
  setExpandedId,
  handleAction,
  tradePartners,
  searchTerm
}: TradeListProps) => {
  const filteredMessages = useMemo(() => {
    // 1. Get current matrix and user info for strict filtering
    const matrix = getGlobalRelationMatrix();
    const userKey = getNormalizedUser();

    // 2. Fetch official database partners as a whitelist fallback
    const sessionRaw = localStorage.getItem("game_session");
    let userCountryRaw = "Indonesia";
    try {
        if(sessionRaw) userCountryRaw = JSON.parse(sessionRaw).country || userCountryRaw;
    } catch(e) {}
    
    const userCountryData = centersData.find((c: any) => 
        c.name_id === userCountryRaw || c.name_en === userCountryRaw
    ) || centersData[0];

    const defaultAgreements = getInitialAgreements(userCountryData.name_en, userCountryData.name_id || userCountryData.name_en);
    const officialPartnersSet = new Set(
        defaultAgreements
            .filter(a => a.type === 'Perdagangan' && a.status === 'Aktif')
            .map(a => normalizeId(a.mitra))
    );

    return messages
    .filter((msg: InboxItem) => msg.category === 'trade')
    .filter((msg: InboxItem) => {
      // 1. Allow default welcome message and system notifications
      if (msg.id === 'init-trade' || msg.time === 'SISTEM') return true;

      // 2. Existing type filters for trade proposals
      const subj = msg.subject.toLowerCase();
      const label = msg.proposalLabel || '';
      
      const isExport = label === 'Proposal Permintaan Beli' || subj.includes('ekspor') || subj.includes('jual');
      const isImport = label === 'Proposal Tawaran Produk' || subj.includes('impor') || subj.includes('beli');
      const isPartnership = label.includes('Kemitraan') || subj.includes('kemitraan') || subj.includes('perjanjian dagang');
      const isActivation = subj.includes('aktivasi');
      const isContract = subj.includes('kontrak');
      
      return isExport || isImport || isActivation || isPartnership || isContract;
    })
    .filter((msg: InboxItem) => 
      msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
      msg.source.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [messages, searchTerm]);

  if (filteredMessages.length === 0) {
    return (
      <div className="h-64 flex flex-col items-center justify-center text-zinc-600">
        <Mail className="h-12 w-12 mb-4 opacity-20" />
        <p className="text-xs font-black uppercase tracking-[0.3em]">Tidak Ada Pesan Perdagangan</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {filteredMessages.map((msg: InboxItem) => (
        <InboxCard 
          key={msg.id}
          msg={msg}
          isExpanded={expandedId === msg.id}
          onToggle={setExpandedId}
          handleAction={handleAction}
          tradePartners={tradePartners}
        />
      ))}
    </div>
  );
};

