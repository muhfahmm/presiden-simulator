import { AlertTriangle, Globe, ThumbsUp, ThumbsDown } from "lucide-react";
import { VoteEstimation } from "../utils/voteEstimation";

interface VoteVisualizationProps {
  selectedCountry: any;
  estimation: VoteEstimation;
  isUNSCMember: boolean;
  onSubmit: () => void;
}

export function VoteVisualization({ selectedCountry, estimation, isUNSCMember, onSubmit }: VoteVisualizationProps) {
  return (
    <div className="lg:col-span-5">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10 flex flex-col gap-10 h-full shadow-2xl relative overflow-hidden transition-all hover:border-rose-500/10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[60px] rounded-full" />
        
        <div className="relative">
          <h4 className="text-[11px] font-black text-cyan-400 uppercase tracking-widest mb-10 flex items-center gap-3">
            <div className="h-1 w-6 bg-cyan-400 rounded-full" />
            Proyeksi Suara Realtime
          </h4>
          
          {!selectedCountry ? (
            <div className="py-24 flex flex-col items-center justify-center text-center opacity-30 grayscale transition-all">
              <div className="p-6 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
                <Globe className="h-12 w-12 text-zinc-500 animate-pulse" />
              </div>
              <p className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400 leading-relaxed">
                Tentukan Negara Target<br/>Untuk Inisiasi Perhitungan
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-10 animate-in fade-in zoom-in-95 duration-500">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Total Populasi PBB</span>
                  <span className="text-xl font-black text-white tracking-tighter">207 <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest ml-1">Voters</span></span>
                </div>
                
                <div className="flex flex-col gap-6 bg-zinc-900/60 border border-zinc-800/50 p-8 rounded-[32px] shadow-inner">
                  {/* Mendukung */}
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-emerald-400">
                      <span className="flex items-center gap-2"><ThumbsUp className="h-3.5 w-3.5" /> Mendukung</span>
                      <span className="text-white text-base">{estimation.agree}</span>
                    </div>
                    <div className="h-2.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-[1.5s] ease-out-expo shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        style={{ width: `${(estimation.agree / 207) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Absen */}
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-400">
                      <span className="flex items-center gap-2 underline underline-offset-4 decoration-zinc-700">Absen (Abstain)</span>
                      <span className="text-white text-base">{estimation.abstain}</span>
                    </div>
                    <div className="h-2.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                      <div 
                        className="h-full bg-zinc-700 transition-all duration-[1.5s] ease-out-expo"
                        style={{ width: `${(estimation.abstain / 207) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Menolak */}
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-rose-400">
                      <span className="flex items-center gap-2"><ThumbsDown className="h-3.5 w-3.5" /> Menolak</span>
                      <span className="text-white text-base">{estimation.disagree}</span>
                    </div>
                    <div className="h-2.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                      <div 
                        className="h-full bg-gradient-to-r from-rose-600 to-rose-400 transition-all duration-[1.5s] ease-out-expo shadow-[0_0_15px_rgba(244,63,94,0.3)]"
                        style={{ width: `${(estimation.disagree / 207) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex gap-4">
                <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                <p className="text-[10px] text-zinc-400 font-bold leading-relaxed uppercase tracking-tight">Kesepakatan bilateral dan stabilitas ekonomi region akan mempengaruhi hasil akhir voting.</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-4">
          {!isUNSCMember && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex gap-3 mb-2">
              <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0" />
              <p className="text-[10px] text-rose-400 font-bold leading-relaxed uppercase tracking-tight">
                Hanya Anggota Dewan Keamanan yang diizinkan mengajukan draf resolusi strategis ke Majelis Umum.
              </p>
            </div>
          )}
          <button 
            disabled={!selectedCountry || !isUNSCMember}
            onClick={onSubmit}
            className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center gap-3 group relative overflow-hidden ${
              (selectedCountry && isUNSCMember)
                ? "bg-rose-600 border border-rose-500 text-white hover:bg-rose-500 shadow-rose-600/30 cursor-pointer" 
                : "bg-zinc-800 text-zinc-600 border-zinc-900 cursor-not-allowed grayscale opacity-50"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            Ajukan Resolusi Ke PBB
          </button>
        </div>
      </div>
    </div>
  );
}
