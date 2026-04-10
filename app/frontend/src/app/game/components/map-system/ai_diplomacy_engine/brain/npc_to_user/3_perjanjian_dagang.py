import json
import sys
import random

def simulate_trade_offers(input_data):
    """Logika AI menawarkan Perjanjian Perdagangan (Trade Agreement)."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "").lower().strip()
    events = []
    
    if not user_country: return {"matrix": matrix, "events": []}
    if random.random() > 0.15: return {"matrix": matrix, "events": []}

    potential = []
    for source, targets in matrix.items():
        if user_country in targets:
            rel = targets[user_country]
            # Syarat Perdagangan: Hubungan > 60 dan sudah ada Kedubes (e)
            if rel.get("s", 0) >= 60 and not rel.get("t", 0) and rel.get("e", 0):
                potential.append(source)

    if not potential: return {"matrix": matrix, "events": []}

    source = random.choice(potential)
    matrix[source][user_country]["t"] = 1
    events.append({
        "type": "USER_TRADE_OFFER",
        "source": source,
        "target": user_country,
        "subject": "Proposal Kerjasama Perdagangan Eksklusif",
        "content": f"Sektor ekonomi {source.capitalize()} menyatakan ketertarikan besar untuk menjalin kerjasama perdagangan bilateral dengan negara kita. Proposal ini mencakup kemudahan ekspor-impor dan tarif bea cukai yang lebih kompetitif.",
        "priority": "medium"
    })

    return {"matrix": matrix, "events": events}

if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        print(json.dumps(simulate_trade_offers(input_data)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
