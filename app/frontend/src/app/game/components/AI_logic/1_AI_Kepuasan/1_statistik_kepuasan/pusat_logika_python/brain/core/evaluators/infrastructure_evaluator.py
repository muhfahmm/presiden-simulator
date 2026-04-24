import math
from ..constants import INFRA_FACTORS

def evaluate_infrastructure(data):
    """Calculates infrastructure and housing impacts."""
    population = data.get('population', 1000000)
    
    # Infrastructure
    infra_data = data.get('infrastructure', {})
    infra_bonus = 0
    for key, factor in INFRA_FACTORS.items():
        infra_bonus += infra_data.get(key, 0) * factor
    infra_bonus = min(1.5, infra_bonus)

    # Housing
    housing_data = data.get('housing', {})
    total_housing_cap = (
        (housing_data.get('rumah_subsidi', 0) * 5) +
        (housing_data.get('apartemen', 0) * 6000) +
        (housing_data.get('mansion', 0) * 10)
    )
    deficit = max(0, population - total_housing_cap)
    homeless_percent = (deficit / population * 100) if population > 0 else 0
    housing_penalty = 0
    if homeless_percent > 1:
        housing_penalty = -(math.log10(homeless_percent) * 0.8)

    return infra_bonus, housing_penalty
