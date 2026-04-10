import json
import sys
import random

def simulate_npc_npc_embassies(input_data):
    """Simulasi sesama negara AI membangun kedubes satu sama lain."""
    matrix = input_data.get("matrix", {})
    events = []
    
    # Ambil daftar semua negara AI di matrix
    countries = list(matrix.keys())
    
    # Batasi jumlah update per hari agar tidak spam notif
    updates_count = 0
    max_updates = 3 # Maksimal 3 berita kedubes baru per hari
    
    # Acak urutan negara untuk variasi
    random.shuffle(countries)
    
    for country_a in countries:
        if updates_count >= max_updates: break
        
        for country_b in matrix.get(country_a, {}):
            if updates_count >= max_updates: break
            if country_a == country_b or country_b == "indonesia": continue
            
            rel = matrix[country_a][country_b]
            score = rel.get("s", 50)
            has_embassy = rel.get("e", 0) == 1
            
            if not has_embassy and score >= 55:
                # Peluang kecil sesama AI membangun kedubes (1% per hari per pasangan)
                if random.random() < 0.01:
                    matrix[country_a][country_b]["e"] = 1
                    # Update dua arah
                    if country_b in matrix and country_a in matrix[country_b]:
                        matrix[country_b][country_a]["e"] = 1
                    
                    events.append({
                        "type": "GLOBAL_NEWS",
                        "source": "Intelijen",
                        "subject": f"Hubungan Diplomatik: {country_a.capitalize()} - {country_b.capitalize()}",
                        "content": f"Laporan Intelijen: {country_a.capitalize()} dan {country_b.capitalize()} telah resmi meratifikasi pembukaan Kedutaan Besar di masing-masing ibukota guna memperkuat kerjasama regional.",
                        "priority": "low"
                    })
                    updates_count += 1
                    
    return {"matrix": matrix, "events": events}

if __name__ == "__main__":
    try:
        input_string = sys.stdin.read()
        if not input_string:
            print(json.dumps({"matrix": {}, "events": []}))
        else:
            input_data = json.loads(input_string)
            print(json.dumps(simulate_npc_npc_embassies(input_data)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
