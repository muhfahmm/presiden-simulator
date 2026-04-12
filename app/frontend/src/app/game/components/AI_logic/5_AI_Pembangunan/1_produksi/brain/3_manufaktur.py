import sys
import json
import random

def decide():
    try:
        input_data = json.load(sys.stdin)
        budget = input_data.get("budget", 0)
        options = [o for o in input_data.get("options", []) if o.get("groupId") == "manufaktur"]
        
        if not options: return {"decision": "SKIP"}

        def is_affordable(option):
            if option.get("biaya_pembangunan", 0) > budget: return False
            req = option.get("requirements", {})
            if stocks.get("5_pabrik_semen", 0) < req.get("beton", 0): return False
            if stocks.get("12_tambang_bijih_besi", 0) < req.get("baja", 0): return False
            if stocks.get("6_penggergajian_kayu", 0) < req.get("kayu", 0): return False
            return True

        affordable = [o for o in options if is_affordable(o)]
        if not affordable:
            return {"decision": "SKIP", "reason": "Insufficient budget or materials"}

        # SMART LOGIC: If material stocks are low, PRIORITIZE building those factories
        # We check keys: 5_pabrik_semen (Beton), 6_penggergajian_kayu (Kayu)
        low_beton = stocks.get("5_pabrik_semen", 0) < 100000
        low_kayu = stocks.get("6_penggergajian_kayu", 0) < 100000
        
        if low_beton:
            cement_factory = next((o for o in affordable if o["key"] == "5_pabrik_semen"), None)
            if cement_factory: return {"decision": "EXECUTE", "building_key": "5_pabrik_semen"}
            
        if low_kayu:
            sawmill = next((o for o in affordable if o["key"] == "6_penggergajian_kayu"), None)
            if sawmill: return {"decision": "EXECUTE", "building_key": "6_penggergajian_kayu"}

        # If we have materials, or can't build material factories, pick random manufacturing
        if budget > 150000000:
            chosen = random.choice(affordable)
            return {"decision": "EXECUTE", "building_key": chosen["key"]}
        
        return {"decision": "SKIP"}
    except: return {"decision": "SKIP"}

if __name__ == "__main__":
    print(json.dumps(decide()))
