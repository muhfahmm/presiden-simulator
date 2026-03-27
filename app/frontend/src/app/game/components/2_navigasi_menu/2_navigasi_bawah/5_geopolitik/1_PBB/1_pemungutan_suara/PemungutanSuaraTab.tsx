import { useState, useEffect } from "react";
import { FileText, AlertTriangle, Ban, ChevronLeft, Search, Clock, Globe, ThumbsUp, ThumbsDown } from "lucide-react"
import { gameStorage } from "@/app/game/gamestorage";
import { countries, asiaCountries, afrikaCountries, eropaCountries, naCountries, saCountries, oceaniaCountries } from "@/app/database/data/countries/region/index";

interface ResolutionItem {
  name: string;
  description: string;
}

interface ResolutionMenu {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  borderColor: string;
  bgColor: string;
  glowColor: string;
  items: ResolutionItem[];
}

const resolutionMenus: ResolutionMenu[] = [
  {
    id: "rancangan",
    title: "Rancangan Resolusi",
    description: "Inisiasi regulasi internasional baru untuk menetapkan standar global dan kerja sama antar negara anggota.",
    icon: FileText,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    bgColor: "bg-cyan-500/5",
    glowColor: "shadow-cyan-500/10",
    items: [
      { name: "Embargo Pelatihan Militer", description: "Melarang pengiriman instruktur militer dan latihan tempur bersama dengan negara target guna menekan kekuatan pertahanannya." },
      { name: "Larangan Perang", description: "Resolusi PBB yang mewajibkan gencatan senjata total dan melarang segala bentuk agresi militer oleh negara target di wilayah manapun." },
      { name: "Embargo Penjualan Teknologi", description: "Pembatasan ekspor komponen elektronik sensitif, semikonduktor, dan lisensi perangkat lunak strategis ke negara target." },
      { name: "Embargo Penjualan Sumber Daya", description: "Melarang distribusi bahan mentah seperti minyak, gas, dan mineral strategis yang menjadi motor utama ekonomi negara target." },
      { name: "Embargo Penjualan Senjata", description: "Boikot total terhadap perdagangan alutsista, termasuk suku cadang pesawat tempur dan amunisi kaliber besar." },
      { name: "Embargo Penjualan Jasa", description: "Pemutusan akses terhadap layanan konsultasi finansial, asuransi pelayaran, dan bantuan logistik internasional." },
    ]
  },
  {
    id: "sanksi",
    title: "Sanksi",
    description: "Tindakan koersif terhadap negara target untuk memberikan hukuman atas pelanggaran hukum internasional.",
    icon: AlertTriangle,
    color: "text-amber-400",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/5",
    glowColor: "shadow-amber-500/10",
    items: [
      { name: "Sanksi Ekonomi", description: "Pembekuan aset luar negeri pejabat negara target dan pembatasan transaksi perbankan lintas negara (SWIFT exclusion)." },
      { name: "Sanksi Pelatihan Militer", description: "Pembatalan pakta pertahanan dan penarikan seluruh personel militer dari operasi gabungan dengan negara target." },
      { name: "Sanksi Perang", description: "Otorisasi penggunaan kekuatan militer koalisi PBB untuk menjaga perdamaian jika agresi terus berlanjut." },
    ]
  },
  {
    id: "embargo",
    title: "Embargo",
    description: "Pelarangan total perdagangan dan pertukaran komoditas tertentu untuk melumpuhkan sektor strategis negara target.",
    icon: Ban,
    color: "text-rose-400",
    borderColor: "border-rose-500/30",
    bgColor: "bg-rose-500/5",
    glowColor: "shadow-rose-500/10",
    items: [
      { name: "Embargo Ekonomi", description: "Pemutusan total hubungan dagang bilateral, termasuk pelarangan impor produk unggulan dari negara target." },
      { name: "Embargo Teknologi", description: "Isolasi digital total, mencakup pemutusan akses ke server global dan pelarangan platform teknologi luar negeri." },
      { name: "Embargo Sumber Daya", description: "Penutupan jalur distribusi energi dan bahan bakar yang melewati wilayah kedaulatan negara anggota PBB lainnya." },
      { name: "Embargo Jasa", description: "Melarang segala bentuk pergerakan tenaga kerja ahli dan layanan profesional untuk membantu ekonomi negara target." },
      { name: "Embargo Senjata", description: "Pelumpuhan total kekuatan tempur dengan melarang seluruh rantai pasok industri pertahanan negara target secara global." },
    ]
  },
];

const durations = [
  "1 Bulan",
  "3 Bulan",
  "6 Bulan",
  "9 Bulan",
  "1 Tahun"
];

