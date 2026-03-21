import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\regional\AsianRoutes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Match coordinate lines: { lon: 79.86, lat: 6.92 }
# We want anything around lon 77-80 and lat 5-8
coords_found = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', text)

for i, (lon, lat) in enumerate(coords_found):
    flon = float(lon)
    flat = float(lat)
    # Colombo is 79.86, 6.92
    if 78.0 <= flon <= 81.0 and 5.0 <= flat <= 8.0:
        print(f"Match found: lon={lon}, lat={lat}")
