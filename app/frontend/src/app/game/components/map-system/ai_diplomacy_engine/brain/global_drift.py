import sys
import json
import random

def calculate_daily_drift(matrix_data):
    """
    Simulasi perubahan hubungan harian antar AI (NPC-to-NPC).
    Target: 2-5 events per 14 hari.
    """
    raw_matrix = matrix_data.get("matrix", {})
    # NORMALISASI KUNCI (Mencegah Case-Sensitivity mismatch)
    matrix = {k.lower().strip(): v for k, v in raw_matrix.items()}
    
    new_matrix = {}
    events = []

    # Peluang harian global (25% peluang hari ini ada kegiatan diplomasi dunia)
    global_event_chance = 0.25 
    can_generate_event = random.random() < global_event_chance
    max_events_today = random.randint(1, 4) if can_generate_event else 0
    generated_today = 0

    source_countries = list(matrix.keys())
    random.shuffle(source_countries)

    for source in source_countries:
        # Gunakan dataset all_countries untuk memastikan setiap source punya hubungan ke SETIAP negara lain
        # (Beberapa target mungkin terhapus di TS untuk hemat memori)
        new_matrix[source] = {}
        
        # Ambil data target yang ada
        source_targets = {k.lower().strip(): v for k, v in matrix[source].items()}
        
        # Kita iterasi ke SEMUA negara yang ada di sistem (source_countries adalah daftar lengkap 207 negara)
        for target in source_countries:
            if source == target: continue
            
            # Jika target tidak ada di data source (karena sparse matrix), gunakan default
            data = source_targets.get(target, {"s": 50, "e": 0, "p": 0, "a": 0, "t": 0})
            
            score = data.get("s", 50)
            statuses = {
                "e": data.get("e", 0),
                "p": data.get("p", 0),
                "a": data.get("a", 0),
                "t": data.get("t", 0)
            }

            # 1. Hitung Drift Hubungan (DItingkatkan intensitasnya)
            # Drift dasar lebih dinamis agar angka 50 cepat bergerak
            drift = random.uniform(-0.8, 0.8)
            
            # Event langka: Perubahan besar (2.0 - 5.0)
            if random.random() < 0.002: 
                drift += random.uniform(5.0, 10.0) if random.random() > 0.5 else random.uniform(-5.0, -10.0)

            if statuses["a"]: drift += 0.1
            
            new_score = round(max(0, min(100, score + drift)), 2)
            
            # 2. Logika World Events
            if generated_today < max_events_today:
                event = None
                
                # a. Aliansi Pertahanan (Hubungan > 80)
                if new_score > 80 and statuses["e"] and not statuses["a"] and random.random() < 0.05:
                    statuses["a"] = 1
                    statuses["p"] = 1 
                    event = {
                        "type": "ALLIANCE",
                        "source": source, "target": target,
                        "subject": "Aliansi Pertahanan Strategis",
                        "content": f"Aliansi militer baru terbentuk! {source.capitalize()} dan {target.capitalize()} sepakat untuk saling membela."
                    }

                # b. Pakta Non-Agresi (Hubungan > 65)
                elif new_score > 65 and statuses["e"] and not statuses["p"] and random.random() < 0.1:
                    statuses["p"] = 1
                    event = {
                        "type": "PACT",
                        "source": source, "target": target,
                        "subject": "Penandatanganan Pakta Non-Agresi",
                        "content": f"{source.capitalize()} dan {target.capitalize()} telah menandatangani Pakta Non-Agresi."
                    }

                # c. Perjanjian Perdagangan (Hubungan > 60)
                elif new_score > 60 and statuses["e"] and not statuses["t"] and random.random() < 0.15:
                    statuses["t"] = 1
                    event = {
                        "type": "TRADE",
                        "source": source, "target": target,
                        "subject": "Kesepakatan Perdagangan Bebas",
                        "content": f"{source.capitalize()} dan {target.capitalize()} mengumumkan pakta perdagangan baru."
                    }

                # d. Bangun Kedubes (Hubungan > 55)
                # JIKA goal tercapai, skor langsung melompat ke 65-70 (Boost Diplomatik)
                elif new_score > 55 and not statuses["e"] and random.random() < 0.2:
                    statuses["e"] = 1
                    # Hanya boost jika skor saat ini masih di bawah range boost (mencegah penurunan skor tinggi)
                    boost_score = random.uniform(67.0, 72.0)
                    if new_score < boost_score:
                        new_score = boost_score
                    
                    event = {
                        "type": "EMBASSY",
                        "source": source, "target": target,
                        "subject": "Pembukaan Kedutaan Besar Baru",
                        "content": f"{source.capitalize()} dan {target.capitalize()} sepakat untuk membuka kedutaan besar. Hubungan kedua negara kini masuk ke fase kemitraan strategis."
                    }

                if event:
                    events.append(event)
                    generated_today += 1

            new_matrix[source][target] = {
                "s": new_score,
                **statuses
            }

    return {
        "matrix": new_matrix,
        "events": events
    }

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            sys.exit(0)
            
        data = json.loads(input_data)
        result = calculate_daily_drift(data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
