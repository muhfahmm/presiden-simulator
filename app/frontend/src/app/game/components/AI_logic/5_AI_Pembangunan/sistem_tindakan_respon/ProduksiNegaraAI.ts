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
   * Menjalankan siklus produksi harian untuk semua NPC (Batch optimized).
   */
  jalankanSiklusHarian: async (gameDate: Date) => {
    const session = gameStorage.getSession();
    const userCountry = session?.country;

    // 1. Kumpulkan data bangunan untuk SEMUA negara
    const batchData = countries.map(country => {
        const countryName = country.name_en;
        const isUser = countryName === userCountry;

        // Ambil Bangunan Bawaan
        const baselineBuildings: Record<string, number> = {};
        
        if (country.sektor_listrik) {
            if (country.sektor_listrik.pembangkit_listrik_tenaga_nuklir) baselineBuildings["1_pembangkit_listrik_tenaga_nuklir"] = country.sektor_listrik.pembangkit_listrik_tenaga_nuklir;
            if (country.sektor_listrik.pembangkit_listrik_tenaga_air) baselineBuildings["2_pembangkit_listrik_tenaga_air"] = country.sektor_listrik.pembangkit_listrik_tenaga_air;
            if (country.sektor_listrik.pembangkit_listrik_tenaga_surya) baselineBuildings["3_pembangkit_listrik_tenaga_surya"] = country.sektor_listrik.pembangkit_listrik_tenaga_surya;
            if (country.sektor_listrik.pembangkit_listrik_tenaga_uap) baselineBuildings["4_pembangkit_listrik_tenaga_uap"] = country.sektor_listrik.pembangkit_listrik_tenaga_uap;
            if (country.sektor_listrik.pembangkit_listrik_tenaga_gas) baselineBuildings["5_pembangkit_listrik_tenaga_gas"] = country.sektor_listrik.pembangkit_listrik_tenaga_gas;
            if (country.sektor_listrik.pembangkit_listrik_tenaga_angin) baselineBuildings["6_pembangkit_listrik_tenaga_angin"] = country.sektor_listrik.pembangkit_listrik_tenaga_angin;
        }

        if (country.sektor_manufaktur) {
            if (country.sektor_manufaktur.semen_beton) baselineBuildings["5_pabrik_semen"] = country.sektor_manufaktur.semen_beton;
            if (country.sektor_manufaktur.kayu) baselineBuildings["6_penggergajian_kayu"] = country.sektor_manufaktur.kayu;
            if (country.sektor_manufaktur.smelter) baselineBuildings["4_smelter"] = country.sektor_manufaktur.smelter;
            
            if (country.sektor_manufaktur.semikonduktor) baselineBuildings["1_pabrik_elektronik"] = country.sektor_manufaktur.semikonduktor;
            if (country.sektor_manufaktur.mobil) baselineBuildings["2_pabrik_mobil"] = country.sektor_manufaktur.mobil;
            if (country.sektor_manufaktur.sepeda_motor) baselineBuildings["3_pabrik_motor"] = country.sektor_manufaktur.sepeda_motor;
            if (country.sektor_manufaktur.pupuk) baselineBuildings["7_pabrik_pupuk"] = country.sektor_manufaktur.pupuk;
        }

        if (country.sektor_ekstraksi) {
            if (country.sektor_ekstraksi.emas) baselineBuildings["1_tambang_emas"] = country.sektor_ekstraksi.emas;
            if (country.sektor_ekstraksi.uranium) baselineBuildings["2_tambang_uranium"] = country.sektor_ekstraksi.uranium;
            if (country.sektor_ekstraksi.batu_bara) baselineBuildings["3_tambang_batu_bara"] = country.sektor_ekstraksi.batu_bara;
            if (country.sektor_ekstraksi.minyak_bumi) baselineBuildings["4_sumur_minyak"] = country.sektor_ekstraksi.minyak_bumi;
            if (country.sektor_ekstraksi.gas_alam) baselineBuildings["5_sumur_gas"] = country.sektor_ekstraksi.gas_alam;
            if (country.sektor_ekstraksi.garam) baselineBuildings["6_tambang_garam"] = country.sektor_ekstraksi.garam;
            if (country.sektor_ekstraksi.nikel) baselineBuildings["7_tambang_nikel"] = country.sektor_ekstraksi.nikel;
            if (country.sektor_ekstraksi.litium) baselineBuildings["8_tambang_litium"] = country.sektor_ekstraksi.litium;
            if (country.sektor_ekstraksi.tembaga) baselineBuildings["9_tambang_tembaga"] = country.sektor_ekstraksi.tembaga;
            if (country.sektor_ekstraksi.aluminium) baselineBuildings["10_tambang_aluminium"] = country.sektor_ekstraksi.aluminium;
            if (country.sektor_ekstraksi.logam_tanah_jarang) baselineBuildings["11_tambang_ltj"] = country.sektor_ekstraksi.logam_tanah_jarang;
            if (country.sektor_ekstraksi.bijih_besi) baselineBuildings["12_tambang_bijih_besi"] = country.sektor_ekstraksi.bijih_besi;
        }

        // Ambil Bangunan Tambahan
        let deltaBuildings: Record<string, number> = {};
        if (!isUser) {
            deltaBuildings = aiBuildingStorage.getAllBuildingDeltas(countryName);
        }

        // Gabungkan
        const totalBuildings = { ...baselineBuildings };
        Object.entries(deltaBuildings).forEach(([key, val]) => {
            totalBuildings[key] = (totalBuildings[key] || 0) + val;
        });

        return { countryName, buildings: totalBuildings, isUser };
    });

    // 2. Kirim BATCH request ke Python
    try {
        console.log(`[AI PRODUCTION] Sending batch for ${countries.length} nations...`);
        const response = await fetch('/game/components/AI_logic/5_AI_Pembangunan/routes/batch_produksi', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ countries: batchData })
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        
        if (data.status === 'success' && data.results) {
            // 3. Update Stocks untuk semua negara
            Object.entries(data.results).forEach(async ([name, res]: [string, any]) => {
                const isUser = name === userCountry;
                if (isUser) {
                    const { budgetStorage } = await import("@/app/game/components/1_navbar/3_kas_negara");
                    budgetStorage.updateCumulativeProduction(res.production_deltas, gameDate);
                } else {
                    aiProductionStorage.updateStocks(name, res.production_deltas, gameDate);
                }
            });
            console.log(`[AI BATCH PRODUCTION] Successfully processed production for all nations.`);
        }
    } catch (error) {
        console.error(`[Batch Production Error]:`, error);
    }
  }
};
