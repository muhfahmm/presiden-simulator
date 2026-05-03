"use client"

import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiHappinessStorage } from "@/app/game/components/modals/1_info_strategis/6_Kepuasan/AIHappinessStorage";
import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { calculateDailyBudgetDelta } from "@/app/game/components/1_navbar/3_kas_negara/BudgetDeltaLogic";
import { aiBuildingStorage } from "../5_AI_Pembangunan/antarmuka_data_pembangunan/AIBuildingStorage";

export interface AIAllocations {
    pembangunan: number;
    pertahanan: number;
    geopolitik: number;
}

export interface StrategicDecision {
    negara: string;
    allocations: AIAllocations;
    reserve: number;
    reason: string;
    status: string;
}

export class PusatKeputusanStrategis {
    /**
     * Mengevaluasi kondisi negara NPC dan membagi budget secara cerdas.
     */
    static async evaluasi(countryNameEn: string): Promise<StrategicDecision | null> {
        const country = countries.find(c => c.name_en === countryNameEn);
        if (!country) return null;

        const budget = aiBudgetStorage.getBudget(countryNameEn);
        const happiness = aiHappinessStorage.getSatisfaction(countryNameEn);
        const stability = 50; // Fallback, could be expanded to aiStabilityStorage
        
        // Calculate dynamic income for the orchestrator
        const aiDeltas = aiBuildingStorage.getAllBuildingDeltas(countryNameEn);
        const dailyIncome = calculateDailyBudgetDelta(country as any, aiDeltas);

        // Payload for Python brain
        const payload = {
            negara: countryNameEn,
            budget,
            income: dailyIncome,
            stability,
            happiness,
            threat_level: 10 // Placeholder, could be dynamic based on neighbors
        };

        try {
            const response = await fetch('/game/components/AI_logic/3_AI_Strategis_Pusat/routes/evaluasi_strategis', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            return await response.json();
        } catch (err) {
            console.error(`[AI Strategic] Error for ${countryNameEn}:`, err);
            return null;
        }
    }
}

