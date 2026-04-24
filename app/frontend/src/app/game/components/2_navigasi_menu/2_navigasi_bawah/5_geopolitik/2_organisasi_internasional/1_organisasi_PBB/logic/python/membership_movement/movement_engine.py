import random
import os
import sys

# Add subfolders to path
sys.path.append(os.path.join(os.path.dirname(__file__), '1_join_logic'))
sys.path.append(os.path.join(os.path.dirname(__file__), '2_leave_logic'))

from join_handler import JoinHandler
from leave_handler import LeaveHandler

class MembershipMovementEngine:
    """
    Handles the realistic probability of countries entering and leaving organizations.
    Enforces the rare exit probability (15%) and dynamic population/count updates.
    """
    
    def __init__(self):
        self.join_handler = JoinHandler()
        self.leave_handler = LeaveHandler()

    def calculate_movement(self, country_name, current_status, decision_weight):
        """
        Determines the final action based on modular handlers.
        """
        if current_status:
            if self.leave_handler.evaluate_leave(country_name, decision_weight):
                return "leave"
            return "stay"
        else:
            if self.join_handler.evaluate_join(country_name, decision_weight):
                return "join"
            return "none"

    def get_dynamic_stats(self, members_list, all_countries_data):
        """
        Calculates dynamic stats for an organization based on its members.
        Useful for UI to show total GDP/Population of an organization.
        """
        total_pop = 0
        total_gdp = 0
        member_count = len(members_list)
        
        for country_name in members_list:
            data = all_countries_data.get(country_name, {})
            total_pop += data.get('populasi', 0)
            total_gdp += data.get('gdp', 0)
            
        return {
            "member_count": member_count,
            "total_population": total_pop,
            "total_gdp": total_gdp,
            "average_stability": sum([all_countries_data.get(m, {}).get('stabilitas', 50) for m in members_list]) / max(1, member_count)
        }
