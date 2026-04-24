"""
Perjanjian Dagang (Trade Agreement) Proposal Generator
ONLY proposes trade agreements from countries that ALREADY HAVE an embassy (e=1).

Reads: { matrix, userCountry }
Outputs: { matrix, events, budgetGain }
"""
import sys, json, random

TRADE_TEMPLATES = [
    "Perjanjian Kerjasama Perdagangan Bilateral",
    "Kesepakatan Tarif Preferensial",
    "Perjanjian Perdagangan Bebas Terbatas",
    "Kesepakatan Ekspor-Impor Strategis",
    "Perjanjian Investasi Lintas Batas",
    "Kesepakatan Perdagangan Komoditas",
    "Perjanjian Transfer Teknologi Ekonomi",
    "Kerjasama Zona Ekonomi Khusus"
]

CONTENT_TEMPLATES = [
    "{country} mengusulkan perjanjian kerjasama perdagangan bilateral yang akan membuka akses pasar baru untuk komoditas unggulan kedua negara.",
    "Setelah terjalinnya hubungan diplomatik resmi, {country} menawarkan kesepakatan tarif preferensial yang akan mengurangi hambatan perdagangan dan meningkatkan volume ekspor-impor bilateral.",
    "Pemerintah {country} mengajukan proposal perdagangan bebas terbatas yang akan mendorong pertumbuhan ekonomi dan menciptakan lapangan kerja di kedua negara.",
    "{country} menawarkan kerjasama investasi lintas batas yang mencakup perlindungan hukum bagi investor dan kemudahan berusaha di zona ekonomi khusus."
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
            has_trade = user_rel.get("t", 0) == 1
            score = user_rel.get("s", 50)

            # STRICT: Must have embassy, must NOT already have a trade deal, score >= 50
            if has_embassy and not has_trade and score >= 50:
                eligible_countries.append((source, score))

        if eligible_countries:
            num_proposals = min(len(eligible_countries), random.randint(0, 1))
            eligible_countries.sort(key=lambda x: x[1], reverse=True)
            selected = random.sample(eligible_countries, num_proposals) if num_proposals > 0 else []
            
            for country_id, score in selected:
                country_display = country_id.replace("_", " ").title()
                template = random.choice(TRADE_TEMPLATES)
                content = random.choice(CONTENT_TEMPLATES).format(country=country_display)

                events.append({
                    "type": "USER_TRADE_OFFER",
                    "source": country_display,
                    "subject": f"{template} ({country_display})",
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
