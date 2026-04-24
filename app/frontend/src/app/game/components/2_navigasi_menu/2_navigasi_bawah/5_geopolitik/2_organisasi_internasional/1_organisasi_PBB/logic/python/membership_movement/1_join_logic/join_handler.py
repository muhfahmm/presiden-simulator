import random

class JoinHandler:
    """
    Handles the specific logic for an AI country to join an organization.
    """
    def __init__(self, base_probability=0.40):
        self.probability = base_probability

    def evaluate_join(self, country_name, decision_weight):
        """
        Returns True if the country decides to join.
        """
        if decision_weight > 60:
            # High weight increases probability slightly
            bonus = (decision_weight - 60) / 100
            adjusted_prob = min(self.probability + bonus, 0.80)
            
            if random.random() < adjusted_prob:
                return True
        return False
