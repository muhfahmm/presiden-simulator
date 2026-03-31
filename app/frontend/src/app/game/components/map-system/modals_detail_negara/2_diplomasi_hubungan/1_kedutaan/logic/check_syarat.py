"""
Logika Validasi Syarat Pembangunan Kedutaan Besar
=================================================
Syarat utama:
  - Hubungan diplomatik (relation_score) harus >= 50

Usage:
  python check_syarat.py <relation_score>

Output: JSON
  {
    "eligible": true/false,
    "message": "...",
    "current_score": ...,
    "required_score": 50,
    "shortfall": ...
  }
"""

import sys
import json

REQUIRED_SCORE = 50

def check_eligibility(relation_score: int) -> dict:
    eligible = relation_score >= REQUIRED_SCORE
    shortfall = max(0, REQUIRED_SCORE - relation_score)
    
    if eligible:
        message = "Hubungan diplomatik mencukupi untuk membangun Kedutaan Besar."
    else:
        message = "Hubungan diplomatik terlalu rendah. Diperlukan minimal skor 50 untuk mendirikan fasilitas diplomatik."

    return {
        "eligible": eligible,
        "message": message,
        "current_score": relation_score,
        "required_score": REQUIRED_SCORE,
        "shortfall": shortfall
    }

if __name__ == "__main__":
    if len(sys.argv) < 2:
        result = {
            "error": "Argumen tidak lengkap. Dibutuhkan: relation_score"
        }
        print(json.dumps(result))
        sys.exit(1)

    try:
        score = int(sys.argv[1])
    except ValueError:
        result = {
            "error": "Argumen invalid. relation_score harus berupa angka (integer)."
        }
        print(json.dumps(result))
        sys.exit(1)

    result = check_eligibility(score)
    print(json.dumps(result))
