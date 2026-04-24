"""
Tawaran Kedutaan (Embassy Proposal) Generator
NPCs with good relations but NO embassy offer to build one.
Only countries that are NOT yet embassy partners can propose.

Reads: { matrix, userCountry }
Outputs: { matrix, events, budgetGain }
"""
import sys, json, random

EMBASSY_CONTENT_TEMPLATES = [
    "Perwakilan Tetap {country} mengusulkan peningkatan status hubungan diplomatik dari level konsuler ke level duta besar penuh untuk memperdalam kerjasama.",
    "{country} mengajukan proposal pembangunan kedutaan besar bilateral sebagai fondasi kerjasama diplomatik yang lebih erat di masa depan.",
    "Pemerintah {country} menawarkan pembentukan perwakilan diplomatik penuh untuk memfasilitasi dialog politik, kerjasama ekonomi, dan pertukaran budaya.",
    "{country} mengusulkan pembentukan Forum Diplomatik Bilateral tahunan untuk membahas isu-isu strategis bersama secara berkala dan terstruktur."
]

def main():
    try:
        raw = sys.stdin.read()
        data = json.loads(raw)
        matrix = data.get("matrix", {})
        user = data.get("userCountry", "indonesia").lower().strip()

        events = []

        eligible_countries = []
        for source in matrix.keys():
            if source == user:
                continue
            user_rel = matrix.get(source, {}).get(user, None)
            if not user_rel:
                continue

            has_embassy = user_rel.get("e", 0) == 1
            score = user_rel.get("s", 50)

            # Must NOT already have an embassy, and must have decent relations
            if not has_embassy and score >= 40:
                eligible_countries.append((source, score))

        if eligible_countries:
            num_proposals = min(len(eligible_countries), random.randint(0, 2))
            eligible_countries.sort(key=lambda x: x[1], reverse=True)
            selected = random.sample(eligible_countries[:10], min(num_proposals, len(eligible_countries[:10]))) if num_proposals > 0 else []
            
            for country_id, score in selected:
                country_display = country_id.replace("_", " ").title()
                content = random.choice(EMBASSY_CONTENT_TEMPLATES).format(country=country_display)

                events.append({
                    "type": "USER_EMBASSY_OFFER",
                    "source": country_display,
                    "subject": f"tawaran pembangunan kedubes ({country_display})",
                    "content": content
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
