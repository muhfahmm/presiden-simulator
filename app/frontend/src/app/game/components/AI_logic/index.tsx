"use client"

import { useEffect, useRef } from "react";
import { DashboardInternalNPC } from "./1_AI_Kepuasan/1_statistik_kepuasan/antarmuka_data_internal/DashboardInternalNPC";
import { EvaluasiSentimenPublik } from "./1_AI_Kepuasan/1_statistik_kepuasan/pusat_pemrosesan_kognitif/EvaluasiSentimenPublik";
import { ModulPenyesuaianPajak } from "./1_AI_Kepuasan/1_statistik_kepuasan/sistem_tindakan_respon/ModulPenyesuaianPajak";
import { PusatKeputusanAcara } from "./1_AI_Kepuasan/2_naikkan_kepuasan/pusat_keputusan_acara/PusatKeputusanAcara";
import { PusatKeputusanPembangunan } from "./5_AI_Pembangunan/pusat_keputusan_pembangunan/PusatKeputusanPembangunan";
import { produksiNegaraAI } from "./5_AI_Pembangunan/sistem_tindakan_respon/ProduksiNegaraAI";
import { aiBudgetStorage } from "../map-system/modals_detail_negara/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { EksekutorPembangunanAI } from "./5_AI_Pembangunan/sistem_tindakan_respon/EksekutorPembangunanAI";
import { aiProductionStorage } from "./5_AI_Pembangunan/antarmuka_data_pembangunan/AIProductionStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { gameStorage } from "@/app/game/gamestorage";
import { getStoredGameDate } from "../1_navbar/5_navigasi_waktu/gameTime";
import { calculatePopulationHappiness } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan";

/**
 * AI Logic CNS (Central Nervous System)
 * Mengorkestrasi semua modul AI NPC.
 * 
 * Architecture:
 * - Daily Ticker: Runs once per game day (production + budget updates)
 * - Construction Cycle: Processes 70 NPCs per tick, cycling through all 207
 * - Satisfaction Cycle: Evaluates happiness for the user's country
 */

const BATCH_SIZE = 10; // NPCs processed per tick for construction (Reduced for performance)

export default function AILogicCNS() {
  const lastDateRef = useRef<string>("");
  const batchIndexRef = useRef<number>(0);

  useEffect(() => {
    const isProcessing = { current: false };

    const runAILogic = async () => {
      // 1. Get current time state
      const timeState = timeStorage.getState();
      const isPaused = timeState.isPaused;
      const currentDate = timeState.gameDate;

      // 2. Pause-Awareness: Skip if game is paused OR already thinking
      if (isPaused || isProcessing.current) return;
      
      isProcessing.current = true;
      try {
        const session = gameStorage.getSession();
        if (!session || !session.country) return;

        const currentDateStr = currentDate.toISOString().split('T')[0];

        // ═══════════════════════════════════════════════
        // DAILY TICKER (runs ONCE per new game day)
        // ═══════════════════════════════════════════════
        if (lastDateRef.current !== currentDateStr) {
          console.log(`[AI CNS] 📅 Tanggal Baru: ${currentDateStr}`);
          
          aiProductionStorage.bootstrapNPCs(countries);
          await produksiNegaraAI.jalankanSiklusHarian(currentDate);
          aiBudgetStorage.updateAll(currentDate, session.country);
          
          batchIndexRef.current = 0;
          lastDateRef.current = currentDateStr;

          // Check for completed construction projects globally
          EksekutorPembangunanAI.checkCompletion(currentDate);
        }

        // ═══════════════════════════════════════════════
        // CONSTRUCTION CYCLE (batch per game tick)
        // ═══════════════════════════════════════════════
        const npcCountries = countries.filter(c => c.name_en !== session.country);
        const startIdx = batchIndexRef.current;
        const endIdx = Math.min(startIdx + BATCH_SIZE, npcCountries.length);
        const batch = npcCountries.slice(startIdx, endIdx);
        
        // OPTIMIZATION: Process batch sequentially instead of Promise.all
        // This spreads the CPU load from spawning Python processes over time
        for (const npc of batch) {
          try {
            await PusatKeputusanPembangunan.pikirkan(npc.name_en);
          } catch (e) { /* Silent */ }
        }

        batchIndexRef.current = endIdx >= npcCountries.length ? 0 : endIdx;

        // ═══════════════════════════════════════════════
        // SATISFACTION & EVENTS (Subset per tick)
        // ═══════════════════════════════════════════════
        const dashboard = new DashboardInternalNPC();
        const kognisi = new EvaluasiSentimenPublik(dashboard);
        const satisfactionStats = (calculatePopulationHappiness() as any).global || 55;

        try {
          if (satisfactionStats <= 25) {
            const analisis = await kognisi.evaluasi(session.country);
            if (analisis.recommendations?.length > 0) {
              ModulPenyesuaianPajak.eksekusiSaran(analisis.recommendations);
            }
          }
        } catch (err) { /* Silent */ }

        // Event subset
        const eventNPCs = [...npcCountries].sort(() => 0.5 - Math.random()).slice(0, 3);
        for (const npc of eventNPCs) {
          try {
            await PusatKeputusanAcara.pikiurkan(npc.name_en);
          } catch (e) { /* Silent */ }
        }
      } finally {
        isProcessing.current = false;
      }
    };

    // PERFORMANCE: Increased interval from 2s to 6s to allow UI to breathe
    const interval = setInterval(runAILogic, 6000);
    return () => clearInterval(interval);
  }, []);

  return null; // Headless component
}