/**
 * RegionalLeaveHandler TS Bridge
 */
export class RegionalLeaveHandler {
    private exitProbability: number;

    constructor(exitProbability = 0.10) {
        this.exitProbability = exitProbability;
    }

    public evaluateLeave(countryName: string, decisionWeight: number): boolean {
        // Regional blocks are harder to leave unless relations are catastrophic
        if (decisionWeight < 15) {
            return Math.random() < this.exitProbability;
        }
        return false;
    }
}
