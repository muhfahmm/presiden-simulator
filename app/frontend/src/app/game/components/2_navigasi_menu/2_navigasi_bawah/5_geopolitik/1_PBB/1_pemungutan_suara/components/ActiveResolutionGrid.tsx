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

  // Filter ONLY implemented proposals (approved results)
  const implemented = votingState?.implementedProposals || [];
  const resolutionProposals = implemented.filter(p => p.type === 'resolution');
  const sanctionProposals = implemented.filter(p => p.type === 'sanction');
  const embargoProposals = implemented.filter(p => p.type === 'embargo');

  return (
    <>
      {/* Status Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0 mb-6">
        {/* Rancangan Resolusi Box */}
        <ActiveRancanganResolusiBox
          isActive={isRancangan}
          proposals={resolutionProposals}
          mode="active"
        />

        {/* Sanksi Box */}
        <ActiveSanksiBox
          isActive={isSanksi}
          proposals={sanctionProposals}
          mode="active"
        />

        {/* Embargo Box */}
        <ActiveEmbargoBox
          isActive={isEmbargo}
          proposals={embargoProposals}
          mode="active"
        />
      </div>
    </>
  );
}
