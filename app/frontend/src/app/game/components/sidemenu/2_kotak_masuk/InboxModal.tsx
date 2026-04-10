import React from 'react';
import { X, Mail, ShieldAlert, MessageSquare, Handshake, Globe, TrendingUp } from 'lucide-react';

import { inboxStorage, InboxItem } from './inboxStorage';

interface InboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InboxModal({ isOpen, onClose }: InboxModalProps) {
  const [messages, setMessages] = React.useState<InboxItem[]>([]);
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      setMessages(inboxStorage.getMessages());
    }
  }, [isOpen]);

  React.useEffect(() => {
    const handleUpdate = () => setMessages(inboxStorage.getMessages());
    window.addEventListener('inbox_updated', handleUpdate);
    return () => window.removeEventListener('inbox_updated', handleUpdate);
  }, []);

  const getCategoryStyles = (category?: string, isProposal?: boolean) => {
    const intensity = isProposal ? '0.15' : '0.05';
    switch (category) {
      case 'finance': return { 
        bg: 'bg-emerald-500/5', 
        border: 'border-emerald-500/20', 
        text: 'text-emerald-400', 
        glow: `shadow-[0_0_30px_rgba(16,185,129,${intensity})]`,
        indicator: 'bg-emerald-500',
        badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
      };
      case 'trade': return { 
        bg: 'bg-blue-500/5', 
        border: 'border-blue-500/20', 
        text: 'text-blue-400', 
        glow: `shadow-[0_0_30px_rgba(59,130,246,${intensity})]`,
        indicator: 'bg-blue-500',
        badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
      };
      case 'defense': return { 
        bg: 'bg-red-500/5', 
        border: 'border-red-500/20', 
        text: 'text-red-400', 
        glow: `shadow-[0_0_30px_rgba(239,68,68,${intensity})]`,
        indicator: 'bg-red-500',
        badge: 'bg-red-500/10 text-red-400 border-red-500/30'
      };
      case 'intelligence': return { 
        bg: 'bg-amber-500/5', 
        border: 'border-amber-500/20', 
        text: 'text-amber-400', 
        glow: `shadow-[0_0_30px_rgba(245,158,11,${intensity})]`,
        indicator: 'bg-amber-500',
        badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
      };
      default: return { 
        bg: 'bg-zinc-900/50', 
        border: 'border-zinc-800', 
        text: 'text-zinc-400', 
        glow: '',
        indicator: 'bg-zinc-700',
        badge: 'bg-zinc-800 text-zinc-500 border-zinc-700'
      };
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[110] flex items-center justify-center backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-zinc-950 border border-zinc-800 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-8 border-b border-zinc-900 bg-zinc-900/30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Mail className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white uppercase italic tracking-widest leading-none">Kotak Masuk</h2>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Sistem Komunikasi Kepresidenan</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-xl hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 text-center text-zinc-500">
              <Mail className="h-12 w-12 mb-4 opacity-20" />
              <p className="font-medium">Tidak ada pesan di Kotak Masuk</p>
            </div>
          ) : (
            messages.map((msg) => {
              const styles = getCategoryStyles(msg.category, msg.isProposal);
              return (
                <div 
                  key={msg.id}
                  onClick={() => {
                    if (!msg.read) inboxStorage.markAsRead(msg.id);
                    setExpandedId(expandedId === msg.id ? null : msg.id);
                  }}
                  className={`group p-5 rounded-3xl border transition-all cursor-pointer relative overflow-hidden ${
                    msg.read ? 'bg-zinc-900/30 border-zinc-900/50' : `${styles.bg} ${styles.border} ${styles.glow}`
                  } hover:border-zinc-700 ${expandedId === msg.id ? 'ring-2 ring-zinc-800' : ''}`}
                >
                  {!msg.read && (
                    <div className={`absolute top-0 left-0 w-1.5 h-full ${styles.indicator}`}></div>
                  )}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-4 w-full">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl shadow-inner ${msg.read ? 'bg-zinc-800/50 text-zinc-600' : `${styles.bg} ${styles.text}`}`}>
                        {msg.isProposal ? (
                          <Handshake className="h-5 w-5" />
                        ) : (
                          <Globe className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] font-black uppercase tracking-widest ${msg.read ? 'text-zinc-600' : styles.text}`}>{msg.source}</span>
                          {msg.isProposal && !msg.read && (
                            <span className={`text-[8px] px-2 py-0.5 rounded-full border font-black uppercase tracking-tighter ${styles.badge} animate-pulse`}>Proposal</span>
                          )}
                          <span className="text-[9px] font-bold text-zinc-700 uppercase">{msg.time}</span>
                        </div>
                        <h3 className={`text-sm tracking-tight ${msg.read ? 'text-zinc-500 font-medium' : 'text-zinc-100 font-black'}`}>
                          {msg.subject}
                        </h3>
                      </div>
                    </div>
                    {!msg.read && <div className={`h-2.5 w-2.5 rounded-full ${styles.indicator} animate-pulse`}></div>}
                  </div>
  
                  {/* Expanded Content */}
                  {expandedId === msg.id && msg.content && (
                    <div className="mt-2 pt-4 border-t border-zinc-800/50 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-xs text-zinc-400 leading-relaxed font-medium bg-zinc-950/80 p-5 rounded-2xl border border-zinc-900 shadow-inner">
                        {msg.content}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
        </div>
      </div>
    </div>
  );
}
