"use client"

import { countries } from "@/app/database/data/negara/index";
import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiDefenseStorage } from "../antarmuka_data_pertahanan/AIDefenseStorage";
import { armadaMiliterRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";

export class PusatKeputusanPertahanan {
    private static lastDecisionMap: Map<string, string> = new Map();

    /**
     * Mengambil keputusan militer untuk negara NPC.
     */
    static async pikirkan(countryNameEn: string, allocatedBudget?: number) {
        const session = timeStorage.getState();
        const gameDate = session.gameDate;
        const dateStr = gameDate.toISOString().split('T')[0];

        // Throttle: Satu keputusan per hari
        if (this.lastDecisionMap.get(countryNameEn) === dateStr) return;
        this.lastDecisionMap.set(countryNameEn, dateStr);

        const country = countries.find(c => c.name_en === countryNameEn);
        if (!country) return;

        const budget = allocatedBudget ?? aiBudgetStorage.getBudget(countryNameEn);
        const queue = aiDefenseStorage.getQueue(countryNameEn);
        const deltas = aiDefenseStorage.getAllDefenseDeltas(countryNameEn);

        // Siapkan opsi unit militer untuk dikirim ke Python
        const options = Object.entries(armadaMiliterRate).map(([key, val]: any) => ({
            key,
            label: val.label,
            cost: val.biaya_pembangunan,
            groupId: val.groupId
        }));

        const payload = {
            negara: countryNameEn,
            budget,
            threat_level: 15, // Default threat
            military: deltas,
            options
        };

        try {
            const response = await fetch('/game/components/AI_logic/6_AI_pertahanan/routes/keputusan_militer', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (!result || result.decision !== "EXECUTE") return;

            console.log(`[AI Military] ${countryNameEn}: ${result.reason} | Qty: ${result.quantity}`);

            if (result.unit_key) {
                const unit = armadaMiliterRate[result.unit_key as keyof typeof armadaMiliterRate] as any;
                if (unit) {
                    // Masukkan ke antrian pembangunan militer
                    aiDefenseStorage.addToQueue(countryNameEn, {
                        buildingKey: result.unit_key,
                        label: unit.label,
                        sector: unit.groupId,
                        startDate: gameDate.getTime(),
                        endDate: gameDate.getTime() + (unit.waktu_pembangunan * 24 * 60 * 60 * 1000),
                        waktu_pembangunan: unit.waktu_pembangunan,
                        quantity: result.quantity || 1
                    });
                }
            }
        } catch (err) {
            console.error(`[AI Military] Error for ${countryNameEn}:`, err);
        }
    }
}

