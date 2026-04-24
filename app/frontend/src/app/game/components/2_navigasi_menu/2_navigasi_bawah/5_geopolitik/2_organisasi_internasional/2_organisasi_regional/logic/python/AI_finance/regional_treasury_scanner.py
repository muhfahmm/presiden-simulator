class RegionalTreasuryScanner:
    """
    Analyzes if an AI country can afford regional membership fees.
    Regional organizations often have different budget impact priorities.
    """
    
    def __init__(self, threshold=0.15):
        self.threshold = threshold # 15% of treasury as max sustainable impact

    def scan_affordability(self, current_treasury, membership_fee):
        """
        Returns a detailed report on affordability.
        """
        if current_treasury <= 0:
            return {
                "can_afford": False,
                "is_sustainable": False,
                "impact_ratio": 1.0,
                "remaining_treasury": current_treasury,
                "reason": "Treasury empty."
            }

        impact_ratio = membership_fee / current_treasury
        can_afford = current_treasury >= membership_fee
        is_sustainable = impact_ratio <= self.threshold

        return {
            "can_afford": can_afford,
            "is_sustainable": is_sustainable,
            "impact_ratio": round(impact_ratio, 4),
            "remaining_treasury": current_treasury - membership_fee
        }

    def get_financial_recommendation(self, current_treasury, membership_fee, priority="normal"):
        """
        Provides a decision recommendation for the AI.
        """
        report = self.scan_affordability(current_treasury, membership_fee)
        
        if not report["can_afford"]:
            return "REJECT: Insufficient funds."

        ratio = report["impact_ratio"]

        # Regional organizations are often seen as more 'vital' for local stability
        if priority == "critical":
            if ratio < 0.40: return "APPROVE: Critical regional necessity."
            return "REJECT:suicidal cost."

        if ratio < 0.03: return "APPROVE: Negligible cost."
        if ratio < 0.10: return "APPROVE: Sustainable investment."
        if ratio < 0.25: return "HOLD: High impact for regional block."
        
        return "REJECT: Financial risk too high."
