import sys, json

def main():
    try:
        current_score = float(sys.argv[1]) if len(sys.argv) > 1 else 50
        penalty = 20.0
        new_score = max(0, current_score - penalty)
        
        print(json.dumps({
            "penalty": penalty,
            "new_score": new_score,
            "description": "Penghancuran kedutaan menyebabkan krisis diplomatik besar."
        }))
    except Exception as e:
        print(json.dumps({"error": str(e)}))

if __name__ == "__main__":
    main()
