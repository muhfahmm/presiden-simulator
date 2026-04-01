"""
Master Engine: Diplomatic Relation Drift Aggregator
===================================================
Fungsi: Menggabungkan hasil perhitungan dari berbagai instrumen diplomatik:
1. Kedutaan Besar (Up/Down 0.1%) - logic dalam file ini
2. Pakta Non-Agresi (+0.01%) - logic di 2_pakta_non_agresi/
3. Aliansi Pertahanan (+0.01%) - logic di 3_aliansi_pertahanan/
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
DECAY_RATE  = 0.999   # -0.1% per hari

def calculate_master_drift(countries: list) -> list:
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

        # 5. Total Akumulasi
        total_delta = base_delta + pact_delta + alliance_delta + isolation_penalty
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
        countries = json.loads(input_data)
        
        results = calculate_master_drift(countries)
        print(json.dumps(results))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
