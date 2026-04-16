"""
Purchase Requests — AI-to-User Module
AI negara membutuhkan komoditas yang user miliki dan menawarkan harga premium.

Logika:
1. Scan negara AI yang punya deficit di komoditas tertentu
2. Cek apakah user punya stok komoditas tersebut
3. Throttle: max 1 request per eksekusi
4. Tentukan harga beli (harga pasar + premium 5-20%)
5. Generate event type: "AI_TRADE_PURCHASE_REQUEST"
"""
import sys
import json
import random
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))
from shared.commodity_analyzer import find_deficit_commodities, COMMODITY_LABELS
from shared.price_model import calculate_ai_purchase_price


def simulate_purchase_requests(input_data):
    """AI meminta pembelian komoditas dari user."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "indonesia").lower().strip()
    countries_data = input_data.get("countriesData", {})
    user_stock = input_data.get("userStock", {})  # {commodity_key: amount}
    day_timestamp = input_data.get("dayTimestamp", 0)
    existing_requests = input_data.get("existingRequests", [])

    events = []
    requests = []

    # THROTTLING GLOBAL — Peluang 6% per hari ada request pembelian
    if random.random() > 0.06:
        return {"events": [], "requests": []}

    potential_buyers = []

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

        # Minimal punya trade agreement dan hubungan cukup baik
        if not has_trade or score < 45:
            continue

        country_data = countries_data.get(source_lower, countries_data.get(source_country, {}))
        if not country_data:
            continue

        deficits = find_deficit_commodities(country_data)
        if not deficits:
            continue

        # Filter: hanya komoditas yang user punya stoknya
        matching_deficits = []
        for d in deficits:
            user_amount = user_stock.get(d["key"], 0)
            if user_amount > 50:  # User punya stok minimal 50 unit
                matching_deficits.append({**d, "user_stock": user_amount})

        if not matching_deficits:
            continue

        potential_buyers.append({
            "country": source_country,
            "score": score,
            "deficits": matching_deficits
        })

    if not potential_buyers:
        return {"events": [], "requests": []}

    # Sort potential buyers
    if not potential_buyers:
        return {"events": [], "requests": []}

    # SMART SELECTION: Weighted random selection based on score
    def get_weight(o):
        base = o["score"] ** 2
        return base

    # Pilih up to 5 kandidat secara acak berbobot
    weights = [get_weight(b) for b in potential_buyers]
    selected_buyers = random.choices(potential_buyers, weights=weights, k=min(5, len(potential_buyers)))
    
    unique_candidates = []
    seen = set()
    for b in selected_buyers:
        if b["country"] not in seen:
            unique_candidates.append(b)
            seen.add(b["country"])

    # Cegah duplikat
    existing_countries = set(r.get("country", "").lower() for r in existing_requests if r.get("status") == "pending")

    for buyer in unique_candidates:
        if buyer["country"].lower() in existing_countries:
            continue

        # SMART COMMODITY SELECTION: Prioritaskan yang user punya banyak (Surplus)
        deficits = buyer["deficits"]
        
        # Urutkan berdasarkan stok user (terbanyak dulu)
        # Atau beri bobot lebih tinggi pada barang dengan stok user > 1000
        weighted_deficits = []
        for d in deficits:
            weight = 10
            if d.get("user_stock", 0) > 500: weight = 30
            if d.get("user_stock", 0) > 2000: weight = 60
            weighted_deficits.append((d, weight))
        
        chosen = random.choices(
            [w[0] for w in weighted_deficits],
            weights=[w[1] for w in weighted_deficits],
            k=1
        )[0]

        # Hitung jumlah (Aliansi minta lebih banyak volume)
        vol_multiplier = 1.0
        if buyer["score"] > 80: vol_multiplier = 1.4
        
        request_amount = min(
            max(50, round(chosen["user_stock"] * random.uniform(0.15, 0.40) * vol_multiplier)),
            max(200, round(chosen["net_deficit"] * 0.80))
        )

        # TIERED PREMIUMS (Aliansi bayar lebih mahal sebagai bantuan)
        urgency = "normal"
        premium_base = random.randint(5, 12)
        
        if chosen["net_deficit"] > chosen.get("production", 1) * 0.5:
            urgency = "tinggi"
            premium_base += 8
            
        if buyer["score"] > 80:
            premium_base += 8  # Sahabat membayar lebih untuk membantu budget pemain
            
        premium = premium_base + random.randint(0, 5)

        purchase_price, market_price = calculate_ai_purchase_price(
            chosen["key"], day_timestamp, premium
        )

        expiry_days = random.randint(7, 20)
        country_name = buyer["country"].capitalize()
        commodity_label = COMMODITY_LABELS.get(chosen["key"], chosen["key"])
        total_revenue = request_amount * purchase_price

        request = {
            "id": f"req_{buyer['country']}_{chosen['key']}_{day_timestamp}",
            "type": "purchase_request",
            "country": buyer["country"],
            "countryLabel": country_name,
            "commodity": chosen["key"],
            "commodityLabel": commodity_label,
            "amount": request_amount,
            "pricePerUnit": purchase_price,
            "marketPrice": market_price,
            "premiumPct": premium,
            "urgency": urgency,
            "expiryDays": expiry_days,
            "status": "pending",
            "dayCreated": day_timestamp
        }
        requests.append(request)

        # Notifikasi
        urgency_label = "MENDESAK: " if urgency == "tinggi" else ""
        greeting = "Pemerintah"
        if buyer["score"] > 85: greeting = "Sahabat Kita, Pemerintah"

        events.append({
            "type": "AI_TRADE_PURCHASE_REQUEST",
            "source": buyer["country"],
            "subject": f"{urgency_label}{country_name} Ingin Membeli {commodity_label} dari Anda",
            "content": (
                f"{greeting} {country_name} membutuhkan {request_amount:,} unit {commodity_label} "
                f"dan bersedia membayar {purchase_price:,}/unit "
                f"(premium +{premium}% di atas harga pasar {market_price:,}/unit). "
                f"Total pendapatan: ${total_revenue:,}. "
                f"{'Kebutuhan ini sangat mendesak bagi stabilitas domestik mereka. ' if urgency == 'tinggi' else ''}"
                f"Tawaran berlaku selama {expiry_days} hari."
            ),
            "priority": "high" if urgency == "tinggi" else "medium",
            "requestId": request["id"]
        })

        # Berita global 
        events.append({
            "type": "GLOBAL_NEWS",
            "source": buyer["country"],
            "target": user_country,
            "subject": f"Permintaan Impor: {country_name} Cari Suplier {commodity_label}",
            "content": (
                f"{country_name} dilaporkan sedang aktif mencari suplier {commodity_label} internasional "
                f"untuk menutupi defisit produksi domestik mereka. "
                f"Langkah ini dilihat sebagai peluang ekonomi bagi negara pengekspor."
            )
        })

        break  # Max 1 request per hari

    return {"events": events, "requests": requests}


if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        result = simulate_purchase_requests(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e), "events": [], "requests": []}))
        sys.exit(1)
