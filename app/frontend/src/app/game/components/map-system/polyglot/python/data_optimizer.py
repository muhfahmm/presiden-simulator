# data_optimizer.py
# Optimizes GeoJSON and map metadata for the polyglot engine.

import json
import os

def optimize_geojson(input_path, output_path):
    if not os.path.exists(input_path):
        print(f"File not found: {input_path}")
        return

    with open(input_path, 'r') as f:
        data = json.load(f)

    # Simplify precision for coordinates to reduce file size and speed up JS parsing
    for feature in data.get('features', []):
        geom = feature.get('geometry', {})
        if geom.get('type') == 'Polygon':
            geom['coordinates'] = [[ [round(c, 4) for c in coord] for coord in poly] for poly in geom['coordinates']]
        elif geom.get('type') == 'MultiPolygon':
            geom['coordinates'] = [[[ [round(c, 4) for c in coord] for coord in poly] for poly in multi] for multi in geom['coordinates']]

    with open(output_path, 'w') as f:
        json.dump(data, f, separators=(',', ':'))
    
    print(f"Optimized geojson saved to: {output_path}")

if __name__ == "__main__":
    # Example execution for standard world data
    optimize_geojson('../../../../../../../public/world.geojson', './optimized_world.json')
