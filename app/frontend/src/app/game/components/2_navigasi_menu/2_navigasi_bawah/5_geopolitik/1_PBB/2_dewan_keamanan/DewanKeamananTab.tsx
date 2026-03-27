"use client"

import { Crown, Users } from "lucide-react"

const permanentMembers = [
  { name: "Amerika Serikat", flag: "🇺🇸", since: "1945" },
  { name: "Rusia", flag: "🇷🇺", since: "1945" },
  { name: "China", flag: "🇨🇳", since: "1971" },
  { name: "Inggris", flag: "🇬🇧", since: "1945" },
  { name: "Prancis", flag: "🇫🇷", since: "1945" },
];

const nonPermanentMembers = [
  { name: "Aljazair", flag: "🇩🇿", period: "2024–2025" },
  { name: "Guyana", flag: "🇬🇾", period: "2024–2025" },
  { name: "Sierra Leone", flag: "🇸🇱", period: "2024–2025" },
  { name: "Slovenia", flag: "🇸🇮", period: "2024–2025" },
  { name: "Korea Selatan", flag: "🇰🇷", period: "2024–2025" },
  { name: "Denmark", flag: "🇩🇰", period: "2025–2026" },
  { name: "Yunani", flag: "🇬🇷", period: "2025–2026" },
  { name: "Panama", flag: "🇵🇦", period: "2025–2026" },
  { name: "Somalia", flag: "🇸🇴", period: "2025–2026" },
  { name: "Pakistan", flag: "🇵🇰", period: "2025–2026" },
];

export default function DewanKeamananTab() {
  return (
    <div className="flex-1 overflow-y-auto p-8 no-scrollbar animate-in fade-in duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Anggota Tetap */}
        <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 overflow-hidden shadow-lg shadow-amber-500/10">
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
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Anggota Sejak {m.since}</p>
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
        <div className="rounded-3xl border border-sky-500/20 bg-sky-500/5 overflow-hidden shadow-lg shadow-sky-500/10">
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
          <div className="p-4 flex flex-col gap-3">
            {nonPermanentMembers.map((m, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-3.5 bg-zinc-900/60 border border-zinc-800/50 rounded-2xl group hover:border-sky-500/30 transition-all">
                <span className="text-2xl">{m.flag}</span>
                <div className="flex-1">
                  <p className="text-sm font-black text-white uppercase tracking-tight">{m.name}</p>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Periode {m.period}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-sky-400" />
                  <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest">Aktif</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
