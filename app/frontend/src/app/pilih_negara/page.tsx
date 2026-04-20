"use client"

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { 
  HelpCircle, Play, ArrowLeft, Filter, ChevronLeft, ChevronRight, X,
  Globe2, Landmark, Users, Coins, TrendingUp, Globe, Church, Scale, Search, ShieldAlert 
} from "lucide-react";
import MapContainer from "../map-system/components/MapContainer";
import MapHubungan from "../game/components/2_navigasi_menu/1_navigasi_atas/Hubungan/mapHubungan";
import { countries } from "./data/negara/benua/index";
import { gameStorage } from "../game/gamestorage";
import { taxStorage } from "../game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { CountryData } from "./data/semua_fitur_negara";
import { calculateGoldMineRevenue } from "../game/components/1_navbar/3_kas_negara/GoldMineRevenue";
import { calculateTempatUmumRevenue } from "../game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/3-tempat-umum/logic/TempatUmumRevenueLogic";

export default function DatabasePage() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSelectionWarning, setShowSelectionWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const [mapMode, setMapMode] = useState<"default" | "hubungan">("default");
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch("/world.geojson")
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error("Failed to load map data", err));
  }, []);

  useEffect(() => {
    // Check for active session
    if (gameStorage.hasActiveSession()) {
      router.push("/game");
      return;
    }
  }, [router]);

  // Auto-scroll selected item into view
  useEffect(() => {
    if (selectedCountry && buttonRefs.current[selectedCountry]) {
      buttonRefs.current[selectedCountry]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [selectedCountry]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const itemWidth = 81; // estimated
      const scrollAmount = itemWidth * 10;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const selectedData = countries.find(c => c.name_en === selectedCountry);
  const baseData = (selectedData || countries[0]) as CountryData;
  const isInternalSelection = useRef(false);
  const hasSelection = !!selectedData;

  const currentTaxes = hasSelection ? (taxStorage.getTaxes(selectedCountry) || selectedData?.pajak || {}) : {};
  const summedTaxes = Object.values(currentTaxes as any).reduce((sum: number, v: any) => sum + ((v as any)?.pendapatan || 0), 0) / 365;
  const goldRevenue = hasSelection ? calculateGoldMineRevenue({}, baseData) : 0;
  const serviceRevenue = hasSelection ? calculateTempatUmumRevenue({}, baseData) : 0;
  const totalPendapatanPajak = summedTaxes + goldRevenue + serviceRevenue;

  const currentData: CountryData = baseData;

  const filteredCountries = countries.filter(c =>
    c.name_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.capital.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCountryCode = (emoji: string) => {
    const chars = [...emoji];
    if (chars.length < 2) return "";
    return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
  };
  const selectedCode = hasSelection ? getCountryCode(currentData.flag) : "";

  return (
    <div className="flex flex-col h-screen w-screen bg-[#f3e9d8] text-amber-950 font-sans relative overflow-hidden select-none">

      {/* 1. TOP STATS BAR */}
      <header className="bg-[#dcc7a1]/95 backdrop-blur-md border-b border-amber-800/10 px-6 py-4 flex items-center justify-between z-20 text-xs text-amber-900/60 font-bold">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <button className="h-6 w-6 rounded-full bg-amber-800/10 flex items-center justify-center hover:bg-amber-800/20 transition cursor-pointer shadow-sm">
              <HelpCircle className="h-3.5 w-3.5 text-amber-900/70" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <StatItem label="Ibukota" value={hasSelection ? currentData.capital : "-"} icon={<Landmark size={14} className="text-amber-800" />} />
            <StatItem label="Populasi" value={hasSelection ? currentData.jumlah_penduduk : "-"} icon={<Users size={14} className="text-amber-800" />} />
            <StatItem label="Kas Negara" value={hasSelection ? currentData.anggaran : "-"} icon={<Coins size={14} className="text-amber-700" />} />
            <StatItem label="Pendapatan/Hari" value={hasSelection ? `+${Math.round(totalPendapatanPajak).toLocaleString('id-ID')}` : "-"} icon={<TrendingUp size={14} className="text-emerald-800" />} />
            <StatItem label="Total Negara" value={`${countries.length}`} icon={<Globe size={14} className="text-teal-800" />} />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <StatItem label="Agama Mayoritas" value={hasSelection ? currentData.religion : "-"} icon={<Church size={14} className="text-purple-800" />} />
          <StatItem label="Ideologi" value={hasSelection ? currentData.ideology : "-"} icon={<Scale size={14} className="text-amber-900" />} />

          <div className="h-4 w-px bg-amber-800/10" />

          <div className="flex items-center gap-2">
            <Globe2 size={12} className="text-amber-800" />
            <span className="text-xs text-amber-900/60 font-bold uppercase tracking-wider">Suara PBB</span>
            <span className={`text-xs font-black px-1.5 py-0.5 rounded shadow-sm ${!hasSelection ? 'bg-amber-800/10 text-amber-900/40' :
                currentData.geopolitik.un_vote >= 139 ? 'bg-emerald-500/20 text-emerald-800 border border-emerald-500/30' :
                  currentData.geopolitik.un_vote >= 70 ? 'bg-sky-500/20 text-sky-800 border border-sky-500/30' :
                    'bg-red-500/20 text-red-800 border border-red-500/30'
              }`}>
              {hasSelection ? currentData.geopolitik.un_vote : "-"}
            </span>
          </div>
        </div>

        {hasSelection && (
          <div className="flex items-center gap-3 bg-amber-50/20 pl-2 pr-4 py-1.5 rounded-2xl border border-amber-800/10 shadow-sm backdrop-blur-md animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="relative w-8 h-5 rounded-sm overflow-hidden shadow-sm border border-amber-900/10">
              <img 
                src={`https://flagcdn.com/w80/${selectedCode}.png`} 
                alt={currentData.name_id}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-amber-950 italic tracking-wider uppercase">
                {currentData.name_id}
              </span>
              <span className="text-[8px] font-black text-amber-800/60 uppercase tracking-[0.15em] leading-none mt-0.5">
                {currentData.capital}
              </span>
            </div>
          </div>
        )}
      </header>

      {/* 2. MAIN MAP DISPLAY area */}
      <main className="flex-1 relative w-full h-full z-10 overflow-hidden">
        <div className="w-full h-full">
          {mapMode === "default" ? (
            <MapContainer 
              selectedName={selectedCountry} 
              selectedLat={selectedData?.lat}
              selectedLon={selectedData?.lon}
              isInternal={isInternalSelection.current}
              onSelectCountry={(c) => {
                const matched = countries.find(tc => 
                  tc.name_id.toLowerCase() === c.nama_negara.toLowerCase() || 
                  tc.name_en.toLowerCase() === c.nama_negara.toLowerCase()
                );
                if (matched) {
                  isInternalSelection.current = false;
                  setSelectedCountry(matched.name_en);
                }
              }} 
            />
          ) : (
            <MapHubungan
              userCountry={selectedCountry}
              targetCountry={null}
              geoData={geoData}
              onSelect={setSelectedCountry}
            />
          )}
        </div>

      </main>

      {/* Consolidated Map Controls & Search */}
      <div className="fixed left-1/2 bottom-[230px] -translate-x-1/2 z-[100] flex items-center gap-8 pointer-events-none w-max max-w-[90vw]">
        
        {/* Map Mode Toggles */}
        <div className="flex bg-zinc-900/95 backdrop-blur-2xl p-1.5 rounded-2xl border border-zinc-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.6)] gap-1.5 pointer-events-auto ring-1 ring-white/10 animate-in fade-in slide-in-from-bottom-4 duration-700 h-fit">
          <button
            onClick={() => setMapMode("default")}
            className={`px-6 py-2 text-[11px] font-black uppercase tracking-[0.2em] rounded-xl transition-all cursor-pointer active:scale-95 ${mapMode === "default"
                ? "bg-zinc-100 text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                : "text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800/80"
              }`}
          >
            PETA UTAMA
          </button>
          <button
            onClick={() => setMapMode("hubungan")}
            className={`px-6 py-2 text-[11px] font-black uppercase tracking-[0.2em] rounded-xl transition-all cursor-pointer active:scale-95 flex items-center gap-2 ${mapMode === "hubungan"
                ? "bg-amber-500 text-zinc-950 shadow-[0_0_25px_rgba(245,158,11,0.5)]"
                : "text-zinc-500 hover:text-amber-500 hover:bg-amber-500/10"
              }`}
          >
            HUBUNGAN
          </button>
        </div>

        {/* Search Input */}
        <div className="w-80 animate-in fade-in slide-in-from-bottom-2 duration-1000 pointer-events-auto">
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search size={16} className="text-zinc-500 group-focus-within:text-amber-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Cari Negara atau Ibukota..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 backdrop-blur-3xl border border-zinc-800/50 rounded-2xl py-3.5 pl-12 pr-12 text-sm font-bold text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/30 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-4 flex items-center text-zinc-500 hover:text-white transition-colors cursor-pointer"
              >
                <div className="bg-zinc-800/80 p-1.5 rounded-lg hover:bg-zinc-700 transition-colors">
                  <X size={14} />
                </div>
              </button>
            )}
          </div>

          {searchQuery && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500/80 bg-amber-500/5 px-3 py-1 rounded-full border border-amber-500/10">
                Ditemukan {filteredCountries.length} Negara
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 3. FOOTER CAROUSEL & CONTROLS */}
      <footer className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between z-20 pointer-events-none">
        
        {/* Left Action: Kembali */}
        <div className="pointer-events-auto">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 font-bold hover:bg-zinc-800 hover:border-zinc-700 transition cursor-pointer active:scale-95 text-sm text-zinc-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </button>
        </div>

        {/* Carousel with Chevrons (Absolute Centered) */}
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex items-center gap-4 w-full max-w-6xl z-30 pointer-events-auto">
          <button
            onClick={() => scrollByAmount('left')}
            className="p-1 px-2 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-zinc-400 hover:bg-zinc-800 hover:text-white transition cursor-pointer active:scale-95"
          >
            <ChevronLeft size={16} />
          </button>

          <div ref={scrollRef} className="flex flex-1 gap-10 overflow-x-auto pt-10 pb-4 no-scrollbar">
            {filteredCountries.map((c, i) => {
              // Helper to extract ISO code from emoji
              const getCode = (emoji: string) => {
                const chars = [...emoji];
                if (chars.length < 2) return "";
                return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
              };
              const code = getCode(c.flag);
              
              return (
                <button
                  key={i}
                  ref={el => { buttonRefs.current[c.name_en] = el; }}
                  onClick={() => {
                    isInternalSelection.current = true;
                    setSelectedCountry(c.name_en);
                  }}
                  className={`relative flex flex-col items-center gap-3 p-4 rounded-3xl border transition-all cursor-pointer min-w-[160px] h-[120px] justify-center overflow-hidden group ${selectedCountry === c.name_en
                    ? 'bg-zinc-900/90 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.25)] scale-110 z-10'
                    : 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/60 hover:border-zinc-600 hover:scale-[1.05]'
                    }`}
                >
                  {/* Premium Shine Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  {selectedCountry === c.name_en && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-amber-500 text-black font-black text-[10px] px-3 py-1.5 rounded-full shadow-[0_10px_20px_rgba(245,158,11,0.4)] font-sans whitespace-nowrap z-30 uppercase tracking-widest animate-in fade-in zoom-in slide-in-from-top-2 duration-300">
                      {c.name_id}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-amber-500" />
                    </div>
                  )}
                  
                  {/* Flag Container with Shadow & Glow */}
                  <div className={`relative w-16 h-10 rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-110 border ${
                    selectedCountry === c.name_en ? 'border-amber-400/50' : 'border-white/10'
                  }`}>
                    {code ? (
                      <img 
                        src={`https://flagcdn.com/w160/${code}.png`} 
                        alt={c.name_id}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to emoji if image fails
                          (e.target as any).style.display = 'none';
                          const parent = (e.target as any).parentElement;
                          const fallback = document.createElement('span');
                          fallback.className = 'text-2xl absolute inset-0 flex items-center justify-center';
                          fallback.innerText = c.flag;
                          parent.appendChild(fallback);
                        }}
                      />
                    ) : (
                      <span className="text-3xl filter drop-shadow-lg">{c.flag}</span>
                    )}
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <span className={`text-[11px] font-black text-center line-clamp-1 px-1 uppercase tracking-wider transition-colors ${
                      selectedCountry === c.name_en ? 'text-amber-400' : 'text-zinc-200 group-hover:text-white'
                    }`}>
                      {c.name_id}
                    </span>
                    <span className="text-[9px] font-black text-zinc-300 uppercase tracking-[0.15em] group-hover:text-white transition-colors">
                      {c.capital}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => scrollByAmount('right')}
            className="p-1 px-2 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-zinc-400 hover:bg-zinc-800 hover:text-white transition cursor-pointer active:scale-95"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Right Action: Mulai */}
        <div className="pointer-events-auto">
          <button
            onClick={() => {
              if (!hasSelection) {
                setShowSelectionWarning(true);
                return;
              }
              setIsLoading(true);
              gameStorage.saveSession(selectedCountry);
              setTimeout(() => {
                router.push("/game");
              }, 1500);
            }}
            disabled={isLoading}
            className={`flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all cursor-pointer group scale-100 hover:scale-[1.05] active:scale-[0.98] ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <Play className="h-4 w-4" />
            {isLoading ? "Memproses..." : "Mulai Simulasi"}
          </button>
        </div>
      </footer>

      {/* 4. LOADING OVERLAY */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-zinc-950/80 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-500">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-2 border-r-2 border-cyan-500 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="h-16 w-16 rounded-full border-b-2 border-l-2 border-blue-600 animate-spin"
                style={{ animationDirection: 'reverse' }}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-2">
            <h2 className="text-xl font-bold tracking-widest text-white uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Menyiapkan Simulasi
            </h2>
            <p className="text-zinc-500 text-xs animate-pulse uppercase tracking-tight">Sedang memproses data negara {currentData?.name_id}...</p>
          </div>
        </div>
      )}

      {/* 5. SELECTION WARNING MODAL */}
      {showSelectionWarning && (
        <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col items-center text-center gap-6">
            <div className="h-20 w-20 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <ShieldAlert size={40} className="text-amber-500 animate-pulse" />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-black text-white uppercase tracking-wider">Akses Ditolak</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Anda belum memilih kedaulatan negara. <br />
                Silakan pilih satu negara pada peta atau daftar dibawah untuk memulai simulasi.
              </p>
            </div>

            <button
              onClick={() => setShowSelectionWarning(false)}
              className="w-full py-4 bg-zinc-100 text-zinc-950 font-black uppercase tracking-widest rounded-2xl hover:bg-white active:scale-95 transition-all cursor-pointer"
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | number }) {
  const displayValue = typeof value === 'number' ? value.toLocaleString('id-ID') : value;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-amber-800/10 border border-amber-800/10 shadow-sm">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] text-amber-900/60 font-bold uppercase tracking-wider leading-none mb-0.5">{label}</span>
        <span className="font-black text-amber-950 text-xs leading-tight italic">
          {label === "Kas Negara" && typeof value === 'number' ? `Rp ${displayValue}` : displayValue}
        </span>
      </div>
    </div>
  );
}
