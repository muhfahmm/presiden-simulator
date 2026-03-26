"use client"

import { useRouter, useParams } from "next/navigation";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import MapRenderer from "@/app/game/components/map-system/MapRenderer";
import MapCategorySelector from "../components/2_navigasi_menu/navigasi_atas/MapCategorySelector";
import TradeRouteLegend from "../components/2_navigasi_menu/navigasi_atas/TradeRouteLegend";
import SDADetailsModal from "../components/2_navigasi_menu/navigasi_atas/SDA/SDADetailsModal";
import { sdaIcons } from "../components/2_navigasi_menu/navigasi_atas/SDA/mapSDA";
import StrategyModal from "@/app/game/components/StrategyModal";
import BottomNav from "@/app/game/components/2_navigasi_menu/navigasi_bawah/BottomNav";
import SideMenu from "@/app/game/components/sidemenu/SideMenu";
import ModalsManager from "@/app/game/components/2_navigasi_menu/navigasi_bawah/ModalsManager";
import GameOverOverlay from "@/app/game/components/6_overlays/GameOverOverlay";
import WelcomeOverlay from "@/app/game/components/6_overlays/WelcomeOverlay";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/countries/region/_index";
import GameTimeControls from "@/app/game/components/time/GameTimeControls";
import GameNavbar from "@/app/game/components/1_navbar";

import { useGameState } from "../hooks/useGameState";
import { useGamePath } from "../hooks/useGamePath";
import { useMapData } from "../hooks/useMapData";

export default function GamePage() {
  const params = useParams();
  const router = useRouter();
  const { activeMenu, setActiveMenu } = useGamePath((params?.path as string[]) || []);
  
  const {
    approval, budget, budgetDelta, happiness, stability, population,
    userCountry, isMounted, unreadCount, targetCountry, setTargetCountry,
    isGameOver, showWelcome, setShowWelcome, selectedCountrySDA, setSelectedCountrySDA
  } = useGameState(setActiveMenu);

  const {
    mapMode, setMapMode, containerRef, geoData, isCentered, setIsCentered,
    isMenuOpen, setIsMenuOpen
  } = useMapData();

  const countryData = countries.find(c => c.name_id === userCountry || c.name_en === userCountry) || countries[0];

  const handleSelect = (name: string) => {
    if (name === userCountry) {
      setTargetCountry(null);
      setIsMenuOpen(false);
    } else {
      setTargetCountry(name);
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white font-sans relative overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 z-10 flex flex-col h-screen overflow-hidden relative">
        
        {/* Floating UI Elements */}
        <SideMenu 
          activeMenu={activeMenu} 
          setActiveMenu={setActiveMenu} 
          unreadCount={unreadCount} 
        />

        {/* Top Header / Status bar */}
        <GameNavbar 
          countryData={countryData}
          happiness={happiness}
          budget={budget}
          budgetDelta={budgetDelta}
          stability={stability}
          population={population}
          onLogout={() => {
            if (confirm("Apakah Anda yakin ingin mengakhiri sesi simulasi ini? Semua kemajuan akan hilang.")) {
              gameStorage.clearSession();
              router.push("/database");
            }
          }}
        />

        {/* Main interactive map background viewport */}
        <div className="flex-1 relative w-full overflow-hidden bg-[#070b13]">
          {/* Floating Bottom Navigation Menu */}
          <BottomNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

          {/* Game Time Control - Bottom Right */}
          <div className="absolute bottom-12 right-8 z-[200]">
            <GameTimeControls />
          </div>

          {/* Map Mode Toggles */}
          <MapCategorySelector mapMode={mapMode} setMapMode={setMapMode} />

          {/* Keterangan Rute (Pelat Menu Pendukung Navigasi) */}
          <TradeRouteLegend isVisible={mapMode === "trade"} />

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
                <MapRenderer 
                  mapMode={mapMode}
                  userCountry={userCountry}
                  targetCountry={targetCountry}
                  geoData={geoData}
                  onSelect={handleSelect}
                  onSelectSDA={(data) => setSelectedCountrySDA(data)}
                />
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
          <SDADetailsModal 
            selectedCountrySDA={selectedCountrySDA} 
            sdaIcons={sdaIcons} 
            onClose={() => setSelectedCountrySDA(null)} 
          />

          {/* Categorical Modals */}
          <ModalsManager 
            isMounted={isMounted} 
            activeMenu={activeMenu} 
            setActiveMenu={setActiveMenu} 
            countryData={countryData} 
          />
        </div>
      </main>

      {/* 6. GAME OVER OVERLAY */}
      <GameOverOverlay isGameOver={isGameOver} countryData={countryData} />

      {/* 5. WELCOME OVERLAY */}
      <WelcomeOverlay 
        showWelcome={isMounted && showWelcome} 
        countryData={countryData} 
        approval={approval} 
        budget={budget} 
        stability={stability} 
        onClose={() => setShowWelcome(false)} 
      />
    </div>
  );
}