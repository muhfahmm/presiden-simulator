import { Ban, CheckCircle2 } from "lucide-react";

interface ActiveEmbargoBoxProps {
  isActive: boolean;
  itemName: string | null;
}

export function ActiveEmbargoBox({ isActive, itemName }: ActiveEmbargoBoxProps) {
  return (
    <div className={`rounded-3xl border overflow-hidden transition-all duration-500 ${
      isActive
        ? "border-rose-500/50 bg-rose-500/10 shadow-lg shadow-rose-500/20"
        : "border-rose-500/20 bg-rose-500/5 shadow-none"
    }`}>
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-rose-500/20">
        <div className={`p-2 rounded-xl transition-all ${
          isActive
            ? "bg-rose-500/20 border border-rose-500/50"
            : "bg-rose-500/10 border border-rose-500/30"
        }`}>
          <Ban className={`h-4 w-4 ${isActive ? "text-rose-400" : "text-rose-600"}`} />
        </div>
        <h3 className={`text-xs font-black uppercase tracking-widest transition-colors ${
          isActive ? "text-rose-400" : "text-rose-600"
        }`}>
          Embargo
        </h3>
        {isActive && (
          <div className="ml-auto">
            <CheckCircle2 className="h-4 w-4 text-rose-400 animate-pulse" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 min-h-[120px]">
        {isActive && itemName ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
              <p className="text-sm font-bold text-rose-300 uppercase tracking-tight leading-relaxed">
                {itemName}
              </p>
            </div>
            <div className="text-[11px] text-rose-400/70 italic">
              Status: AKTIF - Dapat Diterapkan Segera
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xs text-rose-600/60 italic">Tidak ada embargo aktif</p>
          </div>
        )}
      </div>
    </div>
  );
}
