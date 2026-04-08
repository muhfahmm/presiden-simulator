"use client"

import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { X, Landmark, Globe, Shield, Coins, Users, Activity, TrendingUp, Info, Award, MapPin, Search, GraduationCap, Laptop, ChefHat, Plane, Anchor, Radio, Cloud, Briefcase, HeartPulse, Scale, SearchSlash, AlertCircle, ChevronRight, Zap, Loader2 } from "lucide-react"
import { gameStorage } from "@/app/game/gamestorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";


// Dynamic Imports for UN Organizations
const OrgDetailComponents: Record<string, any> = {
  imf: lazy(() => import("./1_organisasi_PBB/1_Dana_Moneter_Internasional")),
  world_bank: lazy(() => import("./1_organisasi_PBB/2_Bank_Dunia")),
  interpol: lazy(() => import("./1_organisasi_PBB/3_Interpol")),
  who: lazy(() => import("./1_organisasi_PBB/4_Organisasi_Kesehatan_Dunia")),
  unesco: lazy(() => import("./1_organisasi_PBB/5_Organisasi_Pendidikan_Ilmu_Pengetahuan_dan_Kebudayaan_PBB")),
  wto: lazy(() => import("./1_organisasi_PBB/6_Organisasi_Perdagangan_Dunia")),
  ilo: lazy(() => import("./1_organisasi_PBB/7_Organisasi_Buruh_Internasional")),
  fao: lazy(() => import("./1_organisasi_PBB/8_Organisasi_Pangan_dan_Pertanian")),
  icao: lazy(() => import("./1_organisasi_PBB/9_Organisasi_Penerbangan_Sipil_Internasional")),
  imo: lazy(() => import("./1_organisasi_PBB/10_Organisasi_Maritim_Internasional")),
  itu: lazy(() => import("./1_organisasi_PBB/11_Organisasi_Telekomunikasi_Internasional")),
  wmo: lazy(() => import("./1_organisasi_PBB/12_Organisasi_Meteorologi_Dunia")),
};

// Dynamic Imports for Members List
const OrgMembersComponents: Record<string, any> = {
  imf: lazy(() => import("./1_organisasi_PBB/1_Dana_Moneter_Internasional/anggota")),
  world_bank: lazy(() => import("./1_organisasi_PBB/2_Bank_Dunia/anggota")),
  interpol: lazy(() => import("./1_organisasi_PBB/3_Interpol/anggota")),
  who: lazy(() => import("./1_organisasi_PBB/4_Organisasi_Kesehatan_Dunia/anggota")),
  unesco: lazy(() => import("./1_organisasi_PBB/5_Organisasi_Pendidikan_Ilmu_Pengetahuan_dan_Kebudayaan_PBB/anggota")),
  wto: lazy(() => import("./1_organisasi_PBB/6_Organisasi_Perdagangan_Dunia/anggota")),
  ilo: lazy(() => import("./1_organisasi_PBB/7_Organisasi_Buruh_Internasional/anggota")),
  fao: lazy(() => import("./1_organisasi_PBB/8_Organisasi_Pangan_dan_Pertanian/anggota")),
  icao: lazy(() => import("./1_organisasi_PBB/9_Organisasi_Penerbangan_Sipil_Internasional/anggota")),
  imo: lazy(() => import("./1_organisasi_PBB/10_Organisasi_Maritim_Internasional/anggota")),
  itu: lazy(() => import("./1_organisasi_PBB/11_Organisasi_Telekomunikasi_Internasional/anggota")),
  wmo: lazy(() => import("./1_organisasi_PBB/12_Organisasi_Meteorologi_Dunia/anggota")),
};

interface Organization {
  id: string;
  displayId: string;
  name: string;
  desc: string;
  focus: string;
  icon: any;
  color: string;
  benefit: string;
  impact: string;
  category: "UN" | "REGIONAL";
  region?: string;
}

