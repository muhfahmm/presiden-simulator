import { CheckCircle2, XCircle, Clock, Globe, Shield, Gavel } from "lucide-react";
import { GlobalProposal } from "../1_pemungutan_suara/utils/votingSystem";

interface HistoriItemProps {
  proposal: GlobalProposal;
}

export function HistoriItem({ proposal }: HistoriItemProps) {
  const getStatusInfo = (status: string, result?: string) => {
    if (status === 'approved' || result === 'approved') return { label: 'DISETUJUI', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', icon: CheckCircle2 };
    if (status === 'rejected' || result === 'rejected') return { label: 'DITOLAK', color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20', icon: XCircle };
    return { label: 'EXPIRED', color: 'text-zinc-400', bg: 'bg-zinc-500/10', border: 'border-zinc-500/20', icon: Clock };
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'resolution': return Globe;
      case 'sanction': return Shield;
      case 'embargo': return Gavel;
      default: return Globe;
    }
  };

  const status = getStatusInfo(proposal.status, proposal.result);
  const TypeIcon = getTypeIcon(proposal.type);
  const StatusIcon = status.icon;

  const totalVotes = proposal.votes.agree + proposal.votes.disagree + proposal.votes.abstain;

  return (
    <div className={`p-5 rounded-3xl border ${status.border} ${status.bg} transition-all hover:scale-[1.01] duration-300 group`}>
      <div className="flex items-center gap-6">
        {/* Type Icon */}
        <div className="p-3 bg-zinc-950/50 rounded-2xl border border-zinc-800 shadow-inner">
          <TypeIcon className="h-5 w-5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <h4 className="text-[13px] font-black text-white uppercase tracking-tight truncate">
              {proposal.proposalName}
            </h4>
            <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest ${status.bg} ${status.color} border ${status.border}`}>
              {status.label}
            </span>
          </div>
          
          <div className="flex items-center gap-4 mt-1">
            <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
              {proposal.proposerCountry} ➔ <span className="text-zinc-400">{proposal.targetCountry || "GLOBAL"}</span>
            </p>
            <div className="h-1 w-1 rounded-full bg-zinc-700" />
            <p className="text-[9px] text-zinc-500 font-bold uppercase">
              {proposal.type} • {proposal.duration}
            </p>
          </div>
        </div>

        {/* Voting Result Summary */}
        <div className="flex items-center gap-6 px-6 py-2 bg-zinc-950/40 rounded-2xl border border-zinc-800/50">
          <div className="text-center">
            <p className="text-[8px] text-zinc-500 font-black uppercase mb-0.5">Setuju</p>
            <p className="text-[11px] font-black text-emerald-400">{proposal.votes.agree}</p>
          </div>
          <div className="text-center">
            <p className="text-[8px] text-zinc-500 font-black uppercase mb-0.5">Tolak</p>
            <p className="text-[11px] font-black text-rose-400">{proposal.votes.disagree}</p>
          </div>
          <div className="text-center">
            <p className="text-[8px] text-zinc-500 font-black uppercase mb-0.5">Abstain</p>
            <p className="text-[11px] font-black text-zinc-400">{proposal.votes.abstain}</p>
          </div>
        </div>

        {/* Status Icon */}
        <div className={`p-2 rounded-xl bg-zinc-950/50 border ${status.border}`}>
          <StatusIcon className={`h-5 w-5 ${status.color}`} />
        </div>
      </div>
    </div>
  );
}
