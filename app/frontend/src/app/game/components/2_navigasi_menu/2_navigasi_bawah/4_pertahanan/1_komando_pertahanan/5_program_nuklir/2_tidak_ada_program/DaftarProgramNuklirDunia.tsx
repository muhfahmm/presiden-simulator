"use client"

import { ArrowLeft, Database, Search, Activity, Radiation } from "lucide-react";
import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { useState } from "react";

interface Props {
  onBack: () => void;
}

export default function DaftarProgramNuklirDunia({ onBack }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter countries that have a nuclear program progress > 0
  const programCountries = countries.filter(c => {
    const progress = (c as any).militer_strategis?.operasi_strategis?.program_nuklir ?? 0;
    return progress > 0 && (
      c.name_id.toLowerCase().includes(searchTerm.toLowerCase()) || 
      c.name_en.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }).sort((a, b) => {
    const progA = (a as any).militer_strategis?.operasi_strategis?.program_nuklir ?? 0;
    const progB = (b as any).militer_strategis?.operasi_strategis?.program_nuklir ?? 0;
    return progB - progA;
  });

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Navigation & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
        >
          <div className="p-2 bg-zinc-900 rounded-xl border border-zinc-800 group-hover:border-zinc-700">
            <ArrowLeft size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Kembali ke Menu</span>
        </button>

        <div className="relative group max-w-md w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-indigo-500 transition-colors" />
          <input 
            type="text"
            placeholder="CARI DATABASE PROGRAM..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl py-3 pl-12 pr-4 text-[10px] font-black tracking-widest text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-all"
          />
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-indigo-500/5 border border-indigo-500/10 p-6 rounded-[32px] flex items-center gap-4">
          <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
            <Database className="h-6 w-6 text-indigo-500" />
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Database Program</p>
            <p className="text-2xl font-black text-white italic">{programCountries.length} <span className="text-[10px] text-zinc-400 not-italic ml-1 font-bold uppercase">NEGARA AKTIF</span></p>
          </div>
        </div>
        <div className="bg-yellow-500/5 border border-yellow-500/10 p-6 rounded-[32px] flex items-center gap-4">
          <div className="p-4 bg-yellow-500/10 rounded-2xl border border-yellow-500/20">
            <Activity className="h-6 w-6 text-yellow-500" />
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Rata-rata Progres</p>
            <p className="text-2xl font-black text-white italic uppercase">
              {programCountries.length > 0 
                ? Math.round(programCountries.reduce((acc, c) => acc + ((c as any).militer_strategis?.operasi_strategis?.program_nuklir ?? 0), 0) / programCountries.length)
                : 0}% <span className="text-[10px] text-yellow-500 not-italic ml-1 font-bold uppercase tracking-widest">— Global</span>
            </p>
          </div>
        </div>
      </div>

      {/* Program List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
        {programCountries.length > 0 ? (
          programCountries.map((country) => {
            const progress = (country as any).militer_strategis?.operasi_strategis?.program_nuklir ?? 0;
            return (
              <div 
                key={country.name_en}
                className="bg-zinc-950/40 border border-zinc-800/80 rounded-[32px] p-6 group hover:border-indigo-500/30 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center text-xl overflow-hidden shadow-inner group-hover:scale-110 transition-transform">
                      {country.flag}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white uppercase italic tracking-tight">{country.name_id}</h4>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                     <span className="text-xl font-black text-white tracking-tighter italic">{progress}%</span>
                     <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">Kesiapan</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2 relative z-10">
                  <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50">
                    <div 
                      className="h-full bg-indigo-500 transition-all duration-1000 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em] italic">
                    <span>Inisiasi</span>
                    <span className="text-indigo-400">{progress >= 100 ? "OPERASIONAL" : "PENGEMBANGAN"}</span>
                    <span>Hulu Ledak</span>
                  </div>
                </div>

                {/* Background Glow */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-indigo-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-20 flex flex-col items-center justify-center opacity-30">
            <Radiation size={48} className="mb-4" />
            <p className="text-sm font-black uppercase tracking-widest italic text-zinc-500">Database Kosong</p>
          </div>
        )}
      </div>
    </div>
  );
}
