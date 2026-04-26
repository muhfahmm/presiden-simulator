# un_blockade_logic.py
# Main Orchestrator for UN-mandated trade restrictions.

from .embargo_logic import EmbargoManager
from .sanction_logic import SanctionManager

class UNBlockadeManager:
    def __init__(self):
        self.embargo_mgr = EmbargoManager()
        self.sanction_mgr = SanctionManager()
        
        # Example initialization with some mock data
        self.embargo_mgr.active_embargoes = [
            {"target": "Negara X", "type": "Total"}
        ]
        self.sanction_mgr.active_sanctions = [
            {"target": "Negara Y", "category": "Energi", "intensity": 0.8}
        ]

    def check_trade_status(self, country_name, commodity_type="General"):
        """
        Determines the trade status by checking both embargoes and sanctions.
        Embargoes take precedence over sanctions.
        """
        # 1. Check for Embargo (Hard Block)
        embargo_status = self.embargo_mgr.apply_embargo_effect(country_name, {})
        if embargo_status["is_blocked"]:
            return {
                "status": "BLOCKED",
                "multiplier": embargo_status["penalty_multiplier"],
                "reason": embargo_status["reason"],
                "news": self.embargo_mgr.get_embargo_news(country_name)
            }

        # 2. Check for Sanctions (Price Penalty)
        sanction_status = self.sanction_mgr.apply_sanction_effect(country_name, commodity_type)
        if sanction_status["is_restricted"]:
            return {
                "status": "RESTRICTED",
                "multiplier": sanction_status["price_multiplier"],
                "reason": sanction_status["reason"],
                "news": self.sanction_mgr.get_sanction_news(country_name, "Ekonomi")
            }

        return {"status": "NORMAL", "multiplier": 1.0, "reason": "Trade allowed."}

if __name__ == "__main__":
    manager = UNBlockadeManager()
    
    # Test Embargo
    res_x = manager.check_trade_status("Negara X")
    print(f"Status Negara X: {res_x['status']} | {res_x['reason']}")
    
    # Test Sanction
    res_y = manager.check_trade_status("Negara Y")
    print(f"Status Negara Y: {res_y['status']} | Multiplier: {res_y['multiplier']}x")
