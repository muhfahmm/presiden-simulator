import json
import sys
import random

def simulate_embassy_proposals(input_data):
    """Logika AI merespon jika User mengajukan pembangunan Kedubes."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "").lower().strip()
    proposed_country = input_data.get("proposedCountry", "").lower().strip()
    events = []
    
    if not user_country or not proposed_country: 
        return {"matrix": matrix, "events": []}

    # Cari data hubungan
    rel = matrix.get(proposed_country, {}).get(user_country)
    if not rel:
        return {"matrix": matrix, "events": []}

    score = rel.get("s", 0)
    
    # Peluang diterima jika skor >= 50
    chance = 0.8 if score >= 50 else (score / 100)
    
    if random.random() < chance:
        # Diterima! Update Matrix
        matrix[proposed_country][user_country]["e"] = 1
        # Pastikan dua arah (optional, tapi biasanya kedubes saling menguntungkan)
        if user_country in matrix and proposed_country in matrix[user_country]:
            matrix[user_country][proposed_country]["e"] = 1
            
        events.append({
            "type": "USER_EMBASSY_ACCEPTED",
            "source": proposed_country,
            "target": user_country,
            "subject": "Ratifikasi Pembukaan Kedutaan Besar",
            "content": f"Kementerian Luar Negeri {proposed_country.capitalize()} menyambut hangat keinginan Indonesia untuk menjalin hubungan diplomatik formal. Pembangunan Kedutaan Besar telah disetujui dan jalur komunikasi resmi kini dinyatakan AKTIF.",
            "priority": "high"
        })
    else:
        # Ditolak
        events.append({
            "type": "USER_EMBASSY_REJECTED",
            "source": proposed_country,
            "target": user_country,
            "subject": "Penundaan Hubungan Diplomatik",
            "content": f"Pemerintah {proposed_country.capitalize()} saat ini belum mempertimbangkan pembukaan perwakilan diplomatik baru karena alasan kestabilan internal.",
            "priority": "medium"
        })

    return {"matrix": matrix, "events": events}

if __name__ == "__main__":
    try:
        input_string = sys.stdin.read()
        if not input_string:
            print(json.dumps({"error": "Empty input"}))
        else:
            input_data = json.loads(input_string)
            print(json.dumps(simulate_embassy_proposals(input_data)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
