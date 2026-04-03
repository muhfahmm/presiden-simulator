# pergerakan.py - Python Strategy Logic for Movement
# Strategic layer: Intelligence determines the "intent".

class TacticalAIBrain:
    """
    Decides the strategic intent for units.
    This translates high-level strategy into specific 'Target Points'
    for the Rust movement engine to navigate towards.
    """
    
    def calculate_flanking_offset(self, unit_id, target_pos, side):
        """
        Returns a target coordinate that attempts to circle around the enemy.
        """
        offset_distance = 1500.0
        # Simple cyclic offset based on unit ID hash for deterministic spreading
        angle_variation = (hash(unit_id) % 10) * 0.1
        
        return {
            "x": target_pos["x"] + offset_distance * (1.0 if side == "user" else -1.0),
            "y": target_pos["y"] + angle_variation * 500.0
        }
