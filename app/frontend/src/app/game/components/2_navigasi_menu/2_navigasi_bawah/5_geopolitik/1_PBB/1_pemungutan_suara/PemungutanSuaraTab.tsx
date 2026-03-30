import { useState, useEffect } from "react";
import { FileText, AlertTriangle, Ban, ChevronLeft, Search, Clock, Globe, ThumbsUp, ThumbsDown } from "lucide-react"
import { gameStorage } from "@/app/game/gamestorage";
import { countries, asiaCountries, afrikaCountries, eropaCountries, naCountries, saCountries, oceaniaCountries } from "@/app/database/data/negara/benua/index";
import { unSecurityCouncilStorage } from "../2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";

interface ResolutionItem {
  name: string;
  description: string;
  effect: string;
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
      { 
        name: "Larangan Perang (Anti-War)", 
        description: "Kesepakatan kolektif antar negara anggota PBB untuk menghentikan seluruh agresi militer aktif.",
        effect: "Membekukan menu Serang Negara. Jika dilanggar, Diplomatic Standing anjlok -50 poin dan otomatis memicu Sanksi Ekonomi."
      },
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
      { 
        name: "Sanksi Ekonomi (Economic Sanction)", 
        description: "Pembatasan akses keuangan dan pembekuan aset negara di bank internasional.",
        effect: "Penurunan Pajak & Daily Revenue sebesar 25%. Biaya pembangunan gedung baru naik 15% karena kesulitan modal."
      },
      { 
        name: "Sanksi Perang (War Sanction)", 
        description: "Hukuman atas agresi militer yang dianggap tidak sah oleh dewan internasional.",
        effect: "Penurunan Combat Readiness armada sebesar 20%. Biaya pemeliharaan Hub Militer naik 30% karena kesulitan rantai pasok taktis."
      },
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
      { 
        name: "Embargo Ekonomi (Total Trade)", 
        description: "Pemutusan total seluruh jalur perdagangan ekspor dan impor dengan dunia luar.",
        effect: "Daily Revenue dari jalur perdagangan anjlok hingga 80%. Penurunan Approval Rating warga sebesar 2% per hari akibat kelangkaan barang konsumsi."
      },
      { 
        name: "Embargo Penjualan Teknologi (Tech)", 
        description: "Larangan pengiriman komponen mikrochip, perangkat lunak, dan data riset dari luar negeri.",
        effect: "Waktu produksi di Cyber Defense dan Program Luar Angkasa melambat 50%. Biaya riset teknologi baru naik 100%."
      },
      { 
        name: "Embargo Penjualan Sumber Daya (Resource)", 
        description: "Pemblokiran akses pasar internasional untuk menjual komoditas mentah dalam negeri.",
        effect: "Pendapatan harian dari Tambang & Rig Minyak turun 60%. Stok bahan baku industri menumpuk namun tidak bernilai uang."
      },
      { 
        name: "Embargo Senjata (Arms Embargo)", 
        description: "Larangan total impor senjata, suku cadang alutsista, dan amunisi dari manufaktur global.",
        effect: "Produksi di Armada Tempur melambat 40%. Amunisi harian berkurang 10% setiap kali melakukan operasi militer tanpa adanya suplai baru."
      },
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

const techItems = ["Semikonduktor", "Mobil", "Sepeda Motor", "Smelter"];
const resourceItems = [
  "Emas", "Uranium", "Batu Bara", "Minyak Bumi", "Gas Alam", "Garam", 
  "Nikel", "Litium", "Tembaga", "Aluminium", "Logam Tanah Jarang", "Bijih Besi"
];

export default function PemungutanSuaraTab() {
  const [selectedItem, setSelectedItem] = useState<{ category: string, name: string, description: string, effect: string } | null>(null);
  const [selectedDuration, setSelectedDuration] = useState("1 Bulan");
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [userCountry, setUserCountry] = useState<string | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState("");
  const [isUNSCMember, setIsUNSCMember] = useState(false);

  useEffect(() => {
    const data = unSecurityCouncilStorage.getData();
    const isMember = data.members.some(m => m.name === "Indonesia");
    setIsUNSCMember(isMember);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      if (selectedItem.name === "Embargo Penjualan Teknologi") {
        setSelectedSubItem(techItems[0]);
      } else if (selectedItem.name === "Embargo Penjualan Sumber Daya") {
        setSelectedSubItem(resourceItems[0]);
      } else {
        setSelectedSubItem("");
      }
    }
  }, [selectedItem]);

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
    if (!selectedCountry) return { agree: 0, abstain: 0, disagree: 0 };
    // Pseudo-random but semi-stable estimation
    const seed = selectedCountry.name_id?.length || 10;
    const total = 207;
    const agree = Math.floor((seed * 1337) % 110) + 40;
    const abstain = Math.floor((seed * 777) % 40) + 10;
    const disagree = Math.max(0, total - agree - abstain);
    
