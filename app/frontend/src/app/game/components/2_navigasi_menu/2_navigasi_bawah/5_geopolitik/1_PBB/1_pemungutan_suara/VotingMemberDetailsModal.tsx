
"use client"

import { X, Check, X as CloseIcon, Minus, Globe } from "lucide-react";
import { countries } from "@/app/database/data/negara/benua/index";

interface VotingMemberDetailsModalProps {
  type: 'supporters' | 'opponents' | 'abstainers';
  countryList: string[];
  targetCountry?: string;
  onClose: () => void;
}

export function VotingMemberDetailsModal({ type, countryList, targetCountry, onClose }: VotingMemberDetailsModalProps) {
  const getTitle = () => {
    switch(type) {
      case 'supporters': return { text: 'Negara Mendukung', color: 'text-emerald-500', icon: <Check className="h-5 w-5 text-emerald-500" /> };
      case 'opponents': return { text: 'Negara Menentang', color: 'text-rose-500', icon: <X className="h-5 w-5 text-rose-500" /> };
      case 'abstainers': return { text: 'Negara Abstain', color: 'text-zinc-500', icon: <Minus className="h-5 w-5 text-zinc-500" /> };
    }
  };

  const title = getTitle();

  const getCountryCode = (emoji: string) => {
    const chars = [...emoji];
    if (chars.length < 2) return "";
    return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
  };

  // Map country names to full country data to get flags
  // Also sort target country to the top
  const detailedCountries = countryList
    .map(name => {
      return countries.find(c => c.name_id === name || c.name_en === name);
    })
    .filter(Boolean)
    .sort((a: any, b: any) => {
      if (a.name_id === targetCountry || a.name_en === targetCountry) return -1;
      if (b.name_id === targetCountry || b.name_en === targetCountry) return 1;
      return 0;
    });

  return (
    <div className="fixed inset-0 bg-black/80 z-[1000] flex items-center justify-center p-6 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-2xl h-[70vh] flex flex-col overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/20">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl border ${type === 'supporters' ? 'bg-emerald-500/10 border-emerald-500/20' : type === 'opponents' ? 'bg-rose-500/10 border-rose-500/20' : 'bg-zinc-500/10 border-zinc-500/20'}`}>
              {title.icon}
            </div>
            <div>
              <h3 className={`text-xl font-black ${title.color} uppercase italic tracking-tight`}>{title.text}</h3>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Total: {countryList.length} Negara</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-900 rounded-xl transition-colors cursor-pointer">
            <CloseIcon className="h-6 w-6 text-zinc-500" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-3 content-start scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {detailedCountries.map((country: any, i) => {
            const isTarget = country.name_id === targetCountry || country.name_en === targetCountry;
            const code = getCountryCode(country.flag);
            return (
              <div
                key={i}
                className={`flex items-center gap-4 p-3 rounded-2xl transition-all group border ${
                  isTarget 
                    ? "bg-rose-500/10 border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.1)] scale-[1.02]" 
                    : "bg-zinc-900/30 border-zinc-800/50 hover:bg-zinc-800/50"
                }`}
              >
                <div className={`relative w-10 h-7 rounded-lg overflow-hidden shadow-md border shrink-0 ${isTarget ? "border-rose-500/50" : "border-zinc-800"}`}>
                  <img 
                    src={`https://flagcdn.com/w160/${code}.png`} 
                    alt={country.name_id}
                    className="w-full h-full object-cover"
                  />
                  {isTarget && <div className="absolute inset-0 bg-rose-500/10" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className={`text-xs font-black uppercase tracking-tight ${isTarget ? "text-rose-400" : "text-white"}`}>{country.name_id}</h4>
                    {isTarget && (
                      <span className="text-[7px] font-black bg-rose-500 text-white px-1.5 py-0.5 rounded uppercase tracking-tighter animate-pulse">
                        Target Utama
                      </span>
                    )}
                  </div>
                  <p className={`text-[8px] font-bold uppercase tracking-widest ${isTarget ? "text-rose-600" : "text-zinc-600"}`}>{country.capital}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-zinc-900/20 border-t border-zinc-800/50 text-center">
           <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
             <Globe className="h-3 w-3" />
             Data Keanggotaan PBB • Sesuai Konvensi Internasional
           </p>
        </div>
      </div>
    </div>
  );
}
