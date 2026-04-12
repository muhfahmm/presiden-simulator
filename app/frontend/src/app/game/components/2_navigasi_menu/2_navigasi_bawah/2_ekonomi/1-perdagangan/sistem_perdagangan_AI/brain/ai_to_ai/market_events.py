"""
Market Events — AI-to-AI Module
Event pasar global acak yang mempengaruhi harga dan ketersediaan komoditas.
Contoh: embargo, krisis, penemuan cadangan baru, bencana alam.
"""
import sys
import json
import random


# Template event pasar global
MARKET_EVENT_TEMPLATES = [
    # MINERAL & ENERGI
    {
        "category": "energi",
        "commodities": ["minyak_bumi", "gas_alam"],
        "templates": [
            {
                "subject": "Krisis Energi: Blokade Jalur Laut Internasional",
                "content": "Ketegangan geopolitik memicu blokade parsial pada jalur pelayaran utama. Pasokan energi global terancam menurun drastis, mendorong kenaikan harga minyak dan gas alam di seluruh pasar.",
                "impact": "price_surge",
                "magnitude": (15, 30)
            },
            {
                "subject": "Penemuan Cadangan Gas Alam Super-Raksasa",
                "content": "Eksplorasi lepas pantai mengungkap cadangan gas alam dalam skala yang belum pernah terlihat sebelumnya. Analis memperkirakan harga energi akan tertekan dalam jangka menengah.",
                "impact": "price_drop",
                "magnitude": (10, 20)
            }
        ]
    },
    {
        "category": "mineral",
        "commodities": ["litium", "logam_tanah_jarang", "tembaga"],
        "templates": [
            {
                "subject": "Revolusi Baterai: Permintaan Litium Meledak",
                "content": "Adopsi kendaraan listrik global mencapai rekor baru. Permintaan litium dan mineral kritis untuk baterai melonjak, menekan suplai global.",
                "impact": "price_surge",
                "magnitude": (10, 25)
            },
            {
                "subject": "Terobosan Daur Ulang: Mineral Kritis Semakin Tersedia",
                "content": "Teknologi daur ulang mineral kritis generasi baru berhasil dikomersialisasi. Industri optimistis bahwa kelangkaan mineral seperti Litium dan Logam Tanah Jarang akan mereda.",
                "impact": "price_drop",
                "magnitude": (8, 15)
            }
        ]
    },
    # PANGAN
    {
        "category": "pangan",
        "commodities": ["padi", "gandum_jagung", "kedelai"],
        "templates": [
            {
                "subject": "El Niño Parah: Gagal Panen Massal di Asia Tenggara",
                "content": "Fenomena El Niño terburuk dalam dua dekade menghancurkan panen padi dan jagung di kawasan Asia Tenggara. Harga pangan global melonjak akibat krisis suplai.",
                "impact": "price_surge",
                "magnitude": (15, 35)
            },
            {
                "subject": "Panen Raya Global: Produksi Pangan Melampaui Ekspektasi",
                "content": "Kondisi cuaca ideal di beberapa kawasan utama penghasil pangan menghasilkan panen raya. Stok pangan global membengkak, menekan harga di pasar internasional.",
                "impact": "price_drop",
                "magnitude": (10, 20)
            }
        ]
    },
    # MANUFAKTUR
    {
        "category": "manufaktur",
        "commodities": ["semikonduktor", "mobil"],
        "templates": [
            {
                "subject": "Krisis Chip Global: Pabrik Semikonduktor Utama Terhenti",
                "content": "Bencana di kawasan industri semikonduktor utama dunia menyebabkan penghentian produksi besar-besaran. Industri otomotif dan elektronik terancam kekurangan pasokan chip.",
                "impact": "price_surge",
                "magnitude": (20, 40)
            },
            {
                "subject": "Ekspansi Pabrik Chip: Era Baru Produksi Semikonduktor",
                "content": "Beberapa negara secara bersamaan meresmikan mega-pabrik semikonduktor baru. Kapasitas produksi global diperkirakan meningkat 30% dalam 2 tahun ke depan.",
                "impact": "price_drop",
                "magnitude": (10, 18)
            }
        ]
    },
    # FARMASI
    {
        "category": "farmasi",
        "commodities": ["farmasi"],
        "templates": [
            {
                "subject": "Wabah Baru: Permintaan Obat-obatan Melonjak Dramatis",
                "content": "Organisasi kesehatan dunia memperingatkan tentang wabah penyakit baru yang menyebar cepat. Permintaan obat-obatan dan bahan baku farmasi melonjak tajam.",
                "impact": "price_surge",
                "magnitude": (25, 50)
            },
        ]
    },
    # KOMODITAS PERKEBUNAN 
    {
        "category": "perkebunan",
        "commodities": ["kelapa_sawit", "kopi_teh_kakao"],
        "templates": [
            {
                "subject": "Embargo Sawit: Uni Eropa Terapkan Restriksi Baru",
                "content": "Uni Eropa menerapkan regulasi deforestasi ketat yang membatasi impor minyak kelapa sawit. Harga CPO bergejolak di pasar global.",
                "impact": "price_surge",
                "magnitude": (10, 22)
            },
            {
                "subject": "Tren Kopi Dunia: Harga Arabika Mencapai Rekor",
                "content": "Perubahan iklim mengurangi panen kopi di Brasil dan Ethiopia. Harga kopi, teh, dan kakao meroket ke level tertinggi sepanjang sejarah.",
                "impact": "price_surge",
                "magnitude": (15, 30)
            }
        ]
    }
]


def simulate_market_events(input_data):
    """Generate event pasar global acak."""
    day_timestamp = input_data.get("dayTimestamp", 0)

    events = []
    price_impacts = []

    # THROTTLING — 3% peluang per hari ada event pasar besar
    if random.random() > 0.03:
        return {"events": [], "priceImpacts": []}

    # Pilih 1 event acak
    category = random.choice(MARKET_EVENT_TEMPLATES)
    template = random.choice(category["templates"])

    magnitude = random.randint(template["magnitude"][0], template["magnitude"][1])

    events.append({
        "type": "GLOBAL_NEWS",
        "source": "Global Trade Monitor",
        "subject": template["subject"],
        "content": template["content"],
        "priority": "high" if magnitude > 20 else "medium"
    })

    for commodity in category["commodities"]:
        price_impacts.append({
            "commodity": commodity,
            "impact": template["impact"],
            "magnitude": magnitude,
            "duration_days": random.randint(7, 30)
        })

    return {"events": events, "priceImpacts": price_impacts}


if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        result = simulate_market_events(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e), "events": [], "priceImpacts": []}))
        sys.exit(1)
