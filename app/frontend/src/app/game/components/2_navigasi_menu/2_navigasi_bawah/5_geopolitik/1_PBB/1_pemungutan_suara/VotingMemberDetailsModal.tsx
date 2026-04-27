
"use client"

import { useState } from "react";
import { X, Check, X as CloseIcon, Minus, Globe, MessageSquare, DollarSign, Loader2 } from "lucide-react";
import { countries as allCountriesData } from "@/app/pilih_negara/data/negara/benua/index";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara/index";
import { unVotingStorage } from "./logika_pemungutan_suara/unVotingStorage";
import { getRelation } from "./logika_pemungutan_suara/votingLogic";
import { getVotingReason } from "./logika_pemungutan_suara/votingReasons";

interface VotingMemberDetailsModalProps {
  type: 'supporters' | 'opponents' | 'abstainers';
  countryList: string[];
  targetCountry?: string;
  proposer?: string;
  votingId?: string; 
  isHistory?: boolean;
  onClose: () => void;
}

export function VotingMemberDetailsModal({ type, countryList, targetCountry, proposer = "Pemain", votingId, isHistory, onClose }: VotingMemberDetailsModalProps) {
  const [selectedCountryName, setSelectedCountryName] = useState<string | null>(null);
  const [isBribing, setIsBribing] = useState<string | null>(null);

  const activeVotingData = (votingId && !isHistory) ? unVotingStorage.getData().activeVotings.find(v => v.id === votingId) : null;
  const historyVotingData = (votingId && isHistory) ? unVotingStorage.getData().votingHistory.find(h => h.id === votingId) : null; 
  
  // Safe access to bribedCountries
  const bribedCountries: Record<string, string> = (activeVotingData?.bribedCountries as any) || (historyVotingData?.bribedCountries as any) || {};
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
      return allCountriesData.find(c => c.name_id === name || c.name_en === name);
    })
    .filter(Boolean)
    .sort((a: any, b: any) => {
      if (a.name_id === targetCountry || a.name_en === targetCountry) return -1;
      if (b.name_id === targetCountry || b.name_en === targetCountry) return 1;
      return 0;
    });

  const handleBribe = (country: any) => {
    if (!votingId) return;
    
    const unVote = country.geopolitik?.un_vote || 1;
    const relation = getRelation(country.name_id, localStorage.getItem('selected_country') || "Indonesia");
    
    // Suara Pemain Saat Ini
    const userVote = activeVotingData?.userVote;
    if (!userVote) {
      alert("Anda harus memberikan suara Anda terlebih dahulu sebelum dapat melobi negara lain!");
      return;
    }

    const targetVoteType = userVote === 'SETUJU' ? 'supporters' : 'opponents';
    
    // Jika negara sudah memilih hal yang sama dengan pemain, tidak perlu disuap
    if (type === targetVoteType) return;

    // Kalkulasi Biaya (Gunakan logika baru)
    // Dasar: un_vote * 1000
    const baseCost = unVote * 1000;
    let difficultyMultiplier = 1.2; // Default dari Abstain

    if (type === 'supporters' || type === 'opponents') {
      // Membalikkan suara (Setuju <-> Tolak) jauh lebih mahal
      difficultyMultiplier = 2.0;
    }

    const cost = baseCost * difficultyMultiplier * ((120 - relation) / 60);

    const currentBudget = budgetStorage.getBudget();
    if (currentBudget < cost) {
      alert(`Anggaran tidak cukup! Dibutuhkan $${cost.toLocaleString()} untuk meyakinkan ${country.name_id} agar memilih ${userVote}.`);
      return;
    }

    if (confirm(`Lobi ${country.name_id} agar memilih ${userVote}? \nBiaya: $${cost.toLocaleString()}`)) {
      setIsBribing(country.name_id);
      
      setTimeout(() => {
        budgetStorage.updateBudget(currentBudget - cost);
        unVotingStorage.bribeToChoice(votingId, country.name_id, targetVoteType);
        setIsBribing(null);
        setSelectedCountryName(null);
      }, 1500);
    }
  };

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
                onClick={() => setSelectedCountryName(selectedCountryName === country.name_id ? null : country.name_id)}
                className={`flex flex-col gap-3 p-3 rounded-2xl transition-all group border cursor-pointer ${
                  isTarget 
                    ? "bg-rose-500/10 border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.1)]" 
                    : selectedCountryName === country.name_id
                    ? "bg-zinc-800/80 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                    : "bg-zinc-900/30 border-zinc-800/50 hover:bg-zinc-800/50"
                } ${selectedCountryName === country.name_id ? "scale-[1.02]" : "scale-100"}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`relative w-10 h-7 rounded-lg overflow-hidden shadow-md border shrink-0 ${isTarget ? "border-rose-500/50" : "border-zinc-800"}`}>
                    <img 
                      src={`https://flagcdn.com/w160/${code}.png`} 
                      alt={country.name_id}
                      className="w-full h-full object-cover"
                    />
                    {isTarget && <div className="absolute inset-0 bg-rose-500/10" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h4 className={`text-xs font-black uppercase tracking-tight ${isTarget ? "text-rose-400" : "text-white"}`}>{country.name_id}</h4>
                        {isTarget && (
                          <span className="text-[7px] font-black bg-rose-500 text-white px-1.5 py-0.5 rounded uppercase tracking-tighter animate-pulse">
                            Target Utama
                          </span>
                        )}
                      </div>
                      <MessageSquare className={`h-3 w-3 transition-colors ${selectedCountryName === country.name_id ? "text-cyan-400" : "text-zinc-700 group-hover:text-zinc-500"}`} />
                    </div>
                    <p className={`text-[8px] font-bold uppercase tracking-widest ${isTarget ? "text-rose-600" : "text-zinc-600"}`}>{country.capital}</p>
                  </div>
                </div>

                {/* Bribe Button */}
                {votingId && activeVotingData?.userVote && type !== (activeVotingData.userVote === 'SETUJU' ? 'supporters' : 'opponents') && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBribe(country);
                    }}
                    disabled={isBribing !== null}
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all group/bribe"
                    title={`Lobi agar memilih ${activeVotingData.userVote}`}
                  >
                    {isBribing === country.name_id ? (
                      <Loader2 className="h-3 w-3 animate-spin" />
                    ) : (
                      <DollarSign className="h-3 w-3" />
                    )}
                  </button>
                )}

                {/* Reason Expandable */}
                {selectedCountryName === country.name_id && (
                  <div className="mt-2 p-3 rounded-xl bg-black/40 border border-white/5 animate-in slide-in-from-top-2 duration-300">
                    <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                      <div className="h-1 w-2 bg-cyan-500 rounded-full" />
                      Analisis Diplomatik
                    </div>
                    <p className="text-[11px] text-zinc-300 leading-relaxed italic font-medium">
                      "{bribedCountries[country.name_id] || getVotingReason({ 
                        voter: country.name_id, 
                        proposer: proposer, 
                        target: targetCountry || "Global", 
                        type: type 
                      })}"
                    </p>
                  </div>
                )}
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
