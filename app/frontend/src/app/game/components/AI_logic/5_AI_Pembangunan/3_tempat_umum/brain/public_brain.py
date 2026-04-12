import sys
import json

def decide_public_building(data):
    """
    AI Decision Logic for Public Services (Hospitals, Schools, etc.)
    Targets low happiness or poor services.
    """
    negara = data.get('negara', 'Unknown')
    budget = data.get('budget', 0)
    public_options = data.get('options', [])
    metrics = data.get('metrics', {}) # { health_index, education_index, happiness }

    # Criteria: Budget check
    if budget < 80000:
        return {"decision": "SKIP", "reason": "Anggaran dialokasikan untuk prioritas ekonomi jangka pendek."}

    # Strategy: Fix what is lowest
    happiness = metrics.get('happiness', 55)
    health = metrics.get('health_index', 50)
    education = metrics.get('education_index', 50)

    # 1. Health Priority
    if health < 50:
        health_buildings = [o for o in public_options if o['groupId'] == 'kesehatan' and o['cost'] <= budget]
        if health_buildings:
            chosen = sorted(health_buildings, key=lambda x: x['tarif'], reverse=True)[0]
            return {"decision": "EXECUTE", "building_key": chosen['key'], "reason": "Meningkatkan indeks kesehatan nasional."}

    # 2. Education Priority
    if education < 50:
        edu_buildings = [o for o in public_options if o['groupId'] == 'pendidikan' and o['cost'] <= budget]
        if edu_buildings:
            chosen = sorted(edu_buildings, key=lambda x: x['tarif'], reverse=True)[0]
            return {"decision": "EXECUTE", "building_key": chosen['key'], "reason": "Meningkatkan kualitas SDM nasional."}

    # 3. Social/Happiness Priority
    if happiness < 60:
        social_buildings = [o for o in public_options if o['groupId'] in ['hiburan', 'olahraga', 'komersial'] and o['cost'] <= budget]
        if social_buildings:
            chosen = sorted(social_buildings, key=lambda x: x['tarif'], reverse=True)[0]
            return {"decision": "EXECUTE", "building_key": chosen['key'], "reason": "Pembangunan fasilitas publik untuk kesejahteraan sosial."}

    return {"decision": "SKIP", "reason": "Infrastruktur publik saat ini dinilai memadai."}

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            sys.exit(0)
        data = json.loads(input_data)
        result = decide_public_building(data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
