import random

class ConstructionStrategist:
    """
    Handles budget allocation, safety buffers, and batching logic.
    """
    def __init__(self, material_prices):
        self.material_prices = material_prices

    def get_spendable_budget(self, budget, daily_income, is_crisis):
        # Safety buffer: 1 day income if crisis, 7 days if healthy
        if is_crisis:
            safety_reserve = max(daily_income * 1, 0)
        else:
            safety_reserve = max(daily_income * 7, 0)
        
        # Never freeze more than 15% of total budget as reserve
        safety_reserve = min(safety_reserve, budget * 0.15)
        return budget - safety_reserve

    def calculate_cost(self, option_key, base_cost, requirements, stocks):
        beton_key = "5_pabrik_semen"
        baja_key = "4_smelter"
        kayu_key = "6_penggergajian_kayu"
        
        extra_cost = 0
        
        # Check deficiencies
        def check_mat(mat_key, req):
            nonlocal extra_cost
            has = stocks.get(mat_key, 0)
            if has < req:
                extra_cost += (req - has) * self.material_prices.get(mat_key, 0)

        check_mat(beton_key, requirements.get("beton", 0))
        check_mat(baja_key, requirements.get("baja", 0))
        check_mat(kayu_key, requirements.get("kayu", 0))
        
        return base_cost + extra_cost

    def determine_batch_size(self, spendable, unit_cost, is_crisis):
        if unit_cost <= 0: return 0
        
        max_batch = 50 if is_crisis else 10
        affordable = int(spendable / unit_cost)
        
        if affordable <= 0: return 0
        
        target = random.randint(min(5, affordable), min(max_batch, max(5, affordable)))
        return max(1, min(target, affordable))
