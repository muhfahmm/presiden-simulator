import json
import os
import sys
import random

# Add paths for regional logic
current_dir = os.path.dirname(__file__)
sys.path.append(os.path.join(current_dir, 'requirements'))
sys.path.append(os.path.join(current_dir, '..', '..', '..', '1_organisasi_PBB', 'logic', 'python'))
sys.path.append(os.path.join(current_dir, '..', '..', '..', '1_organisasi_PBB', 'logic', 'python', 'AI_finance'))
sys.path.append(os.path.join(current_dir, '..', '..', '..', '1_organisasi_PBB', 'logic', 'python', 'membership_movement'))

from regional_requirements import RegionalRequirements
from regional_treasury_scanner import RegionalTreasuryScanner
from ai_geopolitical_analyzer import GeopoliticalAnalyzer
from regional_movement_engine import RegionalMovementEngine

class RegionalAIMembershipEngine:
    """
    Simulates membership decisions for regional organizations.
    Filters by eligibility requirements (Geography, Culture, etc.) before analyzing strategy.
    """
    
    def __init__(self, data_path="ai_regional_membership_state.json", regional_data=None):
        self.data_path = data_path
        self.requirements = RegionalRequirements()
        self.finance_scanner = RegionalTreasuryScanner()
        self.analyzer = GeopoliticalAnalyzer(regional_data or {})
        self.movement_engine = RegionalMovementEngine()
        self.membership_data = self._load_data()

    def _load_data(self):
        if os.path.exists(self.data_path):
            with open(self.data_path, 'r') as f:
                return json.load(f)
        return {}

    def process_country_cycle(self, country_name, country_stats, org_configs):
        """
        Processes a full decision cycle for one country across all regional orgs.
        """
        actions = []
        
        for org_id, config in org_configs.items():
            # 1. Eligibility Check (MANDATORY for Regional)
            is_eligible, reason = self.requirements.is_eligible(country_stats, org_id)
            if not is_eligible:
                continue

            current_status = self.membership_data.get(country_name, {}).get(org_id, False)
            
            # 2. Strategic & Financial Analysis
            # Get current members for regional alignment bonus
            current_members = [c for c, orgs in self.membership_data.items() if orgs.get(org_id)]
            score = self.analyzer.get_final_decision_weight(country_name, country_stats, config, current_members)
            
            # 3. Final Movement (Probability based)
            action = self.movement_engine.calculate_movement(country_name, current_status, score)
            
            if action == "join":
                actions.append({"org_id": org_id, "action": "join", "cost": config.get('fee', 0)})
            elif action == "leave":
                actions.append({"org_id": org_id, "action": "leave"})
                
        return actions

    def save_state(self, updated_data):
        with open(self.data_path, 'w') as f:
            json.dump(updated_data, f, indent=4)