const ORGANIZATIONS: Organization[] = [
  // --- UN ORGANIZATIONS (1 - 12) ---
  { id: "imf", displayId: "1", name: "Dana Moneter Internasional (IMF)", desc: "Stabilitas sistem keuangan global dan nilai tukar mata uang.", focus: "Ekonomi & Moneter", icon: Coins, color: "text-blue-400", benefit: "Stabilitas Kurs", impact: "Pinjaman Darurat & Inflasi -10%", category: "UN" },
  { id: "world_bank", displayId: "2", name: "Bank Dunia", desc: "Pemberian pinjaman dan bantuan teknis untuk pembangunan ekonomi.", focus: "Pembangunan", icon: Landmark, color: "text-emerald-400", benefit: "Dana Infrastruktur", impact: "Biaya Bangun -20%", category: "UN" },
  { id: "interpol", displayId: "3", name: "Interpol", desc: "Fasilitas kerja sama polisi internasional dan kontrol kejahatan lintas batas.", focus: "Keamanan Global", icon: Shield, color: "text-indigo-400", benefit: "Intel Sharing", impact: "Kriminalitas -15%", category: "UN" },
  { id: "who", displayId: "4", name: "Organisasi Kesehatan Dunia (WHO)", desc: "Koordinasi kesehatan global dan penanganan pandemi/wabah.", focus: "Kesehatan", icon: HeartPulse, color: "text-rose-400", benefit: "Bantuan Medis", impact: "Kesehatan +20%", category: "UN" },
  { id: "unesco", displayId: "5", name: "UNESCO", desc: "Pendidikan, ilmu pengetahuan, dan pelestarian budaya dunia.", focus: "Budaya & Pendidikan", icon: GraduationCap, color: "text-amber-400", benefit: "Riset Edukasi", impact: "Pendidikan +15%", category: "UN" },
  { id: "wto", displayId: "6", name: "Organisasi Perdagangan Dunia (WTO)", desc: "Regulasi perdagangan antarnegara dan penyelesaian sengketa pasar.", focus: "Perdagangan", icon: TrendingUp, color: "text-cyan-400", benefit: "Standar Ekspor", impact: "Ekspor +10%", category: "UN" },
  { id: "ilo", displayId: "7", name: "Organisasi Buruh Internasional (ILO)", desc: "Penetapan standar tenaga kerja internasional dan perlindungan pekerja.", focus: "Ketenagakerjaan", icon: Users, color: "text-sky-400", benefit: "Hak Pekerja", impact: "Produktivitas +5%", category: "UN" },
  { id: "fao", displayId: "8", name: "Organisasi Pangan dan Pertanian (FAO)", desc: "Upaya mengalahkan kelaparan dan standarisasi pangan dunia.", focus: "Pangan", icon: ChefHat, color: "text-orange-400", benefit: "Subsidi Tani", impact: "Ketahanan Pangan +15%", category: "UN" },
  { id: "icao", displayId: "9", name: "Organisasi Penerbangan Sipil Internasional (ICAO)", desc: "Standar keselamatan dan navigasi penerbangan internasional.", focus: "Penerbangan", icon: Plane, color: "text-zinc-400", benefit: "Izin Terbang", impact: "Keamanan Udara +10%", category: "UN" },
  { id: "imo", displayId: "10", name: "Organisasi Maritim Internasional (IMO)", desc: "Keamanan kapal dan pencegahan polusi laut dari kapal.", focus: "Maritim", icon: Anchor, color: "text-teal-400", benefit: "Akses Dermaga", impact: "Logistik Laut +10%", category: "UN" },
  { id: "itu", displayId: "11", name: "Organisasi Telekomunikasi Internasional (ITU)", desc: "Standarisasi teknologi informasi dan komunikasi global.", focus: "Teknologi", icon: Radio, color: "text-violet-400", benefit: "Alokasi Frekuensi", impact: "Konektivitas +20%", category: "UN" },
  { id: "wmo", displayId: "12", name: "Organisasi Meteorologi Dunia (WMO)", desc: "Layanan cuaca, hidrologi, dan observasi sirkulasi bumi.", focus: "Iklim", icon: Cloud, color: "text-blue-300", benefit: "Analisis Cuaca", impact: "Prediksi Bencana +15%", category: "UN" },

  // --- REGIONAL ORGANIZATIONS (1 - 16) ---
  { id: "asean", displayId: "1", name: "ASEAN", desc: "Percepat pertumbuhan ekonomi dan stabilitas politik Asia Tenggara.", focus: "Ekonomi & Keamanan", icon: MapPin, color: "text-rose-500", benefit: "+15% Trade", impact: "Ekon. Regional", category: "REGIONAL", region: "Asia Tenggara" },
  { id: "eu", displayId: "2", name: "Uni Eropa (EU)", desc: "Integrasi ekonomi, politik, and mata uang tunggal di benua Eropa.", focus: "Ekonomi & Moneter", icon: Landmark, color: "text-blue-600", benefit: "Pasar Tunggal", impact: "Mata Uang Tunggal", category: "REGIONAL", region: "Eropa" },
  { id: "arab_league", displayId: "3", name: "Liga Arab", desc: "Kerja sama bangsa Arab di Timur Tengah dan Afrika Utara.", focus: "Budaya & Politik", icon: Users, color: "text-emerald-700", benefit: "Blok Arab", impact: "Aliansi Politik", category: "REGIONAL", region: "Timur Tengah" },
  { id: "au", displayId: "4", name: "Uni Afrika (AU)", desc: "Integrasi politik and sosial-ekonomi di benua Afrika.", focus: "Pembangunan & Keamanan", icon: MapPin, color: "text-green-600", benefit: "Stabilitas AU", impact: "Keamanan Benua", category: "REGIONAL", region: "Afrika" },
  { id: "oic", displayId: "5", name: "Organisasi Kerja Sama Islam (OKI)", desc: "Solidaritas dunia muslim dalam kerja sama sosial dan politik.", focus: "Solidaritas Dunia Muslim", icon: Users, color: "text-emerald-500", benefit: "Sol. Islam", impact: "Blok Muslim", category: "REGIONAL", region: "Global" },
  { id: "brics", displayId: "6", name: "BRICS", desc: "Blok ekonomi alternatif untuk menyeimbangkan dominasi barat.", focus: "Ekonomi Alternatif", icon: Coins, color: "text-orange-600", benefit: "Inv. Alternatif", impact: "Dedolarisasi", category: "REGIONAL", region: "Global" },
  { id: "nato", displayId: "7", name: "NATO", desc: "Aliansi pertahanan militer kolektif negara-negara Atlantik Utara.", focus: "Pertahanan Kolektif", icon: Shield, color: "text-indigo-600", benefit: "Mutual Defense", impact: "Payung Nuklir", category: "REGIONAL", region: "Atlantik" },
  { id: "opec", displayId: "8", name: "OPEC", desc: "Kontrol harga energi dan koordinasi kebijakan minyak bumi.", focus: "Harga Energi Dunia", icon: Activity, color: "text-emerald-600", benefit: "Harga Minyak", impact: "Kartel Energi", category: "REGIONAL", region: "Global (Minyak)" },
  { id: "g20", displayId: "9", name: "G20", desc: "Forum kerja sama ekonomi internasional antaranegara besar.", focus: "Koordinasi Global", icon: Globe, color: "text-cyan-600", benefit: "G20 Coord.", impact: "Stabilitas G20", category: "REGIONAL", region: "Global" },
  { id: "apec", displayId: "10", name: "APEC", desc: "Forum ekonomi Pasifik untuk mempromosikan perdagangan bebas.", focus: "Perdagangan Bebas", icon: TrendingUp, color: "text-blue-500", benefit: "Lib. Pasifik", impact: "Arus Dagang", category: "REGIONAL", region: "Asia-Pasifik" },
  { id: "sco", displayId: "11", name: "SCO", desc: "Shanghai Cooperation Organization - Kerja sama keamanan Eurasia.", focus: "Keamanan Eurasia", icon: Shield, color: "text-blue-700", benefit: "Eurasia Sec.", impact: "Keamanan SCO", category: "REGIONAL", region: "Eurasia" },
  { id: "oas", displayId: "12", name: "OAS", desc: "Organisasi Negara-Negara Amerika untuk solidaritas regional.", focus: "Demokrasi & HAM", icon: Users, color: "text-blue-400", benefit: "Americas Net", impact: "Stabilitas OAS", category: "REGIONAL", region: "Amerika" },
  { id: "gcc", displayId: "13", name: "GCC", desc: "Dewan Kerja Sama Teluk untuk integrasi ekonomi negara Arab Teluk.", focus: "Integrasi Teluk", icon: Landmark, color: "text-emerald-600", benefit: "Gulf Market", impact: "Kemakmuran Teluk", category: "REGIONAL", region: "Teluk" },
  { id: "mercosur", displayId: "14", name: "MERCOSUR", desc: "Blok perdagangan dan integrasi ekonomi di Amerika Selatan.", focus: "Blok Dagang Latin", icon: TrendingUp, color: "text-emerald-700", benefit: "Latin Market", impact: "Ekon. Selatan", category: "REGIONAL", region: "Amerika Selatan" },
  { id: "commonwealth", displayId: "15", name: "Commonwealth", desc: "Negara Persemakmuran Inggris - Hubungan sejarah & politik.", focus: "Hubungan Politik", icon: Award, color: "text-sky-700", benefit: "Beasiswa UK", impact: "Diplomasi Persemakmuran", category: "REGIONAL", region: "Global" },
  { id: "g7", displayId: "16", name: "G7", desc: "Negara Maju - Kelompok negara dengan pengaruh ekonomi terbesar.", focus: "Ekonomi Global", icon: Briefcase, color: "text-zinc-600", benefit: "Fiscal Policy", impact: "Kebijakan Global", category: "REGIONAL", region: "Global" },
  { id: "quad", displayId: "15", name: "QUAD", desc: "Aliansi strategis keamanan di wilayah Indo-Pasifik.", focus: "Keamanan Indo-Pac", icon: Shield, color: "text-sky-600", benefit: "Patroli Indo", impact: "Latihan Bersama", category: "REGIONAL", region: "Indo-Pasifik" },
  { id: "oecd", displayId: "16", name: "OECD", desc: "Standarisasi kebijakan ekonomi dan tata kelola negara maju.", focus: "Standar Kebijakan", icon: Scale, color: "text-cyan-700", benefit: "Eco Cert.", impact: "Standar Global", category: "REGIONAL", region: "Maju" }
];

