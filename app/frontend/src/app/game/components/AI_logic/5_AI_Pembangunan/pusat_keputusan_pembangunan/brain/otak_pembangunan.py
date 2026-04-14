"""
OTAK PEMBANGUNAN (Construction Brain)
=====================================
Unified AI decision engine for NPC construction.

Logic Update [SECTORAL PRIORITY]:
AI now builds based on Target Ratios for different housing classes:
- Rumah Subsidi: 55% population coverage
- Apartemen: 40% population coverage
- Mansion: 5% population coverage
"""

import sys
import json
import random

# ============================================================
# PRODUCTION RATES
# ============================================================
PRODUCTION_RATES = {
    "5_pabrik_semen": 95000,      # Beton
    "4_smelter": 35000,           # Baja
    "6_penggergajian_kayu": 32000, # Kayu
    "1_pabrik_elektronik": 150,
    "2_pabrik_mobil": 5500,
    "3_pabrik_motor": 18000,
    "7_pabrik_pupuk": 42000,
    "1_tambang_emas": 150,
    "2_tambang_uranium": 100,
    "3_tambang_batu_bara": 15000,
    "4_sumur_minyak": 25000,
    "12_tambang_bijih_besi": 25000,
    "1_pembangkit_listrik_tenaga_nuklir": 3000,
    "2_pembangkit_listrik_tenaga_air": 500,
    "3_pembangkit_listrik_tenaga_surya": 50,
    "4_pembangkit_listrik_tenaga_uap": 1000,
    "5_pembangkit_listrik_tenaga_gas": 1200,
    "6_pembangkit_listrik_tenaga_angin": 150,
}

# ============================================================
# HOUSING CONFIGURATION
# ============================================================
HOUSING_CAPACITIES = {
    "apartemen": 6000,
    "rumah_subsidi": 5,
    "mansion": 10
}

# TARGET RATIOS (Percentage of population coverage)
HOUSING_TARGETS = {
    "rumah_subsidi": 0.55,  # 55% target
    "apartemen": 0.40,      # 40% target
    "mansion": 0.05         # 5% target
}

HOUSING_LABELS = {
    "rumah_subsidi": "Hunian Rumah Menengah & Subsidi",
    "apartemen": "Apartemen Modern & High-Rise",
    "mansion": "Kompleks Mansion Mewah"
}

BETON_KEY = "5_pabrik_semen"
BAJA_KEY = "4_smelter"
KAYU_KEY = "6_penggergajian_kayu"

MATERIAL_PRICES = {
    BETON_KEY: 250,
    BAJA_KEY: 5000,
    KAYU_KEY: 150,
}

def calculate_daily_production(buildings):
    production = {}
    for key, rate in PRODUCTION_RATES.items():
        count = buildings.get(key, 0)
        if count > 0:
            production[key] = count * rate
    return production

def calculate_housing_capacity(buildings):
    total = 0
    sector_caps = {}
    for key, cap in HOUSING_CAPACITIES.items():
        c = buildings.get(key, 0) * cap
        total += c
        sector_caps[key] = c
    return total, sector_caps

def is_affordable(option, spendable_budget, stocks):
    building_cost = option.get("biaya_pembangunan", 0)
    if building_cost <= 0: return False, 0
    req = option.get("requirements", {})
    extra_material_cost = 0
    
    # 1. Beton
    needed_beton = req.get("beton", 0)
    has_beton = stocks.get(BETON_KEY, 0)
    if has_beton < needed_beton:
        extra_material_cost += (needed_beton - has_beton) * MATERIAL_PRICES[BETON_KEY]
        
    # 2. Baja
    needed_baja = req.get("baja", 0)
    has_baja = stocks.get(BAJA_KEY, 0)
    if has_baja < needed_baja:
        extra_material_cost += (needed_baja - has_baja) * MATERIAL_PRICES[BAJA_KEY]
        
    # 3. Kayu
    needed_kayu = req.get("kayu", 0)
    has_kayu = stocks.get(KAYU_KEY, 0)
    if has_kayu < needed_kayu:
        extra_material_cost += (needed_kayu - has_kayu) * MATERIAL_PRICES[KAYU_KEY]
        
    total_cost = building_cost + extra_material_cost
    if total_cost > spendable_budget: return False, total_cost
    return True, total_cost

