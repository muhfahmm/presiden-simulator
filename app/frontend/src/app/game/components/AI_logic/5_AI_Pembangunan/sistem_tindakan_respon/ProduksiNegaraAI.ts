"use client"

import { aiProductionStorage } from "../antarmuka_data_pembangunan/AIProductionStorage";
import { aiBuildingStorage } from "../antarmuka_data_pembangunan/AIBuildingStorage";
import { countries } from "@/app/database/data/negara/benua";
import { gameStorage } from "@/app/game/gamestorage";

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
    const session = gameStorage.getSession();
    const userCountry = session?.country;

    // Iterasi semua negara untuk produksi harian
    for (const country of countries) {
      try {
        const countryName = country.name_en;
        const isUser = countryName === userCountry;
        
        // 1. Ambil Bangunan Bawaan (Baseline) dari Database
        const baselineBuildings: Record<string, number> = {};
        
        // --- SEKTOR LISTRIK ---
        if (country.sektor_listrik) {
            if (country.sektor_listrik.pembangkit_listrik_tenaga_nuklir) baselineBuildings["1_pembangkit_listrik_tenaga_nuklir"] = country.sektor_listrik.pembangkit_listrik_tenaga_nuklir;
            if (country.sektor_listrik.pembangkit_listrik_tenaga_air) baselineBuildings["2_pembangkit_listrik_tenaga_air"] = country.sektor_listrik.pembangkit_listrik_tenaga_air;
            if (country.sektor_listrik.pembangkit_listrik_tenaga_surya) baselineBuildings["3_pembangkit_listrik_tenaga_surya"] = country.sektor_listrik.pembangkit_listrik_tenaga_surya;
            if (country.sektor_listrik.pembangkit_listrik_tenaga_uap) baselineBuildings["4_pembangkit_listrik_tenaga_uap"] = country.sektor_listrik.pembangkit_listrik_tenaga_uap;
            if (country.sektor_listrik.pembangkit_listrik_tenaga_gas) baselineBuildings["5_pembangkit_listrik_tenaga_gas"] = country.sektor_listrik.pembangkit_listrik_tenaga_gas;
            if (country.sektor_listrik.pembangkit_listrik_tenaga_angin) baselineBuildings["6_pembangkit_listrik_tenaga_angin"] = country.sektor_listrik.pembangkit_listrik_tenaga_angin;
        }

        // Mapping Sektor Produksi (Menggunakan buildingKeys asli)
        if (country.sektor_manufaktur) {
            if (country.sektor_manufaktur.semen_beton) baselineBuildings["5_pabrik_semen"] = (baselineBuildings["5_pabrik_semen"] || 0) + country.sektor_manufaktur.semen_beton;
            if (country.sektor_manufaktur.kayu) baselineBuildings["6_penggergajian_kayu"] = country.sektor_manufaktur.kayu;
            if (country.sektor_manufaktur.smelter) baselineBuildings["4_smelter"] = country.sektor_manufaktur.smelter;
            
            if (country.sektor_manufaktur.semikonduktor) baselineBuildings["1_pabrik_elektronik"] = country.sektor_manufaktur.semikonduktor;
            if (country.sektor_manufaktur.mobil) baselineBuildings["2_pabrik_mobil"] = country.sektor_manufaktur.mobil;
            if (country.sektor_manufaktur.sepeda_motor) baselineBuildings["3_pabrik_motor"] = country.sektor_manufaktur.sepeda_motor;
            if (country.sektor_manufaktur.pupuk) baselineBuildings["7_pabrik_pupuk"] = country.sektor_manufaktur.pupuk;
        }

        if (country.sektor_ekstraksi) {
            if (country.sektor_ekstraksi.bijih_besi) baselineBuildings["12_tambang_bijih_besi"] = country.sektor_ekstraksi.bijih_besi;
            if (country.sektor_ekstraksi.batu_bara) baselineBuildings["3_tambang_batu_bara"] = country.sektor_ekstraksi.batu_bara;
            if (country.sektor_ekstraksi.minyak_bumi) baselineBuildings["4_sumur_minyak"] = country.sektor_ekstraksi.minyak_bumi;
            if (country.sektor_ekstraksi.emas) baselineBuildings["1_tambang_emas"] = country.sektor_ekstraksi.emas;
            if (country.sektor_ekstraksi.uranium) baselineBuildings["2_tambang_uranium"] = country.sektor_ekstraksi.uranium;
        }

        // Lainnya (Spread generically if we just need counts for generic sectors)
        const moreSectors = ['sektor_peternakan', 'sektor_agrikultur', 'sektor_perikanan', 'sektor_olahan_pangan', 'sektor_farmasi', 'pabrik_militer'];
        moreSectors.forEach(s => {
            const data = (country as any)[s];
            if (data) {
                Object.entries(data).forEach(([key, val]) => {
                    baselineBuildings[key] = (baselineBuildings[key] || 0) + Number(val);
                });
            }
        });

        // 2. Ambil Bangunan Tambahan dari storage
        let deltaBuildings: Record<string, number> = {};
        if (!isUser) {
            deltaBuildings = aiBuildingStorage.getAllBuildingDeltas(countryName);
        } else {
            // Untuk user, sementara kita anggap delta sudah masuk ke database atau dihitung manual
            // Biasanya user membangun lewat Pembangunan manual yang langsung menambah ke database lokal/sesi
            // Jika butuh delta riil user dari storage tertentu, tambahkan di sini.
        }

        // 3. Gabungkan Semua
        const totalBuildings = { ...baselineBuildings };
        Object.entries(deltaBuildings).forEach(([key, val]) => {
            totalBuildings[key] = (totalBuildings[key] || 0) + val;
        });

        // 4. Panggil Mesin Produksi Python
        const response = await fetch('/game/components/AI_logic/5_AI_Pembangunan/routes/global_produksi', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ countryName, buildings: totalBuildings })
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        
        if (data.status === 'success' && data.production_deltas) {
          if (isUser) {
              // Jika User: Simpan ke budgetStorage (Pusat Keuangan Player)
              const { budgetStorage } = await import("@/app/game/components/1_navbar/3_kas_negara");
              budgetStorage.updateCumulativeProduction(data.production_deltas, gameDate);
              console.log(`[USER PRODUCTION] Produced materials for ${countryName}`);
          } else {
              // Jika NPC: Simpan ke AIProductionStorage
              aiProductionStorage.updateStocks(countryName, data.production_deltas, gameDate);
              console.log(`[AI PRODUCTION] ${countryName} produced materials`);
          }
        }
      } catch (error) {
        console.error(`[Production Loop Error] Failed for ${country.name_en}:`, error);
      }
    }
  }
};
