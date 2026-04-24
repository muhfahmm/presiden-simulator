import { JoinHandler } from "./1_join_logic/JoinHandler";
import { LeaveHandler } from "./2_leave_logic/LeaveHandler";

/**
 * MovementEngine TS Bridge: Matches the logic in movement_engine.py
 */
export class MovementEngine {
    private joinHandler: JoinHandler;
    private leaveHandler: LeaveHandler;

    constructor() {
        this.joinHandler = new JoinHandler();
        this.leaveHandler = new LeaveHandler();
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