export default function OrgIntlModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"UN" | "REGIONAL">("UN");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCountry, setCurrentCountry] = useState("Indonesia");
  const [selectedOrgId, setSelectedOrgId] = useState<string | null>(null);
  const [viewingMembersOrgId, setViewingMembersOrgId] = useState<string | null>(null);
  const [currentCash, setCurrentCash] = useState(budgetStorage.getData().anggaran);
  const [currentDate, setCurrentDate] = useState("");

  const updateBudget = () => {
    setCurrentCash(budgetStorage.getData().anggaran);
  };

  useEffect(() => {
    const session = gameStorage.getSession();
    if (session) {
      setCurrentCountry(session.country || localStorage.getItem("selectedCountry") || "Indonesia");
    }
    
    // Get current date from storage
    const storedDate = localStorage.getItem("em4_game_date");
    if (storedDate) {
      const dateObj = JSON.parse(storedDate);
      setCurrentDate(`${dateObj.day} ${dateObj.month} ${dateObj.year}`);
    }

    updateBudget();
  }, [isOpen]);

  // Handle keyboard shortcut (Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('org-search-input')?.focus();
      }
      
      if (e.key === 'Escape') {
        e.stopPropagation();
        if (viewingMembersOrgId) {
          setViewingMembersOrgId(null);
        } else if (selectedOrgId) {
          setSelectedOrgId(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewingMembersOrgId, selectedOrgId, onClose]);

  // Sync URL Path with Modal States
  useEffect(() => {
    const basePath = "/game/geopolitik";
    const organPath = `${basePath}/organisasi-internasional`;
    const anggotaPath = `${organPath}/anggota`;
    const detailPath = `${organPath}/detail`;
    
    if (isOpen) {
      if (viewingMembersOrgId) {
        window.history.pushState({ view: 'anggota' }, "", anggotaPath);
      } else if (selectedOrgId) {
        window.history.pushState({ view: 'detail' }, "", detailPath);
      } else {
        window.history.pushState({ view: 'organisasi' }, "", organPath);
      }
    } else {
      // Revert to base geopolitik path when modal is completely closed
      if (window.location.pathname.includes("/organisasi-internasional")) {
        window.history.pushState({ view: 'geopolitik' }, "", basePath);
      }
    }
  }, [isOpen, viewingMembersOrgId, selectedOrgId]);

  const SelectedOrgComponent = selectedOrgId ? OrgDetailComponents[selectedOrgId] : null;
  const SelectedMembersComponent = viewingMembersOrgId ? OrgMembersComponents[viewingMembersOrgId] : null;

  const filteredOrgs = useMemo(() => {
    return ORGANIZATIONS.filter(org => 
      org.category === activeTab &&
      (org.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       org.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
       org.impact.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [activeTab, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8 overflow-hidden">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative text-zinc-100">
        
        {/* HEADER SECTION */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 sticky top-0 z-[100] backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/15 rounded-2xl border border-purple-500/20 group hover:scale-105 transition-transform duration-500">
               <Landmark className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight italic uppercase leading-none">Organisasi Internasional</h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1.5 opacity-60">Global Governance & Strategic Alliances • Registry: {currentCountry}</p>
            </div>
          </div>
          
          <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1 font-sans">Tutup</span>
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* FILTERS & TABS row */}
        <div className="px-8 py-5 border-b border-zinc-800/30 bg-zinc-950/40 backdrop-blur-3xl flex flex-col lg:flex-row items-center justify-between sticky top-[81px] z-[90] shadow-xl">
          <div className="flex items-center gap-2 bg-black/40 p-2 rounded-[24px] border border-zinc-800/40 w-full lg:w-max shadow-inner">
            <button 
              onClick={() => setActiveTab("UN")}
              className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center gap-3 cursor-pointer ${activeTab === "UN" 
                ? "bg-purple-600 text-white shadow-[0_0_25px_rgba(147,51,234,0.3)] scale-105 z-10" 
                : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50"}`}
            >
              Organisasi UN & Global
              <span className={`px-2 py-0.5 rounded-md text-[9px] ${activeTab === "UN" ? "bg-white/20 text-white" : "bg-zinc-800 text-zinc-600"}`}>12</span>
            </button>
            <button 
              onClick={() => setActiveTab("REGIONAL")}
              className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center gap-3 cursor-pointer ${activeTab === "REGIONAL" 
                ? "bg-purple-600 text-white shadow-[0_0_25px_rgba(147,51,234,0.3)] scale-105 z-10" 
                : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50"}`}
            >
              Organisasi Regional
              <span className={`px-2 py-0.5 rounded-md text-[9px] ${activeTab === "REGIONAL" ? "bg-white/20 text-white" : "bg-zinc-800 text-zinc-600"}`}>16</span>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-max mt-4 lg:mt-0">
            <div className="relative w-full lg:w-[520px] group">
              <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none z-10">
                <div className="p-2.5 bg-purple-500/10 rounded-full border border-purple-500/20 group-focus-within:bg-purple-500/20 group-focus-within:border-purple-500/40 transition-all duration-500">
                  <Search className="h-5 w-5 text-purple-400 group-focus-within:text-purple-300 transition-all duration-500" />
                </div>
              </div>
              <input 
                type="text" 
                id="org-search-input"
                placeholder="Cari identitas koalisi..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingLeft: '100px' }}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-full h-16 pr-8 text-sm font-semibold text-white placeholder:text-zinc-500 outline-none focus:border-purple-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(147,51,234,0.08)] transition-all duration-300 tracking-wide hover:border-white/15 hover:bg-white/[0.04]"
              />
            </div>

            {viewingMembersOrgId && (
              <button 
                onClick={() => setViewingMembersOrgId(null)}
                className="w-full lg:w-[220px] py-6 px-10 rounded-[32px] bg-gradient-to-r from-rose-600 to-rose-500 border-t border-white/20 hover:from-rose-500 hover:to-rose-400 text-white transition-all cursor-pointer shadow-[0_15px_35px_-10px_rgba(225,29,72,0.5)] flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 hover:scale-105 active:scale-95 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] relative z-10 shrink-0">Tutup Profil</span>
                <div className="bg-white/20 p-2 rounded-full relative z-10 group-hover:rotate-90 transition-transform duration-300">
                  <X size={16} strokeWidth={3} />
                </div>
              </button>
            )}
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto px-8 py-10 no-scrollbar bg-[radial-gradient(circle_at_center,_#0a0a0f_0%,_#050508_100%)]">
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
                        <span className="text-[11px] font-black text-cyan-500 uppercase italic">{org.impact}</span>
                     </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="space-y-2 mt-auto">
                    <button 
                      onClick={() => setViewingMembersOrgId(org.id)}
                      className="w-full py-3 px-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 text-[9px] font-black text-zinc-300 uppercase tracking-[0.15em] flex items-center justify-between group/btn transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <span>Lihat Anggota</span>
                      <Users size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => setSelectedOrgId(org.id)}
                      className="w-full py-3 px-6 rounded-2xl bg-purple-600/10 border border-purple-500/20 hover:bg-purple-600/20 hover:border-purple-500/40 text-[9px] font-black text-purple-400 uppercase tracking-[0.15em] flex items-center justify-between group/btn-apply transition-all active:scale-[0.98] cursor-pointer"
                    >
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

      {/* OVERLAYS AT TOP LEVEL OF INSET CONTAINER */}
      {selectedOrgId && (
        <div className="absolute inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-[40px] shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
            
            {/* MODAL HEADER */}
            <div className="px-10 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-purple-500">
                  <Info size={20} />
                </div>
                <h3 className="text-xl font-black text-white italic uppercase tracking-tight">Informasi Detail</h3>
              </div>
              <button 
                onClick={() => setSelectedOrgId(null)}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-rose-600 border border-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] font-sans">Tutup</span>
                <X size={20} className="group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* MODAL CONTENT */}
            <div className="p-8 overflow-y-auto">
              <Suspense fallback={
                <div className="py-20 flex flex-col items-center justify-center gap-4">
                  <Loader2 className="h-10 w-10 text-purple-500 animate-spin" />
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Sinkronisasi Data...</p>
                </div>
              }>
                {SelectedOrgComponent ? (
                  <div className="animate-in slide-in-from-bottom-5 duration-500">
                    <SelectedOrgComponent 
                      currentCash={currentCash} 
                      currentDate={currentDate} 
                      onUpdate={() => {
                        updateBudget();
                      }} 
                    />
                  </div>
                ) : (
                  <div className="py-20 flex flex-col items-center justify-center gap-6 text-center">
                    <div className="p-6 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-700">
                      <AlertCircle size={48} strokeWidth={1} />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-black text-zinc-400 uppercase italic tracking-widest">Regional Hub Not Ready</p>
                      <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest max-w-sm leading-relaxed italic opacity-80">Logika untuk organisasi regional sedang dalam tahap sinkronisasi data arsitektur dengan pangkalan data global.</p>
                    </div>
                  </div>
                )}
              </Suspense>
            </div>

            {/* MODAL FOOTER DECORATION */}
            <div className="px-10 py-4 bg-zinc-900/20 border-t border-zinc-800/30">
              <p className="text-[8px] text-zinc-600 font-black uppercase tracking-[0.3em] text-center opacity-40">EM4 Geopolitical Strategic System • Confidential Data</p>
            </div>
          </div>
        </div>
      )}

      {/* MEMBERS MODAL OVERLAY */}
      {viewingMembersOrgId && (
        <div className="absolute inset-0 z-[70] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="w-full max-w-[95vw] bg-zinc-950 border border-zinc-800 rounded-[40px] shadow-[0_0_150px_rgba(0,0,0,1)] relative overflow-hidden animate-in zoom-in-95 duration-500 flex flex-col h-[82vh]">
            
            {/* MODAL HEADER */}
            <div className="px-12 py-8 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 backdrop-blur-3xl sticky top-0 z-20">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-blue-500/15 rounded-2xl border border-blue-500/20 text-blue-500 group-hover:scale-105 transition-transform">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">Daftar Anggota Aktif</h3>
                  <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mt-1.5 opacity-60">Verified Global Membership • International Accord Systems</p>
                </div>
              </div>
              <div></div>
            </div>

            {/* MODAL CONTENT */}
            <div className="overflow-y-auto flex-1 no-scrollbar">
              <Suspense fallback={
                <div className="h-full flex flex-col items-center justify-center gap-4">
                  <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">Mengakses Database Anggota...</p>
                </div>
              }>
                {SelectedMembersComponent ? (
                  <div className="animate-in slide-in-from-bottom-5 duration-700 h-full">
                    <SelectedMembersComponent />
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center gap-6 text-center">
                    <div className="p-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-800 scale-125">
                      <AlertCircle size={60} strokeWidth={1} />
                    </div>
                    <div className="space-y-3">
                      <p className="text-3xl font-black text-zinc-500 uppercase italic tracking-[0.2em]">Registry Offline</p>
                      <p className="text-[11px] text-zinc-700 font-bold uppercase tracking-[0.3em] max-w-lg mx-auto leading-relaxed italic opacity-60">Pangkalan data anggota untuk organisasi regional belum terintegrasi ke dalam sistem verifikasi kedaulatan digital global.</p>
                    </div>
                  </div>
                )}
              </Suspense>
            </div>

            {/* MODAL FOOTER */}
            <div className="px-10 py-5 bg-black/40 border-t border-zinc-800/30 flex justify-center">
              <p className="text-[9px] text-zinc-700 font-black uppercase tracking-[0.5em] opacity-40 italic">Global Diplomatic Transparency Node • United Nations Data Protocol</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
