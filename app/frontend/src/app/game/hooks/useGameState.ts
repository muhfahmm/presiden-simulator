"use client"

import { useState, useEffect } from "react";
import { gameStorage } from "@/app/game/gamestorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { budgetDeltaStorage } from "@/app/game/components/1_navbar/3_kas_negara/BudgetDeltaStorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { calculateDailyBudgetDelta, calculateBudgetBreakdown } from "@/app/game/data/economy/BudgetDeltaLogic";
import { calculateDetailedPopulationMetrics } from "@/app/game/components/1_navbar/2_populasi/PopulationDeltaLogic";
import { calculatePopulationHappiness } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan";
import { stabilityStorage } from "@/app/game/components/1_navbar/4_stabilitas";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { populationDeltaStorage } from "@/app/game/components/1_navbar/2_populasi/PopulationDeltaStorage";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
export function useGameState(setActiveMenu: (menu: string) => void) {
  const [approval, setApproval] = useState(55);
  const [budget, setBudget] = useState(1240.5); // in Trillion
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

  useEffect(() => {
    setIsMounted(true);
    const session = gameStorage.getSession();
    if (session?.country) {
      setUserCountry(session.country);
      setBudget(budgetStorage.getBudget());
      setStability(stabilityStorage.getStability());
      setPopulation(populationStorage.getPopulation());
    } else {
      setStability(stabilityStorage.getStability());
      setPopulation(populationStorage.getPopulation());
    }
    
    if (session?.isWelcomeSeen) {
      setShowWelcome(false);
    }
    
    // Inbox Unread Count Listener
    const updateInboxCount = () => setUnreadCount(inboxStorage.getUnreadCount());
    updateInboxCount(); 
    window.addEventListener('inbox_updated', updateInboxCount);

    const updateBudgetAndDelta = () => {
      setBudget(budgetStorage.getBudget());
      setStability(stabilityStorage.getStability());
      setPopulation(populationStorage.getPopulation());

      const session = gameStorage.getSession();
      const currentCountryName = session?.country || "Indonesia";
      const currentCountry = countries.find(c => c.name_id === currentCountryName || c.name_en === currentCountryName);
      
      if (currentCountry) {
        const buildingData = buildingStorage.getData();
        const breakdown = calculateBudgetBreakdown(currentCountry, buildingData.buildingDeltas);
        const delta = breakdown.dailyTaxRevenue;
        setBudgetDelta(delta);
        budgetDeltaStorage.setDelta(delta);
        setHappiness(calculatePopulationHappiness());

        const currentPop = populationStorage.getPopulation();
        const buildingDeltas = buildingStorage.getBuildingDeltas();
        const popMetrics = calculateDetailedPopulationMetrics(currentCountry, currentPop, buildingDeltas);
        const popDelta = popMetrics.totalDailyDelta;
        
        setPopulationDelta(popDelta);
        populationDeltaStorage.setDelta(popDelta);
      }
    };

    updateBudgetAndDelta();
    const interval = setInterval(updateBudgetAndDelta, 1000);

    const handleCritical = () => setActiveMenu("Dashboard:Kepuasan");
    const handleGameOver = () => setIsGameOver(true);

    window.addEventListener('happiness_critical', handleCritical);
    window.addEventListener('happiness_gameover', handleGameOver);

    return () => {
      clearInterval(interval);
      window.removeEventListener('inbox_updated', updateInboxCount);
      window.removeEventListener('happiness_critical', handleCritical);
      window.removeEventListener('happiness_gameover', handleGameOver);
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

