# This slide represents the creation of 3 separate files for Olahraga, Komersial, and Hiburan.
# I will output them one by one but they share similar logic: Revenue generation.

# --- 5_olahraga.py ---
import sys, json, random
def decide_olahraga():
    try:
        input_data = json.load(sys.stdin)
        budget = input_data.get("budget", 0)
        options = [o for o in input_data.get("options", []) if o.get("groupId") == "olahraga"]
        if not options: return {"decision": "SKIP"}
        affordable = [o for o in options if o.get("biaya_pembangunan", 0) <= budget]
        if affordable and budget > 500000000:
            return {"decision": "EXECUTE", "building_key": random.choice(affordable)["key"]}
        return {"decision": "SKIP"}
    except: return {"decision": "SKIP"}
if __name__ == "__main__": print(json.dumps(decide_olahraga()))
