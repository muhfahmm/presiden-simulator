"use client"

import { aiProductionStorage } from "./AIProductionStorage";
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
        const buildings = aiBuildingStorage.getBuildings(countryName);

        // Panggil API Python
        const response = await fetch('/game/components/AI_logic/5_AI_Pembangunan/routes/global_produksi', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ countryName, buildings })
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
