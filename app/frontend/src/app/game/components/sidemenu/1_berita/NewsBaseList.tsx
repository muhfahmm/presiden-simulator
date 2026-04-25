"use client"

import React from 'react';
import { 
  Newspaper, 
  Globe, 
  ChevronRight, 
  TrendingUp, 
  Shield, 
  Zap,
  Calendar,
  X
} from 'lucide-react';
import { NewsItem } from './newsStorage';
import { countries } from '@/app/database/data/negara/benua/index';
import { useRouter } from 'next/navigation';
import { 
  detectConstructionDetails, 
  resolveNestedValue 
} from './buildingLookupUtility';

interface NewsBaseListProps {
  news: NewsItem[];
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
  searchTerm: string;
  categoryFilter?: (item: NewsItem) => boolean;
  onClose: () => void;
  setActiveMenu: (menu: string) => void;
}

export const NewsBaseList = ({ 
  news, 
  expandedId, 
  setExpandedId, 
  searchTerm, 
  categoryFilter,
  onClose,
  setActiveMenu
}: NewsBaseListProps) => {
  const router = useRouter();

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
      case 'construction': return { 
        bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', 
        glow: 'shadow-[0_0_20px_rgba(245,158,11,0.15)]', icon: <Zap size={18} /> 
      };
      case 'organizations': return { 
        bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', 
        glow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]', icon: <Globe size={18} /> 
      };
      default: return { 
        bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400', 
        glow: 'shadow-[0_0_20px_rgba(14,165,233,0.15)]', icon: <Newspaper size={18} /> 
      };
    }
  };

  const enrichNewsItem = (item: NewsItem): NewsItem => {
    if (item.category !== 'construction') return item;
    const { country, building } = detectConstructionDetails(item.subject, item.content, item.source);
    if (!country || !building) return item;
    const baseline = resolveNestedValue(country, building.sectorPath);
    const target = baseline + 1;
    const transitionText = `(${baseline} ke ${target})`;
    
    // Transform subject to requested format: "Pembangunan Infrastruktur [nama infra]: [nama negara]"
    const newSubject = `Pembangunan Infrastruktur ${building.label}: ${country.name_id}`;
    
    const cleanContent = item.content.replace(/\s?\(\d+ ke \d+\)/g, '');
    return {
      ...item,
      subject: newSubject,
      content: cleanContent.replace(
        /proyek konstruksi ([\w\s\-\/()&]+?)(\s+di sektor|\.|$|\s)/i,
        `proyek konstruksi $1 ${transitionText}$2`
      ).trim()
    };
  };

  const detectNavigationTargets = (item: NewsItem) => {
    const details = detectConstructionDetails(item.subject, item.content, item.source);
    if (!details.country) return null;
    
    // If it's a construction news, use the detected building
    if (details.building) {
      const { getTabForSector } = require('./buildingLookupUtility');
      const tab = getTabForSector(details.building.sectorPath);
      return { 
        country: details.country, 
        tab: tab, 
        buildingKey: details.building.dataKey,
        buildingLabel: details.building.label
      };
    }

    // Fallback for other categories (default to produksi)
    return { country: details.country, tab: 'produksi', buildingKey: 'emas', buildingLabel: 'Produksi' };
  };

  const filtered = news.filter(item => {
    const matchesSearch = item.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? categoryFilter(item) : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {filtered.length === 0 ? (
        <div className="h-64 flex flex-col items-center justify-center text-zinc-600">
          <Globe className="h-12 w-12 mb-4 opacity-20" />
          <p className="text-xs font-black uppercase tracking-[0.3em]">Cakrawala Dunia Masih Tenang</p>
        </div>
      ) : (
        Array.from(new Map(filtered.map(item => [item.id, item])).values()).map((rawItem) => {
          const item = enrichNewsItem(rawItem);
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
                  <div className="relative">
                    <div className={`p-4 rounded-2xl bg-zinc-950 border ${theme.border} ${theme.text} ${theme.glow}`}>
                      {theme.icon}
                    </div>
                    {/* Green +X badge for construction news */}
                    {item.category === 'construction' && (() => {
                      const qtyMatch = item.content.match(/(\d+)\s*unit/i) || item.content.match(/(\d+)\s*proyek/i);
                      const qty = qtyMatch ? parseInt(qtyMatch[1]) : 1;
                      return (
                        <div className="absolute -top-2 -right-2 min-w-[28px] h-7 flex items-center justify-center px-1.5 bg-emerald-500 text-black rounded-full shadow-[0_0_12px_rgba(16,185,129,0.6)] border-2 border-zinc-950 animate-in zoom-in duration-300">
                          <span className="text-[11px] font-black leading-none">+{qty}</span>
                        </div>
                      );
                    })()}
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
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                       <Newspaper size={120} />
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed font-medium whitespace-pre-line relative z-10 border-l-2 border-indigo-500/30 pl-6 py-2">
                      {item.content}
                    </p>
                    {(() => {
                      if (item.category === 'diplomacy' && item.subject.toLowerCase().includes('kedutaan besar')) {
                        const match = item.subject.match(/antara negara (.+) dengan negara (.+) disepakati/i);
                        if (match) {
                          const c1 = match[1];
                          return (
                            <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-end">
                              <button
                                onClick={() => {
                                  onClose();
                                  const countrySlug = c1.toLowerCase().replace(/ /g, '_');
                                  setActiveMenu(`CountryModal:${c1.toLowerCase()}:diplomasi_hubungan:kedutaan_besar`);
                                  router.push(`/game/${countrySlug}/diplomasi_hubungan`);
                                }}
                                className="flex items-center gap-2 group/btn cursor-pointer py-2 px-4 bg-purple-500/10 hover:bg-purple-500 border border-purple-500/30 hover:border-purple-400 rounded-xl transition-all"
                              >
                                <Shield size={14} className="text-purple-500 group-hover/btn:text-black transition-colors" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-purple-500 group-hover/btn:text-black transition-colors">
                                  Lihat Kedutaan - {c1}
                                </span>
                              </button>
                            </div>
                          );
                        }
                      }

                      if (item.category !== 'construction') return null;
                      const targets = detectNavigationTargets(item);
                      if (!targets) return null;
                      return (
                        <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-end">
                          <button
                              onClick={() => {
                                onClose();
                                const countryNameId = targets.country.name_id;
                                const countrySlug = countryNameId.toLowerCase().replace(/ /g, '_');
                                const tab = targets.tab || 'produksi';
                                const key = targets.buildingKey || 'emas';
                                
                                console.log(`[NEWS NAVIGATION] Target: ${countryNameId} (${countrySlug}), Tab: ${tab}, Key: ${key}`);
                                
                                // Update state with precise name_id for internal lookup
                                setActiveMenu(`CountryModal:${countryNameId.toLowerCase()}:info_strategis:detail_lengkap:${tab}:${key}`);
                                
                                // Use URL-friendly slug for the browser address
                                router.push(`/game/${countrySlug}/info_strategis/detail_lengkap/${tab}/${key}`);
                              }}
                            className="flex items-center gap-2 group/btn cursor-pointer py-2 px-4 bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 hover:border-amber-400 rounded-xl transition-all"
                          >
                            <TrendingUp size={14} className="text-amber-500 group-hover/btn:text-black transition-colors" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 group-hover/btn:text-black transition-colors">
                              Lihat Detail {(targets as any).buildingLabel} - {targets.country.name_id}
                            </span>
                          </button>
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
  );
};
