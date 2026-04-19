"""
map_engine.py
Python Intelligence Layer for Map Visualization.
Calculates Heatmap indices (0 to 1) based on national stability and happiness.
"""

def calculate_heatmap(nations_data):
    visual_heatmap = {}
    for name, data in nations_data.items():
        base_stability = data.get('stability', 50)
        happiness = data.get('happiness', 50)
        
        # Heatmap Index (0 to 1)
        heatmap_val = (base_stability + happiness) / 200.0 
        visual_heatmap[name] = round(heatmap_val, 2)
        
    return visual_heatmap
