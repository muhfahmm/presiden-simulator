import { FileText, AlertTriangle, Ban } from "lucide-react";
import { ActiveRancanganResolusiBox } from "../1_rancangan_resolusi/ActiveRancanganResolusiBox";
import { ActiveSanksiBox } from "../2_sanksi/ActiveSanksiBox";
import { ActiveEmbargoBox } from "../3_embargo/ActiveEmbargoBox";
import { ActiveProposalsList } from "./ActiveProposalsList";
import { GlobalVotingState } from "../utils/votingSystem";

interface ActiveResolutionGridProps {
  selectedItem: { category: string; name: string; description: string; effect: string } | null;
  votingState?: GlobalVotingState;
}

export function ActiveResolutionGrid({ selectedItem, votingState }: ActiveResolutionGridProps) {
  const isRancangan = selectedItem?.category === "Rancangan Resolusi";
  const isSanksi = selectedItem?.category === "Sanksi";
  const isEmbargo = selectedItem?.category === "Embargo";

  // Get active proposals from voting state
  const activeProposals = votingState?.activeProposals || [];
  const resolutionProposals = activeProposals.filter(p => p.type === 'resolution');
  const sanctionProposals = activeProposals.filter(p => p.type === 'sanction');
  const embargoProposals = activeProposals.filter(p => p.type === 'embargo');

  return (
    <>
      {/* Status Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0 mb-6">
        {/* Rancangan Resolusi Box */}
        <ActiveRancanganResolusiBox
          isActive={isRancangan}
          itemName={isRancangan ? selectedItem?.name : null}
        />

        {/* Sanksi Box */}
        <ActiveSanksiBox
          isActive={isSanksi}
          itemName={isSanksi ? selectedItem?.name : null}
        />

        {/* Embargo Box */}
        <ActiveEmbargoBox
          isActive={isEmbargo}
          itemName={isEmbargo ? selectedItem?.name : null}
        />
      </div>

      {/* Active Proposals Lists */}
      {votingState && (resolutionProposals.length > 0 || sanctionProposals.length > 0 || embargoProposals.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Resolution Proposals */}
          {resolutionProposals.length > 0 && (
            <ActiveProposalsList
              proposals={resolutionProposals}
              title="Resolusi Aktif"
              color="cyan"
            />
          )}

          {/* Sanction Proposals */}
          {sanctionProposals.length > 0 && (
            <ActiveProposalsList
              proposals={sanctionProposals}
              title="Sanksi Aktif"
              color="orange"
            />
          )}

          {/* Embargo Proposals */}
          {embargoProposals.length > 0 && (
            <ActiveProposalsList
              proposals={embargoProposals}
              title="Embargo Aktif"
              color="red"
            />
          )}
        </div>
      )}
    </>
  );
}
