import json
import sys
import random

def simulate_alliance_offers(input_data):
    """Logika AI menawarkan Aliansi Pertahanan (Alliance) dengan berpikir kritis."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "indonesia").lower().strip()
    events = []
    
    # 1. THROTTLING GLOBAL (Berpikir Kritis)
    # Peluang sangat rendah (5%) agar tidak spam
    if random.random() > 0.05: 
        return {"matrix": matrix, "events": []}

    potential_candidates = []
    for source_country, targets in matrix.items():
        if user_country in targets:
            rel = targets[user_country]
            score = rel.get("s", 50)
            has_pact = rel.get("p", 0) == 1
            has_alliance = rel.get("a", 0) == 1

            # KRITIKAL: Hanya menawarkan Aliansi jika SUDAH punya Pakta Non-Agresi
            # Dan hubungan harus masuk kategori Aliansi Strategis (> 85)
            if has_pact and not has_alliance and score >= 85:
                potential_candidates.append((source_country, score))

    if not potential_candidates:
        return {"matrix": matrix, "events": []}

    # Pilih negara dengan hubungan paling solid
    potential_candidates.sort(key=lambda x: x[1], reverse=True)
    best_candidate = potential_candidates[0][0]

    events.append({
        "type": "USER_ALLIANCE_OFFER",
        "source": best_candidate,
        "target": user_country,
        "subject": "Proposal Aliansi Pertahanan Bersama",
        "content": f"Demi menjamin kedaulatan blok kita, Pemerintah {best_candidate.capitalize()} secara resmi menawarkan pembentukan Aliansi Pertahanan. Sebagai mitra yang telah memiliki Pakta Non-Agresi, kami rasa ini adalah puncak dari kerjasama militer kita.",
        "priority": "high"
    })

    return {"matrix": matrix, "events": events}

if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        print(json.dumps(simulate_alliance_offers(input_data)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
