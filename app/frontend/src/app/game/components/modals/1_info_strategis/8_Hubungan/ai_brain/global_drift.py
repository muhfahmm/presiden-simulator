"""
Global Drift Engine
Updates relationship scores between all nations.
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

        events = []

        # Monthly Drift for all NPC-to-NPC and NPC-to-User relations
        for source in list(matrix.keys()):
            for target in list(matrix.get(source, {}).keys()):
                rel = matrix[source][target]
                score = rel.get("s", 50)

                # Monthly Volatility Drift
                drift = random.uniform(-2.0, 2.0)

                # Diplomatic bonus/penalty based on Embassy presence (Monthly Scale)
                if rel.get("e", 0) == 1:
                    drift += 2.0  # Embassy provides positive bias
                else:
                    drift -= 2.0  # Lack of embassy causes diplomatic decay

                if rel.get("p", 0) == 1:
                    drift += 1.0  # Pact provides stability
                if rel.get("a", 0) == 1:
                    drift += 1.0  # Alliance provides stability

                new_score = max(0, min(100, score + drift))
                matrix[source][target]["s"] = round(new_score, 4)

        print(json.dumps({
            "matrix": matrix,
            "events": events,
            "budgetGain": 0
        }))
    except Exception as e:
        print(json.dumps({"matrix": {}, "events": [], "budgetGain": 0}))

if __name__ == "__main__":
    main()
