import sys
import json

def calculate_energy(data):
    # Replicates hitungTotalKapasitas (Supply)
    supply = 0
    listrik = data.get("sektor_listrik", {})
    supply += listrik.get("pembangkit_listrik_tenaga_surya", 0) * 50
    supply += listrik.get("pembangkit_listrik_tenaga_angin", 0) * 150
    supply += listrik.get("pembangkit_listrik_tenaga_air", 0) * 500
    supply += listrik.get("pembangkit_listrik_tenaga_uap", 0) * 1000
    supply += listrik.get("pembangkit_listrik_tenaga_gas", 0) * 1200
    supply += listrik.get("pembangkit_listrik_tenaga_nuklir", 0) * 3000

    # Replicates hitungTotalKonsumsiNasional (Demand)
    # Simple weighted demand based on other buildings (same as UI)
    demand = 0
    pop = float(data.get("jumlah_penduduk", 0))
    demand += pop * 0.0001 # Base Residential Demand
    
    # Industrial/Public buildings also consume
    # (In real game this is more complex, we use a factor of the count for the scanner)
    for sector in ["sektor_manufaktur", "sektor_ekstraksi", "pendidikan", "kesehatan"]:
        s_data = data.get(sector, {})
        if isinstance(s_data, dict):
            for count in s_data.values():
                demand += float(count) * 20 # Average 20MW per building

    return supply, demand

def calculate_health(data, population):
    # IDEAL_RATIO = 0.000002 (1 unit per 500k)
    # We weighted them: RS Besar (1.0), RS Kecil (0.4), Diagnostik (0.1)
    kesehatan = data.get("kesehatan", {})
    infra = (float(kesehatan.get("rumah_sakit_besar", 0)) * 1.0 + 
             float(kesehatan.get("rumah_sakit_kecil", 0)) * 0.4 + 
             float(kesehatan.get("pusat_diagnostik", 0)) * 0.1)
    
    if population <= 0: return 100
    ratio = (infra / population) / 0.000002
    return min(100.0, ratio * 100.0)

def calculate_housing(data, population):
    hunian = data.get("hunian", {})
    cap = (float(hunian.get("rumah_subsidi", 0)) * 4 + 
           float(hunian.get("apartemen", 0)) * 50 + 
           float(hunian.get("mansion", 0)) * 10)
    
    if population <= 0: return 100
    return min(100.0, (cap / population) * 100.0)

def main():
    try:
        input_data = json.load(sys.stdin)
        country_data = input_data.get("country_data", {})
        pop = float(country_data.get("jumlah_penduduk", 0))
        budget = float(country_data.get("anggaran", 0))
        
        supply, demand = calculate_energy(country_data)
        energy_surplus = supply - demand
        
        health_score = calculate_health(country_data, pop)
        housing_score = calculate_housing(country_data, pop)
        
        # Recommendations based on severity
        priorities = []
        if energy_surplus < 500: priorities.append("ENERGY")
        if housing_score < 90: priorities.append("HOUSING")
        if health_score < 70: priorities.append("HEALTH")
        
        report = {
            "metrics": {
                "power_supply": int(supply),
                "power_demand": int(demand),
                "power_surplus": int(energy_surplus),
                "health_index": round(health_score, 2),
                "housing_index": round(housing_score, 2),
                "population": int(pop),
                "budget": int(budget)
            },
            "top_priorities": priorities
        }
        
        print(json.dumps(report))
    except Exception as e:
        print(json.dumps({"error": str(e)}))

if __name__ == "__main__":
    main()
