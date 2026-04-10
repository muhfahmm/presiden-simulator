import json
import sys
import random

def simulate_embassy_offers(input_data):
    """Logika AI menawarkan pembangunan Kedutaan Besar kepada User."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "indonesia").lower().strip()
    events = []
    
    # 1. THROTTLING STRATEGIS (Critical Thinking)
    # Peluang rendah agar tidak spam (5% chance per hari)
    if random.random() > 0.05:
        return {"matrix": matrix, "events": []}

    potential_sources = []

    for source_country, targets in matrix.items():
        # Jangan tawarkan ke diri sendiri
        if source_country.lower() == user_country:
            continue
            
        if user_country in targets:
            rel = targets[user_country]
            score = rel.get("s", 50)
            has_embassy = rel.get("e", 0) == 1
            
            # Kriteria: Hubungan > 50 dan BELUM ada kedutaan
            if score >= 50 and not has_embassy:
                potential_sources.append((source_country, score))

    # 2. EKSEKUSI: Pilih satu negara terbaik (skor tertinggi)
    if potential_sources:
        potential_sources.sort(key=lambda x: x[1], reverse=True)
        best_source = potential_sources[0][0]
        
        events.append({
            "type": "USER_EMBASSY_OFFER",
            "source": best_source,
            "target": user_country,
            "subject": "Proposal Pembukaan Hubungan Diplomatik Formal",
            "content": f"Bapak Presiden, Pemerintah {best_source.capitalize()} secara resmi mengajukan permohonan untuk membangun Kedutaan Besar di Jakarta. Kami percaya bahwa formalisasi hubungan ini akan membuka pintu kemakmuran bagi kedua negara.",
            "priority": "high"
        })

    return {"matrix": matrix, "events": events}

if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        print(json.dumps(simulate_embassy_offers(input_data)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
