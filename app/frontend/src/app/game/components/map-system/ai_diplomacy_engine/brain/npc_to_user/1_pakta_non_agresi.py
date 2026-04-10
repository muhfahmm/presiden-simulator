import json
import sys
import random

def simulate_pact_offers(input_data):
    """Logika AI menawarkan Pakta Non-Agresi (Pact)."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "").lower().strip()
    events = []
    
    if not user_country: return {"matrix": matrix, "events": []}
    if random.random() > 0.15: return {"matrix": matrix, "events": []}

    potential = []
    for source, targets in matrix.items():
        if user_country in targets:
            rel = targets[user_country]
            if rel.get("s", 0) >= 65 and not rel.get("p", 0):
                potential.append(source)

    if not potential: return {"matrix": matrix, "events": []}

    source = random.choice(potential)
    matrix[source][user_country]["p"] = 1
    events.append({
        "type": "USER_PACT_OFFER",
        "source": source,
        "target": user_country,
        "subject": "Tawaran Pakta Non-Agresi",
        "content": f"Melihat stabilitas kawasan yang dinamis, Pemerintah {source.capitalize()} secara resmi menawarkan pembentukan Pakta Non-Agresi dengan negara kita. Status keamanan kedua negara kini ditingkatkan menjadi 'Damai Bertanggung Jawab'.",
        "priority": "medium"
    })

    return {"matrix": matrix, "events": events}

if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        print(json.dumps(simulate_pact_offers(input_data)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
