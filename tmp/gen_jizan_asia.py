import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def get_full_routes(text, key):
    res = {}
    lines = text.splitlines()
    in_origin = False
    current_dest = None
    for line in lines:
        if re.search(r'(?:^  |},\s*)"([^"]+)":\s*\{', line):
            origin = re.search(r'(?:^  |},\s*)"([^"]+)":\s*\{', line).group(1)
            in_origin = (origin == key)
            continue
        if in_origin:
            m = re.search(r'^    "([^"]+)":\s*\{', line)
            if m:
                current_dest = m.group(1)
                res[current_dest] = []
                continue
            if current_dest and '{ lon:' in line:
                m_lon = re.search(r'lon:\s*([-+]?\d*\.?\d+)', line)
                m_lat = re.search(r'lat:\s*([-+]?\d*\.?\d+)', line)
                if m_lon and m_lat:
                    res[current_dest].append({'lon': float(m_lon.group(1)), 'lat': float(m_lat.group(1))})
            if line.strip() == '},' and current_dest:
                 current_dest = None
    return res

kuwait = get_full_routes(content, "Kuwait")

def format_route(coords):
    res = "      coords: [\n"
    for c in coords:
        res += f"        {{ lon: {c['lon']:.2f}, lat: {c['lat']:.2f} }},\n"
    res = res.rstrip(',\n') + "\n"
    res += "      ]\n"
    return res

output_ts = ""

# Jizan Path common base exiting Aden into Arabian Sea
# Jizan -> Hodeidah -> Aden -> Arabian Sea (Out of Somalia area)
base_path = [
    {'lon': 42.53, 'lat': 16.88}, # Jizan
    {'lon': 42.95, 'lat': 14.80}, # Hodeidah
    {'lon': 43.40, 'lat': 12.40}, # Aden Entrance
    {'lon': 45.03, 'lat': 12.78}, # Aden
    {'lon': 50.00, 'lat': 12.00}, # Gulf of Aden Exit
    {'lon': 55.00, 'lat': 13.00}, # Arabian Sea
    {'lon': 60.00, 'lat': 14.00}, # Mid Sea
]

output_ts += ',\n  "Arab Saudi (Jizan)": {\n'

# Loop through Kuwait destinations (Except Terusan Suez)
for dest, coords in kuwait.items():
    if dest == "Terusan Suez":
        # Keep the existing curved route to Suez you already fixed
        continue
    
    # We want to merge Jizan base_path into Kuwait path
    # Kuwait coords usually are near lon 60, lat 20 or similar in the sea
    # Let's find index in Kuwait where lon is closest to 65.00 and lat is around 15-20
    best_i = -1
    min_dist = 9999
    
    # Coordinates of our last node: 60.00, 14.00
    for i, c in enumerate(coords):
        dist = abs(c['lon'] - 65.0) + abs(c['lat'] - 16.0) # Target meeting around lon 65, lat 15-20
        if dist < min_dist:
             min_dist = dist
             best_i = i
             
    if best_i != -1:
        # Build path
        sliced_kuwait = coords[best_i:]
        # Add smooth curve between 60.00, 14.00 and the meeting node if needed
        # Or just append directly
        final_coords = base_path + sliced_kuwait
        output_ts += f'    "{dest}": {{\n      color: "#f59e0b",\n{format_route(final_coords)}    }},\n'

output_ts = output_ts.rstrip(',\n') + '\n  }'

# Slice clean content directly
idx_end = content.rfind('};')
if idx_end != -1:
    new_content = content[:idx_end].rstrip(',\n ') + output_ts + '\n};\n'
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Jizan routes to Asia injected.")
else:
    print("Failed to find end of routes declaration.")
