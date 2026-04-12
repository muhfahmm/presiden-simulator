"""
Commodity Analyzer — Shared AI Module
Menganalisis surplus/defisit komoditas setiap negara berdasarkan
data produksi dan estimasi konsumsi domestik.
"""
import random

# Daftar semua komoditas yang bisa diperdagangkan
ALL_COMMODITIES = {
    # Mineral & Ekstraksi
    "emas": {"sector": "sektor_ekstraksi", "base_consumption": 0.3},
    "uranium": {"sector": "sektor_ekstraksi", "base_consumption": 0.2},
    "batu_bara": {"sector": "sektor_ekstraksi", "base_consumption": 0.6},
    "minyak_bumi": {"sector": "sektor_ekstraksi", "base_consumption": 0.7},
    "gas_alam": {"sector": "sektor_ekstraksi", "base_consumption": 0.6},
    "garam": {"sector": "sektor_ekstraksi", "base_consumption": 0.4},
    "nikel": {"sector": "sektor_ekstraksi", "base_consumption": 0.3},
    "litium": {"sector": "sektor_ekstraksi", "base_consumption": 0.2},
    "tembaga": {"sector": "sektor_ekstraksi", "base_consumption": 0.4},
    "aluminium": {"sector": "sektor_ekstraksi", "base_consumption": 0.4},
    "logam_tanah_jarang": {"sector": "sektor_ekstraksi", "base_consumption": 0.2},
    "bijih_besi": {"sector": "sektor_ekstraksi", "base_consumption": 0.5},
    # Manufaktur
    "semikonduktor": {"sector": "sektor_manufaktur", "base_consumption": 0.8},
    "mobil": {"sector": "sektor_manufaktur", "base_consumption": 0.5},
    "sepeda_motor": {"sector": "sektor_manufaktur", "base_consumption": 0.4},
    "smelter": {"sector": "sektor_manufaktur", "base_consumption": 0.3},
    "semen_beton": {"sector": "sektor_manufaktur", "base_consumption": 0.7},
    "kayu": {"sector": "sektor_manufaktur", "base_consumption": 0.6},
    # Olahan Pangan
    "air_mineral": {"sector": "sektor_olahan_pangan", "base_consumption": 0.9},
    "gula": {"sector": "sektor_olahan_pangan", "base_consumption": 0.8},
    "roti": {"sector": "sektor_olahan_pangan", "base_consumption": 0.85},
    "pengolahan_daging": {"sector": "sektor_olahan_pangan", "base_consumption": 0.7},
    "mie_instan": {"sector": "sektor_olahan_pangan", "base_consumption": 0.75},
    # Farmasi
    "farmasi": {"sector": "sektor_farmasi", "base_consumption": 0.6},
    # Peternakan
    "ayam_unggas": {"sector": "sektor_peternakan", "base_consumption": 0.8},
    "sapi_perah": {"sector": "sektor_peternakan", "base_consumption": 0.7},
    "sapi_potong": {"sector": "sektor_peternakan", "base_consumption": 0.6},
    "domba_kambing": {"sector": "sektor_peternakan", "base_consumption": 0.5},
    # Perikanan
    "udang_kerang": {"sector": "sektor_perikanan", "base_consumption": 0.5},
    "ikan": {"sector": "sektor_perikanan", "base_consumption": 0.7},
    # Agrikultur
    "padi": {"sector": "sektor_agrikultur", "base_consumption": 0.85},
    "gandum_jagung": {"sector": "sektor_agrikultur", "base_consumption": 0.8},
    "sayur_umbi": {"sector": "sektor_agrikultur", "base_consumption": 0.75},
    "kedelai": {"sector": "sektor_agrikultur", "base_consumption": 0.6},
    "kelapa_sawit": {"sector": "sektor_agrikultur", "base_consumption": 0.4},
    "kopi_teh_kakao": {"sector": "sektor_agrikultur", "base_consumption": 0.3},
    # Militer
    "pabrik_amunisi": {"sector": "pabrik_militer", "base_consumption": 0.9},
}

