"""
NPC Trade Engine — AI-to-AI Module
Simulasi perdagangan otomatis antar negara AI (NPC-to-NPC).
Menghasilkan berita perdagangan global.
"""
import sys
import json
import random
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))
from shared.commodity_analyzer import find_surplus_commodities, find_deficit_commodities, COMMODITY_LABELS


def simulate_npc_trades(input_data):
    """Simulasi perdagangan harian antar NPC."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "indonesia").lower().strip()
    countries_data = input_data.get("countriesData", {})

    events = []
    npc_transactions = []
    new_trade_agreements = []  # AI-to-AI perjanjian dagang baru

    # THROTTLING — 50% peluang per hari ada berita perdagangan NPC
    if random.random() > 0.50:
        return {"events": [], "npcTransactions": [], "newNpcTradeAgreements": []}

    # ═══════════════════════════════════════════════════════════
    # FASE 0: AI-to-AI Trade Agreement Formation
    # Negara yang belum bermitra tapi punya skor > 55 bisa otomatis membentuk perjanjian
    # ═══════════════════════════════════════════════════════════
    if random.random() < 0.08:  # 8% peluang per hari ada perjanjian baru antar NPC
        npc_keys = [k for k in matrix.keys() if k.lower().strip() != user_country]
        random.shuffle(npc_keys)

        for npc_a in npc_keys[:15]:
            if len(new_trade_agreements) >= 1:
                break
            targets_a = matrix.get(npc_a, {})
            for npc_b in npc_keys[:15]:
                if npc_a == npc_b:
                    continue
                rel = targets_a.get(npc_b)
                if not rel:
                    # Cek case-insensitive
                    for k, v in targets_a.items():
                        if k.lower().strip() == npc_b.lower().strip():
                            rel = v
                            break
                if not rel:
                    continue

                score = rel.get("s", 50)
                has_trade = rel.get("t", 0) == 1
                has_embassy = rel.get("e", 0) == 1

                # Sudah bermitra atau Belum punya Kedutaan → skip
                if has_trade or not has_embassy:
                    continue

                # Skor harus > 55 untuk otomatis membentuk perjanjian
                if score < 55:
                    continue

                # Peluang berdasarkan skor: skor 55-100 → peluang 20-80%
                formation_chance = (score - 55) / 45.0 * 0.6 + 0.2
                if random.random() > formation_chance:
                    continue

                name_a = npc_a.capitalize()
                name_b = npc_b.capitalize()

                new_trade_agreements.append({
                    "countryA": npc_a,
                    "countryB": npc_b
                })

                events.append({
                    "type": "GLOBAL_NEWS",
                    "source": npc_a,
                    "target": npc_b,
                    "category": "economy",
                    "subject": f"Perjanjian Dagang Baru: {name_a} — {name_b}",
                    "content": (
                        f"Dalam perkembangan signifikan bagi ekonomi regional, pemerintah {name_a} dan "
                        f"{name_b} hari ini menandatangani Perjanjian Kerjasama Perdagangan bilateral. "
                        f"Kesepakatan ini diharapkan meningkatkan volume perdagangan kedua negara "
                        f"dan membuka akses pasar baru bagi masing-masing sektor unggulan."
                    )
                })
                break  # Max 1 perjanjian baru per hari

    # ═══════════════════════════════════════════════════════════
    # FASE 1: Match surplus-deficit antar negara YANG SUDAH bermitra
    # ═══════════════════════════════════════════════════════════

    # Kumpulkan analisis surplus/deficit semua NPC
    country_analysis = {}
    for country_key in matrix.keys():
        c_lower = country_key.lower().strip()
        if c_lower == user_country:
            continue
        c_data = countries_data.get(c_lower, countries_data.get(country_key, {}))
        if c_data:
            surpluses = find_surplus_commodities(c_data, min_production=2)
            deficits = find_deficit_commodities(c_data)
            if surpluses or deficits:
                country_analysis[country_key] = {
                    "surpluses": surpluses,
                    "deficits": deficits
                }

    if len(country_analysis) < 2:
        return {"events": events, "npcTransactions": npc_transactions, "newNpcTradeAgreements": new_trade_agreements}

    # Match surplus-deficit antar negara
    potential_deals = []
    analyzed_keys = list(country_analysis.keys())
    random.shuffle(analyzed_keys)

    for seller_key in analyzed_keys[:20]:  # Sample max 20 negara
        seller_data = country_analysis[seller_key]
        if not seller_data["surpluses"]:
            continue

        for buyer_key in analyzed_keys[:20]:
            if buyer_key == seller_key:
                continue
            buyer_data = country_analysis[buyer_key]
            if not buyer_data["deficits"]:
                continue

            # === CEK PERJANJIAN DAGANG ===
            # Cek trade_partners dari data awal DAN cek matrix t=1
            orig_seller = countries_data.get(seller_key.lower().strip(), countries_data.get(seller_key, {}))
            orig_buyer = countries_data.get(buyer_key.lower().strip(), countries_data.get(buyer_key, {}))
            
            seller_partners = orig_seller.get("trade_partners", [])
            buyer_partners = orig_buyer.get("trade_partners", [])

            # Cek 1: Apakah mereka bermitra dari database awal
            is_partner = (buyer_key.lower().strip() in [p.lower().strip() for p in seller_partners]) or \
                         (seller_key.lower().strip() in [p.lower().strip() for p in buyer_partners])

            # Cek 2: Apakah mereka bermitra dari matrix diplomatik (t=1)
            if not is_partner:
                seller_targets = matrix.get(seller_key, {})
                for tk, tv in seller_targets.items():
                    if tk.lower().strip() == buyer_key.lower().strip():
                        if tv.get("t", 0) == 1:
                            is_partner = True
                        break

            # Cek 3: Apakah mereka baru saja membentuk perjanjian hari ini
            if not is_partner:
                for na in new_trade_agreements:
                    if (na["countryA"].lower() == seller_key.lower() and na["countryB"].lower() == buyer_key.lower()) or \
                       (na["countryA"].lower() == buyer_key.lower() and na["countryB"].lower() == seller_key.lower()):
                        is_partner = True
                        break
                         
            if not is_partner:
                continue
            
            score = 75

            # Match komoditas: seller surplus A, buyer deficit A
            for surplus in seller_data["surpluses"]:
                for deficit in buyer_data["deficits"]:
                    if surplus["key"] == deficit["key"]:
                        potential_deals.append({
                            "seller": seller_key,
                            "buyer": buyer_key,
                            "commodity": surplus["key"],
                            "score": score,
                            "volume": min(surplus["net_surplus"], deficit["net_deficit"])
                        })

    if not potential_deals:
        return {"events": events, "npcTransactions": npc_transactions, "newNpcTradeAgreements": new_trade_agreements}

    # Sort by volume & pick 1-2 terbaik
    potential_deals.sort(key=lambda x: x["volume"], reverse=True)
    max_deals = random.randint(1, 2)

    used_pairs = set()
    for deal in potential_deals[:max_deals * 3]:
        pair_key = f"{deal['seller']}:{deal['buyer']}"
        if pair_key in used_pairs:
            continue
        used_pairs.add(pair_key)

        seller_name = deal["seller"].capitalize()
        buyer_name = deal["buyer"].capitalize()
        commodity_label = COMMODITY_LABELS.get(deal["commodity"], deal["commodity"])
        volume = max(100, round(deal["volume"] * random.uniform(0.1, 0.3)))

        npc_transactions.append({
            "seller": deal["seller"],
            "buyer": deal["buyer"],
            "commodity": deal["commodity"],
            "volume": volume
        })

        # Berita global
        templates = [
            (
                f"Perdagangan {commodity_label}: {seller_name} Ekspor ke {buyer_name}",
                f"{seller_name} berhasil menyelesaikan kesepakatan ekspor {volume:,} unit {commodity_label} ke {buyer_name}. "
                f"Transaksi ini diperkirakan memperkuat neraca perdagangan kedua negara."
            ),
            (
                f"Integrasi Ekonomi: {seller_name} — {buyer_name} Perkuat Kerjasama {commodity_label}",
                f"Arus perdagangan {commodity_label} antara {seller_name} dan {buyer_name} meningkat signifikan hari ini. "
                f"Para pengamat ekonomi menilai tren ini sebagai indikator positif stabilitas kawasan."
            ),
            (
                f"Pasar Global: {commodity_label} Mengalir dari {seller_name} ke {buyer_name}",
                f"Volume perdagangan {commodity_label} dari {seller_name} ke {buyer_name} mencapai {volume:,} unit hari ini, "
                f"menandai fase baru dalam hubungan dagang kedua negara."
            )
        ]

        title, content = random.choice(templates)
        events.append({
            "type": "GLOBAL_NEWS",
            "source": deal["seller"],
            "target": deal["buyer"],
            "subject": title,
            "content": content
        })

        if len(npc_transactions) >= max_deals:
            break

    return {"events": events, "npcTransactions": npc_transactions, "newNpcTradeAgreements": new_trade_agreements}


if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        result = simulate_npc_trades(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e), "events": [], "npcTransactions": [], "newNpcTradeAgreements": []}))
        sys.exit(1)

