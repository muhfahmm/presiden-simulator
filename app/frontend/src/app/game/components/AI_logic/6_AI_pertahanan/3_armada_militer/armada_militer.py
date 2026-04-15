"""
Armada Militer AI Decision Engine
Analyzes need for 22 types of military units across 3 branches:
- Darat (7 types): Barak, Tank, APC, Artileri, Roket, SAM, Kendaraan Taktis
- Laut (7 types): Kapal Induk, Destroyer, Korvet, Selam Nuklir, Selam Reguler, Ranjau, Logistik
- Udara (8 types): Jet Stealth, Interceptor, Bomber, Heli Serang, Intai, Drone UAV, Drone Kamikaze, Transport
"""
import sys
import json
import random

# Unit catalog with priorities per economic tier
UNIT_CATALOG = {
    # === DARAT (45% allocation) ===
    "1_barak": {"branch": "darat", "cost": 26250000, "weight": 0.15, "min_budget": 50_000_000, "tier_min": 1},
    "2_tank": {"branch": "darat", "cost": 63750000, "weight": 0.12, "min_budget": 500_000_000, "tier_min": 2},
    "3_apc": {"branch": "darat", "cost": 26250000, "weight": 0.14, "min_budget": 200_000_000, "tier_min": 1},
    "4_artileri": {"branch": "darat", "cost": 48750000, "weight": 0.10, "min_budget": 400_000_000, "tier_min": 2},
    "5_roket_peluncur": {"branch": "darat", "cost": 71250000, "weight": 0.08, "min_budget": 800_000_000, "tier_min": 2},
    "6_misil_sam": {"branch": "darat", "cost": 93750000, "weight": 0.07, "min_budget": 1_000_000_000, "tier_min": 2},
    "7_kendaraan_taktis": {"branch": "darat", "cost": 11250000, "weight": 0.18, "min_budget": 30_000_000, "tier_min": 1},
    
    # === LAUT (30% allocation) ===
    "8_kapal_induk": {"branch": "laut", "cost": 1125000000, "weight": 0.03, "min_budget": 50_000_000_000, "tier_min": 3},
    "8b_kapal_induk_nuklir": {"branch": "laut", "cost": 1875000000, "weight": 0.01, "min_budget": 200_000_000_000, "tier_min": 3},
    "9_kapal_perusak": {"branch": "laut", "cost": 337500000, "weight": 0.06, "min_budget": 5_000_000_000, "tier_min": 2},
    "10_kapal_korvet": {"branch": "laut", "cost": 135000000, "weight": 0.10, "min_budget": 1_000_000_000, "tier_min": 2},
    "11_kapal_selam_nuklir": {"branch": "laut", "cost": 562500000, "weight": 0.02, "min_budget": 50_000_000_000, "tier_min": 3},
    "12_kapal_selam_reguler": {"branch": "laut", "cost": 187500000, "weight": 0.05, "min_budget": 2_000_000_000, "tier_min": 2},
    "13_penyapu_ranjau": {"branch": "laut", "cost": 63750000, "weight": 0.07, "min_budget": 500_000_000, "tier_min": 1},
    "14_kapal_logistik": {"branch": "laut", "cost": 90000000, "weight": 0.06, "min_budget": 800_000_000, "tier_min": 1},
    
    # === UDARA (25% allocation) ===
    "15_jet_tempur_siluman": {"branch": "udara", "cost": 112500000, "weight": 0.04, "min_budget": 5_000_000_000, "tier_min": 3},
    "16_jet_pencegat": {"branch": "udara", "cost": 63750000, "weight": 0.08, "min_budget": 1_000_000_000, "tier_min": 2},
    "17_pesawat_pembom": {"branch": "udara", "cost": 187500000, "weight": 0.03, "min_budget": 10_000_000_000, "tier_min": 3},
    "18_helikopter_serbu": {"branch": "udara", "cost": 41250000, "weight": 0.10, "min_budget": 500_000_000, "tier_min": 2},
    "19_pesawat_intai": {"branch": "udara", "cost": 71250000, "weight": 0.06, "min_budget": 1_000_000_000, "tier_min": 2},
    "20_drone_intai": {"branch": "udara", "cost": 11250000, "weight": 0.15, "min_budget": 100_000_000, "tier_min": 1},
    "21_drone_kamikaze": {"branch": "udara", "cost": 3750000, "weight": 0.18, "min_budget": 50_000_000, "tier_min": 1},
    "22_transport_udara": {"branch": "udara", "cost": 56250000, "weight": 0.08, "min_budget": 500_000_000, "tier_min": 1},
}

