"""
Improve Relations Engine
NPC actively tries to improve relations with user and other NPCs.
Reads: { matrix, userCountry }
Outputs: { matrix, events, budgetGain }
"""
import sys, json, random

def main():
    try:
        raw = sys.stdin.read()
        data = json.loads(raw)
        matrix = data.get("matrix", {})
        user = data.get("userCountry", "indonesia").lower().strip()

        # NPCs with embassies have a small chance to improve relations
        for source in list(matrix.keys()):
            if source == user:
                continue
            user_rel = matrix.get(source, {}).get(user, None)
            if user_rel and user_rel.get("e", 0) == 1:
                score = user_rel.get("s", 50)
                if score < 80:
                    boost = random.uniform(0.1, 0.3)
                    matrix[source][user]["s"] = round(min(100, score + boost), 4)

        print(json.dumps({
            "matrix": matrix,
            "events": [],
            "budgetGain": 0
        }))
    except Exception as e:
        print(json.dumps({"matrix": {}, "events": [], "budgetGain": 0}))

if __name__ == "__main__":
    main()
