import random

class ConstructionAdvisor:
    """
    Analyzes the 'Need' or 'Crisis' level for various sectors based on state data.
    """
    def __init__(self, housing_targets, housing_capacities):
        self.housing_targets = housing_targets
        self.housing_capacities = housing_capacities

    def analyze_needs(self, population, buildings, stocks):
        deficits = {}
        total_cap = 0
        
        # 1. Analyze Housing
        for key, target_ratio in self.housing_targets.items():
            target_cap = population * target_ratio
            current_cap = buildings.get(key, 0) * self.housing_capacities.get(key, 1)
            total_cap += current_cap
            
            deficit = max(0, target_cap - current_cap)
            coverage = (current_cap / target_cap) if target_cap > 0 else 1.0
            deficits[key] = {
                "category": "housing",
                "deficit_units": deficit,
                "coverage": coverage,
                "priority_score": (1.0 - coverage) * 100
            }

        # 2. Analyze Electricity (Simple logic: building_level vs population/1000)
        power_keys = ["1_pembangkit_listrik_tenaga_nuklir", "2_pembangkit_listrik_tenaga_air"]
        for p in power_keys:
            current_p = buildings.get(p, 0)
            target_p = population / 5000000 # 1 plant per 5M people roughly
            coverage = (current_p / target_p) if target_p > 0 else 1.0
            deficits[p] = {
                "category": "electricity",
                "deficit_units": max(0, target_p - current_p),
                "coverage": coverage,
                "priority_score": (1.0 - coverage) * 80 # Electricity slightly lower than housing
            }

        return deficits

    def find_best_candidate(self, deficits):
        # Sort by priority score DESC
        sorted_needs = sorted(deficits.items(), key=lambda x: x[1]["priority_score"], reverse=True)
        # Filter for anything with coverage < 99% (Relaxed for high activity)
        candidates = [k for k, v in sorted_needs if v["coverage"] < 0.99]
        return candidates[0] if candidates else None