def calculate_threat_multiplier(threat_level, branch):
    """
    Adjust procurement priority based on threat type.
    Higher threats increase military spending urgency.
    """
    base = 1.0
    if threat_level > 80:
        base = 2.0
    elif threat_level > 60:
        base = 1.5
    elif threat_level > 40:
        base = 1.2
    
    # Branch-specific adjustments (e.g., island nations prioritize navy)
    return base

def analyze_armada(data):
    """
    Main decision function for military fleet procurement.
    Uses weighted random selection with budget-aware filtering.
    """
    budget = data.get("budget", 0)
    population = data.get("population", 0)
    threat_level = data.get("threat_level", 50)
    economic_tier = data.get("economic_tier", 1)
    queue_count = data.get("queue_count", 0)
    defense_budget_ratio = data.get("defense_budget_ratio", 0.55)
    
    # Current military assets
    current_assets = data.get("military_assets", {})
    
    allocatable = budget * defense_budget_ratio
    
    # Throttle: Max 3 projects in queue for military
    if queue_count >= 3:
        return {"decision": "WAIT", "reason": "Military queue at capacity (3)"}
    
    # Filter eligible units based on budget and tier
    eligible = []
    for key, meta in UNIT_CATALOG.items():
        if budget < meta["min_budget"]:
            continue
        if economic_tier < meta["tier_min"]:
            continue
        if meta["cost"] > allocatable:
            continue
        
        # Calculate weighted score
        current_count = current_assets.get(key, 0)
        
        # Diminishing returns: reduce weight if already have many
        diminishing = max(0.1, 1.0 - (current_count * 0.05))
        
        threat_mult = calculate_threat_multiplier(threat_level, meta["branch"])
        
        final_weight = meta["weight"] * diminishing * threat_mult
        
        eligible.append({
            "key": key,
            "cost": meta["cost"],
            "branch": meta["branch"],
            "weight": final_weight,
            "current": current_count
        })
    
    if not eligible:
        return {"decision": "SKIP", "reason": "No affordable military units for this budget tier"}
    
    # Weighted random selection
    total_weight = sum(e["weight"] for e in eligible)
    if total_weight <= 0:
        return {"decision": "SKIP", "reason": "All weights zero"}
    
    r = random.random() * total_weight
    cumulative = 0
    selected = eligible[0]  # fallback
    
    for e in eligible:
        cumulative += e["weight"]
        if r <= cumulative:
            selected = e
            break
    
    # Determine quantity (cheaper units can be bought in bulk)
    max_affordable = int(allocatable / selected["cost"]) if selected["cost"] > 0 else 1
    
    # Quantity scaling based on cost tier
    if selected["cost"] < 5_000_000:
        quantity = min(max_affordable, random.randint(5, 20))
    elif selected["cost"] < 30_000_000:
        quantity = min(max_affordable, random.randint(2, 8))
    elif selected["cost"] < 100_000_000:
        quantity = min(max_affordable, random.randint(1, 4))
    elif selected["cost"] < 500_000_000:
        quantity = min(max_affordable, random.randint(1, 2))
    else:
        quantity = 1
    
    quantity = max(1, quantity)
    total_cost = selected["cost"] * quantity
    
    if total_cost > allocatable:
        quantity = max(1, int(allocatable / selected["cost"]))
        total_cost = selected["cost"] * quantity
    
    return {
        "decision": "EXECUTE",
        "building_key": selected["key"],
        "branch": selected["branch"],
        "quantity": quantity,
        "cost": total_cost,
        "unit_cost": selected["cost"],
        "reason": f"Procuring {quantity}x {selected['key']} ({selected['branch']}) | Current: {selected['current']} | Threat: {threat_level:.0f}"
    }

if __name__ == "__main__":
    try:
        input_data = json.load(sys.stdin)
        result = analyze_armada(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"decision": "SKIP", "error": str(e)}))
