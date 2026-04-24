import { GeopoliticalAnalyzer } from "./GeopoliticalAnalyzer";
import { MovementEngine } from "./membership_movement/MovementEngine";

/**
 * AIMembershipEngine TS Bridge: Matches the logic in ai_membership_engine.py
 */
export class AIMembershipEngine {
    private membershipData: Record<string, Record<string, boolean>> = {};
    private analyzer: GeopoliticalAnalyzer;
    private movementEngine: MovementEngine;

    constructor(initialData: Record<string, any> = {}, regionalData: Record<string, string> = {}) {
        this.membershipData = initialData;
        this.analyzer = new GeopoliticalAnalyzer(regionalData);
        this.movementEngine = new MovementEngine();
    }

    public evaluateMembership(countryStats: any, orgConfigs: Record<string, any>) {
        const actions: any[] = [];
        const countryName = countryStats.name;

        Object.entries(orgConfigs).forEach(([orgId, config]) => {
            const currentStatus = this.membershipData[countryName]?.[orgId] || false;
            
            // Get current members for this org from local state
            const currentMembers = Object.entries(this.membershipData)
                .filter(([_, orgs]) => orgs[orgId])
                .map(([name, _]) => name);

            const score = this.analyzer.getFinalDecisionWeight(countryName, countryStats, config, currentMembers);
            const action = this.movementEngine.calculateMovement(countryName, currentStatus, score);

            if (action === 'join') {
                actions.push({ org_id: orgId, action: 'join', cost: config.fee || 0 });
            } else if (action === 'leave') {
                actions.push({ org_id: orgId, action: 'leave' });
            }
        });

        return actions;
    }
}
