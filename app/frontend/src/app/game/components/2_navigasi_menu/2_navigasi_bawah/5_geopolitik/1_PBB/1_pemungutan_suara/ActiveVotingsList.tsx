
"use client"

import { Clock, Globe, Loader2 } from "lucide-react";
import { ActiveVoting } from "./logika_pemungutan_suara/unVotingStorage";

interface ActiveVotingsListProps {
  votings: ActiveVoting[];
}

export function ActiveVotingsList({ votings }: ActiveVotingsListProps) {
  if (votings.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em]">Sidang PBB Sedang Berlangsung</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {votings.map((vote) => (
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
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-cyan-400">{Math.floor(vote.progress)}%</span>
                <span className="text-[7px] font-bold text-zinc-600 uppercase tracking-tighter">Progres Sidang</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {(() => {
                // Fallback jika finalResults belum ada (sidang lama)
                let res = vote.finalResults;
                if (!res) {
                   try {
                     const { simulateUNVote } = require("./logika_pemungutan_suara/votingLogic");
                     const userCountry = (typeof window !== 'undefined' ? localStorage.getItem('selected_country') : "") || "Indonesia";
                     res = simulateUNVote(vote.targetCountry, userCountry, vote.category);
                   } catch (e) {
                     res = { yes: 0, no: 0, abstain: 0 };
                   }
                }
                
                // Pastikan res tidak null sebelum akses properti
                const safeRes = res || { yes: 0, no: 0, abstain: 0 };
                const yes = Math.floor(safeRes.yes * (vote.progress / 100));
                const no = Math.floor(safeRes.no * (vote.progress / 100));
                const abstain = 207 - (yes + no);

                return (
                  <>
                    <div className="p-2 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center">
                      <p className="text-[7px] font-black text-emerald-500 uppercase tracking-tighter mb-0.5">Setuju</p>
                      <p className="text-xs font-black text-white">{yes}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-rose-500/5 border border-rose-500/10 text-center">
                      <p className="text-[7px] font-black text-rose-500 uppercase tracking-tighter mb-0.5">Tolak</p>
                      <p className="text-xs font-black text-white">{no}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-zinc-500/5 border border-zinc-500/10 text-center">
                      <p className="text-[7px] font-black text-zinc-400 uppercase tracking-tighter mb-0.5">Abstain</p>
                      <p className="text-xs font-black text-white">{abstain}</p>
                    </div>
                  </>
                );
              })()}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="flex flex-col gap-1">
                <span className="text-[7px] font-black text-zinc-600 uppercase tracking-widest">Negara Target</span>
                <div className="flex items-center gap-2">
                   <Globe className="h-3 w-3 text-zinc-500" />
                   <span className="text-[10px] font-black text-zinc-300 uppercase">{vote.targetCountry}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[7px] font-black text-zinc-600 uppercase tracking-widest">Durasi Usulan</span>
                <div className="flex items-center gap-2">
                   <Clock className="h-3 w-3 text-zinc-500" />
                   <span className="text-[10px] font-black text-zinc-300 uppercase">{vote.durationLabel}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
