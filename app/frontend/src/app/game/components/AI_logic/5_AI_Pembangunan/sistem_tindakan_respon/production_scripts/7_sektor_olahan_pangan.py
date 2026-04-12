import sys
import json

def calculate_production():
    try:
        input_data = json.load(sys.stdin)
        buildings = input_data.get("buildings", {})
        
        # Rates from database metadata (Olahan Pangan)
        rates = {
            "1_pabrik_air_mineral": 250000,
            "2_pabrik_gula": 45000,
            "3_pabrik_roti": 150000,
            "4_pabrik_pengolahan_daging": 12000,
            "5_pabrik_mie_instan": 550000,
            "6_pabrik_minyak_goreng": 95000,
            "7_pabrik_pengolahan_susu": 180000,
            "8_pabrik_pakan_ternak": 85000,
            "9_pabrik_pengalengan_ikan": 25000,
            "10_pabrik_pengolahan_kopi_teh": 35000
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
