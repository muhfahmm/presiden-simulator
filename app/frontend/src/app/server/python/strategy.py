import json
import sys
import random

"""
Presidential Simulator - Quarterly Economic AI
Calculates growth rates for 206 nations based on their tier and current state.
"""

def calculate_growth(nations_data):
    results = {}
    for name, data in nations_data.items():
        tier = data.get('tier', 1)
        base_stability = data.get('stability', 50)
        
        # Heuristic growth calculation
        # Tier 1 (Developing): High volatility, potentially high growth or deep recession
        # Tier 2 (Emerging): Moderate stability, steady growth
        # Tier 3 (Developed): High stability, low growth
        
        if tier == 1:
            growth = random.uniform(-1.5, 4.0)
        elif tier == 2:
            growth = random.uniform(0.5, 3.5)
        else:
            growth = random.uniform(0.1, 2.0)
            
        # Stability adjustment
        if base_stability < 40:
            growth -= random.uniform(0.5, 2.0)
        elif base_stability > 80:
            growth += random.uniform(0.2, 0.8)
            
        results[name] = round(growth, 2)
    return results

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            # Fallback if no input
            print(json.dumps({}))
            sys.exit(0)
            
        data = json.loads(input_data)
        nations = data.get('nations', {})
        
        updated_growth = calculate_growth(nations)
        
        # Return as JSON
        print(json.dumps(updated_growth))
        
    except Exception as e:
        # Emergency fallback output
        print(json.dumps({"error": str(e)}))
