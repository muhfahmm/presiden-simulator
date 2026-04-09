import { AlertTriangle } from "lucide-react";
import { Gavel } from "../utils/icons";

interface ActiveConfigHeaderProps {
  selectedItem: { category: string; name: string; description: string; effect: string } | null;
}

export function ActiveConfigHeader({ selectedItem }: ActiveConfigHeaderProps) {
  if (!selectedItem) return null;

  const getColorClasses = () => {
    if (selectedItem.category === "Rancangan Resolusi") return { text: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/5", glow: "shadow-cyan-500/20", iconBg: "bg-cyan-500/10" };
    if (selectedItem.category === "Sanksi") return { text: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/5", glow: "shadow-amber-500/20", iconBg: "bg-amber-500/10" };
    return { text: "text-rose-400", border: "border-rose-500/30", bg: "bg-rose-500/5", glow: "shadow-rose-500/20", iconBg: "bg-rose-500/10" };
  };
  
  const theme = getColorClasses();
  
  return (
    <div className={`w-full flex items-center gap-6 p-4 rounded-2xl bg-zinc-950/60 border ${theme.border} ${theme.glow} backdrop-blur-xl group/header transition-all duration-700 animate-in slide-in-from-top duration-500 shadow-inner`}>
      {/* Icon Section (Slimmer) */}
      <div className={`p-2.5 rounded-xl ${theme.iconBg} border ${theme.border} ${theme.text} shadow-lg shrink-0`}>
        <AlertTriangle className="h-5 w-5" />
      </div>

      {/* Content Section (Horizontal Layout) */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 flex-1 min-w-0">
        <div className="flex items-center gap-2 shrink-0">
          <span className={`text-[10px] font-black ${theme.text} uppercase tracking-widest italic whitespace-nowrap opacity-80`}>
            Strategi & Dampak Sistemik
          </span>
          <div className={`hidden md:block h-3 w-px ${theme.bg.replace('bg-', 'bg-')}`} style={{ background: 'currentColor', opacity: 0.2 }} />
        </div>
        
        <p className="text-[12px] font-black text-white leading-tight uppercase tracking-wide truncate md:whitespace-normal">
          {selectedItem.effect}
        </p>
      </div>

      {/* Category Indicator (Subtle) */}
      <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shrink-0">
        <span className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em]">{selectedItem.category}</span>
        <div className={`h-1 w-1 rounded-full ${theme.bg.replace('bg-', 'bg-')}`} style={{ background: 'currentColor' }} />
      </div>
    </div>
  );
}
