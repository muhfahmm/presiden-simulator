import { countries } from "../../../../pilih_negara/data/negara/benua/index";
import { regionalMembershipRouter } from "../../../components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/2_organisasi_regional/logic/router/RegionalMembershipRouter";
import { RegionalMovementEngine } from "../../../components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/2_organisasi_regional/logic/python/membership_movement/RegionalMovementEngine";
import { aiBudgetStorage } from "../../../components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { formatGameDate } from "../../../components/1_navbar/5_navigasi_waktu/gameTime";
import { unMembershipStorage } from "../../../components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/logic/unMembershipStorage";

/**
 * GeopoliticalPulse: Orchestrates AI decisions for PBB and Regional memberships.
 * Triggered daily by useAIGameSync.
 */
import { getOrgFee } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/logic/GeopoliticalConfig";

export class GeopoliticalPulse {
    /**
     * Main entry point called by the game loop.
     */
    public static async processDaily(gameDate: Date, userCountry: string) {
        const day = gameDate.getUTCDate();
        const dateStr = formatGameDate(gameDate);
        console.log(`[GeopoliticalPulse] Day ${day} check. Triggering simulation logic...`);

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
                const cost = getOrgFee(orgId, currentBudget);

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
        const npcs = countries
            .filter(c => c.name_en !== userCountry)
            .sort(() => 0.5 - Math.random())
            .slice(0, 5);

        const results: Record<string, any[]> = {};

        for (const country of npcs) {
            const countryName = country.name_en;
            const currentBudget = aiBudgetStorage.getBudget(countryName);
            
            const pbbOrgs = ["imf", "world_bank", "who", "unesco", "wto", "interpol"];
            const orgId = pbbOrgs[Math.floor(Math.random() * pbbOrgs.length)];
            
            const cost = getOrgFee(orgId, currentBudget);

            // AI PBB Joining Simulation
            const roll = Math.random();
            const isMember = unMembershipStorage.isMember(orgId, countryName);

            if (!isMember && currentBudget >= cost && roll < 0.15) {
                aiBudgetStorage.updateBudgetManual(countryName, -cost);
                if (!results[countryName]) results[countryName] = [];
                results[countryName].push({ org_id: orgId, action: "join", date: dateStr });
            } else if (isMember && roll < 0.01) {
                if (!results[countryName]) results[countryName] = [];
                results[countryName].push({ org_id: orgId, action: "leave", date: dateStr });
            }
        }

        if (Object.keys(results).length > 0) {
            unMembershipStorage.syncAIMemberships(results);
        }
    }
}
