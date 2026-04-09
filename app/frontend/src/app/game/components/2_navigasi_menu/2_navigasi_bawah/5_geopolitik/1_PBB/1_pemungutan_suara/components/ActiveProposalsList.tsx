/**
 * Komponen untuk menampilkan daftar proposal aktif
 */

import { Clock, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { GlobalProposal } from '../utils/votingSystem';

interface ActiveProposalsListProps {
  proposals: GlobalProposal[];
  title: string;
  color: 'cyan' | 'orange' | 'red';
}

export function ActiveProposalsList({ proposals, title, color }: ActiveProposalsListProps) {
  if (proposals.length === 0) {
    return null;
  }

  const colorClasses = {
    cyan: {
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/5',
      text: 'text-cyan-400',
      badge: 'bg-cyan-500/20 border-cyan-500/30'
    },
    orange: {
      border: 'border-orange-500/30',
      bg: 'bg-orange-500/5',
      text: 'text-orange-400',
      badge: 'bg-orange-500/20 border-orange-500/30'
    },
    red: {
      border: 'border-red-500/30',
      bg: 'bg-red-500/5',
      text: 'text-red-400',
      badge: 'bg-red-500/20 border-red-500/30'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`rounded-2xl border ${colors.border} ${colors.bg} p-4 space-y-3`}>
      <div className="flex items-center justify-between">
        <h4 className={`text-xs font-black uppercase tracking-widest ${colors.text}`}>
          {title}
        </h4>
        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${colors.badge} ${colors.text}`}>
          {proposals.length} AKTIF
        </span>
      </div>

      <div className="space-y-2">
        {proposals.map((proposal) => (
          <div
            key={proposal.id}
            className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            {/* Proposal Name */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <h5 className="text-xs font-bold text-white line-clamp-1">
                {proposal.proposalName}
              </h5>
              <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${colors.badge} ${colors.text} shrink-0`}>
                {proposal.status.toUpperCase()}
              </span>
            </div>

            {/* Proposer & Target */}
            <div className="flex items-center gap-3 mb-2 text-[10px] text-zinc-400">
              <span>Pengaju: <span className="text-zinc-300">{proposal.proposerCountry}</span></span>
              {proposal.targetCountry && (
                <>
                  <span>→</span>
                  <span>Target: <span className="text-zinc-300">{proposal.targetCountry}</span></span>
                </>
              )}
            </div>

            {/* Timeline */}
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-3 w-3 text-zinc-500" />
              <span className="text-[10px] text-zinc-400">
                {proposal.daysRemaining} hari tersisa
              </span>
              <span className="text-[10px] text-zinc-500">
                ({proposal.duration})
              </span>
            </div>

            {/* Daily Progress Bar */}
            <div className="mb-3 space-y-1">
              <div className="flex items-center justify-between text-[8px] font-black uppercase tracking-tighter text-zinc-500">
                <span>Progress Voting</span>
                <span className={`text-${color}-400`}>{30 - proposal.daysRemaining}/30 Hari</span>
              </div>
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-${color === 'cyan' ? 'cyan' : color === 'orange' ? 'orange' : 'red'}-500 transition-all duration-500`}
                  style={{ width: `${((30 - proposal.daysRemaining) / 30) * 100}%` }}
                />
              </div>
            </div>

            {/* Votes */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-green-400" />
                <span className="text-[10px] font-bold text-green-400">
                  {proposal.votes.agree}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Minus className="h-3 w-3 text-zinc-400" />
                <span className="text-[10px] font-bold text-zinc-400">
                  {proposal.votes.abstain}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingDown className="h-3 w-3 text-red-400" />
                <span className="text-[10px] font-bold text-red-400">
                  {proposal.votes.disagree}
                </span>
              </div>
              <div className="ml-auto">
                <span className={`text-[10px] font-black ${
                  proposal.approvalPercentage >= 50 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {proposal.approvalPercentage.toFixed(0)}% Setuju
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
