import sys
import json
import math

def analisis_hunian_kepuasan():
    try:
        # Read from stdin
        input_data = json.load(sys.stdin)
        
        # Extract data
        population = input_data.get("population", 0)
        budget = input_data.get("budget", 0)
        happiness = input_data.get("happiness", 55)
        housing_data = input_data.get("housing_data", {})
        events_list = input_data.get("events_list", [])
        is_any_event_active = input_data.get("is_any_event_active", False)
        
        # Capacities (Matched with hunianRate)
        CAP_SUBSIDI = 5
        CAP_APARTEMEN = 6000
        CAP_MANSION = 10
        
        # 1. Calculate Capacity & Deficit
        built_subsidi = housing_data.get("rumah_subsidi", 0)
        built_apartemen = housing_data.get("apartemen", 0)
        built_mansion = housing_data.get("mansion", 0)
        
        total_capacity = (built_subsidi * CAP_SUBSIDI) + (built_apartemen * CAP_APARTEMEN) + (built_mansion * CAP_MANSION)
        deficit = max(0, population - total_capacity)
        
        # 2. Happiness Impact (Deficit Penalty) - Optimized for scalability
        homeless_percent = (deficit / population * 100) if population > 0 else 0
        population_growth = input_data.get("population_growth", 0)
        
        # Logarithmic-ish scaling to ensure it doesn't drop to 0 instantly at 100% homelessness
        if homeless_percent > 0:
             base_penalty = -(math.log10(homeless_percent + 1) / math.log10(101)) * 3.5
             
             # Dynamic Growth Tension: If population is growing but housing is short, increase penalty
             if population_growth > 0:
                 # Factor between 1.0 and 1.5 based on growth speed relative to population
                 tension_factor = 1.0 + min(0.5, (population_growth / max(1000, population)) * 100)
                 housing_penalty = base_penalty * tension_factor
             else:
                 housing_penalty = base_penalty
        else:
             housing_penalty = 0
             
        analysis = {
            "housing": {
                "total_capacity": total_capacity,
                "deficit_units": deficit,
                "homeless_percent": round(homeless_percent, 2),
                "daily_happiness_penalty": round(housing_penalty, 3)
            },
            "happiness_status": "STABIL",
            "action": None,
            "rebellion": False,
            "critical_thinking": []
        }
        
        # 3. Decision Logic: Prevent Rebellion
        if happiness < 25:
            analysis["rebellion"] = True
            analysis["happiness_status"] = "REVOLUSI/PEMBERONTAKAN"
            analysis["critical_thinking"].append("SITUASI DARURAT: Kepuasan rakyat di bawah ambang batas revolusi!")
        elif happiness < 35: # Shifting slightly up for early warning
            analysis["happiness_status"] = "KRITIS"
            
            # ONLY suggest if NO other event is active to prevent budget drain
            if not is_any_event_active:
                affordable_events = [e for e in events_list if e.get("cost", 999999999) <= budget]
                if affordable_events:
                    # Pick the highest happiness boost event
                    chosen_event = sorted(affordable_events, key=lambda x: x.get("happinessBoost", 0), reverse=True)[0]
                    analysis["action"] = {
                        "type": "EXECUTE_EVENT",
                        "id": chosen_event["id"],
                        "name": chosen_event["name"],
                        "cost": chosen_event["cost"]
                    }
                    analysis["critical_thinking"].append(f"AI mendeteksi kerentanan stabilitas. Penyelenggaraan {chosen_event['name']} disarankan.")
                else:
                    analysis["critical_thinking"].append("Anggaran tidak cukup untuk mitigasi event.")
            else:
                analysis["critical_thinking"].append("Acara nasional sedang berlangsung. AI menunggu efek acara selesai.")
        
        if homeless_percent > 80:
            analysis["critical_thinking"].append("Tingkat tunawisma ekstrem. Pembangunan hunian vertikal (Apartemen) sangat mendesak.")

        return analysis

    except Exception as e:
        return {"error": str(e), "status": "ERROR"}

if __name__ == "__main__":
    result = analisis_hunian_kepuasan()
    print(json.dumps(result))
