"use client"

import { useEffect, useRef } from "react";
import { gameStorage } from "@/app/game/gamestorage";
import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiPopulationStorage } from "@/app/game/components/modals/1_info_strategis/2_Populasi/AIPopulationStorage";
import { aiHappinessStorage } from "@/app/game/components/modals/1_info_strategis/6_Kepuasan/AIHappinessStorage";

import { countries } from "@/app/database/data/negara/benua/index";
import { EksekutorPertahananAI } from "../components/AI_logic/6_AI_pertahanan/sistem_tindakan_respon/EksekutorPertahananAI";
import { EksekutorPembangunanAI } from "../components/AI_logic/5_AI_Pembangunan/sistem_tindakan_respon/EksekutorPembangunanAI";
import { PusatKeputusanPertahanan } from "../components/AI_logic/6_AI_pertahanan/pusat_keputusan_pertahanan/PusatKeputusanPertahanan";
import { RelationEngine } from '../components/3_hubungan/RelationEngine';
import { GeopoliticalPulse } from '../logic/ai/geopolitical/GeopoliticalPulse';

/**
 * useAIGameSync — Orchestrator untuk sinkronisasi stats AI dengan game time.
 * 
 * Listen ke event `game_state_sync` (dispatched setiap game day dari Go Server via SSE).
 * Pada setiap hari baru, trigger update:
 *   - AI Budget (Kas Negara) → aiBudgetStorage.updateAll()
 *   - AI Population (Populasi) → aiPopulationStorage.updateAll()
 *   - AI Happiness (Kepuasan) → aiHappinessStorage.dailyDecay()
 *   - AI Defense → Check completion & thinking process
 */
export function useAIGameSync() {
  const lastProcessedDateRef = useRef<string>("");
  const batchIndexRef = useRef<number>(0);
  const BATCH_SIZE = 3; // Process 3 NPCs per game day for defense thinking

  useEffect(() => {
    const session = gameStorage.getSession();
    const userCountry = session?.country || "Indonesia";

    const handleSync = async (e: Event) => {
      const data = (e as CustomEvent).detail;
      if (!data?.gameDate) return;

      const dateStr = data.gameDate; // format: "2026-01-15"

      // Skip if already processed this game day
      if (dateStr === lastProcessedDateRef.current) return;
      lastProcessedDateRef.current = dateStr;

      const gameDate = new Date(dateStr);

      // SKIP updates if fresh session — preserve default database values
      const isFreshSession = typeof window !== 'undefined' && localStorage.getItem("em_fresh_session") === "true";
      
      // NEW: Explicit Sync from Backend (Go Server Authoritative)
      if (data.npcStates && typeof data.npcStates === 'object') {
        try {
          aiBudgetStorage.syncFromBackend(data.npcStates);
          aiPopulationStorage.syncFromBackend(data.npcStates);
          aiHappinessStorage.syncFromBackend(data.npcStates);
          
          // If we successfully synced from the server, we can safely clear the fresh session flag
          if (isFreshSession) {
             localStorage.removeItem("em_fresh_session");
             console.log(`[useAIGameSync] NPC states synced and fresh session flag cleared.`);
          }
        } catch (e) {
          console.warn("[useAIGameSync] NPC State Sync Error:", e);
        }
      }

      // 1. AI Diplomacy & Global Drift — Process MONTHLY on the 1st
      try {
        const isFirstDayOfMonth = gameDate.getDate() === 1;
        if (isFirstDayOfMonth) {
          console.log(`[useAIGameSync] Monthly Diplomacy Drift triggered for ${dateStr}...`);
          RelationEngine.processDailyUpdate(userCountry).catch(err => 
            console.error("[useAIGameSync] Diplomacy Drift Error:", err)
          );
        }
      } catch (e) {
        console.warn("[useAIGameSync] Diplomacy Drift Trigger Error:", e);
      }

      if (isFreshSession) {
        // Still skip local AI calculations for now to preserve server authority
        return;
      }

      // 2. Update AI Budget (Kas Negara) — adds daily income for all 206 NPC nations
      // SKIP these if backend sync already handled it, but keep as fallback if npcStates is missing
      if (!data.npcStates) {
        try {
          aiBudgetStorage.updateAll(gameDate, userCountry);
        } catch (e) { /* silent */ }

        // 3. Update AI Population (Populasi) — grows population daily for all NPC nations
        try {
          aiPopulationStorage.updateAll(gameDate, userCountry);
        } catch (e) { /* silent */ }
      }

      // 4. Update AI Happiness (Kepuasan) — small daily decay
      try {
        aiHappinessStorage.dailyDecay(dateStr, userCountry);
      } catch (e) { /* silent */ }

      // 5. AI Construction & Defense Completion
      try {
        // A. Check for completed BUILDING projects (was missing — caused AI counts to never increment)
        EksekutorPembangunanAI.checkCompletion(gameDate);

        // B. Check for completed DEFENSE projects
        EksekutorPertahananAI.checkCompletion(gameDate);

        // B. Process a batch of NPCs for defense thinking
        const npcCountries = countries.filter(c => c.name_en !== userCountry);
        const startIdx = batchIndexRef.current;
        const endIdx = Math.min(startIdx + BATCH_SIZE, npcCountries.length);
        const batch = npcCountries.slice(startIdx, endIdx);

        for (const npc of batch) {
          // Fire and forget thinking process so it doesn't block the next day sync
          PusatKeputusanPertahanan.pikirkan(npc.name_en).catch(err => 
            console.error(`[AI Defense] Thinking error for ${npc.name_en}:`, err)
          );
        }

        // C. Process Geopolitical Membership Cycle (Regional & PBB)
        GeopoliticalPulse.processDaily(gameDate, userCountry).catch(err =>
          console.error("[useAIGameSync] Geopolitical Pulse Error:", err)
        );

        // D. Update rotation index
        batchIndexRef.current = endIdx >= npcCountries.length ? 0 : endIdx;
      } catch (e) {
        console.error("[useAIGameSync] Defense AI Cycle Error:", e);
      }
    };

    window.addEventListener("game_state_sync", handleSync);
    return () => {
      window.removeEventListener("game_state_sync", handleSync);
    };
  }, []);
}

