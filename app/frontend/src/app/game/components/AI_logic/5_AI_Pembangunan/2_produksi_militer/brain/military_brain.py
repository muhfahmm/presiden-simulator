import sys
import json

def decide_military_building(data):
    """
    AI Decision Logic for Military Industrial Complex.
    Prioritizes arms production if tension is high or military power is low.
    """
    negara = data.get('negara', 'Unknown')
    budget = data.get('budget', 0)
    military_options = data.get('options', [])
    geopolitics = data.get('geopolitics', {}) # { global_tension: 0-100, military_rank: 1-200 }

    # Criteria: Budget check
    if budget < 200000:
        return {"decision": "SKIP", "reason": "Anggaran pertahanan masih diprioritaskan untuk pemeliharaan rutin."}

    # Criteria: Tension check
    # If tension is low and rank is decent, maybe skip and save money.
    tension = geopolitics.get('global_tension', 50)
    rank = geopolitics.get('military_rank', 100)

    if tension < 30 and rank < 50:
        return {"decision": "SKIP", "reason": "Postur pertahanan sudah memadai untuk kondisi geopolitik saat ini."}

    # Strategy: Prioritize high production arms (Ammo/Base factories)
    # Sort options by production/cost ratio
    affordable = [o for o in military_options if o['cost'] <= (budget * 0.4)]
    if not affordable:
        return {"decision": "SKIP", "reason": "Biaya pembangunan pabrik militer melebihi pagu anggaran saat ini."}

    chosen = sorted(affordable, key=lambda x: x['tarif'] / x['cost'], reverse=True)[0]

    return {"decision": "EXECUTE", "building_key": chosen['key'], "reason": "Peningkatan kapasitas industri pertahanan nasional (Tensi Global: " + str(tension) + ")"}

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            sys.exit(0)
        data = json.loads(input_data)
        result = decide_military_building(data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
