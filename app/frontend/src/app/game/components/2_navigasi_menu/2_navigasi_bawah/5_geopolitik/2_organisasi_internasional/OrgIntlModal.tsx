"use client"

import { useState, useEffect, useMemo } from "react";
import { X, Landmark, Globe, Shield, Coins, Users, Activity, TrendingUp, Info, Award, MapPin, Search, GraduationCap, Laptop, ChefHat, Plane, Anchor, Radio, Cloud, Briefcase, HeartPulse, Scale, SearchSlash, AlertCircle, ChevronRight, Zap } from "lucide-react"
import { gameStorage } from "@/app/game/gamestorage";

interface Organization {
  id: string;
  displayId: string;
  name: string;
  desc: string;
  focus: string;
  icon: any;
  color: string;
  benefit: string;
  category: "UN" | "REGIONAL";
  region?: string;
}

const ORGANIZATIONS: Organization[] = [
  // --- UN ORGANIZATIONS (1 - 12) ---
  { id: "imf", displayId: "1", name: "Dana Moneter Internasional (IMF)", desc: "Stabilitas sistem keuangan global dan nilai tukar mata uang.", focus: "Ekonomi & Moneter", icon: Coins, color: "text-blue-400", benefit: "Stabilitas Kurs", category: "UN" },
  { id: "world_bank", displayId: "2", name: "Bank Dunia", desc: "Pemberian pinjaman dan bantuan teknis untuk pembangunan ekonomi.", focus: "Pembangunan", icon: Landmark, color: "text-emerald-400", benefit: "Dana Infrastruktur", category: "UN" },
  { id: "interpol", displayId: "3", name: "Interpol", desc: "Fasilitas kerja sama polisi internasional dan kontrol kejahatan lintas batas.", focus: "Keamanan Global", icon: Shield, color: "text-indigo-400", benefit: "Intel Sharing", category: "UN" },
  { id: "who", displayId: "4", name: "Organisasi Kesehatan Dunia (WHO)", desc: "Koordinasi kesehatan global dan penanganan pandemi/wabah.", focus: "Kesehatan", icon: HeartPulse, color: "text-rose-400", benefit: "Bantuan Medis", category: "UN" },
  { id: "unesco", displayId: "5", name: "UNESCO", desc: "Pendidikan, ilmu pengetahuan, dan pelestarian budaya dunia.", focus: "Budaya & Pendidikan", icon: GraduationCap, color: "text-amber-400", benefit: "Riset Edukasi", category: "UN" },
  { id: "wto", displayId: "6", name: "Organisasi Perdagangan Dunia (WTO)", desc: "Regulasi perdagangan antarnegara dan penyelesaian sengketa pasar.", focus: "Perdagangan", icon: TrendingUp, color: "text-cyan-400", benefit: "Standar Ekspor", category: "UN" },
  { id: "ilo", displayId: "7", name: "Organisasi Buruh Internasional (ILO)", desc: "Penetapan standar tenaga kerja internasional dan perlindungan pekerja.", focus: "Ketenagakerjaan", icon: Users, color: "text-sky-400", benefit: "Hak Pekerja", category: "UN" },
  { id: "fao", displayId: "8", name: "Organisasi Pangan dan Pertanian (FAO)", desc: "Upaya mengalahkan kelaparan dan standarisasi pangan dunia.", focus: "Pangan", icon: ChefHat, color: "text-orange-400", benefit: "Subsidi Tani", category: "UN" },
  { id: "icao", displayId: "9", name: "Organisasi Penerbangan Sipil Internasional (ICAO)", desc: "Standar keselamatan dan navigasi penerbangan internasional.", focus: "Penerbangan", icon: Plane, color: "text-zinc-400", benefit: "Izin Terbang", category: "UN" },
  { id: "imo", displayId: "10", name: "Organisasi Maritim Internasional (IMO)", desc: "Keamanan kapal dan pencegahan polusi laut dari kapal.", focus: "Maritim", icon: Anchor, color: "text-teal-400", benefit: "Akses Dermaga", category: "UN" },
  { id: "itu", displayId: "11", name: "Organisasi Telekomunikasi Internasional (ITU)", desc: "Standarisasi teknologi informasi dan komunikasi global.", focus: "Teknologi", icon: Radio, color: "text-violet-400", benefit: "Alokasi Frekuensi", category: "UN" },
  { id: "wmo", displayId: "12", name: "Organisasi Meteorologi Dunia (WMO)", desc: "Layanan cuaca, hidrologi, dan observasi sirkulasi bumi.", focus: "Iklim", icon: Cloud, color: "text-blue-300", benefit: "Analisis Cuaca", category: "UN" },

  // --- REGIONAL ORGANIZATIONS (1 - 16) ---
  { id: "asean", displayId: "1", name: "ASEAN", desc: "Percepat pertumbuhan ekonomi dan stabilitas politik Asia Tenggara.", focus: "Ekonomi & Keamanan", icon: MapPin, color: "text-rose-500", benefit: "+15% Trade", category: "REGIONAL", region: "Asia Tenggara" },
  { id: "eu", displayId: "2", name: "Uni Eropa (EU)", desc: "Integrasi ekonomi, politik, dan mata uang tunggal di benua Eropa.", focus: "Ekonomi & Moneter", icon: Landmark, color: "text-blue-600", benefit: "Pasar Tunggal", category: "REGIONAL", region: "Eropa" },
  { id: "arab_league", displayId: "3", name: "Liga Arab", desc: "Kerja sama bangsa Arab di Timur Tengah dan Afrika Utara.", focus: "Budaya & Politik", icon: Users, color: "text-emerald-700", benefit: "Blok Arab", category: "REGIONAL", region: "Timur Tengah" },
  { id: "au", displayId: "4", name: "Uni Afrika (AU)", desc: "Integrasi politik and sosial-ekonomi di benua Afrika.", focus: "Pembangunan & Keamanan", icon: MapPin, color: "text-green-600", benefit: "Stabilitas AU", category: "REGIONAL", region: "Afrika" },
  { id: "oic", displayId: "5", name: "Organisasi Kerja Sama Islam (OKI)", desc: "Solidaritas dunia muslim dalam kerja sama sosial dan politik.", focus: "Solidaritas Dunia Muslim", icon: Users, color: "text-emerald-500", benefit: "Sol. Islam", category: "REGIONAL", region: "Global" },
  { id: "brics", displayId: "6", name: "BRICS", desc: "Blok ekonomi alternatif untuk menyeimbangkan dominasi barat.", focus: "Ekonomi Alternatif", icon: Coins, color: "text-orange-600", benefit: "Inv. Alternatif", category: "REGIONAL", region: "Global" },
  { id: "nato", displayId: "7", name: "NATO", desc: "Aliansi pertahanan militer kolektif negara-negara Atlantik Utara.", focus: "Pertahanan Kolektif", icon: Shield, color: "text-indigo-600", benefit: "Mutual Defense", category: "REGIONAL", region: "Atlantik" },
  { id: "opec", displayId: "8", name: "OPEC", desc: "Kontrol harga energi dan koordinasi kebijakan minyak bumi.", focus: "Harga Energi Dunia", icon: Activity, color: "text-emerald-600", benefit: "Harga Minyak", category: "REGIONAL", region: "Global (Minyak)" },
  { id: "g20", displayId: "9", name: "G20", desc: "Forum kerja sama ekonomi internasional antaranegara besar.", focus: "Koordinasi Global", icon: Globe, color: "text-cyan-600", benefit: "G20 Coord.", category: "REGIONAL", region: "Global" },
  { id: "apec", displayId: "10", name: "APEC", desc: "Forum ekonomi Pasifik untuk mempromosikan perdagangan bebas.", focus: "Perdagangan Bebas", icon: TrendingUp, color: "text-blue-500", benefit: "Lib. Pasifik", category: "REGIONAL", region: "Asia-Pasifik" },
  { id: "sco", displayId: "11", name: "SCO", desc: "Shanghai Cooperation Organization - Kerja sama keamanan Eurasia.", focus: "Keamanan Eurasia", icon: Shield, color: "text-blue-700", benefit: "Eurasia Sec.", category: "REGIONAL", region: "Eurasia" },
  { id: "mercosur", displayId: "12", name: "MERCOSUR", desc: "Blok perdagangan dan integrasi ekonomi di Amerika Selatan.", focus: "Blok Dagang Latin", icon: TrendingUp, color: "text-emerald-700", benefit: "Latin Market", category: "REGIONAL", region: "Amerika Selatan" },
  { id: "commonwealth", displayId: "13", name: "Commonwealth", desc: "Negara Persemakmuran Inggris - Hubungan sejarah & politik.", focus: "Hubungan Politik", icon: Award, color: "text-sky-700", benefit: "Beasiswa UK", category: "REGIONAL", region: "Global" },
  { id: "g7", displayId: "14", name: "G7", desc: "Negara Maju - Kelompok negara dengan pengaruh ekonomi terbesar.", focus: "Ekonomi Global", icon: Briefcase, color: "text-zinc-600", benefit: "Fiscal Policy", category: "REGIONAL", region: "Global" },
  { id: "quad", displayId: "15", name: "QUAD", desc: "Aliansi strategis keamanan di wilayah Indo-Pasifik.", focus: "Keamanan Indo-Pac", icon: Shield, color: "text-sky-600", benefit: "Patroli Indo", category: "REGIONAL", region: "Indo-Pasifik" },
  { id: "oecd", displayId: "16", name: "OECD", desc: "Standarisasi kebijakan ekonomi dan tata kelola negara maju.", focus: "Standar Kebijakan", icon: Scale, color: "text-cyan-700", benefit: "Eco Cert.", category: "REGIONAL", region: "Maju" }
];

