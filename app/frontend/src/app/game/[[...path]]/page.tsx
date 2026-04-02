"use client"

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import MapRenderer from "@/app/game/components/map-system/MapRenderer";
import MapCategorySelector from "../components/2_navigasi_menu/1_navigasi_atas/MapCategorySelector";
import TradeRouteLegend from "../components/2_navigasi_menu/1_navigasi_atas/TradeRouteLegend";
import { sdaIcons } from "../components/2_navigasi_menu/1_navigasi_atas/SDA/mapSDA";
import StrategyModal from "@/app/game/components/map-system/modals_detail_negara/modals";
import SDADetailsModal from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/1_SDA/SDADetailsModal";
import BottomNav from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/BottomNav";
import SideMenu from "@/app/game/components/sidemenu/SideMenu";
import ModalsManager from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/ModalsManager";
import GameOverOverlay from "@/app/game/components/6_overlays/GameOverOverlay";
import WelcomeOverlay from "@/app/game/components/6_overlays/WelcomeOverlay";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import GameNavbar from "@/app/game/components/1_navbar";

import { useGameState } from "../hooks/useGameState";
import { useGamePath } from "../hooks/useGamePath";
import { useMapData } from "../hooks/useMapData";

export default function GamePage() {
  const params = useParams();
  const router = useRouter();
  const { activeMenu, setActiveMenu } = useGamePath((params?.path as string[]) || []);

  const {
    approval, budget, budgetDelta, happiness, stability, population, populationDelta,
    userCountry, isMounted, unreadCount, targetCountry, setTargetCountry,
    isGameOver, showWelcome, setShowWelcome, selectedCountrySDA, setSelectedCountrySDA
  } = useGameState(setActiveMenu);

  const {
    mapMode, setMapMode, containerRef, geoData, isCentered, setIsCentered,
    isMenuOpen, setIsMenuOpen
  } = useMapData();

  const isWarMode = activeMenu.startsWith("Komando Pertahanan:Menu Perang");

  // Sync Modal with activeMenu (URL)
  useEffect(() => {
    if (activeMenu.startsWith("CountryModal:")) {
      const parts = activeMenu.split(":");
      const countryId = parts[1];
      const country = countries.find(c =>
        c.name_id.toLowerCase() === countryId.toLowerCase() ||
        c.name_en.toLowerCase() === countryId.toLowerCase()
      );
      if (country) {
        setTargetCountry(country.name_id);
        setIsMenuOpen(true);
      }
    } else if (isMenuOpen && !activeMenu.startsWith("CountryModal:")) {
      // If menu is open but URL is not CountryModal, close it? 
      // Actually, let's let the user close it manually or via bottom nav.
    }
  }, [activeMenu, setIsMenuOpen, setTargetCountry]);

  const countryData = countries.find(c => c.name_id === userCountry || c.name_en === userCountry) || countries[0];

  const handleSelect = (name: string) => {
    if (name === userCountry) {
      setTargetCountry(null);
      setIsMenuOpen(false);
    } else {
      setTargetCountry(name);
      // Only open strategy menu if not in trade map mode
      if (mapMode !== "trade") {
        const country = countries.find(c =>
          c.name_id.toLowerCase() === name.toLowerCase() ||
          c.name_en.toLowerCase() === name.toLowerCase()
        );
        if (country) {
          setActiveMenu(`CountryModal:${country.name_id}:info_strategis`);
        }
        setIsMenuOpen(true);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white font-sans relative overflow-hidden">
      {/* Top Header / Status bar - ALWAYS VISIBLE for Page Feel */}
      <GameNavbar
        countryData={countryData}
        happiness={happiness}
        budget={budget}
        budgetDelta={budgetDelta}
        stability={stability}
        population={population}
        populationDelta={populationDelta}
        setActiveMenu={setActiveMenu}
        onLogout={() => {
          if (confirm("Apakah Anda yakin ingin mengakhiri sesi simulasi ini? Semua kemajuan akan hilang.")) {
            gameStorage.clearSession();
            router.push("/database");
          }
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 z-10 flex flex-col h-screen overflow-hidden relative pt-[73px]">

        {/* Floating UI Elements */}
        {!isWarMode && (
          <SideMenu
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            unreadCount={unreadCount}
          />
        )}

        {/* Main interactive map background viewport */}
        <div className="flex-1 relative w-full overflow-hidden bg-[#070b13]">
          {/* Floating Bottom Navigation Menu */}
          {!isWarMode && <BottomNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />}

          {/* Map Mode Toggles */}
          {!isWarMode && <MapCategorySelector mapMode={mapMode} setMapMode={setMapMode} />}

          {/* Keterangan Rute (Pelat Menu Pendukung Navigasi) */}
          {!isWarMode && <TradeRouteLegend isVisible={mapMode === "trade"} />}

          {!isWarMode && (
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
          )}

          {/* Target Interaction Modal */}
          {!isWarMode && (
            <StrategyModal
              isOpen={isMenuOpen}
              onClose={() => {
                setIsMenuOpen(false);
                setTargetCountry(null);
                setActiveMenu("Peta Taktis");
              }}
              targetCountry={targetCountry}
              userCountry={userCountry}
              activeTab={activeMenu.startsWith("CountryModal:") ? activeMenu.split(":")[2] : undefined}
              activeSubTab={activeMenu.startsWith("CountryModal:") ? activeMenu.split(":")[3] : undefined}
              setActiveMenu={setActiveMenu}
              onTabChange={(tab) => {
                if (targetCountry) {
                  const country = countries.find(c =>
                    c.name_id.toLowerCase() === targetCountry.toLowerCase() ||
                    c.name_en.toLowerCase() === targetCountry.toLowerCase()
                  );
                  if (country) {
                    setActiveMenu(`CountryModal:${country.name_id.toLowerCase()}:${tab === 'info' ? 'info_strategis' : tab === 'diplomacy' ? 'diplomasi_hubungan' : tab === 'military' ? 'aksi_militer_intelijen' : 'bantuan_kerjasama'}`);
                  }
                }
              }}
            />
          )}

          {/* Details Modal - Rendered Fixed Outside Scaling */}
          {!isWarMode && (
            <SDADetailsModal
              selectedCountrySDA={selectedCountrySDA}
              sdaIcons={sdaIcons}
              onClose={() => setSelectedCountrySDA(null)}
            />
          )}
        </div>
      </main>

      {/* Categorical Modals (Top Level Root) */}
      <ModalsManager
        isMounted={isMounted}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        countryData={countryData}
      />

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
