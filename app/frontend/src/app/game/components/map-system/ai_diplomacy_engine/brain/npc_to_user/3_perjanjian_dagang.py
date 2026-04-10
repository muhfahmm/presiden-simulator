import json
import sys
import random

def simulate_trade_offers(input_data):
    """Logika AI menawarkan Kerjasama Ekonomi (Trade) dengan berpikir kritis."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "indonesia").lower().strip()
    events = []
    
    # 1. THROTTLING GLOBAL (Berpikir Kritis)
    # Peluang rendah agar ekonomi tidak terasa seperti spam
    if random.random() > 0.05: 
        return {"matrix": matrix, "events": []}

    potential_trade = []
    potential_embassy = []

    for source_country, targets in matrix.items():
        if user_country in targets:
            rel = targets[user_country]
            score = rel.get("s", 50)
            has_embassy = rel.get("e", 0) == 1
            has_trade = rel.get("t", 0) == 1

            if score >= 60:
                if not has_embassy:
                    potential_embassy.append((source_country, score))
                elif not has_trade:
                    potential_trade.append((source_country, score))

    # Tentukan manuver terbaik
    if potential_trade:
        potential_trade.sort(key=lambda x: x[1], reverse=True)
        best = potential_trade[0][0]
        events.append({
            "type": "USER_TRADE_OFFER",
            "source": best,
            "subject": "Proposal Kerjasama Perdagangan Eksklusif",
            "content": f"Sektor industri {best.capitalize()} mulai melirik pasar Indonesia secara serius. Kami mengusulkan Perjanjian Dagang Aktif untuk mengurangi tarif bea masuk dan mempercepat aliran komoditas antar negara.",
            "priority": "medium"
        })
    elif potential_embassy:
        potential_embassy.sort(key=lambda x: x[1], reverse=True)
        best = potential_embassy[0][0]
        events.append({
            "type": "USER_EMBASSY_OFFER",
            "source": best,
            "subject": "Inisatif Hubungan Ekonomi",
            "content": f"Pemerintah {best.capitalize()} melihat potensi besar dalam kerjasama ekonomi dengan Indonesia. Kami mengusulkan pembukaan Kedutaan Besar sebagai langkah awal formalisasi hubungan dagang kita.",
            "priority": "medium"
        })

    return {"matrix": matrix, "events": events}

if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        print(json.dumps(simulate_trade_offers(input_data)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
