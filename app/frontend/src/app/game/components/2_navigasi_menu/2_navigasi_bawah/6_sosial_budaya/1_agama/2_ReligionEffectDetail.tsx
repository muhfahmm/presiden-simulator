"use client"

import { X, Info, Trophy, Store, Clapperboard, CheckCircle2, ChevronRight } from "lucide-react"
import { ISLAM_COMMERCIAL_BONUS, ISLAM_SECTOR_DATA } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/1_islam/1_plus/plus";

interface ReligionEffectDetailProps {
  effectName: string;
  onClose: () => void;
}

export function ReligionEffectDetail({ effectName, onClose }: ReligionEffectDetailProps) {
  const isCommercialEffect = effectName.toLowerCase().includes("pendapatan sektor komersial");

  return (
    <div className="absolute inset-0 z-30 bg-zinc-950/95 flex flex-col p-4 animate-in zoom-in-95 duration-200">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-[9px] font-black text-amber-500 uppercase tracking-widest italic leading-none">{effectName}</h4>
        <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
          <X className="h-3.5 w-3.5 text-zinc-500 hover:text-white" />
        </button>
      </div>

      <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar pb-4">
        {isCommercialEffect ? (
          <div className="space-y-6">
            {/* 5. Olahraga */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <Trophy className="h-3 w-3 text-orange-500" />
                </div>
                <h6 className="text-[10px] font-black text-white uppercase tracking-wider">5. Sektor Olahraga & Rekreasi (7 jenis) <span className="text-cyan-400 ml-1 font-black lowercase italic text-[9px] bg-cyan-500/10 px-1.5 py-0.5 rounded-full border border-cyan-500/20">(7 Jenis)</span></h6>
              </div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 pl-7">
                {ISLAM_SECTOR_DATA.olahraga.map((item, i) => {
                  const bonusRate = item.rate * ISLAM_COMMERCIAL_BONUS;
                  return (
                    <div key={i} className="flex flex-col bg-white/5 p-1.5 rounded-md border border-white/5 gap-1 shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
                        <span className="text-[9px] font-bold text-zinc-300 truncate">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-1 pl-4 flex-wrap">
                        <span className="text-[8px] font-black text-zinc-500 italic">Rp {item.rate.toLocaleString('id-ID')}</span>
                        <ChevronRight size={10} className="text-emerald-500/50" />
                        <span className="text-[9px] font-black text-emerald-500 italic drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]">Rp {Math.round(bonusRate).toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 6. Komersial */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <Store className="h-3 w-3 text-amber-500" />
                </div>
                <h6 className="text-[10px] font-black text-white uppercase tracking-wider">6. Sektor Komersial & Retail (3 jenis) <span className="text-cyan-400 ml-1 font-black lowercase italic text-[9px] bg-cyan-500/10 px-1.5 py-0.5 rounded-full border border-cyan-500/20">(3 Jenis)</span></h6>
              </div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 pl-7">
                {ISLAM_SECTOR_DATA.komersial.map((item, i) => {
                  const bonusRate = item.rate * ISLAM_COMMERCIAL_BONUS;
                  return (
                    <div key={i} className="flex flex-col bg-white/5 p-1.5 rounded-md border border-white/5 gap-1 shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
                        <span className="text-[9px] font-bold text-zinc-300 truncate">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-1 pl-4 flex-wrap">
                        <span className="text-[8px] font-black text-zinc-500 italic">Rp {item.rate.toLocaleString('id-ID')}</span>
                        <ChevronRight size={10} className="text-emerald-500/50" />
                        <span className="text-[9px] font-black text-emerald-500 italic drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]">Rp {Math.round(bonusRate).toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 7. Hiburan */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <Clapperboard className="h-3 w-3 text-purple-500" />
                </div>
                <h6 className="text-[10px] font-black text-white uppercase tracking-wider">7. Sektor Hiburan & Seni (2 jenis) <span className="text-cyan-400 ml-1 font-black lowercase italic text-[9px] bg-cyan-500/10 px-1.5 py-0.5 rounded-full border border-cyan-500/20">(2 Jenis)</span></h6>
              </div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 pl-7">
                {ISLAM_SECTOR_DATA.hiburan.map((item, i) => {
                  const bonusRate = item.rate * ISLAM_COMMERCIAL_BONUS;
                  return (
                    <div key={i} className="flex flex-col bg-white/5 p-1.5 rounded-md border border-white/5 gap-1 shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
                        <span className="text-[9px] font-bold text-zinc-300 truncate">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-1 pl-4 flex-wrap">
                        <span className="text-[8px] font-black text-zinc-500 italic">Rp {item.rate.toLocaleString('id-ID')}</span>
                        <ChevronRight size={10} className="text-emerald-500/50" />
                        <span className="text-[9px] font-black text-emerald-500 italic drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]">Rp {Math.round(bonusRate).toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <p className="text-[9px] text-zinc-500 font-medium italic text-center leading-relaxed italic">Informasi teknis mengenai parameter ekonomi dan sosial sedang dikembangkan.</p>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/15 blur-xl rounded-full"></div>
              <div className="relative p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 shadow-xl">
                <Info className="h-7 w-7 text-amber-500" />
              </div>
            </div>
            <div className="space-y-1.5 max-w-[180px]">
              <h5 className="text-[16px] font-black text-white italic uppercase tracking-tighter leading-tight drop-shadow-sm">{effectName}</h5>
              <div className="h-px w-8 bg-zinc-800 mx-auto"></div>
              <p className="text-[10px] text-zinc-500 font-medium leading-relaxed">Informasi teknis mengenai parameter ekonomi dan sosial sedang dikembangkan.</p>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={onClose}
        className="mt-2 w-full py-2.5 bg-zinc-900/50 hover:bg-zinc-800 border border-white/5 rounded-xl text-[9px] font-black text-white uppercase tracking-[0.2em] transition-all cursor-pointer active:scale-95 shadow-lg"
      >
        Kembali
      </button>
    </div>
  );
}