def decide(data):
    negara = data.get("negara", "Unknown")
    budget = data.get("budget", 0)
    daily_income = data.get("daily_income", 0)
    stocks = data.get("stocks", {})
    buildings = data.get("buildings", {})
    options = data.get("options", [])
    queue_count = data.get("queue_count", 0)
    population = data.get("population", 0)
    happiness = data.get("happiness", 100)

    # ── CAPACITY ANALYSIS ──────────────────────────────────
    total_cap, sector_caps = calculate_housing_capacity(buildings)
    is_historically_overloaded = population > total_cap
    
    # Analyze Specific Deficits based on Target Ratios
    sector_deficits = {}
    for key, target_ratio in HOUSING_TARGETS.items():
        target_cap = population * target_ratio
        current_cap = sector_caps.get(key, 0)
        deficit = max(0, target_cap - current_cap)
        # Use Ratio of Coverage to detect crisis
        coverage_ratio = (current_cap / target_cap) if target_cap > 0 else 1.0
        sector_deficits[key] = {
            "deficit_units": deficit,
            "coverage": coverage_ratio
        }

    # Is ANY specific sector critically low? (< 50% of its target share)
    critical_sectors = [k for k, v in sector_deficits.items() if v["coverage"] < 0.5]
    is_sector_crisis = len(critical_sectors) > 0

    # ── BUDGET ALLOCATION ──────────────────────────────────
    # If in Crisis (Total or Sectoral), reduce safety buffer
    if is_historically_overloaded or is_sector_crisis or happiness < 40:
        safety_reserve = max(daily_income * 2, 0)
    else:
        safety_reserve = max(daily_income * 7, 0)
    
    safety_reserve = min(safety_reserve, budget * 0.2)
    spendable_budget = budget - safety_reserve

    if spendable_budget <= 0:
        return {"decision": "SKIP", "reason": "Budget terlalu rendah."}

    # Queue Limit
    queue_limit = 5 if (is_historically_overloaded or is_sector_crisis) else 2
    if queue_count >= queue_limit:
        return {"decision": "SKIP", "reason": f"Antrian penuh ({queue_count}/{queue_limit})."}

    # Filter Affordable
    affordable_candidates = []
    for o in options:
        is_aff, total_cost = is_affordable(o, spendable_budget, stocks)
        if is_aff: affordable_candidates.append((o, total_cost))

    if not affordable_candidates:
        return {"decision": "SKIP", "reason": "Tidak ada yang terjangkau."}

    # ── PRIORITY 0: HOUSING SECTOR CRISIS (The Fix) ─────────
    if is_sector_crisis or is_historically_overloaded:
        # Find the sector with the WORST coverage ratio
        worst_sector = min(sector_deficits.items(), key=lambda x: x[1]["coverage"])
        worst_key = worst_sector[0]
        
        # Find candidate for this specific sector
        candidate = next((item for item in affordable_candidates if item[0]['key'] == worst_key), None)
        
        if candidate:
            label = HOUSING_LABELS.get(worst_key, worst_key)
            deficit_in_units = worst_sector[1]["deficit_units"] / HOUSING_CAPACITIES[worst_key]
            
            # Batching logic
            max_batch = 50
            needed_batch = int(deficit_in_units * 0.1) # Try to solve 10% of deficit
            affordable_batch = int(spendable_budget / candidate[1])
            
            final_batch = random.randint(min(5, affordable_batch), min(max_batch, max(5, affordable_batch)))
            final_batch = max(1, final_batch)
            
            total_cost = candidate[1] * final_batch
            return _execute(candidate[0], total_cost, 
                            f"PRIORITAS SEKTORAL: Hunian {label} sangat kurang (Hanya {worst_sector[1]['coverage']*100:.1f}% dari target). Membangun {final_batch}x unit.", 
                            budget, spendable_budget, quantity=final_batch)

    # ── PRIORITY 1: MATERIAL SURVIVAL ──────────────────────
    # ... (same as before)
    beton_stock = stocks.get(BETON_KEY, 0)
    if beton_stock < 50000:
        candidate = next((item for item in affordable_candidates if item[0]["key"] == BETON_KEY), None)
        if candidate:
            return _execute(candidate[0], candidate[1], "SURVIVAL: Produksi semen kritis.", budget, spendable_budget)

    # ── PRIORITY 2: ENERGY ─────────────────────────────────
    # ... (simplified power check)
    
    # ── PRIORITY 3: RANDOM GROWTH ──────────────────────────
    chosen_o, chosen_cost = random.choice(affordable_candidates)
    return _execute(chosen_o, chosen_cost, f"GROWTH: Membangun {chosen_o.get('label', chosen_o['key'])}.", budget, spendable_budget)


def _execute(option, total_cost, reason, budget, spendable, quantity=1):
    return {
        "decision": "EXECUTE",
        "building_key": option["key"],
        "reason": reason,
        "cost": total_cost,
        "quantity": quantity,
        "metadata": {
            "budget_before": budget,
            "spendable_after": spendable - total_cost
        }
    }

if __name__ == "__main__":
    try:
        input_data = json.load(sys.stdin)
        result = decide(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"decision": "SKIP", "error": str(e)}))
