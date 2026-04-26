# GeopoliticalImpact.py
# Maps geopolitical news events to price multipliers for the C++ math engine.

class GeopoliticalImpactMapper:
    def __init__(self):
        # Multiplier rules for different news categories
        self.impact_rules = {
            "war": 2.5,
            "sanctions": 1.8,
            "natural_disaster": 1.4,
            "trade_agreement": 0.8, # Price drops due to ease of trade
            "discovery": 0.7        # New resource discovery lowers price
        }

    def get_multiplier(self, news_category, severity):
        """
        Calculates the multiplier based on news type and its severity (1-10).
        """
        base_multiplier = self.impact_rules.get(news_category, 1.0)
        # Severity scales the impact
        adjusted_multiplier = 1.0 + ((base_multiplier - 1.0) * (severity / 10.0))
        return round(adjusted_multiplier, 2)

if __name__ == "__main__":
    mapper = GeopoliticalImpactMapper()
    print(f"Multiplier for War (Severity 8): {mapper.get_multiplier('war', 8)}")
