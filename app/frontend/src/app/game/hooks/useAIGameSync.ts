"use client"

import { useEffect, useRef } from "react";
import { gameStorage } from "@/app/game/gamestorage";
import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiPopulationStorage } from "@/app/game/components/modals/1_info_strategis/2_Populasi/AIPopulationStorage";
import { aiHappinessStorage } from "@/app/game/components/modals/1_info_strategis/6_Kepuasan/AIHappinessStorage";

import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { EksekutorPertahananAI } from "../components/AI_logic/6_AI_pertahanan/sistem_tindakan_respon/EksekutorPertahananAI";
import { EksekutorPembangunanAI } from "../components/AI_logic/5_AI_Pembangunan/sistem_tindakan_respon/EksekutorPembangunanAI";
import { PusatKeputusanPertahanan } from "../components/AI_logic/6_AI_pertahanan/pusat_keputusan_pertahanan/PusatKeputusanPertahanan";
import { RelationEngine } from '../components/modals/1_info_strategis/8_Hubungan/RelationEngine';
import { RelationPersistence } from '../components/modals/1_info_strategis/8_Hubungan/RelationPersistence';
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
          if (data.resetTriggered) {
            const keysToRemove = [
              "em_relation_matrix", "em_global_news_v1",
              "em_fresh_session", "em_game_date", "active_invasions",
              "em_un_voting_data", "em_un_last_ai_resolution_day"
            ];
            keysToRemove.forEach(key => localStorage.removeItem(key));
            localStorage.setItem("em_fresh_session", "true");
            window.dispatchEvent(new Event("news_updated"));
            window.dispatchEvent(new Event("ai_budget_updated"));
            window.dispatchEvent(new Event("ai_population_updated"));
            window.dispatchEvent(new Event("ai_happiness_updated"));
            window.dispatchEvent(new Event("un_voting_updated"));
            window.dispatchEvent(new CustomEvent('CLEAR_INVASIONS'));
          }

          aiBudgetStorage.syncFromBackend(data.npcStates);
          aiPopulationStorage.syncFromBackend(data.npcStates);
          aiHappinessStorage.syncFromBackend(data.npcStates);
          
          // If we successfully synced from the server, we can safely clear the fresh session flag
          if (isFreshSession && !data.resetTriggered) {
             localStorage.removeItem("em_fresh_session");
             console.log(`[useAIGameSync] NPC states synced and fresh session flag cleared.`);
          }
        } catch (e) {
          console.warn("[useAIGameSync] NPC State Sync Error:", e);
        }
      }
      // 2. Sync Relationships (Diplomasi Bilateral) — Authoritative sync from Go server
      if (data.relationships && typeof data.relationships === 'object') {
        try {
          console.log(`[useAIGameSync] Syncing ${Object.keys(data.relationships).length} relationship sets from server.`);
          RelationPersistence.syncFromServer(data.relationships, data.resetTriggered || isFreshSession);
        } catch (e) {
          console.warn("[useAIGameSync] Relationship Sync Error:", e);
        }
      }

      // 3. Trigger Local AI logic for Monthly Turn (Fallback/Events)
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

      // 2. Update AI Budget & Population FALLBACKS (ONLY if backend sync didn't provide data)
      if (!data.npcStates) {
        try {
          aiBudgetStorage.updateAll(gameDate, userCountry);
        } catch (e) { /* silent */ }

        try {
          aiPopulationStorage.updateAll(gameDate, userCountry);
        } catch (e) { /* silent */ }

        // 4. Update AI Happiness (Kepuasan) — small daily decay
        try {
          aiHappinessStorage.dailyDecay(dateStr, userCountry);
        } catch (e) { /* silent */ }
        
        // 5. AI Construction & Defense Completion
        try {
          EksekutorPembangunanAI.checkCompletion(gameDate);
          EksekutorPertahananAI.checkCompletion(gameDate);
        } catch (e) { /* silent */ }
      }

      // 6. AI Defense Thinking & Geopolitical Pulse
      try {
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


