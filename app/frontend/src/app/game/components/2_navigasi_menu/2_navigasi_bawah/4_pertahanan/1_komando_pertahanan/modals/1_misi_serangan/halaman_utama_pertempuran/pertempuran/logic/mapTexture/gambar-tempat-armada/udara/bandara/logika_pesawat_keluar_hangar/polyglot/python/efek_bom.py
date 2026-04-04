"""
efek_bom.py - Visual Jitter & Screen Shake Engine

Responsibilities:
- Calculate camera shake intensity based on bomb distance.
- Determine flash duration and fade-out smoothing.
"""

import math
import random

class ExplosionVisualizer:
    def calculate_shake(self, distance, epicenter_power):
        """
        AI-driven intensity calculation. 
        Closer distance = Higher jitter frequency.
        """
        if distance > 10000: return 0.0
        
        # Exponential attenuation of shake
        intensity = epicenter_power * math.exp(-distance / 2000)
        jitter = random.uniform(-intensity, intensity)
        return jitter

    def get_flash_alpha(self, elapsed_time, duration=0.5):
        # Linear decay for atmospheric flash
        if elapsed_time > duration: return 0.0
        return 1.0 - (elapsed_time / duration)