# Label komoditas untuk pesan (Bahasa Indonesia)
COMMODITY_LABELS = {
    "emas": "Emas", "uranium": "Uranium", "batu_bara": "Batu Bara",
    "minyak_bumi": "Minyak Bumi", "gas_alam": "Gas Alam", "garam": "Garam",
    "nikel": "Nikel", "litium": "Litium", "tembaga": "Tembaga",
    "aluminium": "Aluminium", "logam_tanah_jarang": "Logam Tanah Jarang",
    "bijih_besi": "Bijih Besi", "semikonduktor": "Semikonduktor",
    "mobil": "Mobil", "sepeda_motor": "Sepeda Motor", "smelter": "Smelter",
    "semen_beton": "Semen & Beton", "kayu": "Kayu", "air_mineral": "Air Mineral",
    "gula": "Gula", "roti": "Roti", "pengolahan_daging": "Daging Olahan",
    "mie_instan": "Mie Instan", "farmasi": "Farmasi",
    "ayam_unggas": "Ayam/Unggas", "sapi_perah": "Sapi Perah",
    "sapi_potong": "Sapi Potong", "domba_kambing": "Domba/Kambing",
    "udang_kerang": "Udang/Kerang", "ikan": "Ikan", "padi": "Padi/Beras",
    "gandum_jagung": "Gandum/Jagung", "sayur_umbi": "Sayur/Umbi",
    "kedelai": "Kedelai", "kelapa_sawit": "Kelapa Sawit",
    "kopi_teh_kakao": "Kopi/Teh/Kakao", "pabrik_amunisi": "Amunisi Militer",
}


def get_country_production(country_data, commodity_key):
    """Dapatkan nilai produksi suatu komoditas dari data negara."""
    info = ALL_COMMODITIES.get(commodity_key)
    if not info:
        return 0
    sector = info["sector"]
    sector_data = country_data.get(sector, {})
    return sector_data.get(commodity_key, 0)


def analyze_country(country_data):
    """
    Analisis surplus/defisit untuk satu negara.
    Returns: {commodity_key: {"status": "surplus"|"deficit"|"balanced", "production": N, "net": N}}
    """
    result = {}
    populasi_juta = country_data.get("populasi", 50000000) / 1_000_000

    for key, info in ALL_COMMODITIES.items():
        production = get_country_production(country_data, key)
        if production <= 0:
            result[key] = {"status": "deficit", "production": 0, "net": -1}
            continue

        # Konsumsi domestik = produksi × rasio konsumsi × faktor populasi
        pop_factor = max(0.5, min(2.0, populasi_juta / 100))
        consumption = production * info["base_consumption"] * pop_factor

        net = production - consumption

        if net > production * 0.2:
            status = "surplus"
        elif net < -production * 0.1:
            status = "deficit"
        else:
            status = "balanced"

        result[key] = {
            "status": status,
            "production": production,
            "net": round(net, 2)
        }

    return result


def find_surplus_commodities(country_data, min_production=1):
    """Cari komoditas yang surplus dari suatu negara."""
    analysis = analyze_country(country_data)
    surpluses = []
    for key, info in analysis.items():
        if info["status"] == "surplus" and info["production"] >= min_production:
            surpluses.append({
                "key": key,
                "label": COMMODITY_LABELS.get(key, key),
                "production": info["production"],
                "net_surplus": info["net"]
            })
    # Sort by net surplus descending
    surpluses.sort(key=lambda x: x["net_surplus"], reverse=True)
    return surpluses


def find_deficit_commodities(country_data, min_production=0):
    """Cari komoditas yang defisit dari suatu negara."""
    analysis = analyze_country(country_data)
    deficits = []
    for key, info in analysis.items():
        if info["status"] == "deficit":
            deficits.append({
                "key": key,
                "label": COMMODITY_LABELS.get(key, key),
                "production": info["production"],
                "net_deficit": abs(info["net"])
            })
    deficits.sort(key=lambda x: x["net_deficit"], reverse=True)
    return deficits
