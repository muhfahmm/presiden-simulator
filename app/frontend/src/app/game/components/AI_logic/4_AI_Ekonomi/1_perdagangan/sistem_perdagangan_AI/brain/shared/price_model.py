"""
Price Model — Shared AI Module
Model harga dinamis berdasarkan supply-demand, hubungan diplomatik, dan event global.
"""
import math
import random

# Base prices (matching tradeData.ts buyPriceMap & sellPriceMap)
BASE_BUY_PRICES = {
    "emas": 2580, "uranium": 110, "batu_bara": 150, "minyak_bumi": 95,
    "gas_alam": 300, "garam": 200, "nikel": 20600, "litium": 16200,
    "tembaga": 10600, "aluminium": 2940, "logam_tanah_jarang": 768, "bijih_besi": 132,
    "semikonduktor": 1020, "mobil": 54000, "sepeda_motor": 4200, "smelter": 144000,
    "semen_beton": 150, "kayu": 102, "air_mineral": 80, "gula": 250,
    "roti": 180, "farmasi": 65, "pengolahan_daging": 18,
    "mie_instan": 50, "ayam_unggas": 750, "sapi_perah": 2100, "sapi_potong": 3200,
    "domba_kambing": 450, "udang_kerang": 150, "ikan": 65,
    "padi": 210, "gandum_jagung": 150, "sayur_umbi": 120, "kedelai": 210,
    "kelapa_sawit": 350, "kopi_teh_kakao": 950, "pabrik_amunisi": 500
}

BASE_SELL_PRICES = {
    "emas": 2150, "uranium": 92, "batu_bara": 125, "minyak_bumi": 78,
    "gas_alam": 245, "garam": 150, "nikel": 17200, "litium": 13500,
    "tembaga": 8900, "aluminium": 2450, "logam_tanah_jarang": 640, "bijih_besi": 110,
    "semikonduktor": 850, "mobil": 45000, "sepeda_motor": 3500, "smelter": 120000,
    "semen_beton": 125, "kayu": 85, "air_mineral": 50, "gula": 180,
    "roti": 120, "farmasi": 45, "pengolahan_daging": 12,
    "mie_instan": 35, "ayam_unggas": 500, "sapi_perah": 1800, "sapi_potong": 2500,
    "domba_kambing": 350, "udang_kerang": 100, "ikan": 45,
    "padi": 140, "gandum_jagung": 100, "sayur_umbi": 80, "kedelai": 150,
    "kelapa_sawit": 250, "kopi_teh_kakao": 650, "pabrik_amunisi": 350
}


def get_seeded_noise(seed_str):
    """Deterministic pseudo-random noise, matches getSeededNoise in tradeData.ts."""
    h = 0
    for ch in str(seed_str):
        h = ((31 * h) + ord(ch)) & 0xFFFFFFFF
    x = math.sin(h) * 10000
    return x - math.floor(x)


def get_dynamic_price(commodity_key, trade_type, day_timestamp):
    """
    Harga dinamis per hari (sinkron dengan frontend tradeData.ts).
    trade_type: "buy" | "sell"
    day_timestamp: integer (days since epoch)
    """
    base_map = BASE_BUY_PRICES if trade_type == "buy" else BASE_SELL_PRICES
    base_price = base_map.get(commodity_key, 100)

    seed = f"{commodity_key}-{day_timestamp}"
    noise = (get_seeded_noise(seed) * 2) - 1
    multiplier = 1 + (noise * 0.15)

    return round(base_price * multiplier)


def calculate_ai_offer_price(commodity_key, day_timestamp, discount_pct=0):
    """
    Harga spesial yang AI tawarkan ke user.
    discount_pct: diskon dari harga pasar (0-30%)
    """
    market_price = get_dynamic_price(commodity_key, "buy", day_timestamp)
    discount = max(0, min(0.30, discount_pct / 100))
    offer_price = round(market_price * (1 - discount))
    return offer_price, market_price


def calculate_ai_purchase_price(commodity_key, day_timestamp, premium_pct=0):
    """
    Harga yang AI bersedia bayar ke user (dengan premium).
    premium_pct: premium di atas harga jual pasar (0-25%)
    """
    market_sell = get_dynamic_price(commodity_key, "sell", day_timestamp)
    premium = max(0, min(0.25, premium_pct / 100))
    purchase_price = round(market_sell * (1 + premium))
    return purchase_price, market_sell


def calculate_contract_price(commodity_key, day_timestamp, months=6):
    """
    Harga kontrak jangka panjang (rata-rata ± volatilitas kecil).
    Harga terikat selama durasi kontrak.
    """
    buy_price = get_dynamic_price(commodity_key, "buy", day_timestamp)
    sell_price = get_dynamic_price(commodity_key, "sell", day_timestamp)
    avg_price = (buy_price + sell_price) / 2

    # Kontrak lebih panjang = diskon lebih besar
    length_discount = 1 - (months * 0.005)  # Max ~6% discount untuk 12 bulan
    contract_price = round(avg_price * length_discount)

    return contract_price
