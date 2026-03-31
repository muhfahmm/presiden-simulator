"""
Logika Penalti Hubungan Diplomatik Akibat Penghancuran Kedutaan Besar
=====================================================================
Menghitung seberapa besar hubungan memburuk ketika sebuah negara 
memutuskan untuk menghancurkan fasilitas diplomatik utamanya.

Penalti Dasar: -30 Poin
Faktor Pengali:
  - Hubungan saat ini Baik (>70): Penalti Berlipat karena pengkhianatan (+20% penalti)
  - Hubungan saat ini Buruk (<30): Penalti Berkurang karena sudah tegang (-20% penalti)

Usage:
  python efek_penghancuran_kedubes.py <current_relation_score>
"""

import sys
import json

def calculate_destruction_penalty(current_score: float) -> dict:
    BASE_PENALTY = -30
    multiplier = 1.0
    
    if current_score > 70:
        multiplier = 1.2  # Pengkhianatan berat
        reason = "Pengkhianatan mengejutkan dari sekutu dekat"
    elif current_score < 30:
        multiplier = 0.8  # Sudah diprediksi
        reason = "Konfirmasi dari hubungan yang memang sudah tegang"
    else:
        reason = "Pelanggaran protokol diplomatik standar"

    final_penalty = BASE_PENALTY * multiplier
    new_score = max(0, current_score + final_penalty)

    return {
        "penalty": final_penalty,
        "new_score": new_score,
        "reason": reason,
        "impact_level": "Sangat Buruk" if final_penalty <= -35 else "Buruk"
    }

if __name__ == "__main__":
    try:
        current_score = float(sys.argv[1]) if len(sys.argv) > 1 else 50.0
        result = calculate_destruction_penalty(current_score)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
