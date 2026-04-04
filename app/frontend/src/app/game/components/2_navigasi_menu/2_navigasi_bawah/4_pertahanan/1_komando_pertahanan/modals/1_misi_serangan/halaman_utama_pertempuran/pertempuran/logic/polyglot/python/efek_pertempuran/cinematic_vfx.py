"""
cinematic_vfx.py
[BATTLEFIELD ATMOSPHERE ENGINE]

Calculates cinematic visual feedback such as screen shake and tactical lighting.
"""

import math

class CameraDynamics:
    @staticmethod
    def calculate_shake(source_type, distance):
        """
        Calculates screen shake parameters based on the distance from the source of the blast.
        """
        # Base Intensity Mapping
        intensities = {
            "bomb_mega": 12.0,   # Heavy Bomber or Shelling
            "missile": 6.0,     # SAM / MLRS
            "shell": 3.0,       # Tank Main Cannon
            "bullet": 0.2,      # Infantry
        }
        
        base = intensities.get(source_type, 1.0)
        
        # Power calculation: Fade with the square of the distance
        # Standard tactical radius is 15000 units
        max_affect_dist = 5000 
        if distance > max_affect_dist:
            return 0.0
            
        strength = base * (1.0 - (distance / max_affect_dist))
        
        return {
            "magnitude": round(strength, 2),
            "frequency": 15 if strength > 5 else 8,
            "duration": 500 if strength > 5 else 200 # milliseconds
        }

    @staticmethod
    def calculate_lighting_flash(vfx_type):
        """
        Returns color and brightness modifiers for a 'Global Screen Flash'.
        Used for catastrophic events.
        """
        if vfx_type == "NUKE_TACTICAL" or vfx_type == "AMMO_DETONATION":
            return {"color": "rgba(255, 255, 255, 0.4)", "duration": 300}
        return None
