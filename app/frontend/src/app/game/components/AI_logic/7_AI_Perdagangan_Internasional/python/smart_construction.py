"""
═══════════════════════════════════════════════════════════
AI SMART CONSTRUCTION BRAIN
President Simulator — Polyglot Architecture

Input:  JSON via stdin  (nations states, building types)
Output: JSON via stdout (construction decisions per nation)

Priority Logic:
- Low happiness → Public services (Pendidikan, Kesehatan, Hiburan)
- Low stability → Defense (Intelijen, Armada Militer/Polisi)
- High budget → Production (Manufaktur, Agrikultur, for income)
- Balanced → Infrastructure (Roads, Airports, Ports)
═══════════════════════════════════════════════════════════
"""

import sys
import json
import random

# ─── Priority Scoring ───

SECTOR_WEIGHTS = {
    # Public Services (boost happiness)
    "Pendidikan":    {"happiness_boost": 4.0, "stability_boost": 0.5},
    "Kesehatan":     {"happiness_boost": 4.0, "stability_boost": 0.5},
    "Hiburan":       {"happiness_boost": 3.0, "stability_boost": 0.0},
    "Infrastruktur": {"happiness_boost": 2.5, "stability_boost": 1.0},
    "Hunian":        {"happiness_boost": 3.0, "stability_boost": 0.5},
    "Olahraga":      {"happiness_boost": 2.0, "stability_boost": 0.0},
    "Komersial":     {"happiness_boost": 1.5, "stability_boost": 0.5},
    "Hukum":         {"happiness_boost": 1.0, "stability_boost": 2.0},
    
    # Defense (boost stability)
    "Intelijen":              {"happiness_boost": 0.0, "stability_boost": 5.0},
    "Armada Militer":         {"happiness_boost": 0.0, "stability_boost": 4.0},
    "Armada Polisi":          {"happiness_boost": 0.5, "stability_boost": 4.0},
    "Komando Pertahanan":     {"happiness_boost": 0.0, "stability_boost": 3.5},
    "Manajemen Pertahanan":   {"happiness_boost": 0.0, "stability_boost": 3.0},
    
    # Production (long-term income)
    "Manufaktur":        {"happiness_boost": 1.0, "stability_boost": 0.5},
    "Agrikultur":        {"happiness_boost": 1.5, "stability_boost": 0.5},
    "Peternakan":        {"happiness_boost": 1.0, "stability_boost": 0.0},
    "Perikanan":         {"happiness_boost": 1.0, "stability_boost": 0.0},
    "Olahan Pangan":     {"happiness_boost": 1.5, "stability_boost": 0.0},
    "Farmasi":           {"happiness_boost": 1.5, "stability_boost": 0.0},
    "Mineral Kritis":    {"happiness_boost": 0.5, "stability_boost": 0.5},
    "Listrik Nasional":  {"happiness_boost": 1.0, "stability_boost": 1.0},
}


def score_building(nation: dict, building: dict) -> float:
    """Score a building based on national priorities."""
    score = 0.0
    sector = building.get("sector", "")
    biaya = building.get("biaya", 0)
    happiness = nation.get("happiness", 50)
    stability = nation.get("stability", 75)
    budget = nation.get("budget", 0)
    
    weights = SECTOR_WEIGHTS.get(sector, {"happiness_boost": 0.5, "stability_boost": 0.5})
    
    # ─── Need-based scoring ───
    
    # Critical happiness need (< 35)
    if happiness < 35:
        score += weights["happiness_boost"] * 2.0
    # Low happiness (35-50)
    elif happiness < 50:
        score += weights["happiness_boost"] * 1.0
    # Good happiness (50+) — reduce public service priority
    else:
        score += weights["happiness_boost"] * 0.3
    
    # Critical stability need (< 40)
    if stability < 40:
        score += weights["stability_boost"] * 2.5
    # Low stability (40-60)
    elif stability < 60:
        score += weights["stability_boost"] * 1.0
    # Good stability (60+) — reduce defense priority
    else:
        score += weights["stability_boost"] * 0.2
    
    # ─── Budget-based scoring ───
    
    # Rich nations invest in production (long-term)
    if budget > 50000:
        if sector in ["Manufaktur", "Agrikultur", "Peternakan", "Perikanan", "Mineral Kritis", "Listrik Nasional"]:
            score += 3.0
    elif budget > 10000:
        if sector in ["Manufaktur", "Agrikultur"]:
            score += 1.5
    
    # ─── Affordability penalty ───
    if biaya > 0:
        if biaya > budget * 0.5:
            score -= 3.0  # Too expensive relative to budget
        elif biaya > budget * 0.3:
            score -= 1.0
    
    # Can't afford at all → hard reject
    if biaya > budget:
        return -100.0
    
    # ─── Random variety ───
    score += random.uniform(-0.5, 0.5)
    
    return score


