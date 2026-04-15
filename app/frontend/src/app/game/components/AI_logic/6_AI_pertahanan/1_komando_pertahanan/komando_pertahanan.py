"""
Komando Pertahanan AI Decision Engine
Analyzes need for: Pusat Komando Strategis, Bunker Komando, Pusat Komando Wilayah
"""
import sys
import json

def analyze_komando(data):
    """
    Decision logic for defense command infrastructure.
    
    Priority weights:
    - Population > 10M without strategic command -> CRITICAL
    - Threat level > 70 without bunker -> HIGH
    - Multiple regions without regional command -> MEDIUM
    """
    budget = data.get("budget", 0)
    population = data.get("population", 0)
    threat_level = data.get("threat_level", 50)
    stability = data.get("stability", 70)
    
    # Current defense assets
    pusat_komando = data.get("pusat_komando_strategis", 0)
    bunker = data.get("bunker_komando", 0)
    komando_wilayah = data.get("pusat_komando_wilayah", 0)
    
    # Existing queue count
    queue_count = data.get("queue_count", 0)
    defense_budget_ratio = data.get("defense_budget_ratio", 0.05)
    
    # Allocatable budget for this sector (5% of defense budget)
    allocatable = budget * defense_budget_ratio
    
    decisions = []
    
    # === Rule 1: Strategic Command Center ===
    # Every nation with pop > 5M needs at least 1 pusat komando
    pop_millions = population / 1_000_000
    needed_komando = max(1, int(pop_millions / 20))  # 1 per 20M people
    
    if pusat_komando < needed_komando and allocatable >= 900000:
        priority_score = 95 if pusat_komando == 0 else 60
        if threat_level > 70:
            priority_score += 15
        decisions.append({
            "building_key": "pusat_komando_strategis",
            "priority": priority_score,
            "cost": 900000,
            "reason": f"Strategic command needed (have {pusat_komando}, need {needed_komando})"
        })
    
    # === Rule 2: Bunker Komando ===
    # High-threat nations need bunkers for continuity of government
    needed_bunkers = max(1, int(threat_level / 40))  # More bunkers at higher threat
    
    if bunker < needed_bunkers and allocatable >= 637500:
        priority_score = 85 if threat_level > 70 else 50
        if stability < 50:
            priority_score += 20  # Unstable nations need more protection
        decisions.append({
            "building_key": "bunker_komando",
            "priority": priority_score,
            "cost": 637500,
            "reason": f"Bunker needed for threat level {threat_level:.0f} (have {bunker})"
        })
    
    # === Rule 3: Regional Command Centers ===
    # Scale with population — 1 per 10M people
    needed_wilayah = max(1, int(pop_millions / 10))
    
    if komando_wilayah < needed_wilayah and allocatable >= 337500:
        priority_score = 70 if komando_wilayah == 0 else 40
        decisions.append({
            "building_key": "pusat_komando_wilayah",
            "priority": priority_score,
            "cost": 337500,
            "reason": f"Regional command needed (have {komando_wilayah}, need {needed_wilayah})"
        })
    
    # === Throttle: Max 1 project in queue ===
    if queue_count >= 2:
        return {"decision": "WAIT", "reason": "Queue full for komando sector"}
    
    if not decisions:
        return {"decision": "SKIP", "reason": "No komando needs detected"}
    
    # Pick highest priority
    decisions.sort(key=lambda x: x["priority"], reverse=True)
    best = decisions[0]
    
    if best["cost"] > allocatable:
        return {"decision": "SKIP", "reason": f"Budget insufficient ({allocatable:.0f} < {best['cost']})"}
    
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
        result = analyze_komando(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"decision": "SKIP", "error": str(e)}))
