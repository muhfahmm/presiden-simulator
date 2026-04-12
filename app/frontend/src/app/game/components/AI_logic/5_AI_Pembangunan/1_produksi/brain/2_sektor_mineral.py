import sys
import json

def decide():
    try:
        input_data = json.load(sys.stdin)
        budget = input_data.get("budget", 0)
        options = [o for o in input_data.get("options", []) if o.get("groupId") == "ekstraksi"]
        
        if not options: return {"decision": "SKIP"}

        # Basic expansion logic: Expand if affordable and budget is healthy
        if budget > 200000000: # 200M cap
            def is_affordable(option):
                if option.get("biaya_pembangunan", 0) > budget: return False
                req = option.get("requirements", {})
                if stocks.get("5_pabrik_semen", 0) < req.get("beton", 0): return False
                if stocks.get("12_tambang_bijih_besi", 0) < req.get("baja", 0): return False
                if stocks.get("6_penggergajian_kayu", 0) < req.get("kayu", 0): return False
                return True

            affordable = [o for o in options if is_affordable(o)]
            if affordable:
                chosen = random.choice(affordable)
                return {"decision": "EXECUTE", "building_key": chosen["key"]}
        
        return {"decision": "SKIP", "reason": "Insufficient budget or materials"}
    except: return {"decision": "SKIP"}

import random
if __name__ == "__main__":
    print(json.dumps(decide()))
