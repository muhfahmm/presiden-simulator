import sys, json

def main():
    try:
        score = float(sys.argv[1]) if len(sys.argv) > 1 else 0
        required = 60
        
        print(json.dumps({
            "eligible": score >= required,
            "current_score": score,
            "required_score": required
        }))
    except Exception as e:
        print(json.dumps({"error": str(e)}))

if __name__ == "__main__":
    main()
