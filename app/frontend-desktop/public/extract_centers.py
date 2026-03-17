import json
import os
import random

geojson_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\app\frontend-desktop\public\world.geojson"
daftar_negara_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\daftar-menu\6.DAFTAR NEGARA.txt"
iso_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\app\frontend-desktop\public\iso_3166.json"
output_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\app\frontend-desktop\public\country_centers.json"

# Load Indonesian list
daftar_id = []
if os.path.exists(daftar_negara_path):
    with open(daftar_negara_path, 'r', encoding='utf-8') as f:
        for line in f:
            parts = line.strip().split('. ', 1)
            if len(parts) > 1:
                daftar_id.append(parts[1].strip().lower())

# Load ISO Mapping
iso_map = {}
if os.path.exists(iso_path):
    with open(iso_path, 'r', encoding='utf-8') as f:
        iso_list = json.load(f)
        for item in iso_list:
            iso_map[item['alpha-3']] = item['alpha-2']

def get_flag(iso2):
    if not iso2: return "🏳️"
    return "".join(chr(127397 + ord(c)) for c in iso2.upper())

# Load Translation Lookup
lookup_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\app\frontend-desktop\public\translations.json"
translations = {}
if os.path.exists(lookup_path):
    with open(lookup_path, 'r', encoding='utf-8') as f:
        translations = json.load(f)

def calculate_polygon_area_centroid(polygon):
    n = len(polygon)
    if n < 3:
        return 0, (0, 0)
    
    area = 0.0
    cx = 0.0
    cy = 0.0
    
    for i in range(n):
        lon1, lat1 = polygon[i]
        lon2, lat2 = polygon[(i + 1) % n]
        factor = (lon1 * lat2 - lon2 * lat1)
        area += factor
        cx += (lon1 + lon2) * factor
        cy += (lat1 + lat2) * factor
        
    area = 0.5 * area
    if abs(area) < 1e-9:
        mean_x = sum(p[0] for p in polygon) / n
        mean_y = sum(p[1] for p in polygon) / n
        return 0, (mean_x, mean_y)
        
    cx /= (6.0 * area)
    cy /= (6.0 * area)
    return abs(area), (cx, cy)

with open(geojson_path, 'r', encoding='utf-8') as f:
    geojson = json.load(f)

centers = []

for feature in geojson['features']:
    name_en = feature['properties']['name']
    geom = feature['geometry']
    iso3 = feature.get('id', '')
    
    max_area = -1
    best_centroid = (0, 0)
    
    if geom['type'] == 'Polygon':
        area, centroid = calculate_polygon_area_centroid(geom['coordinates'][0])
        best_centroid = centroid
    elif geom['type'] == 'MultiPolygon':
        for polygon_coords in geom['coordinates']:
            area, centroid = calculate_polygon_area_centroid(polygon_coords[0])
            if area > max_area:
                max_area = area
                best_centroid = centroid

    # Match Translation
    name_id = translations.get(name_en, name_en.title())

    iso2 = iso_map.get(iso3, "")
    flag = get_flag(iso2)

    centers.append({
        "name_en": name_en,
        "name_id": name_id,
        "lon": best_centroid[0],
        "lat": best_centroid[1],
        "flag": flag,
        "pop": f"{random.randint(10, 500)}M" if random.random() > 0.3 else f"{random.uniform(1.0, 1.5):.1f}B",
        "budget": f"Rp {random.randint(100, 5000)} T",
        "religion": random.choice(["Islam", "Kristen", "Katolik", "Hindu", "Sekuler", "Ortodoks"]),
        "ideology": random.choice(["Demokrasi", "Komunisme", "Teokrasi", "Otokrasi", "Pancasila", "Sosiolisme"])
    })

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(centers, f, indent=2, ensure_ascii=False)

print(f"Successfully processed {len(centers)} countries centers with flags.")
