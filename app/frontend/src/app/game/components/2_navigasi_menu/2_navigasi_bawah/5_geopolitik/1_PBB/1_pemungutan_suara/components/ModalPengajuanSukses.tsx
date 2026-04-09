/**
 * Modal Pengajuan Sukses - Menampilkan konfirmasi setelah resolusi diajukan
 */

import { CheckCircle, Clock, Globe, Target, Calendar, TrendingUp, X, FileText } from 'lucide-react';
import { GlobalProposal } from '../utils/votingSystem';

interface ModalPengajuanSuksesProps {
  isOpen: boolean;
  onClose: () => void;
  proposal: GlobalProposal | null;
  onViewStatus: () => void;
}

export function ModalPengajuanSukses({
  isOpen,
  onClose,
  proposal,
  onViewStatus
}: ModalPengajuanSuksesProps) {
  
  if (!isOpen || !proposal) return null;

  const getProposalTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'resolution': 'Rancangan Resolusi',
      'sanction': 'Sanksi',
      'embargo': 'Embargo'
    };
    return labels[type] || type;
  };

  const getProposalTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'resolution': 'cyan',
      'sanction': 'orange',
      'embargo': 'red'
    };
    return colors[type] || 'cyan';
  };

  const color = getProposalTypeColor(proposal.type);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Header with Success Animation */}
        <div className={`relative px-8 py-6 border-b border-zinc-800 bg-gradient-to-r from-${color}-500/10 to-transparent`}>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-800/50 hover:bg-zinc-700 transition-colors"
          >
            <X className="h-4 w-4 text-zinc-400" />
          </button>

          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-2xl bg-${color}-500/20 border border-${color}-500/30 animate-pulse`}>
              <CheckCircle className={`h-8 w-8 text-${color}-400`} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-1">
                Resolusi Berhasil Diajukan!
              </h2>
              <p className="text-sm text-zinc-400">
                Proposal Anda telah masuk ke sistem pemungutan suara PBB
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Proposal Info Card */}
          <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700 space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-zinc-700">
              <FileText className={`h-5 w-5 text-${color}-400`} />
              <h3 className="text-sm font-black uppercase tracking-widest text-zinc-300">
                Detail Proposal
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Type */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full bg-${color}-400`} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    Tipe
                  </span>
                </div>
                <p className={`text-sm font-bold text-${color}-400`}>
                  {getProposalTypeLabel(proposal.type)}
                </p>
              </div>

              {/* Proposal Name */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full bg-${color}-400`} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    Nama Proposal
                  </span>
                </div>
                <p className="text-sm font-bold text-white">
                  {proposal.proposalName}
                </p>
              </div>

              {/* Proposer */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="h-3 w-3 text-zinc-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    Pengaju
                  </span>
                </div>
                <p className="text-sm font-bold text-white">
                  {proposal.proposerCountry}
                </p>
              </div>

              {/* Target */}
              {proposal.targetCountry && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-3 w-3 text-zinc-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                      Target
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    {proposal.targetCountry}
                  </p>
                </div>
              )}

              {/* Duration */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3 text-zinc-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    Durasi
                  </span>
                </div>
                <p className="text-sm font-bold text-white">
                  {proposal.duration}
                </p>
              </div>

              {/* Sub Item (for embargo) */}
              {proposal.subItem && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full bg-${color}-400`} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                      Item
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    {proposal.subItem}
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="pt-4 border-t border-zinc-700">
              <p className="text-xs text-zinc-400 leading-relaxed">
                {proposal.description}
              </p>
            </div>
          </div>

          {/* Voting Timeline */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-blue-400" />
              <h3 className="text-sm font-black uppercase tracking-widest text-blue-400">
                Timeline Pemungutan Suara
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400">Waktu Voting</span>
                <span className="text-sm font-bold text-white">30 Hari</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400">Hari Tersisa</span>
                <span className="text-sm font-bold text-blue-400">{proposal.daysRemaining} Hari</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400">Status</span>
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                  Voting
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 pt-4 border-t border-blue-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  Progress
                </span>
                <span className="text-xs font-bold text-blue-400">
                  {30 - proposal.daysRemaining} / 30 Hari
                </span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                  style={{ width: `${((30 - proposal.daysRemaining) / 30) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Current Votes Status */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-green-400">
                  Setuju
                </span>
              </div>
              <p className="text-2xl font-black text-green-400">{proposal.votes.agree}</p>
              <p className="text-[10px] text-green-300/70 mt-1">
                {proposal.approvalPercentage.toFixed(1)}%
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-500/10 border border-zinc-500/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-4 w-4 flex items-center justify-center">
                  <div className="h-0.5 w-3 bg-zinc-400 rounded-full" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Abstain
                </span>
              </div>
              <p className="text-2xl font-black text-zinc-400">{proposal.votes.abstain}</p>
              <p className="text-[10px] text-zinc-300/70 mt-1">
                {proposal.abstainPercentage.toFixed(1)}%
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30">
              <div className="flex items-center gap-2 mb-2">
                <X className="h-4 w-4 text-red-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-red-400">
                  Tolak
                </span>
              </div>
              <p className="text-2xl font-black text-red-400">{proposal.votes.disagree}</p>
              <p className="text-[10px] text-red-300/70 mt-1">
                {proposal.rejectionPercentage.toFixed(1)}%
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30">
            <div className="flex gap-3">
              <div className="shrink-0">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <Globe className="h-4 w-4 text-blue-400" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-blue-400">
                  Proposal Anda Sedang Diproses
                </p>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Negara-negara anggota PBB akan memberikan suara mereka dalam 30 hari ke depan. 
                  Anda dapat memantau progress voting di Status Resolusi Aktif.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-8 py-6 border-t border-zinc-800 bg-zinc-900/50 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm transition-colors"
          >
            Tutup
          </button>
          <button
            onClick={() => {
              onViewStatus();
              onClose();
            }}
            className={`flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-${color}-600 to-${color}-500 hover:from-${color}-500 hover:to-${color}-400 text-white font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-${color}-500/20`}
          >
            Lihat Status Resolusi
          </button>
        </div>
      </div>
    </div>
  );
}
