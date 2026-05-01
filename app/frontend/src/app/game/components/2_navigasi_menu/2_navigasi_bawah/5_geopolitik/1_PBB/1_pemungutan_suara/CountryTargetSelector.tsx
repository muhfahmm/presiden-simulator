
"use client"

import { useState } from "react";
import { Search, Globe, X, Check } from "lucide-react";
import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";

interface CountryTargetSelectorProps {
  userCountry: string;
  onSelect: (countryName: string) => void;
  onClose: () => void;
}

export function CountryTargetSelector({ userCountry, onSelect, onClose }: CountryTargetSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const getCountryCode = (emoji: string) => {
    const chars = [...emoji];
    if (chars.length < 2) return "";
    return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
  };

  const filteredCountries = countries.filter(c => 
    (c.name_id.toLowerCase().includes(searchTerm.toLowerCase()) || 
     c.name_en.toLowerCase().includes(searchTerm.toLowerCase())) &&
    c.name_id !== userCountry && c.name_en !== userCountry
  );

  return (
    <div className="absolute inset-0 bg-black/80 z-[100] flex items-center justify-center p-6 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-2xl h-[70vh] flex flex-col overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-500/10 rounded-xl border border-rose-500/20">
              <Globe className="h-5 w-5 text-rose-500" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Pilih Negara Target</h3>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Pilih negara yang akan dikenakan tindakan PBB</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-900 rounded-xl transition-colors">
            <X className="h-6 w-6 text-zinc-500" />
          </button>
        </div>

        {/* Search */}
        <div className="p-6 border-b border-zinc-800/30">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-hover:text-cyan-500 transition-colors" />
            <input 
              type="text"
              placeholder="CARI NEGARA..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl pl-12 pr-6 py-4 text-xs font-bold text-white placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/50 transition-all"
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 gap-2 content-start scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {filteredCountries.map((country, i) => {
            const code = getCountryCode(country.flag);
            return (
              <button
                key={i}
                onClick={() => onSelect(country.name_id)}
                className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-700 transition-all group text-left cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-10 h-7 rounded-lg overflow-hidden shadow-md border border-zinc-800 group-hover:scale-110 transition-transform duration-500 shrink-0">
                    <img 
                      src={`https://flagcdn.com/w160/${code}.png`} 
                      alt={country.name_id}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">{country.name_id}</h4>
                    <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">{country.capital}</p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
              </button>
            );
          })}
          {filteredCountries.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 opacity-30">
              < Globe className="h-12 w-12 mb-4" />
              <p className="text-xs font-black uppercase tracking-widest">Negara tidak ditemukan</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-zinc-900/20 border-t border-zinc-800/50 text-center">
           <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">
             Tindakan ini akan berdampak permanen pada hubungan diplomatik
           </p>
        </div>
      </div>
    </div>
  );
}

