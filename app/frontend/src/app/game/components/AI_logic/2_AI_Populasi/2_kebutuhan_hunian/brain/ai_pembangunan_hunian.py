import sys
import json

def ai_pembangunan_hunian():
    try:
        # Read input from stdin
        input_data = json.load(sys.stdin)
        
        population = input_data.get("population", 0)
        budget = input_data.get("budget", 0)
        stock = input_data.get("stock", {}) # {beton: X, kayu: Y, baja: Z}
        housing_data = input_data.get("housing_data", {})
        
        # Capacities & Costs (Mapped from Database & MaterialRequirement.tsx)
        # 1. Rumah Subsidi (5 jiwa)
        CAP_SUBSIDI = 5
        COST_SUBSIDI = 250000000 
        
        # 2. Apartemen (6000 jiwa)
        CAP_APARTEMEN = 6000
        COST_APARTEMEN = 5000000000
        
        # 3. Mansion (10 jiwa)
        CAP_MANSION = 10
        COST_MANSION = 15000000000
        
        built_subsidi = housing_data.get("rumah_subsidi", 0)
        built_apartemen = housing_data.get("apartemen", 0)
        built_mansion = housing_data.get("mansion", 0)
        
        total_capacity = (built_subsidi * CAP_SUBSIDI) + (built_apartemen * CAP_APARTEMEN) + (built_mansion * CAP_MANSION)
        current_deficit = population - total_capacity
        
        # PROACTIVE FORECASTING: Predict needs for the next 30 days
        population_growth = input_data.get("population_growth", 0)
        projected_population = population + (population_growth * 30)
        projected_deficit = projected_population - total_capacity
        
        decision = {
            "action": None,
            "reason": "Kapasitas hunian memadai.",
            "metadata": {
                "current_deficit": current_deficit,
                "projected_deficit": projected_deficit,
                "total_capacity": total_capacity
            }
        }
        
        # Use projected_deficit for critical thinking
        if projected_deficit > 0:
            # PRIORITIZE APARTEMEN IF PROJECTED DEFICIT IS HIGH (> 1,000)
            # Since Subsidi capacity is now 5, anything over 500 deficit is impractical for house-by-house building
            if projected_deficit > 1000 and budget > COST_APARTEMEN:
                decision["action"] = {
                    "type": "CONSTRUCT",
                    "buildingKey": "apartemen",
                    "label": "Apartemen Nasional",
                    "quantity": 2 if projected_deficit > 15000 and budget > COST_APARTEMEN * 5 else 1
                }
                decision["reason"] = f"AI mendeteksi lonjakan pertumbuhan. Membangun Apartemen (Cap: 6000) secara proaktif untuk defisit mendatang ({int(projected_deficit)} jiwa)."
            
            # PRIORITIZE RUMAH SUBSIDI FOR BASELINE DEFICIT (Small numbers)
            elif projected_deficit > 0 and budget > COST_SUBSIDI * 5:
                # Limit quantity because Subsidi capacity is tiny now
                q = min(15, int(projected_deficit / CAP_SUBSIDI) + 1)
                decision["action"] = {
                    "type": "CONSTRUCT",
                    "buildingKey": "rumah_subsidi",
                    "label": "Rumah Subsidi Rakyat",
                    "quantity": q
                }
                decision["reason"] = f"Menyediakan {q} unit hunian subsidi (Cap: 5/unit) untuk mengantisipasi pertumbuhan penduduk."
            else:
                decision["reason"] = "Defisit terdeteksi tapi anggaran terbatas untuk ekspansi proaktif."
        
        # LUXURY EXPANSION IF BUDGET IS OVERFLOWING (> 500B)
        elif budget > 500000000000 and built_mansion < (population / 10000):
            decision["action"] = {
                "type": "CONSTRUCT",
                "buildingKey": "mansion",
                "label": "Mansion Elit",
                "quantity": 1
            }
            decision["reason"] = "Anggaran melimpah. Memfasilitasi kebutuhan hunian kelas elit."

        return decision

    except Exception as e:
        return {"error": str(e), "status": "ERROR"}

if __name__ == "__main__":
    result = ai_pembangunan_hunian()
    print(json.dumps(result))
