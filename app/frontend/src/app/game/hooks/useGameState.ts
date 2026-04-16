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
import { getStoredGameDate, INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

const GO_SERVER = "http://localhost:8081";

interface PolicyUpdate {
  taxes?: Record<string, number>;
  priceIndex?: number;
  buildings?: Record<string, number>;
  religion?: string;
  ideology?: string;
  housingCapacity?: number;
}

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

    // Calculate dailyIncome from buildings and taxes (used by server for daily budget updates)
    const currentCountry = countries.find(c => c.name_id === countryName || c.name_en === countryName);
    let dailyIncome = 0;
    let initialTaxes = {};
    let initialBuildings = {};
    let initialPriceIndex = 1.0;

    if (currentCountry) {
      const buildingData = buildingStorage.getData();
      initialBuildings = buildingData.buildingDeltas || {};
      
      const breakdown = calculateBudgetBreakdown(currentCountry, initialBuildings);
      dailyIncome = breakdown.dailyDelta; 
      initialTaxes = JSON.parse(JSON.stringify(require("@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage").taxStorage.getTaxes(countryName) || currentCountry.pajak));
      initialPriceIndex = breakdown.details.priceMultiplier || 1.0;

      // Extract only the 'tarif' value for the Go backend (which expects map[string]float64)
      const simplifiedTaxes: any = {};
      Object.keys(initialTaxes).forEach(k => {
        simplifiedTaxes[k] = (initialTaxes as any)[k]?.tarif || 0;
      });
      initialTaxes = simplifiedTaxes;

      console.log(`[INIT] Calculating daily income for ${countryName}: ${dailyIncome.toFixed(2)} | PriceIndex: ${initialPriceIndex.toFixed(2)}`);
    }

    const getSocialData = () => {
      const countryName = gameStorage.getSession()?.country || "Indonesia";
      const country = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];
      
      const religion = require("@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/religionStorage").religionStorage.getCurrentReligion(country.religion);
      const ideology = require("@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/ideologyStorage").ideologyStorage.getCurrentIdeology(country.ideology);
      
      const deltas = buildingStorage.getBuildingDeltas();
      const cap = (country.hunian?.rumah_subsidi || 0) * 100 + (deltas["9_rumah_subsidi"] || 0) * 100 +
                  (country.hunian?.apartemen || 0) * 1000 + (deltas["10_apartemen"] || 0) * 1000 +
                  (country.hunian?.mansion || 0) * 10 + (deltas["11_mansion"] || 0) * 10;
      
      return { religion, ideology, housingCapacity: cap };
    };

    // Get current clock state to sync with server
    const currentClockDate = getStoredGameDate();
    const gameDateStr = currentClockDate.toISOString().split('T')[0]; // Go-compatible YYYY-MM-DD
    const diffTime = Math.abs(currentClockDate.getTime() - INITIAL_GAME_DATE.getTime());
    const dayCounter = Math.floor(diffTime / (1000 * 60 * 60 * 24));

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
        gameDate: gameDateStr,
        dayCounter: dayCounter,
        taxes: initialTaxes,
        buildings: initialBuildings,
        priceIndex: initialPriceIndex,
        religion: getSocialData().religion,
        ideology: getSocialData().ideology,
        housingCapacity: getSocialData().housingCapacity,
      }),
    }).then(res => res.json()).then(data => {
      // Server returns current state (either freshly initialized or existing)
      // New structure: { player: {...}, relationships: {...} }
      const serverPlayer = data?.player;
      const serverRelationships = data?.relationships;

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
        
        // SYNC RELATIONSHIPS IMMEDIATELY
        if (serverRelationships) {
           window.dispatchEvent(new CustomEvent("relation_matrix_sync", { detail: serverRelationships }));
        }

        console.log("[GAME] Synced with Go Server. Budget:", serverPlayer.budget, "Relationships Synced.");
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

      // Real-time Relationship Sync
      if (data.relationships) {
        window.dispatchEvent(new CustomEvent("relation_matrix_sync", { detail: data.relationships }));
      }

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

    // ═══════════════════════════════════════════════════════
    // POLICY SYNC: Push UI changes (Taxes, Prices, Buildings) to Go
    // ═══════════════════════════════════════════════════════
    const syncPolicies = () => {
      const countryName = gameStorage.getSession()?.country || "Indonesia";
      const currentCountry = countries.find(c => c.name_id === countryName || c.name_en === countryName);
      if (!currentCountry) return;

      const buildingData = buildingStorage.getData();
      const breakdown = calculateBudgetBreakdown(currentCountry, buildingData.buildingDeltas);
      const taxData = require("@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage").taxStorage.getTaxes(countryName) || currentCountry.pajak;
      
      const simplifiedTaxes: any = {};
      Object.keys(taxData).forEach(k => {
        simplifiedTaxes[k] = taxData[k]?.tarif || 0;
      });

      const social = getSocialData();

      fetch(`${GO_SERVER}/api/game/update-policy`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taxes: simplifiedTaxes,
          priceIndex: breakdown.details.priceMultiplier,
          buildings: buildingData.buildingDeltas,
          religion: social.religion,
          ideology: social.ideology,
          housingCapacity: social.housingCapacity,
        }),
      }).catch(err => console.error("[POLICY] Sync Failed:", err));
    };

    window.addEventListener('tax_updated', syncPolicies);
    window.addEventListener('price_updated', syncPolicies);
    window.addEventListener('building_storage_updated', syncPolicies);

    return () => {
      window.removeEventListener('inbox_updated', updateInboxCount);
      window.removeEventListener('happiness_critical', handleCritical);
      window.removeEventListener('happiness_gameover', handleGameOver);
      window.removeEventListener('game_state_sync', handleServerSync);
      window.removeEventListener('tax_updated', syncPolicies);
      window.removeEventListener('price_updated', syncPolicies);
      window.removeEventListener('building_storage_updated', syncPolicies);
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
