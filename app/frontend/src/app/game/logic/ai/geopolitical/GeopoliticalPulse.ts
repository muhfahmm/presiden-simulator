import { countries } from "../../../../pilih_negara/data/negara/benua/index";
import { regionalMembershipRouter } from "../../../components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/2_organisasi_regional/logic/router/RegionalMembershipRouter";
import { RegionalMovementEngine } from "../../../components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/2_organisasi_regional/logic/python/membership_movement/RegionalMovementEngine";
import { aiBudgetStorage } from "../../../components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { formatGameDate } from "../../../components/1_navbar/5_navigasi_waktu/gameTime";

/**
 * GeopoliticalPulse: Orchestrates AI decisions for PBB and Regional memberships.
 * Triggered daily by useAIGameSync.
 */
export class GeopoliticalPulse {
    private static ORG_COSTS: Record<string, number> = {
        // PBB (75% reduced & even)
        imf: 0.0025, // percentage
        world_bank: 2500000,
        interpol: 250000,
        who: 100000,
        unesco: 200000,
        wto: 500000,
        ilo: 100000,
        fao: 250000,
        icao: 500000,
        imo: 500000,
        itu: 250000,
        wmo: 150000,
        
        // Regional (75% reduced)
        asean: 125000000,
        eu: 250000000,
        arab_league: 150000000,
        au: 100000000,
        nato: 375000000,
    };

    /**
     * Main entry point called by the game loop.
     */
    public static async processDaily(gameDate: Date, userCountry: string) {
        const day = gameDate.getUTCDate();
        const month = gameDate.getUTCMonth();
        const dateStr = formatGameDate(gameDate);

        // REGIONAL MOVEMENTS: Every 5th, 15th, 25th
        if (day === 5 || day === 15 || day === 25) {
            await this.simulateRegionalMovements(userCountry, dateStr);
        }

        // PBB MOVEMENTS: Every 10th of the month
        if (day === 10) {
            await this.simulateGlobalMovements(userCountry, dateStr);
        }
    }

    private static async simulateRegionalMovements(userCountry: string, dateStr: string) {
        const npcs = countries
            .filter(c => c.name_en !== userCountry)
            .sort(() => 0.5 - Math.random())
            .slice(0, 10);

        const results: Record<string, any[]> = {};

        for (const country of npcs) {
            const countryName = country.name_en;
            const currentBudget = aiBudgetStorage.getBudget(countryName);
            
            const orgIds = ["asean", "nato", "eu", "arab_league", "au"];
            const targetOrgs = orgIds.sort(() => 0.5 - Math.random()).slice(0, 1);

            const actions: any[] = [];
            for (const orgId of targetOrgs) {
                const eligibility = regionalMembershipRouter.checkEligibility(countryName, orgId);
                if (!eligibility.eligible) continue;

                const isMember = regionalMembershipRouter.getConsolidatedMembers(orgId).includes(countryName.toLowerCase());
                const cost = this.ORG_COSTS[orgId] || 0;

                // AI Decision: Higher chance to join now that it's cheaper (0.05 -> 0.12)
                const roll = Math.random();
                if (!isMember && currentBudget >= cost && roll < 0.12) {
                     actions.push({ org_id: orgId, action: "join", date: dateStr });
                     aiBudgetStorage.updateBudgetManual(countryName, -cost);
                } else if (isMember && roll < 0.01) {
                     actions.push({ org_id: orgId, action: "leave", date: dateStr });
                }
            }

            if (actions.length > 0) {
                results[countryName] = actions;
            }
        }

        if (Object.keys(results).length > 0) {
            regionalMembershipRouter.syncAIMemberships(results);
        }
    }

    private static async simulateGlobalMovements(userCountry: string, dateStr: string) {
        // PBB memberships for AI are currently mostly static in OrganizationMembers DB,
        // but we can simulate "Joining" activities for flavor/news or future dynamic PBB state.
        const npcs = countries
            .filter(c => c.name_en !== userCountry)
            .sort(() => 0.5 - Math.random())
            .slice(0, 5);

        for (const country of npcs) {
            const countryName = country.name_en;
            const currentBudget = aiBudgetStorage.getBudget(countryName);
            
            const pbbOrgs = ["imf", "world_bank", "who", "unesco", "wto", "interpol"];
            const orgId = pbbOrgs[Math.floor(Math.random() * pbbOrgs.length)];
            
            let cost = this.ORG_COSTS[orgId] || 0;
            if (orgId === 'imf') cost = Math.floor(currentBudget * 0.0025);

            // AI PBB Joining Simulation (Flavor + Budget impact)
            const roll = Math.random();
            if (currentBudget >= cost && roll < 0.15) {
                aiBudgetStorage.updateBudgetManual(countryName, -cost);
                // In a full implementation, we'd also sync this to an AI PBB state.
            }
        }
    }
}
