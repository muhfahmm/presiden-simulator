import sys
import json

def calculate_production():
    try:
        input_data = json.load(sys.stdin)
        buildings = input_data.get("buildings", {})
        
        # Rates from database metadata
        rates = {
            "1_pabrik_elektronik": 150,
            "2_pabrik_mobil": 5500,
            "3_pabrik_motor": 18000,
            "4_smelter": 35000,
            "5_pabrik_semen": 95000,
            "6_penggergajian_kayu": 32000,
            "7_pabrik_pupuk": 42000
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
