import os
import json
import random
from ai_geopolitical_analyzer import GeopoliticalAnalyzer
sys.path.append(os.path.join(os.path.dirname(__file__), 'membership_movement'))
from movement_engine import MembershipMovementEngine

class AIMembershipEngine:
    """
    Handles AI decisions for joining/leaving international organizations.
    Simulates the 207 nations' diplomatic behavior.
    """
    
    def __init__(self, data_path, regional_data=None):
        self.data_path = data_path
        self.membership_data = self._load_data()
        self.analyzer = GeopoliticalAnalyzer(regional_data or {})
        self.movement_engine = MembershipMovementEngine()

    def _load_data(self):
        if os.path.exists(self.data_path):
            with open(self.data_path, 'r') as f:
                return json.load(f)
        return {}

    def _save_data(self):
        with open(self.data_path, 'w') as f:
            json.dump(self.membership_data, f, indent=4)

    def evaluate_membership(self, country_stats, org_configs):
        """
        Decision logic for AI countries.
        Returns a list of actions (join/leave) for organizations.
        """
        actions = []
        country_name = country_stats.get('name')
        
        for org_id, config in org_configs.items():
            current_status = self.membership_data.get(country_name, {}).get(org_id, False)
            
            # Smart evaluation using GeopoliticalAnalyzer
            current_members = [c for c, orgs in self.membership_data.items() if orgs.get(org_id)]
            score = self.analyzer.get_final_decision_weight(country_name, country_stats, config, current_members)
            
            # Final decision based on movement engine (probability + weight)
            action = self.movement_engine.calculate_movement(country_name, current_status, score)
            
            if action == "join":
                actions.append({"org_id": org_id, "action": "join", "cost": config.get('fee', 0)})
            elif action == "leave":
                actions.append({"org_id": org_id, "action": "leave"})
                
        return actions

    def process_global_cycle(self, all_countries, org_configs):
        """
        Processes a full simulation cycle for all 207 countries.
        """
        results = {}
        for country in all_countries:
            actions = self.evaluate_membership(country, org_configs)
            if actions:
                results[country['name']] = actions
                # Update local data
                if country['name'] not in self.membership_data:
                    self.membership_data[country['name']] = {}
                for action in actions:
                    self.membership_data[country['name']][action['org_id']] = (action['action'] == "join")
        
        self._save_data()
        return results

if __name__ == "__main__":
    # Test execution
    script_dir = os.path.dirname(os.path.abspath(__file__))
    data_file = os.path.join(script_dir, "ai_membership_state.json")
    engine = AIMembershipEngine(data_file)
    print("AI Membership Engine Initialized")
