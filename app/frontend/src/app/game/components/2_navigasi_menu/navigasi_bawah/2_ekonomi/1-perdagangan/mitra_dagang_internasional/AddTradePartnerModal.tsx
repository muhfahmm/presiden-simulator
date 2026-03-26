import React, { useState } from 'react';
import { X, Globe, Search, Plus } from 'lucide-react';
import { countries } from './countriesList';
import { CountryData } from "@/app/database/data/types/_index";
import { PengajuanMitraModal } from './proposal_mitra/PengajuanMitraModal';

interface AddTradePartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Now passing the full target country, wait time, and calculated chance
  onAddProposal: (target: CountryData, waitDays: number, chance: number) => void;
  existingPartners: string[];
  playerCountry: CountryData;
}

export const AddTradePartnerModal: React.FC<AddTradePartnerModalProps> = ({ 
  isOpen, 
  onClose, 
  onAddProposal, 
  existingPartners,
  playerCountry
}) => {
  const [search, setSearch] = useState('');
  const [selectedTarget, setSelectedTarget] = useState<CountryData | null>(null);


  if (!isOpen) return null;

  const filteredCountries = countries.filter(c => {
    const isExisting = existingPartners.some(p => 
        p.toLowerCase() === c.name_id.toLowerCase() || 
        p.toLowerCase() === c.name_en.toLowerCase()
    );
    return (
        (c.name_id.toLowerCase().includes(search.toLowerCase()) || 
         c.name_en.toLowerCase().includes(search.toLowerCase())) &&
        !isExisting
    );
  }).sort((a, b) => a.name_id.localeCompare(b.name_id));

  return (
    <div className="fixed inset-0 bg-black/90 z-[120] flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-zinc-950 border border-zinc-800 w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[70vh]">
        {/* Header */}
        <div className="p-8 border-b border-zinc-900 bg-zinc-900/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Globe className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-black text-white uppercase italic tracking-widest leading-none">Tambah Mitra Dagang Internasional</h2>
                <div className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <span className="text-[10px] font-black text-blue-400 tabular-nums">{countries.length} NEGARA</span>
                </div>
              </div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Ekspansi Jaringan Ekonomi Strategis</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-xl hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Search */}
        <div className="p-6 border-b border-zinc-900">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 transition-colors group-hover:text-blue-500" />
            <input 
              type="text"
              placeholder="CARI NEGARA MITRA..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 pl-12 pr-6 text-xs font-black uppercase tracking-widest text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-zinc-700"
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          <div className="flex items-center justify-between mb-4 px-2">
             <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest italic">HASIL PENCARIAN</span>
             <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest italic">{filteredCountries.length} NEGARA TERSEDIA</span>
          </div>
          {filteredCountries.length > 0 ? (
            filteredCountries.map((c) => (
                <button
                    key={c.name_en}
                    onClick={() => {
                        setSelectedTarget(c);
                    }}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-blue-500/50 hover:bg-zinc-900/50 transition-all group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-2xl">{c.flag}</span>
                        <span className="text-xs font-black text-zinc-300 uppercase tracking-wider group-hover:text-white transition-colors">
                            {c.name_id}
                        </span>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-900 group-hover:bg-blue-500 text-zinc-600 group-hover:text-white transition-all">
                        <Plus className="h-4 w-4" />
                    </div>
                </button>
            ))
          ) : (
            <div className="text-center py-12">
               <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest italic">Tidak Ada Negara Tersedia</p>
            </div>
          )}
        </div>
      </div>

      {/* Proposal Modal */}
      <PengajuanMitraModal
        isOpen={selectedTarget !== null}
        onClose={() => setSelectedTarget(null)}
        playerCountry={playerCountry}
        targetCountry={selectedTarget}
        onConfirm={(target, waitDays, chance) => {
          onAddProposal(target, waitDays, chance);
          setSelectedTarget(null);
          onClose(); // Close the main Add Partner modal as well
        }}
      />
    </div>
  );
};
