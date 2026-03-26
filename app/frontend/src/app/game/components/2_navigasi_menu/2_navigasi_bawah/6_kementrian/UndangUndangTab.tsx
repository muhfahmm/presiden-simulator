import { Scale, FileText, ShieldCheck, Zap, Heart, Briefcase, ChevronRight } from "lucide-react";
import { MOCK_LAWS, Law } from "./database_uu";

export default function UndangUndangTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-16">
      <div className="flex items-center justify-between px-4">
        <div>
          <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Legislasi & Regulasi Nasional</h3>
          <p className="text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] mt-2">Ketatanegaraan • Dashboard Pengesahan Undang-Undang</p>
        </div>
        <div className="flex gap-6 mb-3">
          <StatBox label="Total UU" value={MOCK_LAWS.length} color="text-purple-400" />
          <StatBox label="Rancangan" value={MOCK_LAWS.filter(l => l.status === "Rancangan").length} color="text-amber-400" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {MOCK_LAWS.map((law) => (
          <div 
            key={law.id}
            className="bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-2xl hover:border-purple-500/40 transition-all group relative overflow-hidden flex flex-col justify-between min-h-[340px] shadow-lg"
          >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-current opacity-[0.03] -mr-16 -mt-16 rounded-full blur-3xl transition-opacity group-hover:opacity-[0.07] ${law.color.replace('text-', 'bg-')}`} />
            
            <div className="relative z-10 flex justify-between items-start mb-3">
              <div className={`p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:scale-110 transition-transform duration-500 ${law.color}`}>
                <law.icon className="h-5 w-5" />
              </div>
              <div className={`px-2 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                law.status === "Aktif" 
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
                  : law.status === "Rancangan"
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                    : "bg-zinc-800 border-zinc-700 text-zinc-500"
              }`}>
                {law.status}
              </div>
            </div>

            <div className="relative z-10 mb-3">
              <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1">{law.category}</p>
              <h4 className="text-sm font-black text-white leading-tight group-hover:text-purple-400 transition-colors uppercase italic mb-2 tracking-tight min-h-[2.5rem] flex items-center">
                {law.title}
              </h4>
              <p className="text-[11px] font-bold text-zinc-400 leading-relaxed italic line-clamp-2">
                "{law.description}"
              </p>
            </div>

            <div className="relative z-10 space-y-3">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-2">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Zap className="h-3 w-3" /> Plus
                  </p>
                  <p className="text-[10px] font-bold text-zinc-300 italic">{law.plus}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
                    <ShieldCheck className="h-3 w-3" /> Minus
                  </p>
                  <p className="text-[10px] font-bold text-zinc-400 italic">{law.minus}</p>
                </div>
              </div>
              
              <button 
                className="w-full py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all active:scale-95 flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <FileText className="h-3.5 w-3.5" />
                Naskah Akademik
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatBox({ label, value, color }: { label: string, value: number | string, color: string }) {
  return (
    <div className="px-6 py-3 bg-zinc-900/60 border border-zinc-800 rounded-[1.5rem] shadow-inner flex flex-col items-center">
      <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">{label}</p>
      <p className={`text-2xl font-black ${color} tracking-tighter`}>{value}</p>
    </div>
  );
}
