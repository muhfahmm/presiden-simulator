/**
 * JoinHandler TS Bridge: Matches the logic in join_handler.py
 */
export class JoinHandler {
    private probability: number;

    constructor(baseProbability = 0.40) {
        this.probability = baseProbability;
    }

    public evaluateJoin(countryName: string, decisionWeight: number): boolean {
        if (decisionWeight > 60) {
            const bonus = (decisionWeight - 60) / 100;
            const adjustedProb = Math.min(this.probability + bonus, 0.80);
            
            return Math.random() < adjustedProb;
        }
        return false;
    }
}