def decide_for_nation(nation_name: str, nation: dict, building_types: list) -> dict | None:
    """Decide what a single NPC nation should build."""
    budget = nation.get("budget", 0)
    
    # Budget gate: if too poor, don't build anything (let trade handle it)
    if budget < 50:
        return None
    
    # Score all buildings
    scored = []
    for b in building_types:
        biaya = b.get("biaya", 0)
        if biaya <= 0 or biaya > budget:
            continue
        
        s = score_building(nation, b)
        if s > -50:  # Skip hard rejects
            scored.append((s, b))
    
    if not scored:
        return None
    
    # Sort by score descending
    scored.sort(key=lambda x: -x[0])
    
    # Pick from top 5 with weighted random (favor top but allow variety)
    top = scored[:5]
    weights = [max(0.1, s + 10) for s, _ in top]  # Shift to positive
    total = sum(weights)
    r = random.random() * total
    cumulative = 0
    chosen = top[0][1]
    for w, (_, b) in zip(weights, top):
        cumulative += w
        if r <= cumulative:
            chosen = b
            break
    
    # Determine quantity (1-3 based on budget)
    biaya = chosen.get("biaya", 1)
    max_qty = min(3, int(budget * 0.2 / max(1, biaya)))
    qty = max(1, max_qty)
    cost = biaya * qty
    
    # Generate reason
    happiness = nation.get("happiness", 50)
    stability = nation.get("stability", 75)
    sector = chosen.get("sector", "")
    
    if happiness < 40 and sector in ["Pendidikan", "Kesehatan", "Hiburan", "Infrastruktur"]:
        reason = f"Kebahagiaan rendah ({happiness:.0f}%), prioritas layanan publik"
    elif stability < 50 and sector in ["Intelijen", "Armada Militer", "Armada Polisi", "Manajemen Pertahanan", "Komando Pertahanan"]:
        reason = f"Stabilitas rendah ({stability:.0f}%), prioritas pertahanan"
    elif budget > 30000:
        reason = f"Anggaran tinggi, investasi sektor {sector.lower()}"
    else:
        reason = f"Pembangunan strategis sektor {sector.lower()}"
    
    return {
        "nation": nation_name,
        "building_key": chosen.get("dataKey", chosen.get("key", "")),
        "building_name": chosen.get("name", ""),
        "sector": sector,
        "quantity": qty,
        "cost": cost,
        "reason": reason
    }


def main():
    try:
        raw = sys.stdin.read()
        if not raw.strip():
            print("[]")
            return
        
        data = json.loads(raw)
        nations = data.get("nations", {})
        building_types = data.get("buildingTypes", [])
        
        if not nations or not building_types:
            print("[]")
            return
        
        results = []
        for name, state in nations.items():
            decision = decide_for_nation(name, state, building_types)
            if decision:
                results.append(decision)
        
        # Limit output to 50 decisions max
        if len(results) > 50:
            random.shuffle(results)
            results = results[:50]
        
        print(json.dumps(results))
    except Exception as e:
        print(json.dumps([{"error": str(e)}]))


if __name__ == "__main__":
    main()
