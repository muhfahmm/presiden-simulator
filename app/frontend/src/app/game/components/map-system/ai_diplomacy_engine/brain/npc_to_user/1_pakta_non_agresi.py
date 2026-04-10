import json
import sys
import random

def simulate_pact_offers(input_data):
    """Logika AI menawarkan Pakta Non-Agresi (Pact) dengan berpikir kritis."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "indonesia").lower().strip()
    events = []
    
    # 1. THROTTLING GLOBAL (Berpikir Kritis)
    # Peluang sangat rendah (5%) agar hanya muncul ~1-2 kali seminggu secara total sistem
    if random.random() > 0.05: 
        return {"matrix": matrix, "events": []}

    potential_candidates = []
    for source_country, targets in matrix.items():
        if user_country in targets:
            rel = targets[user_country]
            score = rel.get("s", 50)
            has_embassy = rel.get("e", 0) == 1
            has_pact = rel.get("p", 0) == 1

            # KRITIKAL: Hanya menawarkan jika SUDAH punya Kedubes (Protokol Diplomatik)
            # Dan hubungan harus sudah masuk tahap "Sangat Baik" (> 70)
            if has_embassy and not has_pact and score >= 70:
                potential_candidates.append((source_country, score))

    if not potential_candidates:
        return {"matrix": matrix, "events": []}

    # AI Memilih yang paling strategis (Skor Hubungan Tertinggi)
    potential_candidates.sort(key=lambda x: x[1], reverse=True)
    best_candidate = potential_candidates[0][0]

    events.append({
        "type": "USER_PACT_OFFER",
        "source": best_candidate,
        "target": user_country,
        "subject": "Inisiatif Keamanan Regional: Pakta Non-Agresi",
        "content": f"Berdasarkan kedekatan hubungan bilateral melalui Kedutaan Besar kita, Pemerintah {best_candidate.capitalize()} secara resmi menawarkan pembentukan Pakta Non-Agresi. Kami percaya ini akan memperkuat stabilitas keamanan bersama.",
        "priority": "high"
    })

    return {"matrix": matrix, "events": events}

if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        print(json.dumps(simulate_pact_offers(input_data)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
