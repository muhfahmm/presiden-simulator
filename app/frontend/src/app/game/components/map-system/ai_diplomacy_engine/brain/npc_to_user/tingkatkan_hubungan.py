import json
import sys
import random

def simulate_npc_to_user_improvement(input_data):
    """
    Logika AI memberikan dana hibah kepada pemain (User) 
    untuk 'Meningkatkan Hubungan' secara proaktif.
    """
    raw_matrix = input_data.get("matrix", {})
    matrix = {k.lower().strip(): v for k, v in raw_matrix.items()}
    user_country = input_data.get("userCountry", "").lower().strip()
    events = []
    
    if not user_country:
        return {"matrix": matrix, "events": [], "budgetGain": 0}

    # Peluang harian AI memberikan hadiah ke pemain (12% chance)
    if random.random() > 0.12:
        return {"matrix": matrix, "events": [], "budgetGain": 0}

    # Cari negara AI yang menyukai pemain (>50)
    potential_donors = []
    for source in source_countries:
        # Jika bukan user itu sendiri dan punya hubungan baik (atau default 50)
        data = matrix[source].get(normalized_user, {"s": 50})
        old_score = data.get("s", 50)
        
        # Rendahkan peluang jika data tidak ada di matrix (artinya belum pernah interaksi)
        has_previous_interaction = normalized_user in matrix[source]
        base_chance = 0.01 if has_previous_interaction else 0.002
        
        if source != normalized_user and old_score > 50:
            if random.random() < base_chance:
                potential_donors.append(source)

    if not potential_donors:
        return {"matrix": matrix, "events": [], "budgetGain": 0}

    donor = random.choice(potential_donors)
    # Pastikan entry donor-user ada di matrix
    if normalized_user not in matrix[donor]:
        matrix[donor][normalized_user] = {"s": 50}
    rel_data = matrix[donor][normalized_user]
    
    # Hitung jumlah dana hibah 
    base_amount = random.randint(50000000, 250000000)
    multiplier = 1 + (rel_data.get("s", 50) - 50) / 100
    final_grant = int(base_amount * multiplier)
    
    # Simpan skor lama untuk laporan
    old_score = rel_data.get("s", 50)
    
    # Hubungan naik karena pemberian dana ini
    new_score = round(float(old_score + random.uniform(2.0, 5.0)), 2)
    matrix[donor][user_country]["s"] = new_score
    
    # Tambahkan Event Khusus untuk User
    events.append({
        "type": "NPC_GRANT_TO_USER",
        "source": donor,
        "target": user_country,
        "subject": "Inisiatif Peningkatan Hubungan",
        "content": f"Pemerintah {donor.capitalize()} telah menyetujui pemberian dana bantuan hibah sebesar {final_grant:,} kepada negara kita untuk mendukung program pembangunan nasional. Hubungan naik dari {old_score:.2f}% menjadi {new_score:.2f}%.",
        "priority": "high",
        "amount": final_grant
    })

    return {
        "matrix": matrix,
        "events": events,
        "budgetGain": final_grant
    }

if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        print(json.dumps(simulate_npc_to_user_improvement(input_data)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
