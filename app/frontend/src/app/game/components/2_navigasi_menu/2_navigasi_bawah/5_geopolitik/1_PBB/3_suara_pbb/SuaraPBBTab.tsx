"use client"

import { useState } from "react";
import { Search, Crown } from "lucide-react"
import { countries } from "@/app/database/data/negara/benua/index";

function getTier(vote: number): { label: string; color: string; bg: string } {
  if (vote >= 139) return { label: "Sangat Berpengaruh", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" };
  if (vote >= 70) return { label: "Berpengaruh", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" };
  return { label: "Kurang Berpengaruh", color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" };
}

interface SuaraPBBTabProps {
  currentData: any;
}

export default function SuaraPBBTab({ currentData }: SuaraPBBTabProps) {
  const [search, setSearch] = useState("");

  const sortedCountries = [...countries]
    .filter(c => c.name_id?.toLowerCase().includes(search.toLowerCase()) || c.name_en?.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (b.geopolitik?.un_vote ?? 0) - (a.geopolitik?.un_vote ?? 0));

  const myVote = currentData.geopolitik?.un_vote ?? 0;
  const myTier = getTier(myVote);
  const myRank = [...countries].sort((a, b) => (b.geopolitik?.un_vote ?? 0) - (a.geopolitik?.un_vote ?? 0)).findIndex(c => c.name_id === currentData.name_id) + 1;

  return (
    <div className="flex-1 overflow-hidden flex flex-col animate-in fade-in duration-300">
      {/* My country summary + Search */}
      <div className="px-8 py-4 border-b border-zinc-800/50 flex items-center gap-4 bg-zinc-900/20">
        <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3">
          <span className="text-xl">{currentData.flag}</span>
          <div>
            <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Negara Anda</p>
            <p className="text-sm font-black text-white uppercase">{currentData.name_id}</p>
          </div>
          <div className="mx-3 h-8 w-px bg-zinc-800" />
          <div>
            <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Suara PBB</p>
            <p className="text-lg font-black text-cyan-400">{myVote}</p>
          </div>
          <div className="mx-3 h-8 w-px bg-zinc-800" />
          <div>
            <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Peringkat</p>
            <p className="text-lg font-black text-white">#{myRank}</p>
          </div>
          <div className="mx-3 h-8 w-px bg-zinc-800" />
          <span className={`text-[10px] font-black px-3 py-1.5 rounded-xl border uppercase tracking-widest ${myTier.bg} ${myTier.color}`}>
            {myTier.label}
          </span>
        </div>

        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Cari negara..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-cyan-500/50 transition-colors font-medium"
          />
        </div>
      </div>

      {/* Country ranking list */}
      <div className="flex-1 overflow-y-auto px-8 py-4 no-scrollbar">
        <div className="flex flex-col gap-2">
          {sortedCountries.map((country, i) => {
            const vote = country.geopolitik?.un_vote ?? 0;
            const tier = getTier(vote);
            const isMyCountry = country.name_id === currentData.name_id;
            const maxVote = 207;
            return (
              <div
                key={country.name_id}
                className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl border transition-all ${
                  isMyCountry
                    ? "bg-cyan-500/5 border-cyan-500/30 shadow-lg shadow-cyan-500/10"
                    : "bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700"
                }`}
              >
                {/* Rank */}
                <span className={`text-[11px] font-black w-8 text-right ${isMyCountry ? "text-cyan-400" : "text-zinc-600"}`}>#{i + 1}</span>

                {/* Flag */}
                <span className="text-xl">{country.flag}</span>

                {/* Name */}
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-black uppercase tracking-tight truncate ${isMyCountry ? "text-white" : "text-zinc-300"}`}>{country.name_id}</p>
                  <p className="text-[9px] text-zinc-600 font-medium uppercase tracking-wider">{country.name_en}</p>
                </div>

                {/* Progress bar */}
                <div className="w-32 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      vote >= 139 ? "bg-gradient-to-r from-amber-500 to-yellow-400" :
                      vote >= 28 ? "bg-gradient-to-r from-sky-500 to-cyan-400" :
                      "bg-gradient-to-r from-rose-600 to-red-500"
                    }`}
                    style={{ width: `${(vote / maxVote) * 100}%` }}
                  />
                </div>

                {/* Vote value */}
                <span className={`text-sm font-black w-8 text-right ${isMyCountry ? "text-cyan-400" : "text-zinc-300"}`}>{vote}</span>

                {/* Tier badge */}
                <span className={`text-[9px] font-black px-2.5 py-1 rounded-lg border uppercase tracking-widest w-20 text-center ${tier.bg} ${tier.color}`}>
                  {tier.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
