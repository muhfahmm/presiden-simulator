import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

origin_pattern = re.compile(r'^  "([^"]+)":\s*\{', re.MULTILINE)
dest_pattern = re.compile(r'^    "([^"]+)":\s*\{', re.MULTILINE)

current_origin = None
current_dest = None
routes_data = {}

lines = content.split('\n')
for i, line in enumerate(lines):
    m_origin = origin_pattern.match(line)
    if m_origin:
        current_origin = m_origin.group(1)
        routes_data[current_origin] = {}
        continue
        
    m_dest = dest_pattern.match(line)
    if m_dest:
        if current_origin:
            current_dest = m_dest.group(1)
            routes_data[current_origin][current_dest] = []
        continue
        
    if current_origin and current_dest:
        if '{ lon:' in line:
            lon_match = re.search(r'lon:\s*([-+]?\d*\.?\d+)', line)
            lat_match = re.search(r'lat:\s*([-+]?\d*\.?\d+)', line)
            if lon_match and lat_match:
                routes_data[current_origin][current_dest].append({
                    'lon': float(lon_match.group(1)),
                    'lat': float(lat_match.group(1))
                })

output_lines = []
output_lines.append("--- Africa Routes Origins ---")
for orig, dests in routes_data.items():
    for dest in dests.keys():
        if "Afrika" in dest:
            output_lines.append(f"Origin: {orig} -> Destination: {dest}")

output_lines.append("\n--- Route: Taiwan -> Australia (Via Selat Sunda) Analysis ---")
if "Taiwan" in routes_data and "Australia (Sydney) (Via Selat Sunda)" in routes_data["Taiwan"]:
    coords = routes_data["Taiwan"]["Australia (Sydney) (Via Selat Sunda)"]
    output_lines.append("Coordinates:")
    for c in coords:
        output_lines.append(f"  {c}")
        
    for i in range(len(coords)-1):
        c1 = coords[i]
        c2 = coords[i+1]
        if (108 <= c1['lon'] <= 112 or 108 <= c2['lon'] <= 112) and ( -2 <= c1['lat'] <= 4 or -2 <= c2['lat'] <= 4):
            output_lines.append(f"\nAnalyzing Segment: {c1} -> {c2}")
            mid_lon = (c1['lon'] + c2['lon']) / 2
            mid_lat = (c1['lat'] + c2['lat']) / 2
            output_lines.append(f"Midpoint: lon={mid_lon}, lat={mid_lat}")
            
            if (c2['lon'] - c1['lon']) != 0:
                m = (c2['lat'] - c1['lat']) / (c2['lon'] - c1['lon'])
                c_val = c1['lat'] - m * c1['lon']
                output_lines.append(f"Equation: lat = {m:.3f} * lon + {c_val:.3f}")
                test_lat = m * 109.5 + c_val
                output_lines.append(f"At lon 109.5: lat = {test_lat:.3f}")
else:
    output_lines.append("Route Taiwan -> Australia (Sunda) not found in dictionary structure")

with open(r"c:\fhm\EM4\tmp\borneo_overlap.txt", 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

print("Saved to c:\\fhm\\EM4\\tmp\\borneo_overlap.txt")
