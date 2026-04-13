import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { aiPopulationStorage } from "@/app/game/components/map-system/modals_detail_negara/1_info_strategis/2_Populasi/AIPopulationStorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { gameStorage } from "@/app/game/gamestorage";

const SOCIAL_STORAGE_KEY = "em4_ai_social_welfare_data";

export interface SocialImpactStats {
    homelessCount: number;
    housingAdequacyIndex: number; // 0-100
    povertyReductionFactor: number; // 0.5 - 1.5 (lower is better for poverty)
    lastUpdateDate: number;
}

/**
 * Service to manage Social Impact of housing and welfare
 */
export class SocialCareService {
    
    static getSocialStats(): SocialImpactStats {
        if (typeof window === "undefined") return this.defaultStats();
        const stored = localStorage.getItem(SOCIAL_STORAGE_KEY);
        if (stored) {
            try { return JSON.parse(stored); } catch { return this.defaultStats(); }
        }
        return this.calculateAndStore();
    }

    private static defaultStats(): SocialImpactStats {
        return {
            homelessCount: 0,
            housingAdequacyIndex: 100,
            povertyReductionFactor: 1.0,
            lastUpdateDate: Date.now()
        };
    }

    /**
     * Main calculation for homelessness and social impact
     */
    static calculateAndStore(): SocialImpactStats {
        const session = gameStorage.getSession();
        const countryName = session?.country || "Indonesia";
        const country = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];
        const isUser = session?.country === country.name_id || session?.country === country.name_en;

        const population = isUser ? populationStorage.getPopulation() : aiPopulationStorage.getPopulation(country.name_en);
        const buildingDeltas = buildingStorage.getBuildingDeltas();

        // Capacity calculation constants
        const totalCapacity = 
            ((country.hunian?.rumah_subsidi || 0) + (buildingDeltas["9_rumah_subsidi"] || 0)) * 450 + 
            ((country.hunian?.apartemen || 0) + (buildingDeltas["10_apartemen"] || 0)) * 5500 + 
            ((country.hunian?.mansion || 0) + (buildingDeltas["11_mansion"] || 0)) * 50;

        const homeless = Math.max(0, population - totalCapacity);
        const adequacy = population > 0 ? Math.min(100, (totalCapacity / population) * 100) : 100;
        
        // Poverty Reduction Factor: 
        // 1.0 is neutral. 
        // If adequacy is 100%, reduction factor is 0.8 (reduces poverty by 20%)
        // If adequacy is 50%, reduction factor is 1.2 (increases poverty by 20%)
        const povertyReductionFactor = 1.0 + (50 - adequacy / 2) / 100;

        const stats: SocialImpactStats = {
            homelessCount: homeless,
            housingAdequacyIndex: parseFloat(adequacy.toFixed(2)),
            povertyReductionFactor: parseFloat(povertyReductionFactor.toFixed(3)),
            lastUpdateDate: Date.now()
        };

        if (typeof window !== "undefined") {
            localStorage.setItem(SOCIAL_STORAGE_KEY, JSON.stringify(stats));
            window.dispatchEvent(new Event("social_welfare_updated"));
        }

        return stats;
    }

    /**
     * External hook for UI to get the factor
     */
    static getPovertyMultiplier(): number {
        return this.getSocialStats().povertyReductionFactor;
    }
}
