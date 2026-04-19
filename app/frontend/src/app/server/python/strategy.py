import json
import sys
import random
from map_engine.map_engine import calculate_heatmap

"""
Presidential Simulator - Quarterly Economic AI
Calculates growth rates for 206 nations based on their tier and current state.
"""

def calculate_growth(nations_data):
    results = {}
    for name, data in nations_data.items():
        tier = data.get('economicTier', 1)
        base_stability = data.get('stability', 50)
        
        # 1. Growth calculation
        if tier == 1:
            growth = random.uniform(-1.5, 4.0)
        elif tier == 2:
            growth = random.uniform(0.5, 3.5)
        else:
            growth = random.uniform(0.1, 2.0)
            
        if base_stability < 40:
            growth -= random.uniform(0.5, 2.0)
        elif base_stability > 80:
            growth += random.uniform(0.2, 0.8)
            
        results[name] = round(growth, 2)
        
    # Delegate visual heatmap calculation to specialized map_engine
    visual_heatmap = calculate_heatmap(nations_data)
    
    return {"growth": results, "heatmap": visual_heatmap}

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            print(json.dumps({}))
            sys.exit(0)
            
        data = json.loads(input_data)
        nations = data.get('nations', {})
        
        output = calculate_growth(nations)
        print(json.dumps(output))
        
    except Exception as e:
        print(json.dumps({"error": str(e)}))
