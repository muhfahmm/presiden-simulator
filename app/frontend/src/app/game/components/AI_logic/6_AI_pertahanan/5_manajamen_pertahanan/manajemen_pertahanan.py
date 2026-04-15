"""
Manajemen Pertahanan AI Decision Engine
Analyzes need for defense infrastructure:
- Penjara (capacity: 5000 tahanan)
- Gudang Senjata (capacity: 10000 unit amunisi)
- Hangar Tank (capacity: 50 MBT)
- Pusat Komando Pertahanan (capacity: 1 strategic command)
- Pangkalan Udara (capacity: 24 pesawat)
- Pangkalan Laut (capacity: 12 kapal)
- Program Luar Angkasa
- Pertahanan Siber
"""
import sys
import json
import random

DEFENSE_INFRA = {
    "1_penjara": {
        "cost": 41250000, "weight": 0.12,
        "capacity_key": "prison_usage",
        "capacity_per_unit": 5000,
        "pop_ratio": 5_000_000,  # 1 prison per 5M people
        "tier_min": 1
    },
    "2_gudang_senjata": {
        "cost": 26250000, "weight": 0.15,
        "capacity_key": "ammo_storage",
        "capacity_per_unit": 10000,
        "depends_on_military": True,
        "tier_min": 1
    },
    "3_hangar_tank": {
        "cost": 63750000, "weight": 0.10,
        "capacity_key": "tank_storage",
        "capacity_per_unit": 50,
        "depends_on": "tank_count",
        "tier_min": 2
    },
    "5_pusat_komando": {
        "cost": 187500000, "weight": 0.05,
        "capacity_key": "strategic_command",
        "capacity_per_unit": 1,
        "pop_ratio": 50_000_000,
        "tier_min": 2
    },
    "6_pangkalan_udara": {
        "cost": 337500000, "weight": 0.06,
        "capacity_key": "air_base",
        "capacity_per_unit": 24,
        "depends_on": "aircraft_count",
        "tier_min": 2
    },
    "7_pangkalan_laut": {
        "cost": 412500000, "weight": 0.05,
        "capacity_key": "naval_base",
        "capacity_per_unit": 12,
        "depends_on": "ship_count",
        "tier_min": 2
    },
    "8_program_luar_angkasa": {
        "cost": 937500000, "weight": 0.02,
        "tier_min": 3,
        "pop_ratio": 100_000_000
    },
    "9_pertahanan_siber": {
        "cost": 112500000, "weight": 0.08,
        "tier_min": 2,
        "pop_ratio": 30_000_000
    },
}

def analyze_manajemen(data):
    """
    Capacity-gap analysis: ensure infrastructure matches current military strength.
    """
    budget = data.get("budget", 0)
    population = data.get("population", 0)
    economic_tier = data.get("economic_tier", 1)
    threat_level = data.get("threat_level", 50)
    queue_count = data.get("queue_count", 0)
    defense_budget_ratio = data.get("defense_budget_ratio", 0.15)
    
    # Current infrastructure
    current_infra = data.get("defense_infra", {})
    
    # Military fleet counts for capacity analysis
    tank_count = data.get("tank_count", 0)
    aircraft_count = data.get("aircraft_count", 0)
    ship_count = data.get("ship_count", 0)
    total_military = data.get("total_military_units", 0)
    
    allocatable = budget * defense_budget_ratio
    
    if queue_count >= 2:
        return {"decision": "WAIT", "reason": "Defense management queue at capacity"}
    
    candidates = []
    pop_millions = population / 1_000_000
    
    for key, meta in DEFENSE_INFRA.items():
        if meta["cost"] > allocatable:
            continue
        if economic_tier < meta["tier_min"]:
            continue
        
        current = current_infra.get(key, 0)
        needed = 0
        gap_reason = ""
        
        # Population-based needs
        if "pop_ratio" in meta:
            needed = max(1, int(population / meta["pop_ratio"]))
            gap_reason = f"pop-based (need {needed} for {pop_millions:.0f}M pop)"
        
        # Capacity-based needs (infrastructure must match fleet size)
        if "depends_on" in meta:
            fleet_size = data.get(meta["depends_on"], 0)
            cap = meta.get("capacity_per_unit", 1)
            needed_for_fleet = max(0, -(-fleet_size // cap))  # ceil division
            needed = max(needed, needed_for_fleet)
            gap_reason = f"capacity-based (have {fleet_size} units, {current * cap} slots)"
        
        # Military-proportional needs (ammo scales with total military)
        if meta.get("depends_on_military"):
            needed_for_army = max(1, total_military // 50)  # 1 depot per 50 units
            needed = max(needed, needed_for_army)
            gap_reason = f"army-proportional ({total_military} total units)"
        
        gap = needed - current
        if gap <= 0:
            continue
        
        urgency = 1.0
        if gap >= 3:
            urgency = 2.0
        elif gap >= 2:
            urgency = 1.5
        
        if threat_level > 70:
            urgency *= 1.3
        
        final_weight = meta["weight"] * urgency * min(gap, 5)
        
        candidates.append({
            "key": key,
            "cost": meta["cost"],
            "weight": final_weight,
            "gap": gap,
            "current": current,
            "needed": needed,
            "reason": gap_reason
        })
    
    if not candidates:
        return {"decision": "SKIP", "reason": "Defense infrastructure adequate"}
    
    # Weighted selection
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
    
    max_affordable = int(allocatable / selected["cost"]) if selected["cost"] > 0 else 1
    quantity = min(selected["gap"], max_affordable, 2)  # Max 2 infrastructure at a time
    quantity = max(1, quantity)
    total_cost = selected["cost"] * quantity
    
    return {
        "decision": "EXECUTE",
        "building_key": selected["key"],
        "quantity": quantity,
        "cost": total_cost,
        "unit_cost": selected["cost"],
        "reason": f"Defense infra: {quantity}x {selected['key']} ({selected['reason']})"
    }

if __name__ == "__main__":
    try:
        input_data = json.load(sys.stdin)
        result = analyze_manajemen(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"decision": "SKIP", "error": str(e)}))
