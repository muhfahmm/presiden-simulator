import sys, json, random
def decide():
    try:
        input_data = json.load(sys.stdin)
        budget = input_data.get("budget", 0)
        # Groups: pabrik_militer
        options = [o for o in input_data.get("options", []) if o.get("groupId") == "pabrik_militer"]
        if not options: return {"decision": "SKIP"}
        # Logic: Always expand military if budget allows (NPCs are hawkish in this simulation)
        affordable = [o for o in options if o.get("biaya_pembangunan", 0) <= budget]
        if affordable: return {"decision": "EXECUTE", "building_key": random.choice(affordable)["key"]}
        return {"decision": "SKIP"}
    except: return {"decision": "SKIP"}
if __name__ == "__main__": print(json.dumps(decide()))
