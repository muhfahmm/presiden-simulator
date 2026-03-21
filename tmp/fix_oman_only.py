import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# First we need to REMOVE the old Oman (Muscat) entry and REINJECT it.
# Simple way: split at `"Oman (Muscat)": {`, take everything before.
if '"Oman (Muscat)": {' in content:
    content = content.split('"Oman (Muscat)": {')[0].rstrip(',\n ')

# Rebuild Oman
lines = content.split('\n')
routes_data = {}
current_origin = None
current_dest = None

for line in lines:
    if 'Coordinate' in line or 'InternationalRoute' in line: continue
    m_origin = re.search(r'(?:^  |},\s*)"([^"]+)":\s*\{', line)
    if m_origin:
        current_origin = m_origin.group(1)
        if current_origin not in routes_data:
            routes_data[current_origin] = {}
        current_dest = None
        continue
    m_dest = re.search(r'^    "([^"]+)":\s*\{', line)
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

def find_nearest_index(coords, target_lon, target_lat):
    min_dist = float('inf')
    best_idx = -1
    for i, c in enumerate(coords):
         dist = (c['lon'] - target_lon)**2 + (c['lat'] - target_lat)**2
         if dist < min_dist:
              min_dist = dist
              best_idx = i
    return best_idx

def format_route(coords):
    res = "      coords: [\n"
    for c in coords:
        res += f"        {{ lon: {c['lon']:.2f}, lat: {c['lat']:.2f} }},\n"
    res = res.rstrip(',\n') + "\n"
    res += "      ]\n"
    return res

output_ts = ',\n  "Oman (Muscat)": {\n'
for dest, coords in routes_data["Kuwait"].items():
    if coords:
        # Merge target is now { lon: 59.00, lat: 24.10 }
        # This unifies Oman with the trunk where Iran (Kanan) also unites for Suez.
        idx_connect = find_nearest_index(coords, 59.00, 24.10)
        if idx_connect != -1:
            sliced_coords = [{'lon': 58.59, 'lat': 23.58}] + coords[idx_connect:]
            output_ts += f'    "{dest}": {{\n'
            output_ts += '      color: "#f59e0b",\n'
            output_ts += format_route(sliced_coords)
            output_ts += '    },\n'

output_ts = output_ts.rstrip(',\n') + '\n  }'

idx = content.rfind('};')
if idx != -1:
    new_content = content[:idx] + output_ts + '\n' + content[idx:]
    with open(file_path, 'w', encoding='utf-8') as f:
         f.write(new_content)
    print("Injection successful.")
else:
    print("Could not find closing `};`")
