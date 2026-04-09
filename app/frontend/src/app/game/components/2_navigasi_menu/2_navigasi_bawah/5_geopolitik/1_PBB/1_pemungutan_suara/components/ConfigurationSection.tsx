import { Globe, FileText, Search, AlertTriangle } from "lucide-react";
import { techItems, resourceItems } from "../utils/configData";
import { countries, asiaCountries, afrikaCountries, eropaCountries, naCountries, saCountries, oceaniaCountries } from "@/app/database/data/negara/benua/index";

interface ConfigurationSectionProps {
  selectedItem: { category: string; name: string; description: string; effect: string } | null;
  selectedDuration: string;
  onDurationChange: (duration: string) => void;
  selectedSubItem: string;
  onSubItemChange: (item: string) => void;
  selectedCountry: any;
  onCountryChange: (country: any) => void;
  userCountry: string | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedContinent: string;
  onContinentChange: (continent: string) => void;
}

export function ConfigurationSection({
  selectedItem,
  selectedDuration,
  onDurationChange,
  selectedSubItem,
  onSubItemChange,
  selectedCountry,
  onCountryChange,
  userCountry,
  searchQuery,
  onSearchChange,
  selectedContinent,
  onContinentChange,
}: ConfigurationSectionProps) {
  const filteredCountries = (
    selectedContinent === "SEMUA" ? countries :
    selectedContinent === "ASIA" ? asiaCountries :
    selectedContinent === "AFRIKA" ? afrikaCountries :
    selectedContinent === "EROPA" ? eropaCountries :
    selectedContinent === "AMERIKA UTARA" ? naCountries :
    selectedContinent === "AMERIKA SELATAN" ? saCountries :
    oceaniaCountries
  ).filter(c => 
    c.name_id !== userCountry && 
    c.name_en !== userCountry &&
    (c.name_id?.toLowerCase().includes(searchQuery.toLowerCase()) || 
     c.name_en?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="w-full flex flex-col gap-12">
      {/* Sub-Item Selection */}
      {(selectedItem?.name === "Embargo Penjualan Teknologi" || selectedItem?.name === "Embargo Penjualan Sumber Daya") && (
        <div className="flex flex-col gap-5 animate-in slide-in-from-top duration-500">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
              <FileText className="h-3.5 w-3.5 text-indigo-400" />
            </div>
            <h4 className="text-[11px] font-black text-white uppercase tracking-widest">
              1. {selectedItem.name === "Embargo Penjualan Teknologi" ? "Pilihan Teknologi" : "Jenis Sumber Daya"}
            </h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {(selectedItem.name === "Embargo Penjualan Teknologi" ? techItems : resourceItems).map(item => (
              <button
                key={item}
                onClick={() => onSubItemChange(item)}
                className={`px-3 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all cursor-pointer ${
                  selectedSubItem === item 
                    ? "bg-indigo-500 text-white border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.3)]" 
                    : "bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Country Selection */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <Globe className="h-3.5 w-3.5 text-amber-400" />
            </div>
            <h4 className="text-[11px] font-black text-white uppercase tracking-widest">3. Target Negara</h4>
          </div>
          <span className="text-[10px] font-black text-zinc-600 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-900/30 tracking-tight">
            {filteredCountries.length} NEGARA TERSEDIA
          </span>
        </div>
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "SEMUA", label: "GLOBAL" },
              { id: "ASIA", label: "ASIA" },
              { id: "AFRIKA", label: "AFRIKA" },
              { id: "EROPA", label: "EROPA" },
              { id: "AMERIKA UTARA", label: "AMERIKA (U)" },
              { id: "AMERIKA SELATAN", label: "AMERIKA (S)" },
              { id: "OSEANIA", label: "OSEANIA" }
            ].map(continent => (
              <button
                key={continent.id}
                onClick={() => onContinentChange(continent.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-[9px] font-black tracking-widest border transition-all ${
                  selectedContinent === continent.id
                    ? "bg-amber-500 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                    : "bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
                }`}
              >
                {continent.label}
              </button>
            ))}
          </div>
          
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-focus-within:text-amber-500 transition-colors" />
            <input 
              type="text"
              placeholder="Cari target negara..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800/80 rounded-[20px] pl-14 pr-6 py-5 text-sm text-white placeholder-zinc-700 outline-none focus:border-amber-500/50 focus:bg-zinc-900/20 transition-all shadow-inner"
            />
          </div>
        </div>

        <div className="max-h-[350px] grid grid-cols-1 md:grid-cols-2 gap-2.5 overflow-y-auto pr-3 pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {filteredCountries.map(c => (
            <button
              key={c.name_id}
              onClick={() => onCountryChange(c)}
              className={`flex items-center gap-4 px-5 py-4 rounded-[20px] border transition-all cursor-pointer text-left relative overflow-hidden group/btn ${
                selectedCountry?.name_id === c.name_id
                  ? "bg-amber-500/10 border-amber-500/50 shadow-lg"
                  : "bg-zinc-950 border-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900/30"
              }`}
            >
              <span className="text-2xl drop-shadow-lg">{c.flag}</span>
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-black uppercase tracking-tight truncate ${selectedCountry?.name_id === c.name_id ? "text-amber-400" : "text-zinc-200 group-hover/btn:text-white"}`}>
                  {c.name_id}
                </p>
              </div>
              {selectedCountry?.name_id === c.name_id && (
                <div className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
