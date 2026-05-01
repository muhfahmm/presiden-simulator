import React, { useState } from 'react';
import { X, Globe, Search, Swords, Target } from 'lucide-react';
import { countries } from "@/app/database/data/negara/index";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";

interface ModalPilihNegaraProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (country: CountryData) => void;
  playerCountryId?: string;
}

export const ModalPilihNegara: React.FC<ModalPilihNegaraProps> = ({ 
  isOpen, 
  onClose, 
  onSelect,
  playerCountryId
}) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredCountries = countries.filter(c => {
    // Prevent selecting own country
    if (playerCountryId && (c.name_id === playerCountryId || c.name_en === playerCountryId)) {
        return false;
    }

    return (
        c.name_id.toLowerCase().includes(search.toLowerCase()) || 
        c.name_en.toLowerCase().includes(search.toLowerCase())
    );
  }).sort((a, b) => a.name_id.localeCompare(b.name_id));

  const getCountryCode = (emoji: string) => {
    const chars = [...emoji];
    if (chars.length < 2) return "";
    return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-[120] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-zinc-950 border border-red-500/20 w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.1)] flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-500">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/5 rounded-full blur-[120px]"></div>

        {/* Header */}
        <div className="p-8 border-b border-zinc-900 bg-zinc-900/10 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-500/10 rounded-2xl border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <Swords className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-black text-white uppercase italic tracking-widest leading-none">Pilih Target Operasi</h2>
                <div className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <span className="text-[10px] font-black text-red-500 tabular-nums">{countries.length - 1} NEGARA</span>
                </div>
              </div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Identifikasi Koordinat Serangan Strategis</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-xl hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Search */}
        <div className="p-6 border-b border-zinc-900 relative z-10">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 transition-colors group-hover:text-red-500" />
            <input 
              type="text"
              placeholder="CARI NEGARA TARGET..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-6 text-xs font-black uppercase tracking-widest text-white focus:outline-none focus:border-red-500/50 transition-all placeholder:text-zinc-700 cursor-text"
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent relative z-10">
          <div className="flex items-center justify-between mb-4 px-2">
             <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest italic">TARGET TERDETEKSI</span>
             <span className="text-[9px] font-black text-red-500 uppercase tracking-widest italic">{filteredCountries.length} KOORDINAT TERSEDIA</span>
          </div>
          
          {filteredCountries.length > 0 ? (
            filteredCountries.map((c) => {
                const code = getCountryCode(c.flag);

                return (
                    <button
                        key={c.name_en}
                        onClick={() => onSelect(c)}
                        className="w-full flex items-center justify-between p-4 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-red-500/50 hover:bg-red-500/5 transition-all group cursor-pointer"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-7 rounded overflow-hidden flex items-center justify-center bg-zinc-900 border border-zinc-800 group-hover:border-red-500/30 transition-all">
                                {code ? (
                                    <img 
                                        src={`https://flagcdn.com/w80/${code}.png`} 
                                        alt={c.name_id}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <Globe size={14} className="text-zinc-600" />
                                )}
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-xs font-black text-zinc-300 uppercase tracking-wider group-hover:text-white transition-colors">
                                    {c.name_id}
                                </span>
                                <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest group-hover:text-red-400 transition-colors">
                                    Ibu Kota: {c.capital}
                                </span>
                            </div>
                        </div>
                        <div className="p-2 rounded-lg bg-zinc-900 group-hover:bg-red-600 text-zinc-600 group-hover:text-white transition-all shadow-lg">
                            <Target className="h-4 w-4" />
                        </div>
                    </button>
                );
            })
          ) : (
            <div className="text-center py-20 opacity-40">
               <Globe className="h-16 w-16 text-zinc-800 mx-auto mb-4" />
               <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] italic">Koordinat Tidak Ditemukan</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-zinc-900/30 border-t border-zinc-900 flex justify-center relative z-10">
            <span className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.4em] italic">Advanced Military Targeting System v1.0</span>
        </div>
      </div>
    </div>
  );
};

