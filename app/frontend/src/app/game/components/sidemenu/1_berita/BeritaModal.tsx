"use client"

import React from 'react';
import { 
  X, 
  Newspaper, 
  Globe, 
  ChevronRight, 
  Search, 
  TrendingUp, 
  Shield, 
  Activity,
  Zap,
  Info,
  Calendar
} from 'lucide-react';
import { newsStorage, NewsItem } from './newsStorage';

interface BeritaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BeritaModal({ isOpen, onClose }: BeritaModalProps) {
  const [news, setNews] = React.useState<NewsItem[]>([]);
  const [expandedId, setExpandedId] = React.useState<string | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    if (isOpen) {
      setNews(newsStorage.getNews());
    }
    
    const handleUpdate = () => setNews(newsStorage.getNews());
    window.addEventListener('news_updated', handleUpdate);
    return () => window.removeEventListener('news_updated', handleUpdate);
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredNews = news.filter(item => 
    item.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'global': return { 
        bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', 
        glow: 'shadow-[0_0_20px_rgba(99,102,241,0.15)]', icon: <Globe size={18} /> 
      };
      case 'diplomacy': return { 
        bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', 
        glow: 'shadow-[0_0_20px_rgba(168,85,247,0.15)]', icon: <Shield size={18} /> 
      };
      case 'economy': return { 
        bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', 
        glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]', icon: <TrendingUp size={18} /> 
      };
      default: return { 
        bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400', 
        glow: 'shadow-[0_0_20px_rgba(14,165,233,0.15)]', icon: <Newspaper size={18} /> 
      };
    }
  };

  return (
    <div className="absolute inset-0 bg-black/85 z-[110] flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8 no-scrollbar">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative">
        
        {/* Header Section - Same as Inbox and Production Modals */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 rounded-xl">
              <Newspaper className="h-6 w-6 text-indigo-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Pusat Informasi Global</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Global Intelligence & World Report</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Dashboard/Filter Section */}
        <div className="px-8 py-6 bg-zinc-900/20 border-b border-zinc-800/50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-6">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg"><Activity size={16} className="text-indigo-400" /></div>
                <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none text-nowrap">Total Berita Dunia</p>
                    <p className="text-xl font-black text-white mt-1">{news.length} <span className="text-[10px] opacity-40 font-normal">LAPORAN</span></p>
                </div>
             </div>
             <div className="h-10 w-[1px] bg-zinc-800 self-center"></div>
             <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg"><Zap size={16} className="text-amber-400" /></div>
                <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none text-nowrap">Status Global</p>
                    <p className="text-xl font-black text-emerald-500 mt-1">STABIL</p>
                </div>
             </div>
          </div>
          
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            <input 
              type="text" 
              placeholder="CARI BERITA DUNIA..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-zinc-950/50 border border-zinc-800 rounded-2xl pl-12 pr-6 py-2.5 text-[11px] font-bold text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-700 w-80 transition-all"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredNews.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-zinc-600">
                <Globe className="h-12 w-12 mb-4 opacity-20" />
                <p className="text-xs font-black uppercase tracking-[0.3em]">Cakrawala Dunia Masih Tenang</p>
              </div>
            ) : (
              filteredNews.map((item) => {
                const theme = getCategoryTheme(item.category);
                const isExpanded = expandedId === item.id;

                return (
                  <div 
                    key={item.id}
                    className={`group relative bg-zinc-900/30 border border-zinc-800/50 rounded-[32px] overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'ring-1 ring-zinc-700 bg-zinc-900/50' : 'hover:border-zinc-700 hover:bg-zinc-900/40'
                    }`}
                  >
                    <div 
                      className="p-6 cursor-pointer flex items-center justify-between"
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    >
                      <div className="flex items-center gap-6">
                        <div className={`p-4 rounded-2xl bg-zinc-950 border ${theme.border} ${theme.text} ${theme.glow}`}>
                          {theme.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-md ${theme.bg} ${theme.text}`}>
                              NEWS / {item.category}
                            </span>
                            <span className="text-[10px] text-zinc-500 font-medium flex items-center gap-1.5">
                                <Calendar size={12} /> {item.time}
                            </span>
                          </div>
                          <h4 className="text-lg font-black text-white mt-1 group-hover:text-indigo-400 transition-colors uppercase italic tracking-tight">
                            {item.subject}
                          </h4>
                          <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5 underline underline-offset-4 decoration-zinc-800">{item.source}</p>
                        </div>
                      </div>
                      <ChevronRight className={`h-5 w-5 text-zinc-700 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                    </div>

                    {isExpanded && (
                      <div className="px-8 pb-8 pt-2 animate-in slide-in-from-top-4 duration-500">
                        <div className="bg-zinc-950/50 rounded-[24px] p-6 border border-zinc-800/50 relative overflow-hidden">
                          {/* Jurnalistic Quote Style */}
                          <div className="absolute top-0 right-0 p-4 opacity-5">
                             <Newspaper size={120} />
                          </div>
                          
                          <p className="text-zinc-300 text-sm leading-relaxed font-medium whitespace-pre-line relative z-10 border-l-2 border-indigo-500/30 pl-6 py-2">
                            {item.content}
                          </p>

                          <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between">
                             <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                                <Info size={14} /> ID: INTEL-{item.id.toUpperCase()}
                             </div>
                             <button
                                onClick={() => newsStorage.markAsRead(item.id)}
                                className="text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors"
                             >
                                Tandai Telah Dibaca
                             </button>
                          </div>
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
        <div className="px-8 py-4 bg-zinc-900/30 border-t border-zinc-800/50 flex items-center justify-center text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] gap-8">
            <span className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div> Global Stream Active</span>
            <div className="h-3 w-[1px] bg-zinc-800"></div>
            <span>World Report Surveillance System © 2026 v2.4</span>
        </div>

      </div>
    </div>
  );
}
