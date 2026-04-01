import sys
import json

"""
Logic Pemutusan Pakta Non-Agresi
================================
Efek:
- Penalti Hubungan: -25
"""

def process_break_pact(target_country):
    PENALTY = -25
    
    return {
        "success": True,
        "message": f"Pakta Non-Agresi dengan {target_country} telah diputus secara sepihak.",
        "penalty": PENALTY,
        "new_status": "none"
    }

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "Missing target_country argument"}))
        sys.exit(1)
        
    target = sys.argv[1]
    result = process_break_pact(target)
    print(json.dumps(result))
