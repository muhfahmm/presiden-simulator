import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { ideologyStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/ideologyStorage";
import { happinessStorage } from "@/app/game/components/1_navbar/1_kepuasan/happinessStorage";

// Logic Imports
import { calculateIdeologyStabilityImpact } from "@/app/game/components/1_navbar/4_stabilitas/logic/1_penurunan/ideology_penalty";
import { calculateSocialUnrestImpact } from "@/app/game/components/1_navbar/4_stabilitas/logic/1_penurunan/unrest_logic";
import { calculateHappinessStabilityBonus } from "@/app/game/components/1_navbar/4_stabilitas/logic/2_peningkatan/happiness_bonus";
import { calculateStabilityRecovery } from "@/app/game/components/1_navbar/4_stabilitas/logic/2_peningkatan/recovery_logic";

export interface StabilityBreakdown {
    dailyDelta: number;
    currentStability: number;
    factors: {
        ideology: number;
        unrest: number;
        happiness: number;
        recovery: number;
    };
    details: {
        activeIdeology: string;
        happinessLevel: number;
        revolutionRisk: boolean;
    }
}

/**
 * Orchestrator untuk menghitung perubahan stabilitas nasional harian.
 */
export function calculateStabilityDelta(countryData: CountryData, currentStability: number): StabilityBreakdown {
    const ideology = ideologyStorage.getCurrentIdeology(countryData.ideology);
    const happiness = happinessStorage.getStats().value;

    // 1. Hitung dampak negatif
    const ideologyImpact = calculateIdeologyStabilityImpact(ideology, happiness);
    const unrestImpact = calculateSocialUnrestImpact(happiness, currentStability);

    // 2. Hitung dampak positif
    const happinessBonus = calculateHappinessStabilityBonus(happiness);
    
    // 3. Hitung pemulihan alami (recovery)
    // Recovery hanya aktif jika tidak ada penalti ideologi/unrest yang dominan
    const totalNegative = ideologyImpact + unrestImpact;
    const recovery = calculateStabilityRecovery(currentStability, totalNegative);

    const dailyDelta = ideologyImpact + unrestImpact + happinessBonus + recovery;

    return {
        dailyDelta,
        currentStability,
        factors: {
            ideology: ideologyImpact,
            unrest: unrestImpact,
            happiness: happinessBonus,
            recovery: recovery
        },
        details: {
            activeIdeology: ideology,
            happinessLevel: happiness,
            revolutionRisk: ideology === "Monarki" && happiness < 40
        }
    };
}
