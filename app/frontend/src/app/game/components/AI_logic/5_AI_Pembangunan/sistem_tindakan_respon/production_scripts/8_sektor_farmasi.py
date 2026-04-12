import sys
import json

def calculate_production():
    try:
        input_data = json.load(sys.stdin)
        buildings = input_data.get("buildings", {})
        
        # Rates from database metadata (Farmasi)
        rates = {
            "1_pabrik_farmasi": 45000
        }
        
        deltas = {}
        for key, rate in rates.items():
            count = buildings.get(key, 0)
            if count > 0:
                deltas[key] = count * rate
            
        return {"deltas": deltas}
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    print(json.dumps(calculate_production()))
