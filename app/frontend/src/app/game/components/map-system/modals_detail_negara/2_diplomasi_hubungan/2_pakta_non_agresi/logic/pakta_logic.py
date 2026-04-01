import sys
import json
from datetime import datetime, timedelta

"""
Logic Pakta Non-Agresi
======================
Syarat:
- relation_score >= 50
- Biaya administrasi (diproses di frontend)

Komitmen:
1. Gencatan Senjata Total
2. Zona Demiliterisasi (DMZ)
3. Durasi (1, 5, atau 10 tahun)
"""

def check_pact_eligibility(relation_score, duration_years):
    REQUIRED_SCORE = 50
    
    eligible = relation_score >= REQUIRED_SCORE
    
    if not eligible:
        return {
            "eligible": False,
            "message": f"Skor hubungan diplomatik ({relation_score}) terlalu rendah. Minimal dibutuhkan 50.",
            "error": "INSUFFICIENT_RELATION"
        }
    
    # Kalkulasi Waktu (Simulasi)
    now = datetime.now()
    # 1 tahun in-game disimulasikan sebagai 365 hari untuk perhitungan durasi
    end_date = now + timedelta(days=365 * duration_years)
    
    return {
        "eligible": True,
        "message": "Syarat terpenuhi. Pakta siap ditandatangani.",
        "data": {
            "status": "active",
            "startDate": now.isoformat(),
            "endDate": end_date.isoformat(),
            "durationYears": duration_years,
            "rules": {
                "ceasefire": True,
                "dmz": True
            },
            "commitments": [
                "Gencatan Senjata Total (Larangan serangan unit)",
                "Zona Demiliterisasi (DMZ) di perbatasan",
                f"Durasi Kontrak: {duration_years} Tahun"
            ]
        }
    }

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(json.dumps({"error": "Missing arguments: relation_score and duration_years"}))
        sys.exit(1)
        
    try:
        score = int(round(float(sys.argv[1])))
        duration = int(sys.argv[2])
        
        # Optional: starting_date from game
        starting_date_str = sys.argv[3] if len(sys.argv) > 3 else None
        
        if starting_date_str:
            try:
                # Handle ISO format from JavaScript (e.g. 2026-01-01T00:00:00.000Z)
                # We strip the 'Z' and take the first 19 chars for simple parsing if needed
                clean_date = starting_date_str.replace('Z', '').split('.')[0]
                now = datetime.fromisoformat(clean_date)
            except:
                now = datetime.now()
        else:
            now = datetime.now()

        result = check_pact_eligibility(score, duration)
        
        # Override dates based on our 'now'
        if result["eligible"]:
            end_date = now + timedelta(days=365 * duration)
            result["data"]["startDate"] = now.isoformat()
            result["data"]["endDate"] = end_date.isoformat()

        print(json.dumps(result))
        
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
