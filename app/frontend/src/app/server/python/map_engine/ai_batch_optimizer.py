import json
import sys
import random

def process_batch_ai(batch_data):
    """
    Processes a list of countries and returns a batch of decisions.
    """
    results = []
    countries = batch_data.get("countries", [])
    
    for nation in countries:
        name = nation.get("name", "Unknown")
        budget = nation.get("budget", 0)
        stability = nation.get("stability", 70)
        
        # Simple Logic for priority
        decision = "SKIP"
        reason = "Stable"
        
        if budget > 1000000 and stability < 60:
            decision = "EXECUTE"
            reason = "Building stability assets"
        
        results.append({
            "nation": name,
            "decision": decision,
            "reason": reason,
            "building_key": "pusat_komando_wilayah" if decision == "EXECUTE" else None,
            "quantity": 1
        })
        
    return results

if __name__ == "__main__":
    try:
        input_raw = sys.stdin.read()
        if not input_raw:
            print(json.dumps([]))
            sys.exit(0)
            
        data = json.loads(input_raw)
        decisions = process_batch_ai(data)
        print(json.dumps(decisions))
    except Exception as e:
        print(json.dumps([{"error": str(e)}]))
