/**
 * RegionalTreasuryScanner TS Bridge
 */
export interface RegionalTreasuryAnalysis {
    can_afford: boolean;
    is_sustainable: boolean;
    impact_ratio: number;
    remaining_treasury: number;
    reason?: string;
}

export class RegionalTreasuryScanner {
    private threshold: number;

    constructor(threshold = 0.15) {
        this.threshold = threshold;
    }

    public scanAffordability(currentTreasury: number, membershipFee: number): RegionalTreasuryAnalysis {
        if (currentTreasury <= 0) {
            return {
                can_afford: false,
                is_sustainable: false,
                impact_ratio: 1.0,
                remaining_treasury: currentTreasury,
                reason: "Treasury empty."
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

    public getFinancialRecommendation(currentTreasury: number, membershipFee: number, priority: 'low' | 'normal' | 'high' | 'critical' = 'normal'): string {
        const report = this.scanAffordability(currentTreasury, membershipFee);
        if (!report.can_afford) return "REJECT: Insufficient funds.";

        const ratio = report.impact_ratio;

        if (priority === 'critical') {
            return ratio < 0.40 ? "APPROVE: Critical regional necessity." : "REJECT: suicidal cost.";
        }

        if (ratio < 0.03) return "APPROVE: Negligible cost.";
        if (ratio < 0.10) return "APPROVE: Sustainable investment.";
        if (ratio < 0.25) return "HOLD: High impact for regional block.";
        
        return "REJECT: Financial risk too high.";
    }
}