    return { agree, abstain, disagree };
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
                    onClick={() => setSelectedItem({ category: menu.title, name: item.name, description: item.description, effect: item.effect })}
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
          {(() => {
            const getColorClasses = () => {
              if (selectedItem.category === "Rancangan Resolusi") return { text: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/5", glow: "shadow-cyan-500/20", iconBg: "bg-cyan-500/10" };
              if (selectedItem.category === "Sanksi") return { text: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/5", glow: "shadow-amber-500/20", iconBg: "bg-amber-500/10" };
              return { text: "text-rose-400", border: "border-rose-500/30", bg: "bg-rose-500/5", glow: "shadow-rose-500/20", iconBg: "bg-rose-500/10" };
            };
            const theme = getColorClasses();
            
            return (
              <div className={`flex items-start md:items-center gap-8 p-10 rounded-[40px] bg-zinc-950/60 border ${theme.border} ${theme.glow} backdrop-blur-xl group/header transition-all duration-700`}>
                <div className={`p-5 rounded-3xl ${theme.iconBg} border ${theme.border} ${theme.text} shadow-2xl shrink-0 animate-pulse-slow`}>
                  <Gavel className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className={`text-[11px] font-black ${theme.text} uppercase tracking-[0.3em]`}>Konfigurasi Aktif</h3>
                    <div className={`h-px w-16 ${theme.bg.replace('bg-', 'bg-')}`} style={{ background: 'currentColor', opacity: 0.2 }} />
                    <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">{selectedItem.category}</span>
                  </div>
                  <p className="text-3xl font-black text-white uppercase tracking-tighter italic mb-2 drop-shadow-2xl">{selectedItem.name}</p>
                  <p className="text-[12px] font-bold text-zinc-400 leading-relaxed italic uppercase tracking-tight opacity-80 max-w-3xl mb-6">
                    {selectedItem.description}
                  </p>
                  <div className={`flex items-start gap-4 p-6 rounded-[28px] ${theme.bg} border ${theme.border} max-w-3xl animate-in slide-in-from-left duration-700 shadow-inner backdrop-blur-md`}>
                    <div className={`mt-1 p-1 rounded-md ${theme.iconBg}`}>
                      <AlertTriangle className={`h-4 w-4 ${theme.text}`} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className={`text-[10px] font-black ${theme.text} uppercase tracking-widest opacity-60 italic`}>Strategi & Dampak Sistemik</span>
                      <p className="text-[13px] font-black text-white leading-relaxed uppercase tracking-wide">
                         {selectedItem.effect}
                      </p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="px-8 py-4 rounded-2xl border border-zinc-800 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white hover:border-rose-500/50 hover:bg-rose-500/10 transition-all cursor-pointer bg-zinc-900 shadow-2xl active:scale-95 shrink-0"
                >
                  Reset Konfigurasi
                </button>
              </div>
            );
          })()}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 animate-in fade-in duration-1000">
            {/* Config inputs (Duration & Country) */}
            <div className="lg:col-span-7 flex flex-col gap-12">
              
              {/* Durasi */}
                {/* 1. Sub-Item Selection (nomor 1) */}
                {(selectedItem.name === "Embargo Penjualan Teknologi" || selectedItem.name === "Embargo Penjualan Sumber Daya") && (
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
                          onClick={() => setSelectedSubItem(item)}
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

                {/* 2. Durasi */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                      <Clock className="h-3.5 w-3.5 text-cyan-400" />
                    </div>
                    <h4 className="text-[11px] font-black text-white uppercase tracking-widest">2. Durasi Pelaksanaan</h4>
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
                        
                        <div className="flex flex-col gap-6 bg-zinc-900/60 border border-zinc-800/50 p-8 rounded-[32px] shadow-inner">
                          {/* Mendukung */}
                          <div className="flex flex-col gap-3">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-emerald-400">
                              <span className="flex items-center gap-2"><ThumbsUp className="h-3.5 w-3.5" /> Mendukung</span>
                              <span className="text-white text-base">{estimation.agree}</span>
                            </div>
                            <div className="h-2.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                              <div 
                                className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-[1.5s] ease-out-expo shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                style={{ width: `${(estimation.agree / 207) * 100}%` }}
                              />
                            </div>
                          </div>

                          {/* Absen */}
                          <div className="flex flex-col gap-3">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-400">
                              <span className="flex items-center gap-2 underline underline-offset-4 decoration-zinc-700">Absen (Abstain)</span>
                              <span className="text-white text-base">{estimation.abstain}</span>
                            </div>
                            <div className="h-2.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                              <div 
                                className="h-full bg-zinc-700 transition-all duration-[1.5s] ease-out-expo"
                                style={{ width: `${(estimation.abstain / 207) * 100}%` }}
                              />
                            </div>
                          </div>

                          {/* Menolak */}
                          <div className="flex flex-col gap-3">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-rose-400">
                              <span className="flex items-center gap-2"><ThumbsDown className="h-3.5 w-3.5" /> Menolak</span>
                              <span className="text-white text-base">{estimation.disagree}</span>
                            </div>
                            <div className="h-2.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
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
                  {!isUNSCMember && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex gap-3 mb-2">
                       <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0" />
                       <p className="text-[10px] text-rose-400 font-bold leading-relaxed uppercase tracking-tight">
                         Hanya Anggota Dewan Keamanan yang diizinkan mengajukan draf resolusi strategis ke Majelis Umum.
                       </p>
                    </div>
                  )}
                  <button 
                    disabled={!selectedCountry || !isUNSCMember}
                    className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center gap-3 group relative overflow-hidden ${
                      (selectedCountry && isUNSCMember)
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

