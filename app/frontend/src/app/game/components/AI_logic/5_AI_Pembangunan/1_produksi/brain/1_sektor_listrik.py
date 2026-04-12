import sys
import json
import random

def decide():
    try:
        input_data = json.load(sys.stdin)
        metrics = input_data.get("metrics", {})
        budget = input_data.get("budget", 0)
        stocks = input_data.get("stocks", {})
        options = input_data.get("options", [])

        # Filter for Electricity only (groupId: kelistrikan)
        electricity_options = [o for o in options if o.get("groupId") == "kelistrikan"]
        
        if not electricity_options:
            return {"decision": "SKIP", "reason": "No electricity options"}

        # Logic: If surplus is low, build power plant
        if metrics.get("power_surplus", 0) < 500:
            def is_affordable(option):
                # Check Budget
                if option.get("biaya_pembangunan", 0) > budget:
                    return False
                
                # Check Materials
                req = option.get("requirements", {})
                if stocks.get("5_pabrik_semen", 0) < req.get("beton", 0):
                    return False
                if stocks.get("12_tambang_bijih_besi", 0) < req.get("baja", 0):
                    return False
                if stocks.get("6_penggergajian_kayu", 0) < req.get("kayu", 0):
                    return False
                
                return True

            affordable = [o for o in electricity_options if is_affordable(o)]
            
            if affordable:
                # Pick the one that produces most power
                chosen = sorted(affordable, key=lambda x: x.get("produksi", 0), reverse=True)[0]
                return {"decision": "EXECUTE", "building_key": chosen["key"]}
            else:
                return {"decision": "SKIP", "reason": "Insufficient budget or materials for available power plants"}
        
        return {"decision": "SKIP", "reason": "Power surplus is sufficient"}
    except Exception as e:
        return {"decision": "ERROR", "message": str(e)}

if __name__ == "__main__":
    print(json.dumps(decide()))
