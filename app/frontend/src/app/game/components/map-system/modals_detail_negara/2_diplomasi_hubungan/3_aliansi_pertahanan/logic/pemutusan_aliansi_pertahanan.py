import sys
import json

"""
Logic Pemutusan Aliansi Pertahanan
==================================
Efek:
- Penalti Hubungan: -50
"""

def process_break_alliance(target_country):
    PENALTY = -50
    
    return {
        "success": True,
        "message": f"Aliansi Militer dengan {target_country} telah diakhiri secara sepihak.",
        "penalty": PENALTY,
        "new_status": "none"
    }

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "Missing target_country argument"}))
        sys.exit(1)
        
    target = sys.argv[1]
    result = process_break_alliance(target)
    print(json.dumps(result))
