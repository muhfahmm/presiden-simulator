import math
import sys
import os

# Add AI_finance to path
sys.path.append(os.path.join(os.path.dirname(__file__), 'AI_finance'))
from treasury_scanner import TreasuryScanner

class GeopoliticalAnalyzer:
    """
    Advanced logic for AI to analyze organization benefits and regional alignment.
    Makes the AI 'smarter' by considering neighbors and national needs.
    """
    
    def __init__(self, regional_data):
        self.regional_data = regional_data # Map of country -> region
        self.finance_scanner = TreasuryScanner()

    def calculate_alignment_score(self, country_name, org_members):
        """
        Calculates how 'aligned' a country is with an organization based on its neighbors.
        """
        country_region = self.regional_data.get(country_name)
        if not country_region:
            return 0
            
        # Count how many members of the same region are already in the org
        regional_members = [m for m in org_members if self.regional_data.get(m) == country_region]
        
        # If many neighbors are in, the pressure to join is higher
        alignment_bonus = len(regional_members) * 10
        return min(alignment_bonus, 50) # Cap at 50

    def evaluate_benefit_fit(self, org_focus, country_stats):
        """
        Evaluates if the organization's focus matches the country's current needs.
        """
        fit_score = 0
        
        # Economy Focus
        if org_focus == "Ekonomi" or org_focus == "Perdagangan":
            if country_stats.get('anggaran', 0) < 1000000000: # Below 1B
                fit_score += 40 # High need for economic boost
            elif country_stats.get('anggaran', 0) > 10000000000: # Above 10B
                fit_score += 10 # Low need but good for growth
                
        # Security Focus
        elif org_focus == "Keamanan" or org_focus == "Pertahanan":
            if country_stats.get('stabilitas', 50) < 40:
                fit_score += 50 # Desperate for security
            if country_stats.get('kepuasan', 50) < 30:
                fit_score += 20 # Need to stabilize population through security
                
        # Social/Global Focus
        elif org_focus == "Sosial" or org_focus == "Kemanusiaan":
            if country_stats.get('populasi', 0) > 100000000: # High population
                fit_score += 30
                
        return fit_score

    def get_final_decision_weight(self, country_name, country_stats, org_info, current_members):
        """
        Combines all factors into a single decision weight (0-100).
        """
        base_alignment = self.calculate_alignment_score(country_name, current_members)
        benefit_fit = self.evaluate_benefit_fit(org_info.get('focus'), country_stats)
        
        # Financial feasibility factor using the new TreasuryScanner
        fee = org_info.get('fee', 0)
        treasury = country_stats.get('anggaran', 0)
        
        # Use critical priority if stability is low
        priority = "critical" if country_stats.get('stabilitas', 50) < 30 else "normal"
        recommendation = self.finance_scanner.get_financial_recommendation(treasury, fee, priority)
        
        financial_penalty = 0
        if "REJECT" in recommendation:
            financial_penalty = 100 
        elif "HOLD" in recommendation:
            financial_penalty = 40
        elif "Reasonable" in recommendation:
            financial_penalty = 10
            
        total_weight = base_alignment + benefit_fit - financial_penalty
        return max(0, total_weight)
