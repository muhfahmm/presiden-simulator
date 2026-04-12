import sys
import json

def calculate_production():
    try:
        input_data = json.load(sys.stdin)
        buildings = input_data.get("buildings", {})
        
        # Rates from database metadata (Agrikultur)
        rates = {
            "1_sawah_padi": 95000,
            "2_ladang_gandum": 75000,
            "3_ladang_jagung": 82000,
            "4_ladang_umbi": 120000,
            "5_ladang_kedelai": 55000,
            "6_perkebunan_sawit": 150000,
            "7_perkebunan_teh": 15000,
            "8_perkebunan_kopi": 12000,
            "9_perkebunan_kakao": 10000,
            "10_perkebunan_tebu": 85000,
            "11_kebun_sayur": 65000,
            "12_perkebunan_karet": 35000,
            "13_perkebunan_kapas": 60000,
            "14_perkebunan_tembakau": 25000
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
