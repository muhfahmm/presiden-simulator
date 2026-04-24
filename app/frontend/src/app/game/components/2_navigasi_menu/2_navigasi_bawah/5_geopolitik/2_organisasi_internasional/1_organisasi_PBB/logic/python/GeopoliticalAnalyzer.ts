import { TreasuryScanner } from "./AI_finance/TreasuryScanner";

/**
 * GeopoliticalAnalyzer TS Bridge: Matches the logic in ai_geopolitical_analyzer.py
 */
export class GeopoliticalAnalyzer {
    private regionalData: Record<string, string>;
    private financeScanner: TreasuryScanner;

    constructor(regionalData: Record<string, string> = {}) {
        this.regionalData = regionalData;
        this.financeScanner = new TreasuryScanner();
    }

    public calculateAlignmentScore(countryName: string, orgMembers: string[]): number {
        const countryRegion = this.regionalData[countryName];
        if (!countryRegion) return 0;

        const regionalMembers = orgMembers.filter(m => this.regionalData[m] === countryRegion);
        const alignmentBonus = regionalMembers.length * 10;
        return Math.min(alignmentBonus, 50);
    }

    public evaluateBenefitFit(orgFocus: string, countryStats: any): number {
        let fitScore = 0;

        if (orgFocus === "Ekonomi" || orgFocus === "Perdagangan") {
            if ((countryStats.anggaran || 0) < 1000000000) fitScore += 40;
            else if ((countryStats.anggaran || 0) > 10000000000) fitScore += 10;
        } else if (orgFocus === "Keamanan" || orgFocus === "Pertahanan") {
            if ((countryStats.stabilitas || 50) < 40) fitScore += 50;
            if ((countryStats.kepuasan || 50) < 30) fitScore += 20;
        } else if (orgFocus === "Sosial" || orgFocus === "Kemanusiaan") {
            if ((countryStats.populasi || 0) > 100000000) fitScore += 30;
        }

        return fitScore;
    }

    public getFinalDecisionWeight(countryName: string, countryStats: any, orgInfo: any, currentMembers: string[]): number {
        const baseAlignment = this.calculateAlignmentScore(countryName, currentMembers);
        const benefitFit = this.evaluateBenefitFit(orgInfo.focus, countryStats);
        
        const fee = orgInfo.fee || 0;
        const treasury = countryStats.anggaran || 0;
        const priority = (countryStats.stabilitas || 50) < 30 ? 'critical' : 'normal';
        
        const recommendation = this.financeScanner.getFinancialRecommendation(treasury, fee, priority);
        
        let financialPenalty = 0;
        if (recommendation.includes("REJECT")) financialPenalty = 100;
        else if (recommendation.includes("HOLD")) financialPenalty = 40;
        else if (recommendation.includes("Reasonable")) financialPenalty = 10;

        return Math.max(0, baseAlignment + benefitFit - financialPenalty);
    }
}
