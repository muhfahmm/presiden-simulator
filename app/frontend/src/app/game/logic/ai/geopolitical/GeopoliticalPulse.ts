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
    private static lastProcessMonth = -1;
    private static regionalEngine = new RegionalMovementEngine();

    /**
     * Main entry point called by the game loop.
     */
    public static async processDaily(gameDate: Date, userCountry: string) {
        const day = gameDate.getUTCDate();
        const month = gameDate.getUTCMonth();
        const dateStr = formatGameDate(gameDate);

        // REGIONAL MOVEMENTS: Every 5th of the month (Realistic cycle)
        if (day === 5 || day === 15 || day === 25) {
            console.log(`[GeopoliticalPulse] Regional Membership Cycle triggered for ${dateStr}`);
            await this.simulateRegionalMovements(userCountry, dateStr);
        }

        // PBB MOVEMENTS: Once a month (The 1st)
        if (day === 1 && this.lastProcessMonth !== month) {
            this.lastProcessMonth = month;
            console.log(`[GeopoliticalPulse] Global PBB Membership Cycle triggered for ${dateStr}`);
            await this.simulateGlobalMovements(userCountry, dateStr);
        }
    }

    private static async simulateRegionalMovements(userCountry: string, dateStr: string) {
        // Pick a batch of random NPCs to evaluate (Performance optimization)
        const npcs = countries
            .filter(c => c.name_en !== userCountry)
            .sort(() => 0.5 - Math.random())
            .slice(0, 15);

        const results: Record<string, any[]> = {};

        for (const country of npcs) {
            const countryName = country.name_en;
            const budget = aiBudgetStorage.getBudget(countryName);
            
            // Randomly pick 1-2 regional orgs for this country to evaluate
            const orgIds = ["asean", "nato", "eu", "brics", "g20", "apec", "sco", "oas", "gcc", "mercosur", "commonwealth", "oic", "au"];
            const targetOrgs = orgIds.sort(() => 0.5 - Math.random()).slice(0, 2);

            const actions: any[] = [];
            for (const orgId of targetOrgs) {
                // Check eligibility first (Geographic/Requirements)
                const eligibility = regionalMembershipRouter.checkEligibility(countryName, orgId);
                if (!eligibility.eligible) continue;

                // Simple AI Decision Logic (Frontend simulation of the Python Engine)
                const roll = Math.random();
                const isMember = regionalMembershipRouter.getConsolidatedMembers(orgId).includes(countryName.toLowerCase());

                if (!isMember && roll < 0.05) { // 5% chance to join if eligible
                     actions.push({ org_id: orgId, action: "join", date: dateStr });
                } else if (isMember && roll < 0.01) { // 1% chance to leave (Stable regional blocs)
                     actions.push({ org_id: orgId, action: "leave", date: dateStr });
                }
            }

            if (actions.length > 0) {
                results[countryName] = actions;
            }
        }

        if (Object.keys(results).length > 0) {
            regionalMembershipRouter.syncAIMemberships(results);
            console.log(`[GeopoliticalPulse] AI Membership Sync completed:`, results);
        }
    }

    private static async simulateGlobalMovements(userCountry: string, dateStr: string) {
        // Implementation for PBB global membership cycle
    }
}
