import sys
import json
import math
import os

# Add current directory to path to ensure core can be imported
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from core.constants import CRITICAL_THRESHOLD
from core.evaluators.fiscal_evaluator import evaluate_fiscal
from core.evaluators.social_evaluator import evaluate_social
from core.evaluators.infrastructure_evaluator import evaluate_infrastructure
from core.evaluators.economic_evaluator import evaluate_economy
from core.evaluators.security_evaluator import evaluate_security
from core.protocol_handler import handle_protocols

def calculate_detailed_happiness(data):
    """
    Modularized Happiness Engine for AI Countries.
    Coordinates various evaluators to determine national satisfaction.
    """
    stats = data.get('statistik', {})
    current_value = stats.get('indeks_kepuasan', 55.0)
    
    # 1. Fiscal (Tax & Price)
    tax_delta, price_delta = evaluate_fiscal(data)

    # 2. Social (Religion & Ideology)
    religion_delta, ideology_delta = evaluate_social(data)

    # 3. Physical (Infra & Housing)
    infra_bonus, housing_penalty = evaluate_infrastructure(data)

    # 4. State (Economy & Geopolitics)
    economy_delta, geopol_delta = evaluate_economy(data)

    # 5. Security (National & Resources)
    security_delta, resource_penalty = evaluate_security(data)

    # Final Calculation
    total_daily_delta = (
        tax_delta + price_delta + religion_delta + ideology_delta + 
        infra_bonus + housing_penalty + economy_delta + security_delta + 
        resource_penalty + geopol_delta
    )

    # Red Zone Multipliers
    if current_value < 40:
        total_daily_delta *= 1.5 if total_daily_delta > 0 else 2.5
    
    # Critical Protocol Handling
    emergency_protocol, emergency_actions = handle_protocols(
        current_value, economy_delta, tax_delta, security_delta, housing_penalty
    )

    new_value = round(max(0.0, min(100.0, current_value + total_daily_delta)), 2)

    return {
        "new_value": new_value,
        "delta": round(total_daily_delta, 4),
        "status": "CRITICAL" if new_value < CRITICAL_THRESHOLD else ("WARNING" if new_value < 40 else "STABLE"),
        "emergency_protocol": emergency_protocol,
        "emergency_actions": emergency_actions,
        "breakdown": {
            "fiscal": tax_delta,
            "market": price_delta,
            "social": religion_delta + ideology_delta,
            "infrastructure": infra_bonus,
            "housing": housing_penalty,
            "economy": economy_delta,
            "security": security_delta,
            "resources": resource_penalty,
            "geopolitics": geopol_delta
        }
    }

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            sys.exit(0)
        data = json.loads(input_data)
        if isinstance(data, list):
            results = {p.get('negara', 'Unknown'): calculate_detailed_happiness(p) for p in data}
            print(json.dumps(results))
        else:
            print(json.dumps(calculate_detailed_happiness(data)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
