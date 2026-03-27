"use client"

import { useState, useEffect } from "react";
import { Crown, Users, Info, Calendar } from "lucide-react"
import { unSecurityCouncilStorage, UNSCMember } from "./storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";
import { getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

export default function DewanKeamananTab() {
  const [members, setMembers] = useState<UNSCMember[]>([]);
  const [gameYear, setGameYear] = useState(2026);
  const [gameMonth, setGameMonth] = useState(0);
  const [isCandidate, setIsCandidate] = useState(false);

  useEffect(() => {
    const data = unSecurityCouncilStorage.getData();
    setMembers(data.members);
    setIsCandidate(data.isPlayerCandidate);
    
    const date = getStoredGameDate();
    setGameYear(date.getFullYear());
    setGameMonth(date.getMonth());
  }, []);

  const handleApply = () => {
    unSecurityCouncilStorage.applyAsCandidate(gameYear);
    setIsCandidate(true);
  };

  const permanentMembers = members.filter(m => m.isPermanent);
  const nonPermanentMembers = members.filter(m => !m.isPermanent && m.termStart <= gameYear);
  const newlyElected = members.filter(m => !m.isPermanent && m.termStart > gameYear);

  return (
    <div className="flex-1 overflow-y-auto p-8 no-scrollbar animate-in fade-in duration-300">
      {/* Election Banner */}
      <div className="mb-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-cyan-500/20 rounded-xl">
            <Calendar className="h-5 w-5 text-cyan-400" />
          </div>
          <div>
            <h4 className="text-xs font-black text-cyan-400 uppercase tracking-widest">Status Pemilihan PBB</h4>
            <p className="text-[10px] text-zinc-500 font-bold uppercase mt-0.5">
              {gameMonth < 5 
                ? `Pemilihan Berikutnya: Juni ${gameYear}` 
                : gameMonth === 5 
                  ? "Pemilihan Sedang Berlangsung" 
                  : `Pemilihan Selesai - Pergantian: 1 Jan ${gameYear + 1}`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-zinc-900/50 rounded-full border border-zinc-800">
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-wider">Auto-Rotation System Active</span>
          </div>

          {/* Candidacy Button */}
          {gameMonth === 5 && !members.some(m => m.name === "Indonesia") && (
            <button 
              onClick={handleApply}
              disabled={isCandidate}
              className={`px-4 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest transition-all ${
                isCandidate 
                ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400 cursor-default"
                : "bg-amber-500/20 border-amber-500/40 text-amber-400 hover:bg-amber-500/40 hover:scale-105 active:scale-95"
              }`}
            >
              {isCandidate ? "🇮🇩 Indonesia Terdaftar sebagai Kandidat" : "🇮🇩 Calonkan Indonesia"}
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Anggota Tetap */}
        <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 overflow-hidden shadow-lg shadow-amber-500/10 h-fit">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-amber-500/10">
            <div className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <Crown className="h-4 w-4 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-amber-400">Anggota Tetap</h3>
              <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-medium">Hak Veto • P5</p>
            </div>
            <span className="ml-auto text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-500/30 text-amber-400">5 NEGARA</span>
          </div>
          <div className="p-4 flex flex-col gap-3">
            {permanentMembers.map((m, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-4 bg-zinc-900/60 border border-zinc-800/50 rounded-2xl group hover:border-amber-500/30 transition-all">
                <span className="text-2xl">{m.flag}</span>
                <div className="flex-1">
                  <p className="text-sm font-black text-white uppercase tracking-tight">{m.name}</p>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Anggota Sejak {m.termStart}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse shadow-sm shadow-amber-400/50" />
                  <span className="text-[9px] font-black text-amber-400 uppercase tracking-widest">Veto</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Anggota Tidak Tetap */}
        <div className="rounded-3xl border border-sky-500/20 bg-sky-500/5 overflow-hidden shadow-lg shadow-sky-500/10 h-fit">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-sky-500/10">
            <div className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <Users className="h-4 w-4 text-sky-400" />
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-sky-400">Anggota Tidak Tetap</h3>
              <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-medium">Masa Jabatan 2 Tahun</p>
            </div>
            <span className="ml-auto text-[10px] font-black px-2 py-0.5 rounded-full border border-sky-500/30 text-sky-400">10 NEGARA</span>
          </div>
          <div className="p-4 flex flex-col gap-2.5">
            {/* Active Members */}
            {nonPermanentMembers.map((m, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-3.5 bg-zinc-900/60 border border-zinc-800/50 rounded-2xl group hover:border-sky-500/30 transition-all relative">
                <span className="text-2xl">{m.flag}</span>
                <div className="flex-1">
                  <p className="text-sm font-black text-white uppercase tracking-tight">{m.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Periode {m.termStart}–{m.termEnd}</p>
                    {m.termEnd === gameYear && (
                      <span className="text-[8px] px-1.5 py-0.5 bg-rose-500/10 text-rose-500 border border-rose-500/20 rounded-md font-black uppercase tracking-tighter animate-pulse">Lengser</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-sky-400" />
                  <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest">Aktif</span>
                </div>
              </div>
            ))}

            {/* Newly Elected (Waiting for Jan 1st) */}
            {newlyElected.map((m, i) => (
              <div key={`new-${i}`} className="flex items-center gap-4 px-5 py-3 border border-zinc-800/50 rounded-2xl group opacity-60 bg-zinc-950/20">
                <span className="text-2xl grayscale">{m.flag}</span>
                <div className="flex-1">
                  <p className="text-sm font-black text-zinc-400 uppercase tracking-tight">{m.name}</p>
                  <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Elected: Periode {m.termStart}–{m.termEnd}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Terpilih</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="px-6 py-4 bg-zinc-900/30 border-t border-sky-500/10 flex items-center gap-3">
             <Info className="h-3.5 w-3.5 text-zinc-600" />
             <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest leading-relaxed">
               Setiap tahun, 5 negara baru dipilih oleh Majelis Umum PBB untuk menggantikan anggota yang masa jabatannya habis.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
