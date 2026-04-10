import json
import sys
import random

def simulate_active_diplomacy(matrix_data):
    """
    AI mengambil inisiatif aktif untuk meningkatkan hubungan 
    dengan cara 'memberikan uang/bantuan dana' (Diplomatic Initiative).
    """
    matrix = matrix_data.get("matrix", {})
    events = []
    
    # Peluang harian ada negara yang berinisiatif (40% chance)
    # Ditingkatkan agar bantuan dana lebih sering muncul dibanding pakta/aliansi
    if random.random() > 0.40:
        return {"matrix": matrix, "events": []}

    source_countries = list(matrix.keys())
    # Pilih 1-3 negara yang sedang ingin 'branding' diplomatik hari ini
    active_sources = random.sample(source_countries, k=random.randint(1, 3))

    for source in active_sources:
        targets = matrix[source]
        # Cari target yang hubungannya 'nanggung' (antara 50-80) tapi belum Aliansi
        potential_targets = [
            t for t, d in targets.items() 
            if 50 <= d.get("s", 0) < 85 and not d.get("a", 0)
        ]

        if not potential_targets:
            continue

        # Pilih 1 target favorit untuk disogok/dibantu
        target = random.choice(potential_targets)
        current_data = targets[target]
        
        # Simpan skor lama untuk laporan
        old_score = current_data.get("s", 50)
        improvement = random.uniform(1.5, 4.0)
        cost = int(improvement * random.randint(5000000, 15000000))
        
        # Update Score
        new_score = round(float(old_score + improvement), 2)
        matrix[source][target]["s"] = new_score
        
        # Tentukan Rute: Ke Inbox (jika target user) atau Ke Berita (jika target AI lain)
        event_type = "NPC_GRANT_TO_USER" if target.lower() == "indonesia" else "GLOBAL_NEWS"
        
        events.append({
            "type": event_type,
            "source": source,
            "target": target,
            "subject": f"Program Hibah Dana Pembangunan: {source.capitalize()} - {target.capitalize()}",
            "content": f"{source.capitalize()} telah menyalurkan bantuan dana pembangunan sebesar {cost:,} kepada {target.capitalize()} untuk mempererat kemitraan strategis. Hubungan naik dari {old_score:.2f}% menjadi {new_score:.2f}%.",
            "priority": "low"
        })

    return {
        "matrix": matrix,
        "events": events
    }

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            sys.exit(0)
            
        matrix_data = json.loads(input_data)
        result = simulate_active_diplomacy(matrix_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
