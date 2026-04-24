"""
Kedutaan Besar NPC-to-NPC
Simulates AI countries building embassies with each other.

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
        countries = [k for k in matrix.keys() if k != user]

        # Small daily chance for NPCs to build embassies with each other
        for i, source in enumerate(countries):
            for target in countries[i+1:]:
                src_rel = matrix.get(source, {}).get(target, None)
                if not src_rel:
                    continue

                has_embassy = src_rel.get("e", 0) == 1
                score = src_rel.get("s", 50)

                # 0.5% chance per day if score >= 55 and no embassy yet
                if not has_embassy and score >= 55 and random.random() < 0.005:
                    matrix[source][target]["e"] = 1
                    # Ensure reverse direction also has embassy
                    if target in matrix and source in matrix[target]:
                        matrix[target][source]["e"] = 1

                    src_display = source.replace("_", " ").title()
                    tgt_display = target.replace("_", " ").title()
                    events.append({
                        "type": "GLOBAL_NEWS",
                        "source": "Intelijen",
                        "subject": f"Pembukaan Kedutaan Besar {src_display} - {tgt_display}",
                        "content": f"{src_display} dan {tgt_display} secara resmi membuka kedutaan besar bilateral, menandai era baru dalam hubungan diplomatik kedua negara."
                    })

        print(json.dumps({
            "matrix": matrix,
            "events": events,
            "budgetGain": 0
        }))
    except Exception as e:
        print(json.dumps({"matrix": {}, "events": [], "budgetGain": 0}))

if __name__ == "__main__":
    main()
