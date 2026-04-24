def evaluate_security(data):
    """Calculates national and resource security impacts."""
    population = data.get('population', 1000000)
    
    # National Security
    military_power = data.get('military_power', 0)
    security_ratio = (military_power / population) * 1000 if population > 0 else 0
    security_delta = 0
    if security_ratio < 0.5: security_delta = -0.1
    elif security_ratio > 5.0: security_delta = 0.05
    
    # Resource Security
    stocks = data.get('stocks', {})
    essential_materials = ["5_pabrik_semen", "12_tambang_bijih_besi", "4_smelter"]
    resource_shortage_penalty = 0
    for mat in essential_materials:
        if stocks.get(mat, 0) < 1000:
            resource_shortage_penalty -= 0.05

    return security_delta, resource_shortage_penalty