export default function PemungutanSuaraTab() {
  const [selectedItem, setSelectedItem] = useState<{ category: string, name: string, description: string } | null>(null);
  const [selectedDuration, setSelectedDuration] = useState("1 Bulan");
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [userCountry, setUserCountry] = useState<string | null>(null);

  useEffect(() => {
    const session = gameStorage.getSession();
    if (session) {
      const countryName = session.country || localStorage.getItem("selectedCountry") || "Indonesia";
      setUserCountry(countryName);
    }
  }, []);

  const [selectedContinent, setSelectedContinent] = useState("SEMUA");

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

  // Simple Vote Estimation Simulation
  const estimateVotes = () => {
    if (!selectedCountry) return { agree: 0, disagree: 0 };
    // Pseudo-random but semi-stable estimation
    const seed = selectedCountry.name_id?.length || 10;
    const agree = Math.floor((seed * 1337) % 150) + 20;
    const total = 207;
    return { agree, disagree: total - agree };
  };

  const estimation = estimateVotes();

  return (
    <div className="flex-1 overflow-y-auto p-8 animate-in fade-in duration-300 flex flex-col gap-10 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
      {/* SECTION 1: Resolution Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shrink-0">
        {resolutionMenus.map(menu => (
          <div key={menu.id} className={`rounded-3xl border ${menu.borderColor} ${menu.bgColor} shadow-lg ${menu.glowColor} overflow-hidden`}>
            {/* Card Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5">
              <div className={`p-2 rounded-xl bg-zinc-900/80 border border-zinc-800`}>
                <menu.icon className={`h-4 w-4 ${menu.color}`} />
              </div>
              <h3 className={`text-xs font-black uppercase tracking-widest ${menu.color}`}>{menu.title}</h3>
              <span className={`ml-auto text-[10px] font-black px-2 py-0.5 rounded-full border ${menu.borderColor} ${menu.color}`}>
                {menu.items.length} OPSI
              </span>
            </div>
            {/* Card Items */}
            <div className="p-4 flex flex-col gap-2">
              {menu.items.map((item, i) => {
                const isSelected = selectedItem?.name === item.name;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedItem({ category: menu.title, name: item.name, description: item.description })}
                    className={`w-full flex items-center justify-between px-4 py-3 border rounded-2xl transition-all group text-left cursor-pointer ${
                      isSelected 
                        ? "bg-zinc-800 border-zinc-600 shadow-md ring-1 ring-white/10" 
                        : "bg-zinc-900/60 border-zinc-800/50 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-1.5 w-1.5 rounded-full ${isSelected ? menu.color.replace('text-', 'bg-') : 'bg-zinc-700'} group-hover:scale-150 transition-transform`} />
                      <span className={`text-xs font-bold transition-colors uppercase tracking-tight ${isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>{item.name}</span>
                    </div>
                    <span className={`text-[9px] font-black transition-colors uppercase tracking-widest ${isSelected ? "text-white" : "text-zinc-600 group-hover:text-zinc-400"}`}>
                      {isSelected ? "PROSES →" : "→"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>


      {/* SECTION 3: Dynamic Configuration (Rendered below guide if active) */}
      {selectedItem && (
        <div className="flex-1 flex flex-col gap-10 pt-10 border-t border-zinc-800/50 animate-in slide-in-from-bottom duration-500">
          {/* Active Configuration Header */}
          <div className="flex items-center gap-6 p-8 rounded-[32px] bg-zinc-950/40 border border-rose-500/20 shadow-2xl backdrop-blur-sm">
            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 shadow-lg shrink-0">
              <Gavel className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em]">Konfigurasi Aktif</h3>
                <div className="h-px w-12 bg-rose-500/20" />
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{selectedItem.category}</span>
              </div>
              <p className="text-lg font-black text-white uppercase tracking-tight italic mb-1">{selectedItem.name}</p>
              <p className="text-[10px] font-bold text-zinc-400 leading-tight italic uppercase tracking-tight opacity-70 max-w-2xl">
                {selectedItem.description}
              </p>
            </div>
            <button 
              onClick={() => setSelectedItem(null)}
              className="px-6 py-3 rounded-2xl border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-rose-500 hover:border-rose-500/30 transition-all cursor-pointer bg-zinc-900 active:scale-95"
            >
              Reset Pilihan
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 animate-in fade-in duration-1000">
            {/* Config inputs (Duration & Country) */}
            <div className="lg:col-span-7 flex flex-col gap-12">
              
              {/* Durasi */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <Clock className="h-3.5 w-3.5 text-cyan-400" />
                  </div>
                  <h4 className="text-[11px] font-black text-white uppercase tracking-widest">1. Durasi Pelaksanaan</h4>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2.5">
                  {durations.map(d => (
                    <button
                      key={d}
                      onClick={() => setSelectedDuration(d)}
                      className={`px-3 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all cursor-pointer ${
                        selectedDuration === d 
                          ? "bg-cyan-500 text-white border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]" 
                          : "bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Negara */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      <Globe className="h-3.5 w-3.5 text-amber-400" />
                    </div>
                    <h4 className="text-[11px] font-black text-white uppercase tracking-widest">2. Target Negara</h4>
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
                        onClick={() => setSelectedContinent(continent.id)}
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
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800/80 rounded-[20px] pl-14 pr-6 py-5 text-sm text-white placeholder-zinc-700 outline-none focus:border-amber-500/50 focus:bg-zinc-900/20 transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div className="max-h-[350px] grid grid-cols-1 md:grid-cols-2 gap-2.5 overflow-y-auto pr-3 pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                  {filteredCountries.map(c => (
                    <button
                      key={c.name_id}
                      onClick={() => setSelectedCountry(c)}
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

            {/* Right Column: Visualization */}
            <div className="lg:col-span-5">
              <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10 flex flex-col gap-10 h-full shadow-2xl relative overflow-hidden transition-all hover:border-rose-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[60px] rounded-full" />
                
                <div className="relative">
                  <h4 className="text-[11px] font-black text-cyan-400 uppercase tracking-widest mb-10 flex items-center gap-3">
                    <div className="h-1 w-6 bg-cyan-400 rounded-full" />
                    Proyeksi Suara Realtime
                  </h4>
                  
                  {!selectedCountry ? (
                    <div className="py-24 flex flex-col items-center justify-center text-center opacity-30 grayscale transition-all">
                      <div className="p-6 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
                        <Globe className="h-12 w-12 text-zinc-500 animate-pulse" />
                      </div>
                      <p className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400 leading-relaxed">
                        Tentukan Negara Target<br/>Untuk Inisiasi Perhitungan
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-10 animate-in fade-in zoom-in-95 duration-500">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end mb-4">
                          <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Total Populasi PBB</span>
                          <span className="text-xl font-black text-white tracking-tighter">207 <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest ml-1">Voters</span></span>
                        </div>
                        
                        <div className="flex flex-col gap-8 bg-zinc-900/60 border border-zinc-800/50 p-8 rounded-[32px] shadow-inner">
                          <div className="flex flex-col gap-3">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                              <span className="text-emerald-400 flex items-center gap-2"><ThumbsUp className="h-3.5 w-3.5" /> Mendukung</span>
                              <span className="text-white text-base">{estimation.agree}</span>
                            </div>
                            <div className="h-3 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                              <div 
                                className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-[1.5s] ease-out-expo shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                style={{ width: `${(estimation.agree / 207) * 100}%` }}
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-3">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                              <span className="text-rose-400 flex items-center gap-2"><ThumbsDown className="h-3.5 w-3.5" /> Menolak</span>
                              <span className="text-white text-base">{estimation.disagree}</span>
                            </div>
                            <div className="h-3 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                              <div 
                                className="h-full bg-gradient-to-r from-rose-600 to-rose-400 transition-all duration-[1.5s] ease-out-expo shadow-[0_0_15px_rgba(244,63,94,0.3)]"
                                style={{ width: `${(estimation.disagree / 207) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex gap-4">
                        <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                        <p className="text-[10px] text-zinc-400 font-bold leading-relaxed uppercase tracking-tight">Kesepakatan bilateral dan stabilitas ekonomi region akan mempengaruhi hasil akhir voting.</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-auto flex flex-col gap-4">
                  <button 
                    disabled={!selectedCountry}
                    className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center gap-3 group relative overflow-hidden ${
                      selectedCountry 
                        ? "bg-rose-600 border border-rose-500 text-white hover:bg-rose-500 shadow-rose-600/30 cursor-pointer" 
                        : "bg-zinc-800 text-zinc-600 border-zinc-900 cursor-not-allowed grayscale opacity-50"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    Ajukan Resolusi Ke PBB
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Re-using Gavel for decorative purpose
const Gavel = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m14.5 12.5-8 8a2.11 2.11 0 0 1-3-3l8-8" />
    <path d="m16 16 2 2" />
    <path d="m3 7 3 3" />
    <path d="m15 1 8 8" />
    <path d="m9 7 8 8" />
  </svg>
);

