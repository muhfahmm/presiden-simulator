# un_blockade_logic.py
# Logic for handling economic blockades mandated by UN (PBB) resolutions.

class UNBlockadeManager:
    def __init__(self):
        # Mock data for UN Resolutions
        self.active_resolutions = [
            {"target_country": "Negara X", "type": "Embargo Ekonomi", "status": "Passed"},
            {"target_country": "Negara Y", "type": "Blokade Maritim", "status": "Pending"}
        ]

    def check_trade_eligibility(self, source_country, target_country):
        """
        Checks if trade is allowed between two countries based on UN sanctions.
        """
        for res in self.active_resolutions:
            if res["status"] == "Passed" and (source_country == res["target_country"] or target_country == res["target_country"]):
                return {
                    "allowed": False,
                    "reason": f"Sanksi PBB: {res['type']} sedang berlaku terhadap {res['target_country']}.",
                    "impact_on_price": 2.5 # Price multiplier due to shortage
                }
        return {"allowed": True, "impact_on_price": 1.0}

    def generate_blockade_news(self, country_name):
        """
        Generates a news headline if a country is newly blockaded.
        """
        return f"URGENT: PBB Resmi Menjatuhkan Blokade Terhadap {country_name}. Seluruh Jalur Logistik Terputus!"

if __name__ == "__main__":
    manager = UNBlockadeManager()
    
    # Example: Check trade with a sanctioned country
    trade_status = manager.check_trade_eligibility("Indonesia", "Negara X")
    if not trade_status["allowed"]:
        print(f"Peringatan: {trade_status['reason']}")
        print(f"Dampak Harga: Kenaikan {int((trade_status['impact_on_price'] - 1) * 100)}% pada komoditas terkait.")
