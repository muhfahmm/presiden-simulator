"use client"

import { useState, useRef, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Heart, Coins, Shield, LogOut, Users, Newspaper, Mail } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import GameMapCanvas from "../mainGameMap";
import TradeMapCanvas from "../tab-menu/trades/TradeMapCanvas";
import MapSDA, { sdaIcons } from "../tab-menu/SDA/mapSDA";
import MapHubungan from "../tab-menu/Hubungan/mapHubungan";
import StrategyModal from "../components/StrategyModal";
import BottomNav from "../components/BottomNav";
import { gameStorage } from "../gamestorage";
import { countries } from "../../select-country/data/countries";
import { CountryData } from "../../select-country/data/types";
import GameTimeControls from "../components/time/GameTimeControls";

// Bottom Nav Modals
import RatingPresidenModal from "../components/rating-presiden/RatingPresidenModal";
import NaikkanRatingModal from "../components/rating-presiden/NaikkanRatingModal";
// Ekonomi Modals
import PerdaganganModal from "../components/ekonomi/1-perdagangan/PerdaganganModal";
import PajakModal from "../components/ekonomi/pajak/PajakModal";
import HutangModal from "../components/ekonomi/HutangModal";
import BudgetTreasuryModal from "../components/ekonomi/BudgetTreasuryModal";
import EnergiModal from "../components/ekonomi/EnergiModal";
import ProduksiBarangModal from "../components/ekonomi/ProduksiBarangModal";
import MineralsModal from "../components/ekonomi/MineralsModal";
import HargaBarangModal from "../components/ekonomi/HargaBarangModal";
// Other Modals
import ProduksiHubV3 from "../components/pembangunan/1-produksi/ProduksiModal";
import ProduksiMiliterModal from "../components/pembangunan/2-produksi-militer/ProduksiMiliterModal";
import TempatUmumModal from "../components/pembangunan/3-tempat-umum/TempatUmumModal";
import PertahananModal from "../components/pertahanan/PertahananModal";
import ArmadaMiliterModal from "../components/pertahanan/ArmadaMiliterModal";
import ArmadaPolisiModal from "../components/pertahanan/ArmadaPolisiModal";
import GeopolitikModal from "../components/geopolitik/GeopolitikModal";
import KementerianModal from "../components/kementerian/KementerianModal";
import BeritaModal from "../components/berita/BeritaModal";
import InboxModal from "../components/inbox/InboxModal";

