"use client"

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import MapRenderer from "@/app/game/components/2_navigasi_menu/1_navigasi_atas/MapRenderer";
import MapCategorySelector from "../components/2_navigasi_menu/1_navigasi_atas/MapCategorySelector";
import TradeRouteLegend from "../components/2_navigasi_menu/1_navigasi_atas/TradeRouteLegend";
import { sdaIcons } from "../components/2_navigasi_menu/1_navigasi_atas/SDA/sdaIcons";
import StrategyModal from "@/app/game/components/modals/modals";
import SDADetailsModal from "@/app/game/components/modals/1_info_strategis/1_SDA/SDADetailsModal";
import BottomNav from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/BottomNav";
import SideMenu from "@/app/game/components/sidemenu/SideMenu";
import ModalsManager from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/ModalsManager";
import GameOverOverlay from "@/app/game/components/6_overlays/GameOverOverlay";
import WelcomeOverlay from "@/app/game/components/6_overlays/WelcomeOverlay";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import GameNavbar from "@/app/game/components/1_navbar";
import { initAiDiplomacy } from "../logic/ai/ai_diplomacy_engine/AiGlobalDiplomacy";
import { newsStorage } from "../components/sidemenu/1_berita/newsStorage";
import { aiBudgetStorage } from "../components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiPopulationStorage } from "../components/modals/1_info_strategis/2_Populasi/AIPopulationStorage";
// import AILogicCNS from "../components/AI_logic"; // REMOVED: All AI logic migrated to Go Server

import { useGameState } from "../hooks/useGameState";
import { useGamePath } from "../hooks/useGamePath";
import { useMapData } from "../hooks/useMapData";
import { useAIGameSync } from "../hooks/useAIGameSync";

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

  // Sync AI nation stats (Budget, Population, Happiness) with game time
  useAIGameSync();

  // EXPLICIT RESET: Ensure AI storages are reset to defaults ONLY on a fresh session
  // This prevents accidental wiping of NPC progress during normal page refreshes
  useEffect(() => {
    const isFresh = typeof window !== 'undefined' && localStorage.getItem("em_fresh_session") === "true";
    if (isFresh) {
      console.log("[GAME PAGE] Fresh session detected. Resetting AI storages to database defaults...");
      aiBudgetStorage.clear();
      aiPopulationStorage.clear();
      // Reset relation scores too for absolute consistency
      const { relationStorage } = require("../components/modals/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage");
      relationStorage.clear();
      console.log("[GAME PAGE] AI and Relation storages reset complete");
    }
  }, []);

  useEffect(() => {
    initAiDiplomacy();
    // Connect to Go Server SSE stream for real-time news & state sync
    newsStorage.connectSSE();
    return () => {
      newsStorage.disconnectSSE();
    };
  }, []);

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
      {/* AI Simulation Logic CNS — DISABLED: Migrated to Go Server */}
      {/* <AILogicCNS /> */}

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
            router.push("/pilih_negara");
          }
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 z-10 flex flex-col h-screen overflow-hidden relative pt-[73px]">

        {/* Floating UI Elements */}
        <SideMenu
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          unreadCount={unreadCount}
        />

        {/* Main interactive map background viewport */}
        <div className="flex-1 relative w-full overflow-hidden bg-[#070b13]">
          {/* Floating Bottom Navigation Menu */}
          <BottomNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

          {/* Map Mode Toggles */}
          <MapCategorySelector mapMode={mapMode} setMapMode={setMapMode} />

          {/* Keterangan Rute (Pelat Menu Pendukung Navigasi) */}
          <TradeRouteLegend isVisible={mapMode === "trade"} />

          <MapRenderer
            mapMode={mapMode}
            userCountry={userCountry}
            targetCountry={targetCountry}
            geoData={geoData}
            onSelect={handleSelect}
            onSelectSDA={(data) => setSelectedCountrySDA(data)}
          />

          {/* Target Interaction Modal */}
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
            activeSector={activeMenu.startsWith("CountryModal:") ? activeMenu.split(":")[4] : undefined}
            activeCard={activeMenu.startsWith("CountryModal:") ? activeMenu.split(":")[5] : undefined}
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

          {/* Details Modal - Rendered Fixed Outside Scaling */}
          <SDADetailsModal
            selectedCountrySDA={selectedCountrySDA}
            sdaIcons={sdaIcons}
            onClose={() => setSelectedCountrySDA(null)}
          />
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
