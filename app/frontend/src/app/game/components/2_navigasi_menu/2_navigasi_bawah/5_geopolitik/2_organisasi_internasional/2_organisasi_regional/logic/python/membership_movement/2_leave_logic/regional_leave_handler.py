import random

class RegionalLeaveHandler:
    """
    Handles the logic for an AI country to leave a regional organization.
    Exit probability is lower than global (10% vs 15%) to show regional commitment.
    """
    def __init__(self, exit_probability=0.10):
        self.exit_probability = exit_probability

    def evaluate_leave(self, country_name, decision_weight):
        """
        Returns True if the country decides to leave.
        """
        # Regional blocks are harder to leave unless relations are catastrophic
        if decision_weight < 15:
            if random.random() < self.exit_probability:
                return True
        return False
