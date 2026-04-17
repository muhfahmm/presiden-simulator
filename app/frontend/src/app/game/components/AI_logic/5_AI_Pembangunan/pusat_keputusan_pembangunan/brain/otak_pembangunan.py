import sys
import json
import random
from advisor.construction_advisor import ConstructionAdvisor
from strategist.construction_strategist import ConstructionStrategist
from hands.news_generator import NewsGenerator

# CONFIGURATION
HOUSING_CAPACITIES = {"apartemen": 6000, "rumah_subsidi": 5, "mansion": 10}
HOUSING_TARGETS = {"rumah_subsidi": 0.55, "apartemen": 0.40, "mansion": 0.05}
HOUSING_LABELS = {
    "rumah_subsidi": "Hunian Subsidi",
    "apartemen": "Apartemen Modern",
    "mansion": "Mansion Mewah"
}
MATERIAL_PRICES = {"5_pabrik_semen": 250, "4_smelter": 5000, "6_penggergajian_kayu": 150}

def main():
    try:
        data = json.load(sys.stdin)
    except Exception as e:
        print(json.dumps({"decision": "SKIP", "error": f"Invalid input: {str(e)}"}))
        return

    # Initialize Modules
    advisor = ConstructionAdvisor(HOUSING_TARGETS, HOUSING_CAPACITIES)
    strategist = ConstructionStrategist(MATERIAL_PRICES)
    hands = NewsGenerator(HOUSING_LABELS)

    # Data Extract
    country_name = data.get("negara", "Unknown")
    budget = data.get("budget", 0)
    income = data.get("income", 0)
    population = data.get("pop", 0)
    buildings = data.get("buildings", {})
    stocks = data.get("stocks", {})
    options = data.get("options", [])

    # 1. ANALYZE (Advisor)
    needs = advisor.analyze_needs(population, buildings, stocks)
    best_target = advisor.find_best_candidate(needs)
    
    if not best_target:
        return print(json.dumps({"decision": "SKIP", "reason": "Semua kebutuhan terpenuhi / tidak ada prioritas."}))

    # 2. STRATEGY (Strategist)
    is_crisis = needs[best_target]["coverage"] < 0.5
    spendable = strategist.get_spendable_budget(budget, income, is_crisis)
    
    # Simple check for building option metadata
    option = next((o for o in options if o["key"] == best_target), None)
    if not option:
        return print(json.dumps({"decision": "SKIP", "reason": f"Detail bangunan {best_target} tidak ditemukan."}))

    unit_cost = strategist.calculate_cost(best_target, option.get("biaya_pembangunan",0), option.get("requirements",{}), stocks)
    batch_size = strategist.determine_batch_size(spendable, unit_cost, is_crisis)

    if batch_size <= 0:
        return print(json.dumps({"decision": "SKIP", "reason": "Dana cadangan tidak cukup untuk batch minimum."}))

    # 3. NARRATION (Hands)
    total_cost = unit_cost * batch_size
    narrative = hands.generate_narration(country_name, option.get("label", best_target), batch_size, total_cost, is_crisis)

    # 4. RESULT
    result = {
        "decision": "EXECUTE",
        "building_key": best_target,
        "quantity": batch_size,
        "cost": total_cost,
        "reason": narrative,
        "is_crisis": is_crisis
    }
    print(json.dumps(result))

if __name__ == "__main__":
    main()
