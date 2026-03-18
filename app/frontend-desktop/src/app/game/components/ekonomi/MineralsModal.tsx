import { X, Box, Battery, Layers, Pickaxe } from "lucide-react";
import { CountryData } from "../../../select-country/data/types";
import { countries } from "../../../select-country/data/countries";
import { gameStorage } from "../../gamestorage";

interface MineralsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MineralsModal({ isOpen, onClose }: MineralsModalProps) {
  if (!isOpen) return null;

  const session = gameStorage.getSession();
  const currentData = (countries.find(c => c.name_id === session?.country) || countries[0]) as CountryData;

  const minerals = [
    { label: "Nikel", value: currentData.sector_extraction.nickel, color: "bg-orange-400", lightColor: "text-orange-400", icon: <Box size={14} className="text-orange-400" /> },
    { label: "Litium", value: currentData.sector_extraction.lithium, color: "bg-cyan-400", lightColor: "text-cyan-400", icon: <Battery size={14} className="text-cyan-400" /> },
    { label: "Batubara", value: currentData.sector_extraction.coal, color: "bg-zinc-400", lightColor: "text-zinc-400", icon: <Layers size={14} className="text-zinc-400" /> },
    { label: "Tembaga", value: currentData.sector_extraction.copper, color: "bg-orange-300", lightColor: "text-orange-300", icon: <Pickaxe size={14} className="text-orange-300" /> },
    { label: "Alumunium", value: currentData.sector_extraction.aluminum, color: "bg-blue-300", lightColor: "text-blue-300", icon: <Layers size={14} className="text-blue-300" /> },
  ];

  return (
    <div className="absolute left-6 bottom-32 w-80 bg-zinc-950/90 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-2xl flex flex-col pointer-events-auto transform transition-all animate-in slide-in-from-bottom-4 z-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-800/50 bg-gradient-to-r from-teal-900/20 to-transparent rounded-t-2xl">
        <div>
          <h2 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
            <Box className="text-teal-400" size={16} /> Mineral Kritis & Strategis
          </h2>
          <p className="text-[10px] text-zinc-400 font-medium">Cadangan Mineral Nasional</p>
        </div>
        <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition">
          <X size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-4 max-h-[60vh] overflow-y-auto no-scrollbar">
        <div className="bg-zinc-900/50 rounded-xl p-3 border border-zinc-800 flex flex-col gap-1">
          <span className="text-[10px] uppercase font-bold text-zinc-500">Kekuatan Ekstraksi</span>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-black text-white leading-none">{currentData.sector_extraction.strength}<span className="text-sm text-zinc-500 ml-1">%</span></span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-800 pb-1">Komposisi Mineral Utama</h3>
          <div className="grid grid-cols-1 gap-2">
            {minerals.map((mineral, i) => (
              <div key={i} className="flex flex-col gap-1.5 bg-zinc-900/40 p-2.5 rounded-lg border border-zinc-800/50 hover:bg-zinc-800/40 transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {mineral.icon}
                    <span className="text-xs font-bold text-zinc-300">{mineral.label}</span>
                  </div>
                  <span className="text-xs font-black text-white">{mineral.value}</span>
                </div>
                <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden">
                  <div className={`h-full ${mineral.color}`} style={{ width: `${mineral.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
