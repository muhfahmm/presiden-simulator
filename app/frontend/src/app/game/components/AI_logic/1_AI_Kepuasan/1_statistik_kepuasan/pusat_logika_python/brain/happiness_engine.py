import sys
import json
import math

# Constants mirrored from TypeScript logic
BUDDHA_BONUS = 0.2
KONGHUCU_PENALTY = -0.2
DEMOKRASI_BONUS = 0.1
KAPITALISME_PENALTY = -0.2
KONSERVATISME_BONUS = 0.1
SOSIALISME_BONUS = 0.0005

INFRA_FACTORS = {
    "jalur_sepeda": 0.0005,
    "jalan_tol": 0.0008,
    "terminal_bus": 0.001,
    "jalur_kereta": 0.0012,
    "kereta_bawah_tanah": 0.0015,
    "pelabuhan_laut": 0.0018,
    "bandara": 0.002,
    "helipad": 0.0005
}

CRITICAL_THRESHOLD = 25.0

def calculate_detailed_happiness(data):
    """
    Comprehensive Happiness Engine for AI Countries.
    Integrates all aspects of life: Economy, Security, Resources, and Geopolitics.
    """
    stats = data.get('statistik', {})
    current_value = stats.get('indeks_kepuasan', 55.0)
    population = data.get('population', 1000000)
    
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

    # 3. Religion & Ideology
    religion_delta = 0
    rel = data.get('religion', 'Sekuler')
    if rel == 'Buddha': religion_delta = BUDDHA_BONUS
    elif rel == 'Konghucu': religion_delta = KONGHUCU_PENALTY

    ideology_delta = 0
    ideo = data.get('ideology', 'Netral')
    if ideo == 'Demokrasi': ideology_delta = DEMOKRASI_BONUS
    elif ideo == 'Kapitalisme': ideology_delta = KAPITALISME_PENALTY
    elif ideo == 'Konservatisme': ideology_delta = KONSERVATISME_BONUS
    elif ideo == 'Sosialisme': ideology_delta = SOSIALISME_BONUS

    # 4. Infrastructure Impact
    infra_data = data.get('infrastructure', {})
    infra_bonus = 0
    for key, factor in INFRA_FACTORS.items():
        infra_bonus += infra_data.get(key, 0) * factor
    infra_bonus = min(1.5, infra_bonus)

    # 5. Housing Penalty
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

    # 6. NEW: Economic Health (Budget Balance)
    budget = data.get('budget', 0)
    economy_delta = 0
    if budget < 0:
        # Debt stress: every 1B debt causes slight worry
        economy_delta = max(-0.5, (budget / 1000000000) * 0.01)
    elif budget > 1000000000:
        # Surplus confidence
        economy_delta = min(0.2, (budget / 1000000000) * 0.02)

    # 7. NEW: National Security (Military Presence)
    military_power = data.get('military_power', 0)
    security_ratio = (military_power / population) * 1000 if population > 0 else 0
    security_delta = 0
    if security_ratio < 0.5: security_delta = -0.1  # Vulnerable
    elif security_ratio > 5.0: security_delta = 0.05 # Secure
    
    # 8. NEW: Resource Security
    stocks = data.get('stocks', {})
    essential_materials = ["5_pabrik_semen", "12_tambang_bijih_besi", "4_smelter"]
    resource_shortage_penalty = 0
    for mat in essential_materials:
        if stocks.get(mat, 0) < 1000:
            resource_shortage_penalty -= 0.05
    
    # 9. NEW: Geopolitical Standing
    avg_relation = data.get('avg_relation', 0)
    geopol_delta = (avg_relation / 100) * 0.1

    # Final Calculation
    total_daily_delta = (
        tax_delta + price_delta + religion_delta + ideology_delta + 
        infra_bonus + housing_penalty + economy_delta + security_delta + 
        resource_shortage_penalty + geopol_delta
    )

    # Red Zone Multipliers
    if current_value < 40:
        total_daily_delta *= 1.5 if total_daily_delta > 0 else 2.5
    
    # Critical Protocol (< 25%)
    emergency_protocol = "NONE"
    emergency_actions = []
    if current_value < CRITICAL_THRESHOLD:
        emergency_protocol = "CRITICAL_INSTABILITY"
        if economy_delta < -0.2:
            emergency_actions.append("REQUEST_IMF_BAILOUT")
        if tax_delta < -0.1:
            emergency_actions.append("TAX_HOLIDAY_30D")
        if security_delta < 0:
            emergency_actions.append("MARTIAL_LAW_DECLARATION")
        if housing_penalty < -0.5:
            emergency_actions.append("EMERGENCY_SQUATTER_LEGALIZATION")
        
        # Risk of collapse
        if current_value < 10:
            emergency_protocol = "GOVERNMENT_COLLAPSE_RISK"
            emergency_actions.append("EMERGENCY_ELECTIONS")

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
            "resources": resource_shortage_penalty,
            "geopolitics": geopol_delta
        }
    }

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            print(json.dumps({"error": "No input provided"}))
            sys.exit(0)
        data = json.loads(input_data)
        if isinstance(data, list):
            results = {p.get('negara', 'Unknown'): calculate_detailed_happiness(p) for p in data}
            print(json.dumps(results))
        else:
            print(json.dumps(calculate_detailed_happiness(data)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
