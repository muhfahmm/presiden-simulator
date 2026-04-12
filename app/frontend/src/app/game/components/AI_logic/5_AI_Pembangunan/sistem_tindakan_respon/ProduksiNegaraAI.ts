"use client"

import { aiProductionStorage } from "../antarmuka_data_pembangunan/AIProductionStorage";
import { aiBuildingStorage } from "../antarmuka_data_pembangunan/AIBuildingStorage";
import { countries } from "@/app/database/data/negara/benua";

/**
 * ProduksiNegaraAI
 * Mengelola siklus produksi harian untuk semua negara NPC.
 * Menggunakan script Python untuk menghitung output berdasarkan bangunan.
 */
export const produksiNegaraAI = {
  /**
   * Menjalankan siklus produksi harian untuk semua NPC.
   */
  jalankanSiklusHarian: async (gameDate: Date) => {
    const dateStr = gameDate.toISOString().split('T')[0];
    
    // Untuk pengembangan: Kita proses semua negara
    // Di produksi: Kita bisa melimit per batch
    for (const country of countries) {
      if (country.isUser) continue; // Pemain diproses oleh sistem lain

      try {
        const countryName = country.name_en;
        
        // 1. Ambil Bangunan Bawaan (Baseline) dari Database
        const baselineBuildings: Record<string, number> = {};
        
        // Map dari database sectors ke production logic
        const sectorMapping = [
            { key: 'sektor_listrik', rate_key: 'KAPASITAS_LISTRIK_METADATA' },
            { key: 'sektor_manufaktur', rate_key: 'manufakturRate' },
            { key: 'sektor_peternakan', rate_key: 'peternakanRate' },
            { key: 'sektor_agrikultur', rate_key: 'agrikulturRate' },
            { key: 'sektor_perikanan', rate_key: 'perikananRate' },
            { key: 'sektor_ekstraksi', rate_key: 'mineralKritisRate' },
            { key: 'sektor_olahan_pangan', rate_key: 'olahanPanganRate' },
            { key: 'sektor_farmasi', rate_key: 'farmasiRate' },
            { key: 'pabrik_militer', rate_key: 'pabrikMiliterRate' }
        ];

        // Karena struktur database NPC berbeda (dataKey), kita perlu konversi
        // Untuk Sektor Manufaktur (Beton, Baja, Kayu)
        if (country.sektor_manufaktur) {
            if (country.sektor_manufaktur.semen_beton_factory) baselineBuildings["5_pabrik_semen"] = country.sektor_manufaktur.semen_beton_factory;
            if (country.sektor_manufaktur.kayu_factory) baselineBuildings["6_penggergajian_kayu"] = country.sektor_manufaktur.kayu_factory;
            if (country.sektor_manufaktur.besi_baja_factory) baselineBuildings["12_tambang_bijih_besi"] = (baselineBuildings["12_tambang_bijih_besi"] || 0) + country.sektor_manufaktur.besi_baja_factory;
        }
        // Tambang Besi ada di ekstraksi
        if (country.sektor_ekstraksi && country.sektor_ekstraksi.bijih_besi) {
            baselineBuildings["12_tambang_bijih_besi"] = (baselineBuildings["12_tambang_bijih_besi"] || 0) + country.sektor_ekstraksi.bijih_besi;
        }

        // 2. Ambil Bangunan Tambahan yang sudah dibangun selama game
        const deltaBuildings = aiBuildingStorage.getAllBuildingDeltas(countryName);

        // 3. Gabungkan Semua
        const totalBuildings = { ...baselineBuildings };
        Object.entries(deltaBuildings).forEach(([key, val]) => {
            totalBuildings[key] = (totalBuildings[key] || 0) + val;
        });

        // Panggil API Python dengan data LENGKAP
        const response = await fetch('/game/components/AI_logic/5_AI_Pembangunan/routes/global_produksi', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ countryName, buildings: totalBuildings })
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        
        if (data.status === 'success' && data.production_deltas) {
          // Update stok di storage (misal: Beton, Kayu, Baja)
          // Kita hanya ambil dataKey yang relevan untuk pembangunan fisik sementara
          // Tapi pusat_produksi.py mengembalikan SEMUA. 
          // AIProductionStorage.updateStocks akan menyimpannya.
          aiProductionStorage.updateStocks(countryName, data.production_deltas, gameDate);
          
          console.log(`[AI Production] ${countryName} produced resources for ${dateStr}`);
        }
      } catch (error) {
        console.error(`[AI Production Error] Failed for ${country.name_en}:`, error);
      }
    }
  }
};
