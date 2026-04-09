import { ActiveRancanganResolusiBox } from "../1_rancangan_resolusi/ActiveRancanganResolusiBox";
import { ActiveSanksiBox } from "../2_sanksi/ActiveSanksiBox";
import { ActiveEmbargoBox } from "../3_embargo/ActiveEmbargoBox";
import { GlobalVotingState } from "../utils/votingSystem";

interface VotingProgressGridProps {
  votingState: GlobalVotingState;
  selectedItem?: { category: string; name: string } | null;
}

export function VotingProgressGrid({ votingState, selectedItem }: VotingProgressGridProps) {
  const isRancangan = selectedItem?.category === "Rancangan Resolusi";
  const isSanksi = selectedItem?.category === "Sanksi";
  const isEmbargo = selectedItem?.category === "Embargo";

  // Filter ONLY proposals in voting status
  const votingProposals = votingState.activeProposals || [];
  const resolutionProposals = votingProposals.filter(p => p.type === 'resolution');
  const sanctionProposals = votingProposals.filter(p => p.type === 'sanction');
  const embargoProposals = votingProposals.filter(p => p.type === 'embargo');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
      {/* Rancangan Resolusi Voting */}
      <ActiveRancanganResolusiBox
        isActive={isRancangan}
        proposals={resolutionProposals}
      />

      {/* Sanksi Voting */}
      <ActiveSanksiBox
        isActive={isSanksi}
        proposals={sanctionProposals}
      />

      {/* Embargo Voting */}
      <ActiveEmbargoBox
        isActive={isEmbargo}
        proposals={embargoProposals}
      />
    </div>
  );
}
