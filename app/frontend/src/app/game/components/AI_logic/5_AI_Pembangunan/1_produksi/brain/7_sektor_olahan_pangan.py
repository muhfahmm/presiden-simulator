import sys, json, random
def decide():
    try:
        input_data = json.load(sys.stdin)
        budget = input_data.get("budget", 0)
        stocks = input_data.get("stocks", {})
        options = [o for o in input_data.get("options", []) if o.get("groupId") == "olahan_pangan"]
        if not options: return {"decision": "SKIP"}

        def is_affordable(option):
            if option.get("biaya_pembangunan", 0) > budget: return False
            req = option.get("requirements", {})
            if stocks.get("5_pabrik_semen", 0) < req.get("beton", 0): return False
            if stocks.get("12_tambang_bijih_besi", 0) < req.get("baja", 0): return False
            if stocks.get("6_penggergajian_kayu", 0) < req.get("kayu", 0): return False
            return True

        affordable = [o for o in options if is_affordable(o)]
        if affordable and budget > 120000000:
            chosen = random.choice(affordable)
            return {"decision": "EXECUTE", "building_key": chosen["key"]}
        
        return {"decision": "SKIP"}
    except: return {"decision": "SKIP"}
if __name__ == "__main__": print(json.dumps(decide()))
