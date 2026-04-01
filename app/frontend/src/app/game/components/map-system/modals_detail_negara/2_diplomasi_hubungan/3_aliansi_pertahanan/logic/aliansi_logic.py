import sys
import json
from datetime import datetime, timedelta

"""
Logic Aliansi Pertahanan (Defense Alliance)
==========================================
Syarat:
- relation_score >= 75 (High Trust)
- Biaya administrasi tinggi (diproses di frontend)

Komitmen:
1. Bantuan Militer Cepat
2. Latihan Militer Bersama
3. Berbagi Intelijen
"""

def check_alliance_eligibility(relation_score, duration_years):
    REQUIRED_SCORE = 75
    
    eligible = relation_score >= REQUIRED_SCORE
    
    if not eligible:
        return {
            "eligible": False,
            "message": f"Hubungan diplomatik belum cukup kuat ({relation_score}/75) untuk sebuah Aliansi Militer.",
            "error": "INSUFFICIENT_TRUST"
        }
    
    return {
        "eligible": True,
        "message": "Persetujuan Aliansi Pertahanan siap ditandatangani.",
        "data": {
            "status": "active",
            "durationYears": duration_years,
            "perks": {
                "militaryAid": True,
                "jointExercise": True,
                "intelSharing": True
            }
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
                clean_date = starting_date_str.replace('Z', '').split('.')[0]
                now = datetime.fromisoformat(clean_date)
            except:
                now = datetime.now()
        else:
            now = datetime.now()

        result = check_alliance_eligibility(score, duration)
        
        if result["eligible"]:
            end_date = now + timedelta(days=365 * duration)
            result["data"]["startDate"] = now.isoformat()
            result["data"]["endDate"] = end_date.isoformat()

        print(json.dumps(result))
        
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
