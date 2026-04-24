/**
 * LeaveHandler TS Bridge: Matches the logic in leave_handler.py
 */
export class LeaveHandler {
    private exitProbability: number;

    constructor(exitProbability = 0.15) {
        this.exitProbability = exitProbability;
    }

    public evaluateLeave(countryName: string, decisionWeight: number): boolean {
        if (decisionWeight < 20) {
            return Math.random() < this.exitProbability;
        }
        return false;
    }
}
