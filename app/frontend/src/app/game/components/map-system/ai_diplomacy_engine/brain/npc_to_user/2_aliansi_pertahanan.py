import json
import sys
import random

def simulate_alliance_offers(input_data):
    """Logika AI menawarkan Aliansi Pertahanan (Alliance)."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "").lower().strip()
    events = []
    
    if not user_country: return {"matrix": matrix, "events": []}
    if random.random() > 0.15: return {"matrix": matrix, "events": []}

    potential = []
    for source, targets in matrix.items():
        if user_country in targets:
            rel = targets[user_country]
            # Harus sudah ada Kedubes (e) dan Score >= 80
            if rel.get("s", 0) >= 80 and not rel.get("a", 0) and rel.get("e", 0):
                potential.append(source)

    if not potential: return {"matrix": matrix, "events": []}

    source = random.choice(potential)
    matrix[source][user_country]["a"] = 1
    events.append({
        "type": "USER_ALLIANCE_OFFER",
        "source": source,
        "target": user_country,
        "subject": "Proposal Aliansi Pertahanan (Military Alliance)",
        "content": f"Pemerintah {source.capitalize()} mengundang negara kita untuk bergabung dalam Aliansi Pertahanan Bersama. Dengan aliansi ini, kita akan saling mendukung dalam hal keamanan nasional dan kerjasama taktis militer tingkat tinggi.",
        "priority": "high"
    })

    return {"matrix": matrix, "events": events}

if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        print(json.dumps(simulate_alliance_offers(input_data)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
