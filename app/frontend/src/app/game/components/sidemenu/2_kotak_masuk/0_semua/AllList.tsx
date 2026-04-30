import React from 'react';
import { Mail } from 'lucide-react';
import { InboxItem } from '../inboxStorage';
import { InboxCard } from '../shared/InboxCard';

interface AllListProps {
  messages: InboxItem[];
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
  handleAction: (msg: InboxItem, action: 'accept' | 'decline') => void;
  tradePartners: string[];
  searchTerm: string;
}

export const AllList = ({
  messages,
  expandedId,
  setExpandedId,
  handleAction,
  tradePartners,
  searchTerm
}: AllListProps) => {
  const filteredMessages = messages
    .filter((msg: InboxItem) => {
      // For the "All" tab, we just show everything that matches the search term
      // and passes general trade filtering if it is a trade message
      if (msg.category === 'trade') {
        if (msg.proposalLabel === 'SISTEM' || msg.proposalLabel === 'INFO') return true;
        if (!msg.isProposal && !msg.source.includes('(')) return true;
        
        const subj = msg.subject.toLowerCase();
        const isPartnership = subj.includes('kemitraan') || subj.includes('perjanjian') || (msg.proposalLabel && msg.proposalLabel.toLowerCase().includes('kemitraan'));
        if (msg.isProposal && (isPartnership || msg.category === 'trade')) return true;
        if (msg.metadata) return true;

        const countryMatch = msg.source.match(/\(([^)]+)\)/);
        if (!countryMatch) return true;
        const sourceCountry = countryMatch[1].trim().toLowerCase();
        return tradePartners.includes(sourceCountry);
      }
      return true;
    })
    .filter((msg: InboxItem) => 
      msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
      msg.source.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (filteredMessages.length === 0) {
    return (
      <div className="h-64 flex flex-col items-center justify-center text-zinc-600">
        <Mail className="h-12 w-12 mb-4 opacity-20" />
        <p className="text-xs font-black uppercase tracking-[0.3em]">Tidak Ada Pesan Masuk</p>
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
