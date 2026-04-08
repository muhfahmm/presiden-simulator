import { AlertTriangle, CheckCircle2 } from "lucide-react";

interface ActiveSanksiBoxProps {
  isActive: boolean;
  itemName: string | null;
}

export function ActiveSanksiBox({ isActive, itemName }: ActiveSanksiBoxProps) {
  return (
    <div className={`rounded-3xl border overflow-hidden transition-all duration-500 ${
      isActive
        ? "border-amber-500/50 bg-amber-500/10 shadow-lg shadow-amber-500/20"
        : "border-amber-500/20 bg-amber-500/5 shadow-none"
    }`}>
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-amber-500/20">
        <div className={`p-2 rounded-xl transition-all ${
          isActive
            ? "bg-amber-500/20 border border-amber-500/50"
            : "bg-amber-500/10 border border-amber-500/30"
        }`}>
          <AlertTriangle className={`h-4 w-4 ${isActive ? "text-amber-400" : "text-amber-600"}`} />
        </div>
        <h3 className={`text-xs font-black uppercase tracking-widest transition-colors ${
          isActive ? "text-amber-400" : "text-amber-600"
        }`}>
          Sanksi
        </h3>
        {isActive && (
          <div className="ml-auto">
            <CheckCircle2 className="h-4 w-4 text-amber-400 animate-pulse" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 min-h-[120px]">
        {isActive && itemName ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <p className="text-sm font-bold text-amber-300 uppercase tracking-tight leading-relaxed">
                {itemName}
              </p>
            </div>
            <div className="text-[11px] text-amber-400/70 italic">
              Status: AKTIF - Dapat Diterapkan Segera
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xs text-amber-600/60 italic">Tidak ada sanksi aktif</p>
          </div>
        )}
      </div>
    </div>
  );
}
