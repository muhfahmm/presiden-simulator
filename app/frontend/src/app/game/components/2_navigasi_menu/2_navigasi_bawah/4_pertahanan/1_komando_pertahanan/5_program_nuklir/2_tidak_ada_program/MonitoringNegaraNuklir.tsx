"use client"

import { ArrowLeft, Globe, Search, ShieldCheck } from "lucide-react";
import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { useState } from "react";

interface Props {
  onBack: () => void;
}

export default function MonitoringNegaraNuklir({ onBack }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter countries that have at least 1 nuclear missile
  const nuclearPowers = countries.filter(c => 
    ((c as any).militer_strategis?.operasi_strategis?.misil_nuklir ?? 0) > 0 &&
    (c.name_id.toLowerCase().includes(searchTerm.toLowerCase()) || 
     c.name_en.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-cyan-500 transition-colors" />
          <input 
            type="text"
            placeholder="CARI NEGARA PEMILIK MISIL..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl py-3 pl-12 pr-4 text-[10px] font-black tracking-widest text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 transition-all"
          />
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-cyan-500/5 border border-cyan-500/10 p-6 rounded-[32px] flex items-center gap-4">
          <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
            <Globe className="h-6 w-6 text-cyan-500" />
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Total Negara Nuklir</p>
            <p className="text-2xl font-black text-white italic">{nuclearPowers.length} <span className="text-[10px] text-zinc-400 not-italic ml-1 font-bold uppercase">NEGARA TERDETEKSI</span></p>
          </div>
        </div>
        <div className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-[32px] flex items-center gap-4">
          <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
            <ShieldCheck className="h-6 w-6 text-emerald-500" />
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Status Pengawasan</p>
            <p className="text-2xl font-black text-white italic uppercase">Aktif <span className="text-[10px] text-emerald-500 not-italic ml-1 font-bold uppercase tracking-widest">— Otoritas Penuh</span></p>
          </div>
        </div>
      </div>

      {/* Countries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-10">
        {nuclearPowers.length > 0 ? (
          nuclearPowers.map((country) => (
            <div 
              key={country.name_en}
              className="bg-zinc-950/40 border border-zinc-800/80 rounded-[32px] p-6 group hover:border-cyan-500/30 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center text-xl overflow-hidden shadow-inner group-hover:scale-110 transition-transform">
                  {country.flag}
                </div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase italic tracking-tight">{country.name_id}</h4>
                </div>
              </div>

              <div className="space-y-3 relative z-10">
                <div className="flex justify-between items-center px-3 py-2 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                  <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Jumlah Hulu Ledak</span>
                  <span className="text-[10px] font-black text-cyan-400 italic uppercase">
                    {((country as any).militer_strategis?.operasi_strategis?.misil_nuklir ?? 0).toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="flex justify-between items-center px-3 py-2 bg-rose-500/5 rounded-xl border border-rose-500/10">
                  <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Risiko</span>
                  <span className="text-[10px] font-black text-rose-500 italic uppercase">Tinggi</span>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-cyan-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 flex flex-col items-center justify-center opacity-30">
            <Search size={48} className="mb-4" />
            <p className="text-sm font-black uppercase tracking-widest italic text-zinc-500">Tidak ada negara ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}
