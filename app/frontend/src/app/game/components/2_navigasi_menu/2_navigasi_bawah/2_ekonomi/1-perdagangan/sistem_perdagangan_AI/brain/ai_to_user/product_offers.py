"""
Product Offers — AI-to-User Module
AI negara secara proaktif menawarkan komoditas surplus mereka ke pemain.

Logika:
1. Scan negara AI yang punya trade agreement (t=1) dengan user
2. Cek surplus komoditas mereka
3. Throttle: max 1 offer per eksekusi (agar tidak spam)
4. Tentukan harga spesial (5-15% di bawah harga pasar)
5. Generate event type: "AI_TRADE_PRODUCT_OFFER"
"""
import sys
import json
import random
import math
import os

# Tambahkan parent path agar bisa import shared modules
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))
from shared.commodity_analyzer import find_surplus_commodities, COMMODITY_LABELS, ALL_COMMODITIES
from shared.price_model import calculate_ai_offer_price


def simulate_product_offers(input_data):
    """AI menawarkan produk surplus-nya ke user."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "indonesia").lower().strip()
    countries_data = input_data.get("countriesData", {})
    day_timestamp = input_data.get("dayTimestamp", 0)
    existing_offers = input_data.get("existingOffers", [])
    
    events = []
    offers = []

    # THROTTLING GLOBAL — Peluang 8% per hari ada tawaran produk
    if random.random() > 0.08:
        return {"events": [], "offers": []}

    # Kumpulkan negara yang punya trade agreement dengan user
    potential_offerers = []

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

        # Hanya negara dengan trade agreement dan hubungan cukup baik
        if not has_trade or score < 50:
            continue

        # Cek surplus komoditas
        country_data = countries_data.get(source_lower, countries_data.get(source_country, {}))
        if not country_data:
            continue

        surpluses = find_surplus_commodities(country_data, min_production=2)
        if not surpluses:
            continue

        # Skor preferensi: hubungan lebih tinggi → lebih prioritas
        preference = score + (10 if has_embassy else 0)
        potential_offerers.append({
            "country": source_country,
            "score": score,
            "preference": preference,
            "surpluses": surpluses,
            "has_embassy": has_embassy
        })

    if not potential_offerers:
        return {"events": [], "offers": []}

    # Sort potential offerers
    if not potential_offerers:
        return {"events": [], "offers": []}

    # SMART SELECTION: Weighted random selection based on score
    # Allies (score > 80) get much higher weights than neutral nations
    def get_weight(o):
        base = o["score"] ** 2  # Exponential scaling for better bias
        if o["has_embassy"]: base *= 1.5
        return base

    # Pilih up to 5 kandidat secara acak berbobot (Variety)
    weights = [get_weight(o) for o in potential_offerers]
    selected_offerers = random.choices(potential_offerers, weights=weights, k=min(5, len(potential_offerers)))
    
    # Hilangkan duplikat dari choices
    unique_candidates = []
    seen = set()
    for o in selected_offerers:
        if o["country"] not in seen:
            unique_candidates.append(o)
            seen.add(o["country"])

    # Cegah duplikat — jangan tawarkan dari negara yang sudah ada pending offer
    existing_countries = set(o.get("country", "").lower() for o in existing_offers if o.get("status") == "pending")
    
    # USER NEED AWARENESS: Menganalisis apa yang user butuhkan
    user_data = countries_data.get(user_country, {})
    user_needs = []
    if user_data:
        from shared.commodity_analyzer import find_deficit_commodities
        user_needs = [d["key"] for d in find_deficit_commodities(user_data)]

    for offerer in unique_candidates:
        if offerer["country"].lower() in existing_countries:
            continue

        # Pilih komoditas surplus
        surpluses = offerer["surpluses"]
        
        # SMART COMMODITY SELECTION: Prioritaskan yang user butuhkan
        weighted_commodities = []
        for s in surpluses:
            weight = 10
            if s["key"] in user_needs:
                weight = 50  # 5x lipat lebih mungkin ditawarkan jika user butuh
            weighted_commodities.append((s, weight))
        
        chosen = random.choices(
            [w[0] for w in weighted_commodities],
            weights=[w[1] for w in weighted_commodities],
            k=1
        )[0]

        # Hitung jumlah (Aliansi dapat lebih banyak)
        vol_multiplier = 1.0
        if offerer["score"] > 85: vol_multiplier = 1.5
        
        offer_pct = random.uniform(0.15, 0.45) * vol_multiplier
        amount = max(150, round(chosen["production"] * offer_pct))

        # TIERED DISCOUNTS (Smarter Pricing)
        discount_base = 5
        if offerer["score"] > 70: discount_base = 10
        if offerer["score"] > 85: discount_base = 16 # Diskon besar untuk kawan akrab
        
        discount = discount_base + random.randint(0, 7)

        offer_price, market_price = calculate_ai_offer_price(
            chosen["key"], day_timestamp, discount
        )

        # Expiry (Aliansi kasih waktu lebih lama)
        expiry_days = random.randint(5, 12)
        if offerer["score"] > 80: expiry_days += 5

        country_name = offerer["country"].capitalize()
        commodity_label = chosen["label"]
        total_price = amount * offer_price

        offer = {
            "id": f"offer_{offerer['country']}_{chosen['key']}_{day_timestamp}",
            "type": "product_offer",
            "country": offerer["country"],
            "countryLabel": country_name,
            "commodity": chosen["key"],
            "commodityLabel": commodity_label,
            "amount": amount,
            "pricePerUnit": offer_price,
            "marketPrice": market_price,
            "discountPct": discount,
            "expiryDays": expiry_days,
            "status": "pending",
            "dayCreated": day_timestamp
        }
        offers.append(offer)

        # Buat event notifikasi
        # Pesan khusus untuk aliansi
        greeting = "Selamat!"
        if offerer["score"] > 85:
            greeting = f"Salam dari Sahabat, {country_name}!"
        
        events.append({
            "type": "AI_TRADE_PRODUCT_OFFER",
            "source": offerer["country"],
            "subject": f"Penawaran Dagang: {country_name} Menawarkan {commodity_label}",
            "content": (
                f"{greeting} Pemerintah {country_name} menawarkan {amount:,} unit {commodity_label} "
                f"dengan harga spesial {offer_price:,}/unit (diskon {discount}% dari harga pasar {market_price:,}/unit). "
                f"Total biaya: ${total_price:,}. "
                f"Tawaran ini berlaku selama {expiry_days} hari. "
                f"Silakan buka Hub Perdagangan untuk menerima atau menolak tawaran ini."
            ),
            "priority": "medium",
            "offerId": offer["id"]
        })

        # Berita global 
        events.append({
            "type": "GLOBAL_NEWS",
            "source": offerer["country"],
            "target": user_country,
            "subject": f"Kerjasama Ekonomi: {country_name} Tawarkan {commodity_label} ke {user_country.capitalize()}",
            "content": (
                f"Dalam rangka memperkuat ikatan ekonomi bilateral, pemerintah {country_name} "
                f"menawarkan paket ekspor {commodity_label} dengan harga khusus kepada {user_country.capitalize()}. "
                f"Langkah ini dianggap sebagai sinyal positif untuk stabilitas perdagangan kawasan."
            )
        })

        break  # Hanya 1 offer per hari kandidat terbaik

    return {"events": events, "offers": offers}


if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        result = simulate_product_offers(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e), "events": [], "offers": []}))
        sys.exit(1)
