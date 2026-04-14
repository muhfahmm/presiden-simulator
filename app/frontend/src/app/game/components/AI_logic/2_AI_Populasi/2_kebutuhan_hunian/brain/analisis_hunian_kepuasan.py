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
        
        # 2. Occupancy & Happiness Impact
        occupancy_rate = (population / total_capacity) if total_capacity > 0 else (2.0 if population > 0 else 0)
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
                "occupancy_rate": round(occupancy_rate * 100, 2),
                "daily_happiness_penalty": round(housing_penalty, 3)
            },
            "happiness_status": "STABIL",
            "action": None,
            "rebellion": False,
            "critical_thinking": []
        }
        
        # 3. Decision Logic: Prevent Rebellion & Suggest Infrastructure
        if happiness < 25:
            analysis["rebellion"] = True
            analysis["happiness_status"] = "REVOLUSI/PEMBERONTAKAN"
            analysis["critical_thinking"].append("SITUASI DARURAT: Kepuasan rakyat di bawah ambang batas revolusi! Prioritaskan stabilitas segera.")
        elif happiness < 35:
            analysis["happiness_status"] = "KRITIS"
            
            # Suggest events to boost happiness immediately
            if not is_any_event_active:
                affordable_events = [e for e in events_list if e.get("cost", 999999999) <= budget]
                if affordable_events:
                    chosen_event = sorted(affordable_events, key=lambda x: x.get("happinessBoost", 0), reverse=True)[0]
                    analysis["action"] = {
                        "type": "EXECUTE_EVENT",
                        "id": chosen_event["id"],
                        "name": chosen_event["name"],
                        "cost": chosen_event["cost"]
                    }
                    analysis["critical_thinking"].append(f"AI mendeteksi kerentanan stabilitas. Penyelenggaraan {chosen_event['name']} sangat disarankan untuk meredam gejolak.")
        
        # 4. Critical Thinking for Construction (Overload Detection)
        if occupancy_rate > 1.0:
            analysis["critical_thinking"].append(f"TANDA BAHAYA: NEGARA SEDANG OVERLOAD! Keterisian hunian {round(occupancy_rate*100, 1)}% melampaui batas aman.")
            
        if homeless_percent > 5 or occupancy_rate > 0.9:
            construction_suggestion = None
            
            # Decision Matrix for suggestions
            if occupancy_rate > 1.1 or homeless_percent > 20:
                # Severe crisis: Apartments are the only way to scale fast
                construction_suggestion = "Apartemen Modern & High-Rise"
                priority = "SANGAT MENDESAK"
                reason = "mencegah kekacauan sosial akibat OVERLOAD populasi yang sangat ekstrem"
            elif occupancy_rate > 0.9:
                construction_suggestion = "Apartemen Modern & High-Rise"
                priority = "KRITIS"
                reason = "kapasitas hampir penuh. AI harus bertindak sebelum terjadi overload total"
            elif budget > 10000000: # If wealthy and minor deficit
                construction_suggestion = "Kompleks Mansion Mewah"
                priority = "STRATEGIS"
                reason = "menyeimbangkan permintaan hunian kelas atas di tengah kepadatan yang meningkat"
            else:
                construction_suggestion = "Hunian Rumah Menengah & Subsidi"
                priority = "URGEN"
                reason = "menyediakan buffer hunian untuk mencegah tingkat keterisian mencapai titik bahaya"
            
            if construction_suggestion:
                analysis["critical_thinking"].append(f"BERFIKIR KRITIS [{priority}]: AI menganalisis perlunya pembangunan {construction_suggestion} karena {reason}.")
        
        if occupancy_rate > 1.5:
             analysis["critical_thinking"].append("LOGIKA AI: Rasio keterisian sangat mengkhawatirkan. Tanpa pembangunan masif, stabilitas nasional tidak dapat dijamin.")

        return analysis

    except Exception as e:
        return {"error": str(e), "status": "ERROR"}

if __name__ == "__main__":
    result = analisis_hunian_kepuasan()
    print(json.dumps(result))
