"""
Armada Polisi AI Decision Engine
Analyzes need for 13 types of police units:
- Pusat Komando & Pendidikan: Markas Besar, Akademi, Forensik
- Unit Kewilayahan: Kantor Polisi, Pos Polisi, CCTV
- Armada & Respon Cepat: Mobil Patroli, Interceptor, Roda Dua, Helikopter
- Pasukan Khusus: K-9, SWAT/Brimob, Samapta
"""
import sys
import json
import random

POLICE_CATALOG = {
    # --- Pusat Komando & Pendidikan ---
    "1_pusat_komando": {"cost": 93750000, "pop_ratio": 50_000_000, "category": "command", "weight": 0.05, "tier_min": 2},
    "2_akademi_polisi": {"cost": 33750000, "pop_ratio": 20_000_000, "category": "education", "weight": 0.08, "tier_min": 1},
    "3_pusat_forensik": {"cost": 26250000, "pop_ratio": 30_000_000, "category": "forensic", "weight": 0.06, "tier_min": 2},
    
    # --- Unit Kewilayahan ---
    "4_kantor_polisi": {"cost": 18750000, "pop_ratio": 2_000_000, "category": "regional", "weight": 0.15, "tier_min": 1},
    "5_pos_polisi": {"cost": 7500000, "pop_ratio": 500_000, "category": "regional", "weight": 0.18, "tier_min": 1},
    "6_network_cctv": {"cost": 11250000, "pop_ratio": 1_000_000, "category": "surveillance", "weight": 0.12, "tier_min": 1},
    
    # --- Armada & Respon Cepat ---
    "7_armada_mobil": {"cost": 3750000, "pop_ratio": 500_000, "category": "fleet", "weight": 0.15, "tier_min": 1},
    "8_mobil_interceptor": {"cost": 2250000, "pop_ratio": 800_000, "category": "fleet", "weight": 0.12, "tier_min": 1},
    "9_unit_r2": {"cost": 1125000, "pop_ratio": 300_000, "category": "fleet", "weight": 0.18, "tier_min": 1},
    "10_heli_polisi": {"cost": 33750000, "pop_ratio": 10_000_000, "category": "air", "weight": 0.04, "tier_min": 2},
    
    # --- Pasukan Khusus ---
    "11_unit_k9": {"cost": 2250000, "pop_ratio": 5_000_000, "category": "special", "weight": 0.10, "tier_min": 1},
    "12_swat": {"cost": 26250000, "pop_ratio": 10_000_000, "category": "special", "weight": 0.06, "tier_min": 2},
    "13_anti_huru_hara": {"cost": 15000000, "pop_ratio": 5_000_000, "category": "special", "weight": 0.08, "tier_min": 1},
}

def analyze_polisi(data):
    """
    Main decision function for police force procurement.
    Uses population-ratio driven gap analysis + stability awareness.
    """
    budget = data.get("budget", 0)
    population = data.get("population", 0)
    threat_level = data.get("threat_level", 50)
    stability = data.get("stability", 70)
    happiness = data.get("happiness", 60)
    economic_tier = data.get("economic_tier", 1)
    queue_count = data.get("queue_count", 0)
    defense_budget_ratio = data.get("defense_budget_ratio", 0.15)
    
    current_assets = data.get("police_assets", {})
    
    allocatable = budget * defense_budget_ratio
    
    # Throttle: Max 2 police projects in queue
    if queue_count >= 2:
        return {"decision": "WAIT", "reason": "Police queue at capacity (2)"}
    
    # Score each unit based on population gap
    candidates = []
    for key, meta in POLICE_CATALOG.items():
        if meta["cost"] > allocatable:
            continue
        if economic_tier < meta["tier_min"]:
            continue
        
        current = current_assets.get(key, 0)
        needed = max(1, int(population / meta["pop_ratio"])) if meta["pop_ratio"] > 0 else 1
        gap = needed - current
        
        if gap <= 0:
            continue
        
        # Urgency multiplier based on stability
        urgency = 1.0
        if stability < 40:
            urgency = 2.0  # Unstable nation buys more police
        elif stability < 60:
            urgency = 1.5
        
        if happiness < 40:
            urgency *= 1.3  # Unhappy populations need more policing
        
        final_weight = meta["weight"] * urgency * min(gap, 5)
        
        candidates.append({
            "key": key,
            "cost": meta["cost"],
            "weight": final_weight,
            "gap": gap,
            "current": current,
            "needed": needed,
            "category": meta["category"]
        })
    
    if not candidates:
        return {"decision": "SKIP", "reason": "No police procurement needs detected"}
    
    # Weighted random selection
    total_weight = sum(c["weight"] for c in candidates)
    if total_weight <= 0:
        return {"decision": "SKIP", "reason": "All weights zero"}
    
    r = random.random() * total_weight
    cumulative = 0
    selected = candidates[0]
    
    for c in candidates:
        cumulative += c["weight"]
        if r <= cumulative:
            selected = c
            break
    
    # Quantity: fill gap but don't exceed budget
    max_affordable = int(allocatable / selected["cost"]) if selected["cost"] > 0 else 1
    quantity = min(selected["gap"], max_affordable)
    
    # Cap bulk purchases
    if selected["cost"] < 5_000_000:
        quantity = min(quantity, random.randint(3, 10))
    elif selected["cost"] < 20_000_000:
        quantity = min(quantity, random.randint(1, 5))
    else:
        quantity = min(quantity, random.randint(1, 2))
    
    quantity = max(1, quantity)
    total_cost = selected["cost"] * quantity
    
    return {
        "decision": "EXECUTE",
        "building_key": selected["key"],
        "quantity": quantity,
        "cost": total_cost,
        "unit_cost": selected["cost"],
        "reason": f"Police procurement: {quantity}x {selected['key']} (gap: {selected['gap']}, stability: {stability:.0f})"
    }

if __name__ == "__main__":
    try:
        input_data = json.load(sys.stdin)
        result = analyze_polisi(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"decision": "SKIP", "error": str(e)}))
