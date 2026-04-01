import sys
import json

"""
Logic Perjanjian Dagang Baru
============================
Syarat:
- Skor Hubungan Minimal: 40
- Biaya: 25.000
"""

def process_trade_agreement(relation_score):
    REQUIRED_SCORE = 40
    COST = 25000
    
    if relation_score < REQUIRED_SCORE:
        return {
            "eligible": False,
            "message": f"Skor hubungan minimal {REQUIRED_SCORE} diperlukan untuk memulai perdagangan."
        }
    
    return {
        "eligible": True,
        "message": "Syarat terpenuhi. Perjanjian dagang dapat ditandatangani.",
        "cost": COST,
        "data": {
            "status": "active",
            "type": "Perdagangan"
        }
    }

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "Missing relation_score argument"}))
        sys.exit(1)
        
    try:
        score = float(sys.argv[1])
        result = process_trade_agreement(score)
        print(json.dumps(result))
    except ValueError:
        print(json.dumps({"error": "Invalid relation_score format"}))
