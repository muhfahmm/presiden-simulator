"use client"

import React, { useState } from "react"
import { X, Newspaper, Clock, Tag, ChevronRight, AlertCircle, TrendingUp, Globe, Shield, Users } from "lucide-react"
import { mockNews, NewsItem } from "../data/news"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BeritaModal({ isOpen, onClose }: ModalProps) {
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(mockNews[0]?.id || null);

  if (!isOpen) return null;

  const selectedNews = mockNews.find(n => n.id === selectedNewsId) || mockNews[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Ekonomi": return <TrendingUp className="h-4 w-4 text-blue-400" />;
      case "Politik": return <Users className="h-4 w-4 text-purple-400" />;
      case "Sosial": return <AlertCircle className="h-4 w-4 text-orange-400" />;
      case "Internasional": return <Globe className="h-4 w-4 text-emerald-400" />;
      case "Pertahanan": return <Shield className="h-4 w-4 text-red-400" />;
      default: return <Tag className="h-4 w-4 text-zinc-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-500 bg-red-500/10 border-red-500/20";
      case "Medium": return "text-amber-500 bg-amber-500/10 border-amber-500/20";
      case "Low": return "text-blue-500 bg-blue-500/10 border-blue-500/20";
      default: return "text-zinc-500 bg-zinc-500/10 border-zinc-500/20";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center animate-in fade-in zoom-in-95 duration-300 p-4 lg:p-12 backdrop-blur-md">
      <div className="bg-zinc-950 border border-zinc-800/50 rounded-[3rem] w-full max-w-6xl h-[85vh] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col relative">
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Top Header */}
        <div className="px-10 py-8 border-b border-zinc-900 flex items-center justify-between bg-zinc-950/80 backdrop-blur-xl relative z-10">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-emerald-500/10 rounded-[1.5rem] border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.15)] group hover:scale-110 transition-transform">
              <Newspaper className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic flex items-center gap-3">
                PUSAT INFORMASI STRATEGIS <span className="text-emerald-500">— BERITA NEGARA</span>
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_100px_rgba(52,211,153,0.5)]"></span>
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Sistem Monitoring Aktif</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-4 rounded-2xl hover:bg-zinc-900 transition-all text-zinc-500 hover:text-white cursor-pointer group border border-transparent hover:border-zinc-800">
            <X className="h-8 w-8 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden relative z-10">
          {/* Sidebar - News List */}
          <div className="w-[400px] border-r border-zinc-900 bg-zinc-950/50 flex flex-col backdrop-blur-sm relative scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent overflow-y-auto">
            <div className="p-8 space-y-4">
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] italic mb-6">Papan Berita Terbaru</h3>
              
              {mockNews.map((news) => (
                <button
                  key={news.id}
                  onClick={() => setSelectedNewsId(news.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all group relative cursor-pointer overflow-hidden border ${
                    selectedNewsId === news.id 
                    ? 'bg-emerald-600/10 border-emerald-500/40' 
                    : 'bg-zinc-900/20 border-transparent hover:border-zinc-800 hover:bg-zinc-900/40'
                  }`}
                >
                  <div className="flex flex-col gap-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(news.category)}
                        <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400">{news.category}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-tighter border ${getPriorityColor(news.priority)}`}>
                        {news.priority}
                      </span>
                    </div>
                    <h4 className={`text-sm font-bold tracking-tight leading-snug group-hover:text-emerald-400 transition-colors ${selectedNewsId === news.id ? 'text-emerald-400' : 'text-zinc-200'}`}>
                      {news.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3 text-zinc-600" />
                      <span className="text-[10px] text-zinc-600 font-medium">{news.date}</span>
                    </div>
                  </div>
                  {selectedNewsId === news.id && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 animate-in slide-in-from-left-2 fade-in duration-300">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content - News Detail */}
          <div className="flex-1 bg-zinc-950 p-12 lg:p-20 overflow-y-auto relative scrollbar-thin scrollbar-thumb-zinc-800">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            {selectedNews && (
              <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                      Laporan {selectedNews.category}
                    </span>
                    <div className="h-[1px] flex-1 bg-zinc-900"></div>
                    <span className="text-[11px] font-bold text-zinc-500 italic uppercase">Ref ID: NX-{selectedNews.id}0026</span>
                  </div>

                  <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase italic">
                    {selectedNews.title}
                  </h1>

                  <div className="flex items-center gap-6 py-4 border-y border-zinc-900/80">
                    <div className="flex items-center gap-2">
                       <Clock className="h-4 w-4 text-emerald-500" />
                       <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{selectedNews.date}</span>
                    </div>
                    <div className="h-4 w-[1px] bg-zinc-800"></div>
                    <div className="flex items-center gap-2">
                       <Users className="h-4 w-4 text-zinc-500" />
                       <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest text-emerald-500/80">Dirilis oleh Sekretariat Negara</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <p className="text-xl text-zinc-300 leading-relaxed font-medium italic border-l-4 border-emerald-500/30 pl-8">
                    {selectedNews.content}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 pt-8">
                    <div className="bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-[2.5rem] relative group overflow-hidden">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] block mb-4">Analisis Dampak</span>
                      <p className="text-sm font-bold text-white tracking-tight leading-relaxed italic">
                        Diperkirakan akan memberikan pengaruh positif yang signifikan terhadap stabilitas nasional dalam jangka panjang.
                      </p>
                    </div>
                    <div className="bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-[2.5rem] relative group overflow-hidden">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] block mb-4">Rekomendasi Kebijakan</span>
                      <p className="text-sm font-bold text-white tracking-tight leading-relaxed italic">
                        Lanjutkan pemantauan intensif dan pastikan koordinasi antar kementerian berjalan dengan optimal.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-12 border-t border-zinc-900/80 flex justify-between items-center text-zinc-600">
                  <div className="flex gap-1">
                    <div className="h-1 w-8 bg-emerald-500/20 rounded-full"></div>
                    <div className="h-1 w-4 bg-emerald-500/20 rounded-full"></div>
                    <div className="h-1 w-2 bg-emerald-500/20 rounded-full"></div>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.5em]">Secretariat of the Presidency © 2026</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
