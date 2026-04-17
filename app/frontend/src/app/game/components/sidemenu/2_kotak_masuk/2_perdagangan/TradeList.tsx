import React from 'react';
import { Mail } from 'lucide-react';
import { InboxItem } from '../inboxStorage';
import { InboxCard } from '../shared/InboxCard';

interface TradeListProps {
  messages: InboxItem[];
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
  handleAction: (msg: InboxItem, action: 'accept' | 'decline') => void;
  tradePartners: string[];
  searchTerm: string;
}

export const TradeList: React.FC<TradeListProps> = ({
  messages,
  expandedId,
  setExpandedId,
  handleAction,
  tradePartners,
  searchTerm
}) => {
  const filteredMessages = messages
    .filter(msg => msg.category === 'trade')
    .filter(msg => {
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
    .filter(msg => 
      msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
      msg.source.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
      {filteredMessages.map((msg) => (
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
