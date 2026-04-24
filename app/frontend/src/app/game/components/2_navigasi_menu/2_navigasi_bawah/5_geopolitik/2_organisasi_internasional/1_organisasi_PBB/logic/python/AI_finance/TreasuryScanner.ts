/**
 * TreasuryScanner TS Bridge: Matches the logic in treasury_scanner.py
 */
export interface TreasuryAnalysis {
    can_afford: boolean;
    is_sustainable: boolean;
    impact_ratio: number;
    remaining_treasury: number;
    reason?: string;
}

export class TreasuryScanner {
    private threshold: number;

    constructor(threshold = 0.2) {
        this.threshold = threshold;
    }

    public scanAffordability(currentTreasury: number, membershipFee: number): TreasuryAnalysis {
        if (currentTreasury <= 0) {
            return {
                can_afford: false,
                is_sustainable: false,
                impact_ratio: 1.0,
                remaining_treasury: currentTreasury,
                reason: "Treasury is empty or in deficit."
            };
        }

        const impactRatio = membershipFee / currentTreasury;
        const canAfford = currentTreasury >= membershipFee;
        const isSustainable = impactRatio <= this.threshold;

        return {
            can_afford: canAfford,
            is_sustainable: isSustainable,
            impact_ratio: Number(impactRatio.toFixed(4)),
            remaining_treasury: currentTreasury - membershipFee
        };
    }

    public getFinancialRecommendation(currentTreasury: number, membershipFee: number, priorityLevel: 'low' | 'normal' | 'high' | 'critical' = 'normal'): string {
        const analysis = this.scanAffordability(currentTreasury, membershipFee);
        
        if (!analysis.can_afford) return "REJECT: Insufficient funds.";

        const ratio = analysis.impact_ratio;

        if (priorityLevel === 'critical') {
            return ratio < 0.5 ? "APPROVE: Critical necessity despite high cost." : "REJECT: Even at critical priority, cost is suicidal.";
        }

        if (ratio < 0.05) return "APPROVE: Negligible impact on treasury.";
        if (ratio < 0.15) return "APPROVE: Reasonable investment.";
        if (ratio < 0.3) return "HOLD: High impact, requires secondary verification.";
        
        return "REJECT: Financial risk too high.";
    }
}
