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

    def check_resources(option):
        # Budget Check
        if option.get('cost', 0) > budget:
            return False
            
        # Material Check
        req = option.get("requirements", {})
        if stocks.get("5_pabrik_semen", 0) < req.get("beton", 0):
            return False
        if stocks.get("12_tambang_bijih_besi", 0) < req.get("baja", 0):
            return False
        if stocks.get("6_penggergajian_kayu", 0) < req.get("kayu", 0):
            return False
        return True

    # 1. Critical Need: Electricity
    if current_metrics.get('power_surplus', 0) < 500: # Trigger if surplus is thin
        power_options = [o for o in production_options if o['groupId'] == 'kelistrikan' and check_resources(o)]
        if power_options:
            # Sort by power generation efficiency (power / cost)
            chosen = sorted(power_options, key=lambda x: x['tarif'] / x['cost'], reverse=True)[0]
            return {"decision": "EXECUTE", "building_key": chosen['key'], "reason": "Sektor listrik nasional dalam zona kritis."}

    # 2. Food Independence
    if current_metrics.get('food_surplus', 1) < 0:
        food_options = [o for o in production_options if o['groupId'] in ['agrikultur', 'peternakan', 'perikanan'] and check_resources(o)]
        if food_options:
            chosen = sorted(food_options, key=lambda x: x['tarif'], reverse=True)[0]
            return {"decision": "EXECUTE", "building_key": chosen['key'], "reason": "Meningkatkan ketahanan pangan nasional."}

    # 3. Resource Profit (Extraction vs Manufacturing)
    affordable = [o for o in production_options if check_resources(o)] # Using the new shared check
    if not affordable:
        return {"decision": "SKIP", "reason": "Bahan bangunan atau anggaran di gudang belum mencukupi untuk ekspansi baru."}

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
