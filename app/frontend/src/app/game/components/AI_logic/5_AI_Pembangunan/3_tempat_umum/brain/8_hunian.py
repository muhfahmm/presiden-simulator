import sys, json, random
def decide():
    try:
        input_data = json.load(sys.stdin)
        metrics = input_data.get("metrics", {})
        budget = input_data.get("budget", 0)
        options = [o for o in input_data.get("options", []) if o.get("groupId") == "hunian"]
        
        if not options: return {"decision": "SKIP"}

        # Logic: If housing index is low, build houses
        if metrics.get("housing_index", 100) < 95:
            affordable = [o for o in options if o.get("biaya_pembangunan", 0) <= budget]
            if affordable:
                # Prioritize affordable housing (Subsidi) if index is very low
                if metrics.get("housing_index") < 80:
                    subsidi = [o for o in affordable if "subsidi" in o["key"].lower()]
                    if subsidi: return {"decision": "EXECUTE", "building_key": subsidi[0]["key"]}
                
                return {"decision": "EXECUTE", "building_key": random.choice(affordable)["key"]}
        
        return {"decision": "SKIP"}
    except: return {"decision": "SKIP"}

if __name__ == "__main__": print(json.dumps(decide()))
