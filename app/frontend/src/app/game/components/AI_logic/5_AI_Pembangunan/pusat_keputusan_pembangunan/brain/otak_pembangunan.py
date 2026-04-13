"""
OTAK PEMBANGUNAN (Construction Brain)
=====================================
Unified AI decision engine for NPC construction.

Receives a COMPLETE economic snapshot of a nation and returns 
a single decision: BUILD something specific, or SKIP.

Budget Intelligence:
- Safety Reserve = 30 days of daily_income (never spend below this)
- Spendable = budget - safety_reserve
- Only builds if spendable > biaya_pembangunan

Production Awareness:
- Tracks daily_production per material to detect shortages
- If production is already high, diversifies instead of building more factories

Priority Hierarchy:
1. SURVIVAL: Build material factories if stocks AND production are critically low
2. ENERGY: Build power plants if power deficit detected
3. GROWTH: Diversify economy (manufacturing, agriculture, military, public services)
"""

import sys
import json
import random

# ============================================================
# PRODUCTION RATES (same as production_scripts/*.py)
# Used to calculate daily_production from building counts
# ============================================================
PRODUCTION_RATES = {
    # Manufaktur (material-producing)
    "5_pabrik_semen": 95000,      # Beton
    "4_smelter": 35000,           # Baja
    "6_penggergajian_kayu": 32000, # Kayu
    "1_pabrik_elektronik": 150,
    "2_pabrik_mobil": 5500,
    "3_pabrik_motor": 18000,
    "7_pabrik_pupuk": 42000,
    # Ekstraksi
    "1_tambang_emas": 150,
    "2_tambang_uranium": 100,
    "3_tambang_batu_bara": 15000,
    "4_sumur_minyak": 25000,
    "12_tambang_bijih_besi": 25000,
    # Listrik (MW)
    "1_pembangkit_listrik_tenaga_nuklir": 3000,
    "2_pembangkit_listrik_tenaga_air": 500,
    "3_pembangkit_listrik_tenaga_surya": 50,
    "4_pembangkit_listrik_tenaga_uap": 1000,
    "5_pembangkit_listrik_tenaga_gas": 1200,
    "6_pembangkit_listrik_tenaga_angin": 150,
}

# Material keys for checking stocks
BETON_KEY = "5_pabrik_semen"
BAJA_KEY = "4_smelter"
KAYU_KEY = "6_penggergajian_kayu"


def calculate_daily_production(buildings):
    """Calculate what this nation produces per day from its buildings."""
    production = {}
    for key, rate in PRODUCTION_RATES.items():
        count = buildings.get(key, 0)
        if count > 0:
            production[key] = count * rate
    return production


def calculate_power_balance(buildings, population):
    """Calculate energy supply vs demand."""
    power_rates = {
        "1_pembangkit_listrik_tenaga_nuklir": 3000,
        "2_pembangkit_listrik_tenaga_air": 500,
        "3_pembangkit_listrik_tenaga_surya": 50,
        "4_pembangkit_listrik_tenaga_uap": 1000,
        "5_pembangkit_listrik_tenaga_gas": 1200,
        "6_pembangkit_listrik_tenaga_angin": 150,
    }
    supply = sum(buildings.get(k, 0) * r for k, r in power_rates.items())
    # Rough demand: 0.0001 MW per person + 20 MW per industrial building
    demand = population * 0.0001
    for key, count in buildings.items():
        if key not in power_rates:
            demand += count * 20
    return supply, demand


# Material Prices (Used for AI to 'buy' materials if stock is zero)
MATERIAL_PRICES = {
    BETON_KEY: 250,    # $250 per unit
    BAJA_KEY: 5000,    # $5,000 per unit
    KAYU_KEY: 150,     # $150 per unit
}

def is_affordable(option, spendable_budget, stocks):
    """
    Check if a building option is affordable.
    Supports 'Virtual Purchase': If missing materials, check if budget can cover buying them.
    """
    building_cost = option.get("biaya_pembangunan", 0)
    if building_cost <= 0:
        return False, 0
    
    req = option.get("requirements", {})
    
    # Calculate costs for missing materials
    extra_material_cost = 0
    
    # 1. Beton
    needed_beton = req.get("beton", 0)
    has_beton = stocks.get(BETON_KEY, 0)
    if has_beton < needed_beton:
        defisit = needed_beton - has_beton
        extra_material_cost += defisit * MATERIAL_PRICES[BETON_KEY]
        
    # 2. Baja
    needed_baja = req.get("baja", 0)
    has_baja = stocks.get(BAJA_KEY, 0)
    if has_baja < needed_baja:
        defisit = needed_baja - has_baja
        extra_material_cost += defisit * MATERIAL_PRICES[BAJA_KEY]
        
    # 3. Kayu
    needed_kayu = req.get("kayu", 0)
    has_kayu = stocks.get(KAYU_KEY, 0)
    if has_kayu < needed_kayu:
        defisit = needed_kayu - has_kayu
        extra_material_cost += defisit * MATERIAL_PRICES[KAYU_KEY]
        
    total_cost = building_cost + extra_material_cost
    
    if total_cost > spendable_budget:
        return False, total_cost
        
    return True, total_cost


