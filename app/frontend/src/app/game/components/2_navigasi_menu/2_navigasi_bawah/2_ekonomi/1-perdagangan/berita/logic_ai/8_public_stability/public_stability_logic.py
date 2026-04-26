# public_stability_logic.py
# Logic for calculating how economic news and trade events impact public satisfaction (Kepuasan Rakyat).

class PublicStabilityManager:
    def __init__(self, base_satisfaction=75):
        self.satisfaction = base_satisfaction

    def process_economic_news(self, news_type, impact_value, propaganda_bonus=0):
        """
        Calculates the change in satisfaction based on news events.
        
        news_type: "price_hike", "price_drop", "trade_agreement", "blockade"
        impact_value: magnitude of the event (e.g., % price change)
        propaganda_bonus: reduction in negative impact due to state media control
        """
        change = 0
        
        if news_type == "price_hike":
            # Rising prices decrease satisfaction
            change = -(impact_value * 2) + propaganda_bonus
        
        elif news_type == "price_drop":
            # Falling prices increase satisfaction
            change = (impact_value * 1.5)
            
        elif news_type == "trade_agreement":
            # New partners increase hope and satisfaction
            change = 5
            
        elif news_type == "blockade":
            # Blockades are severe hits to stability
            change = -15 + (propaganda_bonus * 2)

        self.satisfaction += change
        # Ensure satisfaction stays between 0 and 100
        self.satisfaction = max(0, min(100, self.satisfaction))
        
        return {
            "new_satisfaction": self.satisfaction,
            "change": change,
            "public_reaction": self.get_reaction_text(change)
        }

    def get_reaction_text(self, change):
        if change <= -10: return "Rakyat Sangat Marah! Kerusuhan Berpotensi Terjadi."
        if change < 0: return "Rakyat Mengeluh Tentang Biaya Hidup."
        if change == 0: return "Rakyat Tetap Tenang."
        if change > 5: return "Rakyat Sangat Senang dengan Pertumbuhan Ekonomi!"
        return "Rakyat Merasa Optimis."

if __name__ == "__main__":
    manager = PublicStabilityManager()
    
    # Example: Price hike of 10% with some propaganda mitigation
    result = manager.process_economic_news("price_hike", 10, propaganda_bonus=5)
    print(f"Update Kepuasan: {result['new_satisfaction']}% ({result['change']})")
    print(f"Reaksi: {result['public_reaction']}")
    
    # Example: A severe blockade
    result = manager.process_economic_news("blockade", 0, propaganda_bonus=3)
    print(f"\nUpdate Kepuasan: {result['new_satisfaction']}% ({result['change']})")
    print(f"Reaksi: {result['public_reaction']}")
