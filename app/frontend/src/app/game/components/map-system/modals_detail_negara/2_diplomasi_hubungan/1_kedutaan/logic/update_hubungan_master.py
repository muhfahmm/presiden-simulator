"""
Master Engine: Diplomatic Relation Drift Aggregator
===================================================
Fungsi: Menggabungkan hasil perhitungan dari berbagai instrumen diplomatik:
1. Kedutaan Besar (Up/Down 0.1%) - logic dalam file ini
2. Pakta Non-Agresi (+0.01%) - logic di 2_pakta_non_agresi/
3. Aliansi Pertahanan (+0.01%) - logic di 3_aliansi_pertahanan/
4. Efek Religi (Katolik: Bonus Vatikan, Penalti Timur Tengah)
"""

import sys
import json
import os

# Tambahkan path agar bisa mengimpor file dari folder lain
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../2_pakta_non_agresi/logic')))
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../3_aliansi_pertahanan/logic')))

# Import logika terpisah
try:
    from update_hubungan_pakta import get_pact_delta
    from update_hubungan_aliansi import get_alliance_delta
except ImportError as e:
    # Fallback jika import gagal (untuk testing standalone)
    def get_pact_delta(s, p): return 0.0
    def get_alliance_delta(s, a): return 0.0

# Base Rates Kedutaan
GROWTH_RATE = 1.001   # +0.1% per hari
DECAY_RATE  = 0.999857   # -0.1% per minggu (rata-rata -0.014% per hari)

# Daftar Negara Timur Tengah (Middle East) untuk Penalti Katolik
TIMUR_TENGAH_IDS = [
    "arab_saudi", "irak", "iran", "israel", "yordania", 
    "kuwait", "lebanon", "oman", "palestina", "qatar", 
    "suriah", "turki", "uni_emirat_arab", "yaman", 
    "bahrain", "mesir"
]

def calculate_master_drift(data_input: dict) -> list:
    countries = data_input.get("countries", [])
    player_religion = data_input.get("religion", "Islam")
    results = []

    for entry in countries:
        country_id = entry.get("country_id", "unknown")
        current_score = float(entry.get("current_score", 50))
        has_embassy = bool(entry.get("has_embassy", False))
        has_pact = bool(entry.get("has_pact", False))
        has_alliance = bool(entry.get("has_alliance", False))

        # 1. Hitung base score dari Kedutaan
        if has_embassy:
            base_new_score = current_score * GROWTH_RATE
        else:
            base_new_score = current_score * DECAY_RATE
            
        base_delta = base_new_score - current_score

        # 2. Hitung bonus dari Pakta (Data dari file terpisah)
        pact_delta = get_pact_delta(current_score, has_pact)

        # 3. Hitung bonus dari Aliansi (Data dari file terpisah)
        alliance_delta = get_alliance_delta(current_score, has_alliance)

        # 4. Penalti "Isolasi" (Jika tidak punya KEDUA-DUANYA & TIDAK punya Kedutaan)
        # -0.01% jika benar-benar kosong
        isolation_penalty = 0.0
        if not has_embassy and not has_pact and not has_alliance:
            isolation_penalty = -(current_score * 0.0001) # -0.01%

        # 5. Efek Religi (Katolik)
        religion_delta = 0.0
        if player_religion == "Katolik":
            # [+] Bonus Vatikan (+0.1% daily)
            if country_id == "vatikan":
                religion_delta += current_score * 0.001
            
            # [-] Penalti Timur Tengah (-0.05% daily)
            if country_id in TIMUR_TENGAH_IDS:
                religion_delta -= current_score * 0.0005

        # 6. Total Akumulasi
        total_delta = base_delta + pact_delta + alliance_delta + isolation_penalty + religion_delta
        final_score = current_score + total_delta

        # Clamp between 0 and 100
        final_score = max(0.0, min(100.0, final_score))
        
        # Rounding
        total_delta_rounded = round(total_delta, 4)
        final_score_rounded = round(final_score, 2)

        results.append({
            "country_id": country_id,
            "new_score": final_score_rounded,
            "delta": total_delta_rounded
        })

    return results

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            print(json.dumps({"error": "Input data kosong"}))
            sys.exit(1)
        data_input = json.loads(input_data)
        
        # Backward compatibility: jika input hanya berupa list, bungkus dalam dict
        if isinstance(data_input, list):
            data_input = {"countries": data_input, "religion": "Islam"}
            
        results = calculate_master_drift(data_input)
        print(json.dumps(results))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
