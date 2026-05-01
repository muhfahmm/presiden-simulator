
"use client"

import { Clock, Globe, Loader2, ChevronRight } from "lucide-react";
import { ActiveVoting } from "./logika_pemungutan_suara/unVotingStorage";
import { countries } from "@/app/pilih_negara/data/negara/index";
import { useState } from "react";
import { VotingMemberDetailsModal } from "./VotingMemberDetailsModal";

interface ActiveVotingsListProps {
  votings: ActiveVoting[];
}

export function ActiveVotingsList({ votings }: ActiveVotingsListProps) {
  const [detailModal, setDetailModal] = useState<{
    type: 'supporters' | 'opponents' | 'abstainers';
    votingId: string;
  } | null>(null);

  const getCountryCode = (emoji: string) => {
    const chars = [...emoji];
    if (chars.length < 2) return "";
    return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
  };

  if (votings.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em]">Sidang PBB Sedang Berlangsung</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {votings.map((vote) => {
          // Calculate Live Stats
          const progress = vote.progress / 100;
          // Fetch User's UN Vote Weight
          const userCountryRaw = (typeof window !== 'undefined' ? localStorage.getItem('selectedCountry') : "") || "Indonesia";
          const userCountryData = countries.find(c => c.name_id === userCountryRaw || c.name_en === userCountryRaw);
          const userVoteWeight = userCountryData?.geopolitik?.un_vote || 1;

          const aiYes = Math.floor((vote.finalResults?.yes || 0) * progress);
          const aiNo = Math.floor((vote.finalResults?.no || 0) * progress);
          const aiAbstain = Math.floor((vote.finalResults?.abstain || 0) * progress);

          const liveYes = aiYes + (vote.userVote === 'SETUJU' ? 1 : 0);
          const liveNo = aiNo + (vote.userVote === 'TOLAK' ? 1 : 0);
          const liveAbstain = aiAbstain + (vote.userVote === 'ABSTAIN' ? 1 : 0);
          
          // Ensure weighted stats match the count status
          const liveWeightedYes = (aiYes > 0 ? Math.floor((vote.finalResults?.weightedYes || 0) * progress) : 0) + (vote.userVote === 'SETUJU' ? userVoteWeight : 0);
          const liveWeightedNo = (aiNo > 0 ? Math.floor((vote.finalResults?.weightedNo || 0) * progress) : 0) + (vote.userVote === 'TOLAK' ? userVoteWeight : 0);
          const liveWeightedAbstain = (aiAbstain > 0 ? Math.floor((vote.finalResults?.weightedAbstain || 0) * progress) : 0) + (vote.userVote === 'ABSTAIN' ? userVoteWeight : 0);

          // Prepare Voter Lists (Live)
          const liveSupporters = [
            ...(vote.finalResults?.details?.supporters.slice(0, aiYes) || []),
            ...(vote.userVote === 'SETUJU' ? [userCountryRaw] : [])
          ];
          const liveOpponents = [
            ...(vote.finalResults?.details?.opponents.slice(0, aiNo) || []),
            ...(vote.userVote === 'TOLAK' ? [userCountryRaw] : [])
          ];
          const liveAbstainers = [
            ...(vote.finalResults?.details?.abstainers.slice(0, aiAbstain) || []),
            ...(vote.userVote === 'ABSTAIN' ? [userCountryRaw] : [])
          ];

          // Calculate Totals
          const totalCountriesInApp = countries.length; 
          const totalWeightInApp = countries.reduce((acc, c) => acc + (c.geopolitik?.un_vote || 1), 0);
          
          const totalVoted = liveYes + liveNo + liveAbstain;
          const totalWeightedVoted = liveWeightedYes + liveWeightedNo + liveWeightedAbstain;

          return (
            <div 
              key={vote.id}
              className="p-5 rounded-[32px] bg-zinc-900/40 border border-zinc-800/50 relative overflow-hidden group hover:border-cyan-500/30 transition-all"
            >
              {/* Progress Background */}
              <div 
                className="absolute bottom-0 left-0 h-1 bg-cyan-500/20 transition-all duration-1000" 
                style={{ width: `${vote.progress}%` }} 
              />
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800">
                    <Loader2 className="h-4 w-4 text-cyan-400 animate-spin" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black text-white uppercase tracking-tight leading-none mb-1">{vote.name}</h5>
                    <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">{vote.category}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-zinc-950 border border-zinc-800">
                      <Clock className="h-2 w-2 text-cyan-500" />
                      <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">{Math.floor((vote.progress / 100) * 30)}/30 HARI</span>
                    </div>
                    <span className="text-[11px] font-black text-cyan-400">{Math.floor(vote.progress)}%</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-tighter">{totalVoted}/{totalCountriesInApp} Negara</span>
                    <span className="text-[7px] font-bold text-zinc-600 uppercase tracking-tight">{totalWeightedVoted}/{totalWeightInApp} Bobot Suara</span>
                  </div>
                </div>
              </div>

              {/* LIVE VOTING COUNTS (BUTTONS) */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <button 
                  onClick={() => setDetailModal({ type: 'supporters', votingId: vote.id })}
                  className="p-2 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center hover:bg-emerald-500/10 transition-colors cursor-pointer group/stat"
                >
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <p className="text-[7px] font-black text-emerald-500 uppercase tracking-tighter">Setuju</p>
                    <ChevronRight className="h-2 w-2 text-emerald-500/50 group-hover/stat:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-base font-black text-white">{liveYes} <span className="text-zinc-500">({liveWeightedYes})</span></p>
                </button>
                <button 
                  onClick={() => setDetailModal({ type: 'opponents', votingId: vote.id })}
                  className="p-2 rounded-xl bg-rose-500/5 border border-rose-500/10 text-center hover:bg-rose-500/10 transition-colors cursor-pointer group/stat"
                >
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <p className="text-[7px] font-black text-rose-500 uppercase tracking-tighter">Tolak</p>
                    <ChevronRight className="h-2 w-2 text-rose-500/50 group-hover/stat:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-base font-black text-white">{liveNo} <span className="text-zinc-500">({liveWeightedNo})</span></p>
                </button>
                <button 
                  onClick={() => setDetailModal({ type: 'abstainers', votingId: vote.id })}
                  className="p-2 rounded-xl bg-zinc-500/5 border border-zinc-500/10 text-center hover:bg-zinc-500/10 transition-colors cursor-pointer group/stat"
                >
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <p className="text-[7px] font-black text-zinc-400 uppercase tracking-tighter">Abstain</p>
                    <ChevronRight className="h-2 w-2 text-zinc-500/50 group-hover/stat:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-base font-black text-white">{liveAbstain} <span className="text-zinc-500">({liveWeightedAbstain})</span></p>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/5">
                {/* Find Country Data for Flags */}
                {(() => {
                  const normalizeName = (name: string) => {
                    if (!name) return "";
                    if (name.toUpperCase() === "BRASIL") return "Brazil";
                    return name;
                  };

                  const proposerName = normalizeName(vote.proposer || "");
                  const targetName = normalizeName(vote.targetCountry || "");

                  const targetCountryData = countries.find(c => c.name_id === targetName || c.name_en === targetName);
                  const proposerCountryData = countries.find(c => c.name_id === proposerName || c.name_en === proposerName);
                  
                  const targetCode = targetCountryData ? getCountryCode(targetCountryData.flag) : "";
                  const proposerCode = proposerCountryData ? getCountryCode(proposerCountryData.flag) : "";

                  return (
                    <>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Negara Target</span>
                        <div className="flex items-center gap-2">
                           {targetCode && vote.targetCountry ? (
                             <div className="w-5 h-3.5 rounded-sm overflow-hidden border border-white/10 shadow-sm shrink-0">
                               <img src={`https://flagcdn.com/w80/${targetCode}.png`} className="w-full h-full object-cover" alt="" />
                             </div>
                           ) : (
                             <div className="p-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                               <Globe className="h-2.5 w-2.5 text-cyan-500" />
                             </div>
                           )}
                           <span className="text-[11px] font-black text-zinc-200 uppercase tracking-tight">{vote.targetCountry || "DUNIA"}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Pengusul</span>
                        <div className="flex items-center gap-2">
                           {proposerCode ? (
                             <div className="w-5 h-3.5 rounded-sm overflow-hidden border border-white/10 shadow-sm shrink-0">
                               <img src={`https://flagcdn.com/w80/${proposerCode}.png`} className="w-full h-full object-cover" alt="" />
                             </div>
                           ) : (
                             <div className="h-4 w-4 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[7px] font-black text-cyan-400 shrink-0">AI</div>
                           )}
                           <span className="text-[11px] font-black text-zinc-200 uppercase tracking-tight">{vote.proposer || "Anggota PBB"}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Durasi Usulan</span>
                        <div className="flex items-center gap-2">
                           <Clock className="h-3 w-3 text-cyan-500" />
                           <span className="text-[11px] font-black text-zinc-200 uppercase tracking-tight">{vote.resolutionDuration || "6 Bulan"}</span>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Voting Buttons for User */}
              <div className="mt-2 pt-4 border-t border-white/5">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4 text-center">Berikan Suara Anda</p>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => {
                      const { unVotingStorage } = require("./logika_pemungutan_suara/unVotingStorage");
                      unVotingStorage.castUserVote(vote.id, 'SETUJU');
                    }}
                    className={`py-2 rounded-xl text-[9px] font-black uppercase transition-all border cursor-pointer ${
                      vote.userVote === 'SETUJU' 
                      ? "bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/20 scale-105" 
                      : "bg-emerald-500/5 border-emerald-500/10 text-emerald-500 hover:bg-emerald-500/10"
                    }`}
                  >
                    Setuju
                  </button>
                  <button 
                    onClick={() => {
                      const { unVotingStorage } = require("./logika_pemungutan_suara/unVotingStorage");
                      unVotingStorage.castUserVote(vote.id, 'TOLAK');
                    }}
                    className={`py-2 rounded-xl text-[9px] font-black uppercase transition-all border cursor-pointer ${
                      vote.userVote === 'TOLAK' 
                      ? "bg-rose-500 border-rose-400 text-white shadow-lg shadow-rose-500/20 scale-105" 
                      : "bg-rose-500/5 border-rose-500/10 text-rose-500 hover:bg-rose-500/10"
                    }`}
                  >
                    Tolak
                  </button>
                  <button 
                    onClick={() => {
                      const { unVotingStorage } = require("./logika_pemungutan_suara/unVotingStorage");
                      unVotingStorage.castUserVote(vote.id, 'ABSTAIN');
                    }}
                    className={`py-2 rounded-xl text-[9px] font-black uppercase transition-all border cursor-pointer ${
                      vote.userVote === 'ABSTAIN' 
                      ? "bg-zinc-700 border-zinc-600 text-white shadow-lg shadow-zinc-500/20 scale-105" 
                      : "bg-zinc-500/5 border-zinc-500/10 text-zinc-400 hover:bg-zinc-500/10"
                    }`}
                  >
                    Abstain
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {detailModal && (() => {
        const vote = votings.find(v => v.id === detailModal.votingId);
        if (!vote) return null;

        const progress = vote.progress / 100;
        const aiYes = Math.floor((vote.finalResults?.yes || 0) * progress);
        const aiNo = Math.floor((vote.finalResults?.no || 0) * progress);
        const aiAbstain = Math.floor((vote.finalResults?.abstain || 0) * progress);

        let currentList: string[] = [];
        if (detailModal.type === 'supporters') {
          currentList = [
            ...(vote.finalResults?.details?.supporters.slice(0, aiYes) || []),
            ...(vote.userVote === 'SETUJU' ? [(typeof window !== 'undefined' ? localStorage.getItem('selectedCountry') : "") || "Indonesia"] : [])
          ];
        } else if (detailModal.type === 'opponents') {
          currentList = [
            ...(vote.finalResults?.details?.opponents.slice(0, aiNo) || []),
            ...(vote.userVote === 'TOLAK' ? [(typeof window !== 'undefined' ? localStorage.getItem('selectedCountry') : "") || "Indonesia"] : [])
          ];
        } else {
          currentList = [
            ...(vote.finalResults?.details?.abstainers.slice(0, aiAbstain) || []),
            ...(vote.userVote === 'ABSTAIN' ? [(typeof window !== 'undefined' ? localStorage.getItem('selectedCountry') : "") || "Indonesia"] : [])
          ];
        }

        return (
          <VotingMemberDetailsModal 
            type={detailModal.type}
            votingId={detailModal.votingId}
            proposer={vote.proposer}
            targetCountry={vote.targetCountry}
            countryList={currentList}
            onClose={() => setDetailModal(null)}
          />
        );
      })()}
    </div>
  );
}

