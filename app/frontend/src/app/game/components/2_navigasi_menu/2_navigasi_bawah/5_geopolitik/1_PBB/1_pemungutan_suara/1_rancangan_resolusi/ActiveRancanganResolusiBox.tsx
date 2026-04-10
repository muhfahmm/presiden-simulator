import { FileText, Globe } from "lucide-react";

interface ActiveRancanganResolusiBoxProps {
  isActive: boolean;
  proposals?: any[];
  mode?: 'voting' | 'active';
}

export function ActiveRancanganResolusiBox({ isActive, mode = 'voting' }: ActiveRancanganResolusiBoxProps) {
  return (
    <div className={`rounded-3xl border overflow-hidden transition-all duration-500 ${
      isActive
        ? "border-cyan-500/50 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
        : "border-cyan-500/20 bg-cyan-500/5 shadow-none opacity-60"
    }`}>
      {/* Header */}
      <div className={`flex items-center gap-3 px-6 py-4 border-b ${
        isActive ? "border-cyan-500/30" : "border-cyan-500/20"
      }`}>
        <div className={`p-2 rounded-xl transition-all ${
          isActive
            ? "bg-cyan-500/30 border border-cyan-500/50"
            : "bg-cyan-500/10 border border-cyan-500/20"
        }`}>
          <FileText className={`h-4 w-4 ${isActive ? "text-cyan-400" : "text-cyan-600"}`} />
        </div>
        <div className="flex flex-col">
          <h3 className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
            isActive ? "text-cyan-400" : "text-cyan-600"
          }`}>
            Resolusi {mode === 'active' ? 'Aktif' : ''}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 min-h-[140px] max-h-[300px] items-center justify-center opacity-40">
        <FileText className="h-8 w-8 text-cyan-600/30" />
        <p className="text-[10px] font-bold text-cyan-600/60 uppercase tracking-widest italic text-center px-4">
          {mode === 'active' ? 'Belum ada resolusi yang disetujui' : 'Tidak ada pemungutan suara resolusi aktif'}
        </p>
      </div>
    </div>
  );
}
