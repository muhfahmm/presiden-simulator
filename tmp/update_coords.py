import os
import re

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"

coords = {
    "afganistan": {"lat": 34.54, "lon": 69.16, "continent": "asia"},
    "albania": {"lat": 41.32, "lon": 19.81, "continent": "eropa"},
    "aljazair": {"lat": 36.73, "lon": 3.08, "continent": "afrika"},
    "andorra": {"lat": 42.50, "lon": 1.52, "continent": "eropa"},
    "angola": {"lat": -8.83, "lon": 13.23, "continent": "afrika"},
    "antigua_dan_barbuda": {"lat": 17.11, "lon": -61.84, "continent": "na"},
    "arab_saudi": {"lat": 24.77, "lon": 46.74, "continent": "asia"},
    "argentina": {"lat": -34.60, "lon": -58.38, "continent": "sa"},
    "armenia": {"lat": 40.19, "lon": 44.51, "continent": "asia"},
    "australia": {"lat": -35.28, "lon": 149.13, "continent": "oceania"}
}

def process_file(key, meta):
    continent = meta["continent"]
    filepath = os.path.join(base_dir, continent, f"{key}.ts")
    if not os.path.exists(filepath):
        print(f"Warning: file not found {filepath}")
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    lat = meta["lat"]
    lon = meta["lon"]
    
    # Replace lon
    content = re.sub(r'"lon":\s*(-?\d+\.?\d*),', f'"lon": {lon},', content)
    # Replace lat
    content = re.sub(r'"lat":\s*(-?\d+\.?\d*),', f'"lat": {lat},', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated coordinates: {key}")

for k, m in coords.items():
    process_file(k, m)

print("Update complete.")
