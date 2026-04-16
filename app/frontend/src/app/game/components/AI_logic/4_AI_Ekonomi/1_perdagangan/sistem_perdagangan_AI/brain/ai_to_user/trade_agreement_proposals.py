"""
Trade Agreement Proposals — AI-to-User Module
Negara AI yang BELUM punya perjanjian dagang (t=0) dengan user
menawarkan proposal perjanjian dagang (bukan komoditas).

Logika:
1. Scan negara AI di matrix yang t=0 (belum bermitra dagang)
2. Hanya negara dengan skor hubungan >= 40 (cukup ramah)
3. Throttle: 5% peluang per hari
4. Generate event type: "AI_TRADE_AGREEMENT_PROPOSAL"
5. Jika user terima → set t=1 di matrix (jadi mitra dagang)
"""
import sys
import json
import random
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))
from shared.commodity_analyzer import find_surplus_commodities, COMMODITY_LABELS


def simulate_trade_agreement_proposals(input_data):
    """AI tanpa perjanjian dagang menawarkan proposal perjanjian ke user."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "indonesia").lower().strip()
    countries_data = input_data.get("countriesData", {})
    day_timestamp = input_data.get("dayTimestamp", 0)

    events = []
    trade_agreements = []

    # THROTTLING — 5% peluang per hari ada tawaran perjanjian dagang
    if random.random() > 0.05:
        return {"events": [], "tradeAgreements": []}

    # Kumpulkan negara yang BELUM punya trade agreement dengan user
    potential_proposers = []

    for source_country, targets in matrix.items():
        source_lower = source_country.lower().strip()
        if source_lower == user_country:
            continue

        # Cek hubungan dengan user
        user_rel = None
        for target_key, rel_data in targets.items():
            if target_key.lower().strip() == user_country:
                user_rel = rel_data
                break

        if not user_rel:
            continue

        score = user_rel.get("s", 50)
        has_trade = user_rel.get("t", 0) == 1
        has_embassy = user_rel.get("e", 0) == 1

        # KUNCI HIERARKI: Hanya jika sudah ada KEDUTAAN (e=1) tapi BELUM ada TRADE (t=0)
        if has_trade or not has_embassy:
            continue

        # Minimal skor hubungan >= 40 (cukup ramah untuk mengusulkan dagang)
        if score < 40:
            continue

        # Cek apakah negara ini punya komoditas yang bisa ditawarkan nanti
        country_data = countries_data.get(source_lower, countries_data.get(source_country, {}))
        if not country_data:
            continue

        surpluses = find_surplus_commodities(country_data, min_production=1)
        top_commodities = [s["label"] for s in surpluses[:3]]
        if not top_commodities:
            top_commodities = ["komoditas strategis"]

        potential_proposers.append({
            "country": source_country,
            "score": score,
            "has_embassy": has_embassy,
            "top_commodities": top_commodities
        })

    if not potential_proposers:
        return {"events": [], "tradeAgreements": []}

    # SMART SELECTION: Weighted random — negara dengan skor lebih tinggi lebih mungkin
    def get_weight(p):
        base = p["score"] ** 1.5
        if p["has_embassy"]:
            base *= 2.0  # Punya kedutaan = lebih mungkin mengajukan kerjasama dagang
        return base

    weights = [get_weight(p) for p in potential_proposers]
    selected = random.choices(potential_proposers, weights=weights, k=min(2, len(potential_proposers)))

    # Deduplicate
    unique_selected = []
    seen = set()
    for p in selected:
        if p["country"] not in seen:
            unique_selected.append(p)
            seen.add(p["country"])

    for proposer in unique_selected:
        country_name = proposer["country"].capitalize()
        commodities_text = ", ".join(proposer["top_commodities"])
        score = proposer["score"]

        # Tentukan tipe proposal berdasarkan skor
        if score >= 70:
            proposal_type = "comprehensive"
            duration = "jangka panjang"
            tone = f"Sebagai negara yang telah membangun hubungan erat"
        elif score >= 55:
            proposal_type = "standard"
            duration = "jangka menengah"
            tone = f"Dalam rangka meningkatkan hubungan bilateral"
        else:
            proposal_type = "exploratory"
            duration = "percobaan"
            tone = f"Sebagai langkah awal untuk menjajaki potensi kerjasama"

        agreement_id = f"trade_agreement_{proposer['country']}_{day_timestamp}"

        agreement = {
            "id": agreement_id,
            "type": "trade_agreement_proposal",
            "country": proposer["country"],
            "countryLabel": country_name,
            "proposalType": proposal_type,
            "score": score,
            "topCommodities": proposer["top_commodities"],
            "status": "pending",
            "dayCreated": day_timestamp,
            "expiryDays": 14  # Berlaku 14 hari
        }
        trade_agreements.append(agreement)

        # Notifikasi untuk user
        events.append({
            "type": "AI_TRADE_AGREEMENT_PROPOSAL",
            "source": proposer["country"],
            "subject": f"tawaran kemitraan: dari {country_name}",
            "content": (
                f"Pemerintah {country_name} mengajak kemitraan perdagangan dengan negara kita "
                f"untuk membuka akses pasar {commodities_text}."
            ),
            "priority": "high",
            "agreementId": agreement_id
        })

        # Berita global
        events.append({
            "type": "GLOBAL_NEWS",
            "source": proposer["country"],
            "target": user_country,
            "category": "economy",
            "subject": f"Ekonomi: {country_name} menawarkan kemitraan perdagangan",
            "content": (
                f"Pemerintah {country_name} dilaporkan telah mengirimkan proposal formal "
                f"untuk membentuk perjanjian Kerjasama Perdagangan bilateral dengan {user_country.capitalize()}. "
                f"Para analis menilai langkah ini berpotensi membuka akses pasar baru bagi kedua negara, "
                f"terutama di sektor {commodities_text}."
            )
        })

    return {"events": events, "tradeAgreements": trade_agreements}


if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        result = simulate_trade_agreement_proposals(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e), "events": [], "tradeAgreements": []}))
        sys.exit(1)
