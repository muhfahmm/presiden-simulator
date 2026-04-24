class TreasuryScanner:
    """
    Scans and analyzes the national treasury to determine if an AI country 
    can afford and sustain international organization memberships.
    """
    
    def __init__(self, treasury_threshold=0.2):
        # AI will not join if fee takes more than 20% of current treasury by default
        self.treasury_threshold = treasury_threshold

    def scan_affordability(self, current_treasury, membership_fee):
        """
        Analyzes the immediate impact on the treasury.
        """
        if current_treasury <= 0:
            return {
                "can_afford": False,
                "reason": "Treasury is empty or in deficit.",
                "impact_ratio": 1.0
            }
            
        impact_ratio = membership_fee / current_treasury
        
        can_afford = current_treasury >= membership_fee
        is_sustainable = impact_ratio <= self.treasury_threshold
        
        return {
            "can_afford": can_afford,
            "is_sustainable": is_sustainable,
            "impact_ratio": round(impact_ratio, 4),
            "remaining_treasury": current_treasury - membership_fee
        }

    def get_financial_recommendation(self, current_treasury, membership_fee, priority_level="normal"):
        """
        Provides a recommendation based on financial health and priority.
        Priority levels: 'low', 'normal', 'high', 'critical'
        """
        analysis = self.scan_affordability(current_treasury, membership_fee)
        
        if not analysis["can_afford"]:
            return "REJECT: Insufficient funds."
            
        ratio = analysis["impact_ratio"]
        
        # Recommendation logic based on priority
        if priority_level == "critical":
            # If critical, AI will join even if it takes 50% of treasury
            return "APPROVE: Critical necessity despite high cost." if ratio < 0.5 else "REJECT: Even at critical priority, cost is suicidal."
            
        if ratio < 0.05:
            return "APPROVE: Negligible impact on treasury."
        elif ratio < 0.15:
            return "APPROVE: Reasonable investment."
        elif ratio < 0.3:
            return "HOLD: High impact, requires secondary verification."
        else:
            return "REJECT: Financial risk too high."
