"use client"

import { useEffect, useRef } from "react";
import { DashboardInternalNPC } from "./1_AI_Kepuasan/1_statistik_kepuasan/antarmuka_data_internal/DashboardInternalNPC";
import { EvaluasiSentimenPublik } from "./1_AI_Kepuasan/1_statistik_kepuasan/pusat_pemrosesan_kognitif/EvaluasiSentimenPublik";
import { ModulPenyesuaianPajak } from "./1_AI_Kepuasan/1_statistik_kepuasan/sistem_tindakan_respon/ModulPenyesuaianPajak";
import { PusatKeputusanAcara } from "./1_AI_Kepuasan/2_naikkan_kepuasan/pusat_keputusan_acara/PusatKeputusanAcara";
import { PusatKeputusanPembangunan } from "./5_AI_Pembangunan/pusat_keputusan_pembangunan/PusatKeputusanPembangunan";
import { produksiNegaraAI } from "./5_AI_Pembangunan/sistem_tindakan_respon/ProduksiNegaraAI";
import { aiHappinessStorage } from "../map-system/modals_detail_negara/1_info_strategis/6_Kepuasan/AIHappinessStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { gameStorage } from "@/app/game/gamestorage";
import { getStoredGameDate } from "../1_navbar/5_navigasi_waktu/gameTime";

/**
 * AI Logic CNS (Central Nervous System)
 * Mengorkestrasi semua modul AI NPC.
 */
export default function AILogicCNS() {
  const lastDateRef = useRef<string>("");

  useEffect(() => {
    const runAILogic = async () => {
      const session = gameStorage.getSession();
      if (!session || !session.country) return;

      const currentDate = getStoredGameDate();
      const currentDateStr = currentDate.toISOString().split('T')[0];

      // Ticker Produksi Harian (Hanya jalan sekali sehari)
      if (lastDateRef.current !== currentDateStr) {
        console.log(`[AI CNS] Tanggal Baru Terdeteksi: ${currentDateStr}. Menjalankan Produksi Nasioanal...`);
        await produksiNegaraAI.jalankanSiklusHarian(currentDate);
        lastDateRef.current = currentDateStr;
      }

      console.log(`[AI CNS] Menjalankan siklus kognitif untuk ${session.country}...`);

      // 1. Inisialisasi Kepuasan AI
      const dashboard = new DashboardInternalNPC();
      const kognisi = new EvaluasiSentimenPublik(dashboard);

      // 2. Jalankan Evaluasi (Trigger API Python)
      try {
        const analisis = await kognisi.evaluasi(session.country);
        console.log("[AI SATISFACTION BRAIN] Thoughts:", analisis.thought);

        // 3. Jika ada rekomendasi, eksekusi di tangan (Action)
        if (analisis.recommendations && analisis.recommendations.length > 0) {
          ModulPenyesuaianPajak.eksekusiSaran(analisis.recommendations);
        }
      } catch (err) {
        console.error("[AI CNS] Gagal menjalankan AI Kepuasan:", err);
      }

      // 4. Modul 2_naikkan_kepuasan (Otonomi Acara Publik untuk NPC)
      // Pick 3 random NPC countries each cycle to think about hosting an event
      const npcCountries = countries.filter(c => c.name_en !== session.country);
      const shuffled = [...npcCountries].sort(() => 0.5 - Math.random());
      const selectedNPCs = shuffled.slice(0, 10); // Check 10 NPCs for testing

      selectedNPCs.forEach(async (npc) => {
        await PusatKeputusanAcara.pikiurkan(npc.name_en);
        await PusatKeputusanPembangunan.pikiurkan(npc.name_en);
      });
    };

    // Jalankan setiap 1 detik (Mode Test Akselerasi)
    const interval = setInterval(runAILogic, 1000);
    return () => clearInterval(interval);
  }, []);

  return null; // Komponen ini hanya logika (Headless)
}