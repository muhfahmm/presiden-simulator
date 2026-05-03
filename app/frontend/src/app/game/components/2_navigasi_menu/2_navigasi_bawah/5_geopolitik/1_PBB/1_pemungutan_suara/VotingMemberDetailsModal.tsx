
"use client"

import { useState } from "react";
import { X, Check, X as CloseIcon, Minus, Globe, MessageSquare, DollarSign, Loader2 } from "lucide-react";
import { countries as allCountriesData } from "@/app/pilih_negara/data/semua_fitur_negara/0_profiles/index";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara/index";
import { unVotingStorage } from "./logika_pemungutan_suara/unVotingStorage";
import { getRelation } from "./logika_pemungutan_suara/votingLogic";
import { getVotingReason } from "./logika_pemungutan_suara/votingReasons";
import { AlertCircle, AlertTriangle } from "lucide-react";

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
  const [confirmBribe, setConfirmBribe] = useState<any | null>(null);
  const [confirmBribeAll, setConfirmBribeAll] = useState<any | null>(null);
  const [bribeError, setBribeError] = useState<string | null>(null);

  const activeVotingData = (votingId && !isHistory) ? unVotingStorage.getData().activeVotings.find(v => v.id === votingId) : null;
  const historyVotingData = (votingId && isHistory) ? unVotingStorage.getData().votingHistory.find(h => h.id === votingId) : null; 
  
  // Safe access to bribedCountries and reasons
  const bribedCountries: Record<string, string> = (activeVotingData?.bribedCountries as any) || (historyVotingData?.bribedCountries as any) || {};
  const storedReasons: Record<string, string> = (activeVotingData?.reasons as any) || (historyVotingData?.reasons as any) || {};

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
      setBribeError(`Anggaran tidak cukup! Dibutuhkan $${cost.toLocaleString()} untuk meyakinkan ${country.name_id} agar memilih ${userVote}.`);
      return;
    }

    setConfirmBribe({ country, cost, userVote, targetVoteType });
  };

  const executeBribe = () => {
    if (!confirmBribe || !votingId) return;
    const { country, cost, targetVoteType } = confirmBribe;
    
    setIsBribing(country.name_id);
    setConfirmBribe(null);
    
    setTimeout(() => {
      const currentBudget = budgetStorage.getBudget();
      budgetStorage.updateBudget(-cost);
      unVotingStorage.bribeToChoice(votingId, country.name_id, targetVoteType);
      setIsBribing(null);
      setSelectedCountryName(null);
    }, 1500);
  };

  const handleBribeAll = () => {
    if (!votingId || !activeVotingData?.userVote) return;
    
    const userVote = activeVotingData.userVote;
    const targetVoteType = userVote === 'SETUJU' ? 'supporters' : 'opponents';
    
    // Only bribe those who don't already match the user's vote
    if (type === targetVoteType) return;

    let totalCost = 0;
    const bribeList: any[] = [];

    countryList.forEach(name => {
      const country = allCountriesData.find(c => c.name_id === name || c.name_en === name);
      if (!country) return;

      const unVote = country.geopolitik?.un_vote || 1;
      const relation = getRelation(country.name_id, localStorage.getItem('selected_country') || "Indonesia");
      
      const baseCost = unVote * 1000;
      let difficultyMultiplier = 1.2; 
      if (type === 'supporters' || type === 'opponents') difficultyMultiplier = 2.0;

      const cost = baseCost * difficultyMultiplier * ((120 - relation) / 60);
      totalCost += cost;
      bribeList.push({ country, cost });
    });

    if (bribeList.length === 0) return;

    const currentBudget = budgetStorage.getBudget();
    if (currentBudget < totalCost) {
      setBribeError(`Anggaran tidak cukup! Dibutuhkan $${totalCost.toLocaleString()} untuk meyakinkan seluruh kelompok ini agar memilih ${userVote}.`);
      return;
    }

    setConfirmBribeAll({ bribeList, totalCost, userVote, targetVoteType });
  };

  const executeBribeAll = () => {
    if (!confirmBribeAll || !votingId) return;
    const { bribeList, totalCost, targetVoteType } = confirmBribeAll;
    
    setIsBribing("ALL");
    const listToProcess = Array.isArray(bribeList) ? [...bribeList] : [];
    setConfirmBribeAll(null);
    
    setTimeout(() => {
      if (listToProcess.length > 0) {
        budgetStorage.updateBudget(-totalCost);
        listToProcess.forEach(item => {
          if (item && item.country) {
            unVotingStorage.bribeToChoice(votingId, item.country.name_id, targetVoteType);
          }
        });
      }
      setIsBribing(null);
      onClose();
    }, 2000);
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
          <div className="flex items-center gap-4">
            {votingId && activeVotingData?.userVote && type !== (activeVotingData.userVote === 'SETUJU' ? 'supporters' : 'opponents') && countryList.length > 0 && (
               <button 
                 onClick={handleBribeAll}
                 disabled={isBribing !== null}
                 className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all flex items-center gap-2 group cursor-pointer"
               >
                 <DollarSign className="h-3 w-3 group-hover:scale-110 transition-transform" />
                 <span className="text-[9px] font-black uppercase tracking-widest">Lobi Semua</span>
               </button>
            )}
            <button onClick={onClose} className="p-2 hover:bg-zinc-900 rounded-xl transition-colors cursor-pointer">
              <CloseIcon className="h-6 w-6 text-zinc-500" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-3 content-start scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {detailedCountries.map((country: any, i) => {
            const isTarget = country.name_id === targetCountry || country.name_en === targetCountry;
            const isProposer = country.name_id === proposer || country.name_en === proposer;
            const code = getCountryCode(country.flag);
            return (
              <div
                key={i}
                onClick={() => setSelectedCountryName(selectedCountryName === country.name_id ? null : country.name_id)}
                className={`flex flex-col gap-3 p-3 rounded-2xl transition-all group border cursor-pointer ${
                  isTarget 
                    ? "bg-rose-500/10 border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.1)]" 
                    : isProposer
                    ? "bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                    : selectedCountryName === country.name_id
                    ? "bg-zinc-800/80 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                    : "bg-zinc-900/30 border-zinc-800/50 hover:bg-zinc-800/50"
                } ${selectedCountryName === country.name_id ? "scale-[1.02]" : "scale-100"}`}
              >

                <div className="flex items-center gap-4">
                  <div className={`relative w-10 h-7 rounded-lg overflow-hidden shadow-md border shrink-0 ${isTarget ? "border-rose-500/50" : isProposer ? "border-emerald-500/50" : "border-zinc-800"}`}>
                    <img 
                      src={`https://flagcdn.com/w160/${code}.png`} 
                      alt={country.name_id}
                      className="w-full h-full object-cover"
                    />
                    {isTarget && <div className="absolute inset-0 bg-rose-500/10" />}
                    {isProposer && <div className="absolute inset-0 bg-emerald-500/10" />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h4 className={`text-xs font-black uppercase tracking-tight ${isTarget ? "text-rose-400" : isProposer ? "text-emerald-400" : "text-white"}`}>{country.name_id}</h4>
                        {isTarget && (
                          <span className="text-[7px] font-black bg-rose-500 text-white px-1.5 py-0.5 rounded uppercase tracking-tighter animate-pulse">
                            Target Utama
                          </span>
                        )}
                        {isProposer && (
                          <span className="text-[7px] font-black bg-emerald-500 text-white px-1.5 py-0.5 rounded uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                            Negara Pengusul
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
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all group/bribe cursor-pointer"
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
                      "{bribedCountries[country.name_id] || storedReasons[country.name_id] || getVotingReason({ 
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

      {/* Confirmation Overlay */}
      {confirmBribe && (
        <div className="absolute inset-0 z-[1100] flex items-center justify-center p-8 backdrop-blur-sm bg-black/40 animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 w-full max-w-xs shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                <DollarSign className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white uppercase tracking-tight">Konfirmasi Lobi</h4>
                <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1">Negara: {confirmBribe.country.name_id}</p>
              </div>
              <p className="text-[11px] text-zinc-300 leading-relaxed">
                Anda akan mengeluarkan dana sebesar <span className="text-emerald-400 font-bold">${confirmBribe.cost.toLocaleString()}</span> untuk meyakinkan negara ini agar memilih <span className="text-cyan-400 font-bold">{confirmBribe.userVote}</span>.
              </p>
              <div className="grid grid-cols-2 gap-3 w-full mt-2">
                <button 
                  onClick={() => setConfirmBribe(null)}
                  className="py-2.5 rounded-xl bg-zinc-800 text-zinc-400 text-[9px] font-black uppercase hover:bg-zinc-700 transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button 
                  onClick={executeBribe}
                  className="py-2.5 rounded-xl bg-cyan-600 text-white text-[9px] font-black uppercase hover:bg-cyan-500 shadow-lg shadow-cyan-900/20 transition-all cursor-pointer"
                >
                  Setujui
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Bribe All Overlay */}
      {confirmBribeAll && (
        <div className="absolute inset-0 z-[1100] flex items-center justify-center p-8 backdrop-blur-sm bg-black/40 animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-cyan-500/30 rounded-3xl p-6 w-full max-w-xs shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                <Globe className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white uppercase tracking-tight">Lobi Kelompok Massa</h4>
                <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1">{confirmBribeAll.bribeList.length} Negara Sekaligus</p>
              </div>
              <p className="text-[11px] text-zinc-300 leading-relaxed">
                Anda akan meluncurkan paket bantuan ekonomi senilai <span className="text-emerald-400 font-bold">${confirmBribeAll.totalCost.toLocaleString()}</span> untuk meyakinkan seluruh kelompok ini agar memilih <span className="text-cyan-400 font-bold">{confirmBribeAll.userVote}</span>.
              </p>
              <div className="grid grid-cols-2 gap-3 w-full mt-2">
                <button 
                  onClick={() => setConfirmBribeAll(null)}
                  className="py-2.5 rounded-xl bg-zinc-800 text-zinc-400 text-[9px] font-black uppercase hover:bg-zinc-700 transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button 
                  onClick={executeBribeAll}
                  className="py-2.5 rounded-xl bg-cyan-600 text-white text-[9px] font-black uppercase hover:bg-cyan-500 shadow-lg shadow-cyan-900/20 transition-all cursor-pointer"
                >
                  Eksekusi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Overlay */}
      {bribeError && (
        <div className="absolute inset-0 z-[1100] flex items-center justify-center p-8 backdrop-blur-sm bg-black/40 animate-in fade-in duration-200">
          <div className="bg-zinc-950 border border-rose-500/30 rounded-3xl p-6 w-full max-w-xs shadow-2xl animate-in shake duration-500">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                <AlertCircle className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <h4 className="text-sm font-black text-rose-500 uppercase tracking-tight">Anggaran Terbatas</h4>
                <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1">Transaksi Gagal</p>
              </div>
              <p className="text-[11px] text-zinc-300 leading-relaxed">
                {bribeError}
              </p>
              <button 
                onClick={() => setBribeError(null)}
                className="w-full py-2.5 rounded-xl bg-zinc-800 text-white text-[9px] font-black uppercase hover:bg-zinc-700 transition-colors mt-2 cursor-pointer"
              >
                Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

