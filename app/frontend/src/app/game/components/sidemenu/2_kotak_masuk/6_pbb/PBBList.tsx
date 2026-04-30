import React from 'react';
import { Mail } from 'lucide-react';
import { InboxItem } from '../inboxStorage';
import { InboxCard } from '../shared/InboxCard';

interface PBBListProps {
  messages: InboxItem[];
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
  handleAction: (msg: InboxItem, action: 'accept' | 'decline') => void;
  tradePartners: string[];
  searchTerm: string;
}

export const PBBList = ({
  messages,
  expandedId,
  setExpandedId,
  handleAction,
  tradePartners,
  searchTerm
}: PBBListProps) => {
  const filteredMessages = messages
    .filter((msg: InboxItem) => msg.category === 'pbb' || msg.subject.toLowerCase().includes('usulan sidang:'))
    .filter((msg: InboxItem) => 
      msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
      msg.source.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (filteredMessages.length === 0) {
    return (
      <div className="h-64 flex flex-col items-center justify-center text-zinc-600">
        <Mail className="h-12 w-12 mb-4 opacity-20" />
        <p className="text-xs font-black uppercase tracking-[0.3em]">Tidak Ada Pesan PBB</p>
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
