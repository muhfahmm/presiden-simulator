"""
Intelijen AI Decision Engine
Analyzes need for: Sistem Satelit, Jaringan Radar, Operasi Siber
"""
import sys
import json

def analyze_intelijen(data):
    """
    Decision logic for intelligence infrastructure.
    
    Priority weights:
    - No radar + threat > 50 -> CRITICAL
    - No cyber + tech level > 2 -> HIGH  
    - No satellite + budget > 500M -> MEDIUM (expensive long-term investment)
    """
    budget = data.get("budget", 0)
    population = data.get("population", 0)
    threat_level = data.get("threat_level", 50)
    tech_level = data.get("tech_level", 1)  # 1=low, 2=medium, 3=high
    
    # Current intel assets
    satelit = data.get("sistem_satelit", 0)
    radar = data.get("jaringan_radar", 0)
    siber = data.get("operasi_siber", 0)
    
    queue_count = data.get("queue_count", 0)
    defense_budget_ratio = data.get("defense_budget_ratio", 0.10)
    allocatable = budget * defense_budget_ratio
    
    decisions = []
    
    # === Rule 1: Radar Network (Foundation of Intel) ===
    # Every nation needs at least 1 radar network
    pop_millions = population / 1_000_000
    needed_radar = max(1, int(pop_millions / 25))  # 1 per 25M
    
    if radar < needed_radar and allocatable >= 63750000:
        priority_score = 90 if radar == 0 else 55
        if threat_level > 60:
            priority_score += 20
        decisions.append({
            "building_key": "jaringan_radar",
            "priority": priority_score,
            "cost": 63750000,
            "reason": f"Radar needed for detection (have {radar}, need {needed_radar}, threat: {threat_level:.0f})"
        })
    
    # === Rule 2: Cyber Operations ===
    # Nations with tech_level >= 2 should have cyber capability
    needed_siber = 1 if tech_level >= 2 else 0
    if tech_level >= 3:
        needed_siber = max(2, int(pop_millions / 50))
    
    if siber < needed_siber and allocatable >= 48750000:
        priority_score = 80 if siber == 0 else 45
        if threat_level > 70:
            priority_score += 15
        decisions.append({
            "building_key": "operasi_siber",
            "priority": priority_score,
            "cost": 48750000,
            "reason": f"Cyber ops needed (tech level {tech_level}, have {siber})"
        })
    
    # === Rule 3: Satellite System (Most Expensive) ===
    # Only for nations with budget > 200B and tech >= 2
    needed_satelit = 1 if budget > 200_000_000_000 and tech_level >= 2 else 0
    
    if satelit < needed_satelit and allocatable >= 112500000:
        priority_score = 70 if satelit == 0 else 30
        decisions.append({
            "building_key": "sistem_satelit",
            "priority": priority_score,
            "cost": 112500000,
            "reason": f"Satellite intelligence needed (budget tier qualifies)"
        })
    
    # === Throttle ===
    if queue_count >= 1:
        return {"decision": "WAIT", "reason": "Intel queue active"}
    
    if not decisions:
        return {"decision": "SKIP", "reason": "No intel needs detected"}
    
    decisions.sort(key=lambda x: x["priority"], reverse=True)
    best = decisions[0]
    
    if best["cost"] > allocatable:
        return {"decision": "SKIP", "reason": f"Budget insufficient for intel ({allocatable:.0f} < {best['cost']})"}
    
    return {
        "decision": "EXECUTE",
        "building_key": best["building_key"],
        "quantity": 1,
        "cost": best["cost"],
        "priority": best["priority"],
        "reason": best["reason"]
    }

if __name__ == "__main__":
    try:
        input_data = json.load(sys.stdin)
        result = analyze_intelijen(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"decision": "SKIP", "error": str(e)}))
