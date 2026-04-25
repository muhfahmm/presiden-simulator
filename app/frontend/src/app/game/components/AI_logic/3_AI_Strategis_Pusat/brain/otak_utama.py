import sys
import json

def main():
    try:
        input_data = json.load(sys.stdin)
    except Exception as e:
        print(json.dumps({"error": f"Invalid input: {str(e)}"}))
        return

    # Extract Data
    country_name = input_data.get("negara", "Unknown")
    total_budget = input_data.get("budget", 0)
    daily_income = input_data.get("income", 0)
    stability = input_data.get("stability", 50)
    happiness = input_data.get("happiness", 50)
    threat_level = input_data.get("threat_level", 0) # 0 to 100
    
    # 1. CALCULATE SAFETY RESERVE
    # AI will always keep 5% to 15% of budget as reserve
    reserve_ratio = 0.15 if happiness < 40 or stability < 40 else 0.05
    reserve_amount = total_budget * reserve_ratio
    spendable_total = max(0, total_budget - reserve_amount)

    # 2. SECTOR SCORING (Urgency 1-10)
    scores = {
        "pembangunan": 5, # Baseline
        "pertahanan": 3,  # Baseline
        "geopolitik": 2   # Baseline
    }

    # Adjust based on Happiness (Pembangunan)
    if happiness < 50:
        scores["pembangunan"] += (50 - happiness) / 5
    
    # Adjust based on Threat/Stability (Pertahanan)
    if threat_level > 30:
        scores["pertahanan"] += (threat_level - 30) / 10
    if stability < 40:
        scores["pertahanan"] += 2

    # Adjust based on Wealth (Geopolitik)
    # Only rich countries care about geopolitik
    if total_budget > 1000000:
        scores["geopolitik"] += 2

    # 3. BUDGET ALLOCATION (Weighted Distribution)
    total_score = sum(scores.values())
    allocations = {
        "pembangunan": (scores["pembangunan"] / total_score) * spendable_total,
        "pertahanan": (scores["pertahanan"] / total_score) * spendable_total,
        "geopolitik": (scores["geopolitik"] / total_score) * spendable_total
    }

    # 4. CRISIS OVERRIDE
    # If budget is extremely low, cancel everything except emergency maintenance
    if total_budget < daily_income * 2:
        allocations = {k: 0 for k in allocations}
        reason = "Krisis Likuiditas: Menunda semua pengeluaran non-darurat."
    else:
        reason = f"Prioritas dialokasikan berdasarkan Skor: P:{scores['pembangunan']:.1f}, M:{scores['pertahanan']:.1f}, G:{scores['geopolitik']:.1f}"

    # RESULT
    result = {
        "negara": country_name,
        "allocations": allocations,
        "reserve": reserve_amount,
        "reason": reason,
        "status": "HEALTHY" if total_budget > reserve_amount * 2 else "WARNING"
    }
    
    print(json.dumps(result))

if __name__ == "__main__":
    main()
