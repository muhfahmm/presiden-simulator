def evaluate_fiscal(data):
    """Calculates tax and price impacts."""
    # 1. Tax Impact
    avg_tax_rate = data.get('avg_tax_rate', 25)
    if avg_tax_rate <= 20: tax_delta = 0.1
    elif avg_tax_rate <= 35: tax_delta = 0.02
    elif avg_tax_rate <= 50: tax_delta = -0.05
    elif avg_tax_rate <= 70: tax_delta = -0.15
    else: tax_delta = -0.35

    # 2. Price Impact
    avg_price_mult = data.get('avg_price_multiplier', 1.0)
    if avg_price_mult <= 0.8: price_delta = 0.1
    elif avg_price_mult <= 1.1: price_delta = 0.02
    elif avg_price_mult <= 1.4: price_delta = -0.1
    elif avg_price_mult <= 1.8: price_delta = -0.25
    else: price_delta = -0.5

    return tax_delta, price_delta
