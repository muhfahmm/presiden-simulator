import { Ban } from "lucide-react";

interface ActiveEmbargoBoxProps {
  isActive: boolean;
  proposals?: any[];
  mode?: 'voting' | 'active';
}

export function ActiveEmbargoBox({ isActive, mode = 'voting' }: ActiveEmbargoBoxProps) {
  return (
    <div className={`rounded-3xl border overflow-hidden transition-all duration-500 ${
      isActive
        ? "border-rose-500/50 bg-rose-500/10 shadow-lg shadow-rose-500/20"
        : "border-rose-500/20 bg-rose-500/5 shadow-none opacity-60"
    }`}>
      {/* Header */}
      <div className={`flex items-center gap-3 px-6 py-4 border-b ${
        isActive ? "border-rose-500/30" : "border-rose-500/20"
      }`}>
        <div className={`p-2 rounded-xl transition-all ${
          isActive
            ? "bg-rose-500/30 border border-rose-500/50"
            : "bg-rose-500/10 border border-rose-500/20"
        }`}>
          <Ban className={`h-4 w-4 ${isActive ? "text-rose-400" : "text-rose-600"}`} />
        </div>
        <div className="flex flex-col">
          <h3 className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
            isActive ? "text-rose-400" : "text-rose-600"
          }`}>
            Embargo {mode === 'active' ? 'Aktif' : ''}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 min-h-[140px] max-h-[300px] items-center justify-center opacity-40">
        <Ban className="h-8 w-8 text-rose-600/30" />
        <p className="text-[10px] font-bold text-rose-600/60 uppercase tracking-widest italic text-center px-4">
          {mode === 'active' ? 'Belum ada embargo yang disetujui' : 'Tidak ada pemungutan suara embargo aktif'}
        </p>
      </div>
    </div>
  );
}
