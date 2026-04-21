"""
Contract Proposals — AI-to-User Module
AI menawarkan kontrak dagang jangka panjang (recurring trade) kepada user.

Logika:
1. Hanya negara dengan hubungan > 70 dan sudah ada trade agreement
2. Kontrak: "Kami beli/jual X unit komoditas Y setiap bulan selama N bulan"
3. Harga terikat (locked price)
4. Throttle: sangat jarang (2% peluang per hari)
"""
import sys
import json
import random
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))
from shared.commodity_analyzer import find_surplus_commodities, find_deficit_commodities, COMMODITY_LABELS
from shared.price_model import calculate_contract_price


def simulate_contract_proposals(input_data):
    """AI mengajukan kontrak dagang jangka panjang."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "indonesia").lower().strip()
    countries_data = input_data.get("countriesData", {})
    user_stock = input_data.get("userStock", {})
    day_timestamp = input_data.get("dayTimestamp", 0)
    existing_contracts = input_data.get("existingContracts", [])

    events = []
    contracts = []

    # THROTTLING — Sangat jarang: 2% peluang per hari
    if random.random() > 0.02:
        return {"events": [], "contracts": []}

    # Cegah kontrak ganda terlalu banyak
    active_contract_count = len([c for c in existing_contracts if c.get("status") == "active"])
    if active_contract_count >= 3:
        return {"events": [], "contracts": []}

    candidates = []

    for source_country, targets in matrix.items():
        source_lower = source_country.lower().strip()
        if source_lower == user_country:
            continue

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

        # Syarat tinggi: hubungan > 70, punya trade + embassy
        if not has_trade or not has_embassy or score < 70:
            continue

        country_data = countries_data.get(source_lower, countries_data.get(source_country, {}))
        if not country_data:
            continue

        surpluses = find_surplus_commodities(country_data, min_production=3)
        deficits = find_deficit_commodities(country_data)

        if surpluses:
            # Kontrak jual: AI jual surplus ke user
            for s in surpluses[:3]:
                candidates.append({
                    "country": source_country,
                    "score": score,
                    "direction": "ai_sells",
                    "commodity": s
                })

        if deficits:
            # Kontrak beli: AI beli dari user (jika user punya stok)
            for d in deficits[:3]:
                if user_stock.get(d["key"], 0) > 100:
                    candidates.append({
                        "country": source_country,
                        "score": score,
                        "direction": "ai_buys",
                        "commodity": d
                    })

    if not candidates:
        return {"events": [], "contracts": []}

    # Sort by score & pick best
    candidates.sort(key=lambda x: x["score"], reverse=True)

    # Cek apakah sudah ada pending contract dari negara yang sama
    existing_pending = set(c.get("country", "").lower() for c in existing_contracts if c.get("status") in ["pending", "active"])

    chosen = None
    for c in candidates:
        if c["country"].lower() not in existing_pending:
            chosen = c
            break

    if not chosen:
        return {"events": [], "contracts": []}

    # Generate kontrak
    duration_months = random.choice([3, 6, 6, 12])
    amount_per_month = max(50, round(chosen["commodity"]["production"] * random.uniform(0.05, 0.15)))
    contract_price = calculate_contract_price(chosen["commodity"]["key"], day_timestamp, duration_months)

    country_name = chosen["country"].capitalize()
    commodity_label = COMMODITY_LABELS.get(chosen["commodity"]["key"], chosen["commodity"]["key"])

    direction_label = "menjual" if chosen["direction"] == "ai_sells" else "membeli"
    direction_detail = (
        f"menawarkan penjualan rutin {commodity_label} kepada Anda"
        if chosen["direction"] == "ai_sells"
        else f"ingin membeli {commodity_label} dari Anda secara rutin"
    )

    contract = {
        "id": f"contract_{chosen['country']}_{chosen['commodity']['key']}_{day_timestamp}",
        "type": "trade_contract",
        "country": chosen["country"],
        "countryLabel": country_name,
        "commodity": chosen["commodity"]["key"],
        "commodityLabel": commodity_label,
        "direction": chosen["direction"],
        "amountPerMonth": amount_per_month,
        "pricePerUnit": contract_price,
        "durationMonths": duration_months,
        "remainingMonths": duration_months,
        "status": "pending",
        "dayCreated": day_timestamp
    }
    contracts.append(contract)

    total_value = amount_per_month * contract_price * duration_months
    events.append({
        "type": "AI_TRADE_CONTRACT_PROPOSAL",
        "source": chosen["country"],
        "subject": f"kontrak dagang: {commodity_label} dari {country_name}",
        "content": (
            f"Pemerintah {country_name} mengajak kontrak dagang rutin {commodity_label} "
            f"selama {duration_months} bulan dengan volume {amount_per_month:,} unit/bulan."
        ),
        "priority": "high",
        "contractId": contract["id"]
    })

    events.append({
        "type": "GLOBAL_NEWS",
        "source": chosen["country"],
        "target": user_country,
        "subject": f"Kontrak: {country_name} menawarkan kontrak dagang dengan negara kita",
        "content": (
            f"Sumber diplomatik mengonfirmasi bahwa {country_name} dan {user_country.capitalize()} "
            f"tengah dalam pembicaraan intensif untuk kontrak perdagangan {commodity_label} jangka panjang. "
            f"Kesepakatan ini diperkirakan bernilai {total_value:,} dan berdurasi {duration_months} bulan."
        )
    })

    return {"events": events, "contracts": contracts}


if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        result = simulate_contract_proposals(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e), "events": [], "contracts": []}))
        sys.exit(1)
