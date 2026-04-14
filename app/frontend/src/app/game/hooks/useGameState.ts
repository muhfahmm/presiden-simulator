"use client"

import { useState, useEffect, useCallback, useRef } from "react";
import { gameStorage } from "@/app/game/gamestorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { budgetDeltaStorage } from "@/app/game/components/1_navbar/3_kas_negara/BudgetDeltaStorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { calculateBudgetBreakdown } from "@/app/game/data/economy/BudgetDeltaLogic";
import { calculatePopulationHappiness } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan";
import { stabilityStorage } from "@/app/game/components/1_navbar/4_stabilitas";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { populationDeltaStorage } from "@/app/game/components/1_navbar/2_populasi/PopulationDeltaStorage";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

const GO_SERVER = "http://localhost:8081";

export function useGameState(setActiveMenu: (menu: string) => void) {
  const [approval, setApproval] = useState(55);
  const [budget, setBudget] = useState(0);
  const [budgetDelta, setBudgetDelta] = useState(0);
  const [happiness, setHappiness] = useState({ global: 55 });
  const [stability, setStability] = useState(80);
  const [population, setPopulation] = useState(0);
  const [populationDelta, setPopulationDelta] = useState(0);
  const [userCountry, setUserCountry] = useState("Indonesia");
  const [isMounted, setIsMounted] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [targetCountry, setTargetCountry] = useState<string | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedCountrySDA, setSelectedCountrySDA] = useState<{ name: string; flag: string; resources: any } | null>(null);
  const serverConnected = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    const session = gameStorage.getSession();
    const countryName = session?.country || "Indonesia";

    if (session?.country) {
      setUserCountry(session.country);
    }
    
    // Load initial values from localStorage (will be overridden by server)
    setBudget(budgetStorage.getBudget());
    setStability(stabilityStorage.getStability());
    setPopulation(populationStorage.getPopulation());
    
    if (session?.isWelcomeSeen) {
      setShowWelcome(false);
    }

    // Calculate dailyIncome from buildings (used by server)
    const currentCountry = countries.find(c => c.name_id === countryName || c.name_en === countryName);
    let dailyIncome = 0;
    if (currentCountry) {
      const buildingData = buildingStorage.getData();
      const breakdown = calculateBudgetBreakdown(currentCountry, buildingData.buildingDeltas);
      dailyIncome = breakdown.dailyTaxRevenue;
    }

    // Send initial state to Go Server (server will SKIP if already initialized)
    fetch(`${GO_SERVER}/api/game/init-player`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        country: countryName,
        happiness: calculatePopulationHappiness().global || 55,
        population: populationStorage.getPopulation(),
        populationDelta: 0,
        budget: budgetStorage.getBudget(),
        dailyIncome: dailyIncome,
        stability: stabilityStorage.getStability(),
      }),
    }).then(res => res.json()).then(serverPlayer => {
      // Server returns current state (either freshly initialized or existing)
      if (serverPlayer?.initialized) {
        serverConnected.current = true;
        setBudget(serverPlayer.budget);
        setBudgetDelta(serverPlayer.dailyIncome);
        setPopulation(Math.round(serverPlayer.population));
        setPopulationDelta(Math.round(serverPlayer.populationDelta));
        setHappiness({ global: serverPlayer.happiness });
        setStability(serverPlayer.stability);
        // Sync to localStorage
        budgetStorage.setBudgetDirect(serverPlayer.budget);
        populationStorage.setPopulationDirect(Math.round(serverPlayer.population));
        stabilityStorage.setStabilityDirect(serverPlayer.stability);
        console.log("[GAME] Synced with Go Server. Budget:", serverPlayer.budget);
      }
    }).catch(() => {
      console.warn("[GAME] Go Server offline — using localStorage fallback.");
    });
    
    // Inbox Unread Count Listener
    const updateInboxCount = () => setUnreadCount(inboxStorage.getUnreadCount());
    updateInboxCount(); 
    window.addEventListener('inbox_updated', updateInboxCount);

    // ═══════════════════════════════════════════════════════
    // SSE LISTENER: Consume player state from Go Server
    // Updates on EVERY game day tick from the server
    // ═══════════════════════════════════════════════════════
    let lastStorageSync = 0;
    const STORAGE_THROTTLE_MS = 500; // Only write localStorage every 500ms

    const handleServerSync = (e: Event) => {
      const data = (e as CustomEvent).detail;
      if (!data?.player?.initialized) return;

      serverConnected.current = true;
      const p = data.player;
      
      // Update React state immediately (for smooth UI)
      setBudget(p.budget);
      setBudgetDelta(p.dailyIncome);
      setPopulation(Math.round(p.population));
      setPopulationDelta(Math.round(p.populationDelta));
      setHappiness({ global: Math.round(p.happiness * 10) / 10 });
      setStability(Math.round(p.stability * 10) / 10);

      // Throttle localStorage writes to prevent QuotaExceededError
      const now = Date.now();
      if (now - lastStorageSync > STORAGE_THROTTLE_MS) {
        lastStorageSync = now;
        budgetStorage.setBudgetDirect(p.budget);
        budgetDeltaStorage.setDelta(p.dailyIncome);
        populationStorage.setPopulationDirect(Math.round(p.population));
        populationDeltaStorage.setDelta(Math.round(p.populationDelta));
        stabilityStorage.setStabilityDirect(p.stability);
      }
    };
    window.addEventListener('game_state_sync', handleServerSync);

    const handleCritical = () => setActiveMenu("Dashboard:Kepuasan");
    const handleGameOver = () => setIsGameOver(true);

    window.addEventListener('happiness_critical', handleCritical);
    window.addEventListener('happiness_gameover', handleGameOver);

    return () => {
      window.removeEventListener('inbox_updated', updateInboxCount);
      window.removeEventListener('happiness_critical', handleCritical);
      window.removeEventListener('happiness_gameover', handleGameOver);
      window.removeEventListener('game_state_sync', handleServerSync);
    };
  }, [setActiveMenu]);

  return {
    approval, setApproval,
    budget, setBudget,
    budgetDelta, setBudgetDelta,
    happiness, setHappiness,
    stability, setStability,
    population, setPopulation,
    populationDelta, setPopulationDelta,
    userCountry, setUserCountry,
    isMounted,
    unreadCount,
    targetCountry, setTargetCountry,
    isGameOver, setIsGameOver,
    showWelcome, setShowWelcome,
    selectedCountrySDA, setSelectedCountrySDA
  };
}
