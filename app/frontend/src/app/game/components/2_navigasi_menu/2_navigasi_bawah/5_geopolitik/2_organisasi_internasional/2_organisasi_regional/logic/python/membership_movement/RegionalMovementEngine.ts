import { RegionalJoinHandler } from "./1_join_logic/RegionalJoinHandler";
import { RegionalLeaveHandler } from "./2_leave_logic/RegionalLeaveHandler";

/**
 * RegionalMovementEngine TS Bridge
 */
export class RegionalMovementEngine {
    private joinHandler: RegionalJoinHandler;
    private leaveHandler: RegionalLeaveHandler;

    constructor() {
        this.joinHandler = new RegionalJoinHandler();
        this.leaveHandler = new RegionalLeaveHandler();
    }

    public calculateMovement(countryName: string, currentStatus: boolean, decisionWeight: number): 'join' | 'leave' | 'stay' | 'none' {
        if (currentStatus) {
            if (this.leaveHandler.evaluateLeave(countryName, decisionWeight)) {
                return 'leave';
            }
            return 'stay';
        } else {
            if (this.joinHandler.evaluateJoin(countryName, decisionWeight)) {
                return 'join';
            }
            return 'none';
        }
    }

    public getDynamicStats(membersList: string[], allCountriesData: Record<string, any>) {
        let totalPop = 0;
        let totalGdp = 0;
        const memberCount = membersList.length;

        membersList.forEach(m => {
            const data = allCountriesData[m] || {};
            totalPop += data.populasi || 0;
            totalGdp += data.gdp || 0;
        });

        return {
            memberCount,
            totalPopulation: totalPop,
            totalGdp,
            averageStability: membersList.reduce((acc, m) => acc + (allCountriesData[m]?.stabilitas || 50), 0) / Math.max(1, memberCount)
        };
    }
}
