import sys
import json

def calculate_production():
    try:
        input_data = json.load(sys.stdin)
        buildings = input_data.get("buildings", {})
        
        # Rates from database metadata
        rates = {
            "1_tambang_emas": 150,
            "2_tambang_uranium": 100,
            "3_tambang_batu_bara": 15000,
            "4_sumur_minyak": 25000,
            "5_sumur_gas": 5000,
            "6_tambang_garam": 10000,
            "7_tambang_nikel": 12000,
            "8_tambang_litium": 8000,
            "9_tambang_tembaga": 14000,
            "10_tambang_aluminium": 18000,
            "11_tambang_ltj": 500,
            "12_tambang_bijih_besi": 25000
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
