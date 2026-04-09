/**
 * Component untuk menampilkan daftar proposal dari negara AI
 */

import { Globe, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { GlobalProposal } from '../utils/votingSystem';

interface AIProposalsListProps {
  proposals: GlobalProposal[];
  onProposalClick?: (proposal: GlobalProposal) => void;
}

export function AIProposalsList({ proposals, onProposalClick }: AIProposalsListProps) {
  if (proposals.length === 0) {
    return (
      <div className="text-center py-8 text-zinc-400">
        <Globe className="h-8 w-8 mx-auto mb-2 opacity-50" />
        <p className="text-sm">Belum ada proposal dari negara AI</p>
      </div>
    );
  }

  // Sort by priority (highest first) and status
  const sorted = [...proposals].sort((a, b) => {
    const aPriority = (a as any).aiPriority || 5;
    const bPriority = (b as any).aiPriority || 5;
    return bPriority - aPriority;
  });

  return (
    <div className="space-y-3">
      {sorted.map((proposal) => (
        <AIProposalCard
          key={proposal.id}
          proposal={proposal}
          onClick={() => onProposalClick?.(proposal)}
        />
      ))}
    </div>
  );
}

interface AIProposalCardProps {
  proposal: GlobalProposal;
  onClick?: () => void;
}

function AIProposalCard({ proposal, onClick }: AIProposalCardProps) {
  const aiData = proposal as any;
  const priority = aiData.aiPriority || 5;
  const confidence = aiData.aiConfidence || 0.5;
  const reasoning = aiData.aiReasoning || '';

  // Determine icon based on type
  const getTypeIcon = () => {
    switch (proposal.type) {
      case 'resolution':
        return '📋';
      case 'sanction':
        return '⚠️';
      case 'embargo':
        return '🚫';
      default:
        return '📄';
    }
  };

  // Determine status color
  const getStatusColor = () => {
    switch (proposal.status) {
      case 'voting':
        return 'border-blue-500/30 bg-blue-500/5';
      case 'approved':
        return 'border-green-500/30 bg-green-500/5';
      case 'rejected':
        return 'border-red-500/30 bg-red-500/5';
      default:
        return 'border-zinc-700 bg-zinc-800/30';
    }
  };

  // Calculate vote percentage
  const totalVotes = proposal.votes.agree + proposal.votes.disagree + proposal.votes.abstain;
  const agreePercentage = totalVotes > 0 ? (proposal.votes.agree / totalVotes) * 100 : 0;

  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg border cursor-pointer transition-all hover:border-cyan-400/50 hover:bg-cyan-400/5 ${getStatusColor()}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-start gap-3 flex-1">
          <span className="text-2xl">{getTypeIcon()}</span>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-white truncate">{proposal.proposalName}</h4>
            <p className="text-xs text-zinc-400 mt-1">
              Diajukan oleh: <span className="text-cyan-400">{proposal.proposerCountry}</span>
              {proposal.targetCountry && (
                <>
                  {' '}
                  terhadap <span className="text-orange-400">{proposal.targetCountry}</span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Priority Badge */}
        <div className="flex items-center gap-1 ml-2">
          <TrendingUp className="h-4 w-4 text-yellow-400" />
          <span className="text-xs font-bold text-yellow-400">{priority}/10</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-zinc-300 mb-3 line-clamp-2">{proposal.description}</p>

      {/* Reasoning */}
      {reasoning && (
        <div className="mb-3 p-2 rounded bg-zinc-900/50 border border-zinc-700/50">
          <p className="text-xs text-zinc-400">
            <span className="text-zinc-500">Alasan:</span> {reasoning}
          </p>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {/* Confidence */}
        <div className="text-center">
          <p className="text-xs text-zinc-400">Confidence</p>
          <p className="text-sm font-bold text-cyan-400">{(confidence * 100).toFixed(0)}%</p>
        </div>

        {/* Agree */}
        <div className="text-center">
          <p className="text-xs text-zinc-400">Setuju</p>
          <p className="text-sm font-bold text-green-400">{proposal.votes.agree}</p>
        </div>

        {/* Abstain */}
        <div className="text-center">
          <p className="text-xs text-zinc-400">Abstain</p>
          <p className="text-sm font-bold text-yellow-400">{proposal.votes.abstain}</p>
        </div>

        {/* Disagree */}
        <div className="text-center">
          <p className="text-xs text-zinc-400">Tidak Setuju</p>
          <p className="text-sm font-bold text-red-400">{proposal.votes.disagree}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-zinc-400">Persetujuan</span>
          <span className="text-xs font-bold text-cyan-400">{agreePercentage.toFixed(1)}%</span>
        </div>
        <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"
            style={{ width: `${agreePercentage}%` }}
          />
        </div>
      </div>

      {/* Status & Duration */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          {proposal.status === 'voting' && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-500/20 text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              Voting
            </span>
          )}
          {proposal.status === 'approved' && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-300">
              <CheckCircle2 className="h-3 w-3" />
              Disetujui
            </span>
          )}
          {proposal.status === 'rejected' && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-red-500/20 text-red-300">
              <AlertCircle className="h-3 w-3" />
              Ditolak
            </span>
          )}
        </div>

        <span className="text-zinc-500">
          {proposal.daysRemaining > 0
            ? `${proposal.daysRemaining} hari tersisa`
            : 'Selesai'}
        </span>
      </div>
    </div>
  );
}
