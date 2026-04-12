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
            chosen = random.choice(options)
            if chosen.get("biaya_pembangunan", 0) <= budget:
                return {"decision": "EXECUTE", "building_key": chosen["key"]}
        
        return {"decision": "SKIP"}
    except: return {"decision": "SKIP"}

import random
if __name__ == "__main__":
    print(json.dumps(decide()))
