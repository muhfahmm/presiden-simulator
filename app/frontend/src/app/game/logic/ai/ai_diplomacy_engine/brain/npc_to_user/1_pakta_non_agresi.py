"""
Pakta Non-Agresi (Non-Aggression Pact) Proposal Generator
ONLY proposes pacts from countries that ALREADY HAVE an embassy (e=1) with the user.

Reads: { matrix, userCountry }
Outputs: { matrix, events, budgetGain }
"""
import sys, json, random

PACT_CONTENT = [
    "Pemerintah {country} mengusulkan penandatanganan Pakta Non-Agresi bilateral selama {duration} tahun. Pakta ini menjamin bahwa kedua negara tidak akan melakukan tindakan agresi militer satu sama lain dan akan menyelesaikan sengketa melalui jalur diplomatik.",
    "Sebagai bentuk komitmen terhadap perdamaian, {country} mengajukan pakta non-agresi selama {duration} tahun yang mencakup gencatan senjata permanen, zona demiliterisasi di perbatasan, dan mekanisme penyelesaian konflik bersama.",
    "Kementerian Pertahanan {country} mengusulkan deeskalasi militer dan penandatanganan pakta non-agresi dengan masa berlaku {duration} tahun untuk menjaga stabilitas kawasan.",
    "{country} menawarkan kerjasama keamanan non-agresi selama {duration} tahun, termasuk komitmen untuk tidak mengembangkan senjata yang ditujukan terhadap pihak lain dan patroli perbatasan bersama.",
    "Dalam rangka memperkuat hubungan bilateral, {country} mengusulkan perjanjian pakta non-agresi berdurasi {duration} tahun yang meliputi pertukaran perwira militer dan latihan bersama untuk membangun kepercayaan."
]

def main():
    try:
        raw = sys.stdin.read()
        data = json.loads(raw)
        matrix = data.get("matrix", {})
        user = data.get("userCountry", "indonesia").lower().strip()

        events = []

        embassy_countries = []
        for source in matrix.keys():
            if source == user:
                continue
            user_rel = matrix.get(source, {}).get(user, None)
            if not user_rel:
                continue

            has_embassy = user_rel.get("e", 0) == 1
            has_pact = user_rel.get("p", 0) == 1
            score = user_rel.get("s", 50)

            if has_embassy and not has_pact and score >= 45:
                embassy_countries.append((source, score))

        if embassy_countries:
            num_proposals = min(len(embassy_countries), random.randint(0, 2))
            embassy_countries.sort(key=lambda x: x[1], reverse=True)
            selected = random.sample(embassy_countries, num_proposals) if num_proposals > 0 else []
            
            for country_id, score in selected:
                country_display = country_id.replace("_", " ").title()
                duration = random.choice([1, 5, 10])
                content = random.choice(PACT_CONTENT).format(country=country_display, duration=duration)

                events.append({
                    "type": "USER_PACT_OFFER",
                    "source": country_display,
                    "subject": f"tawaran pakta non agresi ({country_display})",
                    "content": content,
                    "durationYears": duration
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
