# sanction_logic.py
# Logic for handling financial and commodity-specific sanctions.

class SanctionManager:
    def __init__(self):
        # Sanction data: Target, Category (Tech, Finance, Energy), Intensity (0.0 to 1.0)
        self.active_sanctions = []

    def apply_sanction_effect(self, country_name, commodity_type):
        """
        Soft block or price penalty based on sanctions.
        Trade is still allowed but significantly more expensive.
        """
        for sanc in self.active_sanctions:
            if sanc["target"] == country_name:
                intensity = sanc.get("intensity", 0.5)
                price_hike = 1.0 + (1.5 * intensity) # 1.5x to 2.5x price hike
                return {
                    "is_restricted": True,
                    "price_multiplier": price_hike,
                    "reason": f"Sanksi Ekonomi PBB ({sanc['category']}): Biaya transaksi meningkat."
                }
        return {"is_restricted": False, "price_multiplier": 1.0}

    def get_sanction_news(self, country_name, category):
        return f"UPDATE GEOPOLITIK: PBB Menjatuhkan Sanksi {category} Terhadap {country_name}. Biaya Hidup Diprediksi Melonjak!"
