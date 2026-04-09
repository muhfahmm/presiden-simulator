import { Ban, CheckCircle2, Clock, Globe, Target, XCircle } from "lucide-react";
import { GlobalProposal } from "../utils/votingSystem";

interface ActiveEmbargoBoxProps {
  isActive: boolean;
  proposals: GlobalProposal[];
  mode?: 'voting' | 'active';
}

export function ActiveEmbargoBox({ isActive, proposals, mode = 'voting' }: ActiveEmbargoBoxProps) {
  return (
    <div className={`rounded-3xl border overflow-hidden transition-all duration-500 ${
      isActive
        ? "border-rose-500/50 bg-rose-500/10 shadow-lg shadow-rose-500/20"
        : proposals.length > 0
        ? "border-rose-500/30 bg-rose-500/5 shadow-none"
        : "border-rose-500/20 bg-rose-500/5 shadow-none opacity-60"
    }`}>
      {/* Header */}
      <div className={`flex items-center gap-3 px-6 py-4 border-b ${
        isActive ? "border-rose-500/30" : "border-rose-500/20"
      }`}>
        <div className={`p-2 rounded-xl transition-all ${
          isActive
            ? "bg-rose-500/30 border border-rose-500/50"
            : "bg-rose-500/10 border border-rose-500/20"
        }`}>
          <Ban className={`h-4 w-4 ${isActive ? "text-rose-400" : "text-rose-600"}`} />
        </div>
        <div className="flex flex-col">
          <h3 className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
            isActive ? "text-rose-400" : "text-rose-600"
          }`}>
            Embargo {mode === 'active' ? 'Aktif' : ''}
          </h3>
          {proposals.length > 0 && (
            <span className="text-[9px] font-bold text-rose-500/60 leading-none mt-0.5">
              {proposals.length} {mode === 'active' ? 'TERAPKAN' : 'AKTIF'}
            </span>
          )}
        </div>
        {isActive && (
          <div className="ml-auto">
            <CheckCircle2 className="h-4 w-4 text-rose-400 animate-pulse" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 min-h-[140px] max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-rose-500/20 scrollbar-track-transparent">
        {proposals.length > 0 ? (
          proposals.map((proposal) => (
            <div 
              key={proposal.id}
              className="p-4 rounded-2xl bg-zinc-900/60 border border-rose-500/10 hover:border-rose-500/30 transition-all space-y-3"
            >
              {/* Proposer to Target */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Globe className="h-3 w-3 text-rose-500/50 shrink-0" />
                    <span className="text-[10px] font-black text-white truncate">{proposal.proposerCountry}</span>
                  </div>
                  <Target className="h-3 w-3 text-rose-500/30 shrink-0" />
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-[10px] font-black text-rose-400 truncate">{proposal.targetCountry}</span>
                  </div>
                </div>
              </div>

              {/* Sub Item Info */}
              {proposal.subItem && (
                <div className="px-2 py-1 rounded-lg bg-rose-500/5 border border-rose-500/10">
                  <p className="text-[9px] font-bold text-rose-400/80 uppercase tracking-tight">
                    Item: {proposal.subItem}
                  </p>
                </div>
              )}

              {mode === 'voting' ? (
                <>
                  {/* Progress Bar Mini */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[8px] font-black uppercase tracking-tighter">
                      <span className="text-zinc-500">Voting Progress</span>
                      <span className="text-rose-400">{30 - proposal.daysRemaining}/30 Hari</span>
                    </div>
                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-rose-500 transition-all duration-1000"
                        style={{ width: `${((30 - proposal.daysRemaining) / 30) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Vote Counts Details */}
                  <div className="grid grid-cols-3 gap-2 py-1">
                    <div className="flex items-center gap-1.5 bg-zinc-900/40 rounded-lg p-1.5 border border-emerald-500/10">
                      <div className="p-1 rounded bg-emerald-500/10">
                        <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[7px] text-zinc-500 font-bold uppercase leading-none">Setuju</span>
                        <span className="text-[10px] text-emerald-400 font-black leading-tight">{proposal.votes.agree}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 bg-zinc-900/40 rounded-lg p-1.5 border border-zinc-500/10">
                      <div className="p-1 rounded bg-zinc-500/10">
                        <div className="h-2.5 w-2.5 rounded-full border border-zinc-500 flex items-center justify-center">
                          <div className="h-0.5 w-1.5 bg-zinc-500" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[7px] text-zinc-500 font-bold uppercase leading-none">Abstain</span>
                        <span className="text-[10px] text-zinc-400 font-black leading-tight">{proposal.votes.abstain}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 bg-zinc-900/40 rounded-lg p-1.5 border border-rose-500/10">
                      <div className="p-1 rounded bg-rose-500/10">
                        <XCircle className="h-2.5 w-2.5 text-rose-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[7px] text-zinc-500 font-bold uppercase leading-none">Tolak</span>
                        <span className="text-[10px] text-rose-400 font-black leading-tight">{proposal.votes.disagree}</span>
                      </div>
                    </div>
                  </div>

                  {/* Countdown Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-rose-500/5">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3 text-rose-400" />
                      <span className="text-[10px] font-bold text-rose-400">
                        {proposal.daysRemaining} Hari Tersisa
                      </span>
                    </div>
                    <span className="text-[9px] font-black text-zinc-600 bg-zinc-800/50 px-2 py-0.5 rounded-full border border-zinc-700/50">
                      {proposal.duration}
                    </span>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-between pt-2 border-t border-rose-500/10">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">AKTIF</span>
                  </div>
                  <span className="text-[9px] font-bold text-zinc-500">
                    Durasi: {proposal.duration}
                    {proposal.implementationDaysRemaining !== undefined && (
                      <span className="text-rose-400 ml-1">({proposal.implementationDaysRemaining} Hari)</span>
                    )}
                  </span>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-2 opacity-40 py-4">
            <Ban className="h-8 w-8 text-rose-600/30" />
            <p className="text-[10px] font-bold text-rose-600/60 uppercase tracking-widest italic text-center px-4">
              {mode === 'active' ? 'Belum ada embargo yang disetujui' : 'Tidak ada pemungutan suara embargo aktif'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
