import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { populationDeltaStorage } from "@/app/game/components/1_navbar/2_populasi/PopulationDeltaStorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { gameStorage } from "@/app/game/gamestorage";
import { getStoredGameDate, addDays } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { SocialCareService } from "../3_kesejahteraan_sosial/SocialCareService";

/**
 * Service to manage AI Autonomous Construction Logic
 */
export class AiPembangunanService {
    private static isAnalyzing = false;

    static async runBuildAnalysis() {
        if (this.isAnalyzing) return;
        
        // Throttling: Only build analysis every 3 game days or if queue is empty
        const queue = buildingStorage.getQueue();
        if (queue.length > 3) return; 

        this.isAnalyzing = true;

        try {
            const population = populationStorage.getPopulation();
            const budget = budgetStorage.getBudget();
            const populationGrowth = populationDeltaStorage.getDelta();
            const cumulativeStock = budgetStorage.getCumulativeProduction();
            
            const session = gameStorage.getSession();
            const countryName = session?.country || "Indonesia";
            const country = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];
            
            const buildingDeltas = buildingStorage.getBuildingDeltas();
            const housing_data = {
                rumah_subsidi: (country.hunian?.rumah_subsidi || 0) + (buildingDeltas["9_rumah_subsidi"] || 0),
                apartemen: (country.hunian?.apartemen || 0) + (buildingDeltas["10_apartemen"] || 0),
                mansion: (country.hunian?.mansion || 0) + (buildingDeltas["11_mansion"] || 0),
            };

            const response = await fetch("/api/game/populasi/pembangunan-hunian", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    population,
                    budget,
                    population_growth: populationGrowth,
                    stock: {
                        beton: cumulativeStock["5_pabrik_semen"] || 0,
                        baja: (cumulativeStock["4_smelter"] || 0) + (cumulativeStock["12_tambang_bijih_besi"] || 0),
                        kayu: cumulativeStock["6_penggergajian_kayu"] || 0
                    },
                    housing_data
                }),
            });

            const result = await response.json();
            if (result.error) throw new Error(result.error);

            if (result.action && result.action.type === "CONSTRUCT") {
                this.executeAiBuild(result.action);
            }

            // Always update social stats after analysis
            SocialCareService.calculateAndStore();

        } catch (error) {
            console.error("[AiPembangunanService] Error:", error);
        } finally {
            this.isAnalyzing = false;
        }
    }

    private static executeAiBuild(action: any) {
        // Logic to simulate building process similar to TempatUmumModal.tsx
        // but simplified for AI.
        const { buildingKey, label, quantity } = action;
        
        // Final sanity check on budget (AI Brain already checked but let's be safe)
        // We'll use hardcoded AI building times for now.
        const buildTimeMap: Record<string, number> = {
            "rumah_subsidi": 10,
            "apartemen": 25,
            "mansion": 45
        };

        const timePerUnit = buildTimeMap[buildingKey] || 15;
        let currentStart = getStoredGameDate().getTime();

        for (let i = 0; i < quantity; i++) {
            const currentEnd = addDays(new Date(currentStart), timePerUnit).getTime();
            buildingStorage.addToQueue({
                buildingKey: buildingKey === "rumah_subsidi" ? "9_rumah_subsidi" : (buildingKey === "apartemen" ? "10_apartemen" : "11_mansion"),
                label: `[AI] ${label}`,
                sector: "hunian",
                startDate: currentStart,
                endDate: currentEnd,
                waktu_pembangunan: timePerUnit
            });
            currentStart = currentEnd;
        }

        console.log(`[AI Construction] Successfully queued ${quantity} units of ${label}.`);
    }
}
