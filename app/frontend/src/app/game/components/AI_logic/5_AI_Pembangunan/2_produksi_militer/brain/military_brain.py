import sys
import json

def decide_military_building(data):
    """
    AI Decision Logic for Military Industrial Complex.
    Prioritizes arms production if tension is high or military power is low.
    """
    negara = data.get('negara', 'Unknown')
    budget = data.get('budget', 0)
    stocks = data.get('stocks', {})
    military_options = data.get('options', [])
    geopolitics = data.get('geopolitics', {}) # { global_tension: 0-100, military_rank: 1-200 }

    def check_resources(option):
        # Budget Check
        if option.get('cost', 0) > budget:
            return False
            
        # Material Check
        req = option.get("requirements", {})
        if stocks.get("5_pabrik_semen", 0) < req.get("beton", 0):
            return False
        if stocks.get("4_smelter", 0) < req.get("baja", 0):
            return False
        if stocks.get("6_penggergajian_kayu", 0) < req.get("kayu", 0):
            return False
        return True

    # Criteria: Budget check
    if budget < 100000:
        return {"decision": "SKIP", "reason": "Anggaran pertahanan sangat minim, menunda ekspansi industri militer."}

    # Criteria: Tension check
    # If tension is low and rank is decent, maybe skip and save money.
    tension = geopolitics.get('global_tension', 50)
    rank = geopolitics.get('military_rank', 100)

    if tension < 30 and rank < 50:
        return {"decision": "SKIP", "reason": "Postur pertahanan sudah memadai untuk kondisi geopolitik saat ini."}

    # Strategy: Prioritize high production arms (Ammo/Base factories)
    # Sort options by production/cost ratio
    affordable = [o for o in military_options if check_resources(o)]
    if not affordable:
        return {"decision": "SKIP", "reason": "Bahan bangunan atau anggaran gudang belum cukup untuk pabrik militer baru."}

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
