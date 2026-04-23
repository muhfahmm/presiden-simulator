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

        # Small daily drift for all NPC-to-NPC and NPC-to-User relations
        for source in list(matrix.keys()):
            for target in list(matrix.get(source, {}).keys()):
                rel = matrix[source][target]
                score = rel.get("s", 50)

                # Gentle random drift: -0.5 to +0.5
                drift = random.uniform(-0.5, 0.5)

                # Diplomatic bonus: embassies stabilize relationships
                if rel.get("e", 0) == 1:
                    drift += 0.1  # Embassy provides small positive bias
                if rel.get("p", 0) == 1:
                    drift += 0.05  # Pact provides stability
                if rel.get("a", 0) == 1:
                    drift += 0.05  # Alliance provides stability

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
