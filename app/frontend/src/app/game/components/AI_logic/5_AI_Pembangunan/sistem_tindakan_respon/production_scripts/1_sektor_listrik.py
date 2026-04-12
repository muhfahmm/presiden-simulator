import sys
import json

def calculate_production():
    try:
        input_data = json.load(sys.stdin)
        buildings = input_data.get("buildings", {})
        
        # Metadata rates (MW per unit)
        rates = {
            "3_pembangkit_listrik_tenaga_surya": 50,
            "6_pembangkit_listrik_tenaga_angin": 150,
            "2_pembangkit_listrik_tenaga_air": 500,
            "4_pembangkit_listrik_tenaga_uap": 1000,
            "5_pembangkit_listrik_tenaga_gas": 1200,
            "1_pembangkit_listrik_tenaga_nuklir": 3000
        }
        
        total_mw = 0
        for key, rate in rates.items():
            count = buildings.get(key, 0)
            total_mw += count * rate
            
        return {"total_mw": total_mw}
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    print(json.dumps(calculate_production()))
