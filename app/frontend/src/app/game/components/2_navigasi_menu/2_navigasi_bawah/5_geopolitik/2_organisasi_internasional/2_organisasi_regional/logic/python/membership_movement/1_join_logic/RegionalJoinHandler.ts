/**
 * RegionalJoinHandler TS Bridge
 */
export class RegionalJoinHandler {
    private probability: number;

    constructor(baseProbability = 0.50) {
        this.probability = baseProbability;
    }

    public evaluateJoin(countryName: string, decisionWeight: number): boolean {
        if (decisionWeight > 55) {
            const bonus = (decisionWeight - 55) / 100;
            const adjustedProb = Math.min(this.probability + bonus, 0.90);
            return Math.random() < adjustedProb;
        }
        return false;
    }
}
