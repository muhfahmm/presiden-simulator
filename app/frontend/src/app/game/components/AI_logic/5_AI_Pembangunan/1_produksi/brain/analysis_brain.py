import sys
import json

def decide_production_building(data):
    """
    AI Decision Logic for Industrial/Production Buildings.
    Targets building what's in deficit or highly profitable.
    """
    negara = data.get('negara', 'Unknown')
    budget = data.get('budget', 0)
    stocks = data.get('stocks', {})
    production_options = data.get('options', [])
    current_metrics = data.get('metrics', {}) # { power_surplus, food_surplus, etc. }

    # 1. Critical Need: Electricity
    if current_metrics.get('power_surplus', 0) < 500: # Trigger if surplus is thin
        power_options = [o for o in production_options if o['groupId'] == 'kelistrikan' and o['cost'] <= budget]
        if power_options:
            # Sort by power generation efficiency (power / cost)
            chosen = sorted(power_options, key=lambda x: x['tarif'] / x['cost'], reverse=True)[0]
            return {"decision": "EXECUTE", "building_key": chosen['key'], "reason": "Sektor listrik nasional dalam zona kritis."}

    # 2. Food Independence
    if current_metrics.get('food_surplus', 1) < 0:
        food_options = [o for o in production_options if o['groupId'] in ['agrikultur', 'peternakan', 'perikanan'] and o['cost'] <= budget]
        if food_options:
            chosen = sorted(food_options, key=lambda x: x['tarif'], reverse=True)[0]
            return {"decision": "EXECUTE", "building_key": chosen['key'], "reason": "Meningkatkan ketahanan pangan nasional."}

    # 3. Resource Profit (Extraction vs Manufacturing)
    affordable = [o for o in production_options if o['cost'] <= (budget * 0.3)] # Only spend 30% max on routine growth
    if not affordable:
        return {"decision": "SKIP", "reason": "Anggaran belum cukup untuk ekspansi industri baru."}

    # Sort by Income potential if available, else production rate
    chosen = sorted(affordable, key=lambda x: (x.get('pendapatan_nasional', 0) or x['tarif']), reverse=True)[0]

    return {"decision": "EXECUTE", "building_key": chosen['key'], "reason": "Ekspansi ekonomi: Memperkuat sektor " + chosen['groupId']}

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            sys.exit(0)
        data = json.loads(input_data)
        result = decide_production_building(data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
