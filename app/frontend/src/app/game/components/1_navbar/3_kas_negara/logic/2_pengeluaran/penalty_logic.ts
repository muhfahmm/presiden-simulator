"use client"

import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { hunianRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/index";
import { happinessStorage } from "@/app/game/components/1_navbar/1_kepuasan/happinessStorage";
import { aiHappinessStorage } from "@/app/game/components/modals/1_info_strategis/6_Kepuasan/AIHappinessStorage";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { gameStorage } from "@/app/game/gamestorage";

/**
 * Logika perhitungan penalti kas akibat masalah sosial (Tunawisma & Ketidakpuasan)
 */
export const calculateSocietalPenalties = (
    countryData: CountryData, 
    buildingDeltas: Record<string, number>,
    totalAnnualRevenue: number
) => {
    // 1. Hitung Kapasitas Hunian
    const getUnits = (id: string) => {
        const baseline = (countryData.hunian as any)?.[id] || 0;
        const delta = buildingDeltas[id] || 0;
        return Number(baseline) + Number(delta);
    };

    const housingCapacity =
        (getUnits("rumah_subsidi") * hunianRate.rumah_subsidi.kapasitas) +
        (getUnits("apartemen") * hunianRate.apartemen.kapasitas) +
        (getUnits("mansion") * hunianRate.mansion.kapasitas);

    // 2. Hitung Tingkat Kepuasan (Happiness Impact)
    let satisfaction = 50;
    if (typeof window !== 'undefined') {
        const session = gameStorage.getSession();
        const isPlayer = session?.country === countryData.name_en;
        satisfaction = isPlayer ? happinessStorage.getStats().value : (aiHappinessStorage.getSatisfaction(countryData.name_en) || 50);
    }

    const happinessMultiplier = 0.4 + (0.6 * (satisfaction / 100));

    // 3. Hitung Penalti Tunawisma
    const population = populationStorage.getPopulation();
    const homelessRate = Math.max(0, Math.min(1.0, (population - housingCapacity) / (population || 1)));
    
    // Penalti tunawisma bisa memotong hingga 25% potensi pendapatan
    const annualSocietalPenalty = totalAnnualRevenue * (homelessRate * 0.25);

    return {
        housingCapacity,
        homelessRate,
        satisfaction,
        happinessMultiplier,
        annualSocietalPenalty
    };
};
