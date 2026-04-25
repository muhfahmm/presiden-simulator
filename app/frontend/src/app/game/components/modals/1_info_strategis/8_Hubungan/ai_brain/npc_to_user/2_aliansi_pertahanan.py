"""
Aliansi Pertahanan (Defense Alliance) Proposal Generator
ONLY proposes alliances from countries that ALREADY HAVE an embassy (e=1)
AND a non-aggression pact (p=1) with the user.

Reads: { matrix, userCountry }
Outputs: { matrix, events, budgetGain }
"""
import sys, json, random

ALLIANCE_CONTENT = [
    "Setelah hubungan diplomatik yang kuat terjalin, {country} mengusulkan pembentukan Aliansi Pertahanan Bersama selama {duration} tahun. Aliansi ini mencakup bantuan militer otomatis jika salah satu pihak diserang, latihan militer gabungan, dan pertukaran intelijen strategis.",
    "Pemerintah {country} mengajukan proposal Aliansi Pertahanan bilateral berdurasi {duration} tahun yang mencakup koordinasi militer penuh, akses ke teknologi pertahanan bersama, dan komitmen pertahanan bersama.",
    "{country} mengusulkan Aliansi Pertahanan selama {duration} tahun untuk memperkuat posisi strategis kedua negara di kawasan. Cakupan aliansi meliputi: pertahanan siber bersama, patroli maritim gabungan, dan sistem pertahanan udara terpadu.",
    "Berdasarkan pakta non-agresi yang telah ditandatangani, {country} mengusulkan peningkatan ke Aliansi Pertahanan penuh selama {duration} tahun, termasuk pembangunan pangkalan militer bersama dan program transfer teknologi pertahanan.",
    "Kementerian Pertahanan {country} mengajukan Aliansi Pertahanan strategis berdurasi {duration} tahun yang meliputi operasi gabungan anti-terorisme, berbagi intelijen real-time, dan pengembangan industri pertahanan bersama."
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
            has_pact = user_rel.get("p", 0) == 1
            has_alliance = user_rel.get("a", 0) == 1
            score = user_rel.get("s", 50)

            if has_embassy and has_pact and not has_alliance and score >= 60:
                eligible_countries.append((source, score))

        if eligible_countries:
            num_proposals = min(len(eligible_countries), random.randint(0, 1))
            eligible_countries.sort(key=lambda x: x[1], reverse=True)
            selected = random.sample(eligible_countries, num_proposals) if num_proposals > 0 else []
            
            for country_id, score in selected:
                country_display = country_id.replace("_", " ").title()
                duration = random.choice([1, 5, 10])
                content = random.choice(ALLIANCE_CONTENT).format(country=country_display, duration=duration)

                events.append({
                    "type": "USER_ALLIANCE_OFFER",
                    "source": country_display,
                    "subject": f"tawaran aliansi pertahanan ({country_display})",
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
