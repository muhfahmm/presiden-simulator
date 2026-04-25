"""
Tingkatkan Hubungan (NPC Grant Initiatives)
NPCs with good relations can grant small financial aid to user.
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
        budget_gain = 0

        for source in list(matrix.keys()):
            if source == user:
                continue
            user_rel = matrix.get(source, {}).get(user, None)
            if not user_rel:
                continue

            score = user_rel.get("s", 50)
            has_embassy = user_rel.get("e", 0) == 1

            # Only countries with embassies and high relations can grant aid
            if has_embassy and score >= 70 and random.random() < 0.02:
                grant = random.randint(500000, 2000000)
                budget_gain += grant
                country_display = source.replace("_", " ").title()
                events.append({
                    "type": "NPC_GRANT_TO_USER",
                    "source": country_display,
                    "subject": f"Hibah Bantuan dari {country_display}",
                    "content": f"{country_display} memberikan hibah sebesar ${grant:,} sebagai bentuk dukungan kerjasama bilateral yang telah terjalin."
                })

        print(json.dumps({
            "matrix": matrix,
            "events": events,
            "budgetGain": budget_gain
        }))
    except Exception as e:
        print(json.dumps({"matrix": {}, "events": [], "budgetGain": 0}))

if __name__ == "__main__":
    main()
