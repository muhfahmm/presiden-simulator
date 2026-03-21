import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

current_origin = None
current_dest = None
results = []

for i, line in enumerate(lines):
    if line.startswith('  "'):
        current_origin = line.split('"')[1]
    elif line.startswith('    "'):
        current_dest = line.split('"')[1]
    elif "lon" in line:
        # Match coords
        match = re.search(r'lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)', line)
        if match:
            lon = float(match.group(1))
            lat = float(match.group(2))
            # Search approach coordinates on West of Colombo: lon 75 to 79.5, lat 4 to 10
            if 75.0 <= lon <= 79.5 and 4.0 <= lat <= 10.0:
                results.append(f"Match: {current_origin} -> {current_dest} at line {i+1}: lon={lon}, lat={lat}")

with open(r"c:\fhm\EM4\tmp\near_coords.txt", 'w', encoding='utf-8') as f:
    f.write("\n".join(results))

print("Proximity sweep complete.")
