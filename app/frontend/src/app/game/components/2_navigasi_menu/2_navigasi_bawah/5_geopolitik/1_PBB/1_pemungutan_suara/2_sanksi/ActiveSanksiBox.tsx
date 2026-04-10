import { AlertTriangle } from "lucide-react";

interface ActiveSanksiBoxProps {
  isActive: boolean;
  proposals?: any[];
  mode?: 'voting' | 'active';
}

export function ActiveSanksiBox({ isActive, mode = 'voting' }: ActiveSanksiBoxProps) {
  return (
    <div className={`rounded-3xl border overflow-hidden transition-all duration-500 ${
      isActive
        ? "border-amber-500/50 bg-amber-500/10 shadow-lg shadow-amber-500/20"
        : "border-amber-500/20 bg-amber-500/5 shadow-none opacity-60"
    }`}>
      {/* Header */}
      <div className={`flex items-center gap-3 px-6 py-4 border-b ${
        isActive ? "border-amber-500/30" : "border-amber-500/20"
      }`}>
        <div className={`p-2 rounded-xl transition-all ${
          isActive
            ? "bg-amber-500/30 border border-amber-500/50"
            : "bg-amber-500/10 border border-amber-500/20"
        }`}>
          <AlertTriangle className={`h-4 w-4 ${isActive ? "text-amber-400" : "text-amber-600"}`} />
        </div>
        <div className="flex flex-col">
          <h3 className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
            isActive ? "text-amber-400" : "text-amber-600"
          }`}>
            Sanksi {mode === 'active' ? 'Aktif' : ''}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 min-h-[140px] max-h-[300px] items-center justify-center opacity-40">
        <AlertTriangle className="h-8 w-8 text-amber-600/30" />
        <p className="text-[10px] font-bold text-amber-600/60 uppercase tracking-widest italic text-center px-4">
          {mode === 'active' ? 'Belum ada sanksi yang disetujui' : 'Tidak ada pemungutan suara sanksi aktif'}
        </p>
      </div>
    </div>
  );
}
