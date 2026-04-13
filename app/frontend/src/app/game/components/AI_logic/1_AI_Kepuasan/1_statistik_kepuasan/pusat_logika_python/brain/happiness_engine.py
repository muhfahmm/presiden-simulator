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

def calculate_detailed_happiness(data):
    """
    Comprehensive Happiness Engine for AI Countries.
    Replicates the exact logic used in the player's dashboard.
    """
    stats = data.get('statistik', {})
    current_value = stats.get('indeks_kepuasan', 55.0)
    
    # 1. Tax Impact (Baseline)
    # Provided directly by KolektorDataNasional or calculated here
    avg_tax_rate = data.get('avg_tax_rate', 25)
    if avg_tax_rate <= 25: tax_delta = 0.05
    elif avg_tax_rate <= 50: tax_delta = 0
    elif avg_tax_rate <= 75: tax_delta = -0.1
    else: tax_delta = -0.25

    # 2. Price Impact (Baseline)
    avg_price_mult = data.get('avg_price_multiplier', 1.0)
    if avg_price_mult <= 0.8: price_delta = 0.05
    elif avg_price_mult <= 1.2: price_delta = 0
    elif avg_price_mult <= 1.5: price_delta = -0.1
    else: price_delta = -0.25

    # 3. Religion Impact
    religion = data.get('religion', 'Sekuler')
    religion_delta = 0
    if religion == 'Buddha': religion_delta = BUDDHA_BONUS
    elif religion == 'Konghucu': religion_delta = KONGHUCU_PENALTY

    # 4. Ideology Impact
    ideology = data.get('ideology', 'Netral')
    ideology_delta = 0
    if ideology == 'Demokrasi': ideology_delta = DEMOKRASI_BONUS
    elif ideology == 'Kapitalisme': ideology_delta = KAPITALISME_PENALTY
    elif ideology == 'Konservatisme': ideology_delta = KONSERVATISME_BONUS
    elif ideology == 'Sosialisme': ideology_delta = SOSIALISME_BONUS

    # 5. Infrastructure Impact
    infra_data = data.get('infrastructure', {})
    infra_bonus = 0
    infra_breakdown = {}
    
    for key, factor in INFRA_FACTORS.items():
        count = infra_data.get(key, 0)
        contribution = count * factor
        infra_bonus += contribution
        infra_breakdown[key] = round(contribution, 4)

    # Cap infra bonus to 2.5% per day
    infra_bonus = min(2.5, infra_bonus)

    # 6. Housing Penalty (Societal Deficit)
    housing_data = data.get('housing', {})
    population = data.get('population', 0)
    
    # Capacities (Matched with hunianRate)
    CAP_SUBSIDI = 5
    CAP_APARTEMEN = 6000
    CAP_MANSION = 10
    
    total_housing_cap = (
        (housing_data.get('rumah_subsidi', 0) * CAP_SUBSIDI) +
        (housing_data.get('apartemen', 0) * CAP_APARTEMEN) +
        (housing_data.get('mansion', 0) * CAP_MANSION)
    )
    
    deficit = max(0, population - total_housing_cap)
    homeless_percent = (deficit / population * 100) if population > 0 else 0
    
    housing_penalty = 0
    if homeless_percent > 0:
        # Logarithmic scaling to prevent instant drop to 0, but significant at high percentages
        housing_penalty = -(math.log10(homeless_percent + 1) / math.log10(101)) * 3.5

    # 7. Final Daily Delta
    total_daily_delta = tax_delta + price_delta + religion_delta + ideology_delta + infra_bonus + housing_penalty

    # 7. Red Zone Multiplier (Satisfaction < 40%)
    is_red_zone = current_value < 40
    if is_red_zone:
        if total_daily_delta < 0: total_daily_delta *= 2
        else: total_daily_delta *= 1.5

    new_value = round(max(1.0, min(100.0, current_value + total_daily_delta)), 2)

    return {
        "new_value": new_value,
        "delta": round(total_daily_delta, 4),
        "breakdown": {
            "tax": tax_delta,
            "price": price_delta,
            "religion": religion_delta,
            "ideology": ideology_delta,
            "infrastructure": round(infra_bonus, 4),
            "housing": round(housing_penalty, 4),
            "homeless_rate": round(homeless_percent, 2),
            "infra_details": infra_breakdown
        },
        "status": "CRITICAL" if new_value < 40 else "STABLE",
        "analysis": f"Total dampak kebijakan ({'+' if total_daily_delta >= 0 else ''}{round(total_daily_delta, 2)}%) {'menguntungkan' if total_daily_delta >= 0 else 'merugikan'} rakyat. Rating cenderung {'naik' if total_daily_delta > 0 else 'turun' if total_daily_delta < 0 else 'stabil'}."
    }

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            print(json.dumps({"error": "No input provided"}))
            sys.exit(0)
            
        data = json.loads(input_data)
        
        # Check if batch mode (list of countries)
        if isinstance(data, list):
            results = {}
            for country_packet in data:
                name = country_packet.get('negara', 'Unknown')
                results[name] = calculate_detailed_happiness(country_packet)
            print(json.dumps(results))
        else:
            # Single mode
            result = calculate_detailed_happiness(data)
            print(json.dumps(result))
        
    except Exception as e:
        print(json.dumps({"error": str(e)}))
