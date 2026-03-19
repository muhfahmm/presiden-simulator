"use client"

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Heart, Coins, Shield, LogOut } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import GameMapCanvas from "./gamemap";
import TradeMapCanvas from "./trades/TradeMapCanvas";
import StrategyModal from "./components/StrategyModal";
import BottomNav from "./components/BottomNav";
import { gameStorage } from "./gamestorage";
import { countries } from "../select-country/data/countries";
import { CountryData } from "../select-country/data/types";

// Bottom Nav Modals
import RatingPresidenModal from "./components/rating-presiden/RatingPresidenModal";
import NaikkanRatingModal from "./components/rating-presiden/NaikkanRatingModal";
// Ekonomi Modals
import PerdaganganModal from "./components/ekonomi/PerdaganganModal";
import PajakModal from "./components/ekonomi/PajakModal";
import HutangModal from "./components/ekonomi/HutangModal";
import BudgetTreasuryModal from "./components/ekonomi/BudgetTreasuryModal";
import EnergiModal from "./components/ekonomi/EnergiModal";
import ProduksiBarangModal from "./components/ekonomi/ProduksiBarangModal";
import MineralsModal from "./components/ekonomi/MineralsModal";
// Other Modals
import ProduksiModal from "./components/pembangunan/ProduksiModal";
import ProduksiMiliterModal from "./components/pembangunan/ProduksiMiliterModal";
import TempatUmumModal from "./components/pembangunan/TempatUmumModal";
import PertahananModal from "./components/pertahanan/PertahananModal";
import ArmadaMiliterModal from "./components/pertahanan/ArmadaMiliterModal";
import ArmadaPolisiModal from "./components/pertahanan/ArmadaPolisiModal";
import GeopolitikModal from "./components/geopolitik/GeopolitikModal";
import KementerianModal from "./components/kementerian/KementerianModal";

export default function GameDashboard() {
  const [approval, setApproval] = useState(65);
  const [budget, setBudget] = useState(1240.5); // in Trillion
  const [stability, setStability] = useState(82);
  const router = useRouter();
  const [userCountry] = useState(() => {
    const session = gameStorage.getSession();
    return session?.country || "Indonesia";
  });
  const [targetCountry, setTargetCountry] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("Peta Taktis");
  const [mapMode, setMapMode] = useState<"default" | "sda" | "hubungan" | "trade">("default");
  const containerRef = useRef<HTMLDivElement>(null);

  const countryData = countries.find(c => c.name_id === userCountry) || countries[0];



  return (
    <div className="flex min-h-screen bg-zinc-950 text-white font-sans relative overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 z-10 flex flex-col h-screen overflow-hidden">
        {/* Top Header / Status bar */}
        <header className="bg-zinc-900/30 backdrop-blur-sm border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Pusat Komando Strategis
          </h1>
          
          <div className="flex items-center gap-6">
            <StatusBadge icon={<Heart className="h-4 w-4 text-red-500" />} label="Persetujuan" value={`${approval}%`} />
            <StatusBadge icon={<Coins className="h-4 w-4 text-yellow-500" />} label="Kas Negara" value={`Rp ${budget} T`} />
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

          {/* Map Mode Toggles */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex bg-zinc-900/80 backdrop-blur-md p-1 rounded-xl border border-zinc-800 shadow-xl gap-1">
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
                  <GameMapCanvas 
                    userCountry={userCountry} 
                    targetCountry={targetCountry} 
                    mapMode={mapMode}
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
                <div style={{ display: mapMode === "trade" ? "contents" : "none" }} className="h-full">
                  <TradeMapCanvas 
                    userCountry={userCountry} 
                    targetCountry={targetCountry} 
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
          />

          {/* Categorical Modals */}
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
          <MineralsModal 
            isOpen={activeMenu === "Minerals"} 
            onClose={() => setActiveMenu("Peta Taktis")} 
          />
          <ProduksiModal 
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
        </div>
      </main>
    </div>
  );
}

function StatusBadge({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-2 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800">
      {icon}
      <div className="text-left leading-tight">
        <p className="text-[10px] text-zinc-500 font-semibold uppercase">{label}</p>
        <p className="text-xs font-bold">{value}</p>
      </div>
    </div>
  );
}

