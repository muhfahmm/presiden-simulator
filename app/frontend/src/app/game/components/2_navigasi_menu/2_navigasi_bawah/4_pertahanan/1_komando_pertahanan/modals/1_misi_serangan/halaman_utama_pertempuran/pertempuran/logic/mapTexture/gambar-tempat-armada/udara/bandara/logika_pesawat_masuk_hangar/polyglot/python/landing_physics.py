"""
landing_physics.py - Instrument Landing System (ILS) Approach
"""

import math

class ApproachAI:
    def calculate_glidepath(self, current_pos, runway_end, altitude_start=2000):
        """
        AI-driven 3-degree ILS approach path.
        Returns coordinates along the descending path.
        """
        path = []
        distance_to_runway = math.sqrt((current_pos['x'] - runway_end['x'])**2 + (current_pos['y'] - runway_end['y'])**2)
        
        # 3 Degree Glide Slope: h = d * tan(3 deg)
        glide_angle = math.radians(3)
        target_altitude = distance_to_runway * math.tan(glide_angle)
        
        # Midpoint for smooth approach
        mid_x = (current_pos['x'] + runway_end['x']) / 2
        mid_y = (current_pos['y'] + runway_end['y']) / 2
        
        path.append({'x': mid_x, 'y': mid_y})
        path.append(runway_end)
        return path