export default function OrgIntlModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"UN" | "REGIONAL">("UN");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCountry, setCurrentCountry] = useState("Indonesia");

  useEffect(() => {
    const session = gameStorage.getSession();
    if (session) {
      setCurrentCountry(session.country || localStorage.getItem("selectedCountry") || "Indonesia");
    }
  }, [isOpen]);

  const filteredOrgs = useMemo(() => {
    return ORGANIZATIONS.filter(org => 
      org.category === activeTab &&
      (org.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       org.focus.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [activeTab, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8 overflow-hidden">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[98vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative text-zinc-100 italic-none">
        
        {/* HEADER SECTION */}
        <div className="px-10 py-8 border-b border-zinc-800/50 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-zinc-900/30 sticky top-0 z-20 backdrop-blur-xl">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-purple-500/15 rounded-2xl border border-purple-500/20 group hover:scale-105 transition-transform duration-500">
               <Landmark className="h-8 w-8 text-purple-500" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight italic uppercase leading-none">Organisasi Internasional</h2>
              <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mt-2 opacity-60">Global Governance & Regional Strategic Alliances • Registry: {currentCountry}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-focus-within:text-purple-500 transition-colors" />
              <input 
                type="text" 
                placeholder="CARI ORGANISASI / FOKUS..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-black/40 border border-zinc-800 rounded-2xl py-3.5 pl-12 pr-6 text-[11px] font-black text-white placeholder:text-zinc-700 outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all w-full md:w-64 uppercase tracking-widest"
              />
            </div>
            <button onClick={onClose} className="p-3.5 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_20px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1 font-sans">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* TAB NAVIGATION */}
        <div className="px-10 py-5 border-b border-zinc-800/30 bg-zinc-950/40 flex items-center justify-between sticky top-[105px] z-10 backdrop-blur-md">
          <div className="flex items-center gap-3 bg-black/40 p-2 rounded-2xl border border-zinc-800/50">
            <button 
              onClick={() => setActiveTab("UN")}
              className={`px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center gap-3 cursor-pointer ${activeTab === "UN" ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"}`}
            >
              Organisasi PBB & Global
              <span className={`px-2 py-0.5 rounded-md text-[9px] ${activeTab === "UN" ? "bg-white/20 text-white" : "bg-zinc-800 text-zinc-600"}`}>12</span>
            </button>
            <button 
              onClick={() => setActiveTab("REGIONAL")}
              className={`px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center gap-3 cursor-pointer ${activeTab === "REGIONAL" ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"}`}
            >
              Organisasi Regional & Blok
              <span className={`px-2 py-0.5 rounded-md text-[9px] ${activeTab === "REGIONAL" ? "bg-white/20 text-white" : "bg-zinc-800 text-zinc-600"}`}>16</span>
            </button>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-10 no-scrollbar bg-[radial-gradient(circle_at_top_right,_#0a0a0f_0%,_#050508_100%)]">
          {filteredOrgs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 animate-in fade-in slide-in-from-bottom-5 duration-700">
              {filteredOrgs.map((org) => (
                <div key={org.id} className="group bg-zinc-900/10 border border-zinc-800/40 hover:border-purple-500/30 hover:bg-zinc-900/30 p-6 rounded-[32px] transition-all duration-500 flex flex-col gap-6 relative backdrop-blur-sm shadow-xl hover:shadow-purple-500/5 overflow-hidden">
                  
                  {/* Row 1: Header (Name & Icon) */}
                  <div className="bg-zinc-900/40 border border-zinc-800/30 rounded-2xl p-4 relative overflow-hidden h-[120px] flex flex-col justify-center">
                     <div className="absolute top-2 right-2 p-1.5 opacity-5 group-hover:opacity-10 transition-opacity">
                        <org.icon size={60} />
                     </div>
                     <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1.5">Nama Organisasi</span>
                     <h4 className="text-lg font-black text-amber-500 uppercase italic leading-none tracking-tight pr-4">
                        {org.name}
                     </h4>
                  </div>

                  {/* Row 2: Manfaat Strategis */}
                  <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-4 py-3 flex items-center justify-between group hover:border-rose-500/20 transition-all">
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-rose-500/10 rounded-lg">
                           <Activity size={14} className="text-rose-500" />
                        </div>
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Manfaat</span>
                     </div>
                     <div className="text-right">
                        <span className="text-[11px] font-black text-rose-500 uppercase italic">{org.benefit}</span>
                     </div>
                  </div>

                  {/* Row 3: Status / Dampak */}
                  <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-4 py-3 flex items-center justify-between group hover:border-cyan-500/20 transition-all">
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyan-500/10 rounded-lg">
                           <Zap size={14} className="text-cyan-500" />
                        </div>
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Dampak</span>
                     </div>
                     <div className="text-right">
                        <span className="text-[11px] font-black text-cyan-500 uppercase italic">SUPPLY</span>
                     </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="space-y-2 mt-auto">
                    <button className="w-full py-3 px-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 text-[9px] font-black text-zinc-300 uppercase tracking-[0.15em] flex items-center justify-between group/btn transition-all active:scale-[0.98] cursor-pointer">
                      <span>Lihat Anggota</span>
                      <Users size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full py-3 px-6 rounded-2xl bg-purple-600/10 border border-purple-500/20 hover:bg-purple-600/20 hover:border-purple-500/40 text-[9px] font-black text-purple-400 uppercase tracking-[0.15em] flex items-center justify-between group/btn-apply transition-all active:scale-[0.98] cursor-pointer">
                      <span>Kirim Permohonan</span>
                      <ChevronRight size={12} className="group-hover/btn-apply:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Numerical ID Badge */}
                  <div className="absolute top-1 right-3 opacity-20">
                     <span className="text-[10px] font-black text-zinc-800">{org.displayId.padStart(2, '0')}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[50vh] text-center gap-6 animate-in fade-in duration-1000">
               <div className="p-8 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-zinc-800">
                  <SearchSlash size={80} strokeWidth={1} />
               </div>
               <div className="space-y-2">
                  <h4 className="text-2xl font-black text-zinc-500 uppercase italic tracking-widest">Data Kosong</h4>
                  <p className="text-xs text-zinc-700 font-bold uppercase tracking-widest max-w-md mx-auto">Tidak ada hasil pencarian dalam kategori ini.</p>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