export default function GamePage() {
  const [approval, setApproval] = useState(65);
  const [budget, setBudget] = useState(1240.5); // in Trillion
  const [stability, setStability] = useState(82);
  const router = useRouter();
  const params = useParams();
  const [userCountry, setUserCountry] = useState("Indonesia");
  const [isMounted, setIsMounted] = useState(false);
  const [targetCountry, setTargetCountry] = useState<string | null>(null);
  
  useEffect(() => {
    setIsMounted(true);
    const session = gameStorage.getSession();
    if (session?.country) {
      setUserCountry(session.country);
      setBudget(session.budget);
    }
    if (session?.isWelcomeSeen) {
      setShowWelcome(false);
    }

    // Refresh budget from storage periodically to sync with daily ticks
    const interval = setInterval(() => {
      const currentBudget = gameStorage.getBudget();
      setBudget(currentBudget);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const [selectedCountrySDA, setSelectedCountrySDA] = useState<{ name: string; flag: string; resources: any } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const slug = params?.slug || [];
  let initialMenu = "Peta Taktis";
  if (slug[0] === 'produksi') initialMenu = "Menu:Produksi";
  else if (slug[0] === 'produksi-militer') initialMenu = "Menu:ProduksiMiliter";
  else if (slug[0] === 'tempat-umum') initialMenu = "Menu:TempatUmum";
  else if (slug[0] === 'perdagangan') initialMenu = "Menu:Perdagangan";
  else if (slug[0] === 'harga-barang') initialMenu = "Menu:HargaBarang";
  else if (slug[0] === 'pajak') initialMenu = "Menu:Pajak";
  else if (slug[0] === 'hutang') initialMenu = "Menu:Hutang";
  else if (slug[0] === 'anggaran') initialMenu = "Menu:Budget";
  else if (slug[0] === 'energi') initialMenu = "Menu:Energi";
  else if (slug[0] === 'produksi-barang') initialMenu = "Menu:ProduksiBarang";
  
  const [activeMenu, setActiveMenu] = useState<string>(initialMenu);

  useEffect(() => {
    const menuToPath: Record<string, string> = {
      "Menu:Produksi": "/game/produksi",
      "Menu:ProduksiMiliter": "/game/produksi-militer",
      "Menu:TempatUmum": "/game/tempat-umum",
      "Menu:Perdagangan": "/game/perdagangan",
      "Menu:HargaBarang": "/game/harga-barang",
      "Menu:Pajak": "/game/pajak",
      "Menu:Hutang": "/game/hutang",
      "Menu:Budget": "/game/anggaran",
      "Menu:Energi": "/game/energi",
      "Menu:ProduksiBarang": "/game/produksi-barang"
    };

    const targetPath = menuToPath[activeMenu] || "/game";
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
  }, [activeMenu]);

  const [mapMode, setMapMode] = useState<"default" | "sda" | "hubungan" | "trade">("default");
  const containerRef = useRef<HTMLDivElement>(null);
  const [geoData, setGeoData] = useState<any>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    fetch("/world.geojson")
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error("Failed to load map data", err));
  }, []);

  const countryData = countries.find(c => c.name_id === userCountry) || countries[0];



  return (
    <div className="flex min-h-screen bg-zinc-950 text-white font-sans relative overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 z-10 flex flex-col h-screen overflow-hidden">
        {/* Top Header / Status bar */}
        <header className="bg-zinc-900/30 backdrop-blur-sm border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {countryData && (
              <div className="flex items-center gap-2 bg-zinc-800/40 px-3 py-1.5 rounded-xl border border-zinc-700/50 shadow-sm backdrop-blur-md">
                <span className="text-base">{countryData.flag}</span>
                <span className="text-xs font-bold text-zinc-200 tracking-wide uppercase">{countryData.name_id}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setActiveMenu("Menu:Berita")}
              className="flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 px-4 py-2 rounded-xl border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all group cursor-pointer"
            >
              <Newspaper className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-black text-emerald-500/70 uppercase tracking-widest">Update</span>
                <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">Berita</span>
              </div>
            </button>

            <button 
              onClick={() => setActiveMenu("Menu:Inbox")}
              className="flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-xl border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all group cursor-pointer"
            >
              <Mail className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-black text-blue-500/70 uppercase tracking-widest">Pesan</span>
                <span className="text-xs font-black text-blue-400 uppercase tracking-wider">Inbox</span>
              </div>
            </button>

            <StatusBadge icon={<Users className="h-4 w-4 text-blue-500" />} label="Populasi" value={countryData?.pop || 0} />
            <StatusBadge icon={<Coins className="h-4 w-4 text-yellow-500" />} label="Kas Negara" value={`${Math.round(budget).toLocaleString('id-ID')}`} />
            <StatusBadge icon={<Shield className="h-4 w-4 text-green-500" />} label="Stabilitas" value={`${stability}%`} />
            
            <button 
              onClick={() => {
                if (confirm("Apakah Anda yakin ingin mengakhiri sesi simulasi ini? Semua kemajuan akan hilang.")) {
                  gameStorage.clearSession();
                  router.push("/select-country");
                }
              }}
              className="ml-4 p-2 rounded-lg bg-zinc-800/50 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 transition-all border border-zinc-700/50 group"
              title="Akhiri Sesi"
            >
              <LogOut className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            </button>
          </div>
        </header>

        {/* Main interactive map background viewport */}
        <div className="flex-1 relative w-full overflow-hidden bg-[#070b13]">
          {/* Floating Bottom Navigation Menu */}
          <BottomNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

          {/* Game Time Control - Bottom Right */}
          <div className="absolute bottom-12 right-8 z-[200]">
            <GameTimeControls />
          </div>

          {/* Map Mode Toggles */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex bg-zinc-900/80 backdrop-blur-md p-1 rounded-xl border border-zinc-800 shadow-xl gap-1">
            <button 
              onClick={() => setMapMode("default")}
              className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${mapMode === "default" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              Peta Utama
            </button>
            <button 
              onClick={() => setMapMode("sda")}
              className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${mapMode === "sda" ? "bg-zinc-800 text-emerald-400 shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              SDA
            </button>
            <button 
              onClick={() => setMapMode("hubungan")}
              className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${mapMode === "hubungan" ? "bg-zinc-800 text-amber-400 shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              Hubungan
            </button>
            <button 
              onClick={() => setMapMode("trade")}
              className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${mapMode === "trade" ? "bg-zinc-800 text-sky-400 shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              Perdagangan
            </button>
          </div>

          {/* Keterangan Rute (Pelat Menu Pendukung Navigasi) */}
          {mapMode === "trade" && (
            <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-zinc-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-zinc-800 shadow-2xl animate-in slide-in-from-top-2 fade-in duration-300">
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-6 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.4)] animate-pulse"></div>
                <span className="text-[10px] font-bold text-zinc-300 tracking-wider">INTERNASIONAL</span>
              </div>
              <div className="h-3 w-[1px] bg-zinc-800" />
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-6 bg-zinc-500 rounded-full"></div>
                <span className="text-[10px] font-bold text-zinc-500 tracking-wider">REGIONAL</span>
              </div>
            </div>
          )}

          <TransformWrapper 
            initialScale={1} 
            minScale={1} 
            maxScale={8} 
            centerOnInit={!isCentered}
            onInit={() => setIsCentered(true)} 
            limitToBounds={true}
            doubleClick={{ disabled: true }}
          >
            <TransformComponent wrapperClass="!w-full !h-full" contentClass="!h-full flex items-center justify-center">
              <div ref={containerRef} className="relative h-full flex items-center justify-center w-max">
                <div style={{ display: mapMode === "trade" ? "none" : "contents" }} className="h-full">
                  {mapMode === "default" && (
                    <GameMapCanvas 
                      userCountry={userCountry} 
                      targetCountry={targetCountry} 
                      mapMode={mapMode}
                      geoData={geoData}
                      onSelect={(name) => {
                        if (name === userCountry) {
                          setTargetCountry(null);
                          setIsMenuOpen(false);
                        } else {
                          setTargetCountry(name);
                          setIsMenuOpen(true);
                        }
                      }} 
                    />
                  )}
                  {mapMode === "sda" && (
                    <MapSDA 
                      userCountry={userCountry} 
                      targetCountry={targetCountry} 
                      geoData={geoData}
                      onSelect={(name) => {
                        if (name === userCountry) {
                          setTargetCountry(null);
                          setIsMenuOpen(false);
                        } else {
                          setTargetCountry(name);
                          setIsMenuOpen(true);
                        }
                      }} 
                      onSelectSDA={(data) => setSelectedCountrySDA(data)}
                    />
                  )}
                  {mapMode === "hubungan" && (
                    <MapHubungan 
                      userCountry={userCountry} 
                      targetCountry={targetCountry} 
                      geoData={geoData}
                      onSelect={(name) => {
                        if (name === userCountry) {
                          setTargetCountry(null);
                          setIsMenuOpen(false);
                        } else {
                          setTargetCountry(name);
                          setIsMenuOpen(true);
                        }
                      }} 
                    />
                  )}
                </div>
                <div style={{ display: mapMode === "trade" ? "contents" : "none" }} className="h-full">
                  <TradeMapCanvas 
                    userCountry={userCountry} 
                    targetCountry={targetCountry} 
                    geoData={geoData}
                    onSelect={(name) => {
                      if (name === userCountry) {
                        setTargetCountry(null);
                        setIsMenuOpen(false);
                      } else {
                        setTargetCountry(name);
                        setIsMenuOpen(true);
                      }
                    }} 
                  />
                </div>
              </div>
            </TransformComponent>
          </TransformWrapper>

          {/* Target Interaction Modal */}
          <StrategyModal 
            isOpen={isMenuOpen} 
            onClose={() => { setIsMenuOpen(false); setTargetCountry(null); }} 
            targetCountry={targetCountry} 
            userCountry={userCountry}
          />

          {/* Details Modal - Rendered Fixed Outside Scaling */}
          {selectedCountrySDA && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm pointer-events-auto" onClick={() => setSelectedCountrySDA(null)}>
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-2xl max-w-sm w-full font-sans pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-semibold flex items-center gap-2">
                    <span className="text-lg">{selectedCountrySDA.flag}</span> 
                    <span>{selectedCountrySDA.name}</span>
                  </h3>
                  <button className="text-zinc-400 hover:text-white cursor-pointer" onClick={() => setSelectedCountrySDA(null)}>✕</button>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-zinc-300">
                  {Object.entries(selectedCountrySDA.resources).map(([key, value]) => {
                    const asset = sdaIcons[key];
                    if (!asset || (value as number) <= 0) return null;
                    const IconComp = asset.icon;
                    return (
                      <div key={key} className="flex items-center gap-2 bg-zinc-800/30 p-2 rounded-md border border-zinc-800/80">
                        <IconComp size={16} className={asset.color} />
                        <div className="flex flex-col">
                          <span className="text-[10px] text-zinc-400">{asset.label}</span>
                          <span className="text-white font-medium text-xs">{(value as number)}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Categorical Modals */}
          {isMounted && (
            <>
              <RatingPresidenModal 
                isOpen={activeMenu === "Dashboard:Rating"} 
                onClose={() => setActiveMenu("Rating Presiden")} 
              />
              <NaikkanRatingModal 
                isOpen={activeMenu === "Action:NaikkanRating"} 
                onClose={() => setActiveMenu("Rating Presiden")} 
              />
              <PerdaganganModal 
                isOpen={activeMenu === "Menu:Perdagangan"} 
                onClose={() => setActiveMenu("Ekonomi")} 
              />
              <PajakModal 
                isOpen={activeMenu === "Menu:Pajak"} 
                onClose={() => setActiveMenu("Ekonomi")} 
              />
              <HutangModal 
                isOpen={activeMenu === "Menu:Hutang"} 
                onClose={() => setActiveMenu("Ekonomi")} 
              />
              <BudgetTreasuryModal 
                isOpen={activeMenu === "Menu:Budget"} 
                onClose={() => setActiveMenu("Ekonomi")} 
              />
              <EnergiModal 
                isOpen={activeMenu === "Menu:Energi"} 
                onClose={() => setActiveMenu("Ekonomi")} 
              />
              <ProduksiBarangModal 
                isOpen={activeMenu === "Menu:ProduksiBarang"} 
                onClose={() => setActiveMenu("Ekonomi")} 
              />
              <HargaBarangModal 
                isOpen={activeMenu === "Menu:HargaBarang"} 
                onClose={() => setActiveMenu("Ekonomi")} 
              />
              <MineralsModal 
                isOpen={activeMenu === "Minerals"} 
                onClose={() => setActiveMenu("Peta Taktis")} 
              />
              <ProduksiHubV3 
                isOpen={activeMenu === "Menu:Produksi"} 
                onClose={() => setActiveMenu("Pembangunan")} 
              />
              <ProduksiMiliterModal 
                isOpen={activeMenu === "Menu:ProduksiMiliter"} 
                onClose={() => setActiveMenu("Pembangunan")} 
              />
              <TempatUmumModal 
                isOpen={activeMenu === "Menu:TempatUmum"} 
                onClose={() => setActiveMenu("Pembangunan")} 
              />
              <PertahananModal 
                isOpen={activeMenu === "Komando Pertahanan"} 
                onClose={() => setActiveMenu("Pertahanan")} 
                data={countryData}
              />
              <ArmadaMiliterModal
                isOpen={activeMenu === "Menu:ArmadaMiliter"}
                onClose={() => setActiveMenu("Pertahanan")}
                data={countryData}
              />
              <ArmadaPolisiModal
                isOpen={activeMenu === "Menu:ArmadaPolisi"}
                onClose={() => setActiveMenu("Pertahanan")}
                data={countryData}
              />
              <GeopolitikModal 
                isOpen={activeMenu === "Geopolitik & Luar Negeri"} 
                onClose={() => setActiveMenu("Geopolitik")} 
                data={countryData}
              />
              <KementerianModal 
                isOpen={activeMenu === "Dashboard:Kementerian"} 
                onClose={() => setActiveMenu("Kementerian")} 
              />
              <BeritaModal 
                isOpen={activeMenu === "Menu:Berita"} 
                onClose={() => setActiveMenu("Peta Taktis")} 
              />
              <InboxModal 
                isOpen={activeMenu === "Menu:Inbox"} 
                onClose={() => setActiveMenu("Peta Taktis")} 
              />
            </>
          )}
        </div>
      </main>

      {/* 5. WELCOME OVERLAY */}
      {isMounted && showWelcome && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 backdrop-blur-2xl animate-in fade-in duration-700">
          <div className="relative max-w-2xl w-full mx-4 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 shadow-[0_0_100px_rgba(34,211,238,0.15)] flex flex-col p-1 animate-in zoom-in-95 slide-in-from-bottom-10 duration-1000">
            
            {/* Background Branding */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

            <div className="relative border border-white/5 rounded-[22px] bg-zinc-900/80 p-10 flex flex-col items-center text-center gap-8 backdrop-blur-md">
              
              {/* Country Emblem Section */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
                  <div className="relative h-24 w-24 rounded-full bg-zinc-800 border-2 border-cyan-500/50 flex items-center justify-center text-5xl shadow-2xl shadow-cyan-500/20">
                    {countryData.flag}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-sm font-black text-cyan-400 uppercase tracking-[0.4em] drop-shadow-sm">Selamat Datang</h2>
                  <h1 className="text-4xl font-black text-white tracking-tight uppercase italic underline decoration-cyan-500/50 underline-offset-8">
                    PRESIDEN {countryData.name_id}
                  </h1>
                </div>
              </div>

              {/* Status Briefing Bar */}
              <div className="flex gap-4 w-full">
                <div className="flex-1 bg-zinc-950/50 border border-white/5 p-4 rounded-2xl flex flex-col items-center gap-1">
                  <Heart size={16} className="text-red-500 mb-1" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Public Trust</span>
                  <span className="text-lg font-black text-white">{approval}%</span>
                </div>
                <div className="flex-1 bg-zinc-950/50 border border-white/5 p-4 rounded-2xl flex flex-col items-center gap-1">
                  <Coins size={16} className="text-yellow-500 mb-1" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Treasury</span>
                  <span className="text-lg font-black text-white">{budget} T</span>
                </div>
                <div className="flex-1 bg-zinc-950/50 border border-white/5 p-4 rounded-2xl flex flex-col items-center gap-1">
                  <Shield size={16} className="text-green-500 mb-1" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Stability</span>
                  <span className="text-lg font-black text-white">{stability}%</span>
                </div>
              </div>

              {/* Briefing Text */}
              <p className="text-zinc-400 text-sm leading-relaxed max-w-md font-medium italic">
                "Nasib jutaan rakyat {countryData.name_id} kini berada di tangan Anda. Kelola ekonomi, jaga pertahanan, dan jadilah pemimpin yang dikenang sepanjang masa."
              </p>

              {/* Action Button */}
              <button 
                onClick={() => {
                  setShowWelcome(false);
                  gameStorage.markWelcomeSeen();
                }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black py-5 rounded-2xl shadow-[0_15px_30px_rgba(6,182,212,0.3)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.4)] transition-all cursor-pointer active:scale-95 text-sm uppercase tracking-[0.3em] overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Mulai Tugas Negara</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | number }) {
  const displayValue = typeof value === 'number' ? value.toLocaleString('id-ID') : value;
  
  return (
    <div className="flex items-center gap-2 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800">
      {icon}
      <div className="text-left leading-tight">
        <p className="text-[10px] text-zinc-500 font-semibold uppercase">{label}</p>
        <p className="text-xs font-bold text-zinc-100 italic">
          {displayValue}
        </p>
      </div>
    </div>
  );
}