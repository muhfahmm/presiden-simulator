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
    <div className={`flex items-start md:items-center gap-8 p-10 rounded-[40px] bg-zinc-950/60 border ${theme.border} ${theme.glow} backdrop-blur-xl group/header transition-all duration-700`}>
      <div className={`p-5 rounded-3xl ${theme.iconBg} border ${theme.border} ${theme.text} shadow-2xl shrink-0 animate-pulse-slow`}>
        <Gavel className="h-8 w-8" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-2">
          <h3 className={`text-[11px] font-black ${theme.text} uppercase tracking-[0.3em]`}>Konfigurasi Aktif</h3>
          <div className={`h-px w-16 ${theme.bg.replace('bg-', 'bg-')}`} style={{ background: 'currentColor', opacity: 0.2 }} />
          <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">{selectedItem.category}</span>
        </div>
        <p className="text-3xl font-black text-white uppercase tracking-tighter italic mb-2 drop-shadow-2xl">{selectedItem.name}</p>
        <p className="text-[12px] font-bold text-zinc-400 leading-relaxed italic uppercase tracking-tight opacity-80 max-w-3xl mb-6">
          {selectedItem.description}
        </p>
        <div className={`flex items-start gap-4 p-6 rounded-[28px] ${theme.bg} border ${theme.border} max-w-3xl animate-in slide-in-from-left duration-700 shadow-inner backdrop-blur-md`}>
          <div className={`mt-1 p-1 rounded-md ${theme.iconBg}`}>
            <AlertTriangle className={`h-4 w-4 ${theme.text}`} />
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-black ${theme.text} uppercase tracking-widest opacity-60 italic`}>Strategi & Dampak Sistemik</span>
            <p className="text-[13px] font-black text-white leading-relaxed uppercase tracking-wide">
              {selectedItem.effect}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
