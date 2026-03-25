import sys
import json
import math

class InflationEngine:
    """
    Engine untuk mengevaluasi dampak harga pasar domestik (inflasi/deflasi) 
    terhadap kepuasan rakyat (H-Index) secara bulanan.
    Diintegrasikan lewat evaluasi persentase absolut komoditas game secara periodik.
    """
    def __init__(self, base_prices):
        self.base_prices = base_prices

    def calculate_monthly_impact(self, current_prices) -> float:
        """
        Menghitung selisih dampak (+ atau -) terhadap Indeks Kepuasan bulanan.
        H-Index Impact = (1.0 - rata-rata pengali harga) * 15
        """
        total_multiplier = 0.0
        item_count = 0
        
        for key, base_price in self.base_prices.items():
            if key in current_prices and float(base_price) > 0.0:  # type: ignore
                multiplier = float(current_prices[key]) / float(base_price)  # type: ignore
                total_multiplier += multiplier  # type: ignore
                item_count += 1
                
        if item_count == 0:
            return 0.0
            
        avg_multiplier = total_multiplier / float(item_count)  # type: ignore
        impact = (1.0 - avg_multiplier) * 15.0  # type: ignore
        
        res = round(float(impact), 1)  # type: ignore
        return float(res)

    def generate_economic_sentiment(self, impact: float) -> str:
        """
        Men-generate report naratif berbasis dampak inflasi yang akan 
        ditampilkan pada reasoning H-Index bulanan di Inbox/UI.
        """
        if impact <= -5.0:
            return "Hiperinflasi! Harga bahan pokok sangat tak terjangkau, memicu kemarahan rakyat."
        elif impact <= -1.0:
            return "Inflasi & harga pasar tinggi mencekik daya beli harian masyarakat."
        elif impact < 0.0:
            return "Penyesuaian harga barang agak memberatkan masyarakat."
        elif impact >= 3.0:
            return "Subsidi skala besar sangat memanjakan tingkat konsumsi rakyat!"
        elif impact > 0.0:
            return "Kebijakan harga murah memperkuat kemampuan belanja dan kepuasan warga."
        
        return "Stabilitas harga domestik terkendali dengan baik."

if __name__ == "__main__":
    if len(sys.argv) > 1:
        # API Mode (Next.js Spawn)
        try:
            input_data = json.loads(sys.argv[1])
            base_data = input_data.get("basePrices", {})
            current_data = input_data.get("currentPrices", {})
            
            engine = InflationEngine(base_data)
            monthly_impact = engine.calculate_monthly_impact(current_data)
            sentiment = engine.generate_economic_sentiment(monthly_impact)
            
            # Print exact JSON payload to stdout
            print(json.dumps({
                "impact": monthly_impact,
                "sentiment": sentiment
            }))
        except Exception as e:
            print(json.dumps({"error": str(e)}))
    else:
        # Internal Unit Test Bed
        base_data = {
            "priceRice": 16000.0,
            "priceBeef": 104100.0,
            "priceChicken": 41000.0
        }
        
        current_data = {
            "priceRice": 16000.0,     # Normal (1.0x) -> 0% diff
            "priceBeef": 145740.0,    # Mahal (1.4x) -> -40% diff
            "priceChicken": 20500.0   # Subsidi (0.5x) -> +50% diff
        }
        
        engine = InflationEngine(base_data)
        monthly_impact = engine.calculate_monthly_impact(current_data)
        sentiment = engine.generate_economic_sentiment(monthly_impact)
        
        print(f"Perkiraan Dampak H-Index Bulanan: {monthly_impact:+.1f}%")
        print(f"Sentimen Rakyat: {sentiment}")
