import { useState } from "react";
import { RancanganResolusiCard } from "./1_rancangan_resolusi/RancanganResolusiCard";
import { SanksiCard } from "./2_sanksi/SanksiCard";
import { EmbargoCard } from "./3_embargo/EmbargoCard";

export default function PemungutanSuaraTab() {
  const [selectedItem, setSelectedItem] = useState<{ category: string, name: string, description: string, effect: string } | null>(null);

  const handleSelectItem = (item: { category: string, name: string, description: string, effect: string } | null) => {
    if (selectedItem && item && selectedItem.name === item.name) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 animate-in fade-in duration-300 flex flex-col gap-10 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
      {/* Prototype Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-black text-white italic uppercase tracking-tight">Eksplorasi Kebijakan PBB</h2>
        <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Pilih salah satu instrumen di bawah untuk melihat detail resolusi (Prototype)</p>
      </div>

      {/* SECTION 1: Resolution Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shrink-0">
        <RancanganResolusiCard selectedItem={selectedItem} onSelectItem={handleSelectItem} />
        <SanksiCard selectedItem={selectedItem} onSelectItem={handleSelectItem} />
        <EmbargoCard selectedItem={selectedItem} onSelectItem={handleSelectItem} />
      </div>

      {/* Selection Detail (Optional Prototype View) */}
      {selectedItem && (
        <div className="mt-4 p-8 rounded-[32px] bg-zinc-900/50 border border-zinc-800/50 animate-in slide-in-from-bottom duration-500">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black text-cyan-400 uppercase tracking-widest">
                {selectedItem.category}
              </span>
              <h3 className="text-xl font-black text-white uppercase italic">{selectedItem.name}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Deskripsi</span>
                <p className="text-sm text-zinc-300 leading-relaxed">{selectedItem.description}</p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/30">
                <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest flex items-center gap-2">
                  <div className="h-1 w-3 bg-rose-500 rounded-full" />
                  Efek Geopolitik
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed italic">{selectedItem.effect}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="px-6 py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-400 text-[10px] font-black uppercase tracking-widest cursor-not-allowed opacity-50">
                Fitur Voting Segera Hadir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
