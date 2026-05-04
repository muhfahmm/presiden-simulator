"use client";

import React from 'react';
import { Shield, Target, AlertTriangle } from 'lucide-react';
import { NewsItem } from '../newsStorage';

interface WarNewsListProps {
  news: NewsItem[];
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
  searchTerm: string;
}

export function WarNewsList({ news, expandedId, setExpandedId, searchTerm }: WarNewsListProps) {
  const filteredNews = news.filter(item => {
    const isMilitary = item.category === 'conflict' || 
                      item.subject.toLowerCase().includes('perang') || 
                      item.subject.toLowerCase().includes('invasi') ||
                      item.subject.toLowerCase().includes('militer');
    
    if (!isMilitary) return false;
    
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return item.subject.toLowerCase().includes(searchLower) || 
           item.content.toLowerCase().includes(searchLower);
  });

  if (filteredNews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-zinc-600">
        <Shield size={48} className="opacity-20 mb-4" />
        <p className="text-sm font-bold uppercase tracking-widest">Tidak ada laporan perang aktif</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredNews.map((item) => (
        <div 
          key={item.id}
          className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-6 hover:border-rose-500/30 transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-rose-500/10 rounded-2xl">
              <AlertTriangle className="text-rose-500" size={20} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest italic">
                  Laporan Militer
                </span>
                <span className="text-[10px] font-bold text-zinc-600 uppercase">
                  {item.time}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight uppercase italic group-hover:text-rose-400 transition-colors">
                {item.subject}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                {item.content}
              </p>
              
              <div className="mt-4 flex items-center gap-2">
                <div className="px-3 py-1 bg-zinc-800/50 rounded-full border border-zinc-700/50 flex items-center gap-2">
                  <Target size={12} className="text-zinc-500" />
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
                    Status: Operasi Aktif
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
