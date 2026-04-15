"use client"

import { useEffect, useRef } from "react";
import { gameStorage } from "@/app/game/gamestorage";
import { aiBudgetStorage } from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiPopulationStorage } from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/2_Populasi/AIPopulationStorage";
import { aiHappinessStorage } from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/6_Kepuasan/AIHappinessStorage";

/**
 * useAIGameSync — Orchestrator untuk sinkronisasi stats AI dengan game time.
 * 
 * Listen ke event `game_state_sync` (dispatched setiap game day dari Go Server via SSE).
 * Pada setiap hari baru, trigger update:
 *   - AI Budget (Kas Negara) → aiBudgetStorage.updateAll()
 *   - AI Population (Populasi) → aiPopulationStorage.updateAll()
 *   - AI Happiness (Kepuasan) → aiHappinessStorage.dailyDecay()
 * 
 * Masing-masing storage sudah punya built-in dedup (lastProcessedDate),
 * jadi tidak akan double-process hari yang sama.
 */
export function useAIGameSync() {
  const lastProcessedDateRef = useRef<string>("");

  useEffect(() => {
    const session = gameStorage.getSession();
    const userCountry = session?.country || "Indonesia";

    const handleSync = (e: Event) => {
      const data = (e as CustomEvent).detail;
      if (!data?.gameDate) return;

      const dateStr = data.gameDate; // format: "2026-01-15"

      // Skip if already processed this game day
      if (dateStr === lastProcessedDateRef.current) return;
      lastProcessedDateRef.current = dateStr;

      const gameDate = new Date(dateStr);

      // 1. Update AI Budget (Kas Negara) — adds daily income for all 206 NPC nations
      try {
        aiBudgetStorage.updateAll(gameDate, userCountry);
      } catch (e) { /* silent */ }

      // 2. Update AI Population (Populasi) — grows population daily for all NPC nations
      try {
        aiPopulationStorage.updateAll(gameDate, userCountry);
      } catch (e) { /* silent */ }

      // 3. Update AI Happiness (Kepuasan) — small daily decay
      try {
        aiHappinessStorage.dailyDecay(dateStr, userCountry);
      } catch (e) { /* silent */ }
    };

    window.addEventListener("game_state_sync", handleSync);
    return () => {
      window.removeEventListener("game_state_sync", handleSync);
    };
  }, []);
}
