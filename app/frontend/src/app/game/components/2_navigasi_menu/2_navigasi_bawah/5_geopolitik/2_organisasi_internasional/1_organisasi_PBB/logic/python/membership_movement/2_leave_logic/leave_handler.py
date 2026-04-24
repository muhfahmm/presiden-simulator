import random

class LeaveHandler:
    """
    Handles the specific logic for an AI country to leave an organization.
    Ensures that leaving is rare (15% probability).
    """
    def __init__(self, exit_probability=0.15):
        self.exit_probability = exit_probability

    def evaluate_leave(self, country_name, decision_weight):
        """
        Returns True if the country decides to leave.
        """
        # Only consider leaving if decision weight is critically low
        if decision_weight < 20:
            # Enforce the rare exit probability
            if random.random() < self.exit_probability:
                return True
        return False
