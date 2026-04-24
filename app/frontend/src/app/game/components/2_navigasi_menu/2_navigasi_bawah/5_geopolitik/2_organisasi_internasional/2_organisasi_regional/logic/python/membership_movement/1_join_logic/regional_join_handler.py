import random

class RegionalJoinHandler:
    """
    Handles the logic for an AI country to join a regional organization.
    Higher base probability than global orgs (50% vs 40%).
    """
    def __init__(self, base_probability=0.50):
        self.probability = base_probability

    def evaluate_join(self, country_name, decision_weight):
        """
        Returns True if the country decides to join.
        Regional alignment bonus is already included in decision_weight.
        """
        if decision_weight > 55:
            bonus = (decision_weight - 55) / 100
            adjusted_prob = min(self.probability + bonus, 0.90)
            
            if random.random() < adjusted_prob:
                return True
        return False
