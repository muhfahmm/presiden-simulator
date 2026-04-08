import { FileText, AlertTriangle, Ban } from "lucide-react";
import { ActiveRancanganResolusiBox } from "../1_rancangan_resolusi/ActiveRancanganResolusiBox";
import { ActiveSanksiBox } from "../2_sanksi/ActiveSanksiBox";
import { ActiveEmbargoBox } from "../3_embargo/ActiveEmbargoBox";

interface ActiveResolutionGridProps {
  selectedItem: { category: string; name: string; description: string; effect: string } | null;
}

export function ActiveResolutionGrid({ selectedItem }: ActiveResolutionGridProps) {
  const isRancangan = selectedItem?.category === "Rancangan Resolusi";
  const isSanksi = selectedItem?.category === "Sanksi";
  const isEmbargo = selectedItem?.category === "Embargo";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
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
  );
}
