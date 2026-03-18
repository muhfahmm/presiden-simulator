"use client"

import { useState, useRef } from "react";
import { Heart, Coins, Shield } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import GameMapCanvas from "./gamemap";
import StrategyModal from "./StrategyModal";
import BottomNav from "./components/BottomNav";

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
// Other Modals
import ProduksiModal from "./components/pembangunan/ProduksiModal";
import ProduksiMiliterModal from "./components/pembangunan/ProduksiMiliterModal";
import TempatUmumModal from "./components/pembangunan/TempatUmumModal";
import DemandModal from "./components/demands/DemandModal";
import PertahananModal from "./components/pertahanan/PertahananModal";
import GeopolitikModal from "./components/geopolitik/GeopolitikModal";
import KementerianModal from "./components/kementerian/KementerianModal";

export default function GameDashboard() {
  const [approval, setApproval] = useState(65);
  const [budget, setBudget] = useState(1240.5); // in Trillion
  const [stability, setStability] = useState(82);
  const [userCountry] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("selectedCountry") || "Indonesia";
    }
    return "Indonesia";
  });
  const [targetCountry, setTargetCountry] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("Peta Taktis");
  const containerRef = useRef<HTMLDivElement>(null);



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
            <DemandIndicators />
            <div className="h-8 w-[1px] bg-zinc-800 mx-2" />
            <StatusBadge icon={<Heart className="h-4 w-4 text-red-500" />} label="Persetujuan" value={`${approval}%`} />
            <StatusBadge icon={<Coins className="h-4 w-4 text-yellow-500" />} label="Kas Negara" value={`Rp ${budget} T`} />
            <StatusBadge icon={<Shield className="h-4 w-4 text-green-500" />} label="Stabilitas" value={`${stability}%`} />
          </div>
        </header>

        {/* Main interactive map background viewport */}
        <div className="flex-1 relative w-full overflow-hidden bg-[#070b13]">
          {/* Floating Bottom Navigation Menu */}
          <BottomNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

          <TransformWrapper 
            initialScale={1} 
            minScale={1} 
            maxScale={8} 
            centerOnInit={!isCentered}
            onInit={() => setIsCentered(true)} 
            limitToBounds={true}
            doubleClick={{ disabled: true }}
            panning={{ lockAxisY: true }}
          >
            <TransformComponent wrapperClass="!w-full !h-full" contentClass="!h-full flex items-center justify-center">
              <div ref={containerRef} className="relative h-full flex items-center justify-center w-max">
                <GameMapCanvas 
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
          <DemandModal 
            isOpen={activeMenu === "Demand"} 
            onClose={() => setActiveMenu("Peta Taktis")} 
          />
          <PertahananModal 
            isOpen={activeMenu === "Komando Pertahanan"} 
            onClose={() => setActiveMenu("Pertahanan")} 
          />
          <GeopolitikModal 
            isOpen={activeMenu === "Geopolitik & Luar Negeri"} 
            onClose={() => setActiveMenu("Geopolitik")} 
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

function DemandIndicators() {
  const demands = [
    { label: "R", color: "bg-green-500", value: 80, tooltip: "Residential Demand" },
    { label: "C", color: "bg-blue-500", value: 45, tooltip: "Commercial Demand" },
    { label: "I", color: "bg-orange-500", value: 60, tooltip: "Industrial Demand" },
  ];

  return (
    <div className="flex items-center gap-3 bg-zinc-900/50 px-4 py-1.5 rounded-xl border border-zinc-800/50 shadow-inner group">
      <div className="flex flex-col">
        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-tighter leading-none mb-1.5">Market Demand</span>
        <div className="flex gap-1.5">
          {demands.map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-1 group/bar relative">
              <div className="w-2.5 h-6 bg-zinc-800 rounded-sm overflow-hidden flex flex-col justify-end ring-1 ring-zinc-700/50">
                <div 
                  className={`${d.color} w-full transition-all duration-1000 shadow-[0_0_8px_rgba(0,0,0,0.5)]`} 
                  style={{ height: `${d.value}%` }}
                />
              </div>
              <span className={`text-[8px] font-bold ${d.value > 70 ? 'text-zinc-200' : 'text-zinc-500'}`}>{d.label}</span>
              
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 px-2 py-1 bg-zinc-900 border border-zinc-800 text-[8px] font-bold text-white rounded opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
                {d.tooltip}: {d.value}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
