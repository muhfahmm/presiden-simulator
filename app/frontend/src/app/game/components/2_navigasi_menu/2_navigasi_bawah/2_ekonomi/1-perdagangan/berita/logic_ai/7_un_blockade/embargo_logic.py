# embargo_logic.py
# Logic for handling total trade bans (Embargoes) mandated by the UN.

class EmbargoManager:
    def __init__(self):
        # Specific embargo data: Target, Type (Total, Arms, Resources), Severity
        self.active_embargoes = []

    def apply_embargo_effect(self, country_name, current_trade_data):
        """
        Hard block on trade if an embargo exists.
        """
        for emb in self.active_embargoes:
            if emb["target"] == country_name:
                return {
                    "is_blocked": True,
                    "penalty_multiplier": 5.0, # Extreme price for black market only
                    "reason": f"Embargo Total PBB: Seluruh jalur perdagangan ke {country_name} ditutup."
                }
        return {"is_blocked": False, "penalty_multiplier": 1.0}

    def get_embargo_news(self, country_name):
        return f"KRISIS TOTAL: PBB Resmi Berlakukan Embargo Menyeluruh Terhadap {country_name}!"
