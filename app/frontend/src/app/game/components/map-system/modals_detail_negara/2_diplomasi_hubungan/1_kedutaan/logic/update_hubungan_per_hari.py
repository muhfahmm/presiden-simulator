"""
Logika Perubahan Hubungan Diplomatik Harian (Relation Drift)
=============================================================
Aturan:
  - Jika negara MEMILIKI kedutaan besar: hubungan naik 0.1% per hari
  - Jika negara TIDAK MEMILIKI kedutaan besar: hubungan turun 0.1% per hari
  - Skor dikunci antara 0 dan 100

Usage:
  python update_hubungan_per_hari.py '<json_array>'

Input JSON array:
  [
    {"country_id": "malaysia", "current_score": 75, "has_embassy": true},
    {"country_id": "india", "current_score": 40, "has_embassy": false},
    ...
  ]

Output JSON array:
  [
    {"country_id": "malaysia", "new_score": 75.075, "delta": 0.075},
    {"country_id": "india", "new_score": 39.96, "delta": -0.04},
    ...
  ]
"""

import sys
import json

GROWTH_RATE = 1.001   # +0.1% per hari
DECAY_RATE  = 0.999   # -0.1% per hari


def calculate_drift(countries: list) -> list:
    """Menghitung perubahan skor hubungan harian untuk semua negara."""
    results = []

    for entry in countries:
        country_id = entry.get("country_id", "unknown")
        current_score = float(entry.get("current_score", 50))
        has_embassy = bool(entry.get("has_embassy", False))

        if has_embassy:
            new_score = current_score * GROWTH_RATE
        else:
            new_score = current_score * DECAY_RATE

        # Clamp between 0 and 100
        new_score = max(0.0, min(100.0, new_score))
        delta = round(new_score - current_score, 4)
        new_score = round(new_score, 2)

        results.append({
            "country_id": country_id,
            "new_score": new_score,
            "delta": delta
        })

    return results


if __name__ == "__main__":
    # Membaca data dari stdin untuk menghindari limit panjang argumen baris perintah (Windows)
    try:
        input_data = sys.stdin.read()
        if not input_data:
            result = {"error": "Input data kosong"}
            print(json.dumps(result))
            sys.exit(1)
        countries = json.loads(input_data)
    except json.JSONDecodeError as e:
        result = {"error": f"JSON tidak valid: {str(e)}"}
        print(json.dumps(result))
        sys.exit(1)

    if not isinstance(countries, list):
        result = {"error": "Input harus berupa array JSON"}
        print(json.dumps(result))
        sys.exit(1)

    results = calculate_drift(countries)
    print(json.dumps(results))
