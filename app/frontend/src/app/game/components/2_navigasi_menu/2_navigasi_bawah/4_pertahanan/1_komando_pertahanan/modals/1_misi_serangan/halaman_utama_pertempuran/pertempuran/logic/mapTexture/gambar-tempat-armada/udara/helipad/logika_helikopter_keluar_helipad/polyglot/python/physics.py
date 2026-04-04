"""
physics.py - Helicopter VTOL Departure AI

Responsibilities:
- Create vertical ascent trajectory (Heli takeoff).
- Smooth transition from hover to forward flight.
"""

import math

class VTOLController:
    def generate_takeoff_trajectory(self, start_pos, target_altitude=1500):
        """
        AI-driven vertical liftoff. 
        Points are ascending along altitude + slight hover drift.
        """
        path = []
        steps = 5
        delta_z = target_altitude / steps
        for i in range(1, steps + 1):
            path.append({
                'x': start_pos['x'] + (math.sin(i) * 50), # Drift effect
                'y': start_pos['y'] + (math.cos(i) * 50)
            })
        return path