def decide(data):
    """
    Main decision function.

    Returns: {
        "decision": "EXECUTE" | "SKIP",
        "building_key": "...",    # only if EXECUTE
        "reason": "...",
        "budget_analysis": { ... }
    }
    """
    negara = data.get("negara", "Unknown")
    budget = data.get("budget", 0)
    daily_income = data.get("daily_income", 0)
    stocks = data.get("stocks", {})
    buildings = data.get("buildings", {})
    options = data.get("options", [])
    queue_count = data.get("queue_count", 0)
    population = data.get("population", 0)

    # ── BUDGET ALLOCATION ──────────────────────────────────
    # Reserve 7 days of income as safety buffer (REDUCED from 30 to be more aggressive)
    safety_reserve = max(daily_income * 7, 0)
    spendable_budget = budget - safety_reserve

    # ECONOMIC INTELLIGENCE (Categorical Analysis)
    breakdown = data.get("income_breakdown", {})
    fiscal = breakdown.get("domestic_fiscal", 0)
    trade = breakdown.get("trade_logistics", 0)
    services = breakdown.get("service_commercial", 0)
    total_exp = breakdown.get("total_expenses", 0)

    # If budget is negative or too low, skip
    if spendable_budget <= 0:
        return {
            "decision": "SKIP",
            "reason": f"Budget terlalu rendah. Kas: {budget:,.0f}, Cadangan (7hari): {safety_reserve:,.0f}",
            "budget_analysis": {
                "budget": budget,
                "daily_income": daily_income,
                "safety_reserve": safety_reserve,
                "spendable": spendable_budget,
                "workflow": {
                    "fiscal": fiscal,
                    "trade": trade,
                    "services": services
                }
            }
        }

    # Don't build if queue already has 2 projects
    if queue_count >= 2:
        return {
            "decision": "SKIP",
            "reason": "Antrian pembangunan sudah penuh (2 proyek)."
        }

    # ── PRODUCTION ANALYSIS ────────────────────────────────
    daily_prod = calculate_daily_production(buildings)
    beton_prod = daily_prod.get(BETON_KEY, 0)
    baja_prod = daily_prod.get(BAJA_KEY, 0)
    kayu_prod = daily_prod.get(KAYU_KEY, 0)

    beton_stock = stocks.get(BETON_KEY, 0)
    baja_stock = stocks.get(BAJA_KEY, 0)
    kayu_stock = stocks.get(KAYU_KEY, 0)

    # ── POWER ANALYSIS ─────────────────────────────────────
    power_supply, power_demand = calculate_power_balance(buildings, population)
    power_surplus = power_supply - power_demand

    # ── FILTER AFFORDABLE OPTIONS ──────────────────────────
    affordable_candidates = []
    for o in options:
        is_aff, total_cost = is_affordable(o, spendable_budget, stocks)
        if is_aff:
            affordable_candidates.append((o, total_cost))

    if not affordable_candidates:
        return {
            "decision": "SKIP",
            "reason": f"Tidak ada bangunan yang terjangkau (termasuk beli material). Dana tersedia: {spendable_budget:,.0f}",
            "budget_analysis": {
                "budget": budget,
                "spendable": spendable_budget,
                "workflow": {
                    "fiscal": fiscal,
                    "trade": trade,
                    "services": services
                }
            }
        }

    # ── PRIORITY 1: MATERIAL SURVIVAL ──────────────────────
    # Build material factories if BOTH stock AND production are low
    STOCK_THRESHOLD = 100000
    PROD_THRESHOLD = 50000  # If producing < 50k/day, need more factories

    if beton_stock < STOCK_THRESHOLD and beton_prod < PROD_THRESHOLD:
        candidate = next((item for item in affordable_candidates if item[0]["key"] == BETON_KEY), None)
        if candidate:
            return _execute(candidate[0], candidate[1], "SURVIVAL: Produksi semen kritis, membangun pabrik semen.", budget, spendable_budget)

    if baja_stock < STOCK_THRESHOLD and baja_prod < PROD_THRESHOLD:
        candidate = next((item for item in affordable_candidates if item[0]["key"] == BAJA_KEY), None)
        if candidate:
            return _execute(candidate[0], candidate[1], "SURVIVAL: Produksi baja kritis, membangun smelter.", budget, spendable_budget)

    if kayu_stock < STOCK_THRESHOLD and kayu_prod < PROD_THRESHOLD:
        candidate = next((item for item in affordable_candidates if item[0]["key"] == KAYU_KEY), None)
        if candidate:
            return _execute(candidate[0], candidate[1], "SURVIVAL: Produksi kayu kritis, membangun penggergajian.", budget, spendable_budget)

    # ── PRIORITY 2: ENERGY ─────────────────────────────────
    if power_surplus < 500:
        energy_options = [item for item in affordable_candidates if item[0].get("groupId") == "kelistrikan"]
        if energy_options:
            # Pick cheapest power plant to stabilize quickly
            chosen_item = min(energy_options, key=lambda x: x[1])
            return _execute(chosen_item[0], chosen_item[1], f"ENERGY: Surplus listrik rendah ({power_surplus:.0f} MW), perlu pembangkit.", budget, spendable_budget)

    # ── PRIORITY 3: SMART GROWTH (Economic Strategy) ───────
    # If Services income is low relative to Fiscal, prioritize Services to diversify
    if services < fiscal * 0.1: # If services is less than 10% of fiscal revenue
        service_candidates = [item for item in affordable_candidates if item[0].get("groupId") in ["sosial", "infrastruktur", "komersial", "hiburan"]]
        if service_candidates:
             chosen_s, chosen_scost = random.choice(service_candidates)
             return _execute(chosen_s, chosen_scost, f"STRATEGY: Diversifikasi pendapatan jasa (Layanan Publik/Komersial) karena porsi saat ini rendah.", budget, spendable_budget)

    # Multiplier checkout (Reduced from 2.0x to 1.1x to encourage spending)
    cheapest_total_cost = min(item[1] for item in affordable_candidates)
    if spendable_budget < cheapest_total_cost * 1.1: 
        return {
            "decision": "SKIP",
            "reason": f"Menabung dulu (Batas 1.1x). Dana: {spendable_budget:,.0f}, butuh minimal: {cheapest_total_cost * 1.1:,.0f}",
            "budget_analysis": {"budget": budget, "spendable": spendable_budget}
        }

    # Weighted random sector selection for diversified growth
    sector_weights = {
        "manufaktur": 20,
        "ekstraksi": 15,
        "agrikultur": 12,
        "peternakan": 10,
        "perikanan": 8,
        "olahan_pangan": 8,
        "farmasi": 7,
        "militer": 10,
        "infrastruktur": 5,
        "pendidikan": 3,
        "kesehatan": 3,
        "kelistrikan": 5,
        "hukum": 2,
        "olahraga": 2,
        "hiburan": 2,
        "komersial": 3,
        "hunian": 3,
    }

    # Build weighted pool
    pool = []
    for o, cost in affordable_candidates:
        gid = o.get("groupId", "")
        weight = sector_weights.get(gid, 1)
        pool.extend([(o, cost)] * weight)

    if pool:
        chosen_o, chosen_cost = random.choice(pool)
        return _execute(chosen_o, chosen_cost, f"GROWTH: Diversifikasi ekonomi, membangun {chosen_o.get('deskripsi', chosen_o['key'])} (sektor {chosen_o.get('groupId', '?')}).", budget, spendable_budget)

    return {"decision": "SKIP", "reason": "Tidak ada kandidat pembangunan yang layak."}


def _execute(option, total_cost, reason, budget, spendable):
    """Helper to format an EXECUTE response."""
    building_cost = option.get("biaya_pembangunan", 0)
    extra_material_cost = total_cost - building_cost
    
    return {
        "decision": "EXECUTE",
        "building_key": option["key"],
        "reason": reason,
        "budget_analysis": {
            "budget": budget,
            "spendable": spendable,
            "building_cost": building_cost,
            "material_purchase_cost": extra_material_cost,
            "total_deduction": total_cost,
            "remaining_after": spendable - total_cost
        }
    }


if __name__ == "__main__":
    try:
        input_data = json.load(sys.stdin)
        result = decide(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"decision": "SKIP", "error": str(e)}))
