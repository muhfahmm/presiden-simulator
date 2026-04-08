import { FileText, CheckCircle2 } from "lucide-react";

interface ActiveRancanganResolusiBoxProps {
  isActive: boolean;
  itemName: string | null;
}

export function ActiveRancanganResolusiBox({ isActive, itemName }: ActiveRancanganResolusiBoxProps) {
  return (
    <div className={`rounded-3xl border overflow-hidden transition-all duration-500 ${
      isActive
        ? "border-cyan-500/50 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
        : "border-cyan-500/20 bg-cyan-500/5 shadow-none"
    }`}>
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-cyan-500/20">
        <div className={`p-2 rounded-xl transition-all ${
          isActive
            ? "bg-cyan-500/20 border border-cyan-500/50"
            : "bg-cyan-500/10 border border-cyan-500/30"
        }`}>
          <FileText className={`h-4 w-4 ${isActive ? "text-cyan-400" : "text-cyan-600"}`} />
        </div>
        <h3 className={`text-xs font-black uppercase tracking-widest transition-colors ${
          isActive ? "text-cyan-400" : "text-cyan-600"
        }`}>
          Rancangan Resolusi
        </h3>
        {isActive && (
          <div className="ml-auto">
            <CheckCircle2 className="h-4 w-4 text-cyan-400 animate-pulse" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 min-h-[120px]">
        {isActive && itemName ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
              <p className="text-sm font-bold text-cyan-300 uppercase tracking-tight leading-relaxed">
                {itemName}
              </p>
            </div>
            <div className="text-[11px] text-cyan-400/70 italic">
              Status: AKTIF - Menunggu Voting 30 Hari
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xs text-cyan-600/60 italic">Tidak ada resolusi aktif</p>
          </div>
        )}
      </div>
    </div>
  );
}
