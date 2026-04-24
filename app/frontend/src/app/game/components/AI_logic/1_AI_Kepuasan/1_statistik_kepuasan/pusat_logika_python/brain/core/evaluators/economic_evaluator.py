def evaluate_economy(data):
    """Calculates general economic and geopolitical impacts."""
    # Economic Health
    budget = data.get('budget', 0)
    economy_delta = 0
    if budget < 0:
        economy_delta = max(-0.5, (budget / 1000000000) * 0.01)
    elif budget > 1000000000:
        economy_delta = min(0.2, (budget / 1000000000) * 0.02)

    # Geopolitical Standing
    avg_relation = data.get('avg_relation', 0)
    geopol_delta = (avg_relation / 100) * 0.1

    return economy_delta, geopol_delta
